# -*- coding: utf-8 -*-
# Part 2: Topics 5, 6, 7, 8, 9 (30 PURE THEORETICAL questions each = 150 questions)

def get_part2_questions():
    # =========================================================================
    # MAVZU 5: Chiziqli tenglamalar sistemasi, FYS, Matritsalar usuli, Kramer (30 ta NAZARIY)
    # =========================================================================
    t5 = [
        {
            "q": "$n$ ta noma’lumli $m$ ta chiziqli tenglamalar sistemasida $a_{ij}$, $x_j$ va $b_i$ miqdorlar qanday nomlanadi (4-slayd)?",
            "opts": [
                "$a_{ij}$ — sistemaning koeffitsiyentlari, $x_1, x_2, \\dots, x_n$ — noma’lumlar, $b_1, b_2, \\dots, b_m$ — ozod hadlar",
                "$a_{ij}$ — ozod hadlar, $x_j$ — koeffitsiyentlar, $b_i$ — noma’lumlar",
                "$a_{ij}$ — minorlar, $x_j$ — determinantlar, $b_i$ — ranglar",
                "$a_{ij}$ — bazislar, $x_j$ — indekslar, $b_i$ — vektorlar"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "5-ma’ruza (4-slayd): $a_{ij}$ ($i=1,\\dots,m;\\; j=1,\\dots,n$) sonlar sistemaning koeffitsiyentlari, $x_1, \\dots, x_n$ lar noma’lumlar, $b_1, \\dots, b_m$ sonlar esa ozod hadlar deyiladi."
        },
        {
            "q": "Chiziqli tenglamalar sistemasining matritsaviy yozuvi $AX = B$ da $A$, $X$ va $B$ matritsalarning o‘lchamlari qanday bo‘ladi ($m$ ta tenglama, $n$ ta noma’lum)?",
            "opts": [
                "$A$ — $m \\times n$ o‘lchamli asosiy matritsa, $X$ — $n \\times 1$ o‘lchamli noma’lumlar ustun matritsasi, $B$ — $m \\times 1$ o‘lchamli ozod hadlar ustun matritsasi",
                "$A, X, B$ larning barchasi $n \\times n$ o‘lchamli kvadrat matritsalar",
                "$A$ — $n \\times m$ o‘lchamli, $X$ — $1 \\times n$ satr matritsa, $B$ — $1 \\times m$ satr matritsa",
                "$A$ — $m \\times m$ o‘lchamli, $X$ va $B$ esa $n \\times n$ o‘lchamli"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "5-ma’ruza (4-slayd): $A_{m\\times n} \\cdot X_{n\\times 1} = B_{m\\times 1}$."
        },
        {
            "q": "Chiziqli tenglamalar sistemasining «asosiy matritsasi» $A$ va «kengaytirilgan matritsasi» $(A \\mid B)$ orasidagi farq nimadan iborat (19-slayd)?",
            "opts": [
                "Asosiy matritsa $A$ faqat noma’lumlar oldidagi koeffitsiyentlardan tuziladi; kengaytirilgan matritsa $(A \\mid B)$ esa asosiy matritsaga ozod hadlar ustuni $B$ ni qo‘shishdan hosil bo‘ladi",
                "Asosiy matritsa kvadrat bo‘ladi, kengaytirilgan matritsa esa transponirlangan matritsa bo‘ladi",
                "Kengaytirilgan matritsa asosiy matritsaning teskarisiga teng bo‘ladi",
                "Asosiy matritsada ozod hadlar qatnashadi, kengaytirilgan matritsada esa qatnashmaydi"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "5-ma’ruza (19-slayd): $(A \\mid B)$ kengaytirilgan matritsa $A$ asosiy matritsaning o‘ng tomoniga $B$ ozod hadlar ustunini yozish orqali hosil qilinadi."
        },
        {
            "q": "Chiziqli tenglamalar sistemasining «yechimi» deb nimaga aytiladi (17-slayd)?",
            "opts": [
                "$x_1, x_2, \\dots, x_n$ noma’lumlarning o‘rniga qo‘yilganda sistemadagi barcha tenglamalarni to‘g‘ri tenglikka (ayniyatga) aylantiruvchi $\\alpha_1, \\alpha_2, \\dots, \\alpha_n$ sonlar tizimiga ($X = (\\alpha_1, \\dots, \\alpha_n)^T$)",
                "Sistemadagi faqat birinchi tenglamani qanoatlantiruvchi ixtiyoriy sonlar to‘plamiga",
                "Asosiy matritsa determinantining qiymatiga",
                "Ozod hadlarning algebraik yig‘indisiga"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "5-ma’ruza (17-slayd): Agar $\\alpha_1, \\alpha_2, \\dots, \\alpha_n$ sonlar $x_1, x_2, \\dots, x_n$ larning o‘rniga qo‘yilganda sistemadagi tenglamalarni to‘g‘ri tenglikka aylantirsa, bu sonlarga sistemaning yechimlari deyiladi."
        },
        {
            "q": "Qanday chiziqli tenglamalar sistemasiga «birgalikda bo‘lgan sistema» va qanday sistemaga «birgalikda bo‘lmagan sistema» deyiladi (17-slayd)?",
            "opts": [
                "Kamida bitta yechimga ega bo‘lsa — birgalikda; bitta ham yechimga ega bo‘lmasa ($\\varnothing$) — birgalikda bo‘lmagan sistema deyiladi",
                "Faqat cheksiz ko‘p yechimga ega bo‘lsa — birgalikda; yagona yechimga ega bo‘lsa — birgalikda bo‘lmagan deyiladi",
                "Tenglamalar soni noma’lumlar soniga teng bo‘lsa — birgalikda deyiladi",
                "Ozod hadlari nolga teng bo‘lsa — birgalikda bo‘lmagan deyiladi"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "5-ma’ruza (17-slayd): Chiziqli tenglamalar sistemasi kamida bitta yechimga ega bo‘lsa birgalikda, aks holda (bitta ham yechimga ega bo‘lmasa) birgalikda bo‘lmagan sistema deyiladi."
        },
        {
            "q": "**Kroneker-Kapelli teoremasi** (19-slayd): Chiziqli tenglamalar sistemasi birgalikda bo‘lishi uchun qanday shart zarur va yetarli?",
            "opts": [
                "$\\text{rang}(A) = \\text{rang}(A \\mid B)$ bo‘lishi (asosiy matritsa rangi kengaytirilgan matritsa rangiga teng bo‘lishi) zarur va yetarli",
                "$\\text{rang}(A) < \\text{rang}(A \\mid B)$ bo‘lishi zarur va yetarli",
                "$\\det(A) = 0$ bo‘lishi zarur va yetarli",
                "Tenglamalar soni $m$ noma’lumlar soni $n$ ga teng bo‘lishi zarur va yetarli"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "5-ma’ruza (19-slayd): Kroneker-Kapelli teoremasi: Chiziqli tenglamalar sistemasi birgalikda bo‘lishi uchun $\\text{rang}(A) = \\text{rang}(A \\mid B)$ bo‘lishi zarur va yetarli."
        },
        {
            "q": "Kroneker-Kapelli teoremasiga ko‘ra, $n$ ta noma’lumli sistemada $r(A) = r(A \\mid B) = r$ bo‘lganda qachon sistema yagona yechimga, qachon cheksiz ko‘p yechimga ega bo‘ladi (24-slayd)?",
            "opts": [
                "Agar $r = n$ bo‘lsa sistema bitta (yagona) yechimga ega; agar $r < n$ bo‘lsa sistema cheksiz ko‘p yechimga ega",
                "Agar $r < n$ bo‘lsa sistema yagona yechimga ega; agar $r = n$ bo‘lsa cheksiz ko‘p yechimga ega",
                "Agar $r = 0$ bo‘lsa yagona yechimga ega",
                "Har doim faqat bitta yechimga ega bo‘ladi"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "5-ma’ruza (24-slayd): $r(A) = r(A \\mid B) = r$ bo‘lganda: $r = n \\implies$ bitta yechim; $r < n \\implies$ cheksiz ko‘p yechim; $r(A) \\ne r(A \\mid B) \\implies$ yechimga ega emas."
        },
        {
            "q": "Asosiy matritsa rangi $r(A)$ va kengaytirilgan matritsa rangi $r(A \\mid B)$ orasida $r(A) > r(A \\mid B)$ tengsizlik bo‘lishi mumkinmi?",
            "opts": [
                "Yo‘q, hech qachon bo‘lishi mumkin emas, chunki $A$ matritsa $(A \\mid B)$ ning qism matritsasi bo‘lib, har doim $r(A) \\le r(A \\mid B) \\le r(A) + 1$ bajariladi",
                "Ha, agar ozod hadlar manfiy bo‘lsa $r(A) > r(A \\mid B)$ bo‘ladi",
                "Ha, bir jinsli sistemalarda $r(A) > r(A \\mid B)$ bo‘ladi",
                "Ha, tenglamalar soni noma’lumlar sonidan ko‘p bo‘lganda shunday bo‘ladi"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "$A$ matritsaning har qanday minori $(A \\mid B)$ ning ham minori bo‘lgani sababli $r(A)$ hech qachon $r(A \\mid B)$ dan katta bo‘la olmaydi."
        },
        {
            "q": "Qachon $AX = B$ tenglamalar sistemasi «bir jinsli chiziqli tenglamalar sistemasi» deyiladi (5-slayd)?",
            "opts": [
                "Ozod hadlar ustuni nol vektordan iborat bo‘lganda ($B = \\Theta = (0, 0, \\dots, 0)^T$), ya’ni $AX = \\Theta$ bo‘lganda",
                "Barcha noma’lumlar oldidagi koeffitsiyentlar bir xil songa teng bo‘lganda",
                "Tenglamalar soni noma’lumlar soniga teng bo‘lganda ($m = n$)",
                "Ozod hadlar ustuni birlik vektordan iborat bo‘lganda"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "5-ma’ruza (5-slayd): Agar $B = \\Theta$ bo‘lsa, u holda tenglamalar sistemasi bir jinsli chiziqli tenglamalar sistemasi deyiladi: $AX = \\Theta$."
        },
        {
            "q": "Nima sababdan bir jinsli chiziqli tenglamalar sistemasi ($AX = \\Theta$) HAR DOIM birgalikda bo‘ladi (5-slayd)?",
            "opts": [
                "Chunki nol vektor $X = \\Theta = (0, 0, \\dots, 0)^T$ har doim sistemaning yechimi bo‘ladi (hamda nol ustun qo‘shilishi rangni o‘zgartirmaydi: $r(A) = r(A \\mid \\Theta)$)",
                "Chunki bir jinsli sistemaning asosiy determinanti har doim $1$ ga teng bo‘ladi",
                "Chunki bir jinsli sistemada noma’lumlar soni har doim tenglamalar sonidan ko‘p bo‘ladi",
                "Chunki bir jinsli sistemada koeffitsiyentlar nolga teng bo‘ladi"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "5-ma’ruza (5-slayd): Bir jinsli chiziqli tenglamalar sistemasi har doim birgalikda, chunki $X = \\Theta$ har doim sistemaning yechimi bo‘ladi."
        },
        {
            "q": "$n$ ta noma’lumli $AX = \\Theta$ bir jinsli chiziqli tenglamalar sistemasi qachon aniq bo‘lib, faqat yagona nol (trivial) yechimga ega bo‘ladi (5-slayd)?",
            "opts": [
                "$\\text{rang}(A) = n$ munosabat o‘rinli bo‘lganda (kvadrat sistemada $\\det(A) \\ne 0$ bo‘lganda)",
                "$\\text{rang}(A) < n$ munosabat o‘rinli bo‘lganda",
                "$\\text{rang}(A) = 0$ bo‘lganda",
                "Tenglamalar soni noma’lumlar sonidan kichik ($m < n$) bo‘lganda"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "5-ma’ruza (5-slayd): Bir jinsli sistema uchun $\\text{rang}(A) = n$ munosabat o‘rinli bo‘lsa, sistema aniq bo‘lib, yagona nol yechimga ega."
        },
        {
            "q": "$n$ ta noma’lumli $AX = \\Theta$ bir jinsli chiziqli tenglamalar sistemasi qachon nol yechimdan tashqari nolmas (notrivial) yechimlarga ham ega bo‘ladi (5-slayd)?",
            "opts": [
                "$\\text{rang}(A) < n$ munosabat o‘rinli bo‘lganda (xususan kvadrat sistemada $\\det(A) = 0$ bo‘lganda)",
                "$\\text{rang}(A) = n$ bo‘lganda (kvadrat sistemada $\\det(A) \\ne 0$ bo‘lganda)",
                "Faqat barcha koeffitsiyentlar nolga teng bo‘lganda",
                "Hech qachon nolmas yechimga ega bo‘lmaydi"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "5-ma’ruza (5-slayd): Bir jinsli sistema uchun $\\text{rang}(A) < n$ munosabat o‘rinli bo‘lsa, sistema nol yechimdan tashqari nolmas yechimlarga ham ega bo‘ladi."
        },
        {
            "q": "Bir jinsli chiziqli algebraik tenglamalar sistemasining «fundamental yechimlar sistemasi» (FYS) deb nimaga aytiladi (7-slayd)?",
            "opts": [
                "Sistema yechimlarining har qanday maksimal sondagi chiziqli erkli sistemasiga",
                "Sistemaning faqat nol vektordan iborat yechimiga",
                "Sistemaning barcha yechimlari yig‘indisiga",
                "Asosiy matritsaning satr vektorlari sistemasiga"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "5-ma’ruza (7-slayd, Ta’rif): Bir jinsli chiziqli algebraik tenglamalar sistemasi yechimlarining har qanday maksimal sondagi chiziqli erkli sistemasi bu tenglamalar sistemasining fundamental yechimlar sistemasi deb ataladi."
        },
        {
            "q": "Fundamental yechimlar sistemasi haqidagi **Teorema** (7-slayd) qanday bayon etiladi?",
            "opts": [
                "$AX = \\Theta$ bir jinsli tenglamalar sistemasining har qanday yechimi uning fundamental yechimlar sistemasining chiziqli kombinatsiyasidan iborat: $X = c_1 F_1 + c_2 F_2 + \\dots + c_k F_k$",
                "$AX = \\Theta$ sistemaning har qanday yechimi fundamental yechimlarning skalyar ko‘paytmasiga teng",
                "Fundamental yechimlar sistemasi har doim bitta vektordan iborat bo‘ladi",
                "Fundamental yechimlar o‘zaro chiziqli bog‘liq bo‘ladi"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "5-ma’ruza (7-slayd, Teorema va Tasdiq): $AX = \\Theta$ tenglamalar sistemasining har qanday yechimi fundamental yechimlar sistemasining chiziqli kombinatsiyasidan iborat: $X = c_1 F_1 + \\dots + c_k F_k$."
        },
        {
            "q": "Fundamental yechimlar soni haqidagi **Teorema** (8-slayd): Bir jinsli algebraik tenglamalar sistemasining rangi $r$ ga teng bo‘lib, noma’lumlar soni $n$ dan kichik ($r < n$) bo‘lsa, FYS nechta nolmas vektordan iborat bo‘ladi?",
            "opts": [
                "$n - r$ ta chiziqli erkli nolmas vektorlardan iborat bo‘ladi",
                "$r$ ta nolmas vektordan iborat bo‘ladi",
                "$n + r$ ta vektordan iborat bo‘ladi",
                "$C_n^r$ ta vektordan iborat bo‘ladi"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "5-ma’ruza (8-slayd, Teorema): Tenglamalar sistemasining fundamental yechimlar sistemasi $n - r$ ta nolmas vektorlardan iborat bo‘ladi."
        },
        {
            "q": "Bir jinsli sistemaning fundamental yechimlar sistemasini ($F_1, F_2, \\dots, F_{n-r}$) amalda qurish algoritmi qanday (9-10-slaydlar)?",
            "opts": [
                "$r$ ta bazis noma’lumlar qolgan $n - r$ ta ozod noma’lumlar orqali ifodalanadi, so‘ngra ozod noma’lumlar o‘rniga $n - r$ o‘lchovli $(1,0,\\dots,0)^T, (0,1,\\dots,0)^T, \\dots, (0,0,\\dots,1)^T$ chiziqli erkli vektorlar ketma-ket qo‘yilib $F_1, \\dots, F_{n-r}$ hisoblanadi",
                "Barcha ozod noma’lumlarga faqat $0$ qiymat berilib, bitta nol vektor topiladi",
                "Asosiy matritsaning ustunlari transponirlanadi",
                "Kramer formulalari bo‘yicha $\\Delta_{x_i}$ lar hisoblanadi"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "5-ma’ruza (9-10-slaydlar): Ozod noma’lumlar o‘rniga birlik matritsaning chiziqli erkli ustun vektorlarini qo‘yish orqali $n-r$ ta chiziqli erkli fundamental yechim hosil qilinadi."
        },
        {
            "q": "Qanday tenglamalar sistemasiga «bir jinsli bo‘lmagan chiziqli tenglamalar sistemasi» deyiladi va uning umumiy yechimi formulasi qanday (12-slayd)?",
            "opts": [
                "Agar $B \\ne \\Theta$ bo‘lsa bir jinsli bo‘lmagan sistema deyiladi; umumiy yechimi: $X = F_0 + c_1 F_1 + \\dots + c_{n-r} F_{n-r}$",
                "Agar $B = \\Theta$ bo‘lsa bir jinsli bo‘lmagan sistema deyiladi; umumiy yechimi: $X = c_1 F_1 + \\dots + c_n F_n$",
                "Umumiy yechimi: $X = F_0 \\cdot c_1 F_1$",
                "Umumiy yechimi faqat $X = F_0$ dan iborat bo‘ladi"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "5-ma’ruza (12-slayd): Agar $B \\ne \\Theta$ bo‘lsa, bir jinsli bo‘lmagan sistema deyiladi va umumiy yechimi $X = F_0 + c_1 F_1 + \\dots + c_{n-r} F_{n-r}$ ko‘rinishda bo‘ladi."
        },
        {
            "q": "Bir jinsli bo‘lmagan sistemaning umumiy yechimi $X = F_0 + c_1 F_1 + \\dots + c_{n-r} F_{n-r}$ formulasidagi $F_0$ va $F_1, \\dots, F_{n-r}$ lar nimani anglatadi (12-slayd)?",
            "opts": [
                "$F_0$ — bir jinsli bo‘lmagan sistemaning bitta xususiy yechimi; $F_1, \\dots, F_{n-r}$ — mos bir jinsli ($AX = \\Theta$) sistemaning fundamental yechimlari sistemasi",
                "$F_0$ — nol vektor; $F_1, \\dots, F_{n-r}$ — bir jinsli bo‘lmagan sistemaning xususiy yechimlari",
                "$F_0$ — ozod hadlar vektori $B$; $F_i$ — asosiy matritsa ustunlari",
                "$F_0, F_1, \\dots, F_{n-r}$ larning barchasi bir jinsli sistemaning yechimlari"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "5-ma’ruza (12-slayd): $F_0$ — bir jinsli bo‘lmagan sistemaning xususiy yechimlaridan biri, $F_1, \\dots, F_{n-r}$ — mos bir jinsli sistemaning FYS, $c_i$ — ixtiyoriy haqiqiy sonlar."
        },
        {
            "q": "Bir jinsli bo‘lmagan sistemaning xususiy yechimi $F_0$ ni topish uchun erkli o‘zgaruvchilarga qanday qiymatlar beriladi (12-13-slaydlar)?",
            "opts": [
                "Erkli o‘zgaruvchilarga ixtiyoriy xususiy qiymatlar (eng qulayi — barcha erkli o‘zgaruvchilarga $0$ qiymatlar) berilib, bir jinsli bo‘lmagan sistema bazis o‘zgaruvchilarga nisbatan yechiladi",
                "Barcha bazis o‘zgaruvchilarga $0$ qiymat beriladi",
                "Erkli o‘zgaruvchilarga $\\infty$ qiymat beriladi",
                "$F_0$ har doim nol vektorga teng deb olinadi"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "5-ma’ruza (12-13-slaydlar): $F_0$ ni aniqlash uchun erkli o‘zgaruvchilarning xususiy (masalan $0$) qiymatlarida bir jinsli bo‘lmagan tenglamalar sistemasi yechiladi."
        },
        {
            "q": "Chiziqli tenglamalar sistemasini yechishning «Matritsalar usuli» qachon qo‘llaniladi va qaysi formulaga asoslanadi (25-26-slaydlar)?",
            "opts": [
                "Tenglamalar soni noma’lumlar soniga teng ($n \\times n$) va asosiy matritsa determinanti $|A| \\ne 0$ bo‘lganda qo‘llaniladi; $X = A^{-1} B$",
                "Ixtiyoriy $m \\times n$ sistemada $|A| = 0$ bo‘lganda qo‘llaniladi; $X = A^T B$",
                "Faqat bir jinsli sistemalarda qo‘llaniladi; $X = A \\cdot B$",
                "Kengaytirilgan matritsa ustunlarini ko‘paytirish orqali bajariladi"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "5-ma’ruza (25-26-slaydlar): $n$ ta noma’lumli $n$ ta tenglamalar sistemasida $|A| \\ne 0$ bo‘lsa, $A^{-1}$ mavjud va $X = A^{-1}B$."
        },
        {
            "q": "$A \\cdot X \\cdot B = C$ ko‘rinishdagi matritsaviy tenglamaning yechimi qaysi formula bilan aniqlanadi ($\\det A \\ne 0,\\; \\det B \\ne 0$, 29-slayd)?",
            "opts": [
                "$X = A^{-1} C B^{-1}$",
                "$X = A^{-1} B^{-1} C$",
                "$X = C A^{-1} B^{-1}$",
                "$X = B^{-1} C A^{-1}$"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "5-ma’ruza (29-slayd): $A \\cdot X \\cdot B = C$ tenglamaning ikkala tomonini chapdan $A^{-1}$ ga va o‘ngdan $B^{-1}$ ga ko‘paytirib, $X = A^{-1} C B^{-1}$ hosil qilinadi."
        },
        {
            "q": "**Kramer qoidasi** (30-slayd): $n$ ta noma’lumli $n$ ta chiziqli tenglamalar sistemasining asosiy determinanti $\\Delta \\ne 0$ bo‘lsa, sistema nechta yechimga ega va noma’lumlar qanday topiladi?",
            "opts": [
                "Sistema yagona yechimga ega va $x_1 = \\frac{\\Delta_{x_1}}{\\Delta},\\; x_2 = \\frac{\\Delta_{x_2}}{\\Delta},\\; \\dots,\\; x_n = \\frac{\\Delta_{x_n}}{\\Delta}$ Kramer formulalari bilan aniqlanadi",
                "Sistema cheksiz ko‘p yechimga ega va $x_i = \\Delta \\cdot \\Delta_{x_i}$ formula bilan topiladi",
                "Sistema yechimga ega emas",
                "Noma’lumlar $x_i = \\frac{\\Delta}{\\Delta_{x_i}}$ formula bilan topiladi"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "5-ma’ruza (30-slayd): $\\Delta \\ne 0$ bo‘lsa, sistema yagona yechimga ega va $x_i = \\frac{\\Delta_{x_i}}{\\Delta}$ formulalar bilan aniqlanadi."
        },
        {
            "q": "Kramer formulalaridagi $\\Delta_{x_1}, \\Delta_{x_2}, \\dots, \\Delta_{x_n}$ yordamchi determinantlar asosiy $\\Delta$ determinantdan qanday hosil qilinadi (31-slayd)?",
            "opts": [
                "$\\Delta$ determinantda mos noma’lum ($x_i$) oldidagi koeffitsiyentlar ustunini ozod hadlar ustuni ($b_1, b_2, \\dots, b_n$) bilan almashtirish orqali hosil qilinadi",
                "$\\Delta$ determinantning $i$-satrini ozod hadlar bilan almashtirish orqali",
                "$\\Delta$ determinantning $i$-satri va $i$-ustunini o‘chirish orqali",
                "$\\Delta$ determinantni $b_i$ ozod hadga ko‘paytirish orqali"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "5-ma’ruza (31-slayd): $\\Delta_{x_1}, \\dots, \\Delta_{x_n}$ determinantlar $\\Delta$ determinantda noma’lumlar oldidagi koeffitsiyentlarni mos ravishda ozod hadlar bilan almashtirish orqali hosil qilinadi."
        },
        {
            "q": "Kramer usulida asosiy determinant $\\Delta = 0$ bo‘lib, barcha $\\Delta_{x_1} = 0, \\Delta_{x_2} = 0, \\dots, \\Delta_{x_n} = 0$ bo‘lsa (va $r(A)=r(A|B)$ bo‘lsa), tenglamalar sistemasi qanday yechimga ega bo‘ladi (32-33-slaydlar)?",
            "opts": [
                "Cheksiz ko‘p yechimga ega bo‘ladi",
                "Yagona yechimga ega bo‘ladi",
                "Faqat nol yechimga ega bo‘ladi",
                "Har doim ikkita yechimga ega bo‘ladi"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "5-ma’ruza (32-33-slaydlar): Agar $\\Delta = 0$ bo‘lib, a) $\\Delta_{x_1} = 0, \\dots, \\Delta_{x_n} = 0$ bo‘lsa (birgalikda bo‘lganda), sistema cheksiz ko‘p yechimga ega bo‘ladi."
        },
        {
            "q": "Kramer usulida asosiy determinant $\\Delta = 0$ bo‘lib, qo‘shimcha determinantlardan kamida bittasi $\\Delta_{x_i} \\ne 0$ bo‘lsa, tenglamalar sistemasi haqida nima deyish mumkin (32, 34-slaydlar)?",
            "opts": [
                "Tenglamalar sistemasi yechimga ega emas (birgalikda emas)",
                "Tenglamalar sistemasi yagona yechimga ega",
                "Tenglamalar sistemasi cheksiz ko‘p yechimga ega",
                "$x_i = 0$ yechimga ega"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "5-ma’ruza (32, 34-slaydlar): Agar $\\Delta = 0$ bo‘lib, b) $\\Delta_{x_i} \\ne 0$ bo‘lsa, tenglamalar sistemasi yechimga ega emas."
        },
        {
            "q": "Agar bir jinsli chiziqli tenglamalar sistemasida tenglamalar soni $m$ noma’lumlar soni $n$ dan kichik ($m < n$) bo‘lsa, bu sistema haqida qaysi nazariy tasdiq DOIMO to‘g‘ri?",
            "opts": [
                "Sistema albatta nol yechimdan tashqari cheksiz ko‘p nolmas yechimlarga ega (chunki $r(A) \\le m < n$ va $n - r \\ge 1$)",
                "Sistema faqat yagona nol yechimga ega",
                "Sistema birgalikda emas",
                "Sistemaning FYS da $m$ ta vektor bo‘ladi"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "$r(A) \\le \\min(m, n) = m < n$ bo‘lgani sababli $r(A) < n$ shart avtomatik bajariladi va sistema nolmas yechimlarga ega bo‘ladi."
        },
        {
            "q": "Agar $X_1$ va $X_2$ ustun-vektorlar $AX = \\Theta$ bir jinsli sistemaning yechimlari bo‘lsa, ularning yig‘indisi $X_1 + X_2$ va songa ko‘paytmasi $\\lambda X_1$ ham shu sistemaning yechimi bo‘ladimi?",
            "opts": [
                "Ha, chunki $A(X_1 + X_2) = AX_1 + AX_2 = \\Theta + \\Theta = \\Theta$ va $A(\\lambda X_1) = \\lambda(AX_1) = \\Theta$ (yechimlar to‘plami chiziqli fazo tashkil qiladi)",
                "Yo‘q, faqat $X_1 - X_2$ yechim bo‘ladi",
                "Faqat $\\lambda = 1$ bo‘lganda yechim bo‘ladi",
                "Yig‘indi bir jinsli bo‘lmagan sistemaning yechimi bo‘ladi"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "Bir jinsli sistemaning barcha yechimlari to‘plami $\\mathbb{R}^n$ ning $n - r$ o‘lchovli chiziqli qism fazosini (yadrosini) tashkil etadi, FYS esa shu qism fazoning bazisidir."
        },
        {
            "q": "Agar $X_1$ va $X_2$ vektorlar $AX = B$ ($B \\ne \\Theta$) bir jinsli bo‘lmagan sistemaning yechimlari bo‘lsa, ularning yig‘indisi $X_1 + X_2$ ham shu sistemaning yechimi bo‘ladimi?",
            "opts": [
                "Yo‘q, chunki $A(X_1 + X_2) = AX_1 + AX_2 = B + B = 2B \\ne B$; ammo ularning ayirmasi $X_1 - X_2$ mos bir jinsli $AX = \\Theta$ sistemaning yechimi bo‘ladi",
                "Ha, $X_1 + X_2$ ham har doim $AX = B$ ning yechimi bo‘ladi",
                "$X_1 - X_2$ ham $AX = B$ ning yechimi bo‘ladi",
                "Bir jinsli bo‘lmagan sistemada ikkita yechim bo‘lishi mumkin emas"
            ],
            "ans": 0,
            "diff": "Qiyin",
            "exp": "$A(X_1 - X_2) = AX_1 - AX_2 = B - B = \\Theta$. Shuning uchun ikkita xususiy yechim ayirmasi mos bir jinsli sistemaning yechimi bo‘ladi."
        },
        {
            "q": "$n$ ta noma’lumli $n$ ta bir jinsli chiziqli tenglamalar sistemasi ($AX = \\Theta$) nolmas yechimlarga ega bo‘lishi uchun asosiy determinant $\\Delta = \\det(A)$ qanday shartni qanoatlantirishi zarur va yetarli?",
            "opts": [
                "$\\Delta = \\det(A) = 0$ bo‘lishi zarur va yetarli",
                "$\\Delta = \\det(A) \\ne 0$ bo‘lishi zarur va yetarli",
                "$\\Delta = 1$ bo‘lishi zarur va yetarli",
                "$\\Delta > 0$ bo‘lishi zarur va yetarli"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "Kvadrat bir jinsli sistemada nolmas yechim mavjud bo‘lishi sharti $r(A) < n \\iff \\det(A) = 0$."
        },
        {
            "q": "Agar chiziqli tenglamalar sistemasida $r(A) = r(A \\mid B) = n$ bo‘lsa, mos bir jinsli sistemaning fundamental yechimlar sistemasi (FYS) nechta vektordan iborat bo‘ladi?",
            "opts": [
                "FYS mavjud emas ($n - r = n - n = 0$), chunki mos bir jinsli sistema faqat yagona nol yechimga ega",
                "$n$ ta vektordan iborat bo‘ladi",
                "$1$ ta nolmas vektordan iborat bo‘ladi",
                "Cheksiz ko‘p vektordan iborat bo‘ladi"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "5-ma’ruza (5, 8-slaydlar): $r = n$ bo‘lganda erkli o‘zgaruvchilar soni $n - r = 0$ bo‘lib, bir jinsli sistema faqat nol yechimga ega va nolmas FYS mavjud emas."
        }
    ]

    # =========================================================================
    # MAVZU 6: Gauss va Gauss-Jordan usullari, Bazis yechim (30 ta NAZARIY savol)
    # =========================================================================
    t6 = [
        {
            "q": "Chiziqli tenglamalar sistemasini yechishning «Gauss usuli» mohiyati nimadan iborat (5-slayd)?",
            "opts": [
                "Elementar satr almashtirishlari yordamida noma’lumlarni ketma-ket yo‘qotib, sistemani ekvivalent uchburchak (yoki pog‘onali) shaklga keltirish va so‘ngra teskari yurish bilan noma’lumlarni topish",
                "Asosiy matritsaning barcha minorlari va algebraik to‘ldiruvchilarini hisoblash orqali teskari matritsa topish",
                "Har bir noma’lum uchun alohida $n$-tartibli determinant hisoblash",
                "Tenglamalarni kvadratga oshirib qo‘shish"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "6-ma’ruza (5-7-slaydlar): Gauss usuli noma’lumlarni ketma-ket yo‘qotish orqali sistemani uchburchak/pog‘onali ko‘rinishga keltirishga asoslangan."
        },
        {
            "q": "Gauss usulining «to‘g‘ri yurish» va «teskari yurish» bosqichlarida qanday ishlar bajariladi (5-7-slaydlar)?",
            "opts": [
                "To‘g‘ri yurishda kengaytirilgan matritsa yuqori uchburchak (pog‘onali) shaklga keltiriladi; teskari yurishda esa oxirgi tenglamadan boshlab yuqoriga qarab $x_n, x_{n-1}, \\dots, x_1$ ketma-ket topiladi",
                "To‘g‘ri yurishda $x_1$ dan $x_n$ gacha topiladi; teskari yurishda matritsa transponirlanadi",
                "To‘g‘ri yurishda determinant topiladi; teskari yurishda teskari matritsa topiladi",
                "Ikkala bosqichda ham faqat ustunlar almashtiriladi"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "6-ma’ruza (5, 7-slaydlar): To‘g‘ri yurish natijasida $\\tilde{a}_{nn}x_n = \\tilde{b}_n$ tenglama hosil bo‘ladi, undan $x_n$ topilib, yuqoridagi tenglamalarga ketma-ket qo‘yiladi."
        },
        {
            "q": "Gauss usulida tenglamalar sistemasini yechishda kengaytirilgan $(A \\mid B)$ matritsaning qatori ustida qanday elementar almashtirishlar bajarishga ruxsat etiladi?",
            "opts": [
                "Tenglamalar (satrlar) o‘rnini almashtirish, satrni noldan farqli songa ko‘paytirish/bo‘lish, bir satrni songa ko‘paytirib boshqa satrga qo‘shish hamda $0 = 0$ nol satrni tashlab yuborish",
                "Ozod hadlar ustuni $B$ ni asosiy matritsaning 1-ustuni bilan almashtirish",
                "Satrning barcha elementlariga bir xil $k \\ne 0$ sonni qo‘shib chiqish",
                "Kengaytirilgan matritsani transponirlash"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "Tenglamalar sistemasining yechimlari to‘plami o‘zgarmasligi (ekvivalent sistema hosil bo‘lishi) uchun amallar tenglamalar (satrlar) ustida bajariladi."
        },
        {
            "q": "Gauss usulida to‘g‘ri yurish natijasida kengaytirilgan matritsada barcha elementlari noldan iborat $(0\\; 0\\; \\dots\\; 0 \\mid 0)$ satr hosil bo‘lsa, bu nimani bildiradi (8-9-slaydlar)?",
            "opts": [
                "Mos tenglama qolgan tenglamalarning chiziqli kombinatsiyasi ekanligini bildiradi; bu nol satr tashlab yuboriladi va sistemaning rangi tenglamalar sonidan kichik bo‘ladi",
                "Sistema birgalikda emasligini (yechimga ega emasligini) bildiradi",
                "Sistemaning barcha noma’lumlari $0$ ga teng ekanligini bildiradi",
                "Hisoblashda xatolik ketganini bildiradi"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "6-ma’ruza (8-9-slaydlar): $(0\\; 0\\; 0\\; 0 \\mid 0)$ satr tashlab yuboriladi va qolgan pog‘onali tenglamalardan erkli o‘zgaruvchi $\\alpha \\in \\mathbb{R}$ orqali umumiy yechim yoziladi."
        },
        {
            "q": "Gauss usulida to‘g‘ri yurish davomida $(0\\; 0\\; \\dots\\; 0 \\mid b)$ ko‘rinishdagi satr ($b \\ne 0$) hosil bo‘lsa, qanday xulosa chiqariladi?",
            "opts": [
                "Sistema birgalikda emas (yechimga ega emas), chunki $0 \\cdot x_1 + \\dots + 0 \\cdot x_n = b \\ne 0$ ziddiyatli tenglama hosil bo‘ldi va $r(A) < r(A \\mid B)$",
                "Sistema cheksiz ko‘p yechimga ega",
                "Oxirgi noma’lum $x_n = b$ ga teng",
                "Sistema yagona nol yechimga ega"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "Chap tomonda barcha koeffitsiyentlar nol, o‘ngda esa $b \\ne 0$ bo‘lishi Kroneker-Kapelli teoremasiga ko‘ra $r(A) \\ne r(A \\mid B)$ ekanligini ko‘rsatadi."
        },
        {
            "q": "Chiziqli tenglamalar sistemasini yechishning «Gauss-Jordan usuli» qanday sxema orqali ifodalanadi (10-slayd)?",
            "opts": [
                "$(A \\mid B) \\sim (E \\mid X)$, ya’ni kengaytirilgan matritsaning asosiy qismi birlik matritsa $E$ ga keltirilganda ozod hadlar ustuni bevosita $X$ yechimga aylanadi",
                "$(A \\mid E) \\sim (B \\mid X)$",
                "$(A \\mid B) \\sim (O \\mid X)$",
                "$(A \\mid B) \\sim (A^T \\mid B^T)$"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "6-ma’ruza (10-slayd): Gauss-Jordan usulida $(A \\mid B) \\sim (E \\mid X)$ sxemasi bajariladi."
        },
        {
            "q": "Gauss-Jordan usuli oddiy Gauss usulidan qaysi jihati bilan farq qiladi (10-12-slaydlar)?",
            "opts": [
                "Gauss usulida faqat bosh diagonal ostidagi elementlar nolga aylantirilsa, Gauss-Jordan usulida bosh diagonalning ham ostidagi, ham ustidagi barcha elementlar nolga aylantiriladi va teskari yurish talab etilmaydi",
                "Gauss-Jordan usulida faqat determinantlar hisoblanadi",
                "Gauss-Jordan usulida faqat ustunlar ustida amal bajariladi",
                "Gauss-Jordan usuli faqat 2 noma’lumli sistemalarga qo‘llaniladi"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "6-ma’ruza (10-12-slaydlar): Gauss-Jordan usulida asosiy matritsa diagonal (birlik $E$) ko‘rinishga keltirilgani uchun noma’lumlar qiymati to‘g‘ridan-to‘g‘ri hosil bo‘ladi."
        },
        {
            "q": "Bazis tenglamalar sistemasi haqidagi **Teorema** (13-slayd) qanday bayon etiladi?",
            "opts": [
                "Chiziqli tenglamalar sistemasi o‘zining bazis tenglamalar sistemasiga ekvivalentdir",
                "Chiziqli tenglamalar sistemasi faqat bir jinsli sistemaga ekvivalentdir",
                "Bazis tenglamalar sistemasi har doim yechimga ega emas",
                "Bazis tenglamalar sistemasida erkli o‘zgaruvchilar qatnashmaydi"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "6-ma’ruza (13-slayd, Teorema): Chiziqli tenglamalar sistemasi o‘zining bazis tenglamalar sistemasiga ekvivalent."
        },
        {
            "q": "Tenglamalar sistemasining «bazis yechimi» deb qanday yechimga aytiladi (13-14-slaydlar)?",
            "opts": [
                "Erkli o‘zgaruvchilarning qiymatlari nolga teng deb olinib, faqat bazis o‘zgaruvchilari noldan farqli bo‘lishi mumkin bo‘lgan yechimga",
                "Bazis o‘zgaruvchilari nolga teng deb olinib, erkli o‘zgaruvchilari $1$ ga teng bo‘lgan yechimga",
                "Barcha komponentlari bir-biriga teng bo‘lgan yechimga",
                "Faqat bir jinsli sistemaning fundamental yechimiga"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "6-ma’ruza (13-14-slaydlar, Ta’rif): Faqat bazis o‘zgaruvchilari noldan farqli bo‘lishi mumkin bo‘lgan yechim tenglamalar sistemasining bazis yechimi deyiladi. Bazis yechimda erkli o‘zgaruvchilarning qiymatlari nolga teng deb olinadi."
        },
        {
            "q": "Tenglamalar sistemasi cheksiz ko‘p yechimga ega bo‘lganda ($r < n$), uning bazis yechimlari soni haqida qanday tasdiq o‘rinli (14-slayd)?",
            "opts": [
                "Tenglamalar sistemasi cheksiz ko‘p yechimga ega bo‘lsa-da, bazis yechimlar soni chekli bo‘ladi va bazis minorlar soniga teng bo‘ladi",
                "Bazis yechimlar soni ham cheksiz ko‘p bo‘ladi",
                "Bazis yechim umuman mavjud bo‘lmaydi",
                "Bazis yechimlar soni har doim $1$ ga teng bo‘ladi"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "6-ma’ruza (14-slayd): Tenglamalar sistemasi cheksiz ko‘p bo‘lsa-da, bazis yechimlar soni chekli bo‘ladi. Bazis yechimlar soni bazis minorlar soniga teng bo‘ladi."
        },
        {
            "q": "Sistemada noma’lumlar soni $n$ va sistema rangi $r$ bo‘lsa, noma’lumlarni bazis va erkli o‘zgaruvchilarga ajratish usullari (guruhlari) soni qaysi formula bilan hisoblanadi (14-slayd)?",
            "opts": [
                "$C_n^r = \\frac{n!}{r! \\cdot (n - r)!}$",
                "$C_n^r = \\frac{r!}{n! \\cdot (n - r)!}$",
                "$A_n^r = \\frac{n!}{(n - r)!}$",
                "$P_n = n! \\cdot r!$"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "6-ma’ruza (14-slayd): $C_n^r = \\frac{n!}{r!(n-r)!}$, bu yerda $n$ — noma’lumlar soni, $r$ — rang."
        },
        {
            "q": "Agar sistemada noma’lumlar soni $n$ va sistema rangi $r$ ($r < n$) bo‘lsa, har bir bazis guruhda nechta «bazis o‘zgaruvchi» va nechta «erkli o‘zgaruvchi» bo‘ladi (15-slayd)?",
            "opts": [
                "$r$ ta bazis o‘zgaruvchi va $n - r$ ta erkli o‘zgaruvchi bo‘ladi",
                "$n - r$ ta bazis o‘zgaruvchi va $r$ ta erkli o‘zgaruvchi bo‘ladi",
                "$n$ ta bazis o‘zgaruvchi va $r$ ta erkli o‘zgaruvchi bo‘ladi",
                "Bazis va erkli o‘zgaruvchilar soni har doim teng bo‘ladi"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "6-ma’ruza (15-slayd): Bazis o‘zgaruvchilar soni sistema rangi $r$ ga, erkli o‘zgaruvchilar soni esa $n - r$ ga teng."
        },
        {
            "q": "Qanday shart bajarilganda tanlangan $r$ ta noma’lumlar guruhi haqiqatan ham «bazis o‘zgaruvchilar» bo‘la oladi (16-slayd)?",
            "opts": [
                "Shu $r$ ta noma’lumning koeffitsiyentlar ustunlaridan tuzilgan $r$-tartibli determinant (minor) noldan farqli bo‘lganda ($\\det \\ne 0$)",
                "Shu noma’lumlarning koeffitsiyentlaridan tuzilgan minor nolga teng bo‘lganda ($\\det = 0$)",
                "Tanlangan noma’lumlarning indekslari faqat toq sonlar bo‘lganda",
                "Har qanday $r$ ta noma’lum hech qanday shartsiz bazis bo‘la oladi"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "6-ma’ruza (16-slayd): $C_n^r$ ta guruh ichidan faqat mos $r$-tartibli minori noldan farqli ($\\ne 0$) bo‘lgan guruhlargina bazis o‘zgaruvchilar bo‘la oladi."
        },
        {
            "q": "Agar tanlangan $r$ ta noma’lumga mos keluvchi $r$-tartibli minor nolga teng bo‘lsa (16-slayd), bu guruh haqida qanday xulosa chiqariladi?",
            "opts": [
                "Ushbu noma’lumlar ustunlari chiziqli bog‘liq bo‘lgani sababli ular bazis o‘zgaruvchilar guruhini tashkil qila olmaydi va ulardan bazis yechim hosil bo‘lmaydi",
                "Ushbu guruhga mos bazis yechimning barcha komponentlari $1$ ga teng bo‘ladi",
                "Ushbu guruhdan cheksiz ko‘p bazis yechim chiqadi",
                "Bu holatda sistema birgalikda bo‘lmay qoladi"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "6-ma’ruza (16-slayd): Masalan, 10 ta kombinatorik juftlikdan 4 tasida minor 0 ga teng bo‘lgani uchun ular bazis bo‘la olmaydi va faqat qolgan 6 tasidan bazis yechim topiladi."
        },
        {
            "q": "Bazis yechimlar soni $N_{\\text{bazis}}$ va kombinatorik guruhlar soni $C_n^r$ orasida umumiy holda qanday munosabat o‘rinli?",
            "opts": [
                "$1 \\le N_{\\text{bazis}} \\le C_n^r$ (bazis yechimlar soni noldan farqli bazis minorlar soniga teng bo‘lib, $C_n^r$ dan oshmaydi)",
                "$N_{\\text{bazis}} > C_n^r$",
                "$N_{\\text{bazis}} = n!$",
                "$N_{\\text{bazis}} = 0$"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "Sistema rangi $r$ bo‘lgani uchun kamida bitta $r$-tartibli minor noldan farqli ($N_{\\text{bazis}} \\ge 1$) va jami $r$-tartibli minorlar soni $C_n^r$ dan oshmaydi."
        },
        {
            "q": "Tanlangan bazis o‘zgaruvchilar guruhi bo‘yicha bazis yechimni topish algoritmi qanday (17-slayd)?",
            "opts": [
                "Barcha $n - r$ ta erkli o‘zgaruvchilar $0$ ga teng deb olinib sistemadan tushirib qoldiriladi, hosil bo‘lgan $r \\times r$ kvadrat sistema yechilib $r$ ta bazis o‘zgaruvchi qiymati topiladi va $n$ o‘lchovli ustun-vektorga o‘z o‘rinlariga joylashtiriladi",
                "Bazis o‘zgaruvchilar $0$ ga teng deb olinib, erkli o‘zgaruvchilar topiladi",
                "Barcha o‘zgaruvchilar $1$ ga teng deb olinadi",
                "Faqat ozod hadlar ustuni ko‘chirib yoziladi"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "6-ma’ruza (17-slayd): Erkli o‘zgaruvchilarga $0$ berilganda $r$ ta tenglama va $r$ ta bazis noma’lumli ($\\det \\ne 0$) kvadrat sistema qoladi va uning yagona yechimi bazis yechimni beradi."
        },
        {
            "q": "Gauss usulida to‘g‘ri yurishda navbatdagi qadamda bosh diagonalda $0$ elementi uchrab qolsa ($a_{kk} = 0$), algoritmni davom ettirish uchun nima qilinadi?",
            "opts": [
                "Shu ustunning quyiroq qismida noldan farqli element qatnashgan biror satr bilan $k$-satrning o‘rni almashtiriladi",
                "Sistema yechimga ega emas deb to‘xtatiladi",
                "Butun satr $0$ ga ko‘paytiriladi",
                "Ozod hadlar ustuni tashlab yuboriladi"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "Tayanch (yetakchi) element nol bo‘lib qolsa, quyidagi satrlardan noldan farqli elementli satr yuqoriga ko‘chiriladi (satrlar o‘rni almashtiriladi)."
        },
        {
            "q": "Gauss-Jordan usulida $(A \\mid B)$ matritsani $(E \\mid X)$ ga keltirishda har bir tayanch element $a_{kk}$ ni $1$ ga tenglashtirish uchun qanday amal bajariladi?",
            "opts": [
                "$k$-satrning barcha elementlari (shu jumladan ozod hadi ham) $a_{kk} \\ne 0$ tayanch elementga bo‘lib chiqiladi",
                "$k$-satrning barcha elementlaridan $(a_{kk} - 1)$ soni ayirib chiqiladi",
                "Faqat $a_{kk}$ element o‘chirilib o‘rniga $1$ yozib qo‘yiladi",
                "$k$-ustun $a_{kk}$ ga bo‘linadi"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "6-ma’ruza (12-slayd): Tenglama ekvivalentligi buzilmasligi uchun butun satr (ham koeffitsiyentlar, ham ozod had) $a_{kk}$ songa bo‘linadi."
        },
        {
            "q": "Kramer qoidasi va Teskari matritsa usuliga nisbatan Gauss hamda Gauss-Jordan usullarining eng katta nazariy va amaliy ustunligi nimada?",
            "opts": [
                "Gauss va Gauss-Jordan usullari tenglamalar soni $m$ va noma’lumlar soni $n$ ixtiyoriy bo‘lgan hamda asosiy determinanti nolga teng bo‘lgan sistemalarga ham to‘liq qo‘llaniladi",
                "Gauss usuli faqat 2-tartibli sistemalarga qo‘llaniladi",
                "Kramer usuli Gauss usuliga qaraganda katta $n$ larda kamroq amal talab qiladi",
                "Gauss usulida hech qachon kasr sonlar hosil bo‘lmaydi"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "Kramer va $X=A^{-1}B$ usullari faqat $m=n$ va $\\det(A) \\ne 0$ bo‘lganda ishlaydi; Gauss usuli esa ixtiyoriy $m \\times n$ sistemaning birgalikdaligini ham tekshiradi, umumiy yechimini ham topadi."
        },
        {
            "q": "Agar sistemaning asosiy matritsasida ikkita noma’lumga (masalan $x_1$ va $x_3$ ga) mos keluvchi ustunlar o‘zaro proporsional bo‘lsa, bu ikkala noma’lum bir vaqtda bitta bazis guruhga kira oladimi (16-slayd)?",
            "opts": [
                "Yo‘q, kira olmaydi, chunki proporsional ustunlar qatnashgan har qanday minor determinantning 8-xossasiga ko‘ra nolga teng bo‘ladi",
                "Ha, proporsional ustunlar har doim bazis tashkil qiladi",
                "Faqat ozod hadlar nol bo‘lganda kira oladi",
                "Faqat proporsionallik koeffitsiyenti musbat bo‘lganda kira oladi"
            ],
            "ans": 0,
            "diff": "Qiyin",
            "exp": "6-ma’ruza (15-16-slaydlar): $(2, 3)^T$ va $(4, 6)^T$ ustunlar proporsional bo‘lgani uchun ulardan tuzilgan minor $\\begin{vmatrix} 2 & 4 \\\\ 3 & 6 \\end{vmatrix} = 0$ bo‘lib, $x_1$ va $x_3$ birgalikda bazis bo‘la olmaydi."
        },
        {
            "q": "Bazis tenglamalar sistemasini tuzishda asosiy matritsaning bazis minoriga kirmagan qolgan $m - r$ ta tenglamalari nima sababdan tashlab yuboriladi?",
            "opts": [
                "Chunki birgalikda bo‘lgan sistemada qolgan $m - r$ ta tenglama bazis tenglamalarning chiziqli kombinatsiyasi bo‘lib, yangi ma’lumot bermaydi (13-slayd, Teorema)",
                "Chunki u tenglamalar noto‘g‘ri tuzilgan bo‘ladi",
                "Chunki ularda noma’lumlar qatnashmaydi",
                "Chunki ularning ozod hadlari har doim manfiy bo‘ladi"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "6-ma’ruza (13-slayd): Chiziqli tenglamalar sistemasi o‘zining $r$ ta chiziqli erkli tenglamadan iborat bazis sistemasiga ekvivalent."
        },
        {
            "q": "Agar $n$ ta noma’lumli chiziqli tenglamalar sistemasida $r(A) = r(A \\mid B) = r < n$ bo‘lsa, har bir bazis yechimda nechta o‘zgaruvchi majburiy ravishda $0$ ga tenglashtiriladi?",
            "opts": [
                "$n - r$ ta erkli o‘zgaruvchi majburiy ravishda $0$ ga tenglashtiriladi",
                "$r$ ta bazis o‘zgaruvchi $0$ ga tenglashtiriladi",
                "Barcha $n$ ta o‘zgaruvchi $0$ ga tenglashtiriladi",
                "Faqat $1$ ta o‘zgaruvchi $0$ ga tenglashtiriladi"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "6-ma’ruza (14-15-slaydlar): Erkli o‘zgaruvchilar soni $n - r$ ta bo‘lib, bazis yechimda ularning barchasi nolga teng deb olinadi."
        },
        {
            "q": "Gauss-Jordan usuli bilan $(A \\mid B)$ matritsa kanonik pog‘onali shaklga keltirilganda ($r < n$), bazis o‘zgaruvchilarga mos ustunlar qanday ko‘rinishga keladi?",
            "opts": [
                "$r$-tartibli birlik matritsa $E_r$ ning ustunlari (bitta $1$ va qolganlari $0$) ko‘rinishiga keladi",
                "Barcha elementlari $1$ ga teng ustunlar ko‘rinishiga keladi",
                "To‘liq nol ustunlar ko‘rinishiga keladi",
                "Uchburchak ko‘rinishda qoladi"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "Gauss-Jordan usulida har bir bazis ustunda tayanch element $1$ ga, undan yuqori va pastdagi barcha elementlar $0$ ga aylantiriladi."
        },
        {
            "q": "Kanonik Gauss-Jordan shaklga keltirilgan $(E_r \\mid D \\mid d)$ matritsadan mos bazis yechim qanday o‘qib olinadi?",
            "opts": [
                "Erkli o‘zgaruvchilarga $0$ berilganda bazis o‘zgaruvchilarning qiymatlari to‘g‘ridan-to‘g‘ri o‘ng tomondagi $d$ ozod hadlar ustuniga teng bo‘lib chiqadi",
                "Bazis o‘zgaruvchilar $D$ matritsa elementlariga teng bo‘ladi",
                "Yana teskari yurish bajarish talab etiladi",
                "Determinant hisoblash orqali topiladi"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "$x_{\\text{bazis}} + D x_{\\text{erkli}} = d$ da $x_{\\text{erkli}} = 0$ qo‘yilsa, darhol $x_{\\text{bazis}} = d$ hosil bo‘ladi!"
        },
        {
            "q": "Agar sistemada $n$ ta noma’lum bo‘lib, uning rangi $r = 1$ bo‘lsa (bitta chiziqli erkli tenglama), kombinatorik bazis guruhlar soni $C_n^1$ nechaga teng bo‘ladi?",
            "opts": [
                "$C_n^1 = n$ taga teng (har bir noma’lum alohida bittadan bazis o‘zgaruvchi bo‘lishi mumkin, qolgan $n-1$ tasi erkli bo‘ladi)",
                "$1$ taga teng",
                "$n!$ taga teng",
                "$n - 1$ taga teng"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "$C_n^1 = \\frac{n!}{1!(n-1)!} = n$."
        },
        {
            "q": "Agar chiziqli tenglamalar sistemasida noma’lumlar soni $n$ va rang $r = n - 1$ bo‘lsa (1 ta erkli o‘zgaruvchi), bazis guruhlar soni $C_n^{n-1}$ nechaga teng?",
            "opts": [
                "$C_n^{n-1} = n$ taga teng",
                "$n - 1$ taga teng",
                "$1$ taga teng",
                "$\\frac{n(n-1)}{2}$ taga teng"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "Simmetriya xossasiga ko‘ra $C_n^{n-1} = C_n^1 = \\frac{n!}{(n-1)!1!} = n$."
        },
        {
            "q": "Gauss usulida ikkita tenglama o‘rnini almashtirish yoki tenglamani noldan farqli songa ko‘paytirish sistemaning yechimlar to‘plamini o‘zgartiradimi?",
            "opts": [
                "Yo‘q, elementar almashtirishlar natijasida boshlang‘ich sistemaga teng kuchli (ekvivalent, ya’ni yechimlar to‘plami aynan bir xil bo‘lgan) sistema hosil bo‘ladi",
                "Ha, yechimlar ishorasi o‘zgarib ketadi",
                "Ha, yechimlar shu songa ko‘payib ketadi",
                "Yechimlar soni kamayib ketadi"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "Elementar satr almashtirishlar qaytariluvchi (invertible) bo‘lgani uchun sistemaning yechimlari to‘plamini mutlaqo o‘zgartirmaydi."
        },
        {
            "q": "Nima uchun Gauss usulida to‘g‘ri yurishda biror satrni $0$ songa ko‘paytirish elementar almashtirish hisoblanmaydi va taqiqlanadi?",
            "opts": [
                "Chunki satrni $0$ ga ko‘paytirish shu tenglamani yo‘q qilib yuboradi (qaytarilmas amal) va matritsa rangini sun’iy ravishda kamaytirib, cheksiz ko‘p yot yechimlarni keltirib chiqaradi",
                "Chunki nolga ko‘paytirish juda qiyin",
                "Chunki nolga ko‘paytirilsa sistema yechimga ega bo‘lmay qoladi",
                "Nolga ko‘paytirishga ruxsat beriladi"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "3-ma’ruza (15-slayd, 2-elementar almashtirish): Satrni faqat NOLDAN FARQLI ($k \\ne 0$) songa ko‘paytirish va bo‘lish mumkin."
        },
        {
            "q": "Bir jinsli bo‘lmagan sistemaning har bir bazis yechimi shu sistemaning xususiy yechimi hisoblanadimi?",
            "opts": [
                "Ha, har bir bazis yechim sistemaning barcha tenglamalarini qanoatlantirgani sababli uning xususiy yechimi hisoblanadi (erkli o‘zgaruvchilar nolga teng bo‘lgan xususiy yechim)",
                "Yo‘q, bazis yechim sistemaning yechimi hisoblanmaydi",
                "Faqat nol vektor bazis yechim bo‘ladi",
                "Bazis yechim faqat umumiy yechim bo‘la oladi"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "6-ma’ruza (13-14-slaydlar): Bazis yechim erkli o‘zgaruvchilarning $0$ qiymatlarida olingan xususiy yechimdir."
        },
        {
            "q": "Gauss-Jordan usulida $(A \\mid B) \\sim (E \\mid X)$ zanjirini bajarish mohiyatan $A \\cdot X = B$ tenglamaning ikkala tomonini chapdan qaysi matritsaga ko‘paytirishga teng kuchli?",
            "opts": [
                "Chapdan $A^{-1}$ teskari matritsaga ko‘paytirishga ($A^{-1}AX = A^{-1}B \\iff EX = A^{-1}B$)",
                "Chapdan $A^T$ matritsaga ko‘paytirishga",
                "O‘ngdan $B^{-1}$ matritsaga ko‘paytirishga",
                "Birlik matritsa $E$ ni qo‘shishga"
            ],
            "ans": 0,
            "diff": "Qiyin",
            "exp": "$A$ ni $E$ ga keltiruvchi barcha elementar satr almashtirishlari ko‘paytmasi $A^{-1}$ ga teng bo‘lib, u bir vaqtda $B$ ustunni $X = A^{-1}B$ ga aylantiradi."
        }
    ]

    # =========================================================================
    # MAVZU 7: Arifmetik va Chiziqli fazo, Bazisni almashtirish (30 ta NAZARIY savol)
    # =========================================================================
    t7 = [
        {
            "q": "«$n$ o‘lchovli vektor» deb nimaga aytiladi va u qanday belgilanadi (4-slayd)?",
            "opts": [
                "$n$ ta sonning tartiblangan tizimiga $n$ o‘lchovli vektor deyiladi; lotin alifbosining bosh harflari ($A, B, \\dots, X, Y$) bilan ustun matritsa yoki $\\vec{a} = (a_1, a_2, \\dots, a_n)$ satr ko‘rinishida belgilanadi",
                "$n$ ta sonning tartibsiz to‘plamiga aytiladi va yagona son bilan belgilanadi",
                "Faqat tekislikdagi kesmaga aytiladi va $n \\le 2$ bo‘lishi shart",
                "$n \\times n$ kvadrat matritsaga vektor deyiladi"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "7-ma’ruza (4-slayd, Ta’rif): $n$ ta sonning tartiblangan tizimiga $n$ o‘lchovli vektor deyiladi."
        },
        {
            "q": "$n$ o‘lchovli $X$ va $Y$ vektorlar ustida qo‘shish ($Z = X + Y$) va songa ko‘paytirish ($\\lambda X$) chiziqli amallari qanday aniqlanadi (4-5-slaydlar)?",
            "opts": [
                "Xuddi matritsalardagi kabi mos komponentlarini qo‘shish ($x_i + y_i$) va har bir komponentni $\\lambda$ songa ko‘paytirish ($\\lambda x_i$) orqali aniqlanadi",
                "Komponentlarni o‘zaro ko‘paytirib bitta songa keltirish orqali aniqlanadi",
                "Faqat birinchi komponentga $\\lambda$ ni ko‘paytirish orqali aniqlanadi",
                "Vektorlarni transponirlab determinant hisoblash orqali aniqlanadi"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "7-ma’ruza (4-5-slaydlar): $n$ o‘lchovli vektorlar ustida qo‘shish va songa ko‘paytirish amallari xuddi matritsalardagi kabi komponentma-komponent bajariladi."
        },
        {
            "q": "Vektorlar ustida chiziqli amallarning 8 ta asosiy xossasi (7-slayd) qaysi javobda to‘g‘ri ifodalangan?",
            "opts": [
                "$1^\\circ.\\;X+Y=Y+X;\\quad 2^\\circ.\\;X+(Y+Z)=(X+Y)+Z;\\quad 3^\\circ.\\;X+\\Theta=X;\\quad 4^\\circ.\\;X+(-X)=\\Theta;\\quad 5^\\circ.\\;1\\cdot X=X;\\quad 6^\\circ.\\;(\\alpha+\\beta)X=\\alpha X+\\beta X;\\quad 7^\\circ.\\;\\alpha(X+Y)=\\alpha X+\\alpha Y;\\quad 8^\\circ.\\;\\alpha(\\beta X)=(\\alpha\\beta)X$",
                "$1^\\circ.\\;X+Y=X-Y;\\quad 2^\\circ.\\;X+\\Theta=\\Theta;\\quad 3^\\circ.\\;1\\cdot X=\\Theta$",
                "Vektorlar ustida qo‘shish amali kommutativ emas ($X+Y \\ne Y+X$)",
                "Skalyar songa ko‘paytirishda $\\alpha(X+Y) = \\alpha X + Y$ bo‘ladi"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "7-ma’ruza (7-slayd): Ushbu 8 ta xossa chiziqli (vektor) fazo aksiomalarining asosini tashkil etadi."
        },
        {
            "q": "Ikkita bir xil o‘lchovli $X = (x_1, \\dots, x_n)^T$ va $Y = (y_1, \\dots, y_n)^T$ vektorlarning «skalyar ko‘paytmasi» $(X, Y)$ deb nimaga aytiladi (8-slayd)?",
            "opts": [
                "Shu vektorlar mos koordinatalari ko‘paytmalarining yig‘indisiga teng songa: $(X, Y) = x_1 y_1 + x_2 y_2 + \\dots + x_n y_n = X^T Y = Y^T X$",
                "Mos koordinatalar ko‘paytmasidan tuzilgan yangi vektorga: $(x_1 y_1, \\dots, x_n y_n)^T$",
                "Vektorlar uzunliklari yig‘indisiga: $|X| + |Y|$",
                "3-tartibli determinantga"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "7-ma’ruza (8-slayd, Ta’rif): Ikkita bir xil o‘lchovli vektorlarning skalyar ko‘paytmasi deb mos koordinatalari ko‘paytmalari yig‘indisiga teng songa aytiladi."
        },
        {
            "q": "Vektorlarning skalyar ko‘paytmasi qanday 5 ta asosiy xossaga ega (11-slayd)?",
            "opts": [
                "$1^\\circ.\\;(X,X) \\ge 0;\\quad 2^\\circ.\\;(X,X) = 0 \\iff X = \\Theta;\\quad 3^\\circ.\\;(X,Y) = (Y,X);\\quad 4^\\circ.\\;(X, Y+Z) = (X,Y)+(X,Z);\\quad 5^\\circ.\\;(\\lambda X, Y) = \\lambda(X,Y)$",
                "$1^\\circ.\\;(X,X) < 0;\\quad 2^\\circ.\\;(X,Y) = -(Y,X);\\quad 3^\\circ.\\;(\\lambda X, Y) = \\lambda^2 (X,Y)$",
                "Skalyar ko‘paytma natijasi har doim vektor bo‘ladi",
                "$(X,X) = 0$ tenglik har qanday birlik vektor uchun o‘rinli"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "7-ma’ruza (11-slayd): Vektorlarning skalyar ko‘paytmasi nomanfiylik, aniqlanganlik, simmetriklik (kommutativlik) va chiziqlilik xossalariga ega."
        },
        {
            "q": "Ikki vektorning «vektor ko‘paytmasi» $[\\vec{a} \\times \\vec{b}]$ qanday formula orqali aniqlanadi (12-slayd)?",
            "opts": [
                "$[\\vec{a} \\times \\vec{b}] = \\begin{vmatrix} \\vec{i} & \\vec{j} & \\vec{k} \\\\ a_1 & a_2 & a_3 \\\\ b_1 & b_2 & b_3 \\end{vmatrix}$ 3-tartibli simvolik determinant orqali aniqlanuvchi vektor",
                "$a_1 b_1 + a_2 b_2 + a_3 b_3$ skalyar yig‘indi orqali",
                "$(\\vec{a} + \\vec{b}) / 2$ o‘rta arifmetik vektor orqali",
                "2-tartibli determinant orqali aniqlanuvchi son"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "7-ma’ruza (12-slayd): Ikki vektorning vektor ko‘paytmasi 1-satrida $\\vec{i}, \\vec{j}, \\vec{k}$ birlik ortlar turgan 3-tartibli determinant orqali hisoblanadi."
        },
        {
            "q": "Uchta $\\vec{a}, \\vec{b}, \\vec{c}$ vektorning «aralash ko‘paytmasi» $([\\vec{a} \\times \\vec{b}] \\cdot \\vec{c})$ qanday aniqlanadi (13-slayd)?",
            "opts": [
                "Satrlari shu uchta vektorning koordinatalaridan tuzilgan $\\begin{vmatrix} a_1 & a_2 & a_3 \\\\ b_1 & b_2 & b_3 \\\\ c_1 & c_2 & c_3 \\end{vmatrix}$ 3-tartibli determinantga teng son",
                "Uchta vektor uzunliklarining yig‘indisiga teng son",
                "1-satrida $\\vec{i}, \\vec{j}, \\vec{k}$ turgan 3-tartibli determinantga teng vektor",
                "Har bir koordinatalar ko‘paytmasi $a_1 b_1 c_1 + a_2 b_2 c_2 + a_3 b_3 c_3$"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "7-ma’ruza (13-slayd): Uchta vektorning aralash ko‘paytmasi ularning koordinatalaridan tuzilgan 3-tartibli determinantga teng."
        },
        {
            "q": "Vektorlarning skalyar va vektor ko‘paytmalarining geometrik ma’nolari: vektor proyeksiyasi $\\text{Pr}_{\\vec{a}}(\\vec{b})$ va ikki vektordan yasalgan parallelogramm yuzi $S$ qaysi formulalar bilan topiladi (14-slayd)?",
            "opts": [
                "$\\text{Pr}_{\\vec{a}}(\\vec{b}) = |\\vec{b}| \\cos\\varphi;\\qquad S = |[\\vec{a} \\times \\vec{b}]| = |\\vec{a}| \\cdot |\\vec{b}| \\sin\\varphi$",
                "$\\text{Pr}_{\\vec{a}}(\\vec{b}) = |\\vec{a}| \\sin\\varphi;\\qquad S = (\\vec{a}, \\vec{b})$",
                "$\\text{Pr}_{\\vec{a}}(\\vec{b}) = |[\\vec{a} \\times \\vec{b}]|;\\qquad S = |\\vec{a}| + |\\vec{b}|$",
                "$\\text{Pr}_{\\vec{a}}(\\vec{b}) = |\\vec{b}| / |\\vec{a}|;\\qquad S = |\\vec{a}| \\cdot |\\vec{b}| \\cos\\varphi$"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "7-ma’ruza (14-slayd): $\\text{Pr}_{\\vec{a}}(\\vec{b}) = |\\vec{b}|\\cos\\varphi$, parallelogramm yuzi esa vektor ko‘paytmaning moduliga teng: $S = |[\\vec{a} \\times \\vec{b}]| = |\\vec{a}|\\cdot|\\vec{b}|\\sin\\varphi$."
        },
        {
            "q": "Uchta vektordan yasalgan parallelepiped hajmi $V_{\\text{par}}$ nimaga teng va qachon bu uchta vektor «komplanar» (bir tekislikda yotuvchi) bo‘ladi (15-slayd)?",
            "opts": [
                "$V_{\\text{par}} = |([\\vec{a} \\times \\vec{b}] \\cdot \\vec{c})|$ (aralash ko‘paytma moduliga teng); agar aralash ko‘paytma $0$ ga teng bo‘lsa, vektorlar komplanar bo‘ladi",
                "$V_{\\text{par}} = |[\\vec{a} \\times \\vec{b}]|$; agar skalyar ko‘paytma $0$ ga teng bo‘lsa, komplanar bo‘ladi",
                "$V_{\\text{par}} = |\\vec{a}| + |\\vec{b}| + |\\vec{c}|$; agar uzunliklari teng bo‘lsa, komplanar bo‘ladi",
                "$V_{\\text{par}} = (\\vec{a}, \\vec{b}) \\cdot |\\vec{c}|$"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "7-ma’ruza (15-slayd): Uchta vektorning aralash ko‘paytmasi moduli parallelepiped hajmiga teng; aralash ko‘paytma nolga teng bo‘lsa, vektorlar komplanar (bir tekislikda yotuvchi) bo‘ladi."
        },
        {
            "q": "$n$ o‘lchovli $X$ vektorning «uzunligi» (moduli, normasi) $|X|$ ta’rifi va formulasi qanday (16-slayd)?",
            "opts": [
                "Vektor komponentlari kvadratlari yig‘indisining kvadrat ildiziga teng songa aytiladi: $|X| = \\sqrt{(X,X)} = \\sqrt{x_1^2 + x_2^2 + \\dots + x_n^2}$",
                "Vektor komponentlari yig‘indisiga teng songa aytiladi: $|X| = x_1 + x_2 + \\dots + x_n$",
                "Vektor komponentlari kvadratlari yig‘indisiga (ildizsiz) aytiladi: $|X| = (X,X)$",
                "Vektorning eng katta komponentiga aytiladi"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "7-ma’ruza (16-slayd, Ta’rif): $|X| = \\sqrt{(X,X)} = \\sqrt{x_1^2 + x_2^2 + \\dots + x_n^2}$ songa $n$ o‘lchovli $X$ vektor uzunligi (moduli, normasi) deyiladi."
        },
        {
            "q": "Vektorlarning uzunligi qanday 3 ta asosiy xossaga ega (17-slayd)?",
            "opts": [
                "$1^\\circ.\\;|X| \\ge 0;\\qquad 2^\\circ.\\;|\\lambda X| = |\\lambda| \\cdot |X|;\\qquad 3^\\circ.\\;|X + Y| \\le |X| + |Y|$ (uchburchak tengsizligi)",
                "$1^\\circ.\\;|X| < 0;\\qquad 2^\\circ.\\;|\\lambda X| = \\lambda |X|;\\qquad 3^\\circ.\\;|X + Y| = |X| + |Y|$",
                "$1^\\circ.\\;|X| = 1;\\qquad 2^\\circ.\\;|\\lambda X| = \\lambda^2 |X|;\\qquad 3^\\circ.\\;|X + Y| \\ge |X| + |Y|$",
                "$|X \\cdot Y| = |X| + |Y|$"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "7-ma’ruza (17-slayd): Vektor uzunligi nomanfiylik, bir jinslilik ($|\\lambda X| = |\\lambda|\\cdot|X|$) va uchburchak tengsizligi ($|X+Y| \\le |X|+|Y|$) xossalariga ega."
        },
        {
            "q": "Ikkita $n$ o‘lchovli noldan farqli $X$ va $Y$ vektorlar orasidagi burchak $\\varphi \\in [0; \\pi]$ qaysi formula bilan aniqlanadi (18-slayd)?",
            "opts": [
                "$\\cos\\varphi = \\frac{(X, Y)}{|X| \\cdot |Y|} = \\frac{\\sum_{i=1}^n x_i y_i}{\\sqrt{\\sum_{i=1}^n x_i^2} \\cdot \\sqrt{\\sum_{i=1}^n y_i^2}}$",
                "$\\sin\\varphi = \\frac{(X, Y)}{|X| \\cdot |Y|}$",
                "$\\cos\\varphi = (X, Y) \\cdot |X| \\cdot |Y|$",
                "$\\text{tg}\\,\\varphi = \\frac{|X|}{|Y|}$"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "7-ma’ruza (18-slayd, Ta’rif): Ikki vektor orasidagi burchak kosinusi ularning skalyar ko‘paytmasini uzunliklari ko‘paytmasiga bo‘lish orqali topiladi."
        },
        {
            "q": "«$n$ o‘lchovli arifmetik vektor fazo» deb nimaga aytiladi va haqiqiy hamda kompleks arifmetik vektor fazolar qanday belgilanadi (19-slayd)?",
            "opts": [
                "Barcha $n$ o‘lchovli vektorlar to‘plami chiziqli amallar (qo‘shish va songa ko‘paytirish) bilan birgalikda $n$ o‘lchovli arifmetik vektor fazo deyiladi; haqiqiysi $\\mathbb{R}^n$, kompleksi $\\mathbb{C}^n$ deb belgilanadi",
                "Faqat $3$ ta vektordan iborat to‘plamga arifmetik fazo deyiladi",
                "Komponentlari faqat butun sonlar bo‘lgan fazoga $\\mathbb{R}^n$ deyiladi",
                "Chiziqli amallar kiritilmagan sonlar to‘plamiga aytiladi"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "7-ma’ruza (19-slayd, Ta’rif): Komponentlari haqiqiy sonlardan iborat bo‘lsa haqiqiy arifmetik vektor fazo ($\\mathbb{R}^n$), kompleks sonlardan iborat bo‘lsa kompleks arifmetik vektor fazo ($\\mathbb{C}^n$) deyiladi."
        },
        {
            "q": "**Koshi-Bunyakovskiy tengsizligi** haqidagi Teorema (20-slayd) qaysi javobda to‘g‘ri berilgan?",
            "opts": [
                "$\\mathbb{R}^n$ arifmetik fazodan olingan ixtiyoriy $X$ va $Y$ vektorlar uchun $|(X, Y)| \\le |X| \\cdot |Y|$ yoki $\\left|\\sum_{i=1}^n x_i y_i\\right| \\le \\sqrt{\\sum_{i=1}^n x_i^2} \\cdot \\sqrt{\\sum_{i=1}^n y_i^2}$ tengsizlik o‘rinli",
                "$|(X, Y)| \\ge |X| \\cdot |Y|$ tengsizlik o‘rinli",
                "$|(X, Y)| = |X| + |Y|$ tenglik o‘rinli",
                "$|X - Y| \\ge |X| + |Y|$ tengsizlik o‘rinli"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "7-ma’ruza (20-slayd, Teorema): $|(X, Y)| \\le |X| \\cdot |Y|$ — Koshi-Bunyakovskiy tengsizligi."
        },
        {
            "q": "Umumiy «chiziqli (yoki vektor) fazo» $L$ ta’rifi (21-22-slaydlar) qanday?",
            "opts": [
                "Elementlari ixtiyoriy tabiatli bo‘lgan $L$ to‘plamda qo‘shish ($x+y \\in L$) va songa ko‘paytirish ($\\lambda x \\in L$) amallari kiritilgan bo‘lib, bu amallar 8 ta chiziqli fazo aksiomasini qanoatlantirsa, $L$ to‘plam chiziqli fazo deyiladi",
                "Elementlari faqat geometrik yo‘nalishli kesmalardan iborat bo‘lgan to‘plamga aytiladi",
                "Hech qanday aksioma bajarilishi talab etilmaydigan ixtiyoriy sonlar to‘plamiga aytiladi",
                "Faqat ko‘paytirish va bo‘lish amallari kiritilgan to‘plamga aytiladi"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "7-ma’ruza (21-22-slaydlar): $L$ to‘plamda yig‘indi va skalyar songa ko‘paytma aniqlangan bo‘lib, 8 ta aksioma bajarilsa, $L$ chiziqli fazo (haqiqiy yoki kompleks) deyiladi."
        },
        {
            "q": "Chiziqli fazoning 5 ta xossasi (23-slayd) qaysi javobda to‘liq va to‘g‘ri berilgan?",
            "opts": [
                "1) Yagona nol vektor $\\Theta$ mavjud; 2) Har bir vektorga yagona qarama-qarshi $-X$ vektor mavjud; 3) $0 \\cdot X = \\Theta$; 4) $\\lambda \\cdot \\Theta = \\Theta$; 5) $\\lambda \\cdot X = \\Theta \\implies \\lambda = 0$ yoki $X = \\Theta$",
                "1) Nol vektor bir nechta bo‘ladi; 2) $0 \\cdot X = X$; 3) $\\lambda \\cdot \\Theta = \\lambda$",
                "1) Qarama-qarshi vektor mavjud emas; 2) $\\lambda \\cdot X = \\Theta$ faqat $\\lambda = 1$ da bajariladi",
                "Chiziqli fazoda nol vektor bo‘lishi shart emas"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "7-ma’ruza (23-slayd): Ushbu 5 ta xossa chiziqli fazoning 8 ta aksiomasidan mantiqan kelib chiqadi."
        },
        {
            "q": "Chiziqli fazodagi $x_1, x_2, \\dots, x_n$ elementlar qachon «chiziqli bog‘liq» va qachon «chiziqli erkli» deyiladi (24-slayd)?",
            "opts": [
                "$\\lambda_1 x_1 + \\lambda_2 x_2 + \\dots + \\lambda_n x_n = \\Theta$ tenglik $\\lambda_i$ koeffitsiyentlardan kamida bittasi noldan farqli bo‘lganda bajarilsa — chiziqli bog‘liq; faqat barcha $\\lambda_1 = \\lambda_2 = \\dots = \\lambda_n = 0$ bo‘lgandagina bajarilsa — chiziqli erkli deyiladi",
                "Barcha $\\lambda_i = 0$ da bajarilsa — chiziqli bog‘liq; noldan farqli $\\lambda_i$ larda bajarilsa — chiziqli erkli deyiladi",
                "Elementlar yig‘indisi $1$ ga teng bo‘lsa — chiziqli erkli deyiladi",
                "Elementlar juft-juft kollinear bo‘lsa — chiziqli erkli deyiladi"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "7-ma’ruza (24-slayd): Trivial bo‘lmagan kombinatsiyada $\\Theta$ hosil bo‘lsa chiziqli bog‘liq, faqat trivial ($\\lambda_i=0$) kombinatsiyada $\\Theta$ hosil bo‘lsa chiziqli erkli deyiladi."
        },
        {
            "q": "$n$ o‘lchovli $L$ chiziqli fazoning «bazisi» va elementning «bazis bo‘yicha yoyilmasi» deb nimaga aytiladi (27-slayd)?",
            "opts": [
                "$L$ fazodagi har qanday $n$ ta chiziqli erkli vektorlar sistemasiga fazoning bazisi ($e_1, \\dots, e_n$) deyiladi; $x = \\mu_1 e_1 + \\mu_2 e_2 + \\dots + \\mu_n e_n$ tenglik esa $x$ elementning bazis bo‘yicha yoyilmasi deyiladi",
                "$L$ fazodagi har qanday chiziqli bog‘liq vektorlar to‘plamiga bazis deyiladi",
                "Faqat bitta nol vektordan iborat to‘plamga bazis deyiladi",
                "$x = e_1 \\cdot e_2 \\cdot \\dots \\cdot e_n$ ko‘paytmaga bazis bo‘yicha yoyilma deyiladi"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "7-ma’ruza (27-slayd, Ta’riflar): $n$ o‘lchovli chiziqli fazoda har qanday $n$ ta chiziqli erkli vektorlar sistemasi bazis deyiladi."
        },
        {
            "q": "Barcha 2-tartibli ($2 \\times 2$) matritsalar chiziqli fazosi $M^2$ ning standart bazisi nechta matritsadan iborat va bu fazoning o‘lchami nechaga teng (25-26-slaydlar)?",
            "opts": [
                "$e_1, e_2, e_3, e_4$ — $4$ ta bazis matritsadan iborat bo‘lib, $M^2$ fazo $4$ o‘lchovlidir",
                "$2$ ta bazis matritsadan iborat bo‘lib, $2$ o‘lchovlidir",
                "$1$ ta birlik matritsadan iborat bo‘lib, $1$ o‘lchovlidir",
                "$8$ ta matritsadan iborat bo‘lib, $8$ o‘lchovlidir"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "7-ma’ruza (26-slayd): Har bir $2 \\times 2$ matritsa $a_{11}e_1 + a_{12}e_2 + a_{21}e_3 + a_{22}e_4$ ko‘rinishda yoziladi va $e_1, e_2, e_3, e_4$ chiziqli erkli bo‘lgani uchun fazo $4$ o‘lchovli."
        },
        {
            "q": "$L$ chiziqli fazoning $V$ qism to‘plami qachon $L$ fazoning «chiziqli qism fazosi» deyiladi (28-slayd)?",
            "opts": [
                "$V$ qism to‘plam ham $L$ da aniqlangan elementlarni qo‘shish ($x+y \\in V$) va songa ko‘paytirish ($\\lambda x \\in V$) amallariga nisbatan chiziqli fazo tashkil qilsa",
                "$V$ qism to‘plamda nol vektor qatnashmasa",
                "$V$ qism to‘plam faqat bitta nolmas elementdan iborat bo‘lsa",
                "$V$ qism to‘plam chiziqli amallarga nisbatan yopiq bo‘lmasa"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "7-ma’ruza (28-slayd): $L$ chiziqli fazoning $V$ qism to‘plami ham $L$ da aniqlangan qo‘shish va songa ko‘paytirish amallariga nisbatan chiziqli fazo tashkil qilsa, $V$ ga chiziqli qism fazo deyiladi."
        },
        {
            "q": "Nima uchun $\\mathbb{R}^4$ fazoda $V_1 = \\{(x_1,x_2,x_3,x_4) : x_1 - 2x_3 = 0\\}$ to‘plam chiziqli qism fazo bo‘ladi, ammo $V_2 = \\{(x_1,x_2,x_3,x_4) : x_1 - 2x_3 = 1\\}$ to‘plam chiziqli qism fazo BO‘LA OLMAYDI (28-slayd)?",
            "opts": [
                "Chunki $V_1$ bir jinsli tenglama bilan berilgan bo‘lib, $\\Theta \\in V_1$, $x+y \\in V_1$ va $\\lambda x \\in V_1$ shartlarni qanoatlantiradi; $V_2$ da esa nol vektor yotmaydi va ikki element yig‘indisida $x_1+y_1 - 2(x_3+y_3) = 2 \\ne 1$ bo‘lib yopiqlik buziladi",
                "Chunki $V_2$ da manfiy sonlar qatnashgan",
                "Ikkalasi ham chiziqli qism fazo bo‘ladi",
                "Hech biri chiziqli qism fazo bo‘la olmaydi"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "7-ma’ruza (28-slayd): Faqat bir jinsli chiziqli munosabatlar bilan berilgan to‘plamlar yig‘indi va songa ko‘paytirishga nisbatan yopiq bo‘lib, chiziqli qism fazo tashkil qiladi."
        },
        {
            "q": "Bir bazisdan ($\\vec{e}_1, \\vec{e}_2, \\vec{e}_3$) ikkinchi bazisga ($\\vec{e}_1', \\vec{e}_2', \\vec{e}_3'$) o‘tishda «o‘tish matritsasi» $P$ qanday tuziladi (33-34-slaydlar)?",
            "opts": [
                "Yangi bazis vektorlarining ($\\vec{e}_1', \\vec{e}_2', \\vec{e}_3'$) eski bazis bo‘yicha yoyilma koordinatalari mos ravishda $P$ matritsaning ustunlari qilib yoziladi",
                "Eski bazis vektorlari $P$ matritsaning satrlariga yoziladi",
                "Vektorning o‘z koordinatalari bosh diagonalga yoziladi",
                "O‘tish matritsasi har doim birlik matritsa $E$ ga teng bo‘ladi"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "7-ma’ruza (33-34-slaydlar): $\\vec{e}_1', \\vec{e}_2', \\vec{e}_3'$ vektorlarning eski bazisdagi ustun-vektorlari ketma-ket qo‘yilib $P$ o‘tish matritsasi hosil qilinadi."
        },
        {
            "q": "Eski bazisdan yangi bazisga o‘tish matritsasi $P$ bo‘lsa, vektorning yangi bazisdagi koordinatalari $\\vec{x}'$ qaysi formula bilan topiladi (34-slayd)?",
            "opts": [
                "$P \\cdot \\vec{x}' = \\vec{x} \\implies \\vec{x}' = P^{-1} \\cdot \\vec{x}$",
                "$\\vec{x}' = P \\cdot \\vec{x}$",
                "$\\vec{x}' = \\vec{x} \\cdot P$",
                "$\\vec{x}' = P^T + \\vec{x}$"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "7-ma’ruza (34-slayd): $P \\cdot \\vec{x}' = \\vec{x}$ tenglikdan $\\vec{x}' = P^{-1} \\cdot \\vec{x}$ kelib chiqadi."
        },
        {
            "q": "O‘tish matritsasi $P$ qanday zaruriy xossaga ega?",
            "opts": [
                "$P$ har doim xosmas ($\\det(P) \\ne 0$) kvadrat matritsa bo‘ladi, chunki uning ustunlari yangi bazisning chiziqli erkli vektorlaridan iborat",
                "$P$ har doim xos ($\\det(P) = 0$) matritsa bo‘ladi",
                "$P$ har doim simmetrik matritsa bo‘ladi",
                "$P$ ning teskarisi mavjud emas"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "Yangi bazis vektorlari chiziqli erkli bo‘lgani uchun $r(P) = n \\iff \\det(P) \\ne 0$, shu sababli $P^{-1}$ har doim mavjud."
        },
        {
            "q": "Koshi-Bunyakovskiy tengsizligi $|(X, Y)| \\le |X| \\cdot |Y|$ nima sababdan ikki $n$ o‘lchovli vektor orasidagi burchak $\\cos\\varphi = \\frac{(X,Y)}{|X|\\cdot|Y|}$ tushunchasini kiritishni qonuniy (asosli) qiladi?",
            "opts": [
                "Chunki $|(X, Y)| \\le |X|\\cdot|Y|$ tengsizlikdan $-1 \\le \\frac{(X, Y)}{|X| \\cdot |Y|} \\le 1$ ekanligi kelib chiqadi, kosinus funksiyasi esa aynan $[-1; 1]$ kesmada qiymat qabul qiladi",
                "Chunki Koshi-Bunyakovskiy tengsizligi burchakni radian o‘rniga gradusda o‘lchaydi",
                "Chunki skalyar ko‘paytma har doim musbat bo‘ladi",
                "Chunki uzunliklar har doim $1$ ga teng bo‘ladi"
            ],
            "ans": 0,
            "diff": "Qiyin",
            "exp": "7-ma’ruza (18, 20-slaydlar): $|(X,Y)| / (|X||Y|) \\le 1$ bo‘lgani uchungina $[0; \\pi]$ oraliqda $\\cos\\varphi$ burchagi yagona ravishda aniqlanadi!"
        },
        {
            "q": "Koshi-Bunyakovskiy tengsizligida $|(X, Y)| = |X| \\cdot |Y|$ aniq tenglik holati qachon va faqat qachon bajariladi?",
            "opts": [
                "$X$ va $Y$ vektorlar kollinear (chiziqli bog‘liq, ya’ni $Y = \\lambda X$) bo‘lganda ($\\cos\\varphi = \\pm 1$)",
                "$X$ va $Y$ vektorlar o‘zaro ortogonal bo‘lganda ($\\cos\\varphi = 0$)",
                "$X$ va $Y$ birlik vektorlar bo‘lganda",
                "Hech qachon tenglik bajarilmaydi"
            ],
            "ans": 0,
            "diff": "Qiyin",
            "exp": "$|(X,Y)| = |X||Y||\\cos\\varphi| = |X||Y| \\iff |\\cos\\varphi| = 1 \\iff \\varphi = 0$ yoki $\\varphi = \\pi$ (vektorlar kollinear)."
        },
        {
            "q": "$n$ o‘lchovli chiziqli fazoda chiziqli erkli vektorlarning maksimal soni nechtaga teng?",
            "opts": [
                "$n$ taga teng (yani fazoning o‘lchamiga teng; har qanday $n+1$ ta vektor albatta chiziqli bog‘liq bo‘ladi)",
                "$n + 1$ taga teng",
                "$n^2$ taga teng",
                "Cheksiz ko‘p bo‘ladi"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "Fazo o‘lchami $\\dim L = n$ shu fazodagi chiziqli erkli vektorlarning maksimal sonini bildiradi."
        },
        {
            "q": "Uchta $\\vec{a}, \\vec{b}, \\vec{c}$ vektorning komplanar (bir tekislikda yotuvchi) bo‘lishi ularning chiziqli bog‘liqligi nuqtai nazaridan nimani anglatadi?",
            "opts": [
                "Ularning aralash ko‘paytmasi (determinanti) nolga teng bo‘lib, bu uchta vektor chiziqli bog‘liq ekanligini (ulardan biri qolgan ikkitasi orqali chiziqli ifodalanishini) anglatadi",
                "Ular chiziqli erkli va $\\mathbb{R}^3$ da bazis tashkil qilishini anglatadi",
                "Ular juft-juft ortogonal ekanligini anglatadi",
                "Ularning uzunliklari nolga teng ekanligini anglatadi"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "7-ma’ruza (15-slayd): $\\mathbb{R}^3$ da uchta vektor komplanar $\\iff ([\\vec{a}\\times\\vec{b}]\\cdot\\vec{c}) = \\det(A) = 0 \\iff$ vektorlar chiziqli bog‘liq."
        },
        {
            "q": "Agar vektorlar sistemasining biror qism sistemasi chiziqli bog‘liq bo‘lsa, butun vektorlar sistemasi haqida nima deyish mumkin?",
            "opts": [
                "Butun vektorlar sistemasi ham albatta chiziqli bog‘liq bo‘ladi (qolgan vektorlar oldiga $0$ koeffitsiyent qo‘yish kifoya)",
                "Butun sistema chiziqli erkli bo‘ladi",
                "Butun sistema ortonormal bo‘ladi",
                "Qism sistemaga qarab xulosa qilib bo‘lmaydi"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "Qism sistema chiziqli bog‘liq bo‘lsa, unga yangi vektorlar qo‘shilganda ularning koeffitsiyentlarini $0$ deb olib, noldan farqli kombinatsiyada $\\Theta$ hosil qilish mumkin."
        },
        {
            "q": "Aksincha, agar $x_1, x_2, \\dots, x_m$ vektorlar sistemasi chiziqli erkli bo‘lsa, uning har qanday qism sistemasi qanday bo‘ladi?",
            "opts": [
                "Har qanday qism sistemasi ham albatta chiziqli erkli bo‘ladi",
                "Qism sistemasi chiziqli bog‘liq bo‘ladi",
                "Qism sistemasida nol vektor qatnashadi",
                "Faqat ikkita vektordan iborat qism sistemasi erkli bo‘ladi"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "Agar biror qism sistema chiziqli bog‘liq bo‘lib qolsa, butun sistema ham bog‘liq bo‘lib qolar edi; demak chiziqli erkli sistemaning har qanday qism sistemasi ham chiziqli erklidir."
        }
    ]

    # =========================================================================
    # MAVZU 8: Ortogonal va ortonormal vektorlar, Gramm-Shmidt (30 ta NAZARIY savol)
    # =========================================================================
    t8 = [
        {
            "q": "Nima uchun $n$ o‘lchovli vektorlar to‘plami chiziqli amallarga (qo‘shish va songa ko‘paytirishga) nisbatan «yopiq to‘plam» hosil qiladi deyiladi (6-slayd)?",
            "opts": [
                "Chunki $n$ o‘lchovli vektorlar ustida bajarilgan chiziqli amallar natijasida yana shu to‘plamga tegishli $n$ o‘lchovli vektor hosil bo‘ladi",
                "Chunki $n$ o‘lchovli vektorlar soni chekli bo‘ladi",
                "Chunki $n$ o‘lchovli vektorlarni ko‘paytirganda skalyar son hosil bo‘ladi",
                "Chunki barcha vektorlarning uzunligi $1$ dan oshmaydi"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "8-ma’ruza (6-slayd): $n$ o‘lchovli vektorlar ustida bajarilgan chiziqli amallar natijasida yana $n$ o‘lchovli vektor hosil bo‘ladi. Shuning uchun bu to‘plam yopiq to‘plam hosil qiladi deyiladi."
        },
        {
            "q": "$n$ o‘lchovli $m$ ta $A_1, A_2, \\dots, A_m$ vektorlarning «chiziqli kombinatsiyasi» deb nimaga aytiladi (9-slayd)?",
            "opts": [
                "$\\lambda_1 A_1 + \\lambda_2 A_2 + \\dots + \\lambda_m A_m$ ko‘rinishdagi yig‘indiga aytiladi (bu yerda $\\lambda_i \\in \\mathbb{R}$, $i=1,2,\\dots,m$)",
                "$A_1 \\cdot A_2 \\cdot \\dots \\cdot A_m$ skalyar ko‘paytmaga aytiladi",
                "Vektorlar uzunliklarining yig‘indisiga aytiladi",
                "Vektorlardan tuzilgan determinantga aytiladi"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "8-ma’ruza (9-slayd, Ta’rif): $\\lambda_1 A_1 + \\lambda_2 A_2 + \\dots + \\lambda_m A_m$ yig‘indiga $A_1, A_2, \\dots, A_m$ vektorlarning chiziqli kombinatsiyasi deb ataladi."
        },
        {
            "q": "$A_1, A_2, \\dots, A_m$ vektorlar sistemasidan tuzilgan $A$ matritsaning rangi $r(A)$ yordamida bu vektorlar sistemasining chiziqli bog‘liqligi yoki erkliligi qanday aniqlanadi (11-slayd)?",
            "opts": [
                "Agar $r(A) < m$ bo‘lsa vektorlar sistemasi chiziqli bog‘liq; agar $r(A) = m$ bo‘lsa chiziqli erkli bo‘ladi",
                "Agar $r(A) = m$ bo‘lsa chiziqli bog‘liq; agar $r(A) < m$ bo‘lsa chiziqli erkli bo‘ladi",
                "Agar $r(A) = 0$ bo‘lsagina chiziqli erkli bo‘ladi",
                "Matritsa rangi vektorlarning chiziqli erkliligiga bog‘liq emas"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "8-ma’ruza (11-slayd): Agar vektorlar sistemasida $r(A) < m$ bo‘lsa, u holda vektorlar sistemasi chiziqli bog‘liq, agar $r(A) = m$ bo‘lsa, chiziqli erkli bo‘ladi."
        },
        {
            "q": "Agar vektorlar sistemasi chiziqli bog‘liq bo‘lsa, sistemadagi vektorlarning o‘zaro ifodalanishi haqida qanday tasdiq o‘rinli (13-slayd, Izoh)?",
            "opts": [
                "Sistemadagi kamida bitta vektorni qolgan vektorlar orqali chiziqli kombinatsiya ko‘rinishida ifodalash mumkin",
                "Sistemadagi hech bir vektorni boshqalari orqali ifodalab bo‘lmaydi",
                "Sistemadagi barcha vektorlar o‘zaro ortogonal bo‘ladi",
                "Sistemadagi barcha vektorlar birlik vektor bo‘ladi"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "8-ma’ruza (13-slayd, Izoh): Agar vektorlar sistemasi chiziqli bog‘liq bo‘lsa, sistemadagi (noldan farqli koeffitsiyentli) vektorni boshqalari orqali ifodalash mumkin."
        },
        {
            "q": "Ikkita $n$ o‘lchovli $A_1$ va $A_2$ vektorlar qachon o‘zaro «ortogonal vektorlar» deyiladi va real fazoda bu atama qaysi so‘z bilan almashtirilishi mumkin (13-slayd)?",
            "opts": [
                "Ularning skalyar ko‘paytmasi nolga teng bo‘lsa ($(A_1, A_2) = 0$); real fazo vektorlari uchun «perpendikulyar» iborasi bilan almashtirilishi mumkin",
                "Ularning vektor ko‘paytmasi nolga teng bo‘lsa; «parallel» iborasi bilan almashtirilishi mumkin",
                "Ularning skalyar ko‘paytmasi $1$ ga teng bo‘lsa; «kollinear» iborasi bilan almashtirilishi mumkin",
                "Ularning yig‘indisi nolga teng bo‘lsa"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "8-ma’ruza (13-slayd, Ta’rif): Ikkita $n$ o‘lchovli $A_1$ va $A_2$ vektorlarning skalyar ko‘paytmasi nolga teng bo‘lsa, ular o‘zaro ortogonal («perpendikulyar») vektorlar deyiladi."
        },
        {
            "q": "Ikki vektor orasidagi burchak $\\varphi$ orqali ortogonal va ortonormal vektorlar qanday ta’riflanadi (14-slayd)?",
            "opts": [
                "Ikki vektor orasidagi burchak $\\pi/2$ ga teng bo‘lsa ular ortogonal vektorlar deyiladi; ortogonal vektorlarning uzunliklari $1$ ga teng bo‘lsa, ortonormal vektorlar yoki ortlar deyiladi",
                "Ikki vektor orasidagi burchak $0$ ga teng bo‘lsa ortogonal, uzunligi $2$ ga teng bo‘lsa ortonormal deyiladi",
                "Orasidagi burchak $\\pi$ ga teng bo‘lgan vektorlar ortonormal deyiladi",
                "Uzunliklari o‘zaro teng bo‘lgan ixtiyoriy vektorlar ortlar deyiladi"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "8-ma’ruza (14-slayd): Ikki vektor orasidagi burchak $\\pi/2$ ga teng bo‘lsa ortogonal, uzunliklari $1$ ga teng bo‘lgan ortogonal vektorlar esa ortonormal vektorlar (ortlar) deyiladi."
        },
        {
            "q": "Dekart koordinatalar sistemasi qanday vektorlarni asos (bazis) qilib olish orqali kiritiladi (14-slayd)?",
            "opts": [
                "Ortonormal vektorlarni (ortlarni: tekislikda $\\vec{i}, \\vec{j}$ va fazoda $\\vec{i}, \\vec{j}, \\vec{k}$) asos qilib olish orqali kiritiladi",
                "Kollinear vektorlarni asos qilib olish orqali kiritiladi",
                "Uzunligi nolga teng vektorlarni asos qilib olish orqali kiritiladi",
                "Ixtiyoriy komplanar vektorlar orqali kiritiladi"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "8-ma’ruza (14-slayd): Ortonormal vektorlarni asos qilib, Dekart koordinata sistemasini kiritamiz ($Oxy$ da $\\vec{a} = x\\vec{i}+y\\vec{j}$, $Oxyz$ da $\\vec{a} = a_1\\vec{i}+a_2\\vec{j}+a_3\\vec{k}$)."
        },
        {
            "q": "Qanday vektorlar sistemasiga «ortogonal vektorlar sistemasi» deyiladi (17, 19-slaydlar)?",
            "opts": [
                "$n$ o‘lchovli noldan farqli vektorlardan tarkib topgan va sistema vektorlarining har qanday ikki jufti o‘zaro ortogonal ($(A_i, A_j) = 0,\\; i \\ne j$) bo‘lgan sistemaga",
                "Faqat birinchi va oxirgi vektori o‘zaro ortogonal bo‘lgan sistemaga",
                "Barcha vektorlarining uzunligi $1$ ga teng, ammo o‘zaro burchagi ixtiyoriy bo‘lgan sistemaga",
                "Chiziqli bog‘liq vektorlar sistemasiga"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "8-ma’ruza (17, 19-slaydlar): Sistema vektorlarining har qanday ikki jufti o‘zaro ortogonal bo‘lsa, u holda bu sistemaga ortogonal vektorlar sistemasi deyiladi."
        },
        {
            "q": "«Evklid fazosi» ($E^n$) deb qanday fazoga aytiladi va har qanday $\\mathbb{R}^n$ fazoni qanday qilib Evklid fazosiga aylantirish mumkin (18-slayd)?",
            "opts": [
                "Elementlari orasida skalyar ko‘paytma aniqlangan chiziqli fazoga Evklid fazosi deyiladi; har qanday $\\mathbb{R}^n$ fazoda skalyar ko‘paytmani aniqlash bilan uni Evklid fazosiga aylantirish mumkin",
                "Elementlari faqat $2 \\times 2$ matritsalardan iborat fazoga Evklid fazosi deyiladi",
                "Skalyar ko‘paytmasi mavjud bo‘lmagan fazoga Evklid fazosi deyiladi",
                "Faqat 1 o‘lchovli chiziqqa Evklid fazosi deyiladi"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "8-ma’ruza (18-slayd): Agar chiziqli fazo elementlari orasida skalyar ko‘paytma aniqlangan bo‘lsa, bu fazoga Evklid fazosi ($E^n$) deyiladi."
        },
        {
            "q": "Evklid fazosida $\\{\\vec{a}_1, \\vec{a}_2, \\dots, \\vec{a}_n\\} \\subset E^n$ sistema qachon «ortonormal vektorlar sistemasi» deyiladi (19-slayd)?",
            "opts": [
                "Sistema ortogonal vektorlar sistemasi bo‘lib ($(\\vec{a}_i, \\vec{a}_k) = 0, i \\ne k$), qo‘shimcha ravishda har bir vektorining uzunligi birga teng ($|\\vec{a}_i| = 1, i=1,2,\\dots,n$) bo‘lsa",
                "Sistemadagi barcha vektorlarning uzunliklari yig‘indisi $1$ ga teng bo‘lsa",
                "Sistemadagi vektorlar juft-juft parallel bo‘lsa",
                "Vektorlarning skalyar ko‘paytmasi har doim $-1$ ga teng bo‘lsa"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "8-ma’ruza (19-slayd): Agar $\\{\\vec{a}_1, \\dots, \\vec{a}_n\\} \\subset E^n$ ortogonal vektorlar sistemasi bo‘lib, $|\\vec{a}_i| = 1$ ($i=1,\\dots,n$) bo‘lsa, bu sistemaga ortonormal vektorlar sistemasi deyiladi."
        },
        {
            "q": "Evklid fazosining «ortonormal bazisi» deb nimaga aytiladi va uning vektorlari qanday munosabatni qanoatlantiradi (20-slayd)?",
            "opts": [
                "$\\{\\vec{e}_1, \\vec{e}_2, \\dots, \\vec{e}_n\\} \\subset E^n$ vektorlar sistemasi $E^n$ fazoning bazisi bo‘lib, ortonormal vektorlar sistemasini tashkil qilsa; $(\\vec{e}_i, \\vec{e}_k) = 1$ ($i = k$ bo‘lsa) va $0$ ($i \\ne k$ bo‘lsa)",
                "$(\\vec{e}_i, \\vec{e}_k) = 0$ ($i = k$ bo‘lsa) va $1$ ($i \\ne k$ bo‘lsa)",
                "Barcha $i, k$ larda $(\\vec{e}_i, \\vec{e}_k) = 1$ bo‘lsa",
                "Bazis vektorlarining uzunliklari $1, 2, \\dots, n$ ga teng bo‘lsa"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "8-ma’ruza (20-slayd): Ortonormal bazis uchun $(\\vec{e}_i, \\vec{e}_k) = \\begin{cases} 1, & i = k \\\\ 0, & i \\ne k \\end{cases}$ munosabat o‘rinli."
        },
        {
            "q": "**Gramm-Shmidt teoremasi** (21-slayd): Har qanday $n$ o‘lchovli haqiqiy Evklid fazosida ortonormallangan bazis mavjudligi haqidagi teorema qanday bayon etiladi?",
            "opts": [
                "Har qanday $n$ o‘lchovli haqiqiy Evklid fazosida ortonormallangan bazis mavjud (agar bazis ortonormallanmagan bo‘lsa, uni Gramm-Shmidt formulalari yordamida ortonormallash mumkin)",
                "Faqat $n = 2$ va $n = 3$ o‘lchovli Evklid fazolaridagina ortonormallangan bazis mavjud",
                "Ortonormallangan bazis faqat diagonal matritsalar fazosida mavjud",
                "Ixtiyoriy bazisni ortonormallab bo‘lmaydi"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "8-ma’ruza (21-22-slaydlar, Teorema): Har qanday $n$ o‘lchovli haqiqiy Evklid fazosida ortonormallangan bazis mavjud."
        },
        {
            "q": "Nolmas vektorlardan iborat har qanday ortogonal vektorlar sistemasining chiziqli erkliligi haqida qanday muhim xulosa o‘rinli (23-slayd, Izoh)?",
            "opts": [
                "Har qanday nolmas vektorlardan iborat ortogonal vektorlar sistemasi chiziqli erkli sistemadir",
                "Ortogonal vektorlar sistemasi har doim chiziqli bog‘liq bo‘ladi",
                "Ortogonal sistema faqat vektorlar soni juft bo‘lganda chiziqli erkli bo‘ladi",
                "Ortogonal sistemaning determinanti har doim nolga teng bo‘ladi"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "8-ma’ruza (23-slayd, Izoh): Har qanday nolmas vektorlardan iborat ortogonal vektorlar sistemasi chiziqli erkli sistemadir."
        },
        {
            "q": "Nima sababdan nolmas $B_1, B_2, \\dots, B_k$ ortogonal vektorlar sistemasi har doim chiziqli erkli bo‘lishini isbotlash juda oson?",
            "opts": [
                "$\\lambda_1 B_1 + \\dots + \\lambda_k B_k = \\Theta$ tenglikni $B_i$ ga skalyar ko‘paytirsak, $(B_i, B_j) = 0$ ($i \\ne j$) tufayli faqat $\\lambda_i (B_i, B_i) = 0$ qoladi va $|B_i| \\ne 0$ dan $\\lambda_i = 0$ kelib chiqadi",
                "Chunki ortogonal vektorlarning barcha koordinatalari musbat bo‘ladi",
                "Chunki ortogonal vektorlar bir to‘g‘ri chiziqda yotadi",
                "Chunki ularning vektor ko‘paytmasi nolga teng"
            ],
            "ans": 0,
            "diff": "Qiyin",
            "exp": "Har bir $i$ uchun $B_i$ ga skalyar ko‘paytirish qolgan barcha hadlarni nolga aylantiradi va $\\lambda_i |B_i|^2 = 0 \\implies \\lambda_i = 0$ ekanligini darhol ko‘rsatadi."
        },
        {
            "q": "Chiziqli erkli $A_1, A_2, \\dots, A_k$ vektorlar sistemasi ustida ortogonal $B_1, B_2, \\dots, B_k$ vektorlar sistemasini qurish usuli qanday nomlanadi va qaysi formulalar bilan bajariladi (23, 29-slaydlar)?",
            "opts": [
                "Vektorlar sistemasini «ortogonallash jarayoni» deyiladi va Gramm-Shmidt formulalari: $B_1 = A_1,\\; B_t = A_t - \\sum_{i=1}^{t-1} \\frac{(B_i, A_t)}{(B_i, B_i)} B_i$ yordamida amalga oshiriladi",
                "Vektorlar sistemasini «transponirlash jarayoni» deyiladi va Kramer formulalari yordamida bajariladi",
                "Laplas yoyilmasi deyiladi",
                "Kroneker-Kapelli almashtirishi deyiladi"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "8-ma’ruza (23, 29-slaydlar): Chiziqli erkli $A_1, \\dots, A_k$ sistemani ortogonal $B_1, \\dots, B_k$ sistema bilan almashtirish ortogonallash jarayoni deyiladi va Gramm-Shmidt formulalari bilan bajariladi."
        },
        {
            "q": "Gramm-Shmidt formulalari bo‘yicha ikkinchi ($B_2$) va uchinchi ($B_3$) ortogonal vektorlar qanday yoziladi (30-slayd)?",
            "opts": [
                "$B_2 = A_2 - \\frac{(B_1, A_2)}{(B_1, B_1)} B_1;\\qquad B_3 = A_3 - \\frac{(B_1, A_3)}{(B_1, B_1)} B_1 - \\frac{(B_2, A_3)}{(B_2, B_2)} B_2$",
                "$B_2 = A_2 + \\frac{(B_1, A_2)}{(B_1, B_1)} B_1;\\qquad B_3 = A_3 + B_2 + B_1$",
                "$B_2 = A_2 - (B_1, A_2) B_1;\\qquad B_3 = A_3 - (B_2, A_3) B_2$",
                "$B_2 = \\frac{A_2}{|A_2|};\\qquad B_3 = \\frac{A_3}{|A_3|}$"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "8-ma’ruza (27, 30-slaydlar): Har bir yangi $A_t$ vektordan uning oldingi barcha qurilgan $B_1, \\dots, B_{t-1}$ ortogonal vektorlar yo‘nalishidagi proyeksiyalari ayirib tashlanadi."
        },
        {
            "q": "Nol bo‘lmagan $B$ vektorning «normallangan» yoki «birlik vektori» deb qanday vektorga aytiladi (32-slayd)?",
            "opts": [
                "$\\frac{B}{|B|}$ vektorga (ya’ni $B$ vektorni o‘z uzunligi $|B|$ ga bo‘lishdan hosil bo‘lgan uzunligi $1$ ga teng vektorga) aytiladi",
                "$B \\cdot |B|$ vektorga aytiladi",
                "$B - |B|$ vektorga aytiladi",
                "Koordinatalari faqat $0$ va $1$ sonlardan iborat har qanday vektorga aytiladi"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "8-ma’ruza (32-slayd): Nol bo‘lmagan $B$ vektorning normallangan yoki birlik vektori deb $\\frac{B}{|B|}$ vektorga aytiladi."
        },
        {
            "q": "Agar $B_1, B_2, \\dots, B_k$ ortogonal vektorlar sistemasi bo‘lsa, undan «ortonormallangan vektorlar sistemasi» qanday hosil qilinadi (28, 32-slaydlar)?",
            "opts": [
                "Har bir vektorni o‘z uzunligiga bo‘lish (normallashtirish) orqali: $\\vec{c}_1 = \\frac{B_1}{|B_1|},\\; \\vec{c}_2 = \\frac{B_2}{|B_2|},\\; \\dots,\\; \\vec{c}_k = \\frac{B_k}{|B_k|}$",
                "Har bir vektordan $B_1$ ni ayirib chiqish orqali",
                "Barcha vektorlarni o‘zaro qo‘shib chiqish orqali",
                "Vektorlarni transponirlash orqali"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "8-ma’ruza (28, 32-slaydlar): Har bir vektori normallangan (birlik vektor ko‘rinishga keltirilgan) ortogonal sistemaga ortonormallangan vektorlar sistemasi deyiladi."
        },
        {
            "q": "Agar berilgan 4 ta vektordan ($\vec{a}_1, \\vec{a}_2, \\vec{a}_3, \\vec{a}_4$) ortonormallangan bazis qurish talab etilsa-yu, ulardan tuzilgan matritsani pog‘onali shaklga keltirganda 3-satr nolga aylanib ketsa (24-25-slaydlar), qanday yo‘l tutiladi?",
            "opts": [
                "Nolga aylangan satrga mos $\\vec{a}_3$ vektor chiziqli bog‘liq bo‘lgani uchun tashlab yuboriladi va qolgan chiziqli erkli $\\vec{a}_1, \\vec{a}_2, \\vec{a}_4$ bazis vektorlar ustida Gramm-Shmidt jarayoni bajariladi",
                "Nol vektorning o‘zi normallashtiriladi",
                "Barcha 4 ta vektor ustida Gramm-Shmidt jarayoni o‘zgarishsiz davom ettiriladi",
                "Bunday sistemadan ortogonal sistema qurib bo‘lmaydi"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "8-ma’ruza (24-26-slaydlar): Avval elementar almashtirishlar bilan chiziqli erkli bazis vektorlar ($\\vec{a}_1, \\vec{a}_2, \\vec{a}_4$) ajratib olinadi, so‘ngra ularga Gramm-Shmidt formulalari qo‘llaniladi."
        },
        {
            "q": "Gramm-Shmidt jarayonida hosil qilingan $B_1, B_2, B_3$ vektorlar haqiqatan ham ortogonal sistema tashkil qilishini tekshirish sharti qanday (27, 31-slaydlar)?",
            "opts": [
                "Har bir juftlikning skalyar ko‘paytmasi nolga teng bo‘lishi: $(B_1, B_2) = 0,\\; (B_1, B_3) = 0$ va $(B_2, B_3) = 0$ tekshiriladi",
                "Ularning yig‘indisi $B_1 + B_2 + B_3 = \\Theta$ bo‘lishi tekshiriladi",
                "Ularning uzunliklari o‘zaro tengligi $|B_1| = |B_2| = |B_3|$ tekshiriladi",
                "$(B_1, B_2) = 1$ bo‘lishi tekshiriladi"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "8-ma’ruza (27, 31-slaydlar): Tekshirish bosqichida $(B_1, B_2) = 0,\\; (B_1, B_3) = 0,\\; (B_2, B_3) = 0$ tengliklar bajarilishi ko‘rsatiladi."
        },
        {
            "q": "Vektorni musbat $\\lambda > 0$ skalyar songa ko‘paytirish (masalan normallashtirishda $\\frac{1}{|B_i|}$ ga ko‘paytirish) uning boshqa vektorlarga ortogonallik xossasini buzmasligi qaysi skalyar ko‘paytma xossasiga asoslanadi?",
            "opts": [
                "$(\\lambda X, Y) = \\lambda (X, Y)$ chiziqlilik xossasiga: agar $(X, Y) = 0$ bo‘lsa, u holda $(\\frac{1}{|X|}X, \\frac{1}{|Y|}Y) = \\frac{1}{|X||Y|}(X, Y) = 0$ bo‘lib qolaveradi",
                "Uchburchak tengsizligiga asoslanadi",
                "Determinantning transponirlash xossasiga asoslanadi",
                "Sarrius qoidasiga asoslanadi"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "Skalyar ko‘paytmaning 5-xossasiga ko‘ra skalyar ko‘paytuvchilar qavsdan tashqariga chiqadi va $0$ ga ko‘payib yana $0$ beradi."
        },
        {
            "q": "Ortonormal bazis $\\{\\vec{e}_1, \\vec{e}_2, \\dots, \\vec{e}_n\\}$ ning oddiy (ortonormal bo‘lmagan) bazisdan eng muhim hisoblash afzalligi nimada?",
            "opts": [
                "Ixtiyoriy $\\vec{x}$ vektorning bazisdagi $x_i$ koordinatasini tenglamalar sistemasi yechmasdan, to‘g‘ridan-to‘g‘ri $x_i = (\\vec{x}, \\vec{e}_i)$ skalyar ko‘paytma orqali topish mumkin",
                "Ortonormal bazisda vektorlar soni kamroq bo‘ladi",
                "Ortonormal bazisda barcha vektorlar nolga teng bo‘ladi",
                "Ortonormal bazisda skalyar ko‘paytma har doim $0$ ga teng bo‘ladi"
            ],
            "ans": 0,
            "diff": "Qiyin",
            "exp": "$\\vec{x} = \\sum_{k=1}^n x_k \\vec{e}_k$ ni $\\vec{e}_i$ ga skalyar ko‘paytirsak, $(\\vec{e}_k, \\vec{e}_i) = \\delta_{ki}$ tufayli darhol $(\\vec{x}, \\vec{e}_i) = x_i$ kelib chiqadi!"
        },
        {
            "q": "$n$ o‘lchovli Evklid fazosi $E^n$ da juft-juft ortogonal bo‘lgan noldan farqli vektorlar soni $k$ ko‘pi bilan nechtaga teng bo‘lishi mumkin?",
            "opts": [
                "Ko‘pi bilan $n$ taga teng ($k \\le n$), chunki nolmas ortogonal vektorlar chiziqli erkli bo‘lib, $n$ o‘lchovli fazoda chiziqli erkli vektorlar soni $n$ dan oshmaydi",
                "Ko‘pi bilan $n^2$ taga teng",
                "Cheksiz ko‘p bo‘lishi mumkin",
                "Faqat $2$ ta bo‘lishi mumkin"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "8-ma’ruza (23-slayd): Nolmas ortogonal sistema chiziqli erkli bo‘lgani uchun $E^n$ fazoda uning elementlari soni fazo o‘lchami $n$ dan osha olmaydi."
        },
        {
            "q": "Agar $E^n$ Evklid fazosida aynan $n$ ta noldan farqli va juft-juft ortogonal $B_1, B_2, \\dots, B_n$ vektorlar berilgan bo‘lsa, ular $E^n$ fazoda bazis tashkil qiladimi?",
            "opts": [
                "Ha, albatta ortogonal bazis tashkil qiladi (chunki $n$ o‘lchovli fazodagi har qanday $n$ ta chiziqli erkli vektor bazis bo‘ladi)",
                "Yo‘q, faqat uzunliklari $1$ ga teng bo‘lsagina bazis bo‘la oladi",
                "Yo‘q, ularga yana bitta vektor qo‘shish kerak",
                "Faqat $n = 3$ da bazis tashkil qiladi"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "Nolmas ortogonal vektorlar chiziqli erkli (8-ma’ruza, 23-slayd), $n$ o‘lchovli fazodagi $n$ ta chiziqli erkli vektor esa ta’rifga ko‘ra (7-ma’ruza, 27-slayd) fazoning bazisini tashkil qiladi."
        },
        {
            "q": "Gramm-Shmidt formulasida agar navbatdagi $A_t$ vektor oldingi $B_1, \\dots, B_{t-1}$ vektorlarning barchasiga allaqachon ortogonal bo‘lsa ($(B_i, A_t) = 0$), u holda $B_t$ nimaga teng bo‘ladi?",
            "opts": [
                "$B_t = A_t$ ning o‘ziga teng bo‘lib qoladi (chunki barcha ayiriluvchi proyeksiya koeffitsiyentlari $0$ ga teng bo‘ladi)",
                "$B_t = \\Theta$ nol vektorga aylanadi",
                "$B_t = -A_t$ ga teng bo‘ladi",
                "$B_t = B_1$ ga teng bo‘ladi"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "Agar barcha $i < t$ uchun $(B_i, A_t) = 0$ bo‘lsa, $\\sum_{i=1}^{t-1} \\frac{(B_i,A_t)}{(B_i,B_i)}B_i = \\Theta$ bo‘lib, $B_t = A_t$ o‘zgarishsiz qoladi."
        },
        {
            "q": "Nima sababdan nol vektor $\\Theta$ ortonormal vektorlar sistemasiga hech qachon kira olmaydi?",
            "opts": [
                "Chunki nol vektorning uzunligi $|\\Theta| = 0$ ga teng bo‘lib, uni normallashtirib (uzunligini $1$ ga teng qilib) bo‘lmaydi hamda nol vektor qatnashgan sistema chiziqli bog‘liq bo‘lib qoladi",
                "Chunki nol vektorning uzunligi cheksizga teng",
                "Chunki nol vektor boshqa vektorlar bilan qo‘shilmaydi",
                "Nol vektor har doim ortonormal bazisning birinchi elementi bo‘ladi"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "8-ma’ruza (19, 32-slaydlar): Ortonormal sistemada barcha vektorlar noldan farqli va $|\\vec{a}_i| = 1$ bo‘lishi shart."
        },
        {
            "q": "Evklid fazosida ikki o‘zaro ortogonal $X$ va $Y$ vektorlar ($(X, Y) = 0$) uchun $|X + Y|^2$ nimaga teng?",
            "opts": [
                "$|X + Y|^2 = |X|^2 + |Y|^2$ (umumlashgan Pifagor teoremasi)",
                "$|X + Y|^2 = (|X| + |Y|)^2$",
                "$|X + Y|^2 = |X|^2 - |Y|^2$",
                "$|X + Y|^2 = 0$"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "$|X+Y|^2 = (X+Y, X+Y) = (X,X) + 2(X,Y) + (Y,Y) = |X|^2 + 0 + |Y|^2 = |X|^2 + |Y|^2$."
        },
        {
            "q": "Gramm-Shmidt ortogonallash jarayonida har bir $k$-qadamda $\\{B_1, B_2, \\dots, B_k\\}$ ortogonal vektorlar hosil qiluvchi chiziqli qism fazo bilan boshlang‘ich $\\{A_1, A_2, \\dots, A_k\\}$ vektorlar hosil qiluvchi chiziqli qism fazo qanday munosabatda bo‘ladi?",
            "opts": [
                "Ular aynan bir xil chiziqli qism fazoni (chiziqli qobiqni) tashkil etadi, ya’ni har bir $B_t$ boshlang‘ich $A_1, \\dots, A_t$ larning chiziqli kombinatsiyasidir",
                "Ular bir-biri bilan umuman kesishmaydi",
                "$B_1, \\dots, B_k$ lar kichikroq o‘lchamli fazo hosil qiladi",
                "Ular o‘zaro ortogonal fazolar bo‘ladi"
            ],
            "ans": 0,
            "diff": "Qiyin",
            "exp": "Gramm-Shmidt formulasida $B_t$ vektor $A_t$ va $B_1, \\dots, B_{t-1}$ orqali chiziqli ifodalangani sababli $\\text{span}(B_1, \\dots, B_k) = \\text{span}(A_1, \\dots, A_k)$."
        },
        {
            "q": "Agar $A$ matritsaning satr vektorlari (yoki ustun vektorlari) chiziqli erkliligini tekshirish uchun undan tuzilgan kvadrat matritsa determinanti $M_m = \\det(A)$ hisoblansa (12-slayd), qanday mezon o‘rinli?",
            "opts": [
                "Agar $\\det(A) \\ne 0$ bo‘lsa, $r(A) = m$ bo‘lib, vektorlar sistemasi chiziqli erkli; agar $\\det(A) = 0$ bo‘lsa, $r(A) < m$ bo‘lib, chiziqli bog‘liq bo‘ladi",
                "Agar $\\det(A) = 0$ bo‘lsa, vektorlar chiziqli erkli bo‘ladi",
                "Agar $\\det(A) < 0$ bo‘lsa, vektorlar chiziqli bog‘liq bo‘ladi",
                "Determinant faqat musbat bo‘lgandagina vektorlar erkli bo‘ladi"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "8-ma’ruza (12, 25-slaydlar): $m=n$ ta vektor uchun $\\det(A) \\ne 0 \\iff r(A) = m \\iff$ vektorlar chiziqli erkli (bazis tashkil qiladi)."
        },
        {
            "q": "Ortonormallangan bazisning $(e_i, e_k) = \\delta_{ik}$ xossasi matritsaviy tilda ushbu bazis vektorlaridan tuzilgan $Q$ matritsa uchun qanday tenglikni beradi?",
            "opts": [
                "$Q^T \\cdot Q = E$ (transponirlangan matritsa bilan o‘zining ko‘paytmasi birlik matritsaga teng)",
                "$Q + Q^T = E$",
                "$Q^2 = O$",
                "$\\det(Q) = 0$"
            ],
            "ans": 0,
            "diff": "Qiyin",
            "exp": "$Q^T Q$ ko‘paytmaning $(i, k)$-elementi $i$-ustun va $k$-ustun skalyar ko‘paytmasi $(e_i, e_k) = \\delta_{ik}$ ga teng, ya’ni $Q^T Q = E$."
        }
    ]

    # =========================================================================
    # MAVZU 9: Aralash Nazariy Testlar (Barcha 8 ta mavzuni bog'lovchi 30 ta NAZARIY savol)
    # =========================================================================
    t9 = [
        {
            "q": "[Aralash Nazariy: 1–3-mavzular] Ikki xosmas kvadrat $A$ va $B$ matritsalar ko‘paytmasi uchun $(AB)^T$ va $(AB)^{-1}$ amallarning tartib o‘zgarish qoidasi qanday?",
            "opts": [
                "Ikkala amalda ham ko‘paytuvchilar o‘rni teskarisiga o‘zgaradi: $(AB)^T = B^T A^T$ va $(AB)^{-1} = B^{-1} A^{-1}$",
                "Ikkala amalda ham ko‘paytuvchilar tartibi saqlanadi: $(AB)^T = A^T B^T$ va $(AB)^{-1} = A^{-1} B^{-1}$",
                "Transponirlashda o‘rni o‘zgaradi, teskari matritsada o‘zgarmaydi",
                "Transponirlashda o‘zgarmaydi, teskari matritsada o‘zgaradi"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "1-ma’ruza (25-slayd) va 3-ma’ruza (7-slayd): Ko‘paytmani transponirlashda ham, teskari matritsa olishda ham ko‘paytuvchilar teskari tartibda yoziladi."
        },
        {
            "q": "[Aralash Nazariy: 2–3-mavzular] $n$-tartibli kvadrat $A$ matritsa uchun quyidagi shartlardan qaysi biri uning «xosmas matritsa» ekanligiga EKVIVALENT EMAS?",
            "opts": [
                "$A$ matritsaning rangi $r(A) < n$ ga teng",
                "$\\det(A) \\ne 0$",
                "$A^{-1}$ teskari matritsa mavjud",
                "$A$ matritsaning rangi $r(A) = n$ ga teng"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "3-ma’ruza (4, 6, 18-slaydlar): Xosmas matritsa uchun $\\det(A) \\ne 0 \\iff \\exists A^{-1} \\iff r(A) = n$. $r(A) < n$ esa xos ($\\det A = 0$) matritsa shartidir."
        },
        {
            "q": "[Aralash Nazariy: 2–4-mavzular] Determinantni hisoblashda qachon Uchburchak/Sarrius qoidasi, qachon Laplas teoremasi qo‘llaniladi?",
            "opts": [
                "Uchburchak va Sarrius qoidalari faqat 3-tartibli determinantlar uchun, Laplas teoremasi va uchburchak shaklga keltirish usuli esa ixtiyoriy $n$-tartibli determinantlar uchun qo‘llaniladi",
                "Sarrius qoidasi ixtiyoriy $n$-tartibli determinantlar uchun, Laplas teoremasi esa faqat 2-tartibli determinantlar uchun qo‘llaniladi",
                "Laplas teoremasi faqat diagonal matritsalar uchun qo‘llaniladi",
                "Uchburchak qoidasi faqat 4-tartibli determinantlar uchun qo‘llaniladi"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "2- va 4-ma’ruzalar: Sarrius qoidasi faqat $n=3$ da o‘rinli, Laplas teoremasi esa universaldir."
        },
        {
            "q": "[Aralash Nazariy: 3–4-mavzular] $A$ kvadrat matritsaning qo‘shma matritsasi $\\bar{A}$ bilan $A$ matritsaning ko‘paytmasi $A \\cdot \\bar{A} = \\det(A) \\cdot E$ tengligi 4-ma’ruzadagi qaysi teoremaga asoslanadi?",
            "opts": [
                "Laplas teoremasiga ($i = k$ da $\\sum a_{ij}A_{ij} = \\det A$) hamda uning begona satr haqidagi natijasiga ($i \\ne k$ da $\\sum a_{ij}A_{kj} = 0$)",
                "Koshi-Bunyakovskiy teoremasiga",
                "Gramm-Shmidt teoremasiga",
                "O‘rin almashtirishlarning inversiya xossasiga"
            ],
            "ans": 0,
            "diff": "Qiyin",
            "exp": "$A \\cdot \\bar{A}$ ko‘paytmaning diagonalida $\\sum_{j=1}^n a_{ij}A_{ij} = \\det(A)$ (Laplas teoremasi), diagonaldan tashqarida esa $\\sum_{j=1}^n a_{ij}A_{kj} = 0$ (Laplas natijasi) hosil bo‘ladi!"
        },
        {
            "q": "[Aralash Nazariy: 3–5-mavzular] $n$ ta noma’lumli $n$ ta chiziqli tenglamalar sistemasi $AX = B$ ni yechishning Matritsalar usuli ($X = A^{-1}B$) va Kramer usuli ($x_i = \\Delta_{x_i} / \\Delta$) qo‘llanilishi uchun qanday umumiy shart bajarilishi zarur?",
            "opts": [
                "Tenglamalar soni noma’lumlar soniga teng ($m = n$) bo‘lishi va asosiy matritsa xosmas ($\\Delta = \\det(A) \\ne 0$) bo‘lishi zarur",
                "Ozod hadlar ustuni nolga teng ($B = \\Theta$) bo‘lishi zarur",
                "Asosiy matritsa determinanti nolga teng ($\\Delta = 0$) bo‘lishi zarur",
                "$r(A) < n$ bo‘lishi zarur"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "5-ma’ruza (26, 30-slaydlar): Har ikkala usul ham kvadrat ($m=n$) va xosmas ($\\det A \\ne 0$) sistemaning yagona yechimini topish uchun xizmat qiladi."
        },
        {
            "q": "[Aralash Nazariy: 3 va 6-mavzular] Gauss-Jordan usulining $(A \\mid E) \\sim (E \\mid A^{-1})$ va $(A \\mid B) \\sim (E \\mid X)$ sxemalari orasidagi umumiy algoritmik g‘oya nimadan iborat?",
            "opts": [
                "Har ikkalasida ham chap blokdagi $A$ matritsa elementar satr almashtirishlari yordamida birlik matritsa $E$ ga keltiriladi; natijada o‘ng blokda mos ravishda $A^{-1}$ yoki $X = A^{-1}B$ hosil bo‘ladi",
                "Har ikkalasida ham ustunlar o‘rni almashtirilib nol matritsa hosil qilinadi",
                "Har ikkalasida ham teskari yurish bosqichi bajariladi",
                "Har ikkalasi faqat bir jinsli sistemalar uchun ishlatiladi"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "3-ma’ruza (11-slayd) va 6-ma’ruza (10-slayd): Gauss-Jordan eliminatsiyasi chap blokni $E$ ga keltirish orqali o‘ng blokni chapdan $A^{-1}$ ga ko‘paytirish effektini beradi."
        },
        {
            "q": "[Aralash Nazariy: 5–6-mavzular] $n$ ta noma’lumli va rangi $r$ ($r < n$) bo‘lgan chiziqli tenglamalar sistemasida «fundamental yechimlar sistemasidagi (FYS) vektorlar soni» bilan «bazis guruhlar soni» qaysi formulalar orqali aniqlanadi?",
            "opts": [
                "Bir jinsli sistema FYS dagi vektorlar soni $k = n - r$ ga teng; bazis guruhlar soni esa $C_n^r = \\frac{n!}{r!(n-r)!}$ ga teng",
                "FYS dagi vektorlar soni $C_n^r$ ga teng; bazis guruhlar soni $n - r$ ga teng",
                "Har ikkalasi ham $r$ ga teng",
                "Har ikkalasi ham $n!$ ga teng"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "5-ma’ruza (8-slayd): FYS da $n - r$ ta vektor bor. 6-ma’ruza (14-slayd): Bazis guruhlar soni $C_n^r = \\frac{n!}{r!(n-r)!}$."
        },
        {
            "q": "[Aralash Nazariy: 5–6-mavzular] Bir jinsli bo‘lmagan sistemaning xususiy yechimi $F_0$ (erkli o‘zgaruvchilar $0$ deb olinganda) bilan shu sistemaning bazis yechimi $X_b$ orasida qanday bog‘lanish bor?",
            "opts": [
                "Erkli o‘zgaruvchilar $0$ ga teng deb olinganda topilgan xususiy yechim $F_0$ aynan tanlangan bazis o‘zgaruvchilarga mos keluvchi bazis yechim $X_b$ ning o‘zidir",
                "Ular bir-biriga qarama-qarshi vektorlardir ($F_0 = -X_b$)",
                "$F_0$ har doim nol vektor bo‘ladi, $X_b$ esa nolmas bo‘ladi",
                "Ular orasida hech qanday bog‘lanish yo‘q"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "5-ma’ruza (13-slayd) va 6-ma’ruza (14-slayd): Erkli o‘zgaruvchilarni $0$ ga tenglashtirib topilgan xususiy yechim ta’rifga ko‘ra sistemaning bazis yechimi hisoblanadi."
        },
        {
            "q": "[Aralash Nazariy: 3, 7, 8-mavzular] $n$ o‘lchovli $n$ ta $A_1, A_2, \\dots, A_n$ vektorlar $\\mathbb{R}^n$ fazoda bazis tashkil qilishi uchun ulardan tuzilgan kvadrat $A$ matritsa qanday shartni qanoatlantirishi zarur va yetarli?",
            "opts": [
                "$\\det(A) \\ne 0$ (ya’ni matritsa xosmas va rangi $r(A) = n$) bo‘lishi zarur va yetarli",
                "$\\det(A) = 0$ (ya’ni matritsa xos) bo‘lishi zarur va yetarli",
                "$A$ matritsa diagonal bo‘lishi zarur va yetarli",
                "$r(A) < n$ bo‘lishi zarur va yetarli"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "7-ma’ruza (27-slayd) va 8-ma’ruza (11-12, 25-slaydlar): $n$ ta vektor chiziqli erkli (bazis) bo‘lishi $\\iff r(A) = n \\iff \\det(A) \\ne 0$."
        },
        {
            "q": "[Aralash Nazariy: 5 va 7-mavzular] Bir jinsli $AX = \\Theta$ chiziqli tenglamalar sistemasining barcha yechimlari to‘plami $\\mathbb{R}^n$ fazoda qanday tuzilmani hosil qiladi va uning bazisi nima bo‘ladi?",
            "opts": [
                "$\\mathbb{R}^n$ fazoning $n - r$ o‘lchovli chiziqli qism fazosini tashkil qiladi va sistemaning Fundamental yechimlar sistemasi (FYS) shu qism fazoning bazisi bo‘ladi",
                "Qism fazo tashkil qilmaydi",
                "$r$ o‘lchovli qism fazo tashkil qiladi",
                "Faqat bitta nuqtadan iborat to‘plam bo‘ladi"
            ],
            "ans": 0,
            "diff": "Qiyin",
            "exp": "5-ma’ruza (7-8-slaydlar) va 7-ma’ruza (27-28-slaydlar): Bir jinsli sistemaning har qanday yechimi $n-r$ ta chiziqli erkli FYS vektorlari orqali chiziqli ifodalangani uchun FYS yechimlar qism fazosining bazisidir!"
        },
        {
            "q": "[Aralash Nazariy: 3 va 7-mavzular] Bir bazisdan boshqa bazisga o‘tishda yangi koordinatalarni topish formulasi $\\vec{x}' = P^{-1} \\vec{x}$ qaysi matritsaviy tenglamani yechishdan hosil bo‘ladi (7-ma’ruza, 34-slayd)?",
            "opts": [
                "$P \\cdot \\vec{x}' = \\vec{x}$ matritsaviy tenglamani chapdan $P^{-1}$ teskari matritsaga ko‘paytirishdan hosil bo‘ladi",
                "$\\vec{x}' \\cdot P = \\vec{x}$ tenglamadan hosil bo‘ladi",
                "$P + \\vec{x}' = \\vec{x}$ tenglamadan hosil bo‘ladi",
                "$P^T \\cdot \\vec{x} = \\vec{x}'$ tenglamadan hosil bo‘ladi"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "7-ma’ruza (34-slayd): $P \\cdot \\vec{x}' = \\vec{x} \\implies \\vec{x}' = P^{-1} \\cdot \\vec{x}$."
        },
        {
            "q": "[Aralash Nazariy: 1 va 7-mavzular] Ustun-vektorlar ko‘rinishida berilgan ikkita $n$ o‘lchovli $X$ va $Y$ vektorlarning skalyar ko‘paytmasi $(X, Y)$ matritsalarni ko‘paytirish va transponirlash amallari orqali qanday yoziladi (7-ma’ruza, 8-slayd)?",
            "opts": [
                "$(X, Y) = X^T \\cdot Y = Y^T \\cdot X$ ($1 \\times n$ satr matritsani $n \\times 1$ ustun matritsaga ko‘paytmasi)",
                "$(X, Y) = X \\cdot Y^T$ ($n \\times n$ matritsa)",
                "$(X, Y) = X + Y^T$",
                "$(X, Y) = (X \\cdot Y)^T$"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "7-ma’ruza (8-slayd): $(X, Y) = X^T Y = Y^T X = x_1y_1 + x_2y_2 + \\dots + x_ny_n$."
        },
        {
            "q": "[Aralash Nazariy: 2 va 7-mavzular] Fazodagi uchta $\\vec{a}, \\vec{b}, \\vec{c}$ vektorning aralash ko‘paytmasi $([\\vec{a} \\times \\vec{b}] \\cdot \\vec{c})$ da ikkita vektorning o‘rni almashtirilsa, aralash ko‘paytma qanday o‘zgaradi?",
            "opts": [
                "Determinantning 5-xossasiga ko‘ra (ikkita satr o‘rni almashgani uchun) aralash ko‘paytmaning ishorasi qarama-qarshiga o‘zgaradi, moduli (parallelepiped hajmi) esa o‘zgarmaydi",
                "Aralash ko‘paytma nolga teng bo‘lib qoladi",
                "Aralash ko‘paytmaning ishorasi ham, qiymati ham o‘zgarmaydi",
                "Parallelepiped hajmi $2$ marta ortadi"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "Aralash ko‘paytma 3-tartibli determinant bo‘lgani uchun ikkita vektor (satr) o‘rni almashganda ishorasi minusga o‘zgaradi."
        },
        {
            "q": "[Aralash Nazariy: 7 va 8-mavzular] Ikki noldan farqli $X$ va $Y$ vektorlarning o‘zaro ortogonallik sharti $(X, Y) = 0$ ularning orasidagi burchak kosinusi $\\cos\\varphi = \\frac{(X,Y)}{|X|\\cdot|Y|}$ va proyeksiya $\\text{Pr}_X(Y)$ uchun nimani anglatadi?",
            "opts": [
                "$\\cos\\varphi = 0$ ($\\varphi = \\pi/2$) ekanligini va bir vektorning ikkinchisi yo‘nalishidagi proyeksiyasi nolga teng ($\\text{Pr}_X(Y) = 0$) ekanligini anglatadi",
                "$\\cos\\varphi = 1$ va $\\text{Pr}_X(Y) = |Y|$ ekanligini anglatadi",
                "Vektorlarning vektor ko‘paytmasi nolga teng ekanligini anglatadi",
                "Vektorlar kollinear ekanligini anglatadi"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "7-ma’ruza (14, 18-slaydlar) va 8-ma’ruza (14-15-slaydlar): $(X,Y) = 0 \\iff \\cos\\varphi = 0 \\iff \\text{Pr}_X(Y) = 0$."
        },
        {
            "q": "[Aralash Nazariy: 5 va 7-mavzular] $m$ ta $n$ o‘lchovli $A_1, A_2, \\dots, A_m$ vektorlarning chiziqli erkliligini tekshirish tenglamalar sistemasi tilida qanday masalaga keladi?",
            "opts": [
                "$\\lambda_1 A_1 + \\lambda_2 A_2 + \\dots + \\lambda_m A_m = \\Theta$ bir jinsli chiziqli tenglamalar sistemasining faqat yagona nol yechimga ($\\lambda_1=\\dots=\\lambda_m=0$) ega bo‘lishini tekshirish masalasiga keladi",
                "Bir jinsli bo‘lmagan sistemaning yechimga ega emasligini tekshirishga keladi",
                "Vektorlarni o‘zaro skalyar ko‘paytirish masalasiga keladi",
                "Qo‘shma matritsa topish masalasiga keladi"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "5-ma’ruza (5-slayd) va 8-ma’ruza (10-11-slaydlar): Ustunlari $A_1, \\dots, A_m$ bo‘lgan bir jinsli sistema faqat $r(A) = m$ bo‘lganda yagona nol yechimga ega bo‘lib, vektorlar chiziqli erkli bo‘ladi."
        },
        {
            "q": "[Aralash Nazariy: 2, 3, 6-mavzular] Matritsa ustida «bir satrga boshqa satrni songa ko‘paytirib qo‘shish» elementar amali bajarilganda matritsaning rangi $r(A)$ va determinanti $\\det(A)$ qanday o‘zgaradi?",
            "opts": [
                "Matritsaning rangi ham ($r(A)$), determinanti ham ($\\det A$) o‘zgarmaydi",
                "Rangi o‘zgarmaydi, ammo determinanti ishorasini o‘zgartiradi",
                "Determinanti o‘zgarmaydi, ammo rangi $1$ ga ortadi",
                "Har ikkalasi ham shu songa ko‘payadi"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "2-ma’ruza (7-xossa) va 3-ma’ruza (18-slayd): Ushbu elementar almashtirish ham determinantni, ham matritsa rangini o‘zgarmasdan saqlaydi."
        },
        {
            "q": "[Aralash Nazariy: 2 va 3-mavzular] Matritsada «ikkita satr o‘rnini almashtirish» hamda «satrni $k \\ne 0, 1$ songa ko‘paytirish» elementar amallarida matritsa rangi $r(A)$ va determinanti $\\det(A)$ qanday o‘zgaradi?",
            "opts": [
                "Matritsa rangi $r(A)$ har ikkala amalda ham mutlaqo o‘zgarmaydi; determinant esa satrlar almashganda ishorasini o‘zgartiradi ($-\\det A$), satr $k$ ga ko‘payganda $k$ marta o‘zgaradi ($k\\det A$)",
                "Matritsa rangi ham, determinanti ham o‘zgarmaydi",
                "Matritsa rangi $k$ marta ortadi",
                "Determinant o‘zgarmaydi, rang esa ishorasini o‘zgartiradi"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "Elementar almashtirishlarning barchasida rang o‘zgarmaydi, biroq determinant 4 va 5-xossalarga ko‘ra $k$ ga yoki $(-1)$ ga ko‘payadi."
        },
        {
            "q": "[Aralash Nazariy: 3 va 5-mavzular] Kroneker-Kapelli teoremasiga ko‘ra, agar $AX = B$ sistemaning asosiy matritsasi $A$ xosmas kvadrat matritsa ($\\det A \\ne 0$) bo‘lsa, nima uchun sistema ozod hadlar ustuni $B$ ning IXTIYORIY qiymatlarida birgalikda bo‘ladi?",
            "opts": [
                "Chunki $\\det(A) \\ne 0$ bo‘lganda $r(A) = n$ bo‘ladi, kengaytirilgan $(A \\mid B)$ matritsada esa satrlar soni $n$ ta bo‘lgani uchun $r(A \\mid B)$ ham $n$ dan osha olmaydi ($n \\le r(A \\mid B) \\le n \\implies r(A) = r(A \\mid B) = n$)",
                "Chunki $B$ ustun har doim nolga teng bo‘ladi",
                "Chunki $r(A) = 0$ bo‘ladi",
                "Chunki sistema cheksiz ko‘p yechimga ega bo‘ladi"
            ],
            "ans": 0,
            "diff": "Qiyin",
            "exp": "$n \\times (n+1)$ o‘lchovli $(A \\mid B)$ matritsa rangi $\\min(n, n+1) = n$ dan oshmaydi. $r(A) = n$ bo‘lgach, $r(A \\mid B) = n$ bo‘lishi majburiy!"
        },
        {
            "q": "[Aralash Nazariy: 7 va 8-mavzular] Bir ortonormal bazisdan ikkinchi ortonormal bazisga o‘tish matritsasi $P$ qanday maxsus xossaga ega bo‘ladi?",
            "opts": [
                "$P$ ortogonal matritsa bo‘ladi, ya’ni $P^{-1} = P^T$ bo‘lib, yangi koordinatalar $\\vec{x}' = P^T \\vec{x}$ formula bilan teskari matritsa hisoblamasdan topiladi",
                "$P$ nol matritsa bo‘ladi",
                "$P$ ning determinanti nolga teng bo‘ladi",
                "$P$ har doim faqat musbat sonlardan iborat bo‘ladi"
            ],
            "ans": 0,
            "diff": "Qiyin",
            "exp": "Ortonormal bazisda yangi ortonormal bazis ustunlari o‘zaro ortonormal bo‘lgani uchun $P^T P = E \\implies P^{-1} = P^T$."
        },
        {
            "q": "[Aralash Nazariy: 4 va 7-mavzular] Fazodagi uchta $\\vec{a}, \\vec{b}, \\vec{c}$ vektorlarning aralash ko‘paytmasi $\\begin{vmatrix} a_1 & a_2 & a_3 \\\\ b_1 & b_2 & b_3 \\\\ c_1 & c_2 & c_3 \\end{vmatrix}$ ni 1-satr bo‘yicha Laplas formulasi bilan yoyish qaysi vektor amalga mos keladi?",
            "opts": [
                "$\\vec{a}$ vektorni $[\\vec{b} \\times \\vec{c}]$ vektor ko‘paytmaga skalyar ko‘paytirishga: $(\\vec{a} \\cdot [\\vec{b} \\times \\vec{c}]) = a_1 A_{11} + a_2 A_{12} + a_3 A_{13}$",
                "Uchta vektorni o‘zaro qo‘shishga",
                "Vektorlarni normallashtirishga",
                "Gramm-Shmidt ortogonallash jarayoniga"
            ],
            "ans": 0,
            "diff": "Qiyin",
            "exp": "1-satr elementlarining algebraik to‘ldiruvchilari $A_{11}, A_{12}, A_{13}$ aynan $[\\vec{b} \\times \\vec{c}]$ vektor ko‘paytmaning koordinatalariga teng!"
        },
        {
            "q": "[Aralash Nazariy: 1, 2, 3-mavzular] Nol matritsa $\\Theta$ va Birlik matritsa $E$ ($n$-tartibli) uchun ularning determinanti va rangi qaysi javobda to‘g‘ri berilgan?",
            "opts": [
                "$\\det(\\Theta) = 0,\\; r(\\Theta) = 0\\quad$ hamda $\\quad \\det(E) = 1,\\; r(E) = n$",
                "$\\det(\\Theta) = 0,\\; r(\\Theta) = 1\\quad$ hamda $\\quad \\det(E) = n,\\; r(E) = 1$",
                "$\\det(\\Theta) = 1,\\; r(\\Theta) = 0\\quad$ hamda $\\quad \\det(E) = 1,\\; r(E) = 1$",
                "$\\det(\\Theta) = 0,\\; r(\\Theta) = n\\quad$ hamda $\\quad \\det(E) = 0,\\; r(E) = n$"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "Nol matritsada barcha minorlar 0 bo‘lgani uchun $\\det(\\Theta)=0, r(\\Theta)=0$. Birlik matritsada esa $\\det(E)=1 \\ne 0$ va $r(E)=n$."
        },
        {
            "q": "[Aralash Nazariy: 5, 6, 7-mavzular] $AX = B$ chiziqli tenglamalar sistemasining birgalikda bo‘lishi (Kroneker-Kapelli teoremasi) ustun-vektorlarning chiziqli kombinatsiyasi tilida nimani anglatadi?",
            "opts": [
                "Sistema birgalikda bo‘lishi ($r(A) = r(A \\mid B)$) ozod hadlar ustun-vektori $B$ ning asosiy matritsa ustun-vektorlari $A_1, A_2, \\dots, A_n$ orqali chiziqli kombinatsiya ko‘rinishida ifodalanishini anglatadi ($x_1 A_1 + \\dots + x_n A_n = B$)",
                "$B$ vektor barcha $A_i$ ustun-vektorlarga ortogonal ekanligini anglatadi",
                "$A_1, \\dots, A_n$ ustunlar nol vektor ekanligini anglatadi",
                "$B$ vektor birlik vektor ekanligini anglatadi"
            ],
            "ans": 0,
            "diff": "Qiyin",
            "exp": "$AX = x_1 A_1 + x_2 A_2 + \\dots + x_n A_n = B$ tenglikning yechimi mavjud bo‘lishi $B$ ustun qo‘shilganda rang ortmasligini ($r(A)=r(A|B)$), ya’ni $B$ vektor $A$ ustunlarining chiziqli qobig‘ida yotishini bildiradi."
        },
        {
            "q": "[Aralash Nazariy: 7 va 8-mavzular] Haqiqiy chiziqli fazo ($L$), Arifmetik vektor fazo ($\\mathbb{R}^n$) va Evklid fazosi ($E^n$) tushunchalari o‘zaro qanday bog‘langan?",
            "opts": [
                "$L$ — 8 ta aksiomani qanoatlantiruvchi umumiy chiziqli fazo; $\\mathbb{R}^n$ — elementlari $n$ ta haqiqiy sonlar kortejidan iborat arifmetik chiziqli fazo; $E^n$ esa skalyar ko‘paytma kiritilgan haqiqiy chiziqli (xususan $\\mathbb{R}^n$) fazodir",
                "Uchala tushuncha bir-biriga mutlaqo zid",
                "Evklid fazosida qo‘shish va songa ko‘paytirish amallari mavjud emas",
                "Arifmetik fazoda vektorlar uzunligi aniqlanishi mumkin emas"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "7- va 8-ma’ruzalar: Chiziqli fazoda skalyar ko‘paytma aniqlansa, u Evklid fazosiga aylanadi va unda uzunlik hamda burchak (ortogonallik) tushunchalari paydo bo‘ladi."
        },
        {
            "q": "[Aralash Nazariy: 3 va 5-mavzular] Agar $m \\times n$ o‘lchovli $A$ matritsaning rangi $r(A) = r$ bo‘lsa, $A$ matritsaning chiziqli erkli satrlari maksimal soni bilan chiziqli erkli ustunlari maksimal soni orasida qanday munosabat bor?",
            "opts": [
                "Ular o‘zaro teng va har ikkalasi matritsaning rangi $r$ ga teng (chunki $r(A) = r(A^T) = r$)",
                "Chiziqli erkli satrlar soni $m$ ga, ustunlar soni $n$ ga teng",
                "Chiziqli erkli satrlar soni ustunlar sonidan har doim katta",
                "Ular o‘zaro teng emas"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "Matritsa rangi haqidagi teoremaga ko‘ra, matritsaning chiziqli erkli satrlari maksimal soni uning chiziqli erkli ustunlari maksimal soniga va matritsa rangi $r(A)$ ga teng."
        },
        {
            "q": "[Aralash Nazariy: 4 va 8-mavzular] Gramm-Shmidt ortogonallash jarayonida chiziqli erkli $A_1, \\dots, A_n$ vektorlardan ortogonal $B_1, \\dots, B_n$ vektorlar qurilganda ($B_1 = A_1, B_t = A_t - \\sum c_{it} B_i$), ulardan tuzilgan matritsalar determinantlari $\\det(B)$ va $\\det(A)$ orasida qanday bog‘lanish bo‘ladi?",
            "opts": [
                "$\\det(B) = \\det(A)$ bo‘ladi, chunki har bir qadamda bir vektordan oldingi vektorlarning chiziqli kombinatsiyasini ayirish determinantning 7-xossasiga ko‘ra determinant qiymatini o‘zgartirmaydi",
                "$\\det(B) = 0$ bo‘ladi",
                "$\\det(B) = -\\det(A)$ bo‘ladi",
                "$\\det(B) = 1$ bo‘ladi"
            ],
            "ans": 0,
            "diff": "Qiyin",
            "exp": "Gramm-Shmidt formulasi $B_t = A_t - \\sum_{i<t} \\alpha_{it} B_i$ determinantda $t$-satrdan oldingi satrlarning chiziqli kombinatsiyasini ayirish bilan bir xil bo‘lib, 7-xossaga ko‘ra $\\det(B) = \\det(A)$!"
        },
        {
            "q": "[Aralash Nazariy: 2 va 5-mavzular] Kramer qoidasida $x_i = \\frac{\\Delta_{x_i}}{\\Delta}$ formulani teskari matritsa formulasi $X = A^{-1}B = \\frac{1}{\\Delta}\\bar{A}B$ bilan solishtirganda, $\\Delta_{x_i}$ yordamchi determinant $A$ matritsaning algebraik to‘ldiruvchilari orqali qanday yoziladi?",
            "opts": [
                "$\\Delta_{x_i} = b_1 A_{1i} + b_2 A_{2i} + \\dots + b_n A_{ni}$ ($i$-ustun bo‘yicha Laplas yoyilmasi)",
                "$\\Delta_{x_i} = b_1 A_{i1} + b_2 A_{i2} + \\dots + b_n A_{in}$ ($i$-satr bo‘yicha yoyilma)",
                "$\\Delta_{x_i} = b_i \\cdot \\Delta$",
                "$\\Delta_{x_i} = A_{ii}$"
            ],
            "ans": 0,
            "diff": "Qiyin",
            "exp": "$\\Delta_{x_i}$ determinantning $i$-ustunida $b_1, \\dots, b_n$ ozod hadlar turgani uchun uni $i$-ustun bo‘yicha Laplas teoremasi bilan yoysak, aynan $\\bar{A}B$ ko‘paytmaning $i$-satri $b_1 A_{1i} + \\dots + b_n A_{ni}$ hosil bo‘ladi! Demak Kramer usuli va Matritsalar usuli nazariy jihatdan aynan bir xil."
        },
        {
            "q": "[Aralash Nazariy: 1 va 3-mavzular] Agar kvadrat $A$ matritsa uchun $A^2 = E$ tenglik bajarilsa (involyutiv matritsa), uning teskari matritsasi $A^{-1}$ nimaga teng bo‘ladi?",
            "opts": [
                "$A^{-1} = A$ (matritsaning o‘ziga teng bo‘ladi, chunki $A \\cdot A = E$)",
                "$A^{-1} = E$ ga teng bo‘ladi",
                "$A^{-1} = -A$ ga teng bo‘ladi",
                "Teskari matritsa mavjud emas"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "Teskari matritsa ta’rifiga ko‘ra $A \\cdot A^{-1} = E$. Agar $A \\cdot A = E$ bo‘lsa, u holda $A^{-1} = A$."
        },
        {
            "q": "[Aralash Nazariy: 1 va 3-mavzular] Agar kvadrat $A \\ne O$ matritsa uchun $A^2 = O$ tenglik bajarilsa (nilpotent matritsa), uning determinanti $\\det(A)$ haqida nima deyish mumkin va unga teskari matritsa mavjudmi?",
            "opts": [
                "$(\\det A)^2 = \\det(O) = 0 \\implies \\det(A) = 0$ (xos matritsa), shuning uchun unga teskari matritsa mavjud emas",
                "$\\det(A) = 1$ va teskari matritsa mavjud",
                "$A^{-1} = O$ nol matritsa bo‘ladi",
                "$\\det(A) = -1$"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "$A^2 = O \\implies \\det(A^2) = (\\det A)^2 = 0 \\implies \\det(A) = 0$. Demak nilpotent matritsa har doim xos matritsadir va $A^{-1}$ mavjud emas."
        },
        {
            "q": "[Aralash Nazariy: 6 va 8-mavzular] $m \\times n$ matritsani Gauss usulida pog‘onali shaklga keltirish hamda vektorlar sistemasini Gramm-Shmidt usulida ortogonallash jarayonlari orasida qanday o‘xshashlik bor?",
            "opts": [
                "Har ikkala jarayonda ham har bir navbatdagi satr (vektor)dan oldingi satrlar (vektorlar)ning ma’lum chiziqli kombinatsiyasi ayirib tashlanadi va chiziqli qobiq (rang) o‘zgarmasdan saqlanadi",
                "Har ikkalasi ham faqat $2 \\times 2$ matritsalar uchun bajariladi",
                "Har ikkalasida ham determinant $0$ ga teng bo‘ladi",
                "Har ikkalasida ham ozod hadlar nolga teng bo‘lishi shart"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "Gauss eliminatsiyasida oldingi satrlar yordamida ustun elementlari nolga aylantirilsa, Gramm-Shmidt jarayonida oldingi vektorlar yordamida skalyar ko‘paytmalar nolga aylantiriladi."
        },
        {
            "q": "[Aralash Nazariy: Barcha 8 ta ma’ruza yakuniy sintezi] $n$-tartibli kvadrat $A$ matritsa uchun quyidagi tasdiqlardan qaysi biri Chiziqli algebraning «Fundamental Ekvivalentlik Teoremasi»ni to‘g‘ri ifodalaydi?",
            "opts": [
                "$\\det(A) \\ne 0 \\iff \\exists A^{-1} \\iff r(A) = n \\iff AX=B$ har qanday $B$ da yagona yechimli $\\iff AX=\\Theta$ faqat nol yechimli $\\iff A$ ning ustunlari (satrlari) $\\mathbb{R}^n$ da bazis tashkil qiladi",
                "$\\det(A) = 0 \\iff \\exists A^{-1} \\iff r(A) = n \\iff AX=\\Theta$ faqat nol yechimli",
                "$\\det(A) \\ne 0 \\iff r(A) < n \\iff AX=B$ cheksiz ko‘p yechimli",
                "$r(A) = 0 \\iff \\exists A^{-1} \\iff \\det(A) = 1$"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "Bu Chiziqli algebraning barcha 8 ta ma’ruzasini yagona mantiqiy zanjirga birlashtiruvchi eng asosiy fundamental teoremadir!"
        }
    ]

    return {5: t5, 6: t6, 7: t7, 8: t8, 9: t9}
