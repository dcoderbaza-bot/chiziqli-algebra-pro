# -*- coding: utf-8 -*-
import json
import os
import random

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

def get_17_practical_problems():
    # Rasmdagi 17 ta amaliy misol — o'zgartirilmasdan, 100% Python orqali tasdiqlangan javoblari bilan!
    # origNum: rasmdagi asl raqami (1-variantda shu raqamda turadi)
    return [
        {
            "origNum": 1,
            "code": "AM-1",
            "topicId": 1,
            "kind": "Amaliy",
            "difficulty": "Oson",
            "question": "$A$ va $B$ matritsalarning yig‘indisi uchun bosh diagonal elementlarining ko‘paytmasini toping: $$A = \\begin{bmatrix} 2 & 1 & -1 \\\\ 0 & 3 & 2 \\\\ 4 & -2 & 5 \\end{bmatrix}, \\qquad B = \\begin{bmatrix} 1 & -1 & 3 \\\\ 2 & 1 & -2 \\\\ -3 & 2 & 1 \\end{bmatrix}$$",
            "options": ["$72$", "$13$", "$60$", "$48$"],
            "answer": 0,
            "explanation": "$A + B$ matritsaning bosh diagonal elementlari: $(2+1)=3$, $(3+1)=4$, $(5+1)=6$. Ularning ko‘paytmasi: $3 \\cdot 4 \\cdot 6 = 72$."
        },
        {
            "origNum": 2,
            "code": "AM-2",
            "topicId": 1,
            "kind": "Amaliy",
            "difficulty": "Oson",
            "question": "$A$ va $B$ matritsalarning ayirmasi uchun bosh diagonal elementlarining yig‘indisini toping: $$A = \\begin{bmatrix} 5 & -2 & 1 \\\\ 3 & 4 & -1 \\\\ 0 & 2 & 6 \\end{bmatrix}, \\qquad B = \\begin{bmatrix} 2 & 1 & -3 \\\\ -1 & 2 & 4 \\\\ 3 & 0 & 2 \\end{bmatrix}$$",
            "options": ["$9$", "$24$", "$15$", "$7$"],
            "answer": 0,
            "explanation": "$A - B$ matritsaning bosh diagonal elementlari: $(5-2)=3$, $(4-2)=2$, $(6-2)=4$. Ularning yig‘indisi: $3 + 2 + 4 = 9$."
        },
        {
            "origNum": 3,
            "code": "AM-3",
            "topicId": 1,
            "kind": "Amaliy",
            "difficulty": "O'rta",
            "question": "$A$ va $B$ matritsalarning ko‘paytmasi uchun 3-qator elementlarini toping: $$A = \\begin{bmatrix} 1 & 2 & -1 \\\\ 3 & 0 & 2 \\\\ 2 & -1 & 3 \\end{bmatrix}, \\qquad B = \\begin{bmatrix} 2 & 1 & 0 \\\\ -1 & 3 & 2 \\\\ 1 & -2 & 4 \\end{bmatrix}$$",
            "options": [
                "$(8;\\; -7;\\; 10)$",
                "$(8;\\; 7;\\; 10)$",
                "$(6;\\; -7;\\; 12)$",
                "$(2;\\; 2;\\; 12)$"
            ],
            "answer": 0,
            "explanation": "$A$ ning 3-qatori $(2, -1, 3)$ ni $B$ ning ustunlariga ko‘paytiramiz: $c_{31} = 2\\cdot 2 + (-1)(-1) + 3\\cdot 1 = 8$; $c_{32} = 2\\cdot 1 + (-1)\\cdot 3 + 3(-2) = -7$; $c_{33} = 2\\cdot 0 + (-1)\\cdot 2 + 3\\cdot 4 = 10$."
        },
        {
            "origNum": 4,
            "code": "AM-4",
            "topicId": 7,
            "kind": "Amaliy",
            "difficulty": "Oson",
            "question": "$A$ vektor uchun $-3A$ vektorning qiymatini toping: $$A = (2;\\; -3;\\; 5)$$",
            "options": [
                "$(-6;\\; 9;\\; -15)$",
                "$(6;\\; -9;\\; 15)$",
                "$(-6;\\; -9;\\; -15)$",
                "$(-1;\\; -6;\\; 2)$"
            ],
            "answer": 0,
            "explanation": "Vektorni $-3$ songa ko‘paytirishda har bir komponent $-3$ ga ko‘paytiriladi: $(-3\\cdot 2;\\; -3\\cdot(-3);\\; -3\\cdot 5) = (-6;\\; 9;\\; -15)$."
        },
        {
            "origNum": 5,
            "code": "AM-5",
            "topicId": 2,
            "kind": "Amaliy",
            "difficulty": "Oson",
            "question": "2-tartibli determinantni hisoblang: $$\\begin{vmatrix} 4 & -3 \\\\ 2 & 5 \\end{vmatrix}$$",
            "options": ["$26$", "$14$", "$-26$", "$20$"],
            "answer": 0,
            "explanation": "$4 \\cdot 5 - (-3) \\cdot 2 = 20 - (-6) = 26$."
        },
        {
            "origNum": 6,
            "code": "AM-6",
            "topicId": 2,
            "kind": "Amaliy",
            "difficulty": "Oson",
            "question": "2-tartibli determinantni hisoblang: $$\\begin{vmatrix} -3 & 6 \\\\ 4 & -5 \\end{vmatrix}$$",
            "options": ["$-9$", "$39$", "$9$", "$-39$"],
            "answer": 0,
            "explanation": "$(-3) \\cdot (-5) - 6 \\cdot 4 = 15 - 24 = -9$."
        },
        {
            "origNum": 8,
            "code": "AM-8",
            "topicId": 2,
            "kind": "Amaliy",
            "difficulty": "O'rta",
            "question": "3-tartibli determinantni hisoblang: $$\\begin{vmatrix} 1 & 2 & -1 \\\\ 3 & 1 & 2 \\\\ 2 & -1 & 3 \\end{vmatrix}$$",
            "options": ["$0$", "$10$", "$-10$", "$15$"],
            "answer": 0,
            "explanation": "$1(1\\cdot 3 - 2(-1)) - 2(3\\cdot 3 - 2\\cdot 2) + (-1)(3(-1) - 1\\cdot 2) = 1(5) - 2(5) - 1(-5) = 5 - 10 + 5 = 0$ (shuningdek 3-satr = 2-satr $-$ 1-satr)."
        },
        {
            "origNum": 9,
            "code": "AM-9",
            "topicId": 2,
            "kind": "Amaliy",
            "difficulty": "O'rta",
            "question": "3-tartibli determinantni hisoblang: $$\\begin{vmatrix} 2 & 0 & 1 \\\\ -1 & 3 & 2 \\\\ 4 & 1 & -1 \\end{vmatrix}$$",
            "options": ["$-23$", "$23$", "$-13$", "$3$"],
            "answer": 0,
            "explanation": "1-satr bo‘yicha yoyamiz: $2(3(-1) - 2\\cdot 1) - 0 + 1((-1)\\cdot 1 - 3\\cdot 4) = 2(-5) + 1(-13) = -10 - 13 = -23$."
        },
        {
            "origNum": 13,
            "code": "AM-13",
            "topicId": 3,
            "kind": "Amaliy",
            "difficulty": "O'rta",
            "question": "$A$ matritsa uchun teskari matritsaning 1-qator va 1-ustunda joylashgan elementini hisoblang: $$A = \\begin{bmatrix} 2 & 1 & 1 \\\\ 1 & 2 & 1 \\\\ 1 & 1 & 2 \\end{bmatrix}$$",
            "options": ["$\\frac{3}{4}$", "$\\frac{1}{4}$", "$-\\frac{1}{4}$", "$\\frac{1}{2}$"],
            "answer": 0,
            "explanation": "$\\det(A) = 2(4-1) - 1(2-1) + 1(1-2) = 6 - 1 - 1 = 4$. $A_{11} = (-1)^{1+1}\\begin{vmatrix} 2 & 1 \\\\ 1 & 2 \\end{vmatrix} = 3$. Demak $(A^{-1})_{11} = \\frac{A_{11}}{\\det A} = \\frac{3}{4}$."
        },
        {
            "origNum": 15,
            "code": "AM-15",
            "topicId": 5,
            "kind": "Amaliy",
            "difficulty": "Oson",
            "question": "Ushbu 2-tartibli tenglamalar sistemasini yeching: $$\\begin{cases} 2x + 3y = 7 \\\\ 3x - y = 5 \\end{cases}$$",
            "options": [
                "$(2;\\; 1)$",
                "$(1;\\; 2)$",
                "$(2;\\; -1)$",
                "$(-2;\\; 1)$"
            ],
            "answer": 0,
            "explanation": "Kramer usuli bilan: $\\Delta = -2 - 9 = -11$, $\\Delta_x = -7 - 15 = -22 \\implies x = 2$, $\\Delta_y = 10 - 21 = -11 \\implies y = 1$. Javob: $(2;\\; 1)$."
        },
        {
            "origNum": 17,
            "code": "AM-17",
            "topicId": 6,
            "kind": "Amaliy",
            "difficulty": "O'rta",
            "question": "Ushbu 3-tartibli tenglamalar sistemasini yeching: $$\\begin{cases} x + y + z = 6 \\\\ 2x - y + z = 3 \\\\ x + 2y - z = 2 \\end{cases}$$",
            "options": [
                "$(1;\\; 2;\\; 3)$",
                "$(2;\\; 1;\\; 3)$",
                "$(3;\\; 2;\\; 1)$",
                "$(1;\\; 3;\\; 2)$"
            ],
            "answer": 0,
            "explanation": "1- va 3-tenglamalarni qo‘shsak $2x + 3y = 8$; 1- va 2-tenglamalar ayirmasidan $-x + 2y = 3 \\implies x = 2y - 3$. O‘rniga qo‘yib $y = 2$, $x = 1$, $z = 3$ ni topamiz."
        },
        {
            "origNum": 19,
            "code": "AM-19",
            "topicId": 7,
            "kind": "Amaliy",
            "difficulty": "Oson",
            "question": "$A$ va $B$ vektorlarning skalyar ko‘paytmasini toping: $$A = (2;\\; -3;\\; 4), \\qquad B = (1;\\; 5;\\; 2)$$",
            "options": ["$-5$", "$5$", "$25$", "$-15$"],
            "answer": 0,
            "explanation": "$(A, B) = 2 \\cdot 1 + (-3) \\cdot 5 + 4 \\cdot 2 = 2 - 15 + 8 = -5$."
        },
        {
            "origNum": 20,
            "code": "AM-20",
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
            "origNum": 21,
            "code": "AM-21",
            "topicId": 7,
            "kind": "Amaliy",
            "difficulty": "O'rta",
            "question": "$A$, $B$ va $C$ vektorlarning aralash ko‘paytmasini toping: $$A = (1;\\; 2;\\; -1), \\quad B = (3;\\; 0;\\; 2), \\quad C = (2;\\; -1;\\; 1)$$",
            "options": ["$7$", "$-7$", "$1$", "$5$"],
            "answer": 0,
            "explanation": "$\\begin{vmatrix} 1 & 2 & -1 \\\\ 3 & 0 & 2 \\\\ 2 & -1 & 1 \\end{vmatrix} = 1(0+2) - 2(3-4) - 1(-3-0) = 2 + 2 + 3 = 7$."
        },
        {
            "origNum": 22,
            "code": "AM-22",
            "topicId": 7,
            "kind": "Amaliy",
            "difficulty": "Oson",
            "question": "Quyidagi vektorning uzunligini toping: $$A = (2;\\; -3;\\; 6)$$",
            "options": ["$7$", "$49$", "$5$", "$11$"],
            "answer": 0,
            "explanation": "$|A| = \\sqrt{2^2 + (-3)^2 + 6^2} = \\sqrt{4 + 9 + 36} = \\sqrt{49} = 7$."
        },
        {
            "origNum": 24,
            "code": "AM-24",
            "topicId": 8,
            "kind": "Amaliy",
            "difficulty": "Oson",
            "question": "$A$ vektorga ortogonal bo‘lgan vektorni toping: $$A = (2;\\; -5;\\; 1)$$",
            "options": [
                "$(2;\\; 1;\\; 1)$",
                "$(2;\\; -1;\\; 1)$",
                "$(1;\\; 1;\\; 1)$",
                "$(3;\\; 1;\\; 2)$"
            ],
            "answer": 0,
            "explanation": "Ortogonallik sharti $(A, B) = 0$. Tekshiramiz: $2\\cdot 2 + (-5)\\cdot 1 + 1\\cdot 1 = 4 - 5 + 1 = 0$. Qolgan variantlarda skalyar ko‘paytma noldan farqli."
        },
        {
            "origNum": 25,
            "code": "AM-25",
            "topicId": 7,
            "kind": "Amaliy",
            "difficulty": "Oson",
            "question": "$A$ va $B$ vektorlarning orasidagi burchakni toping: $$A = (1;\\; 0;\\; 1), \\qquad B = (0;\\; 1;\\; 1)$$",
            "options": [
                "$60^\\circ$ ($\\frac{\\pi}{3}$)",
                "$45^\\circ$ ($\\frac{\\pi}{4}$)",
                "$90^\\circ$ ($\\frac{\\pi}{2}$)",
                "$30^\\circ$ ($\\frac{\\pi}{6}$)"
            ],
            "answer": 0,
            "explanation": "$\\cos\\varphi = \\frac{(A, B)}{|A|\\cdot|B|} = \\frac{1\\cdot 0 + 0\\cdot 1 + 1\\cdot 1}{\\sqrt{2}\\cdot\\sqrt{2}} = \\frac{1}{2} \\implies \\varphi = 60^\\circ$ ($\\frac{\\pi}{3}$)."
        }
    ]


def build_midterm():
    # Mavjud 270 ta nazariy savollar bazasini yuklaymiz
    q_js_path = os.path.join(BASE_DIR, "js", "questions-data.js")
    with open(q_js_path, "r", encoding="utf-8") as f:
        text = f.read()
    json_str = text.split("window.QUESTIONS_BANK = ", 1)[1].rstrip(";\n")
    theory_bank = json.loads(json_str)

    # Har bir 1..8 mavzudan nazariy savollarni ajratib olamiz
    by_topic = {t: [q for q in theory_bank if q["topicId"] == t] for t in range(1, 9)}
    for t in range(1, 9):
        assert len(by_topic[t]) == 30, f"Topic {t} expected 30 questions"

    practical_base = get_17_practical_problems()
    assert len(practical_base) == 17

    # 1-variantdagi nazariy savollar o'rinlari: 7, 10, 11, 12, 14, 16, 18, 23 (jami 8 ta o'rin — 8 ta mavzudan 1 tadan!)
    THEORY_SLOTS_V1 = [7, 10, 11, 12, 14, 16, 18, 23]
    # Har bir 8 ta nazariy o'ringa 1..8 mavzularni biriktiramiz:
    # 7 -> 1-mavzu, 10 -> 2-mavzu, 11 -> 4-mavzu (yoki 2/4), 12 -> 3-mavzu, 14 -> 5-mavzu, 16 -> 6-mavzu, 18 -> 7-mavzu, 23 -> 8-mavzu
    SLOT_TO_TOPIC = {
        7: 1,
        10: 2,
        11: 4,
        12: 3,
        14: 5,
        16: 6,
        18: 7,
        23: 8
    }

    rng = random.Random(20261121)
    variants = []

    for v in range(1, 11):
        # Har bir variantda 1..8 mavzudan turlicha nazariy savol tanlaymiz!
        # Variant v (1..10) uchun topic t dan ((v - 1) * 3 + t) % 30 indeksdagi savolni olamiz -> barcha 10 variantda 80 ta MUTLAQO TURLI nazariy savol!
        used_theory_for_v = {}
        for slot_num, t_id in SLOT_TO_TOPIC.items():
            # Variant 1..10 uchun har mavzudan turli savol:
            pick_idx = ((v - 1) * 3 + (t_id % 3)) % 30
            tq = by_topic[t_id][pick_idx]
            used_theory_for_v[slot_num] = {
                "origNum": slot_num,
                "code": f"NZ-{t_id}",
                "topicId": t_id,
                "kind": "Nazariy",
                "difficulty": tq["difficulty"],
                "question": f"[Nazariy • {t_id}-Ma’ruza] " + tq["question"],
                "options": list(tq["options"]),
                "answer": tq["answer"],
                "explanation": tq["explanation"]
            }

        # 17 ta amaliy + 8 ta nazariy = 25 ta savolni yig'amiz
        v_questions = []
        for p in practical_base:
            # Variantlar ichida A/B/C/D javob harflari muvozanatli bo'lishi uchun variantlarni deterministik aralashtiramiz
            opts = list(p["options"])
            correct_text = opts[p["answer"]]
            target_pos = (v * 5 + p["origNum"] * 3) % 4
            others = [o for i, o in enumerate(opts) if i != p["answer"]]
            rng.shuffle(others)
            new_opts = others[:target_pos] + [correct_text] + others[target_pos:]
            v_questions.append({
                "origNum": p["origNum"],
                "code": p["code"],
                "topicId": p["topicId"],
                "kind": "Amaliy",
                "difficulty": p["difficulty"],
                "question": p["question"],
                "options": new_opts,
                "answer": target_pos,
                "explanation": p["explanation"]
            })

        for slot_num, tq in used_theory_for_v.items():
            v_questions.append(tq)

        assert len(v_questions) == 25

        if v == 1:
            # 1-Variant: Aynan rasmdagi 1..25 tartibda qoladi!
            v_questions.sort(key=lambda x: x["origNum"])
        else:
            # 2..10-Variantlar: Misol raqamlari o'zgaradi (har bir variantda o'ziga xos 1..25 tartib)!
            rng.shuffle(v_questions)

        # Yakuniy 1..25 tartib raqamlarini belgilaymiz
        final_qs = []
        for idx, item in enumerate(v_questions, start=1):
            final_qs.append({
                "id": f"ON_V{v}_Q{idx}",
                "variant": v,
                "num": idx,
                "origNum": item["origNum"],
                "topicId": item["topicId"],
                "kind": item["kind"],
                "difficulty": item["difficulty"],
                "question": item["question"],
                "options": item["options"],
                "answer": item["answer"],
                "explanation": item["explanation"]
            })

        variants.append({
            "variant": v,
            "title": f"Oraliq Nazorat — {v}-Variant",
            "subtitle": "17 ta amaliy misol (o‘zgarishsiz) + barcha 8 mavzudan 8 ta yangi nazariy savol (raqamlari o‘zgartirilgan)" if v > 1 else "17 ta amaliy misol (rasmdagi tartibda) + barcha 8 mavzudan 8 ta nazariy savol",
            "practicalCount": 17,
            "theoryCount": 8,
            "total": 25,
            "questions": final_qs
        })

    # Verify all 80 theoretical questions across 10 variants are unique!
    all_t_texts = [q["question"] for var in variants for q in var["questions"] if q["kind"] == "Nazariy"]
    assert len(all_t_texts) == 80
    assert len(set(all_t_texts)) == 80, f"Duplicate theoretical questions found! Unique: {len(set(all_t_texts))}"

    # Write js/midterm-data.js
    out_js = os.path.join(BASE_DIR, "js", "midterm-data.js")
    with open(out_js, "w", encoding="utf-8") as f:
        f.write("// Cyber University Davlat Universiteti — Chiziqli Algebra Oraliq Nazorat (10 ta Variant)\n")
        f.write("// Har bir variantda: 17 ta o'zgarmas amaliy misol + barcha 8 mavzuni qamrab olgan 8 ta yangi nazariy savol = 25 ta savol\n")
        f.write("// 2–10-variantlarda misol raqamlari (1..25) har safar o'zgaradi!\n")
        f.write("window.MIDTERM_VARIANTS = ")
        json.dump(variants, f, ensure_ascii=False, indent=2)
        f.write(";\n")

    # Write ORALIQ_NAZORAT_10_VARIANT.md
    letters = ["A", "B", "C", "D"]
    md = [
        "# “Cyber University” Davlat Universiteti — Chiziqli Algebra Fanidan Oraliq Nazorat (1–10-Variantlar)",
        "",
        "> Har bir variant **25 ta savoldan** iborat: **17 ta amaliy misol** (asosiy nazorat ishidagi aynan o‘sha misollar) va **barcha 8 ta ma’ruzani qamrab olgan 8 ta nazariy savol** (har bir variantda yangilanadi). 2–10-variantlarda savollarning tartib raqamlari (1–25) o‘zgartirilgan.",
        ""
    ]
    for var in variants:
        md.append("---")
        md.append(f"## {var['title']}")
        md.append("")
        for q in var["questions"]:
            tag = "Amaliy misol" if q["kind"] == "Amaliy" else f"Nazariy ({q['topicId']}-Ma’ruza)"
            md.append(f"### {q['num']}-savol (`{tag}`)")
            md.append(q["question"])
            md.append("")
            for i, opt in enumerate(q["options"]):
                md.append(f"- **{letters[i]})** {opt}")
            md.append("")
            md.append(f"> **Javob:** **{letters[q['answer']]})** — {q['explanation']}")
            md.append("")

    out_md = os.path.join(BASE_DIR, "ORALIQ_NAZORAT_10_VARIANT.md")
    with open(out_md, "w", encoding="utf-8") as f:
        f.write("\n".join(md))

    print(f"Successfully built 10 midterm variants (250 questions, 80 unique theoretical + 17 fixed practical per variant)!")
    print(f"JS: {out_js}")
    print(f"MD: {out_md}")

if __name__ == "__main__":
    build_midterm()
