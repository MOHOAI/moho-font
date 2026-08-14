import assert from 'node:assert/strict';
import test from 'node:test';
import {
  createFontCssImport,
  createFontFaceCss,
  getCatalogFacets,
  getCatalogStats,
  getFont,
  getFontById,
  getFontCssUrl,
  getFontsourceCssUrl,
  getGoogleFontsCssUrl,
  listFonts,
} from '../dist/index.js';

test('catalog contains the synchronized Arabic font set', () => {
  const stats = getCatalogStats();
  assert.ok(stats.total >= 50);
  assert.equal(stats.providers['google-fonts'], stats.total);
  assert.ok(stats.variable > 0);
  assert.ok(stats.scripts.Arabic >= stats.total);
});

test('finds a family by name and stable id', () => {
  assert.equal(getFont('  cairo ')?.family, 'Cairo');
  assert.equal(getFontById('alexandria')?.family, 'Alexandria');
  assert.equal(getFont('does-not-exist'), undefined);
});

test('filters by search, metadata, subset, style, weight, and limit', () => {
  assert.ok(listFonts({ search: 'naskh' }).some((font) => font.family === 'Amiri'));
  assert.ok(listFonts({ category: 'serif' }).every((font) => font.category === 'serif'));
  assert.ok(listFonts({ tag: 'kufi' }).every((font) => font.tags.includes('kufi')));
  assert.ok(listFonts({ subset: 'arabic', variable: true, weight: 700, limit: 3 }).length <= 3);
  assert.ok(listFonts({ style: 'italic' }).every((font) => font.styles.includes('italic')));
});

test('exposes catalog facets', () => {
  const facets = getCatalogFacets();
  assert.ok(facets.categories.includes('serif'));
  assert.ok(facets.subsets.includes('arabic'));
  assert.ok(facets.weights.includes(400));
});

test('builds Google Fonts CSS2 URL', () => {
  const url = getGoogleFontsCssUrl('Noto Sans Arabic', { weights: [400, 700] });
  assert.equal(url, 'https://fonts.googleapis.com/css2?family=Noto+Sans+Arabic:wght@400;700&display=swap');
});

test('supports Fontsource CSS URL and provider switch', () => {
  const url = getFontsourceCssUrl('Cairo', { weight: 400 });
  assert.equal(url, 'https://cdn.jsdelivr.net/npm/@fontsource/cairo@latest/400.css');
  assert.equal(getFontCssUrl('Cairo', { source: 'fontsource', fontsource: { weight: 700 } }), 'https://cdn.jsdelivr.net/npm/@fontsource/cairo@latest/700.css');
});

test('creates CSS imports and self-hosted font-face rules', () => {
  assert.match(createFontCssImport('Amiri'), /^@import url\("https:\/\/fonts\.googleapis\.com/);
  assert.match(createFontFaceCss('https://example.test/amiri.woff2', { family: 'Amiri' }), /font-family: "Amiri"/);
});

test('supports italic CSS2 axes', () => {
  const url = getGoogleFontsCssUrl('Amiri', { weights: [400], italic: true, display: 'block' });
  assert.equal(url, 'https://fonts.googleapis.com/css2?family=Amiri:ital,wght@0,400;1,400&display=block');
});

test('rejects invalid input', () => {
  assert.throws(() => getGoogleFontsCssUrl(''), /non-empty/);
  assert.throws(() => getGoogleFontsCssUrl('Cairo', { weights: [950] }), /100 to 900/);
  assert.throws(() => listFonts({ limit: -1 }), /non-negative/);
  assert.throws(() => getFontsourceCssUrl('Cairo', { weight: 950 }), /one of/);
});
