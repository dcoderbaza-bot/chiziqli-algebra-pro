# -*- coding: utf-8 -*-
# Part 1: Topics 1, 2, 3, 4 (30 PURE THEORETICAL questions each = 120 questions)

def get_part1_questions():
    # =========================================================================
    # MAVZU 1: Matritsalar va ular ustida amallar (30 ta NAZARIY savol)
    # =========================================================================
    t1 = [
        {
            "q": "«Matritsa» so‘zi qaysi tildan olingan va qanday lug‘aviy ma’noni bildiradi?",
            "opts": [
                "Lotincha so‘z bo‘lib, «birinchi manba» (asos) ma’nosini bildiradi",
                "Yunoncha so‘z bo‘lib, «to‘rtburchak jadval» ma’nosini bildiradi",
                "Arabcha so‘z bo‘lib, «hisoblash tartibi» ma’nosini bildiradi",
                "Inglizcha so‘z bo‘lib, «sonlar tarmog‘i» ma’nosini bildiradi"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "1-ma’ruza (4-slayd): «Matritsa» so‘zi lotincha so‘z bo‘lib, «birinchi manba» ma’nosini bildiradi."
        },
        {
            "q": "Matritsa to‘g‘risidagi dastlabki ma’lumotlar qaysi davlatga borib taqaladi va u yerda matritsani qanday atashgan?",
            "opts": [
                "Qadimgi Xitoyga borib taqaladi va ular matritsani «Sehrli kvadrat» deb atashgan",
                "Qadimgi Misrga borib taqaladi va uni «Oltin piramida» deb atashgan",
                "Qadimgi Yunonistonga borib taqaladi va uni «Evklid jadvali» deb atashgan",
                "Qadimgi Hindistonga borib taqaladi va uni «Shaxmat taxtasi» deb atashgan"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "1-ma’ruza (4-slayd): Matritsa to‘g‘risidagi dastlabki ma’lumotlar qadimgi Xitoyga borib taqaladi. Ular matritsani «Sehrli kvadrat» deb atashgan."
        },
        {
            "q": "Matritsalar bo‘yicha fundamental nazariyani XVIII asrda birinchilardan bo‘lib kiritgan nemis olimi kim?",
            "opts": [
                "Veyyershtrass (Weierstrass)",
                "Arximed",
                "Dekart",
                "Lobachevskiy"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "1-ma’ruza (4-slayd): Matritsalar bo‘yicha fundamental nazariyani birinchilardan bo‘lib XVIII asrda nemis olimi Veyyershtrass kiritgan."
        },
        {
            "q": "$m \\times n$ o‘lchovli matritsa deb nimaga aytiladi?",
            "opts": [
                "$m$ ta satrdan va $n$ ta ustundan iborat $m \\cdot n$ ta elementdan tuzilgan to‘g‘ri to‘rtburchakli jadvalga",
                "$n$ ta satrdan va $m$ ta ustundan iborat $m + n$ ta elementli sonlar yig‘indisiga",
                "Har doim satr va ustunlari soni teng bo‘lgan yagona songa",
                "Faqat musbat sonlardan tashkil topgan uchburchak shaklidagi jadvalga"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "1-ma’ruza (5-6-slaydlar): $m$ ta satr va $n$ ta ustundan tashkil topgan $m \\cdot n$ ta elementli to‘g‘ri burchakli jadvalga $m \\times n$ o‘lchovli matritsa deyiladi."
        },
        {
            "q": "Matritsaning umumiy elementi $a_{ij}$ yozuvidagi $i$ va $j$ indekslari nimani ifodalaydi?",
            "opts": [
                "$i$ — element joylashgan satr tartib raqamini, $j$ — element joylashgan ustun tartib raqamini",
                "$i$ — ustun tartib raqamini, $j$ — satr tartib raqamini",
                "$i$ — matritsaning darajasini, $j$ — elementning ishorasini",
                "$i$ va $j$ — matritsadagi jami elementlar sonini"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "1-ma’ruza (6-slayd): Matritsaning $i$-satr va $j$-ustun kesishmasidagi element $a_{ij}$ kabi belgilanadi."
        },
        {
            "q": "Qanday matritsaga $n$-tartibli «kvadrat matritsa» deyiladi?",
            "opts": [
                "Satrlari soni ustunlari soniga teng bo‘lgan ($m = n$), ya’ni $n$ ta satr va $n$ ta ustundan iborat matritsaga",
                "Barcha elementlari to‘liq kvadrat sonlardan iborat bo‘lgan ixtiyoriy matritsaga",
                "Faqat $2$ ta satr va $2$ ta ustundan iborat matritsaga",
                "Elementlari kvadrat ildiz ostida berilgan matritsaga"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "1-ma’ruza (7-slayd): $n$ ta satrdan va $n$ ta ustundan iborat $n \\cdot n$ ta elementdan tuzilgan $n \\times n$ o‘lchovli matritsa kvadrat matritsa deyiladi."
        },
        {
            "q": "$n$-tartibli kvadrat matritsaning «asosiy (bosh) diagonali»ni qaysi elementlar tashkil etadi?",
            "opts": [
                "Yuqori chap burchakdan quyi o‘ng burchakka yo‘nalgan $a_{11}, a_{22}, \\dots, a_{nn}$ elementlar (satr va ustun indekslari bir xil bo‘lgan elementlar)",
                "Yuqori o‘ng burchakdan quyi chap burchakka yo‘nalgan $a_{1n}, a_{2,n-1}, \\dots, a_{n1}$ elementlar",
                "Birinchi satr va birinchi ustunning barcha elementlari",
                "Matritsaning faqat chekkasida joylashgan barcha elementlar"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "1-ma’ruza (7-slayd): $a_{11}, a_{22}, \\dots, a_{nn}$ elementlar kvadrat matritsaning asosiy diagonalini tashkil qiladi."
        },
        {
            "q": "$n$-tartibli kvadrat matritsaning «yordamchi diagonali»ni qaysi elementlar tashkil etadi?",
            "opts": [
                "$a_{1n},\\; a_{2,n-1},\\; \\dots,\\; a_{n1}$ elementlar",
                "$a_{11},\\; a_{22},\\; \\dots,\\; a_{nn}$ elementlar",
                "$a_{11},\\; a_{12},\\; \\dots,\\; a_{1n}$ elementlar",
                "$a_{n1},\\; a_{n2},\\; \\dots,\\; a_{nn}$ elementlar"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "1-ma’ruza (7-slayd): Yuqori o‘ng burchakdagi $a_{1n}$ dan quyi chap burchakdagi $a_{n1}$ gacha bo‘lgan elementlar yordamchi diagonal deyiladi."
        },
        {
            "q": "«Satr matritsa» va «Ustun matritsa» o‘lchamlari qaysi javobda to‘g‘ri ko‘rsatilgan?",
            "opts": [
                "Satr matritsa o‘lchami $1 \\times n$ (bitta satr); Ustun matritsa o‘lchami $m \\times 1$ (bitta ustun)",
                "Satr matritsa o‘lchami $n \\times 1$; Ustun matritsa o‘lchami $1 \\times m$",
                "Har ikkalasining o‘lchami $n \\times n$",
                "Satr matritsa $2 \\times n$, ustun matritsa $m \\times 2$"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "1-ma’ruza (8-slayd): Satr matritsa $(1 \\times n)$ bitta satrdan, ustun matritsa $(m \\times 1)$ esa bitta ustundan iborat bo‘ladi."
        },
        {
            "q": "«Nol matritsa» ($O$ yoki $\\Theta$) deb qanday matritsaga aytiladi?",
            "opts": [
                "Barcha elementlari nolga teng bo‘lgan matritsaga ($a_{ij} = 0$)",
                "Faqat bosh diagonali elementlari nolga teng bo‘lgan matritsaga",
                "Determinanti nolga teng bo‘lgan har qanday matritsaga",
                "Satrlari va ustunlari yig‘indisi nolga teng bo‘lgan matritsaga"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "1-ma’ruza (8-slayd): Barcha elementlari nollardan iborat bo‘lgan matritsa nol matritsa deyiladi."
        },
        {
            "q": "Qanday kvadrat matritsaga «diagonal matritsa» deyiladi?",
            "opts": [
                "Bosh diagonalidan tashqaridagi barcha elementlari nolga teng bo‘lgan ($a_{ij} = 0, i \\ne j$) kvadrat matritsaga",
                "Faqat bosh diagonali elementlari nolga teng bo‘lgan matritsaga",
                "Yordamchi diagonali elementlari $1$ ga teng bo‘lgan matritsaga",
                "Barcha elementlari bir xil sondan iborat bo‘lgan matritsaga"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "1-ma’ruza (8-slayd): Bosh diagonalidan tashqari barcha elementlari nolga teng bo‘lgan kvadrat matritsa diagonal matritsa deyiladi."
        },
        {
            "q": "«Birlik matritsa» ($E$) deb qanday matritsaga aytiladi?",
            "opts": [
                "Bosh diagonali elementlari $1$ ga teng bo‘lib, qolgan barcha elementlari $0$ ga teng bo‘lgan diagonal kvadrat matritsaga",
                "Barcha elementlari $1$ ga teng bo‘lgan kvadrat matritsaga",
                "O‘lchami $1 \\times 1$ bo‘lgan matritsaga",
                "Determinanti $1$ ga teng bo‘lgan ixtiyoriy matritsaga"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "1-ma’ruza (8-slayd): Bosh diagonalida $1$ lar, qolgan barcha joylarida $0$ lar turgan kvadrat matritsa birlik matritsa deyiladi."
        },
        {
            "q": "Ikki $A$ va $B$ matritsa qachon o‘zaro teng ($A = B$) deyiladi?",
            "opts": [
                "Ularning o‘lchamlari bir xil bo‘lib, barcha mos joylaridagi elementlari o‘zaro teng bo‘lganda ($a_{ij} = b_{ij}$)",
                "Ularning determinantlari o‘zaro teng bo‘lganda ($\\det A = \\det B$)",
                "Ularning elementlari soni teng bo‘lganda (masalan $2 \\times 3$ va $3 \\times 2$)",
                "Ularning bosh diagonali elementlari yig‘indisi teng bo‘lganda"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "Ikki matritsa teng bo‘lishi uchun avvalo bir xil $m \\times n$ o‘lchamga ega bo‘lishi va barcha $i, j$ larda $a_{ij} = b_{ij}$ bo‘lishi shart."
        },
        {
            "q": "Matritsalar ustida «chiziqli amallar» deb qaysi amallarga aytiladi?",
            "opts": [
                "Matritsalarni qo‘shish, ayirish va matritsani songa ko‘paytirish amallariga",
                "Matritsalarni bir-biriga ko‘paytirish va darajaga oshirish amallariga",
                "Determinant hisoblash va teskari matritsa topish amallariga",
                "Matritsani transponirlash va rangini hisoblash amallariga"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "1-ma’ruza (10-slayd): Matritsalarni qo‘shish, ayirish va songa ko‘paytirish amallariga matritsalar ustida chiziqli amallar deyiladi."
        },
        {
            "q": "Matritsalarni qo‘shish va ayirish amallari qanday matritsalar uchun aniqlangan va qanday bajariladi?",
            "opts": [
                "Faqat bir xil o‘lchamli matritsalar uchun aniqlangan bo‘lib, ularning mos elementlari qo‘shiladi yoki ayriladi ($c_{ij} = a_{ij} \\pm b_{ij}$)",
                "Ixtiyoriy o‘lchamli matritsalar uchun aniqlangan bo‘lib, satrlar ustunlarga qo‘shiladi",
                "Faqat kvadrat matritsalar uchun aniqlangan bo‘lib, diagonal elementlari qo‘shiladi",
                "Birinchi matritsa ustunlari soni ikkinchi matritsa satrlari soniga teng bo‘lganda bajariladi"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "1-ma’ruza (11-12-slaydlar): Bir xil o‘lchamli matritsalarnigina qo‘shish va ayirish mumkin bo‘lib, bu amallar mos elementlar ustida bajariladi."
        },
        {
            "q": "Matritsalar ustidagi chiziqli amallar qanday arifmetik qonunlarga bo‘ysunadi (10-slayd)?",
            "opts": [
                "O‘rin almashtirish (kommutativlik), guruhlash (assotsiativlik) va taqsimot (distributivlik) qonunlariga bo‘ysunadi",
                "Faqat guruhlash qonuniga bo‘ysunadi, o‘rin almashtirish qonuniga bo‘ysunmaydi",
                "Hech qanday arifmetik qonunga bo‘ysunmaydi",
                "Qo‘shishda o‘rin almashtirilsa ishora qarama-qarshiga o‘zgaradi"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "1-ma’ruza (10-slayd): Chiziqli amallar o‘rin almashtirish ($A+B=B+A$), guruhlash ($A+(B+C)=(A+B)+C$) va taqsimot qonunlariga bo‘ysunadi."
        },
        {
            "q": "Matritsalar ustidagi chiziqli amallarning 8 ta xossasiga ko‘ra, nol matritsa $\\Theta$ va qarama-qarshi matritsa $-A$ uchun qaysi tengliklar o‘rinli?",
            "opts": [
                "$A + \\Theta = A,\\qquad A + (-A) = \\Theta,\\qquad 1 \\cdot A = A$",
                "$A + \\Theta = \\Theta,\\qquad A + (-A) = 2A,\\qquad 1 \\cdot A = E$",
                "$A + \\Theta = E,\\qquad A - A = 1$",
                "$A \\cdot \\Theta = A,\\qquad A + (-A) = E$"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "1-ma’ruza (10-slayd, 6, 7, 8-xossalar): $A + \\Theta = A$, $A + (-A) = \\Theta$ va $1 \\cdot A = A$."
        },
        {
            "q": "Matritsani songa ko‘paytirish ta’rifi qaysi javobda to‘g‘ri bayon etilgan?",
            "opts": [
                "Matritsani biror $k$ songa ko‘paytirish uchun berilgan son matritsaning HAR BIR elementiga ko‘paytiriladi ($c_{ij} = k \\cdot a_{ij}$)",
                "Berilgan $k$ son faqat matritsaning birinchi satri yoki birinchi ustuni elementlariga ko‘paytiriladi",
                "Berilgan $k$ son faqat matritsaning bosh diagonali elementlariga ko‘paytiriladi",
                "Matritsaning har bir elementiga $k$ soni qo‘shib chiqiladi"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "1-ma’ruza (15-16-slaydlar): Matritsani songa ko‘paytirishda berilgan son matritsaning har bir elementiga ko‘paytiriladi (determinantdan farqli ravishda!)."
        },
        {
            "q": "Matritsani songa ko‘paytirishning taqsimot (distributivlik) va guruhlash xossalari qaysi qatorda to‘g‘ri ko‘rsatilgan?",
            "opts": [
                "$k(A + B) = kA + kB,\\qquad (k + n)A = kA + nA,\\qquad k(nA) = (kn)A$",
                "$k(A + B) = kA + B,\\qquad (k + n)A = knA$",
                "$k(A + B) = k^2 A + k^2 B,\\qquad k(nA) = (k+n)A$",
                "$k(A + B) = (A + B)^k$"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "1-ma’ruza (10-slayd, 3, 4, 5-xossalar): Skalyar ko‘paytuvchiga nisbatan distributivlik va assotsiativlik xossalari o‘rinli."
        },
        {
            "q": "Ikki matritsani ko‘paytirish ($A \\cdot B$) ta’rifi va mavjudlik sharti qanday?",
            "opts": [
                "Birinchi matritsaning ustunlari soni ikkinchi matritsaning satrlari soniga teng bo‘lishi kerak; satr elementlari mos ustun elementlariga ko‘paytirilib qo‘shiladi",
                "Ikki matritsa faqat bir xil o‘lchamli bo‘lganda ko‘paytiriladi va mos elementlari o‘zaro ko‘paytiriladi ($c_{ij} = a_{ij}b_{ij}$)",
                "Birinchi matritsaning satrlari soni ikkinchi matritsaning satrlari soniga teng bo‘lishi kerak",
                "Ixtiyoriy o‘lchamli ikki matritsani har doim ko‘paytirish mumkin"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "1-ma’ruza (18-19-slaydlar): Matritsalarni ko‘paytirish uchun birinchi matritsaning ustunlari soni ikkinchi matritsaning satrlari soniga teng bo‘lishi kerak. Satrlar ustunlarga ko‘paytiriladi."
        },
        {
            "q": "Agar $A$ matritsa $m \\times n$ o‘lchamli, $B$ matritsa esa $n \\times k$ o‘lchamli bo‘lsa, ularning ko‘paytmasi $C = A \\cdot B$ qanday o‘lchamga ega bo‘ladi?",
            "opts": [
                "$m \\times k$ o‘lchamga ega bo‘ladi",
                "$n \\times n$ o‘lchamga ega bo‘ladi",
                "$m \\times n$ o‘lchamga ega bo‘ladi",
                "$k \\times m$ o‘lchamga ega bo‘ladi"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "$A_{m \\times n} \\cdot B_{n \\times k} = C_{m \\times k}$, ya’ni natijaviy matritsa birinchi matritsa satrlari soni ($m$) va ikkinchi matritsa ustunlari soni ($k$) ga ega bo‘ladi."
        },
        {
            "q": "Matritsalarni ko‘paytirish amali o‘rin almashtirish (kommutativlik) qonuniga bo‘ysunadimi?",
            "opts": [
                "Umumiy holda bo‘ysunmaydi ($AB \\ne BA$); hatto $AB$ mavjud bo‘lganda $BA$ mavjud bo‘lmasligi ham mumkin",
                "Ha, har qanday $A$ va $B$ matritsalar uchun $AB = BA$ tenglik doimo o‘rinli",
                "Faqat $2 \\times 2$ matritsalar uchun har doim $AB = BA$ o‘rinli",
                "Ko‘paytirishda o‘rin almashsa faqat ishora o‘zgaradi ($AB = -BA$)"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "Matritsalarni ko‘paytirish nokommutativ amaldir: umumiy holda $AB \\ne BA$. Maxsus $AB = BA$ shartni qanoatlantiruvchi matritsalargina kommutativ (o‘rin almashinuvchi) matritsalar deyiladi."
        },
        {
            "q": "Matritsalarni ko‘paytirish amalining 5 ta asosiy xossasi (21-slayd) qaysi javobda to‘liq va to‘g‘ri berilgan?",
            "opts": [
                "$1^\\circ.\\;(kA)B = k(AB) = A(kB);\\quad 2^\\circ.\\;(A+B)C = AC+BC;\\quad 3^\\circ.\\;A(B+C) = AB+AC;\\quad 4^\\circ.\\;A(BC) = (AB)C;\\quad 5^\\circ.\\;AE = EA = A$",
                "$1^\\circ.\\;AB = BA;\\quad 2^\\circ.\\;(AB)^2 = A^2 B^2;\\quad 3^\\circ.\\;AE = E;\\quad 4^\\circ.\\;A+E = A$",
                "$1^\\circ.\\;(kA)B = k^2 AB;\\quad 2^\\circ.\\;(A+B)C = A + BC;\\quad 3^\\circ.\\;AE = O$",
                "$1^\\circ.\\;A(BC) \\ne (AB)C;\\quad 2^\\circ.\\;AE \\ne EA$"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "1-ma’ruza (21-slayd): Ko‘paytirish amali skalyar ko‘paytuvchini chiqarish, chap va o‘ng taqsimot, guruhlash ($A(BC)=(AB)C$) hamda birlik matritsa ($AE=EA=A$) xossalariga ega."
        },
        {
            "q": "Ikki nolmas matritsaning ko‘paytmasi nol matritsaga teng bo‘lishi ($A \\ne O, B \\ne O$, ammo $A \\cdot B = O$) mumkinmi?",
            "opts": [
                "Ha, matritsalar algebrasida nolning bo‘luvchilari mavjud bo‘lib, ikki nolmas matritsa ko‘paytmasi nol matritsa bo‘lishi mumkin",
                "Yo‘q, xuddi haqiqiy sonlardagi kabi $A \\cdot B = O$ bo‘lsa, albatta $A = O$ yoki $B = O$ bo‘lishi shart",
                "Faqat birlik matritsalar ko‘paytmasi nol matritsa bo‘ladi",
                "Faqat o‘lchami $1 \\times 1$ bo‘lgan matritsalarda shunday bo‘lishi mumkin"
            ],
            "ans": 0,
            "diff": "Qiyin",
            "exp": "Sonlardan farqli ravishda, ikki xos ($\\det = 0$) nolmas matritsaning ko‘paytmasi nol matritsa $\\Theta$ berishi mumkin."
        },
        {
            "q": "Matritsani «transponirlash» deb nimaga aytiladi va u qanday belgilanadi?",
            "opts": [
                "Matritsaning satr elementlarini mos ustun elementlariga, ustun elementlarini esa mos satr elementlariga almashtirishga aytiladi va $A^T$ kabi belgilanadi",
                "Matritsaning barcha elementlari ishorasini qarama-qarshiga almashtirishga aytiladi va $-A$ kabi belgilanadi",
                "Matritsaning bosh va yordamchi diagonallarini o‘zaro almashtirishga aytiladi",
                "Matritsaning determinantini hisoblash amaliga aytiladi"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "1-ma’ruza (22-24-slaydlar): Matritsani transponirlash deb uning satr elementlarini ustun elementlariga, ustun elementlarini esa satr elementlariga almashtirishga aytiladi."
        },
        {
            "q": "Agar $A$ matritsa $m \\times n$ o‘lchamli bo‘lsa va uning $(i, j)$-elementi $a_{ij}$ bo‘lsa, transponirlangan $A^T$ matritsaning o‘lchami va $(j, i)$-elementi qanday bo‘ladi?",
            "opts": [
                "O‘lchami $n \\times m$ bo‘ladi va $(A^T)_{ji} = a_{ij}$ tenglik bajariladi",
                "O‘lchami $m \\times n$ bo‘lib qoladi va $(A^T)_{ij} = -a_{ij}$ bo‘ladi",
                "O‘lchami $m \\times m$ kvadrat shaklga keladi",
                "O‘lchami $n \\times n$ bo‘ladi va $(A^T)_{ij} = 1/a_{ij}$ bo‘ladi"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "1-ma’ruza (23-24-slaydlar): $m \\times n$ matritsa transponirlanganda satr va ustunlar soni o‘rin almashib, $n \\times m$ o‘lchamli matritsa hosil bo‘ladi."
        },
        {
            "q": "Transponirlangan matritsaning 4 ta asosiy xossasi (25-slayd) qaysi javobda to‘g‘ri berilgan?",
            "opts": [
                "$1^\\circ.\\;(A^T)^T = A;\\qquad 2^\\circ.\\;(A + B)^T = A^T + B^T;\\qquad 3^\\circ.\\;(kA)^T = kA^T;\\qquad 4^\\circ.\\;(AB)^T = B^T A^T$",
                "$1^\\circ.\\;(A^T)^T = -A;\\qquad 2^\\circ.\\;(A + B)^T = A^T B^T;\\qquad 3^\\circ.\\;(AB)^T = A^T B^T$",
                "$1^\\circ.\\;(A^T)^T = E;\\qquad 2^\\circ.\\;(kA)^T = \\frac{1}{k}A^T;\\qquad 4^\\circ.\\;(AB)^T = A^T B^T$",
                "$1^\\circ.\\;(A^T)^T = A^2;\\qquad 2^\\circ.\\;(A + B)^T = A + B^T$"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "1-ma’ruza (25-slayd): Transponirlashning 4 ta fundamental xossasi, ayniqsa 4-xossa $(AB)^T = B^T A^T$ juda muhim."
        },
        {
            "q": "Uchta mos o‘lchamli $A, B, C$ matritsalar ko‘paytmasini transponirlash $(ABC)^T$ nimaga teng?",
            "opts": [
                "$(ABC)^T = C^T B^T A^T$",
                "$(ABC)^T = A^T B^T C^T$",
                "$(ABC)^T = B^T A^T C^T$",
                "$(ABC)^T = C B A$"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "Ko‘paytmani transponirlash xossasiga ko‘ra $((AB)C)^T = C^T (AB)^T = C^T B^T A^T$."
        },
        {
            "q": "Qanday kvadrat matritsaga «simmetrik matritsa» deyiladi?",
            "opts": [
                "Transponirlanganda o‘ziga teng bo‘lgan ($A^T = A$, ya’ni barcha $i, j$ lar uchun $a_{ij} = a_{ji}$) kvadrat matritsaga",
                "Bosh diagonali elementlari o‘zaro teng bo‘lgan ixtiyoriy matritsaga",
                "Transponirlanganda ishorasi qarama-qarshiga o‘zgaruvchi ($A^T = -A$) matritsaga",
                "Satrlari soni juft bo‘lgan to‘g‘ri burchakli matritsaga"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "Agar kvadrat matritsaning bosh diagonalga nisbatan simmetrik joylashgan elementlari o‘zaro teng bo‘lsa ($a_{ij} = a_{ji}$), u holda $A^T = A$ bo‘lib, u simmetrik matritsa deyiladi."
        },
        {
            "q": "Umumiy holda ikkita kvadrat $A$ va $B$ matritsalar yig‘indisining kvadrati $(A + B)^2 = (A + B)(A + B)$ nimaga teng?",
            "opts": [
                "$A^2 + AB + BA + B^2$ ga teng (chunki umumiy holda $AB \\ne BA$)",
                "Har doim $A^2 + 2AB + B^2$ ga teng",
                "Har doim $A^2 + B^2$ ga teng",
                "$A^2 - B^2$ ga teng"
            ],
            "ans": 0,
            "diff": "Qiyin",
            "exp": "Taqsimot qonuniga ko‘ra $(A+B)(A+B) = A^2 + AB + BA + B^2$. Faqat $AB = BA$ (o‘rin almashinuvchi) bo‘lgandagina u $A^2 + 2AB + B^2$ ga aylanadi."
        }
    ]

    # =========================================================================
    # MAVZU 2: Determinantlar nazariyasi va asosiy xossalari (30 ta NAZARIY savol)
    # =========================================================================
    t2 = [
        {
            "q": "Determinant tushunchasi dastlab matematikaning qaysi masalasini yechishda foydalanilgan va keyinchalik qayerlarga tatbiq etilgan?",
            "opts": [
                "Dastlab chiziqli tenglamalar sistemasini yechishda foydalanilgan; keyinchalik xos sonlarni topishga, differensial tenglamalarni yechishga va vektor hisobiga keng tatbiq etilgan",
                "Dastlab faqat geometrik shakllar perimetrini topishda ishlatilgan",
                "Dastlab ehtimollar nazariyasida paydo bo‘lib, faqat statistikada qo‘llanilgan",
                "Dastlab sonlarni tub ko‘paytuvchilarga ajratish uchun kiritilgan"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "2-ma’ruza (4-slayd): Determinant tushunchasidan dastlab chiziqli tenglamalar sistemasini yechishda foydalanilgan bo‘lib, keyinchalik xos sonlarni topishga, differensial tenglamalar va vektor hisobiga keng tatbiq etilgan."
        },
        {
            "q": "Determinant qanday matritsalar uchun aniqlanadi va uning natijasi nima bo‘ladi?",
            "opts": [
                "Faqat kvadrat ($n \\times n$) matritsalar uchun aniqlanadi va natijasi ma’lum qoida bo‘yicha hisoblanadigan yagona son bo‘ladi",
                "Ixtiyoriy $m \\times n$ to‘g‘ri burchakli matritsa uchun aniqlanadi va natijasi yangi matritsa bo‘ladi",
                "Faqat ustun matritsalar uchun aniqlanadi va natijasi vektor bo‘ladi",
                "Faqat diagonal matritsalar uchun aniqlanadi"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "Determinant faqat kvadrat matritsaga mos qo‘yiluvchi skalyar (son) miqdordir va $\\det(A)$, $|A|$ yoki $\\Delta$ kabi belgilanadi."
        },
        {
            "q": "2-tartibli $\\begin{vmatrix} a_{11} & a_{12} \\\\ a_{21} & a_{22} \\end{vmatrix}$ determinant qaysi formula bilan aniqlanadi?",
            "opts": [
                "$a_{11} \\cdot a_{22} - a_{12} \\cdot a_{21}$ (bosh diagonal ko‘paytmasidan yordamchi diagonal ko‘paytmasi ayriladi)",
                "$a_{11} \\cdot a_{22} + a_{12} \\cdot a_{21}$ (ikkala diagonal ko‘paytmalari qo‘shiladi)",
                "$a_{11} \\cdot a_{12} - a_{21} \\cdot a_{22}$ (satr elementlari ko‘paytmalari ayriladi)",
                "$(a_{11} + a_{22}) - (a_{12} + a_{21})$"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "2-ma’ruza (15-slayd): 2-tartibli determinant $\\Delta = a_{11} \\cdot a_{22} - a_{12} \\cdot a_{21}$ formula bilan aniqlanadi."
        },
        {
            "q": "Determinantning 1-xossasi: Agar determinantning biror satr yoki biror ustun elementlarining barchasi nolga teng bo‘lsa, uning qiymati nimaga teng bo‘ladi?",
            "opts": [
                "Nolga teng bo‘ladi ($\\Delta = 0$)",
                "Birga teng bo‘ladi ($\\Delta = 1$)",
                "Qolgan satr elementlari ko‘paytmasiga teng bo‘ladi",
                "Aniqlab bo‘lmaydi"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "2-ma’ruza (5-slayd, 1-xossa): Agar determinantning biror satr yoki biror ustun elementlarining barchasi nolga teng bo‘lsa, uning qiymati nolga teng bo‘ladi."
        },
        {
            "q": "Determinantning 2-xossasi: Diagonal matritsaning determinanti nimaga teng?",
            "opts": [
                "Diagonal elementlarining ko‘paytmasiga teng ($a_{11} \\cdot a_{22} \\cdot \\dots \\cdot a_{nn}$)",
                "Diagonal elementlarining yig‘indisiga teng ($a_{11} + a_{22} + \\dots + a_{nn}$)",
                "Har doim nolga teng",
                "Har doim birga teng"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "2-ma’ruza (6-slayd, 2-xossa): Diagonal matritsaning determinanti diagonal elementlarining ko‘paytmasiga teng."
        },
        {
            "q": "Determinantning 3-xossasi: Yuqori yoki quyi uchburchakli matritsaning determinanti nimaga teng?",
            "opts": [
                "Uning bosh diagonal elementlari ko‘paytmasiga teng ($a_{11} \\cdot a_{22} \\cdot \\dots \\cdot a_{nn}$)",
                "Uning yordamchi diagonal elementlari ko‘paytmasiga teng",
                "Noldan farqli barcha elementlari yig‘indisiga teng",
                "Bosh diagonal elementlari yig‘indisiga teng"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "2-ma’ruza (7-slayd, 3-xossa): Yuqori yoki quyi uchburchakli matritsaning determinanti uning bosh diagonal elementlari ko‘paytmasiga teng."
        },
        {
            "q": "Determinantning 4-xossasi: Determinantning biror satr yoki biror ustun elementlarini $k \\ne 0$ songa ko‘paytirish qanday natijaga olib keladi?",
            "opts": [
                "Determinantning qiymati shu $k$ songa ko‘payadi; aksincha, biror satr yoki ustunning umumiy ko‘paytuvchisini determinant belgisidan tashqariga chiqarish mumkin",
                "Determinantning qiymati $k^n$ marta ortadi",
                "Determinantning qiymati o‘zgarmaydi",
                "Determinantning qiymati $k$ ga bo‘linadi"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "2-ma’ruza (8-slayd, 4-xossa): Biror satr yoki ustun elementlarini $k$ songa ko‘paytirish determinantni shu songa ko‘paytirishga teng kuchlidir."
        },
        {
            "q": "Matritsani $k$ songa ko‘paytirish bilan determinantni $k$ songa ko‘paytirish orasida qanday muhim nazariy farq bor?",
            "opts": [
                "Matritsani $k$ songa ko‘paytirganda barcha elementlar $k$ ga ko‘payadi ($\\det(kA) = k^n \\det A$); determinantni $k$ ga ko‘paytirganda esa faqat bitta satr yoki bitta ustun elementlari $k$ ga ko‘payadi",
                "Ikkala amal mutlaqo bir xil bajariladi va $\\det(kA) = k \\det(A)$ bo‘ladi",
                "Determinantni songa ko‘paytirganda barcha elementlar shu songa ko‘paytiriladi",
                "Matritsani songa ko‘paytirganda faqat bosh diagonal elementlari ko‘paytiriladi"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "$n$-tartibli $kA$ matritsada $n$ ta satrning har biri $k$ ga ko‘paygani uchun 4-xossaga ko‘ra har bir satrdan $k$ tashqariga chiqadi va $\\det(kA) = k^n \\det(A)$ bo‘ladi."
        },
        {
            "q": "Determinantning 5-xossasi: Determinantda ikkita satr yoki ikkita ustun o‘rinlari mos ravishda almashtirilsa, determinant qanday o‘zgaradi?",
            "opts": [
                "Determinantning ishorasi qarama-qarshiga o‘zgaradi ($\\Delta' = -\\Delta$)",
                "Determinantning qiymati va ishorasi o‘zgarmaydi",
                "Determinantning qiymati nolga aylanadi",
                "Determinantning qiymati teskari songa ($1/\\Delta$) aylanadi"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "2-ma’ruza (9-slayd, 5-xossa): Determinantda ikkita satr yoki ustun o‘rinlari mos ravishda almashtirilsa, determinantning ishorasi o‘zgaradi."
        },
        {
            "q": "Determinantning 6-xossasi: Agar determinant ikkita bir xil satr yoki ikkita bir xil ustunga ega bo‘lsa, uning qiymati nimaga teng bo‘ladi?",
            "opts": [
                "Nolga teng bo‘ladi ($\\Delta = 0$)",
                "Shu satr elementlari ko‘paytmasining ikki baravariga teng bo‘ladi",
                "Birga teng bo‘ladi ($\\Delta = 1$)",
                "Manfiy songa teng bo‘ladi"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "2-ma’ruza (10-slayd, 6-xossa): Agar determinant ikkita bir xil satr yoki ustunga ega bo‘lsa, uning qiymati nolga teng bo‘ladi."
        },
        {
            "q": "Determinantning 7-xossasi: Agar determinantning biror satr (ustun) elementlariga boshqa bir satr (ustun)ning mos elementlarini ixtiyoriy songa ko‘paytirib qo‘shilsa, uning qiymati qanday o‘zgaradi?",
            "opts": [
                "Uning qiymati o‘zgarmaydi",
                "Uning qiymati shu ko‘paytirilgan songa ko‘payadi",
                "Uning ishorasi qarama-qarshiga o‘zgaradi",
                "Uning qiymati nolga teng bo‘lib qoladi"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "2-ma’ruza (11-slayd, 7-xossa): Biror satr (ustun) elementlariga boshqa bir satr (ustun)ning mos elementlarini ixtiyoriy songa ko‘paytirib qo‘shilsa, determinantning qiymati o‘zgarmaydi."
        },
        {
            "q": "Determinantning 8-xossasi: Agar determinantning ikki satr (ustun) elementlari mos ravishda proporsional bo‘lsa, uning qiymati nimaga teng bo‘ladi va nima uchun?",
            "opts": [
                "Nolga teng bo‘ladi ($\\Delta = 0$), chunki proporsionallik koeffitsiyentini tashqariga chiqarsak, ikkita bir xil satrli determinant hosil bo‘ladi",
                "Proporsionallik koeffitsiyenti $k$ ga teng bo‘ladi",
                "Birga teng bo‘ladi",
                "Proporsionallik koeffitsiyenti kvadratiga teng bo‘ladi"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "2-ma’ruza (12-slayd, 8-xossa): Ikki satr (ustun) proporsional bo‘lsa, 4 va 6-xossalarga ko‘ra $\\Delta = k \\cdot 0 = 0$ bo‘ladi."
        },
        {
            "q": "Determinantning 9-xossasi: Matritsani transponirlash natijasida determinantning qiymati qanday o‘zgaradi?",
            "opts": [
                "O‘zgarmaydi, ya’ni $\\det(A^T) = \\det(A)$",
                "Ishorasi qarama-qarshiga o‘zgaradi: $\\det(A^T) = -\\det(A)$",
                "Teskari qiymatga aylanadi: $\\det(A^T) = 1/\\det(A)$",
                "Nolga teng bo‘ladi"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "2-ma’ruza (13-slayd, 9-xossa): Transponirlash natijasida determinantning qiymati o‘zgarmaydi. Shu sababli satrlar uchun o‘rinli bo‘lgan barcha xossalar ustunlar uchun ham o‘rinli."
        },
        {
            "q": "3-tartibli determinantning to‘liq yoyilmasi formulasida nechta ko‘paytma (had) ishtirok etadi?",
            "opts": [
                "$6$ ta ko‘paytma: $3$ tasi plyus ($+$) ishora bilan va $3$ tasi minus ($-$) ishora bilan",
                "$9$ ta ko‘paytma: barchasi plyus ishora bilan",
                "$3$ ta ko‘paytma: faqat diagonal elementlar",
                "$4$ ta ko‘paytma: $2$ tasi plyus va $2$ tasi minus ishora bilan"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "2-ma’ruza (16-slayd): $\\Delta = a_{11}a_{22}a_{33} + a_{13}a_{21}a_{32} + a_{12}a_{23}a_{31} - (a_{13}a_{22}a_{31} + a_{11}a_{23}a_{32} + a_{12}a_{21}a_{33})$."
        },
        {
            "q": "3-tartibli determinantni hisoblashning «Uchburchak qoidasi»da qaysi elementlar ko‘paytmasi musbat (plyus) ishora bilan olinadi?",
            "opts": [
                "Bosh diagonal elementlari ko‘paytmasi hamda asosi bosh diagonalga parallel bo‘lgan ikkita uchburchak uchlaridagi elementlar ko‘paytmalari",
                "Yordamchi diagonal elementlari ko‘paytmasi hamda asosi yordamchi diagonalga parallel bo‘lgan ikkita uchburchak uchlaridagi elementlar ko‘paytmalari",
                "1-satr, 2-satr va 3-satr elementlarining o‘zaro ko‘paytmalari",
                "Faqat burchaklarda joylashgan 4 ta element ko‘paytmasi"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "2-ma’ruza (17, 19-slaydlar): Uchburchak qoidasida bosh diagonal va unga parallel asosli 2 ta uchburchak plyus, yordamchi diagonal va unga parallel asosli 2 ta uchburchak minus ishora bilan olinadi."
        },
        {
            "q": "3-tartibli determinantni hisoblashning «Sarrius qoidasi» qanday amalga oshiriladi?",
            "opts": [
                "Determinant ostiga 1- va 2-satrlar qaytadan ko‘chirib yoziladi, so‘ngra bosh diagonalga parallel 3 ta chiziq ko‘paytmalari qo‘shilib, yordamchi diagonalga parallel 3 ta chiziq ko‘paytmalari ayriladi",
                "Determinant ostiga 2- va 3-satrlar teskari tartibda yozilib, ustunlar yig‘indisi olinadi",
                "Determinant 2-tartibli determinantga bo‘lib yuboriladi",
                "Barcha satr elementlari qo‘shib chiqiladi"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "2-ma’ruza (18, 20-slaydlar): Sarrius sxemasida determinant ostiga dastlabki ikkita satr ($a_{11}, a_{12}, a_{13}$ va $a_{21}, a_{22}, a_{23}$) yozilib, 3 ta asosiy va 3 ta yordamchi diagonal chiziqlari bo‘yicha ko‘paytmalar hisoblanadi."
        },
        {
            "q": "Determinantning $a_{ij}$ elementiga mos «minor» ($M_{ij}$) deb nimaga aytiladi?",
            "opts": [
                "$n$-tartibli determinantda $a_{ij}$ element turgan $i$-satr va $j$-ustunni o‘chirishdan qolgan $(n-1)$-tartibli determinantga",
                "$a_{ij}$ elementning $(-1)^{i+j}$ ga ko‘paytmasiga",
                "$i$-satr va $j$-ustun elementlarining skalyar ko‘paytmasiga",
                "Determinantning eng kichik elementiga"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "2-ma’ruza (21-slayd): $M_{ij}$ minor deb $i$-satr va $j$-ustunni o‘chirishdan hosil bo‘lgan $(n-1)$-tartibli determinantga aytiladi."
        },
        {
            "q": "Determinantning $a_{ij}$ elementiga mos «algebraik to‘ldiruvchi» ($A_{ij}$) deb nimaga aytiladi?",
            "opts": [
                "$A_{ij} = (-1)^{i+j} M_{ij}$ formula bilan aniqlanuvchi miqdorga, ya’ni $(-1)^{i+j}$ ishora bilan olingan $M_{ij}$ minorga",
                "$A_{ij} = (-1)^{i \\cdot j} M_{ij}$ formula bilan aniqlanuvchi miqdorga",
                "$A_{ij} = a_{ij} \\cdot M_{ij}$ ko‘paytmaga",
                "$A_{ij} = \\Delta - M_{ij}$ ayirmaga"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "2-ma’ruza (21-22-slaydlar): $A_{ij} = (-1)^{i+j} M_{ij}$."
        },
        {
            "q": "$a_{ij}$ elementning algebraik to‘ldiruvchisi $A_{ij}$ va minori $M_{ij}$ qachon o‘zaro teng ($A_{ij} = M_{ij}$) va qachon qarama-qarshi ishorali ($A_{ij} = -M_{ij}$) bo‘ladi?",
            "opts": [
                "Indekslar yig‘indisi $i + j$ juft bo‘lsa $A_{ij} = M_{ij}$; agar $i + j$ toq bo‘lsa $A_{ij} = -M_{ij}$ bo‘ladi",
                "Indekslar ko‘paytmasi $i \\cdot j$ juft bo‘lsa $A_{ij} = M_{ij}$, toq bo‘lsa $A_{ij} = -M_{ij}$ bo‘ladi",
                "$a_{ij} > 0$ bo‘lsa $A_{ij} = M_{ij}$, $a_{ij} < 0$ bo‘lsa $A_{ij} = -M_{ij}$ bo‘ladi",
                "Har doim $A_{ij} = M_{ij}$ bo‘ladi"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "$(-1)^{i+j}$ daraja ko‘rsatkichi $i+j$ juft bo‘lganda $+1$ ga, toq bo‘lganda esa $-1$ ga teng."
        },
        {
            "q": "Birlik matritsa $E$ ning determinanti $\\det(E)$ nimaga teng?",
            "opts": [
                "Har qanday $n$ tartib uchun $\\det(E) = 1$ ga teng",
                "$\\det(E) = n$ ga teng",
                "$\\det(E) = 0$ ga teng",
                "$\\det(E) = (-1)^n$ ga teng"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "Birlik matritsa diagonal matritsa bo‘lib, uning barcha diagonal elementlari $1$ ga teng. 2-xossaga ko‘ra $\\det(E) = 1 \\cdot 1 \\cdot \\dots \\cdot 1 = 1$."
        },
        {
            "q": "Agar determinantning biror satri elementlari ikki qo‘shiluvchining yig‘indisidan ($a_{i1}+b_{i1},\\; a_{i2}+b_{i2},\\; \\dots,\\; a_{in}+b_{in}$) iborat bo‘lsa, determinant qanday xossaga ega?",
            "opts": [
                "Bunday determinant mos ravishda $i$-satrida $a_{ij}$ va $b_{ij}$ elementlar turgan, qolgan satrlari esa o‘zgarmagan ikkita determinantning yig‘indisiga teng",
                "Barcha satrlari qo‘shilgan ikkita matritsa determinantlari yig‘indisiga ($\\det(A+B) = \\det A + \\det B$) teng",
                "Ikkita determinantning ko‘paytmasiga teng",
                "Qiymati nolga teng bo‘ladi"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "Determinant chiziqlilik xossasiga ko‘ra bitta satr (yoki ustun) bo‘yicha ikkita determinant yig‘indisiga ajraladi (ammo umuman $\\det(A+B) \\ne \\det A + \\det B$)."
        },
        {
            "q": "Ikki bir xil tartibli kvadrat $A$ va $B$ matritsalar ko‘paytmasining determinanti $\\det(A \\cdot B)$ nimaga teng?",
            "opts": [
                "Ularning determinantlari ko‘paytmasiga teng: $\\det(A \\cdot B) = \\det(A) \\cdot \\det(B)$",
                "Ularning determinantlari yig‘indisiga teng: $\\det(A \\cdot B) = \\det(A) + \\det(B)$",
                "$\\det(A \\cdot B) = \\det(A) - \\det(B)$",
                "Ko‘paytma determinanti faqat diagonal matritsalar uchun topiladi"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "Ko‘paytmaning determinanti haqidagi teoremaga ko‘ra $\\det(AB) = \\det(A) \\cdot \\det(B)$."
        },
        {
            "q": "Agar determinantda satrlar (yoki ustunlar) o‘rni ketma-ket $k$ marta almashtirilsa, determinantning ishorasi qanday o‘zgaradi?",
            "opts": [
                "$(-1)^k$ ko‘paytuvchiga ko‘payadi (ya’ni $k$ juft bo‘lsa ishora saqlanadi, $k$ toq bo‘lsa qarama-qarshiga o‘zgaradi)",
                "Har doim minus ishoraga o‘zgaradi",
                "Har doim plyus ishoraga o‘zgaradi",
                "$k$ marta ortadi"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "5-xossaga ko‘ra har bitta o‘rin almashtirishda determinant $(-1)$ ga ko‘payadi, $k$ marta almashtirilganda esa $(-1)^k$ ga ko‘payadi."
        },
        {
            "q": "Agar determinantning biror satri qolgan satrlarining chiziqli kombinatsiyasidan iborat bo‘lsa, determinantning qiymati nimaga teng bo‘ladi?",
            "opts": [
                "Nolga teng bo‘ladi ($\\Delta = 0$)",
                "Chiziqli kombinatsiya koeffitsiyentlari yig‘indisiga teng bo‘ladi",
                "Birga teng bo‘ladi",
                "Chiziqli kombinatsiya koeffitsiyentlari ko‘paytmasiga teng bo‘ladi"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "7-xossaga ko‘ra qolgan satrlarni mos koeffitsiyentlar bilan ayirib tashlasak, ushbu satr to‘liq nol satrga aylanadi va 1-xossaga ko‘ra $\\Delta = 0$ bo‘ladi."
        },
        {
            "q": "Uchinchi tartibli determinantda $M_{23}$ minori qaysi elementlardan tuzilgan 2-tartibli determinant hisoblanadi?",
            "opts": [
                "2-satr va 3-ustunni o‘chirishdan qolgan $\\begin{vmatrix} a_{11} & a_{12} \\\\ a_{31} & a_{32} \\end{vmatrix}$ determinant",
                "3-satr va 2-ustunni o‘chirishdan qolgan $\\begin{vmatrix} a_{11} & a_{13} \\\\ a_{21} & a_{23} \\end{vmatrix}$ determinant",
                "1-satr va 1-ustunni o‘chirishdan qolgan $\\begin{vmatrix} a_{22} & a_{23} \\\\ a_{32} & a_{33} \\end{vmatrix}$ determinant",
                "2-satr va 2-ustunni o‘chirishdan qolgan determinant"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "2-ma’ruza (22-slayd): $M_{23}$ da birinchi indeks $2$ — o‘chiriladigan satrni, ikkinchi indeks $3$ — o‘chiriladigan ustunni bildiradi."
        },
        {
            "q": "Kvadrat $A$ matritsaning darajasi $A^m$ ($m \\in \\mathbb{N}$) ning determinanti $\\det(A^m)$ nimaga teng?",
            "opts": [
                "$(\\det A)^m$ ga teng",
                "$m \\cdot \\det(A)$ ga teng",
                "$\\det(mA)$ ga teng",
                "$(\\det A)^{1/m}$ ga teng"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "Ko‘paytma determinanti xossasiga ko‘ra $\\det(A^m) = \\det(A \\cdot A \\cdot \\dots \\cdot A) = (\\det A)^m$."
        },
        {
            "q": "Agar $n$-tartibli kvadrat matritsaning barcha elementlari ishorasi qarama-qarshiga o‘zgartirilsa ($-A$ matritsa), uning determinanti $\\det(-A)$ nimaga teng bo‘ladi?",
            "opts": [
                "$(-1)^n \\det(A)$ ga teng (ya’ni $n$ juft bo‘lsa $\\det(A)$ ga, $n$ toq bo‘lsa $-\\det(A)$ ga teng)",
                "Har doim $-\\det(A)$ ga teng",
                "Har doim $\\det(A)$ ga teng",
                "Nolga teng"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "$-A = (-1) \\cdot A$ bo‘lgani uchun har bir $n$ ta satrdan $(-1)$ ko‘paytuvchi chiqib, $\\det(-A) = (-1)^n \\det(A)$ bo‘ladi."
        },
        {
            "q": "Yordamchi diagonali ustidagi (yoki ostidagi) barcha elementlari nolga teng bo‘lgan $n$-tartibli uchburchak determinantning qiymati nimaga teng?",
            "opts": [
                "$(-1)^{\\frac{n(n-1)}{2}} \\cdot a_{1n} a_{2,n-1} \\dots a_{n1}$ ga, ya’ni ishora ko‘paytuvchisi bilan olingan yordamchi diagonal elementlari ko‘paytmasiga",
                "Bosh diagonal elementlari ko‘paytmasiga",
                "Har doim plyus ishora bilan olingan yordamchi diagonal elementlari ko‘paytmasiga",
                "Har doim nolga teng"
            ],
            "ans": 0,
            "diff": "Qiyin",
            "exp": "Ustunlarni teskari tartibda joylashtirish uchun $\\frac{n(n-1)}{2}$ marta o‘rin almashtirish bajariladi va bosh diagonal ko‘paytmasiga keladi."
        },
        {
            "q": "Kososimmetrik ($A^T = -A$) matritsaning tartibi $n$ toq son bo‘lsa (masalan $n = 3$ yoki $n = 5$), uning determinanti har doim nimaga teng bo‘ladi?",
            "opts": [
                "Har doim $0$ ga teng bo‘ladi (chunki $\\det(A) = \\det(A^T) = \\det(-A) = (-1)^n \\det(A) = -\\det(A) \\implies \\det(A) = 0$)",
                "Har doim $1$ ga teng bo‘ladi",
                "Har doim $-1$ ga teng bo‘ladi",
                "Bosh diagonal elementlari ko‘paytmasiga teng bo‘ladi"
            ],
            "ans": 0,
            "diff": "Qiyin",
            "exp": "9 va 4-xossalarga ko‘ra toq tartibli kososimmetrik matritsa uchun $\\det(A) = -\\det(A) \\implies 2\\det(A) = 0 \\implies \\det(A) = 0$ (Yakobi teoremasi)."
        },
        {
            "q": "Determinantning 7-xossasini qo‘llashda o‘zgartirilayotgan satrning o‘zini biror $k \\ne 1$ songa ko‘paytirib, unga boshqa satrni qo‘shish determinant qiymatini o‘zgartiradimi?",
            "opts": [
                "Ha, o‘zgartiradi: o‘zgartirilayotgan satrning o‘zi $k$ ga ko‘paytirilsa, determinant ham $k$ marta ortib ketadi! 7-xossada o‘zgartirilayotgan satrning o‘zi $1$ koeffitsiyent bilan qolishi shart",
                "Yo‘q, har qanday holatda ham determinant o‘zgarmaydi",
                "Determinant nolga aylanib qoladi",
                "Faqat ishorasi o‘zgaradi"
            ],
            "ans": 0,
            "diff": "Qiyin",
            "exp": "Bu talabalar eng ko‘p xato qiladigan nuqta: 7-xossada $R_i \\leftarrow R_i + k R_j$ da determinant o‘zgarmaydi, ammo $R_i \\leftarrow m R_i + k R_j$ qilinsa, determinant $m$ marta ortib ketadi!"
        }
    ]

    # =========================================================================
    # MAVZU 3: Teskari matritsa, Matritsaning rangi, AX=B (30 ta NAZARIY savol)
    # =========================================================================
    t3 = [
        {
            "q": "Qanday kvadrat matritsaga «xos matritsa» (maxsus matritsa) deyiladi?",
            "opts": [
                "Determinanti nolga teng bo‘lgan ($\\det(A) = 0$) kvadrat matritsaga",
                "Determinanti noldan farqli bo‘lgan ($\\det(A) \\ne 0$) kvadrat matritsaga",
                "Determinanti $1$ ga teng bo‘lgan kvadrat matritsaga",
                "Barcha elementlari musbat bo‘lgan matritsaga"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "3-ma’ruza (4-slayd): Kvadrat matritsaning determinanti nolga teng bo‘lsa, u holda bunday matritsaga xos matritsa deyiladi."
        },
        {
            "q": "Qanday kvadrat matritsaga «xosmas matritsa» (maxsusmas matritsa) deyiladi?",
            "opts": [
                "Determinanti noldan farqli bo‘lgan ($\\det(A) \\ne 0$) kvadrat matritsaga",
                "Determinanti nolga teng bo‘lgan ($\\det(A) = 0$) kvadrat matritsaga",
                "Satr va ustunlari soni har xil bo‘lgan to‘g‘ri burchakli matritsaga",
                "Nol matritsaga"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "3-ma’ruza (4-slayd): Determinanti noldan farqli bo‘lgan kvadrat matritsaga xosmas matritsa deyiladi."
        },
        {
            "q": "$A$ kvadrat matritsaga «qo‘shma matritsa» ($\\bar{A}$) deb qanday matritsaga aytiladi?",
            "opts": [
                "$A$ matritsaning har bir $a_{ij}$ elementini unga mos $A_{ij}$ algebraik to‘ldiruvchisi bilan almashtirishdan tuzilgan matritsani transponirlash natijasida hosil bo‘lgan matritsaga",
                "$A$ matritsaning har bir elementini uning minori $M_{ij}$ bilan almashtirilgan va transponirlanmagan matritsaga",
                "$A$ matritsani $(-1)$ songa ko‘paytirishdan hosil bo‘lgan matritsaga",
                "$A$ matritsaning satrlarini teskari tartibda yozishdan hosil bo‘lgan matritsaga"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "3-ma’ruza (5-slayd): Har bir $a_{ij}$ elementni unga mos algebraik to‘ldiruvchisi bilan almashtirishdan tuzilgan matritsani transponirlash natijasida hosil bo‘lgan matritsa qo‘shma matritsa $\\bar{A}$ deyiladi."
        },
        {
            "q": "Qo‘shma matritsa $\\bar{A}$ ning 1-satri qaysi algebraik to‘ldiruvchilardan tashkil topadi?",
            "opts": [
                "Transponirlangani sababli 1-ustun elementlarining algebraik to‘ldiruvchilaridan: $(A_{11},\\; A_{21},\\; \\dots,\\; A_{n1})$",
                "1-satr elementlarining algebraik to‘ldiruvchilaridan: $(A_{11},\\; A_{12},\\; \\dots,\\; A_{1n})$",
                "Bosh diagonal algebraik to‘ldiruvchilaridan: $(A_{11},\\; A_{22},\\; \\dots,\\; A_{nn})$",
                "Oxirgi satr algebraik to‘ldiruvchilaridan"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "3-ma’ruza (5-6-slaydlar): Algebraik to‘ldiruvchilar matritsasi transponirlanganda 1-ustun $(A_{11}, A_{21}, \\dots, A_{n1})^T$ qo‘shma matritsaning 1-satriga aylanadi."
        },
        {
            "q": "$A$ kvadrat matritsaga «teskari matritsa» ($A^{-1}$) deb qanday matritsaga aytiladi?",
            "opts": [
                "$A A^{-1} = A^{-1} A = E$ tenglikni qanoatlantiruvchi kvadrat matritsaga (bu yerda $E$ — birlik matritsa)",
                "$A + A^{-1} = O$ tenglikni qanoatlantiruvchi matritsaga",
                "$A \\cdot A^{-1} = O$ tenglikni qanoatlantiruvchi matritsaga",
                "Har bir elementi $1 / a_{ij}$ ga teng bo‘lgan matritsaga"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "3-ma’ruza (6-slayd): $A$ kvadrat matritsa uchun $AA^{-1} = A^{-1}A = E$ tenglik bajarilsa, $A^{-1}$ matritsa $A$ matritsaga teskari matritsa deyiladi."
        },
        {
            "q": "Kvadrat $A$ matritsa uchun teskari matritsa $A^{-1}$ mavjud bo‘lishining zarur va yetarli sharti nima?",
            "opts": [
                "$A$ matritsa xosmas bo‘lishi, ya’ni $\\det(A) \\ne 0$ bo‘lishi",
                "$A$ matritsa xos bo‘lishi, ya’ni $\\det(A) = 0$ bo‘lishi",
                "$A$ matritsaning barcha elementlari noldan farqli bo‘lishi",
                "$A$ matritsa simmetrik ($A^T = A$) bo‘lishi"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "3-ma’ruza (6-slayd, Izoh): Xosmas matritsa ($\\det(A) \\ne 0$) uchun teskari matritsa mavjud. Xos matritsaga teskari matritsa mavjud emas."
        },
        {
            "q": "Teskari matritsani determinant va qo‘shma matritsa orqali topish formulasi qaysi javobda to‘g‘ri berilgan?",
            "opts": [
                "$A^{-1} = \\frac{1}{\\det(A)} \\bar{A} \\quad (\\det(A) \\ne 0)$",
                "$A^{-1} = \\det(A) \\cdot \\bar{A}$",
                "$A^{-1} = \\frac{1}{\\det(A)} A^T$",
                "$A^{-1} = -\\frac{1}{\\det(A)} A$"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "3-ma’ruza (6-slayd): $A^{-1} = \\frac{1}{\\det(A)} \\bar{A}$."
        },
        {
            "q": "Teskari matritsaning 1-xossasi: Teskari matritsa determinanti $\\det(A^{-1})$ bilan boshlang‘ich matritsa determinanti $\\det(A)$ orasida qanday bog‘lanish bor?",
            "opts": [
                "$\\det(A^{-1}) = \\frac{1}{\\det(A)}$",
                "$\\det(A^{-1}) = -\\det(A)$",
                "$\\det(A^{-1}) = \\det(A)$",
                "$\\det(A^{-1}) = (\\det A)^2$"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "3-ma’ruza (7-slayd, 1-xossa): $AA^{-1} = E \\implies \\det(A)\\det(A^{-1}) = 1 \\implies \\det(A^{-1}) = \\frac{1}{\\det(A)}$."
        },
        {
            "q": "Teskari matritsaning 2 va 3-xossalariga ko‘ra, $(A^{-1})^{-1}$ va $(A^p)^{-1}$ ifodalar nimaga teng?",
            "opts": [
                "$(A^{-1})^{-1} = A\\quad$ va $\\quad (A^p)^{-1} = (A^{-1})^p$",
                "$(A^{-1})^{-1} = E\\quad$ va $\\quad (A^p)^{-1} = p A^{-1}$",
                "$(A^{-1})^{-1} = A^T\\quad$ va $\\quad (A^p)^{-1} = A^p$",
                "$(A^{-1})^{-1} = -A\\quad$ va $\\quad (A^p)^{-1} = -A^{-p}$"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "3-ma’ruza (7-slayd, 2 va 3-xossalar): $(A^{-1})^{-1} = A$ va $(A^p)^{-1} = (A^{-1})^p$."
        },
        {
            "q": "Teskari matritsaning 4 va 5-xossalariga ko‘ra, ko‘paytmaning teskarisi $(AB)^{-1}$ va transponirlangan matritsaning teskarisi $(A^T)^{-1}$ nimaga teng?",
            "opts": [
                "$(AB)^{-1} = B^{-1} A^{-1}\\quad$ va $\\quad (A^T)^{-1} = (A^{-1})^T$",
                "$(AB)^{-1} = A^{-1} B^{-1}\\quad$ va $\\quad (A^T)^{-1} = A$",
                "$(AB)^{-1} = (BA)^{-1}\\quad$ va $\\quad (A^T)^{-1} = -A^{-1}$",
                "$(AB)^{-1} = B^T A^T\\quad$ va $\\quad (A^T)^{-1} = A^T$"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "3-ma’ruza (7-slayd, 4 va 5-xossalar): $(AB)^{-1} = B^{-1}A^{-1}$ va $(A^{-1})^T = (A^T)^{-1}$."
        },
        {
            "q": "Teskari matritsani topishning «Gauss-Jordan usuli» mohiyati nimadan iborat?",
            "opts": [
                "$(A \\mid E)$ blok-matritsa tuzilib, elementar satr almashtirishlari yordamida chap blok birlik matritsa $E$ ga keltirilganda, o‘ng blokda $A^{-1}$ hosil bo‘ladi: $(A \\mid E) \\sim (E \\mid A^{-1})$",
                "$(A \\mid B)$ matritsa tuzilib, uchburchak shaklga keltiriladi",
                "$A$ matritsaning barcha minorlari Sarrius qoidasi bilan hisoblanadi",
                "$A$ matritsadan birlik matritsa $E$ ayirib tashlanadi"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "3-ma’ruza (11-slayd): Teskari matritsani topishning Gauss-Jordan usuli $(A \\mid E) \\sim (E \\mid A^{-1})$ sxemaga asoslanadi."
        },
        {
            "q": "$m \\times n$ o‘lchovli $A$ matritsaning «matritsa osti minori» va uning «tartibi» deb nimaga aytiladi?",
            "opts": [
                "Bir nechta satr yoki ustunlarni o‘chirishdan hosil bo‘lgan kvadrat matritsa determinantiga osti minori, shu kvadrat matritsaning tartibiga esa osti minorining tartibi deyiladi",
                "Matritsaning barcha elementlari ko‘paytmasiga osti minori, elementlar soniga esa uning tartibi deyiladi",
                "Faqat $1 \\times 1$ o‘lchamli elementlarga osti minori deyiladi",
                "Matritsaning satrlari va ustunlari ayirmasiga aytiladi"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "3-ma’ruza (12-slayd): $m \\times n$ o‘lchovli $A$ matritsaning bir nechta satr yoki ustunlarini o‘chirishdan hosil bo‘lgan kvadrat matritsa determinantiga matritsa osti minori deyiladi."
        },
        {
            "q": "Agar berilgan matritsa kvadrat shaklda ($n \\times n$) bo‘lsa, uning eng katta tartibli osti minori nimaga teng (12-slayd)?",
            "opts": [
                "Berilgan kvadrat matritsaning o‘z determinantiga teng ($n$-tartibli)",
                "Har doim $0$ ga teng",
                "$(n-1)$-tartibli minorga teng",
                "$1$-tartibli minorga teng"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "3-ma’ruza (12-slayd): Agar berilgan matritsa kvadrat shaklda bo‘lsa, uning eng katta tartibli minori o‘ziga (o‘z determinantiga) teng."
        },
        {
            "q": "$A$ matritsaning «rangi» ($\\text{rang}(A)$ yoki $r(A)$) deb nimaga aytiladi?",
            "opts": [
                "Uning noldan farqli eng katta osti minori tartibiga aytiladi",
                "Uning noldan farqli barcha osti minorlari qiymatlari yig‘indisiga aytiladi",
                "Matritsadagi jami satrlar va ustunlar soni ko‘paytmasiga aytiladi",
                "Matritsaning eng katta elementiga aytiladi"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "3-ma’ruza (13-slayd): $A$ matritsaning rangi deb, uning noldan farqli eng katta minori tartibiga aytiladi va $\\text{rang}(A)$ yoki $r(A)$ kabi belgilanadi."
        },
        {
            "q": "Matritsaning «elementar almashtirishlari» (15-17-slaydlar) deb qanday 5 ta amalga aytiladi?",
            "opts": [
                "1) Satr/ustunlar o‘rnini almashtirish; 2) Satr/ustunni $k \\ne 0$ songa ko‘paytirish/bo‘lish; 3) Nol satr/ustunni tashlab yuborish; 4) Transponirlash; 5) Bir satr/ustunni $k \\ne 0$ songa ko‘paytirib boshqasiga qo‘shish",
                "1) Matritsani kvadratga oshirish; 2) Barcha elementlarga son qo‘shish; 3) Diagonalni o‘chirish; 4) Teskari matritsa olish; 5) Skalyar ko‘paytirish",
                "Faqat satr elementlarini nolga ko‘paytirish va ustunlarni qo‘shish",
                "Har bir elementdan kvadrat ildiz chiqarish"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "3-ma’ruza (15-17-slaydlar): Aynan shu 5 ta amal matritsaning elementar almashtirishlari hisoblanadi."
        },
        {
            "q": "Matritsa rangining 1-xossasi: $m \\times n$ o‘lchovli $A$ matritsa uchun $r(A)$ qanday tengsizlikni qanoatlantiradi va nol matritsa $E^0$ ning rangi nimaga teng?",
            "opts": [
                "$0 \\le r(A) \\le \\min(m, n);\\qquad r(E^0) = 0$",
                "$1 \\le r(A) \\le \\max(m, n);\\qquad r(E^0) = 1$",
                "$0 \\le r(A) \\le m + n;\\qquad r(E^0) = m$",
                "$r(A) = m \\cdot n;\\qquad r(E^0) = 0$"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "3-ma’ruza (18-slayd, 1-xossa): $0 \\le r(A) \\le \\min(m, n)$ va $r(E^0) = 0$."
        },
        {
            "q": "Matritsa rangining 2-xossasi: Matritsa ustida elementar almashtirishlar bajarilganda uning rangi qanday o‘zgaradi?",
            "opts": [
                "Elementar almashtirishlarda matritsa rangi o‘zgarmaydi",
                "Satrlar o‘rni almashtirilsa rangi ishorasini o‘zgartiradi",
                "Satr songa ko‘paytirilsa rangi ham shu songa ko‘payadi",
                "Nol satr tashlab yuborilsa rangi $1$ ga kamayadi"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "3-ma’ruza (18-slayd, 2-xossa): Elementar almashtirishlarda matritsa rangi o‘zgarmaydi."
        },
        {
            "q": "Matritsa rangining 3-xossasi: $n$-tartibli kvadrat $A$ matritsa uchun $\\det(A) \\ne 0$ bo‘lishi uning rangi haqida nimani bildiradi?",
            "opts": [
                "$\\det(A) \\ne 0 \\iff r(A) = n$ (ya’ni xosmas kvadrat matritsaning rangi uning tartibiga teng)",
                "$\\det(A) \\ne 0 \\iff r(A) = 0$",
                "$\\det(A) \\ne 0 \\iff r(A) = n - 1$",
                "$\\det(A) \\ne 0 \\iff r(A) = \\det(A)$"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "3-ma’ruza (18-slayd, 3-xossa): $n$-tartibli kvadrat $A$ matritsa uchun $\\det(A) \\ne 0$ bo‘lsa, $r(A) = n$."
        },
        {
            "q": "Elementar almashtirishlar yordamida matritsa pog‘onali (trapetsiya) ko‘rinishga keltirildi va unda $\\tilde{a}_{11} \\ne 0, \\tilde{a}_{22} \\ne 0, \\dots, \\tilde{a}_{pp} \\ne 0$ ($p$ ta noldan farqli satr) hosil bo‘ldi (19-slayd). Matritsaning rangi nimaga teng?",
            "opts": [
                "$r(A) = p$ (noldan farqli pog‘onali satrlar soniga teng)",
                "$r(A) = \\tilde{a}_{11} \\cdot \\tilde{a}_{22} \\cdot \\dots \\cdot \\tilde{a}_{pp}$",
                "$r(A) = n - p$",
                "$r(A) = p + 1$"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "3-ma’ruza (19-slayd): Pog‘onali matritsada $\\tilde{a}_{11} \\ne 0, \\dots, \\tilde{a}_{pp} \\ne 0$ bo‘lsa, $r(A) = p$."
        },
        {
            "q": "$n$ ta noma’lumli $n$ ta chiziqli tenglamalar sistemasi $AX = B$ da asosiy matritsa determinanti $|A| \\ne 0$ bo‘lsa, uning yechimi teskari matritsa orqali qanday yoziladi?",
            "opts": [
                "$X = A^{-1} B$",
                "$X = B A^{-1}$",
                "$X = A B^{-1}$",
                "$X = \\frac{B}{A}$"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "3-ma’ruza (23-slayd): Agar $|A| \\ne 0$ bo‘lsa, $A^{-1}$ mavjud va $X = A^{-1}B$."
        },
        {
            "q": "Nima uchun matritsalar algebrasida bir matritsani ikkinchi matritsaga to‘g‘ridan-to‘g‘ri «bo‘lish» ($B / A$) amali kiritilmaydi, balki teskari matritsaga ko‘paytirish ($A^{-1}B$ yoki $BA^{-1}$) ishlatiladi?",
            "opts": [
                "Chunki matritsalarni ko‘paytirish nokommutativ ($A^{-1}B \\ne BA^{-1}$) bo‘lib, chapdan va o‘ngdan ko‘paytirish har xil natija beradi hamda faqat $\\det(A) \\ne 0$ bo‘lgandagina $A^{-1}$ mavjud",
                "Chunki kasr chizig‘ini yozish noqulay",
                "Chunki har doim $A^{-1}B = BA^{-1}$ bo‘ladi",
                "Chunki teskari matritsa faqat nol matritsalar uchun mavjud"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "Matritsalarni ko‘paytirish o‘rin almashinish qonuniga bo‘ysunmagani uchun $AX = B \\implies X = A^{-1}B$ va $XA = B \\implies X = BA^{-1}$ bir-biridan farq qiladi."
        },
        {
            "q": "Kvadrat $A$ matritsa uchun $A \\cdot A^{-1} = E$ tenglikni tekshirish nimani tasdiqlaydi (9-slayd)?",
            "opts": [
                "Topilgan $A^{-1}$ matritsa haqiqatan ham $A$ matritsaning teskari matritsasi ekanligini tasdiqlaydi",
                "$A$ matritsa xos matritsa ekanligini tasdiqlaydi",
                "$A$ matritsa simmetrik ekanligini tasdiqlaydi",
                "$A$ matritsaning rangi $0$ ga teng ekanligini tasdiqlaydi"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "3-ma’ruza (9-slayd): Teskari matritsa topilgach, $A^{-1} \\cdot A = A \\cdot A^{-1} = E$ bajarilishi orqali natija to‘g‘riligi tekshiriladi."
        },
        {
            "q": "2-tartibli xosmas $A = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}$ matritsa uchun qo‘shma matritsa $\\bar{A}$ va teskari matritsa $A^{-1}$ qanday ko‘rinishda bo‘ladi?",
            "opts": [
                "$\\bar{A} = \\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix},\\qquad A^{-1} = \\frac{1}{ad - bc} \\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}$",
                "$\\bar{A} = \\begin{pmatrix} a & -c \\\\ -b & d \\end{pmatrix},\\qquad A^{-1} = \\frac{1}{ad + bc} \\begin{pmatrix} a & -c \\\\ -b & d \\end{pmatrix}$",
                "$\\bar{A} = \\begin{pmatrix} -a & b \\\\ c & -d \\end{pmatrix},\\qquad A^{-1} = \\begin{pmatrix} 1/a & 1/b \\\\ 1/c & 1/d \\end{pmatrix}$",
                "$\\bar{A} = \\begin{pmatrix} d & b \\\\ c & a \\end{pmatrix},\\qquad A^{-1} = (ad - bc)\\begin{pmatrix} d & b \\\\ c & a \\end{pmatrix}$"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "2-tartibli matritsa uchun $A_{11}=d, A_{12}=-c, A_{21}=-b, A_{22}=a$. Transponirlanganda bosh diagonal elementlari ($a$ va $d$) o‘rin almashadi, yordamchi diagonal elementlari ($b$ va $c$) ishorasini o‘zgartiradi."
        },
        {
            "q": "Diagonal elementlari noldan farqli bo‘lgan $D = \\text{diag}(d_1, d_2, \\dots, d_n)$ diagonal matritsaning teskari matritsasi $D^{-1}$ qanday topiladi?",
            "opts": [
                "Har bir diagonal elementini o‘zining teskarisiga almashtirish orqali: $D^{-1} = \\text{diag}\\left(\\frac{1}{d_1},\\; \\frac{1}{d_2},\\; \\dots,\\; \\frac{1}{d_n}\\right)$",
                "Diagonal elementlarining ishorasini qarama-qarshiga o‘zgartirish orqali",
                "Diagonal elementlarini teskari tartibda yozish orqali",
                "Diagonal matritsaga teskari matritsa mavjud emas"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "$\\text{diag}(d_1, \\dots, d_n) \\cdot \\text{diag}(1/d_1, \\dots, 1/d_n) = \\text{diag}(1, \\dots, 1) = E$."
        },
        {
            "q": "Agar Gauss-Jordan usulida $(A \\mid E)$ matritsani satr almashtirishlari bilan $(E \\mid A^{-1})$ ga keltirayotganda chap blokda to‘liq nollardan iborat satr paydo bo‘lsa, bu nimani bildiradi?",
            "opts": [
                "$\\det(A) = 0$ (matritsa xos) ekanligini va berilgan $A$ matritsaga teskari matritsa mavjud emasligini bildiradi",
                "$A^{-1}$ matritsaning barcha elementlari nolga teng ekanligini bildiradi",
                "$A$ matritsa birlik matritsa ekanligini bildiradi",
                "Ustunlarni almashtirib davom ettirish kerakligini bildiradi"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "Chap blokda nol satr paydo bo‘lishi $r(A) < n \\iff \\det(A) = 0$ ekanligini anglatadi, demak $A^{-1}$ mavjud emas."
        },
        {
            "q": "Matritsada kamida bitta noldan farqli element mavjud bo‘lsa ($A \\ne E^0$), uning rangi $r(A)$ haqida nima deyish mumkin?",
            "opts": [
                "$r(A) \\ge 1$ bo‘ladi (chunki kamida bitta 1-tartibli osti minori noldan farqli)",
                "$r(A) = 0$ bo‘ladi",
                "$r(A)$ har doim satrlar soniga teng bo‘ladi",
                "$r(A) < 0$ bo‘ladi"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "3-ma’ruza (12, 18-slaydlar): Har bir element 1-tartibli minor bo‘lgani uchun kamida bitta nolmas element bo‘lsa $r(A) \\ge 1$."
        },
        {
            "q": "Agar $A$ matritsaning rangi $r(A) = r$ bo‘lsa, uning tartibi $r$ dan katta bo‘lgan barcha osti minorlari ($M_{r+1}, M_{r+2}, \\dots$) nimaga teng bo‘ladi?",
            "opts": [
                "Barchasi $0$ ga teng bo‘ladi (aks holda rang $r$ dan katta bo‘lar edi)",
                "Barchasi $1$ ga teng bo‘ladi",
                "Barchasi manfiy sonlarga teng bo‘ladi",
                "Kamida bittasi noldan farqli bo‘ladi"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "Ta’rifga ko‘ra rang — noldan farqli ENG KATTA minor tartibidir. Demak $r$ dan katta tartibli barcha minorlar $0$ ga teng."
        },
        {
            "q": "$n$-tartibli xosmas $A$ matritsaning qo‘shma matritsasi $\\bar{A}$ ning determinanti $\\det(\\bar{A})$ nimaga teng?",
            "opts": [
                "$(\\det A)^{n-1}$ ga teng (chunki $A \\cdot \\bar{A} = \\det(A) \\cdot E \\implies \\det(A)\\det(\\bar{A}) = (\\det A)^n$)",
                "$\\det(A)$ ga teng",
                "$\\frac{1}{\\det(A)}$ ga teng",
                "$1$ ga teng"
            ],
            "ans": 0,
            "diff": "Qiyin",
            "exp": "$A^{-1} = \\frac{1}{\\det A}\\bar{A} \\implies \\bar{A} = (\\det A) A^{-1}$. U holda $\\det(\\bar{A}) = (\\det A)^n \\det(A^{-1}) = (\\det A)^{n-1}$."
        },
        {
            "q": "Agar kvadrat $A$ matritsaning teskari matritsasi o‘zining transponirlanganiga teng bo‘lsa ($A^{-1} = A^T$), bunday matritsa qanday ataladi?",
            "opts": [
                "Ortogonal matritsa deyiladi",
                "Simmetrik matritsa deyiladi",
                "Xos matritsa deyiladi",
                "Nilpotent matritsa deyiladi"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "$A^T A = A A^T = E \\iff A^{-1} = A^T$ shartni qanoatlantiruvchi kvadrat matritsa ortogonal matritsa deyiladi."
        },
        {
            "q": "Ikki matritsa ko‘paytmasining rangi $r(A \\cdot B)$ ularning alohida ranglari $r(A)$ va $r(B)$ bilan qanday tengsizlik orqali bog‘langan?",
            "opts": [
                "$r(A \\cdot B) \\le \\min(r(A),\\; r(B))$ (ko‘paytmaning rangi ko‘paytuvchilarning ranglaridan oshmaydi)",
                "$r(A \\cdot B) = r(A) \\cdot r(B)$",
                "$r(A \\cdot B) = r(A) + r(B)$",
                "$r(A \\cdot B) \\ge \\max(r(A),\\; r(B))$"
            ],
            "ans": 0,
            "diff": "Qiyin",
            "exp": "Chiziqli algebraning fundamental xossasiga ko‘ra matritsalarni ko‘paytirishda rang ortishi mumkin emas: $r(AB) \\le \\min(r(A), r(B))$."
        }
    ]

    # =========================================================================
    # MAVZU 4: Yuqori tartibli determinantlar va Laplas teoremasi (30 ta NAZARIY)
    # =========================================================================
    t4 = [
        {
            "q": "$n$-tartibli kvadrat $A$ matritsaning $n$-tartibli determinanti ta’rifi qaysi javobda to‘g‘ri berilgan (5, 10-slaydlar)?",
            "opts": [
                "Matritsaning har bir satridan va har bir ustunidan bittadan olingan $n$ ta element ko‘paytmalaridan iborat, jami $n!$ ta hadning $(-1)^s$ ishoralar bilan olingan algebraik yig‘indisiga aytiladi",
                "Matritsaning barcha $n^2$ ta elementlari yig‘indisiga aytiladi",
                "Matritsaning faqat bosh va yordamchi diagonallari elementlari ko‘paytmalari ayirmasiga aytiladi",
                "Matritsaning satr elementlari kvadratlari yig‘indisiga aytiladi"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "4-ma’ruza (5, 10-slaydlar): $A$ matritsaning $n$-tartibli determinanti deb, har bir satr va ustundan bittadan element qatnashgan $n!$ ta ko‘paytmaning algebraik yig‘indisiga aytiladi."
        },
        {
            "q": "«$n$-tartibli o‘rin almashtirish» deb nimaga aytiladi va u qanday belgilanadi?",
            "opts": [
                "$1, 2, 3, \\dots, n$ sonlarning ma’lum bir tartibda joylashtirib yozilishiga aytiladi va $P$ harfi bilan belgilanadi",
                "Matritsaning satrlarini ustunlarga almashtirishga aytiladi va $A^T$ bilan belgilanadi",
                "Sonlarni bir-biriga qo‘shish amaliga aytiladi",
                "Faqat juft sonlar to‘plamiga aytiladi"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "4-ma’ruza (6-slayd): $1, 2, 3, \\dots, n$ sonlarning biror bir tartibda yozilishiga $n$-tartibli o‘rin almashtirish deyiladi va $P$ harfi bilan belgilanadi."
        },
        {
            "q": "$\\{1, 2, 3, \\dots, n\\}$ to‘plamdagi barcha mumkin bo‘lgan o‘rin almashtirishlar soni nechtaga teng?",
            "opts": [
                "$n! = 1 \\cdot 2 \\cdot 3 \\cdot \\dots \\cdot n$ taga teng",
                "$2^n$ taga teng",
                "$n^2$ taga teng",
                "$\\frac{n(n-1)}{2}$ taga teng"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "4-ma’ruza (8-slayd, 1-xossa): $\\{1, 2, 3, \\dots, n\\}$ to‘plamdagi barcha o‘rin almashtirishlar soni $n!$ ga teng."
        },
        {
            "q": "$P$ o‘rin almashtirishda ikkita son qachon «inversiya» tashkil qiladi deyiladi?",
            "opts": [
                "Agar $m > k$ bo‘lib, katta $m$ soni kichik $k$ sonidan chapda joylashgan bo‘lsa, ular inversiya tashkil qiladi deyiladi",
                "Agar kichik son katta sondan chapda joylashgan bo‘lsa",
                "Agar ikkita sonning yig‘indisi juft bo‘lsa",
                "Agar ikkita son ketma-ket (yonma-yon) joylashgan bo‘lsa"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "4-ma’ruza (7-slayd): Agar $m > k$ bo‘lib, $m$ soni $k$ sonidan chapda joylashgan bo‘lsa, u holda $P$ o‘rin almashtirishda bu sonlar inversiya tashkil qiladi deyiladi."
        },
        {
            "q": "$P$ o‘rin almashtirish qachon «juft» va qachon «toq» o‘rin almashtirish deyiladi?",
            "opts": [
                "Undagi inversiyalarning umumiy soni $\\text{inv} P$ juft son bo‘lsa — juft, toq son bo‘lsa — toq o‘rin almashtirish deyiladi",
                "Elementlar soni $n$ juft bo‘lsa — juft, $n$ toq bo‘lsa — toq deyiladi",
                "Birinchi elementi juft son bo‘lsa — juft, toq son bo‘lsa — toq deyiladi",
                "Oxirgi elementi juft son bo‘lsa — juft deyiladi"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "4-ma’ruza (7-slayd): $\\text{inv} P$ soni juft yoki toq bo‘lganiga qarab $P$ o‘rin almashtirish juft yoki toq deyiladi."
        },
        {
            "q": "O‘rin almashtirishlarning 2-xossasi: $\\{1, 2, 3, \\dots, n\\}$ ($n \\ge 2$) to‘plamdagi juft va toq o‘rin almashtirishlar soni haqida qanday tasdiq o‘rinli?",
            "opts": [
                "Juft va toq o‘rin almashtirishlar soni o‘zaro teng bo‘lib, har biri $\\frac{n!}{2}$ tadan bo‘ladi",
                "Juft o‘rin almashtirishlar soni toqlardan $2$ marta ko‘p bo‘ladi",
                "Barcha o‘rin almashtirishlar juft bo‘ladi",
                "Juft o‘rin almashtirishlar $n$ ta, toqlar esa $n! - n$ ta bo‘ladi"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "4-ma’ruza (8-slayd, 2-xossa): Juft va toq o‘rin almashtirishlar soni o‘zaro teng, ya’ni har biri $\\frac{n!}{2}$ tadan."
        },
        {
            "q": "O‘rin almashtirishlarning 3-xossasi: O‘rin almashtirishda ixtiyoriy ikkita elementning o‘rni o‘zaro almashtirilsa (transpozitsiya qilinsa), nima yuz beradi?",
            "opts": [
                "O‘rin almashtirishning juft-toqligi qarama-qarshisiga o‘zgaradi (juft bo‘lsa toqqa, toq bo‘lsa juftga aylanadi)",
                "O‘rin almashtirishning juft-toqligi o‘zgarmaydi",
                "Inversiyalar soni har doim $0$ ga teng bo‘lib qoladi",
                "Inversiyalar soni $2$ marta ortadi"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "4-ma’ruza (8-slayd, 3-xossa): O‘rin almashtirishda ikkita elementning o‘rni almashtirilsa, uning juft-toqligi o‘zgaradi."
        },
        {
            "q": "«O‘rinlashtirish» ($F$) deb nimaga aytiladi va uning juft-toqligi qanday aniqlanadi (9-slayd)?",
            "opts": [
                "$\\{1, 2, \\dots, n\\}$ sonlar to‘plamini o‘zini o‘ziga o‘zaro bir qiymatli akslantirishga aytiladi; $F = \\binom{P_1}{P_2}$ da $P_1 = (1, 2, \\dots, n)$ bo‘lsa, $P_2$ juft bo‘lganda $F$ juft, $P_2$ toq bo‘lganda $F$ toq bo‘ladi",
                "Faqat ikkita sonning yig‘indisiga o‘rinlashtirish deyiladi",
                "Matritsani nol matritsaga ko‘paytirishga aytiladi",
                "O‘rinlashtirish faqat toq bo‘lishi mumkin"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "4-ma’ruza (9-slayd): $\\{1, 2, \\dots, n\\}$ sonlar to‘plamini o‘zini o‘ziga akslantiruvchi o‘zaro bir qiymatli akslantirish o‘rinlashtirish deyiladi."
        },
        {
            "q": "$n$-tartibli determinant ta’rifidan kelib chiqadigan 3 ta asosiy natija (10-slayd) qaysi javobda to‘g‘ri ko‘rsatilgan?",
            "opts": [
                "1) Determinant $n!$ ta hadning yig‘indisidan iborat; 2) Har bir hadda har bir satr va ustundan bittadan element qatnashadi; 3) Ko‘paytmalarning yarmi o‘z ishorasi ($+$) bilan, qolgan yarmi qarama-qarshi ($-$) ishora bilan olinadi",
                "1) Determinant $n$ ta haddan iborat; 2) Barcha hadlar plyus ishora bilan olinadi; 3) Faqat diagonal elementlar qatnashadi",
                "1) Determinant $2n$ ta haddan iborat; 2) Barcha hadlar minus ishora bilan olinadi",
                "1) Determinantda bitta satrdan bir nechta element bitta ko‘paytmada qatnashishi mumkin"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "4-ma’ruza (10-slayd, Natija): Aynan shu 3 ta xulosa $n$-tartibli determinant ta’rifining bevosita natijalaridir."
        },
        {
            "q": "Determinantni hisoblashning 1-usulida (qator elementlari bo‘yicha yoyishda) qaysi satr yoki ustunni tanlash eng samarali hisoblanadi (11-slayd)?",
            "opts": [
                "Tarkibida eng ko‘p nol ($0$) element qatnashgan satr yoki ustunni tanlash, chunki nol elementlarning algebraik to‘ldiruvchilarini hisoblash talab etilmaydi",
                "Faqat eng katta sonlar qatnashgan satrni tanlash",
                "Har doim faqat oxirgi ustunni tanlash",
                "Nol elementlari umuman bo‘lmagan satrni tanlash"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "4-ma’ruza (11-slayd): Determinantning eng ko‘p nol element qatnashgan qatori aniqlanib, shu qator bo‘yicha yoyib chiqiladi."
        },
        {
            "q": "Determinantni hisoblashning 2-usulida (nollar hosil qilib yoyish usulida) qanday ketma-ketlik bajariladi (12-slayd)?",
            "opts": [
                "Elementar almashtirish (7-xossa) yordamida tanlangan satr yoki ustunda bitta noldan farqli element qolgunicha qolgan elementlar nolga keltiriladi va so‘ngra shu qator bo‘yicha yoyiladi",
                "Barcha satrlar bir-biriga ko‘paytirib chiqiladi",
                "Determinantning barcha elementlaridan bir xil son ayirib tashlanadi",
                "Determinant Sarrius qoidasi bilan bo‘laklarga ajratiladi"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "4-ma’ruza (12-slayd): Biror qator elementlarini 7-xossa yordamida nolga keltirib, so‘ngra shu qator bo‘yicha yopilsa, $(n-1)$-tartibli bittagina determinantni hisoblash kifoya bo‘ladi."
        },
        {
            "q": "Qanday determinantga «uchburchak shaklidagi determinant» deyiladi va u qanday hisoblanadi (13-slayd)?",
            "opts": [
                "Bosh diagonalidan yuqoridagi yoki pastdagi barcha elementlari nollardan iborat bo‘lgan determinantga aytiladi; uning qiymati bosh diagonali elementlari ko‘paytmasiga teng",
                "Faqat $3 \\times 3$ o‘lchamli har qanday determinantga aytiladi",
                "Bosh diagonali elementlari nollardan iborat determinantga aytiladi",
                "Uchta burchagida nollar turgan determinantga aytiladi"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "4-ma’ruza (13-slayd): Bosh diagonalidan yuqoridagi yoki pastdagi barcha elementlari nollardan iborat determinant uchburchak shaklidagi determinant deyiladi va uning qiymati bosh diagonal elementlari ko‘paytmasiga teng."
        },
        {
            "q": "Har qanday yuqori tartibli determinantni uchburchak shakliga keltirib hisoblash mumkinmi (13-slayd)?",
            "opts": [
                "Ha, determinantning xossalaridan (elementar satr/ustun almashtirishlaridan) foydalanib har qanday determinantni uchburchak shakliga keltirib hisoblash mumkin",
                "Yo‘q, faqat simmetrik determinantlarnigina uchburchak shakliga keltirish mumkin",
                "Yo‘q, faqat 2-tartibli determinantlarni uchburchak shakliga keltirish mumkin",
                "Faqat barcha elementlari musbat bo‘lgan determinantlarni keltirish mumkin"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "4-ma’ruza (13-slayd): Har qanday determinantni uchburchak shakliga keltirib hisoblash mumkin."
        },
        {
            "q": "**Laplas teoremasi** (18-slayd) qanday ta’riflanadi?",
            "opts": [
                "Determinantning qiymati uning ixtiyoriy satr (yoki ustun) elementlari bilan shu elementlarga mos algebraik to‘ldiruvchilar ko‘paytmalarining yig‘indisiga teng: $\\Delta = \\sum_{j=1}^n a_{ij} A_{ij}$",
                "Determinantning qiymati uning barcha satr elementlari bilan minorlari yig‘indisiga teng",
                "Determinantning qiymati faqat bosh diagonal elementlari va ularning algebraik to‘ldiruvchilari ko‘paytmasiga teng",
                "Determinantning qiymati satrlar sonining faktorialiga teng"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "4-ma’ruza (18-slayd): Laplas teoremasi: Determinantning qiymati uning ixtiyoriy satr (ustun) elementlari bilan shu elementlarga mos algebraik to‘ldiruvchilar ko‘paytmalari yig‘indisiga teng."
        },
        {
            "q": "**Laplas teoremasining natijasi** (18-slayd): Determinantning biror satri (ustuni) elementlari bilan uning BOSHQA satri (ustuni) elementlariga mos algebraik to‘ldiruvchilar ko‘paytmalarining yig‘indisi nimaga teng?",
            "opts": [
                "Har doim nolga teng ($\\sum_{j=1}^n a_{ij} A_{kj} = 0$, bunda $i \\ne k$)",
                "Determinantning o‘ziga teng ($\\Delta$)",
                "Qarama-qarshi ishorali determinantga teng ($-\\Delta$)",
                "Birga teng ($1$)"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "4-ma’ruza (18-slayd, Natija): Determinantning biror satr (ustun) elementlari bilan uning boshqa satri (ustuni) elementlari algebraik to‘ldiruvchilari ko‘paytmalarining yig‘indisi nolga teng."
        },
        {
            "q": "Laplas teoremasi va uning natijasini Kroneker deltasi $\\delta_{ik}$ yordamida yagona formula ko‘rinishida qanday yozish mumkin?",
            "opts": [
                "$\\sum_{j=1}^n a_{ij} A_{kj} = \\delta_{ik} \\cdot \\Delta = \\begin{cases} \\Delta, & i = k \\\\ 0, & i \\ne k \\end{cases}$",
                "$\\sum_{j=1}^n a_{ij} A_{kj} = \\Delta^2$",
                "$\\sum_{j=1}^n a_{ij} A_{kj} = i + k$",
                "$\\sum_{j=1}^n a_{ij} A_{kj} = \\begin{cases} 0, & i = k \\\\ \\Delta, & i \\ne k \\end{cases}$"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "Aynan shu fundamental ayniyat $A \\cdot \\bar{A} = \\det(A) \\cdot E$ va teskari matritsa formulasining asosini tashkil etadi!"
        },
        {
            "q": "Umumiy Laplas teoremasiga (16-17-slaydlar) ko‘ra, 5-tartibli determinantni 2 ta satr (masalan 1- va 3-satrlar) bo‘yicha yoyganda qanday ko‘paytmalar yig‘indisi hosil bo‘ladi?",
            "opts": [
                "Shu 2 ta satrda joylashgan 2-tartibli minorlar bilan ularga mos 3-tartibli algebraik to‘ldiruvchilarning ko‘paytmalari yig‘indisi ($C_5^2 = 10$ ta had)",
                "Faqat 1-tartibli elementlar bilan 4-tartibli minorlar ko‘paytmasi",
                "5 ta 2-tartibli determinantlarning o‘zaro ko‘paytmasi",
                "1- va 3-satr elementlarining skalyar ko‘paytmasi"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "4-ma’ruza (16-17-slaydlar): 2 ta satr tanlanganda $C_5^2 = 10$ ta yig‘indi qatnashib, har bir hadda 2-tartibli minor va uning 3-tartibli qo‘shimcha minori $(-1)^{i_1+i_2+j_1+j_2}$ ishora bilan ko‘paytiriladi."
        },
        {
            "q": "Umumiy Laplas teoremasida $i_1, i_2$ satrlar va $j_1, j_2$ ustunlar kesishmasida joylashgan 2-tartibli minorning algebraik to‘ldiruvchisi oldidagi ishora ko‘paytuvchisi qanday aniqlanadi (17-slayd)?",
            "opts": [
                "$(-1)^{i_1 + i_2 + j_1 + j_2}$ formula bilan",
                "$(-1)^{i_1 \\cdot i_2 \\cdot j_1 \\cdot j_2}$ formula bilan",
                "Har doim $+1$ bo‘ladi",
                "$(-1)^{(i_1 - j_1)}$ formula bilan"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "4-ma’ruza (17-slayd): Masalan, 1- va 3-satr hamda 2- va 3-ustun tanlanganda ishora $(-1)^{1+3+2+3}$ ko‘rinishda olinadi."
        },
        {
            "q": "3-tartibli determinant uchun yozilgan «Laplas formulasi» (19-slayd) qaysi qatorlar bo‘yicha yoyilmalarni o‘z ichiga oladi?",
            "opts": [
                "1-, 2-, 3-satrlar hamda 1-, 2-, 3-ustunlar bo‘yicha — jami 6 ta o‘zaro teng yoyilmani",
                "Faqat 1-satr va 1-ustun bo‘yicha 2 ta yoyilmani",
                "Faqat bosh va yordamchi diagonal bo‘yicha yoyilmalarni",
                "Faqat juft tartibli satrlar bo‘yicha yoyilmani"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "4-ma’ruza (19-slayd): $\\Delta = a_{11}A_{11}+a_{12}A_{12}+a_{13}A_{13} = a_{21}A_{21}+\\dots = a_{13}A_{13}+a_{23}A_{23}+a_{33}A_{33}$ — barcha 3 ta satr va 3 ta ustun bo‘yicha yoyilmalar o‘zaro teng."
        },
        {
            "q": "Determinantning bosh diagonali elementlari ko‘paytmasi $a_{11} a_{22} \\dots a_{nn}$ determinantning to‘liq yoyilmasiga qanday ishora bilan kiradi?",
            "opts": [
                "Har doim plyus ($+$) ishora bilan kiradi, chunki $(1, 2, \\dots, n)$ o‘rin almashtirishda inversiyalar yo‘q ($\\text{inv} = 0$, juft)",
                "Har doim minus ($-$) ishora bilan kiradi",
                "$n$ juft bo‘lsa plyus, $n$ toq bo‘lsa minus ishora bilan kiradi",
                "Elementlarning ishorasiga qarab o‘zgaradi"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "Bosh diagonal elementlarining ustun indekslari $(1, 2, \\dots, n)$ tabiiy tartibda bo‘lgani uchun $\\text{inv}(1, 2, \\dots, n) = 0$ va $(-1)^0 = +1$."
        },
        {
            "q": "$n$-tartibli determinantda yordamchi diagonal elementlari ko‘paytmasi $a_{1n} a_{2,n-1} \\dots a_{n1}$ oldidagi $(-1)^s$ ishora ko‘paytuvchisi uchun $s = \\text{inv}(n, n-1, \\dots, 2, 1)$ nimaga teng?",
            "opts": [
                "$s = \\frac{n(n-1)}{2}$ ga teng",
                "$s = n$ ga teng",
                "$s = n!$ ga teng",
                "$s = 0$ ga teng"
            ],
            "ans": 0,
            "diff": "Qiyin",
            "exp": "$(n, n-1, \\dots, 1)$ teskari tartibda har bir element o‘zidan keyingi barcha elementlar bilan inversiya hosil qiladi: $(n-1) + (n-2) + \\dots + 1 = \\frac{n(n-1)}{2}$."
        },
        {
            "q": "Agar $P = (i_1, i_2, \\dots, i_n)$ o‘rin almashtirishda ketma-ket $2m$ marta (juft marta) ikkita element o‘rni almashtirilsa (transpozitsiya qilinsa), uning juft-toqligi qanday bo‘ladi?",
            "opts": [
                "Boshlang‘ich juft-toqligi saqlanib qoladi (o‘zgarmaydi)",
                "Qarama-qarshisiga o‘zgaradi",
                "Har doim toq bo‘lib qoladi",
                "Inversiyalar soni nolga teng bo‘ladi"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "Har bitta transpozitsiya juft-toqlikni qarama-qarshiga o‘zgartirgani sababli, juft ($2m$) marta transpozitsiya boshlang‘ich juft-toqlikni qaytaradi."
        },
        {
            "q": "Yuqori tartibli determinantni uchburchak shakliga keltirayotganda $i$-satrni o‘zidan yuqoridagi $k$-satr yordamida nolga aylantirish uchun qanday elementar amal bajariladi?",
            "opts": [
                "$k$-satr elementlari $-\\frac{a_{ik}}{a_{kk}}$ songa ko‘paytirilib, $i$-satrning mos elementlariga qo‘shiladi ($a_{kk} \\ne 0$)",
                "$i$-satr elementlaridan $a_{ik}$ soni ayirib tashlanadi",
                "$i$-satr va $k$-satr mos elementlari bir-biriga ko‘paytiriladi",
                "$i$-satr nol songa ko‘paytiriladi"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "$a_{ik} + \\left(-\\frac{a_{ik}}{a_{kk}}\\right) a_{kk} = 0$ bo‘lib, determinantning 7-xossasiga ko‘ra determinant qiymati o‘zgarmaydi."
        },
        {
            "q": "Determinantning biror satri (yoki ustuni) faqat bitta noldan farqli $a_{ij}$ elementga ega bo‘lib, qolgan barcha elementlari $0$ ga teng bo‘lsa, Laplas teoremasiga ko‘ra determinant nimaga teng?",
            "opts": [
                "$\\Delta = a_{ij} A_{ij} = (-1)^{i+j} a_{ij} M_{ij}$ ga teng (ya’ni determinant tartibi bittaga pasayadi)",
                "$\\Delta = 0$ ga teng",
                "$\\Delta = a_{ij}$ ga teng",
                "$\\Delta = M_{ij}$ ga teng (ishora va $a_{ij}$ ko‘paytmasisiz)"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "4-ma’ruza (12, 18-slaydlar): Qolgan barcha qo‘shiluvchilar nolga teng bo‘lgani uchun yig‘indida faqat bitta $a_{ij} A_{ij} = (-1)^{i+j} a_{ij} M_{ij}$ had qoladi."
        },
        {
            "q": "Kvadrat bloklardan tuzilgan blok-diagonal $\\begin{vmatrix} A & O \\\\ O & B \\end{vmatrix}$ determinantning qiymati nimaga teng?",
            "opts": [
                "$\\det(A) \\cdot \\det(B)$ ga teng",
                "$\\det(A) + \\det(B)$ ga teng",
                "$0$ ga teng",
                "$\\det(A) - \\det(B)$ ga teng"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "Umumiy Laplas teoremasiga ko‘ra blok-diagonal va blok-uchburchakli matritsaning determinanti diagonal bloklar determinantlari ko‘paytmasiga teng."
        },
        {
            "q": "Agar $n$-tartibli determinantning barcha algebraik to‘ldiruvchilari $A_{ij} = 0$ bo‘lsa, determinantning o‘zi $\\Delta$ haqida nima deyish mumkin?",
            "opts": [
                "Laplas formulasiga ko‘ra $\\Delta = \\sum_{j=1}^n a_{ij} A_{ij} = 0$ bo‘ladi",
                "$\\Delta = 1$ bo‘ladi",
                "$\\Delta = n!$ bo‘ladi",
                "Determinant noldan farqli bo‘ladi"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "Ixtiyoriy satr bo‘yicha Laplas yoyilmasida barcha $A_{ij}=0$ bo‘lsa, $\\Delta = 0$ bo‘lishi kelib chiqadi."
        },
        {
            "q": "$n$-tartibli Vandermond determinanti (satrlari $1, x_i, x_i^2, \\dots, x_i^{n-1}$ darajalardan iborat determinant) qachon va faqat qachon nolga teng bo‘ladi?",
            "opts": [
                "$x_1, x_2, \\dots, x_n$ sonlar orasida kamida ikkitasi o‘zaro teng bo‘lganda ($x_i = x_j, i \\ne j$)",
                "Barcha $x_i$ sonlar manfiy bo‘lganda",
                "Sonlardan bittasi $0$ ga teng bo‘lganda",
                "Har doim nolga teng bo‘ladi"
            ],
            "ans": 0,
            "diff": "Qiyin",
            "exp": "Vandermond determinanti $\\prod_{1 \\le j < i \\le n} (x_i - x_j)$ ga teng bo‘lib, faqat ikkita $x_i = x_j$ bo‘lganda (ikkita bir xil satr hosil bo‘lib) nolga aylanadi."
        },
        {
            "q": "Nima sababdan yuqori tartibli ($n \\ge 4$) determinantlarni hisoblashda Sarrius yoki Uchburchak qoidasini qo‘llab bo‘lmaydi?",
            "opts": [
                "Chunki $n \\ge 4$ da determinant yoyilmasida $n!$ ta ($4! = 24$ ta, $5! = 120$ ta) had bo‘lib, diagonal chiziqlar esa faqat $2n$ ta hadni qamrab oladi xolos",
                "Chunki $n \\ge 4$ da diagonal elementlar mavjud bo‘lmaydi",
                "Chunki 4-tartibli determinant har doim nolga teng bo‘ladi",
                "Chunki 4-tartibli determinantda minorlar aniqlanmagan"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "$n=3$ da $3! = 6 = 2 \\cdot 3$ mos keladi, ammo $n=4$ da $4! = 24 \\ne 8$ bo‘lgani uchun oddiy diagonallar usuli 16 ta hadni tashlab ketadi!"
        },
        {
            "q": "$F = \\begin{pmatrix} P_1 \\\\ P_2 \\end{pmatrix}$ o‘rinlashtirishda ustunlar o‘rnini ixtiyoriy almashtirib, yuqori qatorni $(1, 2, \\dots, n)$ tabiiy tartibga keltirish mumkinmi?",
            "opts": [
                "Ha, har bir ustunda yuqori va quyi elementni birgalikda ko‘chirish akslantirishning o‘zini ham, juft-toqligini ham o‘zgartirmaydi",
                "Yo‘q, ustunlar o‘rnini almashtirish taqiqlanadi",
                "Ustunlar almashtirilsa o‘rinlashtirish buziladi",
                "Faqat juft tartibli o‘rinlashtirishlarda mumkin"
            ],
            "ans": 0,
            "diff": "O'rta",
            "exp": "4-ma’ruza (9-slayd): Ustunlarni juftligi bilan o‘rin almashtirganda $P_1$ va $P_2$ da bir vaqtda transpozitsiya yuz berib, umumiy juft-toqlik saqlanadi."
        },
        {
            "q": "Agar $n$-tartibli determinantning bitta satri (yoki ustuni) barcha elementlari $0$ ga teng bo‘lsa, bu faktni Laplas teoremasi orqali qanday izohlash mumkin?",
            "opts": [
                "Nol satr (ustun) bo‘yicha Laplas yoyilmasi yozilganda $\\Delta = 0 \\cdot A_{i1} + 0 \\cdot A_{i2} + \\dots + 0 \\cdot A_{in} = 0$ hosil bo‘ladi",
                "Nol satrning barcha algebraik to‘ldiruvchilari nolga teng bo‘ladi",
                "Nol satrli determinantga Laplas teoremasini qo‘llab bo‘lmaydi",
                "Laplas teoremasi bo‘yicha $\\Delta = 1$ chiqadi"
            ],
            "ans": 0,
            "diff": "Oson",
            "exp": "Laplas formulasi $\\Delta = \\sum_{j=1}^n a_{ij} A_{ij}$ da barcha $a_{ij} = 0$ bo‘lsa, yig‘indi bevosita $0$ ga teng bo‘ladi."
        }
    ]

    return {1: t1, 2: t2, 3: t3, 4: t4}
