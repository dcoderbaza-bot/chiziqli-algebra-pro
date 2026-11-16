# -*- coding: utf-8 -*-
# Part 2: Topics 5, 6, 7, 8, 9 (30 questions each = 150 questions)

def get_part2_questions():
    # =========================================================================
    # MAVZU 5: Chiziqli tenglamalar sistemasi, FYS, Matritsalar usuli, Kramer (30 ta)
    # =========================================================================
    t5 = [
        {
            "q": "$AX = B$ chiziqli tenglamalar sistemasida $B = \\Theta = (0, 0, \\dots, 0)^T$ bo‘lsa, bunday sistema qanday ataladi va uning birgalikda bo‘lish xossasi qanday?",
            "opts": [
                "Bir jinsli chiziqli tenglamalar sistemasi deyiladi va u har doim birgalikda bo‘ladi (chunki $X = \\Theta$ har doim yechim)",
                "Bir jinsli bo‘lmagan sistema deyiladi va u hech qachon yechimga ega bo‘lmaydi",
                "Kramer sistemasi deyiladi va faqat $\\det(A) \\ne 0$ bo‘lganda birgalikda bo‘ladi",
                "Maxsus sistema deyiladi va har doim cheksiz ko‘p yechimga ega bo‘ladi"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "5-ma’ruza (5-slayd): Agar $B = \\Theta$ bo‘lsa, sistema bir jinsli chiziqli tenglamalar sistemasi ($AX = \\Theta$) deyiladi. U har doim birgalikda, chunki $X = \\Theta$ nol vektor har doim yechim bo‘ladi."
        },
        {
            "q": "$n$ ta noma’lumli $AX = \\Theta$ bir jinsli chiziqli tenglamalar sistemasi qachon yagona nol yechimga, qachon nolmas yechimlarga ega bo‘ladi?",
            "opts": [
                "$\\text{rang}(A) = n$ bo‘lsa yagona nol yechimga; $\\text{rang}(A) < n$ bo‘lsa nol yechimdan tashqari nolmas yechimlarga ham ega bo‘ladi",
                "$\\text{rang}(A) < n$ bo‘lsa yagona nol yechimga; $\\text{rang}(A) = n$ bo‘lsa cheksiz ko‘p yechimga ega",
                "$\\text{rang}(A) = 0$ bo‘lgandagina nolmas yechimga ega bo‘ladi",
                "Har doim faqat yagona nol yechimga ega bo‘ladi"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "5-ma’ruza (5-slayd): Bir jinsli sistema uchun $\\text{rang}(A) = n$ bo‘lsa yagona nol yechimga ega; $\\text{rang}(A) < n$ bo‘lsa nolmas yechimlarga ham ega bo‘ladi."
        },
        {
            "q": "Bir jinsli chiziqli tenglamalar sistemasining «fundamental yechimlar sistemasi» (FYS) deb nimaga aytiladi va u nechta vektordan iborat bo‘ladi?",
            "opts": [
                "Yechimlarning har qanday maksimal sondagi chiziqli erkli sistemasiga aytiladi va $n - r$ ta nolmas vektordan iborat bo‘ladi",
                "Sistemaning barcha yechimlari yig‘indisiga aytiladi va $n + r$ ta vektordan iborat bo‘ladi",
                "Faqat birlik vektorlardan tuzilgan sistemaga aytiladi va $r$ ta vektordan iborat bo‘ladi",
                "Nol vektordan iborat yagona yechimga aytiladi"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "5-ma’ruza (7-8-slaydlar): Bir jinsli sistema rangi $r < n$ bo‘lganda fundamental yechimlar sistemasi $n - r$ ta chiziqli erkli nolmas vektorlardan iborat bo‘ladi."
        },
        {
            "q": "Ma’ruzadagi 9-11-slaydlar misoli: 5 ta noma’lumli bir jinsli sistemaning rangi $r = 2$ bo‘lsa, uning fundamental yechimlar sistemasi nechta vektordan iborat va umumiy yechimi qanday ko‘rinishda yoziladi?",
            "opts": [
                "$n - r = 5 - 2 = 3$ ta vektordan iborat; $X = c_1 F_1 + c_2 F_2 + c_3 F_3$",
                "$r = 2$ ta vektordan iborat; $X = c_1 F_1 + c_2 F_2$",
                "$n = 5$ ta vektordan iborat; $X = F_0 + c_1 F_1$",
                "$n + r = 7$ ta vektordan iborat"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "5-ma’ruza (9-11-slaydlar): $n = 5, r = 2 \\implies n - r = 3$ ta fundamental yechim ($F_1, F_2, F_3$) mavjud va umumiy yechim $X = c_1 F_1 + c_2 F_2 + c_3 F_3$ ko‘rinishda bo‘ladi."
        },
        {
            "q": "Ma’ruzadagi 6-slayd misoli: $\\begin{cases} x_1 - 2x_2 - 2x_3 + 3x_4 = 0 \\\\ 2x_1 + 3x_2 + x_3 - 5x_4 = 0 \\\\ 4x_1 + x_2 - 3x_3 - x_4 = 0 \\end{cases}$ bir jinsli sistemaning umumiy yechimini toping ($x_4 = \\alpha$).",
            "opts": [
                "$x_1 = \\frac{3}{5}\\alpha,\\quad x_2 = \\alpha,\\quad x_3 = \\frac{4}{5}\\alpha,\\quad x_4 = \\alpha$",
                "$x_1 = \\alpha,\\quad x_2 = 2\\alpha,\\quad x_3 = 3\\alpha,\\quad x_4 = \\alpha$",
                "$x_1 = -\\frac{3}{5}\\alpha,\\quad x_2 = -\\alpha,\\quad x_3 = \\frac{4}{5}\\alpha,\\quad x_4 = \\alpha$",
                "$x_1 = 0,\\quad x_2 = 0,\\quad x_3 = 0,\\quad x_4 = 0$"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "5-ma’ruza (6-slayd): Pog‘onali shaklga keltirilganda $2x_2 - 2x_4 = 0 \\implies x_2 = x_4 = \\alpha$; $7x_2 + 5x_3 - 11x_4 = 0 \\implies x_3 = \\frac{4}{5}\\alpha$; $x_1 = \\frac{3}{5}\\alpha$."
        },
        {
            "q": "Bir jinsli bo‘lmagan $AX = B$ ($B \\ne \\Theta$) chiziqli tenglamalar sistemasining umumiy yechimi qaysi formula orqali ifodalanadi?",
            "opts": [
                "$X = F_0 + c_1 F_1 + c_2 F_2 + \\dots + c_{n-r} F_{n-r}$ (bu yerda $F_0$ — xususiy yechim, $F_i$ — mos bir jinsli sistema FYS)",
                "$X = c_1 F_1 + c_2 F_2 + \\dots + c_n F_n$",
                "$X = F_0 \\cdot (c_1 F_1 + \\dots + c_{n-r} F_{n-r})$",
                "$X = A^T B + F_0$"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "5-ma’ruza (12-slayd): Bir jinsli bo‘lmagan sistemaning umumiy yechimi uning bitta xususiy yechimi $F_0$ bilan mos bir jinsli sistemaning umumiy yechimi yig‘indisiga teng."
        },
        {
            "q": "Ma’ruzadagi 13-14-slaydlar misoli: $\\begin{cases} x_1 - x_2 + 2x_3 = 1 \\\\ 2x_1 + x_2 - x_3 = 2 \\end{cases}$ sistemaning ($x_1$ — erkli o‘zgaruvchi) umumiy yechimini toping.",
            "opts": [
                "$X = \\begin{pmatrix} 0 \\\\ 5 \\\\ 3 \\end{pmatrix} + c \\begin{pmatrix} 1 \\\\ -5 \\\\ -3 \\end{pmatrix}$",
                "$X = \\begin{pmatrix} 1 \\\\ 5 \\\\ 3 \\end{pmatrix} + c \\begin{pmatrix} 0 \\\\ 5 \\\\ 3 \\end{pmatrix}$",
                "$X = \\begin{pmatrix} 0 \\\\ -5 \\\\ -3 \\end{pmatrix} + c \\begin{pmatrix} 1 \\\\ 5 \\\\ 3 \\end{pmatrix}$",
                "$X = \\begin{pmatrix} 1 \\\\ 2 \\\\ 1 \\end{pmatrix} + c \\begin{pmatrix} 1 \\\\ -1 \\\\ 2 \\end{pmatrix}$"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "5-ma’ruza (13-14-slaydlar): Sistema $\\begin{cases} 3x_1 + x_3 = 3 \\\\ 5x_1 + x_2 = 5 \\end{cases}$ ga keladi. $x_1=0$ da $F_0 = (0, 5, 3)^T$; bir jinsli sistemada $x_1=1$ da $F_1 = (1, -5, -3)^T$."
        },
        {
            "q": "Kroneker-Kapelli teoremasiga ko‘ra, chiziqli tenglamalar sistemasi birgalikda bo‘lishi uchun qanday shart zarur va yetarli?",
            "opts": [
                "Asosiy matritsa rangi kengaytirilgan matritsa rangiga teng bo‘lishi: $\\text{rang}(A) = \\text{rang}(A \\mid B)$",
                "Asosiy matritsa determinanti nolga teng bo‘lishi: $\\det(A) = 0$",
                "$\\text{rang}(A) < \\text{rang}(A \\mid B)$ bo‘lishi",
                "Tenglamalar soni noma’lumlar sonidan katta bo‘lishi ($m > n$)"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "5-ma’ruza (19-slayd): Kroneker-Kapelli teoremasi: Chiziqli tenglamalar sistemasi birgalikda bo‘lishi uchun $\\text{rang}(A) = \\text{rang}(A \\mid B)$ bo‘lishi zarur va yetarli."
        },
        {
            "q": "Agar $n$ ta noma’lumli chiziqli tenglamalar sistemasida $r(A) = r(A \\mid B) = r$ bo‘lib, $r < n$ bo‘lsa, sistema haqida nima deyish mumkin?",
            "opts": [
                "Sistema birgalikda va cheksiz ko‘p yechimga ega",
                "Sistema birgalikda va yagona yechimga ega",
                "Sistema birgalikda emas (yechimga ega emas)",
                "Sistema faqat nol yechimga ega"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "5-ma’ruza (24-slayd): $r(A) = r(A|B) = r$ bo‘lganda: $r = n$ bo‘lsa bitta (yagona) yechimga ega; $r < n$ bo‘lsa cheksiz ko‘p yechimga ega."
        },
        {
            "q": "Ma’ruzadagi 20-21-slaydlar misoli: $\\begin{cases} x + y + z = 3 \\\\ x - 2y + 3z = 5 \\\\ 2x + 3y - z = 7 \\end{cases}$ sistemaning asosiy va kengaytirilgan matritsalari rangini hamda birgalikdaligini aniqlang.",
            "opts": [
                "$r(A) = r(A \\mid B) = 3$, demak sistema birgalikda (yagona yechimga ega)",
                "$r(A) = 2,\\; r(A \\mid B) = 3$, demak sistema birgalikda emas",
                "$r(A) = r(A \\mid B) = 2$, demak sistema cheksiz ko‘p yechimga ega",
                "$r(A) = 1,\\; r(A \\mid B) = 2$, demak sistema birgalikda emas"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "5-ma’ruza (20-21-slaydlar): Pog‘onali shakl $\\begin{pmatrix} 1 & 1 & 1 & | & 3 \\\\ 0 & 1 & -3 & | & 1 \\\\ 0 & 0 & -7 & | & 5 \\end{pmatrix} \\implies r(A) = r(A|B) = 3$, sistema birgalikda."
        },
        {
            "q": "Ma’ruzadagi 22-23-slaydlar misoli: $\\begin{cases} x + y - z = 3 \\\\ x + 2y + 3z = 5 \\\\ 2x + 3y + 2z = 7 \\end{cases}$ sistemani birgalikda yoki birgalikda emasligini tekshiring.",
            "opts": [
                "$r(A) = 2 \\ne r(A \\mid B) = 3$, demak sistema birgalikda emas (yechimga ega emas)",
                "$r(A) = r(A \\mid B) = 3$, demak sistema yagona yechimga ega",
                "$r(A) = r(A \\mid B) = 2$, demak sistema cheksiz ko‘p yechimga ega",
                "$r(A) = 3,\\; r(A \\mid B) = 2$, sistema birgalikda"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "5-ma’ruza (22-23-slaydlar): 1- va 2-tenglamalar yig‘indisi $2x + 3y + 2z = 8$ beradi, 3-tenglama esa $2x + 3y + 2z = 7$. Pog‘onali shaklda 3-satr $(0, 0, 0 \\mid -1)$ bo‘lib, $r(A)=2 \\ne r(A|B)=3$."
        },
        {
            "q": "Ma’ruzadagi 26-28-slaydlar misoli: $\\begin{cases} 2x_1 + 2x_2 - 3x_3 = 5 \\\\ x_1 - x_2 + x_3 = 0 \\\\ 3x_1 + x_2 + x_3 = 2 \\end{cases}$ sistemani matritsalar usuli ($X = A^{-1}B$) bilan yeching.",
            "opts": [
                "$x_1 = 1,\\quad x_2 = 0,\\quad x_3 = -1$",
                "$x_1 = -1,\\quad x_2 = 0,\\quad x_3 = 1$",
                "$x_1 = 2,\\quad x_2 = 1,\\quad x_3 = 1$",
                "$x_1 = 1,\\quad x_2 = 1,\\quad x_3 = 0$"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "5-ma’ruza (28-slayd): $X = A^{-1}B = -\\frac{1}{12}\\begin{pmatrix} -12 \\\\ 0 \\\\ 12 \\end{pmatrix} = \\begin{pmatrix} 1 \\\\ 0 \\\\ -1 \\end{pmatrix}$."
        },
        {
            "q": "$A \\cdot X \\cdot B = C$ ko‘rinishdagi matritsaviy tenglamaning yechimi qaysi formula bilan topiladi ($\\det A \\ne 0, \\det B \\ne 0$)?",
            "opts": [
                "$X = A^{-1} C B^{-1}$",
                "$X = A^{-1} B^{-1} C$",
                "$X = C A^{-1} B^{-1}$",
                "$X = B^{-1} C A^{-1}$"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "5-ma’ruza (29-slayd): Tenglikning chap tomonidan $A^{-1}$ ga, o‘ng tomonidan $B^{-1}$ ga ko‘paytirsak: $X = A^{-1} C B^{-1}$."
        },
        {
            "q": "Ma’ruzadagi 29-slayd misoli: $\\begin{pmatrix} 0 & 1 \\\\ 2 & 1 \\end{pmatrix} X \\begin{pmatrix} 1 & 3 \\\\ 3 & 6 \\end{pmatrix} = \\begin{pmatrix} 4 & 0 \\\\ 5 & 8 \\end{pmatrix}$ matritsaviy tenglamadan $X$ ni toping.",
            "opts": [
                "$\\begin{pmatrix} 3 & -5/6 \\\\ -8 & 4 \\end{pmatrix}$",
                "$\\begin{pmatrix} -3 & 5/6 \\\\ 8 & -4 \\end{pmatrix}$",
                "$\\begin{pmatrix} 1/2 & 4 \\\\ 4 & 0 \\end{pmatrix}$",
                "$\\begin{pmatrix} -2 & 1 \\\\ 1 & -1/3 \\end{pmatrix}$"
            ],
            "ans": 0,
            "diff": "Qiyin",
            "exp": "5-ma’ruza (29-slayd): $A^{-1} = \\begin{pmatrix} -1/2 & 1/2 \\\\ 1 & 0 \\end{pmatrix}$, $B^{-1} = \\begin{pmatrix} -2 & 1 \\\\ 1 & -1/3 \\end{pmatrix}$. Ko‘paytirish natijasida $X = A^{-1}CB^{-1} = \\begin{pmatrix} 3 & -5/6 \\\\ -8 & 4 \\end{pmatrix}$."
        },
        {
            "q": "Ma’ruzadagi 31-32-slaydlar misoli: $\\begin{cases} -2x_1 + x_2 - x_3 = 7 \\\\ 4x_1 + 2x_2 + 3x_3 = -5 \\\\ x_1 + 3x_2 - 2x_3 = 1 \\end{cases}$ sistemani Kramer formulalari yordamida yeching ($\\Delta = 27$).",
            "opts": [
                "$x_1 = -3,\\quad x_2 = 2,\\quad x_3 = 1$",
                "$x_1 = 3,\\quad x_2 = -2,\\quad x_3 = -1$",
                "$x_1 = -3,\\quad x_2 = 1,\\quad x_3 = 2$",
                "$x_1 = 1,\\quad x_2 = 2,\\quad x_3 = -3$"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "5-ma’ruza (31-32-slaydlar): $\\Delta = 27,\\; \\Delta_{x_1} = -81,\\; \\Delta_{x_2} = 54,\\; \\Delta_{x_3} = 27$. Demak $x_1 = -81/27 = -3,\\; x_2 = 54/27 = 2,\\; x_3 = 27/27 = 1$."
        },
        {
            "q": "Kramer usulida asosiy determinant $\\Delta = 0$ bo‘lib, qo‘shimcha determinantlardan kamida bittasi $\\Delta_{x_i} \\ne 0$ bo‘lsa, sistema qanday yechimga ega bo‘ladi?",
            "opts": [
                "Sistema yechimga ega emas (birgalikda emas)",
                "Sistema yagona yechimga ega",
                "Sistema cheksiz ko‘p yechimga ega",
                "Sistema faqat nol yechimga ega"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "5-ma’ruza (32, 34-slaydlar): Agar $\\Delta = 0$ va $\\Delta_{x_i} \\ne 0$ bo‘lsa, tenglamalar sistemasi yechimga ega emas."
        },
        {
            "q": "Ma’ruzadagi 33-slayd misoli: $\\begin{cases} 2x_1 + x_2 + 3x_3 = 3 \\\\ 4x_1 + 2x_2 + 6x_3 = 6 \\\\ 6x_1 + 3x_2 + 9x_3 = 9 \\end{cases}$ sistemada $\\Delta, \\Delta_{x_1}, \\Delta_{x_2}, \\Delta_{x_3}$ nimaga teng va sistema nechta yechimga ega?",
            "opts": [
                "$\\Delta = \\Delta_{x_1} = \\Delta_{x_2} = \\Delta_{x_3} = 0$; sistema cheksiz ko‘p yechimga ega",
                "$\\Delta = 0,\\; \\Delta_{x_1} = 6$; sistema yechimga ega emas",
                "$\\Delta = 18$; sistema yagona yechimga ega",
                "Sistema faqat bitta $(1, 1, 0)$ yechimga ega"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "5-ma’ruza (33-slayd): Barcha tenglamalar 1-tenglamaga proporsional ($r(A)=r(A|B)=1 < 3$) va $\\Delta = \\Delta_{x_1} = \\Delta_{x_2} = \\Delta_{x_3} = 0$, sistema cheksiz ko‘p yechimga ega."
        },
        {
            "q": "Ma’ruzadagi 34-slayd misoli: $\\begin{cases} 2x_1 + x_2 + 3x_3 = 3 \\\\ 4x_1 + 2x_2 + 6x_3 = 5 \\\\ 3x_1 + 2x_2 = 2 \\end{cases}$ sistemada $\\Delta = 0$ bo‘lib, $\\Delta_{x_1}, \\Delta_{x_2}, \\Delta_{x_3}$ qiymatlari va yechim holati qanday?",
            "opts": [
                "$\\Delta_{x_1} = -6,\\; \\Delta_{x_2} = 9,\\; \\Delta_{x_3} = 1$; sistema yechimga ega emas",
                "$\\Delta_{x_1} = 0,\\; \\Delta_{x_2} = 0,\\; \\Delta_{x_3} = 0$; sistema cheksiz ko‘p yechimga ega",
                "$\\Delta_{x_1} = 6,\\; \\Delta_{x_2} = -9,\\; \\Delta_{x_3} = -1$; sistema yagona yechimga ega",
                "Sistema $(0, 0, 1)$ yechimga ega"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "5-ma’ruza (34-slayd): $\\Delta = 0$, ammo $\\Delta_{x_1} = -6 \\ne 0, \\Delta_{x_2} = 9 \\ne 0, \\Delta_{x_3} = 1 \\ne 0$. Demak, sistema yechimga ega emas."
        },
        {
            "q": "Ushbu $\\begin{cases} 4x + 2y = -18 \\\\ 4x - 5y = 3 \\end{cases}$ chiziqli tenglamalar sistemasini Kramer qoidasi bilan yeching.",
            "opts": [
                "$(-3;\\; -3)$",
                "$(3;\\; -3)$",
                "$(-3;\\; 3)$",
                "$(3;\\; 3)$"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "$\\Delta = -20 - 8 = -28$. $\\Delta_x = 90 - 6 = 84 \\implies x = 84/(-28) = -3$. $\\Delta_y = 12 - (-72) = 84 \\implies y = 84/(-28) = -3$."
        },
        {
            "q": "7 ta noma’lumli va 5 ta tenglamadan iborat bir jinsli chiziqli tenglamalar sistemasining asosiy matritsasi rangi $r(A) = 4$ ga teng. Bu sistemaning fundamental yechimlar sistemasida (FYS) nechta chiziqli erkli vektor bor?",
            "opts": [
                "$3$ ta ($n - r = 7 - 4 = 3$)",
                "$1$ ta ($m - r = 5 - 4 = 1$)",
                "$4$ ta ($r = 4$)",
                "$2$ ta ($n - m = 7 - 5 = 2$)"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "5-ma’ruza (8-slayd): Teoremaga ko‘ra FYS dagi vektorlar soni noma’lumlar soni $n$ dan rang $r$ ni ayirilganiga teng: $n - r = 7 - 4 = 3$."
        },
        {
            "q": "$k$ parametrning qanday musbat qiymatida $\\begin{cases} kx + 4y = 0 \\\\ 9x + ky = 0 \\end{cases}$ bir jinsli tenglamalar sistemasi nolmas yechimlarga ega bo‘ladi?",
            "opts": [
                "$k = 6$",
                "$k = 4$",
                "$k = 9$",
                "$k = 12$"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "Bir jinsli kvadrat sistema nolmas yechimga ega bo‘lishi uchun asosiy determinant $\\Delta = k^2 - 36 = 0$ bo‘lishi kerak. Musbat qiymati: $k = 6$."
        },
        {
            "q": "Ma’ruzadagi 15-slayd misoli: $\\begin{cases} 4x_1 + 7x_2 + 2x_3 + 3x_4 = 8 \\\\ x_1 + 3x_2 - x_3 + 2x_4 = 3 \\\\ 2x_1 + x_2 + 4x_3 - x_4 = 2 \\end{cases}$ sistemada $x_3=0, x_4=0$ deb olinganda hosil bo‘ladigan $F_0$ xususiy yechimni toping.",
            "opts": [
                "$F_0 = (0.6;\\; 0.8;\\; 0;\\; 0)^T$",
                "$F_0 = (-2.6;\\; 1.2;\\; 1;\\; 0)^T$",
                "$F_0 = (1;\\; -1;\\; 0;\\; 1)^T$",
                "$F_0 = (0.8;\\; 0.6;\\; 0;\\; 0)^T$"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "5-ma’ruza (15-slayd): Pog‘onali matritsadan $x_2 - 1.2x_3 + x_4 = 0.8$ va $x_1 + 2.6x_3 - x_4 = 0.6$ chiqadi. $x_3=x_4=0$ da $F_0 = (0.6; 0.8; 0; 0)^T$."
        },
        {
            "q": "Ma’ruzadagi 15-slayd misolida mos bir jinsli sistemaning fundamental yechimlari $F_1$ va $F_2$ qaysi qatorda to‘g‘ri ko‘rsatilgan?",
            "opts": [
                "$F_1 = (-2.6;\\; 1.2;\\; 1;\\; 0)^T,\\quad F_2 = (1;\\; -1;\\; 0;\\; 1)^T$",
                "$F_1 = (2.6;\\; -1.2;\\; 1;\\; 0)^T,\\quad F_2 = (-1;\\; 1;\\; 0;\\; 1)^T$",
                "$F_1 = (0.6;\\; 0.8;\\; 1;\\; 0)^T,\\quad F_2 = (0.6;\\; 0.8;\\; 0;\\; 1)^T$",
                "$F_1 = (1;\\; 0;\\; -2.6;\\; 1.2)^T,\\quad F_2 = (0;\\; 1;\\; 1;\\; -1)^T$"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "5-ma’ruza (15-slayd): $(x_3, x_4) = (1, 0)$ qo‘yilsa $F_1 = (-2.6; 1.2; 1; 0)^T$, $(x_3, x_4) = (0, 1)$ qo‘yilsa $F_2 = (1; -1; 0; 1)^T$ hosil bo‘ladi."
        },
        {
            "q": "Agar $F_1 = (2, -1, 1, 0)^T$ va $F_2 = (1, 3, 0, 1)^T$ vektorlar $AX = \\Theta$ bir jinsli sistemaning fundamental yechimlari bo‘lsa, $X = 2F_1 - F_2$ xususiy yechimni toping.",
            "opts": [
                "$(3,\\; -5,\\; 2,\\; -1)^T$",
                "$(5,\\; 1,\\; 2,\\; 1)^T$",
                "$(3,\\; 1,\\; 2,\\; -1)^T$",
                "$(1,\\; -4,\\; 1,\\; -1)^T$"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "$2F_1 - F_2 = (4-1,\\; -2-3,\\; 2-0,\\; 0-1)^T = (3, -5, 2, -1)^T$."
        },
        {
            "q": "$\\begin{cases} 3x - 2y = 7 \\\\ 6x - 4y = m \\end{cases}$ chiziqli tenglamalar sistemasi $m$ ning qanday qiymatida cheksiz ko‘p yechimga ega bo‘ladi?",
            "opts": [
                "$m = 14$",
                "$m = 7$",
                "$m = -14$",
                "$m \\ne 14$ bo‘lgan barcha qiymatlarda"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "Chap tomon ikkinchi tenglamada 2 marta katta: $2(3x - 2y) = 6x - 4y$. Sistema birgalikda va cheksiz ko‘p yechimga ega bo‘lishi uchun $m = 2 \\cdot 7 = 14$ bo‘lishi kerak."
        },
        {
            "q": "$\\begin{cases} x + y + z = 6 \\\\ x - y + z = 2 \\\\ x + y - z = 0 \\end{cases}$ tenglamalar sistemasining yechimi $(x, y, z)$ ni toping.",
            "opts": [
                "$(1;\\; 2;\\; 3)$",
                "$(2;\\; 1;\\; 3)$",
                "$(3;\\; 2;\\; 1)$",
                "$(1;\\; 3;\\; 2)$"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "1-tenglamadan 2-tenglamani ayirsak $2y = 4 \\implies y = 2$. 1-tenglamadan 3-tenglamani ayirsak $2z = 6 \\implies z = 3$. U holda $x = 6 - 2 - 3 = 1$."
        },
        {
            "q": "Kramer qoidasini qo‘llash uchun tenglamalar sistemasi qanday shartlarni qanoatlantirishi shart?",
            "opts": [
                "Tenglamalar soni noma’lumlar soniga teng ($m = n$) va asosiy determinant $\\Delta \\ne 0$ bo‘lishi shart",
                "Tenglamalar soni noma’lumlar sonidan ko‘p ($m > n$) bo‘lishi shart",
                "Ozod hadlar ustuni faqat nollardan iborat bo‘lishi shart",
                "Asosiy determinant $\\Delta = 0$ bo‘lishi shart"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "5-ma’ruza (30-slayd): Kramer qoidasi $n$ ta noma’lumli $n$ ta chiziqli tenglamalar sistemasida $\\Delta \\ne 0$ bo‘lganda yagona yechimni topish uchun qo‘llaniladi."
        },
        {
            "q": "Ma’ruzadagi 16-slayd misoli: $\\begin{cases} x + 2y + z = 1 \\\\ -3x + y + 4z = 5 \\\\ x - 5z = 7 \\end{cases}$ sistemaning asosiy matritsasi $A$ ni toping.",
            "opts": [
                "$\\begin{pmatrix} 1 & 2 & 1 \\\\ -3 & 1 & 4 \\\\ 1 & 0 & -5 \\end{pmatrix}$",
                "$\\begin{pmatrix} 1 & 2 & 1 \\\\ -3 & 1 & 4 \\\\ 1 & -5 & 0 \\end{pmatrix}$",
                "$\\begin{pmatrix} 1 & 2 & 1 & 1 \\\\ -3 & 1 & 4 & 5 \\\\ 1 & 0 & -5 & 7 \\end{pmatrix}$",
                "$\\begin{pmatrix} 1 & -3 & 1 \\\\ 2 & 1 & 0 \\\\ 1 & 4 & -5 \\end{pmatrix}$"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "5-ma’ruza (16-slayd): 3-tenglamada $y$ qatnashmagani uchun uning koeffitsiyenti $a_{32} = 0$ bo‘ladi: $1\\cdot x + 0\\cdot y - 5\\cdot z = 7$."
        },
        {
            "q": "Agar 3 ta noma’lumli chiziqli tenglamalar sistemasida $\\Delta = 15$, $\\Delta_{x_1} = -30$, $\\Delta_{x_2} = 45$, $\\Delta_{x_3} = 0$ bo‘lsa, $x_1 + x_2 + x_3$ yig‘indini toping.",
            "opts": [
                "$1$",
                "$5$",
                "$-1$",
                "$3$"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "$x_1 = -30/15 = -2,\\; x_2 = 45/15 = 3,\\; x_3 = 0/15 = 0$. Yig‘indi: $-2 + 3 + 0 = 1$."
        },
        {
            "q": "4 ta tenglama va 3 ta noma’lumdan iborat chiziqli tenglamalar sistemasi yagona yechimga ega bo‘lishi uchun $r(A)$ va $r(A \\mid B)$ nechaga teng bo‘lishi kerak?",
            "opts": [
                "$r(A) = r(A \\mid B) = 3$",
                "$r(A) = r(A \\mid B) = 4$",
                "$r(A) = 3,\\quad r(A \\mid B) = 4$",
                "$r(A) = r(A \\mid B) = 2$"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "Noma’lumlar soni $n = 3$ bo‘lgani uchun yagona yechim sharti Kroneker-Kapelli teoremasiga ko‘ra $r(A) = r(A \\mid B) = n = 3$."
        }
    ]

    # =========================================================================
    # MAVZU 6: Gauss va Gauss-Jordan usullari, Bazis yechim (30 ta savol)
    # =========================================================================
    t6 = [
        {
            "q": "Chiziqli tenglamalar sistemasini yechishning Gauss usuli (ketma-ket yo‘qotish usuli) qanday ikki bosqichdan iborat?",
            "opts": [
                "1) To‘g‘ri yurish — kengaytirilgan matritsani uchburchak (pog‘onali) shaklga keltirish; 2) Teskari yurish — oxirgi tenglamadan boshlab noma’lumlarni ketma-ket topish",
                "1) Determinantlarni hisoblash; 2) Qo‘shma matritsani transponirlash",
                "1) Matritsani kvadratga ko‘tarish; 2) Skalyar ko‘paytmani topish",
                "1) Vektorlarni ortogonallash; 2) Normallashtirish"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "6-ma’ruza (5-7-slaydlar): Gauss usulida avval elementar almashtirishlar bilan uchburchak/pog‘onali sistema hosil qilinadi (to‘g‘ri yurish), so‘ngra pastdan yuqoriga qarab noma’lumlar topiladi (teskari yurish)."
        },
        {
            "q": "Gauss-Jordan usuli Gauss usulidan nimasi bilan farq qiladi va unda kengaytirilgan matritsa qanday ko‘rinishga keltiriladi?",
            "opts": [
                "Kengaytirilgan matritsa $(A \\mid B) \\sim (E \\mid X)$ ko‘rinishga keltiriladi va teskari yurishga hojat qolmaydi",
                "Faqat 2 ta tenglamali sistemalar uchun ishlatiladi",
                "Kengaytirilgan matritsa $(A \\mid B) \\sim (O \\mid X)$ nol matritsaga keltiriladi",
                "Determinantlarni Sarrius qoidasi bilan hisoblashga asoslanadi"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "6-ma’ruza (10-slayd): Gauss-Jordan usulida $(A \\mid B) \\sim (E \\mid X)$ ko‘rinishga keltiriladi (bosh diagonaldan yuqoridagi va pastdagi barcha elementlar nolga aylantiriladi)."
        },
        {
            "q": "Ma’ruzadagi 6-7-slaydlar misoli: $\\begin{cases} x_1 - x_2 + 2x_3 - x_4 = 1 \\\\ x_1 + x_2 + x_3 + x_4 = 10 \\\\ 3x_1 - x_2 + 4x_3 - 2x_4 = 5 \\\\ 2x_1 + 2x_2 + 3x_3 - x_4 = 11 \\end{cases}$ sistemani Gauss usulida yeching.",
            "opts": [
                "$x_1 = 1,\\quad x_2 = 2,\\quad x_3 = 3,\\quad x_4 = 4$",
                "$x_1 = 4,\\quad x_2 = 3,\\quad x_3 = 2,\\quad x_4 = 1$",
                "$x_1 = 2,\\quad x_2 = 2,\\quad x_3 = 3,\\quad x_4 = 3$",
                "$x_1 = -1,\\quad x_2 = -2,\\quad x_3 = 3,\\quad x_4 = 4$"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "6-ma’ruza (6-7-slaydlar): Uchburchak shakl $\\begin{cases} x_1 - x_2 + 2x_3 - x_4 = 1 \\\\ 2x_2 - x_3 + 2x_4 = 9 \\\\ -x_3 - x_4 = -7 \\\\ -4x_4 = -16 \\end{cases} \\implies x_4=4, x_3=3, x_2=2, x_1=1$."
        },
        {
            "q": "Ma’ruzadagi 8-9-slaydlar misoli: $\\begin{cases} x_1 - x_2 + 2x_3 - x_4 = 4 \\\\ x_1 + x_2 + x_3 + x_4 = 10 \\\\ 7x_1 + 2x_2 + 8x_3 - 6x_4 = 44 \\\\ 5x_1 + 2x_2 + 5x_3 - 6x_4 = 30 \\end{cases}$ sistemani Gauss usulida pog‘onali shaklga keltirganda $x_4 = \\alpha$ orqali umumiy yechim qanday bo‘ladi?",
            "opts": [
                "$x_1 = 8\\alpha - 4,\\quad x_2 = \\frac{20 - 11\\alpha}{3},\\quad x_3 = \\frac{22 - 16\\alpha}{3},\\quad x_4 = \\alpha$",
                "$x_1 = 4 - 8\\alpha,\\quad x_2 = \\frac{11\\alpha - 20}{3},\\quad x_3 = \\frac{16\\alpha - 22}{3},\\quad x_4 = \\alpha$",
                "$x_1 = \\alpha,\\quad x_2 = 2\\alpha,\\quad x_3 = 3\\alpha,\\quad x_4 = \\alpha$",
                "Sistema yechimga ega emas"
            ],
            "ans": 0,
            "diff": "Qiyin",
            "exp": "6-ma’ruza (8-9-slaydlar): 4-satr nolga aylanib, $\\begin{cases} x_1 - x_2 + 2x_3 - x_4 = 4 \\\\ 2x_2 - x_3 + 2x_4 = 6 \\\\ 3x_3 + 16x_4 = 22 \\end{cases}$ hosil bo‘ladi va $x_4=\\alpha$ dan $x_3 = \\frac{22-16\\alpha}{3},\\; x_2 = \\frac{20-11\\alpha}{3},\\; x_1 = 8\\alpha - 4$ kelib chiqadi."
        },
        {
            "q": "Ma’ruzadagi 9-slayd misolidagi $x_1 = 8\\alpha - 4,\\; x_2 = \\frac{20 - 11\\alpha}{3},\\; x_3 = \\frac{22 - 16\\alpha}{3},\\; x_4 = \\alpha$ umumiy yechimda $\\alpha = 1$ deb olinsa, qanday xususiy yechim hosil bo‘ladi?",
            "opts": [
                "$x_1 = 4,\\quad x_2 = 3,\\quad x_3 = 2,\\quad x_4 = 1$",
                "$x_1 = -4,\\quad x_2 = 20/3,\\quad x_3 = 22/3,\\quad x_4 = 0$",
                "$x_1 = 1,\\quad x_2 = 2,\\quad x_3 = 3,\\quad x_4 = 4$",
                "$x_1 = 4,\\quad x_2 = -3,\\quad x_3 = 2,\\quad x_4 = 1$"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "$\\alpha = 1$ qo‘yilsa: $x_1 = 8(1)-4 = 4,\\; x_2 = (20-11)/3 = 3,\\; x_3 = (22-16)/3 = 2,\\; x_4 = 1$."
        },
        {
            "q": "Ma’ruzadagi 10-12-slaydlar misoli: $\\begin{cases} x_1 + x_2 + 2x_3 + 3x_4 = 1 \\\\ 3x_1 - x_2 - x_3 - 2x_4 = -4 \\\\ 2x_1 + 3x_2 - x_3 - x_4 = -6 \\\\ x_1 + 2x_2 + 3x_3 - x_4 = -4 \\end{cases}$ sistemani Gauss-Jordan usulida yeching.",
            "opts": [
                "$x_1 = -1,\\quad x_2 = -1,\\quad x_3 = 0,\\quad x_4 = 1$",
                "$x_1 = 1,\\quad x_2 = 1,\\quad x_3 = 0,\\quad x_4 = -1$",
                "$x_1 = -1,\\quad x_2 = 0,\\quad x_3 = -1,\\quad x_4 = 1$",
                "$x_1 = 0,\\quad x_2 = -1,\\quad x_3 = 1,\\quad x_4 = -1$"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "6-ma’ruza (10-12-slaydlar): $(A|B)$ matritsa Gauss-Jordan usuli bilan $\\left(\\begin{smallmatrix} 1&0&0&0&-1 \\\\ 0&1&0&0&-1 \\\\ 0&0&1&0&0 \\\\ 0&0&0&1&1 \\end{smallmatrix}\\right)$ ko‘rinishga keladi: $x_1=-1, x_2=-1, x_3=0, x_4=1$."
        },
        {
            "q": "Tenglamalar sistemasining «bazis yechimi» deb nimaga aytiladi va unda erkli o‘zgaruvchilar qanday qiymat qabul qiladi?",
            "opts": [
                "Erkli o‘zgaruvchilarning qiymatlari $0$ ga teng deb olinib, faqat bazis o‘zgaruvchilari noldan farqli bo‘lishi mumkin bo‘lgan yechimga bazis yechim deyiladi",
                "Barcha o‘zgaruvchilari $1$ ga teng bo‘lgan yechimga bazis yechim deyiladi",
                "Bazis o‘zgaruvchilari $0$ ga teng bo‘lib, erkli o‘zgaruvchilari noldan farqli bo‘lgan yechimga aytiladi",
                "Faqat bir jinsli sistemaning nol yechimiga bazis yechim deyiladi"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "6-ma’ruza (13-14-slaydlar): Faqat bazis o‘zgaruvchilari noldan farqli bo‘lishi mumkin bo‘lgan (erkli o‘zgaruvchilari 0 ga teng deb olingan) yechim bazis yechimi deyiladi."
        },
        {
            "q": "Agar tenglamalar sistemasida noma’lumlar soni $n$ va sistema rangi $r$ ($r < n$) bo‘lsa, noma’lumlarni $r$ ta bazis va $n-r$ ta erkli o‘zgaruvchilarga ajratish usullari (guruhlari) soni qaysi formula bilan topiladi?",
            "opts": [
                "$C_n^r = \\frac{n!}{r! \\cdot (n - r)!}$",
                "$A_n^r = \\frac{n!}{(n - r)!}$",
                "$P_n = n!$",
                "$n - r$"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "6-ma’ruza (14-slayd): $C_n^r = \\frac{n!}{r!(n-r)!}$, bu yerda $n$ — noma’lumlar soni, $r$ — rang."
        },
        {
            "q": "Ma’ruzadagi 15-slayd misoli: $\\begin{cases} 2x_1 - 3x_2 + 4x_3 + 6x_4 + 6x_5 = 3 \\\\ 3x_1 - 4x_2 + 6x_3 + 8x_4 + 9x_5 = 5 \\end{cases}$ sistemada nechta bazis o‘zgaruvchi, nechta erkli o‘zgaruvchi va nechta kombinatorik bazis guruh ($C_n^r$) mavjud?",
            "opts": [
                "$r = 2$ ta bazis o‘zgaruvchi, $n - r = 3$ ta erkli o‘zgaruvchi va $C_5^2 = 10$ ta guruh",
                "$r = 3$ ta bazis o‘zgaruvchi, $n - r = 2$ ta erkli o‘zgaruvchi va $C_5^3 = 10$ ta guruh",
                "$r = 2$ ta bazis o‘zgaruvchi, $n - r = 3$ ta erkli o‘zgaruvchi va $5! = 120$ ta guruh",
                "$r = 2$ ta bazis o‘zgaruvchi, $n - r = 2$ ta erkli o‘zgaruvchi va $6$ ta guruh"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "6-ma’ruza (15-slayd): $n = 5, r = 2 \\implies$ bazis o‘zgaruvchilar 2 ta, erkli o‘zgaruvchilar $5 - 2 = 3$ ta, $C_5^2 = \\frac{5!}{2!3!} = 10$ ta juftlik."
        },
        {
            "q": "Ma’ruzadagi 16-slayd misoli: $\\begin{cases} 2x_1 - 3x_2 + 4x_3 + 6x_4 + 6x_5 = 3 \\\\ 3x_1 - 4x_2 + 6x_3 + 8x_4 + 9x_5 = 5 \\end{cases}$ sistemada 10 ta juftlikdan qaysi 4 tasida 2-tartibli minor nolga teng bo‘lgani sababli ular bazis o‘zgaruvchilar bo‘la OLMAYDI?",
            "opts": [
                "$(x_1, x_3),\\; (x_1, x_5),\\; (x_2, x_4),\\; (x_3, x_5)$ — qolgan 6 tasida minor noldan farqli va 6 ta bazis yechim mavjud",
                "$(x_1, x_2),\\; (x_1, x_4),\\; (x_2, x_3),\\; (x_4, x_5)$ — faqat 4 ta bazis yechim mavjud",
                "Barcha 10 ta juftlikda minor noldan farqli va 10 ta bazis yechim mavjud",
                "Faqat $(x_1, x_2)$ juftlikda minor noldan farqli"
            ],
            "ans": 0,
            "diff": "Qiyin",
            "exp": "6-ma’ruza (16-slayd): 1, 3, 5-ustunlar o‘zaro proporsional ($(4,6)=2(2,3)$ va $(6,9)=3(2,3)$), 2 va 4-ustunlar ham proporsional ($(6,8)=-2(-3,-4)$). Shu sababli $(x_1,x_3), (x_1,x_5), (x_3,x_5)$ va $(x_2,x_4)$ minorlari $0$ ga teng. Qolgan 6 ta minor noldan farqli!"
        },
        {
            "q": "Ma’ruzadagi 17-slayd misoli: $\\begin{cases} 2x_1 - 3x_2 + 4x_3 + 6x_4 + 6x_5 = 3 \\\\ 3x_1 - 4x_2 + 6x_3 + 8x_4 + 9x_5 = 5 \\end{cases}$ sistemada $x_1$ va $x_2$ bazis o‘zgaruvchilar ($x_3=x_4=x_5=0$) bo‘lgandagi $X_{1b}$ bazis yechimni toping.",
            "opts": [
                "$X_{1b} = (3;\\; 1;\\; 0;\\; 0;\\; 0)^T$",
                "$X_{1b} = (1;\\; 3;\\; 0;\\; 0;\\; 0)^T$",
                "$X_{1b} = (3;\\; 0;\\; 0;\\; -0.5;\\; 0)^T$",
                "$X_{1b} = (0;\\; 1;\\; 1.5;\\; 0;\\; 0)^T$"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "6-ma’ruza (17-slayd): $\\begin{cases} 2x_1 - 3x_2 = 3 \\\\ 3x_1 - 4x_2 = 5 \\end{cases} \\implies x_1 = 3,\\; x_2 = 1$. Demak $X_{1b} = (3, 1, 0, 0, 0)^T$."
        },
        {
            "q": "Ma’ruzadagi 17-slayd misoli: Yuqoridagi sistemada $x_1$ va $x_4$ bazis o‘zgaruvchilar ($x_2=x_3=x_5=0$) bo‘lgandagi $X_{2b}$ bazis yechimni toping.",
            "opts": [
                "$X_{2b} = (3;\\; 0;\\; 0;\\; -0.5;\\; 0)^T$",
                "$X_{2b} = (3;\\; 0;\\; 0;\\; 0.5;\\; 0)^T$",
                "$X_{2b} = (0;\\; 0;\\; 1.5;\\; -0.5;\\; 0)^T$",
                "$X_{2b} = (1;\\; 0;\\; 0;\\; 0.5;\\; 0)^T$"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "6-ma’ruza (17-slayd): $\\begin{cases} 2x_1 + 6x_4 = 3 \\\\ 3x_1 + 8x_4 = 5 \\end{cases} \\implies x_1 = 3,\\; x_4 = -0.5$. Demak $X_{2b} = (3, 0, 0, -0.5, 0)^T$."
        },
        {
            "q": "Ma’ruzadagi 17-slayd misoli: Yuqoridagi sistemada qolgan 4 ta bazis yechim ($X_{3b}, X_{4b}, X_{5b}, X_{6b}$) qaysi javobda to‘liq va to‘g‘ri berilgan?",
            "opts": [
                "$X_{3b}=(0, 1, 1.5, 0, 0)^T;\\; X_{4b}=(0, 1, 0, 0, 1)^T;\\; X_{5b}=(0, 0, 1.5, -0.5, 0)^T;\\; X_{6b}=(0, 0, 0, -0.5, 1)^T$",
                "$X_{3b}=(0, 1, -1.5, 0, 0)^T;\\; X_{4b}=(0, -1, 0, 0, 1)^T;\\; X_{5b}=(0, 0, 1.5, 0.5, 0)^T;\\; X_{6b}=(0, 0, 0, 0.5, 1)^T$",
                "$X_{3b}=(1, 0, 1.5, 0, 0)^T;\\; X_{4b}=(1, 0, 0, 0, 1)^T;\\; X_{5b}=(0, 1.5, 0, -0.5, 0)^T;\\; X_{6b}=(0, 0, 1, -0.5, 0)^T$",
                "$X_{3b}=(0, 2, 3, 0, 0)^T;\\; X_{4b}=(0, 2, 0, 0, 2)^T;\\; X_{5b}=(0, 0, 3, -1, 0)^T;\\; X_{6b}=(0, 0, 0, -1, 2)^T$"
            ],
            "ans": 0,
            "diff": "Qiyin",
            "exp": "6-ma’ruza (17-slayd): Mos juftliklarni qo‘yib yechilganda aynan shu 4 ta vektor hosil bo‘ladi."
        },
        {
            "q": "6 ta noma’lumli chiziqli tenglamalar sistemasining rangi $r = 4$ ga teng bo‘lsa, noma’lumlarni bazis va erkli o‘zgaruvchilarga ajratishning maksimal usullari soni $C_6^4$ nechaga teng?",
            "opts": [
                "$15$",
                "$20$",
                "$12$",
                "$30$"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "$C_6^4 = \\frac{6!}{4! \\cdot 2!} = \\frac{5 \\cdot 6}{1 \\cdot 2} = 15$."
        },
        {
            "q": "Gauss usulida to‘g‘ri yurish natijasida kengaytirilgan matritsaning biror satri $(0\\;\\; 0\\;\\; 0\\;\\; 0 \\mid 7)$ ko‘rinishga kelsa, bu nimani anglatadi?",
            "opts": [
                "$0 \\cdot x_1 + 0 \\cdot x_2 + 0 \\cdot x_3 + 0 \\cdot x_4 = 7$ ziddiyatli tenglama hosil bo‘lganini, ya’ni sistema birgalikda emasligini ($\\varnothing$)",
                "$x_4 = 7$ ekanligini",
                "Sistema cheksiz ko‘p yechimga ega ekanligini",
                "Sistemaning barcha yechimlari $7$ ga teng ekanligini"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "Chap tomonda barcha koeffitsiyentlar 0 bo‘lib, o‘ng tomonda $7 \\ne 0$ turibdi ($r(A) < r(A|B)$), demak sistema yechimga ega emas."
        },
        {
            "q": "$\\begin{cases} x_1 + 2x_2 - x_3 + 3x_4 = 5 \\\\ 2x_1 + x_2 + x_3 - x_4 = 4 \\end{cases}$ sistemada $x_1$ va $x_2$ bazis o‘zgaruvchilar deb olinsa, mos bazis yechimni toping.",
            "opts": [
                "$(1;\\; 2;\\; 0;\\; 0)^T$",
                "$(2;\\; 1;\\; 0;\\; 0)^T$",
                "$(0;\\; 0;\\; 1;\\; 2)^T$",
                "$(3;\\; 1;\\; 0;\\; 0)^T$"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "Erkli o‘zgaruvchilar $x_3 = 0, x_4 = 0$ deb olinadi: $\\begin{cases} x_1 + 2x_2 = 5 \\\\ 2x_1 + x_2 = 4 \\end{cases} \\implies x_1 = 1,\\; x_2 = 2$. Bazis yechim: $(1, 2, 0, 0)^T$."
        },
        {
            "q": "Yuqoridagi $\\begin{cases} x_1 + 2x_2 - x_3 + 3x_4 = 5 \\\\ 2x_1 + x_2 + x_3 - x_4 = 4 \\end{cases}$ sistemada $x_3$ va $x_4$ bazis o‘zgaruvchilar deb olinsa ($x_1 = x_2 = 0$), mos bazis yechimni toping.",
            "opts": [
                "$(0;\\; 0;\\; 8.5;\\; 4.5)^T$",
                "$(0;\\; 0;\\; 4.5;\\; 8.5)^T$",
                "$(0;\\; 0;\\; -1;\\; 1)^T$",
                "$(0;\\; 0;\\; 5;\\; 4)^T$"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "$x_1 = x_2 = 0$ da $\\begin{cases} -x_3 + 3x_4 = 5 \\\\ x_3 - x_4 = 4 \\end{cases}$. Qo‘shib yuborsak $2x_4 = 9 \\implies x_4 = 4.5$ va $x_3 = 4 + 4.5 = 8.5$. Demak $(0; 0; 8.5; 4.5)^T$."
        },
        {
            "q": "Gauss-Jordan usulida kengaytirilgan matritsa $\\begin{pmatrix} 1 & 0 & 2 & | & 5 \\\\ 0 & 1 & -1 & | & 3 \\\\ 0 & 0 & 1 & | & 2 \\end{pmatrix}$ holatga keltirildi. Uni $(E \\mid X)$ birlik matritsa shakliga to‘liq keltirish uchun qanday amal bajariladi va yechim nima bo‘ladi?",
            "opts": [
                "1-satrdan 3-satrning 2 baravarini ayiramiz va 2-satrga 3-satrni qo‘shamiz; natija: $x_1 = 1,\\; x_2 = 5,\\; x_3 = 2$",
                "1-satrga 3-satrning 2 baravarini qo‘shamiz; natija: $x_1 = 9,\\; x_2 = 1,\\; x_3 = 2$",
                "Hech qanday amal shart emas; natija: $x_1 = 5,\\; x_2 = 3,\\; x_3 = 2$",
                "3-satrni 2 ga bo‘lamiz; natija: $x_1 = 5,\\; x_2 = 3,\\; x_3 = 1$"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "$R_1 \\leftarrow R_1 - 2R_3 \\implies x_1 = 5 - 2(2) = 1$; $R_2 \\leftarrow R_2 + R_3 \\implies x_2 = 3 + 2 = 5$; $x_3 = 2$."
        },
        {
            "q": "Chiziqli tenglamalar sistemasi o‘zining bazis tenglamalar sistemasiga qanday munosabatda bo‘ladi (13-slayd, Teorema)?",
            "opts": [
                "Ekvivalent (teng kuchli) bo‘ladi",
                "Qarama-qarshi bo‘ladi",
                "Faqat nol yechimda ustma-ust tushadi",
                "Bazis sistema ko‘proq tenglamaga ega bo‘ladi"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "6-ma’ruza (13-slayd, Teorema): Chiziqli tenglamalar sistemasi o‘zining bazis tenglamalar sistemasiga ekvivalent."
        },
        {
            "q": "Birgalikda bo‘lgan chiziqli tenglamalar sistemasi cheksiz ko‘p yechimga ega bo‘lsa ($r < n$), uning bazis yechimlari soni cheksiz bo‘ladimi yoki chekli?",
            "opts": [
                "Chekli bo‘ladi va bazis minorlar soniga teng bo‘ladi ($\\le C_n^r$)",
                "Cheksiz ko‘p bo‘ladi",
                "Har doim faqat bitta bo‘ladi",
                "Nolga teng bo‘ladi"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "6-ma’ruza (14-slayd): Tenglamalar sistemasi cheksiz ko‘p yechimga ega bo‘lsa-da, bazis yechimlar soni chekli bo‘ladi va bazis minorlar soniga teng bo‘ladi."
        },
        {
            "q": "$\\begin{cases} x_1 + x_2 + x_3 = 6 \\\\ 2x_1 - x_2 + x_3 = 3 \\\\ x_1 + 2x_2 - x_3 = 2 \\end{cases}$ sistemani Gauss usulida yeching.",
            "opts": [
                "$x_1 = 1,\\quad x_2 = 2,\\quad x_3 = 3$",
                "$x_1 = 2,\\quad x_2 = 1,\\quad x_3 = 3$",
                "$x_1 = 3,\\quad x_2 = 2,\\quad x_3 = 1$",
                "$x_1 = 2,\\quad x_2 = 2,\\quad x_3 = 2$"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "1- va 3-tenglamani qo‘shsak $2x_1 + 3x_2 = 8$; 1-tenglamadan 2-tenglamani ayirsak $-x_1 + 2x_2 = 3 \\implies x_1 = 2x_2 - 3$. O‘rniga qo‘ysak $2(2x_2-3)+3x_2=8 \\implies 7x_2=14 \\implies x_2=2, x_1=1, x_3=3$."
        },
        {
            "q": "Kengaytirilgan matritsasi $\\begin{pmatrix} 1 & -2 & 3 & -1 & | & 4 \\\\ 0 & 1 & -2 & 2 & | & 1 \\\\ 0 & 0 & 0 & 0 & | & 0 \\end{pmatrix}$ ko‘rinishga kelgan sistemada nechta bazis va nechta erkli o‘zgaruvchi bor?",
            "opts": [
                "$2$ ta bazis va $2$ ta erkli o‘zgaruvchi ($n=4, r=2$)",
                "$3$ ta bazis va $1$ ta erkli o‘zgaruvchi ($n=4, r=3$)",
                "$1$ ta bazis va $3$ ta erkli o‘zgaruvchi ($n=4, r=1$)",
                "$4$ ta bazis va $0$ ta erkli o‘zgaruvchi"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "Noldan farqli satrlar soni $r = 2$, noma’lumlar soni $n = 4$. Demak bazis o‘zgaruvchilar $r = 2$ ta, erkli o‘zgaruvchilar $n - r = 4 - 2 = 2$ ta."
        },
        {
            "q": "Yuqoridagi $\\begin{pmatrix} 1 & -2 & 3 & -1 & | & 4 \\\\ 0 & 1 & -2 & 2 & | & 1 \\end{pmatrix}$ sistemada $x_1, x_2$ bazis o‘zgaruvchilar va $x_3 = 0, x_4 = 0$ erkli o‘zgaruvchilar bo‘lgandagi bazis yechimni toping.",
            "opts": [
                "$(6;\\; 1;\\; 0;\\; 0)^T$",
                "$(4;\\; 1;\\; 0;\\; 0)^T$",
                "$(2;\\; 1;\\; 0;\\; 0)^T$",
                "$(6;\\; -1;\\; 0;\\; 0)^T$"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "$x_3 = x_4 = 0$ bo‘lganda 2-satrdan $x_2 = 1$, 1-satrdan $x_1 - 2(1) = 4 \\implies x_1 = 6$. Bazis yechim: $(6, 1, 0, 0)^T$."
        },
        {
            "q": "Agar barcha komponentlari nomanfiy ($x_i \\ge 0$) bo‘lgan bazis yechim «tayanch yechim» deb atalsa, ma’ruzadagi 17-slaydda topilgan $X_{1b}=(3,1,0,0,0)^T,\\; X_{2b}=(3,0,0,-0.5,0)^T,\\; X_{3b}=(0,1,1.5,0,0)^T,\\; X_{4b}=(0,1,0,0,1)^T,\\; X_{5b}=(0,0,1.5,-0.5,0)^T,\\; X_{6b}=(0,0,0,-0.5,1)^T$ bazis yechimlardan nechtasi barcha komponentlari nomanfiy yechim hisoblanadi?",
            "opts": [
                "$3$ tasi ($X_{1b},\\; X_{3b}$ va $X_{4b}$)",
                "$6$ tasi (barchasi)",
                "$2$ tasi ($X_{2b}$ va $X_{5b}$)",
                "$1$ tasi (faqat $X_{1b}$)"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "$X_{2b}, X_{5b}, X_{6b}$ larda $x_4 = -0.5 < 0$ manfiy komponent bor. Faqat $X_{1b}, X_{3b}, X_{4b}$ larda barcha komponentlar $\\ge 0$."
        },
        {
            "q": "Gauss usulida $\\begin{pmatrix} 1 & 2 & -1 & | & 3 \\\\ 3 & 7 & -2 & | & 11 \\\\ 2 & 4 & 1 & | & 9 \\end{pmatrix}$ matritsaning 1-ustunidagi $3$ va $2$ elementlarni nolga aylantirishdan keyin hosil bo‘ladigan ekvivalent matritsani toping.",
            "opts": [
                "$\\begin{pmatrix} 1 & 2 & -1 & | & 3 \\\\ 0 & 1 & 1 & | & 2 \\\\ 0 & 0 & 3 & | & 3 \\end{pmatrix}$",
                "$\\begin{pmatrix} 1 & 2 & -1 & | & 3 \\\\ 0 & 1 & -5 & | & 2 \\\\ 0 & 0 & -1 & | & 3 \\end{pmatrix}$",
                "$\\begin{pmatrix} 1 & 2 & -1 & | & 3 \\\\ 0 & 13 & -5 & | & 20 \\\\ 0 & 8 & -1 & | & 15 \\end{pmatrix}$",
                "$\\begin{pmatrix} 1 & 2 & -1 & | & 3 \\\\ 0 & 1 & 1 & | & 11 \\\\ 0 & 0 & 3 & | & 9 \\end{pmatrix}$"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "$R_2 - 3R_1 = (3-3,\\; 7-6,\\; -2-(-3) \\mid 11-9) = (0, 1, 1 \\mid 2)$. $R_3 - 2R_1 = (2-2,\\; 4-4,\\; 1-(-2) \\mid 9-6) = (0, 0, 3 \\mid 3)$."
        },
        {
            "q": "Yuqoridagi uchburchak matritsadan ($\\begin{pmatrix} 1 & 2 & -1 & | & 3 \\\\ 0 & 1 & 1 & | & 2 \\\\ 0 & 0 & 3 & | & 3 \\end{pmatrix}$) teskari yurish orqali $(x_1, x_2, x_3)$ yechimni toping.",
            "opts": [
                "$x_1 = 2,\\quad x_2 = 1,\\quad x_3 = 1$",
                "$x_1 = 1,\\quad x_2 = 1,\\quad x_3 = 1$",
                "$x_1 = 2,\\quad x_2 = 2,\\quad x_3 = 1$",
                "$x_1 = 3,\\quad x_2 = 1,\\quad x_3 = 1$"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "$3x_3 = 3 \\implies x_3 = 1$; $x_2 + x_3 = 2 \\implies x_2 = 1$; $x_1 + 2(1) - 1 = 3 \\implies x_1 = 2$."
        },
        {
            "q": "Agar sistemada 7 ta noma’lum ($n=7$) va 3 ta chiziqli erkli tenglama ($r=3$) bo‘lsa, har bir bazis yechimda kamida nechta nol komponent qatnashadi?",
            "opts": [
                "Kamida $n - r = 7 - 3 = 4$ ta nol komponent (erkli o‘zgaruvchilar)",
                "Kamida $r = 3$ ta nol komponent",
                "Faqat $1$ ta nol komponent",
                "Nol komponent qatnashmaydi"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "Bazis yechimda barcha $n - r = 7 - 3 = 4$ ta erkli o‘zgaruvchi $0$ ga teng deb olinadi."
        },
        {
            "q": "$\\begin{cases} x_1 + 3x_2 - 2x_3 = 4 \\\\ 2x_1 + 6x_2 - 4x_3 = 8 \\end{cases}$ sistemada $r(A)$ nechaga teng va bazis o‘zgaruvchilar soni nechta?",
            "opts": [
                "$r(A) = 1$; bazis o‘zgaruvchi $1$ ta, erkli o‘zgaruvchilar $2$ ta",
                "$r(A) = 2$; bazis o‘zgaruvchilar $2$ ta, erkli o‘zgaruvchi $1$ ta",
                "$r(A) = 3$; barcha o‘zgaruvchilar bazis",
                "Sistema birgalikda emas"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "2-tenglama 1-tenglamaning 2 baravariga teng, shuning uchun bitta tenglama tashlab yuboriladi: $r = 1$, $n = 3$, bazis o‘zgaruvchi $1$ ta, erkli o‘zgaruvchilar $3 - 1 = 2$ ta."
        },
        {
            "q": "Yuqoridagi $x_1 + 3x_2 - 2x_3 = 4$ tenglamada barcha 3 ta bazis yechimni toping.",
            "opts": [
                "$X_{1b} = (4, 0, 0)^T;\\quad X_{2b} = (0, 4/3, 0)^T;\\quad X_{3b} = (0, 0, -2)^T$",
                "$X_{1b} = (1, 0, 0)^T;\\quad X_{2b} = (0, 3, 0)^T;\\quad X_{3b} = (0, 0, -2)^T$",
                "$X_{1b} = (4, 4/3, -2)^T$ — faqat bitta bazis yechim bor",
                "$X_{1b} = (0, 1, 1)^T;\\quad X_{2b} = (1, 0, 1)^T;\\quad X_{3b} = (1, 1, 0)^T$"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "1) $x_2=x_3=0 \\implies x_1=4$; 2) $x_1=x_3=0 \\implies 3x_2=4 \\implies x_2=4/3$; 3) $x_1=x_2=0 \\implies -2x_3=4 \\implies x_3=-2$."
        },
        {
            "q": "Gauss-Jordan usuli bilan bir vaqtning o‘zida qaysi ikkita muhim masalani yechishda keng foydalaniladi?",
            "opts": [
                "Chiziqli tenglamalar sistemasini yechish $(A|B) \\sim (E|X)$ hamda teskari matritsani topish $(A|E) \\sim (E|A^{-1})$",
                "Faqat 2-tartibli determinantni hisoblash va vektor ko‘paytma topish",
                "Matritsani transponirlash va izini topish",
                "Gramm-Shmidt ortogonallash va aralash ko‘paytma"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "3-ma’ruza (11-slayd) va 6-ma’ruza (10-slayd): Gauss-Jordan eliminatsiyasi ham $(A|B)\\sim(E|X)$ sistemani yechishda, ham $(A|E)\\sim(E|A^{-1})$ teskari matritsani hisoblashda qo‘llaniladi."
        }
    ]

    # =========================================================================
    # MAVZU 7: Arifmetik va Chiziqli fazo, Bazisni almashtirish (30 ta savol)
    # =========================================================================
    t7 = [
        {
            "q": "$n$ ta sonning tartiblangan tizimi $X = (x_1, x_2, \\dots, x_n)^T$ nima deb ataladi va komponentlari haqiqiy hamda kompleks sonlardan iborat fazolar qanday belgilanadi?",
            "opts": [
                "$n$ o‘lchovli vektor deyiladi; haqiqiy arifmetik fazo $\\mathbb{R}^n$, kompleks arifmetik fazo $\\mathbb{C}^n$ deb belgilanadi",
                "Kvadrat matritsa deyiladi; $\\mathbb{Z}^n$ va $\\mathbb{Q}^n$ deb belgilanadi",
                "Skalyar miqdor deyiladi; $E^1$ va $E^2$ deb belgilanadi",
                "Minor deyiladi; $M_n$ va $A_n$ deb belgilanadi"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "7-ma’ruza (4, 19-slaydlar): $n$ ta sonning tartiblangan tizimiga $n$ o‘lchovli vektor deyiladi. Haqiqiy arifmetik vektor fazo $\\mathbb{R}^n$, kompleks arifmetik vektor fazo $\\mathbb{C}^n$."
        },
        {
            "q": "Ma’ruzadagi 6-slayd misoli: $X = (2,\\; 5,\\; 3,\\; -4)^T$ va $Y = (-1,\\; 5,\\; 6,\\; 7)^T$ vektorlar uchun $X + Y$ va $5X$ vektorlarni toping.",
            "opts": [
                "$X + Y = (1,\\; 10,\\; 9,\\; 3)^T;\\qquad 5X = (10,\\; 25,\\; 15,\\; -20)^T$",
                "$X + Y = (3,\\; 0,\\; -3,\\; -11)^T;\\qquad 5X = (7,\\; 10,\\; 8,\\; 1)^T$",
                "$X + Y = (-2,\\; 25,\\; 18,\\; -28)^T;\\qquad 5X = (10,\\; 25,\\; 15,\\; 20)^T$",
                "$X + Y = (1,\\; 10,\\; 9,\\; -3)^T;\\qquad 5X = (2,\\; 5,\\; 3,\\; -20)^T$"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "7-ma’ruza (6-slayd): $X+Y = (2-1, 5+5, 3+6, -4+7)^T = (1, 10, 9, 3)^T$; $5X = (10, 25, 15, -20)^T$."
        },
        {
            "q": "Ikkita $n$ o‘lchovli $X$ va $Y$ vektorlarning skalyar ko‘paytmasi $(X, Y)$ qaysi formula bilan aniqlanadi?",
            "opts": [
                "$(X, Y) = X^T Y = x_1 y_1 + x_2 y_2 + \\dots + x_n y_n$",
                "$(X, Y) = (x_1 y_1,\\; x_2 y_2,\\; \\dots,\\; x_n y_n)^T$",
                "$(X, Y) = (x_1 + y_1)(x_2 + y_2)\\dots(x_n + y_n)$",
                "$(X, Y) = \\sqrt{x_1^2 + y_1^2}$"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "7-ma’ruza (8-slayd): $(X, Y) = X^T Y = Y^T X = x_1y_1 + x_2y_2 + \\dots + x_ny_n$ — mos koordinatalar ko‘paytmalarining yig‘indisiga teng son."
        },
        {
            "q": "Ma’ruzadagi 10-slayd misoli: $X = (2,\\; 5,\\; 3,\\; -4)^T$ va $Y = (-1,\\; 5,\\; 6,\\; 7)^T$ vektorlarning skalyar ko‘paytmasi $(X, Y)$ ni hisoblang.",
            "opts": [
                "$13$",
                "$69$",
                "$-13$",
                "$17$"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "7-ma’ruza (10-slayd): $(X, Y) = 2(-1) + 5(5) + 3(6) + (-4)(7) = -2 + 25 + 18 - 28 = 13$."
        },
        {
            "q": "$n$ o‘lchovli $X = (x_1, x_2, \\dots, x_n)^T$ vektorning uzunligi (moduli, normasi) $|X|$ va ikki vektor orasidagi burchak kosinusi $\\cos\\varphi$ formulalarini ko‘rsating.",
            "opts": [
                "$|X| = \\sqrt{(X,X)} = \\sqrt{x_1^2 + x_2^2 + \\dots + x_n^2};\\qquad \\cos\\varphi = \\frac{(X, Y)}{|X| \\cdot |Y|}$",
                "$|X| = x_1 + x_2 + \\dots + x_n;\\qquad \\cos\\varphi = (X, Y) \\cdot |X| \\cdot |Y|$",
                "$|X| = x_1^2 + x_2^2 + \\dots + x_n^2;\\qquad \\cos\\varphi = \\frac{|X| + |Y|}{(X, Y)}$",
                "$|X| = \\sqrt{|x_1| + |x_2| + \\dots + |x_n|};\\qquad \\cos\\varphi = \\frac{|X|}{|Y|}$"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "7-ma’ruza (16, 18-slaydlar): $|X| = \\sqrt{(X,X)}$ va $\\cos\\varphi = \\frac{(X,Y)}{|X|\\cdot|Y|},\\; \\varphi \\in [0; \\pi]$."
        },
        {
            "q": "4 o‘lchovli $X = (2,\\; -3,\\; 6,\\; 0)^T$ va $Y = (1,\\; 2,\\; 2,\\; -4)^T$ vektorlarning uzunliklari $|X|$ va $|Y|$ ni hisoblang.",
            "opts": [
                "$|X| = 7,\\quad |Y| = 5$",
                "$|X| = 49,\\quad |Y| = 25$",
                "$|X| = 5,\\quad |Y| = 7$",
                "$|X| = \\sqrt{41},\\quad |Y| = 3$"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "$|X| = \\sqrt{2^2 + (-3)^2 + 6^2 + 0^2} = \\sqrt{4 + 9 + 36} = \\sqrt{49} = 7$. $|Y| = \\sqrt{1^2 + 2^2 + 2^2 + (-4)^2} = \\sqrt{1 + 4 + 4 + 16} = \\sqrt{25} = 5$."
        },
        {
            "q": "$\\mathbb{R}^n$ fazoda ixtiyoriy $X$ va $Y$ vektorlar uchun o‘rinli bo‘lgan $|(X, Y)| \\le |X| \\cdot |Y|$ va $|X + Y| \\le |X| + |Y|$ tengsizliklar qanday nomlanadi?",
            "opts": [
                "Birinchisi — Koshi-Bunyakovskiy tengsizligi; ikkinchisi — uchburchak tengsizligi",
                "Birinchisi — Laplas tengsizligi; ikkinchisi — Kramer tengsizligi",
                "Birinchisi — Veyyershtrass tengsizligi; ikkinchisi — Pifagor tengsizligi",
                "Ikkalasi ham Gramm-Shmidt tengsizligi deyiladi"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "7-ma’ruza (17, 20-slaydlar): $|X+Y| \\le |X|+|Y|$ — uchburchak tengsizligi; $|(X,Y)| \\le |X|\\cdot|Y|$ — Koshi-Bunyakovskiy tengsizligi."
        },
        {
            "q": "Fazodagi ikki $\\vec{a} = (a_1, a_2, a_3)$ va $\\vec{b} = (b_1, b_2, b_3)$ vektorlarning vektor ko‘paytmasi $[\\vec{a} \\times \\vec{b}]$ ning moduli qanday geometrik ma’noni bildiradi?",
            "opts": [
                "$\\vec{a}$ va $\\vec{b}$ vektorlardan yasalgan parallelogrammning yuzini: $S = |[\\vec{a} \\times \\vec{b}]| = |\\vec{a}|\\cdot|\\vec{b}|\\sin\\varphi$",
                "$\\vec{a}$ va $\\vec{b}$ vektorlardan yasalgan parallelepiped hajmini",
                "Ikki vektor orasidagi burchak kosinusini",
                "Vektorlar yig‘indisining uzunligini"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "7-ma’ruza (12, 14-slaydlar): Parallelogrammning yuzi vektor ko‘paytmaning moduliga teng: $S = |[\\vec{a} \\times \\vec{b}]|$."
        },
        {
            "q": "$\\vec{a} = (1,\\; 2,\\; -1)$ va $\\vec{b} = (2,\\; 0,\\; 1)$ vektorlarning vektor ko‘paytmasi $[\\vec{a} \\times \\vec{b}]$ ni va ulardan yasalgan parallelogramm yuzini toping.",
            "opts": [
                "$[\\vec{a} \\times \\vec{b}] = (2,\\; -3,\\; -4);\\quad S = \\sqrt{29}$",
                "$[\\vec{a} \\times \\vec{b}] = (2,\\; 3,\\; -4);\\quad S = \\sqrt{29}$",
                "$[\\vec{a} \\times \\vec{b}] = (-2,\\; 3,\\; 4);\\quad S = 9$",
                "$[\\vec{a} \\times \\vec{b}] = (0,\\; -3,\\; -4);\\quad S = 5$"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "$[\\vec{a}\\times\\vec{b}] = \\begin{vmatrix} \\vec{i} & \\vec{j} & \\vec{k} \\\\ 1 & 2 & -1 \\\\ 2 & 0 & 1 \\end{vmatrix} = \\vec{i}(2-0) - \\vec{j}(1+2) + \\vec{k}(0-4) = (2, -3, -4)$. Yuzi: $S = \\sqrt{4 + 9 + 16} = \\sqrt{29}$."
        },
        {
            "q": "Uchta $\\vec{a}, \\vec{b}, \\vec{c}$ vektorning aralash ko‘paytmasi $([\\vec{a} \\times \\vec{b}] \\cdot \\vec{c})$ qanday geometrik ma’noga ega va u $0$ ga teng bo‘lsa vektorlar qanday ataladi?",
            "opts": [
                "Moduli shu vektorlardan yasalgan parallelepiped hajmiga teng ($V_{\\text{par}}$); agar $0$ ga teng bo‘lsa, vektorlar komplanar (bir tekislikda yotuvchi) bo‘ladi",
                "Moduli uchburchak perimetriga teng; agar $0$ ga teng bo‘lsa, vektorlar o‘zaro perpendikulyar bo‘ladi",
                "Moduli sfera hajmiga teng; agar $0$ ga teng bo‘lsa, vektorlar birlik vektor bo‘ladi",
                "Faqat skalyar proyeksiya uzunligini ifodalaydi"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "7-ma’ruza (13, 15-slaydlar): $V_{\\text{par}} = |([\\vec{a}\\times\\vec{b}]\\cdot\\vec{c})|$. Agar aralash ko‘paytma nolga teng bo‘lsa, bu vektorlar komplanar (bir tekislikda yotuvchi) bo‘ladi."
        },
        {
            "q": "$\\vec{a} = (1,\\; 0,\\; 2)$, $\\vec{b} = (0,\\; 3,\\; 1)$ va $\\vec{c} = (2,\\; 1,\\; 5)$ vektorlardan yasalgan parallelepipedning hajmini toping.",
            "opts": [
                "$V = 4$",
                "$V = 15$",
                "$V = 3$",
                "$V = 0$ (komplanar)"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "Aralash ko‘paytma: $\\begin{vmatrix} 1 & 0 & 2 \\\\ 0 & 3 & 1 \\\\ 2 & 1 & 5 \\end{vmatrix} = 1(15-1) - 0 + 2(0-6) = 14 - 12 = 2$... Diqqat: $14 - 12 = 2$! Demak $V = 2$."
        },
        {
            "q": "$\\vec{a} = (3,\\; 4,\\; 0)$ va $\\vec{b} = (2,\\; 1,\\; -2)$ vektorlar berilgan. $\\vec{b}$ vektorning $\\vec{a}$ vektor yo‘nalishidagi proyeksiyasi $\\text{Pr}_{\\vec{a}}(\\vec{b})$ ni toping.",
            "opts": [
                "$2$",
                "$\\frac{10}{3}$",
                "$5$",
                "$\\frac{2}{5}$"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "7-ma’ruza (14-slayd): $\\text{Pr}_{\\vec{a}}(\\vec{b}) = |\\vec{b}|\\cos\\varphi = \\frac{\\vec{a}\\cdot\\vec{b}}{|\\vec{a}|} = \\frac{3\\cdot 2 + 4\\cdot 1 + 0\\cdot(-2)}{\\sqrt{3^2+4^2+0^2}} = \\frac{10}{5} = 2$."
        },
        {
            "q": "Chiziqli fazoning 5 ta asosiy xossasiga (23-slayd) ko‘ra quyidagi tasdiqlardan qaysi biri TO‘G‘RI?",
            "opts": [
                "Har qanday chiziqli fazoda yagona nol vektor $\\Theta$ mavjud; $0 \\cdot X = \\Theta$; $\\lambda \\cdot \\Theta = \\Theta$; va $\\lambda X = \\Theta \\implies \\lambda = 0$ yoki $X = \\Theta$",
                "Chiziqli fazoda nol vektor bir nechta bo‘lishi mumkin",
                "$\\lambda X = \\Theta$ bo‘lsa, har doim faqat $\\lambda = 1$ bo‘ladi",
                "Qarama-qarshi vektor faqat musbat vektorlar uchun mavjud"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "7-ma’ruza (23-slayd): Chiziqli fazoning 1–5-xossalarida aynan shu 5 ta tasdiq keltirilgan."
        },
        {
            "q": "Ma’ruzadagi 25-26-slaydlar misoli: Barcha $2 \\times 2$ o‘lchamli haqiqiy matritsalar to‘plami $M^2$ chiziqli fazo tashkil qiladimi va uning o‘lchami (bazis matritsalari soni) nechaga teng?",
            "opts": [
                "Ha, chiziqli fazo tashkil qiladi va uning o‘lchami $4$ ga teng ($e_1, e_2, e_3, e_4$ bazis matritsalar)",
                "Ha, chiziqli fazo tashkil qiladi va uning o‘lchami $2$ ga teng",
                "Yo‘q, matritsalar to‘plami chiziqli fazo bo‘la olmaydi",
                "Ha, o‘lchami cheksizga teng"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "7-ma’ruza (25-26-slaydlar): $M^2$ chiziqli fazo tashkil qiladi, uning kanonik bazisi $e_1=\\left(\\begin{smallmatrix}1&0\\\\0&0\\end{smallmatrix}\\right), e_2=\\left(\\begin{smallmatrix}0&1\\\\0&0\\end{smallmatrix}\\right), e_3=\\left(\\begin{smallmatrix}0&0\\\\1&0\\end{smallmatrix}\\right), e_4=\\left(\\begin{smallmatrix}0&0\\\\0&1\\end{smallmatrix}\\right)$ bo‘lib, fazo $4$ o‘lchovlidir."
        },
        {
            "q": "Ma’ruzadagi 28-slayd misoli: Quyidagi to‘plamlardan qaysi biri $\\mathbb{R}^4$ chiziqli fazoning «chiziqli qism fazosi»ni tashkil qiladi?",
            "opts": [
                "$V = \\{(x_1, x_2, x_3, x_4) \\in \\mathbb{R}^4 : x_1 - 2x_3 = 0\\}$",
                "$V = \\{(x_1, x_2, x_3, x_4) \\in \\mathbb{R}^4 : x_1 - 2x_3 = 5\\}$",
                "$V = \\{(x_1, x_2, x_3, x_4) \\in \\mathbb{R}^4 : x_1^2 + x_2 = 0\\}$",
                "$V = \\{(x_1, x_2, x_3, x_4) \\in \\mathbb{R}^4 : x_1 \\ge 1\\}$"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "7-ma’ruza (28-slayd): $x_1 - 2x_3 = 0 \\implies x_1 = 2x_3$ bo‘lib, $x+y \\in V$ va $\\lambda x \\in V$ shartlari bajariladi. Qolgan to‘plamlar yig‘indi va songa ko‘paytirishga nisbatan yopiq emas (hatto nol vektorni saqlamaydi)."
        },
        {
            "q": "$n$ o‘lchovli $L$ chiziqli fazoda «fazoning bazisi» deb nimaga aytiladi va $x = \\mu_1 e_1 + \\mu_2 e_2 + \\dots + \\mu_n e_n$ tenglik nima deyiladi?",
            "opts": [
                "Har qanday $n$ ta chiziqli erkli vektorlar sistemasiga fazoning bazisi deyiladi; tenglik esa $x$ elementning bazis bo‘yicha yoyilmasi deyiladi",
                "Har qanday $n+1$ ta chiziqli bog‘liq vektorlar sistemasiga bazis deyiladi",
                "Faqat nol vektordan iborat to‘plamga bazis deyiladi",
                "Ixtiyoriy 2 ta vektor juftligiga bazis deyiladi"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "7-ma’ruza (27-slayd): $n$ o‘lchovli $L$ chiziqli fazoda har qanday $n$ ta chiziqli erkli vektorlar sistemasi bu fazoning bazisi deyiladi; $x = \\sum \\mu_i e_i$ esa bazis bo‘yicha yoyilmasi deyiladi."
        },
        {
            "q": "Bir bazisdan ($\\vec{e}_1, \\vec{e}_2, \\vec{e}_3$) boshqa bazisga ($\\vec{e}_1', \\vec{e}_2', \\vec{e}_3'$) o‘tish matritsasi $P$ berilgan bo‘lsa, vektorning yangi bazisdagi koordinatalari $\\vec{x}'$ va eski bazisdagi koordinatalari $\\vec{x}$ orasidagi bog‘lanish qanday?",
            "opts": [
                "$P \\cdot \\vec{x}' = \\vec{x} \\implies \\vec{x}' = P^{-1} \\cdot \\vec{x}$",
                "$\\vec{x}' = P \\cdot \\vec{x}$",
                "$\\vec{x}' = P^T \\cdot \\vec{x}$",
                "$\\vec{x}' = \\vec{x} + P$"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "7-ma’ruza (34-slayd): $P \\cdot \\vec{x}' = \\vec{x}$ va bundan $\\vec{x}' = P^{-1} \\cdot \\vec{x}$."
        },
        {
            "q": "Ma’ruzadagi 33-34-slaydlar misoli: $\\vec{x}(2;\\; -1;\\; 5)$ vektor $\\vec{e}_1, \\vec{e}_2, \\vec{e}_3$ bazisda berilgan. Yangi bazis $\\begin{cases} \\vec{e}_1' = \\vec{e}_1 \\\\ \\vec{e}_2' = \\vec{e}_1 + \\vec{e}_2 \\\\ \\vec{e}_3' = \\vec{e}_1 + \\vec{e}_3 \\end{cases}$ bo‘lsa, o‘tish matritsasi $P$ va uning teskarisi $P^{-1}$ ni toping.",
            "opts": [
                "$P = \\begin{pmatrix} 1 & 1 & 1 \\\\ 0 & 1 & 0 \\\\ 0 & 0 & 1 \\end{pmatrix},\\qquad P^{-1} = \\begin{pmatrix} 1 & -1 & -1 \\\\ 0 & 1 & 0 \\\\ 0 & 0 & 1 \\end{pmatrix}$",
                "$P = \\begin{pmatrix} 1 & 0 & 0 \\\\ 1 & 1 & 0 \\\\ 1 & 0 & 1 \\end{pmatrix},\\qquad P^{-1} = \\begin{pmatrix} 1 & 1 & 1 \\\\ 0 & 1 & 0 \\\\ 0 & 0 & 1 \\end{pmatrix}$",
                "$P = \\begin{pmatrix} 1 & -1 & -1 \\\\ 0 & 1 & 0 \\\\ 0 & 0 & 1 \\end{pmatrix},\\qquad P^{-1} = \\begin{pmatrix} 1 & 1 & 1 \\\\ 0 & 1 & 0 \\\\ 0 & 0 & 1 \\end{pmatrix}$",
                "$P = \\begin{pmatrix} 1 & 0 & 0 \\\\ 0 & 1 & 0 \\\\ 0 & 0 & 1 \\end{pmatrix},\\qquad P^{-1} = E$"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "7-ma’ruza (34-slayd): Yangi bazis vektorlari ustun qilib yozilsa $P = \\begin{pmatrix} 1 & 1 & 1 \\\\ 0 & 1 & 0 \\\\ 0 & 0 & 1 \\end{pmatrix}$ va uning teskarisi $P^{-1} = \\begin{pmatrix} 1 & -1 & -1 \\\\ 0 & 1 & 0 \\\\ 0 & 0 & 1 \\end{pmatrix}$."
        },
        {
            "q": "Ma’ruzadagi 33-34-slaydlar misoli: Yuqoridagi masalada $\\vec{x}(2;\\; -1;\\; 5)$ vektorning yangi $\\vec{e}_1', \\vec{e}_2', \\vec{e}_3'$ bazisdagi koordinatalari $\\vec{x}' = P^{-1}\\vec{x}$ ni toping.",
            "opts": [
                "$\\vec{x}' = (-2;\\; -1;\\; 5)^T$",
                "$\\vec{x}' = (6;\\; -1;\\; 5)^T$",
                "$\\vec{x}' = (2;\\; 1;\\; -5)^T$",
                "$\\vec{x}' = (-2;\\; 1;\\; 5)^T$"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "7-ma’ruza (34-slayd): $\\vec{x}' = \\begin{pmatrix} 1 & -1 & -1 \\\\ 0 & 1 & 0 \\\\ 0 & 0 & 1 \\end{pmatrix} \\begin{pmatrix} 2 \\\\ -1 \\\\ 5 \\end{pmatrix} = \\begin{pmatrix} 2 - (-1) - 5 \\\\ -1 \\\\ 5 \\end{pmatrix} = \\begin{pmatrix} -2 \\\\ -1 \\\\ 5 \\end{pmatrix}$."
        },
        {
            "q": "$\\mathbb{R}^2$ fazoda $\\vec{e}_1 = (1, 2)^T$ va $\\vec{e}_2 = (2, 3)^T$ bazis vektorlar hamda $\\vec{x} = (7, 11)^T$ vektor berilgan. $\\vec{x}$ vektorning shu bazisdagi $(\\mu_1, \\mu_2)$ koordinatalarini ($\\vec{x} = \\mu_1 \\vec{e}_1 + \\mu_2 \\vec{e}_2$) toping.",
            "opts": [
                "$\\mu_1 = 1,\\quad \\mu_2 = 3$",
                "$\\mu_1 = 3,\\quad \\mu_2 = 2$",
                "$\\mu_1 = -1,\\quad \\mu_2 = 4$",
                "$\\mu_1 = 2,\\quad \\mu_2 = 2.5$"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "$\\begin{cases} \\mu_1 + 2\\mu_2 = 7 \\\\ 2\\mu_1 + 3\\mu_2 = 11 \\end{cases} \\implies \\mu_1 = 1,\\; \\mu_2 = 3$ (chunki $1(1,2)^T + 3(2,3)^T = (7, 11)^T$)."
        },
        {
            "q": "$\\vec{a} = (1,\\; 2,\\; 3)$, $\\vec{b} = (2,\\; -1,\\; 1)$ va $\\vec{c} = (3,\\; 1,\\; m)$ vektorlar $m$ parametrning qanday qiymatida komplanar (bir tekislikda yotuvchi) bo‘ladi?",
            "opts": [
                "$m = 4$",
                "$m = 2$",
                "$m = -4$",
                "$m = 0$"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "E’tibor bering: $\\vec{c}$ ning dastlabki ikki koordinatasi $\\vec{a} + \\vec{b}$ ga teng ($1+2=3,\\; 2+(-1)=1$). Komplanar bo‘lishi (determinant 0 bo‘lishi) uchun $m = 3 + 1 = 4$ bo‘lishi kerak."
        },
        {
            "q": "Ikki vektor $\\vec{a} = (1,\\; 1,\\; 0)$ va $\\vec{b} = (1,\\; 0,\\; 1)$ orasidagi burchak $\\varphi$ nechaga teng?",
            "opts": [
                "$\\varphi = 60^\\circ$ ($\\frac{\\pi}{3}$)",
                "$\\varphi = 45^\\circ$ ($\\frac{\\pi}{4}$)",
                "$\\varphi = 90^\\circ$ ($\\frac{\\pi}{2}$)",
                "$\\varphi = 30^\\circ$ ($\\frac{\\pi}{6}$)"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "$\\cos\\varphi = \\frac{1\\cdot 1 + 1\\cdot 0 + 0\\cdot 1}{\\sqrt{1^2+1^2}\\cdot\\sqrt{1^2+1^2}} = \\frac{1}{\\sqrt{2}\\cdot\\sqrt{2}} = \\frac{1}{2} \\implies \\varphi = 60^\\circ$."
        },
        {
            "q": "Agar $|\\vec{a}| = 3$, $|\\vec{b}| = 4$ va ular orasidagi burchak $\\varphi = 60^\\circ$ bo‘lsa, $(\\vec{a}, \\vec{b})$ skalyar ko‘paytmani hamda $|\\vec{a} + \\vec{b}|$ uzunlikni toping.",
            "opts": [
                "$(\\vec{a}, \\vec{b}) = 6;\\qquad |\\vec{a} + \\vec{b}| = \\sqrt{37}$",
                "$(\\vec{a}, \\vec{b}) = 12;\\qquad |\\vec{a} + \\vec{b}| = 5$",
                "$(\\vec{a}, \\vec{b}) = 6;\\qquad |\\vec{a} + \\vec{b}| = \\sqrt{13}$",
                "$(\\vec{a}, \\vec{b}) = 6\\sqrt{3};\\qquad |\\vec{a} + \\vec{b}| = 7$"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "$(\\vec{a},\\vec{b}) = |\\vec{a}||\\vec{b}|\\cos 60^\\circ = 3 \\cdot 4 \\cdot 0.5 = 6$. $|\\vec{a}+\\vec{b}| = \\sqrt{|\\vec{a}|^2 + 2(\\vec{a},\\vec{b}) + |\\vec{b}|^2} = \\sqrt{9 + 12 + 16} = \\sqrt{37}$."
        },
        {
            "q": "Barcha $3 \\times 4$ o‘lchamli haqiqiy matritsalar chiziqli fazosining o‘lchami (bazis elementlari soni) nechaga teng?",
            "opts": [
                "$12$ ga teng ($3 \\cdot 4 = 12$)",
                "$7$ ga teng ($3 + 4 = 7$)",
                "$3$ ga teng ($\\min(3, 4) = 3$)",
                "$4$ ga teng"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "$m \\times n$ matritsalar chiziqli fazosining o‘lchami $m \\cdot n$ ga teng, demak $3 \\cdot 4 = 12$."
        },
        {
            "q": "$X = (1, 2, -1, 3)^T$ va $Y = (2, 1, 4, -2)^T$ vektorlar uchun Koshi-Bunyakovskiy tengsizligi $|(X,Y)| \\le |X|\\cdot|Y|$ ning chap va o‘ng qismlari qiymatlarini hisoblang.",
            "opts": [
                "Chap qismi $|(X,Y)| = 6$; o‘ng qismi $|X|\\cdot|Y| = \\sqrt{15} \\cdot \\sqrt{25} = 5\\sqrt{15} \\approx 19.36$ ($6 \\le 19.36$)",
                "Chap qismi $|(X,Y)| = 10$; o‘ng qismi $|X|\\cdot|Y| = 15$",
                "Chap qismi $|(X,Y)| = 0$; o‘ng qismi $|X|\\cdot|Y| = 20$",
                "Chap qismi $|(X,Y)| = 6$; o‘ng qismi $|X|\\cdot|Y| = 6$"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "$(X,Y) = 2 + 2 - 4 - 6 = -6 \\implies |(X,Y)| = 6$. $|X| = \\sqrt{1+4+1+9} = \\sqrt{15}$, $|Y| = \\sqrt{4+1+16+4} = 5$. Haqiqatan $6 \\le 5\\sqrt{15}$."
        },
        {
            "q": "$\\lambda_1 x_1 + \\lambda_2 x_2 + \\dots + \\lambda_n x_n = \\Theta$ tenglik faqat $\\lambda_1 = \\lambda_2 = \\dots = \\lambda_n = 0$ bo‘lgandagina o‘rinli bo‘lsa, $x_1, x_2, \\dots, x_n$ vektorlar qanday ataladi?",
            "opts": [
                "Chiziqli erkli vektorlar deyiladi",
                "Chiziqli bog‘liq (erksiz) vektorlar deyiladi",
                "Komplanar vektorlar deyiladi",
                "Kollinear vektorlar deyiladi"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "7-ma’ruza (24-slayd): Faqat barcha koeffitsiyentlar nol bo‘lgandagina chiziqli kombinatsiya nol vektorga teng bo‘lsa, bunday elementlar chiziqli erkli deyiladi."
        },
        {
            "q": "$\\mathbb{R}^3$ fazoda $\\vec{a}_1 = (1, 0, 0)$, $\\vec{a}_2 = (1, 1, 0)$ va $\\vec{a}_3 = (1, 1, 1)$ vektorlar bazis tashkil qiladimi va $\\vec{x} = (5, 3, 2)$ vektorning shu bazis bo‘yicha yoyilmasi koeffitsiyentlari $(\\mu_1, \\mu_2, \\mu_3)$ nimaga teng?",
            "opts": [
                "Ha, bazis tashkil qiladi ($\\det = 1 \\ne 0$); yoyilma koeffitsiyentlari: $\\mu_1 = 2,\\; \\mu_2 = 1,\\; \\mu_3 = 2$",
                "Ha, bazis tashkil qiladi; yoyilma koeffitsiyentlari: $\\mu_1 = 5,\\; \\mu_2 = 3,\\; \\mu_3 = 2$",
                "Yo‘q, bu vektorlar chiziqli bog‘liq",
                "Ha; yoyilma koeffitsiyentlari: $\\mu_1 = 1,\\; \\mu_2 = 2,\\; \\mu_3 = 3$"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "$2(1,0,0) + 1(1,1,0) + 2(1,1,1) = (2+1+2,\\; 1+2,\\; 2) = (5, 3, 2)$. Demak $\\mu_1=2, \\mu_2=1, \\mu_3=2$."
        },
        {
            "q": "Vektorlarning skalyar ko‘paytmasi xossalariga (11-slayd) ko‘ra, $(X, X) = 0$ tenglik qachon va faqat qachon o‘rinli bo‘ladi?",
            "opts": [
                "Faqat va faqat $X = \\Theta = (0, 0, \\dots, 0)^T$ nol vektor bo‘lganda",
                "$X$ birlik vektor bo‘lganda",
                "$X$ ning koordinatalari yig‘indisi $0$ ga teng bo‘lganda (masalan $(1, -1)^T$ da)",
                "Ixtiyoriy manfiy koordinatali vektorda"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "7-ma’ruza (11-slayd, 2-xossa): $(X, X) = x_1^2 + \\dots + x_n^2 = 0 \\iff X = \\Theta$."
        },
        {
            "q": "Agar uchta $\\vec{a}, \\vec{b}, \\vec{c}$ vektordan yasalgan parallelepiped hajmi $V = 12$ ga teng bo‘lsa, shu vektorlardan yasalgan uchburchakli piramida (tetraedr) hajmi nimaga teng bo‘ladi?",
            "opts": [
                "$V_{\\text{pir}} = \\frac{1}{6} V = 2$",
                "$V_{\\text{pir}} = \\frac{1}{3} V = 4$",
                "$V_{\\text{pir}} = \\frac{1}{2} V = 6$",
                "$V_{\\text{pir}} = 12$"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "Analitik va chiziqli algebrada uchta vektordan yasalgan tetraedr hajmi parallelepiped hajmining $\\frac{1}{6}$ qismiga teng: $V_{\\text{pir}} = \\frac{1}{6}|([\\vec{a}\\times\\vec{b}]\\cdot\\vec{c})| = \\frac{12}{6} = 2$."
        },
        {
            "q": "$\\mathbb{R}^4$ fazoda $V = \\{(x_1, x_2, x_3, x_4) : x_1 - 2x_3 = 0\\}$ chiziqli qism fazoning o‘lchami (bazisidagi vektorlar soni) nechaga teng?",
            "opts": [
                "$3$ ga teng (chunki $n = 4$ va $r = 1$ ta tenglama: $n - r = 3$)",
                "$4$ ga teng",
                "$1$ ga teng",
                "$2$ ga teng"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "7-ma’ruza (28-slayd): $V = \\{(2x_3, x_2, x_3, x_4)\\}$ da 3 ta erkli parametr ($x_2, x_3, x_4$) bor, demak qism fazo o‘lchami $\\dim V = 4 - 1 = 3$."
        }
    ]
    # Fix question 11 in t7:
    t7[10]["opts"] = ["$V = 2$", "$V = 15$", "$V = 26$", "$V = 0$ (komplanar)"]

    # =========================================================================
    # MAVZU 8: Ortogonal va ortonormal vektorlar, Gramm-Shmidt (30 ta savol)
    # =========================================================================
    t8 = [
        {
            "q": "Ma’ruzadagi 7-slayd misoli: $A = (2,\\; 5,\\; 3,\\; -4)^T$ va $B = (-1,\\; 5,\\; 6,\\; 7)^T$ vektorlar uchun $5A + 7B - 2A$ ifodani hisoblang.",
            "opts": [
                "$(-1,\\; 50,\\; 51,\\; 37)^T$",
                "$(1,\\; 50,\\; 51,\\; -37)^T$",
                "$(13,\\; 50,\\; 51,\\; 37)^T$",
                "$(-1,\\; 35,\\; 42,\\; 49)^T$"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "8-ma’ruza (7-slayd): $5A + 7B - 2A = 3A + 7B = (6, 15, 9, -12)^T + (-7, 35, 42, 49)^T = (-1, 50, 51, 37)^T$."
        },
        {
            "q": "$n$ o‘lchovli $m$ ta $A_1, A_2, \\dots, A_m$ vektorlardan tuzilgan $A$ matritsaning rangi $r(A)$ orqali vektorlarning chiziqli erkliligi qanday aniqlanadi?",
            "opts": [
                "Agar $r(A) = m$ bo‘lsa vektorlar sistemasi chiziqli erkli; agar $r(A) < m$ bo‘lsa chiziqli bog‘liq bo‘ladi",
                "Agar $r(A) = 0$ bo‘lsa chiziqli erkli; agar $r(A) = m$ bo‘lsa chiziqli bog‘liq bo‘ladi",
                "Agar $r(A) > m$ bo‘lsa chiziqli erkli bo‘ladi",
                "Matritsa rangi orqali chiziqli erklilikni aniqlab bo‘lmaydi"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "8-ma’ruza (11-slayd): Agar vektorlar sistemasida $r(A) < m$ bo‘lsa, u holda vektorlar sistemasi chiziqli bog‘liq, agar $r(A) = m$ bo‘lsa, chiziqli erkli bo‘ladi."
        },
        {
            "q": "Ma’ruzadagi 12-slayd misoli: $A_1(1,\\; 4,\\; 5)$, $A_2(2,\\; -1,\\; 1)$ va $A_3(-1,\\; 1,\\; 3)$ vektorlardan tuzilgan determinant $M_3$ ni hisoblang va sistema chiziqli erkli yoki bog‘liqligini aniqlang.",
            "opts": [
                "$M_3 = -27 \\ne 0,\\quad r(A) = m = 3$, demak vektorlar sistemasi chiziqli erkli",
                "$M_3 = 0,\\quad r(A) = 2 < 3$, demak vektorlar sistemasi chiziqli bog‘liq",
                "$M_3 = 27 \\ne 0$, ammo vektorlar sistemasi chiziqli bog‘liq",
                "$M_3 = -15 \\ne 0,\\quad r(A) = 2$"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "8-ma’ruza (12-slayd): $M_3 = \\begin{vmatrix} 1 & 2 & -1 \\\\ 4 & -1 & 1 \\\\ 5 & 1 & 3 \\end{vmatrix} = -3 - 4 + 10 - 5 - 1 - 24 = -27 \\ne 0 \\implies r(A) = 3 = m$, sistema erkli."
        },
        {
            "q": "Ikkita $n$ o‘lchovli nolmas $A_1$ va $A_2$ vektorlar qachon o‘zaro «ortogonal vektorlar» deyiladi?",
            "opts": [
                "Ularning skalyar ko‘paytmasi nolga teng bo‘lsa: $(A_1, A_2) = 0$ (orasidagi burchak $\\pi/2$ ga teng bo‘lsa)",
                "Ularning skalyar ko‘paytmasi $1$ ga teng bo‘lsa: $(A_1, A_2) = 1$",
                "Ularning uzunliklari o‘zaro teng bo‘lsa: $|A_1| = |A_2|$",
                "Ularning mos koordinatalari proporsional bo‘lsa"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "8-ma’ruza (13-15-slaydlar): Skalyar ko‘paytmasi nolga teng bo‘lgan ($(A_1, A_2) = 0$) vektorlar o‘zaro ortogonal (perpendikulyar) vektorlar deyiladi."
        },
        {
            "q": "Ma’ruzadagi 13-slayd misoli: $A_1(-1,\\; 2,\\; 0,\\; 3)$ va $A_2(4,\\; 2,\\; -5,\\; 0)$ vektorlar o‘zaro ortogonalmi?",
            "opts": [
                "Ha, ortogonal, chunki $(A_1, A_2) = -1\\cdot 4 + 2\\cdot 2 + 0\\cdot(-5) + 3\\cdot 0 = -4 + 4 + 0 + 0 = 0$",
                "Yo‘q, chunki $(A_1, A_2) = 8 \\ne 0$",
                "Yo‘q, chunki ularning uzunliklari $1$ ga teng emas",
                "Ha, chunki ularning koordinatalari yig‘indisi $0$ ga teng"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "8-ma’ruza (13-slayd): $(A_1, A_2) = -4 + 4 + 0 + 0 = 0$, demak ortogonal."
        },
        {
            "q": "Ma’ruzadagi 15-16-slaydlar misoli: $a$ parametrning qanday qiymatida $X = (3,\\; 0,\\; a,\\; -1)^T$ va $Y = (-2,\\; 5,\\; 6,\\; 0)^T$ vektorlar o‘zaro ortogonal bo‘ladi?",
            "opts": [
                "$a = 1$",
                "$a = -1$",
                "$a = 6$",
                "$a = 0$"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "8-ma’ruza (15-16-slaydlar): $(X, Y) = 3(-2) + 0\\cdot 5 + a\\cdot 6 + (-1)\\cdot 0 = 6a - 6 = 0 \\implies a = 1$."
        },
        {
            "q": "$k$ parametrning qanday qiymatida $X = (2,\\; k,\\; -3,\\; 4)^T$ va $Y = (3,\\; -2,\\; 5,\\; k)^T$ vektorlar o‘zaro ortogonal bo‘ladi?",
            "opts": [
                "$k = 4.5$",
                "$k = -4.5$",
                "$k = 3$",
                "$k = 2$"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "$(X, Y) = 6 - 2k - 15 + 4k = 2k - 9 = 0 \\implies k = 4.5$."
        },
        {
            "q": "Ma’ruzadagi 17-slayd misoli: $A_1(3,\\; 2,\\; 1)$, $A_2(2,\\; -3,\\; 0)$ va $A_3(-3,\\; -2,\\; 13)$ vektorlar sistemasi haqida qaysi mulohaza to‘g‘ri?",
            "opts": [
                "Sistema ortogonal vektorlar sistemasidir, chunki $(A_1, A_2) = 0,\\; (A_1, A_3) = 0$ va $(A_2, A_3) = 0$",
                "Sistema ortonormal bazisdir, chunki har bir vektor uzunligi $1$ ga teng",
                "Sistema chiziqli bog‘liq sistemadir",
                "$A_1$ va $A_2$ ortogonal, ammo $A_2$ va $A_3$ ortogonal emas"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "8-ma’ruza (17-slayd): $(A_1,A_2)=6-6+0=0$; $(A_1,A_3)=-9-4+13=0$; $(A_2,A_3)=-6+6+0=0$. Juft-juft ortogonal bo‘lgani uchun ortogonal vektorlar sistemasidir."
        },
        {
            "q": "«Evklid fazosi» ($E^n$) va «ortonormal vektorlar sistemasi» deb nimaga aytiladi?",
            "opts": [
                "Elementlari orasida skalyar ko‘paytma aniqlangan chiziqli fazoga Evklid fazosi deyiladi; juft-juft ortogonal va har birining uzunligi $|\\vec{a}_i| = 1$ bo‘lgan sistemaga ortonormal sistema deyiladi",
                "Faqat kompleks sonlardan iborat fazoga Evklid fazosi deyiladi; uzunligi $0$ ga teng vektorlarga ortonormal deyiladi",
                "Skalyar ko‘paytmasi aniqlanmagan fazoga Evklid fazosi deyiladi",
                "Barcha vektorlari kollinear bo‘lgan sistemaga ortonormal sistema deyiladi"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "8-ma’ruza (18-19, 32-slaydlar): Skalyar ko‘paytma kiritilgan chiziqli fazo Evklid fazosi ($E^n$) deyiladi. Har bir vektori normallangan ($|B_i|=1$) ortogonal sistema ortonormal sistema deyiladi."
        },
        {
            "q": "Evklid fazosining ortonormal bazisi $\\{\\vec{e}_1, \\vec{e}_2, \\dots, \\vec{e}_n\\} \\subset E^n$ uchun $(\\vec{e}_i, \\vec{e}_k)$ skalyar ko‘paytma nimaga teng?",
            "opts": [
                "$i = k$ bo‘lsa $1$ ga teng; $i \\ne k$ bo‘lsa $0$ ga teng (Kroneker deltasi $\\delta_{ik}$)",
                "$i = k$ bo‘lsa $0$ ga teng; $i \\ne k$ bo‘lsa $1$ ga teng",
                "Har doim $1$ ga teng",
                "$i + k$ ga teng"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "8-ma’ruza (20-slayd): $(\\vec{e}_i, \\vec{e}_k) = \\begin{cases} 1, & i = k \\\\ 0, & i \\ne k \\end{cases}$."
        },
        {
            "q": "Nolmas vektorlardan iborat har qanday ortogonal vektorlar sistemasi chiziqli erkli bo‘ladimi yoki chiziqli bog‘liq?",
            "opts": [
                "Har doim chiziqli erkli sistema bo‘ladi (23-slayd, Izoh)",
                "Har doim chiziqli bog‘liq sistema bo‘ladi",
                "Faqat 2 o‘lchovli fazoda chiziqli erkli bo‘ladi",
                "Uzunliklari $1$ ga teng bo‘lsagina chiziqli erkli bo‘ladi"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "8-ma’ruza (23-slayd): Izoh: Har qanday nolmas vektorlardan iborat ortogonal vektorlar sistemasi chiziqli erkli sistemadir."
        },
        {
            "q": "Chiziqli erkli $A_1, A_2, \\dots, A_k$ vektorlar sistemasidan ortogonal $B_1, B_2, \\dots, B_k$ vektorlar sistemasini qurishning Gramm-Shmidt formulasi qaysi javobda to‘g‘ri berilgan?",
            "opts": [
                "$B_1 = A_1,\\qquad B_t = A_t - \\sum_{i=1}^{t-1} \\frac{(B_i, A_t)}{(B_i, B_i)} B_i \\quad (t = 2, 3, \\dots, k)$",
                "$B_1 = A_1,\\qquad B_t = A_t + \\sum_{i=1}^{t-1} (B_i, A_t) B_i$",
                "$B_t = \\frac{A_t}{|A_t|}$",
                "$B_t = A_t - A_{t-1}$"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "8-ma’ruza (22, 29-slaydlar): Gramm-Shmidt ortogonallash formulasi: $B_1 = A_1,\\; B_t = A_t - \\sum_{i=1}^{t-1} \\frac{(B_i, A_t)}{(B_i, B_i)} B_i$."
        },
        {
            "q": "Ma’ruzadagi 24-25-slaydlar misoli: $\\vec{a}_1 = (2, 1, 3, -1),\\; \\vec{a}_2 = (7, 4, 3, -3),\\; \\vec{a}_3 = (1, 1, -6, 0),\\; \\vec{a}_4 = (5, 7, 7, 8)$ vektorlar sistemasini tekshirganda qaysi vektor chiziqli bog‘liq bo‘lib chiqadi va qaysi 3 tasi bazis tashkil qiladi?",
            "opts": [
                "$\\vec{a}_3 = \\vec{a}_2 - 3\\vec{a}_1$ chiziqli bog‘liq; $\\vec{a}_1, \\vec{a}_2, \\vec{a}_4$ vektorlar bazis tashkil qiladi",
                "$\\vec{a}_4$ chiziqli bog‘liq; $\\vec{a}_1, \\vec{a}_2, \\vec{a}_3$ bazis tashkil qiladi",
                "Barcha 4 ta vektor chiziqli erkli",
                "$\\vec{a}_1$ va $\\vec{a}_2$ kollinear"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "8-ma’ruza (25-slayd): 2-satrdan 1-satrning 3 baravarini ayirsak $(7-6, 4-3, 3-9, -3+3) = (1, 1, -6, 0) = \\vec{a}_3$ hosil bo‘ladi. Demak $\\vec{a}_1, \\vec{a}_2, \\vec{a}_4$ bazis tashkil qiladi."
        },
        {
            "q": "Ma’ruzadagi 26-27-slaydlar misoli: $\\vec{a}_1 = (2,\\; 1,\\; 3,\\; -1)$ va $\\vec{a}_2 = (7,\\; 4,\\; 3,\\; -3)$ vektorlarni Gramm-Shmidt formulasi bilan ortogonallashda $\\vec{b}_1 = \\vec{a}_1$ bo‘lsa, $\\vec{b}_2 = \\vec{a}_2 - \\frac{\\vec{b}_1 \\cdot \\vec{a}_2}{\\vec{b}_1 \\cdot \\vec{b}_1}\\vec{b}_1$ vektorni toping.",
            "opts": [
                "$\\vec{b}_2 = (3,\\; 2,\\; -3,\\; -1)$",
                "$\\vec{b}_2 = (5,\\; 3,\\; 0,\\; -2)$",
                "$\\vec{b}_2 = (1,\\; 5,\\; 1,\\; 10)$",
                "$\\vec{b}_2 = (-3,\\; -2,\\; 3,\\; 1)$"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "8-ma’ruza (27-slayd): $\\vec{b}_1 \\cdot \\vec{a}_2 = 14 + 4 + 9 + 3 = 30$, $\\vec{b}_1 \\cdot \\vec{b}_1 = 4 + 1 + 9 + 1 = 15$. Nisbat $30/15 = 2$. Demak $\\vec{b}_2 = (7,4,3,-3) - 2(2,1,3,-1) = (3, 2, -3, -1)$."
        },
        {
            "q": "Ma’ruzadagi 27-slayd misoli: Yuqoridagi masalada $\\vec{a}_4 = (5,\\; 7,\\; 7,\\; 8)$ vektor uchun uchinchi ortogonal vektor $\\vec{b}_3 = \\vec{a}_4 - \\frac{\\vec{b}_1 \\cdot \\vec{a}_4}{\\vec{b}_1 \\cdot \\vec{b}_1}\\vec{b}_1 - \\frac{\\vec{b}_2 \\cdot \\vec{a}_4}{\\vec{b}_2 \\cdot \\vec{b}_2}\\vec{b}_2$ ni toping.",
            "opts": [
                "$\\vec{b}_3 = (1,\\; 5,\\; 1,\\; 10)$",
                "$\\vec{b}_3 = (3,\\; 2,\\; -3,\\; -1)$",
                "$\\vec{b}_3 = (5,\\; 7,\\; 7,\\; 8)$",
                "$\\vec{b}_3 = (0,\\; 4,\\; 4,\\; 9)$"
            ],
            "ans": 0,
            "diff": "Qiyin",
            "exp": "8-ma’ruza (27-slayd): $\\vec{b}_1 \\cdot \\vec{a}_4 = 10+7+21-8 = 30 \\implies 30/15 = 2$. $\\vec{b}_2 \\cdot \\vec{a}_4 = 15+14-21-8 = 0$. Demak $\\vec{b}_3 = \\vec{a}_4 - 2\\vec{b}_1 = (5,7,7,8) - (4,2,6,-2) = (1, 5, 1, 10)$."
        },
        {
            "q": "Ma’ruzadagi 28-slayd misoli: Hosil bo‘lgan $\\vec{b}_1 = (2, 1, 3, -1)$, $\\vec{b}_2 = (3, 2, -3, -1)$ va $\\vec{b}_3 = (1, 5, 1, 10)$ ortogonal vektorlarni normallashtirishda ularning uzunliklari $|\\vec{b}_1|, |\\vec{b}_2|, |\\vec{b}_3|$ nimaga teng?",
            "opts": [
                "$|\\vec{b}_1| = \\sqrt{15},\\qquad |\\vec{b}_2| = \\sqrt{23},\\qquad |\\vec{b}_3| = \\sqrt{127}$",
                "$|\\vec{b}_1| = 15,\\qquad |\\vec{b}_2| = 23,\\qquad |\\vec{b}_3| = 127$",
                "$|\\vec{b}_1| = \\sqrt{14},\\qquad |\\vec{b}_2| = \\sqrt{22},\\qquad |\\vec{b}_3| = \\sqrt{126}$",
                "$|\\vec{b}_1| = 5,\\qquad |\\vec{b}_2| = 5,\\qquad |\\vec{b}_3| = 11$"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "8-ma’ruza (28-slayd): $|\\vec{b}_1| = \\sqrt{4+1+9+1} = \\sqrt{15}$; $|\\vec{b}_2| = \\sqrt{9+4+9+1} = \\sqrt{23}$; $|\\vec{b}_3| = \\sqrt{1+25+1+100} = \\sqrt{127}$."
        },
        {
            "q": "Ma’ruzadagi 30-slayd misoli: $A_1(1,\\; 1,\\; 1)$, $A_2(0,\\; 1,\\; 1)$ va $A_3(0,\\; 0,\\; 1)$ vektorlar sistemasi ustida Gramm-Shmidt formulalari yordamida qurilgan $B_1, B_2, B_3$ ortogonal sistemani toping.",
            "opts": [
                "$B_1 = (1,\\; 1,\\; 1),\\qquad B_2 = \\left(-\\frac{2}{3},\\; \\frac{1}{3},\\; \\frac{1}{3}\\right),\\qquad B_3 = \\left(0,\\; -\\frac{1}{2},\\; \\frac{1}{2}\\right)$",
                "$B_1 = (1,\\; 1,\\; 1),\\qquad B_2 = \\left(\\frac{2}{3},\\; -\\frac{1}{3},\\; -\\frac{1}{3}\\right),\\qquad B_3 = \\left(0,\\; \\frac{1}{2},\\; \\frac{1}{2}\\right)$",
                "$B_1 = (1,\\; 0,\\; 0),\\qquad B_2 = (0,\\; 1,\\; 0),\\qquad B_3 = (0,\\; 0,\\; 1)$",
                "$B_1 = (1,\\; 1,\\; 1),\\qquad B_2 = (-1,\\; 1,\\; 1),\\qquad B_3 = (0,\\; -1,\\; 1)$"
            ],
            "ans": 0,
            "diff": "Qiyin",
            "exp": "8-ma’ruza (30-31-slaydlar): $B_1 = (1,1,1)$; $B_2 = (0,1,1) - \\frac{2}{3}(1,1,1) = (-2/3, 1/3, 1/3)$; $B_3 = (0,0,1) - \\frac{1}{3}(1,1,1) - \\frac{1/3}{2/3}(-2/3, 1/3, 1/3) = (0, -1/2, 1/2)$."
        },
        {
            "q": "Ma’ruzadagi 30-slayd misolidagi $B_1 = (1, 1, 1)$, $B_2 = (-\\frac{2}{3}, \\frac{1}{3}, \\frac{1}{3})$, $B_3 = (0, -\\frac{1}{2}, \\frac{1}{2})$ ortogonal vektorlarni normallashtirib, ortonormal bazis $\\vec{e}_1, \\vec{e}_2, \\vec{e}_3$ ni toping.",
            "opts": [
                "$\\vec{e}_1 = \\frac{1}{\\sqrt{3}}(1, 1, 1),\\qquad \\vec{e}_2 = \\frac{1}{\\sqrt{6}}(-2, 1, 1),\\qquad \\vec{e}_3 = \\frac{1}{\\sqrt{2}}(0, -1, 1)$",
                "$\\vec{e}_1 = \\frac{1}{3}(1, 1, 1),\\qquad \\vec{e}_2 = \\frac{1}{6}(-2, 1, 1),\\qquad \\vec{e}_3 = \\frac{1}{2}(0, -1, 1)$",
                "$\\vec{e}_1 = (1, 1, 1),\\qquad \\vec{e}_2 = (-2, 1, 1),\\qquad \\vec{e}_3 = (0, -1, 1)$",
                "$\\vec{e}_1 = \\frac{1}{\\sqrt{3}}(1, 1, 1),\\qquad \\vec{e}_2 = \\frac{1}{\\sqrt{3}}(-2, 1, 1),\\qquad \\vec{e}_3 = \\frac{1}{\\sqrt{3}}(0, -1, 1)$"
            ],
            "ans": 0,
            "diff": "Qiyin",
            "exp": "Har bir vektorni o‘z uzunligiga bo‘lamiz: $|B_1|=\\sqrt{3}$, $|B_2|=\\frac{\\sqrt{6}}{3}$, $|B_3|=\\frac{\\sqrt{2}}{2}$."
        },
        {
            "q": "Nol bo‘lmagan $B = (3,\\; -4,\\; 0,\\; 12)^T$ vektorning normallangan (birlik) vektori $\\frac{B}{|B|}$ ni toping.",
            "opts": [
                "$\\left(\\frac{3}{13},\\; -\\frac{4}{13},\\; 0,\\; \\frac{12}{13}\\right)^T$",
                "$\\left(\\frac{3}{5},\\; -\\frac{4}{5},\\; 0,\\; \\frac{12}{5}\\right)^T$",
                "$\\left(\\frac{3}{19},\\; -\\frac{4}{19},\\; 0,\\; \\frac{12}{19}\\right)^T$",
                "$(1,\\; -1,\\; 0,\\; 1)^T$"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "8-ma’ruza (32-slayd): $|B| = \\sqrt{3^2 + (-4)^2 + 0^2 + 12^2} = \\sqrt{9 + 16 + 144} = \\sqrt{169} = 13$. Demak $B/|B| = (3/13, -4/13, 0, 12/13)^T$."
        },
        {
            "q": "$\\mathbb{R}^2$ fazoda $A_1 = (3,\\; 4)$ va $A_2 = (1,\\; 2)$ chiziqli erkli vektorlarni Gramm-Shmidt usulida ortogonallash natijasida $B_1 = A_1$ bo‘lsa, $B_2$ vektorni toping.",
            "opts": [
                "$B_2 = \\left(-\\frac{4}{25},\\; \\frac{3}{25}\\right)$",
                "$B_2 = \\left(-\\frac{12}{25},\\; \\frac{9}{25}\\right)$",
                "$B_2 = (-4,\\; 3)$",
                "$B_2 = \\left(\\frac{4}{5},\\; -\\frac{3}{5}\\right)$"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "$(B_1, A_2) = 3\\cdot 1 + 4\\cdot 2 = 11$; $(B_1, B_1) = 9 + 16 = 25$. U holda $B_2 = (1, 2) - \\frac{11}{25}(3, 4) = \\left(\\frac{25-33}{25},\\; \\frac{50-44}{25}\\right) = \\left(-\\frac{8}{25},\\; \\frac{6}{25}\\right)$!"
        },
        {
            "q": "$\\mathbb{R}^2$ fazoda $A_1 = (1,\\; 1)$ va $A_2 = (0,\\; 2)$ vektorlarni Gramm-Shmidt usulida ortogonallashtirib, so‘ngra normallashtirsak, qanday ortonormal bazis hosil bo‘ladi?",
            "opts": [
                "$\\vec{e}_1 = \\left(\\frac{1}{\\sqrt{2}},\\; \\frac{1}{\\sqrt{2}}\\right),\\qquad \\vec{e}_2 = \\left(-\\frac{1}{\\sqrt{2}},\\; \\frac{1}{\\sqrt{2}}\\right)$",
                "$\\vec{e}_1 = (1,\\; 1),\\qquad \\vec{e}_2 = (-1,\\; 1)$",
                "$\\vec{e}_1 = \\left(\\frac{1}{2},\\; \\frac{1}{2}\\right),\\qquad \\vec{e}_2 = \\left(-\\frac{1}{2},\\; \\frac{1}{2}\\right)$",
                "$\\vec{e}_1 = (1,\\; 0),\\qquad \\vec{e}_2 = (0,\\; 1)$"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "$B_1 = (1, 1)$; $B_2 = (0, 2) - \\frac{2}{2}(1, 1) = (-1, 1)$. Normallashtirsak: $|B_1|=\\sqrt{2}, |B_2|=\\sqrt{2}$, natijada $\\vec{e}_1 = (1/\\sqrt{2}, 1/\\sqrt{2})$ va $\\vec{e}_2 = (-1/\\sqrt{2}, 1/\\sqrt{2})$."
        },
        {
            "q": "Quyidagi $2$ o‘lchovli vektorlar juftliklaridan qaysi biri $\\mathbb{R}^2$ fazoda ORTONORMAL bazis tashkil qiladi?",
            "opts": [
                "$\\vec{e}_1 = (0.6,\\; 0.8),\\qquad \\vec{e}_2 = (-0.8,\\; 0.6)$",
                "$\\vec{e}_1 = (3,\\; 4),\\qquad \\vec{e}_2 = (-4,\\; 3)$",
                "$\\vec{e}_1 = (1,\\; 0),\\qquad \\vec{e}_2 = (1,\\; 1)$",
                "$\\vec{e}_1 = (0.5,\\; 0.5),\\qquad \\vec{e}_2 = (-0.5,\\; 0.5)$"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "$(\\vec{e}_1, \\vec{e}_2) = -0.48 + 0.48 = 0$ (ortogonal) va $|\\vec{e}_1| = \\sqrt{0.36 + 0.64} = 1,\\; |\\vec{e}_2| = \\sqrt{0.64 + 0.36} = 1$ (birlik vektorlar)."
        },
        {
            "q": "$\\mathbb{R}^3$ fazoda $\\vec{a}_1 = (1,\\; 2,\\; -2)$ va $\\vec{a}_2 = (2,\\; 1,\\; 2)$ ortogonal vektorlar berilgan. Shu ikkala vektorga ham ortogonal bo‘lgan va uzunligi $3$ ga teng bo‘lgan $\\vec{a}_3$ vektorni toping.",
            "opts": [
                "$\\vec{a}_3 = (2,\\; -2,\\; -1)$",
                "$\\vec{a}_3 = (1,\\; -1,\\; -1)$",
                "$\\vec{a}_3 = (2,\\; 2,\\; -1)$",
                "$\\vec{a}_3 = (-2,\\; -2,\\; 1)$"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "$(2, -2, -1)$ ni tekshiramiz: $(\\vec{a}_1, \\vec{a}_3) = 2 - 4 + 2 = 0$; $(\\vec{a}_2, \\vec{a}_3) = 4 - 2 - 2 = 0$; uzunligi $|\\vec{a}_3| = \\sqrt{4+4+1} = 3$."
        },
        {
            "q": "Agar $\\{\\vec{e}_1, \\vec{e}_2, \\vec{e}_3\\}$ ortonormal bazis bo‘lib, $\\vec{x} = 2\\vec{e}_1 - 3\\vec{e}_2 + 6\\vec{e}_3$ bo‘lsa, $(\\vec{x}, \\vec{e}_2)$ skalyar ko‘paytmani va $|\\vec{x}|$ uzunlikni toping.",
            "opts": [
                "$(\\vec{x}, \\vec{e}_2) = -3;\\qquad |\\vec{x}| = 7$",
                "$(\\vec{x}, \\vec{e}_2) = 3;\\qquad |\\vec{x}| = 49$",
                "$(\\vec{x}, \\vec{e}_2) = 0;\\qquad |\\vec{x}| = 5$",
                "$(\\vec{x}, \\vec{e}_2) = -3;\\qquad |\\vec{x}| = \\sqrt{11}$"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "Ortonormal bazisda $(\\vec{e}_i, \\vec{e}_k) = \\delta_{ik}$ bo‘lgani uchun $(\\vec{x}, \\vec{e}_2) = 2(0) - 3(1) + 6(0) = -3$, va $|\\vec{x}| = \\sqrt{2^2 + (-3)^2 + 6^2} = \\sqrt{49} = 7$."
        },
        {
            "q": "Agar $\\vec{a}$ va $\\vec{b}$ o‘zaro ortogonal vektorlar bo‘lib, $|\\vec{a}| = 5$ va $|\\vec{b}| = 12$ bo‘lsa, $|\\vec{a} + \\vec{b}|$ va $|\\vec{a} - \\vec{b}|$ uzunliklarni toping.",
            "opts": [
                "$|\\vec{a} + \\vec{b}| = 13,\\qquad |\\vec{a} - \\vec{b}| = 13$",
                "$|\\vec{a} + \\vec{b}| = 17,\\qquad |\\vec{a} - \\vec{b}| = 7$",
                "$|\\vec{a} + \\vec{b}| = 13,\\qquad |\\vec{a} - \\vec{b}| = 7$",
                "$|\\vec{a} + \\vec{b}| = 60,\\qquad |\\vec{a} - \\vec{b}| = 0$"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "Ortogonal vektorlar uchun $(\\vec{a}, \\vec{b}) = 0$, shuning uchun Pifagor teoremasiga ko‘ra $|\\vec{a} \\pm \\vec{b}| = \\sqrt{|\\vec{a}|^2 + |\\vec{b}|^2} = \\sqrt{25 + 144} = \\sqrt{169} = 13$."
        },
        {
            "q": "Agar kvadrat $Q$ matritsaning ustunlari ortonormal vektorlar sistemasini tashkil qilsa (ortogonal matritsa), $Q^T \\cdot Q$ ko‘paytma nimaga teng bo‘ladi?",
            "opts": [
                "$Q^T \\cdot Q = E$ (birlik matritsa), ya’ni $Q^{-1} = Q^T$",
                "$Q^T \\cdot Q = O$ (nol matritsa)",
                "$Q^T \\cdot Q = 2E$",
                "$Q^T \\cdot Q = -E$"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "$Q^T Q$ matritsaning $(i, k)$-elementi $(\\vec{e}_i, \\vec{e}_k) = \\delta_{ik}$ ga teng, ya’ni bosh diagonalda 1 lar, qolgan joylarda 0 lar hosil bo‘ladi: $Q^T Q = E$."
        },
        {
            "q": "$A_1 = (1,\\; 2,\\; 3)$, $A_2 = (2,\\; 4,\\; 6)$ va $A_3 = (1,\\; -1,\\; 0)$ vektorlar sistemasi chiziqli erklimi?",
            "opts": [
                "Yo‘q, chiziqli bog‘liq, chunki $A_2 = 2A_1$ va matritsa rangi $r(A) = 2 < 3$",
                "Ha, chiziqli erkli, chunki $3$ ta vektor berilgan",
                "Ha, ortogonal sistema",
                "Ha, chunki $A_3$ da nol bor"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "$2A_1 - 1A_2 + 0A_3 = \\Theta$ tenglik noldan farqli koeffitsiyentlarda bajariladi ($r(A)=2 < 3$), demak chiziqli bog‘liq."
        },
        {
            "q": "Gramm-Shmidt ortogonallash jarayonida $B_2 = A_2 - \\alpha B_1$ formuladagi $\\alpha = \\frac{(B_1, A_2)}{(B_1, B_1)}$ koeffitsiyent qanday shartdan kelib chiqadi?",
            "opts": [
                "$(B_1, B_2) = 0$ ortogonallik shartidan: $(B_1, A_2 - \\alpha B_1) = (B_1, A_2) - \\alpha (B_1, B_1) = 0$",
                "$|B_2| = 1$ normallash shartidan",
                "$\\det(B) = 1$ shartidan",
                "$B_1 + B_2 = A_1 + A_2$ shartidan"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "8-ma’ruza (29-slayd): $B_2$ vektor $B_1$ ga ortogonal bo‘lishi uchun $(B_1, B_2) = 0 \\implies (B_1, A_2) - \\alpha(B_1, B_1) = 0 \\implies \\alpha = \\frac{(B_1, A_2)}{(B_1, B_1)}$."
        },
        {
            "q": "$\\vec{x} = (1,\\; -2,\\; 2,\\; 4)^T$ vektorni normallashtirishdan hosil bo‘lgan birlik vektorning barcha koordinatalari kvadratlari yig‘indisi nimaga teng?",
            "opts": [
                "$1$ ga teng",
                "$25$ ga teng",
                "$5$ ga teng",
                "$0$ ga teng"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "Har qanday normallangan (birlik) vektorning uzunligi $1$ ga teng, demak uning koordinatalari kvadratlari yig‘indisi ham $1^2 = 1$ ga teng."
        },
        {
            "q": "$E^4$ Evklid fazosida $\\vec{e}_1 = (\\frac{1}{2}, \\frac{1}{2}, \\frac{1}{2}, \\frac{1}{2})^T$ va $\\vec{e}_2 = (\\frac{1}{2}, \\frac{1}{2}, -\\frac{1}{2}, -\\frac{1}{2})^T$ ortonormal vektorlar berilgan. Quyidagi vektorlardan qaysi biri ularni 3-ortonormal vektorgacha to‘ldira oladi?",
            "opts": [
                "$\\vec{e}_3 = \\left(\\frac{1}{2},\\; -\\frac{1}{2},\\; \\frac{1}{2},\\; -\\frac{1}{2}\\right)^T$",
                "$\\vec{e}_3 = \\left(\\frac{1}{2},\\; \\frac{1}{2},\\; \\frac{1}{2},\\; -\\frac{1}{2}\\right)^T$",
                "$\\vec{e}_3 = (1,\\; -1,\\; 1,\\; -1)^T$",
                "$\\vec{e}_3 = (1,\\; 0,\\; 0,\\; 0)^T$"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "Adamar (Hadamard) tipidagi ortonormal sistema: $(\\vec{e}_1, \\vec{e}_3) = 0$, $(\\vec{e}_2, \\vec{e}_3) = 0$ va $|\\vec{e}_3| = \\sqrt{4 \\cdot \\frac{1}{4}} = 1$."
        }
    ]
    # Fix question 20 in t8 to match (-8/25, 6/25):
    t8[19]["opts"] = [
        "$B_2 = \\left(-\\frac{8}{25},\\; \\frac{6}{25}\\right)$",
        "$B_2 = \\left(-\\frac{12}{25},\\; \\frac{9}{25}\\right)$",
        "$B_2 = (-4,\\; 3)$",
        "$B_2 = \\left(\\frac{8}{25},\\; -\\frac{6}{25}\\right)$"
    ]

    # =========================================================================
    # MAVZU 9: Aralash Testlar (Kompleks 30 ta savol — barcha 8 mavzu bo'yicha)
    # =========================================================================
    t9 = [
        {
            "q": "[Aralash: 1-2-mavzular] Agar $A = \\begin{pmatrix} 2 & -1 \\\\ 3 & 4 \\end{pmatrix}$ va $B = \\begin{pmatrix} 1 & 2 \\\\ -2 & 0 \\end{pmatrix}$ bo‘lsa, $\\det(A^T + 2B)$ ni hisoblang.",
            "opts": [
                "$12$",
                "$11$",
                "$-12$",
                "$24$"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "$A^T = \\begin{pmatrix} 2 & 3 \\\\ -1 & 4 \\end{pmatrix}$, $2B = \\begin{pmatrix} 2 & 4 \\\\ -4 & 0 \\end{pmatrix}$. U holda $A^T + 2B = \\begin{pmatrix} 4 & 7 \\\\ -5 & 4 \\end{pmatrix}$ va uning determinanti $4\\cdot 4 - 7(-5) = 16 + 35 = 51$."
        },
        {
            "q": "[Aralash: 1-3-mavzular] Agar $A = \\begin{pmatrix} 2 & 1 \\\\ 3 & 2 \\end{pmatrix}$ bo‘lsa, $A + A^{-1}$ yig‘indi matritsani toping.",
            "opts": [
                "$\\begin{pmatrix} 4 & 0 \\\\ 0 & 4 \\end{pmatrix} = 4E$",
                "$\\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix} = E$",
                "$\\begin{pmatrix} 4 & 2 \\\\ 6 & 4 \\end{pmatrix}$",
                "$\\begin{pmatrix} 0 & 2 \\\\ 6 & 0 \\end{pmatrix}$"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "$\\det(A) = 4 - 3 = 1 \\implies A^{-1} = \\begin{pmatrix} 2 & -1 \\\\ -3 & 2 \\end{pmatrix}$. U holda $A + A^{-1} = \\begin{pmatrix} 2+2 & 1-1 \\\\ 3-3 & 2+2 \\end{pmatrix} = \\begin{pmatrix} 4 & 0 \\\\ 0 & 4 \\end{pmatrix} = 4E$."
        },
        {
            "q": "[Aralash: 2-3-mavzular] 3-tartibli kvadrat $A$ matritsa uchun $\\det(A) = 2$ bo‘lsa, $\\det(2A^{-1} \\cdot A^T)$ qiymatini hisoblang.",
            "opts": [
                "$8$",
                "$2$",
                "$4$",
                "$16$"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "$n=3$ bo‘lgani uchun $\\det(2A^{-1} A^T) = 2^3 \\cdot \\det(A^{-1}) \\cdot \\det(A^T) = 8 \\cdot \\frac{1}{\\det A} \\cdot \\det A = 8$."
        },
        {
            "q": "[Aralash: 3-4-mavzular] 4-tartibli $A = \\begin{pmatrix} 1 & 2 & 0 & 0 \\\\ 2 & 5 & 0 & 0 \\\\ 0 & 0 & 3 & 6 \\\\ 0 & 0 & 1 & 2 \\end{pmatrix}$ matritsaning determinanti $\\det(A)$ va rangi $r(A)$ ni toping.",
            "opts": [
                "$\\det(A) = 0,\\qquad r(A) = 3$",
                "$\\det(A) = 1,\\qquad r(A) = 4$",
                "$\\det(A) = 0,\\qquad r(A) = 2$",
                "$\\det(A) = 6,\\qquad r(A) = 4$"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "Yuqori chap blok determinanti $5-4 = 1 \\ne 0$ (rangi 2), quyi o‘ng blok determinanti $6-6 = 0$, ammo $(1, 2) \\ne (0, 0)$ (rangi 1). Demak $\\det(A) = 1 \\cdot 0 = 0$ va $r(A) = 2 + 1 = 3$."
        },
        {
            "q": "[Aralash: 4-5-mavzular] $P = (3, 1, 4, 2)$ o‘rin almashtirishdagi inversiyalar soni $k = \\text{inv}(P)$ ga teng bo‘lsa, 5 ta noma’lumli va rangi $r = k$ bo‘lgan bir jinsli sistemaning FYS da nechta vektor bo‘ladi?",
            "opts": [
                "$2$ ta (chunki $k = \\text{inv}(3,1,4,2) = 3$ va $n - r = 5 - 3 = 2$)",
                "$3$ ta (chunki $k = 2$ va $n - r = 5 - 2 = 3$)",
                "$1$ ta (chunki $k = 4$ va $n - r = 5 - 4 = 1$)",
                "$4$ ta"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "$P=(3,1,4,2)$ da inversiyalar: $(3,1), (3,2), (4,2) \\implies k = 3$. U holda $n - r = 5 - 3 = 2$ ta FYS vektori bor."
        },
        {
            "q": "[Aralash: 5-6-mavzular] 5 ta noma’lumli bir jinsli sistemaning FYS da $3$ ta chiziqli erkli vektor mavjud bo‘lsa, shu sistemaga mos bir jinsli bo‘lmagan sistemada noma’lumlarni bazis va erkli o‘zgaruvchilarga ajratish usullari soni $C_n^r$ nechaga teng?",
            "opts": [
                "$10$ ta (chunki $n - r = 3 \\implies r = 2$ va $C_5^2 = 10$)",
                "$5$ ta (chunki $r = 1$ va $C_5^1 = 5$)",
                "$15$ ta",
                "$6$ ta"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "FYS dagi vektorlar soni $n - r = 3$ bo‘lib, $n = 5$ bo‘lsa, sistema rangi $r = 5 - 3 = 2$. U holda $C_5^2 = \\frac{5!}{2!3!} = 10$."
        },
        {
            "q": "[Aralash: 3-7-mavzular] Bir bazisdan ikkinchi bazisga o‘tish matritsasi $P = \\begin{pmatrix} 2 & 1 \\\\ 5 & 3 \\end{pmatrix}$ berilgan. Eski bazisda $\\vec{x} = (4,\\; 9)^T$ bo‘lgan vektorning yangi bazisdagi koordinatalari $\\vec{x}' = P^{-1}\\vec{x}$ ni toping.",
            "opts": [
                "$\\vec{x}' = (3;\\; -2)^T$",
                "$\\vec{x}' = (-3;\\; 2)^T$",
                "$\\vec{x}' = (17;\\; 47)^T$",
                "$\\vec{x}' = (2;\\; 3)^T$"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "$\\det(P) = 6 - 5 = 1 \\implies P^{-1} = \\begin{pmatrix} 3 & -1 \\\\ -5 & 2 \\end{pmatrix}$. U holda $\\vec{x}' = P^{-1}\\vec{x} = \\begin{pmatrix} 3(4) - 1(9) \\\\ -5(4) + 2(9) \\end{pmatrix} = \\begin{pmatrix} 3 \\\\ -2 \\end{pmatrix}$."
        },
        {
            "q": "[Aralash: 5-8-mavzular] $x_1 + 2x_2 - x_3 = 0$ bitta tenglamadan iborat bir jinsli sistemaning barcha yechimlari to‘plami $\\mathbb{R}^3$ da qism fazo tashkil qiladi. Uning o‘lchamini va $(1, 2, -1)^T$ normal vektorga munosabatini aniqlang.",
            "opts": [
                "O‘lchami $n - r = 3 - 1 = 2$ ga teng bo‘lib, uning har bir yechim vektori $N = (1, 2, -1)^T$ vektorga ortogonaldir",
                "O‘lchami $1$ ga teng va har bir yechimi $N = (1, 2, -1)^T$ ga kollineardir",
                "O‘lchami $3$ ga teng",
                "Qism fazo tashkil qilmaydi"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "$1\\cdot x_1 + 2\\cdot x_2 + (-1)\\cdot x_3 = (N, X) = 0$ tenglama $X$ vektorning $N=(1,2,-1)^T$ vektorga ortogonalligini bildiradi va $n-r = 3-1 = 2$ o‘lchovli tekislik (qism fazo) hosil qiladi."
        },
        {
            "q": "[Aralash: 2-7-mavzular] Uchta $\\vec{a} = (2, 0, 0)$, $\\vec{b} = (1, 3, 0)$ va $\\vec{c} = (4, -2, 5)$ vektorlardan tuzilgan matritsa determinanti nimaga teng va ulardan yasalgan parallelepiped hajmi qancha?",
            "opts": [
                "$\\Delta = 30,\\qquad V_{\\text{par}} = 30$",
                "$\\Delta = 10,\\qquad V_{\\text{par}} = 10$",
                "$\\Delta = 0,\\qquad V_{\\text{par}} = 0$",
                "$\\Delta = -30,\\qquad V_{\\text{par}} = 15$"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "Quyi uchburchakli determinant: $\\Delta = 2 \\cdot 3 \\cdot 5 = 30$, parallelepiped hajmi $V = |\\Delta| = 30$."
        },
        {
            "q": "[Aralash: 3-5-mavzular] Kroneker-Kapelli va Kramer qoidalariga ko‘ra, $n$ ta noma’lumli $n$ ta tenglamalar sistemasida $\\det(A) \\ne 0$ bo‘lsa, $r(A), r(A|B)$ va bazis yechimlar soni haqida nima deyish mumkin?",
            "opts": [
                "$r(A) = r(A|B) = n$; erkli o‘zgaruvchilar yo‘q ($n-r=0$) va yagona yechimning o‘zi yagona bazis yechim hisoblanadi ($C_n^n = 1$)",
                "$r(A) < n$ va cheksiz ko‘p bazis yechim mavjud",
                "$r(A) \\ne r(A|B)$ va bazis yechim mavjud emas",
                "Bazis yechimlar soni $n!$ ga teng"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "$\\det(A) \\ne 0 \\implies r(A) = r(A|B) = n$. Erkli o‘zgaruvchilar soni $n - n = 0$ va $C_n^n = 1$ ta yagona yechim mavjud."
        },
        {
            "q": "[Aralash: 4-8-mavzular] Agar $\\vec{e}_1, \\vec{e}_2, \\vec{e}_3$ vektorlar $\\mathbb{R}^3$ fazoda o‘ng uchlikni tashkil etuvchi ortonormal bazis bo‘lsa, ulardan tuzilgan $3 \\times 3$ matritsaning determinanti nimaga teng?",
            "opts": [
                "$1$ ga teng",
                "$0$ ga teng",
                "$3$ ga teng",
                "$\\sqrt{3}$ ga teng"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "Ortonormal bazis vektorlaridan yasalgan birlik kubning hajmi $1\\cdot 1\\cdot 1 = 1$ ga teng (yoki $Q^T Q = E \\implies (\\det Q)^2 = 1 \\implies \\det Q = 1$)."
        },
        {
            "q": "[Aralash: 1-5-mavzular] $A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$ va $B = \\begin{pmatrix} 5 \\\\ 11 \\end{pmatrix}$ bo‘lsa, $AX = B$ tenglamaning yechimi $X = (x_1, x_2)^T$ uchun $X^T \\cdot X$ (uzunlik kvadrati) ni toping.",
            "opts": [
                "$5$ (chunki $x_1 = 1,\\; x_2 = 2$ va $1^2 + 2^2 = 5$)",
                "$3$ (chunki $x_1 = 1,\\; x_2 = 2$ va $1 + 2 = 3$)",
                "$10$",
                "$25$"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "$\\begin{cases} x_1 + 2x_2 = 5 \\\\ 3x_1 + 4x_2 = 11 \\end{cases} \\implies x_1 = 1,\\; x_2 = 2$. U holda $X^T X = (X, X) = 1^2 + 2^2 = 5$."
        },
        {
            "q": "[Aralash: 6-7-mavzular] Gauss usulida $(A \\mid B)$ matritsani pog‘onali shaklga keltirganda $\\begin{pmatrix} 1 & 2 & 0 & -1 & | & 0 \\\\ 0 & 0 & 1 & 3 & | & 0 \\end{pmatrix}$ bir jinsli sistema hosil bo‘ldi. Uning FYS vektorlari $F_1, F_2$ ni toping ($x_2, x_4$ — erkli).",
            "opts": [
                "$F_1 = (-2,\\; 1,\\; 0,\\; 0)^T,\\qquad F_2 = (1,\\; 0,\\; -3,\\; 1)^T$",
                "$F_1 = (2,\\; 1,\\; 0,\\; 0)^T,\\qquad F_2 = (-1,\\; 0,\\; 3,\\; 1)^T$",
                "$F_1 = (1,\\; 2,\\; 0,\\; -1)^T,\\qquad F_2 = (0,\\; 0,\\; 1,\\; 3)^T$",
                "$F_1 = (-2,\\; 0,\\; 1,\\; 0)^T,\\qquad F_2 = (1,\\; 0,\\; 0,\\; -3)^T$"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "$x_1 = -2x_2 + x_4$ va $x_3 = -3x_4$. 1) $(x_2, x_4) = (1, 0) \\implies F_1 = (-2, 1, 0, 0)^T$; 2) $(x_2, x_4) = (0, 1) \\implies F_2 = (1, 0, -3, 1)^T$."
        },
        {
            "q": "[Aralash: 7-8-mavzular] Yuqoridagi savolda topilgan $F_1 = (-2, 1, 0, 0)^T$ va $F_2 = (1, 0, -3, 1)^T$ fundamental yechimlar uchun $(F_1, F_2)$ skalyar ko‘paytmani va Gramm-Shmidt bo‘yicha $B_2 = F_2 - \\frac{(F_1, F_2)}{(F_1, F_1)} F_1$ ortogonal vektorni toping.",
            "opts": [
                "$(F_1, F_2) = -2;\\qquad B_2 = (0.2,\\; 0.4,\\; -3,\\; 1)^T$",
                "$(F_1, F_2) = 0;\\qquad B_2 = F_2$",
                "$(F_1, F_2) = 2;\\qquad B_2 = (1.8,\\; -0.4,\\; -3,\\; 1)^T$",
                "$(F_1, F_2) = -5;\\qquad B_2 = (-1,\\; 1,\\; -3,\\; 1)^T$"
            ],
            "ans": 0,
            "diff": "Qiyin",
            "exp": "$(F_1, F_2) = (-2)(1) + 1(0) + 0 + 0 = -2$, $(F_1, F_1) = 4 + 1 = 5$. Demak $B_2 = F_2 - \\frac{-2}{5} F_1 = (1, 0, -3, 1)^T + 0.4(-2, 1, 0, 0)^T = (0.2, 0.4, -3, 1)^T$."
        },
        {
            "q": "[Aralash: 2-4-mavzular] $\\Delta = \\begin{vmatrix} 1 & 2 & 3 & 4 \\\\ 0 & 2 & 5 & 9 \\\\ 0 & 0 & 3 & 7 \\\\ 2 & 4 & 6 & 10 \\end{vmatrix}$ 4-tartibli determinantni elementar almashtirish yordamida hisoblang.",
            "opts": [
                "$12$",
                "$0$",
                "$60$",
                "$-12$"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "4-satrdan 1-satrning 2 baravarini ayirsak: $(2-2,\\; 4-4,\\; 6-6,\\; 10-8) = (0, 0, 0, 2)$. Natijada bosh diagonali $(1, 2, 3, 2)$ bo‘lgan yuqori uchburchak determinant hosil bo‘ladi: $\\Delta = 1 \\cdot 2 \\cdot 3 \\cdot 2 = 12$."
        },
        {
            "q": "[Aralash: 1-4-mavzular] $A = \\begin{pmatrix} \\cos\\varphi & -\\sin\\varphi & 0 \\\\ \\sin\\varphi & \\cos\\varphi & 0 \\\\ 0 & 0 & 1 \\end{pmatrix}$ burish matritsasi uchun $\\det(A)$ va $A^{-1}$ ni toping.",
            "opts": [
                "$\\det(A) = 1;\\qquad A^{-1} = A^T = \\begin{pmatrix} \\cos\\varphi & \\sin\\varphi & 0 \\\\ -\\sin\\varphi & \\cos\\varphi & 0 \\\\ 0 & 0 & 1 \\end{pmatrix}$",
                "$\\det(A) = 0;\\qquad A^{-1}$ mavjud emas",
                "$\\det(A) = -1;\\qquad A^{-1} = -A$",
                "$\\det(A) = \\cos 2\\varphi;\\qquad A^{-1} = E$"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "3-satr bo‘yicha yoyilsa $\\det(A) = 1 \\cdot (\\cos^2\\varphi + \\sin^2\\varphi) = 1$. Ustunlari ortonormal bo‘lgani uchun $A^{-1} = A^T$."
        },
        {
            "q": "[Aralash: 3-6-mavzular] Gauss-Jordan usulida $(A \\mid E)$ matritsani almashtirib $\\left(\\begin{smallmatrix} 1 & 0 & | & 4 & -1 \\\\ 0 & 1 & | & -7 & 2 \\end{smallmatrix}\\right)$ hosil qilindi. Boshlang‘ich $A$ matritsani toping!",
            "opts": [
                "$A = \\begin{pmatrix} 2 & 1 \\\\ 7 & 4 \\end{pmatrix}$",
                "$A = \\begin{pmatrix} 4 & -1 \\\\ -7 & 2 \\end{pmatrix}$",
                "$A = \\begin{pmatrix} 2 & -1 \\\\ -7 & 4 \\end{pmatrix}$",
                "$A = \\begin{pmatrix} 4 & 7 \\\\ -1 & 2 \\end{pmatrix}$"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "O‘ng blok $A^{-1} = \\begin{pmatrix} 4 & -1 \\\\ -7 & 2 \\end{pmatrix}$ ni beradi. $(A^{-1})^{-1} = A$ xossasiga ko‘ra ($\\det(A^{-1}) = 8 - 7 = 1$): $A = \\begin{pmatrix} 2 & 1 \\\\ 7 & 4 \\end{pmatrix}$."
        },
        {
            "q": "[Aralash: 5-7-mavzular] $\\mathbb{R}^3$ fazoda $\\vec{a}_1 = (1, 2, 1)^T,\\; \\vec{a}_2 = (2, 3, 1)^T,\\; \\vec{a}_3 = (3, 5, 2)^T$ va $\\vec{b} = (4, 7, 3)^T$ vektorlar berilgan. $x_1 \\vec{a}_1 + x_2 \\vec{a}_2 + x_3 \\vec{a}_3 = \\vec{b}$ vektor tenglama nechta yechimga ega?",
            "opts": [
                "Cheksiz ko‘p yechimga ega, chunki $\\vec{a}_3 = \\vec{a}_1 + \\vec{a}_2$ va $\\vec{b} = 2\\vec{a}_1 + \\vec{a}_2$ ($r(A) = r(A|B) = 2 < 3$)",
                "Yagona yechimga ega ($r(A) = 3$)",
                "Yechimga ega emas ($r(A) = 2 \\ne r(A|B) = 3$)",
                "Faqat nol yechimga ega"
            ],
            "ans": 0,
            "diff": "Qiyin",
            "exp": "$\\vec{a}_1$ va $\\vec{a}_2$ chiziqli erkli ($r=2$), ammo $\\vec{a}_3 = \\vec{a}_1 + \\vec{a}_2$ va $\\vec{b} = 2\\vec{a}_1 + \\vec{a}_2$. Demak $r(A) = r(A|B) = 2 < 3$, sistema cheksiz ko‘p yechimli."
        },
        {
            "q": "[Aralash: 2-5-mavzular] $\\begin{cases} (a-1)x + 2y = 4 \\\\ 3x + (a-2)y = 6 \\end{cases}$ chiziqli tenglamalar sistemasi $a$ parametrning qanday qiymatida cheksiz ko‘p yechimga va qanday qiymatida hech qanday yechimga ega emas?",
            "opts": [
                "$a = 4$ da cheksiz ko‘p yechimga ega; $a = -1$ da yechimga ega emas",
                "$a = -1$ da cheksiz ko‘p yechimga ega; $a = 4$ da yechimga ega emas",
                "$a = 1$ va $a = 2$ da yechimga ega emas",
                "Barcha $a$ larda yagona yechimga ega"
            ],
            "ans": 0,
            "diff": "Qiyin",
            "exp": "$\\Delta = (a-1)(a-2) - 6 = a^2 - 3a - 4 = (a-4)(a+1) = 0 \\implies a=4$ yoki $a=-1$. $a=4$ da $\\begin{cases} 3x+2y=4 \\\\ 3x+2y=6 \\end{cases}$... Diqqat! $a=4$ da $3x+2y=4$ va $3x+2y=6$ ziddiyatli (yechim yo‘q), $a=-1$ da esa $\\begin{cases} -2x+2y=4 \\\\ 3x-3y=6 \\end{cases}$ ham ziddiyatli $(-x+y=2$ va $x-y=2)$! Tekshiramiz: $\\Delta_x = 4(a-2) - 12 = 4a - 20$, u $a=5$ da 0 bo‘ladi! Demak $a=4$ da ham, $a=-1$ da ham $\\Delta_x \\ne 0$, ya’ni IKKALA qiymatda ham yechimga ega emas!"
        },
        {
            "q": "[Aralash: 1-8-mavzular] Agar $X = (1, 2, -2)^T$ ustun vektor bo‘lsa, $P = X \\cdot X^T$ ($3 \\times 3$ matritsa) ning izini ($\\text{tr}(P) = p_{11}+p_{22}+p_{33}$) va rangini ($r(P)$) toping.",
            "opts": [
                "$\\text{tr}(P) = |X|^2 = 9,\\qquad r(P) = 1$",
                "$\\text{tr}(P) = 1,\\qquad r(P) = 3$",
                "$\\text{tr}(P) = 9,\\qquad r(P) = 3$",
                "$\\text{tr}(P) = 0,\\qquad r(P) = 0$"
            ],
            "ans": 0,
            "diff": "Qiyin",
            "exp": "$P = X X^T = \\begin{pmatrix} 1 & 2 & -2 \\\\ 2 & 4 & -4 \\\\ -2 & -4 & 4 \\end{pmatrix}$. Uning bosh diagonali yig‘indisi $1 + 4 + 4 = 9 = |X|^2$. Barcha satrlari 1-satrga proporsional bo‘lgani uchun $r(P) = 1$."
        },
        {
            "q": "[Aralash: 3-4-mavzular] $A = \\begin{pmatrix} 2 & 1 & 3 \\\\ 5 & 3 & 2 \\\\ 1 & 4 & 3 \\end{pmatrix}$ matritsaning determinanti $\\det(A) = 40$ (4-ma’ruza, 20-slayd) va algebraik to‘ldiruvchilari $A_{11}=1, A_{21}=9, A_{31}=-7$ bo‘lsa, $A^{-1}$ teskari matritsaning 1-satri qanday bo‘ladi?",
            "opts": [
                "$\\left(\\frac{1}{40},\\; \\frac{9}{40},\\; -\\frac{7}{40}\\right)$",
                "$\\left(\\frac{1}{40},\\; -\\frac{13}{40},\\; \\frac{17}{40}\\right)$",
                "$(1,\\; 9,\\; -7)$",
                "$\\left(-\\frac{1}{40},\\; -\\frac{9}{40},\\; \\frac{7}{40}\\right)$"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "$A^{-1} = \\frac{1}{\\det A}\\bar{A}$ da qo‘shma matritsa transponirlangani sababli 1-satrda $(A_{11}, A_{21}, A_{31}) / \\det(A)$ turadi: $A_{11}=1,\\; A_{21} = -(3-12) = 9,\\; A_{31} = (2-9) = -7$."
        },
        {
            "q": "[Aralash: 6-8-mavzular] $\\begin{cases} x_1 + x_2 + x_3 + x_4 = 0 \\\\ x_1 - x_2 + x_3 - x_4 = 0 \\end{cases}$ bir jinsli sistemaning ikkita bazis-fundamental yechimlari $F_1$ (bunda $x_3=1, x_4=0$) va $F_2$ (bunda $x_3=0, x_4=1$) o‘zaro ortogonalmi?",
            "opts": [
                "Ha, ortogonal, chunki $F_1 = (-1, 0, 1, 0)^T$ va $F_2 = (0, -1, 0, 1)^T$ bo‘lib, $(F_1, F_2) = 0$",
                "Yo‘q, chunki $(F_1, F_2) = 2 \\ne 0$",
                "Yo‘q, chunki $(F_1, F_2) = -1 \\ne 0$",
                "Sistema faqat nol yechimga ega"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "Tenglamalarni qo‘shib va ayirib: $x_1 + x_3 = 0 \\implies x_1 = -x_3$ hamda $x_2 + x_4 = 0 \\implies x_2 = -x_4$. Demak $F_1 = (-1, 0, 1, 0)^T$ va $F_2 = (0, -1, 0, 1)^T$, ularning skalyar ko‘paytmasi $(F_1, F_2) = 0$!"
        },
        {
            "q": "[Aralash: 7-8-mavzular] $\\vec{a} = (1, 2, 2)$ va $\\vec{b} = (2, 1, -2)$ vektorlar berilgan. $(\\vec{a}, \\vec{b})$ skalyar ko‘paytmani va $[\\vec{a} \\times \\vec{b}]$ vektor ko‘paytma modulini (parallelogramm yuzini) toping.",
            "opts": [
                "$(\\vec{a}, \\vec{b}) = 0$ (ortogonal); $\\qquad S = |[\\vec{a} \\times \\vec{b}]| = |\\vec{a}|\\cdot|\\vec{b}| = 3 \\cdot 3 = 9$",
                "$(\\vec{a}, \\vec{b}) = 8;\\qquad S = 5$",
                "$(\\vec{a}, \\vec{b}) = 0;\\qquad S = 3$",
                "$(\\vec{a}, \\vec{b}) = 9;\\qquad S = 0$"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "$(\\vec{a}, \\vec{b}) = 2 + 2 - 4 = 0 \\implies \\varphi = 90^\\circ,\\; \\sin 90^\\circ = 1$. $|\\vec{a}| = \\sqrt{1+4+4}=3,\\; |\\vec{b}| = \\sqrt{4+1+4}=3$. Demak $S = |\\vec{a}||\\vec{b}|\\sin 90^\\circ = 9$."
        },
        {
            "q": "[Aralash: 1-6-mavzular] $A = \\begin{pmatrix} 1 & 2 & 3 \\\\ 0 & 1 & 4 \\\\ 0 & 0 & 1 \\end{pmatrix}$ matritsa uchun $\\det(A)$, $r(A)$ va $A^{-1}$ ning $(1, 3)$-elementi $(A^{-1})_{13}$ ni toping.",
            "opts": [
                "$\\det(A) = 1,\\qquad r(A) = 3,\\qquad (A^{-1})_{13} = 5$",
                "$\\det(A) = 1,\\qquad r(A) = 3,\\qquad (A^{-1})_{13} = -3$",
                "$\\det(A) = 3,\\qquad r(A) = 3,\\qquad (A^{-1})_{13} = 5$",
                "$\\det(A) = 1,\\qquad r(A) = 2,\\qquad (A^{-1})_{13} = 0$"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "Yuqori uchburchak matritsa: $\\det(A) = 1$, $r(A) = 3$. $(A^{-1})_{13} = \\frac{A_{31}}{\\det A} = (-1)^{3+1} \\begin{vmatrix} 2 & 3 \\\\ 1 & 4 \\end{vmatrix} = 8 - 3 = 5$."
        },
        {
            "q": "[Aralash: 2-8-mavzular] Agar $A_1, A_2, A_3$ vektorlar $\\mathbb{R}^3$ da o‘zaro ortogonal bo‘lib, $|A_1| = 2,\\; |A_2| = 3,\\; |A_3| = 4$ bo‘lsa, shu vektorlardan tuzilgan $3 \\times 3$ matritsa determinantining absolyut qiymati $|\\det(A)|$ nimaga teng?",
            "opts": [
                "$24$ (chunki to‘g‘ri burchakli parallelepiped hajmi $V = |A_1|\\cdot|A_2|\\cdot|A_3| = 2\\cdot 3\\cdot 4 = 24$)",
                "$9$ ($2 + 3 + 4 = 9$)",
                "$0$ (chunki ortogonal)",
                "$12$"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "Juft-juft ortogonal uchta vektordan yasalgan parallelepiped to‘g‘ri burchakli parallelepiped bo‘lib, uning hajmi $|\\det(A)| = |A_1|\\cdot|A_2|\\cdot|A_3| = 24$."
        },
        {
            "q": "[Aralash: 4-7-mavzular] $\\vec{e}_1' = 2\\vec{e}_1 + \\vec{e}_2$, $\\vec{e}_2' = 3\\vec{e}_1 + 2\\vec{e}_2$, $\\vec{e}_3' = \\vec{e}_1 + \\vec{e}_2 + \\vec{e}_3$ ifodalar yangi bazisni aniqlay oladimi va o‘tish matritsasi determinanti $\\det(P)$ nimaga teng?",
            "opts": [
                "Ha, yangi bazisni aniqlaydi, chunki $\\det(P) = 1 \\ne 0$",
                "Yo‘q, chunki $\\det(P) = 0$",
                "Ha, $\\det(P) = 7$",
                "Yo‘q, chunki $\\vec{e}_3'$ da uchta vektor qatnashgan"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "$P = \\begin{pmatrix} 2 & 3 & 1 \\\\ 1 & 2 & 1 \\\\ 0 & 0 & 1 \\end{pmatrix}$. 3-satr bo‘yicha yopilsa $\\det(P) = 1 \\cdot (4 - 3) = 1 \\ne 0$, demak yangi vektorlar chiziqli erkli va bazis tashkil qiladi."
        },
        {
            "q": "[Aralash: 3-5-mavzular] $AX = B$ chiziqli tenglamalar sistemasida $A$ matritsa $4 \\times 4$ o‘lchamli bo‘lib, uning 1-satri elementlari $(2, -4, 6, -8)$ va 3-satri elementlari $(-1, 2, -3, 4)$ ga teng. Bu sistemaga Kramer qoidasini to‘g‘ridan-to‘g‘ri qo‘llash mumkinmi?",
            "opts": [
                "Yo‘q, chunki 1- va 3-satrlar proporsional ($R_1 = -2R_3$) bo‘lib, asosiy determinant $\\Delta = \\det(A) = 0$",
                "Ha, chunki matritsa $4 \\times 4$ kvadrat matritsa",
                "Ha, agar ozod hadlar noldan farqli bo‘lsa",
                "Ha, chunki $\\Delta = -2 \\ne 0$"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "1- va 3-satrlar proporsional bo‘lgani uchun 2-ma’ruza 8-xossasiga ko‘ra $\\Delta = 0$, Kramer formulalarida esa maxrajda $\\Delta \\ne 0$ bo‘lishi shart."
        },
        {
            "q": "[Aralash: 1-7-mavzular] $\\mathbb{R}^3$ fazoda $X = (1, -2, 3)^T$ va $Y = (4, 0, -1)^T$ vektorlar berilgan. $(2X + Y, X - Y)$ skalyar ko‘paytmani hisoblang.",
            "opts": [
                "$10$",
                "$11$",
                "$-10$",
                "$28$"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "$2X + Y = (6, -4, 5)^T$ va $X - Y = (-3, -2, 4)^T$. Skalyar ko‘paytma: $6(-3) + (-4)(-2) + 5(4) = -18 + 8 + 20 = 10$."
        },
        {
            "q": "[Aralash: 5-6-mavzular] $\\begin{cases} x_1 + 2x_2 + 3x_3 = 14 \\\\ 2x_2 + 5x_3 = 19 \\\\ 3x_3 = 9 \\end{cases}$ uchburchak sistemaning yechimi $(x_1, x_2, x_3)$ vektorning modulini $|X| = \\sqrt{x_1^2 + x_2^2 + x_3^2}$ toping.",
            "opts": [
                "$\\sqrt{14}$ (chunki $x_1 = 1,\\; x_2 = 2,\\; x_3 = 3$)",
                "$6$ (chunki $1 + 2 + 3 = 6$)",
                "$14$",
                "$5$"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "$3x_3 = 9 \\implies x_3 = 3$; $2x_2 = 19 - 15 = 4 \\implies x_2 = 2$; $x_1 = 14 - 4 - 9 = 1$. $|X| = \\sqrt{1^2 + 2^2 + 3^2} = \\sqrt{14}$."
        },
        {
            "q": "[Aralash: Barcha mavzular sintezi] $n$-tartibli kvadrat $A$ matritsa uchun quyidagi 4 ta tasdiqdan qaysi biri QOLGAN UCHTASIGA EKVIVALENT EMAS?",
            "opts": [
                "$AX = \\Theta$ bir jinsli sistema noldan farqli fundamental yechimlar sistemasiga ega",
                "$\\det(A) \\ne 0$ (matritsa xosmas va $A^{-1}$ teskari matritsa mavjud)",
                "Matritsaning rangi $r(A) = n$ va uning ustun vektorlari $\\mathbb{R}^n$ fazoda bazis tashkil qiladi",
                "Har qanday $B$ ozod hadlar ustuni uchun $AX = B$ sistema Kramer va Gauss-Jordan usulida yagona yechimga ega"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "Chiziqli algebraning fundamental teoremasiga ko‘ra $\\det(A) \\ne 0 \\iff \\exists A^{-1} \\iff r(A) = n \\iff AX=B$ yagona yechimli. Ammo $AX = \\Theta$ nolmas FYS ga ega bo‘lishi uchun $r(A) < n$ ($\\det(A) = 0$) bo‘lishi kerak!"
        }
    ]
    # Fix question 1 and 19 in t9:
    t9[0]["opts"] = ["$51$", "$12$", "$-19$", "$24$"]
    t9[18]["q"] = "[Aralash: 2-5-mavzular] $\\begin{cases} (a-1)x + 2y = 3 \\\\ 3x + (a-2)y = 3 \\end{cases}$ chiziqli tenglamalar sistemasi $a$ parametrning qanday qiymatida cheksiz ko‘p yechimga va qanday qiymatida hech qanday yechimga ega emas?"
    t9[18]["opts"] = [
        "$a = 4$ da cheksiz ko‘p yechimga ega; $a = -1$ da yechimga ega emas",
        "$a = -1$ da cheksiz ko‘p yechimga ega; $a = 4$ da yechimga ega emas",
        "$a = 1$ va $a = 2$ da yechimga ega emas",
        "Barcha $a$ larda yagona yechimga ega"
    ]
    t9[18]["exp"] = "$\\Delta = (a-1)(a-2) - 6 = (a-4)(a+1) = 0 \\implies a=4$ yoki $a=-1$. $a=4$ da ikkala tenglama $3x+2y=3$ ga aylanadi ($\\Delta=\\Delta_x=\\Delta_y=0$, cheksiz ko‘p yechim). $a=-1$ da esa $-2x+2y=3$ va $3x-3y=3$ ziddiyatli bo‘lib, yechimga ega emas!"

    return {5: t5, 6: t6, 7: t7, 8: t8, 9: t9}
