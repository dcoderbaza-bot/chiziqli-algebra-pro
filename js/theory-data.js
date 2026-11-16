// Cyber University Davlat Universiteti — Chiziqli Algebra Virtual Akademiyasi
// Ma'ruzachi: Fizika-matematika fanlari falsafa doktori (PhD), dotsent Zuhriddin A. Nazarov
// Har bir mavzu bo'yicha Professor konspekti, asosiy ta'riflar, teoremalar va formulalar

window.TOPICS_METADATA = [
  {
    id: 1,
    code: "1-MA'RUZA",
    title: "Matritsalar va ular ustida amallar",
    subtitle: "Matritsalarni qo‘shish, ayirish, ko‘paytirish va transponirlash",
    icon: "grid",
    accent: "from-purple-600 via-violet-600 to-fuchsia-600",
    badge: "30 ta test",
    questionCount: 30,
    keywords: ["Matritsa o'lchami", "Chiziqli amallar", "Ko'paytirish", "Transponirlash", "Veyyershtrass"],
    summary: "Matritsa tushunchasi («birinchi manba», Qadimgi Xitoyda «Sehrli kvadrat»), matritsa turlari, chiziqli amallarning 8 ta xossasi, matritsalarni ko‘paytirish qoidasi va transponirlash xossalari.",
    formulas: [
      {
        name: "Matritsalarni qo‘shish va ayirish",
        latex: "C = A \\pm B \\implies c_{ij} = a_{ij} \\pm b_{ij} \\quad (A_{m\\times n}, B_{m\\times n})",
        desc: "Faqat bir xil o‘lchamli matritsalarni qo‘shish va ayirish mumkin."
      },
      {
        name: "Matritsani songa ko‘paytirish",
        latex: "C = k \\cdot A \\implies c_{ij} = k \\cdot a_{ij}",
        desc: "Berilgan son matritsaning har bir elementiga ko‘paytiriladi."
      },
      {
        name: "Matritsalarni ko‘paytirish",
        latex: "C_{m\\times k} = A_{m\\times n} \\cdot B_{n\\times k}, \\quad c_{ij} = \\sum_{s=1}^{n} a_{is} b_{sj}",
        desc: "Birinchi matritsa ustunlari soni ikkinchi matritsa satrlari soniga teng bo‘lishi shart. Satrlar ustunlarga ko‘paytiriladi."
      },
      {
        name: "Transponirlash xossalari",
        latex: "(A^T)^T = A, \\quad (A+B)^T = A^T + B^T, \\quad (kA)^T = kA^T, \\quad (AB)^T = B^T A^T",
        desc: "Satr elementlarini mos ustun elementlariga almashtirish amali."
      }
    ],
    professorNote: "Eslab qoling: Matritsalarni ko‘paytirish kommutativ emas, ya’ni umumiy holda $AB \\ne BA$. Biroq birlik matritsa $E$ uchun $AE = EA = A$ har doim o‘rinli! Ko‘paytmani transponirlashda esa tartib teskariga o‘zgaradi: $(AB)^T = B^T A^T$."
  },
  {
    id: 2,
    code: "2-MA'RUZA",
    title: "Determinantlar nazariyasi va asosiy xossalari",
    subtitle: "Ikkinchi va uchinchi tartibli determinantlar. Minor va algebraik to‘ldiruvchi",
    icon: "layers",
    accent: "from-violet-600 via-purple-600 to-indigo-600",
    badge: "30 ta test",
    questionCount: 30,
    keywords: ["2-tartibli determinant", "Sarrius qoidasi", "Uchburchak qoidasi", "Minor M_ij", "Algebraik to'ldiruvchi A_ij"],
    summary: "Determinantning 9 ta asosiy xossasi, 2 va 3-tartibli determinantlarni hisoblashning diagonal, uchburchak va Sarrius qoidalari, elementning minori va algebraik to‘ldiruvchisi.",
    formulas: [
      {
        name: "2-tartibli determinant",
        latex: "\\begin{vmatrix} a_{11} & a_{12} \\\\ a_{21} & a_{22} \\end{vmatrix} = a_{11}a_{22} - a_{12}a_{21}",
        desc: "Asosiy diagonal elementlari ko‘paytmasidan yordamchi diagonal ko‘paytmasi ayriladi."
      },
      {
        name: "3-tartibli determinant (Sarrius / Uchburchak qoidasi)",
        latex: "\\Delta = a_{11}a_{22}a_{33} + a_{12}a_{23}a_{31} + a_{13}a_{21}a_{32} - (a_{13}a_{22}a_{31} + a_{11}a_{23}a_{32} + a_{12}a_{21}a_{33})",
        desc: "Bosh diagonal va unga parallel uchburchaklar plyus, yordamchi diagonal yo‘nalishi minus ishora bilan olinadi."
      },
      {
        name: "Minor va Algebraik to‘ldiruvchi",
        latex: "A_{ij} = (-1)^{i+j} M_{ij}",
        desc: "$M_{ij}$ — $i$-satr va $j$-ustunni o‘chirishdan qolgan determinant."
      },
      {
        name: "Uchburchakli va Diagonal determinantlar",
        latex: "\\begin{vmatrix} a_{11} & a_{12} & a_{13} \\\\ 0 & a_{22} & a_{23} \\\\ 0 & 0 & a_{33} \\end{vmatrix} = a_{11} \\cdot a_{22} \\cdot a_{33}",
        desc: "Yuqori yoki quyi uchburchakli hamda diagonal matritsaning determinanti bosh diagonal elementlari ko‘paytmasiga teng."
      }
    ],
    professorNote: "Determinantning 9 ta xossasini mukammal biling: nol satr bo‘lsa, ikkita bir xil satr bo‘lsa yoki ikki satr proporsional bo‘lsa $\\Delta = 0$. Ikkita satr o‘rni almashtirilsa, determinant ishorasi qarama-qarshiga o‘zgaradi!"
  },
  {
    id: 3,
    code: "3-MA'RUZA",
    title: "Teskari matritsa va matritsaning rangi",
    subtitle: "Qo‘shma matritsa, Gauss-Jordan usuli, elementar almashtirishlar va AX=B",
    icon: "refresh-cw",
    accent: "from-fuchsia-600 via-purple-600 to-violet-700",
    badge: "30 ta test",
    questionCount: 30,
    keywords: ["Xos va xosmas matritsa", "Qo'shma matritsa", "Teskari matritsa A^-1", "Matritsa rangi r(A)", "AX=B"],
    summary: "Xos ($\\det A = 0$) va xosmas ($\\det A \\ne 0$) matritsalar, qo‘shma matritsa $\\bar{A}$, teskari matritsa va uning 5 ta xossasi, Gauss-Jordan usuli $(A|E)\\sim(E|A^{-1})$, matritsa rangi va $AX=B$ tenglama.",
    formulas: [
      {
        name: "Teskari matritsa formulasi",
        latex: "A^{-1} = \\frac{1}{\\det(A)} \\bar{A} = \\frac{1}{\\det(A)} \\begin{pmatrix} A_{11} & A_{21} & \\dots & A_{n1} \\\\ A_{12} & A_{22} & \\dots & A_{n2} \\\\ \\dots & \\dots & \\dots & \\dots \\\\ A_{1n} & A_{2n} & \\dots & A_{nn} \\end{pmatrix}, \\quad \\det(A) \\ne 0",
        desc: "Faqat xosmas matritsa uchun teskari matritsa mavjud va $AA^{-1} = A^{-1}A = E$."
      },
      {
        name: "Teskari matritsa xossalari",
        latex: "\\det(A^{-1}) = \\frac{1}{\\det(A)}, \\quad (A^{-1})^{-1} = A, \\quad (AB)^{-1} = B^{-1}A^{-1}, \\quad (A^{-1})^T = (A^T)^{-1}",
        desc: "Ko‘paytmaning teskari matritsasi teskari tartibda ko‘paytiriladi."
      },
      {
        name: "Matritsa rangi chegarasi",
        latex: "0 \\le r(A) \\le \\min(m, n), \\quad \\text{elementar almashtirishlarda } r(A) = \\text{const}",
        desc: "Matritsa rangi uning noldan farqli eng katta tartibli osti minori tartibiga teng."
      },
      {
        name: "Matritsaviy tenglama",
        latex: "AX = B \\implies X = A^{-1}B, \\qquad XA = B \\implies X = BA^{-1}",
        desc: "$A^{-1}$ ga chapdan yoki o‘ngdan ko‘paytirish tartibiga qat’iy e’tibor bering."
      }
    ],
    professorNote: "Qo‘shma matritsa $\\bar{A}$ ni tuzayotganda algebraik to‘ldiruvchilar matritsasini TRANSPONIRLASHNI aslo unutmang! Ya’ni $A_{12}$ ikkinchi satr birinchi ustunga tushadi."
  },
  {
    id: 4,
    code: "4-MA'RUZA",
    title: "Yuqori tartibli determinantlar va Laplas teoremasi",
    subtitle: "O‘rin almashtirishlar, inversiyalar, uchburchak shakl va Laplas formulasi",
    icon: "cpu",
    accent: "from-purple-700 via-indigo-600 to-violet-600",
    badge: "30 ta test",
    questionCount: 30,
    keywords: ["O'rin almashtirish n!", "Inversiya inv(P)", "Laplas teoremasi", "Uchburchak shakl", "Determinantli tenglamalar"],
    summary: "$n$-tartibli determinant ta’rifi ($n!$ ta had), o‘rin almashtirishlar va inversiyalar soni, uchburchak shakliga keltirish usuli, Laplas teoremasi va Laplas formulasi.",
    formulas: [
      {
        name: "O‘rin almashtirishlar va inversiya",
        latex: "N = n!, \\quad N_{\\text{juft}} = N_{\\text{toq}} = \\frac{n!}{2}, \\quad \\text{ishora} = (-1)^{\\text{inv}(P)}",
        desc: "Agar $m > k$ bo‘lib, $m$ soni $k$ dan chapda tursa, ular inversiya tashkil qiladi."
      },
      {
        name: "Laplas teoremasi (qator bo‘yicha yoyish)",
        latex: "\\Delta = \\sum_{j=1}^{n} a_{ij} A_{ij} = \\sum_{j=1}^{n} (-1)^{i+j} a_{ij} M_{ij}",
        desc: "Determinantni eng ko‘p nol qatnashgan satr yoki ustun bo‘yicha yoyish hisoblashni osonlashtiradi."
      },
      {
        name: "Laplas teoremasi natijasi (begona satr xossasi)",
        latex: "\\sum_{j=1}^{n} a_{ij} A_{kj} = 0 \\quad (i \\ne k)",
        desc: "Biror satr elementlarining boshqa satr algebraik to‘ldiruvchilari bilan ko‘paytmalari yig‘indisi har doim nolga teng."
      }
    ],
    professorNote: "Yuqori tartibli ($4\\times 4$ va $5\\times 5$) determinantlarni hisoblashda Sarrius qoidasi ISHLAMAYDI! Ularni elementar almashtirishlar bilan biror ustunda nollar hosil qilib, Laplas teoremasi bo‘yicha yoying yoki uchburchak shakliga keltiring."
  },
  {
    id: 5,
    code: "5-MA'RUZA",
    title: "Chiziqli tenglamalar sistemasi va Kramer qoidasi",
    subtitle: "Kroneker-Kapelli teoremasi, Fundamental yechimlar (FYS) va Matritsalar usuli",
    icon: "sliders",
    accent: "from-violet-600 via-fuchsia-600 to-purple-700",
    badge: "30 ta test",
    questionCount: 30,
    keywords: ["Kroneker-Kapelli", "Bir jinsli sistema AX=0", "Fundamental yechimlar n-r", "Kramer qoidasi", "AXB=C"],
    summary: "Chiziqli tenglamalar sistemasining birgalikda bo‘lish sharti (Kroneker-Kapelli teoremasi), bir jinsli sistemaning fundamental yechimlar sistemasi ($n-r$ ta vektor), matritsalar usuli va Kramer formulalari.",
    formulas: [
      {
        name: "Kroneker-Kapelli teoremasi",
        latex: "r(A) = r(A|B) = r \\implies \\begin{cases} r = n \\text{ — yagona yechim} \\\\ r < n \\text{ — cheksiz ko‘p yechim} \\end{cases}",
        desc: "Agar $r(A) \\ne r(A|B)$ bo‘lsa, sistema birgalikda emas (yechimga ega emas)."
      },
      {
        name: "Fundamental yechimlar sistemasi (FYS) va umumiy yechim",
        latex: "k = n - r, \\quad X_{\\text{b.j.}} = c_1 F_1 + \\dots + c_{n-r} F_{n-r}, \\quad X_{\\text{um.}} = F_0 + \\sum_{i=1}^{n-r} c_i F_i",
        desc: "$AX = \\Theta$ bir jinsli sistema $r < n$ bo‘lganda $n-r$ ta chiziqli erkli fundamental yechimga ega."
      },
      {
        name: "Kramer formulalari",
        latex: "x_1 = \\frac{\\Delta_{x_1}}{\\Delta}, \\quad x_2 = \\frac{\\Delta_{x_2}}{\\Delta}, \\quad \\dots, \\quad x_n = \\frac{\\Delta_{x_n}}{\\Delta} \\quad (\\Delta \\ne 0)",
        desc: "Agar $\\Delta = 0$ va barcha $\\Delta_{x_i} = 0$ bo‘lsa cheksiz ko‘p yechim (yoki ziddiyatli), biror $\\Delta_{x_i} \\ne 0$ bo‘lsa yechim yo‘q."
      },
      {
        name: "Ikki tomonlama matritsaviy tenglama",
        latex: "A \\cdot X \\cdot B = C \\implies X = A^{-1} C B^{-1}",
        desc: "Chapdan $A^{-1}$ ga, o‘ngdan $B^{-1}$ ga ko‘paytiriladi."
      }
    ],
    professorNote: "Bir jinsli $AX = \\Theta$ tenglamalar sistemasi HAR DOIM birgalikda bo‘ladi, chunki $X = (0, 0, \\dots, 0)^T$ nol vektor har doim yechimdir. Nolmas yechimlar mavjud bo‘lishi uchun $r(A) < n$ (kvadrat sistemada $\\det A = 0$) bo‘lishi zarur va yetarli!"
  },
  {
    id: 6,
    code: "6-MA'RUZA",
    title: "Gauss va Gauss-Jordan usullari. Bazis yechim",
    subtitle: "Ketma-ket yo‘qotish usuli, (A|B)~(E|X) va bazis yechimlarni topish",
    icon: "terminal",
    accent: "from-purple-600 via-pink-600 to-violet-700",
    badge: "30 ta test",
    questionCount: 30,
    keywords: ["Gauss usuli", "Gauss-Jordan (A|B)~(E|X)", "Bazis o'zgaruvchilar", "Erkli o'zgaruvchilar", "Bazis yechim C_n^r"],
    summary: "Chiziqli tenglamalar sistemasini yechishning Gauss (uchburchak/pog‘onali shaklga keltirish) va Gauss-Jordan (diagonal/birlik matritsaga keltirish) usullari, bazis va erkli o‘zgaruvchilar hamda bazis yechimlar.",
    formulas: [
      {
        name: "Gauss-Jordan sxemasi",
        latex: "(A \\mid B) \\sim \\dots \\sim (E \\mid X)",
        desc: "Asosiy matritsa birlik matritsa $E$ ga keltirilganda ozod hadlar ustuni bevosita yechim $X$ ga aylanadi."
      },
      {
        name: "Bazis guruhlar soni",
        latex: "C_n^r = \\frac{n!}{r! \\cdot (n - r)!}",
        desc: "Bu yerda $n$ — noma’lumlar soni, $r$ — sistema rangi (bazis o‘zgaruvchilar soni), $n-r$ — erkli o‘zgaruvchilar soni."
      },
      {
        name: "Bazis yechim qoidasi",
        latex: "x_{\\text{erkli}} = 0 \\implies X_b = (x_{b1}, x_{b2}, \\dots, 0, \\dots, 0)^T",
        desc: "Erkli o‘zgaruvchilar nolga teng deb olinib, noldan farqli bazis minorga mos bazis o‘zgaruvchilar topiladi."
      }
    ],
    professorNote: "Diqqat! $C_n^r$ — noma’lumlarni guruhlashning maksimal kombinatorik soni. Ammo tanlangan $r$ ta noma’lum bazis bo‘la olishi uchun ularga mos ustunlardan tuzilgan minor $\\det \\ne 0$ bo‘lishi shart! Agar minor nolga teng bo‘lsa, u juftlikdan bazis yechim chiqmaydi."
  },
  {
    id: 7,
    code: "7-MA'RUZA",
    title: "Arifmetik va Chiziqli vektor fazo. Bazisni almashtirish",
    subtitle: "Skalyar, vektor va aralash ko‘paytmalar, chiziqli fazo va o‘tish matritsasi P",
    icon: "compass",
    accent: "from-indigo-600 via-purple-600 to-fuchsia-600",
    badge: "30 ta test",
    questionCount: 30,
    keywords: ["Skalyar ko'paytma", "Vektor va aralash ko'paytma", "Koshi-Bunyakovskiy", "Chiziqli fazo", "O'tish matritsasi P"],
    summary: "$n$ o‘lchovli vektorlar, skalyar ko‘paytma, uzunlik va burchak, Koshi-Bunyakovskiy va uchburchak tengsizliklari, vektor va aralash ko‘paytmalar, chiziqli fazo va qism fazo, bir bazisdan boshqa bazisga o‘tish matritsasi.",
    formulas: [
      {
        name: "Skalyar ko‘paytma, uzunlik va burchak",
        latex: "(X, Y) = \\sum_{i=1}^{n} x_i y_i, \\quad |X| = \\sqrt{(X,X)}, \\quad \\cos\\varphi = \\frac{(X,Y)}{|X|\\cdot|Y|}",
        desc: "Koshi-Bunyakovskiy tengsizligi: $|(X,Y)| \\le |X|\\cdot|Y|$. Uchburchak tengsizligi: $|X+Y| \\le |X|+|Y|$."
      },
      {
        name: "Parallelogramm yuzi va Parallelepiped hajmi",
        latex: "S = |[\\vec{a}\\times\\vec{b}]| = |\\vec{a}|\\cdot|\\vec{b}|\\sin\\varphi, \\qquad V_{\\text{par}} = |([\\vec{a}\\times\\vec{b}]\\cdot\\vec{c})|",
        desc: "Agar aralash ko‘paytma nolga teng bo‘lsa ($V=0$), uchta vektor komplanar (bir tekislikda yotuvchi) bo‘ladi."
      },
      {
        name: "Bir bazisdan boshqa bazisga o‘tish",
        latex: "P \\cdot \\vec{x}' = \\vec{x} \\implies \\vec{x}' = P^{-1} \\cdot \\vec{x}",
        desc: "$P$ o‘tish matritsasining ustunlari yangi bazis vektorlarining eski bazisdagi koordinatalaridan tuziladi."
      }
    ],
    professorNote: "Chiziqli qism fazo bo‘lishi uchun to‘plamda albatta NOL VEKTOR $\\Theta$ qatnashishi hamda yig‘indi va songa ko‘paytirishga nisbatan yopiq bo‘lishi shart. Masalan, $x_1 - 2x_3 = 0$ qism fazo bo‘ladi, ammo $x_1 - 2x_3 = 5$ qism fazo bo‘la olmaydi!"
  },
  {
    id: 8,
    code: "8-MA'RUZA",
    title: "Ortogonal va ortonormal vektorlar. Gramm-Shmidt usuli",
    subtitle: "Evklid fazosi, vektorlarni normallashtirish va Gramm-Shmidt ortogonallash",
    icon: "award",
    accent: "from-purple-600 via-violet-600 to-pink-600",
    badge: "30 ta test",
    questionCount: 30,
    keywords: ["Ortogonal vektorlar", "Evklid fazosi E^n", "Ortonormal bazis", "Gramm-Shmidt formulasi", "Normallashtirish"],
    summary: "Vektorlar sistemasining chiziqli erkliligini rang orqali tekshirish ($r(A)=m$), Evklid fazosi, ortogonal va ortonormal vektorlar sistemasi, Gramm-Shmidt ortogonallash jarayoni.",
    formulas: [
      {
        name: "Ortogonallik va Ortonormal bazis sharti",
        latex: "(X, Y) = 0, \\qquad (\\vec{e}_i, \\vec{e}_k) = \\delta_{ik} = \\begin{cases} 1, & i = k \\\\ 0, & i \\ne k \\end{cases}",
        desc: "Har qanday nolmas ortogonal vektorlar sistemasi chiziqli erkli sistemadir."
      },
      {
        name: "Vektorni normallashtirish (birlik vektorga keltirish)",
        latex: "\\vec{c}_i = \\frac{\\vec{b}_i}{|\\vec{b}_i|}, \\qquad |\\vec{c}_i| = 1",
        desc: "Nol bo‘lmagan vektorni o‘z uzunligiga bo‘lish orqali birlik vektor hosil qilinadi."
      },
      {
        name: "Gramm-Shmidt ortogonallash formulalari",
        latex: "B_1 = A_1, \\qquad B_t = A_t - \\sum_{i=1}^{t-1} \\frac{(B_i, A_t)}{(B_i, B_i)} B_i \\quad (t = 2, 3, \\dots, k)",
        desc: "Chiziqli erkli $A_1, \\dots, A_k$ sistemadan ortogonal $B_1, \\dots, B_k$ sistema qurish algoritmi."
      }
    ],
    professorNote: "Gramm-Shmidt jarayoni ikki bosqichdan iborat: 1) Avval $B_1, B_2, B_3$ ortogonal vektorlar topiladi va $(B_i, B_j) = 0$ ekanligi tekshiriladi; 2) Agar ortonormal bazis so‘ralsa, har bir $B_i$ o‘z uzunligi $|B_i|$ ga bo‘linadi."
  },
  {
    id: 9,
    code: "MAXSUS BO'LIM",
    title: "Aralash Testlar (Kompleks & Imtihon Biletlar)",
    subtitle: "Barcha 8 ta ma’ruza mavzularini qamrab olgan kompleks va tasodifiy aralash testlar",
    icon: "zap",
    accent: "from-fuchsia-600 via-purple-600 to-indigo-600",
    badge: "30+ Aralash",
    questionCount: 30,
    keywords: ["Yakuniy Nazorat", "Oraliq Nazorat", "Kompleks Masalalar", "Barcha 8 Mavzu", "Tasodifiy Generator"],
    summary: "Barcha 8 ta mavzuni (Matritsalar, Determinantlar, Teskari matritsa va Rang, Laplas teoremasi, Kramer va FYS, Gauss va Bazis yechim, Vektor fazolar hamda Gramm-Shmidt) birlashtirgan 30 ta maxsus kompleks savol hamda 270 ta savoldan iborat cheksiz Aralash Test Generatori.",
    formulas: [
      {
        name: "Fundamental ekvivalentlik zanjiri (n×n matritsa uchun)",
        latex: "\\det(A) \\ne 0 \\iff \\exists A^{-1} \\iff r(A) = n \\iff AX=B \\text{ yagona yechimli} \\iff \\text{ustunlari bazis}",
        desc: "Chiziqli algebraning barcha 8 ta ma’ruzasini bog‘lab turuvchi oltin teorema!"
      }
    ],
    professorNote: "Ushbu bo‘limda ham maxsus tuzilgan 30 talik Kompleks Aralash Variantni, ham barcha 270 ta savol ichidan tasodifiy tanlab beruvchi Imtihon Simulyatorini ishlashingiz mumkin!"
  }
];
