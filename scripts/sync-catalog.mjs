import { mkdir, writeFile } from 'node:fs/promises';

const endpoint = process.env.FONT_CATALOG_URL ?? 'https://api.fontsource.org/v1/fonts';
const response = await fetch(endpoint, { headers: { accept: 'application/json' } });
if (!response.ok) throw new Error(`Font catalog request failed: ${response.status}`);
const source = await response.json();

const categories = new Set(['serif', 'sans-serif', 'display', 'handwriting', 'monospace']);
const licenses = new Set(['OFL-1.1', 'Apache-2.0', 'UFL-1.0']);
const scriptNames = { arabic: 'Arabic', latin: 'Latin', 'latin-ext': 'Latin Extended', persian: 'Persian', urdu: 'Urdu' };
const slug = (family) => encodeURIComponent(family).replaceAll('%20', '+');
const unique = (values) => [...new Set(values.filter(Boolean))];
const semanticTags = (id, family) => {
  const value = `${id} ${family}`.toLocaleLowerCase();
  const tags = [];
  if (/amiri|markazi|mirza|naskh|ruwudu|scheherazade|noto-serif-arabic/.test(value)) tags.push('naskh');
  if (/kufi/.test(value)) tags.push('kufi');
  if (/ruqaa/.test(value)) tags.push('ruqaa', 'calligraphic');
  if (/nastaliq|gulzar|parastoo/.test(value)) tags.push('nastaliq', 'calligraphic');
  if (/calligraph|handwriting|katibeh|lateef|vibes|zain/.test(value)) tags.push('calligraphic');
  return tags;
};

function normalizeLicense(value) {
  if (value === 'OFL-1.1' || value === 'OFL') return 'OFL-1.1';
  if (value === 'Apache-2.0' || value === 'APACHE2') return 'Apache-2.0';
  if (value === 'UFL-1.0' || value === 'UFL') return 'UFL-1.0';
  return 'unknown';
}

function cssUrl(item) {
  const family = slug(item.family);
  const weights = [...item.weights].sort((a, b) => a - b);
  const hasItalic = item.styles.includes('italic');
  const normal = weights.map((weight) => `0,${weight}`).join(';');
  if (!hasItalic) return `https://fonts.googleapis.com/css2?family=${family}:wght@${weights.join(';')}&display=swap`;
  const italic = weights.map((weight) => `1,${weight}`).join(';');
  return `https://fonts.googleapis.com/css2?family=${family}:ital,wght@${normal};${italic}&display=swap`;
}

const fonts = source
  .filter((item) => Array.isArray(item.subsets) && item.subsets.includes('arabic'))
  .map((item) => {
    const license = normalizeLicense(item.license);
    const category = categories.has(item.category) ? item.category : 'sans-serif';
    const subsets = unique(item.subsets);
    const tags = unique([
      'arabic',
      'open-source',
      category,
      item.variable ? 'variable' : 'static',
      ...subsets.filter((subset) => !['arabic', 'latin', 'latin-ext'].includes(subset)),
      ...semanticTags(item.id, item.family),
    ]);
    const provider = item.type === 'google' ? 'google-fonts' : 'fontsource';
    const sourceUrl = provider === 'google-fonts'
      ? `https://fonts.google.com/specimen/${slug(item.family)}`
      : `https://fontsource.org/fonts/${item.id}`;
    return {
      id: item.id,
      family: item.family,
      provider,
      license,
      category,
      scripts: unique(subsets.map((subset) => scriptNames[subset] ?? subset)),
      subsets,
      weights: [...item.weights].sort((a, b) => a - b),
      styles: [...item.styles].sort(),
      variable: Boolean(item.variable),
      lastModified: item.lastModified ?? null,
      sourceUrl,
      cssUrl: cssUrl(item),
      fontsourcePackage: `@fontsource/${item.id}`,
      fontsourceCssUrl: `https://cdn.jsdelivr.net/npm/@fontsource/${item.id}@latest/400.css`,
      tags,
    };
  })
  .filter((item) => licenses.has(item.license))
  .sort((a, b) => a.family.localeCompare(b.family, 'en'));

if (fonts.length === 0) throw new Error('No Arabic fonts with recognized licenses were found');

const output = {
  schemaVersion: 1,
  catalogVersion: new Date().toISOString().slice(0, 10),
  generatedAt: new Date().toISOString(),
  source: endpoint,
  licensePolicy: ['OFL-1.1', 'Apache-2.0', 'UFL-1.0'],
  fonts,
};

await mkdir(new URL('../data/', import.meta.url), { recursive: true });
await writeFile(new URL('../data/fonts.json', import.meta.url), `${JSON.stringify(output, null, 2)}\n`);
console.log(`Synced ${fonts.length} Arabic font families from ${endpoint}`);
