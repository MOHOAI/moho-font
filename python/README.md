# moho-font for Python

هذه الحزمة هي نسخة Python من **موهو فوند**. توفر كتالوجًا للخطوط العربية المفتوحة وأدوات للبحث والتصفية وبناء روابط Google Fonts CSS2. لا تُضمّن ملفات الخطوط، ولا تنسب الخطوط إلى موهو؛ إذ يحتفظ كل خط بمصدره وترخيصه الأصلي.

## التثبيت

```bash
pip install moho-font
```

## الاستخدام

```python
from moho_font import get_font, google_fonts_css_url, list_fonts

fonts = list_fonts(search="naskh")
cairo = get_font("Cairo")
css_url = google_fonts_css_url("Noto Sans Arabic", weights=(400, 700))
```

تتضمن كل نتيجة بيانات العائلة والمصدر والترخيص والفئة والأوزان والوسوم.

## التطوير

من مجلد `python/`:

```bash
python -m venv .venv
.venv\Scripts\activate  # Windows
python -m pip install -U pip pytest build twine
python -m pytest
python -m build
python -m twine check dist/*
```

## الترخيص

كود الحزمة مرخّص بموجب MIT. الخطوط الخارجية لا تُضمّن في التوزيعة، وتبقى خاضعة لتراخيص أصحابها. راجع `../README.md` للمعلومات العامة والمراجع.
