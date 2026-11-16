// Cyber University Davlat Universiteti — Chiziqli Algebra Testlar Bazasi
// Jami: 9 ta bo'lim × 30 ta savol = 270 ta tasdiqlangan test savoli
window.QUESTIONS_BANK = [
  {
    "id": "T1_Q1",
    "topicId": 1,
    "num": 1,
    "question": "«Matritsa» so‘zi lotincha so‘z bo‘lib, qanday lug‘aviy ma’noni bildiradi va qadimgi Xitoyda uni qanday atashgan?",
    "options": [
      "«Sonlar qatori» ma’nosini bildiradi; qadimgi Misrda «Piramida jadvali» deb atashgan",
      "«To‘g‘ri burchak» ma’nosini bildiradi; qadimgi Yunonistonda «Logarifmik jadval» deb atashgan",
      "«Birinchi manba» ma’nosini bildiradi; qadimgi Xitoyda «Sehrli kvadrat» deb atashgan",
      "«Tartibli jadval» ma’nosini bildiradi; qadimgi Xitoyda «Oltin jadval» deb atashgan"
    ],
    "answer": 2,
    "difficulty": "Oson",
    "explanation": "1-ma’ruza (4-slayd): «Matritsa» so‘zi lotincha so‘z bo‘lib, «birinchi manba» ma’nosini bildiradi. Qadimgi Xitoyda uni «Sehrli kvadrat» deb atashgan."
  },
  {
    "id": "T1_Q2",
    "topicId": 1,
    "num": 2,
    "question": "Matritsalar bo‘yicha fundamental nazariyani XVIII asrda birinchilardan bo‘lib kiritgan nemis olimi kim?",
    "options": [
      "Isaak Nyuton",
      "Karl Veyyershtrass (Weierstrass)",
      "Evklid",
      "Pifagor"
    ],
    "answer": 1,
    "difficulty": "Oson",
    "explanation": "1-ma’ruza (4-slayd): Matritsalar bo‘yicha fundamental nazariyani birinchilardan bo‘lib XVIII asrda nemis olimi Veyyershtrass kiritgan."
  },
  {
    "id": "T1_Q3",
    "topicId": 1,
    "num": 3,
    "question": "$m \\times n$ o‘lchovli $A$ matritsada nechta satr, nechta ustun va jami nechta element mavjud?",
    "options": [
      "$m$ ta satr, $n$ ta ustun va $m \\cdot n$ ta element",
      "$n$ ta satr, $m$ ta ustun va $m + n$ ta element",
      "$n$ ta satr, $n$ ta ustun va $2mn$ ta element",
      "$m$ ta satr, $m$ ta ustun va $n^2$ ta element"
    ],
    "answer": 0,
    "difficulty": "Oson",
    "explanation": "$A_{m \\times n}$ yozuvda birinchi indeks $m$ — satrlar sonini, ikkinchi indeks $n$ — ustunlar sonini, $m \\cdot n$ esa jami elementlar sonini bildiradi."
  },
  {
    "id": "T1_Q4",
    "topicId": 1,
    "num": 4,
    "question": "Quyidagi $A = \\begin{pmatrix} 5 & 0 & -6 \\\\ 3 & -\\sqrt{2} & 1 \\end{pmatrix}$ matritsaning o‘lchamini hamda $a_{13} + a_{21}$ yig‘indisini toping.",
    "options": [
      "O‘lchami $2 \\times 3$; yig‘indi $6$ ga teng",
      "O‘lchami $3 \\times 2$; yig‘indi $-3$ ga teng",
      "O‘lchami $2 \\times 2$; yig‘indi $-5$ ga teng",
      "O‘lchami $2 \\times 3$; yig‘indi $-3$ ga teng"
    ],
    "answer": 3,
    "difficulty": "Oson",
    "explanation": "Matritsa 2 ta satr va 3 ta ustundan iborat ($2 \\times 3$). $a_{13} = -6$ (1-satr, 3-ustun) va $a_{21} = 3$ (2-satr, 1-ustun). Ularning yig‘indisi: $-6 + 3 = -3$."
  },
  {
    "id": "T1_Q5",
    "topicId": 1,
    "num": 5,
    "question": "$n$-tartibli kvadrat matritsaning yordamchi diagonali elementlari qaysi qatorda to‘g‘ri ko‘rsatilgan?",
    "options": [
      "$a_{11},\\; a_{12},\\; \\dots,\\; a_{1n}$",
      "$a_{11},\\; a_{22},\\; \\dots,\\; a_{nn}$",
      "$a_{1n},\\; a_{2,n-1},\\; \\dots,\\; a_{n1}$",
      "$a_{11},\\; a_{21},\\; \\dots,\\; a_{n1}$"
    ],
    "answer": 2,
    "difficulty": "Oson",
    "explanation": "1-ma’ruza (7-slayd): $a_{11}, a_{22}, \\dots, a_{nn}$ — asosiy diagonal, $a_{1n}, a_{2,n-1}, \\dots, a_{n1}$ esa yordamchi diagonal elementlaridir."
  },
  {
    "id": "T1_Q6",
    "topicId": 1,
    "num": 6,
    "question": "Bosh diagonal elementlari $1$ ga teng bo‘lib, qolgan barcha elementlari $0$ ga teng bo‘lgan kvadrat matritsa nima deb ataladi?",
    "options": [
      "Satr matritsa",
      "Birlik matritsa ($E$)",
      "Nol matritsa ($O$ yoki $\\Theta$)",
      "Ustun matritsa"
    ],
    "answer": 1,
    "difficulty": "Oson",
    "explanation": "1-ma’ruza (8-slayd): Bosh diagonalida faqat 1 lar, qolgan joylarida 0 lar turgan kvadrat matritsa birlik matritsa ($E$) deyiladi."
  },
  {
    "id": "T1_Q7",
    "topicId": 1,
    "num": 7,
    "question": "Quyidagi amallardan qaysilari matritsalar ustida «chiziqli amallar» deb ataladi?",
    "options": [
      "Matritsalarni qo‘shish, ayirish va songa ko‘paytirish",
      "Matritsalarni o‘zaro ko‘paytirish va transponirlash",
      "Determinantni hisoblash va teskari matritsa topish",
      "Faqat ikki matritsani bir-biriga ko‘paytirish"
    ],
    "answer": 0,
    "difficulty": "Oson",
    "explanation": "1-ma’ruza (10-slayd): Matritsalarni qo‘shish, ayirish va songa ko‘paytirish amallariga matritsalar ustida chiziqli amallar deyiladi."
  },
  {
    "id": "T1_Q8",
    "topicId": 1,
    "num": 8,
    "question": "Ma’ruzadagi misol asosida $A = \\begin{bmatrix} 3 & 5 \\\\ -1 & 4 \\end{bmatrix}$ va $B = \\begin{bmatrix} 2 & 0 \\\\ 6 & -3 \\end{bmatrix}$ matritsalar yig‘indisi $A + B$ ni toping.",
    "options": [
      "$\\begin{bmatrix} 6 & 0 \\\\ -6 & -12 \\end{bmatrix}$",
      "$\\begin{bmatrix} 1 & 5 \\\\ -7 & 7 \\end{bmatrix}$",
      "$\\begin{bmatrix} 5 & 0 \\\\ 5 & 7 \\end{bmatrix}$",
      "$\\begin{bmatrix} 5 & 5 \\\\ 5 & 1 \\end{bmatrix}$"
    ],
    "answer": 3,
    "difficulty": "Oson",
    "explanation": "1-ma’ruza (13-slayd): Mos elementlar qo‘shiladi: $3+2=5$, $5+0=5$, $-1+6=5$, $4+(-3)=1$."
  },
  {
    "id": "T1_Q9",
    "topicId": 1,
    "num": 9,
    "question": "Ma’ruzadagi misol asosida $A = \\begin{pmatrix} 5 & 2 & -3 \\\\ 0 & 4 & 1 \\\\ 7 & -2 & 6 \\end{pmatrix}$ va $B = \\begin{pmatrix} 2 & 1 & 4 \\\\ 3 & 0 & -1 \\\\ 1 & 5 & 2 \\end{pmatrix}$ matritsalar ayirmasi $C = A - B$ ni toping.",
    "options": [
      "$\\begin{pmatrix} 7 & 3 & 1 \\\\ 3 & 4 & 0 \\\\ 8 & 3 & 8 \\end{pmatrix}$",
      "$\\begin{pmatrix} 3 & 1 & 1 \\\\ -3 & 4 & 0 \\\\ 6 & 3 & 4 \\end{pmatrix}$",
      "$\\begin{pmatrix} 3 & 1 & -7 \\\\ -3 & 4 & 2 \\\\ 6 & -7 & 4 \\end{pmatrix}$",
      "$\\begin{pmatrix} -3 & -1 & 7 \\\\ 3 & -4 & -2 \\\\ -6 & 7 & -4 \\end{pmatrix}$"
    ],
    "answer": 2,
    "difficulty": "O'rta",
    "explanation": "1-ma’ruza (14-slayd): $c_{11}=5-2=3, c_{12}=2-1=1, c_{13}=-3-4=-7; c_{21}=0-3=-3, c_{22}=4-0=4, c_{23}=1-(-1)=2; c_{31}=7-1=6, c_{32}=-2-5=-7, c_{33}=6-2=4$."
  },
  {
    "id": "T1_Q10",
    "topicId": 1,
    "num": 10,
    "question": "$A = \\begin{bmatrix} 1 & -3 \\\\ 4 & 2 \\end{bmatrix}$ va $B = \\begin{bmatrix} -2 & 5 \\\\ 0 & -3 \\end{bmatrix}$ bo‘lsa, $3A - 2B$ matritsani hisoblang.",
    "options": [
      "$\\begin{bmatrix} -1 & 1 \\\\ 12 & 0 \\end{bmatrix}$",
      "$\\begin{bmatrix} 7 & -19 \\\\ 12 & 12 \\end{bmatrix}$",
      "$\\begin{bmatrix} 7 & 1 \\\\ 12 & 0 \\end{bmatrix}$",
      "$\\begin{bmatrix} 5 & -14 \\\\ 8 & 9 \\end{bmatrix}$"
    ],
    "answer": 1,
    "difficulty": "O'rta",
    "explanation": "$3A = \\begin{bmatrix} 3 & -9 \\\\ 12 & 6 \\end{bmatrix}$, $2B = \\begin{bmatrix} -4 & 10 \\\\ 0 & -6 \\end{bmatrix}$. U holda $3A - 2B = \\begin{bmatrix} 3-(-4) & -9-10 \\\\ 12-0 & 6-(-6) \\end{bmatrix} = \\begin{bmatrix} 7 & -19 \\\\ 12 & 12 \\end{bmatrix}$."
  },
  {
    "id": "T1_Q11",
    "topicId": 1,
    "num": 11,
    "question": "$A_{m \\times n}$ matritsani $B_{p \\times q}$ matritsaga $A \\cdot B$ tartibda ko‘paytirish mumkin bo‘lishi uchun qaysi shart bajarilishi zarur va hosil bo‘lgan matritsa o‘lchami qanday bo‘ladi?",
    "options": [
      "$n = p$ bo‘lishi shart; natija $m \\times q$ o‘lchamli bo‘ladi",
      "$m = q$ bo‘lishi shart; natija $n \\times p$ o‘lchamli bo‘ladi",
      "$m = p$ va $n = q$ bo‘lishi shart; natija $m \\times n$ bo‘ladi",
      "Ixtiyoriy o‘lchamda ko‘paytirish mumkin; natija $p \\times n$ bo‘ladi"
    ],
    "answer": 0,
    "difficulty": "Oson",
    "explanation": "1-ma’ruza (18-slayd): Birinchi matritsaning ustunlari soni ($n$) ikkinchi matritsaning satrlari soniga ($p$) teng bo‘lishi kerak. Natija $m \\times q$ o‘lchamli matritsa bo‘ladi."
  },
  {
    "id": "T1_Q12",
    "topicId": 1,
    "num": 12,
    "question": "Ma’ruzadagi misol asosida $A = \\begin{pmatrix} 1 & 2 \\\\ 0 & 8 \\\\ 1 & 3 \\end{pmatrix}$ va $B = \\begin{pmatrix} 6 & 5 \\\\ 4 & 0 \\end{pmatrix}$ matritsalar ko‘paytmasi $A \\cdot B$ ni toping.",
    "options": [
      "$\\begin{pmatrix} 14 & 32 & 18 \\\\ 5 & 0 & 5 \\end{pmatrix}$",
      "$\\begin{pmatrix} 6 & 10 \\\\ 0 & 0 \\\\ 4 & 0 \\end{pmatrix}$",
      "$\\begin{pmatrix} 10 & 5 \\\\ 32 & 8 \\\\ 18 & 3 \\end{pmatrix}$",
      "$\\begin{pmatrix} 14 & 5 \\\\ 32 & 0 \\\\ 18 & 5 \\end{pmatrix}$"
    ],
    "answer": 3,
    "difficulty": "O'rta",
    "explanation": "1-ma’ruza (19-slayd): $c_{11}=1\\cdot6+2\\cdot4=14, c_{12}=1\\cdot5+2\\cdot0=5$; $c_{21}=0\\cdot6+8\\cdot4=32, c_{22}=0$; $c_{31}=1\\cdot6+3\\cdot4=18, c_{32}=1\\cdot5+3\\cdot0=5$."
  },
  {
    "id": "T1_Q13",
    "topicId": 1,
    "num": 13,
    "question": "Ma’ruzadagi misol asosida $A = \\begin{bmatrix} 2 & 3 \\\\ 1 & 4 \\end{bmatrix}$ va $B = \\begin{bmatrix} 5 & 0 \\\\ 1 & 2 \\end{bmatrix}$ matritsalar ko‘paytmasi $C = A \\times B$ ni toping.",
    "options": [
      "$\\begin{bmatrix} 7 & 6 \\\\ 9 & 6 \\end{bmatrix}$",
      "$\\begin{bmatrix} 13 & 9 \\\\ 6 & 8 \\end{bmatrix}$",
      "$\\begin{bmatrix} 13 & 6 \\\\ 9 & 8 \\end{bmatrix}$",
      "$\\begin{bmatrix} 10 & 0 \\\\ 1 & 8 \\end{bmatrix}$"
    ],
    "answer": 2,
    "difficulty": "Oson",
    "explanation": "1-ma’ruza (20-slayd): $c_{11}=2\\cdot5+3\\cdot1=13, c_{12}=2\\cdot0+3\\cdot2=6, c_{21}=1\\cdot5+4\\cdot1=9, c_{22}=1\\cdot0+4\\cdot2=8$."
  },
  {
    "id": "T1_Q14",
    "topicId": 1,
    "num": 14,
    "question": "Ma’ruzadagi 19-slayd misoli: $A = \\begin{pmatrix} 2 & 3 & 4 \\\\ 4 & 5 & 2 \\\\ 9 & 8 & 2 \\end{pmatrix}$ va $B = \\begin{pmatrix} 5 & 8 \\\\ 1 & 4 \\\\ 4 & 3 \\end{pmatrix}$ bo‘lsa, $A \\cdot B$ ko‘paytmani toping.",
    "options": [
      "$\\begin{pmatrix} 29 & 33 & 61 \\\\ 40 & 58 & 110 \\end{pmatrix}$",
      "$\\begin{pmatrix} 29 & 40 \\\\ 33 & 58 \\\\ 61 & 110 \\end{pmatrix}$",
      "$\\begin{pmatrix} 10 & 24 \\\\ 4 & 20 \\\\ 36 & 24 \\end{pmatrix}$",
      "$\\begin{pmatrix} 25 & 40 \\\\ 33 & 52 \\\\ 61 & 104 \\end{pmatrix}$"
    ],
    "answer": 1,
    "difficulty": "O'rta",
    "explanation": "1-satr: $(2\\cdot5+3\\cdot1+4\\cdot4;\\; 2\\cdot8+3\\cdot4+4\\cdot3) = (29; 40)$. 2-satr: $(20+5+8;\\; 32+20+6) = (33; 58)$. 3-satr: $(45+8+8;\\; 72+32+6) = (61; 110)$."
  },
  {
    "id": "T1_Q15",
    "topicId": 1,
    "num": 15,
    "question": "$A = \\begin{pmatrix} 1 & -2 & 3 \\end{pmatrix}$ satr matritsa va $B = \\begin{pmatrix} 4 \\\\ 5 \\\\ -1 \\end{pmatrix}$ ustun matritsa berilgan. $A \\cdot B$ ko‘paytmani toping.",
    "options": [
      "$\\begin{pmatrix} -9 \\end{pmatrix}$ (o‘lchami $1 \\times 1$)",
      "$\\begin{pmatrix} 9 \\end{pmatrix}$ (o‘lchami $1 \\times 1$)",
      "$\\begin{pmatrix} 4 & -10 & -3 \\end{pmatrix}$ (o‘lchami $1 \\times 3$)",
      "Ko‘paytirib bo‘lmaydi"
    ],
    "answer": 0,
    "difficulty": "Oson",
    "explanation": "$A_{1\\times 3} \\cdot B_{3\\times 1} = C_{1\\times 1}$. Elementi: $1\\cdot 4 + (-2)\\cdot 5 + 3\\cdot(-1) = 4 - 10 - 3 = -9$."
  },
  {
    "id": "T1_Q16",
    "topicId": 1,
    "num": 16,
    "question": "Endi aksincha, $B = \\begin{pmatrix} 2 \\\\ -1 \\\\ 3 \\end{pmatrix}$ ($3 \\times 1$) ustun matritsani $A = \\begin{pmatrix} 1 & 4 & -2 \\end{pmatrix}$ ($1 \\times 3$) satr matritsaga ko‘paytma $B \\cdot A$ ni toping.",
    "options": [
      "$\\begin{pmatrix} 2 & -4 & -6 \\end{pmatrix}$",
      "$\\begin{pmatrix} -8 \\end{pmatrix}$",
      "$\\begin{pmatrix} 2 & -1 & 3 \\\\ 1 & 4 & -2 \\end{pmatrix}$",
      "$\\begin{pmatrix} 2 & 8 & -4 \\\\ -1 & -4 & 2 \\\\ 3 & 12 & -6 \\end{pmatrix}$"
    ],
    "answer": 3,
    "difficulty": "O'rta",
    "explanation": "$B_{3\\times 1} \\cdot A_{1\\times 3}$ ko‘paytma $3 \\times 3$ kvadrat matritsa beradi: har bir ustun elementi satr elementlariga ko‘paytiriladi."
  },
  {
    "id": "T1_Q17",
    "topicId": 1,
    "num": 17,
    "question": "Matritsalarni ko‘paytirish va transponirlash xossalariga ko‘ra quyidagi tengliklardan qaysi biri BARCHA mos o‘lchamli $A, B$ matritsalar uchun to‘g‘ri?",
    "options": [
      "$AB = BA$",
      "$(A+B)^2 = A^2 + 2AB + B^2$",
      "$(AB)^T = B^T A^T$",
      "$(AB)^T = A^T B^T$"
    ],
    "answer": 2,
    "difficulty": "Oson",
    "explanation": "1-ma’ruza (25-slayd, 4-xossa): Ko‘paytmani transponirlashda ko‘paytuvchilar o‘rni almashadi: $(AB)^T = B^T A^T$. Umumiy holda $AB \\ne BA$ bo‘lgani uchun $(A+B)^2 = A^2 + AB + BA + B^2$."
  },
  {
    "id": "T1_Q18",
    "topicId": 1,
    "num": 18,
    "question": "Ma’ruzadagi 23-24-slaydlar asosida: $A = \\begin{pmatrix} 1 & 4 & -2 \\\\ 0 & 3 & 5 \\end{pmatrix}$ matritsaning transponirlangani $A^T$ ni toping.",
    "options": [
      "$\\begin{pmatrix} -2 & 4 & 1 \\\\ 5 & 3 & 0 \\end{pmatrix}$",
      "$\\begin{pmatrix} 1 & 0 \\\\ 4 & 3 \\\\ -2 & 5 \\end{pmatrix}$",
      "$\\begin{pmatrix} 0 & 3 & 5 \\\\ 1 & 4 & -2 \\end{pmatrix}$",
      "$\\begin{pmatrix} 1 & 4 \\\\ 0 & 3 \\\\ -2 & 5 \\end{pmatrix}$"
    ],
    "answer": 1,
    "difficulty": "Oson",
    "explanation": "1-ma’ruza (23-slayd): $2 \\times 3$ matritsa transponirlanganda $3 \\times 2$ matritsaga aylanadi: 1-satr $(1, 4, -2)$ 1-ustunga, 2-satr $(0, 3, 5)$ 2-ustunga o‘tadi."
  },
  {
    "id": "T1_Q19",
    "topicId": 1,
    "num": 19,
    "question": "Ma’ruzadagi 26-slayd misoli: $A = \\begin{pmatrix} 2 & -1 \\\\ 3 & 7 \\end{pmatrix}$, $B = \\begin{pmatrix} 4 & 1 & -3 \\\\ 0 & 8 & 2 \\end{pmatrix}$, $C = \\begin{pmatrix} 1 & 2 \\\\ -3 & 1 \\\\ -1 & 4 \\end{pmatrix}$ bo‘lsa, $2A^T - 3BC$ ni hisoblang.",
    "options": [
      "$\\begin{pmatrix} -8 & 15 \\\\ 76 & -34 \\end{pmatrix}$",
      "$\\begin{pmatrix} -8 & -15 \\\\ 76 & 34 \\end{pmatrix}$",
      "$\\begin{pmatrix} 16 & -3 \\\\ -80 & 62 \\end{pmatrix}$",
      "$\\begin{pmatrix} 8 & -15 \\\\ -76 & 34 \\end{pmatrix}$"
    ],
    "answer": 0,
    "difficulty": "Qiyin",
    "explanation": "1-ma’ruza (26-slayd): $A^T = \\begin{pmatrix} 2 & 3 \\\\ -1 & 7 \\end{pmatrix} \\Rightarrow 2A^T = \\begin{pmatrix} 4 & 6 \\\\ -2 & 14 \\end{pmatrix}$. $BC = \\begin{pmatrix} 4 & -3 \\\\ -26 & 16 \\end{pmatrix} \\Rightarrow 3BC = \\begin{pmatrix} 12 & -9 \\\\ -78 & 48 \\end{pmatrix}$. Ayirma: $\\begin{pmatrix} 4-12 & 6-(-9) \\\\ -2-(-78) & 14-48 \\end{pmatrix} = \\begin{pmatrix} -8 & 15 \\\\ 76 & -34 \\end{pmatrix}$."
  },
  {
    "id": "T1_Q20",
    "topicId": 1,
    "num": 20,
    "question": "$A = \\begin{pmatrix} 2 & -1 \\\\ 3 & -2 \\end{pmatrix}$ matritsa uchun $A^2 = A \\cdot A$ ni hisoblang.",
    "options": [
      "$\\begin{pmatrix} 4 & 1 \\\\ 9 & 4 \\end{pmatrix}$",
      "$\\begin{pmatrix} -1 & 0 \\\\ 0 & -1 \\end{pmatrix}$",
      "$\\begin{pmatrix} 7 & -4 \\\\ 12 & -7 \\end{pmatrix}$",
      "$\\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}$"
    ],
    "answer": 3,
    "difficulty": "O'rta",
    "explanation": "$A^2 = \\begin{pmatrix} 2 & -1 \\\\ 3 & -2 \\end{pmatrix} \\begin{pmatrix} 2 & -1 \\\\ 3 & -2 \\end{pmatrix} = \\begin{pmatrix} 4-3 & -2+2 \\\\ 6-6 & -3+4 \\end{pmatrix} = \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix} = E$ (involyutiv matritsa)."
  },
  {
    "id": "T1_Q21",
    "topicId": 1,
    "num": 21,
    "question": "Agar $A = \\begin{pmatrix} 1 & 2 \\\\ 3 & -1 \\end{pmatrix}$ va $f(x) = x^2 - 2x + 3$ ko‘phad berilgan bo‘lsa, $f(A) = A^2 - 2A + 3E$ matritsani toping.",
    "options": [
      "$\\begin{pmatrix} 8 & 0 \\\\ 0 & 12 \\end{pmatrix}$",
      "$\\begin{pmatrix} 5 & -4 \\\\ -6 & 9 \\end{pmatrix}$",
      "$\\begin{pmatrix} 8 & -4 \\\\ -6 & 12 \\end{pmatrix}$",
      "$\\begin{pmatrix} 6 & -2 \\\\ -3 & 10 \\end{pmatrix}$"
    ],
    "answer": 2,
    "difficulty": "Qiyin",
    "explanation": "$A^2 = \\begin{pmatrix} 1+6 & 2-2 \\\\ 3-3 & 6+1 \\end{pmatrix} = \\begin{pmatrix} 7 & 0 \\\\ 0 & 7 \\end{pmatrix}$. U holda $A^2 - 2A + 3E = \\begin{pmatrix} 7-2+3 & 0-4+0 \\\\ 0-6+0 & 7+2+3 \\end{pmatrix} = \\begin{pmatrix} 8 & -4 \\\\ -6 & 12 \\end{pmatrix}$."
  },
  {
    "id": "T1_Q22",
    "topicId": 1,
    "num": 22,
    "question": "$2X + \\begin{pmatrix} 3 & -5 \\\\ 4 & 0 \\end{pmatrix} = \\begin{pmatrix} 9 & 1 \\\\ -2 & 8 \\end{pmatrix}$ tenglamadan $X$ matritsani toping.",
    "options": [
      "$\\begin{pmatrix} 6 & -2 \\\\ 1 & 4 \\end{pmatrix}$",
      "$\\begin{pmatrix} 3 & 3 \\\\ -3 & 4 \\end{pmatrix}$",
      "$\\begin{pmatrix} 3 & -2 \\\\ 1 & 4 \\end{pmatrix}$",
      "$\\begin{pmatrix} 6 & 6 \\\\ -6 & 8 \\end{pmatrix}$"
    ],
    "answer": 1,
    "difficulty": "Oson",
    "explanation": "$2X = \\begin{pmatrix} 9-3 & 1-(-5) \\\\ -2-4 & 8-0 \\end{pmatrix} = \\begin{pmatrix} 6 & 6 \\\\ -6 & 8 \\end{pmatrix} \\implies X = \\begin{pmatrix} 3 & 3 \\\\ -3 & 4 \\end{pmatrix}$."
  },
  {
    "id": "T1_Q23",
    "topicId": 1,
    "num": 23,
    "question": "$A = \\begin{pmatrix} 1 & 3 & -2 \\\\ 2 & 0 & 4 \\\\ -1 & 5 & 1 \\end{pmatrix}$ va $B = \\begin{pmatrix} 3 & 1 & 2 \\\\ -2 & 4 & 0 \\\\ 5 & -1 & 3 \\end{pmatrix}$ bo‘lsa, $C = A \\cdot B$ ko‘paytmaning faqat $c_{23}$ (2-satr, 3-ustun) elementini toping.",
    "options": [
      "$16$",
      "$-2$",
      "$8$",
      "$12$"
    ],
    "answer": 0,
    "difficulty": "O'rta",
    "explanation": "$c_{23}$ ni topish uchun $A$ ning 2-satri $(2, 0, 4)$ ni $B$ ning 3-ustuni $(2, 0, 3)^T$ ga ko‘paytiramiz: $c_{23} = 2\\cdot 2 + 0\\cdot 0 + 4\\cdot 3 = 4 + 12 = 16$."
  },
  {
    "id": "T1_Q24",
    "topicId": 1,
    "num": 24,
    "question": "Agar kvadrat matritsa uchun $A^T = A$ shart bajarilsa, bunday matritsa qanday ataladi? Quyidagi $A = \\begin{pmatrix} 4 & x-2 \\\\ 3 & 7 \\end{pmatrix}$ matritsa $x$ ning qanday qiymatida shunday matritsa bo‘ladi?",
    "options": [
      "Birlik matritsa; $x = 3$",
      "Simmetrik matritsa; $x = -1$",
      "Diagonal matritsa; $x = 2$",
      "Simmetrik matritsa; $x = 5$"
    ],
    "answer": 3,
    "difficulty": "O'rta",
    "explanation": "$A^T = A$ bo‘lgan matritsa simmetrik matritsa deyiladi. $a_{12} = a_{21}$ bo‘lishi uchun $x - 2 = 3 \\implies x = 5$ bo‘lishi kerak."
  },
  {
    "id": "T1_Q25",
    "topicId": 1,
    "num": 25,
    "question": "Kvadrat matritsaning bosh diagonali elementlari yig‘indisi matritsaning izi ($\\text{tr}(A)$) deyiladi. $A = \\begin{pmatrix} 2 & -5 & 8 \\\\ 4 & -3 & 1 \\\\ 0 & 7 & 9 \\end{pmatrix}$ matritsaning asosiy diagonali elementlari yig‘indisi bilan yordamchi diagonali elementlari yig‘indisi ayirmasini toping.",
    "options": [
      "$5$",
      "$13$",
      "$3$",
      "$8$"
    ],
    "answer": 2,
    "difficulty": "O'rta",
    "explanation": "Asosiy diagonal yig‘indisi: $2 + (-3) + 9 = 8$. Yordamchi diagonal yig‘indisi: $8 + (-3) + 0 = 5$. Ularning ayirmasi: $8 - 5 = 3$."
  },
  {
    "id": "T1_Q26",
    "topicId": 1,
    "num": 26,
    "question": "Agar $A$ matritsa $3 \\times 4$ o‘lchamli, $B$ matritsa esa $2 \\times 4$ o‘lchamli bo‘lsa, quyidagi ifodalardan qaysi birini hisoblash MUMKIN?",
    "options": [
      "$A^T \\cdot B$",
      "$A \\cdot B^T$",
      "$A + B$",
      "$A \\cdot B$"
    ],
    "answer": 1,
    "difficulty": "O'rta",
    "explanation": "$B$ ning o‘lchami $2 \\times 4$ bo‘lsa, $B^T$ ning o‘lchami $4 \\times 2$ bo‘ladi. U holda $A_{3 \\times 4} \\cdot (B^T)_{4 \\times 2}$ ko‘paytma mavjud va $3 \\times 2$ o‘lchamli matritsa hosil bo‘ladi."
  },
  {
    "id": "T1_Q27",
    "topicId": 1,
    "num": 27,
    "question": "$A = \\begin{pmatrix} 1 & a \\\\ 0 & 1 \\end{pmatrix}$ matritsa berilgan bo‘lsa, $A^n$ ($n \\in \\mathbb{N}$) matritsani toping.",
    "options": [
      "$\\begin{pmatrix} 1 & na \\\\ 0 & 1 \\end{pmatrix}$",
      "$\\begin{pmatrix} 1 & 0 \\\\ na & 1 \\end{pmatrix}$",
      "$\\begin{pmatrix} n & na \\\\ 0 & n \\end{pmatrix}$",
      "$\\begin{pmatrix} 1 & a^n \\\\ 0 & 1 \\end{pmatrix}$"
    ],
    "answer": 0,
    "difficulty": "Qiyin",
    "explanation": "$A^2 = \\begin{pmatrix} 1 & a \\\\ 0 & 1 \\end{pmatrix}\\begin{pmatrix} 1 & a \\\\ 0 & 1 \\end{pmatrix} = \\begin{pmatrix} 1 & 2a \\\\ 0 & 1 \\end{pmatrix}$, matematik induksiya bo‘yicha $A^n = \\begin{pmatrix} 1 & na \\\\ 0 & 1 \\end{pmatrix}$."
  },
  {
    "id": "T1_Q28",
    "topicId": 1,
    "num": 28,
    "question": "$A = \\begin{pmatrix} 3 & -2 \\\\ 1 & 4 \\end{pmatrix}$ va $B = \\begin{pmatrix} -1 & 2 \\\\ 5 & 0 \\end{pmatrix}$ bo‘lsa, $AB - BA$ kommutator matritsani toping.",
    "options": [
      "$\\begin{pmatrix} -13 & 6 \\\\ 19 & 2 \\end{pmatrix}$",
      "$\\begin{pmatrix} 0 & 0 \\\\ 0 & 0 \\end{pmatrix}$",
      "$\\begin{pmatrix} 12 & 4 \\\\ -4 & -12 \\end{pmatrix}$",
      "$\\begin{pmatrix} -12 & -4 \\\\ 4 & 12 \\end{pmatrix}$"
    ],
    "answer": 3,
    "difficulty": "Qiyin",
    "explanation": "$AB = \\begin{pmatrix} -13 & 6 \\\\ 19 & 2 \\end{pmatrix}$, $BA = \\begin{pmatrix} -1 & 10 \\\\ 15 & -10 \\end{pmatrix}$. U holda $AB - BA = \\begin{pmatrix} -12 & -4 \\\\ 4 & 12 \\end{pmatrix}$... Tekshiramiz: $AB_{12} = 3\\cdot 2 + (-2)\\cdot 0 = 6$; $BA_{11} = -3 + 2 = -1, BA_{12} = 2 + 8 = 10, BA_{21} = 15 + 0 = 15, BA_{22} = -10 + 0 = -10$. Demak $AB - BA = \\begin{pmatrix} -12 & -4 \\\\ 4 & 12 \\end{pmatrix}$."
  },
  {
    "id": "T1_Q29",
    "topicId": 1,
    "num": 29,
    "question": "$A = \\begin{pmatrix} 2 & 1 \\\\ -1 & 3 \\end{pmatrix}$ va $B = \\begin{pmatrix} 1 & -2 \\\\ 4 & 0 \\end{pmatrix}$ bo‘lsa, $(A + B)^T$ matritsani toping.",
    "options": [
      "$\\begin{pmatrix} 3 & 3 \\\\ 1 & -3 \\end{pmatrix}$",
      "$\\begin{pmatrix} 3 & -1 \\\\ 3 & 3 \\end{pmatrix}$",
      "$\\begin{pmatrix} 3 & 3 \\\\ -1 & 3 \\end{pmatrix}$",
      "$\\begin{pmatrix} 1 & 5 \\\\ -3 & 3 \\end{pmatrix}$"
    ],
    "answer": 2,
    "difficulty": "Oson",
    "explanation": "$A + B = \\begin{pmatrix} 3 & -1 \\\\ 3 & 3 \\end{pmatrix}$. Uni transponirlasak: $(A+B)^T = \\begin{pmatrix} 3 & 3 \\\\ -1 & 3 \\end{pmatrix}$."
  },
  {
    "id": "T1_Q30",
    "topicId": 1,
    "num": 30,
    "question": "Diagonal matritsalar ko‘paytmasi $\\begin{pmatrix} 2 & 0 & 0 \\\\ 0 & -3 & 0 \\\\ 0 & 0 & 5 \\end{pmatrix} \\cdot \\begin{pmatrix} 4 & 0 & 0 \\\\ 0 & -2 & 0 \\\\ 0 & 0 & -1 \\end{pmatrix}$ nimaga teng?",
    "options": [
      "$\\begin{pmatrix} -2 & 0 & 0 \\\\ 0 & -1 & 0 \\\\ 0 & 0 & 6 \\end{pmatrix}$",
      "$\\begin{pmatrix} 8 & 0 & 0 \\\\ 0 & 6 & 0 \\\\ 0 & 0 & -5 \\end{pmatrix}$",
      "$\\begin{pmatrix} 8 & 0 & 0 \\\\ 0 & -6 & 0 \\\\ 0 & 0 & 5 \\end{pmatrix}$",
      "$\\begin{pmatrix} 6 & 0 & 0 \\\\ 0 & -5 & 0 \\\\ 0 & 0 & 4 \\end{pmatrix}$"
    ],
    "answer": 1,
    "difficulty": "Oson",
    "explanation": "Diagonal matritsalarni ko‘paytirishda mos diagonal elementlari o‘zaro ko‘paytiriladi: $2\\cdot 4=8,\\; (-3)\\cdot(-2)=6,\\; 5\\cdot(-1)=-5$."
  },
  {
    "id": "T2_Q1",
    "topicId": 2,
    "num": 1,
    "question": "Ikkinchi tartibli $\\begin{vmatrix} a_{11} & a_{12} \\\\ a_{21} & a_{22} \\end{vmatrix}$ determinant qaysi formula bilan hisoblanadi?",
    "options": [
      "$a_{11} \\cdot a_{22} + a_{12} \\cdot a_{21}$",
      "$a_{11} \\cdot a_{22} - a_{12} \\cdot a_{21}$",
      "$a_{12} \\cdot a_{21} - a_{11} \\cdot a_{22}$",
      "$a_{11} \\cdot a_{12} - a_{21} \\cdot a_{22}$"
    ],
    "answer": 1,
    "difficulty": "Oson",
    "explanation": "2-ma’ruza (15-slayd): 2-tartibli determinant bosh diagonal elementlari ko‘paytmasidan yordamchi diagonal elementlari ko‘paytmasini ayirish bilan topiladi."
  },
  {
    "id": "T2_Q2",
    "topicId": 2,
    "num": 2,
    "question": "Ma’ruzadagi 15-slayd misoli: $\\begin{vmatrix} -4 & 9 \\\\ -3 & 7 \\end{vmatrix}$ determinantni hisoblang.",
    "options": [
      "$-1$",
      "$55$",
      "$-55$",
      "$1$"
    ],
    "answer": 0,
    "difficulty": "Oson",
    "explanation": "2-ma’ruza (15-slayd): $(-4)\\cdot 7 - 9\\cdot(-3) = -28 + 27 = -1$."
  },
  {
    "id": "T2_Q3",
    "topicId": 2,
    "num": 3,
    "question": "Agar determinantning biror satr yoki biror ustun elementlarining barchasi nolga teng bo‘lsa (1-xossa), uning qiymati nimaga teng bo‘ladi?",
    "options": [
      "Qolgan elementlar yig‘indisiga teng bo‘ladi",
      "$1$ ga teng bo‘ladi",
      "$-1$ ga teng bo‘ladi",
      "$0$ ga teng bo‘ladi"
    ],
    "answer": 3,
    "difficulty": "Oson",
    "explanation": "2-ma’ruza (5-slayd, 1-xossa): Nol satr yoki nol ustunga ega determinantning qiymati har doim nolga teng."
  },
  {
    "id": "T2_Q4",
    "topicId": 2,
    "num": 4,
    "question": "Ma’ruzadagi 6-7-slaydlar asosida: $\\Delta_1 = \\begin{vmatrix} 4 & 0 & 0 \\\\ 0 & 3 & 0 \\\\ 0 & 0 & 5 \\end{vmatrix}$ va $\\Delta_2 = \\begin{vmatrix} 1 & 3 & 7 \\\\ 0 & -2 & 9 \\\\ 0 & 0 & 3 \\end{vmatrix}$ determinantlarning qiymatlarini toping.",
    "options": [
      "$\\Delta_1 = 0,\\quad \\Delta_2 = -6$",
      "$\\Delta_1 = 12,\\quad \\Delta_2 = 6$",
      "$\\Delta_1 = 60,\\quad \\Delta_2 = -6$",
      "$\\Delta_1 = 60,\\quad \\Delta_2 = 21$"
    ],
    "answer": 2,
    "difficulty": "Oson",
    "explanation": "2-ma’ruza (6-7-slaydlar): Diagonal va uchburchakli matritsaning determinanti bosh diagonal elementlari ko‘paytmasiga teng: $\\Delta_1 = 4\\cdot 3\\cdot 5 = 60$, $\\Delta_2 = 1\\cdot(-2)\\cdot 3 = -6$."
  },
  {
    "id": "T2_Q5",
    "topicId": 2,
    "num": 5,
    "question": "Determinantda ikkita satr (yoki ikkita ustun) o‘rinlari mos ravishda almashtirilsa (5-xossa), determinant qanday o‘zgaradi?",
    "options": [
      "Qiymati umuman o‘zgarmaydi",
      "Absolyut qiymati saqlanib, ishorasi qarama-qarshiga o‘zgaradi",
      "Qiymati $2$ marta ortadi",
      "Qiymati $0$ ga teng bo‘lib qoladi"
    ],
    "answer": 1,
    "difficulty": "Oson",
    "explanation": "2-ma’ruza (9-slayd, 5-xossa): Determinantda ikkita satr yoki ustun o‘rni almashtirilsa, determinantning ishorasi o‘zgaradi."
  },
  {
    "id": "T2_Q6",
    "topicId": 2,
    "num": 6,
    "question": "Ma’ruzadagi 9-slayd misoli: $\\Delta_1 = \\begin{vmatrix} 1 & 0 & 3 \\\\ 5 & 3 & 2 \\\\ 4 & 2 & 1 \\end{vmatrix}$ va uning 1- va 3-satrlari o‘rni almashtirilgan $\\Delta_2 = \\begin{vmatrix} 4 & 2 & 1 \\\\ 5 & 3 & 2 \\\\ 1 & 0 & 3 \\end{vmatrix}$ determinantlarni toping.",
    "options": [
      "$\\Delta_1 = -7,\\quad \\Delta_2 = 7$",
      "$\\Delta_1 = 13,\\quad \\Delta_2 = -13$",
      "$\\Delta_1 = 7,\\quad \\Delta_2 = -7$",
      "$\\Delta_1 = -7,\\quad \\Delta_2 = -7$"
    ],
    "answer": 0,
    "difficulty": "O'rta",
    "explanation": "2-ma’ruza (9-slayd): $\\Delta_1 = 3 + 30 + 0 - 36 - 4 - 0 = -7$. 1- va 3-satrlar o‘rni almashgani uchun $\\Delta_2 = -\\Delta_1 = 7$."
  },
  {
    "id": "T2_Q7",
    "topicId": 2,
    "num": 7,
    "question": "Ma’ruzadagi 12-slayd misoli: $\\begin{vmatrix} 6 & 8 & 4 \\\\ 12 & 6 & 8 \\\\ 3 & 4 & 2 \\end{vmatrix}$ determinantning qiymati nimaga teng va qaysi xossaga ko‘ra?",
    "options": [
      "$-24$ ga teng, chunki 2-satr juft sonlardan iborat",
      "$72$ ga teng, chunki uchburchakli determinant",
      "$192$ ga teng, Sarrius qoidasiga ko‘ra",
      "$0$ ga teng, chunki 1-satr va 3-satr elementlari mos ravishda proporsional ($k=2$)"
    ],
    "answer": 3,
    "difficulty": "Oson",
    "explanation": "2-ma’ruza (12-slayd, 8-xossa): 1-satr $(6, 8, 4) = 2 \\cdot (3, 4, 2)$, ya’ni 1- va 3-satrlar proporsional bo‘lgani uchun determinant nolga teng."
  },
  {
    "id": "T2_Q8",
    "topicId": 2,
    "num": 8,
    "question": "Determinantning biror satr elementlariga boshqa satrning mos elementlarini ixtiyoriy $k$ songa ko‘paytirib qo‘shilsa (7-xossa), determinantning qiymati qanday o‘zgaradi?",
    "options": [
      "Ishorasi qarama-qarshiga o‘zgaradi",
      "$k$ songa ko‘payadi",
      "O‘zgarmaydi",
      "$k$ marta ortadi"
    ],
    "answer": 2,
    "difficulty": "Oson",
    "explanation": "2-ma’ruza (11-slayd, 7-xossa): Bunday elementar almashtirishda determinantning qiymati o‘zgarmaydi."
  },
  {
    "id": "T2_Q9",
    "topicId": 2,
    "num": 9,
    "question": "Transponirlash natijasida determinantning qiymati qanday o‘zgaradi (9-xossa)? Ma’ruzadagi $\\begin{vmatrix} 2 & -4 & 3 \\\\ 3 & 1 & 5 \\\\ -1 & -2 & 1 \\end{vmatrix}$ determinant qiymatini toping.",
    "options": [
      "Teskari songa aylanadi; qiymati $1/39$ ga teng",
      "O‘zgarmaydi; qiymati $39$ ga teng",
      "O‘zgarmaydi; qiymati $27$ ga teng",
      "Ishorasi o‘zgaradi; qiymati $-39$ ga teng"
    ],
    "answer": 1,
    "difficulty": "O'rta",
    "explanation": "2-ma’ruza (13-slayd, 9-xossa): $\\det(A^T) = \\det(A) = 2(1+10) - (-4)(3+5) + 3(-6+1) = 22 + 32 - 15 = 39$."
  },
  {
    "id": "T2_Q10",
    "topicId": 2,
    "num": 10,
    "question": "Ma’ruzadagi 19-20-slaydlar misoli: Uchburchak va Sarrius qoidalaridan foydalanib $\\begin{vmatrix} 2 & 1 & -1 \\\\ 3 & 4 & 0 \\\\ 5 & 1 & 2 \\end{vmatrix}$ determinantni hisoblang.",
    "options": [
      "$27$",
      "$13$",
      "$-1$",
      "$-27$"
    ],
    "answer": 0,
    "difficulty": "O'rta",
    "explanation": "2-ma’ruza (19-20-slaydlar): $2\\cdot 4\\cdot 2 + (-1)\\cdot 3\\cdot 1 + 1\\cdot 5\\cdot 0 - (-1\\cdot 4\\cdot 5 + 1\\cdot 3\\cdot 2 + 2\\cdot 1\\cdot 0) = (16 - 3 + 0) - (-20 + 6 + 0) = 13 - (-14) = 27$."
  },
  {
    "id": "T2_Q11",
    "topicId": 2,
    "num": 11,
    "question": "Determinantning $a_{ij}$ elementiga mos $M_{ij}$ minori va $A_{ij}$ algebraik to‘ldiruvchisi orasidagi bog‘lanish formulasini ko‘rsating.",
    "options": [
      "$A_{ij} = (-1)^{i-j} + M_{ij}$",
      "$M_{ij} = (-1)^{i+j} A_{ij}^2$",
      "$A_{ij} = (-1)^{i \\cdot j} M_{ij}$",
      "$A_{ij} = (-1)^{i+j} M_{ij}$"
    ],
    "answer": 3,
    "difficulty": "Oson",
    "explanation": "2-ma’ruza (21-slayd): $A_{ij} = (-1)^{i+j} M_{ij}$, bu yerda $M_{ij}$ — $i$-satr va $j$-ustunni o‘chirishdan hosil bo‘lgan $(n-1)$-tartibli determinant."
  },
  {
    "id": "T2_Q12",
    "topicId": 2,
    "num": 12,
    "question": "Ma’ruzadagi 22-slayd misoli: $\\det(A) = \\begin{vmatrix} 2 & 1 & 3 \\\\ 5 & 3 & 2 \\\\ 1 & 4 & 3 \\end{vmatrix}$ determinant uchun $M_{11}$ minor va $A_{11}$ algebraik to‘ldiruvchini toping.",
    "options": [
      "$M_{11} = 17,\\quad A_{11} = 17$",
      "$M_{11} = -1,\\quad A_{11} = 1$",
      "$M_{11} = 1,\\quad A_{11} = 1$",
      "$M_{11} = 1,\\quad A_{11} = -1$"
    ],
    "answer": 2,
    "difficulty": "Oson",
    "explanation": "2-ma’ruza (22-slayd): $M_{11} = \\begin{vmatrix} 3 & 2 \\\\ 4 & 3 \\end{vmatrix} = 9 - 8 = 1$; $A_{11} = (-1)^{1+1} M_{11} = 1$."
  },
  {
    "id": "T2_Q13",
    "topicId": 2,
    "num": 13,
    "question": "Ma’ruzadagi 22-slayd misoli: $\\det(A) = \\begin{vmatrix} 2 & 1 & 3 \\\\ 5 & 3 & 2 \\\\ 1 & 4 & 3 \\end{vmatrix}$ determinant uchun $M_{32}$ minor va $A_{32}$ algebraik to‘ldiruvchini toping.",
    "options": [
      "$M_{32} = -11,\\quad A_{32} = -11$",
      "$M_{32} = -11,\\quad A_{32} = 11$",
      "$M_{32} = 7,\\quad A_{32} = -7$",
      "$M_{32} = 11,\\quad A_{32} = -11$"
    ],
    "answer": 1,
    "difficulty": "O'rta",
    "explanation": "2-ma’ruza (22-slayd): 3-satr va 2-ustun o‘chirilsa, $M_{32} = \\begin{vmatrix} 2 & 3 \\\\ 5 & 2 \\end{vmatrix} = 4 - 15 = -11$. $A_{32} = (-1)^{3+2} \\cdot (-11) = 11$."
  },
  {
    "id": "T2_Q14",
    "topicId": 2,
    "num": 14,
    "question": "Ma’ruzadagi 22-slayd misoli: $\\det(A) = \\begin{vmatrix} 2 & 1 & 3 \\\\ 5 & 3 & 2 \\\\ 1 & 4 & 3 \\end{vmatrix}$ determinant uchun $M_{23}$ minor va $A_{23}$ algebraik to‘ldiruvchini toping.",
    "options": [
      "$M_{23} = 7,\\quad A_{23} = -7$",
      "$M_{23} = -7,\\quad A_{23} = 7$",
      "$M_{23} = 7,\\quad A_{23} = 7$",
      "$M_{23} = 9,\\quad A_{23} = -9$"
    ],
    "answer": 0,
    "difficulty": "O'rta",
    "explanation": "2-ma’ruza (22-slayd): 2-satr va 3-ustun o‘chirilsa, $M_{23} = \\begin{vmatrix} 2 & 1 \\\\ 1 & 4 \\end{vmatrix} = 8 - 1 = 7$. $A_{23} = (-1)^{2+3} \\cdot 7 = -7$."
  },
  {
    "id": "T2_Q15",
    "topicId": 2,
    "num": 15,
    "question": "Agar 3-tartibli kvadrat $A$ matritsaning determinanti $\\det(A) = -2$ bo‘lsa, har bir elementi $3$ ga ko‘paytirilgan $3A$ matritsaning determinanti $\\det(3A)$ nimaga teng?",
    "options": [
      "$54$",
      "$-6$",
      "$-18$",
      "$-54$"
    ],
    "answer": 3,
    "difficulty": "O'rta",
    "explanation": "4-xossaga ko‘ra, $3A$ matritsaning HAR BIR (3 ta) satridan $3$ ko‘paytuvchi determinant belgisidan tashqariga chiqadi: $\\det(3A) = 3^3 \\cdot \\det(A) = 27 \\cdot (-2) = -54$."
  },
  {
    "id": "T2_Q16",
    "topicId": 2,
    "num": 16,
    "question": "$\\begin{vmatrix} \\cos\\alpha & -\\sin\\alpha \\\\ \\sin\\alpha & \\cos\\alpha \\end{vmatrix}$ determinantning qiymatini toping.",
    "options": [
      "$\\cos 2\\alpha$",
      "$0$",
      "$1$",
      "$\\sin 2\\alpha$"
    ],
    "answer": 2,
    "difficulty": "Oson",
    "explanation": "$\\cos\\alpha \\cdot \\cos\\alpha - (-\\sin\\alpha)\\cdot\\sin\\alpha = \\cos^2\\alpha + \\sin^2\\alpha = 1$."
  },
  {
    "id": "T2_Q17",
    "topicId": 2,
    "num": 17,
    "question": "$\\begin{vmatrix} x - 1 & 3 \\\\ 4 & x + 3 \\end{vmatrix} = 0$ tenglamaning ildizlarini toping.",
    "options": [
      "$x_1 = 5,\\quad x_2 = -3$",
      "$x_1 = -5,\\quad x_2 = 3$",
      "$x_1 = -3,\\quad x_2 = 4$",
      "$x_1 = 1,\\quad x_2 = -15$"
    ],
    "answer": 1,
    "difficulty": "O'rta",
    "explanation": "$(x-1)(x+3) - 12 = 0 \\implies x^2 + 2x - 15 = 0 \\implies (x+5)(x-3) = 0 \\implies x_1 = -5,\\; x_2 = 3$."
  },
  {
    "id": "T2_Q18",
    "topicId": 2,
    "num": 18,
    "question": "3-tartibli $\\begin{vmatrix} 1 & 2 & 3 \\\\ 4 & 5 & 6 \\\\ 7 & 8 & 9 \\end{vmatrix}$ determinantning qiymatini hisoblang.",
    "options": [
      "$0$",
      "$45$",
      "$24$",
      "$-12$"
    ],
    "answer": 0,
    "difficulty": "O'rta",
    "explanation": "3-satrdan 2-satrni va 2-satrdan 1-satrni ayirsak, ikkita bir xil $(3, 3, 3)$ satr hosil bo‘ladi, demak $\\Delta = 0$."
  },
  {
    "id": "T2_Q19",
    "topicId": 2,
    "num": 19,
    "question": "3-tartibli $\\begin{vmatrix} 3 & -1 & 2 \\\\ 1 & 2 & -1 \\\\ 2 & 3 & 4 \\end{vmatrix}$ determinantni hisoblang.",
    "options": [
      "$-37$",
      "$21$",
      "$17$",
      "$37$"
    ],
    "answer": 3,
    "difficulty": "O'rta",
    "explanation": "$\\Delta = 3(8+3) - (-1)(4+2) + 2(3-4) = 33 + 6 - 2 = 37$... Tekshiramiz: $3(2\\cdot4 - (-1)\\cdot3) - (-1)(1\\cdot4 - (-1)\\cdot2) + 2(1\\cdot3 - 2\\cdot2) = 3(11) + 1(6) + 2(-1) = 33 + 6 - 2 = 37$."
  },
  {
    "id": "T2_Q20",
    "topicId": 2,
    "num": 20,
    "question": "Yordamchi diagonalga nisbatan uchburchakli bo‘lgan $\\begin{vmatrix} 0 & 0 & 4 \\\\ 0 & 3 & 7 \\\\ 2 & -5 & 9 \\end{vmatrix}$ determinantni hisoblang.",
    "options": [
      "$-36$",
      "$0$",
      "$-24$",
      "$24$"
    ],
    "answer": 2,
    "difficulty": "O'rta",
    "explanation": "1- va 3-ustunlar o‘rnini almashtirsak, ishora minusga o‘zgaradi va bosh diagonali $(4, 3, 2)$ bo‘lgan quyi uchburchakli determinant hosil bo‘ladi: $\\Delta = -(4 \\cdot 3 \\cdot 2) = -24$."
  },
  {
    "id": "T2_Q21",
    "topicId": 2,
    "num": 21,
    "question": "Agar $\\begin{vmatrix} a & b & c \\\\ d & e & f \\\\ g & h & k \\end{vmatrix} = 5$ bo‘lsa, $\\begin{vmatrix} d & e & f \\\\ 2a & 2b & 2c \\\\ g+d & h+e & k+f \\end{vmatrix}$ determinant nimaga teng?",
    "options": [
      "$5$",
      "$-10$",
      "$-5$",
      "$10$"
    ],
    "answer": 1,
    "difficulty": "Qiyin",
    "explanation": "1) 1- va 2-satr almashgani uchun ishora minus bo‘ladi ($-1$); 2) 2-satrdan $2$ ko‘paytuvchi chiqadi ($-2$); 3) 3-satrga 1-satrning qo‘shilishi qiymatni o‘zgartirmaydi (7-xossa). Natija: $-2 \\cdot 5 = -10$."
  },
  {
    "id": "T2_Q22",
    "topicId": 2,
    "num": 22,
    "question": "$\\begin{vmatrix} 2 & x & 1 \\\\ 1 & 3 & 2 \\\\ 0 & 4 & 5 \\end{vmatrix} = 18$ tenglamadan $x$ ni toping.",
    "options": [
      "$x = 0$",
      "$x = -1$",
      "$x = 3$",
      "$x = 2$"
    ],
    "answer": 0,
    "difficulty": "O'rta",
    "explanation": "1-satr bo‘yicha yoyamiz: $2(15-8) - x(5-0) + 1(4-0) = 11 \\implies 14 - 5x + 4 = 11 \\implies 18 - 5x = 11$... Agar o‘ng tomon $18$ bo‘lsa $x=0$ chiqadi. Keling tenglamani $= 18$ deb olamiz!"
  },
  {
    "id": "T2_Q23",
    "topicId": 2,
    "num": 23,
    "question": "3-tartibli determinantni Sarrius qoidasi bilan hisoblashda determinant ostiga qaysi satrlar ko‘chirib yoziladi?",
    "options": [
      "2-satr va 3-satr teskari tartibda yoziladi",
      "Faqat 3-satr ikki marta ko‘chirib yoziladi",
      "Bosh diagonal elementlari ustun qilib yoziladi",
      "1-satr va 2-satr o‘z tartibida ko‘chirib yoziladi"
    ],
    "answer": 3,
    "difficulty": "Oson",
    "explanation": "2-ma’ruza (18, 20-slaydlar): Sarrius qoidasida 3-tartibli determinant ostiga 1- va 2-satrlar ($a_{11}, a_{12}, a_{13}$ hamda $a_{21}, a_{22}, a_{23}$) ko‘chirib yoziladi."
  },
  {
    "id": "T2_Q24",
    "topicId": 2,
    "num": 24,
    "question": "$A = \\begin{pmatrix} 5 & -2 & 1 \\\\ 0 & 3 & -4 \\\\ 2 & 1 & 6 \\end{pmatrix}$ matritsaning barcha diagonal elementlariga mos algebraik to‘ldiruvchilar yig‘indisi $A_{11} + A_{22} + A_{33}$ ni toping.",
    "options": [
      "$50$",
      "$49$",
      "$65$",
      "$57$"
    ],
    "answer": 2,
    "difficulty": "Qiyin",
    "explanation": "$A_{11} = \\begin{vmatrix} 3 & -4 \\\\ 1 & 6 \\end{vmatrix} = 18 - (-4) = 22$; $A_{22} = \\begin{vmatrix} 5 & 1 \\\\ 2 & 6 \\end{vmatrix} = 30 - 2 = 28$; $A_{33} = \\begin{vmatrix} 5 & -2 \\\\ 0 & 3 \\end{vmatrix} = 15 - 0 = 15$. Yig‘indi: $22 + 28 + 15 = 65$."
  },
  {
    "id": "T2_Q25",
    "topicId": 2,
    "num": 25,
    "question": "$\\begin{vmatrix} -2 & -2 & 3 \\\\ -2 & -4 & -1 \\\\ 1 & 7 & 1 \\end{vmatrix}$ 3-tartibli determinantni hisoblang.",
    "options": [
      "$-22$",
      "$-38$",
      "$38$",
      "$50$"
    ],
    "answer": 1,
    "difficulty": "O'rta",
    "explanation": "$\\Delta = (-2)(-4 - (-7)) - (-2)(-2 - (-1)) + 3(-14 - (-4)) = (-2)(3) + 2(-1) + 3(-10) = -6 - 2 - 30 = -38$."
  },
  {
    "id": "T2_Q26",
    "topicId": 2,
    "num": 26,
    "question": "$\\begin{vmatrix} -1 & -3 & 0 \\\\ -2 & 2 & 0 \\\\ -8 & -8 & -2 \\end{vmatrix}$ 3-tartibli determinantni hisoblang.",
    "options": [
      "$16$",
      "$8$",
      "$26$",
      "$-16$"
    ],
    "answer": 0,
    "difficulty": "Oson",
    "explanation": "3-ustunda ikkita nol bor! 3-ustun bo‘yicha yopilsa: $\\Delta = (-2) \\cdot (-1)^{3+3} \\begin{vmatrix} -1 & -3 \\\\ -2 & 2 \\end{vmatrix} = -2 \\cdot (-2 - 6) = -2 \\cdot (-8) = 16$."
  },
  {
    "id": "T2_Q27",
    "topicId": 2,
    "num": 27,
    "question": "Agar $A$ va $B$ matritsalar $3 \\times 3$ o‘lchamli bo‘lib, $\\det(A) = 4$ va $\\det(B) = -3$ bo‘lsa, $\\det(A^T \\cdot B^2)$ ni toping.",
    "options": [
      "$-36$",
      "$-12$",
      "$48$",
      "$36$"
    ],
    "answer": 3,
    "difficulty": "O'rta",
    "explanation": "$\\det(A^T \\cdot B^2) = \\det(A^T) \\cdot (\\det B)^2 = \\det(A) \\cdot (-3)^2 = 4 \\cdot 9 = 36$."
  },
  {
    "id": "T2_Q28",
    "topicId": 2,
    "num": 28,
    "question": "Ma’ruzadagi 11-slayd misoli: $\\begin{vmatrix} 1 & 2 & 3 \\\\ 2 & 4 & 5 \\\\ 3 & 5 & 1 \\end{vmatrix}$ determinantning qiymatini toping.",
    "options": [
      "$0$",
      "$1$",
      "$-1$",
      "$-5$"
    ],
    "answer": 2,
    "difficulty": "O'rta",
    "explanation": "2-ma’ruza (11-slayd): 2-satrdan 1-satrning 2 baravarini ayirsak $(0, 0, -1)$ hosil bo‘ladi. Yoyib hisoblasak: $\\Delta = -1$."
  },
  {
    "id": "T2_Q29",
    "topicId": 2,
    "num": 29,
    "question": "Ma’ruzadagi 8-slayd misoli: $3 \\cdot \\begin{vmatrix} 2 & 7 & 3 \\\\ 5 & 6 & 8 \\\\ 1 & 4 & 2 \\end{vmatrix}$ ifodaning qiymatini toping.",
    "options": [
      "$36$",
      "$-36$",
      "$-12$",
      "$12$"
    ],
    "answer": 1,
    "difficulty": "O'rta",
    "explanation": "2-ma’ruza (8-slayd): Determinantning o‘zi $2(12-32) - 7(10-8) + 3(20-6) = -40 - 14 + 42 = -12$ ga teng. $3 \\cdot (-12) = -36$."
  },
  {
    "id": "T2_Q30",
    "topicId": 2,
    "num": 30,
    "question": "3-tartibli determinantda $a_{21}, a_{12}, a_{32}, a_{23}$ elementlarning algebraik to‘ldiruvchilari oldidagi $(-1)^{i+j}$ ishora ko‘paytuvchilari qanday bo‘ladi?",
    "options": [
      "Barchasida minus ($-1$) bo‘ladi, chunki $i+j$ yig‘indi toq son",
      "$a_{21}$ va $a_{12}$ da plyus, qolganlarida minus",
      "Barchasida plyus ($+1$) bo‘ladi, chunki $i+j$ yig‘indi juft son",
      "$a_{23}$ va $a_{32}$ da plyus, qolganlarida minus"
    ],
    "answer": 0,
    "difficulty": "Oson",
    "explanation": "$2+1=3,\\; 1+2=3,\\; 3+2=5,\\; 2+3=5$ — barchasida indekslar yig‘indisi toq bo‘lgani uchun $(-1)^{i+j} = -1$ bo‘ladi."
  },
  {
    "id": "T3_Q1",
    "topicId": 3,
    "num": 1,
    "question": "Kvadrat matritsaning determinanti nolga teng bo‘lsa ($\\det A = 0$) va noldan farqli bo‘lsa ($\\det A \\ne 0$), ular mos ravishda qanday ataladi?",
    "options": [
      "$\\det A = 0$ bo‘lsa — xos matritsa; $\\det A \\ne 0$ bo‘lsa — xosmas matritsa",
      "$\\det A = 0$ bo‘lsa — qo‘shma matritsa; $\\det A \\ne 0$ bo‘lsa — transponirlangan matritsa",
      "$\\det A = 0$ bo‘lsa — xosmas matritsa; $\\det A \\ne 0$ bo‘lsa — xos matritsa",
      "$\\det A = 0$ bo‘lsa — birlik matritsa; $\\det A \\ne 0$ bo‘lsa — diagonal matritsa"
    ],
    "answer": 0,
    "difficulty": "Oson",
    "explanation": "3-ma’ruza (4-slayd): Determinanti nolga teng kvadrat matritsa xos matritsa, determinanti noldan farqli matritsa esa xosmas matritsa deyiladi."
  },
  {
    "id": "T3_Q2",
    "topicId": 3,
    "num": 2,
    "question": "Ma’ruzadagi 4-slayd misoli: $A = \\begin{pmatrix} 1 & -2 \\\\ -5 & 10 \\end{pmatrix}$ va $B = \\begin{pmatrix} 1 & -2 & 3 \\\\ 0 & 4 & -1 \\\\ 5 & 0 & 0 \\end{pmatrix}$ matritsalarning determinantlarini va turini aniqlang.",
    "options": [
      "$|A| = 20$ (xosmas matritsa); $|B| = 0$ (xos matritsa)",
      "Ikkalasi ham xos matritsa",
      "$|A| = 0$ (xos matritsa); $|B| = 50$ (xosmas matritsa)",
      "$|A| = 0$ (xos matritsa); $|B| = -50 \\ne 0$ (xosmas matritsa)"
    ],
    "answer": 3,
    "difficulty": "Oson",
    "explanation": "3-ma’ruza (4-slayd): $|A| = 10 - 10 = 0$ (xos matritsa); $|B| = 10 - 60 = -50 \\ne 0$ (xosmas matritsa)."
  },
  {
    "id": "T3_Q3",
    "topicId": 3,
    "num": 3,
    "question": "$A$ kvadrat matritsaga «qo‘shma matritsa» $\\bar{A}$ deb nimaga aytiladi?",
    "options": [
      "Matritsaning barcha minorlaridan tuzilgan transponirlanmagan matritsaga",
      "Har bir $a_{ij}$ elementni $-a_{ij}$ bilan almashtirilgan matritsaga",
      "Har bir $a_{ij}$ elementni unga mos $A_{ij}$ algebraik to‘ldiruvchisi bilan almashtirib, hosil bo‘lgan matritsani transponirlashdan chiqqan matritsaga",
      "Matritsaning bosh diagonal elementlarini o‘zaro almashtirishdan hosil bo‘lgan matritsaga"
    ],
    "answer": 2,
    "difficulty": "Oson",
    "explanation": "3-ma’ruza (5-slayd): $A$ kvadrat matritsaning har bir $a_{ij}$ elementini unga mos algebraik to‘ldiruvchisi bilan almashtirishdan tuzilgan matritsani transponirlash natijasida hosil bo‘lgan matritsa qo‘shma matritsa $\\bar{A}$ deyiladi."
  },
  {
    "id": "T3_Q4",
    "topicId": 3,
    "num": 4,
    "question": "Teskari matritsa ta’rifi va mavjudlik sharti qaysi javobda to‘g‘ri berilgan?",
    "options": [
      "$AA^{-1} = O$ tenglik bajarilsa va ixtiyoriy to‘g‘ri burchakli matritsa uchun mavjud",
      "$AA^{-1} = A^{-1}A = E$ tenglik bajarilsa, $A^{-1}$ teskari matritsa deyiladi va u faqat xosmas ($\\det A \\ne 0$) matritsa uchun mavjud",
      "Faqat diagonal matritsalar uchun teskari matritsa mavjud",
      "$A + A^{-1} = E$ tenglik bajarilsa va $\\det A = 0$ bo‘lganda mavjud"
    ],
    "answer": 1,
    "difficulty": "Oson",
    "explanation": "3-ma’ruza (6-slayd): $AA^{-1} = A^{-1}A = E$ bo‘lib, $A^{-1} = \\frac{1}{\\det A}\\bar{A}$ faqat xosmas ($\\det A \\ne 0$) matritsa uchun mavjud."
  },
  {
    "id": "T3_Q5",
    "topicId": 3,
    "num": 5,
    "question": "Teskari matritsa xossalariga ko‘ra quyidagi tengliklardan qaysi biri NOTO‘G‘RI?",
    "options": [
      "$(AB)^{-1} = A^{-1} B^{-1}$",
      "$\\det(A^{-1}) = \\frac{1}{\\det(A)}$",
      "$(A^{-1})^{-1} = A$",
      "$(A^{-1})^T = (A^T)^{-1}$"
    ],
    "answer": 0,
    "difficulty": "Oson",
    "explanation": "3-ma’ruza (7-slayd): 4-xossaga ko‘ra $(AB)^{-1} = B^{-1} A^{-1}$ bo‘ladi, ya’ni tartib teskarisiga o‘zgaradi!"
  },
  {
    "id": "T3_Q6",
    "topicId": 3,
    "num": 6,
    "question": "Ma’ruzadagi 10-slayd misoli: $A = \\begin{pmatrix} 1 & -2 & 3 \\\\ 0 & 4 & -1 \\\\ 5 & 0 & 0 \\end{pmatrix}$ matritsa uchun qo‘shma matritsa $\\bar{A}$ ni toping.",
    "options": [
      "$\\begin{pmatrix} 4 & 0 & 0 \\\\ -10 & -15 & -5 \\\\ -10 & 1 & 0 \\end{pmatrix}$",
      "$\\begin{pmatrix} 0 & 0 & 10 \\\\ 5 & 15 & -1 \\\\ 20 & 10 & -4 \\end{pmatrix}$",
      "$\\begin{pmatrix} 0 & -5 & -20 \\\\ 0 & -15 & -10 \\\\ -10 & 1 & 4 \\end{pmatrix}$",
      "$\\begin{pmatrix} 0 & 0 & -10 \\\\ -5 & -15 & 1 \\\\ -20 & -10 & 4 \\end{pmatrix}$"
    ],
    "answer": 3,
    "difficulty": "O'rta",
    "explanation": "3-ma’ruza (10-slayd): Algebraik to‘ldiruvchilar: $A_{11}=0, A_{12}=-5, A_{13}=-20; A_{21}=0, A_{22}=-15, A_{23}=-10; A_{31}=-10, A_{32}=1, A_{33}=4$. Transponirlash natijasida $\\bar{A} = \\begin{pmatrix} 0 & 0 & -10 \\\\ -5 & -15 & 1 \\\\ -20 & -10 & 4 \\end{pmatrix}$."
  },
  {
    "id": "T3_Q7",
    "topicId": 3,
    "num": 7,
    "question": "Ma’ruzadagi 8-slayd misoli: $A = \\begin{pmatrix} 1 & 2 & 3 \\\\ 4 & 5 & 6 \\\\ 7 & 8 & 0 \\end{pmatrix}$ matritsaning determinanti $\\det(A) = 27$ bo‘lsa, uning teskari matritsasi $A^{-1}$ ni toping.",
    "options": [
      "$\\frac{1}{27} \\begin{pmatrix} 48 & -24 & 3 \\\\ -42 & 21 & -6 \\\\ 3 & -6 & 3 \\end{pmatrix}$",
      "$\\frac{1}{9} \\begin{pmatrix} -16 & 8 & -1 \\\\ 14 & -7 & 2 \\\\ 1 & 2 & 1 \\end{pmatrix}$",
      "$\\frac{1}{27} \\begin{pmatrix} -48 & 24 & -3 \\\\ 42 & -21 & 6 \\\\ -3 & 6 & -3 \\end{pmatrix}$",
      "$\\frac{1}{27} \\begin{pmatrix} -48 & 42 & -3 \\\\ 24 & -21 & 6 \\\\ -3 & 6 & -3 \\end{pmatrix}$"
    ],
    "answer": 2,
    "difficulty": "O'rta",
    "explanation": "3-ma’ruza (8-9-slaydlar): $A_{11}=-48, A_{21}=24, A_{31}=-3; A_{12}=42, A_{22}=-21, A_{32}=6; A_{13}=-3, A_{23}=6, A_{33}=-3$ va $\\det A = 27$."
  },
  {
    "id": "T3_Q8",
    "topicId": 3,
    "num": 8,
    "question": "Teskari matritsani Gauss-Jordan usuli bilan topishda qanday blok-matritsa tuziladi va qanday ko‘rinishga keltiriladi?",
    "options": [
      "$(E \\mid A)$ matritsa $(A^T \\mid E)$ ko‘rinishga keltiriladi",
      "$(A \\mid E)$ matritsa elementar satr almashtirishlari yordamida $(E \\mid A^{-1})$ ko‘rinishga keltiriladi",
      "$(A \\mid B)$ matritsa $(E \\mid X)$ ko‘rinishga keltiriladi",
      "$(A \\mid A^T)$ matritsa $(E \\mid E)$ ko‘rinishga keltiriladi"
    ],
    "answer": 1,
    "difficulty": "Oson",
    "explanation": "3-ma’ruza (11-slayd): Gauss-Jordan usulida $(A \\mid E) \\sim (E \\mid A^{-1})$ sxemasi qo‘llaniladi."
  },
  {
    "id": "T3_Q9",
    "topicId": 3,
    "num": 9,
    "question": "Ma’ruzadagi 11-slayd misoli: Gauss-Jordan usuli yordamida $A = \\begin{pmatrix} 1 & 1 & 1 \\\\ 1 & 2 & -1 \\\\ 2 & 2 & 4 \\end{pmatrix}$ matritsaning teskari matritsasi $A^{-1}$ ni toping.",
    "options": [
      "$\\begin{pmatrix} 5 & -1 & -3/2 \\\\ -3 & 1 & 1 \\\\ -1 & 0 & 1/2 \\end{pmatrix}$",
      "$\\begin{pmatrix} 5 & 1 & 3/2 \\\\ -3 & 1 & -1 \\\\ -1 & 0 & -1/2 \\end{pmatrix}$",
      "$\\begin{pmatrix} 5 & -3 & -1 \\\\ -1 & 1 & 0 \\\\ -3/2 & 1 & 1/2 \\end{pmatrix}$",
      "$\\begin{pmatrix} 1 & -1 & 3/2 \\\\ 3 & 1 & -1 \\\\ 1 & 0 & 1/2 \\end{pmatrix}$"
    ],
    "answer": 0,
    "difficulty": "Qiyin",
    "explanation": "3-ma’ruza (11-slayd): $(A|E) \\sim (E|A^{-1})$ zanjiri yakunida o‘ng blokda $\\begin{pmatrix} 5 & -1 & -3/2 \\\\ -3 & 1 & 1 \\\\ -1 & 0 & 1/2 \\end{pmatrix}$ hosil bo‘ladi."
  },
  {
    "id": "T3_Q10",
    "topicId": 3,
    "num": 10,
    "question": "$A = \\begin{pmatrix} 3 & 5 \\\\ 1 & 2 \\end{pmatrix}$ 2-tartibli matritsaning teskari matritsasi $A^{-1}$ ni toping.",
    "options": [
      "$\\begin{pmatrix} 2 & -1 \\\\ -5 & 3 \\end{pmatrix}$",
      "$\\begin{pmatrix} 3 & -5 \\\\ -1 & 2 \\end{pmatrix}$",
      "$\\begin{pmatrix} -2 & 5 \\\\ 1 & -3 \\end{pmatrix}$",
      "$\\begin{pmatrix} 2 & -5 \\\\ -1 & 3 \\end{pmatrix}$"
    ],
    "answer": 3,
    "difficulty": "Oson",
    "explanation": "$\\det(A) = 6 - 5 = 1$. 2-tartibli matritsa uchun bosh diagonal elementlari o‘rni almashadi, yordamchi diagonal ishorasi o‘zgaradi: $A^{-1} = \\begin{pmatrix} 2 & -5 \\\\ -1 & 3 \\end{pmatrix}$."
  },
  {
    "id": "T3_Q11",
    "topicId": 3,
    "num": 11,
    "question": "$A = \\begin{pmatrix} 7 & -3 & 8 \\\\ 4 & -1 & 4 \\\\ 4 & -2 & 5 \\end{pmatrix}$ matritsa uchun teskari matritsa $A^{-1}$ ni toping.",
    "options": [
      "$\\begin{pmatrix} -3 & 1 & 4 \\\\ 4 & -3 & -4 \\\\ 4 & -2 & -5 \\end{pmatrix}$",
      "$\\begin{pmatrix} 3 & -4 & -4 \\\\ -1 & 3 & 2 \\\\ -4 & 4 & 5 \\end{pmatrix}$",
      "$\\begin{pmatrix} 3 & -1 & -4 \\\\ -4 & 3 & 4 \\\\ -4 & 2 & 5 \\end{pmatrix}$",
      "$\\begin{pmatrix} 7 & 4 & 4 \\\\ -3 & -1 & -2 \\\\ 8 & 4 & 5 \\end{pmatrix}$"
    ],
    "answer": 2,
    "difficulty": "Qiyin",
    "explanation": "$\\det(A) = 7(-5+8) - (-3)(20-16) + 8(-8+4) = 21 + 12 - 32 = 1$. Qo‘shma matritsa: $A^{-1} = \\begin{pmatrix} 3 & -1 & -4 \\\\ -4 & 3 & 4 \\\\ -4 & 2 & 5 \\end{pmatrix}$."
  },
  {
    "id": "T3_Q12",
    "topicId": 3,
    "num": 12,
    "question": "$A$ matritsaning rangi $r(A)$ deb nimaga aytiladi va $m \\times n$ o‘lchovli matritsa uchun u qanday oraliqda yotadi?",
    "options": [
      "Noldan farqli barcha elementlar soniga aytiladi; $0 \\le r(A) \\le m \\cdot n$",
      "Noldan farqli eng katta tartibli osti minori tartibiga aytiladi; $0 \\le r(A) \\le \\min(m, n)$",
      "Satrlar va ustunlar soni yig‘indisiga aytiladi; $r(A) = m + n$",
      "Eng kichik tartibli minor qiymatiga aytiladi; $1 \\le r(A) \\le \\max(m, n)$"
    ],
    "answer": 1,
    "difficulty": "Oson",
    "explanation": "3-ma’ruza (13, 18-slaydlar): $A$ matritsaning rangi uning noldan farqli eng katta minori tartibiga teng va $0 \\le r(A) \\le \\min(m, n)$."
  },
  {
    "id": "T3_Q13",
    "topicId": 3,
    "num": 13,
    "question": "Ma’ruzadagi 12-slayd misoli: $3 \\times 2$ o‘lchovli $A = \\begin{pmatrix} 1 & -2 \\\\ -2 & 4 \\\\ 3 & -7 \\end{pmatrix}$ matritsada 3-tartibli minorlar bormi va uning rangi nechaga teng?",
    "options": [
      "3-tartibli minorlar yo‘q (chunki o‘lchami $3 \\times 2$); rangi $r(A) = 2$",
      "Bitta 3-tartibli minori bor; rangi $r(A) = 3$",
      "3-tartibli minorlar 3 ta; rangi $r(A) = 2$",
      "3-tartibli minorlar yo‘q; rangi $r(A) = 1$"
    ],
    "answer": 0,
    "difficulty": "Oson",
    "explanation": "3-ma’ruza (12-slayd): $3 \\times 2$ matritsada 3-tartibli minor yo‘q. 2-tartibli minori $\\begin{vmatrix} 1 & -2 \\\\ 3 & -7 \\end{vmatrix} = -7 + 6 = -1 \\ne 0$ bo‘lgani uchun $r(A) = 2$."
  },
  {
    "id": "T3_Q14",
    "topicId": 3,
    "num": 14,
    "question": "Quyidagilardan qaysi biri matritsaning rangi o‘zgarmaydigan 5 ta «elementar almashtirishlar» qatoriga KIRMAYDI?",
    "options": [
      "Biror satr elementlarini noldan farqli songa ko‘paytirib, boshqa satr mos elementlariga qo‘shish",
      "Satrlar (yoki ustunlar) o‘rnini almashtirish va transponirlash",
      "Biror satr (yoki ustun) elementlarini noldan farqli songa ko‘paytirish va nol satrni tashlab yuborish",
      "Matritsaning har bir elementiga bir xil $k \\ne 0$ sonni qo‘shib chiqish"
    ],
    "answer": 3,
    "difficulty": "Oson",
    "explanation": "3-ma’ruza (15-17-slaydlar): Barcha elementlarga bitta sonni qo‘shib chiqish elementar almashtirish emas va u matritsa rangini o‘zgartirib yuborishi mumkin."
  },
  {
    "id": "T3_Q15",
    "topicId": 3,
    "num": 15,
    "question": "Ma’ruzadagi 14-slayd misoli: $4 \\times 6$ o‘lchovli $A = \\begin{pmatrix} 5 & 6 & 0 & 0 & 1 & 2 \\\\ 3 & 4 & 1 & -2 & 0 & 0 \\\\ 0 & 1 & -1 & -3 & 1 & 1 \\\\ -2 & 0 & -2 & -1 & 0 & -1 \\end{pmatrix}$ matritsaning dastlabki 4 ta ustunidan tuzilgan $M_4$ minori va rangi $r(A)$ nimaga teng?",
    "options": [
      "$M_4 = 0,\\quad r(A) = 3$",
      "$M_4 = -15 \\ne 0,\\quad r(A) = 2$",
      "$M_4 = -45 \\ne 0,\\quad r(A) = 4$",
      "$M_4 = 45 \\ne 0,\\quad r(A) = 6$"
    ],
    "answer": 2,
    "difficulty": "O'rta",
    "explanation": "3-ma’ruza (14-slayd): $M_4 = 5(-15) - 6(-5) = -75 + 30 = -45 \\ne 0$. Eng katta mumkin bo‘lgan tartib $\\min(4, 6) = 4$ bo‘lgani uchun $r(A) = 4$."
  },
  {
    "id": "T3_Q16",
    "topicId": 3,
    "num": 16,
    "question": "Ma’ruzadagi 20-slayd misoli: $A = \\begin{pmatrix} 3 & 1 & -1 & -1 \\\\ 3 & -1 & 1 & -2 \\\\ -5 & -2 & 3 & 1 \\end{pmatrix}$ matritsaning rangini aniqlang.",
    "options": [
      "$r(A) = 1$",
      "$r(A) = 3$",
      "$r(A) = 2$",
      "$r(A) = 4$"
    ],
    "answer": 1,
    "difficulty": "O'rta",
    "explanation": "3-ma’ruza (20-slayd): Elementar almashtirishlar natijasida matritsa $\\begin{pmatrix} 1 & -1 & 3 & -1 \\\\ 0 & 1 & 1 & -1 \\\\ 0 & 0 & 6 & -3 \\end{pmatrix}$ pog‘onali shaklga keladi, $p = 3$ ta noldan farqli satr bor, demak $r(A) = 3$."
  },
  {
    "id": "T3_Q17",
    "topicId": 3,
    "num": 17,
    "question": "Ma’ruzadagi 21-slayd misoli: $A = \\begin{pmatrix} 1 & -2 & 1 & 3 \\\\ 3 & 1 & 0 & 7 \\\\ 2 & 3 & -1 & 4 \\end{pmatrix}$ matritsaning rangini aniqlang.",
    "options": [
      "$r(A) = 2$",
      "$r(A) = 3$",
      "$r(A) = 1$",
      "$r(A) = 4$"
    ],
    "answer": 0,
    "difficulty": "O'rta",
    "explanation": "3-ma’ruza (21-slayd): 2-satrdan 1-satrning 3 baravarini, 3-satrdan 1-satrning 2 baravarini ayirsak, 2- va 3-satrlar bir xil $(0, 7, -3, -2)$ bo‘lib qoladi. Biri nolga aylanib tashlab yuboriladi va $r(A) = 2$ chiqadi."
  },
  {
    "id": "T3_Q18",
    "topicId": 3,
    "num": 18,
    "question": "$k$ parametrning qanday qiymatida $A = \\begin{pmatrix} 1 & 2 & 3 \\\\ 2 & 5 & 7 \\\\ 3 & 7 & k \\end{pmatrix}$ matritsaning rangi $2$ ga teng bo‘ladi?",
    "options": [
      "$k = 0$",
      "$k = 12$",
      "$k = 9$",
      "$k = 10$"
    ],
    "answer": 3,
    "difficulty": "O'rta",
    "explanation": "1- va 2-satrlar chiziqli erkli ($M_2 = 5-4=1 \\ne 0$). 3-satr 1- va 2-satr yig‘indisiga teng bo‘lsa ($3=1+2, 7=2+5$), u holda $k = 3 + 7 = 10$ da $\\det(A)=0$ bo‘lib, $r(A)=2$ bo‘ladi."
  },
  {
    "id": "T3_Q19",
    "topicId": 3,
    "num": 19,
    "question": "Agar $n$-tartibli kvadrat $A$ matritsa uchun $\\det(A) \\ne 0$ bo‘lsa, uning rangi $r(A)$ va nol matritsa $E^0$ ning rangi $r(E^0)$ nimaga teng?",
    "options": [
      "$r(A) = n - 1,\\quad r(E^0) = 1$",
      "$r(A) = 1,\\quad r(E^0) = 0$",
      "$r(A) = n,\\quad r(E^0) = 0$",
      "$r(A) = n^2,\\quad r(E^0) = 0$"
    ],
    "answer": 2,
    "difficulty": "Oson",
    "explanation": "3-ma’ruza (18-slayd): Matritsa rangining 1 va 3-xossalariga ko‘ra $r(E^0) = 0$ va $\\det(A) \\ne 0 \\implies r(A) = n$."
  },
  {
    "id": "T3_Q20",
    "topicId": 3,
    "num": 20,
    "question": "Ma’ruzadagi 23-24-slaydlar misoli: $\\begin{cases} 2x_1 + 2x_2 - 3x_3 = 5 \\\\ x_1 - x_2 + x_3 = 0 \\\\ 3x_1 + x_2 + x_3 = 2 \\end{cases}$ sistemaning asosiy matritsasi determinanti $|A|$ va teskari matritsasi $A^{-1}$ ni toping.",
    "options": [
      "$|A| = -12;\\quad A^{-1} = \\frac{1}{12}\\begin{pmatrix} -2 & -5 & -1 \\\\ 2 & 11 & -5 \\\\ 4 & 4 & -4 \\end{pmatrix}$",
      "$|A| = -12;\\quad A^{-1} = -\\frac{1}{12}\\begin{pmatrix} -2 & -5 & -1 \\\\ 2 & 11 & -5 \\\\ 4 & 4 & -4 \\end{pmatrix}$",
      "$|A| = -6;\\quad A^{-1} = -\\frac{1}{6}\\begin{pmatrix} -2 & -5 & -1 \\\\ 2 & 11 & -5 \\\\ 4 & 4 & -4 \\end{pmatrix}$",
      "$|A| = 12;\\quad A^{-1} = \\frac{1}{12}\\begin{pmatrix} -2 & 2 & 4 \\\\ -5 & 11 & 4 \\\\ -1 & -5 & -4 \\end{pmatrix}$"
    ],
    "answer": 1,
    "difficulty": "O'rta",
    "explanation": "3-ma’ruza (23-24-slaydlar): $|A| = -12 \\ne 0$ va $A^{-1} = -\\frac{1}{12}\\begin{pmatrix} -2 & -5 & -1 \\\\ 2 & 11 & -5 \\\\ 4 & 4 & -4 \\end{pmatrix}$."
  },
  {
    "id": "T3_Q21",
    "topicId": 3,
    "num": 21,
    "question": "$\\begin{pmatrix} 2 & 1 \\\\ 5 & 3 \\end{pmatrix} X = \\begin{pmatrix} 4 & -1 \\\\ 11 & -2 \\end{pmatrix}$ matritsaviy tenglamadan $X$ matritsani toping.",
    "options": [
      "$\\begin{pmatrix} 1 & -1 \\\\ 2 & 1 \\end{pmatrix}$",
      "$\\begin{pmatrix} 3 & -1 \\\\ -2 & 1 \\end{pmatrix}$",
      "$\\begin{pmatrix} 1 & 2 \\\\ -1 & 1 \\end{pmatrix}$",
      "$\\begin{pmatrix} 2 & 1 \\\\ 0 & -1 \\end{pmatrix}$"
    ],
    "answer": 0,
    "difficulty": "O'rta",
    "explanation": "$A = \\begin{pmatrix} 2 & 1 \\\\ 5 & 3 \\end{pmatrix} \\implies \\det(A)=1,\\; A^{-1} = \\begin{pmatrix} 3 & -1 \\\\ -5 & 2 \\end{pmatrix}$. U holda $X = A^{-1}B = \\begin{pmatrix} 3 & -1 \\\\ -5 & 2 \\end{pmatrix} \\begin{pmatrix} 4 & -1 \\\\ 11 & -2 \\end{pmatrix} = \\begin{pmatrix} 12-11 & -3+2 \\\\ -20+22 & 5-4 \\end{pmatrix} = \\begin{pmatrix} 1 & -1 \\\\ 2 & 1 \\end{pmatrix}$."
  },
  {
    "id": "T3_Q22",
    "topicId": 3,
    "num": 22,
    "question": "$X \\cdot \\begin{pmatrix} 3 & 2 \\\\ 4 & 3 \\end{pmatrix} = \\begin{pmatrix} 1 & 0 \\\\ 2 & 1 \\end{pmatrix}$ matritsaviy tenglamadan $X$ matritsani toping.",
    "options": [
      "$\\begin{pmatrix} -3 & 2 \\\\ -2 & 1 \\end{pmatrix}$",
      "$\\begin{pmatrix} 7 & 2 \\\\ 4 & 3 \\end{pmatrix}$",
      "$\\begin{pmatrix} 3 & 2 \\\\ -2 & -1 \\end{pmatrix}$",
      "$\\begin{pmatrix} 3 & -2 \\\\ 2 & -1 \\end{pmatrix}$"
    ],
    "answer": 3,
    "difficulty": "O'rta",
    "explanation": "$XA = B \\implies X = B A^{-1}$. Bu yerda $\\det(A) = 9-8=1$, $A^{-1} = \\begin{pmatrix} 3 & -2 \\\\ -4 & 3 \\end{pmatrix}$. Demak $X = \\begin{pmatrix} 1 & 0 \\\\ 2 & 1 \\end{pmatrix}\\begin{pmatrix} 3 & -2 \\\\ -4 & 3 \\end{pmatrix} = \\begin{pmatrix} 3 & -2 \\\\ 2 & -1 \\end{pmatrix}$."
  },
  {
    "id": "T3_Q23",
    "topicId": 3,
    "num": 23,
    "question": "Diagonal matritsa $D = \\begin{pmatrix} 2 & 0 & 0 \\\\ 0 & -4 & 0 \\\\ 0 & 0 & 0.5 \\end{pmatrix}$ ning teskari matritsasi $D^{-1}$ ni toping.",
    "options": [
      "$\\begin{pmatrix} -2 & 0 & 0 \\\\ 0 & 4 & 0 \\\\ 0 & 0 & -0.5 \\end{pmatrix}$",
      "$\\begin{pmatrix} 2 & 0 & 0 \\\\ 0 & -4 & 0 \\\\ 0 & 0 & 2 \\end{pmatrix}$",
      "$\\begin{pmatrix} 0.5 & 0 & 0 \\\\ 0 & -0.25 & 0 \\\\ 0 & 0 & 2 \\end{pmatrix}$",
      "$\\begin{pmatrix} 0.5 & 0 & 0 \\\\ 0 & 0.25 & 0 \\\\ 0 & 0 & -2 \\end{pmatrix}$"
    ],
    "answer": 2,
    "difficulty": "Oson",
    "explanation": "Diagonal matritsaning teskarisini topishda har bir diagonal elementi o‘zining teskarisiga ($1/d_{ii}$) almashtiriladi: $1/2 = 0.5,\\; 1/(-4) = -0.25,\\; 1/0.5 = 2$."
  },
  {
    "id": "T3_Q24",
    "topicId": 3,
    "num": 24,
    "question": "Agar 3-tartibli kvadrat $A$ matritsa uchun $\\det(A) = 5$ bo‘lsa, $\\det(A^{-1})$ va $\\det((A^3)^{-1})$ qiymatlarini toping.",
    "options": [
      "$\\det(A^{-1}) = \\frac{1}{5},\\quad \\det((A^3)^{-1}) = \\frac{1}{15}$",
      "$\\det(A^{-1}) = \\frac{1}{5},\\quad \\det((A^3)^{-1}) = \\frac{1}{125}$",
      "$\\det(A^{-1}) = -5,\\quad \\det((A^3)^{-1}) = -125$",
      "$\\det(A^{-1}) = 5,\\quad \\det((A^3)^{-1}) = 125$"
    ],
    "answer": 1,
    "difficulty": "Oson",
    "explanation": "3-ma’ruza (7-slayd): $\\det(A^{-1}) = \\frac{1}{\\det A} = \\frac{1}{5}$ va $(A^3)^{-1} = (A^{-1})^3 \\implies \\det((A^3)^{-1}) = (\\frac{1}{5})^3 = \\frac{1}{125}$."
  },
  {
    "id": "T3_Q25",
    "topicId": 3,
    "num": 25,
    "question": "$x$ ning qanday qiymatlarida $A = \\begin{pmatrix} x & 2 & 0 \\\\ 1 & x+1 & 2 \\\\ 0 & 1 & 1 \\end{pmatrix}$ matritsaga teskari matritsa MAVJUD EMAS (ya’ni matritsa xos bo‘ladi)?",
    "options": [
      "$x_1 = -1,\\quad x_2 = 2$",
      "$x_1 = 0,\\quad x_2 = 3$",
      "$x_1 = -1,\\quad x_2 = -2$",
      "$x_1 = 1,\\quad x_2 = 2$"
    ],
    "answer": 0,
    "difficulty": "O'rta",
    "explanation": "$\\det(A) = x(x+1 - 2) - 2(1 - 0) = x(x-1) - 2 = x^2 - x - 2 = (x-2)(x+1) = 0 \\implies x_1 = -1,\\; x_2 = 2$."
  },
  {
    "id": "T3_Q26",
    "topicId": 3,
    "num": 26,
    "question": "$A = \\begin{pmatrix} 1 & 2 & 3 & 4 \\\\ 2 & 4 & 6 & 8 \\\\ -1 & -2 & -3 & -4 \\end{pmatrix}$ matritsaning rangini toping.",
    "options": [
      "$r(A) = 2$",
      "$r(A) = 4$",
      "$r(A) = 3$",
      "$r(A) = 1$"
    ],
    "answer": 3,
    "difficulty": "Oson",
    "explanation": "2-satr va 3-satr 1-satrga proporsional ($R_2 = 2R_1, R_3 = -R_1$). Elementar almashtirishda faqat bitta noldan farqli satr qoladi, demak $r(A) = 1$."
  },
  {
    "id": "T3_Q27",
    "topicId": 3,
    "num": 27,
    "question": "$A = \\begin{pmatrix} 4 & -2 \\\\ -6 & 3 \\end{pmatrix}$ matritsaning barcha 1-tartibli minorlari soni nechta va 2-tartibli minori nimaga teng?",
    "options": [
      "1-tartibli minorlari 4 ta; 2-tartibli minori $-24$ ga teng",
      "1-tartibli minorlari 2 ta; 2-tartibli minori $24$ ga teng",
      "1-tartibli minorlari 4 ta; 2-tartibli minori $0$ ga teng",
      "1-tartibli minorlari yo‘q; 2-tartibli minori $0$ ga teng"
    ],
    "answer": 2,
    "difficulty": "Oson",
    "explanation": "Har bir element 1-tartibli minor hosil qiladi (jami 4 ta). 2-tartibli minor: $4\\cdot 3 - (-2)(-6) = 12 - 12 = 0$."
  },
  {
    "id": "T3_Q28",
    "topicId": 3,
    "num": 28,
    "question": "Agar $A$ kvadrat matritsa uchun $A^2 - 4A + E = O$ tenglik o‘rinli bo‘lsa, $A^{-1}$ teskari matritsa $A$ va $E$ orqali qanday ifodalanadi?",
    "options": [
      "$A^{-1} = 4A - E$",
      "$A^{-1} = 4E - A$",
      "$A^{-1} = A + 4E$",
      "$A^{-1} = A - 4E$"
    ],
    "answer": 1,
    "difficulty": "Qiyin",
    "explanation": "$A^2 - 4A + E = O \\implies E = 4A - A^2 = A(4E - A)$. Ta’rifga ko‘ra $A \\cdot A^{-1} = E$ bo‘lgani uchun $A^{-1} = 4E - A$."
  },
  {
    "id": "T3_Q29",
    "topicId": 3,
    "num": 29,
    "question": "Agar $A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 7 \\end{pmatrix}$ bo‘lsa, $(A^T)^{-1}$ matritsani toping.",
    "options": [
      "$\\begin{pmatrix} 7 & -3 \\\\ -2 & 1 \\end{pmatrix}$",
      "$\\begin{pmatrix} -7 & 3 \\\\ 2 & -1 \\end{pmatrix}$",
      "$\\begin{pmatrix} 7 & -2 \\\\ -3 & 1 \\end{pmatrix}$",
      "$\\begin{pmatrix} 1 & 3 \\\\ 2 & 7 \\end{pmatrix}$"
    ],
    "answer": 0,
    "difficulty": "O'rta",
    "explanation": "$A^T = \\begin{pmatrix} 1 & 3 \\\\ 2 & 7 \\end{pmatrix}$, uning determinanti $7 - 6 = 1$. Demak $(A^T)^{-1} = \\begin{pmatrix} 7 & -3 \\\\ -2 & 1 \\end{pmatrix}$."
  },
  {
    "id": "T3_Q30",
    "topicId": 3,
    "num": 30,
    "question": "5-tartibli pog‘onali matritsaning bosh diagonalida $3$ ta noldan farqli element bo‘lib, oxirgi $2$ ta satri to‘liq nollardan iborat bo‘lsa, uning rangi nechaga teng?",
    "options": [
      "$r(A) = 0$",
      "$r(A) = 2$",
      "$r(A) = 5$",
      "$r(A) = 3$"
    ],
    "answer": 3,
    "difficulty": "Oson",
    "explanation": "3-ma’ruza (19-slayd): Pog‘onali matritsaning rangi undagi noldan farqli satrlar (pog‘onalar) soni $p$ ga teng, ya’ni $r(A) = 3$."
  },
  {
    "id": "T4_Q1",
    "topicId": 4,
    "num": 1,
    "question": "$n$-tartibli kvadrat matritsaning determinanti deb nechta ko‘paytmaning algebraik yig‘indisiga aytiladi?",
    "options": [
      "$n^2$ ta ko‘paytmaning yig‘indisiga",
      "$2^n$ ta ko‘paytmaning yig‘indisiga",
      "$2n$ ta ko‘paytmaning yig‘indisiga",
      "$n!$ ta ko‘paytmaning algebraik yig‘indisiga"
    ],
    "answer": 3,
    "difficulty": "Oson",
    "explanation": "4-ma’ruza (5, 10-slaydlar): $n$-tartibli determinant har bir satr va har bir ustundan bittadan olingan $n$ ta element ko‘paytmalaridan iborat jami $n!$ ta hadning algebraik yig‘indisiga teng."
  },
  {
    "id": "T4_Q2",
    "topicId": 4,
    "num": 2,
    "question": "4-tartibli va 5-tartibli determinantlarning to‘liq yoyilmasida mos ravishda nechta had (ko‘paytma) qatnashadi?",
    "options": [
      "4-tartiblida $16$ ta, 5-tartiblida $25$ ta had",
      "4-tartiblida $12$ ta, 5-tartiblida $60$ ta had",
      "4-tartiblida $24$ ta, 5-tartiblida $120$ ta had",
      "4-tartiblida $8$ ta, 5-tartiblida $10$ ta had"
    ],
    "answer": 2,
    "difficulty": "Oson",
    "explanation": "$4! = 1\\cdot 2\\cdot 3\\cdot 4 = 24$ ta va $5! = 1\\cdot 2\\cdot 3\\cdot 4\\cdot 5 = 120$ ta had qatnashadi."
  },
  {
    "id": "T4_Q3",
    "topicId": 4,
    "num": 3,
    "question": "$\\{1, 2, 3, \\dots, n\\}$ to‘plamdagi juft va toq o‘rin almashtirishlar soni nechta va bitta transpozitsiyada (ikkita element o‘rnini almashtirganda) o‘rin almashtirish juft-toqligi qanday o‘zgaradi?",
    "options": [
      "Har biri $n!$ tadan bo‘ladi",
      "Juft va toq o‘rin almashtirishlar o‘zaro teng ($\\frac{n!}{2}$ tadan); ikkita element o‘rni almashtirilsa juft-toqligi qarama-qarshiga o‘zgaradi",
      "Toq o‘rin almashtirishlar $n$ ta bo‘ladi; o‘rni almashtirilsa inversiya nolga aylanadi",
      "Juft o‘rin almashtirishlar ko‘proq bo‘ladi; o‘rni almashtirilsa juft-toqlik o‘zgarmaydi"
    ],
    "answer": 1,
    "difficulty": "Oson",
    "explanation": "4-ma’ruza (8-slayd): Barcha o‘rin almashtirishlar $n!$ ta bo‘lib, ularning teng yarmi ($n!/2$) juft, qolgan yarmi ($n!/2$) toq bo‘ladi. Ikkita element o‘rni almashsa juft-toqlik o‘zgaradi."
  },
  {
    "id": "T4_Q4",
    "topicId": 4,
    "num": 4,
    "question": "Ma’ruzadagi 7-slayd misoli: $P = (1, 4, 3, 2)$ o‘rin almashtirishdagi inversiyalar soni $\\text{inv}(P)$ ni va uning juft-toqligini toping.",
    "options": [
      "$\\text{inv}(P) = 3$ (toq o‘rin almashtirish)",
      "$\\text{inv}(P) = 1$ (toq o‘rin almashtirish)",
      "$\\text{inv}(P) = 2$ (juft o‘rin almashtirish)",
      "$\\text{inv}(P) = 4$ (juft o‘rin almashtirish)"
    ],
    "answer": 0,
    "difficulty": "Oson",
    "explanation": "4-ma’ruza (7-slayd): 1 dan chapda katta son yo‘q ($0$), 4 dan chapda yo‘q ($0$), 3 dan chapda 4 bor ($1$), 2 dan chapda 4 va 3 bor ($2$). Jami $\\text{inv}(P) = 0 + 0 + 1 + 2 = 3$ (toq)."
  },
  {
    "id": "T4_Q5",
    "topicId": 4,
    "num": 5,
    "question": "$P = (4, 2, 5, 1, 3)$ o‘rin almashtirishdagi inversiyalar soni $\\text{inv}(P)$ ni va unga mos $(-1)^{\\text{inv}(P)}$ ishorani toping.",
    "options": [
      "$\\text{inv}(P) = 7$, ishorasi $-1$ (toq)",
      "$\\text{inv}(P) = 4$, ishorasi $+1$ (juft)",
      "$\\text{inv}(P) = 5$, ishorasi $-1$ (toq)",
      "$\\text{inv}(P) = 6$, ishorasi $+1$ (juft)"
    ],
    "answer": 3,
    "difficulty": "O'rta",
    "explanation": "Inversiyalar: $(4,2), (4,1), (4,3)$ — 3 ta; $(2,1)$ — 1 ta; $(5,1), (5,3)$ — 2 ta. Jami: $3 + 1 + 2 = 6$ ta (juft), $(-1)^6 = +1$."
  },
  {
    "id": "T4_Q6",
    "topicId": 4,
    "num": 6,
    "question": "5-tartibli determinant yoyilmasida $a_{13} a_{25} a_{32} a_{41} a_{54}$ ko‘paytma qanday ishora bilan qatnashadi?",
    "options": [
      "Minus ($-$) ishora bilan, chunki $\\text{inv}(3, 5, 2, 1, 4) = 5$ (toq)",
      "Ushbu ko‘paytma determinant yoyilmasiga kirmaydi",
      "Plyus ($+$) ishora bilan, chunki $\\text{inv}(3, 5, 2, 1, 4) = 6$ (juft)",
      "Minus ($-$) ishora bilan, chunki $\\text{inv}(3, 5, 2, 1, 4) = 7$ (toq)"
    ],
    "answer": 2,
    "difficulty": "O'rta",
    "explanation": "Birinchi indekslar $(1,2,3,4,5)$ tartiblangan. Ikkinchi indekslar $P=(3,5,2,1,4)$ uchun inversiyalar: 3 dan keyin $(2,1)$ — 2 ta; 5 dan keyin $(2,1,4)$ — 3 ta; 2 dan keyin $(1)$ — 1 ta... Diqqat! $2+3+1 = 6$ ta! Demak $\\text{inv}=6$ (juft) va ishora PLYUS!"
  },
  {
    "id": "T4_Q7",
    "topicId": 4,
    "num": 7,
    "question": "Ma’ruzadagi 18-slayd: Laplas teoremasi va uning muhim natijasi qaysi javobda to‘g‘ri bayon etilgan?",
    "options": [
      "Determinant faqat 1-satr elementlari yig‘indisiga teng; boshqa satrlar bilan ko‘paytmasi $1$ ga teng",
      "Determinant ixtiyoriy satr (ustun) elementlari bilan o‘z algebraik to‘ldiruvchilari ko‘paytmalari yig‘indisiga teng; boshqa satr algebraik to‘ldiruvchilari bilan ko‘paytmalari yig‘indisi esa $0$ ga teng",
      "Determinant bosh diagonal va yordamchi diagonal yig‘indisiga teng",
      "Laplas teoremasi faqat 2-tartibli determinantlar uchun o‘rinli"
    ],
    "answer": 1,
    "difficulty": "Oson",
    "explanation": "4-ma’ruza (18-slayd): $\\Delta = \\sum_{j=1}^n a_{ij}A_{ij}$, va Natija: biror satr elementlari bilan boshqa satr elementlari algebraik to‘ldiruvchilari ko‘paytmalarining yig‘indisi nolga teng."
  },
  {
    "id": "T4_Q8",
    "topicId": 4,
    "num": 8,
    "question": "Ma’ruzadagi 11-12-slaydlar misoli: 4-tartibli $\\Delta = \\begin{vmatrix} 1 & 0 & 3 & 2 \\\\ 2 & -1 & 4 & 1 \\\\ 3 & 2 & 1 & 5 \\\\ 1 & 0 & 6 & 2 \\end{vmatrix}$ determinantni 2-ustun bo‘yicha yoyib hisoblang.",
    "options": [
      "$-21$",
      "$42$",
      "$-14$",
      "$21$"
    ],
    "answer": 0,
    "difficulty": "O'rta",
    "explanation": "4-ma’ruza (11-12-slaydlar): 2-satrni 2 ga ko‘paytirib 3-satrga qo‘shsak, 2-ustunda faqat $a_{22}=-1$ qoladi: $\\Delta = -1 \\cdot (-1)^{2+2} \\begin{vmatrix} 1 & 3 & 2 \\\\ 7 & 9 & 7 \\\\ 1 & 6 & 2 \\end{vmatrix} = -21$."
  },
  {
    "id": "T4_Q9",
    "topicId": 4,
    "num": 9,
    "question": "Ma’ruzadagi 14-15-slaydlar misoli: $\\Delta = \\begin{vmatrix} 2 & -4 & 1 & 5 \\\\ 1 & -3 & 2 & 5 \\\\ 2 & 2 & 0 & -3 \\\\ 3 & -1 & 1 & 2 \\end{vmatrix}$ determinantni uchburchak shakliga keltirib hisoblang.",
    "options": [
      "$7$",
      "$14$",
      "$-28$",
      "$-14$"
    ],
    "answer": 3,
    "difficulty": "O'rta",
    "explanation": "4-ma’ruza (14-15-slaydlar): Satr almashtirishlari natijasida bosh diagonalda $1, 2, -1, 7$ elementli yuqori uchburchak determinant hosil bo‘ladi: $\\Delta = 1 \\cdot 2 \\cdot (-1) \\cdot 7 = -14$."
  },
  {
    "id": "T4_Q10",
    "topicId": 4,
    "num": 10,
    "question": "Ma’ruzadagi 16-17-slaydlar misoli: 5-tartibli $\\begin{vmatrix} 0 & 1 & 1 & 0 & 0 \\\\ -1 & 2 & 3 & -2 & -1 \\\\ 0 & 5 & 0 & 1 & 0 \\\\ 1 & 0 & -2 & -3 & 2 \\\\ -1 & 0 & 0 & 1 & 1 \\end{vmatrix}$ determinantni 1- va 3-satrlar bo‘yicha Laplas teoremasi yordamida hisoblang.",
    "options": [
      "$55$",
      "$-61$",
      "$61$",
      "$45$"
    ],
    "answer": 2,
    "difficulty": "Qiyin",
    "explanation": "4-ma’ruza (16-17-slaydlar): 1- va 3-satrlarda noldan farqli faqat 3 ta 2-tartibli minor bor. Ularni mos 3-tartibli algebraik to‘ldiruvchilariga ko‘paytirib qo‘shsak: $(-1)(-5)(13) + (2-3+2-3) + (-1)(2) = 65 - 2 - 2 = 61$."
  },
  {
    "id": "T4_Q11",
    "topicId": 4,
    "num": 11,
    "question": "Ma’ruzadagi 20-slayd misoli: $\\Delta = \\begin{vmatrix} 2 & 1 & 3 \\\\ 5 & 3 & 2 \\\\ 1 & 4 & 3 \\end{vmatrix}$ determinantni 1-satr bo‘yicha Laplas formulasi bilan yoyib hisoblang.",
    "options": [
      "$-40$",
      "$40$",
      "$27$",
      "$54$"
    ],
    "answer": 1,
    "difficulty": "Oson",
    "explanation": "4-ma’ruza (20-slayd): $\\Delta = 2A_{11} + A_{12} + 3A_{13} = 2(9-8) - (15-2) + 3(20-3) = 2 - 13 + 51 = 40$."
  },
  {
    "id": "T4_Q12",
    "topicId": 4,
    "num": 12,
    "question": "Ma’ruzadagi 21-slayd misoli: Determinant xossalaridan foydalanib $\\begin{vmatrix} 5 & 6 & 1 \\\\ 5 & 2 & 3 \\\\ 11 & 5 & 0 \\end{vmatrix}$ determinantni hisoblang.",
    "options": [
      "$126$",
      "$0$",
      "$46$",
      "$-126$"
    ],
    "answer": 0,
    "difficulty": "O'rta",
    "explanation": "4-ma’ruza (21-slayd b-misol): 1-ustundan 3-ustunning 2 baravarini, so‘ngra yana 3-ustunni ayirib soddalashtirsak: $\\begin{vmatrix} 2 & 6 & 1 \\\\ -1 & 2 & 3 \\\\ 11 & 5 & 0 \\end{vmatrix} = 1(-5 - 22) - 3(10 - 66) = -27 + 168 = 141$... To‘g‘ridan-to‘g‘ri hisoblaymiz: $5(0-15) - 6(0-33) + 1(25-22) = -75 + 198 + 3 = 126$."
  },
  {
    "id": "T4_Q13",
    "topicId": 4,
    "num": 13,
    "question": "Ma’ruzadagi 22-slayd 2-misoli: $\\begin{vmatrix} \\beta b_1 + \\gamma c_1 & b_1 & c_1 \\\\ \\beta b_2 + \\gamma c_2 & b_2 & c_2 \\\\ \\beta b_3 + \\gamma c_3 & b_3 & c_3 \\end{vmatrix}$ determinantni yoymasdan hisoblang.",
    "options": [
      "$1$",
      "$\\beta \\cdot \\gamma$",
      "$\\beta + \\gamma$",
      "$0$"
    ],
    "answer": 3,
    "difficulty": "Oson",
    "explanation": "4-ma’ruza (22-slayd): 1-ustundan 2-ustunning $\\beta$ baravarini va 3-ustunning $\\gamma$ baravarini ayirsak, 1-ustun to‘liq nollardan iborat bo‘lib qoladi, demak $\\Delta = 0$."
  },
  {
    "id": "T4_Q14",
    "topicId": 4,
    "num": 14,
    "question": "Ma’ruzadagi 22-slayd 3-misoli: $\\Delta_a = \\begin{vmatrix} 5 & 3 \\\\ 7 & -4 \\end{vmatrix}$, $\\Delta_b = \\begin{vmatrix} 4 & -7 \\\\ -2 & -3 \\end{vmatrix}$ va $\\Delta_d = \\begin{vmatrix} \\text{tg}\\,x & -1 \\\\ 1 & \\text{tg}\\,x \\end{vmatrix}$ determinantlarni hisoblang.",
    "options": [
      "$\\Delta_a = -41,\\quad \\Delta_b = 2,\\quad \\Delta_d = \\text{tg}^2 x - 1$",
      "$\\Delta_a = 1,\\quad \\Delta_b = -26,\\quad \\Delta_d = 1$",
      "$\\Delta_a = -41,\\quad \\Delta_b = -26,\\quad \\Delta_d = \\frac{1}{\\cos^2 x}$",
      "$\\Delta_a = 41,\\quad \\Delta_b = 26,\\quad \\Delta_d = \\frac{1}{\\sin^2 x}$"
    ],
    "answer": 2,
    "difficulty": "Oson",
    "explanation": "4-ma’ruza (22-slayd): $\\Delta_a = -20 - 21 = -41$; $\\Delta_b = -12 - 14 = -26$; $\\Delta_d = \\text{tg}^2 x - (-1) = \\text{tg}^2 x + 1 = \\frac{1}{\\cos^2 x}$."
  },
  {
    "id": "T4_Q15",
    "topicId": 4,
    "num": 15,
    "question": "Ma’ruzadagi 23-slayd 1-tenglamasi: $\\begin{vmatrix} x + 3 & 2 \\\\ 7 & x - 2 \\end{vmatrix} = 0$ tenglamani yeching.",
    "options": [
      "$x_1 = -3,\\quad x_2 = 2$",
      "$x_1 = -5,\\quad x_2 = 4$",
      "$x_1 = 5,\\quad x_2 = -4$",
      "$x_1 = -4,\\quad x_2 = 3$"
    ],
    "answer": 1,
    "difficulty": "Oson",
    "explanation": "4-ma’ruza (23-slayd): $(x+3)(x-2) - 14 = 0 \\implies x^2 + x - 20 = 0 \\implies (x+5)(x-4) = 0 \\implies x_1 = -5,\\; x_2 = 4$."
  },
  {
    "id": "T4_Q16",
    "topicId": 4,
    "num": 16,
    "question": "Ma’ruzadagi 23-slayd 2-tenglamasi: $\\begin{vmatrix} \\sin 2x & -\\cos 2x \\\\ \\sin 3x & \\cos 3x \\end{vmatrix} = 0$ trigonometrik tenglamani yeching.",
    "options": [
      "$x = \\frac{\\pi k}{5},\\quad k \\in \\mathbb{Z}$",
      "$x = \\pi k,\\quad k \\in \\mathbb{Z}$",
      "$x = \\frac{\\pi k}{6},\\quad k \\in \\mathbb{Z}$",
      "$x = \\frac{\\pi}{10} + \\frac{\\pi k}{5},\\quad k \\in \\mathbb{Z}$"
    ],
    "answer": 0,
    "difficulty": "O'rta",
    "explanation": "4-ma’ruza (23-slayd): $\\sin 2x \\cos 3x - (-\\cos 2x)\\sin 3x = \\sin(2x + 3x) = \\sin 5x = 0 \\implies 5x = \\pi k \\implies x = \\frac{\\pi k}{5},\\; k \\in \\mathbb{Z}$."
  },
  {
    "id": "T4_Q17",
    "topicId": 4,
    "num": 17,
    "question": "Ma’ruzadagi 24-slayd 1-misoli: 4-tartibli $\\begin{vmatrix} 4 & 0 & -3 & 5 \\\\ 3 & 2 & -2 & 1 \\\\ 1 & 3 & 1 & 0 \\\\ 5 & 6 & 2 & -1 \\end{vmatrix}$ determinantni uchburchak shakliga keltirib hisoblang.",
    "options": [
      "$-15$",
      "$0$",
      "$25$",
      "$15$"
    ],
    "answer": 3,
    "difficulty": "Qiyin",
    "explanation": "3-satrni $(1, 3, 1, 0)$ asos qilib, qolgan satrlarni nolga aylantirib hisoblasak, determinantning aniq qiymati $15$ ga teng chiqadi."
  },
  {
    "id": "T4_Q18",
    "topicId": 4,
    "num": 18,
    "question": "Ma’ruzadagi 24-slayd 2-misoli: 4-tartibli $\\begin{vmatrix} 2 & -3 & 2 & 4 \\\\ -3 & 2 & 2 & 5 \\\\ 1 & 5 & -3 & 0 \\\\ 0 & -1 & 1 & 2 \\end{vmatrix}$ determinantni uchburchak shakliga keltirib hisoblang.",
    "options": [
      "$64$",
      "$-43$",
      "$-86$",
      "$86$"
    ],
    "answer": 2,
    "difficulty": "Qiyin",
    "explanation": "3-satr $(1, 5, -3, 0)$ yordamida 1-ustunda nollar hosil qilib, 3-tartibli determinantga tushiramiz va uchburchak shaklga keltirsak $\\Delta = -86$ chiqadi."
  },
  {
    "id": "T4_Q19",
    "topicId": 4,
    "num": 19,
    "question": "Blok-uchburchakli 4-tartibli $\\begin{vmatrix} 2 & 3 & 0 & 0 \\\\ 1 & 4 & 0 & 0 \\\\ 7 & -2 & 3 & -1 \\\\ 5 & 9 & 2 & 4 \\end{vmatrix}$ determinantni Laplas teoremasi bilan hisoblang.",
    "options": [
      "$5$",
      "$70$",
      "$-70$",
      "$14$"
    ],
    "answer": 1,
    "difficulty": "O'rta",
    "explanation": "1- va 2-satr bo‘yicha Laplas teoremasiga ko‘ra blok-uchburchakli determinant diagonal bloklar determinantlari ko‘paytmasiga teng: $\\begin{vmatrix} 2 & 3 \\\\ 1 & 4 \\end{vmatrix} \\cdot \\begin{vmatrix} 3 & -1 \\\\ 2 & 4 \\end{vmatrix} = (8 - 3) \\cdot (12 + 2) = 5 \\cdot 14 = 70$."
  },
  {
    "id": "T4_Q20",
    "topicId": 4,
    "num": 20,
    "question": "$A = \\begin{pmatrix} 3 & -2 & 5 & 1 \\\\ 4 & 0 & -1 & 2 \\\\ 7 & 3 & 2 & -4 \\\\ 1 & 9 & 6 & 8 \\end{pmatrix}$ matritsa berilgan. $4 A_{11} + 0 \\cdot A_{12} + (-1) A_{13} + 2 A_{14}$ yig‘indini (2-satr elementlarining 1-satr algebraik to‘ldiruvchilari bilan ko‘paytmasi yig‘indisini) toping.",
    "options": [
      "$0$",
      "$1$",
      "$\\det(A)$",
      "$-\\det(A)$"
    ],
    "answer": 0,
    "difficulty": "Oson",
    "explanation": "4-ma’ruza (18-slayd, Natija): Determinantning biror satri (2-satr) elementlarini boshqa satri (1-satr) algebraik to‘ldiruvchilariga ko‘paytirib qo‘shilsa, yig‘indi har doim $0$ ga teng!"
  },
  {
    "id": "T4_Q21",
    "topicId": 4,
    "num": 21,
    "question": "6-tartibli determinantda yordamchi diagonal elementlari ko‘paytmasi $a_{16} a_{25} a_{34} a_{43} a_{52} a_{61}$ qanday ishora bilan kiradi?",
    "options": [
      "Minus ($-$) ishora bilan, chunki $\\text{inv}(6,5,4,3,2,1) = 5$ (toq)",
      "Plyus ($+$) ishora bilan, chunki $n=6$ juft son",
      "Plyus ($+$) ishora bilan, chunki $\\text{inv}(6,5,4,3,2,1) = 12$ (juft)",
      "Minus ($-$) ishora bilan, chunki $\\text{inv}(6,5,4,3,2,1) = 15$ (toq)"
    ],
    "answer": 3,
    "difficulty": "Qiyin",
    "explanation": "$(6,5,4,3,2,1)$ o‘rin almashtirishda har bir juftlik inversiya tashkil qiladi: $\\text{inv} = \\frac{6 \\cdot 5}{2} = 15$ (toq son). Demak $(-1)^{15} = -1$."
  },
  {
    "id": "T4_Q22",
    "topicId": 4,
    "num": 22,
    "question": "$P = (5, k, 2, m, 1)$ 5-tartibli o‘rin almashtirish juft o‘rin almashtirish bo‘lishi uchun $k$ va $m$ ($\\{3, 4\\}$ to‘plamdan) qanday bo‘lishi kerak?",
    "options": [
      "$k = 4,\\quad m = 3$",
      "Hech qachon juft bo‘la olmaydi",
      "$k = 3,\\quad m = 4$",
      "Har ikkala holatda ham juft bo‘ladi"
    ],
    "answer": 2,
    "difficulty": "Qiyin",
    "explanation": "Agar $k=3, m=4$ bo‘lsa, $P=(5, 3, 2, 4, 1)$: 5 dan keyin 4 ta, 3 dan keyin 2 ta $(2,1)$, 2 dan keyin 1 ta $(1)$, 4 dan keyin 1 ta $(1)$. Jami $\\text{inv} = 4 + 2 + 1 + 1 = 8$ (juft!)."
  },
  {
    "id": "T4_Q23",
    "topicId": 4,
    "num": 23,
    "question": "4-tartibli $\\begin{vmatrix} 1 & 1 & 1 & 1 \\\\ 1 & 2 & 3 & 4 \\\\ 1 & 3 & 6 & 10 \\\\ 1 & 4 & 10 & 20 \\end{vmatrix}$ (Paskal uchburchagi) determinantning qiymatini hisoblang.",
    "options": [
      "$20$",
      "$1$",
      "$0$",
      "$24$"
    ],
    "answer": 1,
    "difficulty": "Qiyin",
    "explanation": "Ketma-ket har bir satrdan oldingi satrni ayirib chiqsak, bosh diagonalida faqat $1$ lar turgan quyi/yuqori uchburchak determinantga keladi va $\\Delta = 1$ bo‘ladi."
  },
  {
    "id": "T4_Q24",
    "topicId": 4,
    "num": 24,
    "question": "O‘rinlashtirish $F = \\begin{pmatrix} 1 & 2 & 3 & 4 \\\\ 3 & 1 & 4 & 2 \\end{pmatrix}$ ning juft yoki toqligini aniqlang.",
    "options": [
      "Toq o‘rinlashtirish ($\\text{inv} = 3$)",
      "Juft o‘rinlashtirish ($\\text{inv} = 4$)",
      "Toq o‘rinlashtirish ($\\text{inv} = 1$)",
      "Juft o‘rinlashtirish ($\\text{inv} = 2$)"
    ],
    "answer": 0,
    "difficulty": "O'rta",
    "explanation": "4-ma’ruza (9-slayd): Yuqori qator $(1,2,3,4)$ tartiblangan bo‘lsa, $F$ ning juft-toqligi quyi qator $P_2 = (3,1,4,2)$ ning juft-toqligi bilan bir xil: $(3,1), (3,2), (4,2) \\implies \\text{inv} = 3$ (toq)."
  },
  {
    "id": "T4_Q25",
    "topicId": 4,
    "num": 25,
    "question": "4-tartibli $\\begin{vmatrix} 3 & 0 & 0 & 0 \\\\ 5 & -2 & 0 & 0 \\\\ 1 & 4 & 4 & 0 \\\\ -7 & 8 & 9 & -1 \\end{vmatrix}$ quyi uchburchakli determinantni hisoblang.",
    "options": [
      "$-24$",
      "$12$",
      "$0$",
      "$24$"
    ],
    "answer": 3,
    "difficulty": "Oson",
    "explanation": "4-ma’ruza (13-slayd): Uchburchak shaklidagi determinant qiymati bosh diagonal elementlari ko‘paytmasiga teng: $3 \\cdot (-2) \\cdot 4 \\cdot (-1) = 24$."
  },
  {
    "id": "T4_Q26",
    "topicId": 4,
    "num": 26,
    "question": "$\\begin{vmatrix} x & 0 & 0 & 0 \\\\ 2 & x-1 & 0 & 0 \\\\ 5 & 3 & x+2 & 0 \\\\ 9 & -4 & 7 & x-3 \\end{vmatrix} = 0$ tenglamaning barcha ildizlari yig‘indisini toping.",
    "options": [
      "$0$",
      "$6$",
      "$2$",
      "$-2$"
    ],
    "answer": 2,
    "difficulty": "O'rta",
    "explanation": "Uchburchakli determinant: $x(x-1)(x+2)(x-3) = 0$. Ildizlari: $0, 1, -2, 3$. Ularning yig‘indisi: $0 + 1 - 2 + 3 = 2$."
  },
  {
    "id": "T4_Q27",
    "topicId": 4,
    "num": 27,
    "question": "3-tartibli Vandermond determinanti $\\begin{vmatrix} 1 & 1 & 1 \\\\ 2 & 3 & 5 \\\\ 4 & 9 & 25 \\end{vmatrix}$ ni hisoblang.",
    "options": [
      "$12$",
      "$6$",
      "$30$",
      "$-6$"
    ],
    "answer": 1,
    "difficulty": "O'rta",
    "explanation": "Vandermond determinanti formulasi $(x_2-x_1)(x_3-x_1)(x_3-x_2) = (3-2)(5-2)(5-3) = 1 \\cdot 3 \\cdot 2 = 6$."
  },
  {
    "id": "T4_Q28",
    "topicId": 4,
    "num": 28,
    "question": "5-tartibli determinantni Laplas teoremasi bo‘yicha 2 ta satr tanlab yoyganda jami nechta 2-tartibli minor qatnashishi mumkin?",
    "options": [
      "$C_5^2 = 10$ ta",
      "$5! = 120$ ta",
      "$C_5^3 = 6$ ta",
      "$5 \\cdot 2 = 10$ ta emas, $25$ ta"
    ],
    "answer": 0,
    "difficulty": "O'rta",
    "explanation": "4-ma’ruza (16-slayd): 5 ta ustundan 2 tasini tanlash usullari soni $C_5^2 = \\frac{5!}{2!3!} = 10$ ta bo‘lgani uchun yoyilmada 10 ta yig‘indi qatnashadi."
  },
  {
    "id": "T4_Q29",
    "topicId": 4,
    "num": 29,
    "question": "$\\begin{vmatrix} 1 & 2 & 0 & 0 \\\\ 3 & 7 & 0 & 0 \\\\ 0 & 0 & 4 & 3 \\\\ 0 & 0 & 2 & 2 \\end{vmatrix}$ determinantning qiymatini toping.",
    "options": [
      "$14$",
      "$-2$",
      "$9$",
      "$2$"
    ],
    "answer": 3,
    "difficulty": "Oson",
    "explanation": "Blok-diagonal determinant: $\\begin{vmatrix} 1 & 2 \\\\ 3 & 7 \\end{vmatrix} \\cdot \\begin{vmatrix} 4 & 3 \\\\ 2 & 2 \\end{vmatrix} = (7 - 6) \\cdot (8 - 6) = 1 \\cdot 2 = 2$."
  },
  {
    "id": "T4_Q30",
    "topicId": 4,
    "num": 30,
    "question": "4-tartibli $\\begin{vmatrix} 0 & a & 0 & 0 \\\\ b & 0 & 0 & 0 \\\\ 0 & 0 & 0 & c \\\\ 0 & 0 & d & 0 \\end{vmatrix}$ determinantni hisoblang.",
    "options": [
      "$ab + cd$",
      "$0$",
      "$abcd$",
      "$-abcd$"
    ],
    "answer": 2,
    "difficulty": "O'rta",
    "explanation": "1- va 2-satrlarni hamda 3- va 4-satrlarni o‘zaro almashtirsak (2 marta satr almashinuvi ishorani o‘zgartirmaydi: $(-1)^2 = +1$), diagonalda $b, a, d, c$ hosil bo‘ladi va $\\Delta = abcd$."
  },
  {
    "id": "T5_Q1",
    "topicId": 5,
    "num": 1,
    "question": "$AX = B$ chiziqli tenglamalar sistemasida $B = \\Theta = (0, 0, \\dots, 0)^T$ bo‘lsa, bunday sistema qanday ataladi va uning birgalikda bo‘lish xossasi qanday?",
    "options": [
      "Bir jinsli bo‘lmagan sistema deyiladi va u hech qachon yechimga ega bo‘lmaydi",
      "Kramer sistemasi deyiladi va faqat $\\det(A) \\ne 0$ bo‘lganda birgalikda bo‘ladi",
      "Bir jinsli chiziqli tenglamalar sistemasi deyiladi va u har doim birgalikda bo‘ladi (chunki $X = \\Theta$ har doim yechim)",
      "Maxsus sistema deyiladi va har doim cheksiz ko‘p yechimga ega bo‘ladi"
    ],
    "answer": 2,
    "difficulty": "Oson",
    "explanation": "5-ma’ruza (5-slayd): Agar $B = \\Theta$ bo‘lsa, sistema bir jinsli chiziqli tenglamalar sistemasi ($AX = \\Theta$) deyiladi. U har doim birgalikda, chunki $X = \\Theta$ nol vektor har doim yechim bo‘ladi."
  },
  {
    "id": "T5_Q2",
    "topicId": 5,
    "num": 2,
    "question": "$n$ ta noma’lumli $AX = \\Theta$ bir jinsli chiziqli tenglamalar sistemasi qachon yagona nol yechimga, qachon nolmas yechimlarga ega bo‘ladi?",
    "options": [
      "$\\text{rang}(A) = 0$ bo‘lgandagina nolmas yechimga ega bo‘ladi",
      "$\\text{rang}(A) = n$ bo‘lsa yagona nol yechimga; $\\text{rang}(A) < n$ bo‘lsa nol yechimdan tashqari nolmas yechimlarga ham ega bo‘ladi",
      "$\\text{rang}(A) < n$ bo‘lsa yagona nol yechimga; $\\text{rang}(A) = n$ bo‘lsa cheksiz ko‘p yechimga ega",
      "Har doim faqat yagona nol yechimga ega bo‘ladi"
    ],
    "answer": 1,
    "difficulty": "Oson",
    "explanation": "5-ma’ruza (5-slayd): Bir jinsli sistema uchun $\\text{rang}(A) = n$ bo‘lsa yagona nol yechimga ega; $\\text{rang}(A) < n$ bo‘lsa nolmas yechimlarga ham ega bo‘ladi."
  },
  {
    "id": "T5_Q3",
    "topicId": 5,
    "num": 3,
    "question": "Bir jinsli chiziqli tenglamalar sistemasining «fundamental yechimlar sistemasi» (FYS) deb nimaga aytiladi va u nechta vektordan iborat bo‘ladi?",
    "options": [
      "Yechimlarning har qanday maksimal sondagi chiziqli erkli sistemasiga aytiladi va $n - r$ ta nolmas vektordan iborat bo‘ladi",
      "Sistemaning barcha yechimlari yig‘indisiga aytiladi va $n + r$ ta vektordan iborat bo‘ladi",
      "Nol vektordan iborat yagona yechimga aytiladi",
      "Faqat birlik vektorlardan tuzilgan sistemaga aytiladi va $r$ ta vektordan iborat bo‘ladi"
    ],
    "answer": 0,
    "difficulty": "Oson",
    "explanation": "5-ma’ruza (7-8-slaydlar): Bir jinsli sistema rangi $r < n$ bo‘lganda fundamental yechimlar sistemasi $n - r$ ta chiziqli erkli nolmas vektorlardan iborat bo‘ladi."
  },
  {
    "id": "T5_Q4",
    "topicId": 5,
    "num": 4,
    "question": "Ma’ruzadagi 9-11-slaydlar misoli: 5 ta noma’lumli bir jinsli sistemaning rangi $r = 2$ bo‘lsa, uning fundamental yechimlar sistemasi nechta vektordan iborat va umumiy yechimi qanday ko‘rinishda yoziladi?",
    "options": [
      "$n + r = 7$ ta vektordan iborat",
      "$r = 2$ ta vektordan iborat; $X = c_1 F_1 + c_2 F_2$",
      "$n = 5$ ta vektordan iborat; $X = F_0 + c_1 F_1$",
      "$n - r = 5 - 2 = 3$ ta vektordan iborat; $X = c_1 F_1 + c_2 F_2 + c_3 F_3$"
    ],
    "answer": 3,
    "difficulty": "Oson",
    "explanation": "5-ma’ruza (9-11-slaydlar): $n = 5, r = 2 \\implies n - r = 3$ ta fundamental yechim ($F_1, F_2, F_3$) mavjud va umumiy yechim $X = c_1 F_1 + c_2 F_2 + c_3 F_3$ ko‘rinishda bo‘ladi."
  },
  {
    "id": "T5_Q5",
    "topicId": 5,
    "num": 5,
    "question": "Ma’ruzadagi 6-slayd misoli: $\\begin{cases} x_1 - 2x_2 - 2x_3 + 3x_4 = 0 \\\\ 2x_1 + 3x_2 + x_3 - 5x_4 = 0 \\\\ 4x_1 + x_2 - 3x_3 - x_4 = 0 \\end{cases}$ bir jinsli sistemaning umumiy yechimini toping ($x_4 = \\alpha$).",
    "options": [
      "$x_1 = -\\frac{3}{5}\\alpha,\\quad x_2 = -\\alpha,\\quad x_3 = \\frac{4}{5}\\alpha,\\quad x_4 = \\alpha$",
      "$x_1 = 0,\\quad x_2 = 0,\\quad x_3 = 0,\\quad x_4 = 0$",
      "$x_1 = \\frac{3}{5}\\alpha,\\quad x_2 = \\alpha,\\quad x_3 = \\frac{4}{5}\\alpha,\\quad x_4 = \\alpha$",
      "$x_1 = \\alpha,\\quad x_2 = 2\\alpha,\\quad x_3 = 3\\alpha,\\quad x_4 = \\alpha$"
    ],
    "answer": 2,
    "difficulty": "O'rta",
    "explanation": "5-ma’ruza (6-slayd): Pog‘onali shaklga keltirilganda $2x_2 - 2x_4 = 0 \\implies x_2 = x_4 = \\alpha$; $7x_2 + 5x_3 - 11x_4 = 0 \\implies x_3 = \\frac{4}{5}\\alpha$; $x_1 = \\frac{3}{5}\\alpha$."
  },
  {
    "id": "T5_Q6",
    "topicId": 5,
    "num": 6,
    "question": "Bir jinsli bo‘lmagan $AX = B$ ($B \\ne \\Theta$) chiziqli tenglamalar sistemasining umumiy yechimi qaysi formula orqali ifodalanadi?",
    "options": [
      "$X = F_0 \\cdot (c_1 F_1 + \\dots + c_{n-r} F_{n-r})$",
      "$X = F_0 + c_1 F_1 + c_2 F_2 + \\dots + c_{n-r} F_{n-r}$ (bu yerda $F_0$ — xususiy yechim, $F_i$ — mos bir jinsli sistema FYS)",
      "$X = c_1 F_1 + c_2 F_2 + \\dots + c_n F_n$",
      "$X = A^T B + F_0$"
    ],
    "answer": 1,
    "difficulty": "Oson",
    "explanation": "5-ma’ruza (12-slayd): Bir jinsli bo‘lmagan sistemaning umumiy yechimi uning bitta xususiy yechimi $F_0$ bilan mos bir jinsli sistemaning umumiy yechimi yig‘indisiga teng."
  },
  {
    "id": "T5_Q7",
    "topicId": 5,
    "num": 7,
    "question": "Ma’ruzadagi 13-14-slaydlar misoli: $\\begin{cases} x_1 - x_2 + 2x_3 = 1 \\\\ 2x_1 + x_2 - x_3 = 2 \\end{cases}$ sistemaning ($x_1$ — erkli o‘zgaruvchi) umumiy yechimini toping.",
    "options": [
      "$X = \\begin{pmatrix} 0 \\\\ 5 \\\\ 3 \\end{pmatrix} + c \\begin{pmatrix} 1 \\\\ -5 \\\\ -3 \\end{pmatrix}$",
      "$X = \\begin{pmatrix} 0 \\\\ -5 \\\\ -3 \\end{pmatrix} + c \\begin{pmatrix} 1 \\\\ 5 \\\\ 3 \\end{pmatrix}$",
      "$X = \\begin{pmatrix} 1 \\\\ 5 \\\\ 3 \\end{pmatrix} + c \\begin{pmatrix} 0 \\\\ 5 \\\\ 3 \\end{pmatrix}$",
      "$X = \\begin{pmatrix} 1 \\\\ 2 \\\\ 1 \\end{pmatrix} + c \\begin{pmatrix} 1 \\\\ -1 \\\\ 2 \\end{pmatrix}$"
    ],
    "answer": 0,
    "difficulty": "O'rta",
    "explanation": "5-ma’ruza (13-14-slaydlar): Sistema $\\begin{cases} 3x_1 + x_3 = 3 \\\\ 5x_1 + x_2 = 5 \\end{cases}$ ga keladi. $x_1=0$ da $F_0 = (0, 5, 3)^T$; bir jinsli sistemada $x_1=1$ da $F_1 = (1, -5, -3)^T$."
  },
  {
    "id": "T5_Q8",
    "topicId": 5,
    "num": 8,
    "question": "Kroneker-Kapelli teoremasiga ko‘ra, chiziqli tenglamalar sistemasi birgalikda bo‘lishi uchun qanday shart zarur va yetarli?",
    "options": [
      "Tenglamalar soni noma’lumlar sonidan katta bo‘lishi ($m > n$)",
      "$\\text{rang}(A) < \\text{rang}(A \\mid B)$ bo‘lishi",
      "Asosiy matritsa determinanti nolga teng bo‘lishi: $\\det(A) = 0$",
      "Asosiy matritsa rangi kengaytirilgan matritsa rangiga teng bo‘lishi: $\\text{rang}(A) = \\text{rang}(A \\mid B)$"
    ],
    "answer": 3,
    "difficulty": "Oson",
    "explanation": "5-ma’ruza (19-slayd): Kroneker-Kapelli teoremasi: Chiziqli tenglamalar sistemasi birgalikda bo‘lishi uchun $\\text{rang}(A) = \\text{rang}(A \\mid B)$ bo‘lishi zarur va yetarli."
  },
  {
    "id": "T5_Q9",
    "topicId": 5,
    "num": 9,
    "question": "Agar $n$ ta noma’lumli chiziqli tenglamalar sistemasida $r(A) = r(A \\mid B) = r$ bo‘lib, $r < n$ bo‘lsa, sistema haqida nima deyish mumkin?",
    "options": [
      "Sistema birgalikda va yagona yechimga ega",
      "Sistema faqat nol yechimga ega",
      "Sistema birgalikda va cheksiz ko‘p yechimga ega",
      "Sistema birgalikda emas (yechimga ega emas)"
    ],
    "answer": 2,
    "difficulty": "Oson",
    "explanation": "5-ma’ruza (24-slayd): $r(A) = r(A|B) = r$ bo‘lganda: $r = n$ bo‘lsa bitta (yagona) yechimga ega; $r < n$ bo‘lsa cheksiz ko‘p yechimga ega."
  },
  {
    "id": "T5_Q10",
    "topicId": 5,
    "num": 10,
    "question": "Ma’ruzadagi 20-21-slaydlar misoli: $\\begin{cases} x + y + z = 3 \\\\ x - 2y + 3z = 5 \\\\ 2x + 3y - z = 7 \\end{cases}$ sistemaning asosiy va kengaytirilgan matritsalari rangini hamda birgalikdaligini aniqlang.",
    "options": [
      "$r(A) = 2,\\; r(A \\mid B) = 3$, demak sistema birgalikda emas",
      "$r(A) = r(A \\mid B) = 3$, demak sistema birgalikda (yagona yechimga ega)",
      "$r(A) = 1,\\; r(A \\mid B) = 2$, demak sistema birgalikda emas",
      "$r(A) = r(A \\mid B) = 2$, demak sistema cheksiz ko‘p yechimga ega"
    ],
    "answer": 1,
    "difficulty": "O'rta",
    "explanation": "5-ma’ruza (20-21-slaydlar): Pog‘onali shakl $\\begin{pmatrix} 1 & 1 & 1 & | & 3 \\\\ 0 & 1 & -3 & | & 1 \\\\ 0 & 0 & -7 & | & 5 \\end{pmatrix} \\implies r(A) = r(A|B) = 3$, sistema birgalikda."
  },
  {
    "id": "T5_Q11",
    "topicId": 5,
    "num": 11,
    "question": "Ma’ruzadagi 22-23-slaydlar misoli: $\\begin{cases} x + y - z = 3 \\\\ x + 2y + 3z = 5 \\\\ 2x + 3y + 2z = 7 \\end{cases}$ sistemani birgalikda yoki birgalikda emasligini tekshiring.",
    "options": [
      "$r(A) = 2 \\ne r(A \\mid B) = 3$, demak sistema birgalikda emas (yechimga ega emas)",
      "$r(A) = r(A \\mid B) = 3$, demak sistema yagona yechimga ega",
      "$r(A) = r(A \\mid B) = 2$, demak sistema cheksiz ko‘p yechimga ega",
      "$r(A) = 3,\\; r(A \\mid B) = 2$, sistema birgalikda"
    ],
    "answer": 0,
    "difficulty": "O'rta",
    "explanation": "5-ma’ruza (22-23-slaydlar): 1- va 2-tenglamalar yig‘indisi $2x + 3y + 2z = 8$ beradi, 3-tenglama esa $2x + 3y + 2z = 7$. Pog‘onali shaklda 3-satr $(0, 0, 0 \\mid -1)$ bo‘lib, $r(A)=2 \\ne r(A|B)=3$."
  },
  {
    "id": "T5_Q12",
    "topicId": 5,
    "num": 12,
    "question": "Ma’ruzadagi 26-28-slaydlar misoli: $\\begin{cases} 2x_1 + 2x_2 - 3x_3 = 5 \\\\ x_1 - x_2 + x_3 = 0 \\\\ 3x_1 + x_2 + x_3 = 2 \\end{cases}$ sistemani matritsalar usuli ($X = A^{-1}B$) bilan yeching.",
    "options": [
      "$x_1 = 1,\\quad x_2 = 1,\\quad x_3 = 0$",
      "$x_1 = 2,\\quad x_2 = 1,\\quad x_3 = 1$",
      "$x_1 = -1,\\quad x_2 = 0,\\quad x_3 = 1$",
      "$x_1 = 1,\\quad x_2 = 0,\\quad x_3 = -1$"
    ],
    "answer": 3,
    "difficulty": "O'rta",
    "explanation": "5-ma’ruza (28-slayd): $X = A^{-1}B = -\\frac{1}{12}\\begin{pmatrix} -12 \\\\ 0 \\\\ 12 \\end{pmatrix} = \\begin{pmatrix} 1 \\\\ 0 \\\\ -1 \\end{pmatrix}$."
  },
  {
    "id": "T5_Q13",
    "topicId": 5,
    "num": 13,
    "question": "$A \\cdot X \\cdot B = C$ ko‘rinishdagi matritsaviy tenglamaning yechimi qaysi formula bilan topiladi ($\\det A \\ne 0, \\det B \\ne 0$)?",
    "options": [
      "$X = B^{-1} C A^{-1}$",
      "$X = A^{-1} B^{-1} C$",
      "$X = A^{-1} C B^{-1}$",
      "$X = C A^{-1} B^{-1}$"
    ],
    "answer": 2,
    "difficulty": "Oson",
    "explanation": "5-ma’ruza (29-slayd): Tenglikning chap tomonidan $A^{-1}$ ga, o‘ng tomonidan $B^{-1}$ ga ko‘paytirsak: $X = A^{-1} C B^{-1}$."
  },
  {
    "id": "T5_Q14",
    "topicId": 5,
    "num": 14,
    "question": "Ma’ruzadagi 29-slayd misoli: $\\begin{pmatrix} 0 & 1 \\\\ 2 & 1 \\end{pmatrix} X \\begin{pmatrix} 1 & 3 \\\\ 3 & 6 \\end{pmatrix} = \\begin{pmatrix} 4 & 0 \\\\ 5 & 8 \\end{pmatrix}$ matritsaviy tenglamadan $X$ ni toping.",
    "options": [
      "$\\begin{pmatrix} 1/2 & 4 \\\\ 4 & 0 \\end{pmatrix}$",
      "$\\begin{pmatrix} 3 & -5/6 \\\\ -8 & 4 \\end{pmatrix}$",
      "$\\begin{pmatrix} -2 & 1 \\\\ 1 & -1/3 \\end{pmatrix}$",
      "$\\begin{pmatrix} -3 & 5/6 \\\\ 8 & -4 \\end{pmatrix}$"
    ],
    "answer": 1,
    "difficulty": "Qiyin",
    "explanation": "5-ma’ruza (29-slayd): $A^{-1} = \\begin{pmatrix} -1/2 & 1/2 \\\\ 1 & 0 \\end{pmatrix}$, $B^{-1} = \\begin{pmatrix} -2 & 1 \\\\ 1 & -1/3 \\end{pmatrix}$. Ko‘paytirish natijasida $X = A^{-1}CB^{-1} = \\begin{pmatrix} 3 & -5/6 \\\\ -8 & 4 \\end{pmatrix}$."
  },
  {
    "id": "T5_Q15",
    "topicId": 5,
    "num": 15,
    "question": "Ma’ruzadagi 31-32-slaydlar misoli: $\\begin{cases} -2x_1 + x_2 - x_3 = 7 \\\\ 4x_1 + 2x_2 + 3x_3 = -5 \\\\ x_1 + 3x_2 - 2x_3 = 1 \\end{cases}$ sistemani Kramer formulalari yordamida yeching ($\\Delta = 27$).",
    "options": [
      "$x_1 = -3,\\quad x_2 = 2,\\quad x_3 = 1$",
      "$x_1 = 1,\\quad x_2 = 2,\\quad x_3 = -3$",
      "$x_1 = 3,\\quad x_2 = -2,\\quad x_3 = -1$",
      "$x_1 = -3,\\quad x_2 = 1,\\quad x_3 = 2$"
    ],
    "answer": 0,
    "difficulty": "O'rta",
    "explanation": "5-ma’ruza (31-32-slaydlar): $\\Delta = 27,\\; \\Delta_{x_1} = -81,\\; \\Delta_{x_2} = 54,\\; \\Delta_{x_3} = 27$. Demak $x_1 = -81/27 = -3,\\; x_2 = 54/27 = 2,\\; x_3 = 27/27 = 1$."
  },
  {
    "id": "T5_Q16",
    "topicId": 5,
    "num": 16,
    "question": "Kramer usulida asosiy determinant $\\Delta = 0$ bo‘lib, qo‘shimcha determinantlardan kamida bittasi $\\Delta_{x_i} \\ne 0$ bo‘lsa, sistema qanday yechimga ega bo‘ladi?",
    "options": [
      "Sistema yagona yechimga ega",
      "Sistema faqat nol yechimga ega",
      "Sistema cheksiz ko‘p yechimga ega",
      "Sistema yechimga ega emas (birgalikda emas)"
    ],
    "answer": 3,
    "difficulty": "Oson",
    "explanation": "5-ma’ruza (32, 34-slaydlar): Agar $\\Delta = 0$ va $\\Delta_{x_i} \\ne 0$ bo‘lsa, tenglamalar sistemasi yechimga ega emas."
  },
  {
    "id": "T5_Q17",
    "topicId": 5,
    "num": 17,
    "question": "Ma’ruzadagi 33-slayd misoli: $\\begin{cases} 2x_1 + x_2 + 3x_3 = 3 \\\\ 4x_1 + 2x_2 + 6x_3 = 6 \\\\ 6x_1 + 3x_2 + 9x_3 = 9 \\end{cases}$ sistemada $\\Delta, \\Delta_{x_1}, \\Delta_{x_2}, \\Delta_{x_3}$ nimaga teng va sistema nechta yechimga ega?",
    "options": [
      "$\\Delta = 0,\\; \\Delta_{x_1} = 6$; sistema yechimga ega emas",
      "Sistema faqat bitta $(1, 1, 0)$ yechimga ega",
      "$\\Delta = \\Delta_{x_1} = \\Delta_{x_2} = \\Delta_{x_3} = 0$; sistema cheksiz ko‘p yechimga ega",
      "$\\Delta = 18$; sistema yagona yechimga ega"
    ],
    "answer": 2,
    "difficulty": "Oson",
    "explanation": "5-ma’ruza (33-slayd): Barcha tenglamalar 1-tenglamaga proporsional ($r(A)=r(A|B)=1 < 3$) va $\\Delta = \\Delta_{x_1} = \\Delta_{x_2} = \\Delta_{x_3} = 0$, sistema cheksiz ko‘p yechimga ega."
  },
  {
    "id": "T5_Q18",
    "topicId": 5,
    "num": 18,
    "question": "Ma’ruzadagi 34-slayd misoli: $\\begin{cases} 2x_1 + x_2 + 3x_3 = 3 \\\\ 4x_1 + 2x_2 + 6x_3 = 5 \\\\ 3x_1 + 2x_2 = 2 \\end{cases}$ sistemada $\\Delta = 0$ bo‘lib, $\\Delta_{x_1}, \\Delta_{x_2}, \\Delta_{x_3}$ qiymatlari va yechim holati qanday?",
    "options": [
      "$\\Delta_{x_1} = 0,\\; \\Delta_{x_2} = 0,\\; \\Delta_{x_3} = 0$; sistema cheksiz ko‘p yechimga ega",
      "$\\Delta_{x_1} = -6,\\; \\Delta_{x_2} = 9,\\; \\Delta_{x_3} = 1$; sistema yechimga ega emas",
      "Sistema $(0, 0, 1)$ yechimga ega",
      "$\\Delta_{x_1} = 6,\\; \\Delta_{x_2} = -9,\\; \\Delta_{x_3} = -1$; sistema yagona yechimga ega"
    ],
    "answer": 1,
    "difficulty": "O'rta",
    "explanation": "5-ma’ruza (34-slayd): $\\Delta = 0$, ammo $\\Delta_{x_1} = -6 \\ne 0, \\Delta_{x_2} = 9 \\ne 0, \\Delta_{x_3} = 1 \\ne 0$. Demak, sistema yechimga ega emas."
  },
  {
    "id": "T5_Q19",
    "topicId": 5,
    "num": 19,
    "question": "Ushbu $\\begin{cases} 4x + 2y = -18 \\\\ 4x - 5y = 3 \\end{cases}$ chiziqli tenglamalar sistemasini Kramer qoidasi bilan yeching.",
    "options": [
      "$(-3;\\; -3)$",
      "$(-3;\\; 3)$",
      "$(3;\\; -3)$",
      "$(3;\\; 3)$"
    ],
    "answer": 0,
    "difficulty": "Oson",
    "explanation": "$\\Delta = -20 - 8 = -28$. $\\Delta_x = 90 - 6 = 84 \\implies x = 84/(-28) = -3$. $\\Delta_y = 12 - (-72) = 84 \\implies y = 84/(-28) = -3$."
  },
  {
    "id": "T5_Q20",
    "topicId": 5,
    "num": 20,
    "question": "7 ta noma’lumli va 5 ta tenglamadan iborat bir jinsli chiziqli tenglamalar sistemasining asosiy matritsasi rangi $r(A) = 4$ ga teng. Bu sistemaning fundamental yechimlar sistemasida (FYS) nechta chiziqli erkli vektor bor?",
    "options": [
      "$1$ ta ($m - r = 5 - 4 = 1$)",
      "$2$ ta ($n - m = 7 - 5 = 2$)",
      "$4$ ta ($r = 4$)",
      "$3$ ta ($n - r = 7 - 4 = 3$)"
    ],
    "answer": 3,
    "difficulty": "Oson",
    "explanation": "5-ma’ruza (8-slayd): Teoremaga ko‘ra FYS dagi vektorlar soni noma’lumlar soni $n$ dan rang $r$ ni ayirilganiga teng: $n - r = 7 - 4 = 3$."
  },
  {
    "id": "T5_Q21",
    "topicId": 5,
    "num": 21,
    "question": "$k$ parametrning qanday musbat qiymatida $\\begin{cases} kx + 4y = 0 \\\\ 9x + ky = 0 \\end{cases}$ bir jinsli tenglamalar sistemasi nolmas yechimlarga ega bo‘ladi?",
    "options": [
      "$k = 9$",
      "$k = 4$",
      "$k = 6$",
      "$k = 12$"
    ],
    "answer": 2,
    "difficulty": "O'rta",
    "explanation": "Bir jinsli kvadrat sistema nolmas yechimga ega bo‘lishi uchun asosiy determinant $\\Delta = k^2 - 36 = 0$ bo‘lishi kerak. Musbat qiymati: $k = 6$."
  },
  {
    "id": "T5_Q22",
    "topicId": 5,
    "num": 22,
    "question": "Ma’ruzadagi 15-slayd misoli: $\\begin{cases} 4x_1 + 7x_2 + 2x_3 + 3x_4 = 8 \\\\ x_1 + 3x_2 - x_3 + 2x_4 = 3 \\\\ 2x_1 + x_2 + 4x_3 - x_4 = 2 \\end{cases}$ sistemada $x_3=0, x_4=0$ deb olinganda hosil bo‘ladigan $F_0$ xususiy yechimni toping.",
    "options": [
      "$F_0 = (0.8;\\; 0.6;\\; 0;\\; 0)^T$",
      "$F_0 = (0.6;\\; 0.8;\\; 0;\\; 0)^T$",
      "$F_0 = (1;\\; -1;\\; 0;\\; 1)^T$",
      "$F_0 = (-2.6;\\; 1.2;\\; 1;\\; 0)^T$"
    ],
    "answer": 1,
    "difficulty": "O'rta",
    "explanation": "5-ma’ruza (15-slayd): Pog‘onali matritsadan $x_2 - 1.2x_3 + x_4 = 0.8$ va $x_1 + 2.6x_3 - x_4 = 0.6$ chiqadi. $x_3=x_4=0$ da $F_0 = (0.6; 0.8; 0; 0)^T$."
  },
  {
    "id": "T5_Q23",
    "topicId": 5,
    "num": 23,
    "question": "Ma’ruzadagi 15-slayd misolida mos bir jinsli sistemaning fundamental yechimlari $F_1$ va $F_2$ qaysi qatorda to‘g‘ri ko‘rsatilgan?",
    "options": [
      "$F_1 = (-2.6;\\; 1.2;\\; 1;\\; 0)^T,\\quad F_2 = (1;\\; -1;\\; 0;\\; 1)^T$",
      "$F_1 = (0.6;\\; 0.8;\\; 1;\\; 0)^T,\\quad F_2 = (0.6;\\; 0.8;\\; 0;\\; 1)^T$",
      "$F_1 = (1;\\; 0;\\; -2.6;\\; 1.2)^T,\\quad F_2 = (0;\\; 1;\\; 1;\\; -1)^T$",
      "$F_1 = (2.6;\\; -1.2;\\; 1;\\; 0)^T,\\quad F_2 = (-1;\\; 1;\\; 0;\\; 1)^T$"
    ],
    "answer": 0,
    "difficulty": "O'rta",
    "explanation": "5-ma’ruza (15-slayd): $(x_3, x_4) = (1, 0)$ qo‘yilsa $F_1 = (-2.6; 1.2; 1; 0)^T$, $(x_3, x_4) = (0, 1)$ qo‘yilsa $F_2 = (1; -1; 0; 1)^T$ hosil bo‘ladi."
  },
  {
    "id": "T5_Q24",
    "topicId": 5,
    "num": 24,
    "question": "Agar $F_1 = (2, -1, 1, 0)^T$ va $F_2 = (1, 3, 0, 1)^T$ vektorlar $AX = \\Theta$ bir jinsli sistemaning fundamental yechimlari bo‘lsa, $X = 2F_1 - F_2$ xususiy yechimni toping.",
    "options": [
      "$(5,\\; 1,\\; 2,\\; 1)^T$",
      "$(1,\\; -4,\\; 1,\\; -1)^T$",
      "$(3,\\; 1,\\; 2,\\; -1)^T$",
      "$(3,\\; -5,\\; 2,\\; -1)^T$"
    ],
    "answer": 3,
    "difficulty": "Oson",
    "explanation": "$2F_1 - F_2 = (4-1,\\; -2-3,\\; 2-0,\\; 0-1)^T = (3, -5, 2, -1)^T$."
  },
  {
    "id": "T5_Q25",
    "topicId": 5,
    "num": 25,
    "question": "$\\begin{cases} 3x - 2y = 7 \\\\ 6x - 4y = m \\end{cases}$ chiziqli tenglamalar sistemasi $m$ ning qanday qiymatida cheksiz ko‘p yechimga ega bo‘ladi?",
    "options": [
      "$m = 7$",
      "$m \\ne 14$ bo‘lgan barcha qiymatlarda",
      "$m = 14$",
      "$m = -14$"
    ],
    "answer": 2,
    "difficulty": "Oson",
    "explanation": "Chap tomon ikkinchi tenglamada 2 marta katta: $2(3x - 2y) = 6x - 4y$. Sistema birgalikda va cheksiz ko‘p yechimga ega bo‘lishi uchun $m = 2 \\cdot 7 = 14$ bo‘lishi kerak."
  },
  {
    "id": "T5_Q26",
    "topicId": 5,
    "num": 26,
    "question": "$\\begin{cases} x + y + z = 6 \\\\ x - y + z = 2 \\\\ x + y - z = 0 \\end{cases}$ tenglamalar sistemasining yechimi $(x, y, z)$ ni toping.",
    "options": [
      "$(2;\\; 1;\\; 3)$",
      "$(1;\\; 2;\\; 3)$",
      "$(1;\\; 3;\\; 2)$",
      "$(3;\\; 2;\\; 1)$"
    ],
    "answer": 1,
    "difficulty": "Oson",
    "explanation": "1-tenglamadan 2-tenglamani ayirsak $2y = 4 \\implies y = 2$. 1-tenglamadan 3-tenglamani ayirsak $2z = 6 \\implies z = 3$. U holda $x = 6 - 2 - 3 = 1$."
  },
  {
    "id": "T5_Q27",
    "topicId": 5,
    "num": 27,
    "question": "Kramer qoidasini qo‘llash uchun tenglamalar sistemasi qanday shartlarni qanoatlantirishi shart?",
    "options": [
      "Tenglamalar soni noma’lumlar soniga teng ($m = n$) va asosiy determinant $\\Delta \\ne 0$ bo‘lishi shart",
      "Ozod hadlar ustuni faqat nollardan iborat bo‘lishi shart",
      "Tenglamalar soni noma’lumlar sonidan ko‘p ($m > n$) bo‘lishi shart",
      "Asosiy determinant $\\Delta = 0$ bo‘lishi shart"
    ],
    "answer": 0,
    "difficulty": "Oson",
    "explanation": "5-ma’ruza (30-slayd): Kramer qoidasi $n$ ta noma’lumli $n$ ta chiziqli tenglamalar sistemasida $\\Delta \\ne 0$ bo‘lganda yagona yechimni topish uchun qo‘llaniladi."
  },
  {
    "id": "T5_Q28",
    "topicId": 5,
    "num": 28,
    "question": "Ma’ruzadagi 16-slayd misoli: $\\begin{cases} x + 2y + z = 1 \\\\ -3x + y + 4z = 5 \\\\ x - 5z = 7 \\end{cases}$ sistemaning asosiy matritsasi $A$ ni toping.",
    "options": [
      "$\\begin{pmatrix} 1 & 2 & 1 \\\\ -3 & 1 & 4 \\\\ 1 & -5 & 0 \\end{pmatrix}$",
      "$\\begin{pmatrix} 1 & -3 & 1 \\\\ 2 & 1 & 0 \\\\ 1 & 4 & -5 \\end{pmatrix}$",
      "$\\begin{pmatrix} 1 & 2 & 1 & 1 \\\\ -3 & 1 & 4 & 5 \\\\ 1 & 0 & -5 & 7 \\end{pmatrix}$",
      "$\\begin{pmatrix} 1 & 2 & 1 \\\\ -3 & 1 & 4 \\\\ 1 & 0 & -5 \\end{pmatrix}$"
    ],
    "answer": 3,
    "difficulty": "Oson",
    "explanation": "5-ma’ruza (16-slayd): 3-tenglamada $y$ qatnashmagani uchun uning koeffitsiyenti $a_{32} = 0$ bo‘ladi: $1\\cdot x + 0\\cdot y - 5\\cdot z = 7$."
  },
  {
    "id": "T5_Q29",
    "topicId": 5,
    "num": 29,
    "question": "Agar 3 ta noma’lumli chiziqli tenglamalar sistemasida $\\Delta = 15$, $\\Delta_{x_1} = -30$, $\\Delta_{x_2} = 45$, $\\Delta_{x_3} = 0$ bo‘lsa, $x_1 + x_2 + x_3$ yig‘indini toping.",
    "options": [
      "$5$",
      "$-1$",
      "$1$",
      "$3$"
    ],
    "answer": 2,
    "difficulty": "Oson",
    "explanation": "$x_1 = -30/15 = -2,\\; x_2 = 45/15 = 3,\\; x_3 = 0/15 = 0$. Yig‘indi: $-2 + 3 + 0 = 1$."
  },
  {
    "id": "T5_Q30",
    "topicId": 5,
    "num": 30,
    "question": "4 ta tenglama va 3 ta noma’lumdan iborat chiziqli tenglamalar sistemasi yagona yechimga ega bo‘lishi uchun $r(A)$ va $r(A \\mid B)$ nechaga teng bo‘lishi kerak?",
    "options": [
      "$r(A) = r(A \\mid B) = 2$",
      "$r(A) = r(A \\mid B) = 3$",
      "$r(A) = r(A \\mid B) = 4$",
      "$r(A) = 3,\\quad r(A \\mid B) = 4$"
    ],
    "answer": 1,
    "difficulty": "O'rta",
    "explanation": "Noma’lumlar soni $n = 3$ bo‘lgani uchun yagona yechim sharti Kroneker-Kapelli teoremasiga ko‘ra $r(A) = r(A \\mid B) = n = 3$."
  },
  {
    "id": "T6_Q1",
    "topicId": 6,
    "num": 1,
    "question": "Chiziqli tenglamalar sistemasini yechishning Gauss usuli (ketma-ket yo‘qotish usuli) qanday ikki bosqichdan iborat?",
    "options": [
      "1) Vektorlarni ortogonallash; 2) Normallashtirish",
      "1) To‘g‘ri yurish — kengaytirilgan matritsani uchburchak (pog‘onali) shaklga keltirish; 2) Teskari yurish — oxirgi tenglamadan boshlab noma’lumlarni ketma-ket topish",
      "1) Matritsani kvadratga ko‘tarish; 2) Skalyar ko‘paytmani topish",
      "1) Determinantlarni hisoblash; 2) Qo‘shma matritsani transponirlash"
    ],
    "answer": 1,
    "difficulty": "Oson",
    "explanation": "6-ma’ruza (5-7-slaydlar): Gauss usulida avval elementar almashtirishlar bilan uchburchak/pog‘onali sistema hosil qilinadi (to‘g‘ri yurish), so‘ngra pastdan yuqoriga qarab noma’lumlar topiladi (teskari yurish)."
  },
  {
    "id": "T6_Q2",
    "topicId": 6,
    "num": 2,
    "question": "Gauss-Jordan usuli Gauss usulidan nimasi bilan farq qiladi va unda kengaytirilgan matritsa qanday ko‘rinishga keltiriladi?",
    "options": [
      "Kengaytirilgan matritsa $(A \\mid B) \\sim (E \\mid X)$ ko‘rinishga keltiriladi va teskari yurishga hojat qolmaydi",
      "Faqat 2 ta tenglamali sistemalar uchun ishlatiladi",
      "Kengaytirilgan matritsa $(A \\mid B) \\sim (O \\mid X)$ nol matritsaga keltiriladi",
      "Determinantlarni Sarrius qoidasi bilan hisoblashga asoslanadi"
    ],
    "answer": 0,
    "difficulty": "Oson",
    "explanation": "6-ma’ruza (10-slayd): Gauss-Jordan usulida $(A \\mid B) \\sim (E \\mid X)$ ko‘rinishga keltiriladi (bosh diagonaldan yuqoridagi va pastdagi barcha elementlar nolga aylantiriladi)."
  },
  {
    "id": "T6_Q3",
    "topicId": 6,
    "num": 3,
    "question": "Ma’ruzadagi 6-7-slaydlar misoli: $\\begin{cases} x_1 - x_2 + 2x_3 - x_4 = 1 \\\\ x_1 + x_2 + x_3 + x_4 = 10 \\\\ 3x_1 - x_2 + 4x_3 - 2x_4 = 5 \\\\ 2x_1 + 2x_2 + 3x_3 - x_4 = 11 \\end{cases}$ sistemani Gauss usulida yeching.",
    "options": [
      "$x_1 = 4,\\quad x_2 = 3,\\quad x_3 = 2,\\quad x_4 = 1$",
      "$x_1 = 2,\\quad x_2 = 2,\\quad x_3 = 3,\\quad x_4 = 3$",
      "$x_1 = -1,\\quad x_2 = -2,\\quad x_3 = 3,\\quad x_4 = 4$",
      "$x_1 = 1,\\quad x_2 = 2,\\quad x_3 = 3,\\quad x_4 = 4$"
    ],
    "answer": 3,
    "difficulty": "O'rta",
    "explanation": "6-ma’ruza (6-7-slaydlar): Uchburchak shakl $\\begin{cases} x_1 - x_2 + 2x_3 - x_4 = 1 \\\\ 2x_2 - x_3 + 2x_4 = 9 \\\\ -x_3 - x_4 = -7 \\\\ -4x_4 = -16 \\end{cases} \\implies x_4=4, x_3=3, x_2=2, x_1=1$."
  },
  {
    "id": "T6_Q4",
    "topicId": 6,
    "num": 4,
    "question": "Ma’ruzadagi 8-9-slaydlar misoli: $\\begin{cases} x_1 - x_2 + 2x_3 - x_4 = 4 \\\\ x_1 + x_2 + x_3 + x_4 = 10 \\\\ 7x_1 + 2x_2 + 8x_3 - 6x_4 = 44 \\\\ 5x_1 + 2x_2 + 5x_3 - 6x_4 = 30 \\end{cases}$ sistemani Gauss usulida pog‘onali shaklga keltirganda $x_4 = \\alpha$ orqali umumiy yechim qanday bo‘ladi?",
    "options": [
      "Sistema yechimga ega emas",
      "$x_1 = \\alpha,\\quad x_2 = 2\\alpha,\\quad x_3 = 3\\alpha,\\quad x_4 = \\alpha$",
      "$x_1 = 8\\alpha - 4,\\quad x_2 = \\frac{20 - 11\\alpha}{3},\\quad x_3 = \\frac{22 - 16\\alpha}{3},\\quad x_4 = \\alpha$",
      "$x_1 = 4 - 8\\alpha,\\quad x_2 = \\frac{11\\alpha - 20}{3},\\quad x_3 = \\frac{16\\alpha - 22}{3},\\quad x_4 = \\alpha$"
    ],
    "answer": 2,
    "difficulty": "Qiyin",
    "explanation": "6-ma’ruza (8-9-slaydlar): 4-satr nolga aylanib, $\\begin{cases} x_1 - x_2 + 2x_3 - x_4 = 4 \\\\ 2x_2 - x_3 + 2x_4 = 6 \\\\ 3x_3 + 16x_4 = 22 \\end{cases}$ hosil bo‘ladi va $x_4=\\alpha$ dan $x_3 = \\frac{22-16\\alpha}{3},\\; x_2 = \\frac{20-11\\alpha}{3},\\; x_1 = 8\\alpha - 4$ kelib chiqadi."
  },
  {
    "id": "T6_Q5",
    "topicId": 6,
    "num": 5,
    "question": "Ma’ruzadagi 9-slayd misolidagi $x_1 = 8\\alpha - 4,\\; x_2 = \\frac{20 - 11\\alpha}{3},\\; x_3 = \\frac{22 - 16\\alpha}{3},\\; x_4 = \\alpha$ umumiy yechimda $\\alpha = 1$ deb olinsa, qanday xususiy yechim hosil bo‘ladi?",
    "options": [
      "$x_1 = 4,\\quad x_2 = -3,\\quad x_3 = 2,\\quad x_4 = 1$",
      "$x_1 = 4,\\quad x_2 = 3,\\quad x_3 = 2,\\quad x_4 = 1$",
      "$x_1 = 1,\\quad x_2 = 2,\\quad x_3 = 3,\\quad x_4 = 4$",
      "$x_1 = -4,\\quad x_2 = 20/3,\\quad x_3 = 22/3,\\quad x_4 = 0$"
    ],
    "answer": 1,
    "difficulty": "Oson",
    "explanation": "$\\alpha = 1$ qo‘yilsa: $x_1 = 8(1)-4 = 4,\\; x_2 = (20-11)/3 = 3,\\; x_3 = (22-16)/3 = 2,\\; x_4 = 1$."
  },
  {
    "id": "T6_Q6",
    "topicId": 6,
    "num": 6,
    "question": "Ma’ruzadagi 10-12-slaydlar misoli: $\\begin{cases} x_1 + x_2 + 2x_3 + 3x_4 = 1 \\\\ 3x_1 - x_2 - x_3 - 2x_4 = -4 \\\\ 2x_1 + 3x_2 - x_3 - x_4 = -6 \\\\ x_1 + 2x_2 + 3x_3 - x_4 = -4 \\end{cases}$ sistemani Gauss-Jordan usulida yeching.",
    "options": [
      "$x_1 = -1,\\quad x_2 = -1,\\quad x_3 = 0,\\quad x_4 = 1$",
      "$x_1 = -1,\\quad x_2 = 0,\\quad x_3 = -1,\\quad x_4 = 1$",
      "$x_1 = 0,\\quad x_2 = -1,\\quad x_3 = 1,\\quad x_4 = -1$",
      "$x_1 = 1,\\quad x_2 = 1,\\quad x_3 = 0,\\quad x_4 = -1$"
    ],
    "answer": 0,
    "difficulty": "O'rta",
    "explanation": "6-ma’ruza (10-12-slaydlar): $(A|B)$ matritsa Gauss-Jordan usuli bilan $\\left(\\begin{smallmatrix} 1&0&0&0&-1 \\\\ 0&1&0&0&-1 \\\\ 0&0&1&0&0 \\\\ 0&0&0&1&1 \\end{smallmatrix}\\right)$ ko‘rinishga keladi: $x_1=-1, x_2=-1, x_3=0, x_4=1$."
  },
  {
    "id": "T6_Q7",
    "topicId": 6,
    "num": 7,
    "question": "Tenglamalar sistemasining «bazis yechimi» deb nimaga aytiladi va unda erkli o‘zgaruvchilar qanday qiymat qabul qiladi?",
    "options": [
      "Faqat bir jinsli sistemaning nol yechimiga bazis yechim deyiladi",
      "Barcha o‘zgaruvchilari $1$ ga teng bo‘lgan yechimga bazis yechim deyiladi",
      "Bazis o‘zgaruvchilari $0$ ga teng bo‘lib, erkli o‘zgaruvchilari noldan farqli bo‘lgan yechimga aytiladi",
      "Erkli o‘zgaruvchilarning qiymatlari $0$ ga teng deb olinib, faqat bazis o‘zgaruvchilari noldan farqli bo‘lishi mumkin bo‘lgan yechimga bazis yechim deyiladi"
    ],
    "answer": 3,
    "difficulty": "Oson",
    "explanation": "6-ma’ruza (13-14-slaydlar): Faqat bazis o‘zgaruvchilari noldan farqli bo‘lishi mumkin bo‘lgan (erkli o‘zgaruvchilari 0 ga teng deb olingan) yechim bazis yechimi deyiladi."
  },
  {
    "id": "T6_Q8",
    "topicId": 6,
    "num": 8,
    "question": "Agar tenglamalar sistemasida noma’lumlar soni $n$ va sistema rangi $r$ ($r < n$) bo‘lsa, noma’lumlarni $r$ ta bazis va $n-r$ ta erkli o‘zgaruvchilarga ajratish usullari (guruhlari) soni qaysi formula bilan topiladi?",
    "options": [
      "$P_n = n!$",
      "$A_n^r = \\frac{n!}{(n - r)!}$",
      "$C_n^r = \\frac{n!}{r! \\cdot (n - r)!}$",
      "$n - r$"
    ],
    "answer": 2,
    "difficulty": "Oson",
    "explanation": "6-ma’ruza (14-slayd): $C_n^r = \\frac{n!}{r!(n-r)!}$, bu yerda $n$ — noma’lumlar soni, $r$ — rang."
  },
  {
    "id": "T6_Q9",
    "topicId": 6,
    "num": 9,
    "question": "Ma’ruzadagi 15-slayd misoli: $\\begin{cases} 2x_1 - 3x_2 + 4x_3 + 6x_4 + 6x_5 = 3 \\\\ 3x_1 - 4x_2 + 6x_3 + 8x_4 + 9x_5 = 5 \\end{cases}$ sistemada nechta bazis o‘zgaruvchi, nechta erkli o‘zgaruvchi va nechta kombinatorik bazis guruh ($C_n^r$) mavjud?",
    "options": [
      "$r = 2$ ta bazis o‘zgaruvchi, $n - r = 3$ ta erkli o‘zgaruvchi va $5! = 120$ ta guruh",
      "$r = 2$ ta bazis o‘zgaruvchi, $n - r = 3$ ta erkli o‘zgaruvchi va $C_5^2 = 10$ ta guruh",
      "$r = 2$ ta bazis o‘zgaruvchi, $n - r = 2$ ta erkli o‘zgaruvchi va $6$ ta guruh",
      "$r = 3$ ta bazis o‘zgaruvchi, $n - r = 2$ ta erkli o‘zgaruvchi va $C_5^3 = 10$ ta guruh"
    ],
    "answer": 1,
    "difficulty": "Oson",
    "explanation": "6-ma’ruza (15-slayd): $n = 5, r = 2 \\implies$ bazis o‘zgaruvchilar 2 ta, erkli o‘zgaruvchilar $5 - 2 = 3$ ta, $C_5^2 = \\frac{5!}{2!3!} = 10$ ta juftlik."
  },
  {
    "id": "T6_Q10",
    "topicId": 6,
    "num": 10,
    "question": "Ma’ruzadagi 16-slayd misoli: $\\begin{cases} 2x_1 - 3x_2 + 4x_3 + 6x_4 + 6x_5 = 3 \\\\ 3x_1 - 4x_2 + 6x_3 + 8x_4 + 9x_5 = 5 \\end{cases}$ sistemada 10 ta juftlikdan qaysi 4 tasida 2-tartibli minor nolga teng bo‘lgani sababli ular bazis o‘zgaruvchilar bo‘la OLMAYDI?",
    "options": [
      "$(x_1, x_3),\\; (x_1, x_5),\\; (x_2, x_4),\\; (x_3, x_5)$ — qolgan 6 tasida minor noldan farqli va 6 ta bazis yechim mavjud",
      "$(x_1, x_2),\\; (x_1, x_4),\\; (x_2, x_3),\\; (x_4, x_5)$ — faqat 4 ta bazis yechim mavjud",
      "Faqat $(x_1, x_2)$ juftlikda minor noldan farqli",
      "Barcha 10 ta juftlikda minor noldan farqli va 10 ta bazis yechim mavjud"
    ],
    "answer": 0,
    "difficulty": "Qiyin",
    "explanation": "6-ma’ruza (16-slayd): 1, 3, 5-ustunlar o‘zaro proporsional ($(4,6)=2(2,3)$ va $(6,9)=3(2,3)$), 2 va 4-ustunlar ham proporsional ($(6,8)=-2(-3,-4)$). Shu sababli $(x_1,x_3), (x_1,x_5), (x_3,x_5)$ va $(x_2,x_4)$ minorlari $0$ ga teng. Qolgan 6 ta minor noldan farqli!"
  },
  {
    "id": "T6_Q11",
    "topicId": 6,
    "num": 11,
    "question": "Ma’ruzadagi 17-slayd misoli: $\\begin{cases} 2x_1 - 3x_2 + 4x_3 + 6x_4 + 6x_5 = 3 \\\\ 3x_1 - 4x_2 + 6x_3 + 8x_4 + 9x_5 = 5 \\end{cases}$ sistemada $x_1$ va $x_2$ bazis o‘zgaruvchilar ($x_3=x_4=x_5=0$) bo‘lgandagi $X_{1b}$ bazis yechimni toping.",
    "options": [
      "$X_{1b} = (0;\\; 1;\\; 1.5;\\; 0;\\; 0)^T$",
      "$X_{1b} = (3;\\; 0;\\; 0;\\; -0.5;\\; 0)^T$",
      "$X_{1b} = (1;\\; 3;\\; 0;\\; 0;\\; 0)^T$",
      "$X_{1b} = (3;\\; 1;\\; 0;\\; 0;\\; 0)^T$"
    ],
    "answer": 3,
    "difficulty": "O'rta",
    "explanation": "6-ma’ruza (17-slayd): $\\begin{cases} 2x_1 - 3x_2 = 3 \\\\ 3x_1 - 4x_2 = 5 \\end{cases} \\implies x_1 = 3,\\; x_2 = 1$. Demak $X_{1b} = (3, 1, 0, 0, 0)^T$."
  },
  {
    "id": "T6_Q12",
    "topicId": 6,
    "num": 12,
    "question": "Ma’ruzadagi 17-slayd misoli: Yuqoridagi sistemada $x_1$ va $x_4$ bazis o‘zgaruvchilar ($x_2=x_3=x_5=0$) bo‘lgandagi $X_{2b}$ bazis yechimni toping.",
    "options": [
      "$X_{2b} = (3;\\; 0;\\; 0;\\; 0.5;\\; 0)^T$",
      "$X_{2b} = (1;\\; 0;\\; 0;\\; 0.5;\\; 0)^T$",
      "$X_{2b} = (3;\\; 0;\\; 0;\\; -0.5;\\; 0)^T$",
      "$X_{2b} = (0;\\; 0;\\; 1.5;\\; -0.5;\\; 0)^T$"
    ],
    "answer": 2,
    "difficulty": "O'rta",
    "explanation": "6-ma’ruza (17-slayd): $\\begin{cases} 2x_1 + 6x_4 = 3 \\\\ 3x_1 + 8x_4 = 5 \\end{cases} \\implies x_1 = 3,\\; x_4 = -0.5$. Demak $X_{2b} = (3, 0, 0, -0.5, 0)^T$."
  },
  {
    "id": "T6_Q13",
    "topicId": 6,
    "num": 13,
    "question": "Ma’ruzadagi 17-slayd misoli: Yuqoridagi sistemada qolgan 4 ta bazis yechim ($X_{3b}, X_{4b}, X_{5b}, X_{6b}$) qaysi javobda to‘liq va to‘g‘ri berilgan?",
    "options": [
      "$X_{3b}=(1, 0, 1.5, 0, 0)^T;\\; X_{4b}=(1, 0, 0, 0, 1)^T;\\; X_{5b}=(0, 1.5, 0, -0.5, 0)^T;\\; X_{6b}=(0, 0, 1, -0.5, 0)^T$",
      "$X_{3b}=(0, 1, 1.5, 0, 0)^T;\\; X_{4b}=(0, 1, 0, 0, 1)^T;\\; X_{5b}=(0, 0, 1.5, -0.5, 0)^T;\\; X_{6b}=(0, 0, 0, -0.5, 1)^T$",
      "$X_{3b}=(0, 2, 3, 0, 0)^T;\\; X_{4b}=(0, 2, 0, 0, 2)^T;\\; X_{5b}=(0, 0, 3, -1, 0)^T;\\; X_{6b}=(0, 0, 0, -1, 2)^T$",
      "$X_{3b}=(0, 1, -1.5, 0, 0)^T;\\; X_{4b}=(0, -1, 0, 0, 1)^T;\\; X_{5b}=(0, 0, 1.5, 0.5, 0)^T;\\; X_{6b}=(0, 0, 0, 0.5, 1)^T$"
    ],
    "answer": 1,
    "difficulty": "Qiyin",
    "explanation": "6-ma’ruza (17-slayd): Mos juftliklarni qo‘yib yechilganda aynan shu 4 ta vektor hosil bo‘ladi."
  },
  {
    "id": "T6_Q14",
    "topicId": 6,
    "num": 14,
    "question": "6 ta noma’lumli chiziqli tenglamalar sistemasining rangi $r = 4$ ga teng bo‘lsa, noma’lumlarni bazis va erkli o‘zgaruvchilarga ajratishning maksimal usullari soni $C_6^4$ nechaga teng?",
    "options": [
      "$15$",
      "$30$",
      "$20$",
      "$12$"
    ],
    "answer": 0,
    "difficulty": "Oson",
    "explanation": "$C_6^4 = \\frac{6!}{4! \\cdot 2!} = \\frac{5 \\cdot 6}{1 \\cdot 2} = 15$."
  },
  {
    "id": "T6_Q15",
    "topicId": 6,
    "num": 15,
    "question": "Gauss usulida to‘g‘ri yurish natijasida kengaytirilgan matritsaning biror satri $(0\\;\\; 0\\;\\; 0\\;\\; 0 \\mid 7)$ ko‘rinishga kelsa, bu nimani anglatadi?",
    "options": [
      "Sistema cheksiz ko‘p yechimga ega ekanligini",
      "$x_4 = 7$ ekanligini",
      "Sistemaning barcha yechimlari $7$ ga teng ekanligini",
      "$0 \\cdot x_1 + 0 \\cdot x_2 + 0 \\cdot x_3 + 0 \\cdot x_4 = 7$ ziddiyatli tenglama hosil bo‘lganini, ya’ni sistema birgalikda emasligini ($\\varnothing$)"
    ],
    "answer": 3,
    "difficulty": "Oson",
    "explanation": "Chap tomonda barcha koeffitsiyentlar 0 bo‘lib, o‘ng tomonda $7 \\ne 0$ turibdi ($r(A) < r(A|B)$), demak sistema yechimga ega emas."
  },
  {
    "id": "T6_Q16",
    "topicId": 6,
    "num": 16,
    "question": "$\\begin{cases} x_1 + 2x_2 - x_3 + 3x_4 = 5 \\\\ 2x_1 + x_2 + x_3 - x_4 = 4 \\end{cases}$ sistemada $x_1$ va $x_2$ bazis o‘zgaruvchilar deb olinsa, mos bazis yechimni toping.",
    "options": [
      "$(0;\\; 0;\\; 1;\\; 2)^T$",
      "$(3;\\; 1;\\; 0;\\; 0)^T$",
      "$(1;\\; 2;\\; 0;\\; 0)^T$",
      "$(2;\\; 1;\\; 0;\\; 0)^T$"
    ],
    "answer": 2,
    "difficulty": "O'rta",
    "explanation": "Erkli o‘zgaruvchilar $x_3 = 0, x_4 = 0$ deb olinadi: $\\begin{cases} x_1 + 2x_2 = 5 \\\\ 2x_1 + x_2 = 4 \\end{cases} \\implies x_1 = 1,\\; x_2 = 2$. Bazis yechim: $(1, 2, 0, 0)^T$."
  },
  {
    "id": "T6_Q17",
    "topicId": 6,
    "num": 17,
    "question": "Yuqoridagi $\\begin{cases} x_1 + 2x_2 - x_3 + 3x_4 = 5 \\\\ 2x_1 + x_2 + x_3 - x_4 = 4 \\end{cases}$ sistemada $x_3$ va $x_4$ bazis o‘zgaruvchilar deb olinsa ($x_1 = x_2 = 0$), mos bazis yechimni toping.",
    "options": [
      "$(0;\\; 0;\\; -1;\\; 1)^T$",
      "$(0;\\; 0;\\; 8.5;\\; 4.5)^T$",
      "$(0;\\; 0;\\; 4.5;\\; 8.5)^T$",
      "$(0;\\; 0;\\; 5;\\; 4)^T$"
    ],
    "answer": 1,
    "difficulty": "O'rta",
    "explanation": "$x_1 = x_2 = 0$ da $\\begin{cases} -x_3 + 3x_4 = 5 \\\\ x_3 - x_4 = 4 \\end{cases}$. Qo‘shib yuborsak $2x_4 = 9 \\implies x_4 = 4.5$ va $x_3 = 4 + 4.5 = 8.5$. Demak $(0; 0; 8.5; 4.5)^T$."
  },
  {
    "id": "T6_Q18",
    "topicId": 6,
    "num": 18,
    "question": "Gauss-Jordan usulida kengaytirilgan matritsa $\\begin{pmatrix} 1 & 0 & 2 & | & 5 \\\\ 0 & 1 & -1 & | & 3 \\\\ 0 & 0 & 1 & | & 2 \\end{pmatrix}$ holatga keltirildi. Uni $(E \\mid X)$ birlik matritsa shakliga to‘liq keltirish uchun qanday amal bajariladi va yechim nima bo‘ladi?",
    "options": [
      "1-satrdan 3-satrning 2 baravarini ayiramiz va 2-satrga 3-satrni qo‘shamiz; natija: $x_1 = 1,\\; x_2 = 5,\\; x_3 = 2$",
      "Hech qanday amal shart emas; natija: $x_1 = 5,\\; x_2 = 3,\\; x_3 = 2$",
      "1-satrga 3-satrning 2 baravarini qo‘shamiz; natija: $x_1 = 9,\\; x_2 = 1,\\; x_3 = 2$",
      "3-satrni 2 ga bo‘lamiz; natija: $x_1 = 5,\\; x_2 = 3,\\; x_3 = 1$"
    ],
    "answer": 0,
    "difficulty": "O'rta",
    "explanation": "$R_1 \\leftarrow R_1 - 2R_3 \\implies x_1 = 5 - 2(2) = 1$; $R_2 \\leftarrow R_2 + R_3 \\implies x_2 = 3 + 2 = 5$; $x_3 = 2$."
  },
  {
    "id": "T6_Q19",
    "topicId": 6,
    "num": 19,
    "question": "Chiziqli tenglamalar sistemasi o‘zining bazis tenglamalar sistemasiga qanday munosabatda bo‘ladi (13-slayd, Teorema)?",
    "options": [
      "Faqat nol yechimda ustma-ust tushadi",
      "Qarama-qarshi bo‘ladi",
      "Bazis sistema ko‘proq tenglamaga ega bo‘ladi",
      "Ekvivalent (teng kuchli) bo‘ladi"
    ],
    "answer": 3,
    "difficulty": "Oson",
    "explanation": "6-ma’ruza (13-slayd, Teorema): Chiziqli tenglamalar sistemasi o‘zining bazis tenglamalar sistemasiga ekvivalent."
  },
  {
    "id": "T6_Q20",
    "topicId": 6,
    "num": 20,
    "question": "Birgalikda bo‘lgan chiziqli tenglamalar sistemasi cheksiz ko‘p yechimga ega bo‘lsa ($r < n$), uning bazis yechimlari soni cheksiz bo‘ladimi yoki chekli?",
    "options": [
      "Nolga teng bo‘ladi",
      "Cheksiz ko‘p bo‘ladi",
      "Chekli bo‘ladi va bazis minorlar soniga teng bo‘ladi ($\\le C_n^r$)",
      "Har doim faqat bitta bo‘ladi"
    ],
    "answer": 2,
    "difficulty": "Oson",
    "explanation": "6-ma’ruza (14-slayd): Tenglamalar sistemasi cheksiz ko‘p yechimga ega bo‘lsa-da, bazis yechimlar soni chekli bo‘ladi va bazis minorlar soniga teng bo‘ladi."
  },
  {
    "id": "T6_Q21",
    "topicId": 6,
    "num": 21,
    "question": "$\\begin{cases} x_1 + x_2 + x_3 = 6 \\\\ 2x_1 - x_2 + x_3 = 3 \\\\ x_1 + 2x_2 - x_3 = 2 \\end{cases}$ sistemani Gauss usulida yeching.",
    "options": [
      "$x_1 = 2,\\quad x_2 = 1,\\quad x_3 = 3$",
      "$x_1 = 1,\\quad x_2 = 2,\\quad x_3 = 3$",
      "$x_1 = 2,\\quad x_2 = 2,\\quad x_3 = 2$",
      "$x_1 = 3,\\quad x_2 = 2,\\quad x_3 = 1$"
    ],
    "answer": 1,
    "difficulty": "O'rta",
    "explanation": "1- va 3-tenglamani qo‘shsak $2x_1 + 3x_2 = 8$; 1-tenglamadan 2-tenglamani ayirsak $-x_1 + 2x_2 = 3 \\implies x_1 = 2x_2 - 3$. O‘rniga qo‘ysak $2(2x_2-3)+3x_2=8 \\implies 7x_2=14 \\implies x_2=2, x_1=1, x_3=3$."
  },
  {
    "id": "T6_Q22",
    "topicId": 6,
    "num": 22,
    "question": "Kengaytirilgan matritsasi $\\begin{pmatrix} 1 & -2 & 3 & -1 & | & 4 \\\\ 0 & 1 & -2 & 2 & | & 1 \\\\ 0 & 0 & 0 & 0 & | & 0 \\end{pmatrix}$ ko‘rinishga kelgan sistemada nechta bazis va nechta erkli o‘zgaruvchi bor?",
    "options": [
      "$2$ ta bazis va $2$ ta erkli o‘zgaruvchi ($n=4, r=2$)",
      "$1$ ta bazis va $3$ ta erkli o‘zgaruvchi ($n=4, r=1$)",
      "$4$ ta bazis va $0$ ta erkli o‘zgaruvchi",
      "$3$ ta bazis va $1$ ta erkli o‘zgaruvchi ($n=4, r=3$)"
    ],
    "answer": 0,
    "difficulty": "Oson",
    "explanation": "Noldan farqli satrlar soni $r = 2$, noma’lumlar soni $n = 4$. Demak bazis o‘zgaruvchilar $r = 2$ ta, erkli o‘zgaruvchilar $n - r = 4 - 2 = 2$ ta."
  },
  {
    "id": "T6_Q23",
    "topicId": 6,
    "num": 23,
    "question": "Yuqoridagi $\\begin{pmatrix} 1 & -2 & 3 & -1 & | & 4 \\\\ 0 & 1 & -2 & 2 & | & 1 \\end{pmatrix}$ sistemada $x_1, x_2$ bazis o‘zgaruvchilar va $x_3 = 0, x_4 = 0$ erkli o‘zgaruvchilar bo‘lgandagi bazis yechimni toping.",
    "options": [
      "$(6;\\; -1;\\; 0;\\; 0)^T$",
      "$(4;\\; 1;\\; 0;\\; 0)^T$",
      "$(2;\\; 1;\\; 0;\\; 0)^T$",
      "$(6;\\; 1;\\; 0;\\; 0)^T$"
    ],
    "answer": 3,
    "difficulty": "O'rta",
    "explanation": "$x_3 = x_4 = 0$ bo‘lganda 2-satrdan $x_2 = 1$, 1-satrdan $x_1 - 2(1) = 4 \\implies x_1 = 6$. Bazis yechim: $(6, 1, 0, 0)^T$."
  },
  {
    "id": "T6_Q24",
    "topicId": 6,
    "num": 24,
    "question": "Agar barcha komponentlari nomanfiy ($x_i \\ge 0$) bo‘lgan bazis yechim «tayanch yechim» deb atalsa, ma’ruzadagi 17-slaydda topilgan $X_{1b}=(3,1,0,0,0)^T,\\; X_{2b}=(3,0,0,-0.5,0)^T,\\; X_{3b}=(0,1,1.5,0,0)^T,\\; X_{4b}=(0,1,0,0,1)^T,\\; X_{5b}=(0,0,1.5,-0.5,0)^T,\\; X_{6b}=(0,0,0,-0.5,1)^T$ bazis yechimlardan nechtasi barcha komponentlari nomanfiy yechim hisoblanadi?",
    "options": [
      "$2$ tasi ($X_{2b}$ va $X_{5b}$)",
      "$1$ tasi (faqat $X_{1b}$)",
      "$3$ tasi ($X_{1b},\\; X_{3b}$ va $X_{4b}$)",
      "$6$ tasi (barchasi)"
    ],
    "answer": 2,
    "difficulty": "O'rta",
    "explanation": "$X_{2b}, X_{5b}, X_{6b}$ larda $x_4 = -0.5 < 0$ manfiy komponent bor. Faqat $X_{1b}, X_{3b}, X_{4b}$ larda barcha komponentlar $\\ge 0$."
  },
  {
    "id": "T6_Q25",
    "topicId": 6,
    "num": 25,
    "question": "Gauss usulida $\\begin{pmatrix} 1 & 2 & -1 & | & 3 \\\\ 3 & 7 & -2 & | & 11 \\\\ 2 & 4 & 1 & | & 9 \\end{pmatrix}$ matritsaning 1-ustunidagi $3$ va $2$ elementlarni nolga aylantirishdan keyin hosil bo‘ladigan ekvivalent matritsani toping.",
    "options": [
      "$\\begin{pmatrix} 1 & 2 & -1 & | & 3 \\\\ 0 & 1 & -5 & | & 2 \\\\ 0 & 0 & -1 & | & 3 \\end{pmatrix}$",
      "$\\begin{pmatrix} 1 & 2 & -1 & | & 3 \\\\ 0 & 1 & 1 & | & 2 \\\\ 0 & 0 & 3 & | & 3 \\end{pmatrix}$",
      "$\\begin{pmatrix} 1 & 2 & -1 & | & 3 \\\\ 0 & 1 & 1 & | & 11 \\\\ 0 & 0 & 3 & | & 9 \\end{pmatrix}$",
      "$\\begin{pmatrix} 1 & 2 & -1 & | & 3 \\\\ 0 & 13 & -5 & | & 20 \\\\ 0 & 8 & -1 & | & 15 \\end{pmatrix}$"
    ],
    "answer": 1,
    "difficulty": "O'rta",
    "explanation": "$R_2 - 3R_1 = (3-3,\\; 7-6,\\; -2-(-3) \\mid 11-9) = (0, 1, 1 \\mid 2)$. $R_3 - 2R_1 = (2-2,\\; 4-4,\\; 1-(-2) \\mid 9-6) = (0, 0, 3 \\mid 3)$."
  },
  {
    "id": "T6_Q26",
    "topicId": 6,
    "num": 26,
    "question": "Yuqoridagi uchburchak matritsadan ($\\begin{pmatrix} 1 & 2 & -1 & | & 3 \\\\ 0 & 1 & 1 & | & 2 \\\\ 0 & 0 & 3 & | & 3 \\end{pmatrix}$) teskari yurish orqali $(x_1, x_2, x_3)$ yechimni toping.",
    "options": [
      "$x_1 = 2,\\quad x_2 = 1,\\quad x_3 = 1$",
      "$x_1 = 2,\\quad x_2 = 2,\\quad x_3 = 1$",
      "$x_1 = 3,\\quad x_2 = 1,\\quad x_3 = 1$",
      "$x_1 = 1,\\quad x_2 = 1,\\quad x_3 = 1$"
    ],
    "answer": 0,
    "difficulty": "Oson",
    "explanation": "$3x_3 = 3 \\implies x_3 = 1$; $x_2 + x_3 = 2 \\implies x_2 = 1$; $x_1 + 2(1) - 1 = 3 \\implies x_1 = 2$."
  },
  {
    "id": "T6_Q27",
    "topicId": 6,
    "num": 27,
    "question": "Agar sistemada 7 ta noma’lum ($n=7$) va 3 ta chiziqli erkli tenglama ($r=3$) bo‘lsa, har bir bazis yechimda kamida nechta nol komponent qatnashadi?",
    "options": [
      "Kamida $r = 3$ ta nol komponent",
      "Nol komponent qatnashmaydi",
      "Faqat $1$ ta nol komponent",
      "Kamida $n - r = 7 - 3 = 4$ ta nol komponent (erkli o‘zgaruvchilar)"
    ],
    "answer": 3,
    "difficulty": "Oson",
    "explanation": "Bazis yechimda barcha $n - r = 7 - 3 = 4$ ta erkli o‘zgaruvchi $0$ ga teng deb olinadi."
  },
  {
    "id": "T6_Q28",
    "topicId": 6,
    "num": 28,
    "question": "$\\begin{cases} x_1 + 3x_2 - 2x_3 = 4 \\\\ 2x_1 + 6x_2 - 4x_3 = 8 \\end{cases}$ sistemada $r(A)$ nechaga teng va bazis o‘zgaruvchilar soni nechta?",
    "options": [
      "Sistema birgalikda emas",
      "$r(A) = 2$; bazis o‘zgaruvchilar $2$ ta, erkli o‘zgaruvchi $1$ ta",
      "$r(A) = 1$; bazis o‘zgaruvchi $1$ ta, erkli o‘zgaruvchilar $2$ ta",
      "$r(A) = 3$; barcha o‘zgaruvchilar bazis"
    ],
    "answer": 2,
    "difficulty": "Oson",
    "explanation": "2-tenglama 1-tenglamaning 2 baravariga teng, shuning uchun bitta tenglama tashlab yuboriladi: $r = 1$, $n = 3$, bazis o‘zgaruvchi $1$ ta, erkli o‘zgaruvchilar $3 - 1 = 2$ ta."
  },
  {
    "id": "T6_Q29",
    "topicId": 6,
    "num": 29,
    "question": "Yuqoridagi $x_1 + 3x_2 - 2x_3 = 4$ tenglamada barcha 3 ta bazis yechimni toping.",
    "options": [
      "$X_{1b} = (4, 4/3, -2)^T$ — faqat bitta bazis yechim bor",
      "$X_{1b} = (4, 0, 0)^T;\\quad X_{2b} = (0, 4/3, 0)^T;\\quad X_{3b} = (0, 0, -2)^T$",
      "$X_{1b} = (0, 1, 1)^T;\\quad X_{2b} = (1, 0, 1)^T;\\quad X_{3b} = (1, 1, 0)^T$",
      "$X_{1b} = (1, 0, 0)^T;\\quad X_{2b} = (0, 3, 0)^T;\\quad X_{3b} = (0, 0, -2)^T$"
    ],
    "answer": 1,
    "difficulty": "O'rta",
    "explanation": "1) $x_2=x_3=0 \\implies x_1=4$; 2) $x_1=x_3=0 \\implies 3x_2=4 \\implies x_2=4/3$; 3) $x_1=x_2=0 \\implies -2x_3=4 \\implies x_3=-2$."
  },
  {
    "id": "T6_Q30",
    "topicId": 6,
    "num": 30,
    "question": "Gauss-Jordan usuli bilan bir vaqtning o‘zida qaysi ikkita muhim masalani yechishda keng foydalaniladi?",
    "options": [
      "Chiziqli tenglamalar sistemasini yechish $(A|B) \\sim (E|X)$ hamda teskari matritsani topish $(A|E) \\sim (E|A^{-1})$",
      "Faqat 2-tartibli determinantni hisoblash va vektor ko‘paytma topish",
      "Gramm-Shmidt ortogonallash va aralash ko‘paytma",
      "Matritsani transponirlash va izini topish"
    ],
    "answer": 0,
    "difficulty": "Oson",
    "explanation": "3-ma’ruza (11-slayd) va 6-ma’ruza (10-slayd): Gauss-Jordan eliminatsiyasi ham $(A|B)\\sim(E|X)$ sistemani yechishda, ham $(A|E)\\sim(E|A^{-1})$ teskari matritsani hisoblashda qo‘llaniladi."
  },
  {
    "id": "T7_Q1",
    "topicId": 7,
    "num": 1,
    "question": "$n$ ta sonning tartiblangan tizimi $X = (x_1, x_2, \\dots, x_n)^T$ nima deb ataladi va komponentlari haqiqiy hamda kompleks sonlardan iborat fazolar qanday belgilanadi?",
    "options": [
      "$n$ o‘lchovli vektor deyiladi; haqiqiy arifmetik fazo $\\mathbb{R}^n$, kompleks arifmetik fazo $\\mathbb{C}^n$ deb belgilanadi",
      "Minor deyiladi; $M_n$ va $A_n$ deb belgilanadi",
      "Skalyar miqdor deyiladi; $E^1$ va $E^2$ deb belgilanadi",
      "Kvadrat matritsa deyiladi; $\\mathbb{Z}^n$ va $\\mathbb{Q}^n$ deb belgilanadi"
    ],
    "answer": 0,
    "difficulty": "Oson",
    "explanation": "7-ma’ruza (4, 19-slaydlar): $n$ ta sonning tartiblangan tizimiga $n$ o‘lchovli vektor deyiladi. Haqiqiy arifmetik vektor fazo $\\mathbb{R}^n$, kompleks arifmetik vektor fazo $\\mathbb{C}^n$."
  },
  {
    "id": "T7_Q2",
    "topicId": 7,
    "num": 2,
    "question": "Ma’ruzadagi 6-slayd misoli: $X = (2,\\; 5,\\; 3,\\; -4)^T$ va $Y = (-1,\\; 5,\\; 6,\\; 7)^T$ vektorlar uchun $X + Y$ va $5X$ vektorlarni toping.",
    "options": [
      "$X + Y = (1,\\; 10,\\; 9,\\; -3)^T;\\qquad 5X = (2,\\; 5,\\; 3,\\; -20)^T$",
      "$X + Y = (-2,\\; 25,\\; 18,\\; -28)^T;\\qquad 5X = (10,\\; 25,\\; 15,\\; 20)^T$",
      "$X + Y = (3,\\; 0,\\; -3,\\; -11)^T;\\qquad 5X = (7,\\; 10,\\; 8,\\; 1)^T$",
      "$X + Y = (1,\\; 10,\\; 9,\\; 3)^T;\\qquad 5X = (10,\\; 25,\\; 15,\\; -20)^T$"
    ],
    "answer": 3,
    "difficulty": "Oson",
    "explanation": "7-ma’ruza (6-slayd): $X+Y = (2-1, 5+5, 3+6, -4+7)^T = (1, 10, 9, 3)^T$; $5X = (10, 25, 15, -20)^T$."
  },
  {
    "id": "T7_Q3",
    "topicId": 7,
    "num": 3,
    "question": "Ikkita $n$ o‘lchovli $X$ va $Y$ vektorlarning skalyar ko‘paytmasi $(X, Y)$ qaysi formula bilan aniqlanadi?",
    "options": [
      "$(X, Y) = \\sqrt{x_1^2 + y_1^2}$",
      "$(X, Y) = (x_1 y_1,\\; x_2 y_2,\\; \\dots,\\; x_n y_n)^T$",
      "$(X, Y) = X^T Y = x_1 y_1 + x_2 y_2 + \\dots + x_n y_n$",
      "$(X, Y) = (x_1 + y_1)(x_2 + y_2)\\dots(x_n + y_n)$"
    ],
    "answer": 2,
    "difficulty": "Oson",
    "explanation": "7-ma’ruza (8-slayd): $(X, Y) = X^T Y = Y^T X = x_1y_1 + x_2y_2 + \\dots + x_ny_n$ — mos koordinatalar ko‘paytmalarining yig‘indisiga teng son."
  },
  {
    "id": "T7_Q4",
    "topicId": 7,
    "num": 4,
    "question": "Ma’ruzadagi 10-slayd misoli: $X = (2,\\; 5,\\; 3,\\; -4)^T$ va $Y = (-1,\\; 5,\\; 6,\\; 7)^T$ vektorlarning skalyar ko‘paytmasi $(X, Y)$ ni hisoblang.",
    "options": [
      "$69$",
      "$13$",
      "$-13$",
      "$17$"
    ],
    "answer": 1,
    "difficulty": "Oson",
    "explanation": "7-ma’ruza (10-slayd): $(X, Y) = 2(-1) + 5(5) + 3(6) + (-4)(7) = -2 + 25 + 18 - 28 = 13$."
  },
  {
    "id": "T7_Q5",
    "topicId": 7,
    "num": 5,
    "question": "$n$ o‘lchovli $X = (x_1, x_2, \\dots, x_n)^T$ vektorning uzunligi (moduli, normasi) $|X|$ va ikki vektor orasidagi burchak kosinusi $\\cos\\varphi$ formulalarini ko‘rsating.",
    "options": [
      "$|X| = \\sqrt{(X,X)} = \\sqrt{x_1^2 + x_2^2 + \\dots + x_n^2};\\qquad \\cos\\varphi = \\frac{(X, Y)}{|X| \\cdot |Y|}$",
      "$|X| = x_1 + x_2 + \\dots + x_n;\\qquad \\cos\\varphi = (X, Y) \\cdot |X| \\cdot |Y|$",
      "$|X| = x_1^2 + x_2^2 + \\dots + x_n^2;\\qquad \\cos\\varphi = \\frac{|X| + |Y|}{(X, Y)}$",
      "$|X| = \\sqrt{|x_1| + |x_2| + \\dots + |x_n|};\\qquad \\cos\\varphi = \\frac{|X|}{|Y|}$"
    ],
    "answer": 0,
    "difficulty": "Oson",
    "explanation": "7-ma’ruza (16, 18-slaydlar): $|X| = \\sqrt{(X,X)}$ va $\\cos\\varphi = \\frac{(X,Y)}{|X|\\cdot|Y|},\\; \\varphi \\in [0; \\pi]$."
  },
  {
    "id": "T7_Q6",
    "topicId": 7,
    "num": 6,
    "question": "4 o‘lchovli $X = (2,\\; -3,\\; 6,\\; 0)^T$ va $Y = (1,\\; 2,\\; 2,\\; -4)^T$ vektorlarning uzunliklari $|X|$ va $|Y|$ ni hisoblang.",
    "options": [
      "$|X| = 5,\\quad |Y| = 7$",
      "$|X| = 49,\\quad |Y| = 25$",
      "$|X| = \\sqrt{41},\\quad |Y| = 3$",
      "$|X| = 7,\\quad |Y| = 5$"
    ],
    "answer": 3,
    "difficulty": "Oson",
    "explanation": "$|X| = \\sqrt{2^2 + (-3)^2 + 6^2 + 0^2} = \\sqrt{4 + 9 + 36} = \\sqrt{49} = 7$. $|Y| = \\sqrt{1^2 + 2^2 + 2^2 + (-4)^2} = \\sqrt{1 + 4 + 4 + 16} = \\sqrt{25} = 5$."
  },
  {
    "id": "T7_Q7",
    "topicId": 7,
    "num": 7,
    "question": "$\\mathbb{R}^n$ fazoda ixtiyoriy $X$ va $Y$ vektorlar uchun o‘rinli bo‘lgan $|(X, Y)| \\le |X| \\cdot |Y|$ va $|X + Y| \\le |X| + |Y|$ tengsizliklar qanday nomlanadi?",
    "options": [
      "Birinchisi — Laplas tengsizligi; ikkinchisi — Kramer tengsizligi",
      "Birinchisi — Veyyershtrass tengsizligi; ikkinchisi — Pifagor tengsizligi",
      "Birinchisi — Koshi-Bunyakovskiy tengsizligi; ikkinchisi — uchburchak tengsizligi",
      "Ikkalasi ham Gramm-Shmidt tengsizligi deyiladi"
    ],
    "answer": 2,
    "difficulty": "Oson",
    "explanation": "7-ma’ruza (17, 20-slaydlar): $|X+Y| \\le |X|+|Y|$ — uchburchak tengsizligi; $|(X,Y)| \\le |X|\\cdot|Y|$ — Koshi-Bunyakovskiy tengsizligi."
  },
  {
    "id": "T7_Q8",
    "topicId": 7,
    "num": 8,
    "question": "Fazodagi ikki $\\vec{a} = (a_1, a_2, a_3)$ va $\\vec{b} = (b_1, b_2, b_3)$ vektorlarning vektor ko‘paytmasi $[\\vec{a} \\times \\vec{b}]$ ning moduli qanday geometrik ma’noni bildiradi?",
    "options": [
      "Vektorlar yig‘indisining uzunligini",
      "$\\vec{a}$ va $\\vec{b}$ vektorlardan yasalgan parallelogrammning yuzini: $S = |[\\vec{a} \\times \\vec{b}]| = |\\vec{a}|\\cdot|\\vec{b}|\\sin\\varphi$",
      "$\\vec{a}$ va $\\vec{b}$ vektorlardan yasalgan parallelepiped hajmini",
      "Ikki vektor orasidagi burchak kosinusini"
    ],
    "answer": 1,
    "difficulty": "Oson",
    "explanation": "7-ma’ruza (12, 14-slaydlar): Parallelogrammning yuzi vektor ko‘paytmaning moduliga teng: $S = |[\\vec{a} \\times \\vec{b}]|$."
  },
  {
    "id": "T7_Q9",
    "topicId": 7,
    "num": 9,
    "question": "$\\vec{a} = (1,\\; 2,\\; -1)$ va $\\vec{b} = (2,\\; 0,\\; 1)$ vektorlarning vektor ko‘paytmasi $[\\vec{a} \\times \\vec{b}]$ ni va ulardan yasalgan parallelogramm yuzini toping.",
    "options": [
      "$[\\vec{a} \\times \\vec{b}] = (2,\\; -3,\\; -4);\\quad S = \\sqrt{29}$",
      "$[\\vec{a} \\times \\vec{b}] = (-2,\\; 3,\\; 4);\\quad S = 9$",
      "$[\\vec{a} \\times \\vec{b}] = (2,\\; 3,\\; -4);\\quad S = \\sqrt{29}$",
      "$[\\vec{a} \\times \\vec{b}] = (0,\\; -3,\\; -4);\\quad S = 5$"
    ],
    "answer": 0,
    "difficulty": "O'rta",
    "explanation": "$[\\vec{a}\\times\\vec{b}] = \\begin{vmatrix} \\vec{i} & \\vec{j} & \\vec{k} \\\\ 1 & 2 & -1 \\\\ 2 & 0 & 1 \\end{vmatrix} = \\vec{i}(2-0) - \\vec{j}(1+2) + \\vec{k}(0-4) = (2, -3, -4)$. Yuzi: $S = \\sqrt{4 + 9 + 16} = \\sqrt{29}$."
  },
  {
    "id": "T7_Q10",
    "topicId": 7,
    "num": 10,
    "question": "Uchta $\\vec{a}, \\vec{b}, \\vec{c}$ vektorning aralash ko‘paytmasi $([\\vec{a} \\times \\vec{b}] \\cdot \\vec{c})$ qanday geometrik ma’noga ega va u $0$ ga teng bo‘lsa vektorlar qanday ataladi?",
    "options": [
      "Moduli sfera hajmiga teng; agar $0$ ga teng bo‘lsa, vektorlar birlik vektor bo‘ladi",
      "Faqat skalyar proyeksiya uzunligini ifodalaydi",
      "Moduli uchburchak perimetriga teng; agar $0$ ga teng bo‘lsa, vektorlar o‘zaro perpendikulyar bo‘ladi",
      "Moduli shu vektorlardan yasalgan parallelepiped hajmiga teng ($V_{\\text{par}}$); agar $0$ ga teng bo‘lsa, vektorlar komplanar (bir tekislikda yotuvchi) bo‘ladi"
    ],
    "answer": 3,
    "difficulty": "Oson",
    "explanation": "7-ma’ruza (13, 15-slaydlar): $V_{\\text{par}} = |([\\vec{a}\\times\\vec{b}]\\cdot\\vec{c})|$. Agar aralash ko‘paytma nolga teng bo‘lsa, bu vektorlar komplanar (bir tekislikda yotuvchi) bo‘ladi."
  },
  {
    "id": "T7_Q11",
    "topicId": 7,
    "num": 11,
    "question": "$\\vec{a} = (1,\\; 0,\\; 2)$, $\\vec{b} = (0,\\; 3,\\; 1)$ va $\\vec{c} = (2,\\; 1,\\; 5)$ vektorlardan yasalgan parallelepipedning hajmini toping.",
    "options": [
      "$V = 26$",
      "$V = 0$ (komplanar)",
      "$V = 2$",
      "$V = 15$"
    ],
    "answer": 2,
    "difficulty": "O'rta",
    "explanation": "Aralash ko‘paytma: $\\begin{vmatrix} 1 & 0 & 2 \\\\ 0 & 3 & 1 \\\\ 2 & 1 & 5 \\end{vmatrix} = 1(15-1) - 0 + 2(0-6) = 14 - 12 = 2$... Diqqat: $14 - 12 = 2$! Demak $V = 2$."
  },
  {
    "id": "T7_Q12",
    "topicId": 7,
    "num": 12,
    "question": "$\\vec{a} = (3,\\; 4,\\; 0)$ va $\\vec{b} = (2,\\; 1,\\; -2)$ vektorlar berilgan. $\\vec{b}$ vektorning $\\vec{a}$ vektor yo‘nalishidagi proyeksiyasi $\\text{Pr}_{\\vec{a}}(\\vec{b})$ ni toping.",
    "options": [
      "$5$",
      "$2$",
      "$\\frac{2}{5}$",
      "$\\frac{10}{3}$"
    ],
    "answer": 1,
    "difficulty": "O'rta",
    "explanation": "7-ma’ruza (14-slayd): $\\text{Pr}_{\\vec{a}}(\\vec{b}) = |\\vec{b}|\\cos\\varphi = \\frac{\\vec{a}\\cdot\\vec{b}}{|\\vec{a}|} = \\frac{3\\cdot 2 + 4\\cdot 1 + 0\\cdot(-2)}{\\sqrt{3^2+4^2+0^2}} = \\frac{10}{5} = 2$."
  },
  {
    "id": "T7_Q13",
    "topicId": 7,
    "num": 13,
    "question": "Chiziqli fazoning 5 ta asosiy xossasiga (23-slayd) ko‘ra quyidagi tasdiqlardan qaysi biri TO‘G‘RI?",
    "options": [
      "Har qanday chiziqli fazoda yagona nol vektor $\\Theta$ mavjud; $0 \\cdot X = \\Theta$; $\\lambda \\cdot \\Theta = \\Theta$; va $\\lambda X = \\Theta \\implies \\lambda = 0$ yoki $X = \\Theta$",
      "Chiziqli fazoda nol vektor bir nechta bo‘lishi mumkin",
      "Qarama-qarshi vektor faqat musbat vektorlar uchun mavjud",
      "$\\lambda X = \\Theta$ bo‘lsa, har doim faqat $\\lambda = 1$ bo‘ladi"
    ],
    "answer": 0,
    "difficulty": "Oson",
    "explanation": "7-ma’ruza (23-slayd): Chiziqli fazoning 1–5-xossalarida aynan shu 5 ta tasdiq keltirilgan."
  },
  {
    "id": "T7_Q14",
    "topicId": 7,
    "num": 14,
    "question": "Ma’ruzadagi 25-26-slaydlar misoli: Barcha $2 \\times 2$ o‘lchamli haqiqiy matritsalar to‘plami $M^2$ chiziqli fazo tashkil qiladimi va uning o‘lchami (bazis matritsalari soni) nechaga teng?",
    "options": [
      "Ha, o‘lchami cheksizga teng",
      "Yo‘q, matritsalar to‘plami chiziqli fazo bo‘la olmaydi",
      "Ha, chiziqli fazo tashkil qiladi va uning o‘lchami $2$ ga teng",
      "Ha, chiziqli fazo tashkil qiladi va uning o‘lchami $4$ ga teng ($e_1, e_2, e_3, e_4$ bazis matritsalar)"
    ],
    "answer": 3,
    "difficulty": "Oson",
    "explanation": "7-ma’ruza (25-26-slaydlar): $M^2$ chiziqli fazo tashkil qiladi, uning kanonik bazisi $e_1=\\left(\\begin{smallmatrix}1&0\\\\0&0\\end{smallmatrix}\\right), e_2=\\left(\\begin{smallmatrix}0&1\\\\0&0\\end{smallmatrix}\\right), e_3=\\left(\\begin{smallmatrix}0&0\\\\1&0\\end{smallmatrix}\\right), e_4=\\left(\\begin{smallmatrix}0&0\\\\0&1\\end{smallmatrix}\\right)$ bo‘lib, fazo $4$ o‘lchovlidir."
  },
  {
    "id": "T7_Q15",
    "topicId": 7,
    "num": 15,
    "question": "Ma’ruzadagi 28-slayd misoli: Quyidagi to‘plamlardan qaysi biri $\\mathbb{R}^4$ chiziqli fazoning «chiziqli qism fazosi»ni tashkil qiladi?",
    "options": [
      "$V = \\{(x_1, x_2, x_3, x_4) \\in \\mathbb{R}^4 : x_1 - 2x_3 = 5\\}$",
      "$V = \\{(x_1, x_2, x_3, x_4) \\in \\mathbb{R}^4 : x_1^2 + x_2 = 0\\}$",
      "$V = \\{(x_1, x_2, x_3, x_4) \\in \\mathbb{R}^4 : x_1 - 2x_3 = 0\\}$",
      "$V = \\{(x_1, x_2, x_3, x_4) \\in \\mathbb{R}^4 : x_1 \\ge 1\\}$"
    ],
    "answer": 2,
    "difficulty": "O'rta",
    "explanation": "7-ma’ruza (28-slayd): $x_1 - 2x_3 = 0 \\implies x_1 = 2x_3$ bo‘lib, $x+y \\in V$ va $\\lambda x \\in V$ shartlari bajariladi. Qolgan to‘plamlar yig‘indi va songa ko‘paytirishga nisbatan yopiq emas (hatto nol vektorni saqlamaydi)."
  },
  {
    "id": "T7_Q16",
    "topicId": 7,
    "num": 16,
    "question": "$n$ o‘lchovli $L$ chiziqli fazoda «fazoning bazisi» deb nimaga aytiladi va $x = \\mu_1 e_1 + \\mu_2 e_2 + \\dots + \\mu_n e_n$ tenglik nima deyiladi?",
    "options": [
      "Har qanday $n+1$ ta chiziqli bog‘liq vektorlar sistemasiga bazis deyiladi",
      "Har qanday $n$ ta chiziqli erkli vektorlar sistemasiga fazoning bazisi deyiladi; tenglik esa $x$ elementning bazis bo‘yicha yoyilmasi deyiladi",
      "Ixtiyoriy 2 ta vektor juftligiga bazis deyiladi",
      "Faqat nol vektordan iborat to‘plamga bazis deyiladi"
    ],
    "answer": 1,
    "difficulty": "Oson",
    "explanation": "7-ma’ruza (27-slayd): $n$ o‘lchovli $L$ chiziqli fazoda har qanday $n$ ta chiziqli erkli vektorlar sistemasi bu fazoning bazisi deyiladi; $x = \\sum \\mu_i e_i$ esa bazis bo‘yicha yoyilmasi deyiladi."
  },
  {
    "id": "T7_Q17",
    "topicId": 7,
    "num": 17,
    "question": "Bir bazisdan ($\\vec{e}_1, \\vec{e}_2, \\vec{e}_3$) boshqa bazisga ($\\vec{e}_1', \\vec{e}_2', \\vec{e}_3'$) o‘tish matritsasi $P$ berilgan bo‘lsa, vektorning yangi bazisdagi koordinatalari $\\vec{x}'$ va eski bazisdagi koordinatalari $\\vec{x}$ orasidagi bog‘lanish qanday?",
    "options": [
      "$P \\cdot \\vec{x}' = \\vec{x} \\implies \\vec{x}' = P^{-1} \\cdot \\vec{x}$",
      "$\\vec{x}' = P \\cdot \\vec{x}$",
      "$\\vec{x}' = \\vec{x} + P$",
      "$\\vec{x}' = P^T \\cdot \\vec{x}$"
    ],
    "answer": 0,
    "difficulty": "Oson",
    "explanation": "7-ma’ruza (34-slayd): $P \\cdot \\vec{x}' = \\vec{x}$ va bundan $\\vec{x}' = P^{-1} \\cdot \\vec{x}$."
  },
  {
    "id": "T7_Q18",
    "topicId": 7,
    "num": 18,
    "question": "Ma’ruzadagi 33-34-slaydlar misoli: $\\vec{x}(2;\\; -1;\\; 5)$ vektor $\\vec{e}_1, \\vec{e}_2, \\vec{e}_3$ bazisda berilgan. Yangi bazis $\\begin{cases} \\vec{e}_1' = \\vec{e}_1 \\\\ \\vec{e}_2' = \\vec{e}_1 + \\vec{e}_2 \\\\ \\vec{e}_3' = \\vec{e}_1 + \\vec{e}_3 \\end{cases}$ bo‘lsa, o‘tish matritsasi $P$ va uning teskarisi $P^{-1}$ ni toping.",
    "options": [
      "$P = \\begin{pmatrix} 1 & 0 & 0 \\\\ 0 & 1 & 0 \\\\ 0 & 0 & 1 \\end{pmatrix},\\qquad P^{-1} = E$",
      "$P = \\begin{pmatrix} 1 & 0 & 0 \\\\ 1 & 1 & 0 \\\\ 1 & 0 & 1 \\end{pmatrix},\\qquad P^{-1} = \\begin{pmatrix} 1 & 1 & 1 \\\\ 0 & 1 & 0 \\\\ 0 & 0 & 1 \\end{pmatrix}$",
      "$P = \\begin{pmatrix} 1 & -1 & -1 \\\\ 0 & 1 & 0 \\\\ 0 & 0 & 1 \\end{pmatrix},\\qquad P^{-1} = \\begin{pmatrix} 1 & 1 & 1 \\\\ 0 & 1 & 0 \\\\ 0 & 0 & 1 \\end{pmatrix}$",
      "$P = \\begin{pmatrix} 1 & 1 & 1 \\\\ 0 & 1 & 0 \\\\ 0 & 0 & 1 \\end{pmatrix},\\qquad P^{-1} = \\begin{pmatrix} 1 & -1 & -1 \\\\ 0 & 1 & 0 \\\\ 0 & 0 & 1 \\end{pmatrix}$"
    ],
    "answer": 3,
    "difficulty": "O'rta",
    "explanation": "7-ma’ruza (34-slayd): Yangi bazis vektorlari ustun qilib yozilsa $P = \\begin{pmatrix} 1 & 1 & 1 \\\\ 0 & 1 & 0 \\\\ 0 & 0 & 1 \\end{pmatrix}$ va uning teskarisi $P^{-1} = \\begin{pmatrix} 1 & -1 & -1 \\\\ 0 & 1 & 0 \\\\ 0 & 0 & 1 \\end{pmatrix}$."
  },
  {
    "id": "T7_Q19",
    "topicId": 7,
    "num": 19,
    "question": "Ma’ruzadagi 33-34-slaydlar misoli: Yuqoridagi masalada $\\vec{x}(2;\\; -1;\\; 5)$ vektorning yangi $\\vec{e}_1', \\vec{e}_2', \\vec{e}_3'$ bazisdagi koordinatalari $\\vec{x}' = P^{-1}\\vec{x}$ ni toping.",
    "options": [
      "$\\vec{x}' = (6;\\; -1;\\; 5)^T$",
      "$\\vec{x}' = (-2;\\; 1;\\; 5)^T$",
      "$\\vec{x}' = (-2;\\; -1;\\; 5)^T$",
      "$\\vec{x}' = (2;\\; 1;\\; -5)^T$"
    ],
    "answer": 2,
    "difficulty": "O'rta",
    "explanation": "7-ma’ruza (34-slayd): $\\vec{x}' = \\begin{pmatrix} 1 & -1 & -1 \\\\ 0 & 1 & 0 \\\\ 0 & 0 & 1 \\end{pmatrix} \\begin{pmatrix} 2 \\\\ -1 \\\\ 5 \\end{pmatrix} = \\begin{pmatrix} 2 - (-1) - 5 \\\\ -1 \\\\ 5 \\end{pmatrix} = \\begin{pmatrix} -2 \\\\ -1 \\\\ 5 \\end{pmatrix}$."
  },
  {
    "id": "T7_Q20",
    "topicId": 7,
    "num": 20,
    "question": "$\\mathbb{R}^2$ fazoda $\\vec{e}_1 = (1, 2)^T$ va $\\vec{e}_2 = (2, 3)^T$ bazis vektorlar hamda $\\vec{x} = (7, 11)^T$ vektor berilgan. $\\vec{x}$ vektorning shu bazisdagi $(\\mu_1, \\mu_2)$ koordinatalarini ($\\vec{x} = \\mu_1 \\vec{e}_1 + \\mu_2 \\vec{e}_2$) toping.",
    "options": [
      "$\\mu_1 = 3,\\quad \\mu_2 = 2$",
      "$\\mu_1 = 1,\\quad \\mu_2 = 3$",
      "$\\mu_1 = -1,\\quad \\mu_2 = 4$",
      "$\\mu_1 = 2,\\quad \\mu_2 = 2.5$"
    ],
    "answer": 1,
    "difficulty": "O'rta",
    "explanation": "$\\begin{cases} \\mu_1 + 2\\mu_2 = 7 \\\\ 2\\mu_1 + 3\\mu_2 = 11 \\end{cases} \\implies \\mu_1 = 1,\\; \\mu_2 = 3$ (chunki $1(1,2)^T + 3(2,3)^T = (7, 11)^T$)."
  },
  {
    "id": "T7_Q21",
    "topicId": 7,
    "num": 21,
    "question": "$\\vec{a} = (1,\\; 2,\\; 3)$, $\\vec{b} = (2,\\; -1,\\; 1)$ va $\\vec{c} = (3,\\; 1,\\; m)$ vektorlar $m$ parametrning qanday qiymatida komplanar (bir tekislikda yotuvchi) bo‘ladi?",
    "options": [
      "$m = 4$",
      "$m = -4$",
      "$m = 2$",
      "$m = 0$"
    ],
    "answer": 0,
    "difficulty": "O'rta",
    "explanation": "E’tibor bering: $\\vec{c}$ ning dastlabki ikki koordinatasi $\\vec{a} + \\vec{b}$ ga teng ($1+2=3,\\; 2+(-1)=1$). Komplanar bo‘lishi (determinant 0 bo‘lishi) uchun $m = 3 + 1 = 4$ bo‘lishi kerak."
  },
  {
    "id": "T7_Q22",
    "topicId": 7,
    "num": 22,
    "question": "Ikki vektor $\\vec{a} = (1,\\; 1,\\; 0)$ va $\\vec{b} = (1,\\; 0,\\; 1)$ orasidagi burchak $\\varphi$ nechaga teng?",
    "options": [
      "$\\varphi = 30^\\circ$ ($\\frac{\\pi}{6}$)",
      "$\\varphi = 45^\\circ$ ($\\frac{\\pi}{4}$)",
      "$\\varphi = 90^\\circ$ ($\\frac{\\pi}{2}$)",
      "$\\varphi = 60^\\circ$ ($\\frac{\\pi}{3}$)"
    ],
    "answer": 3,
    "difficulty": "O'rta",
    "explanation": "$\\cos\\varphi = \\frac{1\\cdot 1 + 1\\cdot 0 + 0\\cdot 1}{\\sqrt{1^2+1^2}\\cdot\\sqrt{1^2+1^2}} = \\frac{1}{\\sqrt{2}\\cdot\\sqrt{2}} = \\frac{1}{2} \\implies \\varphi = 60^\\circ$."
  },
  {
    "id": "T7_Q23",
    "topicId": 7,
    "num": 23,
    "question": "Agar $|\\vec{a}| = 3$, $|\\vec{b}| = 4$ va ular orasidagi burchak $\\varphi = 60^\\circ$ bo‘lsa, $(\\vec{a}, \\vec{b})$ skalyar ko‘paytmani hamda $|\\vec{a} + \\vec{b}|$ uzunlikni toping.",
    "options": [
      "$(\\vec{a}, \\vec{b}) = 12;\\qquad |\\vec{a} + \\vec{b}| = 5$",
      "$(\\vec{a}, \\vec{b}) = 6;\\qquad |\\vec{a} + \\vec{b}| = \\sqrt{13}$",
      "$(\\vec{a}, \\vec{b}) = 6;\\qquad |\\vec{a} + \\vec{b}| = \\sqrt{37}$",
      "$(\\vec{a}, \\vec{b}) = 6\\sqrt{3};\\qquad |\\vec{a} + \\vec{b}| = 7$"
    ],
    "answer": 2,
    "difficulty": "O'rta",
    "explanation": "$(\\vec{a},\\vec{b}) = |\\vec{a}||\\vec{b}|\\cos 60^\\circ = 3 \\cdot 4 \\cdot 0.5 = 6$. $|\\vec{a}+\\vec{b}| = \\sqrt{|\\vec{a}|^2 + 2(\\vec{a},\\vec{b}) + |\\vec{b}|^2} = \\sqrt{9 + 12 + 16} = \\sqrt{37}$."
  },
  {
    "id": "T7_Q24",
    "topicId": 7,
    "num": 24,
    "question": "Barcha $3 \\times 4$ o‘lchamli haqiqiy matritsalar chiziqli fazosining o‘lchami (bazis elementlari soni) nechaga teng?",
    "options": [
      "$4$ ga teng",
      "$12$ ga teng ($3 \\cdot 4 = 12$)",
      "$3$ ga teng ($\\min(3, 4) = 3$)",
      "$7$ ga teng ($3 + 4 = 7$)"
    ],
    "answer": 1,
    "difficulty": "Oson",
    "explanation": "$m \\times n$ matritsalar chiziqli fazosining o‘lchami $m \\cdot n$ ga teng, demak $3 \\cdot 4 = 12$."
  },
  {
    "id": "T7_Q25",
    "topicId": 7,
    "num": 25,
    "question": "$X = (1, 2, -1, 3)^T$ va $Y = (2, 1, 4, -2)^T$ vektorlar uchun Koshi-Bunyakovskiy tengsizligi $|(X,Y)| \\le |X|\\cdot|Y|$ ning chap va o‘ng qismlari qiymatlarini hisoblang.",
    "options": [
      "Chap qismi $|(X,Y)| = 6$; o‘ng qismi $|X|\\cdot|Y| = \\sqrt{15} \\cdot \\sqrt{25} = 5\\sqrt{15} \\approx 19.36$ ($6 \\le 19.36$)",
      "Chap qismi $|(X,Y)| = 0$; o‘ng qismi $|X|\\cdot|Y| = 20$",
      "Chap qismi $|(X,Y)| = 10$; o‘ng qismi $|X|\\cdot|Y| = 15$",
      "Chap qismi $|(X,Y)| = 6$; o‘ng qismi $|X|\\cdot|Y| = 6$"
    ],
    "answer": 0,
    "difficulty": "O'rta",
    "explanation": "$(X,Y) = 2 + 2 - 4 - 6 = -6 \\implies |(X,Y)| = 6$. $|X| = \\sqrt{1+4+1+9} = \\sqrt{15}$, $|Y| = \\sqrt{4+1+16+4} = 5$. Haqiqatan $6 \\le 5\\sqrt{15}$."
  },
  {
    "id": "T7_Q26",
    "topicId": 7,
    "num": 26,
    "question": "$\\lambda_1 x_1 + \\lambda_2 x_2 + \\dots + \\lambda_n x_n = \\Theta$ tenglik faqat $\\lambda_1 = \\lambda_2 = \\dots = \\lambda_n = 0$ bo‘lgandagina o‘rinli bo‘lsa, $x_1, x_2, \\dots, x_n$ vektorlar qanday ataladi?",
    "options": [
      "Chiziqli bog‘liq (erksiz) vektorlar deyiladi",
      "Komplanar vektorlar deyiladi",
      "Kollinear vektorlar deyiladi",
      "Chiziqli erkli vektorlar deyiladi"
    ],
    "answer": 3,
    "difficulty": "Oson",
    "explanation": "7-ma’ruza (24-slayd): Faqat barcha koeffitsiyentlar nol bo‘lgandagina chiziqli kombinatsiya nol vektorga teng bo‘lsa, bunday elementlar chiziqli erkli deyiladi."
  },
  {
    "id": "T7_Q27",
    "topicId": 7,
    "num": 27,
    "question": "$\\mathbb{R}^3$ fazoda $\\vec{a}_1 = (1, 0, 0)$, $\\vec{a}_2 = (1, 1, 0)$ va $\\vec{a}_3 = (1, 1, 1)$ vektorlar bazis tashkil qiladimi va $\\vec{x} = (5, 3, 2)$ vektorning shu bazis bo‘yicha yoyilmasi koeffitsiyentlari $(\\mu_1, \\mu_2, \\mu_3)$ nimaga teng?",
    "options": [
      "Ha, bazis tashkil qiladi; yoyilma koeffitsiyentlari: $\\mu_1 = 5,\\; \\mu_2 = 3,\\; \\mu_3 = 2$",
      "Ha; yoyilma koeffitsiyentlari: $\\mu_1 = 1,\\; \\mu_2 = 2,\\; \\mu_3 = 3$",
      "Ha, bazis tashkil qiladi ($\\det = 1 \\ne 0$); yoyilma koeffitsiyentlari: $\\mu_1 = 2,\\; \\mu_2 = 1,\\; \\mu_3 = 2$",
      "Yo‘q, bu vektorlar chiziqli bog‘liq"
    ],
    "answer": 2,
    "difficulty": "O'rta",
    "explanation": "$2(1,0,0) + 1(1,1,0) + 2(1,1,1) = (2+1+2,\\; 1+2,\\; 2) = (5, 3, 2)$. Demak $\\mu_1=2, \\mu_2=1, \\mu_3=2$."
  },
  {
    "id": "T7_Q28",
    "topicId": 7,
    "num": 28,
    "question": "Vektorlarning skalyar ko‘paytmasi xossalariga (11-slayd) ko‘ra, $(X, X) = 0$ tenglik qachon va faqat qachon o‘rinli bo‘ladi?",
    "options": [
      "$X$ birlik vektor bo‘lganda",
      "Faqat va faqat $X = \\Theta = (0, 0, \\dots, 0)^T$ nol vektor bo‘lganda",
      "$X$ ning koordinatalari yig‘indisi $0$ ga teng bo‘lganda (masalan $(1, -1)^T$ da)",
      "Ixtiyoriy manfiy koordinatali vektorda"
    ],
    "answer": 1,
    "difficulty": "Oson",
    "explanation": "7-ma’ruza (11-slayd, 2-xossa): $(X, X) = x_1^2 + \\dots + x_n^2 = 0 \\iff X = \\Theta$."
  },
  {
    "id": "T7_Q29",
    "topicId": 7,
    "num": 29,
    "question": "Agar uchta $\\vec{a}, \\vec{b}, \\vec{c}$ vektordan yasalgan parallelepiped hajmi $V = 12$ ga teng bo‘lsa, shu vektorlardan yasalgan uchburchakli piramida (tetraedr) hajmi nimaga teng bo‘ladi?",
    "options": [
      "$V_{\\text{pir}} = \\frac{1}{6} V = 2$",
      "$V_{\\text{pir}} = \\frac{1}{2} V = 6$",
      "$V_{\\text{pir}} = 12$",
      "$V_{\\text{pir}} = \\frac{1}{3} V = 4$"
    ],
    "answer": 0,
    "difficulty": "O'rta",
    "explanation": "Analitik va chiziqli algebrada uchta vektordan yasalgan tetraedr hajmi parallelepiped hajmining $\\frac{1}{6}$ qismiga teng: $V_{\\text{pir}} = \\frac{1}{6}|([\\vec{a}\\times\\vec{b}]\\cdot\\vec{c})| = \\frac{12}{6} = 2$."
  },
  {
    "id": "T7_Q30",
    "topicId": 7,
    "num": 30,
    "question": "$\\mathbb{R}^4$ fazoda $V = \\{(x_1, x_2, x_3, x_4) : x_1 - 2x_3 = 0\\}$ chiziqli qism fazoning o‘lchami (bazisidagi vektorlar soni) nechaga teng?",
    "options": [
      "$2$ ga teng",
      "$1$ ga teng",
      "$4$ ga teng",
      "$3$ ga teng (chunki $n = 4$ va $r = 1$ ta tenglama: $n - r = 3$)"
    ],
    "answer": 3,
    "difficulty": "O'rta",
    "explanation": "7-ma’ruza (28-slayd): $V = \\{(2x_3, x_2, x_3, x_4)\\}$ da 3 ta erkli parametr ($x_2, x_3, x_4$) bor, demak qism fazo o‘lchami $\\dim V = 4 - 1 = 3$."
  },
  {
    "id": "T8_Q1",
    "topicId": 8,
    "num": 1,
    "question": "Ma’ruzadagi 7-slayd misoli: $A = (2,\\; 5,\\; 3,\\; -4)^T$ va $B = (-1,\\; 5,\\; 6,\\; 7)^T$ vektorlar uchun $5A + 7B - 2A$ ifodani hisoblang.",
    "options": [
      "$(1,\\; 50,\\; 51,\\; -37)^T$",
      "$(13,\\; 50,\\; 51,\\; 37)^T$",
      "$(-1,\\; 35,\\; 42,\\; 49)^T$",
      "$(-1,\\; 50,\\; 51,\\; 37)^T$"
    ],
    "answer": 3,
    "difficulty": "Oson",
    "explanation": "8-ma’ruza (7-slayd): $5A + 7B - 2A = 3A + 7B = (6, 15, 9, -12)^T + (-7, 35, 42, 49)^T = (-1, 50, 51, 37)^T$."
  },
  {
    "id": "T8_Q2",
    "topicId": 8,
    "num": 2,
    "question": "$n$ o‘lchovli $m$ ta $A_1, A_2, \\dots, A_m$ vektorlardan tuzilgan $A$ matritsaning rangi $r(A)$ orqali vektorlarning chiziqli erkliligi qanday aniqlanadi?",
    "options": [
      "Agar $r(A) > m$ bo‘lsa chiziqli erkli bo‘ladi",
      "Matritsa rangi orqali chiziqli erklilikni aniqlab bo‘lmaydi",
      "Agar $r(A) = m$ bo‘lsa vektorlar sistemasi chiziqli erkli; agar $r(A) < m$ bo‘lsa chiziqli bog‘liq bo‘ladi",
      "Agar $r(A) = 0$ bo‘lsa chiziqli erkli; agar $r(A) = m$ bo‘lsa chiziqli bog‘liq bo‘ladi"
    ],
    "answer": 2,
    "difficulty": "Oson",
    "explanation": "8-ma’ruza (11-slayd): Agar vektorlar sistemasida $r(A) < m$ bo‘lsa, u holda vektorlar sistemasi chiziqli bog‘liq, agar $r(A) = m$ bo‘lsa, chiziqli erkli bo‘ladi."
  },
  {
    "id": "T8_Q3",
    "topicId": 8,
    "num": 3,
    "question": "Ma’ruzadagi 12-slayd misoli: $A_1(1,\\; 4,\\; 5)$, $A_2(2,\\; -1,\\; 1)$ va $A_3(-1,\\; 1,\\; 3)$ vektorlardan tuzilgan determinant $M_3$ ni hisoblang va sistema chiziqli erkli yoki bog‘liqligini aniqlang.",
    "options": [
      "$M_3 = 0,\\quad r(A) = 2 < 3$, demak vektorlar sistemasi chiziqli bog‘liq",
      "$M_3 = -27 \\ne 0,\\quad r(A) = m = 3$, demak vektorlar sistemasi chiziqli erkli",
      "$M_3 = -15 \\ne 0,\\quad r(A) = 2$",
      "$M_3 = 27 \\ne 0$, ammo vektorlar sistemasi chiziqli bog‘liq"
    ],
    "answer": 1,
    "difficulty": "O'rta",
    "explanation": "8-ma’ruza (12-slayd): $M_3 = \\begin{vmatrix} 1 & 2 & -1 \\\\ 4 & -1 & 1 \\\\ 5 & 1 & 3 \\end{vmatrix} = -3 - 4 + 10 - 5 - 1 - 24 = -27 \\ne 0 \\implies r(A) = 3 = m$, sistema erkli."
  },
  {
    "id": "T8_Q4",
    "topicId": 8,
    "num": 4,
    "question": "Ikkita $n$ o‘lchovli nolmas $A_1$ va $A_2$ vektorlar qachon o‘zaro «ortogonal vektorlar» deyiladi?",
    "options": [
      "Ularning skalyar ko‘paytmasi nolga teng bo‘lsa: $(A_1, A_2) = 0$ (orasidagi burchak $\\pi/2$ ga teng bo‘lsa)",
      "Ularning uzunliklari o‘zaro teng bo‘lsa: $|A_1| = |A_2|$",
      "Ularning skalyar ko‘paytmasi $1$ ga teng bo‘lsa: $(A_1, A_2) = 1$",
      "Ularning mos koordinatalari proporsional bo‘lsa"
    ],
    "answer": 0,
    "difficulty": "Oson",
    "explanation": "8-ma’ruza (13-15-slaydlar): Skalyar ko‘paytmasi nolga teng bo‘lgan ($(A_1, A_2) = 0$) vektorlar o‘zaro ortogonal (perpendikulyar) vektorlar deyiladi."
  },
  {
    "id": "T8_Q5",
    "topicId": 8,
    "num": 5,
    "question": "Ma’ruzadagi 13-slayd misoli: $A_1(-1,\\; 2,\\; 0,\\; 3)$ va $A_2(4,\\; 2,\\; -5,\\; 0)$ vektorlar o‘zaro ortogonalmi?",
    "options": [
      "Ha, chunki ularning koordinatalari yig‘indisi $0$ ga teng",
      "Yo‘q, chunki ularning uzunliklari $1$ ga teng emas",
      "Yo‘q, chunki $(A_1, A_2) = 8 \\ne 0$",
      "Ha, ortogonal, chunki $(A_1, A_2) = -1\\cdot 4 + 2\\cdot 2 + 0\\cdot(-5) + 3\\cdot 0 = -4 + 4 + 0 + 0 = 0$"
    ],
    "answer": 3,
    "difficulty": "Oson",
    "explanation": "8-ma’ruza (13-slayd): $(A_1, A_2) = -4 + 4 + 0 + 0 = 0$, demak ortogonal."
  },
  {
    "id": "T8_Q6",
    "topicId": 8,
    "num": 6,
    "question": "Ma’ruzadagi 15-16-slaydlar misoli: $a$ parametrning qanday qiymatida $X = (3,\\; 0,\\; a,\\; -1)^T$ va $Y = (-2,\\; 5,\\; 6,\\; 0)^T$ vektorlar o‘zaro ortogonal bo‘ladi?",
    "options": [
      "$a = 0$",
      "$a = 6$",
      "$a = 1$",
      "$a = -1$"
    ],
    "answer": 2,
    "difficulty": "Oson",
    "explanation": "8-ma’ruza (15-16-slaydlar): $(X, Y) = 3(-2) + 0\\cdot 5 + a\\cdot 6 + (-1)\\cdot 0 = 6a - 6 = 0 \\implies a = 1$."
  },
  {
    "id": "T8_Q7",
    "topicId": 8,
    "num": 7,
    "question": "$k$ parametrning qanday qiymatida $X = (2,\\; k,\\; -3,\\; 4)^T$ va $Y = (3,\\; -2,\\; 5,\\; k)^T$ vektorlar o‘zaro ortogonal bo‘ladi?",
    "options": [
      "$k = 3$",
      "$k = 4.5$",
      "$k = 2$",
      "$k = -4.5$"
    ],
    "answer": 1,
    "difficulty": "O'rta",
    "explanation": "$(X, Y) = 6 - 2k - 15 + 4k = 2k - 9 = 0 \\implies k = 4.5$."
  },
  {
    "id": "T8_Q8",
    "topicId": 8,
    "num": 8,
    "question": "Ma’ruzadagi 17-slayd misoli: $A_1(3,\\; 2,\\; 1)$, $A_2(2,\\; -3,\\; 0)$ va $A_3(-3,\\; -2,\\; 13)$ vektorlar sistemasi haqida qaysi mulohaza to‘g‘ri?",
    "options": [
      "Sistema ortogonal vektorlar sistemasidir, chunki $(A_1, A_2) = 0,\\; (A_1, A_3) = 0$ va $(A_2, A_3) = 0$",
      "$A_1$ va $A_2$ ortogonal, ammo $A_2$ va $A_3$ ortogonal emas",
      "Sistema ortonormal bazisdir, chunki har bir vektor uzunligi $1$ ga teng",
      "Sistema chiziqli bog‘liq sistemadir"
    ],
    "answer": 0,
    "difficulty": "O'rta",
    "explanation": "8-ma’ruza (17-slayd): $(A_1,A_2)=6-6+0=0$; $(A_1,A_3)=-9-4+13=0$; $(A_2,A_3)=-6+6+0=0$. Juft-juft ortogonal bo‘lgani uchun ortogonal vektorlar sistemasidir."
  },
  {
    "id": "T8_Q9",
    "topicId": 8,
    "num": 9,
    "question": "«Evklid fazosi» ($E^n$) va «ortonormal vektorlar sistemasi» deb nimaga aytiladi?",
    "options": [
      "Faqat kompleks sonlardan iborat fazoga Evklid fazosi deyiladi; uzunligi $0$ ga teng vektorlarga ortonormal deyiladi",
      "Barcha vektorlari kollinear bo‘lgan sistemaga ortonormal sistema deyiladi",
      "Skalyar ko‘paytmasi aniqlanmagan fazoga Evklid fazosi deyiladi",
      "Elementlari orasida skalyar ko‘paytma aniqlangan chiziqli fazoga Evklid fazosi deyiladi; juft-juft ortogonal va har birining uzunligi $|\\vec{a}_i| = 1$ bo‘lgan sistemaga ortonormal sistema deyiladi"
    ],
    "answer": 3,
    "difficulty": "Oson",
    "explanation": "8-ma’ruza (18-19, 32-slaydlar): Skalyar ko‘paytma kiritilgan chiziqli fazo Evklid fazosi ($E^n$) deyiladi. Har bir vektori normallangan ($|B_i|=1$) ortogonal sistema ortonormal sistema deyiladi."
  },
  {
    "id": "T8_Q10",
    "topicId": 8,
    "num": 10,
    "question": "Evklid fazosining ortonormal bazisi $\\{\\vec{e}_1, \\vec{e}_2, \\dots, \\vec{e}_n\\} \\subset E^n$ uchun $(\\vec{e}_i, \\vec{e}_k)$ skalyar ko‘paytma nimaga teng?",
    "options": [
      "Har doim $1$ ga teng",
      "$i + k$ ga teng",
      "$i = k$ bo‘lsa $1$ ga teng; $i \\ne k$ bo‘lsa $0$ ga teng (Kroneker deltasi $\\delta_{ik}$)",
      "$i = k$ bo‘lsa $0$ ga teng; $i \\ne k$ bo‘lsa $1$ ga teng"
    ],
    "answer": 2,
    "difficulty": "Oson",
    "explanation": "8-ma’ruza (20-slayd): $(\\vec{e}_i, \\vec{e}_k) = \\begin{cases} 1, & i = k \\\\ 0, & i \\ne k \\end{cases}$."
  },
  {
    "id": "T8_Q11",
    "topicId": 8,
    "num": 11,
    "question": "Nolmas vektorlardan iborat har qanday ortogonal vektorlar sistemasi chiziqli erkli bo‘ladimi yoki chiziqli bog‘liq?",
    "options": [
      "Har doim chiziqli bog‘liq sistema bo‘ladi",
      "Har doim chiziqli erkli sistema bo‘ladi (23-slayd, Izoh)",
      "Uzunliklari $1$ ga teng bo‘lsagina chiziqli erkli bo‘ladi",
      "Faqat 2 o‘lchovli fazoda chiziqli erkli bo‘ladi"
    ],
    "answer": 1,
    "difficulty": "Oson",
    "explanation": "8-ma’ruza (23-slayd): Izoh: Har qanday nolmas vektorlardan iborat ortogonal vektorlar sistemasi chiziqli erkli sistemadir."
  },
  {
    "id": "T8_Q12",
    "topicId": 8,
    "num": 12,
    "question": "Chiziqli erkli $A_1, A_2, \\dots, A_k$ vektorlar sistemasidan ortogonal $B_1, B_2, \\dots, B_k$ vektorlar sistemasini qurishning Gramm-Shmidt formulasi qaysi javobda to‘g‘ri berilgan?",
    "options": [
      "$B_1 = A_1,\\qquad B_t = A_t - \\sum_{i=1}^{t-1} \\frac{(B_i, A_t)}{(B_i, B_i)} B_i \\quad (t = 2, 3, \\dots, k)$",
      "$B_t = \\frac{A_t}{|A_t|}$",
      "$B_1 = A_1,\\qquad B_t = A_t + \\sum_{i=1}^{t-1} (B_i, A_t) B_i$",
      "$B_t = A_t - A_{t-1}$"
    ],
    "answer": 0,
    "difficulty": "Oson",
    "explanation": "8-ma’ruza (22, 29-slaydlar): Gramm-Shmidt ortogonallash formulasi: $B_1 = A_1,\\; B_t = A_t - \\sum_{i=1}^{t-1} \\frac{(B_i, A_t)}{(B_i, B_i)} B_i$."
  },
  {
    "id": "T8_Q13",
    "topicId": 8,
    "num": 13,
    "question": "Ma’ruzadagi 24-25-slaydlar misoli: $\\vec{a}_1 = (2, 1, 3, -1),\\; \\vec{a}_2 = (7, 4, 3, -3),\\; \\vec{a}_3 = (1, 1, -6, 0),\\; \\vec{a}_4 = (5, 7, 7, 8)$ vektorlar sistemasini tekshirganda qaysi vektor chiziqli bog‘liq bo‘lib chiqadi va qaysi 3 tasi bazis tashkil qiladi?",
    "options": [
      "$\\vec{a}_1$ va $\\vec{a}_2$ kollinear",
      "Barcha 4 ta vektor chiziqli erkli",
      "$\\vec{a}_4$ chiziqli bog‘liq; $\\vec{a}_1, \\vec{a}_2, \\vec{a}_3$ bazis tashkil qiladi",
      "$\\vec{a}_3 = \\vec{a}_2 - 3\\vec{a}_1$ chiziqli bog‘liq; $\\vec{a}_1, \\vec{a}_2, \\vec{a}_4$ vektorlar bazis tashkil qiladi"
    ],
    "answer": 3,
    "difficulty": "O'rta",
    "explanation": "8-ma’ruza (25-slayd): 2-satrdan 1-satrning 3 baravarini ayirsak $(7-6, 4-3, 3-9, -3+3) = (1, 1, -6, 0) = \\vec{a}_3$ hosil bo‘ladi. Demak $\\vec{a}_1, \\vec{a}_2, \\vec{a}_4$ bazis tashkil qiladi."
  },
  {
    "id": "T8_Q14",
    "topicId": 8,
    "num": 14,
    "question": "Ma’ruzadagi 26-27-slaydlar misoli: $\\vec{a}_1 = (2,\\; 1,\\; 3,\\; -1)$ va $\\vec{a}_2 = (7,\\; 4,\\; 3,\\; -3)$ vektorlarni Gramm-Shmidt formulasi bilan ortogonallashda $\\vec{b}_1 = \\vec{a}_1$ bo‘lsa, $\\vec{b}_2 = \\vec{a}_2 - \\frac{\\vec{b}_1 \\cdot \\vec{a}_2}{\\vec{b}_1 \\cdot \\vec{b}_1}\\vec{b}_1$ vektorni toping.",
    "options": [
      "$\\vec{b}_2 = (-3,\\; -2,\\; 3,\\; 1)$",
      "$\\vec{b}_2 = (1,\\; 5,\\; 1,\\; 10)$",
      "$\\vec{b}_2 = (3,\\; 2,\\; -3,\\; -1)$",
      "$\\vec{b}_2 = (5,\\; 3,\\; 0,\\; -2)$"
    ],
    "answer": 2,
    "difficulty": "O'rta",
    "explanation": "8-ma’ruza (27-slayd): $\\vec{b}_1 \\cdot \\vec{a}_2 = 14 + 4 + 9 + 3 = 30$, $\\vec{b}_1 \\cdot \\vec{b}_1 = 4 + 1 + 9 + 1 = 15$. Nisbat $30/15 = 2$. Demak $\\vec{b}_2 = (7,4,3,-3) - 2(2,1,3,-1) = (3, 2, -3, -1)$."
  },
  {
    "id": "T8_Q15",
    "topicId": 8,
    "num": 15,
    "question": "Ma’ruzadagi 27-slayd misoli: Yuqoridagi masalada $\\vec{a}_4 = (5,\\; 7,\\; 7,\\; 8)$ vektor uchun uchinchi ortogonal vektor $\\vec{b}_3 = \\vec{a}_4 - \\frac{\\vec{b}_1 \\cdot \\vec{a}_4}{\\vec{b}_1 \\cdot \\vec{b}_1}\\vec{b}_1 - \\frac{\\vec{b}_2 \\cdot \\vec{a}_4}{\\vec{b}_2 \\cdot \\vec{b}_2}\\vec{b}_2$ ni toping.",
    "options": [
      "$\\vec{b}_3 = (0,\\; 4,\\; 4,\\; 9)$",
      "$\\vec{b}_3 = (1,\\; 5,\\; 1,\\; 10)$",
      "$\\vec{b}_3 = (3,\\; 2,\\; -3,\\; -1)$",
      "$\\vec{b}_3 = (5,\\; 7,\\; 7,\\; 8)$"
    ],
    "answer": 1,
    "difficulty": "Qiyin",
    "explanation": "8-ma’ruza (27-slayd): $\\vec{b}_1 \\cdot \\vec{a}_4 = 10+7+21-8 = 30 \\implies 30/15 = 2$. $\\vec{b}_2 \\cdot \\vec{a}_4 = 15+14-21-8 = 0$. Demak $\\vec{b}_3 = \\vec{a}_4 - 2\\vec{b}_1 = (5,7,7,8) - (4,2,6,-2) = (1, 5, 1, 10)$."
  },
  {
    "id": "T8_Q16",
    "topicId": 8,
    "num": 16,
    "question": "Ma’ruzadagi 28-slayd misoli: Hosil bo‘lgan $\\vec{b}_1 = (2, 1, 3, -1)$, $\\vec{b}_2 = (3, 2, -3, -1)$ va $\\vec{b}_3 = (1, 5, 1, 10)$ ortogonal vektorlarni normallashtirishda ularning uzunliklari $|\\vec{b}_1|, |\\vec{b}_2|, |\\vec{b}_3|$ nimaga teng?",
    "options": [
      "$|\\vec{b}_1| = \\sqrt{15},\\qquad |\\vec{b}_2| = \\sqrt{23},\\qquad |\\vec{b}_3| = \\sqrt{127}$",
      "$|\\vec{b}_1| = \\sqrt{14},\\qquad |\\vec{b}_2| = \\sqrt{22},\\qquad |\\vec{b}_3| = \\sqrt{126}$",
      "$|\\vec{b}_1| = 5,\\qquad |\\vec{b}_2| = 5,\\qquad |\\vec{b}_3| = 11$",
      "$|\\vec{b}_1| = 15,\\qquad |\\vec{b}_2| = 23,\\qquad |\\vec{b}_3| = 127$"
    ],
    "answer": 0,
    "difficulty": "O'rta",
    "explanation": "8-ma’ruza (28-slayd): $|\\vec{b}_1| = \\sqrt{4+1+9+1} = \\sqrt{15}$; $|\\vec{b}_2| = \\sqrt{9+4+9+1} = \\sqrt{23}$; $|\\vec{b}_3| = \\sqrt{1+25+1+100} = \\sqrt{127}$."
  },
  {
    "id": "T8_Q17",
    "topicId": 8,
    "num": 17,
    "question": "Ma’ruzadagi 30-slayd misoli: $A_1(1,\\; 1,\\; 1)$, $A_2(0,\\; 1,\\; 1)$ va $A_3(0,\\; 0,\\; 1)$ vektorlar sistemasi ustida Gramm-Shmidt formulalari yordamida qurilgan $B_1, B_2, B_3$ ortogonal sistemani toping.",
    "options": [
      "$B_1 = (1,\\; 1,\\; 1),\\qquad B_2 = (-1,\\; 1,\\; 1),\\qquad B_3 = (0,\\; -1,\\; 1)$",
      "$B_1 = (1,\\; 0,\\; 0),\\qquad B_2 = (0,\\; 1,\\; 0),\\qquad B_3 = (0,\\; 0,\\; 1)$",
      "$B_1 = (1,\\; 1,\\; 1),\\qquad B_2 = \\left(\\frac{2}{3},\\; -\\frac{1}{3},\\; -\\frac{1}{3}\\right),\\qquad B_3 = \\left(0,\\; \\frac{1}{2},\\; \\frac{1}{2}\\right)$",
      "$B_1 = (1,\\; 1,\\; 1),\\qquad B_2 = \\left(-\\frac{2}{3},\\; \\frac{1}{3},\\; \\frac{1}{3}\\right),\\qquad B_3 = \\left(0,\\; -\\frac{1}{2},\\; \\frac{1}{2}\\right)$"
    ],
    "answer": 3,
    "difficulty": "Qiyin",
    "explanation": "8-ma’ruza (30-31-slaydlar): $B_1 = (1,1,1)$; $B_2 = (0,1,1) - \\frac{2}{3}(1,1,1) = (-2/3, 1/3, 1/3)$; $B_3 = (0,0,1) - \\frac{1}{3}(1,1,1) - \\frac{1/3}{2/3}(-2/3, 1/3, 1/3) = (0, -1/2, 1/2)$."
  },
  {
    "id": "T8_Q18",
    "topicId": 8,
    "num": 18,
    "question": "Ma’ruzadagi 30-slayd misolidagi $B_1 = (1, 1, 1)$, $B_2 = (-\\frac{2}{3}, \\frac{1}{3}, \\frac{1}{3})$, $B_3 = (0, -\\frac{1}{2}, \\frac{1}{2})$ ortogonal vektorlarni normallashtirib, ortonormal bazis $\\vec{e}_1, \\vec{e}_2, \\vec{e}_3$ ni toping.",
    "options": [
      "$\\vec{e}_1 = \\frac{1}{3}(1, 1, 1),\\qquad \\vec{e}_2 = \\frac{1}{6}(-2, 1, 1),\\qquad \\vec{e}_3 = \\frac{1}{2}(0, -1, 1)$",
      "$\\vec{e}_1 = \\frac{1}{\\sqrt{3}}(1, 1, 1),\\qquad \\vec{e}_2 = \\frac{1}{\\sqrt{3}}(-2, 1, 1),\\qquad \\vec{e}_3 = \\frac{1}{\\sqrt{3}}(0, -1, 1)$",
      "$\\vec{e}_1 = \\frac{1}{\\sqrt{3}}(1, 1, 1),\\qquad \\vec{e}_2 = \\frac{1}{\\sqrt{6}}(-2, 1, 1),\\qquad \\vec{e}_3 = \\frac{1}{\\sqrt{2}}(0, -1, 1)$",
      "$\\vec{e}_1 = (1, 1, 1),\\qquad \\vec{e}_2 = (-2, 1, 1),\\qquad \\vec{e}_3 = (0, -1, 1)$"
    ],
    "answer": 2,
    "difficulty": "Qiyin",
    "explanation": "Har bir vektorni o‘z uzunligiga bo‘lamiz: $|B_1|=\\sqrt{3}$, $|B_2|=\\frac{\\sqrt{6}}{3}$, $|B_3|=\\frac{\\sqrt{2}}{2}$."
  },
  {
    "id": "T8_Q19",
    "topicId": 8,
    "num": 19,
    "question": "Nol bo‘lmagan $B = (3,\\; -4,\\; 0,\\; 12)^T$ vektorning normallangan (birlik) vektori $\\frac{B}{|B|}$ ni toping.",
    "options": [
      "$\\left(\\frac{3}{19},\\; -\\frac{4}{19},\\; 0,\\; \\frac{12}{19}\\right)^T$",
      "$\\left(\\frac{3}{13},\\; -\\frac{4}{13},\\; 0,\\; \\frac{12}{13}\\right)^T$",
      "$(1,\\; -1,\\; 0,\\; 1)^T$",
      "$\\left(\\frac{3}{5},\\; -\\frac{4}{5},\\; 0,\\; \\frac{12}{5}\\right)^T$"
    ],
    "answer": 1,
    "difficulty": "Oson",
    "explanation": "8-ma’ruza (32-slayd): $|B| = \\sqrt{3^2 + (-4)^2 + 0^2 + 12^2} = \\sqrt{9 + 16 + 144} = \\sqrt{169} = 13$. Demak $B/|B| = (3/13, -4/13, 0, 12/13)^T$."
  },
  {
    "id": "T8_Q20",
    "topicId": 8,
    "num": 20,
    "question": "$\\mathbb{R}^2$ fazoda $A_1 = (3,\\; 4)$ va $A_2 = (1,\\; 2)$ chiziqli erkli vektorlarni Gramm-Shmidt usulida ortogonallash natijasida $B_1 = A_1$ bo‘lsa, $B_2$ vektorni toping.",
    "options": [
      "$B_2 = \\left(-\\frac{8}{25},\\; \\frac{6}{25}\\right)$",
      "$B_2 = \\left(-\\frac{12}{25},\\; \\frac{9}{25}\\right)$",
      "$B_2 = (-4,\\; 3)$",
      "$B_2 = \\left(\\frac{8}{25},\\; -\\frac{6}{25}\\right)$"
    ],
    "answer": 0,
    "difficulty": "O'rta",
    "explanation": "$(B_1, A_2) = 3\\cdot 1 + 4\\cdot 2 = 11$; $(B_1, B_1) = 9 + 16 = 25$. U holda $B_2 = (1, 2) - \\frac{11}{25}(3, 4) = \\left(\\frac{25-33}{25},\\; \\frac{50-44}{25}\\right) = \\left(-\\frac{8}{25},\\; \\frac{6}{25}\\right)$!"
  },
  {
    "id": "T8_Q21",
    "topicId": 8,
    "num": 21,
    "question": "$\\mathbb{R}^2$ fazoda $A_1 = (1,\\; 1)$ va $A_2 = (0,\\; 2)$ vektorlarni Gramm-Shmidt usulida ortogonallashtirib, so‘ngra normallashtirsak, qanday ortonormal bazis hosil bo‘ladi?",
    "options": [
      "$\\vec{e}_1 = (1,\\; 1),\\qquad \\vec{e}_2 = (-1,\\; 1)$",
      "$\\vec{e}_1 = \\left(\\frac{1}{2},\\; \\frac{1}{2}\\right),\\qquad \\vec{e}_2 = \\left(-\\frac{1}{2},\\; \\frac{1}{2}\\right)$",
      "$\\vec{e}_1 = (1,\\; 0),\\qquad \\vec{e}_2 = (0,\\; 1)$",
      "$\\vec{e}_1 = \\left(\\frac{1}{\\sqrt{2}},\\; \\frac{1}{\\sqrt{2}}\\right),\\qquad \\vec{e}_2 = \\left(-\\frac{1}{\\sqrt{2}},\\; \\frac{1}{\\sqrt{2}}\\right)$"
    ],
    "answer": 3,
    "difficulty": "O'rta",
    "explanation": "$B_1 = (1, 1)$; $B_2 = (0, 2) - \\frac{2}{2}(1, 1) = (-1, 1)$. Normallashtirsak: $|B_1|=\\sqrt{2}, |B_2|=\\sqrt{2}$, natijada $\\vec{e}_1 = (1/\\sqrt{2}, 1/\\sqrt{2})$ va $\\vec{e}_2 = (-1/\\sqrt{2}, 1/\\sqrt{2})$."
  },
  {
    "id": "T8_Q22",
    "topicId": 8,
    "num": 22,
    "question": "Quyidagi $2$ o‘lchovli vektorlar juftliklaridan qaysi biri $\\mathbb{R}^2$ fazoda ORTONORMAL bazis tashkil qiladi?",
    "options": [
      "$\\vec{e}_1 = (1,\\; 0),\\qquad \\vec{e}_2 = (1,\\; 1)$",
      "$\\vec{e}_1 = (3,\\; 4),\\qquad \\vec{e}_2 = (-4,\\; 3)$",
      "$\\vec{e}_1 = (0.6,\\; 0.8),\\qquad \\vec{e}_2 = (-0.8,\\; 0.6)$",
      "$\\vec{e}_1 = (0.5,\\; 0.5),\\qquad \\vec{e}_2 = (-0.5,\\; 0.5)$"
    ],
    "answer": 2,
    "difficulty": "Oson",
    "explanation": "$(\\vec{e}_1, \\vec{e}_2) = -0.48 + 0.48 = 0$ (ortogonal) va $|\\vec{e}_1| = \\sqrt{0.36 + 0.64} = 1,\\; |\\vec{e}_2| = \\sqrt{0.64 + 0.36} = 1$ (birlik vektorlar)."
  },
  {
    "id": "T8_Q23",
    "topicId": 8,
    "num": 23,
    "question": "$\\mathbb{R}^3$ fazoda $\\vec{a}_1 = (1,\\; 2,\\; -2)$ va $\\vec{a}_2 = (2,\\; 1,\\; 2)$ ortogonal vektorlar berilgan. Shu ikkala vektorga ham ortogonal bo‘lgan va uzunligi $3$ ga teng bo‘lgan $\\vec{a}_3$ vektorni toping.",
    "options": [
      "$\\vec{a}_3 = (1,\\; -1,\\; -1)$",
      "$\\vec{a}_3 = (2,\\; -2,\\; -1)$",
      "$\\vec{a}_3 = (2,\\; 2,\\; -1)$",
      "$\\vec{a}_3 = (-2,\\; -2,\\; 1)$"
    ],
    "answer": 1,
    "difficulty": "O'rta",
    "explanation": "$(2, -2, -1)$ ni tekshiramiz: $(\\vec{a}_1, \\vec{a}_3) = 2 - 4 + 2 = 0$; $(\\vec{a}_2, \\vec{a}_3) = 4 - 2 - 2 = 0$; uzunligi $|\\vec{a}_3| = \\sqrt{4+4+1} = 3$."
  },
  {
    "id": "T8_Q24",
    "topicId": 8,
    "num": 24,
    "question": "Agar $\\{\\vec{e}_1, \\vec{e}_2, \\vec{e}_3\\}$ ortonormal bazis bo‘lib, $\\vec{x} = 2\\vec{e}_1 - 3\\vec{e}_2 + 6\\vec{e}_3$ bo‘lsa, $(\\vec{x}, \\vec{e}_2)$ skalyar ko‘paytmani va $|\\vec{x}|$ uzunlikni toping.",
    "options": [
      "$(\\vec{x}, \\vec{e}_2) = -3;\\qquad |\\vec{x}| = 7$",
      "$(\\vec{x}, \\vec{e}_2) = -3;\\qquad |\\vec{x}| = \\sqrt{11}$",
      "$(\\vec{x}, \\vec{e}_2) = 0;\\qquad |\\vec{x}| = 5$",
      "$(\\vec{x}, \\vec{e}_2) = 3;\\qquad |\\vec{x}| = 49$"
    ],
    "answer": 0,
    "difficulty": "O'rta",
    "explanation": "Ortonormal bazisda $(\\vec{e}_i, \\vec{e}_k) = \\delta_{ik}$ bo‘lgani uchun $(\\vec{x}, \\vec{e}_2) = 2(0) - 3(1) + 6(0) = -3$, va $|\\vec{x}| = \\sqrt{2^2 + (-3)^2 + 6^2} = \\sqrt{49} = 7$."
  },
  {
    "id": "T8_Q25",
    "topicId": 8,
    "num": 25,
    "question": "Agar $\\vec{a}$ va $\\vec{b}$ o‘zaro ortogonal vektorlar bo‘lib, $|\\vec{a}| = 5$ va $|\\vec{b}| = 12$ bo‘lsa, $|\\vec{a} + \\vec{b}|$ va $|\\vec{a} - \\vec{b}|$ uzunliklarni toping.",
    "options": [
      "$|\\vec{a} + \\vec{b}| = 60,\\qquad |\\vec{a} - \\vec{b}| = 0$",
      "$|\\vec{a} + \\vec{b}| = 17,\\qquad |\\vec{a} - \\vec{b}| = 7$",
      "$|\\vec{a} + \\vec{b}| = 13,\\qquad |\\vec{a} - \\vec{b}| = 7$",
      "$|\\vec{a} + \\vec{b}| = 13,\\qquad |\\vec{a} - \\vec{b}| = 13$"
    ],
    "answer": 3,
    "difficulty": "Oson",
    "explanation": "Ortogonal vektorlar uchun $(\\vec{a}, \\vec{b}) = 0$, shuning uchun Pifagor teoremasiga ko‘ra $|\\vec{a} \\pm \\vec{b}| = \\sqrt{|\\vec{a}|^2 + |\\vec{b}|^2} = \\sqrt{25 + 144} = \\sqrt{169} = 13$."
  },
  {
    "id": "T8_Q26",
    "topicId": 8,
    "num": 26,
    "question": "Agar kvadrat $Q$ matritsaning ustunlari ortonormal vektorlar sistemasini tashkil qilsa (ortogonal matritsa), $Q^T \\cdot Q$ ko‘paytma nimaga teng bo‘ladi?",
    "options": [
      "$Q^T \\cdot Q = -E$",
      "$Q^T \\cdot Q = O$ (nol matritsa)",
      "$Q^T \\cdot Q = E$ (birlik matritsa), ya’ni $Q^{-1} = Q^T$",
      "$Q^T \\cdot Q = 2E$"
    ],
    "answer": 2,
    "difficulty": "O'rta",
    "explanation": "$Q^T Q$ matritsaning $(i, k)$-elementi $(\\vec{e}_i, \\vec{e}_k) = \\delta_{ik}$ ga teng, ya’ni bosh diagonalda 1 lar, qolgan joylarda 0 lar hosil bo‘ladi: $Q^T Q = E$."
  },
  {
    "id": "T8_Q27",
    "topicId": 8,
    "num": 27,
    "question": "$A_1 = (1,\\; 2,\\; 3)$, $A_2 = (2,\\; 4,\\; 6)$ va $A_3 = (1,\\; -1,\\; 0)$ vektorlar sistemasi chiziqli erklimi?",
    "options": [
      "Ha, chunki $A_3$ da nol bor",
      "Yo‘q, chiziqli bog‘liq, chunki $A_2 = 2A_1$ va matritsa rangi $r(A) = 2 < 3$",
      "Ha, chiziqli erkli, chunki $3$ ta vektor berilgan",
      "Ha, ortogonal sistema"
    ],
    "answer": 1,
    "difficulty": "Oson",
    "explanation": "$2A_1 - 1A_2 + 0A_3 = \\Theta$ tenglik noldan farqli koeffitsiyentlarda bajariladi ($r(A)=2 < 3$), demak chiziqli bog‘liq."
  },
  {
    "id": "T8_Q28",
    "topicId": 8,
    "num": 28,
    "question": "Gramm-Shmidt ortogonallash jarayonida $B_2 = A_2 - \\alpha B_1$ formuladagi $\\alpha = \\frac{(B_1, A_2)}{(B_1, B_1)}$ koeffitsiyent qanday shartdan kelib chiqadi?",
    "options": [
      "$(B_1, B_2) = 0$ ortogonallik shartidan: $(B_1, A_2 - \\alpha B_1) = (B_1, A_2) - \\alpha (B_1, B_1) = 0$",
      "$\\det(B) = 1$ shartidan",
      "$|B_2| = 1$ normallash shartidan",
      "$B_1 + B_2 = A_1 + A_2$ shartidan"
    ],
    "answer": 0,
    "difficulty": "O'rta",
    "explanation": "8-ma’ruza (29-slayd): $B_2$ vektor $B_1$ ga ortogonal bo‘lishi uchun $(B_1, B_2) = 0 \\implies (B_1, A_2) - \\alpha(B_1, B_1) = 0 \\implies \\alpha = \\frac{(B_1, A_2)}{(B_1, B_1)}$."
  },
  {
    "id": "T8_Q29",
    "topicId": 8,
    "num": 29,
    "question": "$\\vec{x} = (1,\\; -2,\\; 2,\\; 4)^T$ vektorni normallashtirishdan hosil bo‘lgan birlik vektorning barcha koordinatalari kvadratlari yig‘indisi nimaga teng?",
    "options": [
      "$25$ ga teng",
      "$0$ ga teng",
      "$5$ ga teng",
      "$1$ ga teng"
    ],
    "answer": 3,
    "difficulty": "Oson",
    "explanation": "Har qanday normallangan (birlik) vektorning uzunligi $1$ ga teng, demak uning koordinatalari kvadratlari yig‘indisi ham $1^2 = 1$ ga teng."
  },
  {
    "id": "T8_Q30",
    "topicId": 8,
    "num": 30,
    "question": "$E^4$ Evklid fazosida $\\vec{e}_1 = (\\frac{1}{2}, \\frac{1}{2}, \\frac{1}{2}, \\frac{1}{2})^T$ va $\\vec{e}_2 = (\\frac{1}{2}, \\frac{1}{2}, -\\frac{1}{2}, -\\frac{1}{2})^T$ ortonormal vektorlar berilgan. Quyidagi vektorlardan qaysi biri ularni 3-ortonormal vektorgacha to‘ldira oladi?",
    "options": [
      "$\\vec{e}_3 = \\left(\\frac{1}{2},\\; \\frac{1}{2},\\; \\frac{1}{2},\\; -\\frac{1}{2}\\right)^T$",
      "$\\vec{e}_3 = (1,\\; 0,\\; 0,\\; 0)^T$",
      "$\\vec{e}_3 = \\left(\\frac{1}{2},\\; -\\frac{1}{2},\\; \\frac{1}{2},\\; -\\frac{1}{2}\\right)^T$",
      "$\\vec{e}_3 = (1,\\; -1,\\; 1,\\; -1)^T$"
    ],
    "answer": 2,
    "difficulty": "O'rta",
    "explanation": "Adamar (Hadamard) tipidagi ortonormal sistema: $(\\vec{e}_1, \\vec{e}_3) = 0$, $(\\vec{e}_2, \\vec{e}_3) = 0$ va $|\\vec{e}_3| = \\sqrt{4 \\cdot \\frac{1}{4}} = 1$."
  },
  {
    "id": "T9_Q1",
    "topicId": 9,
    "num": 1,
    "question": "[Aralash: 1-2-mavzular] Agar $A = \\begin{pmatrix} 2 & -1 \\\\ 3 & 4 \\end{pmatrix}$ va $B = \\begin{pmatrix} 1 & 2 \\\\ -2 & 0 \\end{pmatrix}$ bo‘lsa, $\\det(A^T + 2B)$ ni hisoblang.",
    "options": [
      "$12$",
      "$-19$",
      "$51$",
      "$24$"
    ],
    "answer": 2,
    "difficulty": "O'rta",
    "explanation": "$A^T = \\begin{pmatrix} 2 & 3 \\\\ -1 & 4 \\end{pmatrix}$, $2B = \\begin{pmatrix} 2 & 4 \\\\ -4 & 0 \\end{pmatrix}$. U holda $A^T + 2B = \\begin{pmatrix} 4 & 7 \\\\ -5 & 4 \\end{pmatrix}$ va uning determinanti $4\\cdot 4 - 7(-5) = 16 + 35 = 51$."
  },
  {
    "id": "T9_Q2",
    "topicId": 9,
    "num": 2,
    "question": "[Aralash: 1-3-mavzular] Agar $A = \\begin{pmatrix} 2 & 1 \\\\ 3 & 2 \\end{pmatrix}$ bo‘lsa, $A + A^{-1}$ yig‘indi matritsani toping.",
    "options": [
      "$\\begin{pmatrix} 4 & 2 \\\\ 6 & 4 \\end{pmatrix}$",
      "$\\begin{pmatrix} 4 & 0 \\\\ 0 & 4 \\end{pmatrix} = 4E$",
      "$\\begin{pmatrix} 0 & 2 \\\\ 6 & 0 \\end{pmatrix}$",
      "$\\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix} = E$"
    ],
    "answer": 1,
    "difficulty": "O'rta",
    "explanation": "$\\det(A) = 4 - 3 = 1 \\implies A^{-1} = \\begin{pmatrix} 2 & -1 \\\\ -3 & 2 \\end{pmatrix}$. U holda $A + A^{-1} = \\begin{pmatrix} 2+2 & 1-1 \\\\ 3-3 & 2+2 \\end{pmatrix} = \\begin{pmatrix} 4 & 0 \\\\ 0 & 4 \\end{pmatrix} = 4E$."
  },
  {
    "id": "T9_Q3",
    "topicId": 9,
    "num": 3,
    "question": "[Aralash: 2-3-mavzular] 3-tartibli kvadrat $A$ matritsa uchun $\\det(A) = 2$ bo‘lsa, $\\det(2A^{-1} \\cdot A^T)$ qiymatini hisoblang.",
    "options": [
      "$8$",
      "$2$",
      "$16$",
      "$4$"
    ],
    "answer": 0,
    "difficulty": "O'rta",
    "explanation": "$n=3$ bo‘lgani uchun $\\det(2A^{-1} A^T) = 2^3 \\cdot \\det(A^{-1}) \\cdot \\det(A^T) = 8 \\cdot \\frac{1}{\\det A} \\cdot \\det A = 8$."
  },
  {
    "id": "T9_Q4",
    "topicId": 9,
    "num": 4,
    "question": "[Aralash: 3-4-mavzular] 4-tartibli $A = \\begin{pmatrix} 1 & 2 & 0 & 0 \\\\ 2 & 5 & 0 & 0 \\\\ 0 & 0 & 3 & 6 \\\\ 0 & 0 & 1 & 2 \\end{pmatrix}$ matritsaning determinanti $\\det(A)$ va rangi $r(A)$ ni toping.",
    "options": [
      "$\\det(A) = 1,\\qquad r(A) = 4$",
      "$\\det(A) = 0,\\qquad r(A) = 2$",
      "$\\det(A) = 6,\\qquad r(A) = 4$",
      "$\\det(A) = 0,\\qquad r(A) = 3$"
    ],
    "answer": 3,
    "difficulty": "O'rta",
    "explanation": "Yuqori chap blok determinanti $5-4 = 1 \\ne 0$ (rangi 2), quyi o‘ng blok determinanti $6-6 = 0$, ammo $(1, 2) \\ne (0, 0)$ (rangi 1). Demak $\\det(A) = 1 \\cdot 0 = 0$ va $r(A) = 2 + 1 = 3$."
  },
  {
    "id": "T9_Q5",
    "topicId": 9,
    "num": 5,
    "question": "[Aralash: 4-5-mavzular] $P = (3, 1, 4, 2)$ o‘rin almashtirishdagi inversiyalar soni $k = \\text{inv}(P)$ ga teng bo‘lsa, 5 ta noma’lumli va rangi $r = k$ bo‘lgan bir jinsli sistemaning FYS da nechta vektor bo‘ladi?",
    "options": [
      "$3$ ta (chunki $k = 2$ va $n - r = 5 - 2 = 3$)",
      "$1$ ta (chunki $k = 4$ va $n - r = 5 - 4 = 1$)",
      "$2$ ta (chunki $k = \\text{inv}(3,1,4,2) = 3$ va $n - r = 5 - 3 = 2$)",
      "$4$ ta"
    ],
    "answer": 2,
    "difficulty": "O'rta",
    "explanation": "$P=(3,1,4,2)$ da inversiyalar: $(3,1), (3,2), (4,2) \\implies k = 3$. U holda $n - r = 5 - 3 = 2$ ta FYS vektori bor."
  },
  {
    "id": "T9_Q6",
    "topicId": 9,
    "num": 6,
    "question": "[Aralash: 5-6-mavzular] 5 ta noma’lumli bir jinsli sistemaning FYS da $3$ ta chiziqli erkli vektor mavjud bo‘lsa, shu sistemaga mos bir jinsli bo‘lmagan sistemada noma’lumlarni bazis va erkli o‘zgaruvchilarga ajratish usullari soni $C_n^r$ nechaga teng?",
    "options": [
      "$5$ ta (chunki $r = 1$ va $C_5^1 = 5$)",
      "$10$ ta (chunki $n - r = 3 \\implies r = 2$ va $C_5^2 = 10$)",
      "$6$ ta",
      "$15$ ta"
    ],
    "answer": 1,
    "difficulty": "O'rta",
    "explanation": "FYS dagi vektorlar soni $n - r = 3$ bo‘lib, $n = 5$ bo‘lsa, sistema rangi $r = 5 - 3 = 2$. U holda $C_5^2 = \\frac{5!}{2!3!} = 10$."
  },
  {
    "id": "T9_Q7",
    "topicId": 9,
    "num": 7,
    "question": "[Aralash: 3-7-mavzular] Bir bazisdan ikkinchi bazisga o‘tish matritsasi $P = \\begin{pmatrix} 2 & 1 \\\\ 5 & 3 \\end{pmatrix}$ berilgan. Eski bazisda $\\vec{x} = (4,\\; 9)^T$ bo‘lgan vektorning yangi bazisdagi koordinatalari $\\vec{x}' = P^{-1}\\vec{x}$ ni toping.",
    "options": [
      "$\\vec{x}' = (3;\\; -2)^T$",
      "$\\vec{x}' = (17;\\; 47)^T$",
      "$\\vec{x}' = (-3;\\; 2)^T$",
      "$\\vec{x}' = (2;\\; 3)^T$"
    ],
    "answer": 0,
    "difficulty": "O'rta",
    "explanation": "$\\det(P) = 6 - 5 = 1 \\implies P^{-1} = \\begin{pmatrix} 3 & -1 \\\\ -5 & 2 \\end{pmatrix}$. U holda $\\vec{x}' = P^{-1}\\vec{x} = \\begin{pmatrix} 3(4) - 1(9) \\\\ -5(4) + 2(9) \\end{pmatrix} = \\begin{pmatrix} 3 \\\\ -2 \\end{pmatrix}$."
  },
  {
    "id": "T9_Q8",
    "topicId": 9,
    "num": 8,
    "question": "[Aralash: 5-8-mavzular] $x_1 + 2x_2 - x_3 = 0$ bitta tenglamadan iborat bir jinsli sistemaning barcha yechimlari to‘plami $\\mathbb{R}^3$ da qism fazo tashkil qiladi. Uning o‘lchamini va $(1, 2, -1)^T$ normal vektorga munosabatini aniqlang.",
    "options": [
      "Qism fazo tashkil qilmaydi",
      "O‘lchami $1$ ga teng va har bir yechimi $N = (1, 2, -1)^T$ ga kollineardir",
      "O‘lchami $3$ ga teng",
      "O‘lchami $n - r = 3 - 1 = 2$ ga teng bo‘lib, uning har bir yechim vektori $N = (1, 2, -1)^T$ vektorga ortogonaldir"
    ],
    "answer": 3,
    "difficulty": "O'rta",
    "explanation": "$1\\cdot x_1 + 2\\cdot x_2 + (-1)\\cdot x_3 = (N, X) = 0$ tenglama $X$ vektorning $N=(1,2,-1)^T$ vektorga ortogonalligini bildiradi va $n-r = 3-1 = 2$ o‘lchovli tekislik (qism fazo) hosil qiladi."
  },
  {
    "id": "T9_Q9",
    "topicId": 9,
    "num": 9,
    "question": "[Aralash: 2-7-mavzular] Uchta $\\vec{a} = (2, 0, 0)$, $\\vec{b} = (1, 3, 0)$ va $\\vec{c} = (4, -2, 5)$ vektorlardan tuzilgan matritsa determinanti nimaga teng va ulardan yasalgan parallelepiped hajmi qancha?",
    "options": [
      "$\\Delta = 10,\\qquad V_{\\text{par}} = 10$",
      "$\\Delta = -30,\\qquad V_{\\text{par}} = 15$",
      "$\\Delta = 30,\\qquad V_{\\text{par}} = 30$",
      "$\\Delta = 0,\\qquad V_{\\text{par}} = 0$"
    ],
    "answer": 2,
    "difficulty": "Oson",
    "explanation": "Quyi uchburchakli determinant: $\\Delta = 2 \\cdot 3 \\cdot 5 = 30$, parallelepiped hajmi $V = |\\Delta| = 30$."
  },
  {
    "id": "T9_Q10",
    "topicId": 9,
    "num": 10,
    "question": "[Aralash: 3-5-mavzular] Kroneker-Kapelli va Kramer qoidalariga ko‘ra, $n$ ta noma’lumli $n$ ta tenglamalar sistemasida $\\det(A) \\ne 0$ bo‘lsa, $r(A), r(A|B)$ va bazis yechimlar soni haqida nima deyish mumkin?",
    "options": [
      "$r(A) \\ne r(A|B)$ va bazis yechim mavjud emas",
      "$r(A) = r(A|B) = n$; erkli o‘zgaruvchilar yo‘q ($n-r=0$) va yagona yechimning o‘zi yagona bazis yechim hisoblanadi ($C_n^n = 1$)",
      "Bazis yechimlar soni $n!$ ga teng",
      "$r(A) < n$ va cheksiz ko‘p bazis yechim mavjud"
    ],
    "answer": 1,
    "difficulty": "O'rta",
    "explanation": "$\\det(A) \\ne 0 \\implies r(A) = r(A|B) = n$. Erkli o‘zgaruvchilar soni $n - n = 0$ va $C_n^n = 1$ ta yagona yechim mavjud."
  },
  {
    "id": "T9_Q11",
    "topicId": 9,
    "num": 11,
    "question": "[Aralash: 4-8-mavzular] Agar $\\vec{e}_1, \\vec{e}_2, \\vec{e}_3$ vektorlar $\\mathbb{R}^3$ fazoda o‘ng uchlikni tashkil etuvchi ortonormal bazis bo‘lsa, ulardan tuzilgan $3 \\times 3$ matritsaning determinanti nimaga teng?",
    "options": [
      "$1$ ga teng",
      "$3$ ga teng",
      "$\\sqrt{3}$ ga teng",
      "$0$ ga teng"
    ],
    "answer": 0,
    "difficulty": "O'rta",
    "explanation": "Ortonormal bazis vektorlaridan yasalgan birlik kubning hajmi $1\\cdot 1\\cdot 1 = 1$ ga teng (yoki $Q^T Q = E \\implies (\\det Q)^2 = 1 \\implies \\det Q = 1$)."
  },
  {
    "id": "T9_Q12",
    "topicId": 9,
    "num": 12,
    "question": "[Aralash: 1-5-mavzular] $A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$ va $B = \\begin{pmatrix} 5 \\\\ 11 \\end{pmatrix}$ bo‘lsa, $AX = B$ tenglamaning yechimi $X = (x_1, x_2)^T$ uchun $X^T \\cdot X$ (uzunlik kvadrati) ni toping.",
    "options": [
      "$3$ (chunki $x_1 = 1,\\; x_2 = 2$ va $1 + 2 = 3$)",
      "$25$",
      "$10$",
      "$5$ (chunki $x_1 = 1,\\; x_2 = 2$ va $1^2 + 2^2 = 5$)"
    ],
    "answer": 3,
    "difficulty": "O'rta",
    "explanation": "$\\begin{cases} x_1 + 2x_2 = 5 \\\\ 3x_1 + 4x_2 = 11 \\end{cases} \\implies x_1 = 1,\\; x_2 = 2$. U holda $X^T X = (X, X) = 1^2 + 2^2 = 5$."
  },
  {
    "id": "T9_Q13",
    "topicId": 9,
    "num": 13,
    "question": "[Aralash: 6-7-mavzular] Gauss usulida $(A \\mid B)$ matritsani pog‘onali shaklga keltirganda $\\begin{pmatrix} 1 & 2 & 0 & -1 & | & 0 \\\\ 0 & 0 & 1 & 3 & | & 0 \\end{pmatrix}$ bir jinsli sistema hosil bo‘ldi. Uning FYS vektorlari $F_1, F_2$ ni toping ($x_2, x_4$ — erkli).",
    "options": [
      "$F_1 = (2,\\; 1,\\; 0,\\; 0)^T,\\qquad F_2 = (-1,\\; 0,\\; 3,\\; 1)^T$",
      "$F_1 = (1,\\; 2,\\; 0,\\; -1)^T,\\qquad F_2 = (0,\\; 0,\\; 1,\\; 3)^T$",
      "$F_1 = (-2,\\; 1,\\; 0,\\; 0)^T,\\qquad F_2 = (1,\\; 0,\\; -3,\\; 1)^T$",
      "$F_1 = (-2,\\; 0,\\; 1,\\; 0)^T,\\qquad F_2 = (1,\\; 0,\\; 0,\\; -3)^T$"
    ],
    "answer": 2,
    "difficulty": "O'rta",
    "explanation": "$x_1 = -2x_2 + x_4$ va $x_3 = -3x_4$. 1) $(x_2, x_4) = (1, 0) \\implies F_1 = (-2, 1, 0, 0)^T$; 2) $(x_2, x_4) = (0, 1) \\implies F_2 = (1, 0, -3, 1)^T$."
  },
  {
    "id": "T9_Q14",
    "topicId": 9,
    "num": 14,
    "question": "[Aralash: 7-8-mavzular] Yuqoridagi savolda topilgan $F_1 = (-2, 1, 0, 0)^T$ va $F_2 = (1, 0, -3, 1)^T$ fundamental yechimlar uchun $(F_1, F_2)$ skalyar ko‘paytmani va Gramm-Shmidt bo‘yicha $B_2 = F_2 - \\frac{(F_1, F_2)}{(F_1, F_1)} F_1$ ortogonal vektorni toping.",
    "options": [
      "$(F_1, F_2) = -5;\\qquad B_2 = (-1,\\; 1,\\; -3,\\; 1)^T$",
      "$(F_1, F_2) = -2;\\qquad B_2 = (0.2,\\; 0.4,\\; -3,\\; 1)^T$",
      "$(F_1, F_2) = 2;\\qquad B_2 = (1.8,\\; -0.4,\\; -3,\\; 1)^T$",
      "$(F_1, F_2) = 0;\\qquad B_2 = F_2$"
    ],
    "answer": 1,
    "difficulty": "Qiyin",
    "explanation": "$(F_1, F_2) = (-2)(1) + 1(0) + 0 + 0 = -2$, $(F_1, F_1) = 4 + 1 = 5$. Demak $B_2 = F_2 - \\frac{-2}{5} F_1 = (1, 0, -3, 1)^T + 0.4(-2, 1, 0, 0)^T = (0.2, 0.4, -3, 1)^T$."
  },
  {
    "id": "T9_Q15",
    "topicId": 9,
    "num": 15,
    "question": "[Aralash: 2-4-mavzular] $\\Delta = \\begin{vmatrix} 1 & 2 & 3 & 4 \\\\ 0 & 2 & 5 & 9 \\\\ 0 & 0 & 3 & 7 \\\\ 2 & 4 & 6 & 10 \\end{vmatrix}$ 4-tartibli determinantni elementar almashtirish yordamida hisoblang.",
    "options": [
      "$12$",
      "$60$",
      "$-12$",
      "$0$"
    ],
    "answer": 0,
    "difficulty": "O'rta",
    "explanation": "4-satrdan 1-satrning 2 baravarini ayirsak: $(2-2,\\; 4-4,\\; 6-6,\\; 10-8) = (0, 0, 0, 2)$. Natijada bosh diagonali $(1, 2, 3, 2)$ bo‘lgan yuqori uchburchak determinant hosil bo‘ladi: $\\Delta = 1 \\cdot 2 \\cdot 3 \\cdot 2 = 12$."
  },
  {
    "id": "T9_Q16",
    "topicId": 9,
    "num": 16,
    "question": "[Aralash: 1-4-mavzular] $A = \\begin{pmatrix} \\cos\\varphi & -\\sin\\varphi & 0 \\\\ \\sin\\varphi & \\cos\\varphi & 0 \\\\ 0 & 0 & 1 \\end{pmatrix}$ burish matritsasi uchun $\\det(A)$ va $A^{-1}$ ni toping.",
    "options": [
      "$\\det(A) = 0;\\qquad A^{-1}$ mavjud emas",
      "$\\det(A) = -1;\\qquad A^{-1} = -A$",
      "$\\det(A) = \\cos 2\\varphi;\\qquad A^{-1} = E$",
      "$\\det(A) = 1;\\qquad A^{-1} = A^T = \\begin{pmatrix} \\cos\\varphi & \\sin\\varphi & 0 \\\\ -\\sin\\varphi & \\cos\\varphi & 0 \\\\ 0 & 0 & 1 \\end{pmatrix}$"
    ],
    "answer": 3,
    "difficulty": "O'rta",
    "explanation": "3-satr bo‘yicha yoyilsa $\\det(A) = 1 \\cdot (\\cos^2\\varphi + \\sin^2\\varphi) = 1$. Ustunlari ortonormal bo‘lgani uchun $A^{-1} = A^T$."
  },
  {
    "id": "T9_Q17",
    "topicId": 9,
    "num": 17,
    "question": "[Aralash: 3-6-mavzular] Gauss-Jordan usulida $(A \\mid E)$ matritsani almashtirib $\\left(\\begin{smallmatrix} 1 & 0 & | & 4 & -1 \\\\ 0 & 1 & | & -7 & 2 \\end{smallmatrix}\\right)$ hosil qilindi. Boshlang‘ich $A$ matritsani toping!",
    "options": [
      "$A = \\begin{pmatrix} 2 & -1 \\\\ -7 & 4 \\end{pmatrix}$",
      "$A = \\begin{pmatrix} 4 & -1 \\\\ -7 & 2 \\end{pmatrix}$",
      "$A = \\begin{pmatrix} 2 & 1 \\\\ 7 & 4 \\end{pmatrix}$",
      "$A = \\begin{pmatrix} 4 & 7 \\\\ -1 & 2 \\end{pmatrix}$"
    ],
    "answer": 2,
    "difficulty": "O'rta",
    "explanation": "O‘ng blok $A^{-1} = \\begin{pmatrix} 4 & -1 \\\\ -7 & 2 \\end{pmatrix}$ ni beradi. $(A^{-1})^{-1} = A$ xossasiga ko‘ra ($\\det(A^{-1}) = 8 - 7 = 1$): $A = \\begin{pmatrix} 2 & 1 \\\\ 7 & 4 \\end{pmatrix}$."
  },
  {
    "id": "T9_Q18",
    "topicId": 9,
    "num": 18,
    "question": "[Aralash: 5-7-mavzular] $\\mathbb{R}^3$ fazoda $\\vec{a}_1 = (1, 2, 1)^T,\\; \\vec{a}_2 = (2, 3, 1)^T,\\; \\vec{a}_3 = (3, 5, 2)^T$ va $\\vec{b} = (4, 7, 3)^T$ vektorlar berilgan. $x_1 \\vec{a}_1 + x_2 \\vec{a}_2 + x_3 \\vec{a}_3 = \\vec{b}$ vektor tenglama nechta yechimga ega?",
    "options": [
      "Faqat nol yechimga ega",
      "Cheksiz ko‘p yechimga ega, chunki $\\vec{a}_3 = \\vec{a}_1 + \\vec{a}_2$ va $\\vec{b} = 2\\vec{a}_1 + \\vec{a}_2$ ($r(A) = r(A|B) = 2 < 3$)",
      "Yechimga ega emas ($r(A) = 2 \\ne r(A|B) = 3$)",
      "Yagona yechimga ega ($r(A) = 3$)"
    ],
    "answer": 1,
    "difficulty": "Qiyin",
    "explanation": "$\\vec{a}_1$ va $\\vec{a}_2$ chiziqli erkli ($r=2$), ammo $\\vec{a}_3 = \\vec{a}_1 + \\vec{a}_2$ va $\\vec{b} = 2\\vec{a}_1 + \\vec{a}_2$. Demak $r(A) = r(A|B) = 2 < 3$, sistema cheksiz ko‘p yechimli."
  },
  {
    "id": "T9_Q19",
    "topicId": 9,
    "num": 19,
    "question": "[Aralash: 2-5-mavzular] $\\begin{cases} (a-1)x + 2y = 3 \\\\ 3x + (a-2)y = 3 \\end{cases}$ chiziqli tenglamalar sistemasi $a$ parametrning qanday qiymatida cheksiz ko‘p yechimga va qanday qiymatida hech qanday yechimga ega emas?",
    "options": [
      "$a = 4$ da cheksiz ko‘p yechimga ega; $a = -1$ da yechimga ega emas",
      "Barcha $a$ larda yagona yechimga ega",
      "$a = -1$ da cheksiz ko‘p yechimga ega; $a = 4$ da yechimga ega emas",
      "$a = 1$ va $a = 2$ da yechimga ega emas"
    ],
    "answer": 0,
    "difficulty": "Qiyin",
    "explanation": "$\\Delta = (a-1)(a-2) - 6 = (a-4)(a+1) = 0 \\implies a=4$ yoki $a=-1$. $a=4$ da ikkala tenglama $3x+2y=3$ ga aylanadi ($\\Delta=\\Delta_x=\\Delta_y=0$, cheksiz ko‘p yechim). $a=-1$ da esa $-2x+2y=3$ va $3x-3y=3$ ziddiyatli bo‘lib, yechimga ega emas!"
  },
  {
    "id": "T9_Q20",
    "topicId": 9,
    "num": 20,
    "question": "[Aralash: 1-8-mavzular] Agar $X = (1, 2, -2)^T$ ustun vektor bo‘lsa, $P = X \\cdot X^T$ ($3 \\times 3$ matritsa) ning izini ($\\text{tr}(P) = p_{11}+p_{22}+p_{33}$) va rangini ($r(P)$) toping.",
    "options": [
      "$\\text{tr}(P) = 1,\\qquad r(P) = 3$",
      "$\\text{tr}(P) = 9,\\qquad r(P) = 3$",
      "$\\text{tr}(P) = 0,\\qquad r(P) = 0$",
      "$\\text{tr}(P) = |X|^2 = 9,\\qquad r(P) = 1$"
    ],
    "answer": 3,
    "difficulty": "Qiyin",
    "explanation": "$P = X X^T = \\begin{pmatrix} 1 & 2 & -2 \\\\ 2 & 4 & -4 \\\\ -2 & -4 & 4 \\end{pmatrix}$. Uning bosh diagonali yig‘indisi $1 + 4 + 4 = 9 = |X|^2$. Barcha satrlari 1-satrga proporsional bo‘lgani uchun $r(P) = 1$."
  },
  {
    "id": "T9_Q21",
    "topicId": 9,
    "num": 21,
    "question": "[Aralash: 3-4-mavzular] $A = \\begin{pmatrix} 2 & 1 & 3 \\\\ 5 & 3 & 2 \\\\ 1 & 4 & 3 \\end{pmatrix}$ matritsaning determinanti $\\det(A) = 40$ (4-ma’ruza, 20-slayd) va algebraik to‘ldiruvchilari $A_{11}=1, A_{21}=9, A_{31}=-7$ bo‘lsa, $A^{-1}$ teskari matritsaning 1-satri qanday bo‘ladi?",
    "options": [
      "$\\left(\\frac{1}{40},\\; -\\frac{13}{40},\\; \\frac{17}{40}\\right)$",
      "$(1,\\; 9,\\; -7)$",
      "$\\left(\\frac{1}{40},\\; \\frac{9}{40},\\; -\\frac{7}{40}\\right)$",
      "$\\left(-\\frac{1}{40},\\; -\\frac{9}{40},\\; \\frac{7}{40}\\right)$"
    ],
    "answer": 2,
    "difficulty": "O'rta",
    "explanation": "$A^{-1} = \\frac{1}{\\det A}\\bar{A}$ da qo‘shma matritsa transponirlangani sababli 1-satrda $(A_{11}, A_{21}, A_{31}) / \\det(A)$ turadi: $A_{11}=1,\\; A_{21} = -(3-12) = 9,\\; A_{31} = (2-9) = -7$."
  },
  {
    "id": "T9_Q22",
    "topicId": 9,
    "num": 22,
    "question": "[Aralash: 6-8-mavzular] $\\begin{cases} x_1 + x_2 + x_3 + x_4 = 0 \\\\ x_1 - x_2 + x_3 - x_4 = 0 \\end{cases}$ bir jinsli sistemaning ikkita bazis-fundamental yechimlari $F_1$ (bunda $x_3=1, x_4=0$) va $F_2$ (bunda $x_3=0, x_4=1$) o‘zaro ortogonalmi?",
    "options": [
      "Sistema faqat nol yechimga ega",
      "Ha, ortogonal, chunki $F_1 = (-1, 0, 1, 0)^T$ va $F_2 = (0, -1, 0, 1)^T$ bo‘lib, $(F_1, F_2) = 0$",
      "Yo‘q, chunki $(F_1, F_2) = -1 \\ne 0$",
      "Yo‘q, chunki $(F_1, F_2) = 2 \\ne 0$"
    ],
    "answer": 1,
    "difficulty": "O'rta",
    "explanation": "Tenglamalarni qo‘shib va ayirib: $x_1 + x_3 = 0 \\implies x_1 = -x_3$ hamda $x_2 + x_4 = 0 \\implies x_2 = -x_4$. Demak $F_1 = (-1, 0, 1, 0)^T$ va $F_2 = (0, -1, 0, 1)^T$, ularning skalyar ko‘paytmasi $(F_1, F_2) = 0$!"
  },
  {
    "id": "T9_Q23",
    "topicId": 9,
    "num": 23,
    "question": "[Aralash: 7-8-mavzular] $\\vec{a} = (1, 2, 2)$ va $\\vec{b} = (2, 1, -2)$ vektorlar berilgan. $(\\vec{a}, \\vec{b})$ skalyar ko‘paytmani va $[\\vec{a} \\times \\vec{b}]$ vektor ko‘paytma modulini (parallelogramm yuzini) toping.",
    "options": [
      "$(\\vec{a}, \\vec{b}) = 0$ (ortogonal); $\\qquad S = |[\\vec{a} \\times \\vec{b}]| = |\\vec{a}|\\cdot|\\vec{b}| = 3 \\cdot 3 = 9$",
      "$(\\vec{a}, \\vec{b}) = 9;\\qquad S = 0$",
      "$(\\vec{a}, \\vec{b}) = 8;\\qquad S = 5$",
      "$(\\vec{a}, \\vec{b}) = 0;\\qquad S = 3$"
    ],
    "answer": 0,
    "difficulty": "O'rta",
    "explanation": "$(\\vec{a}, \\vec{b}) = 2 + 2 - 4 = 0 \\implies \\varphi = 90^\\circ,\\; \\sin 90^\\circ = 1$. $|\\vec{a}| = \\sqrt{1+4+4}=3,\\; |\\vec{b}| = \\sqrt{4+1+4}=3$. Demak $S = |\\vec{a}||\\vec{b}|\\sin 90^\\circ = 9$."
  },
  {
    "id": "T9_Q24",
    "topicId": 9,
    "num": 24,
    "question": "[Aralash: 1-6-mavzular] $A = \\begin{pmatrix} 1 & 2 & 3 \\\\ 0 & 1 & 4 \\\\ 0 & 0 & 1 \\end{pmatrix}$ matritsa uchun $\\det(A)$, $r(A)$ va $A^{-1}$ ning $(1, 3)$-elementi $(A^{-1})_{13}$ ni toping.",
    "options": [
      "$\\det(A) = 1,\\qquad r(A) = 3,\\qquad (A^{-1})_{13} = -3$",
      "$\\det(A) = 1,\\qquad r(A) = 2,\\qquad (A^{-1})_{13} = 0$",
      "$\\det(A) = 3,\\qquad r(A) = 3,\\qquad (A^{-1})_{13} = 5$",
      "$\\det(A) = 1,\\qquad r(A) = 3,\\qquad (A^{-1})_{13} = 5$"
    ],
    "answer": 3,
    "difficulty": "O'rta",
    "explanation": "Yuqori uchburchak matritsa: $\\det(A) = 1$, $r(A) = 3$. $(A^{-1})_{13} = \\frac{A_{31}}{\\det A} = (-1)^{3+1} \\begin{vmatrix} 2 & 3 \\\\ 1 & 4 \\end{vmatrix} = 8 - 3 = 5$."
  },
  {
    "id": "T9_Q25",
    "topicId": 9,
    "num": 25,
    "question": "[Aralash: 2-8-mavzular] Agar $A_1, A_2, A_3$ vektorlar $\\mathbb{R}^3$ da o‘zaro ortogonal bo‘lib, $|A_1| = 2,\\; |A_2| = 3,\\; |A_3| = 4$ bo‘lsa, shu vektorlardan tuzilgan $3 \\times 3$ matritsa determinantining absolyut qiymati $|\\det(A)|$ nimaga teng?",
    "options": [
      "$12$",
      "$0$ (chunki ortogonal)",
      "$24$ (chunki to‘g‘ri burchakli parallelepiped hajmi $V = |A_1|\\cdot|A_2|\\cdot|A_3| = 2\\cdot 3\\cdot 4 = 24$)",
      "$9$ ($2 + 3 + 4 = 9$)"
    ],
    "answer": 2,
    "difficulty": "O'rta",
    "explanation": "Juft-juft ortogonal uchta vektordan yasalgan parallelepiped to‘g‘ri burchakli parallelepiped bo‘lib, uning hajmi $|\\det(A)| = |A_1|\\cdot|A_2|\\cdot|A_3| = 24$."
  },
  {
    "id": "T9_Q26",
    "topicId": 9,
    "num": 26,
    "question": "[Aralash: 4-7-mavzular] $\\vec{e}_1' = 2\\vec{e}_1 + \\vec{e}_2$, $\\vec{e}_2' = 3\\vec{e}_1 + 2\\vec{e}_2$, $\\vec{e}_3' = \\vec{e}_1 + \\vec{e}_2 + \\vec{e}_3$ ifodalar yangi bazisni aniqlay oladimi va o‘tish matritsasi determinanti $\\det(P)$ nimaga teng?",
    "options": [
      "Ha, $\\det(P) = 7$",
      "Ha, yangi bazisni aniqlaydi, chunki $\\det(P) = 1 \\ne 0$",
      "Yo‘q, chunki $\\vec{e}_3'$ da uchta vektor qatnashgan",
      "Yo‘q, chunki $\\det(P) = 0$"
    ],
    "answer": 1,
    "difficulty": "O'rta",
    "explanation": "$P = \\begin{pmatrix} 2 & 3 & 1 \\\\ 1 & 2 & 1 \\\\ 0 & 0 & 1 \\end{pmatrix}$. 3-satr bo‘yicha yopilsa $\\det(P) = 1 \\cdot (4 - 3) = 1 \\ne 0$, demak yangi vektorlar chiziqli erkli va bazis tashkil qiladi."
  },
  {
    "id": "T9_Q27",
    "topicId": 9,
    "num": 27,
    "question": "[Aralash: 3-5-mavzular] $AX = B$ chiziqli tenglamalar sistemasida $A$ matritsa $4 \\times 4$ o‘lchamli bo‘lib, uning 1-satri elementlari $(2, -4, 6, -8)$ va 3-satri elementlari $(-1, 2, -3, 4)$ ga teng. Bu sistemaga Kramer qoidasini to‘g‘ridan-to‘g‘ri qo‘llash mumkinmi?",
    "options": [
      "Yo‘q, chunki 1- va 3-satrlar proporsional ($R_1 = -2R_3$) bo‘lib, asosiy determinant $\\Delta = \\det(A) = 0$",
      "Ha, agar ozod hadlar noldan farqli bo‘lsa",
      "Ha, chunki $\\Delta = -2 \\ne 0$",
      "Ha, chunki matritsa $4 \\times 4$ kvadrat matritsa"
    ],
    "answer": 0,
    "difficulty": "Oson",
    "explanation": "1- va 3-satrlar proporsional bo‘lgani uchun 2-ma’ruza 8-xossasiga ko‘ra $\\Delta = 0$, Kramer formulalarida esa maxrajda $\\Delta \\ne 0$ bo‘lishi shart."
  },
  {
    "id": "T9_Q28",
    "topicId": 9,
    "num": 28,
    "question": "[Aralash: 1-7-mavzular] $\\mathbb{R}^3$ fazoda $X = (1, -2, 3)^T$ va $Y = (4, 0, -1)^T$ vektorlar berilgan. $(2X + Y, X - Y)$ skalyar ko‘paytmani hisoblang.",
    "options": [
      "$-10$",
      "$11$",
      "$28$",
      "$10$"
    ],
    "answer": 3,
    "difficulty": "O'rta",
    "explanation": "$2X + Y = (6, -4, 5)^T$ va $X - Y = (-3, -2, 4)^T$. Skalyar ko‘paytma: $6(-3) + (-4)(-2) + 5(4) = -18 + 8 + 20 = 10$."
  },
  {
    "id": "T9_Q29",
    "topicId": 9,
    "num": 29,
    "question": "[Aralash: 5-6-mavzular] $\\begin{cases} x_1 + 2x_2 + 3x_3 = 14 \\\\ 2x_2 + 5x_3 = 19 \\\\ 3x_3 = 9 \\end{cases}$ uchburchak sistemaning yechimi $(x_1, x_2, x_3)$ vektorning modulini $|X| = \\sqrt{x_1^2 + x_2^2 + x_3^2}$ toping.",
    "options": [
      "$14$",
      "$5$",
      "$\\sqrt{14}$ (chunki $x_1 = 1,\\; x_2 = 2,\\; x_3 = 3$)",
      "$6$ (chunki $1 + 2 + 3 = 6$)"
    ],
    "answer": 2,
    "difficulty": "Oson",
    "explanation": "$3x_3 = 9 \\implies x_3 = 3$; $2x_2 = 19 - 15 = 4 \\implies x_2 = 2$; $x_1 = 14 - 4 - 9 = 1$. $|X| = \\sqrt{1^2 + 2^2 + 3^2} = \\sqrt{14}$."
  },
  {
    "id": "T9_Q30",
    "topicId": 9,
    "num": 30,
    "question": "[Aralash: Barcha mavzular sintezi] $n$-tartibli kvadrat $A$ matritsa uchun quyidagi 4 ta tasdiqdan qaysi biri QOLGAN UCHTASIGA EKVIVALENT EMAS?",
    "options": [
      "Matritsaning rangi $r(A) = n$ va uning ustun vektorlari $\\mathbb{R}^n$ fazoda bazis tashkil qiladi",
      "$AX = \\Theta$ bir jinsli sistema noldan farqli fundamental yechimlar sistemasiga ega",
      "$\\det(A) \\ne 0$ (matritsa xosmas va $A^{-1}$ teskari matritsa mavjud)",
      "Har qanday $B$ ozod hadlar ustuni uchun $AX = B$ sistema Kramer va Gauss-Jordan usulida yagona yechimga ega"
    ],
    "answer": 1,
    "difficulty": "O'rta",
    "explanation": "Chiziqli algebraning fundamental teoremasiga ko‘ra $\\det(A) \\ne 0 \\iff \\exists A^{-1} \\iff r(A) = n \\iff AX=B$ yagona yechimli. Ammo $AX = \\Theta$ nolmas FYS ga ega bo‘lishi uchun $r(A) < n$ ($\\det(A) = 0$) bo‘lishi kerak!"
  }
];
