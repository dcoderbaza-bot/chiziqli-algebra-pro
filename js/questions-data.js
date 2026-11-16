// Cyber University Davlat Universiteti — Chiziqli Algebra Testlar Bazasi
// Jami: 9 ta bo'lim × 30 ta savol = 270 ta tasdiqlangan test savoli
window.QUESTIONS_BANK = [
  {
    "id": "T1_Q1",
    "topicId": 1,
    "num": 1,
    "question": "«Matritsa» so‘zi qaysi tildan olingan va qanday lug‘aviy ma’noni bildiradi?",
    "options": [
      "Arabcha so‘z bo‘lib, «hisoblash tartibi» ma’nosini bildiradi",
      "Inglizcha so‘z bo‘lib, «sonlar tarmog‘i» ma’nosini bildiradi",
      "Lotincha so‘z bo‘lib, «birinchi manba» (asos) ma’nosini bildiradi",
      "Yunoncha so‘z bo‘lib, «to‘rtburchak jadval» ma’nosini bildiradi"
    ],
    "answer": 2,
    "difficulty": "Oson",
    "explanation": "1-ma’ruza (4-slayd): «Matritsa» so‘zi lotincha so‘z bo‘lib, «birinchi manba» ma’nosini bildiradi."
  },
  {
    "id": "T1_Q2",
    "topicId": 1,
    "num": 2,
    "question": "Matritsa to‘g‘risidagi dastlabki ma’lumotlar qaysi davlatga borib taqaladi va u yerda matritsani qanday atashgan?",
    "options": [
      "Qadimgi Misrga borib taqaladi va uni «Oltin piramida» deb atashgan",
      "Qadimgi Xitoyga borib taqaladi va ular matritsani «Sehrli kvadrat» deb atashgan",
      "Qadimgi Yunonistonga borib taqaladi va uni «Evklid jadvali» deb atashgan",
      "Qadimgi Hindistonga borib taqaladi va uni «Shaxmat taxtasi» deb atashgan"
    ],
    "answer": 1,
    "difficulty": "Oson",
    "explanation": "1-ma’ruza (4-slayd): Matritsa to‘g‘risidagi dastlabki ma’lumotlar qadimgi Xitoyga borib taqaladi. Ular matritsani «Sehrli kvadrat» deb atashgan."
  },
  {
    "id": "T1_Q3",
    "topicId": 1,
    "num": 3,
    "question": "Matritsalar bo‘yicha fundamental nazariyani XVIII asrda birinchilardan bo‘lib kiritgan nemis olimi kim?",
    "options": [
      "Veyyershtrass (Weierstrass)",
      "Arximed",
      "Lobachevskiy",
      "Dekart"
    ],
    "answer": 0,
    "difficulty": "Oson",
    "explanation": "1-ma’ruza (4-slayd): Matritsalar bo‘yicha fundamental nazariyani birinchilardan bo‘lib XVIII asrda nemis olimi Veyyershtrass kiritgan."
  },
  {
    "id": "T1_Q4",
    "topicId": 1,
    "num": 4,
    "question": "$m \\times n$ o‘lchovli matritsa deb nimaga aytiladi?",
    "options": [
      "Har doim satr va ustunlari soni teng bo‘lgan yagona songa",
      "$n$ ta satrdan va $m$ ta ustundan iborat $m + n$ ta elementli sonlar yig‘indisiga",
      "Faqat musbat sonlardan tashkil topgan uchburchak shaklidagi jadvalga",
      "$m$ ta satrdan va $n$ ta ustundan iborat $m \\cdot n$ ta elementdan tuzilgan to‘g‘ri to‘rtburchakli jadvalga"
    ],
    "answer": 3,
    "difficulty": "Oson",
    "explanation": "1-ma’ruza (5-6-slaydlar): $m$ ta satr va $n$ ta ustundan tashkil topgan $m \\cdot n$ ta elementli to‘g‘ri burchakli jadvalga $m \\times n$ o‘lchovli matritsa deyiladi."
  },
  {
    "id": "T1_Q5",
    "topicId": 1,
    "num": 5,
    "question": "Matritsaning umumiy elementi $a_{ij}$ yozuvidagi $i$ va $j$ indekslari nimani ifodalaydi?",
    "options": [
      "$i$ — matritsaning darajasini, $j$ — elementning ishorasini",
      "$i$ — ustun tartib raqamini, $j$ — satr tartib raqamini",
      "$i$ — element joylashgan satr tartib raqamini, $j$ — element joylashgan ustun tartib raqamini",
      "$i$ va $j$ — matritsadagi jami elementlar sonini"
    ],
    "answer": 2,
    "difficulty": "Oson",
    "explanation": "1-ma’ruza (6-slayd): Matritsaning $i$-satr va $j$-ustun kesishmasidagi element $a_{ij}$ kabi belgilanadi."
  },
  {
    "id": "T1_Q6",
    "topicId": 1,
    "num": 6,
    "question": "Qanday matritsaga $n$-tartibli «kvadrat matritsa» deyiladi?",
    "options": [
      "Faqat $2$ ta satr va $2$ ta ustundan iborat matritsaga",
      "Satrlari soni ustunlari soniga teng bo‘lgan ($m = n$), ya’ni $n$ ta satr va $n$ ta ustundan iborat matritsaga",
      "Barcha elementlari to‘liq kvadrat sonlardan iborat bo‘lgan ixtiyoriy matritsaga",
      "Elementlari kvadrat ildiz ostida berilgan matritsaga"
    ],
    "answer": 1,
    "difficulty": "Oson",
    "explanation": "1-ma’ruza (7-slayd): $n$ ta satrdan va $n$ ta ustundan iborat $n \\cdot n$ ta elementdan tuzilgan $n \\times n$ o‘lchovli matritsa kvadrat matritsa deyiladi."
  },
  {
    "id": "T1_Q7",
    "topicId": 1,
    "num": 7,
    "question": "$n$-tartibli kvadrat matritsaning «asosiy (bosh) diagonali»ni qaysi elementlar tashkil etadi?",
    "options": [
      "Yuqori chap burchakdan quyi o‘ng burchakka yo‘nalgan $a_{11}, a_{22}, \\dots, a_{nn}$ elementlar (satr va ustun indekslari bir xil bo‘lgan elementlar)",
      "Yuqori o‘ng burchakdan quyi chap burchakka yo‘nalgan $a_{1n}, a_{2,n-1}, \\dots, a_{n1}$ elementlar",
      "Birinchi satr va birinchi ustunning barcha elementlari",
      "Matritsaning faqat chekkasida joylashgan barcha elementlar"
    ],
    "answer": 0,
    "difficulty": "Oson",
    "explanation": "1-ma’ruza (7-slayd): $a_{11}, a_{22}, \\dots, a_{nn}$ elementlar kvadrat matritsaning asosiy diagonalini tashkil qiladi."
  },
  {
    "id": "T1_Q8",
    "topicId": 1,
    "num": 8,
    "question": "$n$-tartibli kvadrat matritsaning «yordamchi diagonali»ni qaysi elementlar tashkil etadi?",
    "options": [
      "$a_{11},\\; a_{12},\\; \\dots,\\; a_{1n}$ elementlar",
      "$a_{11},\\; a_{22},\\; \\dots,\\; a_{nn}$ elementlar",
      "$a_{n1},\\; a_{n2},\\; \\dots,\\; a_{nn}$ elementlar",
      "$a_{1n},\\; a_{2,n-1},\\; \\dots,\\; a_{n1}$ elementlar"
    ],
    "answer": 3,
    "difficulty": "Oson",
    "explanation": "1-ma’ruza (7-slayd): Yuqori o‘ng burchakdagi $a_{1n}$ dan quyi chap burchakdagi $a_{n1}$ gacha bo‘lgan elementlar yordamchi diagonal deyiladi."
  },
  {
    "id": "T1_Q9",
    "topicId": 1,
    "num": 9,
    "question": "«Satr matritsa» va «Ustun matritsa» o‘lchamlari qaysi javobda to‘g‘ri ko‘rsatilgan?",
    "options": [
      "Satr matritsa o‘lchami $n \\times 1$; Ustun matritsa o‘lchami $1 \\times m$",
      "Har ikkalasining o‘lchami $n \\times n$",
      "Satr matritsa o‘lchami $1 \\times n$ (bitta satr); Ustun matritsa o‘lchami $m \\times 1$ (bitta ustun)",
      "Satr matritsa $2 \\times n$, ustun matritsa $m \\times 2$"
    ],
    "answer": 2,
    "difficulty": "Oson",
    "explanation": "1-ma’ruza (8-slayd): Satr matritsa $(1 \\times n)$ bitta satrdan, ustun matritsa $(m \\times 1)$ esa bitta ustundan iborat bo‘ladi."
  },
  {
    "id": "T1_Q10",
    "topicId": 1,
    "num": 10,
    "question": "«Nol matritsa» ($O$ yoki $\\Theta$) deb qanday matritsaga aytiladi?",
    "options": [
      "Faqat bosh diagonali elementlari nolga teng bo‘lgan matritsaga",
      "Barcha elementlari nolga teng bo‘lgan matritsaga ($a_{ij} = 0$)",
      "Determinanti nolga teng bo‘lgan har qanday matritsaga",
      "Satrlari va ustunlari yig‘indisi nolga teng bo‘lgan matritsaga"
    ],
    "answer": 1,
    "difficulty": "Oson",
    "explanation": "1-ma’ruza (8-slayd): Barcha elementlari nollardan iborat bo‘lgan matritsa nol matritsa deyiladi."
  },
  {
    "id": "T1_Q11",
    "topicId": 1,
    "num": 11,
    "question": "Qanday kvadrat matritsaga «diagonal matritsa» deyiladi?",
    "options": [
      "Bosh diagonalidan tashqaridagi barcha elementlari nolga teng bo‘lgan ($a_{ij} = 0, i \\ne j$) kvadrat matritsaga",
      "Faqat bosh diagonali elementlari nolga teng bo‘lgan matritsaga",
      "Yordamchi diagonali elementlari $1$ ga teng bo‘lgan matritsaga",
      "Barcha elementlari bir xil sondan iborat bo‘lgan matritsaga"
    ],
    "answer": 0,
    "difficulty": "Oson",
    "explanation": "1-ma’ruza (8-slayd): Bosh diagonalidan tashqari barcha elementlari nolga teng bo‘lgan kvadrat matritsa diagonal matritsa deyiladi."
  },
  {
    "id": "T1_Q12",
    "topicId": 1,
    "num": 12,
    "question": "«Birlik matritsa» ($E$) deb qanday matritsaga aytiladi?",
    "options": [
      "O‘lchami $1 \\times 1$ bo‘lgan matritsaga",
      "Barcha elementlari $1$ ga teng bo‘lgan kvadrat matritsaga",
      "Determinanti $1$ ga teng bo‘lgan ixtiyoriy matritsaga",
      "Bosh diagonali elementlari $1$ ga teng bo‘lib, qolgan barcha elementlari $0$ ga teng bo‘lgan diagonal kvadrat matritsaga"
    ],
    "answer": 3,
    "difficulty": "Oson",
    "explanation": "1-ma’ruza (8-slayd): Bosh diagonalida $1$ lar, qolgan barcha joylarida $0$ lar turgan kvadrat matritsa birlik matritsa deyiladi."
  },
  {
    "id": "T1_Q13",
    "topicId": 1,
    "num": 13,
    "question": "Ikki $A$ va $B$ matritsa qachon o‘zaro teng ($A = B$) deyiladi?",
    "options": [
      "Ularning bosh diagonali elementlari yig‘indisi teng bo‘lganda",
      "Ularning elementlari soni teng bo‘lganda (masalan $2 \\times 3$ va $3 \\times 2$)",
      "Ularning o‘lchamlari bir xil bo‘lib, barcha mos joylaridagi elementlari o‘zaro teng bo‘lganda ($a_{ij} = b_{ij}$)",
      "Ularning determinantlari o‘zaro teng bo‘lganda ($\\det A = \\det B$)"
    ],
    "answer": 2,
    "difficulty": "O'rta",
    "explanation": "Ikki matritsa teng bo‘lishi uchun avvalo bir xil $m \\times n$ o‘lchamga ega bo‘lishi va barcha $i, j$ larda $a_{ij} = b_{ij}$ bo‘lishi shart."
  },
  {
    "id": "T1_Q14",
    "topicId": 1,
    "num": 14,
    "question": "Matritsalar ustida «chiziqli amallar» deb qaysi amallarga aytiladi?",
    "options": [
      "Matritsalarni bir-biriga ko‘paytirish va darajaga oshirish amallariga",
      "Matritsalarni qo‘shish, ayirish va matritsani songa ko‘paytirish amallariga",
      "Matritsani transponirlash va rangini hisoblash amallariga",
      "Determinant hisoblash va teskari matritsa topish amallariga"
    ],
    "answer": 1,
    "difficulty": "Oson",
    "explanation": "1-ma’ruza (10-slayd): Matritsalarni qo‘shish, ayirish va songa ko‘paytirish amallariga matritsalar ustida chiziqli amallar deyiladi."
  },
  {
    "id": "T1_Q15",
    "topicId": 1,
    "num": 15,
    "question": "Matritsalarni qo‘shish va ayirish amallari qanday matritsalar uchun aniqlangan va qanday bajariladi?",
    "options": [
      "Faqat bir xil o‘lchamli matritsalar uchun aniqlangan bo‘lib, ularning mos elementlari qo‘shiladi yoki ayriladi ($c_{ij} = a_{ij} \\pm b_{ij}$)",
      "Faqat kvadrat matritsalar uchun aniqlangan bo‘lib, diagonal elementlari qo‘shiladi",
      "Ixtiyoriy o‘lchamli matritsalar uchun aniqlangan bo‘lib, satrlar ustunlarga qo‘shiladi",
      "Birinchi matritsa ustunlari soni ikkinchi matritsa satrlari soniga teng bo‘lganda bajariladi"
    ],
    "answer": 0,
    "difficulty": "Oson",
    "explanation": "1-ma’ruza (11-12-slaydlar): Bir xil o‘lchamli matritsalarnigina qo‘shish va ayirish mumkin bo‘lib, bu amallar mos elementlar ustida bajariladi."
  },
  {
    "id": "T1_Q16",
    "topicId": 1,
    "num": 16,
    "question": "Matritsalar ustidagi chiziqli amallar qanday arifmetik qonunlarga bo‘ysunadi (10-slayd)?",
    "options": [
      "Qo‘shishda o‘rin almashtirilsa ishora qarama-qarshiga o‘zgaradi",
      "Faqat guruhlash qonuniga bo‘ysunadi, o‘rin almashtirish qonuniga bo‘ysunmaydi",
      "Hech qanday arifmetik qonunga bo‘ysunmaydi",
      "O‘rin almashtirish (kommutativlik), guruhlash (assotsiativlik) va taqsimot (distributivlik) qonunlariga bo‘ysunadi"
    ],
    "answer": 3,
    "difficulty": "Oson",
    "explanation": "1-ma’ruza (10-slayd): Chiziqli amallar o‘rin almashtirish ($A+B=B+A$), guruhlash ($A+(B+C)=(A+B)+C$) va taqsimot qonunlariga bo‘ysunadi."
  },
  {
    "id": "T1_Q17",
    "topicId": 1,
    "num": 17,
    "question": "Matritsalar ustidagi chiziqli amallarning 8 ta xossasiga ko‘ra, nol matritsa $\\Theta$ va qarama-qarshi matritsa $-A$ uchun qaysi tengliklar o‘rinli?",
    "options": [
      "$A + \\Theta = E,\\qquad A - A = 1$",
      "$A \\cdot \\Theta = A,\\qquad A + (-A) = E$",
      "$A + \\Theta = A,\\qquad A + (-A) = \\Theta,\\qquad 1 \\cdot A = A$",
      "$A + \\Theta = \\Theta,\\qquad A + (-A) = 2A,\\qquad 1 \\cdot A = E$"
    ],
    "answer": 2,
    "difficulty": "Oson",
    "explanation": "1-ma’ruza (10-slayd, 6, 7, 8-xossalar): $A + \\Theta = A$, $A + (-A) = \\Theta$ va $1 \\cdot A = A$."
  },
  {
    "id": "T1_Q18",
    "topicId": 1,
    "num": 18,
    "question": "Matritsani songa ko‘paytirish ta’rifi qaysi javobda to‘g‘ri bayon etilgan?",
    "options": [
      "Berilgan $k$ son faqat matritsaning bosh diagonali elementlariga ko‘paytiriladi",
      "Matritsani biror $k$ songa ko‘paytirish uchun berilgan son matritsaning HAR BIR elementiga ko‘paytiriladi ($c_{ij} = k \\cdot a_{ij}$)",
      "Berilgan $k$ son faqat matritsaning birinchi satri yoki birinchi ustuni elementlariga ko‘paytiriladi",
      "Matritsaning har bir elementiga $k$ soni qo‘shib chiqiladi"
    ],
    "answer": 1,
    "difficulty": "Oson",
    "explanation": "1-ma’ruza (15-16-slaydlar): Matritsani songa ko‘paytirishda berilgan son matritsaning har bir elementiga ko‘paytiriladi (determinantdan farqli ravishda!)."
  },
  {
    "id": "T1_Q19",
    "topicId": 1,
    "num": 19,
    "question": "Matritsani songa ko‘paytirishning taqsimot (distributivlik) va guruhlash xossalari qaysi qatorda to‘g‘ri ko‘rsatilgan?",
    "options": [
      "$k(A + B) = kA + kB,\\qquad (k + n)A = kA + nA,\\qquad k(nA) = (kn)A$",
      "$k(A + B) = k^2 A + k^2 B,\\qquad k(nA) = (k+n)A$",
      "$k(A + B) = (A + B)^k$",
      "$k(A + B) = kA + B,\\qquad (k + n)A = knA$"
    ],
    "answer": 0,
    "difficulty": "Oson",
    "explanation": "1-ma’ruza (10-slayd, 3, 4, 5-xossalar): Skalyar ko‘paytuvchiga nisbatan distributivlik va assotsiativlik xossalari o‘rinli."
  },
  {
    "id": "T1_Q20",
    "topicId": 1,
    "num": 20,
    "question": "Ikki matritsani ko‘paytirish ($A \\cdot B$) ta’rifi va mavjudlik sharti qanday?",
    "options": [
      "Ikki matritsa faqat bir xil o‘lchamli bo‘lganda ko‘paytiriladi va mos elementlari o‘zaro ko‘paytiriladi ($c_{ij} = a_{ij}b_{ij}$)",
      "Ixtiyoriy o‘lchamli ikki matritsani har doim ko‘paytirish mumkin",
      "Birinchi matritsaning satrlari soni ikkinchi matritsaning satrlari soniga teng bo‘lishi kerak",
      "Birinchi matritsaning ustunlari soni ikkinchi matritsaning satrlari soniga teng bo‘lishi kerak; satr elementlari mos ustun elementlariga ko‘paytirilib qo‘shiladi"
    ],
    "answer": 3,
    "difficulty": "Oson",
    "explanation": "1-ma’ruza (18-19-slaydlar): Matritsalarni ko‘paytirish uchun birinchi matritsaning ustunlari soni ikkinchi matritsaning satrlari soniga teng bo‘lishi kerak. Satrlar ustunlarga ko‘paytiriladi."
  },
  {
    "id": "T1_Q21",
    "topicId": 1,
    "num": 21,
    "question": "Agar $A$ matritsa $m \\times n$ o‘lchamli, $B$ matritsa esa $n \\times k$ o‘lchamli bo‘lsa, ularning ko‘paytmasi $C = A \\cdot B$ qanday o‘lchamga ega bo‘ladi?",
    "options": [
      "$m \\times n$ o‘lchamga ega bo‘ladi",
      "$n \\times n$ o‘lchamga ega bo‘ladi",
      "$m \\times k$ o‘lchamga ega bo‘ladi",
      "$k \\times m$ o‘lchamga ega bo‘ladi"
    ],
    "answer": 2,
    "difficulty": "Oson",
    "explanation": "$A_{m \\times n} \\cdot B_{n \\times k} = C_{m \\times k}$, ya’ni natijaviy matritsa birinchi matritsa satrlari soni ($m$) va ikkinchi matritsa ustunlari soni ($k$) ga ega bo‘ladi."
  },
  {
    "id": "T1_Q22",
    "topicId": 1,
    "num": 22,
    "question": "Matritsalarni ko‘paytirish amali o‘rin almashtirish (kommutativlik) qonuniga bo‘ysunadimi?",
    "options": [
      "Faqat $2 \\times 2$ matritsalar uchun har doim $AB = BA$ o‘rinli",
      "Umumiy holda bo‘ysunmaydi ($AB \\ne BA$); hatto $AB$ mavjud bo‘lganda $BA$ mavjud bo‘lmasligi ham mumkin",
      "Ko‘paytirishda o‘rin almashsa faqat ishora o‘zgaradi ($AB = -BA$)",
      "Ha, har qanday $A$ va $B$ matritsalar uchun $AB = BA$ tenglik doimo o‘rinli"
    ],
    "answer": 1,
    "difficulty": "O'rta",
    "explanation": "Matritsalarni ko‘paytirish nokommutativ amaldir: umumiy holda $AB \\ne BA$. Maxsus $AB = BA$ shartni qanoatlantiruvchi matritsalargina kommutativ (o‘rin almashinuvchi) matritsalar deyiladi."
  },
  {
    "id": "T1_Q23",
    "topicId": 1,
    "num": 23,
    "question": "Matritsalarni ko‘paytirish amalining 5 ta asosiy xossasi (21-slayd) qaysi javobda to‘liq va to‘g‘ri berilgan?",
    "options": [
      "$1^\\circ.\\;(kA)B = k(AB) = A(kB);\\quad 2^\\circ.\\;(A+B)C = AC+BC;\\quad 3^\\circ.\\;A(B+C) = AB+AC;\\quad 4^\\circ.\\;A(BC) = (AB)C;\\quad 5^\\circ.\\;AE = EA = A$",
      "$1^\\circ.\\;(kA)B = k^2 AB;\\quad 2^\\circ.\\;(A+B)C = A + BC;\\quad 3^\\circ.\\;AE = O$",
      "$1^\\circ.\\;A(BC) \\ne (AB)C;\\quad 2^\\circ.\\;AE \\ne EA$",
      "$1^\\circ.\\;AB = BA;\\quad 2^\\circ.\\;(AB)^2 = A^2 B^2;\\quad 3^\\circ.\\;AE = E;\\quad 4^\\circ.\\;A+E = A$"
    ],
    "answer": 0,
    "difficulty": "O'rta",
    "explanation": "1-ma’ruza (21-slayd): Ko‘paytirish amali skalyar ko‘paytuvchini chiqarish, chap va o‘ng taqsimot, guruhlash ($A(BC)=(AB)C$) hamda birlik matritsa ($AE=EA=A$) xossalariga ega."
  },
  {
    "id": "T1_Q24",
    "topicId": 1,
    "num": 24,
    "question": "Ikki nolmas matritsaning ko‘paytmasi nol matritsaga teng bo‘lishi ($A \\ne O, B \\ne O$, ammo $A \\cdot B = O$) mumkinmi?",
    "options": [
      "Faqat o‘lchami $1 \\times 1$ bo‘lgan matritsalarda shunday bo‘lishi mumkin",
      "Yo‘q, xuddi haqiqiy sonlardagi kabi $A \\cdot B = O$ bo‘lsa, albatta $A = O$ yoki $B = O$ bo‘lishi shart",
      "Faqat birlik matritsalar ko‘paytmasi nol matritsa bo‘ladi",
      "Ha, matritsalar algebrasida nolning bo‘luvchilari mavjud bo‘lib, ikki nolmas matritsa ko‘paytmasi nol matritsa bo‘lishi mumkin"
    ],
    "answer": 3,
    "difficulty": "Qiyin",
    "explanation": "Sonlardan farqli ravishda, ikki xos ($\\det = 0$) nolmas matritsaning ko‘paytmasi nol matritsa $\\Theta$ berishi mumkin."
  },
  {
    "id": "T1_Q25",
    "topicId": 1,
    "num": 25,
    "question": "Matritsani «transponirlash» deb nimaga aytiladi va u qanday belgilanadi?",
    "options": [
      "Matritsaning bosh va yordamchi diagonallarini o‘zaro almashtirishga aytiladi",
      "Matritsaning determinantini hisoblash amaliga aytiladi",
      "Matritsaning satr elementlarini mos ustun elementlariga, ustun elementlarini esa mos satr elementlariga almashtirishga aytiladi va $A^T$ kabi belgilanadi",
      "Matritsaning barcha elementlari ishorasini qarama-qarshiga almashtirishga aytiladi va $-A$ kabi belgilanadi"
    ],
    "answer": 2,
    "difficulty": "Oson",
    "explanation": "1-ma’ruza (22-24-slaydlar): Matritsani transponirlash deb uning satr elementlarini ustun elementlariga, ustun elementlarini esa satr elementlariga almashtirishga aytiladi."
  },
  {
    "id": "T1_Q26",
    "topicId": 1,
    "num": 26,
    "question": "Agar $A$ matritsa $m \\times n$ o‘lchamli bo‘lsa va uning $(i, j)$-elementi $a_{ij}$ bo‘lsa, transponirlangan $A^T$ matritsaning o‘lchami va $(j, i)$-elementi qanday bo‘ladi?",
    "options": [
      "O‘lchami $n \\times n$ bo‘ladi va $(A^T)_{ij} = 1/a_{ij}$ bo‘ladi",
      "O‘lchami $n \\times m$ bo‘ladi va $(A^T)_{ji} = a_{ij}$ tenglik bajariladi",
      "O‘lchami $m \\times m$ kvadrat shaklga keladi",
      "O‘lchami $m \\times n$ bo‘lib qoladi va $(A^T)_{ij} = -a_{ij}$ bo‘ladi"
    ],
    "answer": 1,
    "difficulty": "O'rta",
    "explanation": "1-ma’ruza (23-24-slaydlar): $m \\times n$ matritsa transponirlanganda satr va ustunlar soni o‘rin almashib, $n \\times m$ o‘lchamli matritsa hosil bo‘ladi."
  },
  {
    "id": "T1_Q27",
    "topicId": 1,
    "num": 27,
    "question": "Transponirlangan matritsaning 4 ta asosiy xossasi (25-slayd) qaysi javobda to‘g‘ri berilgan?",
    "options": [
      "$1^\\circ.\\;(A^T)^T = A;\\qquad 2^\\circ.\\;(A + B)^T = A^T + B^T;\\qquad 3^\\circ.\\;(kA)^T = kA^T;\\qquad 4^\\circ.\\;(AB)^T = B^T A^T$",
      "$1^\\circ.\\;(A^T)^T = A^2;\\qquad 2^\\circ.\\;(A + B)^T = A + B^T$",
      "$1^\\circ.\\;(A^T)^T = E;\\qquad 2^\\circ.\\;(kA)^T = \\frac{1}{k}A^T;\\qquad 4^\\circ.\\;(AB)^T = A^T B^T$",
      "$1^\\circ.\\;(A^T)^T = -A;\\qquad 2^\\circ.\\;(A + B)^T = A^T B^T;\\qquad 3^\\circ.\\;(AB)^T = A^T B^T$"
    ],
    "answer": 0,
    "difficulty": "O'rta",
    "explanation": "1-ma’ruza (25-slayd): Transponirlashning 4 ta fundamental xossasi, ayniqsa 4-xossa $(AB)^T = B^T A^T$ juda muhim."
  },
  {
    "id": "T1_Q28",
    "topicId": 1,
    "num": 28,
    "question": "Uchta mos o‘lchamli $A, B, C$ matritsalar ko‘paytmasini transponirlash $(ABC)^T$ nimaga teng?",
    "options": [
      "$(ABC)^T = B^T A^T C^T$",
      "$(ABC)^T = A^T B^T C^T$",
      "$(ABC)^T = C B A$",
      "$(ABC)^T = C^T B^T A^T$"
    ],
    "answer": 3,
    "difficulty": "O'rta",
    "explanation": "Ko‘paytmani transponirlash xossasiga ko‘ra $((AB)C)^T = C^T (AB)^T = C^T B^T A^T$."
  },
  {
    "id": "T1_Q29",
    "topicId": 1,
    "num": 29,
    "question": "Qanday kvadrat matritsaga «simmetrik matritsa» deyiladi?",
    "options": [
      "Satrlari soni juft bo‘lgan to‘g‘ri burchakli matritsaga",
      "Bosh diagonali elementlari o‘zaro teng bo‘lgan ixtiyoriy matritsaga",
      "Transponirlanganda o‘ziga teng bo‘lgan ($A^T = A$, ya’ni barcha $i, j$ lar uchun $a_{ij} = a_{ji}$) kvadrat matritsaga",
      "Transponirlanganda ishorasi qarama-qarshiga o‘zgaruvchi ($A^T = -A$) matritsaga"
    ],
    "answer": 2,
    "difficulty": "O'rta",
    "explanation": "Agar kvadrat matritsaning bosh diagonalga nisbatan simmetrik joylashgan elementlari o‘zaro teng bo‘lsa ($a_{ij} = a_{ji}$), u holda $A^T = A$ bo‘lib, u simmetrik matritsa deyiladi."
  },
  {
    "id": "T1_Q30",
    "topicId": 1,
    "num": 30,
    "question": "Umumiy holda ikkita kvadrat $A$ va $B$ matritsalar yig‘indisining kvadrati $(A + B)^2 = (A + B)(A + B)$ nimaga teng?",
    "options": [
      "$A^2 - B^2$ ga teng",
      "$A^2 + AB + BA + B^2$ ga teng (chunki umumiy holda $AB \\ne BA$)",
      "Har doim $A^2 + B^2$ ga teng",
      "Har doim $A^2 + 2AB + B^2$ ga teng"
    ],
    "answer": 1,
    "difficulty": "Qiyin",
    "explanation": "Taqsimot qonuniga ko‘ra $(A+B)(A+B) = A^2 + AB + BA + B^2$. Faqat $AB = BA$ (o‘rin almashinuvchi) bo‘lgandagina u $A^2 + 2AB + B^2$ ga aylanadi."
  },
  {
    "id": "T2_Q1",
    "topicId": 2,
    "num": 1,
    "question": "Determinant tushunchasi dastlab matematikaning qaysi masalasini yechishda foydalanilgan va keyinchalik qayerlarga tatbiq etilgan?",
    "options": [
      "Dastlab faqat geometrik shakllar perimetrini topishda ishlatilgan",
      "Dastlab chiziqli tenglamalar sistemasini yechishda foydalanilgan; keyinchalik xos sonlarni topishga, differensial tenglamalarni yechishga va vektor hisobiga keng tatbiq etilgan",
      "Dastlab sonlarni tub ko‘paytuvchilarga ajratish uchun kiritilgan",
      "Dastlab ehtimollar nazariyasida paydo bo‘lib, faqat statistikada qo‘llanilgan"
    ],
    "answer": 1,
    "difficulty": "Oson",
    "explanation": "2-ma’ruza (4-slayd): Determinant tushunchasidan dastlab chiziqli tenglamalar sistemasini yechishda foydalanilgan bo‘lib, keyinchalik xos sonlarni topishga, differensial tenglamalar va vektor hisobiga keng tatbiq etilgan."
  },
  {
    "id": "T2_Q2",
    "topicId": 2,
    "num": 2,
    "question": "Determinant qanday matritsalar uchun aniqlanadi va uning natijasi nima bo‘ladi?",
    "options": [
      "Faqat kvadrat ($n \\times n$) matritsalar uchun aniqlanadi va natijasi ma’lum qoida bo‘yicha hisoblanadigan yagona son bo‘ladi",
      "Faqat diagonal matritsalar uchun aniqlanadi",
      "Faqat ustun matritsalar uchun aniqlanadi va natijasi vektor bo‘ladi",
      "Ixtiyoriy $m \\times n$ to‘g‘ri burchakli matritsa uchun aniqlanadi va natijasi yangi matritsa bo‘ladi"
    ],
    "answer": 0,
    "difficulty": "Oson",
    "explanation": "Determinant faqat kvadrat matritsaga mos qo‘yiluvchi skalyar (son) miqdordir va $\\det(A)$, $|A|$ yoki $\\Delta$ kabi belgilanadi."
  },
  {
    "id": "T2_Q3",
    "topicId": 2,
    "num": 3,
    "question": "2-tartibli $\\begin{vmatrix} a_{11} & a_{12} \\\\ a_{21} & a_{22} \\end{vmatrix}$ determinant qaysi formula bilan aniqlanadi?",
    "options": [
      "$(a_{11} + a_{22}) - (a_{12} + a_{21})$",
      "$a_{11} \\cdot a_{22} + a_{12} \\cdot a_{21}$ (ikkala diagonal ko‘paytmalari qo‘shiladi)",
      "$a_{11} \\cdot a_{12} - a_{21} \\cdot a_{22}$ (satr elementlari ko‘paytmalari ayriladi)",
      "$a_{11} \\cdot a_{22} - a_{12} \\cdot a_{21}$ (bosh diagonal ko‘paytmasidan yordamchi diagonal ko‘paytmasi ayriladi)"
    ],
    "answer": 3,
    "difficulty": "Oson",
    "explanation": "2-ma’ruza (15-slayd): 2-tartibli determinant $\\Delta = a_{11} \\cdot a_{22} - a_{12} \\cdot a_{21}$ formula bilan aniqlanadi."
  },
  {
    "id": "T2_Q4",
    "topicId": 2,
    "num": 4,
    "question": "Determinantning 1-xossasi: Agar determinantning biror satr yoki biror ustun elementlarining barchasi nolga teng bo‘lsa, uning qiymati nimaga teng bo‘ladi?",
    "options": [
      "Aniqlab bo‘lmaydi",
      "Birga teng bo‘ladi ($\\Delta = 1$)",
      "Nolga teng bo‘ladi ($\\Delta = 0$)",
      "Qolgan satr elementlari ko‘paytmasiga teng bo‘ladi"
    ],
    "answer": 2,
    "difficulty": "Oson",
    "explanation": "2-ma’ruza (5-slayd, 1-xossa): Agar determinantning biror satr yoki biror ustun elementlarining barchasi nolga teng bo‘lsa, uning qiymati nolga teng bo‘ladi."
  },
  {
    "id": "T2_Q5",
    "topicId": 2,
    "num": 5,
    "question": "Determinantning 2-xossasi: Diagonal matritsaning determinanti nimaga teng?",
    "options": [
      "Diagonal elementlarining yig‘indisiga teng ($a_{11} + a_{22} + \\dots + a_{nn}$)",
      "Diagonal elementlarining ko‘paytmasiga teng ($a_{11} \\cdot a_{22} \\cdot \\dots \\cdot a_{nn}$)",
      "Har doim birga teng",
      "Har doim nolga teng"
    ],
    "answer": 1,
    "difficulty": "Oson",
    "explanation": "2-ma’ruza (6-slayd, 2-xossa): Diagonal matritsaning determinanti diagonal elementlarining ko‘paytmasiga teng."
  },
  {
    "id": "T2_Q6",
    "topicId": 2,
    "num": 6,
    "question": "Determinantning 3-xossasi: Yuqori yoki quyi uchburchakli matritsaning determinanti nimaga teng?",
    "options": [
      "Uning bosh diagonal elementlari ko‘paytmasiga teng ($a_{11} \\cdot a_{22} \\cdot \\dots \\cdot a_{nn}$)",
      "Bosh diagonal elementlari yig‘indisiga teng",
      "Uning yordamchi diagonal elementlari ko‘paytmasiga teng",
      "Noldan farqli barcha elementlari yig‘indisiga teng"
    ],
    "answer": 0,
    "difficulty": "Oson",
    "explanation": "2-ma’ruza (7-slayd, 3-xossa): Yuqori yoki quyi uchburchakli matritsaning determinanti uning bosh diagonal elementlari ko‘paytmasiga teng."
  },
  {
    "id": "T2_Q7",
    "topicId": 2,
    "num": 7,
    "question": "Determinantning 4-xossasi: Determinantning biror satr yoki biror ustun elementlarini $k \\ne 0$ songa ko‘paytirish qanday natijaga olib keladi?",
    "options": [
      "Determinantning qiymati $k$ ga bo‘linadi",
      "Determinantning qiymati $k^n$ marta ortadi",
      "Determinantning qiymati o‘zgarmaydi",
      "Determinantning qiymati shu $k$ songa ko‘payadi; aksincha, biror satr yoki ustunning umumiy ko‘paytuvchisini determinant belgisidan tashqariga chiqarish mumkin"
    ],
    "answer": 3,
    "difficulty": "Oson",
    "explanation": "2-ma’ruza (8-slayd, 4-xossa): Biror satr yoki ustun elementlarini $k$ songa ko‘paytirish determinantni shu songa ko‘paytirishga teng kuchlidir."
  },
  {
    "id": "T2_Q8",
    "topicId": 2,
    "num": 8,
    "question": "Matritsani $k$ songa ko‘paytirish bilan determinantni $k$ songa ko‘paytirish orasida qanday muhim nazariy farq bor?",
    "options": [
      "Determinantni songa ko‘paytirganda barcha elementlar shu songa ko‘paytiriladi",
      "Matritsani songa ko‘paytirganda faqat bosh diagonal elementlari ko‘paytiriladi",
      "Matritsani $k$ songa ko‘paytirganda barcha elementlar $k$ ga ko‘payadi ($\\det(kA) = k^n \\det A$); determinantni $k$ ga ko‘paytirganda esa faqat bitta satr yoki bitta ustun elementlari $k$ ga ko‘payadi",
      "Ikkala amal mutlaqo bir xil bajariladi va $\\det(kA) = k \\det(A)$ bo‘ladi"
    ],
    "answer": 2,
    "difficulty": "O'rta",
    "explanation": "$n$-tartibli $kA$ matritsada $n$ ta satrning har biri $k$ ga ko‘paygani uchun 4-xossaga ko‘ra har bir satrdan $k$ tashqariga chiqadi va $\\det(kA) = k^n \\det(A)$ bo‘ladi."
  },
  {
    "id": "T2_Q9",
    "topicId": 2,
    "num": 9,
    "question": "Determinantning 5-xossasi: Determinantda ikkita satr yoki ikkita ustun o‘rinlari mos ravishda almashtirilsa, determinant qanday o‘zgaradi?",
    "options": [
      "Determinantning qiymati teskari songa ($1/\\Delta$) aylanadi",
      "Determinantning ishorasi qarama-qarshiga o‘zgaradi ($\\Delta' = -\\Delta$)",
      "Determinantning qiymati nolga aylanadi",
      "Determinantning qiymati va ishorasi o‘zgarmaydi"
    ],
    "answer": 1,
    "difficulty": "Oson",
    "explanation": "2-ma’ruza (9-slayd, 5-xossa): Determinantda ikkita satr yoki ustun o‘rinlari mos ravishda almashtirilsa, determinantning ishorasi o‘zgaradi."
  },
  {
    "id": "T2_Q10",
    "topicId": 2,
    "num": 10,
    "question": "Determinantning 6-xossasi: Agar determinant ikkita bir xil satr yoki ikkita bir xil ustunga ega bo‘lsa, uning qiymati nimaga teng bo‘ladi?",
    "options": [
      "Nolga teng bo‘ladi ($\\Delta = 0$)",
      "Birga teng bo‘ladi ($\\Delta = 1$)",
      "Shu satr elementlari ko‘paytmasining ikki baravariga teng bo‘ladi",
      "Manfiy songa teng bo‘ladi"
    ],
    "answer": 0,
    "difficulty": "Oson",
    "explanation": "2-ma’ruza (10-slayd, 6-xossa): Agar determinant ikkita bir xil satr yoki ustunga ega bo‘lsa, uning qiymati nolga teng bo‘ladi."
  },
  {
    "id": "T2_Q11",
    "topicId": 2,
    "num": 11,
    "question": "Determinantning 7-xossasi: Agar determinantning biror satr (ustun) elementlariga boshqa bir satr (ustun)ning mos elementlarini ixtiyoriy songa ko‘paytirib qo‘shilsa, uning qiymati qanday o‘zgaradi?",
    "options": [
      "Uning ishorasi qarama-qarshiga o‘zgaradi",
      "Uning qiymati nolga teng bo‘lib qoladi",
      "Uning qiymati shu ko‘paytirilgan songa ko‘payadi",
      "Uning qiymati o‘zgarmaydi"
    ],
    "answer": 3,
    "difficulty": "Oson",
    "explanation": "2-ma’ruza (11-slayd, 7-xossa): Biror satr (ustun) elementlariga boshqa bir satr (ustun)ning mos elementlarini ixtiyoriy songa ko‘paytirib qo‘shilsa, determinantning qiymati o‘zgarmaydi."
  },
  {
    "id": "T2_Q12",
    "topicId": 2,
    "num": 12,
    "question": "Determinantning 8-xossasi: Agar determinantning ikki satr (ustun) elementlari mos ravishda proporsional bo‘lsa, uning qiymati nimaga teng bo‘ladi va nima uchun?",
    "options": [
      "Birga teng bo‘ladi",
      "Proporsionallik koeffitsiyenti kvadratiga teng bo‘ladi",
      "Nolga teng bo‘ladi ($\\Delta = 0$), chunki proporsionallik koeffitsiyentini tashqariga chiqarsak, ikkita bir xil satrli determinant hosil bo‘ladi",
      "Proporsionallik koeffitsiyenti $k$ ga teng bo‘ladi"
    ],
    "answer": 2,
    "difficulty": "O'rta",
    "explanation": "2-ma’ruza (12-slayd, 8-xossa): Ikki satr (ustun) proporsional bo‘lsa, 4 va 6-xossalarga ko‘ra $\\Delta = k \\cdot 0 = 0$ bo‘ladi."
  },
  {
    "id": "T2_Q13",
    "topicId": 2,
    "num": 13,
    "question": "Determinantning 9-xossasi: Matritsani transponirlash natijasida determinantning qiymati qanday o‘zgaradi?",
    "options": [
      "Ishorasi qarama-qarshiga o‘zgaradi: $\\det(A^T) = -\\det(A)$",
      "O‘zgarmaydi, ya’ni $\\det(A^T) = \\det(A)$",
      "Nolga teng bo‘ladi",
      "Teskari qiymatga aylanadi: $\\det(A^T) = 1/\\det(A)$"
    ],
    "answer": 1,
    "difficulty": "Oson",
    "explanation": "2-ma’ruza (13-slayd, 9-xossa): Transponirlash natijasida determinantning qiymati o‘zgarmaydi. Shu sababli satrlar uchun o‘rinli bo‘lgan barcha xossalar ustunlar uchun ham o‘rinli."
  },
  {
    "id": "T2_Q14",
    "topicId": 2,
    "num": 14,
    "question": "3-tartibli determinantning to‘liq yoyilmasi formulasida nechta ko‘paytma (had) ishtirok etadi?",
    "options": [
      "$6$ ta ko‘paytma: $3$ tasi plyus ($+$) ishora bilan va $3$ tasi minus ($-$) ishora bilan",
      "$3$ ta ko‘paytma: faqat diagonal elementlar",
      "$9$ ta ko‘paytma: barchasi plyus ishora bilan",
      "$4$ ta ko‘paytma: $2$ tasi plyus va $2$ tasi minus ishora bilan"
    ],
    "answer": 0,
    "difficulty": "Oson",
    "explanation": "2-ma’ruza (16-slayd): $\\Delta = a_{11}a_{22}a_{33} + a_{13}a_{21}a_{32} + a_{12}a_{23}a_{31} - (a_{13}a_{22}a_{31} + a_{11}a_{23}a_{32} + a_{12}a_{21}a_{33})$."
  },
  {
    "id": "T2_Q15",
    "topicId": 2,
    "num": 15,
    "question": "3-tartibli determinantni hisoblashning «Uchburchak qoidasi»da qaysi elementlar ko‘paytmasi musbat (plyus) ishora bilan olinadi?",
    "options": [
      "Faqat burchaklarda joylashgan 4 ta element ko‘paytmasi",
      "Yordamchi diagonal elementlari ko‘paytmasi hamda asosi yordamchi diagonalga parallel bo‘lgan ikkita uchburchak uchlaridagi elementlar ko‘paytmalari",
      "1-satr, 2-satr va 3-satr elementlarining o‘zaro ko‘paytmalari",
      "Bosh diagonal elementlari ko‘paytmasi hamda asosi bosh diagonalga parallel bo‘lgan ikkita uchburchak uchlaridagi elementlar ko‘paytmalari"
    ],
    "answer": 3,
    "difficulty": "O'rta",
    "explanation": "2-ma’ruza (17, 19-slaydlar): Uchburchak qoidasida bosh diagonal va unga parallel asosli 2 ta uchburchak plyus, yordamchi diagonal va unga parallel asosli 2 ta uchburchak minus ishora bilan olinadi."
  },
  {
    "id": "T2_Q16",
    "topicId": 2,
    "num": 16,
    "question": "3-tartibli determinantni hisoblashning «Sarrius qoidasi» qanday amalga oshiriladi?",
    "options": [
      "Determinant ostiga 2- va 3-satrlar teskari tartibda yozilib, ustunlar yig‘indisi olinadi",
      "Determinant 2-tartibli determinantga bo‘lib yuboriladi",
      "Determinant ostiga 1- va 2-satrlar qaytadan ko‘chirib yoziladi, so‘ngra bosh diagonalga parallel 3 ta chiziq ko‘paytmalari qo‘shilib, yordamchi diagonalga parallel 3 ta chiziq ko‘paytmalari ayriladi",
      "Barcha satr elementlari qo‘shib chiqiladi"
    ],
    "answer": 2,
    "difficulty": "Oson",
    "explanation": "2-ma’ruza (18, 20-slaydlar): Sarrius sxemasida determinant ostiga dastlabki ikkita satr ($a_{11}, a_{12}, a_{13}$ va $a_{21}, a_{22}, a_{23}$) yozilib, 3 ta asosiy va 3 ta yordamchi diagonal chiziqlari bo‘yicha ko‘paytmalar hisoblanadi."
  },
  {
    "id": "T2_Q17",
    "topicId": 2,
    "num": 17,
    "question": "Determinantning $a_{ij}$ elementiga mos «minor» ($M_{ij}$) deb nimaga aytiladi?",
    "options": [
      "$a_{ij}$ elementning $(-1)^{i+j}$ ga ko‘paytmasiga",
      "$n$-tartibli determinantda $a_{ij}$ element turgan $i$-satr va $j$-ustunni o‘chirishdan qolgan $(n-1)$-tartibli determinantga",
      "$i$-satr va $j$-ustun elementlarining skalyar ko‘paytmasiga",
      "Determinantning eng kichik elementiga"
    ],
    "answer": 1,
    "difficulty": "Oson",
    "explanation": "2-ma’ruza (21-slayd): $M_{ij}$ minor deb $i$-satr va $j$-ustunni o‘chirishdan hosil bo‘lgan $(n-1)$-tartibli determinantga aytiladi."
  },
  {
    "id": "T2_Q18",
    "topicId": 2,
    "num": 18,
    "question": "Determinantning $a_{ij}$ elementiga mos «algebraik to‘ldiruvchi» ($A_{ij}$) deb nimaga aytiladi?",
    "options": [
      "$A_{ij} = (-1)^{i+j} M_{ij}$ formula bilan aniqlanuvchi miqdorga, ya’ni $(-1)^{i+j}$ ishora bilan olingan $M_{ij}$ minorga",
      "$A_{ij} = (-1)^{i \\cdot j} M_{ij}$ formula bilan aniqlanuvchi miqdorga",
      "$A_{ij} = \\Delta - M_{ij}$ ayirmaga",
      "$A_{ij} = a_{ij} \\cdot M_{ij}$ ko‘paytmaga"
    ],
    "answer": 0,
    "difficulty": "Oson",
    "explanation": "2-ma’ruza (21-22-slaydlar): $A_{ij} = (-1)^{i+j} M_{ij}$."
  },
  {
    "id": "T2_Q19",
    "topicId": 2,
    "num": 19,
    "question": "$a_{ij}$ elementning algebraik to‘ldiruvchisi $A_{ij}$ va minori $M_{ij}$ qachon o‘zaro teng ($A_{ij} = M_{ij}$) va qachon qarama-qarshi ishorali ($A_{ij} = -M_{ij}$) bo‘ladi?",
    "options": [
      "$a_{ij} > 0$ bo‘lsa $A_{ij} = M_{ij}$, $a_{ij} < 0$ bo‘lsa $A_{ij} = -M_{ij}$ bo‘ladi",
      "Indekslar ko‘paytmasi $i \\cdot j$ juft bo‘lsa $A_{ij} = M_{ij}$, toq bo‘lsa $A_{ij} = -M_{ij}$ bo‘ladi",
      "Har doim $A_{ij} = M_{ij}$ bo‘ladi",
      "Indekslar yig‘indisi $i + j$ juft bo‘lsa $A_{ij} = M_{ij}$; agar $i + j$ toq bo‘lsa $A_{ij} = -M_{ij}$ bo‘ladi"
    ],
    "answer": 3,
    "difficulty": "Oson",
    "explanation": "$(-1)^{i+j}$ daraja ko‘rsatkichi $i+j$ juft bo‘lganda $+1$ ga, toq bo‘lganda esa $-1$ ga teng."
  },
  {
    "id": "T2_Q20",
    "topicId": 2,
    "num": 20,
    "question": "Birlik matritsa $E$ ning determinanti $\\det(E)$ nimaga teng?",
    "options": [
      "$\\det(E) = (-1)^n$ ga teng",
      "$\\det(E) = 0$ ga teng",
      "Har qanday $n$ tartib uchun $\\det(E) = 1$ ga teng",
      "$\\det(E) = n$ ga teng"
    ],
    "answer": 2,
    "difficulty": "Oson",
    "explanation": "Birlik matritsa diagonal matritsa bo‘lib, uning barcha diagonal elementlari $1$ ga teng. 2-xossaga ko‘ra $\\det(E) = 1 \\cdot 1 \\cdot \\dots \\cdot 1 = 1$."
  },
  {
    "id": "T2_Q21",
    "topicId": 2,
    "num": 21,
    "question": "Agar determinantning biror satri elementlari ikki qo‘shiluvchining yig‘indisidan ($a_{i1}+b_{i1},\\; a_{i2}+b_{i2},\\; \\dots,\\; a_{in}+b_{in}$) iborat bo‘lsa, determinant qanday xossaga ega?",
    "options": [
      "Ikkita determinantning ko‘paytmasiga teng",
      "Bunday determinant mos ravishda $i$-satrida $a_{ij}$ va $b_{ij}$ elementlar turgan, qolgan satrlari esa o‘zgarmagan ikkita determinantning yig‘indisiga teng",
      "Qiymati nolga teng bo‘ladi",
      "Barcha satrlari qo‘shilgan ikkita matritsa determinantlari yig‘indisiga ($\\det(A+B) = \\det A + \\det B$) teng"
    ],
    "answer": 1,
    "difficulty": "O'rta",
    "explanation": "Determinant chiziqlilik xossasiga ko‘ra bitta satr (yoki ustun) bo‘yicha ikkita determinant yig‘indisiga ajraladi (ammo umuman $\\det(A+B) \\ne \\det A + \\det B$)."
  },
  {
    "id": "T2_Q22",
    "topicId": 2,
    "num": 22,
    "question": "Ikki bir xil tartibli kvadrat $A$ va $B$ matritsalar ko‘paytmasining determinanti $\\det(A \\cdot B)$ nimaga teng?",
    "options": [
      "Ularning determinantlari ko‘paytmasiga teng: $\\det(A \\cdot B) = \\det(A) \\cdot \\det(B)$",
      "$\\det(A \\cdot B) = \\det(A) - \\det(B)$",
      "Ko‘paytma determinanti faqat diagonal matritsalar uchun topiladi",
      "Ularning determinantlari yig‘indisiga teng: $\\det(A \\cdot B) = \\det(A) + \\det(B)$"
    ],
    "answer": 0,
    "difficulty": "O'rta",
    "explanation": "Ko‘paytmaning determinanti haqidagi teoremaga ko‘ra $\\det(AB) = \\det(A) \\cdot \\det(B)$."
  },
  {
    "id": "T2_Q23",
    "topicId": 2,
    "num": 23,
    "question": "Agar determinantda satrlar (yoki ustunlar) o‘rni ketma-ket $k$ marta almashtirilsa, determinantning ishorasi qanday o‘zgaradi?",
    "options": [
      "Har doim minus ishoraga o‘zgaradi",
      "Har doim plyus ishoraga o‘zgaradi",
      "$k$ marta ortadi",
      "$(-1)^k$ ko‘paytuvchiga ko‘payadi (ya’ni $k$ juft bo‘lsa ishora saqlanadi, $k$ toq bo‘lsa qarama-qarshiga o‘zgaradi)"
    ],
    "answer": 3,
    "difficulty": "O'rta",
    "explanation": "5-xossaga ko‘ra har bitta o‘rin almashtirishda determinant $(-1)$ ga ko‘payadi, $k$ marta almashtirilganda esa $(-1)^k$ ga ko‘payadi."
  },
  {
    "id": "T2_Q24",
    "topicId": 2,
    "num": 24,
    "question": "Agar determinantning biror satri qolgan satrlarining chiziqli kombinatsiyasidan iborat bo‘lsa, determinantning qiymati nimaga teng bo‘ladi?",
    "options": [
      "Chiziqli kombinatsiya koeffitsiyentlari ko‘paytmasiga teng bo‘ladi",
      "Birga teng bo‘ladi",
      "Nolga teng bo‘ladi ($\\Delta = 0$)",
      "Chiziqli kombinatsiya koeffitsiyentlari yig‘indisiga teng bo‘ladi"
    ],
    "answer": 2,
    "difficulty": "O'rta",
    "explanation": "7-xossaga ko‘ra qolgan satrlarni mos koeffitsiyentlar bilan ayirib tashlasak, ushbu satr to‘liq nol satrga aylanadi va 1-xossaga ko‘ra $\\Delta = 0$ bo‘ladi."
  },
  {
    "id": "T2_Q25",
    "topicId": 2,
    "num": 25,
    "question": "Uchinchi tartibli determinantda $M_{23}$ minori qaysi elementlardan tuzilgan 2-tartibli determinant hisoblanadi?",
    "options": [
      "1-satr va 1-ustunni o‘chirishdan qolgan $\\begin{vmatrix} a_{22} & a_{23} \\\\ a_{32} & a_{33} \\end{vmatrix}$ determinant",
      "2-satr va 3-ustunni o‘chirishdan qolgan $\\begin{vmatrix} a_{11} & a_{12} \\\\ a_{31} & a_{32} \\end{vmatrix}$ determinant",
      "3-satr va 2-ustunni o‘chirishdan qolgan $\\begin{vmatrix} a_{11} & a_{13} \\\\ a_{21} & a_{23} \\end{vmatrix}$ determinant",
      "2-satr va 2-ustunni o‘chirishdan qolgan determinant"
    ],
    "answer": 1,
    "difficulty": "O'rta",
    "explanation": "2-ma’ruza (22-slayd): $M_{23}$ da birinchi indeks $2$ — o‘chiriladigan satrni, ikkinchi indeks $3$ — o‘chiriladigan ustunni bildiradi."
  },
  {
    "id": "T2_Q26",
    "topicId": 2,
    "num": 26,
    "question": "Kvadrat $A$ matritsaning darajasi $A^m$ ($m \\in \\mathbb{N}$) ning determinanti $\\det(A^m)$ nimaga teng?",
    "options": [
      "$(\\det A)^m$ ga teng",
      "$(\\det A)^{1/m}$ ga teng",
      "$\\det(mA)$ ga teng",
      "$m \\cdot \\det(A)$ ga teng"
    ],
    "answer": 0,
    "difficulty": "Oson",
    "explanation": "Ko‘paytma determinanti xossasiga ko‘ra $\\det(A^m) = \\det(A \\cdot A \\cdot \\dots \\cdot A) = (\\det A)^m$."
  },
  {
    "id": "T2_Q27",
    "topicId": 2,
    "num": 27,
    "question": "Agar $n$-tartibli kvadrat matritsaning barcha elementlari ishorasi qarama-qarshiga o‘zgartirilsa ($-A$ matritsa), uning determinanti $\\det(-A)$ nimaga teng bo‘ladi?",
    "options": [
      "Har doim $-\\det(A)$ ga teng",
      "Har doim $\\det(A)$ ga teng",
      "Nolga teng",
      "$(-1)^n \\det(A)$ ga teng (ya’ni $n$ juft bo‘lsa $\\det(A)$ ga, $n$ toq bo‘lsa $-\\det(A)$ ga teng)"
    ],
    "answer": 3,
    "difficulty": "O'rta",
    "explanation": "$-A = (-1) \\cdot A$ bo‘lgani uchun har bir $n$ ta satrdan $(-1)$ ko‘paytuvchi chiqib, $\\det(-A) = (-1)^n \\det(A)$ bo‘ladi."
  },
  {
    "id": "T2_Q28",
    "topicId": 2,
    "num": 28,
    "question": "Yordamchi diagonali ustidagi (yoki ostidagi) barcha elementlari nolga teng bo‘lgan $n$-tartibli uchburchak determinantning qiymati nimaga teng?",
    "options": [
      "Har doim plyus ishora bilan olingan yordamchi diagonal elementlari ko‘paytmasiga",
      "Bosh diagonal elementlari ko‘paytmasiga",
      "$(-1)^{\\frac{n(n-1)}{2}} \\cdot a_{1n} a_{2,n-1} \\dots a_{n1}$ ga, ya’ni ishora ko‘paytuvchisi bilan olingan yordamchi diagonal elementlari ko‘paytmasiga",
      "Har doim nolga teng"
    ],
    "answer": 2,
    "difficulty": "Qiyin",
    "explanation": "Ustunlarni teskari tartibda joylashtirish uchun $\\frac{n(n-1)}{2}$ marta o‘rin almashtirish bajariladi va bosh diagonal ko‘paytmasiga keladi."
  },
  {
    "id": "T2_Q29",
    "topicId": 2,
    "num": 29,
    "question": "Kososimmetrik ($A^T = -A$) matritsaning tartibi $n$ toq son bo‘lsa (masalan $n = 3$ yoki $n = 5$), uning determinanti har doim nimaga teng bo‘ladi?",
    "options": [
      "Har doim $1$ ga teng bo‘ladi",
      "Har doim $0$ ga teng bo‘ladi (chunki $\\det(A) = \\det(A^T) = \\det(-A) = (-1)^n \\det(A) = -\\det(A) \\implies \\det(A) = 0$)",
      "Har doim $-1$ ga teng bo‘ladi",
      "Bosh diagonal elementlari ko‘paytmasiga teng bo‘ladi"
    ],
    "answer": 1,
    "difficulty": "Qiyin",
    "explanation": "9 va 4-xossalarga ko‘ra toq tartibli kososimmetrik matritsa uchun $\\det(A) = -\\det(A) \\implies 2\\det(A) = 0 \\implies \\det(A) = 0$ (Yakobi teoremasi)."
  },
  {
    "id": "T2_Q30",
    "topicId": 2,
    "num": 30,
    "question": "Determinantning 7-xossasini qo‘llashda o‘zgartirilayotgan satrning o‘zini biror $k \\ne 1$ songa ko‘paytirib, unga boshqa satrni qo‘shish determinant qiymatini o‘zgartiradimi?",
    "options": [
      "Ha, o‘zgartiradi: o‘zgartirilayotgan satrning o‘zi $k$ ga ko‘paytirilsa, determinant ham $k$ marta ortib ketadi! 7-xossada o‘zgartirilayotgan satrning o‘zi $1$ koeffitsiyent bilan qolishi shart",
      "Determinant nolga aylanib qoladi",
      "Yo‘q, har qanday holatda ham determinant o‘zgarmaydi",
      "Faqat ishorasi o‘zgaradi"
    ],
    "answer": 0,
    "difficulty": "Qiyin",
    "explanation": "Bu talabalar eng ko‘p xato qiladigan nuqta: 7-xossada $R_i \\leftarrow R_i + k R_j$ da determinant o‘zgarmaydi, ammo $R_i \\leftarrow m R_i + k R_j$ qilinsa, determinant $m$ marta ortib ketadi!"
  },
  {
    "id": "T3_Q1",
    "topicId": 3,
    "num": 1,
    "question": "Qanday kvadrat matritsaga «xos matritsa» (maxsus matritsa) deyiladi?",
    "options": [
      "Determinanti nolga teng bo‘lgan ($\\det(A) = 0$) kvadrat matritsaga",
      "Barcha elementlari musbat bo‘lgan matritsaga",
      "Determinanti noldan farqli bo‘lgan ($\\det(A) \\ne 0$) kvadrat matritsaga",
      "Determinanti $1$ ga teng bo‘lgan kvadrat matritsaga"
    ],
    "answer": 0,
    "difficulty": "Oson",
    "explanation": "3-ma’ruza (4-slayd): Kvadrat matritsaning determinanti nolga teng bo‘lsa, u holda bunday matritsaga xos matritsa deyiladi."
  },
  {
    "id": "T3_Q2",
    "topicId": 3,
    "num": 2,
    "question": "Qanday kvadrat matritsaga «xosmas matritsa» (maxsusmas matritsa) deyiladi?",
    "options": [
      "Determinanti nolga teng bo‘lgan ($\\det(A) = 0$) kvadrat matritsaga",
      "Nol matritsaga",
      "Satr va ustunlari soni har xil bo‘lgan to‘g‘ri burchakli matritsaga",
      "Determinanti noldan farqli bo‘lgan ($\\det(A) \\ne 0$) kvadrat matritsaga"
    ],
    "answer": 3,
    "difficulty": "Oson",
    "explanation": "3-ma’ruza (4-slayd): Determinanti noldan farqli bo‘lgan kvadrat matritsaga xosmas matritsa deyiladi."
  },
  {
    "id": "T3_Q3",
    "topicId": 3,
    "num": 3,
    "question": "$A$ kvadrat matritsaga «qo‘shma matritsa» ($\\bar{A}$) deb qanday matritsaga aytiladi?",
    "options": [
      "$A$ matritsani $(-1)$ songa ko‘paytirishdan hosil bo‘lgan matritsaga",
      "$A$ matritsaning har bir elementini uning minori $M_{ij}$ bilan almashtirilgan va transponirlanmagan matritsaga",
      "$A$ matritsaning har bir $a_{ij}$ elementini unga mos $A_{ij}$ algebraik to‘ldiruvchisi bilan almashtirishdan tuzilgan matritsani transponirlash natijasida hosil bo‘lgan matritsaga",
      "$A$ matritsaning satrlarini teskari tartibda yozishdan hosil bo‘lgan matritsaga"
    ],
    "answer": 2,
    "difficulty": "Oson",
    "explanation": "3-ma’ruza (5-slayd): Har bir $a_{ij}$ elementni unga mos algebraik to‘ldiruvchisi bilan almashtirishdan tuzilgan matritsani transponirlash natijasida hosil bo‘lgan matritsa qo‘shma matritsa $\\bar{A}$ deyiladi."
  },
  {
    "id": "T3_Q4",
    "topicId": 3,
    "num": 4,
    "question": "Qo‘shma matritsa $\\bar{A}$ ning 1-satri qaysi algebraik to‘ldiruvchilardan tashkil topadi?",
    "options": [
      "Bosh diagonal algebraik to‘ldiruvchilaridan: $(A_{11},\\; A_{22},\\; \\dots,\\; A_{nn})$",
      "Transponirlangani sababli 1-ustun elementlarining algebraik to‘ldiruvchilaridan: $(A_{11},\\; A_{21},\\; \\dots,\\; A_{n1})$",
      "Oxirgi satr algebraik to‘ldiruvchilaridan",
      "1-satr elementlarining algebraik to‘ldiruvchilaridan: $(A_{11},\\; A_{12},\\; \\dots,\\; A_{1n})$"
    ],
    "answer": 1,
    "difficulty": "O'rta",
    "explanation": "3-ma’ruza (5-6-slaydlar): Algebraik to‘ldiruvchilar matritsasi transponirlanganda 1-ustun $(A_{11}, A_{21}, \\dots, A_{n1})^T$ qo‘shma matritsaning 1-satriga aylanadi."
  },
  {
    "id": "T3_Q5",
    "topicId": 3,
    "num": 5,
    "question": "$A$ kvadrat matritsaga «teskari matritsa» ($A^{-1}$) deb qanday matritsaga aytiladi?",
    "options": [
      "$A A^{-1} = A^{-1} A = E$ tenglikni qanoatlantiruvchi kvadrat matritsaga (bu yerda $E$ — birlik matritsa)",
      "$A + A^{-1} = O$ tenglikni qanoatlantiruvchi matritsaga",
      "$A \\cdot A^{-1} = O$ tenglikni qanoatlantiruvchi matritsaga",
      "Har bir elementi $1 / a_{ij}$ ga teng bo‘lgan matritsaga"
    ],
    "answer": 0,
    "difficulty": "Oson",
    "explanation": "3-ma’ruza (6-slayd): $A$ kvadrat matritsa uchun $AA^{-1} = A^{-1}A = E$ tenglik bajarilsa, $A^{-1}$ matritsa $A$ matritsaga teskari matritsa deyiladi."
  },
  {
    "id": "T3_Q6",
    "topicId": 3,
    "num": 6,
    "question": "Kvadrat $A$ matritsa uchun teskari matritsa $A^{-1}$ mavjud bo‘lishining zarur va yetarli sharti nima?",
    "options": [
      "$A$ matritsa simmetrik ($A^T = A$) bo‘lishi",
      "$A$ matritsaning barcha elementlari noldan farqli bo‘lishi",
      "$A$ matritsa xos bo‘lishi, ya’ni $\\det(A) = 0$ bo‘lishi",
      "$A$ matritsa xosmas bo‘lishi, ya’ni $\\det(A) \\ne 0$ bo‘lishi"
    ],
    "answer": 3,
    "difficulty": "Oson",
    "explanation": "3-ma’ruza (6-slayd, Izoh): Xosmas matritsa ($\\det(A) \\ne 0$) uchun teskari matritsa mavjud. Xos matritsaga teskari matritsa mavjud emas."
  },
  {
    "id": "T3_Q7",
    "topicId": 3,
    "num": 7,
    "question": "Teskari matritsani determinant va qo‘shma matritsa orqali topish formulasi qaysi javobda to‘g‘ri berilgan?",
    "options": [
      "$A^{-1} = \\frac{1}{\\det(A)} A^T$",
      "$A^{-1} = -\\frac{1}{\\det(A)} A$",
      "$A^{-1} = \\frac{1}{\\det(A)} \\bar{A} \\quad (\\det(A) \\ne 0)$",
      "$A^{-1} = \\det(A) \\cdot \\bar{A}$"
    ],
    "answer": 2,
    "difficulty": "Oson",
    "explanation": "3-ma’ruza (6-slayd): $A^{-1} = \\frac{1}{\\det(A)} \\bar{A}$."
  },
  {
    "id": "T3_Q8",
    "topicId": 3,
    "num": 8,
    "question": "Teskari matritsaning 1-xossasi: Teskari matritsa determinanti $\\det(A^{-1})$ bilan boshlang‘ich matritsa determinanti $\\det(A)$ orasida qanday bog‘lanish bor?",
    "options": [
      "$\\det(A^{-1}) = \\det(A)$",
      "$\\det(A^{-1}) = \\frac{1}{\\det(A)}$",
      "$\\det(A^{-1}) = -\\det(A)$",
      "$\\det(A^{-1}) = (\\det A)^2$"
    ],
    "answer": 1,
    "difficulty": "Oson",
    "explanation": "3-ma’ruza (7-slayd, 1-xossa): $AA^{-1} = E \\implies \\det(A)\\det(A^{-1}) = 1 \\implies \\det(A^{-1}) = \\frac{1}{\\det(A)}$."
  },
  {
    "id": "T3_Q9",
    "topicId": 3,
    "num": 9,
    "question": "Teskari matritsaning 2 va 3-xossalariga ko‘ra, $(A^{-1})^{-1}$ va $(A^p)^{-1}$ ifodalar nimaga teng?",
    "options": [
      "$(A^{-1})^{-1} = A\\quad$ va $\\quad (A^p)^{-1} = (A^{-1})^p$",
      "$(A^{-1})^{-1} = -A\\quad$ va $\\quad (A^p)^{-1} = -A^{-p}$",
      "$(A^{-1})^{-1} = E\\quad$ va $\\quad (A^p)^{-1} = p A^{-1}$",
      "$(A^{-1})^{-1} = A^T\\quad$ va $\\quad (A^p)^{-1} = A^p$"
    ],
    "answer": 0,
    "difficulty": "Oson",
    "explanation": "3-ma’ruza (7-slayd, 2 va 3-xossalar): $(A^{-1})^{-1} = A$ va $(A^p)^{-1} = (A^{-1})^p$."
  },
  {
    "id": "T3_Q10",
    "topicId": 3,
    "num": 10,
    "question": "Teskari matritsaning 4 va 5-xossalariga ko‘ra, ko‘paytmaning teskarisi $(AB)^{-1}$ va transponirlangan matritsaning teskarisi $(A^T)^{-1}$ nimaga teng?",
    "options": [
      "$(AB)^{-1} = A^{-1} B^{-1}\\quad$ va $\\quad (A^T)^{-1} = A$",
      "$(AB)^{-1} = (BA)^{-1}\\quad$ va $\\quad (A^T)^{-1} = -A^{-1}$",
      "$(AB)^{-1} = B^T A^T\\quad$ va $\\quad (A^T)^{-1} = A^T$",
      "$(AB)^{-1} = B^{-1} A^{-1}\\quad$ va $\\quad (A^T)^{-1} = (A^{-1})^T$"
    ],
    "answer": 3,
    "difficulty": "Oson",
    "explanation": "3-ma’ruza (7-slayd, 4 va 5-xossalar): $(AB)^{-1} = B^{-1}A^{-1}$ va $(A^{-1})^T = (A^T)^{-1}$."
  },
  {
    "id": "T3_Q11",
    "topicId": 3,
    "num": 11,
    "question": "Teskari matritsani topishning «Gauss-Jordan usuli» mohiyati nimadan iborat?",
    "options": [
      "$A$ matritsaning barcha minorlari Sarrius qoidasi bilan hisoblanadi",
      "$(A \\mid B)$ matritsa tuzilib, uchburchak shaklga keltiriladi",
      "$(A \\mid E)$ blok-matritsa tuzilib, elementar satr almashtirishlari yordamida chap blok birlik matritsa $E$ ga keltirilganda, o‘ng blokda $A^{-1}$ hosil bo‘ladi: $(A \\mid E) \\sim (E \\mid A^{-1})$",
      "$A$ matritsadan birlik matritsa $E$ ayirib tashlanadi"
    ],
    "answer": 2,
    "difficulty": "Oson",
    "explanation": "3-ma’ruza (11-slayd): Teskari matritsani topishning Gauss-Jordan usuli $(A \\mid E) \\sim (E \\mid A^{-1})$ sxemaga asoslanadi."
  },
  {
    "id": "T3_Q12",
    "topicId": 3,
    "num": 12,
    "question": "$m \\times n$ o‘lchovli $A$ matritsaning «matritsa osti minori» va uning «tartibi» deb nimaga aytiladi?",
    "options": [
      "Matritsaning barcha elementlari ko‘paytmasiga osti minori, elementlar soniga esa uning tartibi deyiladi",
      "Bir nechta satr yoki ustunlarni o‘chirishdan hosil bo‘lgan kvadrat matritsa determinantiga osti minori, shu kvadrat matritsaning tartibiga esa osti minorining tartibi deyiladi",
      "Faqat $1 \\times 1$ o‘lchamli elementlarga osti minori deyiladi",
      "Matritsaning satrlari va ustunlari ayirmasiga aytiladi"
    ],
    "answer": 1,
    "difficulty": "Oson",
    "explanation": "3-ma’ruza (12-slayd): $m \\times n$ o‘lchovli $A$ matritsaning bir nechta satr yoki ustunlarini o‘chirishdan hosil bo‘lgan kvadrat matritsa determinantiga matritsa osti minori deyiladi."
  },
  {
    "id": "T3_Q13",
    "topicId": 3,
    "num": 13,
    "question": "Agar berilgan matritsa kvadrat shaklda ($n \\times n$) bo‘lsa, uning eng katta tartibli osti minori nimaga teng (12-slayd)?",
    "options": [
      "Berilgan kvadrat matritsaning o‘z determinantiga teng ($n$-tartibli)",
      "Har doim $0$ ga teng",
      "$1$-tartibli minorga teng",
      "$(n-1)$-tartibli minorga teng"
    ],
    "answer": 0,
    "difficulty": "Oson",
    "explanation": "3-ma’ruza (12-slayd): Agar berilgan matritsa kvadrat shaklda bo‘lsa, uning eng katta tartibli minori o‘ziga (o‘z determinantiga) teng."
  },
  {
    "id": "T3_Q14",
    "topicId": 3,
    "num": 14,
    "question": "$A$ matritsaning «rangi» ($\\text{rang}(A)$ yoki $r(A)$) deb nimaga aytiladi?",
    "options": [
      "Matritsaning eng katta elementiga aytiladi",
      "Uning noldan farqli barcha osti minorlari qiymatlari yig‘indisiga aytiladi",
      "Matritsadagi jami satrlar va ustunlar soni ko‘paytmasiga aytiladi",
      "Uning noldan farqli eng katta osti minori tartibiga aytiladi"
    ],
    "answer": 3,
    "difficulty": "Oson",
    "explanation": "3-ma’ruza (13-slayd): $A$ matritsaning rangi deb, uning noldan farqli eng katta minori tartibiga aytiladi va $\\text{rang}(A)$ yoki $r(A)$ kabi belgilanadi."
  },
  {
    "id": "T3_Q15",
    "topicId": 3,
    "num": 15,
    "question": "Matritsaning «elementar almashtirishlari» (15-17-slaydlar) deb qanday 5 ta amalga aytiladi?",
    "options": [
      "1) Matritsani kvadratga oshirish; 2) Barcha elementlarga son qo‘shish; 3) Diagonalni o‘chirish; 4) Teskari matritsa olish; 5) Skalyar ko‘paytirish",
      "Har bir elementdan kvadrat ildiz chiqarish",
      "1) Satr/ustunlar o‘rnini almashtirish; 2) Satr/ustunni $k \\ne 0$ songa ko‘paytirish/bo‘lish; 3) Nol satr/ustunni tashlab yuborish; 4) Transponirlash; 5) Bir satr/ustunni $k \\ne 0$ songa ko‘paytirib boshqasiga qo‘shish",
      "Faqat satr elementlarini nolga ko‘paytirish va ustunlarni qo‘shish"
    ],
    "answer": 2,
    "difficulty": "Oson",
    "explanation": "3-ma’ruza (15-17-slaydlar): Aynan shu 5 ta amal matritsaning elementar almashtirishlari hisoblanadi."
  },
  {
    "id": "T3_Q16",
    "topicId": 3,
    "num": 16,
    "question": "Matritsa rangining 1-xossasi: $m \\times n$ o‘lchovli $A$ matritsa uchun $r(A)$ qanday tengsizlikni qanoatlantiradi va nol matritsa $E^0$ ning rangi nimaga teng?",
    "options": [
      "$r(A) = m \\cdot n;\\qquad r(E^0) = 0$",
      "$0 \\le r(A) \\le \\min(m, n);\\qquad r(E^0) = 0$",
      "$1 \\le r(A) \\le \\max(m, n);\\qquad r(E^0) = 1$",
      "$0 \\le r(A) \\le m + n;\\qquad r(E^0) = m$"
    ],
    "answer": 1,
    "difficulty": "Oson",
    "explanation": "3-ma’ruza (18-slayd, 1-xossa): $0 \\le r(A) \\le \\min(m, n)$ va $r(E^0) = 0$."
  },
  {
    "id": "T3_Q17",
    "topicId": 3,
    "num": 17,
    "question": "Matritsa rangining 2-xossasi: Matritsa ustida elementar almashtirishlar bajarilganda uning rangi qanday o‘zgaradi?",
    "options": [
      "Elementar almashtirishlarda matritsa rangi o‘zgarmaydi",
      "Satrlar o‘rni almashtirilsa rangi ishorasini o‘zgartiradi",
      "Satr songa ko‘paytirilsa rangi ham shu songa ko‘payadi",
      "Nol satr tashlab yuborilsa rangi $1$ ga kamayadi"
    ],
    "answer": 0,
    "difficulty": "Oson",
    "explanation": "3-ma’ruza (18-slayd, 2-xossa): Elementar almashtirishlarda matritsa rangi o‘zgarmaydi."
  },
  {
    "id": "T3_Q18",
    "topicId": 3,
    "num": 18,
    "question": "Matritsa rangining 3-xossasi: $n$-tartibli kvadrat $A$ matritsa uchun $\\det(A) \\ne 0$ bo‘lishi uning rangi haqida nimani bildiradi?",
    "options": [
      "$\\det(A) \\ne 0 \\iff r(A) = n - 1$",
      "$\\det(A) \\ne 0 \\iff r(A) = \\det(A)$",
      "$\\det(A) \\ne 0 \\iff r(A) = 0$",
      "$\\det(A) \\ne 0 \\iff r(A) = n$ (ya’ni xosmas kvadrat matritsaning rangi uning tartibiga teng)"
    ],
    "answer": 3,
    "difficulty": "Oson",
    "explanation": "3-ma’ruza (18-slayd, 3-xossa): $n$-tartibli kvadrat $A$ matritsa uchun $\\det(A) \\ne 0$ bo‘lsa, $r(A) = n$."
  },
  {
    "id": "T3_Q19",
    "topicId": 3,
    "num": 19,
    "question": "Elementar almashtirishlar yordamida matritsa pog‘onali (trapetsiya) ko‘rinishga keltirildi va unda $\\tilde{a}_{11} \\ne 0, \\tilde{a}_{22} \\ne 0, \\dots, \\tilde{a}_{pp} \\ne 0$ ($p$ ta noldan farqli satr) hosil bo‘ldi (19-slayd). Matritsaning rangi nimaga teng?",
    "options": [
      "$r(A) = \\tilde{a}_{11} \\cdot \\tilde{a}_{22} \\cdot \\dots \\cdot \\tilde{a}_{pp}$",
      "$r(A) = n - p$",
      "$r(A) = p$ (noldan farqli pog‘onali satrlar soniga teng)",
      "$r(A) = p + 1$"
    ],
    "answer": 2,
    "difficulty": "Oson",
    "explanation": "3-ma’ruza (19-slayd): Pog‘onali matritsada $\\tilde{a}_{11} \\ne 0, \\dots, \\tilde{a}_{pp} \\ne 0$ bo‘lsa, $r(A) = p$."
  },
  {
    "id": "T3_Q20",
    "topicId": 3,
    "num": 20,
    "question": "$n$ ta noma’lumli $n$ ta chiziqli tenglamalar sistemasi $AX = B$ da asosiy matritsa determinanti $|A| \\ne 0$ bo‘lsa, uning yechimi teskari matritsa orqali qanday yoziladi?",
    "options": [
      "$X = A B^{-1}$",
      "$X = A^{-1} B$",
      "$X = \\frac{B}{A}$",
      "$X = B A^{-1}$"
    ],
    "answer": 1,
    "difficulty": "Oson",
    "explanation": "3-ma’ruza (23-slayd): Agar $|A| \\ne 0$ bo‘lsa, $A^{-1}$ mavjud va $X = A^{-1}B$."
  },
  {
    "id": "T3_Q21",
    "topicId": 3,
    "num": 21,
    "question": "Nima uchun matritsalar algebrasida bir matritsani ikkinchi matritsaga to‘g‘ridan-to‘g‘ri «bo‘lish» ($B / A$) amali kiritilmaydi, balki teskari matritsaga ko‘paytirish ($A^{-1}B$ yoki $BA^{-1}$) ishlatiladi?",
    "options": [
      "Chunki matritsalarni ko‘paytirish nokommutativ ($A^{-1}B \\ne BA^{-1}$) bo‘lib, chapdan va o‘ngdan ko‘paytirish har xil natija beradi hamda faqat $\\det(A) \\ne 0$ bo‘lgandagina $A^{-1}$ mavjud",
      "Chunki teskari matritsa faqat nol matritsalar uchun mavjud",
      "Chunki har doim $A^{-1}B = BA^{-1}$ bo‘ladi",
      "Chunki kasr chizig‘ini yozish noqulay"
    ],
    "answer": 0,
    "difficulty": "O'rta",
    "explanation": "Matritsalarni ko‘paytirish o‘rin almashinish qonuniga bo‘ysunmagani uchun $AX = B \\implies X = A^{-1}B$ va $XA = B \\implies X = BA^{-1}$ bir-biridan farq qiladi."
  },
  {
    "id": "T3_Q22",
    "topicId": 3,
    "num": 22,
    "question": "Kvadrat $A$ matritsa uchun $A \\cdot A^{-1} = E$ tenglikni tekshirish nimani tasdiqlaydi (9-slayd)?",
    "options": [
      "$A$ matritsaning rangi $0$ ga teng ekanligini tasdiqlaydi",
      "$A$ matritsa simmetrik ekanligini tasdiqlaydi",
      "$A$ matritsa xos matritsa ekanligini tasdiqlaydi",
      "Topilgan $A^{-1}$ matritsa haqiqatan ham $A$ matritsaning teskari matritsasi ekanligini tasdiqlaydi"
    ],
    "answer": 3,
    "difficulty": "Oson",
    "explanation": "3-ma’ruza (9-slayd): Teskari matritsa topilgach, $A^{-1} \\cdot A = A \\cdot A^{-1} = E$ bajarilishi orqali natija to‘g‘riligi tekshiriladi."
  },
  {
    "id": "T3_Q23",
    "topicId": 3,
    "num": 23,
    "question": "2-tartibli xosmas $A = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}$ matritsa uchun qo‘shma matritsa $\\bar{A}$ va teskari matritsa $A^{-1}$ qanday ko‘rinishda bo‘ladi?",
    "options": [
      "$\\bar{A} = \\begin{pmatrix} a & -c \\\\ -b & d \\end{pmatrix},\\qquad A^{-1} = \\frac{1}{ad + bc} \\begin{pmatrix} a & -c \\\\ -b & d \\end{pmatrix}$",
      "$\\bar{A} = \\begin{pmatrix} -a & b \\\\ c & -d \\end{pmatrix},\\qquad A^{-1} = \\begin{pmatrix} 1/a & 1/b \\\\ 1/c & 1/d \\end{pmatrix}$",
      "$\\bar{A} = \\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix},\\qquad A^{-1} = \\frac{1}{ad - bc} \\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}$",
      "$\\bar{A} = \\begin{pmatrix} d & b \\\\ c & a \\end{pmatrix},\\qquad A^{-1} = (ad - bc)\\begin{pmatrix} d & b \\\\ c & a \\end{pmatrix}$"
    ],
    "answer": 2,
    "difficulty": "O'rta",
    "explanation": "2-tartibli matritsa uchun $A_{11}=d, A_{12}=-c, A_{21}=-b, A_{22}=a$. Transponirlanganda bosh diagonal elementlari ($a$ va $d$) o‘rin almashadi, yordamchi diagonal elementlari ($b$ va $c$) ishorasini o‘zgartiradi."
  },
  {
    "id": "T3_Q24",
    "topicId": 3,
    "num": 24,
    "question": "Diagonal elementlari noldan farqli bo‘lgan $D = \\text{diag}(d_1, d_2, \\dots, d_n)$ diagonal matritsaning teskari matritsasi $D^{-1}$ qanday topiladi?",
    "options": [
      "Diagonal elementlarini teskari tartibda yozish orqali",
      "Har bir diagonal elementini o‘zining teskarisiga almashtirish orqali: $D^{-1} = \\text{diag}\\left(\\frac{1}{d_1},\\; \\frac{1}{d_2},\\; \\dots,\\; \\frac{1}{d_n}\\right)$",
      "Diagonal elementlarining ishorasini qarama-qarshiga o‘zgartirish orqali",
      "Diagonal matritsaga teskari matritsa mavjud emas"
    ],
    "answer": 1,
    "difficulty": "Oson",
    "explanation": "$\\text{diag}(d_1, \\dots, d_n) \\cdot \\text{diag}(1/d_1, \\dots, 1/d_n) = \\text{diag}(1, \\dots, 1) = E$."
  },
  {
    "id": "T3_Q25",
    "topicId": 3,
    "num": 25,
    "question": "Agar Gauss-Jordan usulida $(A \\mid E)$ matritsani satr almashtirishlari bilan $(E \\mid A^{-1})$ ga keltirayotganda chap blokda to‘liq nollardan iborat satr paydo bo‘lsa, bu nimani bildiradi?",
    "options": [
      "$\\det(A) = 0$ (matritsa xos) ekanligini va berilgan $A$ matritsaga teskari matritsa mavjud emasligini bildiradi",
      "Ustunlarni almashtirib davom ettirish kerakligini bildiradi",
      "$A$ matritsa birlik matritsa ekanligini bildiradi",
      "$A^{-1}$ matritsaning barcha elementlari nolga teng ekanligini bildiradi"
    ],
    "answer": 0,
    "difficulty": "O'rta",
    "explanation": "Chap blokda nol satr paydo bo‘lishi $r(A) < n \\iff \\det(A) = 0$ ekanligini anglatadi, demak $A^{-1}$ mavjud emas."
  },
  {
    "id": "T3_Q26",
    "topicId": 3,
    "num": 26,
    "question": "Matritsada kamida bitta noldan farqli element mavjud bo‘lsa ($A \\ne E^0$), uning rangi $r(A)$ haqida nima deyish mumkin?",
    "options": [
      "$r(A) = 0$ bo‘ladi",
      "$r(A) < 0$ bo‘ladi",
      "$r(A)$ har doim satrlar soniga teng bo‘ladi",
      "$r(A) \\ge 1$ bo‘ladi (chunki kamida bitta 1-tartibli osti minori noldan farqli)"
    ],
    "answer": 3,
    "difficulty": "Oson",
    "explanation": "3-ma’ruza (12, 18-slaydlar): Har bir element 1-tartibli minor bo‘lgani uchun kamida bitta nolmas element bo‘lsa $r(A) \\ge 1$."
  },
  {
    "id": "T3_Q27",
    "topicId": 3,
    "num": 27,
    "question": "Agar $A$ matritsaning rangi $r(A) = r$ bo‘lsa, uning tartibi $r$ dan katta bo‘lgan barcha osti minorlari ($M_{r+1}, M_{r+2}, \\dots$) nimaga teng bo‘ladi?",
    "options": [
      "Barchasi manfiy sonlarga teng bo‘ladi",
      "Barchasi $1$ ga teng bo‘ladi",
      "Barchasi $0$ ga teng bo‘ladi (aks holda rang $r$ dan katta bo‘lar edi)",
      "Kamida bittasi noldan farqli bo‘ladi"
    ],
    "answer": 2,
    "difficulty": "O'rta",
    "explanation": "Ta’rifga ko‘ra rang — noldan farqli ENG KATTA minor tartibidir. Demak $r$ dan katta tartibli barcha minorlar $0$ ga teng."
  },
  {
    "id": "T3_Q28",
    "topicId": 3,
    "num": 28,
    "question": "$n$-tartibli xosmas $A$ matritsaning qo‘shma matritsasi $\\bar{A}$ ning determinanti $\\det(\\bar{A})$ nimaga teng?",
    "options": [
      "$\\frac{1}{\\det(A)}$ ga teng",
      "$(\\det A)^{n-1}$ ga teng (chunki $A \\cdot \\bar{A} = \\det(A) \\cdot E \\implies \\det(A)\\det(\\bar{A}) = (\\det A)^n$)",
      "$1$ ga teng",
      "$\\det(A)$ ga teng"
    ],
    "answer": 1,
    "difficulty": "Qiyin",
    "explanation": "$A^{-1} = \\frac{1}{\\det A}\\bar{A} \\implies \\bar{A} = (\\det A) A^{-1}$. U holda $\\det(\\bar{A}) = (\\det A)^n \\det(A^{-1}) = (\\det A)^{n-1}$."
  },
  {
    "id": "T3_Q29",
    "topicId": 3,
    "num": 29,
    "question": "Agar kvadrat $A$ matritsaning teskari matritsasi o‘zining transponirlanganiga teng bo‘lsa ($A^{-1} = A^T$), bunday matritsa qanday ataladi?",
    "options": [
      "Ortogonal matritsa deyiladi",
      "Nilpotent matritsa deyiladi",
      "Simmetrik matritsa deyiladi",
      "Xos matritsa deyiladi"
    ],
    "answer": 0,
    "difficulty": "O'rta",
    "explanation": "$A^T A = A A^T = E \\iff A^{-1} = A^T$ shartni qanoatlantiruvchi kvadrat matritsa ortogonal matritsa deyiladi."
  },
  {
    "id": "T3_Q30",
    "topicId": 3,
    "num": 30,
    "question": "Ikki matritsa ko‘paytmasining rangi $r(A \\cdot B)$ ularning alohida ranglari $r(A)$ va $r(B)$ bilan qanday tengsizlik orqali bog‘langan?",
    "options": [
      "$r(A \\cdot B) \\ge \\max(r(A),\\; r(B))$",
      "$r(A \\cdot B) = r(A) + r(B)$",
      "$r(A \\cdot B) = r(A) \\cdot r(B)$",
      "$r(A \\cdot B) \\le \\min(r(A),\\; r(B))$ (ko‘paytmaning rangi ko‘paytuvchilarning ranglaridan oshmaydi)"
    ],
    "answer": 3,
    "difficulty": "Qiyin",
    "explanation": "Chiziqli algebraning fundamental xossasiga ko‘ra matritsalarni ko‘paytirishda rang ortishi mumkin emas: $r(AB) \\le \\min(r(A), r(B))$."
  },
  {
    "id": "T4_Q1",
    "topicId": 4,
    "num": 1,
    "question": "$n$-tartibli kvadrat $A$ matritsaning $n$-tartibli determinanti ta’rifi qaysi javobda to‘g‘ri berilgan (5, 10-slaydlar)?",
    "options": [
      "Matritsaning barcha $n^2$ ta elementlari yig‘indisiga aytiladi",
      "Matritsaning faqat bosh va yordamchi diagonallari elementlari ko‘paytmalari ayirmasiga aytiladi",
      "Matritsaning satr elementlari kvadratlari yig‘indisiga aytiladi",
      "Matritsaning har bir satridan va har bir ustunidan bittadan olingan $n$ ta element ko‘paytmalaridan iborat, jami $n!$ ta hadning $(-1)^s$ ishoralar bilan olingan algebraik yig‘indisiga aytiladi"
    ],
    "answer": 3,
    "difficulty": "Oson",
    "explanation": "4-ma’ruza (5, 10-slaydlar): $A$ matritsaning $n$-tartibli determinanti deb, har bir satr va ustundan bittadan element qatnashgan $n!$ ta ko‘paytmaning algebraik yig‘indisiga aytiladi."
  },
  {
    "id": "T4_Q2",
    "topicId": 4,
    "num": 2,
    "question": "«$n$-tartibli o‘rin almashtirish» deb nimaga aytiladi va u qanday belgilanadi?",
    "options": [
      "Matritsaning satrlarini ustunlarga almashtirishga aytiladi va $A^T$ bilan belgilanadi",
      "Faqat juft sonlar to‘plamiga aytiladi",
      "$1, 2, 3, \\dots, n$ sonlarning ma’lum bir tartibda joylashtirib yozilishiga aytiladi va $P$ harfi bilan belgilanadi",
      "Sonlarni bir-biriga qo‘shish amaliga aytiladi"
    ],
    "answer": 2,
    "difficulty": "Oson",
    "explanation": "4-ma’ruza (6-slayd): $1, 2, 3, \\dots, n$ sonlarning biror bir tartibda yozilishiga $n$-tartibli o‘rin almashtirish deyiladi va $P$ harfi bilan belgilanadi."
  },
  {
    "id": "T4_Q3",
    "topicId": 4,
    "num": 3,
    "question": "$\\{1, 2, 3, \\dots, n\\}$ to‘plamdagi barcha mumkin bo‘lgan o‘rin almashtirishlar soni nechtaga teng?",
    "options": [
      "$\\frac{n(n-1)}{2}$ taga teng",
      "$n! = 1 \\cdot 2 \\cdot 3 \\cdot \\dots \\cdot n$ taga teng",
      "$n^2$ taga teng",
      "$2^n$ taga teng"
    ],
    "answer": 1,
    "difficulty": "Oson",
    "explanation": "4-ma’ruza (8-slayd, 1-xossa): $\\{1, 2, 3, \\dots, n\\}$ to‘plamdagi barcha o‘rin almashtirishlar soni $n!$ ga teng."
  },
  {
    "id": "T4_Q4",
    "topicId": 4,
    "num": 4,
    "question": "$P$ o‘rin almashtirishda ikkita son qachon «inversiya» tashkil qiladi deyiladi?",
    "options": [
      "Agar $m > k$ bo‘lib, katta $m$ soni kichik $k$ sonidan chapda joylashgan bo‘lsa, ular inversiya tashkil qiladi deyiladi",
      "Agar ikkita son ketma-ket (yonma-yon) joylashgan bo‘lsa",
      "Agar kichik son katta sondan chapda joylashgan bo‘lsa",
      "Agar ikkita sonning yig‘indisi juft bo‘lsa"
    ],
    "answer": 0,
    "difficulty": "Oson",
    "explanation": "4-ma’ruza (7-slayd): Agar $m > k$ bo‘lib, $m$ soni $k$ sonidan chapda joylashgan bo‘lsa, u holda $P$ o‘rin almashtirishda bu sonlar inversiya tashkil qiladi deyiladi."
  },
  {
    "id": "T4_Q5",
    "topicId": 4,
    "num": 5,
    "question": "$P$ o‘rin almashtirish qachon «juft» va qachon «toq» o‘rin almashtirish deyiladi?",
    "options": [
      "Birinchi elementi juft son bo‘lsa — juft, toq son bo‘lsa — toq deyiladi",
      "Oxirgi elementi juft son bo‘lsa — juft deyiladi",
      "Elementlar soni $n$ juft bo‘lsa — juft, $n$ toq bo‘lsa — toq deyiladi",
      "Undagi inversiyalarning umumiy soni $\\text{inv} P$ juft son bo‘lsa — juft, toq son bo‘lsa — toq o‘rin almashtirish deyiladi"
    ],
    "answer": 3,
    "difficulty": "Oson",
    "explanation": "4-ma’ruza (7-slayd): $\\text{inv} P$ soni juft yoki toq bo‘lganiga qarab $P$ o‘rin almashtirish juft yoki toq deyiladi."
  },
  {
    "id": "T4_Q6",
    "topicId": 4,
    "num": 6,
    "question": "O‘rin almashtirishlarning 2-xossasi: $\\{1, 2, 3, \\dots, n\\}$ ($n \\ge 2$) to‘plamdagi juft va toq o‘rin almashtirishlar soni haqida qanday tasdiq o‘rinli?",
    "options": [
      "Juft o‘rin almashtirishlar soni toqlardan $2$ marta ko‘p bo‘ladi",
      "Juft o‘rin almashtirishlar $n$ ta, toqlar esa $n! - n$ ta bo‘ladi",
      "Juft va toq o‘rin almashtirishlar soni o‘zaro teng bo‘lib, har biri $\\frac{n!}{2}$ tadan bo‘ladi",
      "Barcha o‘rin almashtirishlar juft bo‘ladi"
    ],
    "answer": 2,
    "difficulty": "Oson",
    "explanation": "4-ma’ruza (8-slayd, 2-xossa): Juft va toq o‘rin almashtirishlar soni o‘zaro teng, ya’ni har biri $\\frac{n!}{2}$ tadan."
  },
  {
    "id": "T4_Q7",
    "topicId": 4,
    "num": 7,
    "question": "O‘rin almashtirishlarning 3-xossasi: O‘rin almashtirishda ixtiyoriy ikkita elementning o‘rni o‘zaro almashtirilsa (transpozitsiya qilinsa), nima yuz beradi?",
    "options": [
      "O‘rin almashtirishning juft-toqligi o‘zgarmaydi",
      "O‘rin almashtirishning juft-toqligi qarama-qarshisiga o‘zgaradi (juft bo‘lsa toqqa, toq bo‘lsa juftga aylanadi)",
      "Inversiyalar soni har doim $0$ ga teng bo‘lib qoladi",
      "Inversiyalar soni $2$ marta ortadi"
    ],
    "answer": 1,
    "difficulty": "Oson",
    "explanation": "4-ma’ruza (8-slayd, 3-xossa): O‘rin almashtirishda ikkita elementning o‘rni almashtirilsa, uning juft-toqligi o‘zgaradi."
  },
  {
    "id": "T4_Q8",
    "topicId": 4,
    "num": 8,
    "question": "«O‘rinlashtirish» ($F$) deb nimaga aytiladi va uning juft-toqligi qanday aniqlanadi (9-slayd)?",
    "options": [
      "$\\{1, 2, \\dots, n\\}$ sonlar to‘plamini o‘zini o‘ziga o‘zaro bir qiymatli akslantirishga aytiladi; $F = \\binom{P_1}{P_2}$ da $P_1 = (1, 2, \\dots, n)$ bo‘lsa, $P_2$ juft bo‘lganda $F$ juft, $P_2$ toq bo‘lganda $F$ toq bo‘ladi",
      "O‘rinlashtirish faqat toq bo‘lishi mumkin",
      "Matritsani nol matritsaga ko‘paytirishga aytiladi",
      "Faqat ikkita sonning yig‘indisiga o‘rinlashtirish deyiladi"
    ],
    "answer": 0,
    "difficulty": "O'rta",
    "explanation": "4-ma’ruza (9-slayd): $\\{1, 2, \\dots, n\\}$ sonlar to‘plamini o‘zini o‘ziga akslantiruvchi o‘zaro bir qiymatli akslantirish o‘rinlashtirish deyiladi."
  },
  {
    "id": "T4_Q9",
    "topicId": 4,
    "num": 9,
    "question": "$n$-tartibli determinant ta’rifidan kelib chiqadigan 3 ta asosiy natija (10-slayd) qaysi javobda to‘g‘ri ko‘rsatilgan?",
    "options": [
      "1) Determinantda bitta satrdan bir nechta element bitta ko‘paytmada qatnashishi mumkin",
      "1) Determinant $n$ ta haddan iborat; 2) Barcha hadlar plyus ishora bilan olinadi; 3) Faqat diagonal elementlar qatnashadi",
      "1) Determinant $2n$ ta haddan iborat; 2) Barcha hadlar minus ishora bilan olinadi",
      "1) Determinant $n!$ ta hadning yig‘indisidan iborat; 2) Har bir hadda har bir satr va ustundan bittadan element qatnashadi; 3) Ko‘paytmalarning yarmi o‘z ishorasi ($+$) bilan, qolgan yarmi qarama-qarshi ($-$) ishora bilan olinadi"
    ],
    "answer": 3,
    "difficulty": "Oson",
    "explanation": "4-ma’ruza (10-slayd, Natija): Aynan shu 3 ta xulosa $n$-tartibli determinant ta’rifining bevosita natijalaridir."
  },
  {
    "id": "T4_Q10",
    "topicId": 4,
    "num": 10,
    "question": "Determinantni hisoblashning 1-usulida (qator elementlari bo‘yicha yoyishda) qaysi satr yoki ustunni tanlash eng samarali hisoblanadi (11-slayd)?",
    "options": [
      "Nol elementlari umuman bo‘lmagan satrni tanlash",
      "Faqat eng katta sonlar qatnashgan satrni tanlash",
      "Tarkibida eng ko‘p nol ($0$) element qatnashgan satr yoki ustunni tanlash, chunki nol elementlarning algebraik to‘ldiruvchilarini hisoblash talab etilmaydi",
      "Har doim faqat oxirgi ustunni tanlash"
    ],
    "answer": 2,
    "difficulty": "Oson",
    "explanation": "4-ma’ruza (11-slayd): Determinantning eng ko‘p nol element qatnashgan qatori aniqlanib, shu qator bo‘yicha yoyib chiqiladi."
  },
  {
    "id": "T4_Q11",
    "topicId": 4,
    "num": 11,
    "question": "Determinantni hisoblashning 2-usulida (nollar hosil qilib yoyish usulida) qanday ketma-ketlik bajariladi (12-slayd)?",
    "options": [
      "Determinantning barcha elementlaridan bir xil son ayirib tashlanadi",
      "Elementar almashtirish (7-xossa) yordamida tanlangan satr yoki ustunda bitta noldan farqli element qolgunicha qolgan elementlar nolga keltiriladi va so‘ngra shu qator bo‘yicha yoyiladi",
      "Barcha satrlar bir-biriga ko‘paytirib chiqiladi",
      "Determinant Sarrius qoidasi bilan bo‘laklarga ajratiladi"
    ],
    "answer": 1,
    "difficulty": "Oson",
    "explanation": "4-ma’ruza (12-slayd): Biror qator elementlarini 7-xossa yordamida nolga keltirib, so‘ngra shu qator bo‘yicha yopilsa, $(n-1)$-tartibli bittagina determinantni hisoblash kifoya bo‘ladi."
  },
  {
    "id": "T4_Q12",
    "topicId": 4,
    "num": 12,
    "question": "Qanday determinantga «uchburchak shaklidagi determinant» deyiladi va u qanday hisoblanadi (13-slayd)?",
    "options": [
      "Bosh diagonalidan yuqoridagi yoki pastdagi barcha elementlari nollardan iborat bo‘lgan determinantga aytiladi; uning qiymati bosh diagonali elementlari ko‘paytmasiga teng",
      "Bosh diagonali elementlari nollardan iborat determinantga aytiladi",
      "Uchta burchagida nollar turgan determinantga aytiladi",
      "Faqat $3 \\times 3$ o‘lchamli har qanday determinantga aytiladi"
    ],
    "answer": 0,
    "difficulty": "Oson",
    "explanation": "4-ma’ruza (13-slayd): Bosh diagonalidan yuqoridagi yoki pastdagi barcha elementlari nollardan iborat determinant uchburchak shaklidagi determinant deyiladi va uning qiymati bosh diagonal elementlari ko‘paytmasiga teng."
  },
  {
    "id": "T4_Q13",
    "topicId": 4,
    "num": 13,
    "question": "Har qanday yuqori tartibli determinantni uchburchak shakliga keltirib hisoblash mumkinmi (13-slayd)?",
    "options": [
      "Faqat barcha elementlari musbat bo‘lgan determinantlarni keltirish mumkin",
      "Yo‘q, faqat 2-tartibli determinantlarni uchburchak shakliga keltirish mumkin",
      "Yo‘q, faqat simmetrik determinantlarnigina uchburchak shakliga keltirish mumkin",
      "Ha, determinantning xossalaridan (elementar satr/ustun almashtirishlaridan) foydalanib har qanday determinantni uchburchak shakliga keltirib hisoblash mumkin"
    ],
    "answer": 3,
    "difficulty": "Oson",
    "explanation": "4-ma’ruza (13-slayd): Har qanday determinantni uchburchak shakliga keltirib hisoblash mumkin."
  },
  {
    "id": "T4_Q14",
    "topicId": 4,
    "num": 14,
    "question": "**Laplas teoremasi** (18-slayd) qanday ta’riflanadi?",
    "options": [
      "Determinantning qiymati faqat bosh diagonal elementlari va ularning algebraik to‘ldiruvchilari ko‘paytmasiga teng",
      "Determinantning qiymati uning barcha satr elementlari bilan minorlari yig‘indisiga teng",
      "Determinantning qiymati uning ixtiyoriy satr (yoki ustun) elementlari bilan shu elementlarga mos algebraik to‘ldiruvchilar ko‘paytmalarining yig‘indisiga teng: $\\Delta = \\sum_{j=1}^n a_{ij} A_{ij}$",
      "Determinantning qiymati satrlar sonining faktorialiga teng"
    ],
    "answer": 2,
    "difficulty": "Oson",
    "explanation": "4-ma’ruza (18-slayd): Laplas teoremasi: Determinantning qiymati uning ixtiyoriy satr (ustun) elementlari bilan shu elementlarga mos algebraik to‘ldiruvchilar ko‘paytmalari yig‘indisiga teng."
  },
  {
    "id": "T4_Q15",
    "topicId": 4,
    "num": 15,
    "question": "**Laplas teoremasining natijasi** (18-slayd): Determinantning biror satri (ustuni) elementlari bilan uning BOSHQA satri (ustuni) elementlariga mos algebraik to‘ldiruvchilar ko‘paytmalarining yig‘indisi nimaga teng?",
    "options": [
      "Qarama-qarshi ishorali determinantga teng ($-\\Delta$)",
      "Har doim nolga teng ($\\sum_{j=1}^n a_{ij} A_{kj} = 0$, bunda $i \\ne k$)",
      "Determinantning o‘ziga teng ($\\Delta$)",
      "Birga teng ($1$)"
    ],
    "answer": 1,
    "difficulty": "Oson",
    "explanation": "4-ma’ruza (18-slayd, Natija): Determinantning biror satr (ustun) elementlari bilan uning boshqa satri (ustuni) elementlari algebraik to‘ldiruvchilari ko‘paytmalarining yig‘indisi nolga teng."
  },
  {
    "id": "T4_Q16",
    "topicId": 4,
    "num": 16,
    "question": "Laplas teoremasi va uning natijasini Kroneker deltasi $\\delta_{ik}$ yordamida yagona formula ko‘rinishida qanday yozish mumkin?",
    "options": [
      "$\\sum_{j=1}^n a_{ij} A_{kj} = \\delta_{ik} \\cdot \\Delta = \\begin{cases} \\Delta, & i = k \\\\ 0, & i \\ne k \\end{cases}$",
      "$\\sum_{j=1}^n a_{ij} A_{kj} = \\Delta^2$",
      "$\\sum_{j=1}^n a_{ij} A_{kj} = \\begin{cases} 0, & i = k \\\\ \\Delta, & i \\ne k \\end{cases}$",
      "$\\sum_{j=1}^n a_{ij} A_{kj} = i + k$"
    ],
    "answer": 0,
    "difficulty": "O'rta",
    "explanation": "Aynan shu fundamental ayniyat $A \\cdot \\bar{A} = \\det(A) \\cdot E$ va teskari matritsa formulasining asosini tashkil etadi!"
  },
  {
    "id": "T4_Q17",
    "topicId": 4,
    "num": 17,
    "question": "Umumiy Laplas teoremasiga (16-17-slaydlar) ko‘ra, 5-tartibli determinantni 2 ta satr (masalan 1- va 3-satrlar) bo‘yicha yoyganda qanday ko‘paytmalar yig‘indisi hosil bo‘ladi?",
    "options": [
      "Faqat 1-tartibli elementlar bilan 4-tartibli minorlar ko‘paytmasi",
      "1- va 3-satr elementlarining skalyar ko‘paytmasi",
      "5 ta 2-tartibli determinantlarning o‘zaro ko‘paytmasi",
      "Shu 2 ta satrda joylashgan 2-tartibli minorlar bilan ularga mos 3-tartibli algebraik to‘ldiruvchilarning ko‘paytmalari yig‘indisi ($C_5^2 = 10$ ta had)"
    ],
    "answer": 3,
    "difficulty": "O'rta",
    "explanation": "4-ma’ruza (16-17-slaydlar): 2 ta satr tanlanganda $C_5^2 = 10$ ta yig‘indi qatnashib, har bir hadda 2-tartibli minor va uning 3-tartibli qo‘shimcha minori $(-1)^{i_1+i_2+j_1+j_2}$ ishora bilan ko‘paytiriladi."
  },
  {
    "id": "T4_Q18",
    "topicId": 4,
    "num": 18,
    "question": "Umumiy Laplas teoremasida $i_1, i_2$ satrlar va $j_1, j_2$ ustunlar kesishmasida joylashgan 2-tartibli minorning algebraik to‘ldiruvchisi oldidagi ishora ko‘paytuvchisi qanday aniqlanadi (17-slayd)?",
    "options": [
      "$(-1)^{(i_1 - j_1)}$ formula bilan",
      "Har doim $+1$ bo‘ladi",
      "$(-1)^{i_1 + i_2 + j_1 + j_2}$ formula bilan",
      "$(-1)^{i_1 \\cdot i_2 \\cdot j_1 \\cdot j_2}$ formula bilan"
    ],
    "answer": 2,
    "difficulty": "O'rta",
    "explanation": "4-ma’ruza (17-slayd): Masalan, 1- va 3-satr hamda 2- va 3-ustun tanlanganda ishora $(-1)^{1+3+2+3}$ ko‘rinishda olinadi."
  },
  {
    "id": "T4_Q19",
    "topicId": 4,
    "num": 19,
    "question": "3-tartibli determinant uchun yozilgan «Laplas formulasi» (19-slayd) qaysi qatorlar bo‘yicha yoyilmalarni o‘z ichiga oladi?",
    "options": [
      "Faqat bosh va yordamchi diagonal bo‘yicha yoyilmalarni",
      "1-, 2-, 3-satrlar hamda 1-, 2-, 3-ustunlar bo‘yicha — jami 6 ta o‘zaro teng yoyilmani",
      "Faqat juft tartibli satrlar bo‘yicha yoyilmani",
      "Faqat 1-satr va 1-ustun bo‘yicha 2 ta yoyilmani"
    ],
    "answer": 1,
    "difficulty": "Oson",
    "explanation": "4-ma’ruza (19-slayd): $\\Delta = a_{11}A_{11}+a_{12}A_{12}+a_{13}A_{13} = a_{21}A_{21}+\\dots = a_{13}A_{13}+a_{23}A_{23}+a_{33}A_{33}$ — barcha 3 ta satr va 3 ta ustun bo‘yicha yoyilmalar o‘zaro teng."
  },
  {
    "id": "T4_Q20",
    "topicId": 4,
    "num": 20,
    "question": "Determinantning bosh diagonali elementlari ko‘paytmasi $a_{11} a_{22} \\dots a_{nn}$ determinantning to‘liq yoyilmasiga qanday ishora bilan kiradi?",
    "options": [
      "Har doim plyus ($+$) ishora bilan kiradi, chunki $(1, 2, \\dots, n)$ o‘rin almashtirishda inversiyalar yo‘q ($\\text{inv} = 0$, juft)",
      "Elementlarning ishorasiga qarab o‘zgaradi",
      "Har doim minus ($-$) ishora bilan kiradi",
      "$n$ juft bo‘lsa plyus, $n$ toq bo‘lsa minus ishora bilan kiradi"
    ],
    "answer": 0,
    "difficulty": "O'rta",
    "explanation": "Bosh diagonal elementlarining ustun indekslari $(1, 2, \\dots, n)$ tabiiy tartibda bo‘lgani uchun $\\text{inv}(1, 2, \\dots, n) = 0$ va $(-1)^0 = +1$."
  },
  {
    "id": "T4_Q21",
    "topicId": 4,
    "num": 21,
    "question": "$n$-tartibli determinantda yordamchi diagonal elementlari ko‘paytmasi $a_{1n} a_{2,n-1} \\dots a_{n1}$ oldidagi $(-1)^s$ ishora ko‘paytuvchisi uchun $s = \\text{inv}(n, n-1, \\dots, 2, 1)$ nimaga teng?",
    "options": [
      "$s = 0$ ga teng",
      "$s = n!$ ga teng",
      "$s = n$ ga teng",
      "$s = \\frac{n(n-1)}{2}$ ga teng"
    ],
    "answer": 3,
    "difficulty": "Qiyin",
    "explanation": "$(n, n-1, \\dots, 1)$ teskari tartibda har bir element o‘zidan keyingi barcha elementlar bilan inversiya hosil qiladi: $(n-1) + (n-2) + \\dots + 1 = \\frac{n(n-1)}{2}$."
  },
  {
    "id": "T4_Q22",
    "topicId": 4,
    "num": 22,
    "question": "Agar $P = (i_1, i_2, \\dots, i_n)$ o‘rin almashtirishda ketma-ket $2m$ marta (juft marta) ikkita element o‘rni almashtirilsa (transpozitsiya qilinsa), uning juft-toqligi qanday bo‘ladi?",
    "options": [
      "Qarama-qarshisiga o‘zgaradi",
      "Inversiyalar soni nolga teng bo‘ladi",
      "Boshlang‘ich juft-toqligi saqlanib qoladi (o‘zgarmaydi)",
      "Har doim toq bo‘lib qoladi"
    ],
    "answer": 2,
    "difficulty": "O'rta",
    "explanation": "Har bitta transpozitsiya juft-toqlikni qarama-qarshiga o‘zgartirgani sababli, juft ($2m$) marta transpozitsiya boshlang‘ich juft-toqlikni qaytaradi."
  },
  {
    "id": "T4_Q23",
    "topicId": 4,
    "num": 23,
    "question": "Yuqori tartibli determinantni uchburchak shakliga keltirayotganda $i$-satrni o‘zidan yuqoridagi $k$-satr yordamida nolga aylantirish uchun qanday elementar amal bajariladi?",
    "options": [
      "$i$-satr nol songa ko‘paytiriladi",
      "$k$-satr elementlari $-\\frac{a_{ik}}{a_{kk}}$ songa ko‘paytirilib, $i$-satrning mos elementlariga qo‘shiladi ($a_{kk} \\ne 0$)",
      "$i$-satr va $k$-satr mos elementlari bir-biriga ko‘paytiriladi",
      "$i$-satr elementlaridan $a_{ik}$ soni ayirib tashlanadi"
    ],
    "answer": 1,
    "difficulty": "O'rta",
    "explanation": "$a_{ik} + \\left(-\\frac{a_{ik}}{a_{kk}}\\right) a_{kk} = 0$ bo‘lib, determinantning 7-xossasiga ko‘ra determinant qiymati o‘zgarmaydi."
  },
  {
    "id": "T4_Q24",
    "topicId": 4,
    "num": 24,
    "question": "Determinantning biror satri (yoki ustuni) faqat bitta noldan farqli $a_{ij}$ elementga ega bo‘lib, qolgan barcha elementlari $0$ ga teng bo‘lsa, Laplas teoremasiga ko‘ra determinant nimaga teng?",
    "options": [
      "$\\Delta = a_{ij} A_{ij} = (-1)^{i+j} a_{ij} M_{ij}$ ga teng (ya’ni determinant tartibi bittaga pasayadi)",
      "$\\Delta = a_{ij}$ ga teng",
      "$\\Delta = M_{ij}$ ga teng (ishora va $a_{ij}$ ko‘paytmasisiz)",
      "$\\Delta = 0$ ga teng"
    ],
    "answer": 0,
    "difficulty": "Oson",
    "explanation": "4-ma’ruza (12, 18-slaydlar): Qolgan barcha qo‘shiluvchilar nolga teng bo‘lgani uchun yig‘indida faqat bitta $a_{ij} A_{ij} = (-1)^{i+j} a_{ij} M_{ij}$ had qoladi."
  },
  {
    "id": "T4_Q25",
    "topicId": 4,
    "num": 25,
    "question": "Kvadrat bloklardan tuzilgan blok-diagonal $\\begin{vmatrix} A & O \\\\ O & B \\end{vmatrix}$ determinantning qiymati nimaga teng?",
    "options": [
      "$\\det(A) + \\det(B)$ ga teng",
      "$\\det(A) - \\det(B)$ ga teng",
      "$0$ ga teng",
      "$\\det(A) \\cdot \\det(B)$ ga teng"
    ],
    "answer": 3,
    "difficulty": "Oson",
    "explanation": "Umumiy Laplas teoremasiga ko‘ra blok-diagonal va blok-uchburchakli matritsaning determinanti diagonal bloklar determinantlari ko‘paytmasiga teng."
  },
  {
    "id": "T4_Q26",
    "topicId": 4,
    "num": 26,
    "question": "Agar $n$-tartibli determinantning barcha algebraik to‘ldiruvchilari $A_{ij} = 0$ bo‘lsa, determinantning o‘zi $\\Delta$ haqida nima deyish mumkin?",
    "options": [
      "Determinant noldan farqli bo‘ladi",
      "$\\Delta = n!$ bo‘ladi",
      "Laplas formulasiga ko‘ra $\\Delta = \\sum_{j=1}^n a_{ij} A_{ij} = 0$ bo‘ladi",
      "$\\Delta = 1$ bo‘ladi"
    ],
    "answer": 2,
    "difficulty": "Oson",
    "explanation": "Ixtiyoriy satr bo‘yicha Laplas yoyilmasida barcha $A_{ij}=0$ bo‘lsa, $\\Delta = 0$ bo‘lishi kelib chiqadi."
  },
  {
    "id": "T4_Q27",
    "topicId": 4,
    "num": 27,
    "question": "$n$-tartibli Vandermond determinanti (satrlari $1, x_i, x_i^2, \\dots, x_i^{n-1}$ darajalardan iborat determinant) qachon va faqat qachon nolga teng bo‘ladi?",
    "options": [
      "Barcha $x_i$ sonlar manfiy bo‘lganda",
      "$x_1, x_2, \\dots, x_n$ sonlar orasida kamida ikkitasi o‘zaro teng bo‘lganda ($x_i = x_j, i \\ne j$)",
      "Har doim nolga teng bo‘ladi",
      "Sonlardan bittasi $0$ ga teng bo‘lganda"
    ],
    "answer": 1,
    "difficulty": "Qiyin",
    "explanation": "Vandermond determinanti $\\prod_{1 \\le j < i \\le n} (x_i - x_j)$ ga teng bo‘lib, faqat ikkita $x_i = x_j$ bo‘lganda (ikkita bir xil satr hosil bo‘lib) nolga aylanadi."
  },
  {
    "id": "T4_Q28",
    "topicId": 4,
    "num": 28,
    "question": "Nima sababdan yuqori tartibli ($n \\ge 4$) determinantlarni hisoblashda Sarrius yoki Uchburchak qoidasini qo‘llab bo‘lmaydi?",
    "options": [
      "Chunki $n \\ge 4$ da determinant yoyilmasida $n!$ ta ($4! = 24$ ta, $5! = 120$ ta) had bo‘lib, diagonal chiziqlar esa faqat $2n$ ta hadni qamrab oladi xolos",
      "Chunki $n \\ge 4$ da diagonal elementlar mavjud bo‘lmaydi",
      "Chunki 4-tartibli determinantda minorlar aniqlanmagan",
      "Chunki 4-tartibli determinant har doim nolga teng bo‘ladi"
    ],
    "answer": 0,
    "difficulty": "O'rta",
    "explanation": "$n=3$ da $3! = 6 = 2 \\cdot 3$ mos keladi, ammo $n=4$ da $4! = 24 \\ne 8$ bo‘lgani uchun oddiy diagonallar usuli 16 ta hadni tashlab ketadi!"
  },
  {
    "id": "T4_Q29",
    "topicId": 4,
    "num": 29,
    "question": "$F = \\begin{pmatrix} P_1 \\\\ P_2 \\end{pmatrix}$ o‘rinlashtirishda ustunlar o‘rnini ixtiyoriy almashtirib, yuqori qatorni $(1, 2, \\dots, n)$ tabiiy tartibga keltirish mumkinmi?",
    "options": [
      "Faqat juft tartibli o‘rinlashtirishlarda mumkin",
      "Ustunlar almashtirilsa o‘rinlashtirish buziladi",
      "Yo‘q, ustunlar o‘rnini almashtirish taqiqlanadi",
      "Ha, har bir ustunda yuqori va quyi elementni birgalikda ko‘chirish akslantirishning o‘zini ham, juft-toqligini ham o‘zgartirmaydi"
    ],
    "answer": 3,
    "difficulty": "O'rta",
    "explanation": "4-ma’ruza (9-slayd): Ustunlarni juftligi bilan o‘rin almashtirganda $P_1$ va $P_2$ da bir vaqtda transpozitsiya yuz berib, umumiy juft-toqlik saqlanadi."
  },
  {
    "id": "T4_Q30",
    "topicId": 4,
    "num": 30,
    "question": "Agar $n$-tartibli determinantning bitta satri (yoki ustuni) barcha elementlari $0$ ga teng bo‘lsa, bu faktni Laplas teoremasi orqali qanday izohlash mumkin?",
    "options": [
      "Laplas teoremasi bo‘yicha $\\Delta = 1$ chiqadi",
      "Nol satrli determinantga Laplas teoremasini qo‘llab bo‘lmaydi",
      "Nol satr (ustun) bo‘yicha Laplas yoyilmasi yozilganda $\\Delta = 0 \\cdot A_{i1} + 0 \\cdot A_{i2} + \\dots + 0 \\cdot A_{in} = 0$ hosil bo‘ladi",
      "Nol satrning barcha algebraik to‘ldiruvchilari nolga teng bo‘ladi"
    ],
    "answer": 2,
    "difficulty": "Oson",
    "explanation": "Laplas formulasi $\\Delta = \\sum_{j=1}^n a_{ij} A_{ij}$ da barcha $a_{ij} = 0$ bo‘lsa, yig‘indi bevosita $0$ ga teng bo‘ladi."
  },
  {
    "id": "T5_Q1",
    "topicId": 5,
    "num": 1,
    "question": "$n$ ta noma’lumli $m$ ta chiziqli tenglamalar sistemasida $a_{ij}$, $x_j$ va $b_i$ miqdorlar qanday nomlanadi (4-slayd)?",
    "options": [
      "$a_{ij}$ — ozod hadlar, $x_j$ — koeffitsiyentlar, $b_i$ — noma’lumlar",
      "$a_{ij}$ — minorlar, $x_j$ — determinantlar, $b_i$ — ranglar",
      "$a_{ij}$ — sistemaning koeffitsiyentlari, $x_1, x_2, \\dots, x_n$ — noma’lumlar, $b_1, b_2, \\dots, b_m$ — ozod hadlar",
      "$a_{ij}$ — bazislar, $x_j$ — indekslar, $b_i$ — vektorlar"
    ],
    "answer": 2,
    "difficulty": "Oson",
    "explanation": "5-ma’ruza (4-slayd): $a_{ij}$ ($i=1,\\dots,m;\\; j=1,\\dots,n$) sonlar sistemaning koeffitsiyentlari, $x_1, \\dots, x_n$ lar noma’lumlar, $b_1, \\dots, b_m$ sonlar esa ozod hadlar deyiladi."
  },
  {
    "id": "T5_Q2",
    "topicId": 5,
    "num": 2,
    "question": "Chiziqli tenglamalar sistemasining matritsaviy yozuvi $AX = B$ da $A$, $X$ va $B$ matritsalarning o‘lchamlari qanday bo‘ladi ($m$ ta tenglama, $n$ ta noma’lum)?",
    "options": [
      "$A$ — $n \\times m$ o‘lchamli, $X$ — $1 \\times n$ satr matritsa, $B$ — $1 \\times m$ satr matritsa",
      "$A$ — $m \\times n$ o‘lchamli asosiy matritsa, $X$ — $n \\times 1$ o‘lchamli noma’lumlar ustun matritsasi, $B$ — $m \\times 1$ o‘lchamli ozod hadlar ustun matritsasi",
      "$A, X, B$ larning barchasi $n \\times n$ o‘lchamli kvadrat matritsalar",
      "$A$ — $m \\times m$ o‘lchamli, $X$ va $B$ esa $n \\times n$ o‘lchamli"
    ],
    "answer": 1,
    "difficulty": "Oson",
    "explanation": "5-ma’ruza (4-slayd): $A_{m\\times n} \\cdot X_{n\\times 1} = B_{m\\times 1}$."
  },
  {
    "id": "T5_Q3",
    "topicId": 5,
    "num": 3,
    "question": "Chiziqli tenglamalar sistemasining «asosiy matritsasi» $A$ va «kengaytirilgan matritsasi» $(A \\mid B)$ orasidagi farq nimadan iborat (19-slayd)?",
    "options": [
      "Asosiy matritsa $A$ faqat noma’lumlar oldidagi koeffitsiyentlardan tuziladi; kengaytirilgan matritsa $(A \\mid B)$ esa asosiy matritsaga ozod hadlar ustuni $B$ ni qo‘shishdan hosil bo‘ladi",
      "Asosiy matritsa kvadrat bo‘ladi, kengaytirilgan matritsa esa transponirlangan matritsa bo‘ladi",
      "Asosiy matritsada ozod hadlar qatnashadi, kengaytirilgan matritsada esa qatnashmaydi",
      "Kengaytirilgan matritsa asosiy matritsaning teskarisiga teng bo‘ladi"
    ],
    "answer": 0,
    "difficulty": "Oson",
    "explanation": "5-ma’ruza (19-slayd): $(A \\mid B)$ kengaytirilgan matritsa $A$ asosiy matritsaning o‘ng tomoniga $B$ ozod hadlar ustunini yozish orqali hosil qilinadi."
  },
  {
    "id": "T5_Q4",
    "topicId": 5,
    "num": 4,
    "question": "Chiziqli tenglamalar sistemasining «yechimi» deb nimaga aytiladi (17-slayd)?",
    "options": [
      "Ozod hadlarning algebraik yig‘indisiga",
      "Sistemadagi faqat birinchi tenglamani qanoatlantiruvchi ixtiyoriy sonlar to‘plamiga",
      "Asosiy matritsa determinantining qiymatiga",
      "$x_1, x_2, \\dots, x_n$ noma’lumlarning o‘rniga qo‘yilganda sistemadagi barcha tenglamalarni to‘g‘ri tenglikka (ayniyatga) aylantiruvchi $\\alpha_1, \\alpha_2, \\dots, \\alpha_n$ sonlar tizimiga ($X = (\\alpha_1, \\dots, \\alpha_n)^T$)"
    ],
    "answer": 3,
    "difficulty": "Oson",
    "explanation": "5-ma’ruza (17-slayd): Agar $\\alpha_1, \\alpha_2, \\dots, \\alpha_n$ sonlar $x_1, x_2, \\dots, x_n$ larning o‘rniga qo‘yilganda sistemadagi tenglamalarni to‘g‘ri tenglikka aylantirsa, bu sonlarga sistemaning yechimlari deyiladi."
  },
  {
    "id": "T5_Q5",
    "topicId": 5,
    "num": 5,
    "question": "Qanday chiziqli tenglamalar sistemasiga «birgalikda bo‘lgan sistema» va qanday sistemaga «birgalikda bo‘lmagan sistema» deyiladi (17-slayd)?",
    "options": [
      "Tenglamalar soni noma’lumlar soniga teng bo‘lsa — birgalikda deyiladi",
      "Ozod hadlari nolga teng bo‘lsa — birgalikda bo‘lmagan deyiladi",
      "Kamida bitta yechimga ega bo‘lsa — birgalikda; bitta ham yechimga ega bo‘lmasa ($\\varnothing$) — birgalikda bo‘lmagan sistema deyiladi",
      "Faqat cheksiz ko‘p yechimga ega bo‘lsa — birgalikda; yagona yechimga ega bo‘lsa — birgalikda bo‘lmagan deyiladi"
    ],
    "answer": 2,
    "difficulty": "Oson",
    "explanation": "5-ma’ruza (17-slayd): Chiziqli tenglamalar sistemasi kamida bitta yechimga ega bo‘lsa birgalikda, aks holda (bitta ham yechimga ega bo‘lmasa) birgalikda bo‘lmagan sistema deyiladi."
  },
  {
    "id": "T5_Q6",
    "topicId": 5,
    "num": 6,
    "question": "**Kroneker-Kapelli teoremasi** (19-slayd): Chiziqli tenglamalar sistemasi birgalikda bo‘lishi uchun qanday shart zarur va yetarli?",
    "options": [
      "$\\det(A) = 0$ bo‘lishi zarur va yetarli",
      "$\\text{rang}(A) = \\text{rang}(A \\mid B)$ bo‘lishi (asosiy matritsa rangi kengaytirilgan matritsa rangiga teng bo‘lishi) zarur va yetarli",
      "$\\text{rang}(A) < \\text{rang}(A \\mid B)$ bo‘lishi zarur va yetarli",
      "Tenglamalar soni $m$ noma’lumlar soni $n$ ga teng bo‘lishi zarur va yetarli"
    ],
    "answer": 1,
    "difficulty": "Oson",
    "explanation": "5-ma’ruza (19-slayd): Kroneker-Kapelli teoremasi: Chiziqli tenglamalar sistemasi birgalikda bo‘lishi uchun $\\text{rang}(A) = \\text{rang}(A \\mid B)$ bo‘lishi zarur va yetarli."
  },
  {
    "id": "T5_Q7",
    "topicId": 5,
    "num": 7,
    "question": "Kroneker-Kapelli teoremasiga ko‘ra, $n$ ta noma’lumli sistemada $r(A) = r(A \\mid B) = r$ bo‘lganda qachon sistema yagona yechimga, qachon cheksiz ko‘p yechimga ega bo‘ladi (24-slayd)?",
    "options": [
      "Agar $r = n$ bo‘lsa sistema bitta (yagona) yechimga ega; agar $r < n$ bo‘lsa sistema cheksiz ko‘p yechimga ega",
      "Agar $r = 0$ bo‘lsa yagona yechimga ega",
      "Agar $r < n$ bo‘lsa sistema yagona yechimga ega; agar $r = n$ bo‘lsa cheksiz ko‘p yechimga ega",
      "Har doim faqat bitta yechimga ega bo‘ladi"
    ],
    "answer": 0,
    "difficulty": "Oson",
    "explanation": "5-ma’ruza (24-slayd): $r(A) = r(A \\mid B) = r$ bo‘lganda: $r = n \\implies$ bitta yechim; $r < n \\implies$ cheksiz ko‘p yechim; $r(A) \\ne r(A \\mid B) \\implies$ yechimga ega emas."
  },
  {
    "id": "T5_Q8",
    "topicId": 5,
    "num": 8,
    "question": "Asosiy matritsa rangi $r(A)$ va kengaytirilgan matritsa rangi $r(A \\mid B)$ orasida $r(A) > r(A \\mid B)$ tengsizlik bo‘lishi mumkinmi?",
    "options": [
      "Ha, tenglamalar soni noma’lumlar sonidan ko‘p bo‘lganda shunday bo‘ladi",
      "Ha, bir jinsli sistemalarda $r(A) > r(A \\mid B)$ bo‘ladi",
      "Ha, agar ozod hadlar manfiy bo‘lsa $r(A) > r(A \\mid B)$ bo‘ladi",
      "Yo‘q, hech qachon bo‘lishi mumkin emas, chunki $A$ matritsa $(A \\mid B)$ ning qism matritsasi bo‘lib, har doim $r(A) \\le r(A \\mid B) \\le r(A) + 1$ bajariladi"
    ],
    "answer": 3,
    "difficulty": "O'rta",
    "explanation": "$A$ matritsaning har qanday minori $(A \\mid B)$ ning ham minori bo‘lgani sababli $r(A)$ hech qachon $r(A \\mid B)$ dan katta bo‘la olmaydi."
  },
  {
    "id": "T5_Q9",
    "topicId": 5,
    "num": 9,
    "question": "Qachon $AX = B$ tenglamalar sistemasi «bir jinsli chiziqli tenglamalar sistemasi» deyiladi (5-slayd)?",
    "options": [
      "Barcha noma’lumlar oldidagi koeffitsiyentlar bir xil songa teng bo‘lganda",
      "Ozod hadlar ustuni birlik vektordan iborat bo‘lganda",
      "Ozod hadlar ustuni nol vektordan iborat bo‘lganda ($B = \\Theta = (0, 0, \\dots, 0)^T$), ya’ni $AX = \\Theta$ bo‘lganda",
      "Tenglamalar soni noma’lumlar soniga teng bo‘lganda ($m = n$)"
    ],
    "answer": 2,
    "difficulty": "Oson",
    "explanation": "5-ma’ruza (5-slayd): Agar $B = \\Theta$ bo‘lsa, u holda tenglamalar sistemasi bir jinsli chiziqli tenglamalar sistemasi deyiladi: $AX = \\Theta$."
  },
  {
    "id": "T5_Q10",
    "topicId": 5,
    "num": 10,
    "question": "Nima sababdan bir jinsli chiziqli tenglamalar sistemasi ($AX = \\Theta$) HAR DOIM birgalikda bo‘ladi (5-slayd)?",
    "options": [
      "Chunki bir jinsli sistemaning asosiy determinanti har doim $1$ ga teng bo‘ladi",
      "Chunki nol vektor $X = \\Theta = (0, 0, \\dots, 0)^T$ har doim sistemaning yechimi bo‘ladi (hamda nol ustun qo‘shilishi rangni o‘zgartirmaydi: $r(A) = r(A \\mid \\Theta)$)",
      "Chunki bir jinsli sistemada koeffitsiyentlar nolga teng bo‘ladi",
      "Chunki bir jinsli sistemada noma’lumlar soni har doim tenglamalar sonidan ko‘p bo‘ladi"
    ],
    "answer": 1,
    "difficulty": "Oson",
    "explanation": "5-ma’ruza (5-slayd): Bir jinsli chiziqli tenglamalar sistemasi har doim birgalikda, chunki $X = \\Theta$ har doim sistemaning yechimi bo‘ladi."
  },
  {
    "id": "T5_Q11",
    "topicId": 5,
    "num": 11,
    "question": "$n$ ta noma’lumli $AX = \\Theta$ bir jinsli chiziqli tenglamalar sistemasi qachon aniq bo‘lib, faqat yagona nol (trivial) yechimga ega bo‘ladi (5-slayd)?",
    "options": [
      "$\\text{rang}(A) = n$ munosabat o‘rinli bo‘lganda (kvadrat sistemada $\\det(A) \\ne 0$ bo‘lganda)",
      "$\\text{rang}(A) < n$ munosabat o‘rinli bo‘lganda",
      "$\\text{rang}(A) = 0$ bo‘lganda",
      "Tenglamalar soni noma’lumlar sonidan kichik ($m < n$) bo‘lganda"
    ],
    "answer": 0,
    "difficulty": "Oson",
    "explanation": "5-ma’ruza (5-slayd): Bir jinsli sistema uchun $\\text{rang}(A) = n$ munosabat o‘rinli bo‘lsa, sistema aniq bo‘lib, yagona nol yechimga ega."
  },
  {
    "id": "T5_Q12",
    "topicId": 5,
    "num": 12,
    "question": "$n$ ta noma’lumli $AX = \\Theta$ bir jinsli chiziqli tenglamalar sistemasi qachon nol yechimdan tashqari nolmas (notrivial) yechimlarga ham ega bo‘ladi (5-slayd)?",
    "options": [
      "Hech qachon nolmas yechimga ega bo‘lmaydi",
      "Faqat barcha koeffitsiyentlar nolga teng bo‘lganda",
      "$\\text{rang}(A) = n$ bo‘lganda (kvadrat sistemada $\\det(A) \\ne 0$ bo‘lganda)",
      "$\\text{rang}(A) < n$ munosabat o‘rinli bo‘lganda (xususan kvadrat sistemada $\\det(A) = 0$ bo‘lganda)"
    ],
    "answer": 3,
    "difficulty": "Oson",
    "explanation": "5-ma’ruza (5-slayd): Bir jinsli sistema uchun $\\text{rang}(A) < n$ munosabat o‘rinli bo‘lsa, sistema nol yechimdan tashqari nolmas yechimlarga ham ega bo‘ladi."
  },
  {
    "id": "T5_Q13",
    "topicId": 5,
    "num": 13,
    "question": "Bir jinsli chiziqli algebraik tenglamalar sistemasining «fundamental yechimlar sistemasi» (FYS) deb nimaga aytiladi (7-slayd)?",
    "options": [
      "Asosiy matritsaning satr vektorlari sistemasiga",
      "Sistemaning faqat nol vektordan iborat yechimiga",
      "Sistema yechimlarining har qanday maksimal sondagi chiziqli erkli sistemasiga",
      "Sistemaning barcha yechimlari yig‘indisiga"
    ],
    "answer": 2,
    "difficulty": "Oson",
    "explanation": "5-ma’ruza (7-slayd, Ta’rif): Bir jinsli chiziqli algebraik tenglamalar sistemasi yechimlarining har qanday maksimal sondagi chiziqli erkli sistemasi bu tenglamalar sistemasining fundamental yechimlar sistemasi deb ataladi."
  },
  {
    "id": "T5_Q14",
    "topicId": 5,
    "num": 14,
    "question": "Fundamental yechimlar sistemasi haqidagi **Teorema** (7-slayd) qanday bayon etiladi?",
    "options": [
      "Fundamental yechimlar sistemasi har doim bitta vektordan iborat bo‘ladi",
      "$AX = \\Theta$ bir jinsli tenglamalar sistemasining har qanday yechimi uning fundamental yechimlar sistemasining chiziqli kombinatsiyasidan iborat: $X = c_1 F_1 + c_2 F_2 + \\dots + c_k F_k$",
      "Fundamental yechimlar o‘zaro chiziqli bog‘liq bo‘ladi",
      "$AX = \\Theta$ sistemaning har qanday yechimi fundamental yechimlarning skalyar ko‘paytmasiga teng"
    ],
    "answer": 1,
    "difficulty": "Oson",
    "explanation": "5-ma’ruza (7-slayd, Teorema va Tasdiq): $AX = \\Theta$ tenglamalar sistemasining har qanday yechimi fundamental yechimlar sistemasining chiziqli kombinatsiyasidan iborat: $X = c_1 F_1 + \\dots + c_k F_k$."
  },
  {
    "id": "T5_Q15",
    "topicId": 5,
    "num": 15,
    "question": "Fundamental yechimlar soni haqidagi **Teorema** (8-slayd): Bir jinsli algebraik tenglamalar sistemasining rangi $r$ ga teng bo‘lib, noma’lumlar soni $n$ dan kichik ($r < n$) bo‘lsa, FYS nechta nolmas vektordan iborat bo‘ladi?",
    "options": [
      "$n - r$ ta chiziqli erkli nolmas vektorlardan iborat bo‘ladi",
      "$C_n^r$ ta vektordan iborat bo‘ladi",
      "$r$ ta nolmas vektordan iborat bo‘ladi",
      "$n + r$ ta vektordan iborat bo‘ladi"
    ],
    "answer": 0,
    "difficulty": "Oson",
    "explanation": "5-ma’ruza (8-slayd, Teorema): Tenglamalar sistemasining fundamental yechimlar sistemasi $n - r$ ta nolmas vektorlardan iborat bo‘ladi."
  },
  {
    "id": "T5_Q16",
    "topicId": 5,
    "num": 16,
    "question": "Bir jinsli sistemaning fundamental yechimlar sistemasini ($F_1, F_2, \\dots, F_{n-r}$) amalda qurish algoritmi qanday (9-10-slaydlar)?",
    "options": [
      "Barcha ozod noma’lumlarga faqat $0$ qiymat berilib, bitta nol vektor topiladi",
      "Kramer formulalari bo‘yicha $\\Delta_{x_i}$ lar hisoblanadi",
      "Asosiy matritsaning ustunlari transponirlanadi",
      "$r$ ta bazis noma’lumlar qolgan $n - r$ ta ozod noma’lumlar orqali ifodalanadi, so‘ngra ozod noma’lumlar o‘rniga $n - r$ o‘lchovli $(1,0,\\dots,0)^T, (0,1,\\dots,0)^T, \\dots, (0,0,\\dots,1)^T$ chiziqli erkli vektorlar ketma-ket qo‘yilib $F_1, \\dots, F_{n-r}$ hisoblanadi"
    ],
    "answer": 3,
    "difficulty": "O'rta",
    "explanation": "5-ma’ruza (9-10-slaydlar): Ozod noma’lumlar o‘rniga birlik matritsaning chiziqli erkli ustun vektorlarini qo‘yish orqali $n-r$ ta chiziqli erkli fundamental yechim hosil qilinadi."
  },
  {
    "id": "T5_Q17",
    "topicId": 5,
    "num": 17,
    "question": "Qanday tenglamalar sistemasiga «bir jinsli bo‘lmagan chiziqli tenglamalar sistemasi» deyiladi va uning umumiy yechimi formulasi qanday (12-slayd)?",
    "options": [
      "Agar $B = \\Theta$ bo‘lsa bir jinsli bo‘lmagan sistema deyiladi; umumiy yechimi: $X = c_1 F_1 + \\dots + c_n F_n$",
      "Umumiy yechimi faqat $X = F_0$ dan iborat bo‘ladi",
      "Agar $B \\ne \\Theta$ bo‘lsa bir jinsli bo‘lmagan sistema deyiladi; umumiy yechimi: $X = F_0 + c_1 F_1 + \\dots + c_{n-r} F_{n-r}$",
      "Umumiy yechimi: $X = F_0 \\cdot c_1 F_1$"
    ],
    "answer": 2,
    "difficulty": "Oson",
    "explanation": "5-ma’ruza (12-slayd): Agar $B \\ne \\Theta$ bo‘lsa, bir jinsli bo‘lmagan sistema deyiladi va umumiy yechimi $X = F_0 + c_1 F_1 + \\dots + c_{n-r} F_{n-r}$ ko‘rinishda bo‘ladi."
  },
  {
    "id": "T5_Q18",
    "topicId": 5,
    "num": 18,
    "question": "Bir jinsli bo‘lmagan sistemaning umumiy yechimi $X = F_0 + c_1 F_1 + \\dots + c_{n-r} F_{n-r}$ formulasidagi $F_0$ va $F_1, \\dots, F_{n-r}$ lar nimani anglatadi (12-slayd)?",
    "options": [
      "$F_0$ — nol vektor; $F_1, \\dots, F_{n-r}$ — bir jinsli bo‘lmagan sistemaning xususiy yechimlari",
      "$F_0$ — bir jinsli bo‘lmagan sistemaning bitta xususiy yechimi; $F_1, \\dots, F_{n-r}$ — mos bir jinsli ($AX = \\Theta$) sistemaning fundamental yechimlari sistemasi",
      "$F_0, F_1, \\dots, F_{n-r}$ larning barchasi bir jinsli sistemaning yechimlari",
      "$F_0$ — ozod hadlar vektori $B$; $F_i$ — asosiy matritsa ustunlari"
    ],
    "answer": 1,
    "difficulty": "Oson",
    "explanation": "5-ma’ruza (12-slayd): $F_0$ — bir jinsli bo‘lmagan sistemaning xususiy yechimlaridan biri, $F_1, \\dots, F_{n-r}$ — mos bir jinsli sistemaning FYS, $c_i$ — ixtiyoriy haqiqiy sonlar."
  },
  {
    "id": "T5_Q19",
    "topicId": 5,
    "num": 19,
    "question": "Bir jinsli bo‘lmagan sistemaning xususiy yechimi $F_0$ ni topish uchun erkli o‘zgaruvchilarga qanday qiymatlar beriladi (12-13-slaydlar)?",
    "options": [
      "Erkli o‘zgaruvchilarga ixtiyoriy xususiy qiymatlar (eng qulayi — barcha erkli o‘zgaruvchilarga $0$ qiymatlar) berilib, bir jinsli bo‘lmagan sistema bazis o‘zgaruvchilarga nisbatan yechiladi",
      "Erkli o‘zgaruvchilarga $\\infty$ qiymat beriladi",
      "Barcha bazis o‘zgaruvchilarga $0$ qiymat beriladi",
      "$F_0$ har doim nol vektorga teng deb olinadi"
    ],
    "answer": 0,
    "difficulty": "O'rta",
    "explanation": "5-ma’ruza (12-13-slaydlar): $F_0$ ni aniqlash uchun erkli o‘zgaruvchilarning xususiy (masalan $0$) qiymatlarida bir jinsli bo‘lmagan tenglamalar sistemasi yechiladi."
  },
  {
    "id": "T5_Q20",
    "topicId": 5,
    "num": 20,
    "question": "Chiziqli tenglamalar sistemasini yechishning «Matritsalar usuli» qachon qo‘llaniladi va qaysi formulaga asoslanadi (25-26-slaydlar)?",
    "options": [
      "Ixtiyoriy $m \\times n$ sistemada $|A| = 0$ bo‘lganda qo‘llaniladi; $X = A^T B$",
      "Kengaytirilgan matritsa ustunlarini ko‘paytirish orqali bajariladi",
      "Faqat bir jinsli sistemalarda qo‘llaniladi; $X = A \\cdot B$",
      "Tenglamalar soni noma’lumlar soniga teng ($n \\times n$) va asosiy matritsa determinanti $|A| \\ne 0$ bo‘lganda qo‘llaniladi; $X = A^{-1} B$"
    ],
    "answer": 3,
    "difficulty": "Oson",
    "explanation": "5-ma’ruza (25-26-slaydlar): $n$ ta noma’lumli $n$ ta tenglamalar sistemasida $|A| \\ne 0$ bo‘lsa, $A^{-1}$ mavjud va $X = A^{-1}B$."
  },
  {
    "id": "T5_Q21",
    "topicId": 5,
    "num": 21,
    "question": "$A \\cdot X \\cdot B = C$ ko‘rinishdagi matritsaviy tenglamaning yechimi qaysi formula bilan aniqlanadi ($\\det A \\ne 0,\\; \\det B \\ne 0$, 29-slayd)?",
    "options": [
      "$X = C A^{-1} B^{-1}$",
      "$X = A^{-1} B^{-1} C$",
      "$X = A^{-1} C B^{-1}$",
      "$X = B^{-1} C A^{-1}$"
    ],
    "answer": 2,
    "difficulty": "Oson",
    "explanation": "5-ma’ruza (29-slayd): $A \\cdot X \\cdot B = C$ tenglamaning ikkala tomonini chapdan $A^{-1}$ ga va o‘ngdan $B^{-1}$ ga ko‘paytirib, $X = A^{-1} C B^{-1}$ hosil qilinadi."
  },
  {
    "id": "T5_Q22",
    "topicId": 5,
    "num": 22,
    "question": "**Kramer qoidasi** (30-slayd): $n$ ta noma’lumli $n$ ta chiziqli tenglamalar sistemasining asosiy determinanti $\\Delta \\ne 0$ bo‘lsa, sistema nechta yechimga ega va noma’lumlar qanday topiladi?",
    "options": [
      "Noma’lumlar $x_i = \\frac{\\Delta}{\\Delta_{x_i}}$ formula bilan topiladi",
      "Sistema yagona yechimga ega va $x_1 = \\frac{\\Delta_{x_1}}{\\Delta},\\; x_2 = \\frac{\\Delta_{x_2}}{\\Delta},\\; \\dots,\\; x_n = \\frac{\\Delta_{x_n}}{\\Delta}$ Kramer formulalari bilan aniqlanadi",
      "Sistema yechimga ega emas",
      "Sistema cheksiz ko‘p yechimga ega va $x_i = \\Delta \\cdot \\Delta_{x_i}$ formula bilan topiladi"
    ],
    "answer": 1,
    "difficulty": "Oson",
    "explanation": "5-ma’ruza (30-slayd): $\\Delta \\ne 0$ bo‘lsa, sistema yagona yechimga ega va $x_i = \\frac{\\Delta_{x_i}}{\\Delta}$ formulalar bilan aniqlanadi."
  },
  {
    "id": "T5_Q23",
    "topicId": 5,
    "num": 23,
    "question": "Kramer formulalaridagi $\\Delta_{x_1}, \\Delta_{x_2}, \\dots, \\Delta_{x_n}$ yordamchi determinantlar asosiy $\\Delta$ determinantdan qanday hosil qilinadi (31-slayd)?",
    "options": [
      "$\\Delta$ determinantda mos noma’lum ($x_i$) oldidagi koeffitsiyentlar ustunini ozod hadlar ustuni ($b_1, b_2, \\dots, b_n$) bilan almashtirish orqali hosil qilinadi",
      "$\\Delta$ determinantning $i$-satri va $i$-ustunini o‘chirish orqali",
      "$\\Delta$ determinantni $b_i$ ozod hadga ko‘paytirish orqali",
      "$\\Delta$ determinantning $i$-satrini ozod hadlar bilan almashtirish orqali"
    ],
    "answer": 0,
    "difficulty": "Oson",
    "explanation": "5-ma’ruza (31-slayd): $\\Delta_{x_1}, \\dots, \\Delta_{x_n}$ determinantlar $\\Delta$ determinantda noma’lumlar oldidagi koeffitsiyentlarni mos ravishda ozod hadlar bilan almashtirish orqali hosil qilinadi."
  },
  {
    "id": "T5_Q24",
    "topicId": 5,
    "num": 24,
    "question": "Kramer usulida asosiy determinant $\\Delta = 0$ bo‘lib, barcha $\\Delta_{x_1} = 0, \\Delta_{x_2} = 0, \\dots, \\Delta_{x_n} = 0$ bo‘lsa (va $r(A)=r(A|B)$ bo‘lsa), tenglamalar sistemasi qanday yechimga ega bo‘ladi (32-33-slaydlar)?",
    "options": [
      "Yagona yechimga ega bo‘ladi",
      "Har doim ikkita yechimga ega bo‘ladi",
      "Faqat nol yechimga ega bo‘ladi",
      "Cheksiz ko‘p yechimga ega bo‘ladi"
    ],
    "answer": 3,
    "difficulty": "Oson",
    "explanation": "5-ma’ruza (32-33-slaydlar): Agar $\\Delta = 0$ bo‘lib, a) $\\Delta_{x_1} = 0, \\dots, \\Delta_{x_n} = 0$ bo‘lsa (birgalikda bo‘lganda), sistema cheksiz ko‘p yechimga ega bo‘ladi."
  },
  {
    "id": "T5_Q25",
    "topicId": 5,
    "num": 25,
    "question": "Kramer usulida asosiy determinant $\\Delta = 0$ bo‘lib, qo‘shimcha determinantlardan kamida bittasi $\\Delta_{x_i} \\ne 0$ bo‘lsa, tenglamalar sistemasi haqida nima deyish mumkin (32, 34-slaydlar)?",
    "options": [
      "Tenglamalar sistemasi yagona yechimga ega",
      "$x_i = 0$ yechimga ega",
      "Tenglamalar sistemasi yechimga ega emas (birgalikda emas)",
      "Tenglamalar sistemasi cheksiz ko‘p yechimga ega"
    ],
    "answer": 2,
    "difficulty": "Oson",
    "explanation": "5-ma’ruza (32, 34-slaydlar): Agar $\\Delta = 0$ bo‘lib, b) $\\Delta_{x_i} \\ne 0$ bo‘lsa, tenglamalar sistemasi yechimga ega emas."
  },
  {
    "id": "T5_Q26",
    "topicId": 5,
    "num": 26,
    "question": "Agar bir jinsli chiziqli tenglamalar sistemasida tenglamalar soni $m$ noma’lumlar soni $n$ dan kichik ($m < n$) bo‘lsa, bu sistema haqida qaysi nazariy tasdiq DOIMO to‘g‘ri?",
    "options": [
      "Sistema faqat yagona nol yechimga ega",
      "Sistema albatta nol yechimdan tashqari cheksiz ko‘p nolmas yechimlarga ega (chunki $r(A) \\le m < n$ va $n - r \\ge 1$)",
      "Sistemaning FYS da $m$ ta vektor bo‘ladi",
      "Sistema birgalikda emas"
    ],
    "answer": 1,
    "difficulty": "O'rta",
    "explanation": "$r(A) \\le \\min(m, n) = m < n$ bo‘lgani sababli $r(A) < n$ shart avtomatik bajariladi va sistema nolmas yechimlarga ega bo‘ladi."
  },
  {
    "id": "T5_Q27",
    "topicId": 5,
    "num": 27,
    "question": "Agar $X_1$ va $X_2$ ustun-vektorlar $AX = \\Theta$ bir jinsli sistemaning yechimlari bo‘lsa, ularning yig‘indisi $X_1 + X_2$ va songa ko‘paytmasi $\\lambda X_1$ ham shu sistemaning yechimi bo‘ladimi?",
    "options": [
      "Ha, chunki $A(X_1 + X_2) = AX_1 + AX_2 = \\Theta + \\Theta = \\Theta$ va $A(\\lambda X_1) = \\lambda(AX_1) = \\Theta$ (yechimlar to‘plami chiziqli fazo tashkil qiladi)",
      "Faqat $\\lambda = 1$ bo‘lganda yechim bo‘ladi",
      "Yo‘q, faqat $X_1 - X_2$ yechim bo‘ladi",
      "Yig‘indi bir jinsli bo‘lmagan sistemaning yechimi bo‘ladi"
    ],
    "answer": 0,
    "difficulty": "O'rta",
    "explanation": "Bir jinsli sistemaning barcha yechimlari to‘plami $\\mathbb{R}^n$ ning $n - r$ o‘lchovli chiziqli qism fazosini (yadrosini) tashkil etadi, FYS esa shu qism fazoning bazisidir."
  },
  {
    "id": "T5_Q28",
    "topicId": 5,
    "num": 28,
    "question": "Agar $X_1$ va $X_2$ vektorlar $AX = B$ ($B \\ne \\Theta$) bir jinsli bo‘lmagan sistemaning yechimlari bo‘lsa, ularning yig‘indisi $X_1 + X_2$ ham shu sistemaning yechimi bo‘ladimi?",
    "options": [
      "Ha, $X_1 + X_2$ ham har doim $AX = B$ ning yechimi bo‘ladi",
      "Bir jinsli bo‘lmagan sistemada ikkita yechim bo‘lishi mumkin emas",
      "$X_1 - X_2$ ham $AX = B$ ning yechimi bo‘ladi",
      "Yo‘q, chunki $A(X_1 + X_2) = AX_1 + AX_2 = B + B = 2B \\ne B$; ammo ularning ayirmasi $X_1 - X_2$ mos bir jinsli $AX = \\Theta$ sistemaning yechimi bo‘ladi"
    ],
    "answer": 3,
    "difficulty": "Qiyin",
    "explanation": "$A(X_1 - X_2) = AX_1 - AX_2 = B - B = \\Theta$. Shuning uchun ikkita xususiy yechim ayirmasi mos bir jinsli sistemaning yechimi bo‘ladi."
  },
  {
    "id": "T5_Q29",
    "topicId": 5,
    "num": 29,
    "question": "$n$ ta noma’lumli $n$ ta bir jinsli chiziqli tenglamalar sistemasi ($AX = \\Theta$) nolmas yechimlarga ega bo‘lishi uchun asosiy determinant $\\Delta = \\det(A)$ qanday shartni qanoatlantirishi zarur va yetarli?",
    "options": [
      "$\\Delta = \\det(A) \\ne 0$ bo‘lishi zarur va yetarli",
      "$\\Delta = 1$ bo‘lishi zarur va yetarli",
      "$\\Delta = \\det(A) = 0$ bo‘lishi zarur va yetarli",
      "$\\Delta > 0$ bo‘lishi zarur va yetarli"
    ],
    "answer": 2,
    "difficulty": "Oson",
    "explanation": "Kvadrat bir jinsli sistemada nolmas yechim mavjud bo‘lishi sharti $r(A) < n \\iff \\det(A) = 0$."
  },
  {
    "id": "T5_Q30",
    "topicId": 5,
    "num": 30,
    "question": "Agar chiziqli tenglamalar sistemasida $r(A) = r(A \\mid B) = n$ bo‘lsa, mos bir jinsli sistemaning fundamental yechimlar sistemasi (FYS) nechta vektordan iborat bo‘ladi?",
    "options": [
      "Cheksiz ko‘p vektordan iborat bo‘ladi",
      "FYS mavjud emas ($n - r = n - n = 0$), chunki mos bir jinsli sistema faqat yagona nol yechimga ega",
      "$n$ ta vektordan iborat bo‘ladi",
      "$1$ ta nolmas vektordan iborat bo‘ladi"
    ],
    "answer": 1,
    "difficulty": "O'rta",
    "explanation": "5-ma’ruza (5, 8-slaydlar): $r = n$ bo‘lganda erkli o‘zgaruvchilar soni $n - r = 0$ bo‘lib, bir jinsli sistema faqat nol yechimga ega va nolmas FYS mavjud emas."
  },
  {
    "id": "T6_Q1",
    "topicId": 6,
    "num": 1,
    "question": "Chiziqli tenglamalar sistemasini yechishning «Gauss usuli» mohiyati nimadan iborat (5-slayd)?",
    "options": [
      "Tenglamalarni kvadratga oshirib qo‘shish",
      "Elementar satr almashtirishlari yordamida noma’lumlarni ketma-ket yo‘qotib, sistemani ekvivalent uchburchak (yoki pog‘onali) shaklga keltirish va so‘ngra teskari yurish bilan noma’lumlarni topish",
      "Har bir noma’lum uchun alohida $n$-tartibli determinant hisoblash",
      "Asosiy matritsaning barcha minorlari va algebraik to‘ldiruvchilarini hisoblash orqali teskari matritsa topish"
    ],
    "answer": 1,
    "difficulty": "Oson",
    "explanation": "6-ma’ruza (5-7-slaydlar): Gauss usuli noma’lumlarni ketma-ket yo‘qotish orqali sistemani uchburchak/pog‘onali ko‘rinishga keltirishga asoslangan."
  },
  {
    "id": "T6_Q2",
    "topicId": 6,
    "num": 2,
    "question": "Gauss usulining «to‘g‘ri yurish» va «teskari yurish» bosqichlarida qanday ishlar bajariladi (5-7-slaydlar)?",
    "options": [
      "To‘g‘ri yurishda kengaytirilgan matritsa yuqori uchburchak (pog‘onali) shaklga keltiriladi; teskari yurishda esa oxirgi tenglamadan boshlab yuqoriga qarab $x_n, x_{n-1}, \\dots, x_1$ ketma-ket topiladi",
      "To‘g‘ri yurishda $x_1$ dan $x_n$ gacha topiladi; teskari yurishda matritsa transponirlanadi",
      "To‘g‘ri yurishda determinant topiladi; teskari yurishda teskari matritsa topiladi",
      "Ikkala bosqichda ham faqat ustunlar almashtiriladi"
    ],
    "answer": 0,
    "difficulty": "Oson",
    "explanation": "6-ma’ruza (5, 7-slaydlar): To‘g‘ri yurish natijasida $\\tilde{a}_{nn}x_n = \\tilde{b}_n$ tenglama hosil bo‘ladi, undan $x_n$ topilib, yuqoridagi tenglamalarga ketma-ket qo‘yiladi."
  },
  {
    "id": "T6_Q3",
    "topicId": 6,
    "num": 3,
    "question": "Gauss usulida tenglamalar sistemasini yechishda kengaytirilgan $(A \\mid B)$ matritsaning qatori ustida qanday elementar almashtirishlar bajarishga ruxsat etiladi?",
    "options": [
      "Ozod hadlar ustuni $B$ ni asosiy matritsaning 1-ustuni bilan almashtirish",
      "Satrning barcha elementlariga bir xil $k \\ne 0$ sonni qo‘shib chiqish",
      "Kengaytirilgan matritsani transponirlash",
      "Tenglamalar (satrlar) o‘rnini almashtirish, satrni noldan farqli songa ko‘paytirish/bo‘lish, bir satrni songa ko‘paytirib boshqa satrga qo‘shish hamda $0 = 0$ nol satrni tashlab yuborish"
    ],
    "answer": 3,
    "difficulty": "O'rta",
    "explanation": "Tenglamalar sistemasining yechimlari to‘plami o‘zgarmasligi (ekvivalent sistema hosil bo‘lishi) uchun amallar tenglamalar (satrlar) ustida bajariladi."
  },
  {
    "id": "T6_Q4",
    "topicId": 6,
    "num": 4,
    "question": "Gauss usulida to‘g‘ri yurish natijasida kengaytirilgan matritsada barcha elementlari noldan iborat $(0\\; 0\\; \\dots\\; 0 \\mid 0)$ satr hosil bo‘lsa, bu nimani bildiradi (8-9-slaydlar)?",
    "options": [
      "Hisoblashda xatolik ketganini bildiradi",
      "Sistemaning barcha noma’lumlari $0$ ga teng ekanligini bildiradi",
      "Mos tenglama qolgan tenglamalarning chiziqli kombinatsiyasi ekanligini bildiradi; bu nol satr tashlab yuboriladi va sistemaning rangi tenglamalar sonidan kichik bo‘ladi",
      "Sistema birgalikda emasligini (yechimga ega emasligini) bildiradi"
    ],
    "answer": 2,
    "difficulty": "Oson",
    "explanation": "6-ma’ruza (8-9-slaydlar): $(0\\; 0\\; 0\\; 0 \\mid 0)$ satr tashlab yuboriladi va qolgan pog‘onali tenglamalardan erkli o‘zgaruvchi $\\alpha \\in \\mathbb{R}$ orqali umumiy yechim yoziladi."
  },
  {
    "id": "T6_Q5",
    "topicId": 6,
    "num": 5,
    "question": "Gauss usulida to‘g‘ri yurish davomida $(0\\; 0\\; \\dots\\; 0 \\mid b)$ ko‘rinishdagi satr ($b \\ne 0$) hosil bo‘lsa, qanday xulosa chiqariladi?",
    "options": [
      "Sistema yagona nol yechimga ega",
      "Sistema birgalikda emas (yechimga ega emas), chunki $0 \\cdot x_1 + \\dots + 0 \\cdot x_n = b \\ne 0$ ziddiyatli tenglama hosil bo‘ldi va $r(A) < r(A \\mid B)$",
      "Oxirgi noma’lum $x_n = b$ ga teng",
      "Sistema cheksiz ko‘p yechimga ega"
    ],
    "answer": 1,
    "difficulty": "Oson",
    "explanation": "Chap tomonda barcha koeffitsiyentlar nol, o‘ngda esa $b \\ne 0$ bo‘lishi Kroneker-Kapelli teoremasiga ko‘ra $r(A) \\ne r(A \\mid B)$ ekanligini ko‘rsatadi."
  },
  {
    "id": "T6_Q6",
    "topicId": 6,
    "num": 6,
    "question": "Chiziqli tenglamalar sistemasini yechishning «Gauss-Jordan usuli» qanday sxema orqali ifodalanadi (10-slayd)?",
    "options": [
      "$(A \\mid B) \\sim (E \\mid X)$, ya’ni kengaytirilgan matritsaning asosiy qismi birlik matritsa $E$ ga keltirilganda ozod hadlar ustuni bevosita $X$ yechimga aylanadi",
      "$(A \\mid B) \\sim (O \\mid X)$",
      "$(A \\mid B) \\sim (A^T \\mid B^T)$",
      "$(A \\mid E) \\sim (B \\mid X)$"
    ],
    "answer": 0,
    "difficulty": "Oson",
    "explanation": "6-ma’ruza (10-slayd): Gauss-Jordan usulida $(A \\mid B) \\sim (E \\mid X)$ sxemasi bajariladi."
  },
  {
    "id": "T6_Q7",
    "topicId": 6,
    "num": 7,
    "question": "Gauss-Jordan usuli oddiy Gauss usulidan qaysi jihati bilan farq qiladi (10-12-slaydlar)?",
    "options": [
      "Gauss-Jordan usuli faqat 2 noma’lumli sistemalarga qo‘llaniladi",
      "Gauss-Jordan usulida faqat determinantlar hisoblanadi",
      "Gauss-Jordan usulida faqat ustunlar ustida amal bajariladi",
      "Gauss usulida faqat bosh diagonal ostidagi elementlar nolga aylantirilsa, Gauss-Jordan usulida bosh diagonalning ham ostidagi, ham ustidagi barcha elementlar nolga aylantiriladi va teskari yurish talab etilmaydi"
    ],
    "answer": 3,
    "difficulty": "Oson",
    "explanation": "6-ma’ruza (10-12-slaydlar): Gauss-Jordan usulida asosiy matritsa diagonal (birlik $E$) ko‘rinishga keltirilgani uchun noma’lumlar qiymati to‘g‘ridan-to‘g‘ri hosil bo‘ladi."
  },
  {
    "id": "T6_Q8",
    "topicId": 6,
    "num": 8,
    "question": "Bazis tenglamalar sistemasi haqidagi **Teorema** (13-slayd) qanday bayon etiladi?",
    "options": [
      "Bazis tenglamalar sistemasi har doim yechimga ega emas",
      "Chiziqli tenglamalar sistemasi faqat bir jinsli sistemaga ekvivalentdir",
      "Chiziqli tenglamalar sistemasi o‘zining bazis tenglamalar sistemasiga ekvivalentdir",
      "Bazis tenglamalar sistemasida erkli o‘zgaruvchilar qatnashmaydi"
    ],
    "answer": 2,
    "difficulty": "Oson",
    "explanation": "6-ma’ruza (13-slayd, Teorema): Chiziqli tenglamalar sistemasi o‘zining bazis tenglamalar sistemasiga ekvivalent."
  },
  {
    "id": "T6_Q9",
    "topicId": 6,
    "num": 9,
    "question": "Tenglamalar sistemasining «bazis yechimi» deb qanday yechimga aytiladi (13-14-slaydlar)?",
    "options": [
      "Barcha komponentlari bir-biriga teng bo‘lgan yechimga",
      "Erkli o‘zgaruvchilarning qiymatlari nolga teng deb olinib, faqat bazis o‘zgaruvchilari noldan farqli bo‘lishi mumkin bo‘lgan yechimga",
      "Faqat bir jinsli sistemaning fundamental yechimiga",
      "Bazis o‘zgaruvchilari nolga teng deb olinib, erkli o‘zgaruvchilari $1$ ga teng bo‘lgan yechimga"
    ],
    "answer": 1,
    "difficulty": "Oson",
    "explanation": "6-ma’ruza (13-14-slaydlar, Ta’rif): Faqat bazis o‘zgaruvchilari noldan farqli bo‘lishi mumkin bo‘lgan yechim tenglamalar sistemasining bazis yechimi deyiladi. Bazis yechimda erkli o‘zgaruvchilarning qiymatlari nolga teng deb olinadi."
  },
  {
    "id": "T6_Q10",
    "topicId": 6,
    "num": 10,
    "question": "Tenglamalar sistemasi cheksiz ko‘p yechimga ega bo‘lganda ($r < n$), uning bazis yechimlari soni haqida qanday tasdiq o‘rinli (14-slayd)?",
    "options": [
      "Tenglamalar sistemasi cheksiz ko‘p yechimga ega bo‘lsa-da, bazis yechimlar soni chekli bo‘ladi va bazis minorlar soniga teng bo‘ladi",
      "Bazis yechimlar soni ham cheksiz ko‘p bo‘ladi",
      "Bazis yechimlar soni har doim $1$ ga teng bo‘ladi",
      "Bazis yechim umuman mavjud bo‘lmaydi"
    ],
    "answer": 0,
    "difficulty": "Oson",
    "explanation": "6-ma’ruza (14-slayd): Tenglamalar sistemasi cheksiz ko‘p bo‘lsa-da, bazis yechimlar soni chekli bo‘ladi. Bazis yechimlar soni bazis minorlar soniga teng bo‘ladi."
  },
  {
    "id": "T6_Q11",
    "topicId": 6,
    "num": 11,
    "question": "Sistemada noma’lumlar soni $n$ va sistema rangi $r$ bo‘lsa, noma’lumlarni bazis va erkli o‘zgaruvchilarga ajratish usullari (guruhlari) soni qaysi formula bilan hisoblanadi (14-slayd)?",
    "options": [
      "$P_n = n! \\cdot r!$",
      "$A_n^r = \\frac{n!}{(n - r)!}$",
      "$C_n^r = \\frac{r!}{n! \\cdot (n - r)!}$",
      "$C_n^r = \\frac{n!}{r! \\cdot (n - r)!}$"
    ],
    "answer": 3,
    "difficulty": "Oson",
    "explanation": "6-ma’ruza (14-slayd): $C_n^r = \\frac{n!}{r!(n-r)!}$, bu yerda $n$ — noma’lumlar soni, $r$ — rang."
  },
  {
    "id": "T6_Q12",
    "topicId": 6,
    "num": 12,
    "question": "Agar sistemada noma’lumlar soni $n$ va sistema rangi $r$ ($r < n$) bo‘lsa, har bir bazis guruhda nechta «bazis o‘zgaruvchi» va nechta «erkli o‘zgaruvchi» bo‘ladi (15-slayd)?",
    "options": [
      "$n - r$ ta bazis o‘zgaruvchi va $r$ ta erkli o‘zgaruvchi bo‘ladi",
      "Bazis va erkli o‘zgaruvchilar soni har doim teng bo‘ladi",
      "$r$ ta bazis o‘zgaruvchi va $n - r$ ta erkli o‘zgaruvchi bo‘ladi",
      "$n$ ta bazis o‘zgaruvchi va $r$ ta erkli o‘zgaruvchi bo‘ladi"
    ],
    "answer": 2,
    "difficulty": "Oson",
    "explanation": "6-ma’ruza (15-slayd): Bazis o‘zgaruvchilar soni sistema rangi $r$ ga, erkli o‘zgaruvchilar soni esa $n - r$ ga teng."
  },
  {
    "id": "T6_Q13",
    "topicId": 6,
    "num": 13,
    "question": "Qanday shart bajarilganda tanlangan $r$ ta noma’lumlar guruhi haqiqatan ham «bazis o‘zgaruvchilar» bo‘la oladi (16-slayd)?",
    "options": [
      "Tanlangan noma’lumlarning indekslari faqat toq sonlar bo‘lganda",
      "Shu $r$ ta noma’lumning koeffitsiyentlar ustunlaridan tuzilgan $r$-tartibli determinant (minor) noldan farqli bo‘lganda ($\\det \\ne 0$)",
      "Har qanday $r$ ta noma’lum hech qanday shartsiz bazis bo‘la oladi",
      "Shu noma’lumlarning koeffitsiyentlaridan tuzilgan minor nolga teng bo‘lganda ($\\det = 0$)"
    ],
    "answer": 1,
    "difficulty": "O'rta",
    "explanation": "6-ma’ruza (16-slayd): $C_n^r$ ta guruh ichidan faqat mos $r$-tartibli minori noldan farqli ($\\ne 0$) bo‘lgan guruhlargina bazis o‘zgaruvchilar bo‘la oladi."
  },
  {
    "id": "T6_Q14",
    "topicId": 6,
    "num": 14,
    "question": "Agar tanlangan $r$ ta noma’lumga mos keluvchi $r$-tartibli minor nolga teng bo‘lsa (16-slayd), bu guruh haqida qanday xulosa chiqariladi?",
    "options": [
      "Ushbu noma’lumlar ustunlari chiziqli bog‘liq bo‘lgani sababli ular bazis o‘zgaruvchilar guruhini tashkil qila olmaydi va ulardan bazis yechim hosil bo‘lmaydi",
      "Bu holatda sistema birgalikda bo‘lmay qoladi",
      "Ushbu guruhga mos bazis yechimning barcha komponentlari $1$ ga teng bo‘ladi",
      "Ushbu guruhdan cheksiz ko‘p bazis yechim chiqadi"
    ],
    "answer": 0,
    "difficulty": "O'rta",
    "explanation": "6-ma’ruza (16-slayd): Masalan, 10 ta kombinatorik juftlikdan 4 tasida minor 0 ga teng bo‘lgani uchun ular bazis bo‘la olmaydi va faqat qolgan 6 tasidan bazis yechim topiladi."
  },
  {
    "id": "T6_Q15",
    "topicId": 6,
    "num": 15,
    "question": "Bazis yechimlar soni $N_{\\text{bazis}}$ va kombinatorik guruhlar soni $C_n^r$ orasida umumiy holda qanday munosabat o‘rinli?",
    "options": [
      "$N_{\\text{bazis}} = n!$",
      "$N_{\\text{bazis}} > C_n^r$",
      "$N_{\\text{bazis}} = 0$",
      "$1 \\le N_{\\text{bazis}} \\le C_n^r$ (bazis yechimlar soni noldan farqli bazis minorlar soniga teng bo‘lib, $C_n^r$ dan oshmaydi)"
    ],
    "answer": 3,
    "difficulty": "O'rta",
    "explanation": "Sistema rangi $r$ bo‘lgani uchun kamida bitta $r$-tartibli minor noldan farqli ($N_{\\text{bazis}} \\ge 1$) va jami $r$-tartibli minorlar soni $C_n^r$ dan oshmaydi."
  },
  {
    "id": "T6_Q16",
    "topicId": 6,
    "num": 16,
    "question": "Tanlangan bazis o‘zgaruvchilar guruhi bo‘yicha bazis yechimni topish algoritmi qanday (17-slayd)?",
    "options": [
      "Barcha o‘zgaruvchilar $1$ ga teng deb olinadi",
      "Faqat ozod hadlar ustuni ko‘chirib yoziladi",
      "Barcha $n - r$ ta erkli o‘zgaruvchilar $0$ ga teng deb olinib sistemadan tushirib qoldiriladi, hosil bo‘lgan $r \\times r$ kvadrat sistema yechilib $r$ ta bazis o‘zgaruvchi qiymati topiladi va $n$ o‘lchovli ustun-vektorga o‘z o‘rinlariga joylashtiriladi",
      "Bazis o‘zgaruvchilar $0$ ga teng deb olinib, erkli o‘zgaruvchilar topiladi"
    ],
    "answer": 2,
    "difficulty": "O'rta",
    "explanation": "6-ma’ruza (17-slayd): Erkli o‘zgaruvchilarga $0$ berilganda $r$ ta tenglama va $r$ ta bazis noma’lumli ($\\det \\ne 0$) kvadrat sistema qoladi va uning yagona yechimi bazis yechimni beradi."
  },
  {
    "id": "T6_Q17",
    "topicId": 6,
    "num": 17,
    "question": "Gauss usulida to‘g‘ri yurishda navbatdagi qadamda bosh diagonalda $0$ elementi uchrab qolsa ($a_{kk} = 0$), algoritmni davom ettirish uchun nima qilinadi?",
    "options": [
      "Butun satr $0$ ga ko‘paytiriladi",
      "Shu ustunning quyiroq qismida noldan farqli element qatnashgan biror satr bilan $k$-satrning o‘rni almashtiriladi",
      "Sistema yechimga ega emas deb to‘xtatiladi",
      "Ozod hadlar ustuni tashlab yuboriladi"
    ],
    "answer": 1,
    "difficulty": "O'rta",
    "explanation": "Tayanch (yetakchi) element nol bo‘lib qolsa, quyidagi satrlardan noldan farqli elementli satr yuqoriga ko‘chiriladi (satrlar o‘rni almashtiriladi)."
  },
  {
    "id": "T6_Q18",
    "topicId": 6,
    "num": 18,
    "question": "Gauss-Jordan usulida $(A \\mid B)$ matritsani $(E \\mid X)$ ga keltirishda har bir tayanch element $a_{kk}$ ni $1$ ga tenglashtirish uchun qanday amal bajariladi?",
    "options": [
      "$k$-satrning barcha elementlari (shu jumladan ozod hadi ham) $a_{kk} \\ne 0$ tayanch elementga bo‘lib chiqiladi",
      "Faqat $a_{kk}$ element o‘chirilib o‘rniga $1$ yozib qo‘yiladi",
      "$k$-satrning barcha elementlaridan $(a_{kk} - 1)$ soni ayirib chiqiladi",
      "$k$-ustun $a_{kk}$ ga bo‘linadi"
    ],
    "answer": 0,
    "difficulty": "Oson",
    "explanation": "6-ma’ruza (12-slayd): Tenglama ekvivalentligi buzilmasligi uchun butun satr (ham koeffitsiyentlar, ham ozod had) $a_{kk}$ songa bo‘linadi."
  },
  {
    "id": "T6_Q19",
    "topicId": 6,
    "num": 19,
    "question": "Kramer qoidasi va Teskari matritsa usuliga nisbatan Gauss hamda Gauss-Jordan usullarining eng katta nazariy va amaliy ustunligi nimada?",
    "options": [
      "Kramer usuli Gauss usuliga qaraganda katta $n$ larda kamroq amal talab qiladi",
      "Gauss usuli faqat 2-tartibli sistemalarga qo‘llaniladi",
      "Gauss usulida hech qachon kasr sonlar hosil bo‘lmaydi",
      "Gauss va Gauss-Jordan usullari tenglamalar soni $m$ va noma’lumlar soni $n$ ixtiyoriy bo‘lgan hamda asosiy determinanti nolga teng bo‘lgan sistemalarga ham to‘liq qo‘llaniladi"
    ],
    "answer": 3,
    "difficulty": "O'rta",
    "explanation": "Kramer va $X=A^{-1}B$ usullari faqat $m=n$ va $\\det(A) \\ne 0$ bo‘lganda ishlaydi; Gauss usuli esa ixtiyoriy $m \\times n$ sistemaning birgalikdaligini ham tekshiradi, umumiy yechimini ham topadi."
  },
  {
    "id": "T6_Q20",
    "topicId": 6,
    "num": 20,
    "question": "Agar sistemaning asosiy matritsasida ikkita noma’lumga (masalan $x_1$ va $x_3$ ga) mos keluvchi ustunlar o‘zaro proporsional bo‘lsa, bu ikkala noma’lum bir vaqtda bitta bazis guruhga kira oladimi (16-slayd)?",
    "options": [
      "Faqat proporsionallik koeffitsiyenti musbat bo‘lganda kira oladi",
      "Ha, proporsional ustunlar har doim bazis tashkil qiladi",
      "Yo‘q, kira olmaydi, chunki proporsional ustunlar qatnashgan har qanday minor determinantning 8-xossasiga ko‘ra nolga teng bo‘ladi",
      "Faqat ozod hadlar nol bo‘lganda kira oladi"
    ],
    "answer": 2,
    "difficulty": "Qiyin",
    "explanation": "6-ma’ruza (15-16-slaydlar): $(2, 3)^T$ va $(4, 6)^T$ ustunlar proporsional bo‘lgani uchun ulardan tuzilgan minor $\\begin{vmatrix} 2 & 4 \\\\ 3 & 6 \\end{vmatrix} = 0$ bo‘lib, $x_1$ va $x_3$ birgalikda bazis bo‘la olmaydi."
  },
  {
    "id": "T6_Q21",
    "topicId": 6,
    "num": 21,
    "question": "Bazis tenglamalar sistemasini tuzishda asosiy matritsaning bazis minoriga kirmagan qolgan $m - r$ ta tenglamalari nima sababdan tashlab yuboriladi?",
    "options": [
      "Chunki u tenglamalar noto‘g‘ri tuzilgan bo‘ladi",
      "Chunki birgalikda bo‘lgan sistemada qolgan $m - r$ ta tenglama bazis tenglamalarning chiziqli kombinatsiyasi bo‘lib, yangi ma’lumot bermaydi (13-slayd, Teorema)",
      "Chunki ularning ozod hadlari har doim manfiy bo‘ladi",
      "Chunki ularda noma’lumlar qatnashmaydi"
    ],
    "answer": 1,
    "difficulty": "O'rta",
    "explanation": "6-ma’ruza (13-slayd): Chiziqli tenglamalar sistemasi o‘zining $r$ ta chiziqli erkli tenglamadan iborat bazis sistemasiga ekvivalent."
  },
  {
    "id": "T6_Q22",
    "topicId": 6,
    "num": 22,
    "question": "Agar $n$ ta noma’lumli chiziqli tenglamalar sistemasida $r(A) = r(A \\mid B) = r < n$ bo‘lsa, har bir bazis yechimda nechta o‘zgaruvchi majburiy ravishda $0$ ga tenglashtiriladi?",
    "options": [
      "$n - r$ ta erkli o‘zgaruvchi majburiy ravishda $0$ ga tenglashtiriladi",
      "Barcha $n$ ta o‘zgaruvchi $0$ ga tenglashtiriladi",
      "Faqat $1$ ta o‘zgaruvchi $0$ ga tenglashtiriladi",
      "$r$ ta bazis o‘zgaruvchi $0$ ga tenglashtiriladi"
    ],
    "answer": 0,
    "difficulty": "Oson",
    "explanation": "6-ma’ruza (14-15-slaydlar): Erkli o‘zgaruvchilar soni $n - r$ ta bo‘lib, bazis yechimda ularning barchasi nolga teng deb olinadi."
  },
  {
    "id": "T6_Q23",
    "topicId": 6,
    "num": 23,
    "question": "Gauss-Jordan usuli bilan $(A \\mid B)$ matritsa kanonik pog‘onali shaklga keltirilganda ($r < n$), bazis o‘zgaruvchilarga mos ustunlar qanday ko‘rinishga keladi?",
    "options": [
      "Uchburchak ko‘rinishda qoladi",
      "Barcha elementlari $1$ ga teng ustunlar ko‘rinishiga keladi",
      "To‘liq nol ustunlar ko‘rinishiga keladi",
      "$r$-tartibli birlik matritsa $E_r$ ning ustunlari (bitta $1$ va qolganlari $0$) ko‘rinishiga keladi"
    ],
    "answer": 3,
    "difficulty": "O'rta",
    "explanation": "Gauss-Jordan usulida har bir bazis ustunda tayanch element $1$ ga, undan yuqori va pastdagi barcha elementlar $0$ ga aylantiriladi."
  },
  {
    "id": "T6_Q24",
    "topicId": 6,
    "num": 24,
    "question": "Kanonik Gauss-Jordan shaklga keltirilgan $(E_r \\mid D \\mid d)$ matritsadan mos bazis yechim qanday o‘qib olinadi?",
    "options": [
      "Yana teskari yurish bajarish talab etiladi",
      "Determinant hisoblash orqali topiladi",
      "Erkli o‘zgaruvchilarga $0$ berilganda bazis o‘zgaruvchilarning qiymatlari to‘g‘ridan-to‘g‘ri o‘ng tomondagi $d$ ozod hadlar ustuniga teng bo‘lib chiqadi",
      "Bazis o‘zgaruvchilar $D$ matritsa elementlariga teng bo‘ladi"
    ],
    "answer": 2,
    "difficulty": "O'rta",
    "explanation": "$x_{\\text{bazis}} + D x_{\\text{erkli}} = d$ da $x_{\\text{erkli}} = 0$ qo‘yilsa, darhol $x_{\\text{bazis}} = d$ hosil bo‘ladi!"
  },
  {
    "id": "T6_Q25",
    "topicId": 6,
    "num": 25,
    "question": "Agar sistemada $n$ ta noma’lum bo‘lib, uning rangi $r = 1$ bo‘lsa (bitta chiziqli erkli tenglama), kombinatorik bazis guruhlar soni $C_n^1$ nechaga teng bo‘ladi?",
    "options": [
      "$1$ taga teng",
      "$C_n^1 = n$ taga teng (har bir noma’lum alohida bittadan bazis o‘zgaruvchi bo‘lishi mumkin, qolgan $n-1$ tasi erkli bo‘ladi)",
      "$n - 1$ taga teng",
      "$n!$ taga teng"
    ],
    "answer": 1,
    "difficulty": "O'rta",
    "explanation": "$C_n^1 = \\frac{n!}{1!(n-1)!} = n$."
  },
  {
    "id": "T6_Q26",
    "topicId": 6,
    "num": 26,
    "question": "Agar chiziqli tenglamalar sistemasida noma’lumlar soni $n$ va rang $r = n - 1$ bo‘lsa (1 ta erkli o‘zgaruvchi), bazis guruhlar soni $C_n^{n-1}$ nechaga teng?",
    "options": [
      "$C_n^{n-1} = n$ taga teng",
      "$1$ taga teng",
      "$\\frac{n(n-1)}{2}$ taga teng",
      "$n - 1$ taga teng"
    ],
    "answer": 0,
    "difficulty": "O'rta",
    "explanation": "Simmetriya xossasiga ko‘ra $C_n^{n-1} = C_n^1 = \\frac{n!}{(n-1)!1!} = n$."
  },
  {
    "id": "T6_Q27",
    "topicId": 6,
    "num": 27,
    "question": "Gauss usulida ikkita tenglama o‘rnini almashtirish yoki tenglamani noldan farqli songa ko‘paytirish sistemaning yechimlar to‘plamini o‘zgartiradimi?",
    "options": [
      "Ha, yechimlar ishorasi o‘zgarib ketadi",
      "Yechimlar soni kamayib ketadi",
      "Ha, yechimlar shu songa ko‘payib ketadi",
      "Yo‘q, elementar almashtirishlar natijasida boshlang‘ich sistemaga teng kuchli (ekvivalent, ya’ni yechimlar to‘plami aynan bir xil bo‘lgan) sistema hosil bo‘ladi"
    ],
    "answer": 3,
    "difficulty": "Oson",
    "explanation": "Elementar satr almashtirishlar qaytariluvchi (invertible) bo‘lgani uchun sistemaning yechimlari to‘plamini mutlaqo o‘zgartirmaydi."
  },
  {
    "id": "T6_Q28",
    "topicId": 6,
    "num": 28,
    "question": "Nima uchun Gauss usulida to‘g‘ri yurishda biror satrni $0$ songa ko‘paytirish elementar almashtirish hisoblanmaydi va taqiqlanadi?",
    "options": [
      "Nolga ko‘paytirishga ruxsat beriladi",
      "Chunki nolga ko‘paytirish juda qiyin",
      "Chunki satrni $0$ ga ko‘paytirish shu tenglamani yo‘q qilib yuboradi (qaytarilmas amal) va matritsa rangini sun’iy ravishda kamaytirib, cheksiz ko‘p yot yechimlarni keltirib chiqaradi",
      "Chunki nolga ko‘paytirilsa sistema yechimga ega bo‘lmay qoladi"
    ],
    "answer": 2,
    "difficulty": "O'rta",
    "explanation": "3-ma’ruza (15-slayd, 2-elementar almashtirish): Satrni faqat NOLDAN FARQLI ($k \\ne 0$) songa ko‘paytirish va bo‘lish mumkin."
  },
  {
    "id": "T6_Q29",
    "topicId": 6,
    "num": 29,
    "question": "Bir jinsli bo‘lmagan sistemaning har bir bazis yechimi shu sistemaning xususiy yechimi hisoblanadimi?",
    "options": [
      "Faqat nol vektor bazis yechim bo‘ladi",
      "Ha, har bir bazis yechim sistemaning barcha tenglamalarini qanoatlantirgani sababli uning xususiy yechimi hisoblanadi (erkli o‘zgaruvchilar nolga teng bo‘lgan xususiy yechim)",
      "Bazis yechim faqat umumiy yechim bo‘la oladi",
      "Yo‘q, bazis yechim sistemaning yechimi hisoblanmaydi"
    ],
    "answer": 1,
    "difficulty": "Oson",
    "explanation": "6-ma’ruza (13-14-slaydlar): Bazis yechim erkli o‘zgaruvchilarning $0$ qiymatlarida olingan xususiy yechimdir."
  },
  {
    "id": "T6_Q30",
    "topicId": 6,
    "num": 30,
    "question": "Gauss-Jordan usulida $(A \\mid B) \\sim (E \\mid X)$ zanjirini bajarish mohiyatan $A \\cdot X = B$ tenglamaning ikkala tomonini chapdan qaysi matritsaga ko‘paytirishga teng kuchli?",
    "options": [
      "Chapdan $A^{-1}$ teskari matritsaga ko‘paytirishga ($A^{-1}AX = A^{-1}B \\iff EX = A^{-1}B$)",
      "Chapdan $A^T$ matritsaga ko‘paytirishga",
      "Birlik matritsa $E$ ni qo‘shishga",
      "O‘ngdan $B^{-1}$ matritsaga ko‘paytirishga"
    ],
    "answer": 0,
    "difficulty": "Qiyin",
    "explanation": "$A$ ni $E$ ga keltiruvchi barcha elementar satr almashtirishlari ko‘paytmasi $A^{-1}$ ga teng bo‘lib, u bir vaqtda $B$ ustunni $X = A^{-1}B$ ga aylantiradi."
  },
  {
    "id": "T7_Q1",
    "topicId": 7,
    "num": 1,
    "question": "«$n$ o‘lchovli vektor» deb nimaga aytiladi va u qanday belgilanadi (4-slayd)?",
    "options": [
      "$n$ ta sonning tartiblangan tizimiga $n$ o‘lchovli vektor deyiladi; lotin alifbosining bosh harflari ($A, B, \\dots, X, Y$) bilan ustun matritsa yoki $\\vec{a} = (a_1, a_2, \\dots, a_n)$ satr ko‘rinishida belgilanadi",
      "$n \\times n$ kvadrat matritsaga vektor deyiladi",
      "Faqat tekislikdagi kesmaga aytiladi va $n \\le 2$ bo‘lishi shart",
      "$n$ ta sonning tartibsiz to‘plamiga aytiladi va yagona son bilan belgilanadi"
    ],
    "answer": 0,
    "difficulty": "Oson",
    "explanation": "7-ma’ruza (4-slayd, Ta’rif): $n$ ta sonning tartiblangan tizimiga $n$ o‘lchovli vektor deyiladi."
  },
  {
    "id": "T7_Q2",
    "topicId": 7,
    "num": 2,
    "question": "$n$ o‘lchovli $X$ va $Y$ vektorlar ustida qo‘shish ($Z = X + Y$) va songa ko‘paytirish ($\\lambda X$) chiziqli amallari qanday aniqlanadi (4-5-slaydlar)?",
    "options": [
      "Vektorlarni transponirlab determinant hisoblash orqali aniqlanadi",
      "Faqat birinchi komponentga $\\lambda$ ni ko‘paytirish orqali aniqlanadi",
      "Komponentlarni o‘zaro ko‘paytirib bitta songa keltirish orqali aniqlanadi",
      "Xuddi matritsalardagi kabi mos komponentlarini qo‘shish ($x_i + y_i$) va har bir komponentni $\\lambda$ songa ko‘paytirish ($\\lambda x_i$) orqali aniqlanadi"
    ],
    "answer": 3,
    "difficulty": "Oson",
    "explanation": "7-ma’ruza (4-5-slaydlar): $n$ o‘lchovli vektorlar ustida qo‘shish va songa ko‘paytirish amallari xuddi matritsalardagi kabi komponentma-komponent bajariladi."
  },
  {
    "id": "T7_Q3",
    "topicId": 7,
    "num": 3,
    "question": "Vektorlar ustida chiziqli amallarning 8 ta asosiy xossasi (7-slayd) qaysi javobda to‘g‘ri ifodalangan?",
    "options": [
      "Skalyar songa ko‘paytirishda $\\alpha(X+Y) = \\alpha X + Y$ bo‘ladi",
      "$1^\\circ.\\;X+Y=X-Y;\\quad 2^\\circ.\\;X+\\Theta=\\Theta;\\quad 3^\\circ.\\;1\\cdot X=\\Theta$",
      "$1^\\circ.\\;X+Y=Y+X;\\quad 2^\\circ.\\;X+(Y+Z)=(X+Y)+Z;\\quad 3^\\circ.\\;X+\\Theta=X;\\quad 4^\\circ.\\;X+(-X)=\\Theta;\\quad 5^\\circ.\\;1\\cdot X=X;\\quad 6^\\circ.\\;(\\alpha+\\beta)X=\\alpha X+\\beta X;\\quad 7^\\circ.\\;\\alpha(X+Y)=\\alpha X+\\alpha Y;\\quad 8^\\circ.\\;\\alpha(\\beta X)=(\\alpha\\beta)X$",
      "Vektorlar ustida qo‘shish amali kommutativ emas ($X+Y \\ne Y+X$)"
    ],
    "answer": 2,
    "difficulty": "Oson",
    "explanation": "7-ma’ruza (7-slayd): Ushbu 8 ta xossa chiziqli (vektor) fazo aksiomalarining asosini tashkil etadi."
  },
  {
    "id": "T7_Q4",
    "topicId": 7,
    "num": 4,
    "question": "Ikkita bir xil o‘lchovli $X = (x_1, \\dots, x_n)^T$ va $Y = (y_1, \\dots, y_n)^T$ vektorlarning «skalyar ko‘paytmasi» $(X, Y)$ deb nimaga aytiladi (8-slayd)?",
    "options": [
      "Mos koordinatalar ko‘paytmasidan tuzilgan yangi vektorga: $(x_1 y_1, \\dots, x_n y_n)^T$",
      "Shu vektorlar mos koordinatalari ko‘paytmalarining yig‘indisiga teng songa: $(X, Y) = x_1 y_1 + x_2 y_2 + \\dots + x_n y_n = X^T Y = Y^T X$",
      "Vektorlar uzunliklari yig‘indisiga: $|X| + |Y|$",
      "3-tartibli determinantga"
    ],
    "answer": 1,
    "difficulty": "Oson",
    "explanation": "7-ma’ruza (8-slayd, Ta’rif): Ikkita bir xil o‘lchovli vektorlarning skalyar ko‘paytmasi deb mos koordinatalari ko‘paytmalari yig‘indisiga teng songa aytiladi."
  },
  {
    "id": "T7_Q5",
    "topicId": 7,
    "num": 5,
    "question": "Vektorlarning skalyar ko‘paytmasi qanday 5 ta asosiy xossaga ega (11-slayd)?",
    "options": [
      "$1^\\circ.\\;(X,X) \\ge 0;\\quad 2^\\circ.\\;(X,X) = 0 \\iff X = \\Theta;\\quad 3^\\circ.\\;(X,Y) = (Y,X);\\quad 4^\\circ.\\;(X, Y+Z) = (X,Y)+(X,Z);\\quad 5^\\circ.\\;(\\lambda X, Y) = \\lambda(X,Y)$",
      "$1^\\circ.\\;(X,X) < 0;\\quad 2^\\circ.\\;(X,Y) = -(Y,X);\\quad 3^\\circ.\\;(\\lambda X, Y) = \\lambda^2 (X,Y)$",
      "Skalyar ko‘paytma natijasi har doim vektor bo‘ladi",
      "$(X,X) = 0$ tenglik har qanday birlik vektor uchun o‘rinli"
    ],
    "answer": 0,
    "difficulty": "Oson",
    "explanation": "7-ma’ruza (11-slayd): Vektorlarning skalyar ko‘paytmasi nomanfiylik, aniqlanganlik, simmetriklik (kommutativlik) va chiziqlilik xossalariga ega."
  },
  {
    "id": "T7_Q6",
    "topicId": 7,
    "num": 6,
    "question": "Ikki vektorning «vektor ko‘paytmasi» $[\\vec{a} \\times \\vec{b}]$ qanday formula orqali aniqlanadi (12-slayd)?",
    "options": [
      "$(\\vec{a} + \\vec{b}) / 2$ o‘rta arifmetik vektor orqali",
      "$a_1 b_1 + a_2 b_2 + a_3 b_3$ skalyar yig‘indi orqali",
      "2-tartibli determinant orqali aniqlanuvchi son",
      "$[\\vec{a} \\times \\vec{b}] = \\begin{vmatrix} \\vec{i} & \\vec{j} & \\vec{k} \\\\ a_1 & a_2 & a_3 \\\\ b_1 & b_2 & b_3 \\end{vmatrix}$ 3-tartibli simvolik determinant orqali aniqlanuvchi vektor"
    ],
    "answer": 3,
    "difficulty": "Oson",
    "explanation": "7-ma’ruza (12-slayd): Ikki vektorning vektor ko‘paytmasi 1-satrida $\\vec{i}, \\vec{j}, \\vec{k}$ birlik ortlar turgan 3-tartibli determinant orqali hisoblanadi."
  },
  {
    "id": "T7_Q7",
    "topicId": 7,
    "num": 7,
    "question": "Uchta $\\vec{a}, \\vec{b}, \\vec{c}$ vektorning «aralash ko‘paytmasi» $([\\vec{a} \\times \\vec{b}] \\cdot \\vec{c})$ qanday aniqlanadi (13-slayd)?",
    "options": [
      "Uchta vektor uzunliklarining yig‘indisiga teng son",
      "1-satrida $\\vec{i}, \\vec{j}, \\vec{k}$ turgan 3-tartibli determinantga teng vektor",
      "Satrlari shu uchta vektorning koordinatalaridan tuzilgan $\\begin{vmatrix} a_1 & a_2 & a_3 \\\\ b_1 & b_2 & b_3 \\\\ c_1 & c_2 & c_3 \\end{vmatrix}$ 3-tartibli determinantga teng son",
      "Har bir koordinatalar ko‘paytmasi $a_1 b_1 c_1 + a_2 b_2 c_2 + a_3 b_3 c_3$"
    ],
    "answer": 2,
    "difficulty": "Oson",
    "explanation": "7-ma’ruza (13-slayd): Uchta vektorning aralash ko‘paytmasi ularning koordinatalaridan tuzilgan 3-tartibli determinantga teng."
  },
  {
    "id": "T7_Q8",
    "topicId": 7,
    "num": 8,
    "question": "Vektorlarning skalyar va vektor ko‘paytmalarining geometrik ma’nolari: vektor proyeksiyasi $\\text{Pr}_{\\vec{a}}(\\vec{b})$ va ikki vektordan yasalgan parallelogramm yuzi $S$ qaysi formulalar bilan topiladi (14-slayd)?",
    "options": [
      "$\\text{Pr}_{\\vec{a}}(\\vec{b}) = |\\vec{b}| / |\\vec{a}|;\\qquad S = |\\vec{a}| \\cdot |\\vec{b}| \\cos\\varphi$",
      "$\\text{Pr}_{\\vec{a}}(\\vec{b}) = |\\vec{b}| \\cos\\varphi;\\qquad S = |[\\vec{a} \\times \\vec{b}]| = |\\vec{a}| \\cdot |\\vec{b}| \\sin\\varphi$",
      "$\\text{Pr}_{\\vec{a}}(\\vec{b}) = |\\vec{a}| \\sin\\varphi;\\qquad S = (\\vec{a}, \\vec{b})$",
      "$\\text{Pr}_{\\vec{a}}(\\vec{b}) = |[\\vec{a} \\times \\vec{b}]|;\\qquad S = |\\vec{a}| + |\\vec{b}|$"
    ],
    "answer": 1,
    "difficulty": "Oson",
    "explanation": "7-ma’ruza (14-slayd): $\\text{Pr}_{\\vec{a}}(\\vec{b}) = |\\vec{b}|\\cos\\varphi$, parallelogramm yuzi esa vektor ko‘paytmaning moduliga teng: $S = |[\\vec{a} \\times \\vec{b}]| = |\\vec{a}|\\cdot|\\vec{b}|\\sin\\varphi$."
  },
  {
    "id": "T7_Q9",
    "topicId": 7,
    "num": 9,
    "question": "Uchta vektordan yasalgan parallelepiped hajmi $V_{\\text{par}}$ nimaga teng va qachon bu uchta vektor «komplanar» (bir tekislikda yotuvchi) bo‘ladi (15-slayd)?",
    "options": [
      "$V_{\\text{par}} = |([\\vec{a} \\times \\vec{b}] \\cdot \\vec{c})|$ (aralash ko‘paytma moduliga teng); agar aralash ko‘paytma $0$ ga teng bo‘lsa, vektorlar komplanar bo‘ladi",
      "$V_{\\text{par}} = |\\vec{a}| + |\\vec{b}| + |\\vec{c}|$; agar uzunliklari teng bo‘lsa, komplanar bo‘ladi",
      "$V_{\\text{par}} = |[\\vec{a} \\times \\vec{b}]|$; agar skalyar ko‘paytma $0$ ga teng bo‘lsa, komplanar bo‘ladi",
      "$V_{\\text{par}} = (\\vec{a}, \\vec{b}) \\cdot |\\vec{c}|$"
    ],
    "answer": 0,
    "difficulty": "Oson",
    "explanation": "7-ma’ruza (15-slayd): Uchta vektorning aralash ko‘paytmasi moduli parallelepiped hajmiga teng; aralash ko‘paytma nolga teng bo‘lsa, vektorlar komplanar (bir tekislikda yotuvchi) bo‘ladi."
  },
  {
    "id": "T7_Q10",
    "topicId": 7,
    "num": 10,
    "question": "$n$ o‘lchovli $X$ vektorning «uzunligi» (moduli, normasi) $|X|$ ta’rifi va formulasi qanday (16-slayd)?",
    "options": [
      "Vektor komponentlari kvadratlari yig‘indisiga (ildizsiz) aytiladi: $|X| = (X,X)$",
      "Vektorning eng katta komponentiga aytiladi",
      "Vektor komponentlari yig‘indisiga teng songa aytiladi: $|X| = x_1 + x_2 + \\dots + x_n$",
      "Vektor komponentlari kvadratlari yig‘indisining kvadrat ildiziga teng songa aytiladi: $|X| = \\sqrt{(X,X)} = \\sqrt{x_1^2 + x_2^2 + \\dots + x_n^2}$"
    ],
    "answer": 3,
    "difficulty": "Oson",
    "explanation": "7-ma’ruza (16-slayd, Ta’rif): $|X| = \\sqrt{(X,X)} = \\sqrt{x_1^2 + x_2^2 + \\dots + x_n^2}$ songa $n$ o‘lchovli $X$ vektor uzunligi (moduli, normasi) deyiladi."
  },
  {
    "id": "T7_Q11",
    "topicId": 7,
    "num": 11,
    "question": "Vektorlarning uzunligi qanday 3 ta asosiy xossaga ega (17-slayd)?",
    "options": [
      "$1^\\circ.\\;|X| = 1;\\qquad 2^\\circ.\\;|\\lambda X| = \\lambda^2 |X|;\\qquad 3^\\circ.\\;|X + Y| \\ge |X| + |Y|$",
      "$|X \\cdot Y| = |X| + |Y|$",
      "$1^\\circ.\\;|X| \\ge 0;\\qquad 2^\\circ.\\;|\\lambda X| = |\\lambda| \\cdot |X|;\\qquad 3^\\circ.\\;|X + Y| \\le |X| + |Y|$ (uchburchak tengsizligi)",
      "$1^\\circ.\\;|X| < 0;\\qquad 2^\\circ.\\;|\\lambda X| = \\lambda |X|;\\qquad 3^\\circ.\\;|X + Y| = |X| + |Y|$"
    ],
    "answer": 2,
    "difficulty": "Oson",
    "explanation": "7-ma’ruza (17-slayd): Vektor uzunligi nomanfiylik, bir jinslilik ($|\\lambda X| = |\\lambda|\\cdot|X|$) va uchburchak tengsizligi ($|X+Y| \\le |X|+|Y|$) xossalariga ega."
  },
  {
    "id": "T7_Q12",
    "topicId": 7,
    "num": 12,
    "question": "Ikkita $n$ o‘lchovli noldan farqli $X$ va $Y$ vektorlar orasidagi burchak $\\varphi \\in [0; \\pi]$ qaysi formula bilan aniqlanadi (18-slayd)?",
    "options": [
      "$\\cos\\varphi = (X, Y) \\cdot |X| \\cdot |Y|$",
      "$\\cos\\varphi = \\frac{(X, Y)}{|X| \\cdot |Y|} = \\frac{\\sum_{i=1}^n x_i y_i}{\\sqrt{\\sum_{i=1}^n x_i^2} \\cdot \\sqrt{\\sum_{i=1}^n y_i^2}}$",
      "$\\text{tg}\\,\\varphi = \\frac{|X|}{|Y|}$",
      "$\\sin\\varphi = \\frac{(X, Y)}{|X| \\cdot |Y|}$"
    ],
    "answer": 1,
    "difficulty": "Oson",
    "explanation": "7-ma’ruza (18-slayd, Ta’rif): Ikki vektor orasidagi burchak kosinusi ularning skalyar ko‘paytmasini uzunliklari ko‘paytmasiga bo‘lish orqali topiladi."
  },
  {
    "id": "T7_Q13",
    "topicId": 7,
    "num": 13,
    "question": "«$n$ o‘lchovli arifmetik vektor fazo» deb nimaga aytiladi va haqiqiy hamda kompleks arifmetik vektor fazolar qanday belgilanadi (19-slayd)?",
    "options": [
      "Barcha $n$ o‘lchovli vektorlar to‘plami chiziqli amallar (qo‘shish va songa ko‘paytirish) bilan birgalikda $n$ o‘lchovli arifmetik vektor fazo deyiladi; haqiqiysi $\\mathbb{R}^n$, kompleksi $\\mathbb{C}^n$ deb belgilanadi",
      "Faqat $3$ ta vektordan iborat to‘plamga arifmetik fazo deyiladi",
      "Chiziqli amallar kiritilmagan sonlar to‘plamiga aytiladi",
      "Komponentlari faqat butun sonlar bo‘lgan fazoga $\\mathbb{R}^n$ deyiladi"
    ],
    "answer": 0,
    "difficulty": "Oson",
    "explanation": "7-ma’ruza (19-slayd, Ta’rif): Komponentlari haqiqiy sonlardan iborat bo‘lsa haqiqiy arifmetik vektor fazo ($\\mathbb{R}^n$), kompleks sonlardan iborat bo‘lsa kompleks arifmetik vektor fazo ($\\mathbb{C}^n$) deyiladi."
  },
  {
    "id": "T7_Q14",
    "topicId": 7,
    "num": 14,
    "question": "**Koshi-Bunyakovskiy tengsizligi** haqidagi Teorema (20-slayd) qaysi javobda to‘g‘ri berilgan?",
    "options": [
      "$|X - Y| \\ge |X| + |Y|$ tengsizlik o‘rinli",
      "$|(X, Y)| = |X| + |Y|$ tenglik o‘rinli",
      "$|(X, Y)| \\ge |X| \\cdot |Y|$ tengsizlik o‘rinli",
      "$\\mathbb{R}^n$ arifmetik fazodan olingan ixtiyoriy $X$ va $Y$ vektorlar uchun $|(X, Y)| \\le |X| \\cdot |Y|$ yoki $\\left|\\sum_{i=1}^n x_i y_i\\right| \\le \\sqrt{\\sum_{i=1}^n x_i^2} \\cdot \\sqrt{\\sum_{i=1}^n y_i^2}$ tengsizlik o‘rinli"
    ],
    "answer": 3,
    "difficulty": "Oson",
    "explanation": "7-ma’ruza (20-slayd, Teorema): $|(X, Y)| \\le |X| \\cdot |Y|$ — Koshi-Bunyakovskiy tengsizligi."
  },
  {
    "id": "T7_Q15",
    "topicId": 7,
    "num": 15,
    "question": "Umumiy «chiziqli (yoki vektor) fazo» $L$ ta’rifi (21-22-slaydlar) qanday?",
    "options": [
      "Elementlari faqat geometrik yo‘nalishli kesmalardan iborat bo‘lgan to‘plamga aytiladi",
      "Hech qanday aksioma bajarilishi talab etilmaydigan ixtiyoriy sonlar to‘plamiga aytiladi",
      "Elementlari ixtiyoriy tabiatli bo‘lgan $L$ to‘plamda qo‘shish ($x+y \\in L$) va songa ko‘paytirish ($\\lambda x \\in L$) amallari kiritilgan bo‘lib, bu amallar 8 ta chiziqli fazo aksiomasini qanoatlantirsa, $L$ to‘plam chiziqli fazo deyiladi",
      "Faqat ko‘paytirish va bo‘lish amallari kiritilgan to‘plamga aytiladi"
    ],
    "answer": 2,
    "difficulty": "Oson",
    "explanation": "7-ma’ruza (21-22-slaydlar): $L$ to‘plamda yig‘indi va skalyar songa ko‘paytma aniqlangan bo‘lib, 8 ta aksioma bajarilsa, $L$ chiziqli fazo (haqiqiy yoki kompleks) deyiladi."
  },
  {
    "id": "T7_Q16",
    "topicId": 7,
    "num": 16,
    "question": "Chiziqli fazoning 5 ta xossasi (23-slayd) qaysi javobda to‘liq va to‘g‘ri berilgan?",
    "options": [
      "1) Nol vektor bir nechta bo‘ladi; 2) $0 \\cdot X = X$; 3) $\\lambda \\cdot \\Theta = \\lambda$",
      "1) Yagona nol vektor $\\Theta$ mavjud; 2) Har bir vektorga yagona qarama-qarshi $-X$ vektor mavjud; 3) $0 \\cdot X = \\Theta$; 4) $\\lambda \\cdot \\Theta = \\Theta$; 5) $\\lambda \\cdot X = \\Theta \\implies \\lambda = 0$ yoki $X = \\Theta$",
      "Chiziqli fazoda nol vektor bo‘lishi shart emas",
      "1) Qarama-qarshi vektor mavjud emas; 2) $\\lambda \\cdot X = \\Theta$ faqat $\\lambda = 1$ da bajariladi"
    ],
    "answer": 1,
    "difficulty": "Oson",
    "explanation": "7-ma’ruza (23-slayd): Ushbu 5 ta xossa chiziqli fazoning 8 ta aksiomasidan mantiqan kelib chiqadi."
  },
  {
    "id": "T7_Q17",
    "topicId": 7,
    "num": 17,
    "question": "Chiziqli fazodagi $x_1, x_2, \\dots, x_n$ elementlar qachon «chiziqli bog‘liq» va qachon «chiziqli erkli» deyiladi (24-slayd)?",
    "options": [
      "$\\lambda_1 x_1 + \\lambda_2 x_2 + \\dots + \\lambda_n x_n = \\Theta$ tenglik $\\lambda_i$ koeffitsiyentlardan kamida bittasi noldan farqli bo‘lganda bajarilsa — chiziqli bog‘liq; faqat barcha $\\lambda_1 = \\lambda_2 = \\dots = \\lambda_n = 0$ bo‘lgandagina bajarilsa — chiziqli erkli deyiladi",
      "Barcha $\\lambda_i = 0$ da bajarilsa — chiziqli bog‘liq; noldan farqli $\\lambda_i$ larda bajarilsa — chiziqli erkli deyiladi",
      "Elementlar juft-juft kollinear bo‘lsa — chiziqli erkli deyiladi",
      "Elementlar yig‘indisi $1$ ga teng bo‘lsa — chiziqli erkli deyiladi"
    ],
    "answer": 0,
    "difficulty": "Oson",
    "explanation": "7-ma’ruza (24-slayd): Trivial bo‘lmagan kombinatsiyada $\\Theta$ hosil bo‘lsa chiziqli bog‘liq, faqat trivial ($\\lambda_i=0$) kombinatsiyada $\\Theta$ hosil bo‘lsa chiziqli erkli deyiladi."
  },
  {
    "id": "T7_Q18",
    "topicId": 7,
    "num": 18,
    "question": "$n$ o‘lchovli $L$ chiziqli fazoning «bazisi» va elementning «bazis bo‘yicha yoyilmasi» deb nimaga aytiladi (27-slayd)?",
    "options": [
      "$x = e_1 \\cdot e_2 \\cdot \\dots \\cdot e_n$ ko‘paytmaga bazis bo‘yicha yoyilma deyiladi",
      "$L$ fazodagi har qanday chiziqli bog‘liq vektorlar to‘plamiga bazis deyiladi",
      "Faqat bitta nol vektordan iborat to‘plamga bazis deyiladi",
      "$L$ fazodagi har qanday $n$ ta chiziqli erkli vektorlar sistemasiga fazoning bazisi ($e_1, \\dots, e_n$) deyiladi; $x = \\mu_1 e_1 + \\mu_2 e_2 + \\dots + \\mu_n e_n$ tenglik esa $x$ elementning bazis bo‘yicha yoyilmasi deyiladi"
    ],
    "answer": 3,
    "difficulty": "Oson",
    "explanation": "7-ma’ruza (27-slayd, Ta’riflar): $n$ o‘lchovli chiziqli fazoda har qanday $n$ ta chiziqli erkli vektorlar sistemasi bazis deyiladi."
  },
  {
    "id": "T7_Q19",
    "topicId": 7,
    "num": 19,
    "question": "Barcha 2-tartibli ($2 \\times 2$) matritsalar chiziqli fazosi $M^2$ ning standart bazisi nechta matritsadan iborat va bu fazoning o‘lchami nechaga teng (25-26-slaydlar)?",
    "options": [
      "$2$ ta bazis matritsadan iborat bo‘lib, $2$ o‘lchovlidir",
      "$8$ ta matritsadan iborat bo‘lib, $8$ o‘lchovlidir",
      "$e_1, e_2, e_3, e_4$ — $4$ ta bazis matritsadan iborat bo‘lib, $M^2$ fazo $4$ o‘lchovlidir",
      "$1$ ta birlik matritsadan iborat bo‘lib, $1$ o‘lchovlidir"
    ],
    "answer": 2,
    "difficulty": "Oson",
    "explanation": "7-ma’ruza (26-slayd): Har bir $2 \\times 2$ matritsa $a_{11}e_1 + a_{12}e_2 + a_{21}e_3 + a_{22}e_4$ ko‘rinishda yoziladi va $e_1, e_2, e_3, e_4$ chiziqli erkli bo‘lgani uchun fazo $4$ o‘lchovli."
  },
  {
    "id": "T7_Q20",
    "topicId": 7,
    "num": 20,
    "question": "$L$ chiziqli fazoning $V$ qism to‘plami qachon $L$ fazoning «chiziqli qism fazosi» deyiladi (28-slayd)?",
    "options": [
      "$V$ qism to‘plamda nol vektor qatnashmasa",
      "$V$ qism to‘plam ham $L$ da aniqlangan elementlarni qo‘shish ($x+y \\in V$) va songa ko‘paytirish ($\\lambda x \\in V$) amallariga nisbatan chiziqli fazo tashkil qilsa",
      "$V$ qism to‘plam faqat bitta nolmas elementdan iborat bo‘lsa",
      "$V$ qism to‘plam chiziqli amallarga nisbatan yopiq bo‘lmasa"
    ],
    "answer": 1,
    "difficulty": "Oson",
    "explanation": "7-ma’ruza (28-slayd): $L$ chiziqli fazoning $V$ qism to‘plami ham $L$ da aniqlangan qo‘shish va songa ko‘paytirish amallariga nisbatan chiziqli fazo tashkil qilsa, $V$ ga chiziqli qism fazo deyiladi."
  },
  {
    "id": "T7_Q21",
    "topicId": 7,
    "num": 21,
    "question": "Nima uchun $\\mathbb{R}^4$ fazoda $V_1 = \\{(x_1,x_2,x_3,x_4) : x_1 - 2x_3 = 0\\}$ to‘plam chiziqli qism fazo bo‘ladi, ammo $V_2 = \\{(x_1,x_2,x_3,x_4) : x_1 - 2x_3 = 1\\}$ to‘plam chiziqli qism fazo BO‘LA OLMAYDI (28-slayd)?",
    "options": [
      "Chunki $V_1$ bir jinsli tenglama bilan berilgan bo‘lib, $\\Theta \\in V_1$, $x+y \\in V_1$ va $\\lambda x \\in V_1$ shartlarni qanoatlantiradi; $V_2$ da esa nol vektor yotmaydi va ikki element yig‘indisida $x_1+y_1 - 2(x_3+y_3) = 2 \\ne 1$ bo‘lib yopiqlik buziladi",
      "Ikkalasi ham chiziqli qism fazo bo‘ladi",
      "Chunki $V_2$ da manfiy sonlar qatnashgan",
      "Hech biri chiziqli qism fazo bo‘la olmaydi"
    ],
    "answer": 0,
    "difficulty": "O'rta",
    "explanation": "7-ma’ruza (28-slayd): Faqat bir jinsli chiziqli munosabatlar bilan berilgan to‘plamlar yig‘indi va songa ko‘paytirishga nisbatan yopiq bo‘lib, chiziqli qism fazo tashkil qiladi."
  },
  {
    "id": "T7_Q22",
    "topicId": 7,
    "num": 22,
    "question": "Bir bazisdan ($\\vec{e}_1, \\vec{e}_2, \\vec{e}_3$) ikkinchi bazisga ($\\vec{e}_1', \\vec{e}_2', \\vec{e}_3'$) o‘tishda «o‘tish matritsasi» $P$ qanday tuziladi (33-34-slaydlar)?",
    "options": [
      "O‘tish matritsasi har doim birlik matritsa $E$ ga teng bo‘ladi",
      "Eski bazis vektorlari $P$ matritsaning satrlariga yoziladi",
      "Vektorning o‘z koordinatalari bosh diagonalga yoziladi",
      "Yangi bazis vektorlarining ($\\vec{e}_1', \\vec{e}_2', \\vec{e}_3'$) eski bazis bo‘yicha yoyilma koordinatalari mos ravishda $P$ matritsaning ustunlari qilib yoziladi"
    ],
    "answer": 3,
    "difficulty": "O'rta",
    "explanation": "7-ma’ruza (33-34-slaydlar): $\\vec{e}_1', \\vec{e}_2', \\vec{e}_3'$ vektorlarning eski bazisdagi ustun-vektorlari ketma-ket qo‘yilib $P$ o‘tish matritsasi hosil qilinadi."
  },
  {
    "id": "T7_Q23",
    "topicId": 7,
    "num": 23,
    "question": "Eski bazisdan yangi bazisga o‘tish matritsasi $P$ bo‘lsa, vektorning yangi bazisdagi koordinatalari $\\vec{x}'$ qaysi formula bilan topiladi (34-slayd)?",
    "options": [
      "$\\vec{x}' = P \\cdot \\vec{x}$",
      "$\\vec{x}' = \\vec{x} \\cdot P$",
      "$P \\cdot \\vec{x}' = \\vec{x} \\implies \\vec{x}' = P^{-1} \\cdot \\vec{x}$",
      "$\\vec{x}' = P^T + \\vec{x}$"
    ],
    "answer": 2,
    "difficulty": "Oson",
    "explanation": "7-ma’ruza (34-slayd): $P \\cdot \\vec{x}' = \\vec{x}$ tenglikdan $\\vec{x}' = P^{-1} \\cdot \\vec{x}$ kelib chiqadi."
  },
  {
    "id": "T7_Q24",
    "topicId": 7,
    "num": 24,
    "question": "O‘tish matritsasi $P$ qanday zaruriy xossaga ega?",
    "options": [
      "$P$ ning teskarisi mavjud emas",
      "$P$ har doim xosmas ($\\det(P) \\ne 0$) kvadrat matritsa bo‘ladi, chunki uning ustunlari yangi bazisning chiziqli erkli vektorlaridan iborat",
      "$P$ har doim simmetrik matritsa bo‘ladi",
      "$P$ har doim xos ($\\det(P) = 0$) matritsa bo‘ladi"
    ],
    "answer": 1,
    "difficulty": "O'rta",
    "explanation": "Yangi bazis vektorlari chiziqli erkli bo‘lgani uchun $r(P) = n \\iff \\det(P) \\ne 0$, shu sababli $P^{-1}$ har doim mavjud."
  },
  {
    "id": "T7_Q25",
    "topicId": 7,
    "num": 25,
    "question": "Koshi-Bunyakovskiy tengsizligi $|(X, Y)| \\le |X| \\cdot |Y|$ nima sababdan ikki $n$ o‘lchovli vektor orasidagi burchak $\\cos\\varphi = \\frac{(X,Y)}{|X|\\cdot|Y|}$ tushunchasini kiritishni qonuniy (asosli) qiladi?",
    "options": [
      "Chunki $|(X, Y)| \\le |X|\\cdot|Y|$ tengsizlikdan $-1 \\le \\frac{(X, Y)}{|X| \\cdot |Y|} \\le 1$ ekanligi kelib chiqadi, kosinus funksiyasi esa aynan $[-1; 1]$ kesmada qiymat qabul qiladi",
      "Chunki skalyar ko‘paytma har doim musbat bo‘ladi",
      "Chunki Koshi-Bunyakovskiy tengsizligi burchakni radian o‘rniga gradusda o‘lchaydi",
      "Chunki uzunliklar har doim $1$ ga teng bo‘ladi"
    ],
    "answer": 0,
    "difficulty": "Qiyin",
    "explanation": "7-ma’ruza (18, 20-slaydlar): $|(X,Y)| / (|X||Y|) \\le 1$ bo‘lgani uchungina $[0; \\pi]$ oraliqda $\\cos\\varphi$ burchagi yagona ravishda aniqlanadi!"
  },
  {
    "id": "T7_Q26",
    "topicId": 7,
    "num": 26,
    "question": "Koshi-Bunyakovskiy tengsizligida $|(X, Y)| = |X| \\cdot |Y|$ aniq tenglik holati qachon va faqat qachon bajariladi?",
    "options": [
      "$X$ va $Y$ vektorlar o‘zaro ortogonal bo‘lganda ($\\cos\\varphi = 0$)",
      "$X$ va $Y$ birlik vektorlar bo‘lganda",
      "Hech qachon tenglik bajarilmaydi",
      "$X$ va $Y$ vektorlar kollinear (chiziqli bog‘liq, ya’ni $Y = \\lambda X$) bo‘lganda ($\\cos\\varphi = \\pm 1$)"
    ],
    "answer": 3,
    "difficulty": "Qiyin",
    "explanation": "$|(X,Y)| = |X||Y||\\cos\\varphi| = |X||Y| \\iff |\\cos\\varphi| = 1 \\iff \\varphi = 0$ yoki $\\varphi = \\pi$ (vektorlar kollinear)."
  },
  {
    "id": "T7_Q27",
    "topicId": 7,
    "num": 27,
    "question": "$n$ o‘lchovli chiziqli fazoda chiziqli erkli vektorlarning maksimal soni nechtaga teng?",
    "options": [
      "$n + 1$ taga teng",
      "Cheksiz ko‘p bo‘ladi",
      "$n$ taga teng (yani fazoning o‘lchamiga teng; har qanday $n+1$ ta vektor albatta chiziqli bog‘liq bo‘ladi)",
      "$n^2$ taga teng"
    ],
    "answer": 2,
    "difficulty": "O'rta",
    "explanation": "Fazo o‘lchami $\\dim L = n$ shu fazodagi chiziqli erkli vektorlarning maksimal sonini bildiradi."
  },
  {
    "id": "T7_Q28",
    "topicId": 7,
    "num": 28,
    "question": "Uchta $\\vec{a}, \\vec{b}, \\vec{c}$ vektorning komplanar (bir tekislikda yotuvchi) bo‘lishi ularning chiziqli bog‘liqligi nuqtai nazaridan nimani anglatadi?",
    "options": [
      "Ular chiziqli erkli va $\\mathbb{R}^3$ da bazis tashkil qilishini anglatadi",
      "Ularning aralash ko‘paytmasi (determinanti) nolga teng bo‘lib, bu uchta vektor chiziqli bog‘liq ekanligini (ulardan biri qolgan ikkitasi orqali chiziqli ifodalanishini) anglatadi",
      "Ular juft-juft ortogonal ekanligini anglatadi",
      "Ularning uzunliklari nolga teng ekanligini anglatadi"
    ],
    "answer": 1,
    "difficulty": "O'rta",
    "explanation": "7-ma’ruza (15-slayd): $\\mathbb{R}^3$ da uchta vektor komplanar $\\iff ([\\vec{a}\\times\\vec{b}]\\cdot\\vec{c}) = \\det(A) = 0 \\iff$ vektorlar chiziqli bog‘liq."
  },
  {
    "id": "T7_Q29",
    "topicId": 7,
    "num": 29,
    "question": "Agar vektorlar sistemasining biror qism sistemasi chiziqli bog‘liq bo‘lsa, butun vektorlar sistemasi haqida nima deyish mumkin?",
    "options": [
      "Butun vektorlar sistemasi ham albatta chiziqli bog‘liq bo‘ladi (qolgan vektorlar oldiga $0$ koeffitsiyent qo‘yish kifoya)",
      "Butun sistema ortonormal bo‘ladi",
      "Qism sistemaga qarab xulosa qilib bo‘lmaydi",
      "Butun sistema chiziqli erkli bo‘ladi"
    ],
    "answer": 0,
    "difficulty": "O'rta",
    "explanation": "Qism sistema chiziqli bog‘liq bo‘lsa, unga yangi vektorlar qo‘shilganda ularning koeffitsiyentlarini $0$ deb olib, noldan farqli kombinatsiyada $\\Theta$ hosil qilish mumkin."
  },
  {
    "id": "T7_Q30",
    "topicId": 7,
    "num": 30,
    "question": "Aksincha, agar $x_1, x_2, \\dots, x_m$ vektorlar sistemasi chiziqli erkli bo‘lsa, uning har qanday qism sistemasi qanday bo‘ladi?",
    "options": [
      "Faqat ikkita vektordan iborat qism sistemasi erkli bo‘ladi",
      "Qism sistemasida nol vektor qatnashadi",
      "Qism sistemasi chiziqli bog‘liq bo‘ladi",
      "Har qanday qism sistemasi ham albatta chiziqli erkli bo‘ladi"
    ],
    "answer": 3,
    "difficulty": "O'rta",
    "explanation": "Agar biror qism sistema chiziqli bog‘liq bo‘lib qolsa, butun sistema ham bog‘liq bo‘lib qolar edi; demak chiziqli erkli sistemaning har qanday qism sistemasi ham chiziqli erklidir."
  },
  {
    "id": "T8_Q1",
    "topicId": 8,
    "num": 1,
    "question": "Nima uchun $n$ o‘lchovli vektorlar to‘plami chiziqli amallarga (qo‘shish va songa ko‘paytirishga) nisbatan «yopiq to‘plam» hosil qiladi deyiladi (6-slayd)?",
    "options": [
      "Chunki $n$ o‘lchovli vektorlar soni chekli bo‘ladi",
      "Chunki $n$ o‘lchovli vektorlarni ko‘paytirganda skalyar son hosil bo‘ladi",
      "Chunki barcha vektorlarning uzunligi $1$ dan oshmaydi",
      "Chunki $n$ o‘lchovli vektorlar ustida bajarilgan chiziqli amallar natijasida yana shu to‘plamga tegishli $n$ o‘lchovli vektor hosil bo‘ladi"
    ],
    "answer": 3,
    "difficulty": "Oson",
    "explanation": "8-ma’ruza (6-slayd): $n$ o‘lchovli vektorlar ustida bajarilgan chiziqli amallar natijasida yana $n$ o‘lchovli vektor hosil bo‘ladi. Shuning uchun bu to‘plam yopiq to‘plam hosil qiladi deyiladi."
  },
  {
    "id": "T8_Q2",
    "topicId": 8,
    "num": 2,
    "question": "$n$ o‘lchovli $m$ ta $A_1, A_2, \\dots, A_m$ vektorlarning «chiziqli kombinatsiyasi» deb nimaga aytiladi (9-slayd)?",
    "options": [
      "Vektorlar uzunliklarining yig‘indisiga aytiladi",
      "Vektorlardan tuzilgan determinantga aytiladi",
      "$\\lambda_1 A_1 + \\lambda_2 A_2 + \\dots + \\lambda_m A_m$ ko‘rinishdagi yig‘indiga aytiladi (bu yerda $\\lambda_i \\in \\mathbb{R}$, $i=1,2,\\dots,m$)",
      "$A_1 \\cdot A_2 \\cdot \\dots \\cdot A_m$ skalyar ko‘paytmaga aytiladi"
    ],
    "answer": 2,
    "difficulty": "Oson",
    "explanation": "8-ma’ruza (9-slayd, Ta’rif): $\\lambda_1 A_1 + \\lambda_2 A_2 + \\dots + \\lambda_m A_m$ yig‘indiga $A_1, A_2, \\dots, A_m$ vektorlarning chiziqli kombinatsiyasi deb ataladi."
  },
  {
    "id": "T8_Q3",
    "topicId": 8,
    "num": 3,
    "question": "$A_1, A_2, \\dots, A_m$ vektorlar sistemasidan tuzilgan $A$ matritsaning rangi $r(A)$ yordamida bu vektorlar sistemasining chiziqli bog‘liqligi yoki erkliligi qanday aniqlanadi (11-slayd)?",
    "options": [
      "Agar $r(A) = m$ bo‘lsa chiziqli bog‘liq; agar $r(A) < m$ bo‘lsa chiziqli erkli bo‘ladi",
      "Agar $r(A) < m$ bo‘lsa vektorlar sistemasi chiziqli bog‘liq; agar $r(A) = m$ bo‘lsa chiziqli erkli bo‘ladi",
      "Matritsa rangi vektorlarning chiziqli erkliligiga bog‘liq emas",
      "Agar $r(A) = 0$ bo‘lsagina chiziqli erkli bo‘ladi"
    ],
    "answer": 1,
    "difficulty": "Oson",
    "explanation": "8-ma’ruza (11-slayd): Agar vektorlar sistemasida $r(A) < m$ bo‘lsa, u holda vektorlar sistemasi chiziqli bog‘liq, agar $r(A) = m$ bo‘lsa, chiziqli erkli bo‘ladi."
  },
  {
    "id": "T8_Q4",
    "topicId": 8,
    "num": 4,
    "question": "Agar vektorlar sistemasi chiziqli bog‘liq bo‘lsa, sistemadagi vektorlarning o‘zaro ifodalanishi haqida qanday tasdiq o‘rinli (13-slayd, Izoh)?",
    "options": [
      "Sistemadagi kamida bitta vektorni qolgan vektorlar orqali chiziqli kombinatsiya ko‘rinishida ifodalash mumkin",
      "Sistemadagi barcha vektorlar o‘zaro ortogonal bo‘ladi",
      "Sistemadagi hech bir vektorni boshqalari orqali ifodalab bo‘lmaydi",
      "Sistemadagi barcha vektorlar birlik vektor bo‘ladi"
    ],
    "answer": 0,
    "difficulty": "Oson",
    "explanation": "8-ma’ruza (13-slayd, Izoh): Agar vektorlar sistemasi chiziqli bog‘liq bo‘lsa, sistemadagi (noldan farqli koeffitsiyentli) vektorni boshqalari orqali ifodalash mumkin."
  },
  {
    "id": "T8_Q5",
    "topicId": 8,
    "num": 5,
    "question": "Ikkita $n$ o‘lchovli $A_1$ va $A_2$ vektorlar qachon o‘zaro «ortogonal vektorlar» deyiladi va real fazoda bu atama qaysi so‘z bilan almashtirilishi mumkin (13-slayd)?",
    "options": [
      "Ularning yig‘indisi nolga teng bo‘lsa",
      "Ularning skalyar ko‘paytmasi $1$ ga teng bo‘lsa; «kollinear» iborasi bilan almashtirilishi mumkin",
      "Ularning vektor ko‘paytmasi nolga teng bo‘lsa; «parallel» iborasi bilan almashtirilishi mumkin",
      "Ularning skalyar ko‘paytmasi nolga teng bo‘lsa ($(A_1, A_2) = 0$); real fazo vektorlari uchun «perpendikulyar» iborasi bilan almashtirilishi mumkin"
    ],
    "answer": 3,
    "difficulty": "Oson",
    "explanation": "8-ma’ruza (13-slayd, Ta’rif): Ikkita $n$ o‘lchovli $A_1$ va $A_2$ vektorlarning skalyar ko‘paytmasi nolga teng bo‘lsa, ular o‘zaro ortogonal («perpendikulyar») vektorlar deyiladi."
  },
  {
    "id": "T8_Q6",
    "topicId": 8,
    "num": 6,
    "question": "Ikki vektor orasidagi burchak $\\varphi$ orqali ortogonal va ortonormal vektorlar qanday ta’riflanadi (14-slayd)?",
    "options": [
      "Uzunliklari o‘zaro teng bo‘lgan ixtiyoriy vektorlar ortlar deyiladi",
      "Orasidagi burchak $\\pi$ ga teng bo‘lgan vektorlar ortonormal deyiladi",
      "Ikki vektor orasidagi burchak $\\pi/2$ ga teng bo‘lsa ular ortogonal vektorlar deyiladi; ortogonal vektorlarning uzunliklari $1$ ga teng bo‘lsa, ortonormal vektorlar yoki ortlar deyiladi",
      "Ikki vektor orasidagi burchak $0$ ga teng bo‘lsa ortogonal, uzunligi $2$ ga teng bo‘lsa ortonormal deyiladi"
    ],
    "answer": 2,
    "difficulty": "Oson",
    "explanation": "8-ma’ruza (14-slayd): Ikki vektor orasidagi burchak $\\pi/2$ ga teng bo‘lsa ortogonal, uzunliklari $1$ ga teng bo‘lgan ortogonal vektorlar esa ortonormal vektorlar (ortlar) deyiladi."
  },
  {
    "id": "T8_Q7",
    "topicId": 8,
    "num": 7,
    "question": "Dekart koordinatalar sistemasi qanday vektorlarni asos (bazis) qilib olish orqali kiritiladi (14-slayd)?",
    "options": [
      "Uzunligi nolga teng vektorlarni asos qilib olish orqali kiritiladi",
      "Ortonormal vektorlarni (ortlarni: tekislikda $\\vec{i}, \\vec{j}$ va fazoda $\\vec{i}, \\vec{j}, \\vec{k}$) asos qilib olish orqali kiritiladi",
      "Ixtiyoriy komplanar vektorlar orqali kiritiladi",
      "Kollinear vektorlarni asos qilib olish orqali kiritiladi"
    ],
    "answer": 1,
    "difficulty": "Oson",
    "explanation": "8-ma’ruza (14-slayd): Ortonormal vektorlarni asos qilib, Dekart koordinata sistemasini kiritamiz ($Oxy$ da $\\vec{a} = x\\vec{i}+y\\vec{j}$, $Oxyz$ da $\\vec{a} = a_1\\vec{i}+a_2\\vec{j}+a_3\\vec{k}$)."
  },
  {
    "id": "T8_Q8",
    "topicId": 8,
    "num": 8,
    "question": "Qanday vektorlar sistemasiga «ortogonal vektorlar sistemasi» deyiladi (17, 19-slaydlar)?",
    "options": [
      "$n$ o‘lchovli noldan farqli vektorlardan tarkib topgan va sistema vektorlarining har qanday ikki jufti o‘zaro ortogonal ($(A_i, A_j) = 0,\\; i \\ne j$) bo‘lgan sistemaga",
      "Chiziqli bog‘liq vektorlar sistemasiga",
      "Faqat birinchi va oxirgi vektori o‘zaro ortogonal bo‘lgan sistemaga",
      "Barcha vektorlarining uzunligi $1$ ga teng, ammo o‘zaro burchagi ixtiyoriy bo‘lgan sistemaga"
    ],
    "answer": 0,
    "difficulty": "Oson",
    "explanation": "8-ma’ruza (17, 19-slaydlar): Sistema vektorlarining har qanday ikki jufti o‘zaro ortogonal bo‘lsa, u holda bu sistemaga ortogonal vektorlar sistemasi deyiladi."
  },
  {
    "id": "T8_Q9",
    "topicId": 8,
    "num": 9,
    "question": "«Evklid fazosi» ($E^n$) deb qanday fazoga aytiladi va har qanday $\\mathbb{R}^n$ fazoni qanday qilib Evklid fazosiga aylantirish mumkin (18-slayd)?",
    "options": [
      "Elementlari faqat $2 \\times 2$ matritsalardan iborat fazoga Evklid fazosi deyiladi",
      "Faqat 1 o‘lchovli chiziqqa Evklid fazosi deyiladi",
      "Skalyar ko‘paytmasi mavjud bo‘lmagan fazoga Evklid fazosi deyiladi",
      "Elementlari orasida skalyar ko‘paytma aniqlangan chiziqli fazoga Evklid fazosi deyiladi; har qanday $\\mathbb{R}^n$ fazoda skalyar ko‘paytmani aniqlash bilan uni Evklid fazosiga aylantirish mumkin"
    ],
    "answer": 3,
    "difficulty": "Oson",
    "explanation": "8-ma’ruza (18-slayd): Agar chiziqli fazo elementlari orasida skalyar ko‘paytma aniqlangan bo‘lsa, bu fazoga Evklid fazosi ($E^n$) deyiladi."
  },
  {
    "id": "T8_Q10",
    "topicId": 8,
    "num": 10,
    "question": "Evklid fazosida $\\{\\vec{a}_1, \\vec{a}_2, \\dots, \\vec{a}_n\\} \\subset E^n$ sistema qachon «ortonormal vektorlar sistemasi» deyiladi (19-slayd)?",
    "options": [
      "Sistemadagi vektorlar juft-juft parallel bo‘lsa",
      "Vektorlarning skalyar ko‘paytmasi har doim $-1$ ga teng bo‘lsa",
      "Sistema ortogonal vektorlar sistemasi bo‘lib ($(\\vec{a}_i, \\vec{a}_k) = 0, i \\ne k$), qo‘shimcha ravishda har bir vektorining uzunligi birga teng ($|\\vec{a}_i| = 1, i=1,2,\\dots,n$) bo‘lsa",
      "Sistemadagi barcha vektorlarning uzunliklari yig‘indisi $1$ ga teng bo‘lsa"
    ],
    "answer": 2,
    "difficulty": "Oson",
    "explanation": "8-ma’ruza (19-slayd): Agar $\\{\\vec{a}_1, \\dots, \\vec{a}_n\\} \\subset E^n$ ortogonal vektorlar sistemasi bo‘lib, $|\\vec{a}_i| = 1$ ($i=1,\\dots,n$) bo‘lsa, bu sistemaga ortonormal vektorlar sistemasi deyiladi."
  },
  {
    "id": "T8_Q11",
    "topicId": 8,
    "num": 11,
    "question": "Evklid fazosining «ortonormal bazisi» deb nimaga aytiladi va uning vektorlari qanday munosabatni qanoatlantiradi (20-slayd)?",
    "options": [
      "$(\\vec{e}_i, \\vec{e}_k) = 0$ ($i = k$ bo‘lsa) va $1$ ($i \\ne k$ bo‘lsa)",
      "$\\{\\vec{e}_1, \\vec{e}_2, \\dots, \\vec{e}_n\\} \\subset E^n$ vektorlar sistemasi $E^n$ fazoning bazisi bo‘lib, ortonormal vektorlar sistemasini tashkil qilsa; $(\\vec{e}_i, \\vec{e}_k) = 1$ ($i = k$ bo‘lsa) va $0$ ($i \\ne k$ bo‘lsa)",
      "Bazis vektorlarining uzunliklari $1, 2, \\dots, n$ ga teng bo‘lsa",
      "Barcha $i, k$ larda $(\\vec{e}_i, \\vec{e}_k) = 1$ bo‘lsa"
    ],
    "answer": 1,
    "difficulty": "Oson",
    "explanation": "8-ma’ruza (20-slayd): Ortonormal bazis uchun $(\\vec{e}_i, \\vec{e}_k) = \\begin{cases} 1, & i = k \\\\ 0, & i \\ne k \\end{cases}$ munosabat o‘rinli."
  },
  {
    "id": "T8_Q12",
    "topicId": 8,
    "num": 12,
    "question": "**Gramm-Shmidt teoremasi** (21-slayd): Har qanday $n$ o‘lchovli haqiqiy Evklid fazosida ortonormallangan bazis mavjudligi haqidagi teorema qanday bayon etiladi?",
    "options": [
      "Har qanday $n$ o‘lchovli haqiqiy Evklid fazosida ortonormallangan bazis mavjud (agar bazis ortonormallanmagan bo‘lsa, uni Gramm-Shmidt formulalari yordamida ortonormallash mumkin)",
      "Ortonormallangan bazis faqat diagonal matritsalar fazosida mavjud",
      "Faqat $n = 2$ va $n = 3$ o‘lchovli Evklid fazolaridagina ortonormallangan bazis mavjud",
      "Ixtiyoriy bazisni ortonormallab bo‘lmaydi"
    ],
    "answer": 0,
    "difficulty": "Oson",
    "explanation": "8-ma’ruza (21-22-slaydlar, Teorema): Har qanday $n$ o‘lchovli haqiqiy Evklid fazosida ortonormallangan bazis mavjud."
  },
  {
    "id": "T8_Q13",
    "topicId": 8,
    "num": 13,
    "question": "Nolmas vektorlardan iborat har qanday ortogonal vektorlar sistemasining chiziqli erkliligi haqida qanday muhim xulosa o‘rinli (23-slayd, Izoh)?",
    "options": [
      "Ortogonal sistemaning determinanti har doim nolga teng bo‘ladi",
      "Ortogonal sistema faqat vektorlar soni juft bo‘lganda chiziqli erkli bo‘ladi",
      "Ortogonal vektorlar sistemasi har doim chiziqli bog‘liq bo‘ladi",
      "Har qanday nolmas vektorlardan iborat ortogonal vektorlar sistemasi chiziqli erkli sistemadir"
    ],
    "answer": 3,
    "difficulty": "Oson",
    "explanation": "8-ma’ruza (23-slayd, Izoh): Har qanday nolmas vektorlardan iborat ortogonal vektorlar sistemasi chiziqli erkli sistemadir."
  },
  {
    "id": "T8_Q14",
    "topicId": 8,
    "num": 14,
    "question": "Nima sababdan nolmas $B_1, B_2, \\dots, B_k$ ortogonal vektorlar sistemasi har doim chiziqli erkli bo‘lishini isbotlash juda oson?",
    "options": [
      "Chunki ularning vektor ko‘paytmasi nolga teng",
      "Chunki ortogonal vektorlar bir to‘g‘ri chiziqda yotadi",
      "$\\lambda_1 B_1 + \\dots + \\lambda_k B_k = \\Theta$ tenglikni $B_i$ ga skalyar ko‘paytirsak, $(B_i, B_j) = 0$ ($i \\ne j$) tufayli faqat $\\lambda_i (B_i, B_i) = 0$ qoladi va $|B_i| \\ne 0$ dan $\\lambda_i = 0$ kelib chiqadi",
      "Chunki ortogonal vektorlarning barcha koordinatalari musbat bo‘ladi"
    ],
    "answer": 2,
    "difficulty": "Qiyin",
    "explanation": "Har bir $i$ uchun $B_i$ ga skalyar ko‘paytirish qolgan barcha hadlarni nolga aylantiradi va $\\lambda_i |B_i|^2 = 0 \\implies \\lambda_i = 0$ ekanligini darhol ko‘rsatadi."
  },
  {
    "id": "T8_Q15",
    "topicId": 8,
    "num": 15,
    "question": "Chiziqli erkli $A_1, A_2, \\dots, A_k$ vektorlar sistemasi ustida ortogonal $B_1, B_2, \\dots, B_k$ vektorlar sistemasini qurish usuli qanday nomlanadi va qaysi formulalar bilan bajariladi (23, 29-slaydlar)?",
    "options": [
      "Kroneker-Kapelli almashtirishi deyiladi",
      "Vektorlar sistemasini «ortogonallash jarayoni» deyiladi va Gramm-Shmidt formulalari: $B_1 = A_1,\\; B_t = A_t - \\sum_{i=1}^{t-1} \\frac{(B_i, A_t)}{(B_i, B_i)} B_i$ yordamida amalga oshiriladi",
      "Vektorlar sistemasini «transponirlash jarayoni» deyiladi va Kramer formulalari yordamida bajariladi",
      "Laplas yoyilmasi deyiladi"
    ],
    "answer": 1,
    "difficulty": "Oson",
    "explanation": "8-ma’ruza (23, 29-slaydlar): Chiziqli erkli $A_1, \\dots, A_k$ sistemani ortogonal $B_1, \\dots, B_k$ sistema bilan almashtirish ortogonallash jarayoni deyiladi va Gramm-Shmidt formulalari bilan bajariladi."
  },
  {
    "id": "T8_Q16",
    "topicId": 8,
    "num": 16,
    "question": "Gramm-Shmidt formulalari bo‘yicha ikkinchi ($B_2$) va uchinchi ($B_3$) ortogonal vektorlar qanday yoziladi (30-slayd)?",
    "options": [
      "$B_2 = A_2 - \\frac{(B_1, A_2)}{(B_1, B_1)} B_1;\\qquad B_3 = A_3 - \\frac{(B_1, A_3)}{(B_1, B_1)} B_1 - \\frac{(B_2, A_3)}{(B_2, B_2)} B_2$",
      "$B_2 = A_2 - (B_1, A_2) B_1;\\qquad B_3 = A_3 - (B_2, A_3) B_2$",
      "$B_2 = \\frac{A_2}{|A_2|};\\qquad B_3 = \\frac{A_3}{|A_3|}$",
      "$B_2 = A_2 + \\frac{(B_1, A_2)}{(B_1, B_1)} B_1;\\qquad B_3 = A_3 + B_2 + B_1$"
    ],
    "answer": 0,
    "difficulty": "O'rta",
    "explanation": "8-ma’ruza (27, 30-slaydlar): Har bir yangi $A_t$ vektordan uning oldingi barcha qurilgan $B_1, \\dots, B_{t-1}$ ortogonal vektorlar yo‘nalishidagi proyeksiyalari ayirib tashlanadi."
  },
  {
    "id": "T8_Q17",
    "topicId": 8,
    "num": 17,
    "question": "Nol bo‘lmagan $B$ vektorning «normallangan» yoki «birlik vektori» deb qanday vektorga aytiladi (32-slayd)?",
    "options": [
      "Koordinatalari faqat $0$ va $1$ sonlardan iborat har qanday vektorga aytiladi",
      "$B - |B|$ vektorga aytiladi",
      "$B \\cdot |B|$ vektorga aytiladi",
      "$\\frac{B}{|B|}$ vektorga (ya’ni $B$ vektorni o‘z uzunligi $|B|$ ga bo‘lishdan hosil bo‘lgan uzunligi $1$ ga teng vektorga) aytiladi"
    ],
    "answer": 3,
    "difficulty": "Oson",
    "explanation": "8-ma’ruza (32-slayd): Nol bo‘lmagan $B$ vektorning normallangan yoki birlik vektori deb $\\frac{B}{|B|}$ vektorga aytiladi."
  },
  {
    "id": "T8_Q18",
    "topicId": 8,
    "num": 18,
    "question": "Agar $B_1, B_2, \\dots, B_k$ ortogonal vektorlar sistemasi bo‘lsa, undan «ortonormallangan vektorlar sistemasi» qanday hosil qilinadi (28, 32-slaydlar)?",
    "options": [
      "Har bir vektordan $B_1$ ni ayirib chiqish orqali",
      "Vektorlarni transponirlash orqali",
      "Har bir vektorni o‘z uzunligiga bo‘lish (normallashtirish) orqali: $\\vec{c}_1 = \\frac{B_1}{|B_1|},\\; \\vec{c}_2 = \\frac{B_2}{|B_2|},\\; \\dots,\\; \\vec{c}_k = \\frac{B_k}{|B_k|}$",
      "Barcha vektorlarni o‘zaro qo‘shib chiqish orqali"
    ],
    "answer": 2,
    "difficulty": "Oson",
    "explanation": "8-ma’ruza (28, 32-slaydlar): Har bir vektori normallangan (birlik vektor ko‘rinishga keltirilgan) ortogonal sistemaga ortonormallangan vektorlar sistemasi deyiladi."
  },
  {
    "id": "T8_Q19",
    "topicId": 8,
    "num": 19,
    "question": "Agar berilgan 4 ta vektordan ($\u000bec{a}_1, \\vec{a}_2, \\vec{a}_3, \\vec{a}_4$) ortonormallangan bazis qurish talab etilsa-yu, ulardan tuzilgan matritsani pog‘onali shaklga keltirganda 3-satr nolga aylanib ketsa (24-25-slaydlar), qanday yo‘l tutiladi?",
    "options": [
      "Barcha 4 ta vektor ustida Gramm-Shmidt jarayoni o‘zgarishsiz davom ettiriladi",
      "Nolga aylangan satrga mos $\\vec{a}_3$ vektor chiziqli bog‘liq bo‘lgani uchun tashlab yuboriladi va qolgan chiziqli erkli $\\vec{a}_1, \\vec{a}_2, \\vec{a}_4$ bazis vektorlar ustida Gramm-Shmidt jarayoni bajariladi",
      "Bunday sistemadan ortogonal sistema qurib bo‘lmaydi",
      "Nol vektorning o‘zi normallashtiriladi"
    ],
    "answer": 1,
    "difficulty": "O'rta",
    "explanation": "8-ma’ruza (24-26-slaydlar): Avval elementar almashtirishlar bilan chiziqli erkli bazis vektorlar ($\\vec{a}_1, \\vec{a}_2, \\vec{a}_4$) ajratib olinadi, so‘ngra ularga Gramm-Shmidt formulalari qo‘llaniladi."
  },
  {
    "id": "T8_Q20",
    "topicId": 8,
    "num": 20,
    "question": "Gramm-Shmidt jarayonida hosil qilingan $B_1, B_2, B_3$ vektorlar haqiqatan ham ortogonal sistema tashkil qilishini tekshirish sharti qanday (27, 31-slaydlar)?",
    "options": [
      "Har bir juftlikning skalyar ko‘paytmasi nolga teng bo‘lishi: $(B_1, B_2) = 0,\\; (B_1, B_3) = 0$ va $(B_2, B_3) = 0$ tekshiriladi",
      "Ularning yig‘indisi $B_1 + B_2 + B_3 = \\Theta$ bo‘lishi tekshiriladi",
      "Ularning uzunliklari o‘zaro tengligi $|B_1| = |B_2| = |B_3|$ tekshiriladi",
      "$(B_1, B_2) = 1$ bo‘lishi tekshiriladi"
    ],
    "answer": 0,
    "difficulty": "Oson",
    "explanation": "8-ma’ruza (27, 31-slaydlar): Tekshirish bosqichida $(B_1, B_2) = 0,\\; (B_1, B_3) = 0,\\; (B_2, B_3) = 0$ tengliklar bajarilishi ko‘rsatiladi."
  },
  {
    "id": "T8_Q21",
    "topicId": 8,
    "num": 21,
    "question": "Vektorni musbat $\\lambda > 0$ skalyar songa ko‘paytirish (masalan normallashtirishda $\\frac{1}{|B_i|}$ ga ko‘paytirish) uning boshqa vektorlarga ortogonallik xossasini buzmasligi qaysi skalyar ko‘paytma xossasiga asoslanadi?",
    "options": [
      "Uchburchak tengsizligiga asoslanadi",
      "Determinantning transponirlash xossasiga asoslanadi",
      "Sarrius qoidasiga asoslanadi",
      "$(\\lambda X, Y) = \\lambda (X, Y)$ chiziqlilik xossasiga: agar $(X, Y) = 0$ bo‘lsa, u holda $(\\frac{1}{|X|}X, \\frac{1}{|Y|}Y) = \\frac{1}{|X||Y|}(X, Y) = 0$ bo‘lib qolaveradi"
    ],
    "answer": 3,
    "difficulty": "O'rta",
    "explanation": "Skalyar ko‘paytmaning 5-xossasiga ko‘ra skalyar ko‘paytuvchilar qavsdan tashqariga chiqadi va $0$ ga ko‘payib yana $0$ beradi."
  },
  {
    "id": "T8_Q22",
    "topicId": 8,
    "num": 22,
    "question": "Ortonormal bazis $\\{\\vec{e}_1, \\vec{e}_2, \\dots, \\vec{e}_n\\}$ ning oddiy (ortonormal bo‘lmagan) bazisdan eng muhim hisoblash afzalligi nimada?",
    "options": [
      "Ortonormal bazisda barcha vektorlar nolga teng bo‘ladi",
      "Ortonormal bazisda vektorlar soni kamroq bo‘ladi",
      "Ixtiyoriy $\\vec{x}$ vektorning bazisdagi $x_i$ koordinatasini tenglamalar sistemasi yechmasdan, to‘g‘ridan-to‘g‘ri $x_i = (\\vec{x}, \\vec{e}_i)$ skalyar ko‘paytma orqali topish mumkin",
      "Ortonormal bazisda skalyar ko‘paytma har doim $0$ ga teng bo‘ladi"
    ],
    "answer": 2,
    "difficulty": "Qiyin",
    "explanation": "$\\vec{x} = \\sum_{k=1}^n x_k \\vec{e}_k$ ni $\\vec{e}_i$ ga skalyar ko‘paytirsak, $(\\vec{e}_k, \\vec{e}_i) = \\delta_{ki}$ tufayli darhol $(\\vec{x}, \\vec{e}_i) = x_i$ kelib chiqadi!"
  },
  {
    "id": "T8_Q23",
    "topicId": 8,
    "num": 23,
    "question": "$n$ o‘lchovli Evklid fazosi $E^n$ da juft-juft ortogonal bo‘lgan noldan farqli vektorlar soni $k$ ko‘pi bilan nechtaga teng bo‘lishi mumkin?",
    "options": [
      "Ko‘pi bilan $n^2$ taga teng",
      "Ko‘pi bilan $n$ taga teng ($k \\le n$), chunki nolmas ortogonal vektorlar chiziqli erkli bo‘lib, $n$ o‘lchovli fazoda chiziqli erkli vektorlar soni $n$ dan oshmaydi",
      "Cheksiz ko‘p bo‘lishi mumkin",
      "Faqat $2$ ta bo‘lishi mumkin"
    ],
    "answer": 1,
    "difficulty": "O'rta",
    "explanation": "8-ma’ruza (23-slayd): Nolmas ortogonal sistema chiziqli erkli bo‘lgani uchun $E^n$ fazoda uning elementlari soni fazo o‘lchami $n$ dan osha olmaydi."
  },
  {
    "id": "T8_Q24",
    "topicId": 8,
    "num": 24,
    "question": "Agar $E^n$ Evklid fazosida aynan $n$ ta noldan farqli va juft-juft ortogonal $B_1, B_2, \\dots, B_n$ vektorlar berilgan bo‘lsa, ular $E^n$ fazoda bazis tashkil qiladimi?",
    "options": [
      "Ha, albatta ortogonal bazis tashkil qiladi (chunki $n$ o‘lchovli fazodagi har qanday $n$ ta chiziqli erkli vektor bazis bo‘ladi)",
      "Faqat $n = 3$ da bazis tashkil qiladi",
      "Yo‘q, ularga yana bitta vektor qo‘shish kerak",
      "Yo‘q, faqat uzunliklari $1$ ga teng bo‘lsagina bazis bo‘la oladi"
    ],
    "answer": 0,
    "difficulty": "O'rta",
    "explanation": "Nolmas ortogonal vektorlar chiziqli erkli (8-ma’ruza, 23-slayd), $n$ o‘lchovli fazodagi $n$ ta chiziqli erkli vektor esa ta’rifga ko‘ra (7-ma’ruza, 27-slayd) fazoning bazisini tashkil qiladi."
  },
  {
    "id": "T8_Q25",
    "topicId": 8,
    "num": 25,
    "question": "Gramm-Shmidt formulasida agar navbatdagi $A_t$ vektor oldingi $B_1, \\dots, B_{t-1}$ vektorlarning barchasiga allaqachon ortogonal bo‘lsa ($(B_i, A_t) = 0$), u holda $B_t$ nimaga teng bo‘ladi?",
    "options": [
      "$B_t = B_1$ ga teng bo‘ladi",
      "$B_t = \\Theta$ nol vektorga aylanadi",
      "$B_t = -A_t$ ga teng bo‘ladi",
      "$B_t = A_t$ ning o‘ziga teng bo‘lib qoladi (chunki barcha ayiriluvchi proyeksiya koeffitsiyentlari $0$ ga teng bo‘ladi)"
    ],
    "answer": 3,
    "difficulty": "O'rta",
    "explanation": "Agar barcha $i < t$ uchun $(B_i, A_t) = 0$ bo‘lsa, $\\sum_{i=1}^{t-1} \\frac{(B_i,A_t)}{(B_i,B_i)}B_i = \\Theta$ bo‘lib, $B_t = A_t$ o‘zgarishsiz qoladi."
  },
  {
    "id": "T8_Q26",
    "topicId": 8,
    "num": 26,
    "question": "Nima sababdan nol vektor $\\Theta$ ortonormal vektorlar sistemasiga hech qachon kira olmaydi?",
    "options": [
      "Nol vektor har doim ortonormal bazisning birinchi elementi bo‘ladi",
      "Chunki nol vektorning uzunligi cheksizga teng",
      "Chunki nol vektorning uzunligi $|\\Theta| = 0$ ga teng bo‘lib, uni normallashtirib (uzunligini $1$ ga teng qilib) bo‘lmaydi hamda nol vektor qatnashgan sistema chiziqli bog‘liq bo‘lib qoladi",
      "Chunki nol vektor boshqa vektorlar bilan qo‘shilmaydi"
    ],
    "answer": 2,
    "difficulty": "Oson",
    "explanation": "8-ma’ruza (19, 32-slaydlar): Ortonormal sistemada barcha vektorlar noldan farqli va $|\\vec{a}_i| = 1$ bo‘lishi shart."
  },
  {
    "id": "T8_Q27",
    "topicId": 8,
    "num": 27,
    "question": "Evklid fazosida ikki o‘zaro ortogonal $X$ va $Y$ vektorlar ($(X, Y) = 0$) uchun $|X + Y|^2$ nimaga teng?",
    "options": [
      "$|X + Y|^2 = 0$",
      "$|X + Y|^2 = |X|^2 + |Y|^2$ (umumlashgan Pifagor teoremasi)",
      "$|X + Y|^2 = (|X| + |Y|)^2$",
      "$|X + Y|^2 = |X|^2 - |Y|^2$"
    ],
    "answer": 1,
    "difficulty": "O'rta",
    "explanation": "$|X+Y|^2 = (X+Y, X+Y) = (X,X) + 2(X,Y) + (Y,Y) = |X|^2 + 0 + |Y|^2 = |X|^2 + |Y|^2$."
  },
  {
    "id": "T8_Q28",
    "topicId": 8,
    "num": 28,
    "question": "Gramm-Shmidt ortogonallash jarayonida har bir $k$-qadamda $\\{B_1, B_2, \\dots, B_k\\}$ ortogonal vektorlar hosil qiluvchi chiziqli qism fazo bilan boshlang‘ich $\\{A_1, A_2, \\dots, A_k\\}$ vektorlar hosil qiluvchi chiziqli qism fazo qanday munosabatda bo‘ladi?",
    "options": [
      "Ular aynan bir xil chiziqli qism fazoni (chiziqli qobiqni) tashkil etadi, ya’ni har bir $B_t$ boshlang‘ich $A_1, \\dots, A_t$ larning chiziqli kombinatsiyasidir",
      "$B_1, \\dots, B_k$ lar kichikroq o‘lchamli fazo hosil qiladi",
      "Ular bir-biri bilan umuman kesishmaydi",
      "Ular o‘zaro ortogonal fazolar bo‘ladi"
    ],
    "answer": 0,
    "difficulty": "Qiyin",
    "explanation": "Gramm-Shmidt formulasida $B_t$ vektor $A_t$ va $B_1, \\dots, B_{t-1}$ orqali chiziqli ifodalangani sababli $\\text{span}(B_1, \\dots, B_k) = \\text{span}(A_1, \\dots, A_k)$."
  },
  {
    "id": "T8_Q29",
    "topicId": 8,
    "num": 29,
    "question": "Agar $A$ matritsaning satr vektorlari (yoki ustun vektorlari) chiziqli erkliligini tekshirish uchun undan tuzilgan kvadrat matritsa determinanti $M_m = \\det(A)$ hisoblansa (12-slayd), qanday mezon o‘rinli?",
    "options": [
      "Agar $\\det(A) = 0$ bo‘lsa, vektorlar chiziqli erkli bo‘ladi",
      "Determinant faqat musbat bo‘lgandagina vektorlar erkli bo‘ladi",
      "Agar $\\det(A) < 0$ bo‘lsa, vektorlar chiziqli bog‘liq bo‘ladi",
      "Agar $\\det(A) \\ne 0$ bo‘lsa, $r(A) = m$ bo‘lib, vektorlar sistemasi chiziqli erkli; agar $\\det(A) = 0$ bo‘lsa, $r(A) < m$ bo‘lib, chiziqli bog‘liq bo‘ladi"
    ],
    "answer": 3,
    "difficulty": "Oson",
    "explanation": "8-ma’ruza (12, 25-slaydlar): $m=n$ ta vektor uchun $\\det(A) \\ne 0 \\iff r(A) = m \\iff$ vektorlar chiziqli erkli (bazis tashkil qiladi)."
  },
  {
    "id": "T8_Q30",
    "topicId": 8,
    "num": 30,
    "question": "Ortonormallangan bazisning $(e_i, e_k) = \\delta_{ik}$ xossasi matritsaviy tilda ushbu bazis vektorlaridan tuzilgan $Q$ matritsa uchun qanday tenglikni beradi?",
    "options": [
      "$Q + Q^T = E$",
      "$\\det(Q) = 0$",
      "$Q^T \\cdot Q = E$ (transponirlangan matritsa bilan o‘zining ko‘paytmasi birlik matritsaga teng)",
      "$Q^2 = O$"
    ],
    "answer": 2,
    "difficulty": "Qiyin",
    "explanation": "$Q^T Q$ ko‘paytmaning $(i, k)$-elementi $i$-ustun va $k$-ustun skalyar ko‘paytmasi $(e_i, e_k) = \\delta_{ik}$ ga teng, ya’ni $Q^T Q = E$."
  },
  {
    "id": "T9_Q1",
    "topicId": 9,
    "num": 1,
    "question": "[Aralash Nazariy: 1–3-mavzular] Ikki xosmas kvadrat $A$ va $B$ matritsalar ko‘paytmasi uchun $(AB)^T$ va $(AB)^{-1}$ amallarning tartib o‘zgarish qoidasi qanday?",
    "options": [
      "Ikkala amalda ham ko‘paytuvchilar tartibi saqlanadi: $(AB)^T = A^T B^T$ va $(AB)^{-1} = A^{-1} B^{-1}$",
      "Transponirlashda o‘rni o‘zgaradi, teskari matritsada o‘zgarmaydi",
      "Ikkala amalda ham ko‘paytuvchilar o‘rni teskarisiga o‘zgaradi: $(AB)^T = B^T A^T$ va $(AB)^{-1} = B^{-1} A^{-1}$",
      "Transponirlashda o‘zgarmaydi, teskari matritsada o‘zgaradi"
    ],
    "answer": 2,
    "difficulty": "Oson",
    "explanation": "1-ma’ruza (25-slayd) va 3-ma’ruza (7-slayd): Ko‘paytmani transponirlashda ham, teskari matritsa olishda ham ko‘paytuvchilar teskari tartibda yoziladi."
  },
  {
    "id": "T9_Q2",
    "topicId": 9,
    "num": 2,
    "question": "[Aralash Nazariy: 2–3-mavzular] $n$-tartibli kvadrat $A$ matritsa uchun quyidagi shartlardan qaysi biri uning «xosmas matritsa» ekanligiga EKVIVALENT EMAS?",
    "options": [
      "$A^{-1}$ teskari matritsa mavjud",
      "$A$ matritsaning rangi $r(A) < n$ ga teng",
      "$A$ matritsaning rangi $r(A) = n$ ga teng",
      "$\\det(A) \\ne 0$"
    ],
    "answer": 1,
    "difficulty": "Oson",
    "explanation": "3-ma’ruza (4, 6, 18-slaydlar): Xosmas matritsa uchun $\\det(A) \\ne 0 \\iff \\exists A^{-1} \\iff r(A) = n$. $r(A) < n$ esa xos ($\\det A = 0$) matritsa shartidir."
  },
  {
    "id": "T9_Q3",
    "topicId": 9,
    "num": 3,
    "question": "[Aralash Nazariy: 2–4-mavzular] Determinantni hisoblashda qachon Uchburchak/Sarrius qoidasi, qachon Laplas teoremasi qo‘llaniladi?",
    "options": [
      "Uchburchak va Sarrius qoidalari faqat 3-tartibli determinantlar uchun, Laplas teoremasi va uchburchak shaklga keltirish usuli esa ixtiyoriy $n$-tartibli determinantlar uchun qo‘llaniladi",
      "Sarrius qoidasi ixtiyoriy $n$-tartibli determinantlar uchun, Laplas teoremasi esa faqat 2-tartibli determinantlar uchun qo‘llaniladi",
      "Uchburchak qoidasi faqat 4-tartibli determinantlar uchun qo‘llaniladi",
      "Laplas teoremasi faqat diagonal matritsalar uchun qo‘llaniladi"
    ],
    "answer": 0,
    "difficulty": "Oson",
    "explanation": "2- va 4-ma’ruzalar: Sarrius qoidasi faqat $n=3$ da o‘rinli, Laplas teoremasi esa universaldir."
  },
  {
    "id": "T9_Q4",
    "topicId": 9,
    "num": 4,
    "question": "[Aralash Nazariy: 3–4-mavzular] $A$ kvadrat matritsaning qo‘shma matritsasi $\\bar{A}$ bilan $A$ matritsaning ko‘paytmasi $A \\cdot \\bar{A} = \\det(A) \\cdot E$ tengligi 4-ma’ruzadagi qaysi teoremaga asoslanadi?",
    "options": [
      "Koshi-Bunyakovskiy teoremasiga",
      "Gramm-Shmidt teoremasiga",
      "O‘rin almashtirishlarning inversiya xossasiga",
      "Laplas teoremasiga ($i = k$ da $\\sum a_{ij}A_{ij} = \\det A$) hamda uning begona satr haqidagi natijasiga ($i \\ne k$ da $\\sum a_{ij}A_{kj} = 0$)"
    ],
    "answer": 3,
    "difficulty": "Qiyin",
    "explanation": "$A \\cdot \\bar{A}$ ko‘paytmaning diagonalida $\\sum_{j=1}^n a_{ij}A_{ij} = \\det(A)$ (Laplas teoremasi), diagonaldan tashqarida esa $\\sum_{j=1}^n a_{ij}A_{kj} = 0$ (Laplas natijasi) hosil bo‘ladi!"
  },
  {
    "id": "T9_Q5",
    "topicId": 9,
    "num": 5,
    "question": "[Aralash Nazariy: 3–5-mavzular] $n$ ta noma’lumli $n$ ta chiziqli tenglamalar sistemasi $AX = B$ ni yechishning Matritsalar usuli ($X = A^{-1}B$) va Kramer usuli ($x_i = \\Delta_{x_i} / \\Delta$) qo‘llanilishi uchun qanday umumiy shart bajarilishi zarur?",
    "options": [
      "Ozod hadlar ustuni nolga teng ($B = \\Theta$) bo‘lishi zarur",
      "Asosiy matritsa determinanti nolga teng ($\\Delta = 0$) bo‘lishi zarur",
      "Tenglamalar soni noma’lumlar soniga teng ($m = n$) bo‘lishi va asosiy matritsa xosmas ($\\Delta = \\det(A) \\ne 0$) bo‘lishi zarur",
      "$r(A) < n$ bo‘lishi zarur"
    ],
    "answer": 2,
    "difficulty": "Oson",
    "explanation": "5-ma’ruza (26, 30-slaydlar): Har ikkala usul ham kvadrat ($m=n$) va xosmas ($\\det A \\ne 0$) sistemaning yagona yechimini topish uchun xizmat qiladi."
  },
  {
    "id": "T9_Q6",
    "topicId": 9,
    "num": 6,
    "question": "[Aralash Nazariy: 3 va 6-mavzular] Gauss-Jordan usulining $(A \\mid E) \\sim (E \\mid A^{-1})$ va $(A \\mid B) \\sim (E \\mid X)$ sxemalari orasidagi umumiy algoritmik g‘oya nimadan iborat?",
    "options": [
      "Har ikkalasida ham ustunlar o‘rni almashtirilib nol matritsa hosil qilinadi",
      "Har ikkalasida ham chap blokdagi $A$ matritsa elementar satr almashtirishlari yordamida birlik matritsa $E$ ga keltiriladi; natijada o‘ng blokda mos ravishda $A^{-1}$ yoki $X = A^{-1}B$ hosil bo‘ladi",
      "Har ikkalasi faqat bir jinsli sistemalar uchun ishlatiladi",
      "Har ikkalasida ham teskari yurish bosqichi bajariladi"
    ],
    "answer": 1,
    "difficulty": "O'rta",
    "explanation": "3-ma’ruza (11-slayd) va 6-ma’ruza (10-slayd): Gauss-Jordan eliminatsiyasi chap blokni $E$ ga keltirish orqali o‘ng blokni chapdan $A^{-1}$ ga ko‘paytirish effektini beradi."
  },
  {
    "id": "T9_Q7",
    "topicId": 9,
    "num": 7,
    "question": "[Aralash Nazariy: 5–6-mavzular] $n$ ta noma’lumli va rangi $r$ ($r < n$) bo‘lgan chiziqli tenglamalar sistemasida «fundamental yechimlar sistemasidagi (FYS) vektorlar soni» bilan «bazis guruhlar soni» qaysi formulalar orqali aniqlanadi?",
    "options": [
      "Bir jinsli sistema FYS dagi vektorlar soni $k = n - r$ ga teng; bazis guruhlar soni esa $C_n^r = \\frac{n!}{r!(n-r)!}$ ga teng",
      "Har ikkalasi ham $r$ ga teng",
      "FYS dagi vektorlar soni $C_n^r$ ga teng; bazis guruhlar soni $n - r$ ga teng",
      "Har ikkalasi ham $n!$ ga teng"
    ],
    "answer": 0,
    "difficulty": "O'rta",
    "explanation": "5-ma’ruza (8-slayd): FYS da $n - r$ ta vektor bor. 6-ma’ruza (14-slayd): Bazis guruhlar soni $C_n^r = \\frac{n!}{r!(n-r)!}$."
  },
  {
    "id": "T9_Q8",
    "topicId": 9,
    "num": 8,
    "question": "[Aralash Nazariy: 5–6-mavzular] Bir jinsli bo‘lmagan sistemaning xususiy yechimi $F_0$ (erkli o‘zgaruvchilar $0$ deb olinganda) bilan shu sistemaning bazis yechimi $X_b$ orasida qanday bog‘lanish bor?",
    "options": [
      "Ular orasida hech qanday bog‘lanish yo‘q",
      "Ular bir-biriga qarama-qarshi vektorlardir ($F_0 = -X_b$)",
      "$F_0$ har doim nol vektor bo‘ladi, $X_b$ esa nolmas bo‘ladi",
      "Erkli o‘zgaruvchilar $0$ ga teng deb olinganda topilgan xususiy yechim $F_0$ aynan tanlangan bazis o‘zgaruvchilarga mos keluvchi bazis yechim $X_b$ ning o‘zidir"
    ],
    "answer": 3,
    "difficulty": "O'rta",
    "explanation": "5-ma’ruza (13-slayd) va 6-ma’ruza (14-slayd): Erkli o‘zgaruvchilarni $0$ ga tenglashtirib topilgan xususiy yechim ta’rifga ko‘ra sistemaning bazis yechimi hisoblanadi."
  },
  {
    "id": "T9_Q9",
    "topicId": 9,
    "num": 9,
    "question": "[Aralash Nazariy: 3, 7, 8-mavzular] $n$ o‘lchovli $n$ ta $A_1, A_2, \\dots, A_n$ vektorlar $\\mathbb{R}^n$ fazoda bazis tashkil qilishi uchun ulardan tuzilgan kvadrat $A$ matritsa qanday shartni qanoatlantirishi zarur va yetarli?",
    "options": [
      "$\\det(A) = 0$ (ya’ni matritsa xos) bo‘lishi zarur va yetarli",
      "$r(A) < n$ bo‘lishi zarur va yetarli",
      "$\\det(A) \\ne 0$ (ya’ni matritsa xosmas va rangi $r(A) = n$) bo‘lishi zarur va yetarli",
      "$A$ matritsa diagonal bo‘lishi zarur va yetarli"
    ],
    "answer": 2,
    "difficulty": "Oson",
    "explanation": "7-ma’ruza (27-slayd) va 8-ma’ruza (11-12, 25-slaydlar): $n$ ta vektor chiziqli erkli (bazis) bo‘lishi $\\iff r(A) = n \\iff \\det(A) \\ne 0$."
  },
  {
    "id": "T9_Q10",
    "topicId": 9,
    "num": 10,
    "question": "[Aralash Nazariy: 5 va 7-mavzular] Bir jinsli $AX = \\Theta$ chiziqli tenglamalar sistemasining barcha yechimlari to‘plami $\\mathbb{R}^n$ fazoda qanday tuzilmani hosil qiladi va uning bazisi nima bo‘ladi?",
    "options": [
      "$r$ o‘lchovli qism fazo tashkil qiladi",
      "$\\mathbb{R}^n$ fazoning $n - r$ o‘lchovli chiziqli qism fazosini tashkil qiladi va sistemaning Fundamental yechimlar sistemasi (FYS) shu qism fazoning bazisi bo‘ladi",
      "Faqat bitta nuqtadan iborat to‘plam bo‘ladi",
      "Qism fazo tashkil qilmaydi"
    ],
    "answer": 1,
    "difficulty": "Qiyin",
    "explanation": "5-ma’ruza (7-8-slaydlar) va 7-ma’ruza (27-28-slaydlar): Bir jinsli sistemaning har qanday yechimi $n-r$ ta chiziqli erkli FYS vektorlari orqali chiziqli ifodalangani uchun FYS yechimlar qism fazosining bazisidir!"
  },
  {
    "id": "T9_Q11",
    "topicId": 9,
    "num": 11,
    "question": "[Aralash Nazariy: 3 va 7-mavzular] Bir bazisdan boshqa bazisga o‘tishda yangi koordinatalarni topish formulasi $\\vec{x}' = P^{-1} \\vec{x}$ qaysi matritsaviy tenglamani yechishdan hosil bo‘ladi (7-ma’ruza, 34-slayd)?",
    "options": [
      "$P \\cdot \\vec{x}' = \\vec{x}$ matritsaviy tenglamani chapdan $P^{-1}$ teskari matritsaga ko‘paytirishdan hosil bo‘ladi",
      "$P + \\vec{x}' = \\vec{x}$ tenglamadan hosil bo‘ladi",
      "$P^T \\cdot \\vec{x} = \\vec{x}'$ tenglamadan hosil bo‘ladi",
      "$\\vec{x}' \\cdot P = \\vec{x}$ tenglamadan hosil bo‘ladi"
    ],
    "answer": 0,
    "difficulty": "Oson",
    "explanation": "7-ma’ruza (34-slayd): $P \\cdot \\vec{x}' = \\vec{x} \\implies \\vec{x}' = P^{-1} \\cdot \\vec{x}$."
  },
  {
    "id": "T9_Q12",
    "topicId": 9,
    "num": 12,
    "question": "[Aralash Nazariy: 1 va 7-mavzular] Ustun-vektorlar ko‘rinishida berilgan ikkita $n$ o‘lchovli $X$ va $Y$ vektorlarning skalyar ko‘paytmasi $(X, Y)$ matritsalarni ko‘paytirish va transponirlash amallari orqali qanday yoziladi (7-ma’ruza, 8-slayd)?",
    "options": [
      "$(X, Y) = X \\cdot Y^T$ ($n \\times n$ matritsa)",
      "$(X, Y) = (X \\cdot Y)^T$",
      "$(X, Y) = X + Y^T$",
      "$(X, Y) = X^T \\cdot Y = Y^T \\cdot X$ ($1 \\times n$ satr matritsani $n \\times 1$ ustun matritsaga ko‘paytmasi)"
    ],
    "answer": 3,
    "difficulty": "Oson",
    "explanation": "7-ma’ruza (8-slayd): $(X, Y) = X^T Y = Y^T X = x_1y_1 + x_2y_2 + \\dots + x_ny_n$."
  },
  {
    "id": "T9_Q13",
    "topicId": 9,
    "num": 13,
    "question": "[Aralash Nazariy: 2 va 7-mavzular] Fazodagi uchta $\\vec{a}, \\vec{b}, \\vec{c}$ vektorning aralash ko‘paytmasi $([\\vec{a} \\times \\vec{b}] \\cdot \\vec{c})$ da ikkita vektorning o‘rni almashtirilsa, aralash ko‘paytma qanday o‘zgaradi?",
    "options": [
      "Aralash ko‘paytma nolga teng bo‘lib qoladi",
      "Aralash ko‘paytmaning ishorasi ham, qiymati ham o‘zgarmaydi",
      "Determinantning 5-xossasiga ko‘ra (ikkita satr o‘rni almashgani uchun) aralash ko‘paytmaning ishorasi qarama-qarshiga o‘zgaradi, moduli (parallelepiped hajmi) esa o‘zgarmaydi",
      "Parallelepiped hajmi $2$ marta ortadi"
    ],
    "answer": 2,
    "difficulty": "O'rta",
    "explanation": "Aralash ko‘paytma 3-tartibli determinant bo‘lgani uchun ikkita vektor (satr) o‘rni almashganda ishorasi minusga o‘zgaradi."
  },
  {
    "id": "T9_Q14",
    "topicId": 9,
    "num": 14,
    "question": "[Aralash Nazariy: 7 va 8-mavzular] Ikki noldan farqli $X$ va $Y$ vektorlarning o‘zaro ortogonallik sharti $(X, Y) = 0$ ularning orasidagi burchak kosinusi $\\cos\\varphi = \\frac{(X,Y)}{|X|\\cdot|Y|}$ va proyeksiya $\\text{Pr}_X(Y)$ uchun nimani anglatadi?",
    "options": [
      "Vektorlar kollinear ekanligini anglatadi",
      "$\\cos\\varphi = 0$ ($\\varphi = \\pi/2$) ekanligini va bir vektorning ikkinchisi yo‘nalishidagi proyeksiyasi nolga teng ($\\text{Pr}_X(Y) = 0$) ekanligini anglatadi",
      "Vektorlarning vektor ko‘paytmasi nolga teng ekanligini anglatadi",
      "$\\cos\\varphi = 1$ va $\\text{Pr}_X(Y) = |Y|$ ekanligini anglatadi"
    ],
    "answer": 1,
    "difficulty": "Oson",
    "explanation": "7-ma’ruza (14, 18-slaydlar) va 8-ma’ruza (14-15-slaydlar): $(X,Y) = 0 \\iff \\cos\\varphi = 0 \\iff \\text{Pr}_X(Y) = 0$."
  },
  {
    "id": "T9_Q15",
    "topicId": 9,
    "num": 15,
    "question": "[Aralash Nazariy: 5 va 7-mavzular] $m$ ta $n$ o‘lchovli $A_1, A_2, \\dots, A_m$ vektorlarning chiziqli erkliligini tekshirish tenglamalar sistemasi tilida qanday masalaga keladi?",
    "options": [
      "$\\lambda_1 A_1 + \\lambda_2 A_2 + \\dots + \\lambda_m A_m = \\Theta$ bir jinsli chiziqli tenglamalar sistemasining faqat yagona nol yechimga ($\\lambda_1=\\dots=\\lambda_m=0$) ega bo‘lishini tekshirish masalasiga keladi",
      "Vektorlarni o‘zaro skalyar ko‘paytirish masalasiga keladi",
      "Qo‘shma matritsa topish masalasiga keladi",
      "Bir jinsli bo‘lmagan sistemaning yechimga ega emasligini tekshirishga keladi"
    ],
    "answer": 0,
    "difficulty": "O'rta",
    "explanation": "5-ma’ruza (5-slayd) va 8-ma’ruza (10-11-slaydlar): Ustunlari $A_1, \\dots, A_m$ bo‘lgan bir jinsli sistema faqat $r(A) = m$ bo‘lganda yagona nol yechimga ega bo‘lib, vektorlar chiziqli erkli bo‘ladi."
  },
  {
    "id": "T9_Q16",
    "topicId": 9,
    "num": 16,
    "question": "[Aralash Nazariy: 2, 3, 6-mavzular] Matritsa ustida «bir satrga boshqa satrni songa ko‘paytirib qo‘shish» elementar amali bajarilganda matritsaning rangi $r(A)$ va determinanti $\\det(A)$ qanday o‘zgaradi?",
    "options": [
      "Rangi o‘zgarmaydi, ammo determinanti ishorasini o‘zgartiradi",
      "Determinanti o‘zgarmaydi, ammo rangi $1$ ga ortadi",
      "Har ikkalasi ham shu songa ko‘payadi",
      "Matritsaning rangi ham ($r(A)$), determinanti ham ($\\det A$) o‘zgarmaydi"
    ],
    "answer": 3,
    "difficulty": "O'rta",
    "explanation": "2-ma’ruza (7-xossa) va 3-ma’ruza (18-slayd): Ushbu elementar almashtirish ham determinantni, ham matritsa rangini o‘zgarmasdan saqlaydi."
  },
  {
    "id": "T9_Q17",
    "topicId": 9,
    "num": 17,
    "question": "[Aralash Nazariy: 2 va 3-mavzular] Matritsada «ikkita satr o‘rnini almashtirish» hamda «satrni $k \\ne 0, 1$ songa ko‘paytirish» elementar amallarida matritsa rangi $r(A)$ va determinanti $\\det(A)$ qanday o‘zgaradi?",
    "options": [
      "Matritsa rangi $k$ marta ortadi",
      "Matritsa rangi ham, determinanti ham o‘zgarmaydi",
      "Matritsa rangi $r(A)$ har ikkala amalda ham mutlaqo o‘zgarmaydi; determinant esa satrlar almashganda ishorasini o‘zgartiradi ($-\\det A$), satr $k$ ga ko‘payganda $k$ marta o‘zgaradi ($k\\det A$)",
      "Determinant o‘zgarmaydi, rang esa ishorasini o‘zgartiradi"
    ],
    "answer": 2,
    "difficulty": "O'rta",
    "explanation": "Elementar almashtirishlarning barchasida rang o‘zgarmaydi, biroq determinant 4 va 5-xossalarga ko‘ra $k$ ga yoki $(-1)$ ga ko‘payadi."
  },
  {
    "id": "T9_Q18",
    "topicId": 9,
    "num": 18,
    "question": "[Aralash Nazariy: 3 va 5-mavzular] Kroneker-Kapelli teoremasiga ko‘ra, agar $AX = B$ sistemaning asosiy matritsasi $A$ xosmas kvadrat matritsa ($\\det A \\ne 0$) bo‘lsa, nima uchun sistema ozod hadlar ustuni $B$ ning IXTIYORIY qiymatlarida birgalikda bo‘ladi?",
    "options": [
      "Chunki sistema cheksiz ko‘p yechimga ega bo‘ladi",
      "Chunki $\\det(A) \\ne 0$ bo‘lganda $r(A) = n$ bo‘ladi, kengaytirilgan $(A \\mid B)$ matritsada esa satrlar soni $n$ ta bo‘lgani uchun $r(A \\mid B)$ ham $n$ dan osha olmaydi ($n \\le r(A \\mid B) \\le n \\implies r(A) = r(A \\mid B) = n$)",
      "Chunki $r(A) = 0$ bo‘ladi",
      "Chunki $B$ ustun har doim nolga teng bo‘ladi"
    ],
    "answer": 1,
    "difficulty": "Qiyin",
    "explanation": "$n \\times (n+1)$ o‘lchovli $(A \\mid B)$ matritsa rangi $\\min(n, n+1) = n$ dan oshmaydi. $r(A) = n$ bo‘lgach, $r(A \\mid B) = n$ bo‘lishi majburiy!"
  },
  {
    "id": "T9_Q19",
    "topicId": 9,
    "num": 19,
    "question": "[Aralash Nazariy: 7 va 8-mavzular] Bir ortonormal bazisdan ikkinchi ortonormal bazisga o‘tish matritsasi $P$ qanday maxsus xossaga ega bo‘ladi?",
    "options": [
      "$P$ ortogonal matritsa bo‘ladi, ya’ni $P^{-1} = P^T$ bo‘lib, yangi koordinatalar $\\vec{x}' = P^T \\vec{x}$ formula bilan teskari matritsa hisoblamasdan topiladi",
      "$P$ har doim faqat musbat sonlardan iborat bo‘ladi",
      "$P$ nol matritsa bo‘ladi",
      "$P$ ning determinanti nolga teng bo‘ladi"
    ],
    "answer": 0,
    "difficulty": "Qiyin",
    "explanation": "Ortonormal bazisda yangi ortonormal bazis ustunlari o‘zaro ortonormal bo‘lgani uchun $P^T P = E \\implies P^{-1} = P^T$."
  },
  {
    "id": "T9_Q20",
    "topicId": 9,
    "num": 20,
    "question": "[Aralash Nazariy: 4 va 7-mavzular] Fazodagi uchta $\\vec{a}, \\vec{b}, \\vec{c}$ vektorlarning aralash ko‘paytmasi $\\begin{vmatrix} a_1 & a_2 & a_3 \\\\ b_1 & b_2 & b_3 \\\\ c_1 & c_2 & c_3 \\end{vmatrix}$ ni 1-satr bo‘yicha Laplas formulasi bilan yoyish qaysi vektor amalga mos keladi?",
    "options": [
      "Uchta vektorni o‘zaro qo‘shishga",
      "Vektorlarni normallashtirishga",
      "Gramm-Shmidt ortogonallash jarayoniga",
      "$\\vec{a}$ vektorni $[\\vec{b} \\times \\vec{c}]$ vektor ko‘paytmaga skalyar ko‘paytirishga: $(\\vec{a} \\cdot [\\vec{b} \\times \\vec{c}]) = a_1 A_{11} + a_2 A_{12} + a_3 A_{13}$"
    ],
    "answer": 3,
    "difficulty": "Qiyin",
    "explanation": "1-satr elementlarining algebraik to‘ldiruvchilari $A_{11}, A_{12}, A_{13}$ aynan $[\\vec{b} \\times \\vec{c}]$ vektor ko‘paytmaning koordinatalariga teng!"
  },
  {
    "id": "T9_Q21",
    "topicId": 9,
    "num": 21,
    "question": "[Aralash Nazariy: 1, 2, 3-mavzular] Nol matritsa $\\Theta$ va Birlik matritsa $E$ ($n$-tartibli) uchun ularning determinanti va rangi qaysi javobda to‘g‘ri berilgan?",
    "options": [
      "$\\det(\\Theta) = 0,\\; r(\\Theta) = 1\\quad$ hamda $\\quad \\det(E) = n,\\; r(E) = 1$",
      "$\\det(\\Theta) = 1,\\; r(\\Theta) = 0\\quad$ hamda $\\quad \\det(E) = 1,\\; r(E) = 1$",
      "$\\det(\\Theta) = 0,\\; r(\\Theta) = 0\\quad$ hamda $\\quad \\det(E) = 1,\\; r(E) = n$",
      "$\\det(\\Theta) = 0,\\; r(\\Theta) = n\\quad$ hamda $\\quad \\det(E) = 0,\\; r(E) = n$"
    ],
    "answer": 2,
    "difficulty": "Oson",
    "explanation": "Nol matritsada barcha minorlar 0 bo‘lgani uchun $\\det(\\Theta)=0, r(\\Theta)=0$. Birlik matritsada esa $\\det(E)=1 \\ne 0$ va $r(E)=n$."
  },
  {
    "id": "T9_Q22",
    "topicId": 9,
    "num": 22,
    "question": "[Aralash Nazariy: 5, 6, 7-mavzular] $AX = B$ chiziqli tenglamalar sistemasining birgalikda bo‘lishi (Kroneker-Kapelli teoremasi) ustun-vektorlarning chiziqli kombinatsiyasi tilida nimani anglatadi?",
    "options": [
      "$B$ vektor birlik vektor ekanligini anglatadi",
      "Sistema birgalikda bo‘lishi ($r(A) = r(A \\mid B)$) ozod hadlar ustun-vektori $B$ ning asosiy matritsa ustun-vektorlari $A_1, A_2, \\dots, A_n$ orqali chiziqli kombinatsiya ko‘rinishida ifodalanishini anglatadi ($x_1 A_1 + \\dots + x_n A_n = B$)",
      "$A_1, \\dots, A_n$ ustunlar nol vektor ekanligini anglatadi",
      "$B$ vektor barcha $A_i$ ustun-vektorlarga ortogonal ekanligini anglatadi"
    ],
    "answer": 1,
    "difficulty": "Qiyin",
    "explanation": "$AX = x_1 A_1 + x_2 A_2 + \\dots + x_n A_n = B$ tenglikning yechimi mavjud bo‘lishi $B$ ustun qo‘shilganda rang ortmasligini ($r(A)=r(A|B)$), ya’ni $B$ vektor $A$ ustunlarining chiziqli qobig‘ida yotishini bildiradi."
  },
  {
    "id": "T9_Q23",
    "topicId": 9,
    "num": 23,
    "question": "[Aralash Nazariy: 7 va 8-mavzular] Haqiqiy chiziqli fazo ($L$), Arifmetik vektor fazo ($\\mathbb{R}^n$) va Evklid fazosi ($E^n$) tushunchalari o‘zaro qanday bog‘langan?",
    "options": [
      "$L$ — 8 ta aksiomani qanoatlantiruvchi umumiy chiziqli fazo; $\\mathbb{R}^n$ — elementlari $n$ ta haqiqiy sonlar kortejidan iborat arifmetik chiziqli fazo; $E^n$ esa skalyar ko‘paytma kiritilgan haqiqiy chiziqli (xususan $\\mathbb{R}^n$) fazodir",
      "Arifmetik fazoda vektorlar uzunligi aniqlanishi mumkin emas",
      "Uchala tushuncha bir-biriga mutlaqo zid",
      "Evklid fazosida qo‘shish va songa ko‘paytirish amallari mavjud emas"
    ],
    "answer": 0,
    "difficulty": "O'rta",
    "explanation": "7- va 8-ma’ruzalar: Chiziqli fazoda skalyar ko‘paytma aniqlansa, u Evklid fazosiga aylanadi va unda uzunlik hamda burchak (ortogonallik) tushunchalari paydo bo‘ladi."
  },
  {
    "id": "T9_Q24",
    "topicId": 9,
    "num": 24,
    "question": "[Aralash Nazariy: 3 va 5-mavzular] Agar $m \\times n$ o‘lchovli $A$ matritsaning rangi $r(A) = r$ bo‘lsa, $A$ matritsaning chiziqli erkli satrlari maksimal soni bilan chiziqli erkli ustunlari maksimal soni orasida qanday munosabat bor?",
    "options": [
      "Chiziqli erkli satrlar soni $m$ ga, ustunlar soni $n$ ga teng",
      "Ular o‘zaro teng emas",
      "Chiziqli erkli satrlar soni ustunlar sonidan har doim katta",
      "Ular o‘zaro teng va har ikkalasi matritsaning rangi $r$ ga teng (chunki $r(A) = r(A^T) = r$)"
    ],
    "answer": 3,
    "difficulty": "O'rta",
    "explanation": "Matritsa rangi haqidagi teoremaga ko‘ra, matritsaning chiziqli erkli satrlari maksimal soni uning chiziqli erkli ustunlari maksimal soniga va matritsa rangi $r(A)$ ga teng."
  },
  {
    "id": "T9_Q25",
    "topicId": 9,
    "num": 25,
    "question": "[Aralash Nazariy: 4 va 8-mavzular] Gramm-Shmidt ortogonallash jarayonida chiziqli erkli $A_1, \\dots, A_n$ vektorlardan ortogonal $B_1, \\dots, B_n$ vektorlar qurilganda ($B_1 = A_1, B_t = A_t - \\sum c_{it} B_i$), ulardan tuzilgan matritsalar determinantlari $\\det(B)$ va $\\det(A)$ orasida qanday bog‘lanish bo‘ladi?",
    "options": [
      "$\\det(B) = 1$ bo‘ladi",
      "$\\det(B) = -\\det(A)$ bo‘ladi",
      "$\\det(B) = \\det(A)$ bo‘ladi, chunki har bir qadamda bir vektordan oldingi vektorlarning chiziqli kombinatsiyasini ayirish determinantning 7-xossasiga ko‘ra determinant qiymatini o‘zgartirmaydi",
      "$\\det(B) = 0$ bo‘ladi"
    ],
    "answer": 2,
    "difficulty": "Qiyin",
    "explanation": "Gramm-Shmidt formulasi $B_t = A_t - \\sum_{i<t} \\alpha_{it} B_i$ determinantda $t$-satrdan oldingi satrlarning chiziqli kombinatsiyasini ayirish bilan bir xil bo‘lib, 7-xossaga ko‘ra $\\det(B) = \\det(A)$!"
  },
  {
    "id": "T9_Q26",
    "topicId": 9,
    "num": 26,
    "question": "[Aralash Nazariy: 2 va 5-mavzular] Kramer qoidasida $x_i = \\frac{\\Delta_{x_i}}{\\Delta}$ formulani teskari matritsa formulasi $X = A^{-1}B = \\frac{1}{\\Delta}\\bar{A}B$ bilan solishtirganda, $\\Delta_{x_i}$ yordamchi determinant $A$ matritsaning algebraik to‘ldiruvchilari orqali qanday yoziladi?",
    "options": [
      "$\\Delta_{x_i} = b_i \\cdot \\Delta$",
      "$\\Delta_{x_i} = b_1 A_{1i} + b_2 A_{2i} + \\dots + b_n A_{ni}$ ($i$-ustun bo‘yicha Laplas yoyilmasi)",
      "$\\Delta_{x_i} = A_{ii}$",
      "$\\Delta_{x_i} = b_1 A_{i1} + b_2 A_{i2} + \\dots + b_n A_{in}$ ($i$-satr bo‘yicha yoyilma)"
    ],
    "answer": 1,
    "difficulty": "Qiyin",
    "explanation": "$\\Delta_{x_i}$ determinantning $i$-ustunida $b_1, \\dots, b_n$ ozod hadlar turgani uchun uni $i$-ustun bo‘yicha Laplas teoremasi bilan yoysak, aynan $\\bar{A}B$ ko‘paytmaning $i$-satri $b_1 A_{1i} + \\dots + b_n A_{ni}$ hosil bo‘ladi! Demak Kramer usuli va Matritsalar usuli nazariy jihatdan aynan bir xil."
  },
  {
    "id": "T9_Q27",
    "topicId": 9,
    "num": 27,
    "question": "[Aralash Nazariy: 1 va 3-mavzular] Agar kvadrat $A$ matritsa uchun $A^2 = E$ tenglik bajarilsa (involyutiv matritsa), uning teskari matritsasi $A^{-1}$ nimaga teng bo‘ladi?",
    "options": [
      "$A^{-1} = A$ (matritsaning o‘ziga teng bo‘ladi, chunki $A \\cdot A = E$)",
      "$A^{-1} = -A$ ga teng bo‘ladi",
      "Teskari matritsa mavjud emas",
      "$A^{-1} = E$ ga teng bo‘ladi"
    ],
    "answer": 0,
    "difficulty": "O'rta",
    "explanation": "Teskari matritsa ta’rifiga ko‘ra $A \\cdot A^{-1} = E$. Agar $A \\cdot A = E$ bo‘lsa, u holda $A^{-1} = A$."
  },
  {
    "id": "T9_Q28",
    "topicId": 9,
    "num": 28,
    "question": "[Aralash Nazariy: 1 va 3-mavzular] Agar kvadrat $A \\ne O$ matritsa uchun $A^2 = O$ tenglik bajarilsa (nilpotent matritsa), uning determinanti $\\det(A)$ haqida nima deyish mumkin va unga teskari matritsa mavjudmi?",
    "options": [
      "$A^{-1} = O$ nol matritsa bo‘ladi",
      "$\\det(A) = 1$ va teskari matritsa mavjud",
      "$\\det(A) = -1$",
      "$(\\det A)^2 = \\det(O) = 0 \\implies \\det(A) = 0$ (xos matritsa), shuning uchun unga teskari matritsa mavjud emas"
    ],
    "answer": 3,
    "difficulty": "O'rta",
    "explanation": "$A^2 = O \\implies \\det(A^2) = (\\det A)^2 = 0 \\implies \\det(A) = 0$. Demak nilpotent matritsa har doim xos matritsadir va $A^{-1}$ mavjud emas."
  },
  {
    "id": "T9_Q29",
    "topicId": 9,
    "num": 29,
    "question": "[Aralash Nazariy: 6 va 8-mavzular] $m \\times n$ matritsani Gauss usulida pog‘onali shaklga keltirish hamda vektorlar sistemasini Gramm-Shmidt usulida ortogonallash jarayonlari orasida qanday o‘xshashlik bor?",
    "options": [
      "Har ikkalasida ham determinant $0$ ga teng bo‘ladi",
      "Har ikkalasida ham ozod hadlar nolga teng bo‘lishi shart",
      "Har ikkala jarayonda ham har bir navbatdagi satr (vektor)dan oldingi satrlar (vektorlar)ning ma’lum chiziqli kombinatsiyasi ayirib tashlanadi va chiziqli qobiq (rang) o‘zgarmasdan saqlanadi",
      "Har ikkalasi ham faqat $2 \\times 2$ matritsalar uchun bajariladi"
    ],
    "answer": 2,
    "difficulty": "O'rta",
    "explanation": "Gauss eliminatsiyasida oldingi satrlar yordamida ustun elementlari nolga aylantirilsa, Gramm-Shmidt jarayonida oldingi vektorlar yordamida skalyar ko‘paytmalar nolga aylantiriladi."
  },
  {
    "id": "T9_Q30",
    "topicId": 9,
    "num": 30,
    "question": "[Aralash Nazariy: Barcha 8 ta ma’ruza yakuniy sintezi] $n$-tartibli kvadrat $A$ matritsa uchun quyidagi tasdiqlardan qaysi biri Chiziqli algebraning «Fundamental Ekvivalentlik Teoremasi»ni to‘g‘ri ifodalaydi?",
    "options": [
      "$\\det(A) \\ne 0 \\iff r(A) < n \\iff AX=B$ cheksiz ko‘p yechimli",
      "$\\det(A) \\ne 0 \\iff \\exists A^{-1} \\iff r(A) = n \\iff AX=B$ har qanday $B$ da yagona yechimli $\\iff AX=\\Theta$ faqat nol yechimli $\\iff A$ ning ustunlari (satrlari) $\\mathbb{R}^n$ da bazis tashkil qiladi",
      "$\\det(A) = 0 \\iff \\exists A^{-1} \\iff r(A) = n \\iff AX=\\Theta$ faqat nol yechimli",
      "$r(A) = 0 \\iff \\exists A^{-1} \\iff \\det(A) = 1$"
    ],
    "answer": 1,
    "difficulty": "O'rta",
    "explanation": "Bu Chiziqli algebraning barcha 8 ta ma’ruzasini yagona mantiqiy zanjirga birlashtiruvchi eng asosiy fundamental teoremadir!"
  }
];
