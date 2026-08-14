export type FontLicense = 'OFL-1.1' | 'Apache-2.0' | 'UFL-1.0' | 'unknown';

export type FontCategory = 'serif' | 'sans-serif' | 'display' | 'handwriting' | 'monospace';

export type FontProvider = 'google-fonts' | 'fontsource' | 'custom';

export type FontStyle = 'normal' | 'italic';

export interface ArabicFont {
  readonly id: string;
  readonly family: string;
  readonly provider: FontProvider;
  readonly license: FontLicense;
  readonly category: FontCategory;
  readonly scripts: readonly string[];
  readonly subsets: readonly string[];
  readonly weights: readonly number[];
  readonly styles: readonly FontStyle[];
  readonly variable: boolean;
  readonly lastModified: string | null;
  readonly sourceUrl: string;
  readonly cssUrl: string;
  readonly fontsourcePackage: string;
  readonly fontsourceCssUrl: string;
  readonly tags: readonly string[];
}

export type FontSortKey = 'family' | 'lastModified' | 'weightCount';

export interface FontQuery {
  readonly search?: string;
  readonly category?: FontCategory;
  readonly tag?: string;
  readonly provider?: FontProvider;
  readonly license?: FontLicense;
  readonly subset?: string;
  readonly script?: string;
  readonly style?: FontStyle;
  readonly weight?: number;
  readonly variable?: boolean;
  readonly sort?: FontSortKey;
  readonly descending?: boolean;
  readonly limit?: number;
}

export interface GoogleFontsCssOptions {
  readonly weights?: readonly number[];
  readonly italic?: boolean;
  readonly display?: 'auto' | 'block' | 'swap' | 'fallback' | 'optional';
}

export interface FontsourceCssOptions {
  readonly weight?: number;
  readonly style?: FontStyle;
}

export interface FontCssOptions extends GoogleFontsCssOptions {
  readonly source?: 'google-fonts' | 'fontsource';
  readonly fontsource?: FontsourceCssOptions;
}

export interface FontFaceOptions {
  readonly family?: string;
  readonly weight?: number | `${number} ${number}`;
  readonly style?: FontStyle;
  readonly display?: 'auto' | 'block' | 'swap' | 'fallback' | 'optional';
}
