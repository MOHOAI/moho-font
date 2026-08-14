import { readFile, writeFile } from 'node:fs/promises';

const catalog = JSON.parse(await readFile(new URL('../data/fonts.json', import.meta.url), 'utf8'));
const ts = `import type { ArabicFont } from './types.js';

/** Generated from data/fonts.json. Run npm run catalog:generate to refresh. */
export const arabicFonts = ${JSON.stringify(catalog.fonts, null, 2)} as const satisfies readonly ArabicFont[];

export const catalogVersion = ${JSON.stringify(catalog.catalogVersion)};
export const catalogGeneratedAt = ${JSON.stringify(catalog.generatedAt)};
export const catalogSource = ${JSON.stringify(catalog.source)};
`;
await writeFile(new URL('../src/catalog.ts', import.meta.url), ts);

const py = (value) => JSON.stringify(value, null, 2).replace(/true/g, 'True').replace(/false/g, 'False').replace(/null/g, 'None');
const raw = (value) => ({ raw: value });
const entries = catalog.fonts.map((font) => `    Font(\n${[
  ['id', font.id],
  ['family', font.family],
  ['provider', font.provider],
  ['license', font.license],
  ['category', font.category],
  ['scripts', raw(`tuple(${py(font.scripts)})`)],
  ['subsets', raw(`tuple(${py(font.subsets)})`)],
  ['weights', raw(`tuple(${py(font.weights)})`)],
  ['styles', raw(`tuple(${py(font.styles)})`)],
  ['variable', font.variable],
  ['last_modified', font.lastModified],
  ['source_url', font.sourceUrl],
  ['css_url', font.cssUrl],
  ['fontsource_package', font.fontsourcePackage],
  ['fontsource_css_url', font.fontsourceCssUrl],
  ['tags', raw(`tuple(${py(font.tags)})`)],
].map(([key, value]) => `        ${key}=${value && typeof value === 'object' && 'raw' in value ? value.raw : py(value)}`).join(',\n')}\n    )`);
const python = `from __future__ import annotations

from dataclasses import dataclass
from typing import Literal, Optional

FontCategory = Literal["serif", "sans-serif", "display", "handwriting", "monospace"]
FontLicense = Literal["OFL-1.1", "Apache-2.0", "UFL-1.0", "unknown"]
FontProvider = Literal["google-fonts", "fontsource", "custom"]


@dataclass(frozen=True)
class Font:
    id: str
    family: str
    provider: FontProvider
    license: FontLicense
    category: FontCategory
    scripts: tuple[str, ...]
    subsets: tuple[str, ...]
    weights: tuple[int, ...]
    styles: tuple[str, ...]
    variable: bool
    last_modified: Optional[str]
    source_url: str
    css_url: str
    fontsource_package: str
    fontsource_css_url: str
    tags: tuple[str, ...]


FONT_CATALOG: tuple[Font, ...] = (\n${entries.join(',\n')}\n)\n\nCATALOG_VERSION = ${JSON.stringify(catalog.catalogVersion)}\nCATALOG_SOURCE = ${JSON.stringify(catalog.source)}\nCATALOG_GENERATED_AT = ${JSON.stringify(catalog.generatedAt)}\n`;
await writeFile(new URL('../python/src/moho_font/catalog.py', import.meta.url), python);
console.log(`Generated ${catalog.fonts.length} JavaScript and Python catalog entries`);
