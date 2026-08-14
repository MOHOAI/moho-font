import assert from 'node:assert/strict';
import test from 'node:test';
import {
  getCatalogStats,
  getFont,
  getGoogleFontsCssUrl,
  listFonts
} from '../dist/index.js';

test('catalog contains a useful Arabic font set', () => {
  const stats = getCatalogStats();
  assert.ok(stats.total >= 35);
  assert.equal(stats.providers['google-fonts'], stats.total);
});

test('finds a family case-insensitively', () => {
  assert.equal(getFont('  cairo ')?.family, 'Cairo');
  assert.equal(getFont('does-not-exist'), undefined);
});

test('filters by search, category, and tag', () => {
  assert.ok(listFonts({ search: 'naskh' }).some((font) => font.family === 'Amiri'));
  assert.ok(listFonts({ category: 'serif' }).every((font) => font.category === 'serif'));
  assert.ok(listFonts({ tag: 'kufi' }).every((font) => font.tags.includes('kufi')));
});

test('builds a Google Fonts CSS2 URL', () => {
  const url = getGoogleFontsCssUrl('Noto Sans Arabic', { weights: [400, 700] });
  assert.equal(url, 'https://fonts.googleapis.com/css2?family=Noto+Sans+Arabic:wght@400;700&display=swap');
});

test('supports italic CSS2 axes', () => {
  const url = getGoogleFontsCssUrl('Amiri', { weights: [400], italic: true, display: 'block' });
  assert.equal(url, 'https://fonts.googleapis.com/css2?family=Amiri:ital,wght@0,400;1,400&display=block');
});

test('rejects invalid input', () => {
  assert.throws(() => getGoogleFontsCssUrl(''), /non-empty/);
  assert.throws(() => getGoogleFontsCssUrl('Cairo', { weights: [950] }), /100 to 900/);
});
