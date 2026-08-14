# موهو فوند

**موهو فوند** مكتبة TypeScript صغيرة لتسهيل اكتشاف الخطوط العربية المفتوحة واستخدامها في تطبيقات الويب. توفر المكتبة كتالوجًا من العائلات العربية المتاحة عبر Google Fonts، مع البحث والتصفية حسب الفئة والوسوم والترخيص، وبناء روابط CSS2 وتحميلها مباشرة في المتصفح.

> ملاحظة مهمة: لا تدّعي هذه النسخة أنها تحتوي على كل خط عربي موجود عالميًا. إنها نواة قابلة للتحديث تضم مجموعة واسعة من العائلات العربية المفتوحة، وتفصل بين كود المكتبة المرخّص بـ MIT وتراخيص الخطوط الخارجية نفسها. ينبغي دائمًا مراجعة ترخيص كل عائلة قبل إعادة توزيعها أو استخدامها في منتج تجاري.

## التثبيت

```bash
npm install moho-font
```

تستهدف الحزمة Node.js 18 أو أحدث، وتدعم الاستيراد بصيغة ESM وCommonJS.

```ts
import { listFonts, getFont, getGoogleFontsCssUrl } from 'moho-font';
```

## الاستخدام

للحصول على جميع العناصر الموجودة في الكتالوج:

```ts
import { listFonts } from 'moho-font';

const fonts = listFonts();
console.log(fonts.length);
```

للبحث عن خط أو مجموعة خطوط:

```ts
const naskhFonts = listFonts({ search: 'naskh' });
const kufiFonts = listFonts({ tag: 'kufi' });
const serifFonts = listFonts({ category: 'serif' });
```

للحصول على عائلة محددة:

```ts
const cairo = getFont('Cairo');
console.log(cairo?.cssUrl);
```

لبناء رابط Google Fonts CSS2 مخصص:

```ts
const href = getGoogleFontsCssUrl('Noto Sans Arabic', {
  weights: [400, 600, 700],
  display: 'swap'
});

console.log(href);
// https://fonts.googleapis.com/css2?family=Noto+Sans+Arabic:wght@400;600;700&display=swap
```

في المتصفح، يمكن تحميل ورقة الأنماط تلقائيًا:

```ts
import { loadGoogleFont } from 'moho-font';

await loadGoogleFont('Cairo', { weights: [400, 700] });
document.body.style.fontFamily = 'Cairo, sans-serif';
```

## واجهة API

| الدالة | الغرض |
| --- | --- |
| `listFonts(query?)` | إرجاع الكتالوج أو تصفيته بالبحث، والفئة، والوسم، والمصدر، والترخيص. |
| `getFont(family)` | العثور على عائلة باسمها، مع تجاهل المسافات وحالة الأحرف. |
| `getGoogleFontsCssUrl(family, options?)` | إنشاء رابط CSS2 لأوزان الخط المطلوبة. |
| `createGoogleFontsLink(family, options?)` | إرجاع كائن `rel` و`href` جاهز لعنصر `link`. |
| `loadGoogleFont(family, options?)` | إضافة ورقة الأنماط إلى `document.head` في بيئة المتصفح. |
| `getCatalogStats()` | إرجاع إحصاءات الكتالوج حسب المصدر والترخيص والفئة. |

تتضمن كل نتيجة `family` و`provider` و`license` و`category` و`weights` و`styles` و`sourceUrl` و`cssUrl` و`tags`. روابط الخطوط تشير إلى Google Fonts، ولا تُضمّن ملفات الخطوط داخل حزمة موهو فوند.

## التراخيص والمصادر

كود موهو فوند مرخّص بموجب MIT. أما الخطوط فتبقى خاضعة لتراخيص أصحابها؛ وتستخدم النسخة الأولية عائلات من Google Fonts، التي توضح وثائقها أن الخطوط متاحة بموجب تراخيص مفتوحة، مع ضرورة قراءة ترخيص كل عائلة قبل الاستخدام [1]. وتوضح مستودعات Google Fonts أن التراخيص الشائعة تشمل SIL Open Font License وApache 2 وUbuntu Font License [2].

| نوع الترخيص | الاستخدام في الكتالوج |
| --- | --- |
| `OFL-1.1` | غالبية العائلات العربية المفتوحة. |
| `UFL-1.0` | عائلة Ubuntu. |
| `Apache-2.0` | مدعوم في نموذج البيانات لإضافات مستقبلية. |
| `unknown` | قيمة احتياطية تمنع افتراض ترخيص غير موثق. |

## نسخة Python

يحتوي المستودع نفسه على نسخة Python في مجلد `python/`، وتستخدم اسم التوزيعة `moho-font` واسم الاستيراد `moho_font`. لتثبيتها من PyPI بعد نشرها:

```bash
pip install moho-font
```

وللتطوير المحلي من جذر المستودع:

```bash
cd python
python -m venv .venv
.venv\\Scripts\\activate  # Windows
python -m pip install -U pip pytest build twine
python -m pytest
python -m build
python -m twine check dist/*
```

تحتفظ نسختا JavaScript وPython بحقول `provider` و`sourceUrl` و`license` عمدًا؛ لا يجوز حذف هذه البيانات عند إعادة توزيع الكتالوج أو الخطوط.

## القيود والامتدادات المستقبلية

الكتالوج الحالي ثابت داخل الحزمة، ويضم النسخة الموسعة عائلات عربية مفتوحة متعددة حتى تكون عمليات البحث سريعة ولا تعتمد على مفتاح API. يمكن لاحقًا إضافة أمر مزامنة يجلب بيانات أحدث من مصادر موثوقة، ومزوّدين إضافيين، وحقولًا للنسخ والمحاور المتغيرة ودعم اللغات الفرعية، مع إبقاء كل مصدر مرتبطًا بترخيصه ورابطه الأصلي.

لا تستخدم `loadGoogleFont` في بيئة الخادم؛ فهي مخصصة للمتصفح. وفي التطبيقات التي تتطلب تحكمًا كاملاً أو عملًا دون اتصال، يُفضّل استخدام آلية self-hosting وفق شروط ترخيص العائلة بدل الاعتماد على CSS خارجي.

## التطوير المحلي

```bash
npm install
npm test
npm run build
npm run pack:check
npm run publish:check
```

## المراجع

[1]: https://developers.google.com/fonts "Google Fonts Developer Documentation"
[2]: https://github.com/google/fonts "Google Fonts GitHub Repository"
[3]: https://googlefonts.github.io/gf-guide/metadata.html "Google Fonts Metadata Guide"
