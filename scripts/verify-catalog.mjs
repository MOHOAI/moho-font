import { readFile } from 'node:fs/promises';

const catalog = JSON.parse(await readFile(new URL('../data/fonts.json', import.meta.url), 'utf8'));
const allowedLicenses = new Set(catalog.licensePolicy);
const errors = [];
const ids = new Set();
const families = new Set();

if (catalog.schemaVersion !== 1) errors.push(`Unsupported schemaVersion: ${catalog.schemaVersion}`);
if (!catalog.source.startsWith('https://')) errors.push('Catalog source must be HTTPS');
if (!catalog.fonts.length) errors.push('Catalog must not be empty');

for (const font of catalog.fonts) {
  if (!font.id || ids.has(font.id)) errors.push(`Duplicate or missing id: ${font.id ?? '<missing>'}`);
  if (!font.family || families.has(font.family)) errors.push(`Duplicate or missing family: ${font.family ?? '<missing>'}`);
  ids.add(font.id);
  families.add(font.family);
  if (!allowedLicenses.has(font.license)) errors.push(`${font.family}: unsupported license ${font.license}`);
  for (const field of ['sourceUrl', 'cssUrl', 'fontsourcePackage', 'fontsourceCssUrl']) {
    if (!font[field]) errors.push(`${font.family}: missing ${field}`);
  }
  for (const weight of font.weights ?? []) {
    if (!Number.isInteger(weight) || weight < 100 || weight > 900) errors.push(`${font.family}: invalid weight ${weight}`);
  }
  if (!font.subsets?.includes('arabic')) errors.push(`${font.family}: missing Arabic subset`);
  if (!font.scripts?.includes('Arabic')) errors.push(`${font.family}: missing Arabic script`);
}

if (errors.length) {
  console.error(`Catalog verification failed with ${errors.length} error(s):`);
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(`Catalog verified: ${catalog.fonts.length} families, ${ids.size} unique ids, licenses and source URLs present.`);
