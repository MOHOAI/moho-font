import pytest

from moho_font import catalog_stats, get_font, google_fonts_css_url, list_fonts


def test_catalog_is_expanded():
    stats = catalog_stats()
    assert stats["total"] >= 45


def test_find_font_case_insensitively():
    assert get_font("  cairo ").family == "Cairo"
    assert get_font("missing-family") is None


def test_filters_by_metadata():
    assert any(font.family == "Amiri" for font in list_fonts(search="naskh"))
    assert all(font.category == "serif" for font in list_fonts(category="serif"))
    assert all("kufi" in font.tags for font in list_fonts(tag="kufi"))


def test_css_url():
    assert google_fonts_css_url("Noto Sans Arabic", weights=(400, 700)) == (
        "https://fonts.googleapis.com/css2?family=Noto+Sans+Arabic:wght@400;700&display=swap"
    )


def test_italic_css_url():
    assert google_fonts_css_url("Amiri", weights=(400,), italic=True, display="block") == (
        "https://fonts.googleapis.com/css2?family=Amiri:ital,wght@0,400;1,400&display=block"
    )


def test_invalid_values():
    with pytest.raises(TypeError):
        google_fonts_css_url("")
    with pytest.raises(ValueError):
        google_fonts_css_url("Cairo", weights=(950,))
