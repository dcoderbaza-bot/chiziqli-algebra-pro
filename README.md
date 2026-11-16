# 💜 Chiziqli Algebra Pro — Virtual Professor & Interaktiv Test Platformasi

**“Cyber University” Davlat Universiteti** — Fizika-matematika fanlari falsafa doktori (PhD), dotsent **Zuhriddin A. Nazarov**ning ma’ruza darslari asosida yaratilgan zamonaviy, kreativ binafsha (*Royal Purple / Cyber Amethyst*) dizayndagi interaktiv ta’lim va test platformasi.

---

## 🌟 Asosiy Imkoniyatlar

### 1. Har bir mavzudan 30 tadan Test Savollari + Aralash Testlar (Jami 270 ta Savol)
Platformada barcha 8 ta ma’ruza mavzusining har biridan **30 tadan** (jami **240 ta** mavzulashtirilgan savol) hamda barcha mavzularni birlashtiruvchi **30 ta maxsus kompleks aralash savol** — jami **270 ta tasdiqlangan test savoli** jamlangan:

| Bo‘lim | Mavzu nomi | Savollar soni |
| :--- | :--- | :---: |
| **1-Ma’ruza** | Matritsalar va ular ustida amallar. Qo‘shish, ayirish, ko‘paytirish va transponirlash | **30 ta** |
| **2-Ma’ruza** | Determinantlar nazariyasi va asosiy xossalari. 2 va 3-tartibli determinantlar | **30 ta** |
| **3-Ma’ruza** | Teskari matritsa, matritsaning rangi, Gauss-Jordan usuli va $AX=B$ tenglama | **30 ta** |
| **4-Ma’ruza** | Yuqori tartibli determinantlar, hisoblash usullari va Laplas teoremasi | **30 ta** |
| **5-Ma’ruza** | Chiziqli tenglamalar sistemasi, Fundamental yechimlar (FYS), Matritsalar usuli va Kramer qoidasi | **30 ta** |
| **6-Ma’ruza** | Chiziqli tenglamalar sistemasini yechishning Gauss va Gauss-Jordan usullari. Bazis yechim | **30 ta** |
| **7-Ma’ruza** | Arifmetik va Chiziqli vektor fazo. Chiziqli bog‘liqlik/erklilik va Bazisni almashtirish | **30 ta** |
| **8-Ma’ruza** | Ortogonal va ortonormal vektorlar sistemasi. Evklid fazosi va Gramm-Shmidt formulalari | **30 ta** |
| **9-Bo‘lim** | **Aralash Testlar (Kompleks Sintez + Tasodifiy Imtihon Simulyatori)** | **30+ ta** |

---

### 2. Aralash Testlar Markazi (Mixed Tests Studio)
- **Kompleks Aralash Variant (30 ta savol):** Bir nechta mavzu qoidalarini o‘zaro bog‘lovchi sintez savollar.
- **Oraliq / Yakuniy Bilet (25 ta tasodifiy savol):** Barcha 8 ta ma’ruzadan teng proporsiyada tanlab olinuvchi 40 daqiqalik imtihon.
- **Super-Marafon (40 ta savol):** Har bir ma’ruzadan 5 tadan savol (60 daqiqa).
- **Tezkor Blitz (15 ta savol):** Dars oldidan tezkor takrorlash.
- **Maxsus Aralash Test Konstruktori:** Talaba o‘zi xohlagan mavzularni, qiyinlik darajasini (`Oson`, `O‘rta`, `Qiyin`), savollar sonini (`15`, `25`, `30`, `40`, `50`, `100`, `Barchasi`) va rejimni tanlab shaxsiy aralash test tuza oladi.

### 3. Ikki xil Ishlash Rejimi
- 🎓 **Professor bilan O‘rganish Rejimi (Practice Mode):** Har bir savol belgilanganda darhol to‘g‘ri/xatoligi ko‘rsatiladi va **Professor Z. A. Nazarov ma’ruzasi asosida batafsil izoh hamda yechim yo‘li** chiqadi.
- ⏱️ **Imtihon Rejimi (Exam Mode):** Vaqt hisoblagich (Timer), savollar navigatsiya xaritasi (Palette), savollarni belgilab ketish (`Bookmark`), yakunda 5 ballik va 100 foizlik baholash hamda **«Xatolar ustida ishlash»** imkoniyati.

### 4. Professor Konspekti va Interaktiv Matritsa Laboratoriyasi
- **Professor Konspekti:** Har bir ma’ruza bo‘yicha asosiy ta’riflar, teoremalar, KaTeX formulalar va Professor eslatmalari.
- **Interaktiv Matritsa Kalkulyatori:** $2\times 2$ va $3\times 3$ matritsalar uchun $\det(A)$, $A^T$, $\text{rang}(A)$, qo‘shma matritsa $\bar{A}$, teskari matritsa $A^{-1}$ hamda $AX=B$ tenglamalar sistemasining Kramer yechimlarini jonli hisoblaydi.
- **270 ta Savol Katalogi:** Qidiruv, mavzu va qiyinlik filtri, javoblarni yashirish/ko‘rsatish va PDF/chop etish (`Print`) rejimi.

---

## 🎨 Kreativ Binafsha Dizayn (Cyber Amethyst UI)
- **Tungi Kosmik Binafsha (Dark Violet)** va **Yorug‘ Lavanda (Light Amethyst)** rejimlar almashinuvi.
- Glassmorphism kartalar, neon binafsha-fuksiya gradientlar va **KaTeX** matematik formulalar chizmasi.
- Klaviatura boshqaruvi: `A`/`1`, `B`/`2`, `C`/`3`, `D`/`4` — variant tanlash, `←`/`→` — oldingi/keyingi savol, `F` — savolni belgilab qo‘yish.

---

## 📁 Loyiha Tuzilmasi
```text
chiziqli-algebra-pro/
├── index.html               # Asosiy SPA veb-sahifa (7 ta interaktiv ko'rinish)
├── css/
│   └── styles.css           # Kreativ Binafsha (Royal Purple) Glassmorphism dizayn tizimi
├── js/
│   ├── theory-data.js       # 8 ta ma'ruza bo'yicha Professor konspekti va formulalar
│   ├── questions-data.js    # 270 ta tasdiqlangan test savollari bazasi (9×30)
│   ├── matrix-lab.js        # Interaktiv Matritsa, Determinant va Kramer kalkulyatori
│   └── app.js               # Test dvigateli, Aralash generator, statistika va UI kontroller
├── scripts/
│   ├── part1.py             # 1–4-mavzular savollari generatori (120 ta savol)
│   ├── part2.py             # 5–9-mavzular savollari generatori (150 ta savol)
│   ├── build_data.py        # Savollarni tekshirish va questions-data.js yaratish skripti
│   └── export_md.py         # Barcha 270 ta savolni Markdown formatga eksport qilish
├── SAVOLLAR_270_BAZA.md     # Barcha 270 ta test savoli va yechimlari (Markdown kitobcha)
└── README.md                # Loyiha hujjati
```

## 🚀 Ishga Tushirish
`index.html` faylini istalgan zamonaviy brauzerda to‘g‘ridan-to‘g‘ri oching yoki GitHub Pages orqali foydalaning.
