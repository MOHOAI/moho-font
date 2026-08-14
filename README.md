# موهو فوند

**موهو فوند** مكتبة مفتوحة المصدر وكتالوج موحّد للخطوط العربية، مع واجهتين متوافقتين لـ JavaScript/TypeScript وPython. تساعد المكتبة المطوّرين على اكتشاف الخطوط العربية المفتوحة، البحث فيها، تصفيتها حسب الخصائص، إنشاء روابط CSS من مزوّدين مختلفين، واستعمال الخطوط في تطبيقات الويب مع بقاء المصدر والترخيص ظاهرين.

> لا تدّعي موهو فوند أنها تحتوي على كل خط عربي موجود عالميًا. الإصدار الحالي يضم **56 عائلة عربية** مستخرجة من فهرس مفتوح، والكتالوج مصمم ليُحدّث تلقائيًا بطريقة قابلة للتكرار. لا تُضمّن ملفات الخطوط نفسها داخل الحزمة؛ بل تُنشئ المكتبة روابط إلى مصادرها المعلنة.

## التثبيت

```bash
npm install moho-font
```

تستهدف الحزمة Node.js 18 أو أحدث، وتدعم ESM وCommonJS.

```ts
import { listFonts, getFont, getFontCssUrl } from 'moho-font';

const fonts = listFonts({
  search: 'naskh',
  subset: 'arabic',
  variable: true,
  limit: 10,
});

const cairo = getFont('Cairo');
const cssUrl = getFontCssUrl('Cairo', {
  source: 'fontsource',
  fontsource: { weight: 700 },
});

console.log(fonts.map((font) => font.family));
console.log(cairo?.license, cairo?.sourceUrl);
console.log(cssUrl);
```

## البحث والتصفية

تقبل `listFonts` استعلامًا غنيًا، وتعيد نتائج مرتبة ترتيبًا حتميًا. يمكن الجمع بين البحث النصي والفئة والوسم والمصدر والترخيص والمجموعة النصية والنمط والوزن والخط المتغير.

```ts
import { listFonts } from 'moho-font';

const kufi = listFonts({ tag: 'kufi' });
const serif = listFonts({ category: 'serif' });
const italic = listFonts({ style: 'italic' });
const heavyVariable = listFonts({ variable: true, weight: 700 });
const newest = listFonts({ sort: 'lastModified', descending: true, limit: 20 });
```

تتوفر القيم الممكنة للتصفية عبر `getCatalogFacets`:

```ts
import { getCatalogFacets } from 'moho-font';

const facets = getCatalogFacets();
console.log(facets.tags, facets.scripts, facets.weights);
```

## روابط CSS ومزوّدو الخطوط

ينشئ موهو فوند روابط Google Fonts CSS2 وروابط Fontsource CDN، مع السماح بتحديد الأوزان والنمط وطريقة عرض الخط.

```ts
import {
  createFontCssImport,
  createFontFaceCss,
  getFontCssUrl,
  getGoogleFontsCssUrl,
  getFontsourceCssUrl,
} from 'moho-font';

const googleUrl = getGoogleFontsCssUrl('Noto Sans Arabic', {
  weights: [400, 600, 700],
  display: 'swap',
});

const fontsourceUrl = getFontsourceCssUrl('Cairo', { weight: 700 });
const importRule = createFontCssImport('Amiri');
const selfHostedRule = createFontFaceCss('https://example.test/amiri.woff2', {
  family: 'Amiri',
  weight: 400,
});
```

لتحميل ورقة الأنماط في المتصفح:

```ts
import { loadFont } from 'moho-font';

await loadFont('Cairo', {
  source: 'google-fonts',
  weights: [400, 700],
});

document.body.style.fontFamily = 'Cairo, sans-serif';
```

`loadFont` مخصصة للمتصفح، وتمنع إضافة ورقة الأنماط نفسها مرتين. في بيئات الخادم أو التطبيقات دون اتصال، استخدم الرابط أو آلية الاستضافة الذاتية المناسبة لشروط ترخيص العائلة.

## واجهة JavaScript/TypeScript

| الدالة أو القيمة | الغرض |
| --- | --- |
| `listFonts(query?)` | البحث والتصفية والترتيب والحد من النتائج. |
| `getFont(familyOrId)` | العثور على عائلة باسمها أو معرّفها. |
| `getFontById(id)` | العثور على عائلة بالمعرّف المستقر. |
| `getCatalogFacets()` | إرجاع قيم الفلاتر المتاحة. |
| `getCatalogStats()` | إرجاع الإحصاءات حسب المصدر والترخيص والفئة واللغة. |
| `getGoogleFontsCssUrl(family, options?)` | بناء رابط Google Fonts CSS2. |
| `getFontsourceCssUrl(font, options?)` | بناء رابط Fontsource CDN. |
| `getFontCssUrl(font, options?)` | اختيار المزوّد وبناء الرابط المناسب. |
| `createGoogleFontsLink(family, options?)` | إنشاء خصائص عنصر stylesheet. |
| `createFontCssImport(font, options?)` | إنشاء قاعدة `@import`. |
| `createFontFaceCss(url, options?)` | إنشاء قاعدة `@font-face` للاستضافة الذاتية. |
| `loadFont(font, options?)` | تحميل stylesheet في المتصفح. |
| `loadGoogleFont(family, options?)` | اسم متوافق مع الإصدارات السابقة. |
| `arabicFonts` | الكتالوج الثابت الكامل. |

تحتوي كل عائلة على `id` و`family` و`provider` و`license` و`category` و`weights` و`styles` و`variable` و`subsets` و`scripts` و`tags` و`sourceUrl` و`cssUrl` وبيانات Fontsource عند توفرها.

## نسخة Python

يحتوي المستودع نفسه على نسخة Python في `python/`. اسم التوزيعة هو `moho-font` واسم الاستيراد هو `moho_font`.

```bash
pip install moho-font
```

مثال:

```python
from moho_font import catalog_stats, font_css_url, list_fonts

fonts = list_fonts(search="naskh", variable=True, limit=10)
print([font.family for font in fonts])
print(font_css_url("Cairo", source="fontsource", weight=700))
print(catalog_stats())
```

تتطابق وظائف Python الأساسية مع JavaScript، ومنها `list_fonts` و`get_font` و`get_font_by_id` و`catalog_facets` و`catalog_stats` و`google_fonts_css_url` و`fontsource_css_url` و`font_css_url` و`create_css_import` و`create_font_face_css`.

## مزامنة الكتالوج وتوليده

مصدر البيانات الموحد هو `data/fonts.json`. يمكن تحديثه من مصدر Fontsource المفتوح ثم توليد الكتالوجين من الملف نفسه:

```bash
npm run catalog:sync
npm run catalog:generate
npm test
cd python
python -m pytest
```

الأمر `catalog:sync` لا يضع ملفات الخطوط في الحزمة؛ بل يلتقط بيانات وصفية مثل الاسم والوزن والنمط والمجموعات والنسخة والترخيص وروابط المصدر. أما `catalog:generate` فيضمن أن نسخة TypeScript ونسخة Python تستخدمان السجلات نفسها.

## الجودة والتطوير المحلي

```bash
npm install
npm test
npm run catalog:update
npm run pack:check
npm run publish:check
```

```bash
cd python
python -m venv .venv
.venv\\Scripts\\activate  # Windows
python -m pip install -U pip pytest build twine
python -m pytest
python -m build
python -m twine check dist/*
```

الاختبارات تغطي البحث، المعرّفات، الفلاتر، الأوجه، الأوزان، الخطوط المتغيرة، روابط CSS، التحقق من المدخلات، ومخرجات الاستيراد. لا تُنشر نسخة جديدة قبل نجاح البناء والاختبارات وفحص محتوى التوزيعة.

## التراخيص والمصادر

كود موهو فوند مرخّص بموجب MIT. أما الخطوط فتبقى خاضعة لتراخيص أصحابها؛ ويحتفظ الكتالوج عمدًا بالحقول `provider` و`sourceUrl` و`license` وبيانات التحديث. يجب مراجعة ترخيص كل عائلة قبل إعادة توزيع ملفاتها أو استخدامها في منتج تجاري. لا يجوز إزالة بيانات المصدر أو الترخيص أو تقديم الخطوط الخارجية على أنها من إنشاء موهو.

| الحقل | معناه |
| --- | --- |
| `provider` | المزوّد الذي تأتي منه بيانات العائلة أو رابط الاستخدام. |
| `sourceUrl` | صفحة المصدر الأصلية للعائلة. |
| `license` | الترخيص المعلن للعائلة، مثل OFL-1.1 أو Apache-2.0 أو UFL-1.0. |
| `lastModified` | تاريخ آخر تحديث متاح في مصدر البيانات. |

## إصدارات التوزيع

الإصدار المنشور السابق هو `0.2.0`. الإصدار التطويري التالي في هذا المستودع هو `0.3.0`، ولن يُدفع أو يُنشر حتى يكتمل الفحص ويصدر تأكيد منفصل بذلك.

## المراجع

[1]: https://developers.google.com/fonts "Google Fonts Developer Documentation"
[2]: https://github.com/google/fonts "Google Fonts GitHub Repository"
[3]: https://googlefonts.github.io/gf-guide/metadata.html "Google Fonts Metadata Guide"
[4]: https://fontsource.org/docs/ "Fontsource Documentation"
[5]: https://packaging.python.org/en/latest/ "Python Packaging User Guide"
