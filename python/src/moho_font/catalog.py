from __future__ import annotations

from dataclasses import dataclass
from typing import Literal
from urllib.parse import quote

FontCategory = Literal["serif", "sans-serif", "display", "handwriting", "monospace"]
FontLicense = Literal["OFL-1.1", "Apache-2.0", "UFL-1.0", "unknown"]


@dataclass(frozen=True)
class Font:
    family: str
    provider: str
    license: FontLicense
    category: FontCategory
    scripts: tuple[str, ...]
    weights: tuple[int, ...]
    styles: tuple[str, ...]
    source_url: str
    css_url: str
    tags: tuple[str, ...]


def _google(family: str, category: FontCategory, tags: tuple[str, ...], license: FontLicense = "OFL-1.1") -> Font:
    slug = quote(family, safe="").replace("%20", "+")
    return Font(
        family=family,
        provider="google-fonts",
        license=license,
        category=category,
        scripts=("Arabic", "Latin"),
        weights=(100, 200, 300, 400, 500, 600, 700, 800, 900),
        styles=("normal",),
        source_url=f"https://fonts.google.com/specimen/{slug}",
        css_url=f"https://fonts.googleapis.com/css2?family={slug}:wght@100..900&display=swap",
        tags=("arabic", "open-source", *tags),
    )


FONT_CATALOG: tuple[Font, ...] = (
    _google("Afacad Arabic", "sans-serif", ("modern", "ui")),
    _google("Almarai", "sans-serif", ("modern", "ui")),
    _google("Amiri", "serif", ("naskh", "classical", "book")),
    _google("Aref Ruqaa", "display", ("ruqaa", "calligraphic")),
    _google("Aref Ruqaa Ink", "display", ("ruqaa", "calligraphic", "ink")),
    _google("Badeen Display", "display", ("display", "headline")),
    _google("Baloo Bhaijaan 2", "display", ("rounded", "playful")),
    _google("Cairo", "sans-serif", ("modern", "ui", "popular")),
    _google("Cairo Play", "display", ("playful", "display")),
    _google("Changa", "display", ("geometric", "headline")),
    _google("El Messiri", "sans-serif", ("modern", "elegant")),
    _google("Farsan", "display", ("handwriting", "display")),
    _google("Fustat", "sans-serif", ("modern", "ui")),
    _google("Noto Nastaliq Urdu", "serif", ("nastaliq", "calligraphic")),
    _google("Gulzar", "serif", ("nastaliq", "calligraphic")),
    _google("Handjet", "display", ("experimental", "display")),
    _google("Harmattan", "sans-serif", ("west-african", "reading")),
    _google("IBM Plex Sans Arabic", "sans-serif", ("professional", "ui")),
    _google("Jomhuria", "display", ("display", "headline")),
    _google("Kufam", "sans-serif", ("kufi", "modern")),
    _google("Lalezar", "display", ("display", "headline")),
    _google("Lemonada", "sans-serif", ("rounded", "display")),
    _google("Mada", "sans-serif", ("reading", "ui")),
    _google("Marhey", "display", ("display", "rounded")),
    _google("Markazi Text", "serif", ("reading", "naskh")),
    _google("Mirza", "serif", ("calligraphic", "reading")),
    _google("Noto Kufi Arabic", "sans-serif", ("kufi", "ui", "noto")),
    _google("Noto Naskh Arabic", "serif", ("naskh", "reading", "noto")),
    _google("Noto Sans Naskh Arabic", "sans-serif", ("naskh", "reading", "noto")),
    _google("Noto Sans Arabic", "sans-serif", ("ui", "reading", "noto")),
    _google("Noto Serif Arabic", "serif", ("serif", "reading", "noto")),
    _google("Qahiri", "display", ("display", "headline")),
    _google("Rakkas", "display", ("display", "calligraphic")),
    _google("Readex Pro", "sans-serif", ("technical", "ui")),
    _google("Reem Kufi", "sans-serif", ("kufi", "modern")),
    _google("Reem Kufi Fun", "display", ("kufi", "playful")),
    _google("Ruwudu", "serif", ("reading", "classical")),
    _google("Rubik", "sans-serif", ("modern", "ui")),
    _google("Scheherazade New", "serif", ("naskh", "reading", "classical")),
    _google("Tajawal", "sans-serif", ("modern", "ui", "popular")),
    _google("Ubuntu", "sans-serif", ("ui", "technical"), "UFL-1.0"),
    _google("Vazirmatn", "sans-serif", ("persian", "ui", "reading")),
    _google("Zain", "display", ("handwriting", "display")),
    _google("Diodum", "display", ("display", "headline")),
    _google("Anek Arabic", "sans-serif", ("variable", "ui")),
)

CATALOG_VERSION = "2026-08-14"
