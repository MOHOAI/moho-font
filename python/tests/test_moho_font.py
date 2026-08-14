import pytest

from moho_font import (
    catalog_facets,
    catalog_stats,
    create_css_import,
    create_font_face_css,
    font_css_url,
    fontsource_css_url,
    get_font,
    get_font_by_id,
    google_fonts_css_url,
    list_fonts,
)


def test_catalog_is_synchronized_and_expanded():
    stats = catalog_stats()
    assert stats["total"] >= 50
    assert stats["providers"]["google-fonts"] == stats["total"]
    assert stats["variable"] > 0


def test_find_font_by_name_and_id():
    assert get_font("  cairo ").family == "Cairo"
    assert get_font_by_id("alexandria").family == "Alexandria"
    assert get_font("missing-family") is None


def test_filters_by_metadata():
    assert any(font.family == "Amiri" for font in list_fonts(search="naskh"))
    assert all(font.category == "serif" for font in list_fonts(category="serif"))
    assert all("kufi" in font.tags for font in list_fonts(tag="kufi"))
    assert len(list_fonts(subset="arabic", variable=True, weight=700, limit=3)) <= 3
    assert all("italic" in font.styles for font in list_fonts(style="italic"))


def test_facets():
    facets = catalog_facets()
    assert "serif" in facets["categories"]
    assert "arabic" in facets["subsets"]
    assert 400 in facets["weights"]


def test_css_url():
    assert google_fonts_css_url("Noto Sans Arabic", weights=(400, 700)) == (
        "https://fonts.googleapis.com/css2?family=Noto+Sans+Arabic:wght@400;700&display=swap"
    )


def test_italic_css_url():
    assert google_fonts_css_url("Amiri", weights=(400,), italic=True, display="block") == (
        "https://fonts.googleapis.com/css2?family=Amiri:ital,wght@0,400;1,400&display=block"
    )


def test_fontsource_url_and_css_helpers():
    assert fontsource_css_url("Cairo", weight=400) == (
        "https://cdn.jsdelivr.net/npm/@fontsource/cairo@latest/400.css"
    )
    assert font_css_url("Cairo", source="fontsource", weight=700) == (
        "https://cdn.jsdelivr.net/npm/@fontsource/cairo@latest/700.css"
    )
    assert create_css_import("Amiri").startswith('@import url("https://fonts.googleapis.com')
    assert 'font-family: "Amiri"' in create_font_face_css(
        "https://example.test/amiri.woff2", family="Amiri"
    )


def test_invalid_values():
    with pytest.raises(TypeError):
        google_fonts_css_url("")
    with pytest.raises(ValueError):
        google_fonts_css_url("Cairo", weights=(950,))
    with pytest.raises(ValueError):
        list_fonts(limit=-1)
    with pytest.raises(ValueError):
        fontsource_css_url("Cairo", weight=950)
