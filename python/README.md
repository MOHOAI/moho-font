# moho-font for Python

نسخة Python من **موهو فوند** توفر كتالوجًا موحدًا للخطوط العربية المفتوحة، مع البحث والتصفية والإحصاءات وبناء روابط CSS من Google Fonts وFontsource. اسم التوزيعة هو `moho-font`، واسم الاستيراد هو `moho_font`.

## التثبيت

```bash
pip install moho-font
```

## الاستخدام

```python
from moho_font import (
    catalog_facets,
    catalog_stats,
    font_css_url,
    get_font,
    list_fonts,
)

fonts = list_fonts(
    search="naskh",
    subset="arabic",
    variable=True,
    weight=700,
    limit=10,
)

for font in fonts:
    print(font.family, font.license, font.source_url)

cairo = get_font("Cairo")
print(font_css_url(cairo, source="fontsource", weight=700))
print(catalog_stats())
print(catalog_facets()["tags"])
```

## الواجهة

| الدالة | الغرض |
| --- | --- |
| `list_fonts(...)` | البحث والتصفية والترتيب والحد من النتائج. |
| `get_font(name_or_id)` | العثور على عائلة بالاسم أو المعرّف. |
| `get_font_by_id(font_id)` | العثور على عائلة بالمعرّف المستقر. |
| `catalog_facets()` | إرجاع قيم الفلاتر المتاحة. |
| `catalog_stats()` | إرجاع إحصاءات الكتالوج. |
| `google_fonts_css_url(...)` | بناء رابط Google Fonts CSS2. |
| `fontsource_css_url(...)` | بناء رابط Fontsource CDN لعائلة معروفة. |
| `font_css_url(...)` | اختيار المزوّد وبناء الرابط. |
| `create_css_import(...)` | إنشاء قاعدة CSS `@import`. |
| `create_font_face_css(...)` | إنشاء قاعدة `@font-face` للاستضافة الذاتية. |

## التصفية

تدعم `list_fonts` الوسائط `search` و`category` و`tag` و`provider` و`license` و`subset` و`script` و`style` و`weight` و`variable` و`sort` و`descending` و`limit`.

```python
serif = list_fonts(category="serif")
kufi = list_fonts(tag="kufi")
recent = list_fonts(sort="lastModified", descending=True, limit=20)
```

## التطوير المحلي

```bash
cd python
python -m venv .venv
.venv\\Scripts\\activate  # Windows
python -m pip install -U pip pytest build twine
python -m pytest
python -m build
python -m twine check dist/*
```

لا تُضمّن ملفات الخطوط نفسها داخل التوزيعة. يحتفظ كل سجل بالـ `provider` و`source_url` و`license` وبيانات التحديث، ويجب مراجعة ترخيص العائلة قبل إعادة توزيع ملفاتها أو استخدامها تجاريًا.

## الترخيص

كود الحزمة مرخّص بموجب MIT. تراخيص الخطوط الخارجية مستقلة ويجب احترامها كما هي.
