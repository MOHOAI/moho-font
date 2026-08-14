import type { ArabicFont, FontCategory, FontLicense } from './types.js';

const google = (family: string, license: FontLicense = 'OFL-1.1'): ArabicFont => ({
  family,
  provider: 'google-fonts',
  license,
  category: 'sans-serif',
  scripts: ['Arabic', 'Latin'],
  weights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  styles: ['normal'],
  sourceUrl: `https://fonts.google.com/specimen/${encodeURIComponent(family).replace(/%20/g, '+')}`,
  cssUrl: `https://fonts.googleapis.com/css2?family=${encodeURIComponent(family).replace(/%20/g, '+')}:wght@100..900&display=swap`,
  tags: ['arabic', 'open-source']
});

const withCategory = (font: ArabicFont, category: FontCategory, tags: string[], license?: FontLicense): ArabicFont => ({
  ...font,
  category,
  ...(license ? { license } : {}),
  tags: [...new Set([...font.tags, ...tags])]
});

export const arabicFonts: readonly ArabicFont[] = [
  withCategory(google('Afacad Arabic'), 'sans-serif', ['modern', 'ui']),
  withCategory(google('Almarai'), 'sans-serif', ['modern', 'ui']),
  withCategory(google('Amiri'), 'serif', ['naskh', 'classical', 'book']),
  withCategory(google('Aref Ruqaa'), 'display', ['ruqaa', 'calligraphic']),
  withCategory(google('Aref Ruqaa Ink'), 'display', ['ruqaa', 'calligraphic', 'ink']),
  withCategory(google('Badeen Display'), 'display', ['display', 'headline']),
  withCategory(google('Baloo Bhaijaan 2'), 'display', ['rounded', 'playful']),
  withCategory(google('Cairo'), 'sans-serif', ['modern', 'ui', 'popular']),
  withCategory(google('Cairo Play'), 'display', ['playful', 'display']),
  withCategory(google('Changa'), 'display', ['geometric', 'headline']),
  withCategory(google('El Messiri'), 'sans-serif', ['modern', 'elegant']),
  withCategory(google('Farsan'), 'display', ['handwriting', 'display']),
  withCategory(google('Fustat'), 'sans-serif', ['modern', 'ui']),
  withCategory(google('Noto Nastaliq Urdu'), 'serif', ['nastaliq', 'calligraphic']),
  withCategory(google('Gulzar'), 'serif', ['nastaliq', 'calligraphic']),
  withCategory(google('Handjet'), 'display', ['experimental', 'display']),
  withCategory(google('Harmattan'), 'sans-serif', ['west-african', 'reading']),
  withCategory(google('IBM Plex Sans Arabic'), 'sans-serif', ['professional', 'ui']),
  withCategory(google('Jomhuria'), 'display', ['display', 'headline']),
  withCategory(google('Kufam'), 'sans-serif', ['kufi', 'modern']),
  withCategory(google('Lalezar'), 'display', ['display', 'headline']),
  withCategory(google('Lemonada'), 'sans-serif', ['rounded', 'display']),
  withCategory(google('Mada'), 'sans-serif', ['reading', 'ui']),
  withCategory(google('Marhey'), 'display', ['display', 'rounded']),
  withCategory(google('Markazi Text'), 'serif', ['reading', 'naskh']),
  withCategory(google('Mirza'), 'serif', ['calligraphic', 'reading']),
  withCategory(google('Noto Kufi Arabic'), 'sans-serif', ['kufi', 'ui', 'noto']),
  withCategory(google('Noto Naskh Arabic'), 'serif', ['naskh', 'reading', 'noto']),
  withCategory(google('Noto Sans Naskh Arabic'), 'sans-serif', ['naskh', 'reading', 'noto']),
  withCategory(google('Noto Sans Arabic'), 'sans-serif', ['ui', 'reading', 'noto']),
  withCategory(google('Noto Serif Arabic'), 'serif', ['serif', 'reading', 'noto']),
  withCategory(google('Qahiri'), 'display', ['display', 'headline']),
  withCategory(google('Rakkas'), 'display', ['display', 'calligraphic']),
  withCategory(google('Readex Pro'), 'sans-serif', ['technical', 'ui']),
  withCategory(google('Reem Kufi'), 'sans-serif', ['kufi', 'modern']),
  withCategory(google('Reem Kufi Fun'), 'display', ['kufi', 'playful']),
  withCategory(google('Ruwudu'), 'serif', ['reading', 'classical']),
  withCategory(google('Rubik'), 'sans-serif', ['modern', 'ui']),
  withCategory(google('Scheherazade New'), 'serif', ['naskh', 'reading', 'classical']),
  withCategory(google('Tajawal'), 'sans-serif', ['modern', 'ui', 'popular']),
  withCategory(google('Ubuntu', 'UFL-1.0'), 'sans-serif', ['ui', 'technical']),
  withCategory(google('Vazirmatn'), 'sans-serif', ['persian', 'ui', 'reading']),
  withCategory(google('Zain'), 'display', ['handwriting', 'display']),
  withCategory(google('Diodum'), 'display', ['display', 'headline']),
  withCategory(google('Anek Arabic'), 'sans-serif', ['variable', 'ui'])
];

export const catalogVersion = '2026-08-14';
