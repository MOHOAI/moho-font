import { arabicFonts, catalogGeneratedAt, catalogSource, catalogVersion } from './catalog.js';
import type {
  ArabicFont,
  FontCssOptions,
  FontFaceOptions,
  FontQuery,
  FontsourceCssOptions,
  GoogleFontsCssOptions,
} from './types.js';

export type {
  ArabicFont,
  FontCategory,
  FontCssOptions,
  FontFaceOptions,
  FontLicense,
  FontProvider,
  FontQuery,
  FontSortKey,
  FontStyle,
  FontsourceCssOptions,
  GoogleFontsCssOptions,
} from './types.js';
export { arabicFonts, catalogGeneratedAt, catalogSource, catalogVersion } from './catalog.js';

const normalize = (value: string): string => value.trim().toLocaleLowerCase();
const familySlug = (family: string): string => encodeURIComponent(family.trim()).replace(/%20/g, '+');
const sourceSlug = (value: string): string => encodeURIComponent(value.trim()).replace(/%20/g, '-').toLocaleLowerCase();

function assertLimit(limit: number | undefined): void {
  if (limit !== undefined && (!Number.isInteger(limit) || limit < 0)) {
    throw new RangeError('limit must be a non-negative integer');
  }
}

function resolveFont(fontOrFamily: ArabicFont | string): ArabicFont | undefined {
  if (typeof fontOrFamily !== 'string') return fontOrFamily;
  const wanted = normalize(fontOrFamily);
  return arabicFonts.find((font) => normalize(font.family) === wanted || normalize(font.id) === wanted);
}

function resolveRequiredFont(fontOrFamily: ArabicFont | string): ArabicFont {
  const font = resolveFont(fontOrFamily);
  if (!font) throw new Error(`Font not found in catalog: ${String(fontOrFamily)}`);
  return font;
}

/** Return catalog entries filtered by metadata, with deterministic sorting and limiting. */
export function listFonts(query: FontQuery = {}): ArabicFont[] {
  assertLimit(query.limit);
  const search = query.search ? normalize(query.search) : undefined;
  const tag = query.tag ? normalize(query.tag) : undefined;
  const subset = query.subset ? normalize(query.subset) : undefined;
  const script = query.script ? normalize(query.script) : undefined;
  const result = arabicFonts.filter((font) => {
    const searchable = [font.id, font.family, ...font.tags, ...font.scripts, ...font.subsets];
    const matchesSearch = !search || searchable.some((value) => normalize(value).includes(search));
    const matchesCategory = !query.category || font.category === query.category;
    const matchesTag = !tag || font.tags.some((value) => normalize(value) === tag);
    const matchesProvider = !query.provider || font.provider === query.provider;
    const matchesLicense = !query.license || font.license === query.license;
    const matchesSubset = !subset || font.subsets.some((value) => normalize(value) === subset);
    const matchesScript = !script || font.scripts.some((value) => normalize(value) === script);
    const matchesStyle = !query.style || (font.styles as readonly string[]).includes(query.style);
    const matchesWeight = query.weight === undefined || (font.weights as readonly number[]).includes(query.weight);
    const matchesVariable = query.variable === undefined || font.variable === query.variable;
    return matchesSearch && matchesCategory && matchesTag && matchesProvider && matchesLicense
      && matchesSubset && matchesScript && matchesStyle && matchesWeight && matchesVariable;
  });

  const sort = query.sort ?? 'family';
  result.sort((left, right) => {
    let comparison = 0;
    if (sort === 'family') comparison = left.family.localeCompare(right.family, 'ar');
    if (sort === 'lastModified') comparison = (left.lastModified ?? '').localeCompare(right.lastModified ?? '');
    if (sort === 'weightCount') comparison = left.weights.length - right.weights.length;
    return query.descending ? -comparison : comparison;
  });
  return query.limit === undefined ? result : result.slice(0, query.limit);
}

/** Find a family by its exact family name or stable catalog id. */
export function getFont(familyOrId: string): ArabicFont | undefined {
  return resolveFont(familyOrId);
}

/** Find a family by its stable catalog id. */
export function getFontById(id: string): ArabicFont | undefined {
  return arabicFonts.find((font) => normalize(font.id) === normalize(id));
}

/** Return all tags, scripts, subsets, providers, licenses, categories, and weights in the catalog. */
export function getCatalogFacets(): {
  readonly categories: readonly string[];
  readonly licenses: readonly string[];
  readonly providers: readonly string[];
  readonly scripts: readonly string[];
  readonly subsets: readonly string[];
  readonly tags: readonly string[];
  readonly weights: readonly number[];
} {
  const strings = (values: readonly string[]): string[] => [...new Set(values)].sort((a, b) => a.localeCompare(b));
  return {
    categories: strings(arabicFonts.map((font) => font.category)),
    licenses: strings(arabicFonts.map((font) => font.license)),
    providers: strings(arabicFonts.map((font) => font.provider)),
    scripts: strings(arabicFonts.flatMap((font) => font.scripts)),
    subsets: strings(arabicFonts.flatMap((font) => font.subsets)),
    tags: strings(arabicFonts.flatMap((font) => font.tags)),
    weights: [...new Set(arabicFonts.flatMap((font) => font.weights))].sort((a, b) => a - b),
  };
}

function validateWeights(weights: readonly number[]): number[] {
  const result = [...new Set(weights)].sort((a, b) => a - b);
  if (result.some((weight) => !Number.isInteger(weight) || weight < 100 || weight > 900)) {
    throw new RangeError('weights must contain integers from 100 to 900');
  }
  return result;
}

/** Build a Google Fonts CSS2 URL for a catalog family or a custom family name. */
export function getGoogleFontsCssUrl(
  family: string,
  options: GoogleFontsCssOptions = {},
): string {
  if (!family.trim()) throw new TypeError('family must be a non-empty string');
  const weights = validateWeights(options.weights ?? [400, 700]);
  const display = options.display ?? 'swap';
  if (!['auto', 'block', 'swap', 'fallback', 'optional'].includes(display)) {
    throw new RangeError('display must be one of auto, block, swap, fallback, optional');
  }
  const axis = options.italic
    ? `ital,wght@${weights.map((weight) => `0,${weight}`).join(';')};${weights.map((weight) => `1,${weight}`).join(';')}`
    : `wght@${weights.join(';')}`;
  return `https://fonts.googleapis.com/css2?family=${familySlug(family)}:${axis}&display=${display}`;
}

/** Build a Fontsource CDN stylesheet URL for a catalog family. */
export function getFontsourceCssUrl(
  fontOrFamily: ArabicFont | string,
  options: FontsourceCssOptions = {},
): string {
  const font = resolveRequiredFont(fontOrFamily);
  const weight = options.weight ?? font.weights[0] ?? 400;
  if (!Number.isInteger(weight) || !font.weights.includes(weight)) {
    throw new RangeError(`weight must be one of: ${font.weights.join(', ')}`);
  }
  const style = options.style ?? 'normal';
  if (!font.styles.includes(style)) throw new RangeError(`style must be one of: ${font.styles.join(', ')}`);
  const suffix = style === 'italic' ? `${weight}-italic` : String(weight);
  return `https://cdn.jsdelivr.net/npm/${font.fontsourcePackage}@latest/${suffix}.css`;
}

/** Build a provider-specific stylesheet URL. */
export function getFontCssUrl(fontOrFamily: ArabicFont | string, options: FontCssOptions = {}): string {
  const source = options.source ?? 'google-fonts';
  if (source === 'fontsource') return getFontsourceCssUrl(fontOrFamily, options.fontsource);
  const family = typeof fontOrFamily === 'string' ? fontOrFamily : fontOrFamily.family;
  return getGoogleFontsCssUrl(family, options);
}

/** Create attributes suitable for a preload or stylesheet link element. */
export function createGoogleFontsLink(
  family: string,
  options: GoogleFontsCssOptions = {},
): { rel: 'stylesheet'; href: string } {
  return { rel: 'stylesheet', href: getGoogleFontsCssUrl(family, options) };
}

/** Create a CSS @import statement for a provider-specific stylesheet. */
export function createFontCssImport(fontOrFamily: ArabicFont | string, options: FontCssOptions = {}): string {
  return `@import url("${getFontCssUrl(fontOrFamily, options)}");`;
}

/** Create a font-face rule for self-hosted files supplied by the caller. */
export function createFontFaceCss(
  sourceUrl: string,
  options: FontFaceOptions = {},
): string {
  if (!sourceUrl.trim()) throw new TypeError('sourceUrl must be a non-empty string');
  const family = options.family ?? 'Moho Font';
  const weight = options.weight ?? 400;
  const style = options.style ?? 'normal';
  const display = options.display ?? 'swap';
  return [
    '@font-face {',
    `  font-family: "${family.replace(/"/g, '\\\"')}";`,
    `  src: url("${sourceUrl}") format("woff2");`,
    `  font-weight: ${weight};`,
    `  font-style: ${style};`,
    `  font-display: ${display};`,
    '}',
  ].join('\n');
}

/** Inject a provider-specific stylesheet in a browser and resolve when it loads. */
export function loadFont(
  fontOrFamily: ArabicFont | string,
  options: FontCssOptions = {},
): Promise<HTMLLinkElement> {
  if (typeof document === 'undefined') return Promise.reject(new Error('loadFont can only be used in a browser environment'));
  const href = getFontCssUrl(fontOrFamily, options);
  const existing = Array.from(document.querySelectorAll<HTMLLinkElement>('link[rel="stylesheet"]'))
    .find((link) => link.href === href || link.getAttribute('href') === href);
  if (existing) return Promise.resolve(existing);
  return new Promise((resolve, reject) => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    link.onload = () => resolve(link);
    link.onerror = () => reject(new Error(`Unable to load font stylesheet: ${href}`));
    document.head.appendChild(link);
  });
}

/** Backwards-compatible Google Fonts browser loader. */
export function loadGoogleFont(
  family: string,
  options: GoogleFontsCssOptions = {},
): Promise<HTMLLinkElement> {
  return loadFont(family, options);
}

export function getCatalogStats(): {
  readonly total: number;
  readonly variable: number;
  readonly providers: Record<string, number>;
  readonly licenses: Record<string, number>;
  readonly categories: Record<string, number>;
  readonly scripts: Record<string, number>;
} {
  const count = (values: readonly string[]): Record<string, number> => values.reduce<Record<string, number>>((result, value) => {
    result[value] = (result[value] ?? 0) + 1;
    return result;
  }, {});
  return {
    total: arabicFonts.length,
    variable: arabicFonts.filter((font) => font.variable).length,
    providers: count(arabicFonts.map((font) => font.provider)),
    licenses: count(arabicFonts.map((font) => font.license)),
    categories: count(arabicFonts.map((font) => font.category)),
    scripts: count(arabicFonts.flatMap((font) => font.scripts)),
  };
}
