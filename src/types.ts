export type FontLicense = 'OFL-1.1' | 'Apache-2.0' | 'UFL-1.0' | 'unknown';

export type FontCategory = 'serif' | 'sans-serif' | 'display' | 'handwriting' | 'monospace';

export interface ArabicFont {
  readonly family: string;
  readonly provider: 'google-fonts' | 'custom';
  readonly license: FontLicense;
  readonly category: FontCategory;
  readonly scripts: readonly string[];
  readonly weights: readonly number[];
  readonly styles: readonly ('normal' | 'italic')[];
  readonly sourceUrl: string;
  readonly cssUrl: string;
  readonly tags: readonly string[];
}

export interface FontQuery {
  readonly search?: string;
  readonly category?: FontCategory;
  readonly tag?: string;
  readonly provider?: ArabicFont['provider'];
  readonly license?: FontLicense;
}

export interface GoogleFontsCssOptions {
  readonly weights?: readonly number[];
  readonly italic?: boolean;
  readonly display?: 'auto' | 'block' | 'swap' | 'fallback' | 'optional';
}
