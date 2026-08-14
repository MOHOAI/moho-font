from __future__ import annotations

from collections import Counter
from typing import Iterable, Optional
from urllib.parse import quote

from .catalog import CATALOG_VERSION, FONT_CATALOG, Font, FontCategory, FontLicense

__version__ = "0.2.0"


def _normalize(value: str) -> str:
    return value.strip().casefold()


def list_fonts(
    *,
    search: Optional[str] = None,
    category: Optional[FontCategory] = None,
    tag: Optional[str] = None,
    provider: Optional[str] = None,
    license: Optional[FontLicense] = None,
) -> list[Font]:
    """Return all catalog fonts, optionally filtered by metadata."""
    normalized_search = _normalize(search) if search else None
    normalized_tag = _normalize(tag) if tag else None
    result: list[Font] = []
    for font in FONT_CATALOG:
        values = (font.family, *font.tags, *font.scripts)
        matches_search = not normalized_search or any(
            normalized_search in _normalize(value) for value in values
        )
        matches_tag = not normalized_tag or any(
            _normalize(value) == normalized_tag for value in font.tags
        )
        if (
            matches_search
            and (category is None or font.category == category)
            and matches_tag
            and (provider is None or font.provider == provider)
            and (license is None or font.license == license)
        ):
            result.append(font)
    return result


def get_font(family: str) -> Font | None:
    """Find a family by exact name, ignoring case and surrounding spaces."""
    wanted = _normalize(family)
    return next((font for font in FONT_CATALOG if _normalize(font.family) == wanted), None)


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


def catalog_stats() -> dict[str, object]:
    """Return totals grouped by provider, license, and category."""
    return {
        "total": len(FONT_CATALOG),
        "providers": dict(Counter(font.provider for font in FONT_CATALOG)),
        "licenses": dict(Counter(font.license for font in FONT_CATALOG)),
        "categories": dict(Counter(font.category for font in FONT_CATALOG)),
    }


__all__ = [
    "CATALOG_VERSION",
    "FONT_CATALOG",
    "Font",
    "FontCategory",
    "FontLicense",
    "__version__",
    "catalog_stats",
    "get_font",
    "google_fonts_css_url",
    "list_fonts",
]
