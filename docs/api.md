# مرجع API

## نموذج العائلة

يمثل كل سجل عائلة عربية واحدة. أهم الحقول هي `id` و`family` و`provider` و`license` و`category` و`weights` و`styles` و`variable` و`subsets` و`scripts` و`tags` و`sourceUrl` و`cssUrl`.

يحافظ `id` على هوية مستقرة نسبيًا للاستخدام في التخزين المؤقت والروابط، بينما يظل `family` الاسم المعروض للمستخدم. لا ينبغي استخدام الاسم المعروض بدل المعرّف عند الحاجة إلى تخزين طويل الأجل.

## JavaScript/TypeScript

```ts
listFonts({
  search?: string;
  category?: FontCategory;
  tag?: string;
  provider?: FontProvider;
  license?: FontLicense;
  subset?: string;
  script?: string;
  style?: FontStyle;
  weight?: number;
  variable?: boolean;
  sort?: 'family' | 'lastModified' | 'weightCount';
  descending?: boolean;
  limit?: number;
}): ArabicFont[]
```

تُرجع `getFont` و`getFontById` قيمة `undefined` عند عدم وجود نتيجة. أما واجهات URL التي تحتاج عائلة معروفة، مثل `getFontsourceCssUrl`، فترمي خطأً واضحًا عند عدم العثور على السجل أو عند اختيار وزن غير متاح.

## Python

تستخدم `list_fonts` الوسائط نفسها بأسماء snake_case، وتدعم `sort` بالقيم `family` و`lastModified` و`weightCount`. تُرجع `get_font` و`get_font_by_id` القيمة `None` عند عدم وجود نتيجة، بينما تستخدم دوال URL المتخصصة `LookupError` أو `ValueError` للتحقق من المدخلات.

## المزوّدون

يختار `getFontCssUrl` أو `font_css_url` المزوّد. القيمة الافتراضية هي `google-fonts`، ويمكن اختيار `fontsource` للعائلات التي تتوفر لها حزمة Fontsource. هذه الروابط لا تنقل ملكية الخط إلى موهو فوند؛ بل تُبقي الاستخدام مرتبطًا بصفحة المصدر وترخيص العائلة.

## التحقق

يجب تشغيل ما يلي قبل كل إصدار:

```bash
npm run catalog:verify
npm test
cd python && python -m pytest && python -m build && python -m twine check dist/*
```
