# مصادر تصميم كتالوج موهو فوند

## Google Fonts METADATA.pb

الرابط: https://googlefonts.github.io/gf-guide/metadata.html

توضح الوثائق أن مستودع Google Fonts يحتوي على ملف `METADATA.pb` لكل عائلة، ويتضمن اسم العائلة، المصمم، الترخيص، التصنيف، ملفات الخط، الأوزان، الأنماط، المجموعات النصية، النص الأساسي، وروابط المستودع المصدر. قيم الترخيص الأساسية في البيانات هي OFL وAPACHE2 وUFL. كما يمكن أن تتضمن البيانات محاور الخطوط المتغيرة ومعلومات المصدر.

## مستودع Google Fonts

الرابط: https://github.com/google/fonts

يوضح المستودع أن مجلدات العائلات تحتوي ملفات الخط و`METADATA.pb` وملف وصف، وأن أسماء المجلدات العليا تمثل فئات التراخيص. يذكر المستودع أن الخطوط قابلة لإعادة التوزيع وفق شروط تراخيصها، وأن معظمها يستخدم SIL Open Font License 1.1، وبعضها Apache 2.0، وخطوط Ubuntu تستخدم Ubuntu Font License 1.0. يجب قراءة ترخيص كل عائلة، مع الانتباه إلى Reserved Font Name عند تعديل الخطوط.

## Fontsource API

الرابط: https://fontsource.org/docs/api/introduction

واجهة Fontsource للقراءة فقط وتوفر معلومات الخطوط عبر `https://api.fontsource.org/v1/fonts`. توثق الواجهة حالات HTTP وحدود الاستخدام، وتذكر أنها قد تضيف خصائص دون تغيير أو حذف الخصائص الحالية. يمكن استخدامها كمصدر مساعد لا كمصدر وحيد، مع حفظ نسخة بيانات مثبتة ومراجعة التراخيص قبل إدخال أي عائلة.

## قرارات التصميم

1. ستحتفظ موهو فوند ببيانات `provider` و`sourceUrl` و`license` وحقوق المصمم بدل إخفائها.
2. يجب فصل بيانات الكتالوج الخام عن API الناتج، مع مولد قابل لإعادة التشغيل.
3. يجب تمثيل الأوزان والأنماط والمحاور والمجموعات النصية بدقة بدل افتراض كل الأوزان من 100 إلى 900.
4. يجب إضافة سجل provenance لكل عائلة، وفحص يمنع إدخال عائلة بلا ترخيص أو رابط مصدر.
5. يمكن دعم Google Fonts وFontsource كمصادر بيانات، مع إبقاء التحميل الخارجي اختياريًا وعدم ادعاء ملكية الخطوط.

## مراجع

- [Google Fonts METADATA.pb guide](https://googlefonts.github.io/gf-guide/metadata.html)
- [Google Fonts repository](https://github.com/google/fonts)
- [Fontsource API introduction](https://fontsource.org/docs/api/introduction)
