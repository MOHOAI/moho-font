'use strict';

// src/catalog.ts
var arabicFonts = [
  {
    "id": "alexandria",
    "family": "Alexandria",
    "provider": "google-fonts",
    "license": "OFL-1.1",
    "category": "sans-serif",
    "scripts": [
      "Arabic",
      "Latin",
      "Latin Extended",
      "vietnamese"
    ],
    "subsets": [
      "arabic",
      "latin",
      "latin-ext",
      "vietnamese"
    ],
    "weights": [
      100,
      200,
      300,
      400,
      500,
      600,
      700,
      800,
      900
    ],
    "styles": [
      "normal"
    ],
    "variable": true,
    "lastModified": "2025-09-05",
    "sourceUrl": "https://fonts.google.com/specimen/Alexandria",
    "cssUrl": "https://fonts.googleapis.com/css2?family=Alexandria:wght@100;200;300;400;500;600;700;800;900&display=swap",
    "fontsourcePackage": "@fontsource/alexandria",
    "fontsourceCssUrl": "https://cdn.jsdelivr.net/npm/@fontsource/alexandria@latest/400.css",
    "tags": [
      "arabic",
      "open-source",
      "sans-serif",
      "variable",
      "vietnamese"
    ]
  },
  {
    "id": "alkalami",
    "family": "Alkalami",
    "provider": "google-fonts",
    "license": "OFL-1.1",
    "category": "serif",
    "scripts": [
      "Arabic",
      "Latin",
      "Latin Extended"
    ],
    "subsets": [
      "arabic",
      "latin",
      "latin-ext"
    ],
    "weights": [
      400
    ],
    "styles": [
      "normal"
    ],
    "variable": false,
    "lastModified": "2025-09-16",
    "sourceUrl": "https://fonts.google.com/specimen/Alkalami",
    "cssUrl": "https://fonts.googleapis.com/css2?family=Alkalami:wght@400&display=swap",
    "fontsourcePackage": "@fontsource/alkalami",
    "fontsourceCssUrl": "https://cdn.jsdelivr.net/npm/@fontsource/alkalami@latest/400.css",
    "tags": [
      "arabic",
      "open-source",
      "serif",
      "static"
    ]
  },
  {
    "id": "almarai",
    "family": "Almarai",
    "provider": "google-fonts",
    "license": "OFL-1.1",
    "category": "sans-serif",
    "scripts": [
      "Arabic",
      "Latin"
    ],
    "subsets": [
      "arabic",
      "latin"
    ],
    "weights": [
      300,
      400,
      700,
      800
    ],
    "styles": [
      "normal"
    ],
    "variable": false,
    "lastModified": "2025-09-02",
    "sourceUrl": "https://fonts.google.com/specimen/Almarai",
    "cssUrl": "https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700;800&display=swap",
    "fontsourcePackage": "@fontsource/almarai",
    "fontsourceCssUrl": "https://cdn.jsdelivr.net/npm/@fontsource/almarai@latest/400.css",
    "tags": [
      "arabic",
      "open-source",
      "sans-serif",
      "static"
    ]
  },
  {
    "id": "alyamama",
    "family": "Alyamama",
    "provider": "google-fonts",
    "license": "OFL-1.1",
    "category": "serif",
    "scripts": [
      "Arabic",
      "greek",
      "Latin",
      "Latin Extended"
    ],
    "subsets": [
      "arabic",
      "greek",
      "latin",
      "latin-ext"
    ],
    "weights": [
      300,
      400,
      500,
      600,
      700,
      800,
      900
    ],
    "styles": [
      "normal"
    ],
    "variable": true,
    "lastModified": "2026-02-19",
    "sourceUrl": "https://fonts.google.com/specimen/Alyamama",
    "cssUrl": "https://fonts.googleapis.com/css2?family=Alyamama:wght@300;400;500;600;700;800;900&display=swap",
    "fontsourcePackage": "@fontsource/alyamama",
    "fontsourceCssUrl": "https://cdn.jsdelivr.net/npm/@fontsource/alyamama@latest/400.css",
    "tags": [
      "arabic",
      "open-source",
      "serif",
      "variable",
      "greek"
    ]
  },
  {
    "id": "amiri",
    "family": "Amiri",
    "provider": "google-fonts",
    "license": "OFL-1.1",
    "category": "serif",
    "scripts": [
      "Arabic",
      "Latin",
      "Latin Extended"
    ],
    "subsets": [
      "arabic",
      "latin",
      "latin-ext"
    ],
    "weights": [
      400,
      700
    ],
    "styles": [
      "italic",
      "normal"
    ],
    "variable": false,
    "lastModified": "2025-08-26",
    "sourceUrl": "https://fonts.google.com/specimen/Amiri",
    "cssUrl": "https://fonts.googleapis.com/css2?family=Amiri:ital,wght@0,400;0,700;1,400;1,700&display=swap",
    "fontsourcePackage": "@fontsource/amiri",
    "fontsourceCssUrl": "https://cdn.jsdelivr.net/npm/@fontsource/amiri@latest/400.css",
    "tags": [
      "arabic",
      "open-source",
      "serif",
      "static",
      "naskh"
    ]
  },
  {
    "id": "amiri-quran",
    "family": "Amiri Quran",
    "provider": "google-fonts",
    "license": "OFL-1.1",
    "category": "serif",
    "scripts": [
      "Arabic",
      "Latin"
    ],
    "subsets": [
      "arabic",
      "latin"
    ],
    "weights": [
      400
    ],
    "styles": [
      "normal"
    ],
    "variable": false,
    "lastModified": "2025-08-26",
    "sourceUrl": "https://fonts.google.com/specimen/Amiri+Quran",
    "cssUrl": "https://fonts.googleapis.com/css2?family=Amiri+Quran:wght@400&display=swap",
    "fontsourcePackage": "@fontsource/amiri-quran",
    "fontsourceCssUrl": "https://cdn.jsdelivr.net/npm/@fontsource/amiri-quran@latest/400.css",
    "tags": [
      "arabic",
      "open-source",
      "serif",
      "static",
      "naskh"
    ]
  },
  {
    "id": "aref-ruqaa",
    "family": "Aref Ruqaa",
    "provider": "google-fonts",
    "license": "OFL-1.1",
    "category": "serif",
    "scripts": [
      "Arabic",
      "Latin",
      "Latin Extended"
    ],
    "subsets": [
      "arabic",
      "latin",
      "latin-ext"
    ],
    "weights": [
      400,
      700
    ],
    "styles": [
      "normal"
    ],
    "variable": false,
    "lastModified": "2025-09-11",
    "sourceUrl": "https://fonts.google.com/specimen/Aref+Ruqaa",
    "cssUrl": "https://fonts.googleapis.com/css2?family=Aref+Ruqaa:wght@400;700&display=swap",
    "fontsourcePackage": "@fontsource/aref-ruqaa",
    "fontsourceCssUrl": "https://cdn.jsdelivr.net/npm/@fontsource/aref-ruqaa@latest/400.css",
    "tags": [
      "arabic",
      "open-source",
      "serif",
      "static",
      "ruqaa",
      "calligraphic"
    ]
  },
  {
    "id": "aref-ruqaa-ink",
    "family": "Aref Ruqaa Ink",
    "provider": "google-fonts",
    "license": "OFL-1.1",
    "category": "serif",
    "scripts": [
      "Arabic",
      "Latin",
      "Latin Extended"
    ],
    "subsets": [
      "arabic",
      "latin",
      "latin-ext"
    ],
    "weights": [
      400,
      700
    ],
    "styles": [
      "normal"
    ],
    "variable": false,
    "lastModified": "2025-05-30",
    "sourceUrl": "https://fonts.google.com/specimen/Aref+Ruqaa+Ink",
    "cssUrl": "https://fonts.googleapis.com/css2?family=Aref+Ruqaa+Ink:wght@400;700&display=swap",
    "fontsourcePackage": "@fontsource/aref-ruqaa-ink",
    "fontsourceCssUrl": "https://cdn.jsdelivr.net/npm/@fontsource/aref-ruqaa-ink@latest/400.css",
    "tags": [
      "arabic",
      "open-source",
      "serif",
      "static",
      "ruqaa",
      "calligraphic"
    ]
  },
  {
    "id": "badeen-display",
    "family": "Badeen Display",
    "provider": "google-fonts",
    "license": "OFL-1.1",
    "category": "display",
    "scripts": [
      "Arabic",
      "Latin",
      "Latin Extended"
    ],
    "subsets": [
      "arabic",
      "latin",
      "latin-ext"
    ],
    "weights": [
      400
    ],
    "styles": [
      "normal"
    ],
    "variable": false,
    "lastModified": "2025-05-30",
    "sourceUrl": "https://fonts.google.com/specimen/Badeen+Display",
    "cssUrl": "https://fonts.googleapis.com/css2?family=Badeen+Display:wght@400&display=swap",
    "fontsourcePackage": "@fontsource/badeen-display",
    "fontsourceCssUrl": "https://cdn.jsdelivr.net/npm/@fontsource/badeen-display@latest/400.css",
    "tags": [
      "arabic",
      "open-source",
      "display",
      "static"
    ]
  },
  {
    "id": "baloo-bhaijaan-2",
    "family": "Baloo Bhaijaan 2",
    "provider": "google-fonts",
    "license": "OFL-1.1",
    "category": "display",
    "scripts": [
      "Arabic",
      "Latin",
      "Latin Extended",
      "vietnamese"
    ],
    "subsets": [
      "arabic",
      "latin",
      "latin-ext",
      "vietnamese"
    ],
    "weights": [
      400,
      500,
      600,
      700,
      800
    ],
    "styles": [
      "normal"
    ],
    "variable": true,
    "lastModified": "2025-09-16",
    "sourceUrl": "https://fonts.google.com/specimen/Baloo+Bhaijaan+2",
    "cssUrl": "https://fonts.googleapis.com/css2?family=Baloo+Bhaijaan+2:wght@400;500;600;700;800&display=swap",
    "fontsourcePackage": "@fontsource/baloo-bhaijaan-2",
    "fontsourceCssUrl": "https://cdn.jsdelivr.net/npm/@fontsource/baloo-bhaijaan-2@latest/400.css",
    "tags": [
      "arabic",
      "open-source",
      "display",
      "variable",
      "vietnamese"
    ]
  },
  {
    "id": "beiruti",
    "family": "Beiruti",
    "provider": "google-fonts",
    "license": "OFL-1.1",
    "category": "sans-serif",
    "scripts": [
      "Arabic",
      "Latin",
      "Latin Extended",
      "vietnamese"
    ],
    "subsets": [
      "arabic",
      "latin",
      "latin-ext",
      "vietnamese"
    ],
    "weights": [
      200,
      300,
      400,
      500,
      600,
      700,
      800,
      900
    ],
    "styles": [
      "normal"
    ],
    "variable": true,
    "lastModified": "2025-09-10",
    "sourceUrl": "https://fonts.google.com/specimen/Beiruti",
    "cssUrl": "https://fonts.googleapis.com/css2?family=Beiruti:wght@200;300;400;500;600;700;800;900&display=swap",
    "fontsourcePackage": "@fontsource/beiruti",
    "fontsourceCssUrl": "https://cdn.jsdelivr.net/npm/@fontsource/beiruti@latest/400.css",
    "tags": [
      "arabic",
      "open-source",
      "sans-serif",
      "variable",
      "vietnamese"
    ]
  },
  {
    "id": "blaka",
    "family": "Blaka",
    "provider": "google-fonts",
    "license": "OFL-1.1",
    "category": "display",
    "scripts": [
      "Arabic",
      "Latin",
      "Latin Extended"
    ],
    "subsets": [
      "arabic",
      "latin",
      "latin-ext"
    ],
    "weights": [
      400
    ],
    "styles": [
      "normal"
    ],
    "variable": false,
    "lastModified": "2025-09-16",
    "sourceUrl": "https://fonts.google.com/specimen/Blaka",
    "cssUrl": "https://fonts.googleapis.com/css2?family=Blaka:wght@400&display=swap",
    "fontsourcePackage": "@fontsource/blaka",
    "fontsourceCssUrl": "https://cdn.jsdelivr.net/npm/@fontsource/blaka@latest/400.css",
    "tags": [
      "arabic",
      "open-source",
      "display",
      "static"
    ]
  },
  {
    "id": "blaka-hollow",
    "family": "Blaka Hollow",
    "provider": "google-fonts",
    "license": "OFL-1.1",
    "category": "display",
    "scripts": [
      "Arabic",
      "Latin",
      "Latin Extended"
    ],
    "subsets": [
      "arabic",
      "latin",
      "latin-ext"
    ],
    "weights": [
      400
    ],
    "styles": [
      "normal"
    ],
    "variable": false,
    "lastModified": "2025-09-11",
    "sourceUrl": "https://fonts.google.com/specimen/Blaka+Hollow",
    "cssUrl": "https://fonts.googleapis.com/css2?family=Blaka+Hollow:wght@400&display=swap",
    "fontsourcePackage": "@fontsource/blaka-hollow",
    "fontsourceCssUrl": "https://cdn.jsdelivr.net/npm/@fontsource/blaka-hollow@latest/400.css",
    "tags": [
      "arabic",
      "open-source",
      "display",
      "static"
    ]
  },
  {
    "id": "blaka-ink",
    "family": "Blaka Ink",
    "provider": "google-fonts",
    "license": "OFL-1.1",
    "category": "display",
    "scripts": [
      "Arabic",
      "Latin",
      "Latin Extended"
    ],
    "subsets": [
      "arabic",
      "latin",
      "latin-ext"
    ],
    "weights": [
      400
    ],
    "styles": [
      "normal"
    ],
    "variable": false,
    "lastModified": "2025-05-30",
    "sourceUrl": "https://fonts.google.com/specimen/Blaka+Ink",
    "cssUrl": "https://fonts.googleapis.com/css2?family=Blaka+Ink:wght@400&display=swap",
    "fontsourcePackage": "@fontsource/blaka-ink",
    "fontsourceCssUrl": "https://cdn.jsdelivr.net/npm/@fontsource/blaka-ink@latest/400.css",
    "tags": [
      "arabic",
      "open-source",
      "display",
      "static"
    ]
  },
  {
    "id": "cairo",
    "family": "Cairo",
    "provider": "google-fonts",
    "license": "OFL-1.1",
    "category": "sans-serif",
    "scripts": [
      "Arabic",
      "Latin",
      "Latin Extended"
    ],
    "subsets": [
      "arabic",
      "latin",
      "latin-ext"
    ],
    "weights": [
      200,
      300,
      400,
      500,
      600,
      700,
      800,
      900
    ],
    "styles": [
      "normal"
    ],
    "variable": true,
    "lastModified": "2025-09-16",
    "sourceUrl": "https://fonts.google.com/specimen/Cairo",
    "cssUrl": "https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;500;600;700;800;900&display=swap",
    "fontsourcePackage": "@fontsource/cairo",
    "fontsourceCssUrl": "https://cdn.jsdelivr.net/npm/@fontsource/cairo@latest/400.css",
    "tags": [
      "arabic",
      "open-source",
      "sans-serif",
      "variable"
    ]
  },
  {
    "id": "cairo-play",
    "family": "Cairo Play",
    "provider": "google-fonts",
    "license": "OFL-1.1",
    "category": "sans-serif",
    "scripts": [
      "Arabic",
      "Latin",
      "Latin Extended"
    ],
    "subsets": [
      "arabic",
      "latin",
      "latin-ext"
    ],
    "weights": [
      200,
      300,
      400,
      500,
      600,
      700,
      800,
      900
    ],
    "styles": [
      "normal"
    ],
    "variable": true,
    "lastModified": "2025-09-16",
    "sourceUrl": "https://fonts.google.com/specimen/Cairo+Play",
    "cssUrl": "https://fonts.googleapis.com/css2?family=Cairo+Play:wght@200;300;400;500;600;700;800;900&display=swap",
    "fontsourcePackage": "@fontsource/cairo-play",
    "fontsourceCssUrl": "https://cdn.jsdelivr.net/npm/@fontsource/cairo-play@latest/400.css",
    "tags": [
      "arabic",
      "open-source",
      "sans-serif",
      "variable"
    ]
  },
  {
    "id": "cascadia-code",
    "family": "Cascadia Code",
    "provider": "google-fonts",
    "license": "OFL-1.1",
    "category": "sans-serif",
    "scripts": [
      "Arabic",
      "braille",
      "cyrillic",
      "cyrillic-ext",
      "greek",
      "hebrew",
      "Latin",
      "Latin Extended",
      "symbols2",
      "vietnamese"
    ],
    "subsets": [
      "arabic",
      "braille",
      "cyrillic",
      "cyrillic-ext",
      "greek",
      "hebrew",
      "latin",
      "latin-ext",
      "symbols2",
      "vietnamese"
    ],
    "weights": [
      200,
      300,
      400,
      500,
      600,
      700
    ],
    "styles": [
      "italic",
      "normal"
    ],
    "variable": true,
    "lastModified": "2025-09-16",
    "sourceUrl": "https://fonts.google.com/specimen/Cascadia+Code",
    "cssUrl": "https://fonts.googleapis.com/css2?family=Cascadia+Code:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,200;1,300;1,400;1,500;1,600;1,700&display=swap",
    "fontsourcePackage": "@fontsource/cascadia-code",
    "fontsourceCssUrl": "https://cdn.jsdelivr.net/npm/@fontsource/cascadia-code@latest/400.css",
    "tags": [
      "arabic",
      "open-source",
      "sans-serif",
      "variable",
      "braille",
      "cyrillic",
      "cyrillic-ext",
      "greek",
      "hebrew",
      "symbols2",
      "vietnamese"
    ]
  },
  {
    "id": "cascadia-mono",
    "family": "Cascadia Mono",
    "provider": "google-fonts",
    "license": "OFL-1.1",
    "category": "sans-serif",
    "scripts": [
      "Arabic",
      "braille",
      "cyrillic",
      "cyrillic-ext",
      "greek",
      "hebrew",
      "Latin",
      "Latin Extended",
      "symbols2",
      "vietnamese"
    ],
    "subsets": [
      "arabic",
      "braille",
      "cyrillic",
      "cyrillic-ext",
      "greek",
      "hebrew",
      "latin",
      "latin-ext",
      "symbols2",
      "vietnamese"
    ],
    "weights": [
      200,
      300,
      400,
      500,
      600,
      700
    ],
    "styles": [
      "italic",
      "normal"
    ],
    "variable": true,
    "lastModified": "2025-09-08",
    "sourceUrl": "https://fonts.google.com/specimen/Cascadia+Mono",
    "cssUrl": "https://fonts.googleapis.com/css2?family=Cascadia+Mono:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,200;1,300;1,400;1,500;1,600;1,700&display=swap",
    "fontsourcePackage": "@fontsource/cascadia-mono",
    "fontsourceCssUrl": "https://cdn.jsdelivr.net/npm/@fontsource/cascadia-mono@latest/400.css",
    "tags": [
      "arabic",
      "open-source",
      "sans-serif",
      "variable",
      "braille",
      "cyrillic",
      "cyrillic-ext",
      "greek",
      "hebrew",
      "symbols2",
      "vietnamese"
    ]
  },
  {
    "id": "changa",
    "family": "Changa",
    "provider": "google-fonts",
    "license": "OFL-1.1",
    "category": "sans-serif",
    "scripts": [
      "Arabic",
      "Latin",
      "Latin Extended"
    ],
    "subsets": [
      "arabic",
      "latin",
      "latin-ext"
    ],
    "weights": [
      200,
      300,
      400,
      500,
      600,
      700,
      800
    ],
    "styles": [
      "normal"
    ],
    "variable": true,
    "lastModified": "2025-09-10",
    "sourceUrl": "https://fonts.google.com/specimen/Changa",
    "cssUrl": "https://fonts.googleapis.com/css2?family=Changa:wght@200;300;400;500;600;700;800&display=swap",
    "fontsourcePackage": "@fontsource/changa",
    "fontsourceCssUrl": "https://cdn.jsdelivr.net/npm/@fontsource/changa@latest/400.css",
    "tags": [
      "arabic",
      "open-source",
      "sans-serif",
      "variable"
    ]
  },
  {
    "id": "el-messiri",
    "family": "El Messiri",
    "provider": "google-fonts",
    "license": "OFL-1.1",
    "category": "sans-serif",
    "scripts": [
      "Arabic",
      "cyrillic",
      "Latin",
      "Latin Extended"
    ],
    "subsets": [
      "arabic",
      "cyrillic",
      "latin",
      "latin-ext"
    ],
    "weights": [
      400,
      500,
      600,
      700
    ],
    "styles": [
      "normal"
    ],
    "variable": true,
    "lastModified": "2025-09-11",
    "sourceUrl": "https://fonts.google.com/specimen/El+Messiri",
    "cssUrl": "https://fonts.googleapis.com/css2?family=El+Messiri:wght@400;500;600;700&display=swap",
    "fontsourcePackage": "@fontsource/el-messiri",
    "fontsourceCssUrl": "https://cdn.jsdelivr.net/npm/@fontsource/el-messiri@latest/400.css",
    "tags": [
      "arabic",
      "open-source",
      "sans-serif",
      "variable",
      "cyrillic"
    ]
  },
  {
    "id": "estedad",
    "family": "Estedad",
    "provider": "google-fonts",
    "license": "OFL-1.1",
    "category": "sans-serif",
    "scripts": [
      "Arabic",
      "Latin",
      "Latin Extended",
      "vietnamese"
    ],
    "subsets": [
      "arabic",
      "latin",
      "latin-ext",
      "vietnamese"
    ],
    "weights": [
      100,
      200,
      300,
      400,
      500,
      600,
      700,
      800,
      900
    ],
    "styles": [
      "normal"
    ],
    "variable": true,
    "lastModified": "2026-05-13",
    "sourceUrl": "https://fonts.google.com/specimen/Estedad",
    "cssUrl": "https://fonts.googleapis.com/css2?family=Estedad:wght@100;200;300;400;500;600;700;800;900&display=swap",
    "fontsourcePackage": "@fontsource/estedad",
    "fontsourceCssUrl": "https://cdn.jsdelivr.net/npm/@fontsource/estedad@latest/400.css",
    "tags": [
      "arabic",
      "open-source",
      "sans-serif",
      "variable",
      "vietnamese"
    ]
  },
  {
    "id": "fustat",
    "family": "Fustat",
    "provider": "google-fonts",
    "license": "OFL-1.1",
    "category": "sans-serif",
    "scripts": [
      "Arabic",
      "Latin",
      "Latin Extended"
    ],
    "subsets": [
      "arabic",
      "latin",
      "latin-ext"
    ],
    "weights": [
      200,
      300,
      400,
      500,
      600,
      700,
      800
    ],
    "styles": [
      "normal"
    ],
    "variable": true,
    "lastModified": "2025-09-16",
    "sourceUrl": "https://fonts.google.com/specimen/Fustat",
    "cssUrl": "https://fonts.googleapis.com/css2?family=Fustat:wght@200;300;400;500;600;700;800&display=swap",
    "fontsourcePackage": "@fontsource/fustat",
    "fontsourceCssUrl": "https://cdn.jsdelivr.net/npm/@fontsource/fustat@latest/400.css",
    "tags": [
      "arabic",
      "open-source",
      "sans-serif",
      "variable"
    ]
  },
  {
    "id": "gulzar",
    "family": "Gulzar",
    "provider": "google-fonts",
    "license": "OFL-1.1",
    "category": "serif",
    "scripts": [
      "Arabic",
      "Latin",
      "Latin Extended"
    ],
    "subsets": [
      "arabic",
      "latin",
      "latin-ext"
    ],
    "weights": [
      400
    ],
    "styles": [
      "normal"
    ],
    "variable": false,
    "lastModified": "2025-09-05",
    "sourceUrl": "https://fonts.google.com/specimen/Gulzar",
    "cssUrl": "https://fonts.googleapis.com/css2?family=Gulzar:wght@400&display=swap",
    "fontsourcePackage": "@fontsource/gulzar",
    "fontsourceCssUrl": "https://cdn.jsdelivr.net/npm/@fontsource/gulzar@latest/400.css",
    "tags": [
      "arabic",
      "open-source",
      "serif",
      "static",
      "nastaliq",
      "calligraphic"
    ]
  },
  {
    "id": "handjet",
    "family": "Handjet",
    "provider": "google-fonts",
    "license": "OFL-1.1",
    "category": "display",
    "scripts": [
      "Arabic",
      "armenian",
      "cyrillic",
      "cyrillic-ext",
      "greek",
      "hebrew",
      "Latin",
      "Latin Extended",
      "vietnamese"
    ],
    "subsets": [
      "arabic",
      "armenian",
      "cyrillic",
      "cyrillic-ext",
      "greek",
      "hebrew",
      "latin",
      "latin-ext",
      "vietnamese"
    ],
    "weights": [
      100,
      200,
      300,
      400,
      500,
      600,
      700,
      800,
      900
    ],
    "styles": [
      "normal"
    ],
    "variable": true,
    "lastModified": "2025-09-16",
    "sourceUrl": "https://fonts.google.com/specimen/Handjet",
    "cssUrl": "https://fonts.googleapis.com/css2?family=Handjet:wght@100;200;300;400;500;600;700;800;900&display=swap",
    "fontsourcePackage": "@fontsource/handjet",
    "fontsourceCssUrl": "https://cdn.jsdelivr.net/npm/@fontsource/handjet@latest/400.css",
    "tags": [
      "arabic",
      "open-source",
      "display",
      "variable",
      "armenian",
      "cyrillic",
      "cyrillic-ext",
      "greek",
      "hebrew",
      "vietnamese"
    ]
  },
  {
    "id": "harmattan",
    "family": "Harmattan",
    "provider": "google-fonts",
    "license": "OFL-1.1",
    "category": "sans-serif",
    "scripts": [
      "Arabic",
      "Latin",
      "Latin Extended"
    ],
    "subsets": [
      "arabic",
      "latin",
      "latin-ext"
    ],
    "weights": [
      400,
      500,
      600,
      700
    ],
    "styles": [
      "normal"
    ],
    "variable": false,
    "lastModified": "2025-09-16",
    "sourceUrl": "https://fonts.google.com/specimen/Harmattan",
    "cssUrl": "https://fonts.googleapis.com/css2?family=Harmattan:wght@400;500;600;700&display=swap",
    "fontsourcePackage": "@fontsource/harmattan",
    "fontsourceCssUrl": "https://cdn.jsdelivr.net/npm/@fontsource/harmattan@latest/400.css",
    "tags": [
      "arabic",
      "open-source",
      "sans-serif",
      "static"
    ]
  },
  {
    "id": "ibm-plex-sans-arabic",
    "family": "IBM Plex Sans Arabic",
    "provider": "google-fonts",
    "license": "OFL-1.1",
    "category": "sans-serif",
    "scripts": [
      "Arabic",
      "cyrillic-ext",
      "Latin",
      "Latin Extended"
    ],
    "subsets": [
      "arabic",
      "cyrillic-ext",
      "latin",
      "latin-ext"
    ],
    "weights": [
      100,
      200,
      300,
      400,
      500,
      600,
      700
    ],
    "styles": [
      "normal"
    ],
    "variable": false,
    "lastModified": "2026-03-03",
    "sourceUrl": "https://fonts.google.com/specimen/IBM+Plex+Sans+Arabic",
    "cssUrl": "https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@100;200;300;400;500;600;700&display=swap",
    "fontsourcePackage": "@fontsource/ibm-plex-sans-arabic",
    "fontsourceCssUrl": "https://cdn.jsdelivr.net/npm/@fontsource/ibm-plex-sans-arabic@latest/400.css",
    "tags": [
      "arabic",
      "open-source",
      "sans-serif",
      "static",
      "cyrillic-ext"
    ]
  },
  {
    "id": "jomhuria",
    "family": "Jomhuria",
    "provider": "google-fonts",
    "license": "OFL-1.1",
    "category": "display",
    "scripts": [
      "Arabic",
      "Latin",
      "Latin Extended"
    ],
    "subsets": [
      "arabic",
      "latin",
      "latin-ext"
    ],
    "weights": [
      400
    ],
    "styles": [
      "normal"
    ],
    "variable": false,
    "lastModified": "2026-06-30",
    "sourceUrl": "https://fonts.google.com/specimen/Jomhuria",
    "cssUrl": "https://fonts.googleapis.com/css2?family=Jomhuria:wght@400&display=swap",
    "fontsourcePackage": "@fontsource/jomhuria",
    "fontsourceCssUrl": "https://cdn.jsdelivr.net/npm/@fontsource/jomhuria@latest/400.css",
    "tags": [
      "arabic",
      "open-source",
      "display",
      "static"
    ]
  },
  {
    "id": "katibeh",
    "family": "Katibeh",
    "provider": "google-fonts",
    "license": "OFL-1.1",
    "category": "display",
    "scripts": [
      "Arabic",
      "Latin",
      "Latin Extended"
    ],
    "subsets": [
      "arabic",
      "latin",
      "latin-ext"
    ],
    "weights": [
      400
    ],
    "styles": [
      "normal"
    ],
    "variable": false,
    "lastModified": "2025-09-10",
    "sourceUrl": "https://fonts.google.com/specimen/Katibeh",
    "cssUrl": "https://fonts.googleapis.com/css2?family=Katibeh:wght@400&display=swap",
    "fontsourcePackage": "@fontsource/katibeh",
    "fontsourceCssUrl": "https://cdn.jsdelivr.net/npm/@fontsource/katibeh@latest/400.css",
    "tags": [
      "arabic",
      "open-source",
      "display",
      "static",
      "calligraphic"
    ]
  },
  {
    "id": "kufam",
    "family": "Kufam",
    "provider": "google-fonts",
    "license": "OFL-1.1",
    "category": "sans-serif",
    "scripts": [
      "Arabic",
      "Latin",
      "Latin Extended",
      "vietnamese"
    ],
    "subsets": [
      "arabic",
      "latin",
      "latin-ext",
      "vietnamese"
    ],
    "weights": [
      400,
      500,
      600,
      700,
      800,
      900
    ],
    "styles": [
      "italic",
      "normal"
    ],
    "variable": true,
    "lastModified": "2025-09-02",
    "sourceUrl": "https://fonts.google.com/specimen/Kufam",
    "cssUrl": "https://fonts.googleapis.com/css2?family=Kufam:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
    "fontsourcePackage": "@fontsource/kufam",
    "fontsourceCssUrl": "https://cdn.jsdelivr.net/npm/@fontsource/kufam@latest/400.css",
    "tags": [
      "arabic",
      "open-source",
      "sans-serif",
      "variable",
      "vietnamese"
    ]
  },
  {
    "id": "lalezar",
    "family": "Lalezar",
    "provider": "google-fonts",
    "license": "OFL-1.1",
    "category": "sans-serif",
    "scripts": [
      "Arabic",
      "Latin",
      "Latin Extended",
      "vietnamese"
    ],
    "subsets": [
      "arabic",
      "latin",
      "latin-ext",
      "vietnamese"
    ],
    "weights": [
      400
    ],
    "styles": [
      "normal"
    ],
    "variable": false,
    "lastModified": "2025-09-16",
    "sourceUrl": "https://fonts.google.com/specimen/Lalezar",
    "cssUrl": "https://fonts.googleapis.com/css2?family=Lalezar:wght@400&display=swap",
    "fontsourcePackage": "@fontsource/lalezar",
    "fontsourceCssUrl": "https://cdn.jsdelivr.net/npm/@fontsource/lalezar@latest/400.css",
    "tags": [
      "arabic",
      "open-source",
      "sans-serif",
      "static",
      "vietnamese"
    ]
  },
  {
    "id": "lateef",
    "family": "Lateef",
    "provider": "google-fonts",
    "license": "OFL-1.1",
    "category": "serif",
    "scripts": [
      "Arabic",
      "Latin",
      "Latin Extended"
    ],
    "subsets": [
      "arabic",
      "latin",
      "latin-ext"
    ],
    "weights": [
      200,
      300,
      400,
      500,
      600,
      700,
      800
    ],
    "styles": [
      "normal"
    ],
    "variable": false,
    "lastModified": "2025-09-16",
    "sourceUrl": "https://fonts.google.com/specimen/Lateef",
    "cssUrl": "https://fonts.googleapis.com/css2?family=Lateef:wght@200;300;400;500;600;700;800&display=swap",
    "fontsourcePackage": "@fontsource/lateef",
    "fontsourceCssUrl": "https://cdn.jsdelivr.net/npm/@fontsource/lateef@latest/400.css",
    "tags": [
      "arabic",
      "open-source",
      "serif",
      "static",
      "calligraphic"
    ]
  },
  {
    "id": "lemonada",
    "family": "Lemonada",
    "provider": "google-fonts",
    "license": "OFL-1.1",
    "category": "display",
    "scripts": [
      "Arabic",
      "Latin",
      "Latin Extended",
      "vietnamese"
    ],
    "subsets": [
      "arabic",
      "latin",
      "latin-ext",
      "vietnamese"
    ],
    "weights": [
      300,
      400,
      500,
      600,
      700
    ],
    "styles": [
      "normal"
    ],
    "variable": true,
    "lastModified": "2025-09-02",
    "sourceUrl": "https://fonts.google.com/specimen/Lemonada",
    "cssUrl": "https://fonts.googleapis.com/css2?family=Lemonada:wght@300;400;500;600;700&display=swap",
    "fontsourcePackage": "@fontsource/lemonada",
    "fontsourceCssUrl": "https://cdn.jsdelivr.net/npm/@fontsource/lemonada@latest/400.css",
    "tags": [
      "arabic",
      "open-source",
      "display",
      "variable",
      "vietnamese"
    ]
  },
  {
    "id": "mada",
    "family": "Mada",
    "provider": "google-fonts",
    "license": "OFL-1.1",
    "category": "sans-serif",
    "scripts": [
      "Arabic",
      "Latin",
      "Latin Extended"
    ],
    "subsets": [
      "arabic",
      "latin",
      "latin-ext"
    ],
    "weights": [
      200,
      300,
      400,
      500,
      600,
      700,
      800,
      900
    ],
    "styles": [
      "normal"
    ],
    "variable": true,
    "lastModified": "2025-09-05",
    "sourceUrl": "https://fonts.google.com/specimen/Mada",
    "cssUrl": "https://fonts.googleapis.com/css2?family=Mada:wght@200;300;400;500;600;700;800;900&display=swap",
    "fontsourcePackage": "@fontsource/mada",
    "fontsourceCssUrl": "https://cdn.jsdelivr.net/npm/@fontsource/mada@latest/400.css",
    "tags": [
      "arabic",
      "open-source",
      "sans-serif",
      "variable"
    ]
  },
  {
    "id": "marhey",
    "family": "Marhey",
    "provider": "google-fonts",
    "license": "OFL-1.1",
    "category": "display",
    "scripts": [
      "Arabic",
      "Latin",
      "Latin Extended"
    ],
    "subsets": [
      "arabic",
      "latin",
      "latin-ext"
    ],
    "weights": [
      300,
      400,
      500,
      600,
      700
    ],
    "styles": [
      "normal"
    ],
    "variable": true,
    "lastModified": "2025-09-08",
    "sourceUrl": "https://fonts.google.com/specimen/Marhey",
    "cssUrl": "https://fonts.googleapis.com/css2?family=Marhey:wght@300;400;500;600;700&display=swap",
    "fontsourcePackage": "@fontsource/marhey",
    "fontsourceCssUrl": "https://cdn.jsdelivr.net/npm/@fontsource/marhey@latest/400.css",
    "tags": [
      "arabic",
      "open-source",
      "display",
      "variable"
    ]
  },
  {
    "id": "markazi-text",
    "family": "Markazi Text",
    "provider": "google-fonts",
    "license": "OFL-1.1",
    "category": "serif",
    "scripts": [
      "Arabic",
      "Latin",
      "Latin Extended",
      "vietnamese"
    ],
    "subsets": [
      "arabic",
      "latin",
      "latin-ext",
      "vietnamese"
    ],
    "weights": [
      400,
      500,
      600,
      700
    ],
    "styles": [
      "normal"
    ],
    "variable": true,
    "lastModified": "2025-09-05",
    "sourceUrl": "https://fonts.google.com/specimen/Markazi+Text",
    "cssUrl": "https://fonts.googleapis.com/css2?family=Markazi+Text:wght@400;500;600;700&display=swap",
    "fontsourcePackage": "@fontsource/markazi-text",
    "fontsourceCssUrl": "https://cdn.jsdelivr.net/npm/@fontsource/markazi-text@latest/400.css",
    "tags": [
      "arabic",
      "open-source",
      "serif",
      "variable",
      "vietnamese",
      "naskh"
    ]
  },
  {
    "id": "mirza",
    "family": "Mirza",
    "provider": "google-fonts",
    "license": "OFL-1.1",
    "category": "serif",
    "scripts": [
      "Arabic",
      "Latin",
      "Latin Extended"
    ],
    "subsets": [
      "arabic",
      "latin",
      "latin-ext"
    ],
    "weights": [
      400,
      500,
      600,
      700
    ],
    "styles": [
      "normal"
    ],
    "variable": false,
    "lastModified": "2025-09-08",
    "sourceUrl": "https://fonts.google.com/specimen/Mirza",
    "cssUrl": "https://fonts.googleapis.com/css2?family=Mirza:wght@400;500;600;700&display=swap",
    "fontsourcePackage": "@fontsource/mirza",
    "fontsourceCssUrl": "https://cdn.jsdelivr.net/npm/@fontsource/mirza@latest/400.css",
    "tags": [
      "arabic",
      "open-source",
      "serif",
      "static",
      "naskh"
    ]
  },
  {
    "id": "noto-kufi-arabic",
    "family": "Noto Kufi Arabic",
    "provider": "google-fonts",
    "license": "OFL-1.1",
    "category": "sans-serif",
    "scripts": [
      "Arabic",
      "Latin",
      "Latin Extended",
      "math",
      "symbols"
    ],
    "subsets": [
      "arabic",
      "latin",
      "latin-ext",
      "math",
      "symbols"
    ],
    "weights": [
      100,
      200,
      300,
      400,
      500,
      600,
      700,
      800,
      900
    ],
    "styles": [
      "normal"
    ],
    "variable": true,
    "lastModified": "2025-09-11",
    "sourceUrl": "https://fonts.google.com/specimen/Noto+Kufi+Arabic",
    "cssUrl": "https://fonts.googleapis.com/css2?family=Noto+Kufi+Arabic:wght@100;200;300;400;500;600;700;800;900&display=swap",
    "fontsourcePackage": "@fontsource/noto-kufi-arabic",
    "fontsourceCssUrl": "https://cdn.jsdelivr.net/npm/@fontsource/noto-kufi-arabic@latest/400.css",
    "tags": [
      "arabic",
      "open-source",
      "sans-serif",
      "variable",
      "math",
      "symbols",
      "kufi"
    ]
  },
  {
    "id": "noto-naskh-arabic",
    "family": "Noto Naskh Arabic",
    "provider": "google-fonts",
    "license": "OFL-1.1",
    "category": "serif",
    "scripts": [
      "Arabic",
      "Latin",
      "Latin Extended",
      "math",
      "symbols"
    ],
    "subsets": [
      "arabic",
      "latin",
      "latin-ext",
      "math",
      "symbols"
    ],
    "weights": [
      400,
      500,
      600,
      700
    ],
    "styles": [
      "normal"
    ],
    "variable": true,
    "lastModified": "2026-01-28",
    "sourceUrl": "https://fonts.google.com/specimen/Noto+Naskh+Arabic",
    "cssUrl": "https://fonts.googleapis.com/css2?family=Noto+Naskh+Arabic:wght@400;500;600;700&display=swap",
    "fontsourcePackage": "@fontsource/noto-naskh-arabic",
    "fontsourceCssUrl": "https://cdn.jsdelivr.net/npm/@fontsource/noto-naskh-arabic@latest/400.css",
    "tags": [
      "arabic",
      "open-source",
      "serif",
      "variable",
      "math",
      "symbols",
      "naskh"
    ]
  },
  {
    "id": "noto-nastaliq-urdu",
    "family": "Noto Nastaliq Urdu",
    "provider": "google-fonts",
    "license": "OFL-1.1",
    "category": "serif",
    "scripts": [
      "Arabic",
      "Latin",
      "Latin Extended"
    ],
    "subsets": [
      "arabic",
      "latin",
      "latin-ext"
    ],
    "weights": [
      400,
      500,
      600,
      700
    ],
    "styles": [
      "normal"
    ],
    "variable": true,
    "lastModified": "2025-09-02",
    "sourceUrl": "https://fonts.google.com/specimen/Noto+Nastaliq+Urdu",
    "cssUrl": "https://fonts.googleapis.com/css2?family=Noto+Nastaliq+Urdu:wght@400;500;600;700&display=swap",
    "fontsourcePackage": "@fontsource/noto-nastaliq-urdu",
    "fontsourceCssUrl": "https://cdn.jsdelivr.net/npm/@fontsource/noto-nastaliq-urdu@latest/400.css",
    "tags": [
      "arabic",
      "open-source",
      "serif",
      "variable",
      "nastaliq",
      "calligraphic"
    ]
  },
  {
    "id": "noto-sans-arabic",
    "family": "Noto Sans Arabic",
    "provider": "google-fonts",
    "license": "OFL-1.1",
    "category": "sans-serif",
    "scripts": [
      "Arabic",
      "Latin",
      "Latin Extended",
      "math",
      "symbols"
    ],
    "subsets": [
      "arabic",
      "latin",
      "latin-ext",
      "math",
      "symbols"
    ],
    "weights": [
      100,
      200,
      300,
      400,
      500,
      600,
      700,
      800,
      900
    ],
    "styles": [
      "normal"
    ],
    "variable": true,
    "lastModified": "2025-09-17",
    "sourceUrl": "https://fonts.google.com/specimen/Noto+Sans+Arabic",
    "cssUrl": "https://fonts.googleapis.com/css2?family=Noto+Sans+Arabic:wght@100;200;300;400;500;600;700;800;900&display=swap",
    "fontsourcePackage": "@fontsource/noto-sans-arabic",
    "fontsourceCssUrl": "https://cdn.jsdelivr.net/npm/@fontsource/noto-sans-arabic@latest/400.css",
    "tags": [
      "arabic",
      "open-source",
      "sans-serif",
      "variable",
      "math",
      "symbols"
    ]
  },
  {
    "id": "oi",
    "family": "Oi",
    "provider": "google-fonts",
    "license": "OFL-1.1",
    "category": "display",
    "scripts": [
      "Arabic",
      "cyrillic",
      "cyrillic-ext",
      "greek",
      "Latin",
      "Latin Extended",
      "tamil",
      "vietnamese"
    ],
    "subsets": [
      "arabic",
      "cyrillic",
      "cyrillic-ext",
      "greek",
      "latin",
      "latin-ext",
      "tamil",
      "vietnamese"
    ],
    "weights": [
      400
    ],
    "styles": [
      "normal"
    ],
    "variable": false,
    "lastModified": "2025-09-05",
    "sourceUrl": "https://fonts.google.com/specimen/Oi",
    "cssUrl": "https://fonts.googleapis.com/css2?family=Oi:wght@400&display=swap",
    "fontsourcePackage": "@fontsource/oi",
    "fontsourceCssUrl": "https://cdn.jsdelivr.net/npm/@fontsource/oi@latest/400.css",
    "tags": [
      "arabic",
      "open-source",
      "display",
      "static",
      "cyrillic",
      "cyrillic-ext",
      "greek",
      "tamil",
      "vietnamese"
    ]
  },
  {
    "id": "parastoo",
    "family": "Parastoo",
    "provider": "google-fonts",
    "license": "OFL-1.1",
    "category": "serif",
    "scripts": [
      "Arabic",
      "Latin",
      "Latin Extended",
      "vietnamese"
    ],
    "subsets": [
      "arabic",
      "latin",
      "latin-ext",
      "vietnamese"
    ],
    "weights": [
      400,
      500,
      600,
      700
    ],
    "styles": [
      "normal"
    ],
    "variable": true,
    "lastModified": "2025-10-29",
    "sourceUrl": "https://fonts.google.com/specimen/Parastoo",
    "cssUrl": "https://fonts.googleapis.com/css2?family=Parastoo:wght@400;500;600;700&display=swap",
    "fontsourcePackage": "@fontsource/parastoo",
    "fontsourceCssUrl": "https://cdn.jsdelivr.net/npm/@fontsource/parastoo@latest/400.css",
    "tags": [
      "arabic",
      "open-source",
      "serif",
      "variable",
      "vietnamese",
      "nastaliq",
      "calligraphic"
    ]
  },
  {
    "id": "playpen-sans-arabic",
    "family": "Playpen Sans Arabic",
    "provider": "google-fonts",
    "license": "OFL-1.1",
    "category": "handwriting",
    "scripts": [
      "Arabic",
      "emoji",
      "Latin",
      "Latin Extended",
      "math"
    ],
    "subsets": [
      "arabic",
      "emoji",
      "latin",
      "latin-ext",
      "math"
    ],
    "weights": [
      100,
      200,
      300,
      400,
      500,
      600,
      700,
      800
    ],
    "styles": [
      "normal"
    ],
    "variable": true,
    "lastModified": "2025-09-10",
    "sourceUrl": "https://fonts.google.com/specimen/Playpen+Sans+Arabic",
    "cssUrl": "https://fonts.googleapis.com/css2?family=Playpen+Sans+Arabic:wght@100;200;300;400;500;600;700;800&display=swap",
    "fontsourcePackage": "@fontsource/playpen-sans-arabic",
    "fontsourceCssUrl": "https://cdn.jsdelivr.net/npm/@fontsource/playpen-sans-arabic@latest/400.css",
    "tags": [
      "arabic",
      "open-source",
      "handwriting",
      "variable",
      "emoji",
      "math"
    ]
  },
  {
    "id": "qahiri",
    "family": "Qahiri",
    "provider": "google-fonts",
    "license": "OFL-1.1",
    "category": "sans-serif",
    "scripts": [
      "Arabic",
      "Latin"
    ],
    "subsets": [
      "arabic",
      "latin"
    ],
    "weights": [
      400
    ],
    "styles": [
      "normal"
    ],
    "variable": false,
    "lastModified": "2025-09-10",
    "sourceUrl": "https://fonts.google.com/specimen/Qahiri",
    "cssUrl": "https://fonts.googleapis.com/css2?family=Qahiri:wght@400&display=swap",
    "fontsourcePackage": "@fontsource/qahiri",
    "fontsourceCssUrl": "https://cdn.jsdelivr.net/npm/@fontsource/qahiri@latest/400.css",
    "tags": [
      "arabic",
      "open-source",
      "sans-serif",
      "static"
    ]
  },
  {
    "id": "rakkas",
    "family": "Rakkas",
    "provider": "google-fonts",
    "license": "OFL-1.1",
    "category": "display",
    "scripts": [
      "Arabic",
      "Latin",
      "Latin Extended"
    ],
    "subsets": [
      "arabic",
      "latin",
      "latin-ext"
    ],
    "weights": [
      400
    ],
    "styles": [
      "normal"
    ],
    "variable": false,
    "lastModified": "2025-09-10",
    "sourceUrl": "https://fonts.google.com/specimen/Rakkas",
    "cssUrl": "https://fonts.googleapis.com/css2?family=Rakkas:wght@400&display=swap",
    "fontsourcePackage": "@fontsource/rakkas",
    "fontsourceCssUrl": "https://cdn.jsdelivr.net/npm/@fontsource/rakkas@latest/400.css",
    "tags": [
      "arabic",
      "open-source",
      "display",
      "static"
    ]
  },
  {
    "id": "readex-pro",
    "family": "Readex Pro",
    "provider": "google-fonts",
    "license": "OFL-1.1",
    "category": "sans-serif",
    "scripts": [
      "Arabic",
      "Latin",
      "Latin Extended",
      "vietnamese"
    ],
    "subsets": [
      "arabic",
      "latin",
      "latin-ext",
      "vietnamese"
    ],
    "weights": [
      200,
      300,
      400,
      500,
      600,
      700
    ],
    "styles": [
      "normal"
    ],
    "variable": true,
    "lastModified": "2025-09-10",
    "sourceUrl": "https://fonts.google.com/specimen/Readex+Pro",
    "cssUrl": "https://fonts.googleapis.com/css2?family=Readex+Pro:wght@200;300;400;500;600;700&display=swap",
    "fontsourcePackage": "@fontsource/readex-pro",
    "fontsourceCssUrl": "https://cdn.jsdelivr.net/npm/@fontsource/readex-pro@latest/400.css",
    "tags": [
      "arabic",
      "open-source",
      "sans-serif",
      "variable",
      "vietnamese"
    ]
  },
  {
    "id": "reem-kufi",
    "family": "Reem Kufi",
    "provider": "google-fonts",
    "license": "OFL-1.1",
    "category": "sans-serif",
    "scripts": [
      "Arabic",
      "Latin",
      "Latin Extended",
      "vietnamese"
    ],
    "subsets": [
      "arabic",
      "latin",
      "latin-ext",
      "vietnamese"
    ],
    "weights": [
      400,
      500,
      600,
      700
    ],
    "styles": [
      "normal"
    ],
    "variable": true,
    "lastModified": "2025-09-05",
    "sourceUrl": "https://fonts.google.com/specimen/Reem+Kufi",
    "cssUrl": "https://fonts.googleapis.com/css2?family=Reem+Kufi:wght@400;500;600;700&display=swap",
    "fontsourcePackage": "@fontsource/reem-kufi",
    "fontsourceCssUrl": "https://cdn.jsdelivr.net/npm/@fontsource/reem-kufi@latest/400.css",
    "tags": [
      "arabic",
      "open-source",
      "sans-serif",
      "variable",
      "vietnamese",
      "kufi"
    ]
  },
  {
    "id": "reem-kufi-fun",
    "family": "Reem Kufi Fun",
    "provider": "google-fonts",
    "license": "OFL-1.1",
    "category": "sans-serif",
    "scripts": [
      "Arabic",
      "Latin",
      "Latin Extended",
      "vietnamese"
    ],
    "subsets": [
      "arabic",
      "latin",
      "latin-ext",
      "vietnamese"
    ],
    "weights": [
      400,
      500,
      600,
      700
    ],
    "styles": [
      "normal"
    ],
    "variable": true,
    "lastModified": "2025-09-02",
    "sourceUrl": "https://fonts.google.com/specimen/Reem+Kufi+Fun",
    "cssUrl": "https://fonts.googleapis.com/css2?family=Reem+Kufi+Fun:wght@400;500;600;700&display=swap",
    "fontsourcePackage": "@fontsource/reem-kufi-fun",
    "fontsourceCssUrl": "https://cdn.jsdelivr.net/npm/@fontsource/reem-kufi-fun@latest/400.css",
    "tags": [
      "arabic",
      "open-source",
      "sans-serif",
      "variable",
      "vietnamese",
      "kufi"
    ]
  },
  {
    "id": "reem-kufi-ink",
    "family": "Reem Kufi Ink",
    "provider": "google-fonts",
    "license": "OFL-1.1",
    "category": "sans-serif",
    "scripts": [
      "Arabic",
      "Latin",
      "Latin Extended",
      "vietnamese"
    ],
    "subsets": [
      "arabic",
      "latin",
      "latin-ext",
      "vietnamese"
    ],
    "weights": [
      400
    ],
    "styles": [
      "normal"
    ],
    "variable": false,
    "lastModified": "2025-06-25",
    "sourceUrl": "https://fonts.google.com/specimen/Reem+Kufi+Ink",
    "cssUrl": "https://fonts.googleapis.com/css2?family=Reem+Kufi+Ink:wght@400&display=swap",
    "fontsourcePackage": "@fontsource/reem-kufi-ink",
    "fontsourceCssUrl": "https://cdn.jsdelivr.net/npm/@fontsource/reem-kufi-ink@latest/400.css",
    "tags": [
      "arabic",
      "open-source",
      "sans-serif",
      "static",
      "vietnamese",
      "kufi"
    ]
  },
  {
    "id": "rubik",
    "family": "Rubik",
    "provider": "google-fonts",
    "license": "OFL-1.1",
    "category": "sans-serif",
    "scripts": [
      "Arabic",
      "cyrillic",
      "cyrillic-ext",
      "hebrew",
      "Latin",
      "Latin Extended"
    ],
    "subsets": [
      "arabic",
      "cyrillic",
      "cyrillic-ext",
      "hebrew",
      "latin",
      "latin-ext"
    ],
    "weights": [
      300,
      400,
      500,
      600,
      700,
      800,
      900
    ],
    "styles": [
      "italic",
      "normal"
    ],
    "variable": true,
    "lastModified": "2025-09-10",
    "sourceUrl": "https://fonts.google.com/specimen/Rubik",
    "cssUrl": "https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
    "fontsourcePackage": "@fontsource/rubik",
    "fontsourceCssUrl": "https://cdn.jsdelivr.net/npm/@fontsource/rubik@latest/400.css",
    "tags": [
      "arabic",
      "open-source",
      "sans-serif",
      "variable",
      "cyrillic",
      "cyrillic-ext",
      "hebrew"
    ]
  },
  {
    "id": "ruwudu",
    "family": "Ruwudu",
    "provider": "google-fonts",
    "license": "OFL-1.1",
    "category": "serif",
    "scripts": [
      "Arabic",
      "Latin",
      "Latin Extended"
    ],
    "subsets": [
      "arabic",
      "latin",
      "latin-ext"
    ],
    "weights": [
      400,
      500,
      600,
      700
    ],
    "styles": [
      "normal"
    ],
    "variable": false,
    "lastModified": "2025-05-30",
    "sourceUrl": "https://fonts.google.com/specimen/Ruwudu",
    "cssUrl": "https://fonts.googleapis.com/css2?family=Ruwudu:wght@400;500;600;700&display=swap",
    "fontsourcePackage": "@fontsource/ruwudu",
    "fontsourceCssUrl": "https://cdn.jsdelivr.net/npm/@fontsource/ruwudu@latest/400.css",
    "tags": [
      "arabic",
      "open-source",
      "serif",
      "static",
      "naskh"
    ]
  },
  {
    "id": "scheherazade-new",
    "family": "Scheherazade New",
    "provider": "google-fonts",
    "license": "OFL-1.1",
    "category": "serif",
    "scripts": [
      "Arabic",
      "Latin",
      "Latin Extended"
    ],
    "subsets": [
      "arabic",
      "latin",
      "latin-ext"
    ],
    "weights": [
      400,
      500,
      600,
      700
    ],
    "styles": [
      "normal"
    ],
    "variable": false,
    "lastModified": "2026-05-13",
    "sourceUrl": "https://fonts.google.com/specimen/Scheherazade+New",
    "cssUrl": "https://fonts.googleapis.com/css2?family=Scheherazade+New:wght@400;500;600;700&display=swap",
    "fontsourcePackage": "@fontsource/scheherazade-new",
    "fontsourceCssUrl": "https://cdn.jsdelivr.net/npm/@fontsource/scheherazade-new@latest/400.css",
    "tags": [
      "arabic",
      "open-source",
      "serif",
      "static",
      "naskh"
    ]
  },
  {
    "id": "tajawal",
    "family": "Tajawal",
    "provider": "google-fonts",
    "license": "OFL-1.1",
    "category": "sans-serif",
    "scripts": [
      "Arabic",
      "Latin"
    ],
    "subsets": [
      "arabic",
      "latin"
    ],
    "weights": [
      200,
      300,
      400,
      500,
      700,
      800,
      900
    ],
    "styles": [
      "normal"
    ],
    "variable": false,
    "lastModified": "2025-09-08",
    "sourceUrl": "https://fonts.google.com/specimen/Tajawal",
    "cssUrl": "https://fonts.googleapis.com/css2?family=Tajawal:wght@200;300;400;500;700;800;900&display=swap",
    "fontsourcePackage": "@fontsource/tajawal",
    "fontsourceCssUrl": "https://cdn.jsdelivr.net/npm/@fontsource/tajawal@latest/400.css",
    "tags": [
      "arabic",
      "open-source",
      "sans-serif",
      "static"
    ]
  },
  {
    "id": "vazirmatn",
    "family": "Vazirmatn",
    "provider": "google-fonts",
    "license": "OFL-1.1",
    "category": "sans-serif",
    "scripts": [
      "Arabic",
      "Latin",
      "Latin Extended"
    ],
    "subsets": [
      "arabic",
      "latin",
      "latin-ext"
    ],
    "weights": [
      100,
      200,
      300,
      400,
      500,
      600,
      700,
      800,
      900
    ],
    "styles": [
      "normal"
    ],
    "variable": true,
    "lastModified": "2025-09-10",
    "sourceUrl": "https://fonts.google.com/specimen/Vazirmatn",
    "cssUrl": "https://fonts.googleapis.com/css2?family=Vazirmatn:wght@100;200;300;400;500;600;700;800;900&display=swap",
    "fontsourcePackage": "@fontsource/vazirmatn",
    "fontsourceCssUrl": "https://cdn.jsdelivr.net/npm/@fontsource/vazirmatn@latest/400.css",
    "tags": [
      "arabic",
      "open-source",
      "sans-serif",
      "variable"
    ]
  },
  {
    "id": "vibes",
    "family": "Vibes",
    "provider": "google-fonts",
    "license": "OFL-1.1",
    "category": "display",
    "scripts": [
      "Arabic",
      "Latin"
    ],
    "subsets": [
      "arabic",
      "latin"
    ],
    "weights": [
      400
    ],
    "styles": [
      "normal"
    ],
    "variable": false,
    "lastModified": "2025-09-10",
    "sourceUrl": "https://fonts.google.com/specimen/Vibes",
    "cssUrl": "https://fonts.googleapis.com/css2?family=Vibes:wght@400&display=swap",
    "fontsourcePackage": "@fontsource/vibes",
    "fontsourceCssUrl": "https://cdn.jsdelivr.net/npm/@fontsource/vibes@latest/400.css",
    "tags": [
      "arabic",
      "open-source",
      "display",
      "static",
      "calligraphic"
    ]
  },
  {
    "id": "zain",
    "family": "Zain",
    "provider": "google-fonts",
    "license": "OFL-1.1",
    "category": "sans-serif",
    "scripts": [
      "Arabic",
      "Latin"
    ],
    "subsets": [
      "arabic",
      "latin"
    ],
    "weights": [
      200,
      300,
      400,
      700,
      800,
      900
    ],
    "styles": [
      "italic",
      "normal"
    ],
    "variable": false,
    "lastModified": "2025-10-29",
    "sourceUrl": "https://fonts.google.com/specimen/Zain",
    "cssUrl": "https://fonts.googleapis.com/css2?family=Zain:ital,wght@0,200;0,300;0,400;0,700;0,800;0,900;1,200;1,300;1,400;1,700;1,800;1,900&display=swap",
    "fontsourcePackage": "@fontsource/zain",
    "fontsourceCssUrl": "https://cdn.jsdelivr.net/npm/@fontsource/zain@latest/400.css",
    "tags": [
      "arabic",
      "open-source",
      "sans-serif",
      "static",
      "calligraphic"
    ]
  }
];
var catalogVersion = "2026-08-14";
var catalogGeneratedAt = "2026-08-14T18:59:07.610Z";
var catalogSource = "https://api.fontsource.org/v1/fonts";

// src/index.ts
var normalize = (value) => value.trim().toLocaleLowerCase();
var familySlug = (family) => encodeURIComponent(family.trim()).replace(/%20/g, "+");
function assertLimit(limit) {
  if (limit !== void 0 && (!Number.isInteger(limit) || limit < 0)) {
    throw new RangeError("limit must be a non-negative integer");
  }
}
function resolveFont(fontOrFamily) {
  if (typeof fontOrFamily !== "string") return fontOrFamily;
  const wanted = normalize(fontOrFamily);
  return arabicFonts.find((font) => normalize(font.family) === wanted || normalize(font.id) === wanted);
}
function resolveRequiredFont(fontOrFamily) {
  const font = resolveFont(fontOrFamily);
  if (!font) throw new Error(`Font not found in catalog: ${String(fontOrFamily)}`);
  return font;
}
function listFonts(query = {}) {
  assertLimit(query.limit);
  const search = query.search ? normalize(query.search) : void 0;
  const tag = query.tag ? normalize(query.tag) : void 0;
  const subset = query.subset ? normalize(query.subset) : void 0;
  const script = query.script ? normalize(query.script) : void 0;
  const result = arabicFonts.filter((font) => {
    const searchable = [font.id, font.family, ...font.tags, ...font.scripts, ...font.subsets];
    const matchesSearch = !search || searchable.some((value) => normalize(value).includes(search));
    const matchesCategory = !query.category || font.category === query.category;
    const matchesTag = !tag || font.tags.some((value) => normalize(value) === tag);
    const matchesProvider = !query.provider || font.provider === query.provider;
    const matchesLicense = !query.license || font.license === query.license;
    const matchesSubset = !subset || font.subsets.some((value) => normalize(value) === subset);
    const matchesScript = !script || font.scripts.some((value) => normalize(value) === script);
    const matchesStyle = !query.style || font.styles.includes(query.style);
    const matchesWeight = query.weight === void 0 || font.weights.includes(query.weight);
    const matchesVariable = query.variable === void 0 || font.variable === query.variable;
    return matchesSearch && matchesCategory && matchesTag && matchesProvider && matchesLicense && matchesSubset && matchesScript && matchesStyle && matchesWeight && matchesVariable;
  });
  const sort = query.sort ?? "family";
  result.sort((left, right) => {
    let comparison = 0;
    if (sort === "family") comparison = left.family.localeCompare(right.family, "ar");
    if (sort === "lastModified") comparison = (left.lastModified ?? "").localeCompare(right.lastModified ?? "");
    if (sort === "weightCount") comparison = left.weights.length - right.weights.length;
    return query.descending ? -comparison : comparison;
  });
  return query.limit === void 0 ? result : result.slice(0, query.limit);
}
function getFont(familyOrId) {
  return resolveFont(familyOrId);
}
function getFontById(id) {
  return arabicFonts.find((font) => normalize(font.id) === normalize(id));
}
function getCatalogFacets() {
  const strings = (values) => [...new Set(values)].sort((a, b) => a.localeCompare(b));
  return {
    categories: strings(arabicFonts.map((font) => font.category)),
    licenses: strings(arabicFonts.map((font) => font.license)),
    providers: strings(arabicFonts.map((font) => font.provider)),
    scripts: strings(arabicFonts.flatMap((font) => font.scripts)),
    subsets: strings(arabicFonts.flatMap((font) => font.subsets)),
    tags: strings(arabicFonts.flatMap((font) => font.tags)),
    weights: [...new Set(arabicFonts.flatMap((font) => font.weights))].sort((a, b) => a - b)
  };
}
function validateWeights(weights) {
  const result = [...new Set(weights)].sort((a, b) => a - b);
  if (result.some((weight) => !Number.isInteger(weight) || weight < 100 || weight > 900)) {
    throw new RangeError("weights must contain integers from 100 to 900");
  }
  return result;
}
function getGoogleFontsCssUrl(family, options = {}) {
  if (!family.trim()) throw new TypeError("family must be a non-empty string");
  const weights = validateWeights(options.weights ?? [400, 700]);
  const display = options.display ?? "swap";
  if (!["auto", "block", "swap", "fallback", "optional"].includes(display)) {
    throw new RangeError("display must be one of auto, block, swap, fallback, optional");
  }
  const axis = options.italic ? `ital,wght@${weights.map((weight) => `0,${weight}`).join(";")};${weights.map((weight) => `1,${weight}`).join(";")}` : `wght@${weights.join(";")}`;
  return `https://fonts.googleapis.com/css2?family=${familySlug(family)}:${axis}&display=${display}`;
}
function getFontsourceCssUrl(fontOrFamily, options = {}) {
  const font = resolveRequiredFont(fontOrFamily);
  const weight = options.weight ?? font.weights[0] ?? 400;
  if (!Number.isInteger(weight) || !font.weights.includes(weight)) {
    throw new RangeError(`weight must be one of: ${font.weights.join(", ")}`);
  }
  const style = options.style ?? "normal";
  if (!font.styles.includes(style)) throw new RangeError(`style must be one of: ${font.styles.join(", ")}`);
  const suffix = style === "italic" ? `${weight}-italic` : String(weight);
  return `https://cdn.jsdelivr.net/npm/${font.fontsourcePackage}@latest/${suffix}.css`;
}
function getFontCssUrl(fontOrFamily, options = {}) {
  const source = options.source ?? "google-fonts";
  if (source === "fontsource") return getFontsourceCssUrl(fontOrFamily, options.fontsource);
  const family = typeof fontOrFamily === "string" ? fontOrFamily : fontOrFamily.family;
  return getGoogleFontsCssUrl(family, options);
}
function createGoogleFontsLink(family, options = {}) {
  return { rel: "stylesheet", href: getGoogleFontsCssUrl(family, options) };
}
function createFontCssImport(fontOrFamily, options = {}) {
  return `@import url("${getFontCssUrl(fontOrFamily, options)}");`;
}
function createFontFaceCss(sourceUrl, options = {}) {
  if (!sourceUrl.trim()) throw new TypeError("sourceUrl must be a non-empty string");
  const family = options.family ?? "Moho Font";
  const weight = options.weight ?? 400;
  const style = options.style ?? "normal";
  const display = options.display ?? "swap";
  return [
    "@font-face {",
    `  font-family: "${family.replace(/"/g, '\\"')}";`,
    `  src: url("${sourceUrl}") format("woff2");`,
    `  font-weight: ${weight};`,
    `  font-style: ${style};`,
    `  font-display: ${display};`,
    "}"
  ].join("\n");
}
function loadFont(fontOrFamily, options = {}) {
  if (typeof document === "undefined") return Promise.reject(new Error("loadFont can only be used in a browser environment"));
  const href = getFontCssUrl(fontOrFamily, options);
  const existing = Array.from(document.querySelectorAll('link[rel="stylesheet"]')).find((link) => link.href === href || link.getAttribute("href") === href);
  if (existing) return Promise.resolve(existing);
  return new Promise((resolve, reject) => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = href;
    link.onload = () => resolve(link);
    link.onerror = () => reject(new Error(`Unable to load font stylesheet: ${href}`));
    document.head.appendChild(link);
  });
}
function loadGoogleFont(family, options = {}) {
  return loadFont(family, options);
}
function getCatalogStats() {
  const count = (values) => values.reduce((result, value) => {
    result[value] = (result[value] ?? 0) + 1;
    return result;
  }, {});
  return {
    total: arabicFonts.length,
    variable: arabicFonts.filter((font) => font.variable).length,
    providers: count(arabicFonts.map((font) => font.provider)),
    licenses: count(arabicFonts.map((font) => font.license)),
    categories: count(arabicFonts.map((font) => font.category)),
    scripts: count(arabicFonts.flatMap((font) => font.scripts))
  };
}

exports.arabicFonts = arabicFonts;
exports.catalogGeneratedAt = catalogGeneratedAt;
exports.catalogSource = catalogSource;
exports.catalogVersion = catalogVersion;
exports.createFontCssImport = createFontCssImport;
exports.createFontFaceCss = createFontFaceCss;
exports.createGoogleFontsLink = createGoogleFontsLink;
exports.getCatalogFacets = getCatalogFacets;
exports.getCatalogStats = getCatalogStats;
exports.getFont = getFont;
exports.getFontById = getFontById;
exports.getFontCssUrl = getFontCssUrl;
exports.getFontsourceCssUrl = getFontsourceCssUrl;
exports.getGoogleFontsCssUrl = getGoogleFontsCssUrl;
exports.listFonts = listFonts;
exports.loadFont = loadFont;
exports.loadGoogleFont = loadGoogleFont;
//# sourceMappingURL=index.cjs.map
//# sourceMappingURL=index.cjs.map