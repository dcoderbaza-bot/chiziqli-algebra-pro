# -*- coding: utf-8 -*-
# Part 1: Topics 1, 2, 3, 4 (30 questions each = 120 questions)

def get_part1_questions():
    q = []

    # =========================================================================
    # MAVZU 1: Matritsalar va ular ustida amallar (30 ta savol)
    # =========================================================================
    t1 = [
        {
            "q": "«Matritsa» so‘zi lotincha so‘z bo‘lib, qanday lug‘aviy ma’noni bildiradi va qadimgi Xitoyda uni qanday atashgan?",
            "opts": [
                "«Birinchi manba» ma’nosini bildiradi; qadimgi Xitoyda «Sehrli kvadrat» deb atashgan",
                "«Tartibli jadval» ma’nosini bildiradi; qadimgi Xitoyda «Oltin jadval» deb atashgan",
                "«Sonlar qatori» ma’nosini bildiradi; qadimgi Misrda «Piramida jadvali» deb atashgan",
                "«To‘g‘ri burchak» ma’nosini bildiradi; qadimgi Yunonistonda «Logarifmik jadval» deb atashgan"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "1-ma’ruza (4-slayd): «Matritsa» so‘zi lotincha so‘z bo‘lib, «birinchi manba» ma’nosini bildiradi. Qadimgi Xitoyda uni «Sehrli kvadrat» deb atashgan."
        },
        {
            "q": "Matritsalar bo‘yicha fundamental nazariyani XVIII asrda birinchilardan bo‘lib kiritgan nemis olimi kim?",
            "opts": [
                "Karl Veyyershtrass (Weierstrass)",
                "Isaak Nyuton",
                "Evklid",
                "Pifagor"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "1-ma’ruza (4-slayd): Matritsalar bo‘yicha fundamental nazariyani birinchilardan bo‘lib XVIII asrda nemis olimi Veyyershtrass kiritgan."
        },
        {
            "q": "$m \\times n$ o‘lchovli $A$ matritsada nechta satr, nechta ustun va jami nechta element mavjud?",
            "opts": [
                "$m$ ta satr, $n$ ta ustun va $m \\cdot n$ ta element",
                "$n$ ta satr, $m$ ta ustun va $m + n$ ta element",
                "$m$ ta satr, $m$ ta ustun va $n^2$ ta element",
                "$n$ ta satr, $n$ ta ustun va $2mn$ ta element"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "$A_{m \\times n}$ yozuvda birinchi indeks $m$ — satrlar sonini, ikkinchi indeks $n$ — ustunlar sonini, $m \\cdot n$ esa jami elementlar sonini bildiradi."
        },
        {
            "q": "Quyidagi $A = \\begin{pmatrix} 5 & 0 & -6 \\\\ 3 & -\\sqrt{2} & 1 \\end{pmatrix}$ matritsaning o‘lchamini hamda $a_{13} + a_{21}$ yig‘indisini toping.",
            "opts": [
                "O‘lchami $2 \\times 3$; yig‘indi $-3$ ga teng",
                "O‘lchami $3 \\times 2$; yig‘indi $-3$ ga teng",
                "O‘lchami $2 \\times 3$; yig‘indi $6$ ga teng",
                "O‘lchami $2 \\times 2$; yig‘indi $-5$ ga teng"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "Matritsa 2 ta satr va 3 ta ustundan iborat ($2 \\times 3$). $a_{13} = -6$ (1-satr, 3-ustun) va $a_{21} = 3$ (2-satr, 1-ustun). Ularning yig‘indisi: $-6 + 3 = -3$."
        },
        {
            "q": "$n$-tartibli kvadrat matritsaning yordamchi diagonali elementlari qaysi qatorda to‘g‘ri ko‘rsatilgan?",
            "opts": [
                "$a_{1n},\\; a_{2,n-1},\\; \\dots,\\; a_{n1}$",
                "$a_{11},\\; a_{22},\\; \\dots,\\; a_{nn}$",
                "$a_{11},\\; a_{12},\\; \\dots,\\; a_{1n}$",
                "$a_{11},\\; a_{21},\\; \\dots,\\; a_{n1}$"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "1-ma’ruza (7-slayd): $a_{11}, a_{22}, \\dots, a_{nn}$ — asosiy diagonal, $a_{1n}, a_{2,n-1}, \\dots, a_{n1}$ esa yordamchi diagonal elementlaridir."
        },
        {
            "q": "Bosh diagonal elementlari $1$ ga teng bo‘lib, qolgan barcha elementlari $0$ ga teng bo‘lgan kvadrat matritsa nima deb ataladi?",
            "opts": [
                "Birlik matritsa ($E$)",
                "Nol matritsa ($O$ yoki $\\Theta$)",
                "Satr matritsa",
                "Ustun matritsa"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "1-ma’ruza (8-slayd): Bosh diagonalida faqat 1 lar, qolgan joylarida 0 lar turgan kvadrat matritsa birlik matritsa ($E$) deyiladi."
        },
        {
            "q": "Quyidagi amallardan qaysilari matritsalar ustida «chiziqli amallar» deb ataladi?",
            "opts": [
                "Matritsalarni qo‘shish, ayirish va songa ko‘paytirish",
                "Matritsalarni o‘zaro ko‘paytirish va transponirlash",
                "Determinantni hisoblash va teskari matritsa topish",
                "Faqat ikki matritsani bir-biriga ko‘paytirish"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "1-ma’ruza (10-slayd): Matritsalarni qo‘shish, ayirish va songa ko‘paytirish amallariga matritsalar ustida chiziqli amallar deyiladi."
        },
        {
            "q": "Ma’ruzadagi misol asosida $A = \\begin{bmatrix} 3 & 5 \\\\ -1 & 4 \\end{bmatrix}$ va $B = \\begin{bmatrix} 2 & 0 \\\\ 6 & -3 \\end{bmatrix}$ matritsalar yig‘indisi $A + B$ ni toping.",
            "opts": [
                "$\\begin{bmatrix} 5 & 5 \\\\ 5 & 1 \\end{bmatrix}$",
                "$\\begin{bmatrix} 1 & 5 \\\\ -7 & 7 \\end{bmatrix}$",
                "$\\begin{bmatrix} 6 & 0 \\\\ -6 & -12 \\end{bmatrix}$",
                "$\\begin{bmatrix} 5 & 0 \\\\ 5 & 7 \\end{bmatrix}$"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "1-ma’ruza (13-slayd): Mos elementlar qo‘shiladi: $3+2=5$, $5+0=5$, $-1+6=5$, $4+(-3)=1$."
        },
        {
            "q": "Ma’ruzadagi misol asosida $A = \\begin{pmatrix} 5 & 2 & -3 \\\\ 0 & 4 & 1 \\\\ 7 & -2 & 6 \\end{pmatrix}$ va $B = \\begin{pmatrix} 2 & 1 & 4 \\\\ 3 & 0 & -1 \\\\ 1 & 5 & 2 \\end{pmatrix}$ matritsalar ayirmasi $C = A - B$ ni toping.",
            "opts": [
                "$\\begin{pmatrix} 3 & 1 & -7 \\\\ -3 & 4 & 2 \\\\ 6 & -7 & 4 \\end{pmatrix}$",
                "$\\begin{pmatrix} 7 & 3 & 1 \\\\ 3 & 4 & 0 \\\\ 8 & 3 & 8 \\end{pmatrix}$",
                "$\\begin{pmatrix} 3 & 1 & 1 \\\\ -3 & 4 & 0 \\\\ 6 & 3 & 4 \\end{pmatrix}$",
                "$\\begin{pmatrix} -3 & -1 & 7 \\\\ 3 & -4 & -2 \\\\ -6 & 7 & -4 \\end{pmatrix}$"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "1-ma’ruza (14-slayd): $c_{11}=5-2=3, c_{12}=2-1=1, c_{13}=-3-4=-7; c_{21}=0-3=-3, c_{22}=4-0=4, c_{23}=1-(-1)=2; c_{31}=7-1=6, c_{32}=-2-5=-7, c_{33}=6-2=4$."
        },
        {
            "q": "$A = \\begin{bmatrix} 1 & -3 \\\\ 4 & 2 \\end{bmatrix}$ va $B = \\begin{bmatrix} -2 & 5 \\\\ 0 & -3 \\end{bmatrix}$ bo‘lsa, $3A - 2B$ matritsani hisoblang.",
            "opts": [
                "$\\begin{bmatrix} 7 & -19 \\\\ 12 & 12 \\end{bmatrix}$",
                "$\\begin{bmatrix} -1 & 1 \\\\ 12 & 0 \\end{bmatrix}$",
                "$\\begin{bmatrix} 7 & 1 \\\\ 12 & 0 \\end{bmatrix}$",
                "$\\begin{bmatrix} 5 & -14 \\\\ 8 & 9 \\end{bmatrix}$"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "$3A = \\begin{bmatrix} 3 & -9 \\\\ 12 & 6 \\end{bmatrix}$, $2B = \\begin{bmatrix} -4 & 10 \\\\ 0 & -6 \\end{bmatrix}$. U holda $3A - 2B = \\begin{bmatrix} 3-(-4) & -9-10 \\\\ 12-0 & 6-(-6) \\end{bmatrix} = \\begin{bmatrix} 7 & -19 \\\\ 12 & 12 \\end{bmatrix}$."
        },
        {
            "q": "$A_{m \\times n}$ matritsani $B_{p \\times q}$ matritsaga $A \\cdot B$ tartibda ko‘paytirish mumkin bo‘lishi uchun qaysi shart bajarilishi zarur va hosil bo‘lgan matritsa o‘lchami qanday bo‘ladi?",
            "opts": [
                "$n = p$ bo‘lishi shart; natija $m \\times q$ o‘lchamli bo‘ladi",
                "$m = q$ bo‘lishi shart; natija $n \\times p$ o‘lchamli bo‘ladi",
                "$m = p$ va $n = q$ bo‘lishi shart; natija $m \\times n$ bo‘ladi",
                "Ixtiyoriy o‘lchamda ko‘paytirish mumkin; natija $p \\times n$ bo‘ladi"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "1-ma’ruza (18-slayd): Birinchi matritsaning ustunlari soni ($n$) ikkinchi matritsaning satrlari soniga ($p$) teng bo‘lishi kerak. Natija $m \\times q$ o‘lchamli matritsa bo‘ladi."
        },
        {
            "q": "Ma’ruzadagi misol asosida $A = \\begin{pmatrix} 1 & 2 \\\\ 0 & 8 \\\\ 1 & 3 \\end{pmatrix}$ va $B = \\begin{pmatrix} 6 & 5 \\\\ 4 & 0 \\end{pmatrix}$ matritsalar ko‘paytmasi $A \\cdot B$ ni toping.",
            "opts": [
                "$\\begin{pmatrix} 14 & 5 \\\\ 32 & 0 \\\\ 18 & 5 \\end{pmatrix}$",
                "$\\begin{pmatrix} 6 & 10 \\\\ 0 & 0 \\\\ 4 & 0 \\end{pmatrix}$",
                "$\\begin{pmatrix} 14 & 32 & 18 \\\\ 5 & 0 & 5 \\end{pmatrix}$",
                "$\\begin{pmatrix} 10 & 5 \\\\ 32 & 8 \\\\ 18 & 3 \\end{pmatrix}$"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "1-ma’ruza (19-slayd): $c_{11}=1\\cdot6+2\\cdot4=14, c_{12}=1\\cdot5+2\\cdot0=5$; $c_{21}=0\\cdot6+8\\cdot4=32, c_{22}=0$; $c_{31}=1\\cdot6+3\\cdot4=18, c_{32}=1\\cdot5+3\\cdot0=5$."
        },
        {
            "q": "Ma’ruzadagi misol asosida $A = \\begin{bmatrix} 2 & 3 \\\\ 1 & 4 \\end{bmatrix}$ va $B = \\begin{bmatrix} 5 & 0 \\\\ 1 & 2 \\end{bmatrix}$ matritsalar ko‘paytmasi $C = A \\times B$ ni toping.",
            "opts": [
                "$\\begin{bmatrix} 13 & 6 \\\\ 9 & 8 \\end{bmatrix}$",
                "$\\begin{bmatrix} 10 & 0 \\\\ 1 & 8 \\end{bmatrix}$",
                "$\\begin{bmatrix} 13 & 9 \\\\ 6 & 8 \\end{bmatrix}$",
                "$\\begin{bmatrix} 7 & 6 \\\\ 9 & 6 \\end{bmatrix}$"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "1-ma’ruza (20-slayd): $c_{11}=2\\cdot5+3\\cdot1=13, c_{12}=2\\cdot0+3\\cdot2=6, c_{21}=1\\cdot5+4\\cdot1=9, c_{22}=1\\cdot0+4\\cdot2=8$."
        },
        {
            "q": "Ma’ruzadagi 19-slayd misoli: $A = \\begin{pmatrix} 2 & 3 & 4 \\\\ 4 & 5 & 2 \\\\ 9 & 8 & 2 \\end{pmatrix}$ va $B = \\begin{pmatrix} 5 & 8 \\\\ 1 & 4 \\\\ 4 & 3 \\end{pmatrix}$ bo‘lsa, $A \\cdot B$ ko‘paytmani toping.",
            "opts": [
                "$\\begin{pmatrix} 29 & 40 \\\\ 33 & 58 \\\\ 61 & 110 \\end{pmatrix}$",
                "$\\begin{pmatrix} 29 & 33 & 61 \\\\ 40 & 58 & 110 \\end{pmatrix}$",
                "$\\begin{pmatrix} 25 & 40 \\\\ 33 & 52 \\\\ 61 & 104 \\end{pmatrix}$",
                "$\\begin{pmatrix} 10 & 24 \\\\ 4 & 20 \\\\ 36 & 24 \\end{pmatrix}$"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "1-satr: $(2\\cdot5+3\\cdot1+4\\cdot4;\\; 2\\cdot8+3\\cdot4+4\\cdot3) = (29; 40)$. 2-satr: $(20+5+8;\\; 32+20+6) = (33; 58)$. 3-satr: $(45+8+8;\\; 72+32+6) = (61; 110)$."
        },
        {
            "q": "$A = \\begin{pmatrix} 1 & -2 & 3 \\end{pmatrix}$ satr matritsa va $B = \\begin{pmatrix} 4 \\\\ 5 \\\\ -1 \\end{pmatrix}$ ustun matritsa berilgan. $A \\cdot B$ ko‘paytmani toping.",
            "opts": [
                "$\\begin{pmatrix} -9 \\end{pmatrix}$ (o‘lchami $1 \\times 1$)",
                "$\\begin{pmatrix} 4 & -10 & -3 \\end{pmatrix}$ (o‘lchami $1 \\times 3$)",
                "$\\begin{pmatrix} 9 \\end{pmatrix}$ (o‘lchami $1 \\times 1$)",
                "Ko‘paytirib bo‘lmaydi"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "$A_{1\\times 3} \\cdot B_{3\\times 1} = C_{1\\times 1}$. Elementi: $1\\cdot 4 + (-2)\\cdot 5 + 3\\cdot(-1) = 4 - 10 - 3 = -9$."
        },
        {
            "q": "Endi aksincha, $B = \\begin{pmatrix} 2 \\\\ -1 \\\\ 3 \\end{pmatrix}$ ($3 \\times 1$) ustun matritsani $A = \\begin{pmatrix} 1 & 4 & -2 \\end{pmatrix}$ ($1 \\times 3$) satr matritsaga ko‘paytma $B \\cdot A$ ni toping.",
            "opts": [
                "$\\begin{pmatrix} 2 & 8 & -4 \\\\ -1 & -4 & 2 \\\\ 3 & 12 & -6 \\end{pmatrix}$",
                "$\\begin{pmatrix} -8 \\end{pmatrix}$",
                "$\\begin{pmatrix} 2 & -1 & 3 \\\\ 1 & 4 & -2 \\end{pmatrix}$",
                "$\\begin{pmatrix} 2 & -4 & -6 \\end{pmatrix}$"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "$B_{3\\times 1} \\cdot A_{1\\times 3}$ ko‘paytma $3 \\times 3$ kvadrat matritsa beradi: har bir ustun elementi satr elementlariga ko‘paytiriladi."
        },
        {
            "q": "Matritsalarni ko‘paytirish va transponirlash xossalariga ko‘ra quyidagi tengliklardan qaysi biri BARCHA mos o‘lchamli $A, B$ matritsalar uchun to‘g‘ri?",
            "opts": [
                "$(AB)^T = B^T A^T$",
                "$(AB)^T = A^T B^T$",
                "$AB = BA$",
                "$(A+B)^2 = A^2 + 2AB + B^2$"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "1-ma’ruza (25-slayd, 4-xossa): Ko‘paytmani transponirlashda ko‘paytuvchilar o‘rni almashadi: $(AB)^T = B^T A^T$. Umumiy holda $AB \\ne BA$ bo‘lgani uchun $(A+B)^2 = A^2 + AB + BA + B^2$."
        },
        {
            "q": "Ma’ruzadagi 23-24-slaydlar asosida: $A = \\begin{pmatrix} 1 & 4 & -2 \\\\ 0 & 3 & 5 \\end{pmatrix}$ matritsaning transponirlangani $A^T$ ni toping.",
            "opts": [
                "$\\begin{pmatrix} 1 & 0 \\\\ 4 & 3 \\\\ -2 & 5 \\end{pmatrix}$",
                "$\\begin{pmatrix} 0 & 3 & 5 \\\\ 1 & 4 & -2 \\end{pmatrix}$",
                "$\\begin{pmatrix} -2 & 4 & 1 \\\\ 5 & 3 & 0 \\end{pmatrix}$",
                "$\\begin{pmatrix} 1 & 4 \\\\ 0 & 3 \\\\ -2 & 5 \\end{pmatrix}$"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "1-ma’ruza (23-slayd): $2 \\times 3$ matritsa transponirlanganda $3 \\times 2$ matritsaga aylanadi: 1-satr $(1, 4, -2)$ 1-ustunga, 2-satr $(0, 3, 5)$ 2-ustunga o‘tadi."
        },
        {
            "q": "Ma’ruzadagi 26-slayd misoli: $A = \\begin{pmatrix} 2 & -1 \\\\ 3 & 7 \\end{pmatrix}$, $B = \\begin{pmatrix} 4 & 1 & -3 \\\\ 0 & 8 & 2 \\end{pmatrix}$, $C = \\begin{pmatrix} 1 & 2 \\\\ -3 & 1 \\\\ -1 & 4 \\end{pmatrix}$ bo‘lsa, $2A^T - 3BC$ ni hisoblang.",
            "opts": [
                "$\\begin{pmatrix} -8 & 15 \\\\ 76 & -34 \\end{pmatrix}$",
                "$\\begin{pmatrix} 8 & -15 \\\\ -76 & 34 \\end{pmatrix}$",
                "$\\begin{pmatrix} -8 & -15 \\\\ 76 & 34 \\end{pmatrix}$",
                "$\\begin{pmatrix} 16 & -3 \\\\ -80 & 62 \\end{pmatrix}$"
            ],
            "ans": 0,
            "diff": "Qiyin",
            "exp": "1-ma’ruza (26-slayd): $A^T = \\begin{pmatrix} 2 & 3 \\\\ -1 & 7 \\end{pmatrix} \\Rightarrow 2A^T = \\begin{pmatrix} 4 & 6 \\\\ -2 & 14 \\end{pmatrix}$. $BC = \\begin{pmatrix} 4 & -3 \\\\ -26 & 16 \\end{pmatrix} \\Rightarrow 3BC = \\begin{pmatrix} 12 & -9 \\\\ -78 & 48 \\end{pmatrix}$. Ayirma: $\\begin{pmatrix} 4-12 & 6-(-9) \\\\ -2-(-78) & 14-48 \\end{pmatrix} = \\begin{pmatrix} -8 & 15 \\\\ 76 & -34 \\end{pmatrix}$."
        },
        {
            "q": "$A = \\begin{pmatrix} 2 & -1 \\\\ 3 & -2 \\end{pmatrix}$ matritsa uchun $A^2 = A \\cdot A$ ni hisoblang.",
            "opts": [
                "$\\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}$",
                "$\\begin{pmatrix} 4 & 1 \\\\ 9 & 4 \\end{pmatrix}$",
                "$\\begin{pmatrix} 7 & -4 \\\\ 12 & -7 \\end{pmatrix}$",
                "$\\begin{pmatrix} -1 & 0 \\\\ 0 & -1 \\end{pmatrix}$"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "$A^2 = \\begin{pmatrix} 2 & -1 \\\\ 3 & -2 \\end{pmatrix} \\begin{pmatrix} 2 & -1 \\\\ 3 & -2 \\end{pmatrix} = \\begin{pmatrix} 4-3 & -2+2 \\\\ 6-6 & -3+4 \\end{pmatrix} = \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix} = E$ (involyutiv matritsa)."
        },
        {
            "q": "Agar $A = \\begin{pmatrix} 1 & 2 \\\\ 3 & -1 \\end{pmatrix}$ va $f(x) = x^2 - 2x + 3$ ko‘phad berilgan bo‘lsa, $f(A) = A^2 - 2A + 3E$ matritsani toping.",
            "opts": [
                "$\\begin{pmatrix} 8 & -4 \\\\ -6 & 12 \\end{pmatrix}$",
                "$\\begin{pmatrix} 5 & -4 \\\\ -6 & 9 \\end{pmatrix}$",
                "$\\begin{pmatrix} 8 & 0 \\\\ 0 & 12 \\end{pmatrix}$",
                "$\\begin{pmatrix} 6 & -2 \\\\ -3 & 10 \\end{pmatrix}$"
            ],
            "ans": 0,
            "diff": "Qiyin",
            "exp": "$A^2 = \\begin{pmatrix} 1+6 & 2-2 \\\\ 3-3 & 6+1 \\end{pmatrix} = \\begin{pmatrix} 7 & 0 \\\\ 0 & 7 \\end{pmatrix}$. U holda $A^2 - 2A + 3E = \\begin{pmatrix} 7-2+3 & 0-4+0 \\\\ 0-6+0 & 7+2+3 \\end{pmatrix} = \\begin{pmatrix} 8 & -4 \\\\ -6 & 12 \\end{pmatrix}$."
        },
        {
            "q": "$2X + \\begin{pmatrix} 3 & -5 \\\\ 4 & 0 \\end{pmatrix} = \\begin{pmatrix} 9 & 1 \\\\ -2 & 8 \\end{pmatrix}$ tenglamadan $X$ matritsani toping.",
            "opts": [
                "$\\begin{pmatrix} 3 & 3 \\\\ -3 & 4 \\end{pmatrix}$",
                "$\\begin{pmatrix} 6 & 6 \\\\ -6 & 8 \\end{pmatrix}$",
                "$\\begin{pmatrix} 6 & -2 \\\\ 1 & 4 \\end{pmatrix}$",
                "$\\begin{pmatrix} 3 & -2 \\\\ 1 & 4 \\end{pmatrix}$"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "$2X = \\begin{pmatrix} 9-3 & 1-(-5) \\\\ -2-4 & 8-0 \\end{pmatrix} = \\begin{pmatrix} 6 & 6 \\\\ -6 & 8 \\end{pmatrix} \\implies X = \\begin{pmatrix} 3 & 3 \\\\ -3 & 4 \\end{pmatrix}$."
        },
        {
            "q": "$A = \\begin{pmatrix} 1 & 3 & -2 \\\\ 2 & 0 & 4 \\\\ -1 & 5 & 1 \\end{pmatrix}$ va $B = \\begin{pmatrix} 3 & 1 & 2 \\\\ -2 & 4 & 0 \\\\ 5 & -1 & 3 \\end{pmatrix}$ bo‘lsa, $C = A \\cdot B$ ko‘paytmaning faqat $c_{23}$ (2-satr, 3-ustun) elementini toping.",
            "opts": [
                "$16$",
                "$12$",
                "$-2$",
                "$8$"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "$c_{23}$ ni topish uchun $A$ ning 2-satri $(2, 0, 4)$ ni $B$ ning 3-ustuni $(2, 0, 3)^T$ ga ko‘paytiramiz: $c_{23} = 2\\cdot 2 + 0\\cdot 0 + 4\\cdot 3 = 4 + 12 = 16$."
        },
        {
            "q": "Agar kvadrat matritsa uchun $A^T = A$ shart bajarilsa, bunday matritsa qanday ataladi? Quyidagi $A = \\begin{pmatrix} 4 & x-2 \\\\ 3 & 7 \\end{pmatrix}$ matritsa $x$ ning qanday qiymatida shunday matritsa bo‘ladi?",
            "opts": [
                "Simmetrik matritsa; $x = 5$",
                "Simmetrik matritsa; $x = -1$",
                "Diagonal matritsa; $x = 2$",
                "Birlik matritsa; $x = 3$"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "$A^T = A$ bo‘lgan matritsa simmetrik matritsa deyiladi. $a_{12} = a_{21}$ bo‘lishi uchun $x - 2 = 3 \\implies x = 5$ bo‘lishi kerak."
        },
        {
            "q": "Kvadrat matritsaning bosh diagonali elementlari yig‘indisi matritsaning izi ($\\text{tr}(A)$) deyiladi. $A = \\begin{pmatrix} 2 & -5 & 8 \\\\ 4 & -3 & 1 \\\\ 0 & 7 & 9 \\end{pmatrix}$ matritsaning asosiy diagonali elementlari yig‘indisi bilan yordamchi diagonali elementlari yig‘indisi ayirmasini toping.",
            "opts": [
                "$3$",
                "$8$",
                "$5$",
                "$13$"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "Asosiy diagonal yig‘indisi: $2 + (-3) + 9 = 8$. Yordamchi diagonal yig‘indisi: $8 + (-3) + 0 = 5$. Ularning ayirmasi: $8 - 5 = 3$."
        },
        {
            "q": "Agar $A$ matritsa $3 \\times 4$ o‘lchamli, $B$ matritsa esa $2 \\times 4$ o‘lchamli bo‘lsa, quyidagi ifodalardan qaysi birini hisoblash MUMKIN?",
            "opts": [
                "$A \\cdot B^T$",
                "$A \\cdot B$",
                "$A + B$",
                "$A^T \\cdot B$"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "$B$ ning o‘lchami $2 \\times 4$ bo‘lsa, $B^T$ ning o‘lchami $4 \\times 2$ bo‘ladi. U holda $A_{3 \\times 4} \\cdot (B^T)_{4 \\times 2}$ ko‘paytma mavjud va $3 \\times 2$ o‘lchamli matritsa hosil bo‘ladi."
        },
        {
            "q": "$A = \\begin{pmatrix} 1 & a \\\\ 0 & 1 \\end{pmatrix}$ matritsa berilgan bo‘lsa, $A^n$ ($n \\in \\mathbb{N}$) matritsani toping.",
            "opts": [
                "$\\begin{pmatrix} 1 & na \\\\ 0 & 1 \\end{pmatrix}$",
                "$\\begin{pmatrix} 1 & a^n \\\\ 0 & 1 \\end{pmatrix}$",
                "$\\begin{pmatrix} n & na \\\\ 0 & n \\end{pmatrix}$",
                "$\\begin{pmatrix} 1 & 0 \\\\ na & 1 \\end{pmatrix}$"
            ],
            "ans": 0,
            "diff": "Qiyin",
            "exp": "$A^2 = \\begin{pmatrix} 1 & a \\\\ 0 & 1 \\end{pmatrix}\\begin{pmatrix} 1 & a \\\\ 0 & 1 \\end{pmatrix} = \\begin{pmatrix} 1 & 2a \\\\ 0 & 1 \\end{pmatrix}$, matematik induksiya bo‘yicha $A^n = \\begin{pmatrix} 1 & na \\\\ 0 & 1 \\end{pmatrix}$."
        },
        {
            "q": "$A = \\begin{pmatrix} 3 & -2 \\\\ 1 & 4 \\end{pmatrix}$ va $B = \\begin{pmatrix} -1 & 2 \\\\ 5 & 0 \\end{pmatrix}$ bo‘lsa, $AB - BA$ kommutator matritsani toping.",
            "opts": [
                "$\\begin{pmatrix} -12 & 12 \\\\ 6 & 12 \\end{pmatrix}$",
                "$\\begin{pmatrix} 0 & 0 \\\\ 0 & 0 \\end{pmatrix}$",
                "$\\begin{pmatrix} -13 & 6 \\\\ 19 & 2 \\end{pmatrix}$",
                "$\\begin{pmatrix} 12 & -12 \\\\ -6 & -12 \\end{pmatrix}$"
            ],
            "ans": 0,
            "diff": "Qiyin",
            "exp": "$AB = \\begin{pmatrix} -13 & 6 \\\\ 19 & 2 \\end{pmatrix}$, $BA = \\begin{pmatrix} -1 & 10 \\\\ 15 & -10 \\end{pmatrix}$. U holda $AB - BA = \\begin{pmatrix} -12 & -4 \\\\ 4 & 12 \\end{pmatrix}$... Tekshiramiz: $AB_{12} = 3\\cdot 2 + (-2)\\cdot 0 = 6$; $BA_{11} = -3 + 2 = -1, BA_{12} = 2 + 8 = 10, BA_{21} = 15 + 0 = 15, BA_{22} = -10 + 0 = -10$. Demak $AB - BA = \\begin{pmatrix} -12 & -4 \\\\ 4 & 12 \\end{pmatrix}$."
        },
        {
            "q": "$A = \\begin{pmatrix} 2 & 1 \\\\ -1 & 3 \\end{pmatrix}$ va $B = \\begin{pmatrix} 1 & -2 \\\\ 4 & 0 \\end{pmatrix}$ bo‘lsa, $(A + B)^T$ matritsani toping.",
            "opts": [
                "$\\begin{pmatrix} 3 & 3 \\\\ -1 & 3 \\end{pmatrix}$",
                "$\\begin{pmatrix} 3 & -1 \\\\ 3 & 3 \\end{pmatrix}$",
                "$\\begin{pmatrix} 1 & 5 \\\\ -3 & 3 \\end{pmatrix}$",
                "$\\begin{pmatrix} 3 & 3 \\\\ 1 & -3 \\end{pmatrix}$"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "$A + B = \\begin{pmatrix} 3 & -1 \\\\ 3 & 3 \\end{pmatrix}$. Uni transponirlasak: $(A+B)^T = \\begin{pmatrix} 3 & 3 \\\\ -1 & 3 \\end{pmatrix}$."
        },
        {
            "q": "Diagonal matritsalar ko‘paytmasi $\\begin{pmatrix} 2 & 0 & 0 \\\\ 0 & -3 & 0 \\\\ 0 & 0 & 5 \\end{pmatrix} \\cdot \\begin{pmatrix} 4 & 0 & 0 \\\\ 0 & -2 & 0 \\\\ 0 & 0 & -1 \\end{pmatrix}$ nimaga teng?",
            "opts": [
                "$\\begin{pmatrix} 8 & 0 & 0 \\\\ 0 & 6 & 0 \\\\ 0 & 0 & -5 \\end{pmatrix}$",
                "$\\begin{pmatrix} 6 & 0 & 0 \\\\ 0 & -5 & 0 \\\\ 0 & 0 & 4 \\end{pmatrix}$",
                "$\\begin{pmatrix} 8 & 0 & 0 \\\\ 0 & -6 & 0 \\\\ 0 & 0 & 5 \\end{pmatrix}$",
                "$\\begin{pmatrix} -2 & 0 & 0 \\\\ 0 & -1 & 0 \\\\ 0 & 0 & 6 \\end{pmatrix}$"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "Diagonal matritsalarni ko‘paytirishda mos diagonal elementlari o‘zaro ko‘paytiriladi: $2\\cdot 4=8,\\; (-3)\\cdot(-2)=6,\\; 5\\cdot(-1)=-5$."
        }
    ]
    # Fix question 28 options to match exact calculation:
    t1[27]["opts"] = [
        "$\\begin{pmatrix} -12 & -4 \\\\ 4 & 12 \\end{pmatrix}$",
        "$\\begin{pmatrix} 0 & 0 \\\\ 0 & 0 \\end{pmatrix}$",
        "$\\begin{pmatrix} -13 & 6 \\\\ 19 & 2 \\end{pmatrix}$",
        "$\\begin{pmatrix} 12 & 4 \\\\ -4 & -12 \\end{pmatrix}$"
    ]

    # =========================================================================
    # MAVZU 2: Determinantlar nazariyasi va asosiy xossalari (30 ta savol)
    # =========================================================================
    t2 = [
        {
            "q": "Ikkinchi tartibli $\\begin{vmatrix} a_{11} & a_{12} \\\\ a_{21} & a_{22} \\end{vmatrix}$ determinant qaysi formula bilan hisoblanadi?",
            "opts": [
                "$a_{11} \\cdot a_{22} - a_{12} \\cdot a_{21}$",
                "$a_{11} \\cdot a_{22} + a_{12} \\cdot a_{21}$",
                "$a_{11} \\cdot a_{12} - a_{21} \\cdot a_{22}$",
                "$a_{12} \\cdot a_{21} - a_{11} \\cdot a_{22}$"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "2-ma’ruza (15-slayd): 2-tartibli determinant bosh diagonal elementlari ko‘paytmasidan yordamchi diagonal elementlari ko‘paytmasini ayirish bilan topiladi."
        },
        {
            "q": "Ma’ruzadagi 15-slayd misoli: $\\begin{vmatrix} -4 & 9 \\\\ -3 & 7 \\end{vmatrix}$ determinantni hisoblang.",
            "opts": [
                "$-1$",
                "$1$",
                "$-55$",
                "$55$"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "2-ma’ruza (15-slayd): $(-4)\\cdot 7 - 9\\cdot(-3) = -28 + 27 = -1$."
        },
        {
            "q": "Agar determinantning biror satr yoki biror ustun elementlarining barchasi nolga teng bo‘lsa (1-xossa), uning qiymati nimaga teng bo‘ladi?",
            "opts": [
                "$0$ ga teng bo‘ladi",
                "$1$ ga teng bo‘ladi",
                "$-1$ ga teng bo‘ladi",
                "Qolgan elementlar yig‘indisiga teng bo‘ladi"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "2-ma’ruza (5-slayd, 1-xossa): Nol satr yoki nol ustunga ega determinantning qiymati har doim nolga teng."
        },
        {
            "q": "Ma’ruzadagi 6-7-slaydlar asosida: $\\Delta_1 = \\begin{vmatrix} 4 & 0 & 0 \\\\ 0 & 3 & 0 \\\\ 0 & 0 & 5 \\end{vmatrix}$ va $\\Delta_2 = \\begin{vmatrix} 1 & 3 & 7 \\\\ 0 & -2 & 9 \\\\ 0 & 0 & 3 \\end{vmatrix}$ determinantlarning qiymatlarini toping.",
            "opts": [
                "$\\Delta_1 = 60,\\quad \\Delta_2 = -6$",
                "$\\Delta_1 = 12,\\quad \\Delta_2 = 6$",
                "$\\Delta_1 = 60,\\quad \\Delta_2 = 21$",
                "$\\Delta_1 = 0,\\quad \\Delta_2 = -6$"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "2-ma’ruza (6-7-slaydlar): Diagonal va uchburchakli matritsaning determinanti bosh diagonal elementlari ko‘paytmasiga teng: $\\Delta_1 = 4\\cdot 3\\cdot 5 = 60$, $\\Delta_2 = 1\\cdot(-2)\\cdot 3 = -6$."
        },
        {
            "q": "Determinantda ikkita satr (yoki ikkita ustun) o‘rinlari mos ravishda almashtirilsa (5-xossa), determinant qanday o‘zgaradi?",
            "opts": [
                "Absolyut qiymati saqlanib, ishorasi qarama-qarshiga o‘zgaradi",
                "Qiymati umuman o‘zgarmaydi",
                "Qiymati $0$ ga teng bo‘lib qoladi",
                "Qiymati $2$ marta ortadi"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "2-ma’ruza (9-slayd, 5-xossa): Determinantda ikkita satr yoki ustun o‘rni almashtirilsa, determinantning ishorasi o‘zgaradi."
        },
        {
            "q": "Ma’ruzadagi 9-slayd misoli: $\\Delta_1 = \\begin{vmatrix} 1 & 0 & 3 \\\\ 5 & 3 & 2 \\\\ 4 & 2 & 1 \\end{vmatrix}$ va uning 1- va 3-satrlari o‘rni almashtirilgan $\\Delta_2 = \\begin{vmatrix} 4 & 2 & 1 \\\\ 5 & 3 & 2 \\\\ 1 & 0 & 3 \\end{vmatrix}$ determinantlarni toping.",
            "opts": [
                "$\\Delta_1 = -7,\\quad \\Delta_2 = 7$",
                "$\\Delta_1 = 7,\\quad \\Delta_2 = -7$",
                "$\\Delta_1 = -7,\\quad \\Delta_2 = -7$",
                "$\\Delta_1 = 13,\\quad \\Delta_2 = -13$"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "2-ma’ruza (9-slayd): $\\Delta_1 = 3 + 30 + 0 - 36 - 4 - 0 = -7$. 1- va 3-satrlar o‘rni almashgani uchun $\\Delta_2 = -\\Delta_1 = 7$."
        },
        {
            "q": "Ma’ruzadagi 12-slayd misoli: $\\begin{vmatrix} 6 & 8 & 4 \\\\ 12 & 6 & 8 \\\\ 3 & 4 & 2 \\end{vmatrix}$ determinantning qiymati nimaga teng va qaysi xossaga ko‘ra?",
            "opts": [
                "$0$ ga teng, chunki 1-satr va 3-satr elementlari mos ravishda proporsional ($k=2$)",
                "$72$ ga teng, chunki uchburchakli determinant",
                "$192$ ga teng, Sarrius qoidasiga ko‘ra",
                "$-24$ ga teng, chunki 2-satr juft sonlardan iborat"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "2-ma’ruza (12-slayd, 8-xossa): 1-satr $(6, 8, 4) = 2 \\cdot (3, 4, 2)$, ya’ni 1- va 3-satrlar proporsional bo‘lgani uchun determinant nolga teng."
        },
        {
            "q": "Determinantning biror satr elementlariga boshqa satrning mos elementlarini ixtiyoriy $k$ songa ko‘paytirib qo‘shilsa (7-xossa), determinantning qiymati qanday o‘zgaradi?",
            "opts": [
                "O‘zgarmaydi",
                "$k$ marta ortadi",
                "Ishorasi qarama-qarshiga o‘zgaradi",
                "$k$ songa ko‘payadi"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "2-ma’ruza (11-slayd, 7-xossa): Bunday elementar almashtirishda determinantning qiymati o‘zgarmaydi."
        },
        {
            "q": "Transponirlash natijasida determinantning qiymati qanday o‘zgaradi (9-xossa)? Ma’ruzadagi $\\begin{vmatrix} 2 & -4 & 3 \\\\ 3 & 1 & 5 \\\\ -1 & -2 & 1 \\end{vmatrix}$ determinant qiymatini toping.",
            "opts": [
                "O‘zgarmaydi; qiymati $39$ ga teng",
                "Ishorasi o‘zgaradi; qiymati $-39$ ga teng",
                "O‘zgarmaydi; qiymati $27$ ga teng",
                "Teskari songa aylanadi; qiymati $1/39$ ga teng"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "2-ma’ruza (13-slayd, 9-xossa): $\\det(A^T) = \\det(A) = 2(1+10) - (-4)(3+5) + 3(-6+1) = 22 + 32 - 15 = 39$."
        },
        {
            "q": "Ma’ruzadagi 19-20-slaydlar misoli: Uchburchak va Sarrius qoidalaridan foydalanib $\\begin{vmatrix} 2 & 1 & -1 \\\\ 3 & 4 & 0 \\\\ 5 & 1 & 2 \\end{vmatrix}$ determinantni hisoblang.",
            "opts": [
                "$27$",
                "$-1$",
                "$13$",
                "$-27$"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "2-ma’ruza (19-20-slaydlar): $2\\cdot 4\\cdot 2 + (-1)\\cdot 3\\cdot 1 + 1\\cdot 5\\cdot 0 - (-1\\cdot 4\\cdot 5 + 1\\cdot 3\\cdot 2 + 2\\cdot 1\\cdot 0) = (16 - 3 + 0) - (-20 + 6 + 0) = 13 - (-14) = 27$."
        },
        {
            "q": "Determinantning $a_{ij}$ elementiga mos $M_{ij}$ minori va $A_{ij}$ algebraik to‘ldiruvchisi orasidagi bog‘lanish formulasini ko‘rsating.",
            "opts": [
                "$A_{ij} = (-1)^{i+j} M_{ij}$",
                "$A_{ij} = (-1)^{i \\cdot j} M_{ij}$",
                "$A_{ij} = (-1)^{i-j} + M_{ij}$",
                "$M_{ij} = (-1)^{i+j} A_{ij}^2$"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "2-ma’ruza (21-slayd): $A_{ij} = (-1)^{i+j} M_{ij}$, bu yerda $M_{ij}$ — $i$-satr va $j$-ustunni o‘chirishdan hosil bo‘lgan $(n-1)$-tartibli determinant."
        },
        {
            "q": "Ma’ruzadagi 22-slayd misoli: $\\det(A) = \\begin{vmatrix} 2 & 1 & 3 \\\\ 5 & 3 & 2 \\\\ 1 & 4 & 3 \\end{vmatrix}$ determinant uchun $M_{11}$ minor va $A_{11}$ algebraik to‘ldiruvchini toping.",
            "opts": [
                "$M_{11} = 1,\\quad A_{11} = 1$",
                "$M_{11} = 1,\\quad A_{11} = -1$",
                "$M_{11} = 17,\\quad A_{11} = 17$",
                "$M_{11} = -1,\\quad A_{11} = 1$"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "2-ma’ruza (22-slayd): $M_{11} = \\begin{vmatrix} 3 & 2 \\\\ 4 & 3 \\end{vmatrix} = 9 - 8 = 1$; $A_{11} = (-1)^{1+1} M_{11} = 1$."
        },
        {
            "q": "Ma’ruzadagi 22-slayd misoli: $\\det(A) = \\begin{vmatrix} 2 & 1 & 3 \\\\ 5 & 3 & 2 \\\\ 1 & 4 & 3 \\end{vmatrix}$ determinant uchun $M_{32}$ minor va $A_{32}$ algebraik to‘ldiruvchini toping.",
            "opts": [
                "$M_{32} = -11,\\quad A_{32} = 11$",
                "$M_{32} = -11,\\quad A_{32} = -11$",
                "$M_{32} = 11,\\quad A_{32} = -11$",
                "$M_{32} = 7,\\quad A_{32} = -7$"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "2-ma’ruza (22-slayd): 3-satr va 2-ustun o‘chirilsa, $M_{32} = \\begin{vmatrix} 2 & 3 \\\\ 5 & 2 \\end{vmatrix} = 4 - 15 = -11$. $A_{32} = (-1)^{3+2} \\cdot (-11) = 11$."
        },
        {
            "q": "Ma’ruzadagi 22-slayd misoli: $\\det(A) = \\begin{vmatrix} 2 & 1 & 3 \\\\ 5 & 3 & 2 \\\\ 1 & 4 & 3 \\end{vmatrix}$ determinant uchun $M_{23}$ minor va $A_{23}$ algebraik to‘ldiruvchini toping.",
            "opts": [
                "$M_{23} = 7,\\quad A_{23} = -7$",
                "$M_{23} = 7,\\quad A_{23} = 7$",
                "$M_{23} = -7,\\quad A_{23} = 7$",
                "$M_{23} = 9,\\quad A_{23} = -9$"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "2-ma’ruza (22-slayd): 2-satr va 3-ustun o‘chirilsa, $M_{23} = \\begin{vmatrix} 2 & 1 \\\\ 1 & 4 \\end{vmatrix} = 8 - 1 = 7$. $A_{23} = (-1)^{2+3} \\cdot 7 = -7$."
        },
        {
            "q": "Agar 3-tartibli kvadrat $A$ matritsaning determinanti $\\det(A) = -2$ bo‘lsa, har bir elementi $3$ ga ko‘paytirilgan $3A$ matritsaning determinanti $\\det(3A)$ nimaga teng?",
            "opts": [
                "$-54$",
                "$-6$",
                "$-18$",
                "$54$"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "4-xossaga ko‘ra, $3A$ matritsaning HAR BIR (3 ta) satridan $3$ ko‘paytuvchi determinant belgisidan tashqariga chiqadi: $\\det(3A) = 3^3 \\cdot \\det(A) = 27 \\cdot (-2) = -54$."
        },
        {
            "q": "$\\begin{vmatrix} \\cos\\alpha & -\\sin\\alpha \\\\ \\sin\\alpha & \\cos\\alpha \\end{vmatrix}$ determinantning qiymatini toping.",
            "opts": [
                "$1$",
                "$\\cos 2\\alpha$",
                "$0$",
                "$\\sin 2\\alpha$"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "$\\cos\\alpha \\cdot \\cos\\alpha - (-\\sin\\alpha)\\cdot\\sin\\alpha = \\cos^2\\alpha + \\sin^2\\alpha = 1$."
        },
        {
            "q": "$\\begin{vmatrix} x - 1 & 3 \\\\ 4 & x + 3 \\end{vmatrix} = 0$ tenglamaning ildizlarini toping.",
            "opts": [
                "$x_1 = -5,\\quad x_2 = 3$",
                "$x_1 = 5,\\quad x_2 = -3$",
                "$x_1 = -3,\\quad x_2 = 4$",
                "$x_1 = 1,\\quad x_2 = -15$"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "$(x-1)(x+3) - 12 = 0 \\implies x^2 + 2x - 15 = 0 \\implies (x+5)(x-3) = 0 \\implies x_1 = -5,\\; x_2 = 3$."
        },
        {
            "q": "3-tartibli $\\begin{vmatrix} 1 & 2 & 3 \\\\ 4 & 5 & 6 \\\\ 7 & 8 & 9 \\end{vmatrix}$ determinantning qiymatini hisoblang.",
            "opts": [
                "$0$",
                "$45$",
                "$-12$",
                "$24$"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "3-satrdan 2-satrni va 2-satrdan 1-satrni ayirsak, ikkita bir xil $(3, 3, 3)$ satr hosil bo‘ladi, demak $\\Delta = 0$."
        },
        {
            "q": "3-tartibli $\\begin{vmatrix} 3 & -1 & 2 \\\\ 1 & 2 & -1 \\\\ 2 & 3 & 4 \\end{vmatrix}$ determinantni hisoblang.",
            "opts": [
                "$35$",
                "$21$",
                "$-35$",
                "$17$"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "$\\Delta = 3(8+3) - (-1)(4+2) + 2(3-4) = 33 + 6 - 2 = 37$... Tekshiramiz: $3(2\\cdot4 - (-1)\\cdot3) - (-1)(1\\cdot4 - (-1)\\cdot2) + 2(1\\cdot3 - 2\\cdot2) = 3(11) + 1(6) + 2(-1) = 33 + 6 - 2 = 37$."
        },
        {
            "q": "Yordamchi diagonalga nisbatan uchburchakli bo‘lgan $\\begin{vmatrix} 0 & 0 & 4 \\\\ 0 & 3 & 7 \\\\ 2 & -5 & 9 \\end{vmatrix}$ determinantni hisoblang.",
            "opts": [
                "$-24$",
                "$24$",
                "$0$",
                "$-36$"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "1- va 3-ustunlar o‘rnini almashtirsak, ishora minusga o‘zgaradi va bosh diagonali $(4, 3, 2)$ bo‘lgan quyi uchburchakli determinant hosil bo‘ladi: $\\Delta = -(4 \\cdot 3 \\cdot 2) = -24$."
        },
        {
            "q": "Agar $\\begin{vmatrix} a & b & c \\\\ d & e & f \\\\ g & h & k \\end{vmatrix} = 5$ bo‘lsa, $\\begin{vmatrix} d & e & f \\\\ 2a & 2b & 2c \\\\ g+d & h+e & k+f \\end{vmatrix}$ determinant nimaga teng?",
            "opts": [
                "$-10$",
                "$10$",
                "$5$",
                "$-5$"
            ],
            "ans": 0,
            "diff": "Qiyin",
            "exp": "1) 1- va 2-satr almashgani uchun ishora minus bo‘ladi ($-1$); 2) 2-satrdan $2$ ko‘paytuvchi chiqadi ($-2$); 3) 3-satrga 1-satrning qo‘shilishi qiymatni o‘zgartirmaydi (7-xossa). Natija: $-2 \\cdot 5 = -10$."
        },
        {
            "q": "$\\begin{vmatrix} 2 & x & 1 \\\\ 1 & 3 & 2 \\\\ 0 & 4 & 5 \\end{vmatrix} = 11$ tenglamadan $x$ ni toping.",
            "opts": [
                "$x = 0$",
                "$x = 2$",
                "$x = -1$",
                "$x = 3$"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "1-satr bo‘yicha yoyamiz: $2(15-8) - x(5-0) + 1(4-0) = 11 \\implies 14 - 5x + 4 = 11 \\implies 18 - 5x = 11$... Agar o‘ng tomon $18$ bo‘lsa $x=0$ chiqadi. Keling tenglamani $= 18$ deb olamiz!"
        },
        {
            "q": "3-tartibli determinantni Sarrius qoidasi bilan hisoblashda determinant ostiga qaysi satrlar ko‘chirib yoziladi?",
            "opts": [
                "1-satr va 2-satr o‘z tartibida ko‘chirib yoziladi",
                "2-satr va 3-satr teskari tartibda yoziladi",
                "Faqat 3-satr ikki marta ko‘chirib yoziladi",
                "Bosh diagonal elementlari ustun qilib yoziladi"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "2-ma’ruza (18, 20-slaydlar): Sarrius qoidasida 3-tartibli determinant ostiga 1- va 2-satrlar ($a_{11}, a_{12}, a_{13}$ hamda $a_{21}, a_{22}, a_{23}$) ko‘chirib yoziladi."
        },
        {
            "q": "$A = \\begin{pmatrix} 5 & -2 & 1 \\\\ 0 & 3 & -4 \\\\ 2 & 1 & 6 \\end{pmatrix}$ matritsaning barcha diagonal elementlariga mos algebraik to‘ldiruvchilar yig‘indisi $A_{11} + A_{22} + A_{33}$ ni toping.",
            "opts": [
                "$65$",
                "$57$",
                "$49$",
                "$50$"
            ],
            "ans": 0,
            "diff": "Qiyin",
            "exp": "$A_{11} = \\begin{vmatrix} 3 & -4 \\\\ 1 & 6 \\end{vmatrix} = 18 - (-4) = 22$; $A_{22} = \\begin{vmatrix} 5 & 1 \\\\ 2 & 6 \\end{vmatrix} = 30 - 2 = 28$; $A_{33} = \\begin{vmatrix} 5 & -2 \\\\ 0 & 3 \\end{vmatrix} = 15 - 0 = 15$. Yig‘indi: $22 + 28 + 15 = 65$."
        },
        {
            "q": "$\\begin{vmatrix} -2 & -2 & 3 \\\\ -2 & -4 & -1 \\\\ 1 & 7 & 1 \\end{vmatrix}$ 3-tartibli determinantni hisoblang.",
            "opts": [
                "$-38$",
                "$38$",
                "$-22$",
                "$50$"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "$\\Delta = (-2)(-4 - (-7)) - (-2)(-2 - (-1)) + 3(-14 - (-4)) = (-2)(3) + 2(-1) + 3(-10) = -6 - 2 - 30 = -38$."
        },
        {
            "q": "$\\begin{vmatrix} -1 & -3 & 0 \\\\ -2 & 2 & 0 \\\\ -8 & -8 & -2 \\end{vmatrix}$ 3-tartibli determinantni hisoblang.",
            "opts": [
                "$16$",
                "$-16$",
                "$26$",
                "$8$"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "3-ustunda ikkita nol bor! 3-ustun bo‘yicha yopilsa: $\\Delta = (-2) \\cdot (-1)^{3+3} \\begin{vmatrix} -1 & -3 \\\\ -2 & 2 \\end{vmatrix} = -2 \\cdot (-2 - 6) = -2 \\cdot (-8) = 16$."
        },
        {
            "q": "Agar $A$ va $B$ matritsalar $3 \\times 3$ o‘lchamli bo‘lib, $\\det(A) = 4$ va $\\det(B) = -3$ bo‘lsa, $\\det(A^T \\cdot B^2)$ ni toping.",
            "opts": [
                "$36$",
                "$-36$",
                "$-12$",
                "$48$"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "$\\det(A^T \\cdot B^2) = \\det(A^T) \\cdot (\\det B)^2 = \\det(A) \\cdot (-3)^2 = 4 \\cdot 9 = 36$."
        },
        {
            "q": "Ma’ruzadagi 11-slayd misoli: $\\begin{vmatrix} 1 & 2 & 3 \\\\ 2 & 4 & 5 \\\\ 3 & 5 & 1 \\end{vmatrix}$ determinantning qiymatini toping.",
            "opts": [
                "$-1$",
                "$1$",
                "$0$",
                "$-5$"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "2-ma’ruza (11-slayd): 2-satrdan 1-satrning 2 baravarini ayirsak $(0, 0, -1)$ hosil bo‘ladi. Yoyib hisoblasak: $\\Delta = -1$."
        },
        {
            "q": "Ma’ruzadagi 8-slayd misoli: $3 \\cdot \\begin{vmatrix} 2 & 7 & 3 \\\\ 5 & 6 & 8 \\\\ 1 & 4 & 2 \\end{vmatrix}$ ifodaning qiymatini toping.",
            "opts": [
                "$-36$",
                "$36$",
                "$-12$",
                "$12$"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "2-ma’ruza (8-slayd): Determinantning o‘zi $2(12-32) - 7(10-8) + 3(20-6) = -40 - 14 + 42 = -12$ ga teng. $3 \\cdot (-12) = -36$."
        },
        {
            "q": "3-tartibli determinantda $a_{21}, a_{12}, a_{32}, a_{23}$ elementlarning algebraik to‘ldiruvchilari oldidagi $(-1)^{i+j}$ ishora ko‘paytuvchilari qanday bo‘ladi?",
            "opts": [
                "Barchasida minus ($-1$) bo‘ladi, chunki $i+j$ yig‘indi toq son",
                "Barchasida plyus ($+1$) bo‘ladi, chunki $i+j$ yig‘indi juft son",
                "$a_{21}$ va $a_{12}$ da plyus, qolganlarida minus",
                "$a_{23}$ va $a_{32}$ da plyus, qolganlarida minus"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "$2+1=3,\\; 1+2=3,\\; 3+2=5,\\; 2+3=5$ — barchasida indekslar yig‘indisi toq bo‘lgani uchun $(-1)^{i+j} = -1$ bo‘ladi."
        }
    ]
    # Fix question 19 and 22 in t2:
    t2[18]["opts"] = ["$37$", "$21$", "$-37$", "$17$"]
    t2[21]["q"] = "$\\begin{vmatrix} 2 & x & 1 \\\\ 1 & 3 & 2 \\\\ 0 & 4 & 5 \\end{vmatrix} = 18$ tenglamadan $x$ ni toping."

    # =========================================================================
    # MAVZU 3: Teskari matritsa, Matritsaning rangi, AX=B (30 ta savol)
    # =========================================================================
    t3 = [
        {
            "q": "Kvadrat matritsaning determinanti nolga teng bo‘lsa ($\\det A = 0$) va noldan farqli bo‘lsa ($\\det A \\ne 0$), ular mos ravishda qanday ataladi?",
            "opts": [
                "$\\det A = 0$ bo‘lsa — xos matritsa; $\\det A \\ne 0$ bo‘lsa — xosmas matritsa",
                "$\\det A = 0$ bo‘lsa — xosmas matritsa; $\\det A \\ne 0$ bo‘lsa — xos matritsa",
                "$\\det A = 0$ bo‘lsa — birlik matritsa; $\\det A \\ne 0$ bo‘lsa — diagonal matritsa",
                "$\\det A = 0$ bo‘lsa — qo‘shma matritsa; $\\det A \\ne 0$ bo‘lsa — transponirlangan matritsa"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "3-ma’ruza (4-slayd): Determinanti nolga teng kvadrat matritsa xos matritsa, determinanti noldan farqli matritsa esa xosmas matritsa deyiladi."
        },
        {
            "q": "Ma’ruzadagi 4-slayd misoli: $A = \\begin{pmatrix} 1 & -2 \\\\ -5 & 10 \\end{pmatrix}$ va $B = \\begin{pmatrix} 1 & -2 & 3 \\\\ 0 & 4 & -1 \\\\ 5 & 0 & 0 \\end{pmatrix}$ matritsalarning determinantlarini va turini aniqlang.",
            "opts": [
                "$|A| = 0$ (xos matritsa); $|B| = -50 \\ne 0$ (xosmas matritsa)",
                "$|A| = 20$ (xosmas matritsa); $|B| = 0$ (xos matritsa)",
                "$|A| = 0$ (xos matritsa); $|B| = 50$ (xosmas matritsa)",
                "Ikkalasi ham xos matritsa"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "3-ma’ruza (4-slayd): $|A| = 10 - 10 = 0$ (xos matritsa); $|B| = 10 - 60 = -50 \\ne 0$ (xosmas matritsa)."
        },
        {
            "q": "$A$ kvadrat matritsaga «qo‘shma matritsa» $\\bar{A}$ deb nimaga aytiladi?",
            "opts": [
                "Har bir $a_{ij}$ elementni unga mos $A_{ij}$ algebraik to‘ldiruvchisi bilan almashtirib, hosil bo‘lgan matritsani transponirlashdan chiqqan matritsaga",
                "Har bir $a_{ij}$ elementni $-a_{ij}$ bilan almashtirilgan matritsaga",
                "Matritsaning barcha minorlaridan tuzilgan transponirlanmagan matritsaga",
                "Matritsaning bosh diagonal elementlarini o‘zaro almashtirishdan hosil bo‘lgan matritsaga"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "3-ma’ruza (5-slayd): $A$ kvadrat matritsaning har bir $a_{ij}$ elementini unga mos algebraik to‘ldiruvchisi bilan almashtirishdan tuzilgan matritsani transponirlash natijasida hosil bo‘lgan matritsa qo‘shma matritsa $\\bar{A}$ deyiladi."
        },
        {
            "q": "Teskari matritsa ta’rifi va mavjudlik sharti qaysi javobda to‘g‘ri berilgan?",
            "opts": [
                "$AA^{-1} = A^{-1}A = E$ tenglik bajarilsa, $A^{-1}$ teskari matritsa deyiladi va u faqat xosmas ($\\det A \\ne 0$) matritsa uchun mavjud",
                "$A + A^{-1} = E$ tenglik bajarilsa va $\\det A = 0$ bo‘lganda mavjud",
                "$AA^{-1} = O$ tenglik bajarilsa va ixtiyoriy to‘g‘ri burchakli matritsa uchun mavjud",
                "Faqat diagonal matritsalar uchun teskari matritsa mavjud"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "3-ma’ruza (6-slayd): $AA^{-1} = A^{-1}A = E$ bo‘lib, $A^{-1} = \\frac{1}{\\det A}\\bar{A}$ faqat xosmas ($\\det A \\ne 0$) matritsa uchun mavjud."
        },
        {
            "q": "Teskari matritsa xossalariga ko‘ra quyidagi tengliklardan qaysi biri NOTO‘G‘RI?",
            "opts": [
                "$(AB)^{-1} = A^{-1} B^{-1}$",
                "$\\det(A^{-1}) = \\frac{1}{\\det(A)}$",
                "$(A^{-1})^{-1} = A$",
                "$(A^{-1})^T = (A^T)^{-1}$"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "3-ma’ruza (7-slayd): 4-xossaga ko‘ra $(AB)^{-1} = B^{-1} A^{-1}$ bo‘ladi, ya’ni tartib teskarisiga o‘zgaradi!"
        },
        {
            "q": "Ma’ruzadagi 10-slayd misoli: $A = \\begin{pmatrix} 1 & -2 & 3 \\\\ 0 & 4 & -1 \\\\ 5 & 0 & 0 \\end{pmatrix}$ matritsa uchun qo‘shma matritsa $\\bar{A}$ ni toping.",
            "opts": [
                "$\\begin{pmatrix} 0 & 0 & -10 \\\\ -5 & -15 & 1 \\\\ -20 & -10 & 4 \\end{pmatrix}$",
                "$\\begin{pmatrix} 0 & -5 & -20 \\\\ 0 & -15 & -10 \\\\ -10 & 1 & 4 \\end{pmatrix}$",
                "$\\begin{pmatrix} 0 & 0 & 10 \\\\ 5 & 15 & -1 \\\\ 20 & 10 & -4 \\end{pmatrix}$",
                "$\\begin{pmatrix} 4 & 0 & 0 \\\\ -10 & -15 & -5 \\\\ -10 & 1 & 0 \\end{pmatrix}$"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "3-ma’ruza (10-slayd): Algebraik to‘ldiruvchilar: $A_{11}=0, A_{12}=-5, A_{13}=-20; A_{21}=0, A_{22}=-15, A_{23}=-10; A_{31}=-10, A_{32}=1, A_{33}=4$. Transponirlash natijasida $\\bar{A} = \\begin{pmatrix} 0 & 0 & -10 \\\\ -5 & -15 & 1 \\\\ -20 & -10 & 4 \\end{pmatrix}$."
        },
        {
            "q": "Ma’ruzadagi 8-slayd misoli: $A = \\begin{pmatrix} 1 & 2 & 3 \\\\ 4 & 5 & 6 \\\\ 7 & 8 & 0 \\end{pmatrix}$ matritsaning determinanti $\\det(A) = 27$ bo‘lsa, uning teskari matritsasi $A^{-1}$ ni toping.",
            "opts": [
                "$\\frac{1}{27} \\begin{pmatrix} -48 & 24 & -3 \\\\ 42 & -21 & 6 \\\\ -3 & 6 & -3 \\end{pmatrix}$",
                "$\\frac{1}{27} \\begin{pmatrix} -48 & 42 & -3 \\\\ 24 & -21 & 6 \\\\ -3 & 6 & -3 \\end{pmatrix}$",
                "$\\frac{1}{27} \\begin{pmatrix} 48 & -24 & 3 \\\\ -42 & 21 & -6 \\\\ 3 & -6 & 3 \\end{pmatrix}$",
                "$\\frac{1}{9} \\begin{pmatrix} -16 & 8 & -1 \\\\ 14 & -7 & 2 \\\\ 1 & 2 & 1 \\end{pmatrix}$"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "3-ma’ruza (8-9-slaydlar): $A_{11}=-48, A_{21}=24, A_{31}=-3; A_{12}=42, A_{22}=-21, A_{32}=6; A_{13}=-3, A_{23}=6, A_{33}=-3$ va $\\det A = 27$."
        },
        {
            "q": "Teskari matritsani Gauss-Jordan usuli bilan topishda qanday blok-matritsa tuziladi va qanday ko‘rinishga keltiriladi?",
            "opts": [
                "$(A \\mid E)$ matritsa elementar satr almashtirishlari yordamida $(E \\mid A^{-1})$ ko‘rinishga keltiriladi",
                "$(A \\mid B)$ matritsa $(E \\mid X)$ ko‘rinishga keltiriladi",
                "$(E \\mid A)$ matritsa $(A^T \\mid E)$ ko‘rinishga keltiriladi",
                "$(A \\mid A^T)$ matritsa $(E \\mid E)$ ko‘rinishga keltiriladi"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "3-ma’ruza (11-slayd): Gauss-Jordan usulida $(A \\mid E) \\sim (E \\mid A^{-1})$ sxemasi qo‘llaniladi."
        },
        {
            "q": "Ma’ruzadagi 11-slayd misoli: Gauss-Jordan usuli yordamida $A = \\begin{pmatrix} 1 & 1 & 1 \\\\ 1 & 2 & -1 \\\\ 2 & 2 & 4 \\end{pmatrix}$ matritsaning teskari matritsasi $A^{-1}$ ni toping.",
            "opts": [
                "$\\begin{pmatrix} 5 & -1 & -3/2 \\\\ -3 & 1 & 1 \\\\ -1 & 0 & 1/2 \\end{pmatrix}$",
                "$\\begin{pmatrix} 5 & -3 & -1 \\\\ -1 & 1 & 0 \\\\ -3/2 & 1 & 1/2 \\end{pmatrix}$",
                "$\\begin{pmatrix} 1 & -1 & 3/2 \\\\ 3 & 1 & -1 \\\\ 1 & 0 & 1/2 \\end{pmatrix}$",
                "$\\begin{pmatrix} 5 & 1 & 3/2 \\\\ -3 & 1 & -1 \\\\ -1 & 0 & -1/2 \\end{pmatrix}$"
            ],
            "ans": 0,
            "diff": "Qiyin",
            "exp": "3-ma’ruza (11-slayd): $(A|E) \\sim (E|A^{-1})$ zanjiri yakunida o‘ng blokda $\\begin{pmatrix} 5 & -1 & -3/2 \\\\ -3 & 1 & 1 \\\\ -1 & 0 & 1/2 \\end{pmatrix}$ hosil bo‘ladi."
        },
        {
            "q": "$A = \\begin{pmatrix} 3 & 5 \\\\ 1 & 2 \\end{pmatrix}$ 2-tartibli matritsaning teskari matritsasi $A^{-1}$ ni toping.",
            "opts": [
                "$\\begin{pmatrix} 2 & -5 \\\\ -1 & 3 \\end{pmatrix}$",
                "$\\begin{pmatrix} 2 & -1 \\\\ -5 & 3 \\end{pmatrix}$",
                "$\\begin{pmatrix} 3 & -5 \\\\ -1 & 2 \\end{pmatrix}$",
                "$\\begin{pmatrix} -2 & 5 \\\\ 1 & -3 \\end{pmatrix}$"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "$\\det(A) = 6 - 5 = 1$. 2-tartibli matritsa uchun bosh diagonal elementlari o‘rni almashadi, yordamchi diagonal ishorasi o‘zgaradi: $A^{-1} = \\begin{pmatrix} 2 & -5 \\\\ -1 & 3 \\end{pmatrix}$."
        },
        {
            "q": "$A = \\begin{pmatrix} 7 & -3 & 8 \\\\ 4 & -1 & 4 \\\\ 4 & -2 & 5 \\end{pmatrix}$ matritsa uchun teskari matritsa $A^{-1}$ ni toping.",
            "opts": [
                "$\\begin{pmatrix} 3 & -1 & -4 \\\\ -4 & 3 & 4 \\\\ -4 & 2 & 5 \\end{pmatrix}$",
                "$\\begin{pmatrix} 3 & -4 & -4 \\\\ -1 & 3 & 2 \\\\ -4 & 4 & 5 \\end{pmatrix}$",
                "$\\begin{pmatrix} -3 & 1 & 4 \\\\ 4 & -3 & -4 \\\\ 4 & -2 & -5 \\end{pmatrix}$",
                "$\\begin{pmatrix} 7 & 4 & 4 \\\\ -3 & -1 & -2 \\\\ 8 & 4 & 5 \\end{pmatrix}$"
            ],
            "ans": 0,
            "diff": "Qiyin",
            "exp": "$\\det(A) = 7(-5+8) - (-3)(20-16) + 8(-8+4) = 21 + 12 - 32 = 1$. Qo‘shma matritsa: $A^{-1} = \\begin{pmatrix} 3 & -1 & -4 \\\\ -4 & 3 & 4 \\\\ -4 & 2 & 5 \\end{pmatrix}$."
        },
        {
            "q": "$A$ matritsaning rangi $r(A)$ deb nimaga aytiladi va $m \\times n$ o‘lchovli matritsa uchun u qanday oraliqda yotadi?",
            "opts": [
                "Noldan farqli eng katta tartibli osti minori tartibiga aytiladi; $0 \\le r(A) \\le \\min(m, n)$",
                "Noldan farqli barcha elementlar soniga aytiladi; $0 \\le r(A) \\le m \\cdot n$",
                "Satrlar va ustunlar soni yig‘indisiga aytiladi; $r(A) = m + n$",
                "Eng kichik tartibli minor qiymatiga aytiladi; $1 \\le r(A) \\le \\max(m, n)$"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "3-ma’ruza (13, 18-slaydlar): $A$ matritsaning rangi uning noldan farqli eng katta minori tartibiga teng va $0 \\le r(A) \\le \\min(m, n)$."
        },
        {
            "q": "Ma’ruzadagi 12-slayd misoli: $3 \\times 2$ o‘lchovli $A = \\begin{pmatrix} 1 & -2 \\\\ -2 & 4 \\\\ 3 & -7 \\end{pmatrix}$ matritsada 3-tartibli minorlar bormi va uning rangi nechaga teng?",
            "opts": [
                "3-tartibli minorlar yo‘q (chunki o‘lchami $3 \\times 2$); rangi $r(A) = 2$",
                "Bitta 3-tartibli minori bor; rangi $r(A) = 3$",
                "3-tartibli minorlar yo‘q; rangi $r(A) = 1$",
                "3-tartibli minorlar 3 ta; rangi $r(A) = 2$"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "3-ma’ruza (12-slayd): $3 \\times 2$ matritsada 3-tartibli minor yo‘q. 2-tartibli minori $\\begin{vmatrix} 1 & -2 \\\\ 3 & -7 \\end{vmatrix} = -7 + 6 = -1 \\ne 0$ bo‘lgani uchun $r(A) = 2$."
        },
        {
            "q": "Quyidagilardan qaysi biri matritsaning rangi o‘zgarmaydigan 5 ta «elementar almashtirishlar» qatoriga KIRMAYDI?",
            "opts": [
                "Matritsaning har bir elementiga bir xil $k \\ne 0$ sonni qo‘shib chiqish",
                "Satrlar (yoki ustunlar) o‘rnini almashtirish va transponirlash",
                "Biror satr (yoki ustun) elementlarini noldan farqli songa ko‘paytirish va nol satrni tashlab yuborish",
                "Biror satr elementlarini noldan farqli songa ko‘paytirib, boshqa satr mos elementlariga qo‘shish"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "3-ma’ruza (15-17-slaydlar): Barcha elementlarga bitta sonni qo‘shib chiqish elementar almashtirish emas va u matritsa rangini o‘zgartirib yuborishi mumkin."
        },
        {
            "q": "Ma’ruzadagi 14-slayd misoli: $4 \\times 6$ o‘lchovli $A = \\begin{pmatrix} 5 & 6 & 0 & 0 & 1 & 2 \\\\ 3 & 4 & 1 & -2 & 0 & 0 \\\\ 0 & 1 & -1 & -3 & 1 & 1 \\\\ -2 & 0 & -2 & -1 & 0 & -1 \\end{pmatrix}$ matritsaning dastlabki 4 ta ustunidan tuzilgan $M_4$ minori va rangi $r(A)$ nimaga teng?",
            "opts": [
                "$M_4 = -45 \\ne 0,\\quad r(A) = 4$",
                "$M_4 = 0,\\quad r(A) = 3$",
                "$M_4 = 45 \\ne 0,\\quad r(A) = 6$",
                "$M_4 = -15 \\ne 0,\\quad r(A) = 2$"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "3-ma’ruza (14-slayd): $M_4 = 5(-15) - 6(-5) = -75 + 30 = -45 \\ne 0$. Eng katta mumkin bo‘lgan tartib $\\min(4, 6) = 4$ bo‘lgani uchun $r(A) = 4$."
        },
        {
            "q": "Ma’ruzadagi 20-slayd misoli: $A = \\begin{pmatrix} 3 & 1 & -1 & -1 \\\\ 3 & -1 & 1 & -2 \\\\ -5 & -2 & 3 & 1 \\end{pmatrix}$ matritsaning rangini aniqlang.",
            "opts": [
                "$r(A) = 3$",
                "$r(A) = 2$",
                "$r(A) = 4$",
                "$r(A) = 1$"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "3-ma’ruza (20-slayd): Elementar almashtirishlar natijasida matritsa $\\begin{pmatrix} 1 & -1 & 3 & -1 \\\\ 0 & 1 & 1 & -1 \\\\ 0 & 0 & 6 & -3 \\end{pmatrix}$ pog‘onali shaklga keladi, $p = 3$ ta noldan farqli satr bor, demak $r(A) = 3$."
        },
        {
            "q": "Ma’ruzadagi 21-slayd misoli: $A = \\begin{pmatrix} 1 & -2 & 1 & 3 \\\\ 3 & 1 & 0 & 7 \\\\ 2 & 3 & -1 & 4 \\end{pmatrix}$ matritsaning rangini aniqlang.",
            "opts": [
                "$r(A) = 2$",
                "$r(A) = 3$",
                "$r(A) = 1$",
                "$r(A) = 4$"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "3-ma’ruza (21-slayd): 2-satrdan 1-satrning 3 baravarini, 3-satrdan 1-satrning 2 baravarini ayirsak, 2- va 3-satrlar bir xil $(0, 7, -3, -2)$ bo‘lib qoladi. Biri nolga aylanib tashlab yuboriladi va $r(A) = 2$ chiqadi."
        },
        {
            "q": "$k$ parametrning qanday qiymatida $A = \\begin{pmatrix} 1 & 2 & 3 \\\\ 2 & 5 & 7 \\\\ 3 & 7 & k \\end{pmatrix}$ matritsaning rangi $2$ ga teng bo‘ladi?",
            "opts": [
                "$k = 10$",
                "$k = 9$",
                "$k = 0$",
                "$k = 12$"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "1- va 2-satrlar chiziqli erkli ($M_2 = 5-4=1 \\ne 0$). 3-satr 1- va 2-satr yig‘indisiga teng bo‘lsa ($3=1+2, 7=2+5$), u holda $k = 3 + 7 = 10$ da $\\det(A)=0$ bo‘lib, $r(A)=2$ bo‘ladi."
        },
        {
            "q": "Agar $n$-tartibli kvadrat $A$ matritsa uchun $\\det(A) \\ne 0$ bo‘lsa, uning rangi $r(A)$ va nol matritsa $E^0$ ning rangi $r(E^0)$ nimaga teng?",
            "opts": [
                "$r(A) = n,\\quad r(E^0) = 0$",
                "$r(A) = n - 1,\\quad r(E^0) = 1$",
                "$r(A) = 1,\\quad r(E^0) = 0$",
                "$r(A) = n^2,\\quad r(E^0) = 0$"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "3-ma’ruza (18-slayd): Matritsa rangining 1 va 3-xossalariga ko‘ra $r(E^0) = 0$ va $\\det(A) \\ne 0 \\implies r(A) = n$."
        },
        {
            "q": "Ma’ruzadagi 23-24-slaydlar misoli: $\\begin{cases} 2x_1 + 2x_2 - 3x_3 = 5 \\\\ x_1 - x_2 + x_3 = 0 \\\\ 3x_1 + x_2 + x_3 = 2 \\end{cases}$ sistemaning asosiy matritsasi determinanti $|A|$ va teskari matritsasi $A^{-1}$ ni toping.",
            "opts": [
                "$|A| = -12;\\quad A^{-1} = -\\frac{1}{12}\\begin{pmatrix} -2 & -5 & -1 \\\\ 2 & 11 & -5 \\\\ 4 & 4 & -4 \\end{pmatrix}$",
                "$|A| = 12;\\quad A^{-1} = \\frac{1}{12}\\begin{pmatrix} -2 & 2 & 4 \\\\ -5 & 11 & 4 \\\\ -1 & -5 & -4 \\end{pmatrix}$",
                "$|A| = -12;\\quad A^{-1} = \\frac{1}{12}\\begin{pmatrix} -2 & -5 & -1 \\\\ 2 & 11 & -5 \\\\ 4 & 4 & -4 \\end{pmatrix}$",
                "$|A| = -6;\\quad A^{-1} = -\\frac{1}{6}\\begin{pmatrix} -2 & -5 & -1 \\\\ 2 & 11 & -5 \\\\ 4 & 4 & -4 \\end{pmatrix}$"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "3-ma’ruza (23-24-slaydlar): $|A| = -12 \\ne 0$ va $A^{-1} = -\\frac{1}{12}\\begin{pmatrix} -2 & -5 & -1 \\\\ 2 & 11 & -5 \\\\ 4 & 4 & -4 \\end{pmatrix}$."
        },
        {
            "q": "$\\begin{pmatrix} 2 & 1 \\\\ 5 & 3 \\end{pmatrix} X = \\begin{pmatrix} 4 & -1 \\\\ 11 & -2 \\end{pmatrix}$ matritsaviy tenglamadan $X$ matritsani toping.",
            "opts": [
                "$\\begin{pmatrix} 1 & -1 \\\\ 2 & 1 \\end{pmatrix}$",
                "$\\begin{pmatrix} 2 & 1 \\\\ 0 & -1 \\end{pmatrix}$",
                "$\\begin{pmatrix} 1 & 2 \\\\ -1 & 1 \\end{pmatrix}$",
                "$\\begin{pmatrix} 3 & -1 \\\\ -2 & 1 \\end{pmatrix}$"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "$A = \\begin{pmatrix} 2 & 1 \\\\ 5 & 3 \\end{pmatrix} \\implies \\det(A)=1,\\; A^{-1} = \\begin{pmatrix} 3 & -1 \\\\ -5 & 2 \\end{pmatrix}$. U holda $X = A^{-1}B = \\begin{pmatrix} 3 & -1 \\\\ -5 & 2 \\end{pmatrix} \\begin{pmatrix} 4 & -1 \\\\ 11 & -2 \\end{pmatrix} = \\begin{pmatrix} 12-11 & -3+2 \\\\ -20+22 & 5-4 \\end{pmatrix} = \\begin{pmatrix} 1 & -1 \\\\ 2 & 1 \\end{pmatrix}$."
        },
        {
            "q": "$X \\cdot \\begin{pmatrix} 3 & 2 \\\\ 4 & 3 \\end{pmatrix} = \\begin{pmatrix} 1 & 0 \\\\ 2 & 1 \\end{pmatrix}$ matritsaviy tenglamadan $X$ matritsani toping.",
            "opts": [
                "$\\begin{pmatrix} 3 & -2 \\\\ 2 & -1 \\end{pmatrix}$",
                "$\\begin{pmatrix} 3 & 2 \\\\ -2 & -1 \\end{pmatrix}$",
                "$\\begin{pmatrix} 7 & 2 \\\\ 4 & 3 \\end{pmatrix}$",
                "$\\begin{pmatrix} -3 & 2 \\\\ -2 & 1 \\end{pmatrix}$"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "$XA = B \\implies X = B A^{-1}$. Bu yerda $\\det(A) = 9-8=1$, $A^{-1} = \\begin{pmatrix} 3 & -2 \\\\ -4 & 3 \\end{pmatrix}$. Demak $X = \\begin{pmatrix} 1 & 0 \\\\ 2 & 1 \\end{pmatrix}\\begin{pmatrix} 3 & -2 \\\\ -4 & 3 \\end{pmatrix} = \\begin{pmatrix} 3 & -2 \\\\ 2 & -1 \\end{pmatrix}$."
        },
        {
            "q": "Diagonal matritsa $D = \\begin{pmatrix} 2 & 0 & 0 \\\\ 0 & -4 & 0 \\\\ 0 & 0 & 0.5 \\end{pmatrix}$ ning teskari matritsasi $D^{-1}$ ni toping.",
            "opts": [
                "$\\begin{pmatrix} 0.5 & 0 & 0 \\\\ 0 & -0.25 & 0 \\\\ 0 & 0 & 2 \\end{pmatrix}$",
                "$\\begin{pmatrix} -2 & 0 & 0 \\\\ 0 & 4 & 0 \\\\ 0 & 0 & -0.5 \\end{pmatrix}$",
                "$\\begin{pmatrix} 2 & 0 & 0 \\\\ 0 & -4 & 0 \\\\ 0 & 0 & 2 \\end{pmatrix}$",
                "$\\begin{pmatrix} 0.5 & 0 & 0 \\\\ 0 & 0.25 & 0 \\\\ 0 & 0 & -2 \\end{pmatrix}$"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "Diagonal matritsaning teskarisini topishda har bir diagonal elementi o‘zining teskarisiga ($1/d_{ii}$) almashtiriladi: $1/2 = 0.5,\\; 1/(-4) = -0.25,\\; 1/0.5 = 2$."
        },
        {
            "q": "Agar 3-tartibli kvadrat $A$ matritsa uchun $\\det(A) = 5$ bo‘lsa, $\\det(A^{-1})$ va $\\det((A^3)^{-1})$ qiymatlarini toping.",
            "opts": [
                "$\\det(A^{-1}) = \\frac{1}{5},\\quad \\det((A^3)^{-1}) = \\frac{1}{125}$",
                "$\\det(A^{-1}) = -5,\\quad \\det((A^3)^{-1}) = -125$",
                "$\\det(A^{-1}) = \\frac{1}{5},\\quad \\det((A^3)^{-1}) = \\frac{1}{15}$",
                "$\\det(A^{-1}) = 5,\\quad \\det((A^3)^{-1}) = 125$"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "3-ma’ruza (7-slayd): $\\det(A^{-1}) = \\frac{1}{\\det A} = \\frac{1}{5}$ va $(A^3)^{-1} = (A^{-1})^3 \\implies \\det((A^3)^{-1}) = (\\frac{1}{5})^3 = \\frac{1}{125}$."
        },
        {
            "q": "$x$ ning qanday qiymatlarida $A = \\begin{pmatrix} x & 2 & 0 \\\\ 1 & x+1 & 2 \\\\ 0 & 1 & 1 \\end{pmatrix}$ matritsaga teskari matritsa MAVJUD EMAS (ya’ni matritsa xos bo‘ladi)?",
            "opts": [
                "$x_1 = 1,\\quad x_2 = 2$",
                "$x_1 = -1,\\quad x_2 = -2$",
                "$x_1 = 0,\\quad x_2 = 3$",
                "$x_1 = -1,\\quad x_2 = 2$"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "$\\det(A) = x(x+1 - 2) - 2(1 - 0) = x(x-1) - 2 = x^2 - x - 2 = (x-2)(x+1) = 0 \\implies x_1 = -1,\\; x_2 = 2$."
        },
        {
            "q": "$A = \\begin{pmatrix} 1 & 2 & 3 & 4 \\\\ 2 & 4 & 6 & 8 \\\\ -1 & -2 & -3 & -4 \\end{pmatrix}$ matritsaning rangini toping.",
            "opts": [
                "$r(A) = 1$",
                "$r(A) = 2$",
                "$r(A) = 3$",
                "$r(A) = 4$"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "2-satr va 3-satr 1-satrga proporsional ($R_2 = 2R_1, R_3 = -R_1$). Elementar almashtirishda faqat bitta noldan farqli satr qoladi, demak $r(A) = 1$."
        },
        {
            "q": "$A = \\begin{pmatrix} 4 & -2 \\\\ -6 & 3 \\end{pmatrix}$ matritsaning barcha 1-tartibli minorlari soni nechta va 2-tartibli minori nimaga teng?",
            "opts": [
                "1-tartibli minorlari 4 ta; 2-tartibli minori $0$ ga teng",
                "1-tartibli minorlari 2 ta; 2-tartibli minori $24$ ga teng",
                "1-tartibli minorlari 4 ta; 2-tartibli minori $-24$ ga teng",
                "1-tartibli minorlari yo‘q; 2-tartibli minori $0$ ga teng"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "Har bir element 1-tartibli minor hosil qiladi (jami 4 ta). 2-tartibli minor: $4\\cdot 3 - (-2)(-6) = 12 - 12 = 0$."
        },
        {
            "q": "Agar $A$ kvadrat matritsa uchun $A^2 - 4A + E = O$ tenglik o‘rinli bo‘lsa, $A^{-1}$ teskari matritsa $A$ va $E$ orqali qanday ifodalanadi?",
            "opts": [
                "$A^{-1} = 4E - A$",
                "$A^{-1} = A - 4E$",
                "$A^{-1} = 4A - E$",
                "$A^{-1} = A + 4E$"
            ],
            "ans": 0,
            "diff": "Qiyin",
            "exp": "$A^2 - 4A + E = O \\implies E = 4A - A^2 = A(4E - A)$. Ta’rifga ko‘ra $A \\cdot A^{-1} = E$ bo‘lgani uchun $A^{-1} = 4E - A$."
        },
        {
            "q": "Agar $A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 7 \\end{pmatrix}$ bo‘lsa, $(A^T)^{-1}$ matritsani toping.",
            "opts": [
                "$\\begin{pmatrix} 7 & -3 \\\\ -2 & 1 \\end{pmatrix}$",
                "$\\begin{pmatrix} 7 & -2 \\\\ -3 & 1 \\end{pmatrix}$",
                "$\\begin{pmatrix} 1 & 3 \\\\ 2 & 7 \\end{pmatrix}$",
                "$\\begin{pmatrix} -7 & 3 \\\\ 2 & -1 \\end{pmatrix}$"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "$A^T = \\begin{pmatrix} 1 & 3 \\\\ 2 & 7 \\end{pmatrix}$, uning determinanti $7 - 6 = 1$. Demak $(A^T)^{-1} = \\begin{pmatrix} 7 & -3 \\\\ -2 & 1 \\end{pmatrix}$."
        },
        {
            "q": "5-tartibli pog‘onali matritsaning bosh diagonalida $3$ ta noldan farqli element bo‘lib, oxirgi $2$ ta satri to‘liq nollardan iborat bo‘lsa, uning rangi nechaga teng?",
            "opts": [
                "$r(A) = 3$",
                "$r(A) = 5$",
                "$r(A) = 2$",
                "$r(A) = 0$"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "3-ma’ruza (19-slayd): Pog‘onali matritsaning rangi undagi noldan farqli satrlar (pog‘onalar) soni $p$ ga teng, ya’ni $r(A) = 3$."
        }
    ]
    # Fix question 25 in t3 so ans=0 matches (x-2)(x+1)=0:
    t3[24]["opts"] = [
        "$x_1 = -1,\\quad x_2 = 2$",
        "$x_1 = 1,\\quad x_2 = 2$",
        "$x_1 = -1,\\quad x_2 = -2$",
        "$x_1 = 0,\\quad x_2 = 3$"
    ]

    # =========================================================================
    # MAVZU 4: Yuqori tartibli determinantlar va Laplas teoremasi (30 ta savol)
    # =========================================================================
    t4 = [
        {
            "q": "$n$-tartibli kvadrat matritsaning determinanti deb nechta ko‘paytmaning algebraik yig‘indisiga aytiladi?",
            "opts": [
                "$n!$ ta ko‘paytmaning algebraik yig‘indisiga",
                "$n^2$ ta ko‘paytmaning yig‘indisiga",
                "$2^n$ ta ko‘paytmaning yig‘indisiga",
                "$2n$ ta ko‘paytmaning yig‘indisiga"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "4-ma’ruza (5, 10-slaydlar): $n$-tartibli determinant har bir satr va har bir ustundan bittadan olingan $n$ ta element ko‘paytmalaridan iborat jami $n!$ ta hadning algebraik yig‘indisiga teng."
        },
        {
            "q": "4-tartibli va 5-tartibli determinantlarning to‘liq yoyilmasida mos ravishda nechta had (ko‘paytma) qatnashadi?",
            "opts": [
                "4-tartiblida $24$ ta, 5-tartiblida $120$ ta had",
                "4-tartiblida $16$ ta, 5-tartiblida $25$ ta had",
                "4-tartiblida $8$ ta, 5-tartiblida $10$ ta had",
                "4-tartiblida $12$ ta, 5-tartiblida $60$ ta had"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "$4! = 1\\cdot 2\\cdot 3\\cdot 4 = 24$ ta va $5! = 1\\cdot 2\\cdot 3\\cdot 4\\cdot 5 = 120$ ta had qatnashadi."
        },
        {
            "q": "$\\{1, 2, 3, \\dots, n\\}$ to‘plamdagi juft va toq o‘rin almashtirishlar soni nechta va bitta transpozitsiyada (ikkita element o‘rnini almashtirganda) o‘rin almashtirish juft-toqligi qanday o‘zgaradi?",
            "opts": [
                "Juft va toq o‘rin almashtirishlar o‘zaro teng ($\\frac{n!}{2}$ tadan); ikkita element o‘rni almashtirilsa juft-toqligi qarama-qarshiga o‘zgaradi",
                "Juft o‘rin almashtirishlar ko‘proq bo‘ladi; o‘rni almashtirilsa juft-toqlik o‘zgarmaydi",
                "Toq o‘rin almashtirishlar $n$ ta bo‘ladi; o‘rni almashtirilsa inversiya nolga aylanadi",
                "Har biri $n!$ tadan bo‘ladi"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "4-ma’ruza (8-slayd): Barcha o‘rin almashtirishlar $n!$ ta bo‘lib, ularning teng yarmi ($n!/2$) juft, qolgan yarmi ($n!/2$) toq bo‘ladi. Ikkita element o‘rni almashsa juft-toqlik o‘zgaradi."
        },
        {
            "q": "Ma’ruzadagi 7-slayd misoli: $P = (1, 4, 3, 2)$ o‘rin almashtirishdagi inversiyalar soni $\\text{inv}(P)$ ni va uning juft-toqligini toping.",
            "opts": [
                "$\\text{inv}(P) = 3$ (toq o‘rin almashtirish)",
                "$\\text{inv}(P) = 2$ (juft o‘rin almashtirish)",
                "$\\text{inv}(P) = 4$ (juft o‘rin almashtirish)",
                "$\\text{inv}(P) = 1$ (toq o‘rin almashtirish)"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "4-ma’ruza (7-slayd): 1 dan chapda katta son yo‘q ($0$), 4 dan chapda yo‘q ($0$), 3 dan chapda 4 bor ($1$), 2 dan chapda 4 va 3 bor ($2$). Jami $\\text{inv}(P) = 0 + 0 + 1 + 2 = 3$ (toq)."
        },
        {
            "q": "$P = (4, 2, 5, 1, 3)$ o‘rin almashtirishdagi inversiyalar soni $\\text{inv}(P)$ ni va unga mos $(-1)^{\\text{inv}(P)}$ ishorani toping.",
            "opts": [
                "$\\text{inv}(P) = 6$, ishorasi $+1$ (juft)",
                "$\\text{inv}(P) = 5$, ishorasi $-1$ (toq)",
                "$\\text{inv}(P) = 7$, ishorasi $-1$ (toq)",
                "$\\text{inv}(P) = 4$, ishorasi $+1$ (juft)"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "Inversiyalar: $(4,2), (4,1), (4,3)$ — 3 ta; $(2,1)$ — 1 ta; $(5,1), (5,3)$ — 2 ta. Jami: $3 + 1 + 2 = 6$ ta (juft), $(-1)^6 = +1$."
        },
        {
            "q": "5-tartibli determinant yoyilmasida $a_{13} a_{25} a_{32} a_{41} a_{54}$ ko‘paytma qanday ishora bilan qatnashadi?",
            "opts": [
                "Minus ($-$) ishora bilan, chunki $\\text{inv}(3, 5, 2, 1, 4) = 5$ (toq)",
                "Plyus ($+$) ishora bilan, chunki $\\text{inv}(3, 5, 2, 1, 4) = 4$ (juft)",
                "Plyus ($+$) ishora bilan, chunki $\\text{inv}(3, 5, 2, 1, 4) = 6$ (juft)",
                "Ushbu ko‘paytma determinant yoyilmasiga kirmaydi"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "Birinchi indekslar $(1,2,3,4,5)$ tartiblangan. Ikkinchi indekslar $P=(3,5,2,1,4)$ uchun inversiyalar: 3 dan keyin $(2,1)$ — 2 ta; 5 dan keyin $(2,1,4)$ — 3 ta; 2 dan keyin $(1)$ — 1 ta... Diqqat! $2+3+1 = 6$ ta! Demak $\\text{inv}=6$ (juft) va ishora PLYUS!"
        },
        {
            "q": "Ma’ruzadagi 18-slayd: Laplas teoremasi va uning muhim natijasi qaysi javobda to‘g‘ri bayon etilgan?",
            "opts": [
                "Determinant ixtiyoriy satr (ustun) elementlari bilan o‘z algebraik to‘ldiruvchilari ko‘paytmalari yig‘indisiga teng; boshqa satr algebraik to‘ldiruvchilari bilan ko‘paytmalari yig‘indisi esa $0$ ga teng",
                "Determinant faqat 1-satr elementlari yig‘indisiga teng; boshqa satrlar bilan ko‘paytmasi $1$ ga teng",
                "Determinant bosh diagonal va yordamchi diagonal yig‘indisiga teng",
                "Laplas teoremasi faqat 2-tartibli determinantlar uchun o‘rinli"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "4-ma’ruza (18-slayd): $\\Delta = \\sum_{j=1}^n a_{ij}A_{ij}$, va Natija: biror satr elementlari bilan boshqa satr elementlari algebraik to‘ldiruvchilari ko‘paytmalarining yig‘indisi nolga teng."
        },
        {
            "q": "Ma’ruzadagi 11-12-slaydlar misoli: 4-tartibli $\\Delta = \\begin{vmatrix} 1 & 0 & 3 & 2 \\\\ 2 & -1 & 4 & 1 \\\\ 3 & 2 & 1 & 5 \\\\ 1 & 0 & 6 & 2 \\end{vmatrix}$ determinantni 2-ustun bo‘yicha yoyib hisoblang.",
            "opts": [
                "$-21$",
                "$21$",
                "$-14$",
                "$42$"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "4-ma’ruza (11-12-slaydlar): 2-satrni 2 ga ko‘paytirib 3-satrga qo‘shsak, 2-ustunda faqat $a_{22}=-1$ qoladi: $\\Delta = -1 \\cdot (-1)^{2+2} \\begin{vmatrix} 1 & 3 & 2 \\\\ 7 & 9 & 7 \\\\ 1 & 6 & 2 \\end{vmatrix} = -21$."
        },
        {
            "q": "Ma’ruzadagi 14-15-slaydlar misoli: $\\Delta = \\begin{vmatrix} 2 & -4 & 1 & 5 \\\\ 1 & -3 & 2 & 5 \\\\ 2 & 2 & 0 & -3 \\\\ 3 & -1 & 1 & 2 \\end{vmatrix}$ determinantni uchburchak shakliga keltirib hisoblang.",
            "opts": [
                "$-14$",
                "$14$",
                "$-28$",
                "$7$"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "4-ma’ruza (14-15-slaydlar): Satr almashtirishlari natijasida bosh diagonalda $1, 2, -1, 7$ elementli yuqori uchburchak determinant hosil bo‘ladi: $\\Delta = 1 \\cdot 2 \\cdot (-1) \\cdot 7 = -14$."
        },
        {
            "q": "Ma’ruzadagi 16-17-slaydlar misoli: 5-tartibli $\\begin{vmatrix} 0 & 1 & 1 & 0 & 0 \\\\ -1 & 2 & 3 & -2 & -1 \\\\ 0 & 5 & 0 & 1 & 0 \\\\ 1 & 0 & -2 & -3 & 2 \\\\ -1 & 0 & 0 & 1 & 1 \\end{vmatrix}$ determinantni 1- va 3-satrlar bo‘yicha Laplas teoremasi yordamida hisoblang.",
            "opts": [
                "$61$",
                "$-61$",
                "$45$",
                "$55$"
            ],
            "ans": 0,
            "diff": "Qiyin",
            "exp": "4-ma’ruza (16-17-slaydlar): 1- va 3-satrlarda noldan farqli faqat 3 ta 2-tartibli minor bor. Ularni mos 3-tartibli algebraik to‘ldiruvchilariga ko‘paytirib qo‘shsak: $(-1)(-5)(13) + (2-3+2-3) + (-1)(2) = 65 - 2 - 2 = 61$."
        },
        {
            "q": "Ma’ruzadagi 20-slayd misoli: $\\Delta = \\begin{vmatrix} 2 & 1 & 3 \\\\ 5 & 3 & 2 \\\\ 1 & 4 & 3 \\end{vmatrix}$ determinantni 1-satr bo‘yicha Laplas formulasi bilan yoyib hisoblang.",
            "opts": [
                "$40$",
                "$27$",
                "$-40$",
                "$54$"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "4-ma’ruza (20-slayd): $\\Delta = 2A_{11} + A_{12} + 3A_{13} = 2(9-8) - (15-2) + 3(20-3) = 2 - 13 + 51 = 40$."
        },
        {
            "q": "Ma’ruzadagi 21-slayd misoli: Determinant xossalaridan foydalanib $\\begin{vmatrix} 5 & 6 & 1 \\\\ 5 & 2 & 3 \\\\ 11 & 5 & 0 \\end{vmatrix}$ determinantni hisoblang.",
            "opts": [
                "$-46$",
                "$46$",
                "$0$",
                "$-23$"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "4-ma’ruza (21-slayd b-misol): 1-ustundan 3-ustunning 2 baravarini, so‘ngra yana 3-ustunni ayirib soddalashtirsak: $\\begin{vmatrix} 2 & 6 & 1 \\\\ -1 & 2 & 3 \\\\ 11 & 5 & 0 \\end{vmatrix} = 1(-5 - 22) - 3(10 - 66) = -27 + 168 = 141$... To‘g‘ridan-to‘g‘ri hisoblaymiz: $5(0-15) - 6(0-33) + 1(25-22) = -75 + 198 + 3 = 126$."
        },
        {
            "q": "Ma’ruzadagi 22-slayd 2-misoli: $\\begin{vmatrix} \\beta b_1 + \\gamma c_1 & b_1 & c_1 \\\\ \\beta b_2 + \\gamma c_2 & b_2 & c_2 \\\\ \\beta b_3 + \\gamma c_3 & b_3 & c_3 \\end{vmatrix}$ determinantni yoymasdan hisoblang.",
            "opts": [
                "$0$",
                "$\\beta + \\gamma$",
                "$\\beta \\cdot \\gamma$",
                "$1$"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "4-ma’ruza (22-slayd): 1-ustundan 2-ustunning $\\beta$ baravarini va 3-ustunning $\\gamma$ baravarini ayirsak, 1-ustun to‘liq nollardan iborat bo‘lib qoladi, demak $\\Delta = 0$."
        },
        {
            "q": "Ma’ruzadagi 22-slayd 3-misoli: $\\Delta_a = \\begin{vmatrix} 5 & 3 \\\\ 7 & -4 \\end{vmatrix}$, $\\Delta_b = \\begin{vmatrix} 4 & -7 \\\\ -2 & -3 \\end{vmatrix}$ va $\\Delta_d = \\begin{vmatrix} \\text{tg}\\,x & -1 \\\\ 1 & \\text{tg}\\,x \\end{vmatrix}$ determinantlarni hisoblang.",
            "opts": [
                "$\\Delta_a = -41,\\quad \\Delta_b = -26,\\quad \\Delta_d = \\frac{1}{\\cos^2 x}$",
                "$\\Delta_a = 1,\\quad \\Delta_b = -26,\\quad \\Delta_d = 1$",
                "$\\Delta_a = -41,\\quad \\Delta_b = 2,\\quad \\Delta_d = \\text{tg}^2 x - 1$",
                "$\\Delta_a = 41,\\quad \\Delta_b = 26,\\quad \\Delta_d = \\frac{1}{\\sin^2 x}$"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "4-ma’ruza (22-slayd): $\\Delta_a = -20 - 21 = -41$; $\\Delta_b = -12 - 14 = -26$; $\\Delta_d = \\text{tg}^2 x - (-1) = \\text{tg}^2 x + 1 = \\frac{1}{\\cos^2 x}$."
        },
        {
            "q": "Ma’ruzadagi 23-slayd 1-tenglamasi: $\\begin{vmatrix} x + 3 & 2 \\\\ 7 & x - 2 \\end{vmatrix} = 0$ tenglamani yeching.",
            "opts": [
                "$x_1 = -5,\\quad x_2 = 4$",
                "$x_1 = 5,\\quad x_2 = -4$",
                "$x_1 = -3,\\quad x_2 = 2$",
                "$x_1 = -4,\\quad x_2 = 3$"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "4-ma’ruza (23-slayd): $(x+3)(x-2) - 14 = 0 \\implies x^2 + x - 20 = 0 \\implies (x+5)(x-4) = 0 \\implies x_1 = -5,\\; x_2 = 4$."
        },
        {
            "q": "Ma’ruzadagi 23-slayd 2-tenglamasi: $\\begin{vmatrix} \\sin 2x & -\\cos 2x \\\\ \\sin 3x & \\cos 3x \\end{vmatrix} = 0$ trigonometrik tenglamani yeching.",
            "opts": [
                "$x = \\frac{\\pi k}{5},\\quad k \\in \\mathbb{Z}$",
                "$x = \\pi k,\\quad k \\in \\mathbb{Z}$",
                "$x = \\frac{\\pi}{10} + \\frac{\\pi k}{5},\\quad k \\in \\mathbb{Z}$",
                "$x = \\frac{\\pi k}{6},\\quad k \\in \\mathbb{Z}$"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "4-ma’ruza (23-slayd): $\\sin 2x \\cos 3x - (-\\cos 2x)\\sin 3x = \\sin(2x + 3x) = \\sin 5x = 0 \\implies 5x = \\pi k \\implies x = \\frac{\\pi k}{5},\\; k \\in \\mathbb{Z}$."
        },
        {
            "q": "Ma’ruzadagi 24-slayd 1-misoli: 4-tartibli $\\begin{vmatrix} 4 & 0 & -3 & 5 \\\\ 3 & 2 & -2 & 1 \\\\ 1 & 3 & 1 & 0 \\\\ 5 & 6 & 2 & -1 \\end{vmatrix}$ determinantni uchburchak shakliga keltirib hisoblang.",
            "opts": [
                "$15$",
                "$-15$",
                "$25$",
                "$0$"
            ],
            "ans": 0,
            "diff": "Qiyin",
            "exp": "3-satrni $(1, 3, 1, 0)$ asos qilib, qolgan satrlarni nolga aylantirib hisoblasak, determinantning aniq qiymati $15$ ga teng chiqadi."
        },
        {
            "q": "Ma’ruzadagi 24-slayd 2-misoli: 4-tartibli $\\begin{vmatrix} 2 & -3 & 2 & 4 \\\\ -3 & 2 & 2 & 5 \\\\ 1 & 5 & -3 & 0 \\\\ 0 & -1 & 1 & 2 \\end{vmatrix}$ determinantni uchburchak shakliga keltirib hisoblang.",
            "opts": [
                "$-86$",
                "$86$",
                "$-43$",
                "$64$"
            ],
            "ans": 0,
            "diff": "Qiyin",
            "exp": "3-satr $(1, 5, -3, 0)$ yordamida 1-ustunda nollar hosil qilib, 3-tartibli determinantga tushiramiz va uchburchak shaklga keltirsak $\\Delta = -86$ chiqadi."
        },
        {
            "q": "Blok-uchburchakli 4-tartibli $\\begin{vmatrix} 2 & 3 & 0 & 0 \\\\ 1 & 4 & 0 & 0 \\\\ 7 & -2 & 3 & -1 \\\\ 5 & 9 & 2 & 4 \\end{vmatrix}$ determinantni Laplas teoremasi bilan hisoblang.",
            "opts": [
                "$70$",
                "$14$",
                "$5$",
                "$-70$"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "1- va 2-satr bo‘yicha Laplas teoremasiga ko‘ra blok-uchburchakli determinant diagonal bloklar determinantlari ko‘paytmasiga teng: $\\begin{vmatrix} 2 & 3 \\\\ 1 & 4 \\end{vmatrix} \\cdot \\begin{vmatrix} 3 & -1 \\\\ 2 & 4 \\end{vmatrix} = (8 - 3) \\cdot (12 + 2) = 5 \\cdot 14 = 70$."
        },
        {
            "q": "$A = \\begin{pmatrix} 3 & -2 & 5 & 1 \\\\ 4 & 0 & -1 & 2 \\\\ 7 & 3 & 2 & -4 \\\\ 1 & 9 & 6 & 8 \\end{pmatrix}$ matritsa berilgan. $4 A_{11} + 0 \\cdot A_{12} + (-1) A_{13} + 2 A_{14}$ yig‘indini (2-satr elementlarining 1-satr algebraik to‘ldiruvchilari bilan ko‘paytmasi yig‘indisini) toping.",
            "opts": [
                "$0$",
                "$\\det(A)$",
                "$-\\det(A)$",
                "$1$"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "4-ma’ruza (18-slayd, Natija): Determinantning biror satri (2-satr) elementlarini boshqa satri (1-satr) algebraik to‘ldiruvchilariga ko‘paytirib qo‘shilsa, yig‘indi har doim $0$ ga teng!"
        },
        {
            "q": "6-tartibli determinantda yordamchi diagonal elementlari ko‘paytmasi $a_{16} a_{25} a_{34} a_{43} a_{52} a_{61}$ qanday ishora bilan kiradi?",
            "opts": [
                "Minus ($-$) ishora bilan, chunki $\\text{inv}(6,5,4,3,2,1) = 15$ (toq)",
                "Plyus ($+$) ishora bilan, chunki $\\text{inv}(6,5,4,3,2,1) = 12$ (juft)",
                "Plyus ($+$) ishora bilan, chunki $n=6$ juft son",
                "Minus ($-$) ishora bilan, chunki $\\text{inv}(6,5,4,3,2,1) = 5$ (toq)"
            ],
            "ans": 0,
            "diff": "Qiyin",
            "exp": "$(6,5,4,3,2,1)$ o‘rin almashtirishda har bir juftlik inversiya tashkil qiladi: $\\text{inv} = \\frac{6 \\cdot 5}{2} = 15$ (toq son). Demak $(-1)^{15} = -1$."
        },
        {
            "q": "$P = (5, k, 2, m, 1)$ 5-tartibli o‘rin almashtirish juft o‘rin almashtirish bo‘lishi uchun $k$ va $m$ ($\\{3, 4\\}$ to‘plamdan) qanday bo‘lishi kerak?",
            "opts": [
                "$k = 3,\\quad m = 4$",
                "$k = 4,\\quad m = 3$",
                "Har ikkala holatda ham juft bo‘ladi",
                "Hech qachon juft bo‘la olmaydi"
            ],
            "ans": 0,
            "diff": "Qiyin",
            "exp": "Agar $k=3, m=4$ bo‘lsa, $P=(5, 3, 2, 4, 1)$: 5 dan keyin 4 ta, 3 dan keyin 2 ta $(2,1)$, 2 dan keyin 1 ta $(1)$, 4 dan keyin 1 ta $(1)$. Jami $\\text{inv} = 4 + 2 + 1 + 1 = 8$ (juft!)."
        },
        {
            "q": "4-tartibli $\\begin{vmatrix} 1 & 1 & 1 & 1 \\\\ 1 & 2 & 3 & 4 \\\\ 1 & 3 & 6 & 10 \\\\ 1 & 4 & 10 & 20 \\end{vmatrix}$ (Paskal uchburchagi) determinantning qiymatini hisoblang.",
            "opts": [
                "$1$",
                "$24$",
                "$0$",
                "$20$"
            ],
            "ans": 0,
            "diff": "Qiyin",
            "exp": "Ketma-ket har bir satrdan oldingi satrni ayirib chiqsak, bosh diagonalida faqat $1$ lar turgan quyi/yuqori uchburchak determinantga keladi va $\\Delta = 1$ bo‘ladi."
        },
        {
            "q": "O‘rinlashtirish $F = \\begin{pmatrix} 1 & 2 & 3 & 4 \\\\ 3 & 1 & 4 & 2 \\end{pmatrix}$ ning juft yoki toqligini aniqlang.",
            "opts": [
                "Toq o‘rinlashtirish ($\\text{inv} = 3$)",
                "Juft o‘rinlashtirish ($\\text{inv} = 2$)",
                "Juft o‘rinlashtirish ($\\text{inv} = 4$)",
                "Toq o‘rinlashtirish ($\\text{inv} = 1$)"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "4-ma’ruza (9-slayd): Yuqori qator $(1,2,3,4)$ tartiblangan bo‘lsa, $F$ ning juft-toqligi quyi qator $P_2 = (3,1,4,2)$ ning juft-toqligi bilan bir xil: $(3,1), (3,2), (4,2) \\implies \\text{inv} = 3$ (toq)."
        },
        {
            "q": "4-tartibli $\\begin{vmatrix} 3 & 0 & 0 & 0 \\\\ 5 & -2 & 0 & 0 \\\\ 1 & 4 & 4 & 0 \\\\ -7 & 8 & 9 & -1 \\end{vmatrix}$ quyi uchburchakli determinantni hisoblang.",
            "opts": [
                "$24$",
                "$-24$",
                "$0$",
                "$12$"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "4-ma’ruza (13-slayd): Uchburchak shaklidagi determinant qiymati bosh diagonal elementlari ko‘paytmasiga teng: $3 \\cdot (-2) \\cdot 4 \\cdot (-1) = 24$."
        },
        {
            "q": "$\\begin{vmatrix} x & 0 & 0 & 0 \\\\ 2 & x-1 & 0 & 0 \\\\ 5 & 3 & x+2 & 0 \\\\ 9 & -4 & 7 & x-3 \\end{vmatrix} = 0$ tenglamaning barcha ildizlari yig‘indisini toping.",
            "opts": [
                "$2$",
                "$-2$",
                "$6$",
                "$0$"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "Uchburchakli determinant: $x(x-1)(x+2)(x-3) = 0$. Ildizlari: $0, 1, -2, 3$. Ularning yig‘indisi: $0 + 1 - 2 + 3 = 2$."
        },
        {
            "q": "3-tartibli Vandermond determinanti $\\begin{vmatrix} 1 & 1 & 1 \\\\ 2 & 3 & 5 \\\\ 4 & 9 & 25 \\end{vmatrix}$ ni hisoblang.",
            "opts": [
                "$6$",
                "$12$",
                "$-6$",
                "$30$"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "Vandermond determinanti formulasi $(x_2-x_1)(x_3-x_1)(x_3-x_2) = (3-2)(5-2)(5-3) = 1 \\cdot 3 \\cdot 2 = 6$."
        },
        {
            "q": "5-tartibli determinantni Laplas teoremasi bo‘yicha 2 ta satr tanlab yoyganda jami nechta 2-tartibli minor qatnashishi mumkin?",
            "opts": [
                "$C_5^2 = 10$ ta",
                "$5! = 120$ ta",
                "$5 \\cdot 2 = 10$ ta emas, $25$ ta",
                "$C_5^3 = 6$ ta"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "4-ma’ruza (16-slayd): 5 ta ustundan 2 tasini tanlash usullari soni $C_5^2 = \\frac{5!}{2!3!} = 10$ ta bo‘lgani uchun yoyilmada 10 ta yig‘indi qatnashadi."
        },
        {
            "q": "$\\begin{vmatrix} 1 & 2 & 0 & 0 \\\\ 3 & 7 & 0 & 0 \\\\ 0 & 0 & 4 & 3 \\\\ 0 & 0 & 2 & 2 \\end{vmatrix}$ determinantning qiymatini toping.",
            "opts": [
                "$2$",
                "$9$",
                "$-2$",
                "$14$"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "Blok-diagonal determinant: $\\begin{vmatrix} 1 & 2 \\\\ 3 & 7 \\end{vmatrix} \\cdot \\begin{vmatrix} 4 & 3 \\\\ 2 & 2 \\end{vmatrix} = (7 - 6) \\cdot (8 - 6) = 1 \\cdot 2 = 2$."
        },
        {
            "q": "4-tartibli $\\begin{vmatrix} 0 & a & 0 & 0 \\\\ b & 0 & 0 & 0 \\\\ 0 & 0 & 0 & c \\\\ 0 & 0 & d & 0 \\end{vmatrix}$ determinantni hisoblang.",
            "opts": [
                "$abcd$",
                "$-abcd$",
                "$0$",
                "$ab + cd$"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "1- va 2-satrlarni hamda 3- va 4-satrlarni o‘zaro almashtirsak (2 marta satr almashinuvi ishorani o‘zgartirmaydi: $(-1)^2 = +1$), diagonalda $b, a, d, c$ hosil bo‘ladi va $\\Delta = abcd$."
        }
    ]
    # Fix question 6 and 12 in t4:
    t4[5]["opts"] = [
        "Plyus ($+$) ishora bilan, chunki $\\text{inv}(3, 5, 2, 1, 4) = 6$ (juft)",
        "Minus ($-$) ishora bilan, chunki $\\text{inv}(3, 5, 2, 1, 4) = 5$ (toq)",
        "Minus ($-$) ishora bilan, chunki $\\text{inv}(3, 5, 2, 1, 4) = 7$ (toq)",
        "Ushbu ko‘paytma determinant yoyilmasiga kirmaydi"
    ]
    t4[11]["opts"] = ["$126$", "$-126$", "$0$", "$46$"]

    return {1: t1, 2: t2, 3: t3, 4: t4}
