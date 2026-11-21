// Cyber University Davlat Universiteti — Chiziqli Algebra Oraliq Nazorat (10 ta Variant)
// Har bir variantda: 17 ta o'zgarmas amaliy misol + barcha 8 mavzuni qamrab olgan 8 ta yangi nazariy savol = 25 ta savol
// 2–10-variantlarda misol raqamlari (1..25) har safar o'zgaradi!
window.MIDTERM_VARIANTS = [
  {
    "variant": 1,
    "title": "Oraliq Nazorat — 1-Variant",
    "subtitle": "17 ta amaliy misol (rasmdagi tartibda) + barcha 8 mavzudan 8 ta nazariy savol",
    "practicalCount": 17,
    "theoryCount": 8,
    "total": 25,
    "questions": [
      {
        "id": "ON_V1_Q1",
        "variant": 1,
        "num": 1,
        "origNum": 1,
        "topicId": 1,
        "kind": "Amaliy",
        "difficulty": "Oson",
        "question": "$A$ va $B$ matritsalarning yig‘indisi uchun bosh diagonal elementlarining ko‘paytmasini toping: $$A = \\begin{bmatrix} 2 & 1 & -1 \\\\ 0 & 3 & 2 \\\\ 4 & -2 & 5 \\end{bmatrix}, \\qquad B = \\begin{bmatrix} 1 & -1 & 3 \\\\ 2 & 1 & -2 \\\\ -3 & 2 & 1 \\end{bmatrix}$$",
        "options": [
          "$72$",
          "$60$",
          "$13$",
          "$48$"
        ],
        "answer": 0,
        "explanation": "$A + B$ matritsaning bosh diagonal elementlari: $(2+1)=3$, $(3+1)=4$, $(5+1)=6$. Ularning ko‘paytmasi: $3 \\cdot 4 \\cdot 6 = 72$."
      },
      {
        "id": "ON_V1_Q2",
        "variant": 1,
        "num": 2,
        "origNum": 2,
        "topicId": 1,
        "kind": "Amaliy",
        "difficulty": "Oson",
        "question": "$A$ va $B$ matritsalarning ayirmasi uchun bosh diagonal elementlarining yig‘indisini toping: $$A = \\begin{bmatrix} 5 & -2 & 1 \\\\ 3 & 4 & -1 \\\\ 0 & 2 & 6 \\end{bmatrix}, \\qquad B = \\begin{bmatrix} 2 & 1 & -3 \\\\ -1 & 2 & 4 \\\\ 3 & 0 & 2 \\end{bmatrix}$$",
        "options": [
          "$24$",
          "$7$",
          "$15$",
          "$9$"
        ],
        "answer": 3,
        "explanation": "$A - B$ matritsaning bosh diagonal elementlari: $(5-2)=3$, $(4-2)=2$, $(6-2)=4$. Ularning yig‘indisi: $3 + 2 + 4 = 9$."
      },
      {
        "id": "ON_V1_Q3",
        "variant": 1,
        "num": 3,
        "origNum": 3,
        "topicId": 1,
        "kind": "Amaliy",
        "difficulty": "O'rta",
        "question": "$A$ va $B$ matritsalarning ko‘paytmasi uchun 3-qator elementlarini toping: $$A = \\begin{bmatrix} 1 & 2 & -1 \\\\ 3 & 0 & 2 \\\\ 2 & -1 & 3 \\end{bmatrix}, \\qquad B = \\begin{bmatrix} 2 & 1 & 0 \\\\ -1 & 3 & 2 \\\\ 1 & -2 & 4 \\end{bmatrix}$$",
        "options": [
          "$(6;\\; -7;\\; 12)$",
          "$(8;\\; 7;\\; 10)$",
          "$(8;\\; -7;\\; 10)$",
          "$(2;\\; 2;\\; 12)$"
        ],
        "answer": 2,
        "explanation": "$A$ ning 3-qatori $(2, -1, 3)$ ni $B$ ning ustunlariga ko‘paytiramiz: $c_{31} = 2\\cdot 2 + (-1)(-1) + 3\\cdot 1 = 8$; $c_{32} = 2\\cdot 1 + (-1)\\cdot 3 + 3(-2) = -7$; $c_{33} = 2\\cdot 0 + (-1)\\cdot 2 + 3\\cdot 4 = 10$."
      },
      {
        "id": "ON_V1_Q4",
        "variant": 1,
        "num": 4,
        "origNum": 4,
        "topicId": 7,
        "kind": "Amaliy",
        "difficulty": "Oson",
        "question": "$A$ vektor uchun $-3A$ vektorning qiymatini toping: $$A = (2;\\; -3;\\; 5)$$",
        "options": [
          "$(-1;\\; -6;\\; 2)$",
          "$(-6;\\; 9;\\; -15)$",
          "$(6;\\; -9;\\; 15)$",
          "$(-6;\\; -9;\\; -15)$"
        ],
        "answer": 1,
        "explanation": "Vektorni $-3$ songa ko‘paytirishda har bir komponent $-3$ ga ko‘paytiriladi: $(-3\\cdot 2;\\; -3\\cdot(-3);\\; -3\\cdot 5) = (-6;\\; 9;\\; -15)$."
      },
      {
        "id": "ON_V1_Q5",
        "variant": 1,
        "num": 5,
        "origNum": 5,
        "topicId": 2,
        "kind": "Amaliy",
        "difficulty": "Oson",
        "question": "2-tartibli determinantni hisoblang: $$\\begin{vmatrix} 4 & -3 \\\\ 2 & 5 \\end{vmatrix}$$",
        "options": [
          "$26$",
          "$-26$",
          "$20$",
          "$14$"
        ],
        "answer": 0,
        "explanation": "$4 \\cdot 5 - (-3) \\cdot 2 = 20 - (-6) = 26$."
      },
      {
        "id": "ON_V1_Q6",
        "variant": 1,
        "num": 6,
        "origNum": 6,
        "topicId": 2,
        "kind": "Amaliy",
        "difficulty": "Oson",
        "question": "2-tartibli determinantni hisoblang: $$\\begin{vmatrix} -3 & 6 \\\\ 4 & -5 \\end{vmatrix}$$",
        "options": [
          "$-39$",
          "$9$",
          "$39$",
          "$-9$"
        ],
        "answer": 3,
        "explanation": "$(-3) \\cdot (-5) - 6 \\cdot 4 = 15 - 24 = -9$."
      },
      {
        "id": "ON_V1_Q7",
        "variant": 1,
        "num": 7,
        "origNum": 7,
        "topicId": 1,
        "kind": "Nazariy",
        "difficulty": "Oson",
        "question": "[Nazariy • 1-Ma’ruza] Matritsa to‘g‘risidagi dastlabki ma’lumotlar qaysi davlatga borib taqaladi va u yerda matritsani qanday atashgan?",
        "options": [
          "Qadimgi Misrga borib taqaladi va uni «Oltin piramida» deb atashgan",
          "Qadimgi Xitoyga borib taqaladi va ular matritsani «Sehrli kvadrat» deb atashgan",
          "Qadimgi Yunonistonga borib taqaladi va uni «Evklid jadvali» deb atashgan",
          "Qadimgi Hindistonga borib taqaladi va uni «Shaxmat taxtasi» deb atashgan"
        ],
        "answer": 1,
        "explanation": "1-ma’ruza (4-slayd): Matritsa to‘g‘risidagi dastlabki ma’lumotlar qadimgi Xitoyga borib taqaladi. Ular matritsani «Sehrli kvadrat» deb atashgan."
      },
      {
        "id": "ON_V1_Q8",
        "variant": 1,
        "num": 8,
        "origNum": 8,
        "topicId": 2,
        "kind": "Amaliy",
        "difficulty": "O'rta",
        "question": "3-tartibli determinantni hisoblang: $$\\begin{vmatrix} 1 & 2 & -1 \\\\ 3 & 1 & 2 \\\\ 2 & -1 & 3 \\end{vmatrix}$$",
        "options": [
          "$15$",
          "$0$",
          "$10$",
          "$-10$"
        ],
        "answer": 1,
        "explanation": "$1(1\\cdot 3 - 2(-1)) - 2(3\\cdot 3 - 2\\cdot 2) + (-1)(3(-1) - 1\\cdot 2) = 1(5) - 2(5) - 1(-5) = 5 - 10 + 5 = 0$ (shuningdek 3-satr = 2-satr $-$ 1-satr)."
      },
      {
        "id": "ON_V1_Q9",
        "variant": 1,
        "num": 9,
        "origNum": 9,
        "topicId": 2,
        "kind": "Amaliy",
        "difficulty": "O'rta",
        "question": "3-tartibli determinantni hisoblang: $$\\begin{vmatrix} 2 & 0 & 1 \\\\ -1 & 3 & 2 \\\\ 4 & 1 & -1 \\end{vmatrix}$$",
        "options": [
          "$-23$",
          "$3$",
          "$-13$",
          "$23$"
        ],
        "answer": 0,
        "explanation": "1-satr bo‘yicha yoyamiz: $2(3(-1) - 2\\cdot 1) - 0 + 1((-1)\\cdot 1 - 3\\cdot 4) = 2(-5) + 1(-13) = -10 - 13 = -23$."
      },
      {
        "id": "ON_V1_Q10",
        "variant": 1,
        "num": 10,
        "origNum": 10,
        "topicId": 2,
        "kind": "Nazariy",
        "difficulty": "Oson",
        "question": "[Nazariy • 2-Ma’ruza] 2-tartibli $\\begin{vmatrix} a_{11} & a_{12} \\\\ a_{21} & a_{22} \\end{vmatrix}$ determinant qaysi formula bilan aniqlanadi?",
        "options": [
          "$(a_{11} + a_{22}) - (a_{12} + a_{21})$",
          "$a_{11} \\cdot a_{22} + a_{12} \\cdot a_{21}$ (ikkala diagonal ko‘paytmalari qo‘shiladi)",
          "$a_{11} \\cdot a_{12} - a_{21} \\cdot a_{22}$ (satr elementlari ko‘paytmalari ayriladi)",
          "$a_{11} \\cdot a_{22} - a_{12} \\cdot a_{21}$ (bosh diagonal ko‘paytmasidan yordamchi diagonal ko‘paytmasi ayriladi)"
        ],
        "answer": 3,
        "explanation": "2-ma’ruza (15-slayd): 2-tartibli determinant $\\Delta = a_{11} \\cdot a_{22} - a_{12} \\cdot a_{21}$ formula bilan aniqlanadi."
      },
      {
        "id": "ON_V1_Q11",
        "variant": 1,
        "num": 11,
        "origNum": 11,
        "topicId": 4,
        "kind": "Nazariy",
        "difficulty": "Oson",
        "question": "[Nazariy • 4-Ma’ruza] «$n$-tartibli o‘rin almashtirish» deb nimaga aytiladi va u qanday belgilanadi?",
        "options": [
          "Matritsaning satrlarini ustunlarga almashtirishga aytiladi va $A^T$ bilan belgilanadi",
          "Faqat juft sonlar to‘plamiga aytiladi",
          "$1, 2, 3, \\dots, n$ sonlarning ma’lum bir tartibda joylashtirib yozilishiga aytiladi va $P$ harfi bilan belgilanadi",
          "Sonlarni bir-biriga qo‘shish amaliga aytiladi"
        ],
        "answer": 2,
        "explanation": "4-ma’ruza (6-slayd): $1, 2, 3, \\dots, n$ sonlarning biror bir tartibda yozilishiga $n$-tartibli o‘rin almashtirish deyiladi va $P$ harfi bilan belgilanadi."
      },
      {
        "id": "ON_V1_Q12",
        "variant": 1,
        "num": 12,
        "origNum": 12,
        "topicId": 3,
        "kind": "Nazariy",
        "difficulty": "Oson",
        "question": "[Nazariy • 3-Ma’ruza] Qanday kvadrat matritsaga «xos matritsa» (maxsus matritsa) deyiladi?",
        "options": [
          "Determinanti nolga teng bo‘lgan ($\\det(A) = 0$) kvadrat matritsaga",
          "Barcha elementlari musbat bo‘lgan matritsaga",
          "Determinanti noldan farqli bo‘lgan ($\\det(A) \\ne 0$) kvadrat matritsaga",
          "Determinanti $1$ ga teng bo‘lgan kvadrat matritsaga"
        ],
        "answer": 0,
        "explanation": "3-ma’ruza (4-slayd): Kvadrat matritsaning determinanti nolga teng bo‘lsa, u holda bunday matritsaga xos matritsa deyiladi."
      },
      {
        "id": "ON_V1_Q13",
        "variant": 1,
        "num": 13,
        "origNum": 13,
        "topicId": 3,
        "kind": "Amaliy",
        "difficulty": "O'rta",
        "question": "$A$ matritsa uchun teskari matritsaning 1-qator va 1-ustunda joylashgan elementini hisoblang: $$A = \\begin{bmatrix} 2 & 1 & 1 \\\\ 1 & 2 & 1 \\\\ 1 & 1 & 2 \\end{bmatrix}$$",
        "options": [
          "$\\frac{3}{4}$",
          "$\\frac{1}{4}$",
          "$\\frac{1}{2}$",
          "$-\\frac{1}{4}$"
        ],
        "answer": 0,
        "explanation": "$\\det(A) = 2(4-1) - 1(2-1) + 1(1-2) = 6 - 1 - 1 = 4$. $A_{11} = (-1)^{1+1}\\begin{vmatrix} 2 & 1 \\\\ 1 & 2 \\end{vmatrix} = 3$. Demak $(A^{-1})_{11} = \\frac{A_{11}}{\\det A} = \\frac{3}{4}$."
      },
      {
        "id": "ON_V1_Q14",
        "variant": 1,
        "num": 14,
        "origNum": 14,
        "topicId": 5,
        "kind": "Nazariy",
        "difficulty": "Oson",
        "question": "[Nazariy • 5-Ma’ruza] Chiziqli tenglamalar sistemasining «asosiy matritsasi» $A$ va «kengaytirilgan matritsasi» $(A \\mid B)$ orasidagi farq nimadan iborat (19-slayd)?",
        "options": [
          "Asosiy matritsa $A$ faqat noma’lumlar oldidagi koeffitsiyentlardan tuziladi; kengaytirilgan matritsa $(A \\mid B)$ esa asosiy matritsaga ozod hadlar ustuni $B$ ni qo‘shishdan hosil bo‘ladi",
          "Asosiy matritsa kvadrat bo‘ladi, kengaytirilgan matritsa esa transponirlangan matritsa bo‘ladi",
          "Asosiy matritsada ozod hadlar qatnashadi, kengaytirilgan matritsada esa qatnashmaydi",
          "Kengaytirilgan matritsa asosiy matritsaning teskarisiga teng bo‘ladi"
        ],
        "answer": 0,
        "explanation": "5-ma’ruza (19-slayd): $(A \\mid B)$ kengaytirilgan matritsa $A$ asosiy matritsaning o‘ng tomoniga $B$ ozod hadlar ustunini yozish orqali hosil qilinadi."
      },
      {
        "id": "ON_V1_Q15",
        "variant": 1,
        "num": 15,
        "origNum": 15,
        "topicId": 5,
        "kind": "Amaliy",
        "difficulty": "Oson",
        "question": "Ushbu 2-tartibli tenglamalar sistemasini yeching: $$\\begin{cases} 2x + 3y = 7 \\\\ 3x - y = 5 \\end{cases}$$",
        "options": [
          "$(-2;\\; 1)$",
          "$(1;\\; 2)$",
          "$(2;\\; 1)$",
          "$(2;\\; -1)$"
        ],
        "answer": 2,
        "explanation": "Kramer usuli bilan: $\\Delta = -2 - 9 = -11$, $\\Delta_x = -7 - 15 = -22 \\implies x = 2$, $\\Delta_y = 10 - 21 = -11 \\implies y = 1$. Javob: $(2;\\; 1)$."
      },
      {
        "id": "ON_V1_Q16",
        "variant": 1,
        "num": 16,
        "origNum": 16,
        "topicId": 6,
        "kind": "Nazariy",
        "difficulty": "Oson",
        "question": "[Nazariy • 6-Ma’ruza] Chiziqli tenglamalar sistemasini yechishning «Gauss usuli» mohiyati nimadan iborat (5-slayd)?",
        "options": [
          "Tenglamalarni kvadratga oshirib qo‘shish",
          "Elementar satr almashtirishlari yordamida noma’lumlarni ketma-ket yo‘qotib, sistemani ekvivalent uchburchak (yoki pog‘onali) shaklga keltirish va so‘ngra teskari yurish bilan noma’lumlarni topish",
          "Har bir noma’lum uchun alohida $n$-tartibli determinant hisoblash",
          "Asosiy matritsaning barcha minorlari va algebraik to‘ldiruvchilarini hisoblash orqali teskari matritsa topish"
        ],
        "answer": 1,
        "explanation": "6-ma’ruza (5-7-slaydlar): Gauss usuli noma’lumlarni ketma-ket yo‘qotish orqali sistemani uchburchak/pog‘onali ko‘rinishga keltirishga asoslangan."
      },
      {
        "id": "ON_V1_Q17",
        "variant": 1,
        "num": 17,
        "origNum": 17,
        "topicId": 6,
        "kind": "Amaliy",
        "difficulty": "O'rta",
        "question": "Ushbu 3-tartibli tenglamalar sistemasini yeching: $$\\begin{cases} x + y + z = 6 \\\\ 2x - y + z = 3 \\\\ x + 2y - z = 2 \\end{cases}$$",
        "options": [
          "$(1;\\; 2;\\; 3)$",
          "$(1;\\; 3;\\; 2)$",
          "$(3;\\; 2;\\; 1)$",
          "$(2;\\; 1;\\; 3)$"
        ],
        "answer": 0,
        "explanation": "1- va 3-tenglamalarni qo‘shsak $2x + 3y = 8$; 1- va 2-tenglamalar ayirmasidan $-x + 2y = 3 \\implies x = 2y - 3$. O‘rniga qo‘yib $y = 2$, $x = 1$, $z = 3$ ni topamiz."
      },
      {
        "id": "ON_V1_Q18",
        "variant": 1,
        "num": 18,
        "origNum": 18,
        "topicId": 7,
        "kind": "Nazariy",
        "difficulty": "Oson",
        "question": "[Nazariy • 7-Ma’ruza] $n$ o‘lchovli $X$ va $Y$ vektorlar ustida qo‘shish ($Z = X + Y$) va songa ko‘paytirish ($\\lambda X$) chiziqli amallari qanday aniqlanadi (4-5-slaydlar)?",
        "options": [
          "Vektorlarni transponirlab determinant hisoblash orqali aniqlanadi",
          "Faqat birinchi komponentga $\\lambda$ ni ko‘paytirish orqali aniqlanadi",
          "Komponentlarni o‘zaro ko‘paytirib bitta songa keltirish orqali aniqlanadi",
          "Xuddi matritsalardagi kabi mos komponentlarini qo‘shish ($x_i + y_i$) va har bir komponentni $\\lambda$ songa ko‘paytirish ($\\lambda x_i$) orqali aniqlanadi"
        ],
        "answer": 3,
        "explanation": "7-ma’ruza (4-5-slaydlar): $n$ o‘lchovli vektorlar ustida qo‘shish va songa ko‘paytirish amallari xuddi matritsalardagi kabi komponentma-komponent bajariladi."
      },
      {
        "id": "ON_V1_Q19",
        "variant": 1,
        "num": 19,
        "origNum": 19,
        "topicId": 7,
        "kind": "Amaliy",
        "difficulty": "Oson",
        "question": "$A$ va $B$ vektorlarning skalyar ko‘paytmasini toping: $$A = (2;\\; -3;\\; 4), \\qquad B = (1;\\; 5;\\; 2)$$",
        "options": [
          "$-15$",
          "$25$",
          "$-5$",
          "$5$"
        ],
        "answer": 2,
        "explanation": "$(A, B) = 2 \\cdot 1 + (-3) \\cdot 5 + 4 \\cdot 2 = 2 - 15 + 8 = -5$."
      },
      {
        "id": "ON_V1_Q20",
        "variant": 1,
        "num": 20,
        "origNum": 20,
        "topicId": 7,
        "kind": "Amaliy",
        "difficulty": "O'rta",
        "question": "$A$ va $B$ vektorlarning vektor ko‘paytmasini toping: $$A = (1;\\; -2;\\; 3), \\qquad B = (2;\\; 1;\\; -1)$$",
        "options": [
          "$(5;\\; 7;\\; -1)$",
          "$(-1;\\; 7;\\; 5)$",
          "$(-1;\\; -7;\\; 5)$",
          "$(1;\\; -7;\\; -5)$"
        ],
        "answer": 1,
        "explanation": "$[A \\times B] = \\begin{vmatrix} \\vec{i} & \\vec{j} & \\vec{k} \\\\ 1 & -2 & 3 \\\\ 2 & 1 & -1 \\end{vmatrix} = \\vec{i}(2-3) - \\vec{j}(-1-6) + \\vec{k}(1+4) = (-1;\\; 7;\\; 5)$."
      },
      {
        "id": "ON_V1_Q21",
        "variant": 1,
        "num": 21,
        "origNum": 21,
        "topicId": 7,
        "kind": "Amaliy",
        "difficulty": "O'rta",
        "question": "$A$, $B$ va $C$ vektorlarning aralash ko‘paytmasini toping: $$A = (1;\\; 2;\\; -1), \\quad B = (3;\\; 0;\\; 2), \\quad C = (2;\\; -1;\\; 1)$$",
        "options": [
          "$7$",
          "$1$",
          "$5$",
          "$-7$"
        ],
        "answer": 0,
        "explanation": "$\\begin{vmatrix} 1 & 2 & -1 \\\\ 3 & 0 & 2 \\\\ 2 & -1 & 1 \\end{vmatrix} = 1(0+2) - 2(3-4) - 1(-3-0) = 2 + 2 + 3 = 7$."
      },
      {
        "id": "ON_V1_Q22",
        "variant": 1,
        "num": 22,
        "origNum": 22,
        "topicId": 7,
        "kind": "Amaliy",
        "difficulty": "Oson",
        "question": "Quyidagi vektorning uzunligini toping: $$A = (2;\\; -3;\\; 6)$$",
        "options": [
          "$5$",
          "$11$",
          "$49$",
          "$7$"
        ],
        "answer": 3,
        "explanation": "$|A| = \\sqrt{2^2 + (-3)^2 + 6^2} = \\sqrt{4 + 9 + 36} = \\sqrt{49} = 7$."
      },
      {
        "id": "ON_V1_Q23",
        "variant": 1,
        "num": 23,
        "origNum": 23,
        "topicId": 8,
        "kind": "Nazariy",
        "difficulty": "Oson",
        "question": "[Nazariy • 8-Ma’ruza] $A_1, A_2, \\dots, A_m$ vektorlar sistemasidan tuzilgan $A$ matritsaning rangi $r(A)$ yordamida bu vektorlar sistemasining chiziqli bog‘liqligi yoki erkliligi qanday aniqlanadi (11-slayd)?",
        "options": [
          "Agar $r(A) = m$ bo‘lsa chiziqli bog‘liq; agar $r(A) < m$ bo‘lsa chiziqli erkli bo‘ladi",
          "Agar $r(A) < m$ bo‘lsa vektorlar sistemasi chiziqli bog‘liq; agar $r(A) = m$ bo‘lsa chiziqli erkli bo‘ladi",
          "Matritsa rangi vektorlarning chiziqli erkliligiga bog‘liq emas",
          "Agar $r(A) = 0$ bo‘lsagina chiziqli erkli bo‘ladi"
        ],
        "answer": 1,
        "explanation": "8-ma’ruza (11-slayd): Agar vektorlar sistemasida $r(A) < m$ bo‘lsa, u holda vektorlar sistemasi chiziqli bog‘liq, agar $r(A) = m$ bo‘lsa, chiziqli erkli bo‘ladi."
      },
      {
        "id": "ON_V1_Q24",
        "variant": 1,
        "num": 24,
        "origNum": 24,
        "topicId": 8,
        "kind": "Amaliy",
        "difficulty": "Oson",
        "question": "$A$ vektorga ortogonal bo‘lgan vektorni toping: $$A = (2;\\; -5;\\; 1)$$",
        "options": [
          "$(3;\\; 1;\\; 2)$",
          "$(2;\\; 1;\\; 1)$",
          "$(2;\\; -1;\\; 1)$",
          "$(1;\\; 1;\\; 1)$"
        ],
        "answer": 1,
        "explanation": "Ortogonallik sharti $(A, B) = 0$. Tekshiramiz: $2\\cdot 2 + (-5)\\cdot 1 + 1\\cdot 1 = 4 - 5 + 1 = 0$. Qolgan variantlarda skalyar ko‘paytma noldan farqli."
      },
      {
        "id": "ON_V1_Q25",
        "variant": 1,
        "num": 25,
        "origNum": 25,
        "topicId": 7,
        "kind": "Amaliy",
        "difficulty": "Oson",
        "question": "$A$ va $B$ vektorlarning orasidagi burchakni toping: $$A = (1;\\; 0;\\; 1), \\qquad B = (0;\\; 1;\\; 1)$$",
        "options": [
          "$60^\\circ$ ($\\frac{\\pi}{3}$)",
          "$45^\\circ$ ($\\frac{\\pi}{4}$)",
          "$30^\\circ$ ($\\frac{\\pi}{6}$)",
          "$90^\\circ$ ($\\frac{\\pi}{2}$)"
        ],
        "answer": 0,
        "explanation": "$\\cos\\varphi = \\frac{(A, B)}{|A|\\cdot|B|} = \\frac{1\\cdot 0 + 0\\cdot 1 + 1\\cdot 1}{\\sqrt{2}\\cdot\\sqrt{2}} = \\frac{1}{2} \\implies \\varphi = 60^\\circ$ ($\\frac{\\pi}{3}$)."
      }
    ]
  },
  {
    "variant": 2,
    "title": "Oraliq Nazorat — 2-Variant",
    "subtitle": "17 ta amaliy misol (o‘zgarishsiz) + barcha 8 mavzudan 8 ta yangi nazariy savol (raqamlari o‘zgartirilgan)",
    "practicalCount": 17,
    "theoryCount": 8,
    "total": 25,
    "questions": [
      {
        "id": "ON_V2_Q1",
        "variant": 2,
        "num": 1,
        "origNum": 17,
        "topicId": 6,
        "kind": "Amaliy",
        "difficulty": "O'rta",
        "question": "Ushbu 3-tartibli tenglamalar sistemasini yeching: $$\\begin{cases} x + y + z = 6 \\\\ 2x - y + z = 3 \\\\ x + 2y - z = 2 \\end{cases}$$",
        "options": [
          "$(2;\\; 1;\\; 3)$",
          "$(1;\\; 2;\\; 3)$",
          "$(1;\\; 3;\\; 2)$",
          "$(3;\\; 2;\\; 1)$"
        ],
        "answer": 1,
        "explanation": "1- va 3-tenglamalarni qo‘shsak $2x + 3y = 8$; 1- va 2-tenglamalar ayirmasidan $-x + 2y = 3 \\implies x = 2y - 3$. O‘rniga qo‘yib $y = 2$, $x = 1$, $z = 3$ ni topamiz."
      },
      {
        "id": "ON_V2_Q2",
        "variant": 2,
        "num": 2,
        "origNum": 12,
        "topicId": 3,
        "kind": "Nazariy",
        "difficulty": "O'rta",
        "question": "[Nazariy • 3-Ma’ruza] Qo‘shma matritsa $\\bar{A}$ ning 1-satri qaysi algebraik to‘ldiruvchilardan tashkil topadi?",
        "options": [
          "Bosh diagonal algebraik to‘ldiruvchilaridan: $(A_{11},\\; A_{22},\\; \\dots,\\; A_{nn})$",
          "Transponirlangani sababli 1-ustun elementlarining algebraik to‘ldiruvchilaridan: $(A_{11},\\; A_{21},\\; \\dots,\\; A_{n1})$",
          "Oxirgi satr algebraik to‘ldiruvchilaridan",
          "1-satr elementlarining algebraik to‘ldiruvchilaridan: $(A_{11},\\; A_{12},\\; \\dots,\\; A_{1n})$"
        ],
        "answer": 1,
        "explanation": "3-ma’ruza (5-6-slaydlar): Algebraik to‘ldiruvchilar matritsasi transponirlanganda 1-ustun $(A_{11}, A_{21}, \\dots, A_{n1})^T$ qo‘shma matritsaning 1-satriga aylanadi."
      },
      {
        "id": "ON_V2_Q3",
        "variant": 2,
        "num": 3,
        "origNum": 14,
        "topicId": 5,
        "kind": "Nazariy",
        "difficulty": "Oson",
        "question": "[Nazariy • 5-Ma’ruza] **Kroneker-Kapelli teoremasi** (19-slayd): Chiziqli tenglamalar sistemasi birgalikda bo‘lishi uchun qanday shart zarur va yetarli?",
        "options": [
          "$\\det(A) = 0$ bo‘lishi zarur va yetarli",
          "$\\text{rang}(A) = \\text{rang}(A \\mid B)$ bo‘lishi (asosiy matritsa rangi kengaytirilgan matritsa rangiga teng bo‘lishi) zarur va yetarli",
          "$\\text{rang}(A) < \\text{rang}(A \\mid B)$ bo‘lishi zarur va yetarli",
          "Tenglamalar soni $m$ noma’lumlar soni $n$ ga teng bo‘lishi zarur va yetarli"
        ],
        "answer": 1,
        "explanation": "5-ma’ruza (19-slayd): Kroneker-Kapelli teoremasi: Chiziqli tenglamalar sistemasi birgalikda bo‘lishi uchun $\\text{rang}(A) = \\text{rang}(A \\mid B)$ bo‘lishi zarur va yetarli."
      },
      {
        "id": "ON_V2_Q4",
        "variant": 2,
        "num": 4,
        "origNum": 2,
        "topicId": 1,
        "kind": "Amaliy",
        "difficulty": "Oson",
        "question": "$A$ va $B$ matritsalarning ayirmasi uchun bosh diagonal elementlarining yig‘indisini toping: $$A = \\begin{bmatrix} 5 & -2 & 1 \\\\ 3 & 4 & -1 \\\\ 0 & 2 & 6 \\end{bmatrix}, \\qquad B = \\begin{bmatrix} 2 & 1 & -3 \\\\ -1 & 2 & 4 \\\\ 3 & 0 & 2 \\end{bmatrix}$$",
        "options": [
          "$9$",
          "$15$",
          "$7$",
          "$24$"
        ],
        "answer": 0,
        "explanation": "$A - B$ matritsaning bosh diagonal elementlari: $(5-2)=3$, $(4-2)=2$, $(6-2)=4$. Ularning yig‘indisi: $3 + 2 + 4 = 9$."
      },
      {
        "id": "ON_V2_Q5",
        "variant": 2,
        "num": 5,
        "origNum": 21,
        "topicId": 7,
        "kind": "Amaliy",
        "difficulty": "O'rta",
        "question": "$A$, $B$ va $C$ vektorlarning aralash ko‘paytmasini toping: $$A = (1;\\; 2;\\; -1), \\quad B = (3;\\; 0;\\; 2), \\quad C = (2;\\; -1;\\; 1)$$",
        "options": [
          "$-7$",
          "$7$",
          "$1$",
          "$5$"
        ],
        "answer": 1,
        "explanation": "$\\begin{vmatrix} 1 & 2 & -1 \\\\ 3 & 0 & 2 \\\\ 2 & -1 & 1 \\end{vmatrix} = 1(0+2) - 2(3-4) - 1(-3-0) = 2 + 2 + 3 = 7$."
      },
      {
        "id": "ON_V2_Q6",
        "variant": 2,
        "num": 6,
        "origNum": 22,
        "topicId": 7,
        "kind": "Amaliy",
        "difficulty": "Oson",
        "question": "Quyidagi vektorning uzunligini toping: $$A = (2;\\; -3;\\; 6)$$",
        "options": [
          "$7$",
          "$5$",
          "$49$",
          "$11$"
        ],
        "answer": 0,
        "explanation": "$|A| = \\sqrt{2^2 + (-3)^2 + 6^2} = \\sqrt{4 + 9 + 36} = \\sqrt{49} = 7$."
      },
      {
        "id": "ON_V2_Q7",
        "variant": 2,
        "num": 7,
        "origNum": 18,
        "topicId": 7,
        "kind": "Nazariy",
        "difficulty": "Oson",
        "question": "[Nazariy • 7-Ma’ruza] Vektorlarning skalyar ko‘paytmasi qanday 5 ta asosiy xossaga ega (11-slayd)?",
        "options": [
          "$1^\\circ.\\;(X,X) \\ge 0;\\quad 2^\\circ.\\;(X,X) = 0 \\iff X = \\Theta;\\quad 3^\\circ.\\;(X,Y) = (Y,X);\\quad 4^\\circ.\\;(X, Y+Z) = (X,Y)+(X,Z);\\quad 5^\\circ.\\;(\\lambda X, Y) = \\lambda(X,Y)$",
          "$1^\\circ.\\;(X,X) < 0;\\quad 2^\\circ.\\;(X,Y) = -(Y,X);\\quad 3^\\circ.\\;(\\lambda X, Y) = \\lambda^2 (X,Y)$",
          "Skalyar ko‘paytma natijasi har doim vektor bo‘ladi",
          "$(X,X) = 0$ tenglik har qanday birlik vektor uchun o‘rinli"
        ],
        "answer": 0,
        "explanation": "7-ma’ruza (11-slayd): Vektorlarning skalyar ko‘paytmasi nomanfiylik, aniqlanganlik, simmetriklik (kommutativlik) va chiziqlilik xossalariga ega."
      },
      {
        "id": "ON_V2_Q8",
        "variant": 2,
        "num": 8,
        "origNum": 3,
        "topicId": 1,
        "kind": "Amaliy",
        "difficulty": "O'rta",
        "question": "$A$ va $B$ matritsalarning ko‘paytmasi uchun 3-qator elementlarini toping: $$A = \\begin{bmatrix} 1 & 2 & -1 \\\\ 3 & 0 & 2 \\\\ 2 & -1 & 3 \\end{bmatrix}, \\qquad B = \\begin{bmatrix} 2 & 1 & 0 \\\\ -1 & 3 & 2 \\\\ 1 & -2 & 4 \\end{bmatrix}$$",
        "options": [
          "$(2;\\; 2;\\; 12)$",
          "$(6;\\; -7;\\; 12)$",
          "$(8;\\; 7;\\; 10)$",
          "$(8;\\; -7;\\; 10)$"
        ],
        "answer": 3,
        "explanation": "$A$ ning 3-qatori $(2, -1, 3)$ ni $B$ ning ustunlariga ko‘paytiramiz: $c_{31} = 2\\cdot 2 + (-1)(-1) + 3\\cdot 1 = 8$; $c_{32} = 2\\cdot 1 + (-1)\\cdot 3 + 3(-2) = -7$; $c_{33} = 2\\cdot 0 + (-1)\\cdot 2 + 3\\cdot 4 = 10$."
      },
      {
        "id": "ON_V2_Q9",
        "variant": 2,
        "num": 9,
        "origNum": 11,
        "topicId": 4,
        "kind": "Nazariy",
        "difficulty": "Oson",
        "question": "[Nazariy • 4-Ma’ruza] $P$ o‘rin almashtirish qachon «juft» va qachon «toq» o‘rin almashtirish deyiladi?",
        "options": [
          "Birinchi elementi juft son bo‘lsa — juft, toq son bo‘lsa — toq deyiladi",
          "Oxirgi elementi juft son bo‘lsa — juft deyiladi",
          "Elementlar soni $n$ juft bo‘lsa — juft, $n$ toq bo‘lsa — toq deyiladi",
          "Undagi inversiyalarning umumiy soni $\\text{inv} P$ juft son bo‘lsa — juft, toq son bo‘lsa — toq o‘rin almashtirish deyiladi"
        ],
        "answer": 3,
        "explanation": "4-ma’ruza (7-slayd): $\\text{inv} P$ soni juft yoki toq bo‘lganiga qarab $P$ o‘rin almashtirish juft yoki toq deyiladi."
      },
      {
        "id": "ON_V2_Q10",
        "variant": 2,
        "num": 10,
        "origNum": 9,
        "topicId": 2,
        "kind": "Amaliy",
        "difficulty": "O'rta",
        "question": "3-tartibli determinantni hisoblang: $$\\begin{vmatrix} 2 & 0 & 1 \\\\ -1 & 3 & 2 \\\\ 4 & 1 & -1 \\end{vmatrix}$$",
        "options": [
          "$-13$",
          "$-23$",
          "$23$",
          "$3$"
        ],
        "answer": 1,
        "explanation": "1-satr bo‘yicha yoyamiz: $2(3(-1) - 2\\cdot 1) - 0 + 1((-1)\\cdot 1 - 3\\cdot 4) = 2(-5) + 1(-13) = -10 - 13 = -23$."
      },
      {
        "id": "ON_V2_Q11",
        "variant": 2,
        "num": 11,
        "origNum": 10,
        "topicId": 2,
        "kind": "Nazariy",
        "difficulty": "Oson",
        "question": "[Nazariy • 2-Ma’ruza] Determinantning 3-xossasi: Yuqori yoki quyi uchburchakli matritsaning determinanti nimaga teng?",
        "options": [
          "Uning bosh diagonal elementlari ko‘paytmasiga teng ($a_{11} \\cdot a_{22} \\cdot \\dots \\cdot a_{nn}$)",
          "Bosh diagonal elementlari yig‘indisiga teng",
          "Uning yordamchi diagonal elementlari ko‘paytmasiga teng",
          "Noldan farqli barcha elementlari yig‘indisiga teng"
        ],
        "answer": 0,
        "explanation": "2-ma’ruza (7-slayd, 3-xossa): Yuqori yoki quyi uchburchakli matritsaning determinanti uning bosh diagonal elementlari ko‘paytmasiga teng."
      },
      {
        "id": "ON_V2_Q12",
        "variant": 2,
        "num": 12,
        "origNum": 16,
        "topicId": 6,
        "kind": "Nazariy",
        "difficulty": "Oson",
        "question": "[Nazariy • 6-Ma’ruza] Gauss usulida to‘g‘ri yurish natijasida kengaytirilgan matritsada barcha elementlari noldan iborat $(0\\; 0\\; \\dots\\; 0 \\mid 0)$ satr hosil bo‘lsa, bu nimani bildiradi (8-9-slaydlar)?",
        "options": [
          "Hisoblashda xatolik ketganini bildiradi",
          "Sistemaning barcha noma’lumlari $0$ ga teng ekanligini bildiradi",
          "Mos tenglama qolgan tenglamalarning chiziqli kombinatsiyasi ekanligini bildiradi; bu nol satr tashlab yuboriladi va sistemaning rangi tenglamalar sonidan kichik bo‘ladi",
          "Sistema birgalikda emasligini (yechimga ega emasligini) bildiradi"
        ],
        "answer": 2,
        "explanation": "6-ma’ruza (8-9-slaydlar): $(0\\; 0\\; 0\\; 0 \\mid 0)$ satr tashlab yuboriladi va qolgan pog‘onali tenglamalardan erkli o‘zgaruvchi $\\alpha \\in \\mathbb{R}$ orqali umumiy yechim yoziladi."
      },
      {
        "id": "ON_V2_Q13",
        "variant": 2,
        "num": 13,
        "origNum": 5,
        "topicId": 2,
        "kind": "Amaliy",
        "difficulty": "Oson",
        "question": "2-tartibli determinantni hisoblang: $$\\begin{vmatrix} 4 & -3 \\\\ 2 & 5 \\end{vmatrix}$$",
        "options": [
          "$14$",
          "$26$",
          "$20$",
          "$-26$"
        ],
        "answer": 1,
        "explanation": "$4 \\cdot 5 - (-3) \\cdot 2 = 20 - (-6) = 26$."
      },
      {
        "id": "ON_V2_Q14",
        "variant": 2,
        "num": 14,
        "origNum": 25,
        "topicId": 7,
        "kind": "Amaliy",
        "difficulty": "Oson",
        "question": "$A$ va $B$ vektorlarning orasidagi burchakni toping: $$A = (1;\\; 0;\\; 1), \\qquad B = (0;\\; 1;\\; 1)$$",
        "options": [
          "$45^\\circ$ ($\\frac{\\pi}{4}$)",
          "$60^\\circ$ ($\\frac{\\pi}{3}$)",
          "$30^\\circ$ ($\\frac{\\pi}{6}$)",
          "$90^\\circ$ ($\\frac{\\pi}{2}$)"
        ],
        "answer": 1,
        "explanation": "$\\cos\\varphi = \\frac{(A, B)}{|A|\\cdot|B|} = \\frac{1\\cdot 0 + 0\\cdot 1 + 1\\cdot 1}{\\sqrt{2}\\cdot\\sqrt{2}} = \\frac{1}{2} \\implies \\varphi = 60^\\circ$ ($\\frac{\\pi}{3}$)."
      },
      {
        "id": "ON_V2_Q15",
        "variant": 2,
        "num": 15,
        "origNum": 7,
        "topicId": 1,
        "kind": "Nazariy",
        "difficulty": "Oson",
        "question": "[Nazariy • 1-Ma’ruza] Matritsaning umumiy elementi $a_{ij}$ yozuvidagi $i$ va $j$ indekslari nimani ifodalaydi?",
        "options": [
          "$i$ — matritsaning darajasini, $j$ — elementning ishorasini",
          "$i$ — ustun tartib raqamini, $j$ — satr tartib raqamini",
          "$i$ — element joylashgan satr tartib raqamini, $j$ — element joylashgan ustun tartib raqamini",
          "$i$ va $j$ — matritsadagi jami elementlar sonini"
        ],
        "answer": 2,
        "explanation": "1-ma’ruza (6-slayd): Matritsaning $i$-satr va $j$-ustun kesishmasidagi element $a_{ij}$ kabi belgilanadi."
      },
      {
        "id": "ON_V2_Q16",
        "variant": 2,
        "num": 16,
        "origNum": 24,
        "topicId": 8,
        "kind": "Amaliy",
        "difficulty": "Oson",
        "question": "$A$ vektorga ortogonal bo‘lgan vektorni toping: $$A = (2;\\; -5;\\; 1)$$",
        "options": [
          "$(3;\\; 1;\\; 2)$",
          "$(2;\\; -1;\\; 1)$",
          "$(2;\\; 1;\\; 1)$",
          "$(1;\\; 1;\\; 1)$"
        ],
        "answer": 2,
        "explanation": "Ortogonallik sharti $(A, B) = 0$. Tekshiramiz: $2\\cdot 2 + (-5)\\cdot 1 + 1\\cdot 1 = 4 - 5 + 1 = 0$. Qolgan variantlarda skalyar ko‘paytma noldan farqli."
      },
      {
        "id": "ON_V2_Q17",
        "variant": 2,
        "num": 17,
        "origNum": 19,
        "topicId": 7,
        "kind": "Amaliy",
        "difficulty": "Oson",
        "question": "$A$ va $B$ vektorlarning skalyar ko‘paytmasini toping: $$A = (2;\\; -3;\\; 4), \\qquad B = (1;\\; 5;\\; 2)$$",
        "options": [
          "$-15$",
          "$5$",
          "$25$",
          "$-5$"
        ],
        "answer": 3,
        "explanation": "$(A, B) = 2 \\cdot 1 + (-3) \\cdot 5 + 4 \\cdot 2 = 2 - 15 + 8 = -5$."
      },
      {
        "id": "ON_V2_Q18",
        "variant": 2,
        "num": 18,
        "origNum": 20,
        "topicId": 7,
        "kind": "Amaliy",
        "difficulty": "O'rta",
        "question": "$A$ va $B$ vektorlarning vektor ko‘paytmasini toping: $$A = (1;\\; -2;\\; 3), \\qquad B = (2;\\; 1;\\; -1)$$",
        "options": [
          "$(1;\\; -7;\\; -5)$",
          "$(-1;\\; -7;\\; 5)$",
          "$(-1;\\; 7;\\; 5)$",
          "$(5;\\; 7;\\; -1)$"
        ],
        "answer": 2,
        "explanation": "$[A \\times B] = \\begin{vmatrix} \\vec{i} & \\vec{j} & \\vec{k} \\\\ 1 & -2 & 3 \\\\ 2 & 1 & -1 \\end{vmatrix} = \\vec{i}(2-3) - \\vec{j}(-1-6) + \\vec{k}(1+4) = (-1;\\; 7;\\; 5)$."
      },
      {
        "id": "ON_V2_Q19",
        "variant": 2,
        "num": 19,
        "origNum": 1,
        "topicId": 1,
        "kind": "Amaliy",
        "difficulty": "Oson",
        "question": "$A$ va $B$ matritsalarning yig‘indisi uchun bosh diagonal elementlarining ko‘paytmasini toping: $$A = \\begin{bmatrix} 2 & 1 & -1 \\\\ 0 & 3 & 2 \\\\ 4 & -2 & 5 \\end{bmatrix}, \\qquad B = \\begin{bmatrix} 1 & -1 & 3 \\\\ 2 & 1 & -2 \\\\ -3 & 2 & 1 \\end{bmatrix}$$",
        "options": [
          "$60$",
          "$72$",
          "$48$",
          "$13$"
        ],
        "answer": 1,
        "explanation": "$A + B$ matritsaning bosh diagonal elementlari: $(2+1)=3$, $(3+1)=4$, $(5+1)=6$. Ularning ko‘paytmasi: $3 \\cdot 4 \\cdot 6 = 72$."
      },
      {
        "id": "ON_V2_Q20",
        "variant": 2,
        "num": 20,
        "origNum": 13,
        "topicId": 3,
        "kind": "Amaliy",
        "difficulty": "O'rta",
        "question": "$A$ matritsa uchun teskari matritsaning 1-qator va 1-ustunda joylashgan elementini hisoblang: $$A = \\begin{bmatrix} 2 & 1 & 1 \\\\ 1 & 2 & 1 \\\\ 1 & 1 & 2 \\end{bmatrix}$$",
        "options": [
          "$-\\frac{1}{4}$",
          "$\\frac{3}{4}$",
          "$\\frac{1}{2}$",
          "$\\frac{1}{4}$"
        ],
        "answer": 1,
        "explanation": "$\\det(A) = 2(4-1) - 1(2-1) + 1(1-2) = 6 - 1 - 1 = 4$. $A_{11} = (-1)^{1+1}\\begin{vmatrix} 2 & 1 \\\\ 1 & 2 \\end{vmatrix} = 3$. Demak $(A^{-1})_{11} = \\frac{A_{11}}{\\det A} = \\frac{3}{4}$."
      },
      {
        "id": "ON_V2_Q21",
        "variant": 2,
        "num": 21,
        "origNum": 8,
        "topicId": 2,
        "kind": "Amaliy",
        "difficulty": "O'rta",
        "question": "3-tartibli determinantni hisoblang: $$\\begin{vmatrix} 1 & 2 & -1 \\\\ 3 & 1 & 2 \\\\ 2 & -1 & 3 \\end{vmatrix}$$",
        "options": [
          "$10$",
          "$15$",
          "$0$",
          "$-10$"
        ],
        "answer": 2,
        "explanation": "$1(1\\cdot 3 - 2(-1)) - 2(3\\cdot 3 - 2\\cdot 2) + (-1)(3(-1) - 1\\cdot 2) = 1(5) - 2(5) - 1(-5) = 5 - 10 + 5 = 0$ (shuningdek 3-satr = 2-satr $-$ 1-satr)."
      },
      {
        "id": "ON_V2_Q22",
        "variant": 2,
        "num": 22,
        "origNum": 23,
        "topicId": 8,
        "kind": "Nazariy",
        "difficulty": "Oson",
        "question": "[Nazariy • 8-Ma’ruza] Ikki vektor orasidagi burchak $\\varphi$ orqali ortogonal va ortonormal vektorlar qanday ta’riflanadi (14-slayd)?",
        "options": [
          "Uzunliklari o‘zaro teng bo‘lgan ixtiyoriy vektorlar ortlar deyiladi",
          "Orasidagi burchak $\\pi$ ga teng bo‘lgan vektorlar ortonormal deyiladi",
          "Ikki vektor orasidagi burchak $\\pi/2$ ga teng bo‘lsa ular ortogonal vektorlar deyiladi; ortogonal vektorlarning uzunliklari $1$ ga teng bo‘lsa, ortonormal vektorlar yoki ortlar deyiladi",
          "Ikki vektor orasidagi burchak $0$ ga teng bo‘lsa ortogonal, uzunligi $2$ ga teng bo‘lsa ortonormal deyiladi"
        ],
        "answer": 2,
        "explanation": "8-ma’ruza (14-slayd): Ikki vektor orasidagi burchak $\\pi/2$ ga teng bo‘lsa ortogonal, uzunliklari $1$ ga teng bo‘lgan ortogonal vektorlar esa ortonormal vektorlar (ortlar) deyiladi."
      },
      {
        "id": "ON_V2_Q23",
        "variant": 2,
        "num": 23,
        "origNum": 6,
        "topicId": 2,
        "kind": "Amaliy",
        "difficulty": "Oson",
        "question": "2-tartibli determinantni hisoblang: $$\\begin{vmatrix} -3 & 6 \\\\ 4 & -5 \\end{vmatrix}$$",
        "options": [
          "$-9$",
          "$39$",
          "$-39$",
          "$9$"
        ],
        "answer": 0,
        "explanation": "$(-3) \\cdot (-5) - 6 \\cdot 4 = 15 - 24 = -9$."
      },
      {
        "id": "ON_V2_Q24",
        "variant": 2,
        "num": 24,
        "origNum": 4,
        "topicId": 7,
        "kind": "Amaliy",
        "difficulty": "Oson",
        "question": "$A$ vektor uchun $-3A$ vektorning qiymatini toping: $$A = (2;\\; -3;\\; 5)$$",
        "options": [
          "$(6;\\; -9;\\; 15)$",
          "$(-6;\\; -9;\\; -15)$",
          "$(-6;\\; 9;\\; -15)$",
          "$(-1;\\; -6;\\; 2)$"
        ],
        "answer": 2,
        "explanation": "Vektorni $-3$ songa ko‘paytirishda har bir komponent $-3$ ga ko‘paytiriladi: $(-3\\cdot 2;\\; -3\\cdot(-3);\\; -3\\cdot 5) = (-6;\\; 9;\\; -15)$."
      },
      {
        "id": "ON_V2_Q25",
        "variant": 2,
        "num": 25,
        "origNum": 15,
        "topicId": 5,
        "kind": "Amaliy",
        "difficulty": "Oson",
        "question": "Ushbu 2-tartibli tenglamalar sistemasini yeching: $$\\begin{cases} 2x + 3y = 7 \\\\ 3x - y = 5 \\end{cases}$$",
        "options": [
          "$(1;\\; 2)$",
          "$(-2;\\; 1)$",
          "$(2;\\; -1)$",
          "$(2;\\; 1)$"
        ],
        "answer": 3,
        "explanation": "Kramer usuli bilan: $\\Delta = -2 - 9 = -11$, $\\Delta_x = -7 - 15 = -22 \\implies x = 2$, $\\Delta_y = 10 - 21 = -11 \\implies y = 1$. Javob: $(2;\\; 1)$."
      }
    ]
  },
  {
    "variant": 3,
    "title": "Oraliq Nazorat — 3-Variant",
    "subtitle": "17 ta amaliy misol (o‘zgarishsiz) + barcha 8 mavzudan 8 ta yangi nazariy savol (raqamlari o‘zgartirilgan)",
    "practicalCount": 17,
    "theoryCount": 8,
    "total": 25,
    "questions": [
      {
        "id": "ON_V3_Q1",
        "variant": 3,
        "num": 1,
        "origNum": 6,
        "topicId": 2,
        "kind": "Amaliy",
        "difficulty": "Oson",
        "question": "2-tartibli determinantni hisoblang: $$\\begin{vmatrix} -3 & 6 \\\\ 4 & -5 \\end{vmatrix}$$",
        "options": [
          "$9$",
          "$-9$",
          "$39$",
          "$-39$"
        ],
        "answer": 1,
        "explanation": "$(-3) \\cdot (-5) - 6 \\cdot 4 = 15 - 24 = -9$."
      },
      {
        "id": "ON_V3_Q2",
        "variant": 3,
        "num": 2,
        "origNum": 4,
        "topicId": 7,
        "kind": "Amaliy",
        "difficulty": "Oson",
        "question": "$A$ vektor uchun $-3A$ vektorning qiymatini toping: $$A = (2;\\; -3;\\; 5)$$",
        "options": [
          "$(-1;\\; -6;\\; 2)$",
          "$(6;\\; -9;\\; 15)$",
          "$(-6;\\; -9;\\; -15)$",
          "$(-6;\\; 9;\\; -15)$"
        ],
        "answer": 3,
        "explanation": "Vektorni $-3$ songa ko‘paytirishda har bir komponent $-3$ ga ko‘paytiriladi: $(-3\\cdot 2;\\; -3\\cdot(-3);\\; -3\\cdot 5) = (-6;\\; 9;\\; -15)$."
      },
      {
        "id": "ON_V3_Q3",
        "variant": 3,
        "num": 3,
        "origNum": 24,
        "topicId": 8,
        "kind": "Amaliy",
        "difficulty": "Oson",
        "question": "$A$ vektorga ortogonal bo‘lgan vektorni toping: $$A = (2;\\; -5;\\; 1)$$",
        "options": [
          "$(1;\\; 1;\\; 1)$",
          "$(2;\\; -1;\\; 1)$",
          "$(3;\\; 1;\\; 2)$",
          "$(2;\\; 1;\\; 1)$"
        ],
        "answer": 3,
        "explanation": "Ortogonallik sharti $(A, B) = 0$. Tekshiramiz: $2\\cdot 2 + (-5)\\cdot 1 + 1\\cdot 1 = 4 - 5 + 1 = 0$. Qolgan variantlarda skalyar ko‘paytma noldan farqli."
      },
      {
        "id": "ON_V3_Q4",
        "variant": 3,
        "num": 4,
        "origNum": 1,
        "topicId": 1,
        "kind": "Amaliy",
        "difficulty": "Oson",
        "question": "$A$ va $B$ matritsalarning yig‘indisi uchun bosh diagonal elementlarining ko‘paytmasini toping: $$A = \\begin{bmatrix} 2 & 1 & -1 \\\\ 0 & 3 & 2 \\\\ 4 & -2 & 5 \\end{bmatrix}, \\qquad B = \\begin{bmatrix} 1 & -1 & 3 \\\\ 2 & 1 & -2 \\\\ -3 & 2 & 1 \\end{bmatrix}$$",
        "options": [
          "$48$",
          "$60$",
          "$72$",
          "$13$"
        ],
        "answer": 2,
        "explanation": "$A + B$ matritsaning bosh diagonal elementlari: $(2+1)=3$, $(3+1)=4$, $(5+1)=6$. Ularning ko‘paytmasi: $3 \\cdot 4 \\cdot 6 = 72$."
      },
      {
        "id": "ON_V3_Q5",
        "variant": 3,
        "num": 5,
        "origNum": 16,
        "topicId": 6,
        "kind": "Nazariy",
        "difficulty": "Oson",
        "question": "[Nazariy • 6-Ma’ruza] Gauss-Jordan usuli oddiy Gauss usulidan qaysi jihati bilan farq qiladi (10-12-slaydlar)?",
        "options": [
          "Gauss-Jordan usuli faqat 2 noma’lumli sistemalarga qo‘llaniladi",
          "Gauss-Jordan usulida faqat determinantlar hisoblanadi",
          "Gauss-Jordan usulida faqat ustunlar ustida amal bajariladi",
          "Gauss usulida faqat bosh diagonal ostidagi elementlar nolga aylantirilsa, Gauss-Jordan usulida bosh diagonalning ham ostidagi, ham ustidagi barcha elementlar nolga aylantiriladi va teskari yurish talab etilmaydi"
        ],
        "answer": 3,
        "explanation": "6-ma’ruza (10-12-slaydlar): Gauss-Jordan usulida asosiy matritsa diagonal (birlik $E$) ko‘rinishga keltirilgani uchun noma’lumlar qiymati to‘g‘ridan-to‘g‘ri hosil bo‘ladi."
      },
      {
        "id": "ON_V3_Q6",
        "variant": 3,
        "num": 6,
        "origNum": 18,
        "topicId": 7,
        "kind": "Nazariy",
        "difficulty": "Oson",
        "question": "[Nazariy • 7-Ma’ruza] Vektorlarning skalyar va vektor ko‘paytmalarining geometrik ma’nolari: vektor proyeksiyasi $\\text{Pr}_{\\vec{a}}(\\vec{b})$ va ikki vektordan yasalgan parallelogramm yuzi $S$ qaysi formulalar bilan topiladi (14-slayd)?",
        "options": [
          "$\\text{Pr}_{\\vec{a}}(\\vec{b}) = |\\vec{b}| / |\\vec{a}|;\\qquad S = |\\vec{a}| \\cdot |\\vec{b}| \\cos\\varphi$",
          "$\\text{Pr}_{\\vec{a}}(\\vec{b}) = |\\vec{b}| \\cos\\varphi;\\qquad S = |[\\vec{a} \\times \\vec{b}]| = |\\vec{a}| \\cdot |\\vec{b}| \\sin\\varphi$",
          "$\\text{Pr}_{\\vec{a}}(\\vec{b}) = |\\vec{a}| \\sin\\varphi;\\qquad S = (\\vec{a}, \\vec{b})$",
          "$\\text{Pr}_{\\vec{a}}(\\vec{b}) = |[\\vec{a} \\times \\vec{b}]|;\\qquad S = |\\vec{a}| + |\\vec{b}|$"
        ],
        "answer": 1,
        "explanation": "7-ma’ruza (14-slayd): $\\text{Pr}_{\\vec{a}}(\\vec{b}) = |\\vec{b}|\\cos\\varphi$, parallelogramm yuzi esa vektor ko‘paytmaning moduliga teng: $S = |[\\vec{a} \\times \\vec{b}]| = |\\vec{a}|\\cdot|\\vec{b}|\\sin\\varphi$."
      },
      {
        "id": "ON_V3_Q7",
        "variant": 3,
        "num": 7,
        "origNum": 15,
        "topicId": 5,
        "kind": "Amaliy",
        "difficulty": "Oson",
        "question": "Ushbu 2-tartibli tenglamalar sistemasini yeching: $$\\begin{cases} 2x + 3y = 7 \\\\ 3x - y = 5 \\end{cases}$$",
        "options": [
          "$(2;\\; 1)$",
          "$(1;\\; 2)$",
          "$(-2;\\; 1)$",
          "$(2;\\; -1)$"
        ],
        "answer": 0,
        "explanation": "Kramer usuli bilan: $\\Delta = -2 - 9 = -11$, $\\Delta_x = -7 - 15 = -22 \\implies x = 2$, $\\Delta_y = 10 - 21 = -11 \\implies y = 1$. Javob: $(2;\\; 1)$."
      },
      {
        "id": "ON_V3_Q8",
        "variant": 3,
        "num": 8,
        "origNum": 19,
        "topicId": 7,
        "kind": "Amaliy",
        "difficulty": "Oson",
        "question": "$A$ va $B$ vektorlarning skalyar ko‘paytmasini toping: $$A = (2;\\; -3;\\; 4), \\qquad B = (1;\\; 5;\\; 2)$$",
        "options": [
          "$-5$",
          "$5$",
          "$25$",
          "$-15$"
        ],
        "answer": 0,
        "explanation": "$(A, B) = 2 \\cdot 1 + (-3) \\cdot 5 + 4 \\cdot 2 = 2 - 15 + 8 = -5$."
      },
      {
        "id": "ON_V3_Q9",
        "variant": 3,
        "num": 9,
        "origNum": 5,
        "topicId": 2,
        "kind": "Amaliy",
        "difficulty": "Oson",
        "question": "2-tartibli determinantni hisoblang: $$\\begin{vmatrix} 4 & -3 \\\\ 2 & 5 \\end{vmatrix}$$",
        "options": [
          "$14$",
          "$-26$",
          "$26$",
          "$20$"
        ],
        "answer": 2,
        "explanation": "$4 \\cdot 5 - (-3) \\cdot 2 = 20 - (-6) = 26$."
      },
      {
        "id": "ON_V3_Q10",
        "variant": 3,
        "num": 10,
        "origNum": 22,
        "topicId": 7,
        "kind": "Amaliy",
        "difficulty": "Oson",
        "question": "Quyidagi vektorning uzunligini toping: $$A = (2;\\; -3;\\; 6)$$",
        "options": [
          "$11$",
          "$7$",
          "$5$",
          "$49$"
        ],
        "answer": 1,
        "explanation": "$|A| = \\sqrt{2^2 + (-3)^2 + 6^2} = \\sqrt{4 + 9 + 36} = \\sqrt{49} = 7$."
      },
      {
        "id": "ON_V3_Q11",
        "variant": 3,
        "num": 11,
        "origNum": 21,
        "topicId": 7,
        "kind": "Amaliy",
        "difficulty": "O'rta",
        "question": "$A$, $B$ va $C$ vektorlarning aralash ko‘paytmasini toping: $$A = (1;\\; 2;\\; -1), \\quad B = (3;\\; 0;\\; 2), \\quad C = (2;\\; -1;\\; 1)$$",
        "options": [
          "$5$",
          "$-7$",
          "$7$",
          "$1$"
        ],
        "answer": 2,
        "explanation": "$\\begin{vmatrix} 1 & 2 & -1 \\\\ 3 & 0 & 2 \\\\ 2 & -1 & 1 \\end{vmatrix} = 1(0+2) - 2(3-4) - 1(-3-0) = 2 + 2 + 3 = 7$."
      },
      {
        "id": "ON_V3_Q12",
        "variant": 3,
        "num": 12,
        "origNum": 7,
        "topicId": 1,
        "kind": "Nazariy",
        "difficulty": "Oson",
        "question": "[Nazariy • 1-Ma’ruza] $n$-tartibli kvadrat matritsaning «yordamchi diagonali»ni qaysi elementlar tashkil etadi?",
        "options": [
          "$a_{11},\\; a_{12},\\; \\dots,\\; a_{1n}$ elementlar",
          "$a_{11},\\; a_{22},\\; \\dots,\\; a_{nn}$ elementlar",
          "$a_{n1},\\; a_{n2},\\; \\dots,\\; a_{nn}$ elementlar",
          "$a_{1n},\\; a_{2,n-1},\\; \\dots,\\; a_{n1}$ elementlar"
        ],
        "answer": 3,
        "explanation": "1-ma’ruza (7-slayd): Yuqori o‘ng burchakdagi $a_{1n}$ dan quyi chap burchakdagi $a_{n1}$ gacha bo‘lgan elementlar yordamchi diagonal deyiladi."
      },
      {
        "id": "ON_V3_Q13",
        "variant": 3,
        "num": 13,
        "origNum": 13,
        "topicId": 3,
        "kind": "Amaliy",
        "difficulty": "O'rta",
        "question": "$A$ matritsa uchun teskari matritsaning 1-qator va 1-ustunda joylashgan elementini hisoblang: $$A = \\begin{bmatrix} 2 & 1 & 1 \\\\ 1 & 2 & 1 \\\\ 1 & 1 & 2 \\end{bmatrix}$$",
        "options": [
          "$-\\frac{1}{4}$",
          "$\\frac{1}{4}$",
          "$\\frac{3}{4}$",
          "$\\frac{1}{2}$"
        ],
        "answer": 2,
        "explanation": "$\\det(A) = 2(4-1) - 1(2-1) + 1(1-2) = 6 - 1 - 1 = 4$. $A_{11} = (-1)^{1+1}\\begin{vmatrix} 2 & 1 \\\\ 1 & 2 \\end{vmatrix} = 3$. Demak $(A^{-1})_{11} = \\frac{A_{11}}{\\det A} = \\frac{3}{4}$."
      },
      {
        "id": "ON_V3_Q14",
        "variant": 3,
        "num": 14,
        "origNum": 17,
        "topicId": 6,
        "kind": "Amaliy",
        "difficulty": "O'rta",
        "question": "Ushbu 3-tartibli tenglamalar sistemasini yeching: $$\\begin{cases} x + y + z = 6 \\\\ 2x - y + z = 3 \\\\ x + 2y - z = 2 \\end{cases}$$",
        "options": [
          "$(2;\\; 1;\\; 3)$",
          "$(3;\\; 2;\\; 1)$",
          "$(1;\\; 2;\\; 3)$",
          "$(1;\\; 3;\\; 2)$"
        ],
        "answer": 2,
        "explanation": "1- va 3-tenglamalarni qo‘shsak $2x + 3y = 8$; 1- va 2-tenglamalar ayirmasidan $-x + 2y = 3 \\implies x = 2y - 3$. O‘rniga qo‘yib $y = 2$, $x = 1$, $z = 3$ ni topamiz."
      },
      {
        "id": "ON_V3_Q15",
        "variant": 3,
        "num": 15,
        "origNum": 3,
        "topicId": 1,
        "kind": "Amaliy",
        "difficulty": "O'rta",
        "question": "$A$ va $B$ matritsalarning ko‘paytmasi uchun 3-qator elementlarini toping: $$A = \\begin{bmatrix} 1 & 2 & -1 \\\\ 3 & 0 & 2 \\\\ 2 & -1 & 3 \\end{bmatrix}, \\qquad B = \\begin{bmatrix} 2 & 1 & 0 \\\\ -1 & 3 & 2 \\\\ 1 & -2 & 4 \\end{bmatrix}$$",
        "options": [
          "$(8;\\; -7;\\; 10)$",
          "$(2;\\; 2;\\; 12)$",
          "$(6;\\; -7;\\; 12)$",
          "$(8;\\; 7;\\; 10)$"
        ],
        "answer": 0,
        "explanation": "$A$ ning 3-qatori $(2, -1, 3)$ ni $B$ ning ustunlariga ko‘paytiramiz: $c_{31} = 2\\cdot 2 + (-1)(-1) + 3\\cdot 1 = 8$; $c_{32} = 2\\cdot 1 + (-1)\\cdot 3 + 3(-2) = -7$; $c_{33} = 2\\cdot 0 + (-1)\\cdot 2 + 3\\cdot 4 = 10$."
      },
      {
        "id": "ON_V3_Q16",
        "variant": 3,
        "num": 16,
        "origNum": 10,
        "topicId": 2,
        "kind": "Nazariy",
        "difficulty": "Oson",
        "question": "[Nazariy • 2-Ma’ruza] Determinantning 5-xossasi: Determinantda ikkita satr yoki ikkita ustun o‘rinlari mos ravishda almashtirilsa, determinant qanday o‘zgaradi?",
        "options": [
          "Determinantning qiymati teskari songa ($1/\\Delta$) aylanadi",
          "Determinantning ishorasi qarama-qarshiga o‘zgaradi ($\\Delta' = -\\Delta$)",
          "Determinantning qiymati nolga aylanadi",
          "Determinantning qiymati va ishorasi o‘zgarmaydi"
        ],
        "answer": 1,
        "explanation": "2-ma’ruza (9-slayd, 5-xossa): Determinantda ikkita satr yoki ustun o‘rinlari mos ravishda almashtirilsa, determinantning ishorasi o‘zgaradi."
      },
      {
        "id": "ON_V3_Q17",
        "variant": 3,
        "num": 17,
        "origNum": 9,
        "topicId": 2,
        "kind": "Amaliy",
        "difficulty": "O'rta",
        "question": "3-tartibli determinantni hisoblang: $$\\begin{vmatrix} 2 & 0 & 1 \\\\ -1 & 3 & 2 \\\\ 4 & 1 & -1 \\end{vmatrix}$$",
        "options": [
          "$3$",
          "$-13$",
          "$-23$",
          "$23$"
        ],
        "answer": 2,
        "explanation": "1-satr bo‘yicha yoyamiz: $2(3(-1) - 2\\cdot 1) - 0 + 1((-1)\\cdot 1 - 3\\cdot 4) = 2(-5) + 1(-13) = -10 - 13 = -23$."
      },
      {
        "id": "ON_V3_Q18",
        "variant": 3,
        "num": 18,
        "origNum": 20,
        "topicId": 7,
        "kind": "Amaliy",
        "difficulty": "O'rta",
        "question": "$A$ va $B$ vektorlarning vektor ko‘paytmasini toping: $$A = (1;\\; -2;\\; 3), \\qquad B = (2;\\; 1;\\; -1)$$",
        "options": [
          "$(5;\\; 7;\\; -1)$",
          "$(-1;\\; -7;\\; 5)$",
          "$(1;\\; -7;\\; -5)$",
          "$(-1;\\; 7;\\; 5)$"
        ],
        "answer": 3,
        "explanation": "$[A \\times B] = \\begin{vmatrix} \\vec{i} & \\vec{j} & \\vec{k} \\\\ 1 & -2 & 3 \\\\ 2 & 1 & -1 \\end{vmatrix} = \\vec{i}(2-3) - \\vec{j}(-1-6) + \\vec{k}(1+4) = (-1;\\; 7;\\; 5)$."
      },
      {
        "id": "ON_V3_Q19",
        "variant": 3,
        "num": 19,
        "origNum": 14,
        "topicId": 5,
        "kind": "Nazariy",
        "difficulty": "Oson",
        "question": "[Nazariy • 5-Ma’ruza] Qachon $AX = B$ tenglamalar sistemasi «bir jinsli chiziqli tenglamalar sistemasi» deyiladi (5-slayd)?",
        "options": [
          "Barcha noma’lumlar oldidagi koeffitsiyentlar bir xil songa teng bo‘lganda",
          "Ozod hadlar ustuni birlik vektordan iborat bo‘lganda",
          "Ozod hadlar ustuni nol vektordan iborat bo‘lganda ($B = \\Theta = (0, 0, \\dots, 0)^T$), ya’ni $AX = \\Theta$ bo‘lganda",
          "Tenglamalar soni noma’lumlar soniga teng bo‘lganda ($m = n$)"
        ],
        "answer": 2,
        "explanation": "5-ma’ruza (5-slayd): Agar $B = \\Theta$ bo‘lsa, u holda tenglamalar sistemasi bir jinsli chiziqli tenglamalar sistemasi deyiladi: $AX = \\Theta$."
      },
      {
        "id": "ON_V3_Q20",
        "variant": 3,
        "num": 20,
        "origNum": 12,
        "topicId": 3,
        "kind": "Nazariy",
        "difficulty": "Oson",
        "question": "[Nazariy • 3-Ma’ruza] Teskari matritsani determinant va qo‘shma matritsa orqali topish formulasi qaysi javobda to‘g‘ri berilgan?",
        "options": [
          "$A^{-1} = \\frac{1}{\\det(A)} A^T$",
          "$A^{-1} = -\\frac{1}{\\det(A)} A$",
          "$A^{-1} = \\frac{1}{\\det(A)} \\bar{A} \\quad (\\det(A) \\ne 0)$",
          "$A^{-1} = \\det(A) \\cdot \\bar{A}$"
        ],
        "answer": 2,
        "explanation": "3-ma’ruza (6-slayd): $A^{-1} = \\frac{1}{\\det(A)} \\bar{A}$."
      },
      {
        "id": "ON_V3_Q21",
        "variant": 3,
        "num": 21,
        "origNum": 23,
        "topicId": 8,
        "kind": "Nazariy",
        "difficulty": "Oson",
        "question": "[Nazariy • 8-Ma’ruza] «Evklid fazosi» ($E^n$) deb qanday fazoga aytiladi va har qanday $\\mathbb{R}^n$ fazoni qanday qilib Evklid fazosiga aylantirish mumkin (18-slayd)?",
        "options": [
          "Elementlari faqat $2 \\times 2$ matritsalardan iborat fazoga Evklid fazosi deyiladi",
          "Faqat 1 o‘lchovli chiziqqa Evklid fazosi deyiladi",
          "Skalyar ko‘paytmasi mavjud bo‘lmagan fazoga Evklid fazosi deyiladi",
          "Elementlari orasida skalyar ko‘paytma aniqlangan chiziqli fazoga Evklid fazosi deyiladi; har qanday $\\mathbb{R}^n$ fazoda skalyar ko‘paytmani aniqlash bilan uni Evklid fazosiga aylantirish mumkin"
        ],
        "answer": 3,
        "explanation": "8-ma’ruza (18-slayd): Agar chiziqli fazo elementlari orasida skalyar ko‘paytma aniqlangan bo‘lsa, bu fazoga Evklid fazosi ($E^n$) deyiladi."
      },
      {
        "id": "ON_V3_Q22",
        "variant": 3,
        "num": 22,
        "origNum": 8,
        "topicId": 2,
        "kind": "Amaliy",
        "difficulty": "O'rta",
        "question": "3-tartibli determinantni hisoblang: $$\\begin{vmatrix} 1 & 2 & -1 \\\\ 3 & 1 & 2 \\\\ 2 & -1 & 3 \\end{vmatrix}$$",
        "options": [
          "$-10$",
          "$15$",
          "$10$",
          "$0$"
        ],
        "answer": 3,
        "explanation": "$1(1\\cdot 3 - 2(-1)) - 2(3\\cdot 3 - 2\\cdot 2) + (-1)(3(-1) - 1\\cdot 2) = 1(5) - 2(5) - 1(-5) = 5 - 10 + 5 = 0$ (shuningdek 3-satr = 2-satr $-$ 1-satr)."
      },
      {
        "id": "ON_V3_Q23",
        "variant": 3,
        "num": 23,
        "origNum": 25,
        "topicId": 7,
        "kind": "Amaliy",
        "difficulty": "Oson",
        "question": "$A$ va $B$ vektorlarning orasidagi burchakni toping: $$A = (1;\\; 0;\\; 1), \\qquad B = (0;\\; 1;\\; 1)$$",
        "options": [
          "$90^\\circ$ ($\\frac{\\pi}{2}$)",
          "$45^\\circ$ ($\\frac{\\pi}{4}$)",
          "$60^\\circ$ ($\\frac{\\pi}{3}$)",
          "$30^\\circ$ ($\\frac{\\pi}{6}$)"
        ],
        "answer": 2,
        "explanation": "$\\cos\\varphi = \\frac{(A, B)}{|A|\\cdot|B|} = \\frac{1\\cdot 0 + 0\\cdot 1 + 1\\cdot 1}{\\sqrt{2}\\cdot\\sqrt{2}} = \\frac{1}{2} \\implies \\varphi = 60^\\circ$ ($\\frac{\\pi}{3}$)."
      },
      {
        "id": "ON_V3_Q24",
        "variant": 3,
        "num": 24,
        "origNum": 11,
        "topicId": 4,
        "kind": "Nazariy",
        "difficulty": "O'rta",
        "question": "[Nazariy • 4-Ma’ruza] «O‘rinlashtirish» ($F$) deb nimaga aytiladi va uning juft-toqligi qanday aniqlanadi (9-slayd)?",
        "options": [
          "$\\{1, 2, \\dots, n\\}$ sonlar to‘plamini o‘zini o‘ziga o‘zaro bir qiymatli akslantirishga aytiladi; $F = \\binom{P_1}{P_2}$ da $P_1 = (1, 2, \\dots, n)$ bo‘lsa, $P_2$ juft bo‘lganda $F$ juft, $P_2$ toq bo‘lganda $F$ toq bo‘ladi",
          "O‘rinlashtirish faqat toq bo‘lishi mumkin",
          "Matritsani nol matritsaga ko‘paytirishga aytiladi",
          "Faqat ikkita sonning yig‘indisiga o‘rinlashtirish deyiladi"
        ],
        "answer": 0,
        "explanation": "4-ma’ruza (9-slayd): $\\{1, 2, \\dots, n\\}$ sonlar to‘plamini o‘zini o‘ziga akslantiruvchi o‘zaro bir qiymatli akslantirish o‘rinlashtirish deyiladi."
      },
      {
        "id": "ON_V3_Q25",
        "variant": 3,
        "num": 25,
        "origNum": 2,
        "topicId": 1,
        "kind": "Amaliy",
        "difficulty": "Oson",
        "question": "$A$ va $B$ matritsalarning ayirmasi uchun bosh diagonal elementlarining yig‘indisini toping: $$A = \\begin{bmatrix} 5 & -2 & 1 \\\\ 3 & 4 & -1 \\\\ 0 & 2 & 6 \\end{bmatrix}, \\qquad B = \\begin{bmatrix} 2 & 1 & -3 \\\\ -1 & 2 & 4 \\\\ 3 & 0 & 2 \\end{bmatrix}$$",
        "options": [
          "$7$",
          "$9$",
          "$15$",
          "$24$"
        ],
        "answer": 1,
        "explanation": "$A - B$ matritsaning bosh diagonal elementlari: $(5-2)=3$, $(4-2)=2$, $(6-2)=4$. Ularning yig‘indisi: $3 + 2 + 4 = 9$."
      }
    ]
  },
  {
    "variant": 4,
    "title": "Oraliq Nazorat — 4-Variant",
    "subtitle": "17 ta amaliy misol (o‘zgarishsiz) + barcha 8 mavzudan 8 ta yangi nazariy savol (raqamlari o‘zgartirilgan)",
    "practicalCount": 17,
    "theoryCount": 8,
    "total": 25,
    "questions": [
      {
        "id": "ON_V4_Q1",
        "variant": 4,
        "num": 1,
        "origNum": 21,
        "topicId": 7,
        "kind": "Amaliy",
        "difficulty": "O'rta",
        "question": "$A$, $B$ va $C$ vektorlarning aralash ko‘paytmasini toping: $$A = (1;\\; 2;\\; -1), \\quad B = (3;\\; 0;\\; 2), \\quad C = (2;\\; -1;\\; 1)$$",
        "options": [
          "$1$",
          "$-7$",
          "$5$",
          "$7$"
        ],
        "answer": 3,
        "explanation": "$\\begin{vmatrix} 1 & 2 & -1 \\\\ 3 & 0 & 2 \\\\ 2 & -1 & 1 \\end{vmatrix} = 1(0+2) - 2(3-4) - 1(-3-0) = 2 + 2 + 3 = 7$."
      },
      {
        "id": "ON_V4_Q2",
        "variant": 4,
        "num": 2,
        "origNum": 23,
        "topicId": 8,
        "kind": "Nazariy",
        "difficulty": "Oson",
        "question": "[Nazariy • 8-Ma’ruza] **Gramm-Shmidt teoremasi** (21-slayd): Har qanday $n$ o‘lchovli haqiqiy Evklid fazosida ortonormallangan bazis mavjudligi haqidagi teorema qanday bayon etiladi?",
        "options": [
          "Har qanday $n$ o‘lchovli haqiqiy Evklid fazosida ortonormallangan bazis mavjud (agar bazis ortonormallanmagan bo‘lsa, uni Gramm-Shmidt formulalari yordamida ortonormallash mumkin)",
          "Ortonormallangan bazis faqat diagonal matritsalar fazosida mavjud",
          "Faqat $n = 2$ va $n = 3$ o‘lchovli Evklid fazolaridagina ortonormallangan bazis mavjud",
          "Ixtiyoriy bazisni ortonormallab bo‘lmaydi"
        ],
        "answer": 0,
        "explanation": "8-ma’ruza (21-22-slaydlar, Teorema): Har qanday $n$ o‘lchovli haqiqiy Evklid fazosida ortonormallangan bazis mavjud."
      },
      {
        "id": "ON_V4_Q3",
        "variant": 4,
        "num": 3,
        "origNum": 6,
        "topicId": 2,
        "kind": "Amaliy",
        "difficulty": "Oson",
        "question": "2-tartibli determinantni hisoblang: $$\\begin{vmatrix} -3 & 6 \\\\ 4 & -5 \\end{vmatrix}$$",
        "options": [
          "$-39$",
          "$39$",
          "$-9$",
          "$9$"
        ],
        "answer": 2,
        "explanation": "$(-3) \\cdot (-5) - 6 \\cdot 4 = 15 - 24 = -9$."
      },
      {
        "id": "ON_V4_Q4",
        "variant": 4,
        "num": 4,
        "origNum": 14,
        "topicId": 5,
        "kind": "Nazariy",
        "difficulty": "Oson",
        "question": "[Nazariy • 5-Ma’ruza] $n$ ta noma’lumli $AX = \\Theta$ bir jinsli chiziqli tenglamalar sistemasi qachon nol yechimdan tashqari nolmas (notrivial) yechimlarga ham ega bo‘ladi (5-slayd)?",
        "options": [
          "Hech qachon nolmas yechimga ega bo‘lmaydi",
          "Faqat barcha koeffitsiyentlar nolga teng bo‘lganda",
          "$\\text{rang}(A) = n$ bo‘lganda (kvadrat sistemada $\\det(A) \\ne 0$ bo‘lganda)",
          "$\\text{rang}(A) < n$ munosabat o‘rinli bo‘lganda (xususan kvadrat sistemada $\\det(A) = 0$ bo‘lganda)"
        ],
        "answer": 3,
        "explanation": "5-ma’ruza (5-slayd): Bir jinsli sistema uchun $\\text{rang}(A) < n$ munosabat o‘rinli bo‘lsa, sistema nol yechimdan tashqari nolmas yechimlarga ham ega bo‘ladi."
      },
      {
        "id": "ON_V4_Q5",
        "variant": 4,
        "num": 5,
        "origNum": 18,
        "topicId": 7,
        "kind": "Nazariy",
        "difficulty": "Oson",
        "question": "[Nazariy • 7-Ma’ruza] Vektorlarning uzunligi qanday 3 ta asosiy xossaga ega (17-slayd)?",
        "options": [
          "$1^\\circ.\\;|X| = 1;\\qquad 2^\\circ.\\;|\\lambda X| = \\lambda^2 |X|;\\qquad 3^\\circ.\\;|X + Y| \\ge |X| + |Y|$",
          "$|X \\cdot Y| = |X| + |Y|$",
          "$1^\\circ.\\;|X| \\ge 0;\\qquad 2^\\circ.\\;|\\lambda X| = |\\lambda| \\cdot |X|;\\qquad 3^\\circ.\\;|X + Y| \\le |X| + |Y|$ (uchburchak tengsizligi)",
          "$1^\\circ.\\;|X| < 0;\\qquad 2^\\circ.\\;|\\lambda X| = \\lambda |X|;\\qquad 3^\\circ.\\;|X + Y| = |X| + |Y|$"
        ],
        "answer": 2,
        "explanation": "7-ma’ruza (17-slayd): Vektor uzunligi nomanfiylik, bir jinslilik ($|\\lambda X| = |\\lambda|\\cdot|X|$) va uchburchak tengsizligi ($|X+Y| \\le |X|+|Y|$) xossalariga ega."
      },
      {
        "id": "ON_V4_Q6",
        "variant": 4,
        "num": 6,
        "origNum": 22,
        "topicId": 7,
        "kind": "Amaliy",
        "difficulty": "Oson",
        "question": "Quyidagi vektorning uzunligini toping: $$A = (2;\\; -3;\\; 6)$$",
        "options": [
          "$5$",
          "$11$",
          "$7$",
          "$49$"
        ],
        "answer": 2,
        "explanation": "$|A| = \\sqrt{2^2 + (-3)^2 + 6^2} = \\sqrt{4 + 9 + 36} = \\sqrt{49} = 7$."
      },
      {
        "id": "ON_V4_Q7",
        "variant": 4,
        "num": 7,
        "origNum": 4,
        "topicId": 7,
        "kind": "Amaliy",
        "difficulty": "Oson",
        "question": "$A$ vektor uchun $-3A$ vektorning qiymatini toping: $$A = (2;\\; -3;\\; 5)$$",
        "options": [
          "$(-6;\\; 9;\\; -15)$",
          "$(-6;\\; -9;\\; -15)$",
          "$(6;\\; -9;\\; 15)$",
          "$(-1;\\; -6;\\; 2)$"
        ],
        "answer": 0,
        "explanation": "Vektorni $-3$ songa ko‘paytirishda har bir komponent $-3$ ga ko‘paytiriladi: $(-3\\cdot 2;\\; -3\\cdot(-3);\\; -3\\cdot 5) = (-6;\\; 9;\\; -15)$."
      },
      {
        "id": "ON_V4_Q8",
        "variant": 4,
        "num": 8,
        "origNum": 5,
        "topicId": 2,
        "kind": "Amaliy",
        "difficulty": "Oson",
        "question": "2-tartibli determinantni hisoblang: $$\\begin{vmatrix} 4 & -3 \\\\ 2 & 5 \\end{vmatrix}$$",
        "options": [
          "$20$",
          "$-26$",
          "$14$",
          "$26$"
        ],
        "answer": 3,
        "explanation": "$4 \\cdot 5 - (-3) \\cdot 2 = 20 - (-6) = 26$."
      },
      {
        "id": "ON_V4_Q9",
        "variant": 4,
        "num": 9,
        "origNum": 1,
        "topicId": 1,
        "kind": "Amaliy",
        "difficulty": "Oson",
        "question": "$A$ va $B$ matritsalarning yig‘indisi uchun bosh diagonal elementlarining ko‘paytmasini toping: $$A = \\begin{bmatrix} 2 & 1 & -1 \\\\ 0 & 3 & 2 \\\\ 4 & -2 & 5 \\end{bmatrix}, \\qquad B = \\begin{bmatrix} 1 & -1 & 3 \\\\ 2 & 1 & -2 \\\\ -3 & 2 & 1 \\end{bmatrix}$$",
        "options": [
          "$13$",
          "$60$",
          "$48$",
          "$72$"
        ],
        "answer": 3,
        "explanation": "$A + B$ matritsaning bosh diagonal elementlari: $(2+1)=3$, $(3+1)=4$, $(5+1)=6$. Ularning ko‘paytmasi: $3 \\cdot 4 \\cdot 6 = 72$."
      },
      {
        "id": "ON_V4_Q10",
        "variant": 4,
        "num": 10,
        "origNum": 12,
        "topicId": 3,
        "kind": "Nazariy",
        "difficulty": "Oson",
        "question": "[Nazariy • 3-Ma’ruza] Teskari matritsaning 4 va 5-xossalariga ko‘ra, ko‘paytmaning teskarisi $(AB)^{-1}$ va transponirlangan matritsaning teskarisi $(A^T)^{-1}$ nimaga teng?",
        "options": [
          "$(AB)^{-1} = A^{-1} B^{-1}\\quad$ va $\\quad (A^T)^{-1} = A$",
          "$(AB)^{-1} = (BA)^{-1}\\quad$ va $\\quad (A^T)^{-1} = -A^{-1}$",
          "$(AB)^{-1} = B^T A^T\\quad$ va $\\quad (A^T)^{-1} = A^T$",
          "$(AB)^{-1} = B^{-1} A^{-1}\\quad$ va $\\quad (A^T)^{-1} = (A^{-1})^T$"
        ],
        "answer": 3,
        "explanation": "3-ma’ruza (7-slayd, 4 va 5-xossalar): $(AB)^{-1} = B^{-1}A^{-1}$ va $(A^{-1})^T = (A^T)^{-1}$."
      },
      {
        "id": "ON_V4_Q11",
        "variant": 4,
        "num": 11,
        "origNum": 10,
        "topicId": 2,
        "kind": "Nazariy",
        "difficulty": "O'rta",
        "question": "[Nazariy • 2-Ma’ruza] Determinantning 8-xossasi: Agar determinantning ikki satr (ustun) elementlari mos ravishda proporsional bo‘lsa, uning qiymati nimaga teng bo‘ladi va nima uchun?",
        "options": [
          "Birga teng bo‘ladi",
          "Proporsionallik koeffitsiyenti kvadratiga teng bo‘ladi",
          "Nolga teng bo‘ladi ($\\Delta = 0$), chunki proporsionallik koeffitsiyentini tashqariga chiqarsak, ikkita bir xil satrli determinant hosil bo‘ladi",
          "Proporsionallik koeffitsiyenti $k$ ga teng bo‘ladi"
        ],
        "answer": 2,
        "explanation": "2-ma’ruza (12-slayd, 8-xossa): Ikki satr (ustun) proporsional bo‘lsa, 4 va 6-xossalarga ko‘ra $\\Delta = k \\cdot 0 = 0$ bo‘ladi."
      },
      {
        "id": "ON_V4_Q12",
        "variant": 4,
        "num": 12,
        "origNum": 8,
        "topicId": 2,
        "kind": "Amaliy",
        "difficulty": "O'rta",
        "question": "3-tartibli determinantni hisoblang: $$\\begin{vmatrix} 1 & 2 & -1 \\\\ 3 & 1 & 2 \\\\ 2 & -1 & 3 \\end{vmatrix}$$",
        "options": [
          "$0$",
          "$-10$",
          "$10$",
          "$15$"
        ],
        "answer": 0,
        "explanation": "$1(1\\cdot 3 - 2(-1)) - 2(3\\cdot 3 - 2\\cdot 2) + (-1)(3(-1) - 1\\cdot 2) = 1(5) - 2(5) - 1(-5) = 5 - 10 + 5 = 0$ (shuningdek 3-satr = 2-satr $-$ 1-satr)."
      },
      {
        "id": "ON_V4_Q13",
        "variant": 4,
        "num": 13,
        "origNum": 11,
        "topicId": 4,
        "kind": "Nazariy",
        "difficulty": "Oson",
        "question": "[Nazariy • 4-Ma’ruza] Determinantni hisoblashning 2-usulida (nollar hosil qilib yoyish usulida) qanday ketma-ketlik bajariladi (12-slayd)?",
        "options": [
          "Determinantning barcha elementlaridan bir xil son ayirib tashlanadi",
          "Elementar almashtirish (7-xossa) yordamida tanlangan satr yoki ustunda bitta noldan farqli element qolgunicha qolgan elementlar nolga keltiriladi va so‘ngra shu qator bo‘yicha yoyiladi",
          "Barcha satrlar bir-biriga ko‘paytirib chiqiladi",
          "Determinant Sarrius qoidasi bilan bo‘laklarga ajratiladi"
        ],
        "answer": 1,
        "explanation": "4-ma’ruza (12-slayd): Biror qator elementlarini 7-xossa yordamida nolga keltirib, so‘ngra shu qator bo‘yicha yopilsa, $(n-1)$-tartibli bittagina determinantni hisoblash kifoya bo‘ladi."
      },
      {
        "id": "ON_V4_Q14",
        "variant": 4,
        "num": 14,
        "origNum": 24,
        "topicId": 8,
        "kind": "Amaliy",
        "difficulty": "Oson",
        "question": "$A$ vektorga ortogonal bo‘lgan vektorni toping: $$A = (2;\\; -5;\\; 1)$$",
        "options": [
          "$(2;\\; 1;\\; 1)$",
          "$(2;\\; -1;\\; 1)$",
          "$(3;\\; 1;\\; 2)$",
          "$(1;\\; 1;\\; 1)$"
        ],
        "answer": 0,
        "explanation": "Ortogonallik sharti $(A, B) = 0$. Tekshiramiz: $2\\cdot 2 + (-5)\\cdot 1 + 1\\cdot 1 = 4 - 5 + 1 = 0$. Qolgan variantlarda skalyar ko‘paytma noldan farqli."
      },
      {
        "id": "ON_V4_Q15",
        "variant": 4,
        "num": 15,
        "origNum": 25,
        "topicId": 7,
        "kind": "Amaliy",
        "difficulty": "Oson",
        "question": "$A$ va $B$ vektorlarning orasidagi burchakni toping: $$A = (1;\\; 0;\\; 1), \\qquad B = (0;\\; 1;\\; 1)$$",
        "options": [
          "$45^\\circ$ ($\\frac{\\pi}{4}$)",
          "$90^\\circ$ ($\\frac{\\pi}{2}$)",
          "$30^\\circ$ ($\\frac{\\pi}{6}$)",
          "$60^\\circ$ ($\\frac{\\pi}{3}$)"
        ],
        "answer": 3,
        "explanation": "$\\cos\\varphi = \\frac{(A, B)}{|A|\\cdot|B|} = \\frac{1\\cdot 0 + 0\\cdot 1 + 1\\cdot 1}{\\sqrt{2}\\cdot\\sqrt{2}} = \\frac{1}{2} \\implies \\varphi = 60^\\circ$ ($\\frac{\\pi}{3}$)."
      },
      {
        "id": "ON_V4_Q16",
        "variant": 4,
        "num": 16,
        "origNum": 2,
        "topicId": 1,
        "kind": "Amaliy",
        "difficulty": "Oson",
        "question": "$A$ va $B$ matritsalarning ayirmasi uchun bosh diagonal elementlarining yig‘indisini toping: $$A = \\begin{bmatrix} 5 & -2 & 1 \\\\ 3 & 4 & -1 \\\\ 0 & 2 & 6 \\end{bmatrix}, \\qquad B = \\begin{bmatrix} 2 & 1 & -3 \\\\ -1 & 2 & 4 \\\\ 3 & 0 & 2 \\end{bmatrix}$$",
        "options": [
          "$24$",
          "$7$",
          "$9$",
          "$15$"
        ],
        "answer": 2,
        "explanation": "$A - B$ matritsaning bosh diagonal elementlari: $(5-2)=3$, $(4-2)=2$, $(6-2)=4$. Ularning yig‘indisi: $3 + 2 + 4 = 9$."
      },
      {
        "id": "ON_V4_Q17",
        "variant": 4,
        "num": 17,
        "origNum": 15,
        "topicId": 5,
        "kind": "Amaliy",
        "difficulty": "Oson",
        "question": "Ushbu 2-tartibli tenglamalar sistemasini yeching: $$\\begin{cases} 2x + 3y = 7 \\\\ 3x - y = 5 \\end{cases}$$",
        "options": [
          "$(-2;\\; 1)$",
          "$(2;\\; 1)$",
          "$(2;\\; -1)$",
          "$(1;\\; 2)$"
        ],
        "answer": 1,
        "explanation": "Kramer usuli bilan: $\\Delta = -2 - 9 = -11$, $\\Delta_x = -7 - 15 = -22 \\implies x = 2$, $\\Delta_y = 10 - 21 = -11 \\implies y = 1$. Javob: $(2;\\; 1)$."
      },
      {
        "id": "ON_V4_Q18",
        "variant": 4,
        "num": 18,
        "origNum": 13,
        "topicId": 3,
        "kind": "Amaliy",
        "difficulty": "O'rta",
        "question": "$A$ matritsa uchun teskari matritsaning 1-qator va 1-ustunda joylashgan elementini hisoblang: $$A = \\begin{bmatrix} 2 & 1 & 1 \\\\ 1 & 2 & 1 \\\\ 1 & 1 & 2 \\end{bmatrix}$$",
        "options": [
          "$\\frac{1}{2}$",
          "$-\\frac{1}{4}$",
          "$\\frac{1}{4}$",
          "$\\frac{3}{4}$"
        ],
        "answer": 3,
        "explanation": "$\\det(A) = 2(4-1) - 1(2-1) + 1(1-2) = 6 - 1 - 1 = 4$. $A_{11} = (-1)^{1+1}\\begin{vmatrix} 2 & 1 \\\\ 1 & 2 \\end{vmatrix} = 3$. Demak $(A^{-1})_{11} = \\frac{A_{11}}{\\det A} = \\frac{3}{4}$."
      },
      {
        "id": "ON_V4_Q19",
        "variant": 4,
        "num": 19,
        "origNum": 17,
        "topicId": 6,
        "kind": "Amaliy",
        "difficulty": "O'rta",
        "question": "Ushbu 3-tartibli tenglamalar sistemasini yeching: $$\\begin{cases} x + y + z = 6 \\\\ 2x - y + z = 3 \\\\ x + 2y - z = 2 \\end{cases}$$",
        "options": [
          "$(1;\\; 3;\\; 2)$",
          "$(2;\\; 1;\\; 3)$",
          "$(3;\\; 2;\\; 1)$",
          "$(1;\\; 2;\\; 3)$"
        ],
        "answer": 3,
        "explanation": "1- va 3-tenglamalarni qo‘shsak $2x + 3y = 8$; 1- va 2-tenglamalar ayirmasidan $-x + 2y = 3 \\implies x = 2y - 3$. O‘rniga qo‘yib $y = 2$, $x = 1$, $z = 3$ ni topamiz."
      },
      {
        "id": "ON_V4_Q20",
        "variant": 4,
        "num": 20,
        "origNum": 16,
        "topicId": 6,
        "kind": "Nazariy",
        "difficulty": "Oson",
        "question": "[Nazariy • 6-Ma’ruza] Tenglamalar sistemasi cheksiz ko‘p yechimga ega bo‘lganda ($r < n$), uning bazis yechimlari soni haqida qanday tasdiq o‘rinli (14-slayd)?",
        "options": [
          "Tenglamalar sistemasi cheksiz ko‘p yechimga ega bo‘lsa-da, bazis yechimlar soni chekli bo‘ladi va bazis minorlar soniga teng bo‘ladi",
          "Bazis yechimlar soni ham cheksiz ko‘p bo‘ladi",
          "Bazis yechimlar soni har doim $1$ ga teng bo‘ladi",
          "Bazis yechim umuman mavjud bo‘lmaydi"
        ],
        "answer": 0,
        "explanation": "6-ma’ruza (14-slayd): Tenglamalar sistemasi cheksiz ko‘p bo‘lsa-da, bazis yechimlar soni chekli bo‘ladi. Bazis yechimlar soni bazis minorlar soniga teng bo‘ladi."
      },
      {
        "id": "ON_V4_Q21",
        "variant": 4,
        "num": 21,
        "origNum": 9,
        "topicId": 2,
        "kind": "Amaliy",
        "difficulty": "O'rta",
        "question": "3-tartibli determinantni hisoblang: $$\\begin{vmatrix} 2 & 0 & 1 \\\\ -1 & 3 & 2 \\\\ 4 & 1 & -1 \\end{vmatrix}$$",
        "options": [
          "$-13$",
          "$3$",
          "$23$",
          "$-23$"
        ],
        "answer": 3,
        "explanation": "1-satr bo‘yicha yoyamiz: $2(3(-1) - 2\\cdot 1) - 0 + 1((-1)\\cdot 1 - 3\\cdot 4) = 2(-5) + 1(-13) = -10 - 13 = -23$."
      },
      {
        "id": "ON_V4_Q22",
        "variant": 4,
        "num": 22,
        "origNum": 19,
        "topicId": 7,
        "kind": "Amaliy",
        "difficulty": "Oson",
        "question": "$A$ va $B$ vektorlarning skalyar ko‘paytmasini toping: $$A = (2;\\; -3;\\; 4), \\qquad B = (1;\\; 5;\\; 2)$$",
        "options": [
          "$5$",
          "$-5$",
          "$25$",
          "$-15$"
        ],
        "answer": 1,
        "explanation": "$(A, B) = 2 \\cdot 1 + (-3) \\cdot 5 + 4 \\cdot 2 = 2 - 15 + 8 = -5$."
      },
      {
        "id": "ON_V4_Q23",
        "variant": 4,
        "num": 23,
        "origNum": 7,
        "topicId": 1,
        "kind": "Nazariy",
        "difficulty": "Oson",
        "question": "[Nazariy • 1-Ma’ruza] Qanday kvadrat matritsaga «diagonal matritsa» deyiladi?",
        "options": [
          "Bosh diagonalidan tashqaridagi barcha elementlari nolga teng bo‘lgan ($a_{ij} = 0, i \\ne j$) kvadrat matritsaga",
          "Faqat bosh diagonali elementlari nolga teng bo‘lgan matritsaga",
          "Yordamchi diagonali elementlari $1$ ga teng bo‘lgan matritsaga",
          "Barcha elementlari bir xil sondan iborat bo‘lgan matritsaga"
        ],
        "answer": 0,
        "explanation": "1-ma’ruza (8-slayd): Bosh diagonalidan tashqari barcha elementlari nolga teng bo‘lgan kvadrat matritsa diagonal matritsa deyiladi."
      },
      {
        "id": "ON_V4_Q24",
        "variant": 4,
        "num": 24,
        "origNum": 3,
        "topicId": 1,
        "kind": "Amaliy",
        "difficulty": "O'rta",
        "question": "$A$ va $B$ matritsalarning ko‘paytmasi uchun 3-qator elementlarini toping: $$A = \\begin{bmatrix} 1 & 2 & -1 \\\\ 3 & 0 & 2 \\\\ 2 & -1 & 3 \\end{bmatrix}, \\qquad B = \\begin{bmatrix} 2 & 1 & 0 \\\\ -1 & 3 & 2 \\\\ 1 & -2 & 4 \\end{bmatrix}$$",
        "options": [
          "$(2;\\; 2;\\; 12)$",
          "$(8;\\; -7;\\; 10)$",
          "$(6;\\; -7;\\; 12)$",
          "$(8;\\; 7;\\; 10)$"
        ],
        "answer": 1,
        "explanation": "$A$ ning 3-qatori $(2, -1, 3)$ ni $B$ ning ustunlariga ko‘paytiramiz: $c_{31} = 2\\cdot 2 + (-1)(-1) + 3\\cdot 1 = 8$; $c_{32} = 2\\cdot 1 + (-1)\\cdot 3 + 3(-2) = -7$; $c_{33} = 2\\cdot 0 + (-1)\\cdot 2 + 3\\cdot 4 = 10$."
      },
      {
        "id": "ON_V4_Q25",
        "variant": 4,
        "num": 25,
        "origNum": 20,
        "topicId": 7,
        "kind": "Amaliy",
        "difficulty": "O'rta",
        "question": "$A$ va $B$ vektorlarning vektor ko‘paytmasini toping: $$A = (1;\\; -2;\\; 3), \\qquad B = (2;\\; 1;\\; -1)$$",
        "options": [
          "$(-1;\\; 7;\\; 5)$",
          "$(5;\\; 7;\\; -1)$",
          "$(1;\\; -7;\\; -5)$",
          "$(-1;\\; -7;\\; 5)$"
        ],
        "answer": 0,
        "explanation": "$[A \\times B] = \\begin{vmatrix} \\vec{i} & \\vec{j} & \\vec{k} \\\\ 1 & -2 & 3 \\\\ 2 & 1 & -1 \\end{vmatrix} = \\vec{i}(2-3) - \\vec{j}(-1-6) + \\vec{k}(1+4) = (-1;\\; 7;\\; 5)$."
      }
    ]
  },
  {
    "variant": 5,
    "title": "Oraliq Nazorat — 5-Variant",
    "subtitle": "17 ta amaliy misol (o‘zgarishsiz) + barcha 8 mavzudan 8 ta yangi nazariy savol (raqamlari o‘zgartirilgan)",
    "practicalCount": 17,
    "theoryCount": 8,
    "total": 25,
    "questions": [
      {
        "id": "ON_V5_Q1",
        "variant": 5,
        "num": 1,
        "origNum": 12,
        "topicId": 3,
        "kind": "Nazariy",
        "difficulty": "Oson",
        "question": "[Nazariy • 3-Ma’ruza] Agar berilgan matritsa kvadrat shaklda ($n \\times n$) bo‘lsa, uning eng katta tartibli osti minori nimaga teng (12-slayd)?",
        "options": [
          "Berilgan kvadrat matritsaning o‘z determinantiga teng ($n$-tartibli)",
          "Har doim $0$ ga teng",
          "$1$-tartibli minorga teng",
          "$(n-1)$-tartibli minorga teng"
        ],
        "answer": 0,
        "explanation": "3-ma’ruza (12-slayd): Agar berilgan matritsa kvadrat shaklda bo‘lsa, uning eng katta tartibli minori o‘ziga (o‘z determinantiga) teng."
      },
      {
        "id": "ON_V5_Q2",
        "variant": 5,
        "num": 2,
        "origNum": 3,
        "topicId": 1,
        "kind": "Amaliy",
        "difficulty": "O'rta",
        "question": "$A$ va $B$ matritsalarning ko‘paytmasi uchun 3-qator elementlarini toping: $$A = \\begin{bmatrix} 1 & 2 & -1 \\\\ 3 & 0 & 2 \\\\ 2 & -1 & 3 \\end{bmatrix}, \\qquad B = \\begin{bmatrix} 2 & 1 & 0 \\\\ -1 & 3 & 2 \\\\ 1 & -2 & 4 \\end{bmatrix}$$",
        "options": [
          "$(8;\\; 7;\\; 10)$",
          "$(6;\\; -7;\\; 12)$",
          "$(8;\\; -7;\\; 10)$",
          "$(2;\\; 2;\\; 12)$"
        ],
        "answer": 2,
        "explanation": "$A$ ning 3-qatori $(2, -1, 3)$ ni $B$ ning ustunlariga ko‘paytiramiz: $c_{31} = 2\\cdot 2 + (-1)(-1) + 3\\cdot 1 = 8$; $c_{32} = 2\\cdot 1 + (-1)\\cdot 3 + 3(-2) = -7$; $c_{33} = 2\\cdot 0 + (-1)\\cdot 2 + 3\\cdot 4 = 10$."
      },
      {
        "id": "ON_V5_Q3",
        "variant": 5,
        "num": 3,
        "origNum": 8,
        "topicId": 2,
        "kind": "Amaliy",
        "difficulty": "O'rta",
        "question": "3-tartibli determinantni hisoblang: $$\\begin{vmatrix} 1 & 2 & -1 \\\\ 3 & 1 & 2 \\\\ 2 & -1 & 3 \\end{vmatrix}$$",
        "options": [
          "$10$",
          "$0$",
          "$-10$",
          "$15$"
        ],
        "answer": 1,
        "explanation": "$1(1\\cdot 3 - 2(-1)) - 2(3\\cdot 3 - 2\\cdot 2) + (-1)(3(-1) - 1\\cdot 2) = 1(5) - 2(5) - 1(-5) = 5 - 10 + 5 = 0$ (shuningdek 3-satr = 2-satr $-$ 1-satr)."
      },
      {
        "id": "ON_V5_Q4",
        "variant": 5,
        "num": 4,
        "origNum": 25,
        "topicId": 7,
        "kind": "Amaliy",
        "difficulty": "Oson",
        "question": "$A$ va $B$ vektorlarning orasidagi burchakni toping: $$A = (1;\\; 0;\\; 1), \\qquad B = (0;\\; 1;\\; 1)$$",
        "options": [
          "$60^\\circ$ ($\\frac{\\pi}{3}$)",
          "$45^\\circ$ ($\\frac{\\pi}{4}$)",
          "$30^\\circ$ ($\\frac{\\pi}{6}$)",
          "$90^\\circ$ ($\\frac{\\pi}{2}$)"
        ],
        "answer": 0,
        "explanation": "$\\cos\\varphi = \\frac{(A, B)}{|A|\\cdot|B|} = \\frac{1\\cdot 0 + 0\\cdot 1 + 1\\cdot 1}{\\sqrt{2}\\cdot\\sqrt{2}} = \\frac{1}{2} \\implies \\varphi = 60^\\circ$ ($\\frac{\\pi}{3}$)."
      },
      {
        "id": "ON_V5_Q5",
        "variant": 5,
        "num": 5,
        "origNum": 2,
        "topicId": 1,
        "kind": "Amaliy",
        "difficulty": "Oson",
        "question": "$A$ va $B$ matritsalarning ayirmasi uchun bosh diagonal elementlarining yig‘indisini toping: $$A = \\begin{bmatrix} 5 & -2 & 1 \\\\ 3 & 4 & -1 \\\\ 0 & 2 & 6 \\end{bmatrix}, \\qquad B = \\begin{bmatrix} 2 & 1 & -3 \\\\ -1 & 2 & 4 \\\\ 3 & 0 & 2 \\end{bmatrix}$$",
        "options": [
          "$15$",
          "$7$",
          "$24$",
          "$9$"
        ],
        "answer": 3,
        "explanation": "$A - B$ matritsaning bosh diagonal elementlari: $(5-2)=3$, $(4-2)=2$, $(6-2)=4$. Ularning yig‘indisi: $3 + 2 + 4 = 9$."
      },
      {
        "id": "ON_V5_Q6",
        "variant": 5,
        "num": 6,
        "origNum": 14,
        "topicId": 5,
        "kind": "Nazariy",
        "difficulty": "Oson",
        "question": "[Nazariy • 5-Ma’ruza] Fundamental yechimlar soni haqidagi **Teorema** (8-slayd): Bir jinsli algebraik tenglamalar sistemasining rangi $r$ ga teng bo‘lib, noma’lumlar soni $n$ dan kichik ($r < n$) bo‘lsa, FYS nechta nolmas vektordan iborat bo‘ladi?",
        "options": [
          "$n - r$ ta chiziqli erkli nolmas vektorlardan iborat bo‘ladi",
          "$C_n^r$ ta vektordan iborat bo‘ladi",
          "$r$ ta nolmas vektordan iborat bo‘ladi",
          "$n + r$ ta vektordan iborat bo‘ladi"
        ],
        "answer": 0,
        "explanation": "5-ma’ruza (8-slayd, Teorema): Tenglamalar sistemasining fundamental yechimlar sistemasi $n - r$ ta nolmas vektorlardan iborat bo‘ladi."
      },
      {
        "id": "ON_V5_Q7",
        "variant": 5,
        "num": 7,
        "origNum": 1,
        "topicId": 1,
        "kind": "Amaliy",
        "difficulty": "Oson",
        "question": "$A$ va $B$ matritsalarning yig‘indisi uchun bosh diagonal elementlarining ko‘paytmasini toping: $$A = \\begin{bmatrix} 2 & 1 & -1 \\\\ 0 & 3 & 2 \\\\ 4 & -2 & 5 \\end{bmatrix}, \\qquad B = \\begin{bmatrix} 1 & -1 & 3 \\\\ 2 & 1 & -2 \\\\ -3 & 2 & 1 \\end{bmatrix}$$",
        "options": [
          "$72$",
          "$48$",
          "$60$",
          "$13$"
        ],
        "answer": 0,
        "explanation": "$A + B$ matritsaning bosh diagonal elementlari: $(2+1)=3$, $(3+1)=4$, $(5+1)=6$. Ularning ko‘paytmasi: $3 \\cdot 4 \\cdot 6 = 72$."
      },
      {
        "id": "ON_V5_Q8",
        "variant": 5,
        "num": 8,
        "origNum": 16,
        "topicId": 6,
        "kind": "Nazariy",
        "difficulty": "O'rta",
        "question": "[Nazariy • 6-Ma’ruza] Qanday shart bajarilganda tanlangan $r$ ta noma’lumlar guruhi haqiqatan ham «bazis o‘zgaruvchilar» bo‘la oladi (16-slayd)?",
        "options": [
          "Tanlangan noma’lumlarning indekslari faqat toq sonlar bo‘lganda",
          "Shu $r$ ta noma’lumning koeffitsiyentlar ustunlaridan tuzilgan $r$-tartibli determinant (minor) noldan farqli bo‘lganda ($\\det \\ne 0$)",
          "Har qanday $r$ ta noma’lum hech qanday shartsiz bazis bo‘la oladi",
          "Shu noma’lumlarning koeffitsiyentlaridan tuzilgan minor nolga teng bo‘lganda ($\\det = 0$)"
        ],
        "answer": 1,
        "explanation": "6-ma’ruza (16-slayd): $C_n^r$ ta guruh ichidan faqat mos $r$-tartibli minori noldan farqli ($\\ne 0$) bo‘lgan guruhlargina bazis o‘zgaruvchilar bo‘la oladi."
      },
      {
        "id": "ON_V5_Q9",
        "variant": 5,
        "num": 9,
        "origNum": 13,
        "topicId": 3,
        "kind": "Amaliy",
        "difficulty": "O'rta",
        "question": "$A$ matritsa uchun teskari matritsaning 1-qator va 1-ustunda joylashgan elementini hisoblang: $$A = \\begin{bmatrix} 2 & 1 & 1 \\\\ 1 & 2 & 1 \\\\ 1 & 1 & 2 \\end{bmatrix}$$",
        "options": [
          "$\\frac{3}{4}$",
          "$\\frac{1}{2}$",
          "$\\frac{1}{4}$",
          "$-\\frac{1}{4}$"
        ],
        "answer": 0,
        "explanation": "$\\det(A) = 2(4-1) - 1(2-1) + 1(1-2) = 6 - 1 - 1 = 4$. $A_{11} = (-1)^{1+1}\\begin{vmatrix} 2 & 1 \\\\ 1 & 2 \\end{vmatrix} = 3$. Demak $(A^{-1})_{11} = \\frac{A_{11}}{\\det A} = \\frac{3}{4}$."
      },
      {
        "id": "ON_V5_Q10",
        "variant": 5,
        "num": 10,
        "origNum": 7,
        "topicId": 1,
        "kind": "Nazariy",
        "difficulty": "Oson",
        "question": "[Nazariy • 1-Ma’ruza] Matritsalar ustida «chiziqli amallar» deb qaysi amallarga aytiladi?",
        "options": [
          "Matritsalarni bir-biriga ko‘paytirish va darajaga oshirish amallariga",
          "Matritsalarni qo‘shish, ayirish va matritsani songa ko‘paytirish amallariga",
          "Matritsani transponirlash va rangini hisoblash amallariga",
          "Determinant hisoblash va teskari matritsa topish amallariga"
        ],
        "answer": 1,
        "explanation": "1-ma’ruza (10-slayd): Matritsalarni qo‘shish, ayirish va songa ko‘paytirish amallariga matritsalar ustida chiziqli amallar deyiladi."
      },
      {
        "id": "ON_V5_Q11",
        "variant": 5,
        "num": 11,
        "origNum": 11,
        "topicId": 4,
        "kind": "Nazariy",
        "difficulty": "Oson",
        "question": "[Nazariy • 4-Ma’ruza] **Laplas teoremasi** (18-slayd) qanday ta’riflanadi?",
        "options": [
          "Determinantning qiymati faqat bosh diagonal elementlari va ularning algebraik to‘ldiruvchilari ko‘paytmasiga teng",
          "Determinantning qiymati uning barcha satr elementlari bilan minorlari yig‘indisiga teng",
          "Determinantning qiymati uning ixtiyoriy satr (yoki ustun) elementlari bilan shu elementlarga mos algebraik to‘ldiruvchilar ko‘paytmalarining yig‘indisiga teng: $\\Delta = \\sum_{j=1}^n a_{ij} A_{ij}$",
          "Determinantning qiymati satrlar sonining faktorialiga teng"
        ],
        "answer": 2,
        "explanation": "4-ma’ruza (18-slayd): Laplas teoremasi: Determinantning qiymati uning ixtiyoriy satr (ustun) elementlari bilan shu elementlarga mos algebraik to‘ldiruvchilar ko‘paytmalari yig‘indisiga teng."
      },
      {
        "id": "ON_V5_Q12",
        "variant": 5,
        "num": 12,
        "origNum": 21,
        "topicId": 7,
        "kind": "Amaliy",
        "difficulty": "O'rta",
        "question": "$A$, $B$ va $C$ vektorlarning aralash ko‘paytmasini toping: $$A = (1;\\; 2;\\; -1), \\quad B = (3;\\; 0;\\; 2), \\quad C = (2;\\; -1;\\; 1)$$",
        "options": [
          "$7$",
          "$5$",
          "$-7$",
          "$1$"
        ],
        "answer": 0,
        "explanation": "$\\begin{vmatrix} 1 & 2 & -1 \\\\ 3 & 0 & 2 \\\\ 2 & -1 & 1 \\end{vmatrix} = 1(0+2) - 2(3-4) - 1(-3-0) = 2 + 2 + 3 = 7$."
      },
      {
        "id": "ON_V5_Q13",
        "variant": 5,
        "num": 13,
        "origNum": 4,
        "topicId": 7,
        "kind": "Amaliy",
        "difficulty": "Oson",
        "question": "$A$ vektor uchun $-3A$ vektorning qiymatini toping: $$A = (2;\\; -3;\\; 5)$$",
        "options": [
          "$(-6;\\; -9;\\; -15)$",
          "$(-6;\\; 9;\\; -15)$",
          "$(-1;\\; -6;\\; 2)$",
          "$(6;\\; -9;\\; 15)$"
        ],
        "answer": 1,
        "explanation": "Vektorni $-3$ songa ko‘paytirishda har bir komponent $-3$ ga ko‘paytiriladi: $(-3\\cdot 2;\\; -3\\cdot(-3);\\; -3\\cdot 5) = (-6;\\; 9;\\; -15)$."
      },
      {
        "id": "ON_V5_Q14",
        "variant": 5,
        "num": 14,
        "origNum": 20,
        "topicId": 7,
        "kind": "Amaliy",
        "difficulty": "O'rta",
        "question": "$A$ va $B$ vektorlarning vektor ko‘paytmasini toping: $$A = (1;\\; -2;\\; 3), \\qquad B = (2;\\; 1;\\; -1)$$",
        "options": [
          "$(1;\\; -7;\\; -5)$",
          "$(-1;\\; 7;\\; 5)$",
          "$(5;\\; 7;\\; -1)$",
          "$(-1;\\; -7;\\; 5)$"
        ],
        "answer": 1,
        "explanation": "$[A \\times B] = \\begin{vmatrix} \\vec{i} & \\vec{j} & \\vec{k} \\\\ 1 & -2 & 3 \\\\ 2 & 1 & -1 \\end{vmatrix} = \\vec{i}(2-3) - \\vec{j}(-1-6) + \\vec{k}(1+4) = (-1;\\; 7;\\; 5)$."
      },
      {
        "id": "ON_V5_Q15",
        "variant": 5,
        "num": 15,
        "origNum": 5,
        "topicId": 2,
        "kind": "Amaliy",
        "difficulty": "Oson",
        "question": "2-tartibli determinantni hisoblang: $$\\begin{vmatrix} 4 & -3 \\\\ 2 & 5 \\end{vmatrix}$$",
        "options": [
          "$26$",
          "$14$",
          "$20$",
          "$-26$"
        ],
        "answer": 0,
        "explanation": "$4 \\cdot 5 - (-3) \\cdot 2 = 20 - (-6) = 26$."
      },
      {
        "id": "ON_V5_Q16",
        "variant": 5,
        "num": 16,
        "origNum": 15,
        "topicId": 5,
        "kind": "Amaliy",
        "difficulty": "Oson",
        "question": "Ushbu 2-tartibli tenglamalar sistemasini yeching: $$\\begin{cases} 2x + 3y = 7 \\\\ 3x - y = 5 \\end{cases}$$",
        "options": [
          "$(1;\\; 2)$",
          "$(2;\\; -1)$",
          "$(2;\\; 1)$",
          "$(-2;\\; 1)$"
        ],
        "answer": 2,
        "explanation": "Kramer usuli bilan: $\\Delta = -2 - 9 = -11$, $\\Delta_x = -7 - 15 = -22 \\implies x = 2$, $\\Delta_y = 10 - 21 = -11 \\implies y = 1$. Javob: $(2;\\; 1)$."
      },
      {
        "id": "ON_V5_Q17",
        "variant": 5,
        "num": 17,
        "origNum": 17,
        "topicId": 6,
        "kind": "Amaliy",
        "difficulty": "O'rta",
        "question": "Ushbu 3-tartibli tenglamalar sistemasini yeching: $$\\begin{cases} x + y + z = 6 \\\\ 2x - y + z = 3 \\\\ x + 2y - z = 2 \\end{cases}$$",
        "options": [
          "$(1;\\; 2;\\; 3)$",
          "$(1;\\; 3;\\; 2)$",
          "$(2;\\; 1;\\; 3)$",
          "$(3;\\; 2;\\; 1)$"
        ],
        "answer": 0,
        "explanation": "1- va 3-tenglamalarni qo‘shsak $2x + 3y = 8$; 1- va 2-tenglamalar ayirmasidan $-x + 2y = 3 \\implies x = 2y - 3$. O‘rniga qo‘yib $y = 2$, $x = 1$, $z = 3$ ni topamiz."
      },
      {
        "id": "ON_V5_Q18",
        "variant": 5,
        "num": 18,
        "origNum": 9,
        "topicId": 2,
        "kind": "Amaliy",
        "difficulty": "O'rta",
        "question": "3-tartibli determinantni hisoblang: $$\\begin{vmatrix} 2 & 0 & 1 \\\\ -1 & 3 & 2 \\\\ 4 & 1 & -1 \\end{vmatrix}$$",
        "options": [
          "$-23$",
          "$3$",
          "$23$",
          "$-13$"
        ],
        "answer": 0,
        "explanation": "1-satr bo‘yicha yoyamiz: $2(3(-1) - 2\\cdot 1) - 0 + 1((-1)\\cdot 1 - 3\\cdot 4) = 2(-5) + 1(-13) = -10 - 13 = -23$."
      },
      {
        "id": "ON_V5_Q19",
        "variant": 5,
        "num": 19,
        "origNum": 6,
        "topicId": 2,
        "kind": "Amaliy",
        "difficulty": "Oson",
        "question": "2-tartibli determinantni hisoblang: $$\\begin{vmatrix} -3 & 6 \\\\ 4 & -5 \\end{vmatrix}$$",
        "options": [
          "$9$",
          "$-39$",
          "$39$",
          "$-9$"
        ],
        "answer": 3,
        "explanation": "$(-3) \\cdot (-5) - 6 \\cdot 4 = 15 - 24 = -9$."
      },
      {
        "id": "ON_V5_Q20",
        "variant": 5,
        "num": 20,
        "origNum": 22,
        "topicId": 7,
        "kind": "Amaliy",
        "difficulty": "Oson",
        "question": "Quyidagi vektorning uzunligini toping: $$A = (2;\\; -3;\\; 6)$$",
        "options": [
          "$49$",
          "$5$",
          "$11$",
          "$7$"
        ],
        "answer": 3,
        "explanation": "$|A| = \\sqrt{2^2 + (-3)^2 + 6^2} = \\sqrt{4 + 9 + 36} = \\sqrt{49} = 7$."
      },
      {
        "id": "ON_V5_Q21",
        "variant": 5,
        "num": 21,
        "origNum": 19,
        "topicId": 7,
        "kind": "Amaliy",
        "difficulty": "Oson",
        "question": "$A$ va $B$ vektorlarning skalyar ko‘paytmasini toping: $$A = (2;\\; -3;\\; 4), \\qquad B = (1;\\; 5;\\; 2)$$",
        "options": [
          "$-15$",
          "$5$",
          "$-5$",
          "$25$"
        ],
        "answer": 2,
        "explanation": "$(A, B) = 2 \\cdot 1 + (-3) \\cdot 5 + 4 \\cdot 2 = 2 - 15 + 8 = -5$."
      },
      {
        "id": "ON_V5_Q22",
        "variant": 5,
        "num": 22,
        "origNum": 18,
        "topicId": 7,
        "kind": "Nazariy",
        "difficulty": "Oson",
        "question": "[Nazariy • 7-Ma’ruza] **Koshi-Bunyakovskiy tengsizligi** haqidagi Teorema (20-slayd) qaysi javobda to‘g‘ri berilgan?",
        "options": [
          "$|X - Y| \\ge |X| + |Y|$ tengsizlik o‘rinli",
          "$|(X, Y)| = |X| + |Y|$ tenglik o‘rinli",
          "$|(X, Y)| \\ge |X| \\cdot |Y|$ tengsizlik o‘rinli",
          "$\\mathbb{R}^n$ arifmetik fazodan olingan ixtiyoriy $X$ va $Y$ vektorlar uchun $|(X, Y)| \\le |X| \\cdot |Y|$ yoki $\\left|\\sum_{i=1}^n x_i y_i\\right| \\le \\sqrt{\\sum_{i=1}^n x_i^2} \\cdot \\sqrt{\\sum_{i=1}^n y_i^2}$ tengsizlik o‘rinli"
        ],
        "answer": 3,
        "explanation": "7-ma’ruza (20-slayd, Teorema): $|(X, Y)| \\le |X| \\cdot |Y|$ — Koshi-Bunyakovskiy tengsizligi."
      },
      {
        "id": "ON_V5_Q23",
        "variant": 5,
        "num": 23,
        "origNum": 10,
        "topicId": 2,
        "kind": "Nazariy",
        "difficulty": "O'rta",
        "question": "[Nazariy • 2-Ma’ruza] 3-tartibli determinantni hisoblashning «Uchburchak qoidasi»da qaysi elementlar ko‘paytmasi musbat (plyus) ishora bilan olinadi?",
        "options": [
          "Faqat burchaklarda joylashgan 4 ta element ko‘paytmasi",
          "Yordamchi diagonal elementlari ko‘paytmasi hamda asosi yordamchi diagonalga parallel bo‘lgan ikkita uchburchak uchlaridagi elementlar ko‘paytmalari",
          "1-satr, 2-satr va 3-satr elementlarining o‘zaro ko‘paytmalari",
          "Bosh diagonal elementlari ko‘paytmasi hamda asosi bosh diagonalga parallel bo‘lgan ikkita uchburchak uchlaridagi elementlar ko‘paytmalari"
        ],
        "answer": 3,
        "explanation": "2-ma’ruza (17, 19-slaydlar): Uchburchak qoidasida bosh diagonal va unga parallel asosli 2 ta uchburchak plyus, yordamchi diagonal va unga parallel asosli 2 ta uchburchak minus ishora bilan olinadi."
      },
      {
        "id": "ON_V5_Q24",
        "variant": 5,
        "num": 24,
        "origNum": 24,
        "topicId": 8,
        "kind": "Amaliy",
        "difficulty": "Oson",
        "question": "$A$ vektorga ortogonal bo‘lgan vektorni toping: $$A = (2;\\; -5;\\; 1)$$",
        "options": [
          "$(3;\\; 1;\\; 2)$",
          "$(2;\\; 1;\\; 1)$",
          "$(1;\\; 1;\\; 1)$",
          "$(2;\\; -1;\\; 1)$"
        ],
        "answer": 1,
        "explanation": "Ortogonallik sharti $(A, B) = 0$. Tekshiramiz: $2\\cdot 2 + (-5)\\cdot 1 + 1\\cdot 1 = 4 - 5 + 1 = 0$. Qolgan variantlarda skalyar ko‘paytma noldan farqli."
      },
      {
        "id": "ON_V5_Q25",
        "variant": 5,
        "num": 25,
        "origNum": 23,
        "topicId": 8,
        "kind": "Nazariy",
        "difficulty": "Oson",
        "question": "[Nazariy • 8-Ma’ruza] Chiziqli erkli $A_1, A_2, \\dots, A_k$ vektorlar sistemasi ustida ortogonal $B_1, B_2, \\dots, B_k$ vektorlar sistemasini qurish usuli qanday nomlanadi va qaysi formulalar bilan bajariladi (23, 29-slaydlar)?",
        "options": [
          "Kroneker-Kapelli almashtirishi deyiladi",
          "Vektorlar sistemasini «ortogonallash jarayoni» deyiladi va Gramm-Shmidt formulalari: $B_1 = A_1,\\; B_t = A_t - \\sum_{i=1}^{t-1} \\frac{(B_i, A_t)}{(B_i, B_i)} B_i$ yordamida amalga oshiriladi",
          "Vektorlar sistemasini «transponirlash jarayoni» deyiladi va Kramer formulalari yordamida bajariladi",
          "Laplas yoyilmasi deyiladi"
        ],
        "answer": 1,
        "explanation": "8-ma’ruza (23, 29-slaydlar): Chiziqli erkli $A_1, \\dots, A_k$ sistemani ortogonal $B_1, \\dots, B_k$ sistema bilan almashtirish ortogonallash jarayoni deyiladi va Gramm-Shmidt formulalari bilan bajariladi."
      }
    ]
  },
  {
    "variant": 6,
    "title": "Oraliq Nazorat — 6-Variant",
    "subtitle": "17 ta amaliy misol (o‘zgarishsiz) + barcha 8 mavzudan 8 ta yangi nazariy savol (raqamlari o‘zgartirilgan)",
    "practicalCount": 17,
    "theoryCount": 8,
    "total": 25,
    "questions": [
      {
        "id": "ON_V6_Q1",
        "variant": 6,
        "num": 1,
        "origNum": 20,
        "topicId": 7,
        "kind": "Amaliy",
        "difficulty": "O'rta",
        "question": "$A$ va $B$ vektorlarning vektor ko‘paytmasini toping: $$A = (1;\\; -2;\\; 3), \\qquad B = (2;\\; 1;\\; -1)$$",
        "options": [
          "$(-1;\\; -7;\\; 5)$",
          "$(5;\\; 7;\\; -1)$",
          "$(-1;\\; 7;\\; 5)$",
          "$(1;\\; -7;\\; -5)$"
        ],
        "answer": 2,
        "explanation": "$[A \\times B] = \\begin{vmatrix} \\vec{i} & \\vec{j} & \\vec{k} \\\\ 1 & -2 & 3 \\\\ 2 & 1 & -1 \\end{vmatrix} = \\vec{i}(2-3) - \\vec{j}(-1-6) + \\vec{k}(1+4) = (-1;\\; 7;\\; 5)$."
      },
      {
        "id": "ON_V6_Q2",
        "variant": 6,
        "num": 2,
        "origNum": 9,
        "topicId": 2,
        "kind": "Amaliy",
        "difficulty": "O'rta",
        "question": "3-tartibli determinantni hisoblang: $$\\begin{vmatrix} 2 & 0 & 1 \\\\ -1 & 3 & 2 \\\\ 4 & 1 & -1 \\end{vmatrix}$$",
        "options": [
          "$3$",
          "$-23$",
          "$-13$",
          "$23$"
        ],
        "answer": 1,
        "explanation": "1-satr bo‘yicha yoyamiz: $2(3(-1) - 2\\cdot 1) - 0 + 1((-1)\\cdot 1 - 3\\cdot 4) = 2(-5) + 1(-13) = -10 - 13 = -23$."
      },
      {
        "id": "ON_V6_Q3",
        "variant": 6,
        "num": 3,
        "origNum": 7,
        "topicId": 1,
        "kind": "Nazariy",
        "difficulty": "Oson",
        "question": "[Nazariy • 1-Ma’ruza] Matritsalar ustidagi chiziqli amallarning 8 ta xossasiga ko‘ra, nol matritsa $\\Theta$ va qarama-qarshi matritsa $-A$ uchun qaysi tengliklar o‘rinli?",
        "options": [
          "$A + \\Theta = E,\\qquad A - A = 1$",
          "$A \\cdot \\Theta = A,\\qquad A + (-A) = E$",
          "$A + \\Theta = A,\\qquad A + (-A) = \\Theta,\\qquad 1 \\cdot A = A$",
          "$A + \\Theta = \\Theta,\\qquad A + (-A) = 2A,\\qquad 1 \\cdot A = E$"
        ],
        "answer": 2,
        "explanation": "1-ma’ruza (10-slayd, 6, 7, 8-xossalar): $A + \\Theta = A$, $A + (-A) = \\Theta$ va $1 \\cdot A = A$."
      },
      {
        "id": "ON_V6_Q4",
        "variant": 6,
        "num": 4,
        "origNum": 4,
        "topicId": 7,
        "kind": "Amaliy",
        "difficulty": "Oson",
        "question": "$A$ vektor uchun $-3A$ vektorning qiymatini toping: $$A = (2;\\; -3;\\; 5)$$",
        "options": [
          "$(-1;\\; -6;\\; 2)$",
          "$(6;\\; -9;\\; 15)$",
          "$(-6;\\; 9;\\; -15)$",
          "$(-6;\\; -9;\\; -15)$"
        ],
        "answer": 2,
        "explanation": "Vektorni $-3$ songa ko‘paytirishda har bir komponent $-3$ ga ko‘paytiriladi: $(-3\\cdot 2;\\; -3\\cdot(-3);\\; -3\\cdot 5) = (-6;\\; 9;\\; -15)$."
      },
      {
        "id": "ON_V6_Q5",
        "variant": 6,
        "num": 5,
        "origNum": 19,
        "topicId": 7,
        "kind": "Amaliy",
        "difficulty": "Oson",
        "question": "$A$ va $B$ vektorlarning skalyar ko‘paytmasini toping: $$A = (2;\\; -3;\\; 4), \\qquad B = (1;\\; 5;\\; 2)$$",
        "options": [
          "$-15$",
          "$5$",
          "$25$",
          "$-5$"
        ],
        "answer": 3,
        "explanation": "$(A, B) = 2 \\cdot 1 + (-3) \\cdot 5 + 4 \\cdot 2 = 2 - 15 + 8 = -5$."
      },
      {
        "id": "ON_V6_Q6",
        "variant": 6,
        "num": 6,
        "origNum": 3,
        "topicId": 1,
        "kind": "Amaliy",
        "difficulty": "O'rta",
        "question": "$A$ va $B$ matritsalarning ko‘paytmasi uchun 3-qator elementlarini toping: $$A = \\begin{bmatrix} 1 & 2 & -1 \\\\ 3 & 0 & 2 \\\\ 2 & -1 & 3 \\end{bmatrix}, \\qquad B = \\begin{bmatrix} 2 & 1 & 0 \\\\ -1 & 3 & 2 \\\\ 1 & -2 & 4 \\end{bmatrix}$$",
        "options": [
          "$(8;\\; 7;\\; 10)$",
          "$(2;\\; 2;\\; 12)$",
          "$(6;\\; -7;\\; 12)$",
          "$(8;\\; -7;\\; 10)$"
        ],
        "answer": 3,
        "explanation": "$A$ ning 3-qatori $(2, -1, 3)$ ni $B$ ning ustunlariga ko‘paytiramiz: $c_{31} = 2\\cdot 2 + (-1)(-1) + 3\\cdot 1 = 8$; $c_{32} = 2\\cdot 1 + (-1)\\cdot 3 + 3(-2) = -7$; $c_{33} = 2\\cdot 0 + (-1)\\cdot 2 + 3\\cdot 4 = 10$."
      },
      {
        "id": "ON_V6_Q7",
        "variant": 6,
        "num": 7,
        "origNum": 11,
        "topicId": 4,
        "kind": "Nazariy",
        "difficulty": "O'rta",
        "question": "[Nazariy • 4-Ma’ruza] Umumiy Laplas teoremasiga (16-17-slaydlar) ko‘ra, 5-tartibli determinantni 2 ta satr (masalan 1- va 3-satrlar) bo‘yicha yoyganda qanday ko‘paytmalar yig‘indisi hosil bo‘ladi?",
        "options": [
          "Faqat 1-tartibli elementlar bilan 4-tartibli minorlar ko‘paytmasi",
          "1- va 3-satr elementlarining skalyar ko‘paytmasi",
          "5 ta 2-tartibli determinantlarning o‘zaro ko‘paytmasi",
          "Shu 2 ta satrda joylashgan 2-tartibli minorlar bilan ularga mos 3-tartibli algebraik to‘ldiruvchilarning ko‘paytmalari yig‘indisi ($C_5^2 = 10$ ta had)"
        ],
        "answer": 3,
        "explanation": "4-ma’ruza (16-17-slaydlar): 2 ta satr tanlanganda $C_5^2 = 10$ ta yig‘indi qatnashib, har bir hadda 2-tartibli minor va uning 3-tartibli qo‘shimcha minori $(-1)^{i_1+i_2+j_1+j_2}$ ishora bilan ko‘paytiriladi."
      },
      {
        "id": "ON_V6_Q8",
        "variant": 6,
        "num": 8,
        "origNum": 18,
        "topicId": 7,
        "kind": "Nazariy",
        "difficulty": "Oson",
        "question": "[Nazariy • 7-Ma’ruza] Chiziqli fazodagi $x_1, x_2, \\dots, x_n$ elementlar qachon «chiziqli bog‘liq» va qachon «chiziqli erkli» deyiladi (24-slayd)?",
        "options": [
          "$\\lambda_1 x_1 + \\lambda_2 x_2 + \\dots + \\lambda_n x_n = \\Theta$ tenglik $\\lambda_i$ koeffitsiyentlardan kamida bittasi noldan farqli bo‘lganda bajarilsa — chiziqli bog‘liq; faqat barcha $\\lambda_1 = \\lambda_2 = \\dots = \\lambda_n = 0$ bo‘lgandagina bajarilsa — chiziqli erkli deyiladi",
          "Barcha $\\lambda_i = 0$ da bajarilsa — chiziqli bog‘liq; noldan farqli $\\lambda_i$ larda bajarilsa — chiziqli erkli deyiladi",
          "Elementlar juft-juft kollinear bo‘lsa — chiziqli erkli deyiladi",
          "Elementlar yig‘indisi $1$ ga teng bo‘lsa — chiziqli erkli deyiladi"
        ],
        "answer": 0,
        "explanation": "7-ma’ruza (24-slayd): Trivial bo‘lmagan kombinatsiyada $\\Theta$ hosil bo‘lsa chiziqli bog‘liq, faqat trivial ($\\lambda_i=0$) kombinatsiyada $\\Theta$ hosil bo‘lsa chiziqli erkli deyiladi."
      },
      {
        "id": "ON_V6_Q9",
        "variant": 6,
        "num": 9,
        "origNum": 8,
        "topicId": 2,
        "kind": "Amaliy",
        "difficulty": "O'rta",
        "question": "3-tartibli determinantni hisoblang: $$\\begin{vmatrix} 1 & 2 & -1 \\\\ 3 & 1 & 2 \\\\ 2 & -1 & 3 \\end{vmatrix}$$",
        "options": [
          "$15$",
          "$10$",
          "$0$",
          "$-10$"
        ],
        "answer": 2,
        "explanation": "$1(1\\cdot 3 - 2(-1)) - 2(3\\cdot 3 - 2\\cdot 2) + (-1)(3(-1) - 1\\cdot 2) = 1(5) - 2(5) - 1(-5) = 5 - 10 + 5 = 0$ (shuningdek 3-satr = 2-satr $-$ 1-satr)."
      },
      {
        "id": "ON_V6_Q10",
        "variant": 6,
        "num": 10,
        "origNum": 13,
        "topicId": 3,
        "kind": "Amaliy",
        "difficulty": "O'rta",
        "question": "$A$ matritsa uchun teskari matritsaning 1-qator va 1-ustunda joylashgan elementini hisoblang: $$A = \\begin{bmatrix} 2 & 1 & 1 \\\\ 1 & 2 & 1 \\\\ 1 & 1 & 2 \\end{bmatrix}$$",
        "options": [
          "$\\frac{1}{2}$",
          "$\\frac{3}{4}$",
          "$-\\frac{1}{4}$",
          "$\\frac{1}{4}$"
        ],
        "answer": 1,
        "explanation": "$\\det(A) = 2(4-1) - 1(2-1) + 1(1-2) = 6 - 1 - 1 = 4$. $A_{11} = (-1)^{1+1}\\begin{vmatrix} 2 & 1 \\\\ 1 & 2 \\end{vmatrix} = 3$. Demak $(A^{-1})_{11} = \\frac{A_{11}}{\\det A} = \\frac{3}{4}$."
      },
      {
        "id": "ON_V6_Q11",
        "variant": 6,
        "num": 11,
        "origNum": 12,
        "topicId": 3,
        "kind": "Nazariy",
        "difficulty": "Oson",
        "question": "[Nazariy • 3-Ma’ruza] Matritsa rangining 1-xossasi: $m \\times n$ o‘lchovli $A$ matritsa uchun $r(A)$ qanday tengsizlikni qanoatlantiradi va nol matritsa $E^0$ ning rangi nimaga teng?",
        "options": [
          "$r(A) = m \\cdot n;\\qquad r(E^0) = 0$",
          "$0 \\le r(A) \\le \\min(m, n);\\qquad r(E^0) = 0$",
          "$1 \\le r(A) \\le \\max(m, n);\\qquad r(E^0) = 1$",
          "$0 \\le r(A) \\le m + n;\\qquad r(E^0) = m$"
        ],
        "answer": 1,
        "explanation": "3-ma’ruza (18-slayd, 1-xossa): $0 \\le r(A) \\le \\min(m, n)$ va $r(E^0) = 0$."
      },
      {
        "id": "ON_V6_Q12",
        "variant": 6,
        "num": 12,
        "origNum": 14,
        "topicId": 5,
        "kind": "Nazariy",
        "difficulty": "Oson",
        "question": "[Nazariy • 5-Ma’ruza] Bir jinsli bo‘lmagan sistemaning umumiy yechimi $X = F_0 + c_1 F_1 + \\dots + c_{n-r} F_{n-r}$ formulasidagi $F_0$ va $F_1, \\dots, F_{n-r}$ lar nimani anglatadi (12-slayd)?",
        "options": [
          "$F_0$ — nol vektor; $F_1, \\dots, F_{n-r}$ — bir jinsli bo‘lmagan sistemaning xususiy yechimlari",
          "$F_0$ — bir jinsli bo‘lmagan sistemaning bitta xususiy yechimi; $F_1, \\dots, F_{n-r}$ — mos bir jinsli ($AX = \\Theta$) sistemaning fundamental yechimlari sistemasi",
          "$F_0, F_1, \\dots, F_{n-r}$ larning barchasi bir jinsli sistemaning yechimlari",
          "$F_0$ — ozod hadlar vektori $B$; $F_i$ — asosiy matritsa ustunlari"
        ],
        "answer": 1,
        "explanation": "5-ma’ruza (12-slayd): $F_0$ — bir jinsli bo‘lmagan sistemaning xususiy yechimlaridan biri, $F_1, \\dots, F_{n-r}$ — mos bir jinsli sistemaning FYS, $c_i$ — ixtiyoriy haqiqiy sonlar."
      },
      {
        "id": "ON_V6_Q13",
        "variant": 6,
        "num": 13,
        "origNum": 15,
        "topicId": 5,
        "kind": "Amaliy",
        "difficulty": "Oson",
        "question": "Ushbu 2-tartibli tenglamalar sistemasini yeching: $$\\begin{cases} 2x + 3y = 7 \\\\ 3x - y = 5 \\end{cases}$$",
        "options": [
          "$(2;\\; -1)$",
          "$(1;\\; 2)$",
          "$(-2;\\; 1)$",
          "$(2;\\; 1)$"
        ],
        "answer": 3,
        "explanation": "Kramer usuli bilan: $\\Delta = -2 - 9 = -11$, $\\Delta_x = -7 - 15 = -22 \\implies x = 2$, $\\Delta_y = 10 - 21 = -11 \\implies y = 1$. Javob: $(2;\\; 1)$."
      },
      {
        "id": "ON_V6_Q14",
        "variant": 6,
        "num": 14,
        "origNum": 16,
        "topicId": 6,
        "kind": "Nazariy",
        "difficulty": "O'rta",
        "question": "[Nazariy • 6-Ma’ruza] Tanlangan bazis o‘zgaruvchilar guruhi bo‘yicha bazis yechimni topish algoritmi qanday (17-slayd)?",
        "options": [
          "Barcha o‘zgaruvchilar $1$ ga teng deb olinadi",
          "Faqat ozod hadlar ustuni ko‘chirib yoziladi",
          "Barcha $n - r$ ta erkli o‘zgaruvchilar $0$ ga teng deb olinib sistemadan tushirib qoldiriladi, hosil bo‘lgan $r \\times r$ kvadrat sistema yechilib $r$ ta bazis o‘zgaruvchi qiymati topiladi va $n$ o‘lchovli ustun-vektorga o‘z o‘rinlariga joylashtiriladi",
          "Bazis o‘zgaruvchilar $0$ ga teng deb olinib, erkli o‘zgaruvchilar topiladi"
        ],
        "answer": 2,
        "explanation": "6-ma’ruza (17-slayd): Erkli o‘zgaruvchilarga $0$ berilganda $r$ ta tenglama va $r$ ta bazis noma’lumli ($\\det \\ne 0$) kvadrat sistema qoladi va uning yagona yechimi bazis yechimni beradi."
      },
      {
        "id": "ON_V6_Q15",
        "variant": 6,
        "num": 15,
        "origNum": 1,
        "topicId": 1,
        "kind": "Amaliy",
        "difficulty": "Oson",
        "question": "$A$ va $B$ matritsalarning yig‘indisi uchun bosh diagonal elementlarining ko‘paytmasini toping: $$A = \\begin{bmatrix} 2 & 1 & -1 \\\\ 0 & 3 & 2 \\\\ 4 & -2 & 5 \\end{bmatrix}, \\qquad B = \\begin{bmatrix} 1 & -1 & 3 \\\\ 2 & 1 & -2 \\\\ -3 & 2 & 1 \\end{bmatrix}$$",
        "options": [
          "$13$",
          "$72$",
          "$60$",
          "$48$"
        ],
        "answer": 1,
        "explanation": "$A + B$ matritsaning bosh diagonal elementlari: $(2+1)=3$, $(3+1)=4$, $(5+1)=6$. Ularning ko‘paytmasi: $3 \\cdot 4 \\cdot 6 = 72$."
      },
      {
        "id": "ON_V6_Q16",
        "variant": 6,
        "num": 16,
        "origNum": 2,
        "topicId": 1,
        "kind": "Amaliy",
        "difficulty": "Oson",
        "question": "$A$ va $B$ matritsalarning ayirmasi uchun bosh diagonal elementlarining yig‘indisini toping: $$A = \\begin{bmatrix} 5 & -2 & 1 \\\\ 3 & 4 & -1 \\\\ 0 & 2 & 6 \\end{bmatrix}, \\qquad B = \\begin{bmatrix} 2 & 1 & -3 \\\\ -1 & 2 & 4 \\\\ 3 & 0 & 2 \\end{bmatrix}$$",
        "options": [
          "$9$",
          "$7$",
          "$24$",
          "$15$"
        ],
        "answer": 0,
        "explanation": "$A - B$ matritsaning bosh diagonal elementlari: $(5-2)=3$, $(4-2)=2$, $(6-2)=4$. Ularning yig‘indisi: $3 + 2 + 4 = 9$."
      },
      {
        "id": "ON_V6_Q17",
        "variant": 6,
        "num": 17,
        "origNum": 24,
        "topicId": 8,
        "kind": "Amaliy",
        "difficulty": "Oson",
        "question": "$A$ vektorga ortogonal bo‘lgan vektorni toping: $$A = (2;\\; -5;\\; 1)$$",
        "options": [
          "$(3;\\; 1;\\; 2)$",
          "$(2;\\; -1;\\; 1)$",
          "$(2;\\; 1;\\; 1)$",
          "$(1;\\; 1;\\; 1)$"
        ],
        "answer": 2,
        "explanation": "Ortogonallik sharti $(A, B) = 0$. Tekshiramiz: $2\\cdot 2 + (-5)\\cdot 1 + 1\\cdot 1 = 4 - 5 + 1 = 0$. Qolgan variantlarda skalyar ko‘paytma noldan farqli."
      },
      {
        "id": "ON_V6_Q18",
        "variant": 6,
        "num": 18,
        "origNum": 6,
        "topicId": 2,
        "kind": "Amaliy",
        "difficulty": "Oson",
        "question": "2-tartibli determinantni hisoblang: $$\\begin{vmatrix} -3 & 6 \\\\ 4 & -5 \\end{vmatrix}$$",
        "options": [
          "$-9$",
          "$9$",
          "$-39$",
          "$39$"
        ],
        "answer": 0,
        "explanation": "$(-3) \\cdot (-5) - 6 \\cdot 4 = 15 - 24 = -9$."
      },
      {
        "id": "ON_V6_Q19",
        "variant": 6,
        "num": 19,
        "origNum": 10,
        "topicId": 2,
        "kind": "Nazariy",
        "difficulty": "Oson",
        "question": "[Nazariy • 2-Ma’ruza] Determinantning $a_{ij}$ elementiga mos «algebraik to‘ldiruvchi» ($A_{ij}$) deb nimaga aytiladi?",
        "options": [
          "$A_{ij} = (-1)^{i+j} M_{ij}$ formula bilan aniqlanuvchi miqdorga, ya’ni $(-1)^{i+j}$ ishora bilan olingan $M_{ij}$ minorga",
          "$A_{ij} = (-1)^{i \\cdot j} M_{ij}$ formula bilan aniqlanuvchi miqdorga",
          "$A_{ij} = \\Delta - M_{ij}$ ayirmaga",
          "$A_{ij} = a_{ij} \\cdot M_{ij}$ ko‘paytmaga"
        ],
        "answer": 0,
        "explanation": "2-ma’ruza (21-22-slaydlar): $A_{ij} = (-1)^{i+j} M_{ij}$."
      },
      {
        "id": "ON_V6_Q20",
        "variant": 6,
        "num": 20,
        "origNum": 25,
        "topicId": 7,
        "kind": "Amaliy",
        "difficulty": "Oson",
        "question": "$A$ va $B$ vektorlarning orasidagi burchakni toping: $$A = (1;\\; 0;\\; 1), \\qquad B = (0;\\; 1;\\; 1)$$",
        "options": [
          "$30^\\circ$ ($\\frac{\\pi}{6}$)",
          "$60^\\circ$ ($\\frac{\\pi}{3}$)",
          "$45^\\circ$ ($\\frac{\\pi}{4}$)",
          "$90^\\circ$ ($\\frac{\\pi}{2}$)"
        ],
        "answer": 1,
        "explanation": "$\\cos\\varphi = \\frac{(A, B)}{|A|\\cdot|B|} = \\frac{1\\cdot 0 + 0\\cdot 1 + 1\\cdot 1}{\\sqrt{2}\\cdot\\sqrt{2}} = \\frac{1}{2} \\implies \\varphi = 60^\\circ$ ($\\frac{\\pi}{3}$)."
      },
      {
        "id": "ON_V6_Q21",
        "variant": 6,
        "num": 21,
        "origNum": 23,
        "topicId": 8,
        "kind": "Nazariy",
        "difficulty": "Oson",
        "question": "[Nazariy • 8-Ma’ruza] Agar $B_1, B_2, \\dots, B_k$ ortogonal vektorlar sistemasi bo‘lsa, undan «ortonormallangan vektorlar sistemasi» qanday hosil qilinadi (28, 32-slaydlar)?",
        "options": [
          "Har bir vektordan $B_1$ ni ayirib chiqish orqali",
          "Vektorlarni transponirlash orqali",
          "Har bir vektorni o‘z uzunligiga bo‘lish (normallashtirish) orqali: $\\vec{c}_1 = \\frac{B_1}{|B_1|},\\; \\vec{c}_2 = \\frac{B_2}{|B_2|},\\; \\dots,\\; \\vec{c}_k = \\frac{B_k}{|B_k|}$",
          "Barcha vektorlarni o‘zaro qo‘shib chiqish orqali"
        ],
        "answer": 2,
        "explanation": "8-ma’ruza (28, 32-slaydlar): Har bir vektori normallangan (birlik vektor ko‘rinishga keltirilgan) ortogonal sistemaga ortonormallangan vektorlar sistemasi deyiladi."
      },
      {
        "id": "ON_V6_Q22",
        "variant": 6,
        "num": 22,
        "origNum": 22,
        "topicId": 7,
        "kind": "Amaliy",
        "difficulty": "Oson",
        "question": "Quyidagi vektorning uzunligini toping: $$A = (2;\\; -3;\\; 6)$$",
        "options": [
          "$7$",
          "$49$",
          "$11$",
          "$5$"
        ],
        "answer": 0,
        "explanation": "$|A| = \\sqrt{2^2 + (-3)^2 + 6^2} = \\sqrt{4 + 9 + 36} = \\sqrt{49} = 7$."
      },
      {
        "id": "ON_V6_Q23",
        "variant": 6,
        "num": 23,
        "origNum": 17,
        "topicId": 6,
        "kind": "Amaliy",
        "difficulty": "O'rta",
        "question": "Ushbu 3-tartibli tenglamalar sistemasini yeching: $$\\begin{cases} x + y + z = 6 \\\\ 2x - y + z = 3 \\\\ x + 2y - z = 2 \\end{cases}$$",
        "options": [
          "$(2;\\; 1;\\; 3)$",
          "$(1;\\; 2;\\; 3)$",
          "$(1;\\; 3;\\; 2)$",
          "$(3;\\; 2;\\; 1)$"
        ],
        "answer": 1,
        "explanation": "1- va 3-tenglamalarni qo‘shsak $2x + 3y = 8$; 1- va 2-tenglamalar ayirmasidan $-x + 2y = 3 \\implies x = 2y - 3$. O‘rniga qo‘yib $y = 2$, $x = 1$, $z = 3$ ni topamiz."
      },
      {
        "id": "ON_V6_Q24",
        "variant": 6,
        "num": 24,
        "origNum": 5,
        "topicId": 2,
        "kind": "Amaliy",
        "difficulty": "Oson",
        "question": "2-tartibli determinantni hisoblang: $$\\begin{vmatrix} 4 & -3 \\\\ 2 & 5 \\end{vmatrix}$$",
        "options": [
          "$20$",
          "$26$",
          "$14$",
          "$-26$"
        ],
        "answer": 1,
        "explanation": "$4 \\cdot 5 - (-3) \\cdot 2 = 20 - (-6) = 26$."
      },
      {
        "id": "ON_V6_Q25",
        "variant": 6,
        "num": 25,
        "origNum": 21,
        "topicId": 7,
        "kind": "Amaliy",
        "difficulty": "O'rta",
        "question": "$A$, $B$ va $C$ vektorlarning aralash ko‘paytmasini toping: $$A = (1;\\; 2;\\; -1), \\quad B = (3;\\; 0;\\; 2), \\quad C = (2;\\; -1;\\; 1)$$",
        "options": [
          "$-7$",
          "$7$",
          "$1$",
          "$5$"
        ],
        "answer": 1,
        "explanation": "$\\begin{vmatrix} 1 & 2 & -1 \\\\ 3 & 0 & 2 \\\\ 2 & -1 & 1 \\end{vmatrix} = 1(0+2) - 2(3-4) - 1(-3-0) = 2 + 2 + 3 = 7$."
      }
    ]
  },
  {
    "variant": 7,
    "title": "Oraliq Nazorat — 7-Variant",
    "subtitle": "17 ta amaliy misol (o‘zgarishsiz) + barcha 8 mavzudan 8 ta yangi nazariy savol (raqamlari o‘zgartirilgan)",
    "practicalCount": 17,
    "theoryCount": 8,
    "total": 25,
    "questions": [
      {
        "id": "ON_V7_Q1",
        "variant": 7,
        "num": 1,
        "origNum": 11,
        "topicId": 4,
        "kind": "Nazariy",
        "difficulty": "O'rta",
        "question": "[Nazariy • 4-Ma’ruza] Determinantning bosh diagonali elementlari ko‘paytmasi $a_{11} a_{22} \\dots a_{nn}$ determinantning to‘liq yoyilmasiga qanday ishora bilan kiradi?",
        "options": [
          "Har doim plyus ($+$) ishora bilan kiradi, chunki $(1, 2, \\dots, n)$ o‘rin almashtirishda inversiyalar yo‘q ($\\text{inv} = 0$, juft)",
          "Elementlarning ishorasiga qarab o‘zgaradi",
          "Har doim minus ($-$) ishora bilan kiradi",
          "$n$ juft bo‘lsa plyus, $n$ toq bo‘lsa minus ishora bilan kiradi"
        ],
        "answer": 0,
        "explanation": "Bosh diagonal elementlarining ustun indekslari $(1, 2, \\dots, n)$ tabiiy tartibda bo‘lgani uchun $\\text{inv}(1, 2, \\dots, n) = 0$ va $(-1)^0 = +1$."
      },
      {
        "id": "ON_V7_Q2",
        "variant": 7,
        "num": 2,
        "origNum": 15,
        "topicId": 5,
        "kind": "Amaliy",
        "difficulty": "Oson",
        "question": "Ushbu 2-tartibli tenglamalar sistemasini yeching: $$\\begin{cases} 2x + 3y = 7 \\\\ 3x - y = 5 \\end{cases}$$",
        "options": [
          "$(2;\\; 1)$",
          "$(1;\\; 2)$",
          "$(-2;\\; 1)$",
          "$(2;\\; -1)$"
        ],
        "answer": 0,
        "explanation": "Kramer usuli bilan: $\\Delta = -2 - 9 = -11$, $\\Delta_x = -7 - 15 = -22 \\implies x = 2$, $\\Delta_y = 10 - 21 = -11 \\implies y = 1$. Javob: $(2;\\; 1)$."
      },
      {
        "id": "ON_V7_Q3",
        "variant": 7,
        "num": 3,
        "origNum": 5,
        "topicId": 2,
        "kind": "Amaliy",
        "difficulty": "Oson",
        "question": "2-tartibli determinantni hisoblang: $$\\begin{vmatrix} 4 & -3 \\\\ 2 & 5 \\end{vmatrix}$$",
        "options": [
          "$14$",
          "$-26$",
          "$26$",
          "$20$"
        ],
        "answer": 2,
        "explanation": "$4 \\cdot 5 - (-3) \\cdot 2 = 20 - (-6) = 26$."
      },
      {
        "id": "ON_V7_Q4",
        "variant": 7,
        "num": 4,
        "origNum": 7,
        "topicId": 1,
        "kind": "Nazariy",
        "difficulty": "Oson",
        "question": "[Nazariy • 1-Ma’ruza] Ikki matritsani ko‘paytirish ($A \\cdot B$) ta’rifi va mavjudlik sharti qanday?",
        "options": [
          "Ikki matritsa faqat bir xil o‘lchamli bo‘lganda ko‘paytiriladi va mos elementlari o‘zaro ko‘paytiriladi ($c_{ij} = a_{ij}b_{ij}$)",
          "Ixtiyoriy o‘lchamli ikki matritsani har doim ko‘paytirish mumkin",
          "Birinchi matritsaning satrlari soni ikkinchi matritsaning satrlari soniga teng bo‘lishi kerak",
          "Birinchi matritsaning ustunlari soni ikkinchi matritsaning satrlari soniga teng bo‘lishi kerak; satr elementlari mos ustun elementlariga ko‘paytirilib qo‘shiladi"
        ],
        "answer": 3,
        "explanation": "1-ma’ruza (18-19-slaydlar): Matritsalarni ko‘paytirish uchun birinchi matritsaning ustunlari soni ikkinchi matritsaning satrlari soniga teng bo‘lishi kerak. Satrlar ustunlarga ko‘paytiriladi."
      },
      {
        "id": "ON_V7_Q5",
        "variant": 7,
        "num": 5,
        "origNum": 8,
        "topicId": 2,
        "kind": "Amaliy",
        "difficulty": "O'rta",
        "question": "3-tartibli determinantni hisoblang: $$\\begin{vmatrix} 1 & 2 & -1 \\\\ 3 & 1 & 2 \\\\ 2 & -1 & 3 \\end{vmatrix}$$",
        "options": [
          "$-10$",
          "$10$",
          "$15$",
          "$0$"
        ],
        "answer": 3,
        "explanation": "$1(1\\cdot 3 - 2(-1)) - 2(3\\cdot 3 - 2\\cdot 2) + (-1)(3(-1) - 1\\cdot 2) = 1(5) - 2(5) - 1(-5) = 5 - 10 + 5 = 0$ (shuningdek 3-satr = 2-satr $-$ 1-satr)."
      },
      {
        "id": "ON_V7_Q6",
        "variant": 7,
        "num": 6,
        "origNum": 10,
        "topicId": 2,
        "kind": "Nazariy",
        "difficulty": "O'rta",
        "question": "[Nazariy • 2-Ma’ruza] Agar determinantning biror satri elementlari ikki qo‘shiluvchining yig‘indisidan ($a_{i1}+b_{i1},\\; a_{i2}+b_{i2},\\; \\dots,\\; a_{in}+b_{in}$) iborat bo‘lsa, determinant qanday xossaga ega?",
        "options": [
          "Ikkita determinantning ko‘paytmasiga teng",
          "Bunday determinant mos ravishda $i$-satrida $a_{ij}$ va $b_{ij}$ elementlar turgan, qolgan satrlari esa o‘zgarmagan ikkita determinantning yig‘indisiga teng",
          "Qiymati nolga teng bo‘ladi",
          "Barcha satrlari qo‘shilgan ikkita matritsa determinantlari yig‘indisiga ($\\det(A+B) = \\det A + \\det B$) teng"
        ],
        "answer": 1,
        "explanation": "Determinant chiziqlilik xossasiga ko‘ra bitta satr (yoki ustun) bo‘yicha ikkita determinant yig‘indisiga ajraladi (ammo umuman $\\det(A+B) \\ne \\det A + \\det B$)."
      },
      {
        "id": "ON_V7_Q7",
        "variant": 7,
        "num": 7,
        "origNum": 3,
        "topicId": 1,
        "kind": "Amaliy",
        "difficulty": "O'rta",
        "question": "$A$ va $B$ matritsalarning ko‘paytmasi uchun 3-qator elementlarini toping: $$A = \\begin{bmatrix} 1 & 2 & -1 \\\\ 3 & 0 & 2 \\\\ 2 & -1 & 3 \\end{bmatrix}, \\qquad B = \\begin{bmatrix} 2 & 1 & 0 \\\\ -1 & 3 & 2 \\\\ 1 & -2 & 4 \\end{bmatrix}$$",
        "options": [
          "$(8;\\; -7;\\; 10)$",
          "$(6;\\; -7;\\; 12)$",
          "$(8;\\; 7;\\; 10)$",
          "$(2;\\; 2;\\; 12)$"
        ],
        "answer": 0,
        "explanation": "$A$ ning 3-qatori $(2, -1, 3)$ ni $B$ ning ustunlariga ko‘paytiramiz: $c_{31} = 2\\cdot 2 + (-1)(-1) + 3\\cdot 1 = 8$; $c_{32} = 2\\cdot 1 + (-1)\\cdot 3 + 3(-2) = -7$; $c_{33} = 2\\cdot 0 + (-1)\\cdot 2 + 3\\cdot 4 = 10$."
      },
      {
        "id": "ON_V7_Q8",
        "variant": 7,
        "num": 8,
        "origNum": 17,
        "topicId": 6,
        "kind": "Amaliy",
        "difficulty": "O'rta",
        "question": "Ushbu 3-tartibli tenglamalar sistemasini yeching: $$\\begin{cases} x + y + z = 6 \\\\ 2x - y + z = 3 \\\\ x + 2y - z = 2 \\end{cases}$$",
        "options": [
          "$(1;\\; 3;\\; 2)$",
          "$(2;\\; 1;\\; 3)$",
          "$(1;\\; 2;\\; 3)$",
          "$(3;\\; 2;\\; 1)$"
        ],
        "answer": 2,
        "explanation": "1- va 3-tenglamalarni qo‘shsak $2x + 3y = 8$; 1- va 2-tenglamalar ayirmasidan $-x + 2y = 3 \\implies x = 2y - 3$. O‘rniga qo‘yib $y = 2$, $x = 1$, $z = 3$ ni topamiz."
      },
      {
        "id": "ON_V7_Q9",
        "variant": 7,
        "num": 9,
        "origNum": 2,
        "topicId": 1,
        "kind": "Amaliy",
        "difficulty": "Oson",
        "question": "$A$ va $B$ matritsalarning ayirmasi uchun bosh diagonal elementlarining yig‘indisini toping: $$A = \\begin{bmatrix} 5 & -2 & 1 \\\\ 3 & 4 & -1 \\\\ 0 & 2 & 6 \\end{bmatrix}, \\qquad B = \\begin{bmatrix} 2 & 1 & -3 \\\\ -1 & 2 & 4 \\\\ 3 & 0 & 2 \\end{bmatrix}$$",
        "options": [
          "$7$",
          "$9$",
          "$24$",
          "$15$"
        ],
        "answer": 1,
        "explanation": "$A - B$ matritsaning bosh diagonal elementlari: $(5-2)=3$, $(4-2)=2$, $(6-2)=4$. Ularning yig‘indisi: $3 + 2 + 4 = 9$."
      },
      {
        "id": "ON_V7_Q10",
        "variant": 7,
        "num": 10,
        "origNum": 18,
        "topicId": 7,
        "kind": "Nazariy",
        "difficulty": "Oson",
        "question": "[Nazariy • 7-Ma’ruza] $L$ chiziqli fazoning $V$ qism to‘plami qachon $L$ fazoning «chiziqli qism fazosi» deyiladi (28-slayd)?",
        "options": [
          "$V$ qism to‘plamda nol vektor qatnashmasa",
          "$V$ qism to‘plam ham $L$ da aniqlangan elementlarni qo‘shish ($x+y \\in V$) va songa ko‘paytirish ($\\lambda x \\in V$) amallariga nisbatan chiziqli fazo tashkil qilsa",
          "$V$ qism to‘plam faqat bitta nolmas elementdan iborat bo‘lsa",
          "$V$ qism to‘plam chiziqli amallarga nisbatan yopiq bo‘lmasa"
        ],
        "answer": 1,
        "explanation": "7-ma’ruza (28-slayd): $L$ chiziqli fazoning $V$ qism to‘plami ham $L$ da aniqlangan qo‘shish va songa ko‘paytirish amallariga nisbatan chiziqli fazo tashkil qilsa, $V$ ga chiziqli qism fazo deyiladi."
      },
      {
        "id": "ON_V7_Q11",
        "variant": 7,
        "num": 11,
        "origNum": 13,
        "topicId": 3,
        "kind": "Amaliy",
        "difficulty": "O'rta",
        "question": "$A$ matritsa uchun teskari matritsaning 1-qator va 1-ustunda joylashgan elementini hisoblang: $$A = \\begin{bmatrix} 2 & 1 & 1 \\\\ 1 & 2 & 1 \\\\ 1 & 1 & 2 \\end{bmatrix}$$",
        "options": [
          "$-\\frac{1}{4}$",
          "$\\frac{1}{4}$",
          "$\\frac{3}{4}$",
          "$\\frac{1}{2}$"
        ],
        "answer": 2,
        "explanation": "$\\det(A) = 2(4-1) - 1(2-1) + 1(1-2) = 6 - 1 - 1 = 4$. $A_{11} = (-1)^{1+1}\\begin{vmatrix} 2 & 1 \\\\ 1 & 2 \\end{vmatrix} = 3$. Demak $(A^{-1})_{11} = \\frac{A_{11}}{\\det A} = \\frac{3}{4}$."
      },
      {
        "id": "ON_V7_Q12",
        "variant": 7,
        "num": 12,
        "origNum": 22,
        "topicId": 7,
        "kind": "Amaliy",
        "difficulty": "Oson",
        "question": "Quyidagi vektorning uzunligini toping: $$A = (2;\\; -3;\\; 6)$$",
        "options": [
          "$5$",
          "$7$",
          "$11$",
          "$49$"
        ],
        "answer": 1,
        "explanation": "$|A| = \\sqrt{2^2 + (-3)^2 + 6^2} = \\sqrt{4 + 9 + 36} = \\sqrt{49} = 7$."
      },
      {
        "id": "ON_V7_Q13",
        "variant": 7,
        "num": 13,
        "origNum": 14,
        "topicId": 5,
        "kind": "Nazariy",
        "difficulty": "Oson",
        "question": "[Nazariy • 5-Ma’ruza] $A \\cdot X \\cdot B = C$ ko‘rinishdagi matritsaviy tenglamaning yechimi qaysi formula bilan aniqlanadi ($\\det A \\ne 0,\\; \\det B \\ne 0$, 29-slayd)?",
        "options": [
          "$X = C A^{-1} B^{-1}$",
          "$X = A^{-1} B^{-1} C$",
          "$X = A^{-1} C B^{-1}$",
          "$X = B^{-1} C A^{-1}$"
        ],
        "answer": 2,
        "explanation": "5-ma’ruza (29-slayd): $A \\cdot X \\cdot B = C$ tenglamaning ikkala tomonini chapdan $A^{-1}$ ga va o‘ngdan $B^{-1}$ ga ko‘paytirib, $X = A^{-1} C B^{-1}$ hosil qilinadi."
      },
      {
        "id": "ON_V7_Q14",
        "variant": 7,
        "num": 14,
        "origNum": 24,
        "topicId": 8,
        "kind": "Amaliy",
        "difficulty": "Oson",
        "question": "$A$ vektorga ortogonal bo‘lgan vektorni toping: $$A = (2;\\; -5;\\; 1)$$",
        "options": [
          "$(1;\\; 1;\\; 1)$",
          "$(3;\\; 1;\\; 2)$",
          "$(2;\\; -1;\\; 1)$",
          "$(2;\\; 1;\\; 1)$"
        ],
        "answer": 3,
        "explanation": "Ortogonallik sharti $(A, B) = 0$. Tekshiramiz: $2\\cdot 2 + (-5)\\cdot 1 + 1\\cdot 1 = 4 - 5 + 1 = 0$. Qolgan variantlarda skalyar ko‘paytma noldan farqli."
      },
      {
        "id": "ON_V7_Q15",
        "variant": 7,
        "num": 15,
        "origNum": 4,
        "topicId": 7,
        "kind": "Amaliy",
        "difficulty": "Oson",
        "question": "$A$ vektor uchun $-3A$ vektorning qiymatini toping: $$A = (2;\\; -3;\\; 5)$$",
        "options": [
          "$(-1;\\; -6;\\; 2)$",
          "$(-6;\\; -9;\\; -15)$",
          "$(6;\\; -9;\\; 15)$",
          "$(-6;\\; 9;\\; -15)$"
        ],
        "answer": 3,
        "explanation": "Vektorni $-3$ songa ko‘paytirishda har bir komponent $-3$ ga ko‘paytiriladi: $(-3\\cdot 2;\\; -3\\cdot(-3);\\; -3\\cdot 5) = (-6;\\; 9;\\; -15)$."
      },
      {
        "id": "ON_V7_Q16",
        "variant": 7,
        "num": 16,
        "origNum": 12,
        "topicId": 3,
        "kind": "Nazariy",
        "difficulty": "Oson",
        "question": "[Nazariy • 3-Ma’ruza] Elementar almashtirishlar yordamida matritsa pog‘onali (trapetsiya) ko‘rinishga keltirildi va unda $\\tilde{a}_{11} \\ne 0, \\tilde{a}_{22} \\ne 0, \\dots, \\tilde{a}_{pp} \\ne 0$ ($p$ ta noldan farqli satr) hosil bo‘ldi (19-slayd). Matritsaning rangi nimaga teng?",
        "options": [
          "$r(A) = \\tilde{a}_{11} \\cdot \\tilde{a}_{22} \\cdot \\dots \\cdot \\tilde{a}_{pp}$",
          "$r(A) = n - p$",
          "$r(A) = p$ (noldan farqli pog‘onali satrlar soniga teng)",
          "$r(A) = p + 1$"
        ],
        "answer": 2,
        "explanation": "3-ma’ruza (19-slayd): Pog‘onali matritsada $\\tilde{a}_{11} \\ne 0, \\dots, \\tilde{a}_{pp} \\ne 0$ bo‘lsa, $r(A) = p$."
      },
      {
        "id": "ON_V7_Q17",
        "variant": 7,
        "num": 17,
        "origNum": 23,
        "topicId": 8,
        "kind": "Nazariy",
        "difficulty": "O'rta",
        "question": "[Nazariy • 8-Ma’ruza] Vektorni musbat $\\lambda > 0$ skalyar songa ko‘paytirish (masalan normallashtirishda $\\frac{1}{|B_i|}$ ga ko‘paytirish) uning boshqa vektorlarga ortogonallik xossasini buzmasligi qaysi skalyar ko‘paytma xossasiga asoslanadi?",
        "options": [
          "Uchburchak tengsizligiga asoslanadi",
          "Determinantning transponirlash xossasiga asoslanadi",
          "Sarrius qoidasiga asoslanadi",
          "$(\\lambda X, Y) = \\lambda (X, Y)$ chiziqlilik xossasiga: agar $(X, Y) = 0$ bo‘lsa, u holda $(\\frac{1}{|X|}X, \\frac{1}{|Y|}Y) = \\frac{1}{|X||Y|}(X, Y) = 0$ bo‘lib qolaveradi"
        ],
        "answer": 3,
        "explanation": "Skalyar ko‘paytmaning 5-xossasiga ko‘ra skalyar ko‘paytuvchilar qavsdan tashqariga chiqadi va $0$ ga ko‘payib yana $0$ beradi."
      },
      {
        "id": "ON_V7_Q18",
        "variant": 7,
        "num": 18,
        "origNum": 25,
        "topicId": 7,
        "kind": "Amaliy",
        "difficulty": "Oson",
        "question": "$A$ va $B$ vektorlarning orasidagi burchakni toping: $$A = (1;\\; 0;\\; 1), \\qquad B = (0;\\; 1;\\; 1)$$",
        "options": [
          "$45^\\circ$ ($\\frac{\\pi}{4}$)",
          "$30^\\circ$ ($\\frac{\\pi}{6}$)",
          "$60^\\circ$ ($\\frac{\\pi}{3}$)",
          "$90^\\circ$ ($\\frac{\\pi}{2}$)"
        ],
        "answer": 2,
        "explanation": "$\\cos\\varphi = \\frac{(A, B)}{|A|\\cdot|B|} = \\frac{1\\cdot 0 + 0\\cdot 1 + 1\\cdot 1}{\\sqrt{2}\\cdot\\sqrt{2}} = \\frac{1}{2} \\implies \\varphi = 60^\\circ$ ($\\frac{\\pi}{3}$)."
      },
      {
        "id": "ON_V7_Q19",
        "variant": 7,
        "num": 19,
        "origNum": 19,
        "topicId": 7,
        "kind": "Amaliy",
        "difficulty": "Oson",
        "question": "$A$ va $B$ vektorlarning skalyar ko‘paytmasini toping: $$A = (2;\\; -3;\\; 4), \\qquad B = (1;\\; 5;\\; 2)$$",
        "options": [
          "$-5$",
          "$5$",
          "$-15$",
          "$25$"
        ],
        "answer": 0,
        "explanation": "$(A, B) = 2 \\cdot 1 + (-3) \\cdot 5 + 4 \\cdot 2 = 2 - 15 + 8 = -5$."
      },
      {
        "id": "ON_V7_Q20",
        "variant": 7,
        "num": 20,
        "origNum": 6,
        "topicId": 2,
        "kind": "Amaliy",
        "difficulty": "Oson",
        "question": "2-tartibli determinantni hisoblang: $$\\begin{vmatrix} -3 & 6 \\\\ 4 & -5 \\end{vmatrix}$$",
        "options": [
          "$39$",
          "$-9$",
          "$-39$",
          "$9$"
        ],
        "answer": 1,
        "explanation": "$(-3) \\cdot (-5) - 6 \\cdot 4 = 15 - 24 = -9$."
      },
      {
        "id": "ON_V7_Q21",
        "variant": 7,
        "num": 21,
        "origNum": 1,
        "topicId": 1,
        "kind": "Amaliy",
        "difficulty": "Oson",
        "question": "$A$ va $B$ matritsalarning yig‘indisi uchun bosh diagonal elementlarining ko‘paytmasini toping: $$A = \\begin{bmatrix} 2 & 1 & -1 \\\\ 0 & 3 & 2 \\\\ 4 & -2 & 5 \\end{bmatrix}, \\qquad B = \\begin{bmatrix} 1 & -1 & 3 \\\\ 2 & 1 & -2 \\\\ -3 & 2 & 1 \\end{bmatrix}$$",
        "options": [
          "$48$",
          "$13$",
          "$72$",
          "$60$"
        ],
        "answer": 2,
        "explanation": "$A + B$ matritsaning bosh diagonal elementlari: $(2+1)=3$, $(3+1)=4$, $(5+1)=6$. Ularning ko‘paytmasi: $3 \\cdot 4 \\cdot 6 = 72$."
      },
      {
        "id": "ON_V7_Q22",
        "variant": 7,
        "num": 22,
        "origNum": 16,
        "topicId": 6,
        "kind": "Nazariy",
        "difficulty": "O'rta",
        "question": "[Nazariy • 6-Ma’ruza] Kramer qoidasi va Teskari matritsa usuliga nisbatan Gauss hamda Gauss-Jordan usullarining eng katta nazariy va amaliy ustunligi nimada?",
        "options": [
          "Kramer usuli Gauss usuliga qaraganda katta $n$ larda kamroq amal talab qiladi",
          "Gauss usuli faqat 2-tartibli sistemalarga qo‘llaniladi",
          "Gauss usulida hech qachon kasr sonlar hosil bo‘lmaydi",
          "Gauss va Gauss-Jordan usullari tenglamalar soni $m$ va noma’lumlar soni $n$ ixtiyoriy bo‘lgan hamda asosiy determinanti nolga teng bo‘lgan sistemalarga ham to‘liq qo‘llaniladi"
        ],
        "answer": 3,
        "explanation": "Kramer va $X=A^{-1}B$ usullari faqat $m=n$ va $\\det(A) \\ne 0$ bo‘lganda ishlaydi; Gauss usuli esa ixtiyoriy $m \\times n$ sistemaning birgalikdaligini ham tekshiradi, umumiy yechimini ham topadi."
      },
      {
        "id": "ON_V7_Q23",
        "variant": 7,
        "num": 23,
        "origNum": 9,
        "topicId": 2,
        "kind": "Amaliy",
        "difficulty": "O'rta",
        "question": "3-tartibli determinantni hisoblang: $$\\begin{vmatrix} 2 & 0 & 1 \\\\ -1 & 3 & 2 \\\\ 4 & 1 & -1 \\end{vmatrix}$$",
        "options": [
          "$-13$",
          "$3$",
          "$-23$",
          "$23$"
        ],
        "answer": 2,
        "explanation": "1-satr bo‘yicha yoyamiz: $2(3(-1) - 2\\cdot 1) - 0 + 1((-1)\\cdot 1 - 3\\cdot 4) = 2(-5) + 1(-13) = -10 - 13 = -23$."
      },
      {
        "id": "ON_V7_Q24",
        "variant": 7,
        "num": 24,
        "origNum": 21,
        "topicId": 7,
        "kind": "Amaliy",
        "difficulty": "O'rta",
        "question": "$A$, $B$ va $C$ vektorlarning aralash ko‘paytmasini toping: $$A = (1;\\; 2;\\; -1), \\quad B = (3;\\; 0;\\; 2), \\quad C = (2;\\; -1;\\; 1)$$",
        "options": [
          "$-7$",
          "$1$",
          "$7$",
          "$5$"
        ],
        "answer": 2,
        "explanation": "$\\begin{vmatrix} 1 & 2 & -1 \\\\ 3 & 0 & 2 \\\\ 2 & -1 & 1 \\end{vmatrix} = 1(0+2) - 2(3-4) - 1(-3-0) = 2 + 2 + 3 = 7$."
      },
      {
        "id": "ON_V7_Q25",
        "variant": 7,
        "num": 25,
        "origNum": 20,
        "topicId": 7,
        "kind": "Amaliy",
        "difficulty": "O'rta",
        "question": "$A$ va $B$ vektorlarning vektor ko‘paytmasini toping: $$A = (1;\\; -2;\\; 3), \\qquad B = (2;\\; 1;\\; -1)$$",
        "options": [
          "$(5;\\; 7;\\; -1)$",
          "$(-1;\\; -7;\\; 5)$",
          "$(1;\\; -7;\\; -5)$",
          "$(-1;\\; 7;\\; 5)$"
        ],
        "answer": 3,
        "explanation": "$[A \\times B] = \\begin{vmatrix} \\vec{i} & \\vec{j} & \\vec{k} \\\\ 1 & -2 & 3 \\\\ 2 & 1 & -1 \\end{vmatrix} = \\vec{i}(2-3) - \\vec{j}(-1-6) + \\vec{k}(1+4) = (-1;\\; 7;\\; 5)$."
      }
    ]
  },
  {
    "variant": 8,
    "title": "Oraliq Nazorat — 8-Variant",
    "subtitle": "17 ta amaliy misol (o‘zgarishsiz) + barcha 8 mavzudan 8 ta yangi nazariy savol (raqamlari o‘zgartirilgan)",
    "practicalCount": 17,
    "theoryCount": 8,
    "total": 25,
    "questions": [
      {
        "id": "ON_V8_Q1",
        "variant": 8,
        "num": 1,
        "origNum": 19,
        "topicId": 7,
        "kind": "Amaliy",
        "difficulty": "Oson",
        "question": "$A$ va $B$ vektorlarning skalyar ko‘paytmasini toping: $$A = (2;\\; -3;\\; 4), \\qquad B = (1;\\; 5;\\; 2)$$",
        "options": [
          "$25$",
          "$-5$",
          "$5$",
          "$-15$"
        ],
        "answer": 1,
        "explanation": "$(A, B) = 2 \\cdot 1 + (-3) \\cdot 5 + 4 \\cdot 2 = 2 - 15 + 8 = -5$."
      },
      {
        "id": "ON_V8_Q2",
        "variant": 8,
        "num": 2,
        "origNum": 7,
        "topicId": 1,
        "kind": "Nazariy",
        "difficulty": "O'rta",
        "question": "[Nazariy • 1-Ma’ruza] Matritsalarni ko‘paytirish amalining 5 ta asosiy xossasi (21-slayd) qaysi javobda to‘liq va to‘g‘ri berilgan?",
        "options": [
          "$1^\\circ.\\;(kA)B = k(AB) = A(kB);\\quad 2^\\circ.\\;(A+B)C = AC+BC;\\quad 3^\\circ.\\;A(B+C) = AB+AC;\\quad 4^\\circ.\\;A(BC) = (AB)C;\\quad 5^\\circ.\\;AE = EA = A$",
          "$1^\\circ.\\;(kA)B = k^2 AB;\\quad 2^\\circ.\\;(A+B)C = A + BC;\\quad 3^\\circ.\\;AE = O$",
          "$1^\\circ.\\;A(BC) \\ne (AB)C;\\quad 2^\\circ.\\;AE \\ne EA$",
          "$1^\\circ.\\;AB = BA;\\quad 2^\\circ.\\;(AB)^2 = A^2 B^2;\\quad 3^\\circ.\\;AE = E;\\quad 4^\\circ.\\;A+E = A$"
        ],
        "answer": 0,
        "explanation": "1-ma’ruza (21-slayd): Ko‘paytirish amali skalyar ko‘paytuvchini chiqarish, chap va o‘ng taqsimot, guruhlash ($A(BC)=(AB)C$) hamda birlik matritsa ($AE=EA=A$) xossalariga ega."
      },
      {
        "id": "ON_V8_Q3",
        "variant": 8,
        "num": 3,
        "origNum": 5,
        "topicId": 2,
        "kind": "Amaliy",
        "difficulty": "Oson",
        "question": "2-tartibli determinantni hisoblang: $$\\begin{vmatrix} 4 & -3 \\\\ 2 & 5 \\end{vmatrix}$$",
        "options": [
          "$20$",
          "$-26$",
          "$14$",
          "$26$"
        ],
        "answer": 3,
        "explanation": "$4 \\cdot 5 - (-3) \\cdot 2 = 20 - (-6) = 26$."
      },
      {
        "id": "ON_V8_Q4",
        "variant": 8,
        "num": 4,
        "origNum": 14,
        "topicId": 5,
        "kind": "Nazariy",
        "difficulty": "Oson",
        "question": "[Nazariy • 5-Ma’ruza] Kramer usulida asosiy determinant $\\Delta = 0$ bo‘lib, barcha $\\Delta_{x_1} = 0, \\Delta_{x_2} = 0, \\dots, \\Delta_{x_n} = 0$ bo‘lsa (va $r(A)=r(A|B)$ bo‘lsa), tenglamalar sistemasi qanday yechimga ega bo‘ladi (32-33-slaydlar)?",
        "options": [
          "Yagona yechimga ega bo‘ladi",
          "Har doim ikkita yechimga ega bo‘ladi",
          "Faqat nol yechimga ega bo‘ladi",
          "Cheksiz ko‘p yechimga ega bo‘ladi"
        ],
        "answer": 3,
        "explanation": "5-ma’ruza (32-33-slaydlar): Agar $\\Delta = 0$ bo‘lib, a) $\\Delta_{x_1} = 0, \\dots, \\Delta_{x_n} = 0$ bo‘lsa (birgalikda bo‘lganda), sistema cheksiz ko‘p yechimga ega bo‘ladi."
      },
      {
        "id": "ON_V8_Q5",
        "variant": 8,
        "num": 5,
        "origNum": 9,
        "topicId": 2,
        "kind": "Amaliy",
        "difficulty": "O'rta",
        "question": "3-tartibli determinantni hisoblang: $$\\begin{vmatrix} 2 & 0 & 1 \\\\ -1 & 3 & 2 \\\\ 4 & 1 & -1 \\end{vmatrix}$$",
        "options": [
          "$-13$",
          "$23$",
          "$3$",
          "$-23$"
        ],
        "answer": 3,
        "explanation": "1-satr bo‘yicha yoyamiz: $2(3(-1) - 2\\cdot 1) - 0 + 1((-1)\\cdot 1 - 3\\cdot 4) = 2(-5) + 1(-13) = -10 - 13 = -23$."
      },
      {
        "id": "ON_V8_Q6",
        "variant": 8,
        "num": 6,
        "origNum": 10,
        "topicId": 2,
        "kind": "Nazariy",
        "difficulty": "O'rta",
        "question": "[Nazariy • 2-Ma’ruza] Agar determinantning biror satri qolgan satrlarining chiziqli kombinatsiyasidan iborat bo‘lsa, determinantning qiymati nimaga teng bo‘ladi?",
        "options": [
          "Chiziqli kombinatsiya koeffitsiyentlari ko‘paytmasiga teng bo‘ladi",
          "Birga teng bo‘ladi",
          "Nolga teng bo‘ladi ($\\Delta = 0$)",
          "Chiziqli kombinatsiya koeffitsiyentlari yig‘indisiga teng bo‘ladi"
        ],
        "answer": 2,
        "explanation": "7-xossaga ko‘ra qolgan satrlarni mos koeffitsiyentlar bilan ayirib tashlasak, ushbu satr to‘liq nol satrga aylanadi va 1-xossaga ko‘ra $\\Delta = 0$ bo‘ladi."
      },
      {
        "id": "ON_V8_Q7",
        "variant": 8,
        "num": 7,
        "origNum": 20,
        "topicId": 7,
        "kind": "Amaliy",
        "difficulty": "O'rta",
        "question": "$A$ va $B$ vektorlarning vektor ko‘paytmasini toping: $$A = (1;\\; -2;\\; 3), \\qquad B = (2;\\; 1;\\; -1)$$",
        "options": [
          "$(-1;\\; 7;\\; 5)$",
          "$(1;\\; -7;\\; -5)$",
          "$(-1;\\; -7;\\; 5)$",
          "$(5;\\; 7;\\; -1)$"
        ],
        "answer": 0,
        "explanation": "$[A \\times B] = \\begin{vmatrix} \\vec{i} & \\vec{j} & \\vec{k} \\\\ 1 & -2 & 3 \\\\ 2 & 1 & -1 \\end{vmatrix} = \\vec{i}(2-3) - \\vec{j}(-1-6) + \\vec{k}(1+4) = (-1;\\; 7;\\; 5)$."
      },
      {
        "id": "ON_V8_Q8",
        "variant": 8,
        "num": 8,
        "origNum": 13,
        "topicId": 3,
        "kind": "Amaliy",
        "difficulty": "O'rta",
        "question": "$A$ matritsa uchun teskari matritsaning 1-qator va 1-ustunda joylashgan elementini hisoblang: $$A = \\begin{bmatrix} 2 & 1 & 1 \\\\ 1 & 2 & 1 \\\\ 1 & 1 & 2 \\end{bmatrix}$$",
        "options": [
          "$\\frac{1}{4}$",
          "$\\frac{1}{2}$",
          "$-\\frac{1}{4}$",
          "$\\frac{3}{4}$"
        ],
        "answer": 3,
        "explanation": "$\\det(A) = 2(4-1) - 1(2-1) + 1(1-2) = 6 - 1 - 1 = 4$. $A_{11} = (-1)^{1+1}\\begin{vmatrix} 2 & 1 \\\\ 1 & 2 \\end{vmatrix} = 3$. Demak $(A^{-1})_{11} = \\frac{A_{11}}{\\det A} = \\frac{3}{4}$."
      },
      {
        "id": "ON_V8_Q9",
        "variant": 8,
        "num": 9,
        "origNum": 16,
        "topicId": 6,
        "kind": "Nazariy",
        "difficulty": "Oson",
        "question": "[Nazariy • 6-Ma’ruza] Agar $n$ ta noma’lumli chiziqli tenglamalar sistemasida $r(A) = r(A \\mid B) = r < n$ bo‘lsa, har bir bazis yechimda nechta o‘zgaruvchi majburiy ravishda $0$ ga tenglashtiriladi?",
        "options": [
          "$n - r$ ta erkli o‘zgaruvchi majburiy ravishda $0$ ga tenglashtiriladi",
          "Barcha $n$ ta o‘zgaruvchi $0$ ga tenglashtiriladi",
          "Faqat $1$ ta o‘zgaruvchi $0$ ga tenglashtiriladi",
          "$r$ ta bazis o‘zgaruvchi $0$ ga tenglashtiriladi"
        ],
        "answer": 0,
        "explanation": "6-ma’ruza (14-15-slaydlar): Erkli o‘zgaruvchilar soni $n - r$ ta bo‘lib, bazis yechimda ularning barchasi nolga teng deb olinadi."
      },
      {
        "id": "ON_V8_Q10",
        "variant": 8,
        "num": 10,
        "origNum": 23,
        "topicId": 8,
        "kind": "Nazariy",
        "difficulty": "O'rta",
        "question": "[Nazariy • 8-Ma’ruza] Agar $E^n$ Evklid fazosida aynan $n$ ta noldan farqli va juft-juft ortogonal $B_1, B_2, \\dots, B_n$ vektorlar berilgan bo‘lsa, ular $E^n$ fazoda bazis tashkil qiladimi?",
        "options": [
          "Ha, albatta ortogonal bazis tashkil qiladi (chunki $n$ o‘lchovli fazodagi har qanday $n$ ta chiziqli erkli vektor bazis bo‘ladi)",
          "Faqat $n = 3$ da bazis tashkil qiladi",
          "Yo‘q, ularga yana bitta vektor qo‘shish kerak",
          "Yo‘q, faqat uzunliklari $1$ ga teng bo‘lsagina bazis bo‘la oladi"
        ],
        "answer": 0,
        "explanation": "Nolmas ortogonal vektorlar chiziqli erkli (8-ma’ruza, 23-slayd), $n$ o‘lchovli fazodagi $n$ ta chiziqli erkli vektor esa ta’rifga ko‘ra (7-ma’ruza, 27-slayd) fazoning bazisini tashkil qiladi."
      },
      {
        "id": "ON_V8_Q11",
        "variant": 8,
        "num": 11,
        "origNum": 3,
        "topicId": 1,
        "kind": "Amaliy",
        "difficulty": "O'rta",
        "question": "$A$ va $B$ matritsalarning ko‘paytmasi uchun 3-qator elementlarini toping: $$A = \\begin{bmatrix} 1 & 2 & -1 \\\\ 3 & 0 & 2 \\\\ 2 & -1 & 3 \\end{bmatrix}, \\qquad B = \\begin{bmatrix} 2 & 1 & 0 \\\\ -1 & 3 & 2 \\\\ 1 & -2 & 4 \\end{bmatrix}$$",
        "options": [
          "$(8;\\; 7;\\; 10)$",
          "$(8;\\; -7;\\; 10)$",
          "$(6;\\; -7;\\; 12)$",
          "$(2;\\; 2;\\; 12)$"
        ],
        "answer": 1,
        "explanation": "$A$ ning 3-qatori $(2, -1, 3)$ ni $B$ ning ustunlariga ko‘paytiramiz: $c_{31} = 2\\cdot 2 + (-1)(-1) + 3\\cdot 1 = 8$; $c_{32} = 2\\cdot 1 + (-1)\\cdot 3 + 3(-2) = -7$; $c_{33} = 2\\cdot 0 + (-1)\\cdot 2 + 3\\cdot 4 = 10$."
      },
      {
        "id": "ON_V8_Q12",
        "variant": 8,
        "num": 12,
        "origNum": 6,
        "topicId": 2,
        "kind": "Amaliy",
        "difficulty": "Oson",
        "question": "2-tartibli determinantni hisoblang: $$\\begin{vmatrix} -3 & 6 \\\\ 4 & -5 \\end{vmatrix}$$",
        "options": [
          "$39$",
          "$-39$",
          "$-9$",
          "$9$"
        ],
        "answer": 2,
        "explanation": "$(-3) \\cdot (-5) - 6 \\cdot 4 = 15 - 24 = -9$."
      },
      {
        "id": "ON_V8_Q13",
        "variant": 8,
        "num": 13,
        "origNum": 11,
        "topicId": 4,
        "kind": "Nazariy",
        "difficulty": "O'rta",
        "question": "[Nazariy • 4-Ma’ruza] Yuqori tartibli determinantni uchburchak shakliga keltirayotganda $i$-satrni o‘zidan yuqoridagi $k$-satr yordamida nolga aylantirish uchun qanday elementar amal bajariladi?",
        "options": [
          "$i$-satr nol songa ko‘paytiriladi",
          "$k$-satr elementlari $-\\frac{a_{ik}}{a_{kk}}$ songa ko‘paytirilib, $i$-satrning mos elementlariga qo‘shiladi ($a_{kk} \\ne 0$)",
          "$i$-satr va $k$-satr mos elementlari bir-biriga ko‘paytiriladi",
          "$i$-satr elementlaridan $a_{ik}$ soni ayirib tashlanadi"
        ],
        "answer": 1,
        "explanation": "$a_{ik} + \\left(-\\frac{a_{ik}}{a_{kk}}\\right) a_{kk} = 0$ bo‘lib, determinantning 7-xossasiga ko‘ra determinant qiymati o‘zgarmaydi."
      },
      {
        "id": "ON_V8_Q14",
        "variant": 8,
        "num": 14,
        "origNum": 18,
        "topicId": 7,
        "kind": "Nazariy",
        "difficulty": "Oson",
        "question": "[Nazariy • 7-Ma’ruza] Eski bazisdan yangi bazisga o‘tish matritsasi $P$ bo‘lsa, vektorning yangi bazisdagi koordinatalari $\\vec{x}'$ qaysi formula bilan topiladi (34-slayd)?",
        "options": [
          "$\\vec{x}' = P \\cdot \\vec{x}$",
          "$\\vec{x}' = \\vec{x} \\cdot P$",
          "$P \\cdot \\vec{x}' = \\vec{x} \\implies \\vec{x}' = P^{-1} \\cdot \\vec{x}$",
          "$\\vec{x}' = P^T + \\vec{x}$"
        ],
        "answer": 2,
        "explanation": "7-ma’ruza (34-slayd): $P \\cdot \\vec{x}' = \\vec{x}$ tenglikdan $\\vec{x}' = P^{-1} \\cdot \\vec{x}$ kelib chiqadi."
      },
      {
        "id": "ON_V8_Q15",
        "variant": 8,
        "num": 15,
        "origNum": 4,
        "topicId": 7,
        "kind": "Amaliy",
        "difficulty": "Oson",
        "question": "$A$ vektor uchun $-3A$ vektorning qiymatini toping: $$A = (2;\\; -3;\\; 5)$$",
        "options": [
          "$(-6;\\; 9;\\; -15)$",
          "$(-6;\\; -9;\\; -15)$",
          "$(-1;\\; -6;\\; 2)$",
          "$(6;\\; -9;\\; 15)$"
        ],
        "answer": 0,
        "explanation": "Vektorni $-3$ songa ko‘paytirishda har bir komponent $-3$ ga ko‘paytiriladi: $(-3\\cdot 2;\\; -3\\cdot(-3);\\; -3\\cdot 5) = (-6;\\; 9;\\; -15)$."
      },
      {
        "id": "ON_V8_Q16",
        "variant": 8,
        "num": 16,
        "origNum": 17,
        "topicId": 6,
        "kind": "Amaliy",
        "difficulty": "O'rta",
        "question": "Ushbu 3-tartibli tenglamalar sistemasini yeching: $$\\begin{cases} x + y + z = 6 \\\\ 2x - y + z = 3 \\\\ x + 2y - z = 2 \\end{cases}$$",
        "options": [
          "$(2;\\; 1;\\; 3)$",
          "$(1;\\; 3;\\; 2)$",
          "$(3;\\; 2;\\; 1)$",
          "$(1;\\; 2;\\; 3)$"
        ],
        "answer": 3,
        "explanation": "1- va 3-tenglamalarni qo‘shsak $2x + 3y = 8$; 1- va 2-tenglamalar ayirmasidan $-x + 2y = 3 \\implies x = 2y - 3$. O‘rniga qo‘yib $y = 2$, $x = 1$, $z = 3$ ni topamiz."
      },
      {
        "id": "ON_V8_Q17",
        "variant": 8,
        "num": 17,
        "origNum": 22,
        "topicId": 7,
        "kind": "Amaliy",
        "difficulty": "Oson",
        "question": "Quyidagi vektorning uzunligini toping: $$A = (2;\\; -3;\\; 6)$$",
        "options": [
          "$11$",
          "$5$",
          "$7$",
          "$49$"
        ],
        "answer": 2,
        "explanation": "$|A| = \\sqrt{2^2 + (-3)^2 + 6^2} = \\sqrt{4 + 9 + 36} = \\sqrt{49} = 7$."
      },
      {
        "id": "ON_V8_Q18",
        "variant": 8,
        "num": 18,
        "origNum": 21,
        "topicId": 7,
        "kind": "Amaliy",
        "difficulty": "O'rta",
        "question": "$A$, $B$ va $C$ vektorlarning aralash ko‘paytmasini toping: $$A = (1;\\; 2;\\; -1), \\quad B = (3;\\; 0;\\; 2), \\quad C = (2;\\; -1;\\; 1)$$",
        "options": [
          "$5$",
          "$-7$",
          "$1$",
          "$7$"
        ],
        "answer": 3,
        "explanation": "$\\begin{vmatrix} 1 & 2 & -1 \\\\ 3 & 0 & 2 \\\\ 2 & -1 & 1 \\end{vmatrix} = 1(0+2) - 2(3-4) - 1(-3-0) = 2 + 2 + 3 = 7$."
      },
      {
        "id": "ON_V8_Q19",
        "variant": 8,
        "num": 19,
        "origNum": 12,
        "topicId": 3,
        "kind": "Nazariy",
        "difficulty": "Oson",
        "question": "[Nazariy • 3-Ma’ruza] Kvadrat $A$ matritsa uchun $A \\cdot A^{-1} = E$ tenglikni tekshirish nimani tasdiqlaydi (9-slayd)?",
        "options": [
          "$A$ matritsaning rangi $0$ ga teng ekanligini tasdiqlaydi",
          "$A$ matritsa simmetrik ekanligini tasdiqlaydi",
          "$A$ matritsa xos matritsa ekanligini tasdiqlaydi",
          "Topilgan $A^{-1}$ matritsa haqiqatan ham $A$ matritsaning teskari matritsasi ekanligini tasdiqlaydi"
        ],
        "answer": 3,
        "explanation": "3-ma’ruza (9-slayd): Teskari matritsa topilgach, $A^{-1} \\cdot A = A \\cdot A^{-1} = E$ bajarilishi orqali natija to‘g‘riligi tekshiriladi."
      },
      {
        "id": "ON_V8_Q20",
        "variant": 8,
        "num": 20,
        "origNum": 1,
        "topicId": 1,
        "kind": "Amaliy",
        "difficulty": "Oson",
        "question": "$A$ va $B$ matritsalarning yig‘indisi uchun bosh diagonal elementlarining ko‘paytmasini toping: $$A = \\begin{bmatrix} 2 & 1 & -1 \\\\ 0 & 3 & 2 \\\\ 4 & -2 & 5 \\end{bmatrix}, \\qquad B = \\begin{bmatrix} 1 & -1 & 3 \\\\ 2 & 1 & -2 \\\\ -3 & 2 & 1 \\end{bmatrix}$$",
        "options": [
          "$13$",
          "$60$",
          "$48$",
          "$72$"
        ],
        "answer": 3,
        "explanation": "$A + B$ matritsaning bosh diagonal elementlari: $(2+1)=3$, $(3+1)=4$, $(5+1)=6$. Ularning ko‘paytmasi: $3 \\cdot 4 \\cdot 6 = 72$."
      },
      {
        "id": "ON_V8_Q21",
        "variant": 8,
        "num": 21,
        "origNum": 15,
        "topicId": 5,
        "kind": "Amaliy",
        "difficulty": "Oson",
        "question": "Ushbu 2-tartibli tenglamalar sistemasini yeching: $$\\begin{cases} 2x + 3y = 7 \\\\ 3x - y = 5 \\end{cases}$$",
        "options": [
          "$(1;\\; 2)$",
          "$(2;\\; 1)$",
          "$(-2;\\; 1)$",
          "$(2;\\; -1)$"
        ],
        "answer": 1,
        "explanation": "Kramer usuli bilan: $\\Delta = -2 - 9 = -11$, $\\Delta_x = -7 - 15 = -22 \\implies x = 2$, $\\Delta_y = 10 - 21 = -11 \\implies y = 1$. Javob: $(2;\\; 1)$."
      },
      {
        "id": "ON_V8_Q22",
        "variant": 8,
        "num": 22,
        "origNum": 8,
        "topicId": 2,
        "kind": "Amaliy",
        "difficulty": "O'rta",
        "question": "3-tartibli determinantni hisoblang: $$\\begin{vmatrix} 1 & 2 & -1 \\\\ 3 & 1 & 2 \\\\ 2 & -1 & 3 \\end{vmatrix}$$",
        "options": [
          "$0$",
          "$15$",
          "$10$",
          "$-10$"
        ],
        "answer": 0,
        "explanation": "$1(1\\cdot 3 - 2(-1)) - 2(3\\cdot 3 - 2\\cdot 2) + (-1)(3(-1) - 1\\cdot 2) = 1(5) - 2(5) - 1(-5) = 5 - 10 + 5 = 0$ (shuningdek 3-satr = 2-satr $-$ 1-satr)."
      },
      {
        "id": "ON_V8_Q23",
        "variant": 8,
        "num": 23,
        "origNum": 2,
        "topicId": 1,
        "kind": "Amaliy",
        "difficulty": "Oson",
        "question": "$A$ va $B$ matritsalarning ayirmasi uchun bosh diagonal elementlarining yig‘indisini toping: $$A = \\begin{bmatrix} 5 & -2 & 1 \\\\ 3 & 4 & -1 \\\\ 0 & 2 & 6 \\end{bmatrix}, \\qquad B = \\begin{bmatrix} 2 & 1 & -3 \\\\ -1 & 2 & 4 \\\\ 3 & 0 & 2 \\end{bmatrix}$$",
        "options": [
          "$15$",
          "$24$",
          "$9$",
          "$7$"
        ],
        "answer": 2,
        "explanation": "$A - B$ matritsaning bosh diagonal elementlari: $(5-2)=3$, $(4-2)=2$, $(6-2)=4$. Ularning yig‘indisi: $3 + 2 + 4 = 9$."
      },
      {
        "id": "ON_V8_Q24",
        "variant": 8,
        "num": 24,
        "origNum": 25,
        "topicId": 7,
        "kind": "Amaliy",
        "difficulty": "Oson",
        "question": "$A$ va $B$ vektorlarning orasidagi burchakni toping: $$A = (1;\\; 0;\\; 1), \\qquad B = (0;\\; 1;\\; 1)$$",
        "options": [
          "$45^\\circ$ ($\\frac{\\pi}{4}$)",
          "$90^\\circ$ ($\\frac{\\pi}{2}$)",
          "$30^\\circ$ ($\\frac{\\pi}{6}$)",
          "$60^\\circ$ ($\\frac{\\pi}{3}$)"
        ],
        "answer": 3,
        "explanation": "$\\cos\\varphi = \\frac{(A, B)}{|A|\\cdot|B|} = \\frac{1\\cdot 0 + 0\\cdot 1 + 1\\cdot 1}{\\sqrt{2}\\cdot\\sqrt{2}} = \\frac{1}{2} \\implies \\varphi = 60^\\circ$ ($\\frac{\\pi}{3}$)."
      },
      {
        "id": "ON_V8_Q25",
        "variant": 8,
        "num": 25,
        "origNum": 24,
        "topicId": 8,
        "kind": "Amaliy",
        "difficulty": "Oson",
        "question": "$A$ vektorga ortogonal bo‘lgan vektorni toping: $$A = (2;\\; -5;\\; 1)$$",
        "options": [
          "$(2;\\; 1;\\; 1)$",
          "$(1;\\; 1;\\; 1)$",
          "$(2;\\; -1;\\; 1)$",
          "$(3;\\; 1;\\; 2)$"
        ],
        "answer": 0,
        "explanation": "Ortogonallik sharti $(A, B) = 0$. Tekshiramiz: $2\\cdot 2 + (-5)\\cdot 1 + 1\\cdot 1 = 4 - 5 + 1 = 0$. Qolgan variantlarda skalyar ko‘paytma noldan farqli."
      }
    ]
  },
  {
    "variant": 9,
    "title": "Oraliq Nazorat — 9-Variant",
    "subtitle": "17 ta amaliy misol (o‘zgarishsiz) + barcha 8 mavzudan 8 ta yangi nazariy savol (raqamlari o‘zgartirilgan)",
    "practicalCount": 17,
    "theoryCount": 8,
    "total": 25,
    "questions": [
      {
        "id": "ON_V9_Q1",
        "variant": 9,
        "num": 1,
        "origNum": 9,
        "topicId": 2,
        "kind": "Amaliy",
        "difficulty": "O'rta",
        "question": "3-tartibli determinantni hisoblang: $$\\begin{vmatrix} 2 & 0 & 1 \\\\ -1 & 3 & 2 \\\\ 4 & 1 & -1 \\end{vmatrix}$$",
        "options": [
          "$-23$",
          "$-13$",
          "$3$",
          "$23$"
        ],
        "answer": 0,
        "explanation": "1-satr bo‘yicha yoyamiz: $2(3(-1) - 2\\cdot 1) - 0 + 1((-1)\\cdot 1 - 3\\cdot 4) = 2(-5) + 1(-13) = -10 - 13 = -23$."
      },
      {
        "id": "ON_V9_Q2",
        "variant": 9,
        "num": 2,
        "origNum": 3,
        "topicId": 1,
        "kind": "Amaliy",
        "difficulty": "O'rta",
        "question": "$A$ va $B$ matritsalarning ko‘paytmasi uchun 3-qator elementlarini toping: $$A = \\begin{bmatrix} 1 & 2 & -1 \\\\ 3 & 0 & 2 \\\\ 2 & -1 & 3 \\end{bmatrix}, \\qquad B = \\begin{bmatrix} 2 & 1 & 0 \\\\ -1 & 3 & 2 \\\\ 1 & -2 & 4 \\end{bmatrix}$$",
        "options": [
          "$(8;\\; 7;\\; 10)$",
          "$(2;\\; 2;\\; 12)$",
          "$(8;\\; -7;\\; 10)$",
          "$(6;\\; -7;\\; 12)$"
        ],
        "answer": 2,
        "explanation": "$A$ ning 3-qatori $(2, -1, 3)$ ni $B$ ning ustunlariga ko‘paytiramiz: $c_{31} = 2\\cdot 2 + (-1)(-1) + 3\\cdot 1 = 8$; $c_{32} = 2\\cdot 1 + (-1)\\cdot 3 + 3(-2) = -7$; $c_{33} = 2\\cdot 0 + (-1)\\cdot 2 + 3\\cdot 4 = 10$."
      },
      {
        "id": "ON_V9_Q3",
        "variant": 9,
        "num": 3,
        "origNum": 8,
        "topicId": 2,
        "kind": "Amaliy",
        "difficulty": "O'rta",
        "question": "3-tartibli determinantni hisoblang: $$\\begin{vmatrix} 1 & 2 & -1 \\\\ 3 & 1 & 2 \\\\ 2 & -1 & 3 \\end{vmatrix}$$",
        "options": [
          "$15$",
          "$0$",
          "$10$",
          "$-10$"
        ],
        "answer": 1,
        "explanation": "$1(1\\cdot 3 - 2(-1)) - 2(3\\cdot 3 - 2\\cdot 2) + (-1)(3(-1) - 1\\cdot 2) = 1(5) - 2(5) - 1(-5) = 5 - 10 + 5 = 0$ (shuningdek 3-satr = 2-satr $-$ 1-satr)."
      },
      {
        "id": "ON_V9_Q4",
        "variant": 9,
        "num": 4,
        "origNum": 16,
        "topicId": 6,
        "kind": "Nazariy",
        "difficulty": "O'rta",
        "question": "[Nazariy • 6-Ma’ruza] Agar sistemada $n$ ta noma’lum bo‘lib, uning rangi $r = 1$ bo‘lsa (bitta chiziqli erkli tenglama), kombinatorik bazis guruhlar soni $C_n^1$ nechaga teng bo‘ladi?",
        "options": [
          "$1$ taga teng",
          "$C_n^1 = n$ taga teng (har bir noma’lum alohida bittadan bazis o‘zgaruvchi bo‘lishi mumkin, qolgan $n-1$ tasi erkli bo‘ladi)",
          "$n - 1$ taga teng",
          "$n!$ taga teng"
        ],
        "answer": 1,
        "explanation": "$C_n^1 = \\frac{n!}{1!(n-1)!} = n$."
      },
      {
        "id": "ON_V9_Q5",
        "variant": 9,
        "num": 5,
        "origNum": 7,
        "topicId": 1,
        "kind": "Nazariy",
        "difficulty": "O'rta",
        "question": "[Nazariy • 1-Ma’ruza] Agar $A$ matritsa $m \\times n$ o‘lchamli bo‘lsa va uning $(i, j)$-elementi $a_{ij}$ bo‘lsa, transponirlangan $A^T$ matritsaning o‘lchami va $(j, i)$-elementi qanday bo‘ladi?",
        "options": [
          "O‘lchami $n \\times n$ bo‘ladi va $(A^T)_{ij} = 1/a_{ij}$ bo‘ladi",
          "O‘lchami $n \\times m$ bo‘ladi va $(A^T)_{ji} = a_{ij}$ tenglik bajariladi",
          "O‘lchami $m \\times m$ kvadrat shaklga keladi",
          "O‘lchami $m \\times n$ bo‘lib qoladi va $(A^T)_{ij} = -a_{ij}$ bo‘ladi"
        ],
        "answer": 1,
        "explanation": "1-ma’ruza (23-24-slaydlar): $m \\times n$ matritsa transponirlanganda satr va ustunlar soni o‘rin almashib, $n \\times m$ o‘lchamli matritsa hosil bo‘ladi."
      },
      {
        "id": "ON_V9_Q6",
        "variant": 9,
        "num": 6,
        "origNum": 17,
        "topicId": 6,
        "kind": "Amaliy",
        "difficulty": "O'rta",
        "question": "Ushbu 3-tartibli tenglamalar sistemasini yeching: $$\\begin{cases} x + y + z = 6 \\\\ 2x - y + z = 3 \\\\ x + 2y - z = 2 \\end{cases}$$",
        "options": [
          "$(1;\\; 2;\\; 3)$",
          "$(3;\\; 2;\\; 1)$",
          "$(1;\\; 3;\\; 2)$",
          "$(2;\\; 1;\\; 3)$"
        ],
        "answer": 0,
        "explanation": "1- va 3-tenglamalarni qo‘shsak $2x + 3y = 8$; 1- va 2-tenglamalar ayirmasidan $-x + 2y = 3 \\implies x = 2y - 3$. O‘rniga qo‘yib $y = 2$, $x = 1$, $z = 3$ ni topamiz."
      },
      {
        "id": "ON_V9_Q7",
        "variant": 9,
        "num": 7,
        "origNum": 18,
        "topicId": 7,
        "kind": "Nazariy",
        "difficulty": "Qiyin",
        "question": "[Nazariy • 7-Ma’ruza] Koshi-Bunyakovskiy tengsizligida $|(X, Y)| = |X| \\cdot |Y|$ aniq tenglik holati qachon va faqat qachon bajariladi?",
        "options": [
          "$X$ va $Y$ vektorlar o‘zaro ortogonal bo‘lganda ($\\cos\\varphi = 0$)",
          "$X$ va $Y$ birlik vektorlar bo‘lganda",
          "Hech qachon tenglik bajarilmaydi",
          "$X$ va $Y$ vektorlar kollinear (chiziqli bog‘liq, ya’ni $Y = \\lambda X$) bo‘lganda ($\\cos\\varphi = \\pm 1$)"
        ],
        "answer": 3,
        "explanation": "$|(X,Y)| = |X||Y||\\cos\\varphi| = |X||Y| \\iff |\\cos\\varphi| = 1 \\iff \\varphi = 0$ yoki $\\varphi = \\pi$ (vektorlar kollinear)."
      },
      {
        "id": "ON_V9_Q8",
        "variant": 9,
        "num": 8,
        "origNum": 10,
        "topicId": 2,
        "kind": "Nazariy",
        "difficulty": "O'rta",
        "question": "[Nazariy • 2-Ma’ruza] Agar $n$-tartibli kvadrat matritsaning barcha elementlari ishorasi qarama-qarshiga o‘zgartirilsa ($-A$ matritsa), uning determinanti $\\det(-A)$ nimaga teng bo‘ladi?",
        "options": [
          "Har doim $-\\det(A)$ ga teng",
          "Har doim $\\det(A)$ ga teng",
          "Nolga teng",
          "$(-1)^n \\det(A)$ ga teng (ya’ni $n$ juft bo‘lsa $\\det(A)$ ga, $n$ toq bo‘lsa $-\\det(A)$ ga teng)"
        ],
        "answer": 3,
        "explanation": "$-A = (-1) \\cdot A$ bo‘lgani uchun har bir $n$ ta satrdan $(-1)$ ko‘paytuvchi chiqib, $\\det(-A) = (-1)^n \\det(A)$ bo‘ladi."
      },
      {
        "id": "ON_V9_Q9",
        "variant": 9,
        "num": 9,
        "origNum": 5,
        "topicId": 2,
        "kind": "Amaliy",
        "difficulty": "Oson",
        "question": "2-tartibli determinantni hisoblang: $$\\begin{vmatrix} 4 & -3 \\\\ 2 & 5 \\end{vmatrix}$$",
        "options": [
          "$26$",
          "$14$",
          "$-26$",
          "$20$"
        ],
        "answer": 0,
        "explanation": "$4 \\cdot 5 - (-3) \\cdot 2 = 20 - (-6) = 26$."
      },
      {
        "id": "ON_V9_Q10",
        "variant": 9,
        "num": 10,
        "origNum": 11,
        "topicId": 4,
        "kind": "Nazariy",
        "difficulty": "Oson",
        "question": "[Nazariy • 4-Ma’ruza] Agar $n$-tartibli determinantning barcha algebraik to‘ldiruvchilari $A_{ij} = 0$ bo‘lsa, determinantning o‘zi $\\Delta$ haqida nima deyish mumkin?",
        "options": [
          "Determinant noldan farqli bo‘ladi",
          "$\\Delta = n!$ bo‘ladi",
          "Laplas formulasiga ko‘ra $\\Delta = \\sum_{j=1}^n a_{ij} A_{ij} = 0$ bo‘ladi",
          "$\\Delta = 1$ bo‘ladi"
        ],
        "answer": 2,
        "explanation": "Ixtiyoriy satr bo‘yicha Laplas yoyilmasida barcha $A_{ij}=0$ bo‘lsa, $\\Delta = 0$ bo‘lishi kelib chiqadi."
      },
      {
        "id": "ON_V9_Q11",
        "variant": 9,
        "num": 11,
        "origNum": 13,
        "topicId": 3,
        "kind": "Amaliy",
        "difficulty": "O'rta",
        "question": "$A$ matritsa uchun teskari matritsaning 1-qator va 1-ustunda joylashgan elementini hisoblang: $$A = \\begin{bmatrix} 2 & 1 & 1 \\\\ 1 & 2 & 1 \\\\ 1 & 1 & 2 \\end{bmatrix}$$",
        "options": [
          "$\\frac{3}{4}$",
          "$\\frac{1}{4}$",
          "$-\\frac{1}{4}$",
          "$\\frac{1}{2}$"
        ],
        "answer": 0,
        "explanation": "$\\det(A) = 2(4-1) - 1(2-1) + 1(1-2) = 6 - 1 - 1 = 4$. $A_{11} = (-1)^{1+1}\\begin{vmatrix} 2 & 1 \\\\ 1 & 2 \\end{vmatrix} = 3$. Demak $(A^{-1})_{11} = \\frac{A_{11}}{\\det A} = \\frac{3}{4}$."
      },
      {
        "id": "ON_V9_Q12",
        "variant": 9,
        "num": 12,
        "origNum": 21,
        "topicId": 7,
        "kind": "Amaliy",
        "difficulty": "O'rta",
        "question": "$A$, $B$ va $C$ vektorlarning aralash ko‘paytmasini toping: $$A = (1;\\; 2;\\; -1), \\quad B = (3;\\; 0;\\; 2), \\quad C = (2;\\; -1;\\; 1)$$",
        "options": [
          "$7$",
          "$-7$",
          "$1$",
          "$5$"
        ],
        "answer": 0,
        "explanation": "$\\begin{vmatrix} 1 & 2 & -1 \\\\ 3 & 0 & 2 \\\\ 2 & -1 & 1 \\end{vmatrix} = 1(0+2) - 2(3-4) - 1(-3-0) = 2 + 2 + 3 = 7$."
      },
      {
        "id": "ON_V9_Q13",
        "variant": 9,
        "num": 13,
        "origNum": 6,
        "topicId": 2,
        "kind": "Amaliy",
        "difficulty": "Oson",
        "question": "2-tartibli determinantni hisoblang: $$\\begin{vmatrix} -3 & 6 \\\\ 4 & -5 \\end{vmatrix}$$",
        "options": [
          "$9$",
          "$-39$",
          "$39$",
          "$-9$"
        ],
        "answer": 3,
        "explanation": "$(-3) \\cdot (-5) - 6 \\cdot 4 = 15 - 24 = -9$."
      },
      {
        "id": "ON_V9_Q14",
        "variant": 9,
        "num": 14,
        "origNum": 25,
        "topicId": 7,
        "kind": "Amaliy",
        "difficulty": "Oson",
        "question": "$A$ va $B$ vektorlarning orasidagi burchakni toping: $$A = (1;\\; 0;\\; 1), \\qquad B = (0;\\; 1;\\; 1)$$",
        "options": [
          "$60^\\circ$ ($\\frac{\\pi}{3}$)",
          "$45^\\circ$ ($\\frac{\\pi}{4}$)",
          "$30^\\circ$ ($\\frac{\\pi}{6}$)",
          "$90^\\circ$ ($\\frac{\\pi}{2}$)"
        ],
        "answer": 0,
        "explanation": "$\\cos\\varphi = \\frac{(A, B)}{|A|\\cdot|B|} = \\frac{1\\cdot 0 + 0\\cdot 1 + 1\\cdot 1}{\\sqrt{2}\\cdot\\sqrt{2}} = \\frac{1}{2} \\implies \\varphi = 60^\\circ$ ($\\frac{\\pi}{3}$)."
      },
      {
        "id": "ON_V9_Q15",
        "variant": 9,
        "num": 15,
        "origNum": 24,
        "topicId": 8,
        "kind": "Amaliy",
        "difficulty": "Oson",
        "question": "$A$ vektorga ortogonal bo‘lgan vektorni toping: $$A = (2;\\; -5;\\; 1)$$",
        "options": [
          "$(1;\\; 1;\\; 1)$",
          "$(2;\\; 1;\\; 1)$",
          "$(2;\\; -1;\\; 1)$",
          "$(3;\\; 1;\\; 2)$"
        ],
        "answer": 1,
        "explanation": "Ortogonallik sharti $(A, B) = 0$. Tekshiramiz: $2\\cdot 2 + (-5)\\cdot 1 + 1\\cdot 1 = 4 - 5 + 1 = 0$. Qolgan variantlarda skalyar ko‘paytma noldan farqli."
      },
      {
        "id": "ON_V9_Q16",
        "variant": 9,
        "num": 16,
        "origNum": 12,
        "topicId": 3,
        "kind": "Nazariy",
        "difficulty": "O'rta",
        "question": "[Nazariy • 3-Ma’ruza] Agar Gauss-Jordan usulida $(A \\mid E)$ matritsani satr almashtirishlari bilan $(E \\mid A^{-1})$ ga keltirayotganda chap blokda to‘liq nollardan iborat satr paydo bo‘lsa, bu nimani bildiradi?",
        "options": [
          "$\\det(A) = 0$ (matritsa xos) ekanligini va berilgan $A$ matritsaga teskari matritsa mavjud emasligini bildiradi",
          "Ustunlarni almashtirib davom ettirish kerakligini bildiradi",
          "$A$ matritsa birlik matritsa ekanligini bildiradi",
          "$A^{-1}$ matritsaning barcha elementlari nolga teng ekanligini bildiradi"
        ],
        "answer": 0,
        "explanation": "Chap blokda nol satr paydo bo‘lishi $r(A) < n \\iff \\det(A) = 0$ ekanligini anglatadi, demak $A^{-1}$ mavjud emas."
      },
      {
        "id": "ON_V9_Q17",
        "variant": 9,
        "num": 17,
        "origNum": 19,
        "topicId": 7,
        "kind": "Amaliy",
        "difficulty": "Oson",
        "question": "$A$ va $B$ vektorlarning skalyar ko‘paytmasini toping: $$A = (2;\\; -3;\\; 4), \\qquad B = (1;\\; 5;\\; 2)$$",
        "options": [
          "$25$",
          "$-15$",
          "$-5$",
          "$5$"
        ],
        "answer": 2,
        "explanation": "$(A, B) = 2 \\cdot 1 + (-3) \\cdot 5 + 4 \\cdot 2 = 2 - 15 + 8 = -5$."
      },
      {
        "id": "ON_V9_Q18",
        "variant": 9,
        "num": 18,
        "origNum": 22,
        "topicId": 7,
        "kind": "Amaliy",
        "difficulty": "Oson",
        "question": "Quyidagi vektorning uzunligini toping: $$A = (2;\\; -3;\\; 6)$$",
        "options": [
          "$5$",
          "$11$",
          "$49$",
          "$7$"
        ],
        "answer": 3,
        "explanation": "$|A| = \\sqrt{2^2 + (-3)^2 + 6^2} = \\sqrt{4 + 9 + 36} = \\sqrt{49} = 7$."
      },
      {
        "id": "ON_V9_Q19",
        "variant": 9,
        "num": 19,
        "origNum": 1,
        "topicId": 1,
        "kind": "Amaliy",
        "difficulty": "Oson",
        "question": "$A$ va $B$ matritsalarning yig‘indisi uchun bosh diagonal elementlarining ko‘paytmasini toping: $$A = \\begin{bmatrix} 2 & 1 & -1 \\\\ 0 & 3 & 2 \\\\ 4 & -2 & 5 \\end{bmatrix}, \\qquad B = \\begin{bmatrix} 1 & -1 & 3 \\\\ 2 & 1 & -2 \\\\ -3 & 2 & 1 \\end{bmatrix}$$",
        "options": [
          "$72$",
          "$60$",
          "$48$",
          "$13$"
        ],
        "answer": 0,
        "explanation": "$A + B$ matritsaning bosh diagonal elementlari: $(2+1)=3$, $(3+1)=4$, $(5+1)=6$. Ularning ko‘paytmasi: $3 \\cdot 4 \\cdot 6 = 72$."
      },
      {
        "id": "ON_V9_Q20",
        "variant": 9,
        "num": 20,
        "origNum": 4,
        "topicId": 7,
        "kind": "Amaliy",
        "difficulty": "Oson",
        "question": "$A$ vektor uchun $-3A$ vektorning qiymatini toping: $$A = (2;\\; -3;\\; 5)$$",
        "options": [
          "$(6;\\; -9;\\; 15)$",
          "$(-6;\\; 9;\\; -15)$",
          "$(-1;\\; -6;\\; 2)$",
          "$(-6;\\; -9;\\; -15)$"
        ],
        "answer": 1,
        "explanation": "Vektorni $-3$ songa ko‘paytirishda har bir komponent $-3$ ga ko‘paytiriladi: $(-3\\cdot 2;\\; -3\\cdot(-3);\\; -3\\cdot 5) = (-6;\\; 9;\\; -15)$."
      },
      {
        "id": "ON_V9_Q21",
        "variant": 9,
        "num": 21,
        "origNum": 15,
        "topicId": 5,
        "kind": "Amaliy",
        "difficulty": "Oson",
        "question": "Ushbu 2-tartibli tenglamalar sistemasini yeching: $$\\begin{cases} 2x + 3y = 7 \\\\ 3x - y = 5 \\end{cases}$$",
        "options": [
          "$(-2;\\; 1)$",
          "$(1;\\; 2)$",
          "$(2;\\; 1)$",
          "$(2;\\; -1)$"
        ],
        "answer": 2,
        "explanation": "Kramer usuli bilan: $\\Delta = -2 - 9 = -11$, $\\Delta_x = -7 - 15 = -22 \\implies x = 2$, $\\Delta_y = 10 - 21 = -11 \\implies y = 1$. Javob: $(2;\\; 1)$."
      },
      {
        "id": "ON_V9_Q22",
        "variant": 9,
        "num": 22,
        "origNum": 20,
        "topicId": 7,
        "kind": "Amaliy",
        "difficulty": "O'rta",
        "question": "$A$ va $B$ vektorlarning vektor ko‘paytmasini toping: $$A = (1;\\; -2;\\; 3), \\qquad B = (2;\\; 1;\\; -1)$$",
        "options": [
          "$(5;\\; 7;\\; -1)$",
          "$(-1;\\; 7;\\; 5)$",
          "$(1;\\; -7;\\; -5)$",
          "$(-1;\\; -7;\\; 5)$"
        ],
        "answer": 1,
        "explanation": "$[A \\times B] = \\begin{vmatrix} \\vec{i} & \\vec{j} & \\vec{k} \\\\ 1 & -2 & 3 \\\\ 2 & 1 & -1 \\end{vmatrix} = \\vec{i}(2-3) - \\vec{j}(-1-6) + \\vec{k}(1+4) = (-1;\\; 7;\\; 5)$."
      },
      {
        "id": "ON_V9_Q23",
        "variant": 9,
        "num": 23,
        "origNum": 2,
        "topicId": 1,
        "kind": "Amaliy",
        "difficulty": "Oson",
        "question": "$A$ va $B$ matritsalarning ayirmasi uchun bosh diagonal elementlarining yig‘indisini toping: $$A = \\begin{bmatrix} 5 & -2 & 1 \\\\ 3 & 4 & -1 \\\\ 0 & 2 & 6 \\end{bmatrix}, \\qquad B = \\begin{bmatrix} 2 & 1 & -3 \\\\ -1 & 2 & 4 \\\\ 3 & 0 & 2 \\end{bmatrix}$$",
        "options": [
          "$24$",
          "$15$",
          "$7$",
          "$9$"
        ],
        "answer": 3,
        "explanation": "$A - B$ matritsaning bosh diagonal elementlari: $(5-2)=3$, $(4-2)=2$, $(6-2)=4$. Ularning yig‘indisi: $3 + 2 + 4 = 9$."
      },
      {
        "id": "ON_V9_Q24",
        "variant": 9,
        "num": 24,
        "origNum": 14,
        "topicId": 5,
        "kind": "Nazariy",
        "difficulty": "O'rta",
        "question": "[Nazariy • 5-Ma’ruza] Agar $X_1$ va $X_2$ ustun-vektorlar $AX = \\Theta$ bir jinsli sistemaning yechimlari bo‘lsa, ularning yig‘indisi $X_1 + X_2$ va songa ko‘paytmasi $\\lambda X_1$ ham shu sistemaning yechimi bo‘ladimi?",
        "options": [
          "Ha, chunki $A(X_1 + X_2) = AX_1 + AX_2 = \\Theta + \\Theta = \\Theta$ va $A(\\lambda X_1) = \\lambda(AX_1) = \\Theta$ (yechimlar to‘plami chiziqli fazo tashkil qiladi)",
          "Faqat $\\lambda = 1$ bo‘lganda yechim bo‘ladi",
          "Yo‘q, faqat $X_1 - X_2$ yechim bo‘ladi",
          "Yig‘indi bir jinsli bo‘lmagan sistemaning yechimi bo‘ladi"
        ],
        "answer": 0,
        "explanation": "Bir jinsli sistemaning barcha yechimlari to‘plami $\\mathbb{R}^n$ ning $n - r$ o‘lchovli chiziqli qism fazosini (yadrosini) tashkil etadi, FYS esa shu qism fazoning bazisidir."
      },
      {
        "id": "ON_V9_Q25",
        "variant": 9,
        "num": 25,
        "origNum": 23,
        "topicId": 8,
        "kind": "Nazariy",
        "difficulty": "O'rta",
        "question": "[Nazariy • 8-Ma’ruza] Evklid fazosida ikki o‘zaro ortogonal $X$ va $Y$ vektorlar ($(X, Y) = 0$) uchun $|X + Y|^2$ nimaga teng?",
        "options": [
          "$|X + Y|^2 = 0$",
          "$|X + Y|^2 = |X|^2 + |Y|^2$ (umumlashgan Pifagor teoremasi)",
          "$|X + Y|^2 = (|X| + |Y|)^2$",
          "$|X + Y|^2 = |X|^2 - |Y|^2$"
        ],
        "answer": 1,
        "explanation": "$|X+Y|^2 = (X+Y, X+Y) = (X,X) + 2(X,Y) + (Y,Y) = |X|^2 + 0 + |Y|^2 = |X|^2 + |Y|^2$."
      }
    ]
  },
  {
    "variant": 10,
    "title": "Oraliq Nazorat — 10-Variant",
    "subtitle": "17 ta amaliy misol (o‘zgarishsiz) + barcha 8 mavzudan 8 ta yangi nazariy savol (raqamlari o‘zgartirilgan)",
    "practicalCount": 17,
    "theoryCount": 8,
    "total": 25,
    "questions": [
      {
        "id": "ON_V10_Q1",
        "variant": 10,
        "num": 1,
        "origNum": 17,
        "topicId": 6,
        "kind": "Amaliy",
        "difficulty": "O'rta",
        "question": "Ushbu 3-tartibli tenglamalar sistemasini yeching: $$\\begin{cases} x + y + z = 6 \\\\ 2x - y + z = 3 \\\\ x + 2y - z = 2 \\end{cases}$$",
        "options": [
          "$(2;\\; 1;\\; 3)$",
          "$(1;\\; 2;\\; 3)$",
          "$(1;\\; 3;\\; 2)$",
          "$(3;\\; 2;\\; 1)$"
        ],
        "answer": 1,
        "explanation": "1- va 3-tenglamalarni qo‘shsak $2x + 3y = 8$; 1- va 2-tenglamalar ayirmasidan $-x + 2y = 3 \\implies x = 2y - 3$. O‘rniga qo‘yib $y = 2$, $x = 1$, $z = 3$ ni topamiz."
      },
      {
        "id": "ON_V10_Q2",
        "variant": 10,
        "num": 2,
        "origNum": 15,
        "topicId": 5,
        "kind": "Amaliy",
        "difficulty": "Oson",
        "question": "Ushbu 2-tartibli tenglamalar sistemasini yeching: $$\\begin{cases} 2x + 3y = 7 \\\\ 3x - y = 5 \\end{cases}$$",
        "options": [
          "$(1;\\; 2)$",
          "$(-2;\\; 1)$",
          "$(2;\\; -1)$",
          "$(2;\\; 1)$"
        ],
        "answer": 3,
        "explanation": "Kramer usuli bilan: $\\Delta = -2 - 9 = -11$, $\\Delta_x = -7 - 15 = -22 \\implies x = 2$, $\\Delta_y = 10 - 21 = -11 \\implies y = 1$. Javob: $(2;\\; 1)$."
      },
      {
        "id": "ON_V10_Q3",
        "variant": 10,
        "num": 3,
        "origNum": 13,
        "topicId": 3,
        "kind": "Amaliy",
        "difficulty": "O'rta",
        "question": "$A$ matritsa uchun teskari matritsaning 1-qator va 1-ustunda joylashgan elementini hisoblang: $$A = \\begin{bmatrix} 2 & 1 & 1 \\\\ 1 & 2 & 1 \\\\ 1 & 1 & 2 \\end{bmatrix}$$",
        "options": [
          "$\\frac{1}{2}$",
          "$\\frac{3}{4}$",
          "$-\\frac{1}{4}$",
          "$\\frac{1}{4}$"
        ],
        "answer": 1,
        "explanation": "$\\det(A) = 2(4-1) - 1(2-1) + 1(1-2) = 6 - 1 - 1 = 4$. $A_{11} = (-1)^{1+1}\\begin{vmatrix} 2 & 1 \\\\ 1 & 2 \\end{vmatrix} = 3$. Demak $(A^{-1})_{11} = \\frac{A_{11}}{\\det A} = \\frac{3}{4}$."
      },
      {
        "id": "ON_V10_Q4",
        "variant": 10,
        "num": 4,
        "origNum": 2,
        "topicId": 1,
        "kind": "Amaliy",
        "difficulty": "Oson",
        "question": "$A$ va $B$ matritsalarning ayirmasi uchun bosh diagonal elementlarining yig‘indisini toping: $$A = \\begin{bmatrix} 5 & -2 & 1 \\\\ 3 & 4 & -1 \\\\ 0 & 2 & 6 \\end{bmatrix}, \\qquad B = \\begin{bmatrix} 2 & 1 & -3 \\\\ -1 & 2 & 4 \\\\ 3 & 0 & 2 \\end{bmatrix}$$",
        "options": [
          "$9$",
          "$7$",
          "$24$",
          "$15$"
        ],
        "answer": 0,
        "explanation": "$A - B$ matritsaning bosh diagonal elementlari: $(5-2)=3$, $(4-2)=2$, $(6-2)=4$. Ularning yig‘indisi: $3 + 2 + 4 = 9$."
      },
      {
        "id": "ON_V10_Q5",
        "variant": 10,
        "num": 5,
        "origNum": 11,
        "topicId": 4,
        "kind": "Nazariy",
        "difficulty": "O'rta",
        "question": "[Nazariy • 4-Ma’ruza] $F = \\begin{pmatrix} P_1 \\\\ P_2 \\end{pmatrix}$ o‘rinlashtirishda ustunlar o‘rnini ixtiyoriy almashtirib, yuqori qatorni $(1, 2, \\dots, n)$ tabiiy tartibga keltirish mumkinmi?",
        "options": [
          "Faqat juft tartibli o‘rinlashtirishlarda mumkin",
          "Ustunlar almashtirilsa o‘rinlashtirish buziladi",
          "Yo‘q, ustunlar o‘rnini almashtirish taqiqlanadi",
          "Ha, har bir ustunda yuqori va quyi elementni birgalikda ko‘chirish akslantirishning o‘zini ham, juft-toqligini ham o‘zgartirmaydi"
        ],
        "answer": 3,
        "explanation": "4-ma’ruza (9-slayd): Ustunlarni juftligi bilan o‘rin almashtirganda $P_1$ va $P_2$ da bir vaqtda transpozitsiya yuz berib, umumiy juft-toqlik saqlanadi."
      },
      {
        "id": "ON_V10_Q6",
        "variant": 10,
        "num": 6,
        "origNum": 3,
        "topicId": 1,
        "kind": "Amaliy",
        "difficulty": "O'rta",
        "question": "$A$ va $B$ matritsalarning ko‘paytmasi uchun 3-qator elementlarini toping: $$A = \\begin{bmatrix} 1 & 2 & -1 \\\\ 3 & 0 & 2 \\\\ 2 & -1 & 3 \\end{bmatrix}, \\qquad B = \\begin{bmatrix} 2 & 1 & 0 \\\\ -1 & 3 & 2 \\\\ 1 & -2 & 4 \\end{bmatrix}$$",
        "options": [
          "$(2;\\; 2;\\; 12)$",
          "$(8;\\; 7;\\; 10)$",
          "$(6;\\; -7;\\; 12)$",
          "$(8;\\; -7;\\; 10)$"
        ],
        "answer": 3,
        "explanation": "$A$ ning 3-qatori $(2, -1, 3)$ ni $B$ ning ustunlariga ko‘paytiramiz: $c_{31} = 2\\cdot 2 + (-1)(-1) + 3\\cdot 1 = 8$; $c_{32} = 2\\cdot 1 + (-1)\\cdot 3 + 3(-2) = -7$; $c_{33} = 2\\cdot 0 + (-1)\\cdot 2 + 3\\cdot 4 = 10$."
      },
      {
        "id": "ON_V10_Q7",
        "variant": 10,
        "num": 7,
        "origNum": 4,
        "topicId": 7,
        "kind": "Amaliy",
        "difficulty": "Oson",
        "question": "$A$ vektor uchun $-3A$ vektorning qiymatini toping: $$A = (2;\\; -3;\\; 5)$$",
        "options": [
          "$(-1;\\; -6;\\; 2)$",
          "$(6;\\; -9;\\; 15)$",
          "$(-6;\\; 9;\\; -15)$",
          "$(-6;\\; -9;\\; -15)$"
        ],
        "answer": 2,
        "explanation": "Vektorni $-3$ songa ko‘paytirishda har bir komponent $-3$ ga ko‘paytiriladi: $(-3\\cdot 2;\\; -3\\cdot(-3);\\; -3\\cdot 5) = (-6;\\; 9;\\; -15)$."
      },
      {
        "id": "ON_V10_Q8",
        "variant": 10,
        "num": 8,
        "origNum": 22,
        "topicId": 7,
        "kind": "Amaliy",
        "difficulty": "Oson",
        "question": "Quyidagi vektorning uzunligini toping: $$A = (2;\\; -3;\\; 6)$$",
        "options": [
          "$7$",
          "$49$",
          "$5$",
          "$11$"
        ],
        "answer": 0,
        "explanation": "$|A| = \\sqrt{2^2 + (-3)^2 + 6^2} = \\sqrt{4 + 9 + 36} = \\sqrt{49} = 7$."
      },
      {
        "id": "ON_V10_Q9",
        "variant": 10,
        "num": 9,
        "origNum": 10,
        "topicId": 2,
        "kind": "Nazariy",
        "difficulty": "Qiyin",
        "question": "[Nazariy • 2-Ma’ruza] Determinantning 7-xossasini qo‘llashda o‘zgartirilayotgan satrning o‘zini biror $k \\ne 1$ songa ko‘paytirib, unga boshqa satrni qo‘shish determinant qiymatini o‘zgartiradimi?",
        "options": [
          "Ha, o‘zgartiradi: o‘zgartirilayotgan satrning o‘zi $k$ ga ko‘paytirilsa, determinant ham $k$ marta ortib ketadi! 7-xossada o‘zgartirilayotgan satrning o‘zi $1$ koeffitsiyent bilan qolishi shart",
          "Determinant nolga aylanib qoladi",
          "Yo‘q, har qanday holatda ham determinant o‘zgarmaydi",
          "Faqat ishorasi o‘zgaradi"
        ],
        "answer": 0,
        "explanation": "Bu talabalar eng ko‘p xato qiladigan nuqta: 7-xossada $R_i \\leftarrow R_i + k R_j$ da determinant o‘zgarmaydi, ammo $R_i \\leftarrow m R_i + k R_j$ qilinsa, determinant $m$ marta ortib ketadi!"
      },
      {
        "id": "ON_V10_Q10",
        "variant": 10,
        "num": 10,
        "origNum": 21,
        "topicId": 7,
        "kind": "Amaliy",
        "difficulty": "O'rta",
        "question": "$A$, $B$ va $C$ vektorlarning aralash ko‘paytmasini toping: $$A = (1;\\; 2;\\; -1), \\quad B = (3;\\; 0;\\; 2), \\quad C = (2;\\; -1;\\; 1)$$",
        "options": [
          "$-7$",
          "$7$",
          "$5$",
          "$1$"
        ],
        "answer": 1,
        "explanation": "$\\begin{vmatrix} 1 & 2 & -1 \\\\ 3 & 0 & 2 \\\\ 2 & -1 & 1 \\end{vmatrix} = 1(0+2) - 2(3-4) - 1(-3-0) = 2 + 2 + 3 = 7$."
      },
      {
        "id": "ON_V10_Q11",
        "variant": 10,
        "num": 11,
        "origNum": 9,
        "topicId": 2,
        "kind": "Amaliy",
        "difficulty": "O'rta",
        "question": "3-tartibli determinantni hisoblang: $$\\begin{vmatrix} 2 & 0 & 1 \\\\ -1 & 3 & 2 \\\\ 4 & 1 & -1 \\end{vmatrix}$$",
        "options": [
          "$3$",
          "$-23$",
          "$-13$",
          "$23$"
        ],
        "answer": 1,
        "explanation": "1-satr bo‘yicha yoyamiz: $2(3(-1) - 2\\cdot 1) - 0 + 1((-1)\\cdot 1 - 3\\cdot 4) = 2(-5) + 1(-13) = -10 - 13 = -23$."
      },
      {
        "id": "ON_V10_Q12",
        "variant": 10,
        "num": 12,
        "origNum": 7,
        "topicId": 1,
        "kind": "Nazariy",
        "difficulty": "O'rta",
        "question": "[Nazariy • 1-Ma’ruza] Qanday kvadrat matritsaga «simmetrik matritsa» deyiladi?",
        "options": [
          "Satrlari soni juft bo‘lgan to‘g‘ri burchakli matritsaga",
          "Bosh diagonali elementlari o‘zaro teng bo‘lgan ixtiyoriy matritsaga",
          "Transponirlanganda o‘ziga teng bo‘lgan ($A^T = A$, ya’ni barcha $i, j$ lar uchun $a_{ij} = a_{ji}$) kvadrat matritsaga",
          "Transponirlanganda ishorasi qarama-qarshiga o‘zgaruvchi ($A^T = -A$) matritsaga"
        ],
        "answer": 2,
        "explanation": "Agar kvadrat matritsaning bosh diagonalga nisbatan simmetrik joylashgan elementlari o‘zaro teng bo‘lsa ($a_{ij} = a_{ji}$), u holda $A^T = A$ bo‘lib, u simmetrik matritsa deyiladi."
      },
      {
        "id": "ON_V10_Q13",
        "variant": 10,
        "num": 13,
        "origNum": 24,
        "topicId": 8,
        "kind": "Amaliy",
        "difficulty": "Oson",
        "question": "$A$ vektorga ortogonal bo‘lgan vektorni toping: $$A = (2;\\; -5;\\; 1)$$",
        "options": [
          "$(1;\\; 1;\\; 1)$",
          "$(2;\\; -1;\\; 1)$",
          "$(2;\\; 1;\\; 1)$",
          "$(3;\\; 1;\\; 2)$"
        ],
        "answer": 2,
        "explanation": "Ortogonallik sharti $(A, B) = 0$. Tekshiramiz: $2\\cdot 2 + (-5)\\cdot 1 + 1\\cdot 1 = 4 - 5 + 1 = 0$. Qolgan variantlarda skalyar ko‘paytma noldan farqli."
      },
      {
        "id": "ON_V10_Q14",
        "variant": 10,
        "num": 14,
        "origNum": 6,
        "topicId": 2,
        "kind": "Amaliy",
        "difficulty": "Oson",
        "question": "2-tartibli determinantni hisoblang: $$\\begin{vmatrix} -3 & 6 \\\\ 4 & -5 \\end{vmatrix}$$",
        "options": [
          "$-9$",
          "$9$",
          "$39$",
          "$-39$"
        ],
        "answer": 0,
        "explanation": "$(-3) \\cdot (-5) - 6 \\cdot 4 = 15 - 24 = -9$."
      },
      {
        "id": "ON_V10_Q15",
        "variant": 10,
        "num": 15,
        "origNum": 25,
        "topicId": 7,
        "kind": "Amaliy",
        "difficulty": "Oson",
        "question": "$A$ va $B$ vektorlarning orasidagi burchakni toping: $$A = (1;\\; 0;\\; 1), \\qquad B = (0;\\; 1;\\; 1)$$",
        "options": [
          "$30^\\circ$ ($\\frac{\\pi}{6}$)",
          "$60^\\circ$ ($\\frac{\\pi}{3}$)",
          "$90^\\circ$ ($\\frac{\\pi}{2}$)",
          "$45^\\circ$ ($\\frac{\\pi}{4}$)"
        ],
        "answer": 1,
        "explanation": "$\\cos\\varphi = \\frac{(A, B)}{|A|\\cdot|B|} = \\frac{1\\cdot 0 + 0\\cdot 1 + 1\\cdot 1}{\\sqrt{2}\\cdot\\sqrt{2}} = \\frac{1}{2} \\implies \\varphi = 60^\\circ$ ($\\frac{\\pi}{3}$)."
      },
      {
        "id": "ON_V10_Q16",
        "variant": 10,
        "num": 16,
        "origNum": 19,
        "topicId": 7,
        "kind": "Amaliy",
        "difficulty": "Oson",
        "question": "$A$ va $B$ vektorlarning skalyar ko‘paytmasini toping: $$A = (2;\\; -3;\\; 4), \\qquad B = (1;\\; 5;\\; 2)$$",
        "options": [
          "$5$",
          "$-15$",
          "$25$",
          "$-5$"
        ],
        "answer": 3,
        "explanation": "$(A, B) = 2 \\cdot 1 + (-3) \\cdot 5 + 4 \\cdot 2 = 2 - 15 + 8 = -5$."
      },
      {
        "id": "ON_V10_Q17",
        "variant": 10,
        "num": 17,
        "origNum": 20,
        "topicId": 7,
        "kind": "Amaliy",
        "difficulty": "O'rta",
        "question": "$A$ va $B$ vektorlarning vektor ko‘paytmasini toping: $$A = (1;\\; -2;\\; 3), \\qquad B = (2;\\; 1;\\; -1)$$",
        "options": [
          "$(5;\\; 7;\\; -1)$",
          "$(1;\\; -7;\\; -5)$",
          "$(-1;\\; 7;\\; 5)$",
          "$(-1;\\; -7;\\; 5)$"
        ],
        "answer": 2,
        "explanation": "$[A \\times B] = \\begin{vmatrix} \\vec{i} & \\vec{j} & \\vec{k} \\\\ 1 & -2 & 3 \\\\ 2 & 1 & -1 \\end{vmatrix} = \\vec{i}(2-3) - \\vec{j}(-1-6) + \\vec{k}(1+4) = (-1;\\; 7;\\; 5)$."
      },
      {
        "id": "ON_V10_Q18",
        "variant": 10,
        "num": 18,
        "origNum": 23,
        "topicId": 8,
        "kind": "Nazariy",
        "difficulty": "Qiyin",
        "question": "[Nazariy • 8-Ma’ruza] Ortonormallangan bazisning $(e_i, e_k) = \\delta_{ik}$ xossasi matritsaviy tilda ushbu bazis vektorlaridan tuzilgan $Q$ matritsa uchun qanday tenglikni beradi?",
        "options": [
          "$Q + Q^T = E$",
          "$\\det(Q) = 0$",
          "$Q^T \\cdot Q = E$ (transponirlangan matritsa bilan o‘zining ko‘paytmasi birlik matritsaga teng)",
          "$Q^2 = O$"
        ],
        "answer": 2,
        "explanation": "$Q^T Q$ ko‘paytmaning $(i, k)$-elementi $i$-ustun va $k$-ustun skalyar ko‘paytmasi $(e_i, e_k) = \\delta_{ik}$ ga teng, ya’ni $Q^T Q = E$."
      },
      {
        "id": "ON_V10_Q19",
        "variant": 10,
        "num": 19,
        "origNum": 5,
        "topicId": 2,
        "kind": "Amaliy",
        "difficulty": "Oson",
        "question": "2-tartibli determinantni hisoblang: $$\\begin{vmatrix} 4 & -3 \\\\ 2 & 5 \\end{vmatrix}$$",
        "options": [
          "$14$",
          "$26$",
          "$20$",
          "$-26$"
        ],
        "answer": 1,
        "explanation": "$4 \\cdot 5 - (-3) \\cdot 2 = 20 - (-6) = 26$."
      },
      {
        "id": "ON_V10_Q20",
        "variant": 10,
        "num": 20,
        "origNum": 1,
        "topicId": 1,
        "kind": "Amaliy",
        "difficulty": "Oson",
        "question": "$A$ va $B$ matritsalarning yig‘indisi uchun bosh diagonal elementlarining ko‘paytmasini toping: $$A = \\begin{bmatrix} 2 & 1 & -1 \\\\ 0 & 3 & 2 \\\\ 4 & -2 & 5 \\end{bmatrix}, \\qquad B = \\begin{bmatrix} 1 & -1 & 3 \\\\ 2 & 1 & -2 \\\\ -3 & 2 & 1 \\end{bmatrix}$$",
        "options": [
          "$60$",
          "$72$",
          "$13$",
          "$48$"
        ],
        "answer": 1,
        "explanation": "$A + B$ matritsaning bosh diagonal elementlari: $(2+1)=3$, $(3+1)=4$, $(5+1)=6$. Ularning ko‘paytmasi: $3 \\cdot 4 \\cdot 6 = 72$."
      },
      {
        "id": "ON_V10_Q21",
        "variant": 10,
        "num": 21,
        "origNum": 14,
        "topicId": 5,
        "kind": "Nazariy",
        "difficulty": "O'rta",
        "question": "[Nazariy • 5-Ma’ruza] Agar chiziqli tenglamalar sistemasida $r(A) = r(A \\mid B) = n$ bo‘lsa, mos bir jinsli sistemaning fundamental yechimlar sistemasi (FYS) nechta vektordan iborat bo‘ladi?",
        "options": [
          "Cheksiz ko‘p vektordan iborat bo‘ladi",
          "FYS mavjud emas ($n - r = n - n = 0$), chunki mos bir jinsli sistema faqat yagona nol yechimga ega",
          "$n$ ta vektordan iborat bo‘ladi",
          "$1$ ta nolmas vektordan iborat bo‘ladi"
        ],
        "answer": 1,
        "explanation": "5-ma’ruza (5, 8-slaydlar): $r = n$ bo‘lganda erkli o‘zgaruvchilar soni $n - r = 0$ bo‘lib, bir jinsli sistema faqat nol yechimga ega va nolmas FYS mavjud emas."
      },
      {
        "id": "ON_V10_Q22",
        "variant": 10,
        "num": 22,
        "origNum": 8,
        "topicId": 2,
        "kind": "Amaliy",
        "difficulty": "O'rta",
        "question": "3-tartibli determinantni hisoblang: $$\\begin{vmatrix} 1 & 2 & -1 \\\\ 3 & 1 & 2 \\\\ 2 & -1 & 3 \\end{vmatrix}$$",
        "options": [
          "$-10$",
          "$15$",
          "$0$",
          "$10$"
        ],
        "answer": 2,
        "explanation": "$1(1\\cdot 3 - 2(-1)) - 2(3\\cdot 3 - 2\\cdot 2) + (-1)(3(-1) - 1\\cdot 2) = 1(5) - 2(5) - 1(-5) = 5 - 10 + 5 = 0$ (shuningdek 3-satr = 2-satr $-$ 1-satr)."
      },
      {
        "id": "ON_V10_Q23",
        "variant": 10,
        "num": 23,
        "origNum": 12,
        "topicId": 3,
        "kind": "Nazariy",
        "difficulty": "Qiyin",
        "question": "[Nazariy • 3-Ma’ruza] $n$-tartibli xosmas $A$ matritsaning qo‘shma matritsasi $\\bar{A}$ ning determinanti $\\det(\\bar{A})$ nimaga teng?",
        "options": [
          "$\\frac{1}{\\det(A)}$ ga teng",
          "$(\\det A)^{n-1}$ ga teng (chunki $A \\cdot \\bar{A} = \\det(A) \\cdot E \\implies \\det(A)\\det(\\bar{A}) = (\\det A)^n$)",
          "$1$ ga teng",
          "$\\det(A)$ ga teng"
        ],
        "answer": 1,
        "explanation": "$A^{-1} = \\frac{1}{\\det A}\\bar{A} \\implies \\bar{A} = (\\det A) A^{-1}$. U holda $\\det(\\bar{A}) = (\\det A)^n \\det(A^{-1}) = (\\det A)^{n-1}$."
      },
      {
        "id": "ON_V10_Q24",
        "variant": 10,
        "num": 24,
        "origNum": 16,
        "topicId": 6,
        "kind": "Nazariy",
        "difficulty": "O'rta",
        "question": "[Nazariy • 6-Ma’ruza] Nima uchun Gauss usulida to‘g‘ri yurishda biror satrni $0$ songa ko‘paytirish elementar almashtirish hisoblanmaydi va taqiqlanadi?",
        "options": [
          "Nolga ko‘paytirishga ruxsat beriladi",
          "Chunki nolga ko‘paytirish juda qiyin",
          "Chunki satrni $0$ ga ko‘paytirish shu tenglamani yo‘q qilib yuboradi (qaytarilmas amal) va matritsa rangini sun’iy ravishda kamaytirib, cheksiz ko‘p yot yechimlarni keltirib chiqaradi",
          "Chunki nolga ko‘paytirilsa sistema yechimga ega bo‘lmay qoladi"
        ],
        "answer": 2,
        "explanation": "3-ma’ruza (15-slayd, 2-elementar almashtirish): Satrni faqat NOLDAN FARQLI ($k \\ne 0$) songa ko‘paytirish va bo‘lish mumkin."
      },
      {
        "id": "ON_V10_Q25",
        "variant": 10,
        "num": 25,
        "origNum": 18,
        "topicId": 7,
        "kind": "Nazariy",
        "difficulty": "O'rta",
        "question": "[Nazariy • 7-Ma’ruza] Agar vektorlar sistemasining biror qism sistemasi chiziqli bog‘liq bo‘lsa, butun vektorlar sistemasi haqida nima deyish mumkin?",
        "options": [
          "Butun vektorlar sistemasi ham albatta chiziqli bog‘liq bo‘ladi (qolgan vektorlar oldiga $0$ koeffitsiyent qo‘yish kifoya)",
          "Butun sistema ortonormal bo‘ladi",
          "Qism sistemaga qarab xulosa qilib bo‘lmaydi",
          "Butun sistema chiziqli erkli bo‘ladi"
        ],
        "answer": 0,
        "explanation": "Qism sistema chiziqli bog‘liq bo‘lsa, unga yangi vektorlar qo‘shilganda ularning koeffitsiyentlarini $0$ deb olib, noldan farqli kombinatsiyada $\\Theta$ hosil qilish mumkin."
      }
    ]
  }
];
