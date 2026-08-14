from __future__ import annotations

from collections import Counter
from typing import Iterable, Optional, Union
from urllib.parse import quote

from .catalog import (
    CATALOG_GENERATED_AT,
    CATALOG_SOURCE,
    CATALOG_VERSION,
    FONT_CATALOG,
    Font,
    FontCategory,
    FontLicense,
    FontProvider,
)

__version__ = "0.3.0"
FontLike = Union[Font, str]


def _normalize(value: str) -> str:
    return value.strip().casefold()


def _resolve_font(font_or_family: FontLike) -> Optional[Font]:
    if isinstance(font_or_family, Font):
        return font_or_family
    wanted = _normalize(font_or_family)
    return next(
        (
            font
            for font in FONT_CATALOG
            if _normalize(font.family) == wanted or _normalize(font.id) == wanted
        ),
        None,
    )


def _required_font(font_or_family: FontLike) -> Font:
    font = _resolve_font(font_or_family)
    if font is None:
        raise LookupError(f"Font not found in catalog: {font_or_family}")
    return font


def list_fonts(
    *,
    search: Optional[str] = None,
    category: Optional[FontCategory] = None,
    tag: Optional[str] = None,
    provider: Optional[FontProvider] = None,
    license: Optional[FontLicense] = None,
    subset: Optional[str] = None,
    script: Optional[str] = None,
    style: Optional[str] = None,
    weight: Optional[int] = None,
    variable: Optional[bool] = None,
    sort: str = "family",
    descending: bool = False,
    limit: Optional[int] = None,
) -> list[Font]:
    """Return catalog entries filtered, sorted, and optionally limited by metadata."""
    if limit is not None and (not isinstance(limit, int) or limit < 0):
        raise ValueError("limit must be a non-negative integer")
    if sort not in {"family", "lastModified", "weightCount"}:
        raise ValueError("sort must be family, lastModified, or weightCount")
    normalized_search = _normalize(search) if search else None
    normalized_tag = _normalize(tag) if tag else None
    normalized_subset = _normalize(subset) if subset else None
    normalized_script = _normalize(script) if script else None
    result = []
    for font in FONT_CATALOG:
        searchable = (font.id, font.family, *font.tags, *font.scripts, *font.subsets)
        matches_search = not normalized_search or any(
            normalized_search in _normalize(value) for value in searchable
        )
        matches = (
            matches_search
            and (category is None or font.category == category)
            and (normalized_tag is None or any(_normalize(value) == normalized_tag for value in font.tags))
            and (provider is None or font.provider == provider)
            and (license is None or font.license == license)
            and (normalized_subset is None or any(_normalize(value) == normalized_subset for value in font.subsets))
            and (normalized_script is None or any(_normalize(value) == normalized_script for value in font.scripts))
            and (style is None or style in font.styles)
            and (weight is None or weight in font.weights)
            and (variable is None or font.variable == variable)
        )
        if matches:
            result.append(font)
    if sort == "family":
        result.sort(key=lambda font: font.family.casefold(), reverse=descending)
    elif sort == "lastModified":
        result.sort(key=lambda font: font.last_modified or "", reverse=descending)
    else:
        result.sort(key=lambda font: len(font.weights), reverse=descending)
    return result if limit is None else result[:limit]


def get_font(family_or_id: str) -> Optional[Font]:
    """Find a family by exact family name or stable catalog id."""
    return _resolve_font(family_or_id)


def get_font_by_id(font_id: str) -> Optional[Font]:
    """Find a family by its stable catalog id."""
    return next((font for font in FONT_CATALOG if _normalize(font.id) == _normalize(font_id)), None)


def google_fonts_css_url(
    family: str,
    *,
    weights: Iterable[int] = (400, 700),
    italic: bool = False,
    display: str = "swap",
) -> str:
    """Build a Google Fonts CSS2 URL for a family and requested weights."""
    if not family or not family.strip():
        raise TypeError("family must be a non-empty string")
    weight_list = sorted(set(weights))
    if any(not isinstance(weight, int) or weight < 100 or weight > 900 for weight in weight_list):
        raise ValueError("weights must contain integers from 100 to 900")
    if display not in {"auto", "block", "swap", "fallback", "optional"}:
        raise ValueError("display must be one of auto, block, swap, fallback, optional")
    slug = quote(family.strip(), safe="").replace("%20", "+")
    if italic:
        axis = "ital,wght@" + ";".join(
            [*(f"0,{weight}" for weight in weight_list), *(f"1,{weight}" for weight in weight_list)]
        )
    else:
        axis = "wght@" + ";".join(str(weight) for weight in weight_list)
    return f"https://fonts.googleapis.com/css2?family={slug}:{axis}&display={display}"


def fontsource_css_url(
    font_or_family: FontLike,
    *,
    weight: Optional[int] = None,
    style: str = "normal",
) -> str:
    """Build a Fontsource CDN CSS URL for a catalog family."""
    font = _required_font(font_or_family)
    selected_weight = font.weights[0] if weight is None else weight
    if not isinstance(selected_weight, int) or selected_weight not in font.weights:
        raise ValueError(f"weight must be one of: {', '.join(str(item) for item in font.weights)}")
    if style not in font.styles:
        raise ValueError(f"style must be one of: {', '.join(font.styles)}")
    suffix = f"{selected_weight}-italic" if style == "italic" else str(selected_weight)
    return f"https://cdn.jsdelivr.net/npm/{font.fontsource_package}@latest/{suffix}.css"


def font_css_url(
    font_or_family: FontLike,
    *,
    source: str = "google-fonts",
    weights: Iterable[int] = (400, 700),
    italic: bool = False,
    display: str = "swap",
    weight: Optional[int] = None,
    style: str = "normal",
) -> str:
    """Build a provider-specific stylesheet URL."""
    if source == "fontsource":
        return fontsource_css_url(font_or_family, weight=weight, style=style)
    family = font_or_family.family if isinstance(font_or_family, Font) else font_or_family
    return google_fonts_css_url(family, weights=weights, italic=italic, display=display)


def create_css_import(font_or_family: FontLike, **options: object) -> str:
    """Create a CSS @import statement for a provider-specific stylesheet."""
    return f'@import url("{font_css_url(font_or_family, **options)}");'


def create_font_face_css(
    source_url: str,
    *,
    family: str = "Moho Font",
    weight: Union[int, str] = 400,
    style: str = "normal",
    display: str = "swap",
) -> str:
    """Create a self-hosted @font-face rule from a caller-provided URL."""
    if not source_url.strip():
        raise TypeError("source_url must be a non-empty string")
    escaped_family = family.replace('"', '\\"')
    return "\n".join(
        [
            "@font-face {",
            f'  font-family: "{escaped_family}";',
            f'  src: url("{source_url}") format("woff2");',
            f"  font-weight: {weight};",
            f"  font-style: {style};",
            f"  font-display: {display};",
            "}",
        ]
    )


def catalog_facets() -> dict[str, list[object]]:
    """Return sorted unique filter values available in the catalog."""
    unique = lambda values: sorted(set(values))
    return {
        "categories": unique(font.category for font in FONT_CATALOG),
        "licenses": unique(font.license for font in FONT_CATALOG),
        "providers": unique(font.provider for font in FONT_CATALOG),
        "scripts": unique(value for font in FONT_CATALOG for value in font.scripts),
        "subsets": unique(value for font in FONT_CATALOG for value in font.subsets),
        "tags": unique(value for font in FONT_CATALOG for value in font.tags),
        "weights": sorted({value for font in FONT_CATALOG for value in font.weights}),
    }


def catalog_stats() -> dict[str, object]:
    """Return totals grouped by provider, license, category, and script."""
    return {
        "total": len(FONT_CATALOG),
        "variable": sum(font.variable for font in FONT_CATALOG),
        "providers": dict(Counter(font.provider for font in FONT_CATALOG)),
        "licenses": dict(Counter(font.license for font in FONT_CATALOG)),
        "categories": dict(Counter(font.category for font in FONT_CATALOG)),
        "scripts": dict(Counter(script for font in FONT_CATALOG for script in font.scripts)),
    }


__all__ = [
    "CATALOG_GENERATED_AT",
    "CATALOG_SOURCE",
    "CATALOG_VERSION",
    "FONT_CATALOG",
    "Font",
    "FontCategory",
    "FontLicense",
    "FontProvider",
    "__version__",
    "catalog_facets",
    "catalog_stats",
    "create_css_import",
    "create_font_face_css",
    "font_css_url",
    "fontsource_css_url",
    "get_font",
    "get_font_by_id",
    "google_fonts_css_url",
    "list_fonts",
]
