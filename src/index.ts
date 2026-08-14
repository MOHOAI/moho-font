import { arabicFonts, catalogVersion } from './catalog.js';
import type { ArabicFont, FontQuery, GoogleFontsCssOptions } from './types.js';

export type { ArabicFont, FontCategory, FontLicense, FontQuery, GoogleFontsCssOptions } from './types.js';
export { arabicFonts, catalogVersion } from './catalog.js';

const normalize = (value: string): string => value.trim().toLocaleLowerCase();

const familySlug = (family: string): string => encodeURIComponent(family.trim()).replace(/%20/g, '+');

/** Return all catalog entries, optionally filtered by a query. */
export function listFonts(query: FontQuery = {}): ArabicFont[] {
  const search = query.search ? normalize(query.search) : undefined;
  const tag = query.tag ? normalize(query.tag) : undefined;

  return arabicFonts.filter((font) => {
    const matchesSearch = !search || [font.family, ...font.tags, ...font.scripts]
      .some((value) => normalize(value).includes(search));
    const matchesCategory = !query.category || font.category === query.category;
    const matchesTag = !tag || font.tags.some((value) => normalize(value) === tag);
    const matchesProvider = !query.provider || font.provider === query.provider;
    const matchesLicense = !query.license || font.license === query.license;
    return matchesSearch && matchesCategory && matchesTag && matchesProvider && matchesLicense;
  });
}

/** Find one family by its exact name, ignoring letter case and surrounding spaces. */
export function getFont(family: string): ArabicFont | undefined {
  const wanted = normalize(family);
  return arabicFonts.find((font) => normalize(font.family) === wanted);
}

/** Build a Google Fonts CSS2 URL for a catalog family or a custom family name. */
export function getGoogleFontsCssUrl(
  family: string,
  options: GoogleFontsCssOptions = {}
): string {
  if (!family.trim()) throw new TypeError('family must be a non-empty string');

  const weights = [...new Set(options.weights ?? [400, 700])].sort((a, b) => a - b);
  if (weights.some((weight) => !Number.isInteger(weight) || weight < 100 || weight > 900)) {
    throw new RangeError('weights must contain integers from 100 to 900');
  }

  const display = options.display ?? 'swap';
  if (!['auto', 'block', 'swap', 'fallback', 'optional'].includes(display)) {
    throw new RangeError('display must be one of auto, block, swap, fallback, optional');
  }

  const axis = options.italic
    ? `ital,wght@${weights.map((weight) => `0,${weight}`).join(';')};${weights.map((weight) => `1,${weight}`).join(';')}`
    : `wght@${weights.join(';')}`;
  return `https://fonts.googleapis.com/css2?family=${familySlug(family)}:${axis}&display=${display}`;
}

/** Create attributes suitable for a preload or stylesheet link element. */
export function createGoogleFontsLink(
  family: string,
  options: GoogleFontsCssOptions = {}
): { rel: 'stylesheet'; href: string } {
  return { rel: 'stylesheet', href: getGoogleFontsCssUrl(family, options) };
}

/** Inject a Google Fonts stylesheet in a browser and resolve when it loads. */
export function loadGoogleFont(
  family: string,
  options: GoogleFontsCssOptions = {}
): Promise<HTMLLinkElement> {
  if (typeof document === 'undefined') {
    return Promise.reject(new Error('loadGoogleFont can only be used in a browser environment'));
  }

  const href = getGoogleFontsCssUrl(family, options);
  const existing = document.querySelector<HTMLLinkElement>(`link[rel="stylesheet"][href="${href}"]`);
  if (existing) return Promise.resolve(existing);

  return new Promise((resolve, reject) => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    link.onload = () => resolve(link);
    link.onerror = () => reject(new Error(`Unable to load Google Font: ${family}`));
    document.head.appendChild(link);
  });
}

export function getCatalogStats(): {
  readonly total: number;
  readonly providers: Record<string, number>;
  readonly licenses: Record<string, number>;
  readonly categories: Record<string, number>;
} {
  const count = (values: readonly string[]): Record<string, number> => values.reduce<Record<string, number>>((result, value) => {
    result[value] = (result[value] ?? 0) + 1;
    return result;
  }, {});

  return {
    total: arabicFonts.length,
    providers: count(arabicFonts.map((font) => font.provider)),
    licenses: count(arabicFonts.map((font) => font.license)),
    categories: count(arabicFonts.map((font) => font.category))
  };
}
