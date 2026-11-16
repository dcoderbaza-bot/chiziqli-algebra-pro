# -*- coding: utf-8 -*-
import os
import json
import sys

base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from part1 import get_part1_questions
from part2 import get_part2_questions

TOPIC_TITLES = {
    1: "1-Ma’ruza: Matritsalar va ular ustida amallar (qo‘shish, ayirish, ko‘paytirish va transponirlash)",
    2: "2-Ma’ruza: Determinantlar nazariyasi, asosiy xossalari, 2 va 3-tartibli determinantlar",
    3: "3-Ma’ruza: Teskari matritsa, matritsaning rangi va AX=B matritsaviy tenglama",
    4: "4-Ma’ruza: Yuqori tartibli determinantlar, hisoblash usullari va Laplas teoremasi",
    5: "5-Ma’ruza: Chiziqli tenglamalar sistemasi, Fundamental yechimlar, Matritsalar usuli va Kramer qoidasi",
    6: "6-Ma’ruza: Chiziqli tenglamalar sistemasini yechishning Gauss va Gauss-Jordan usullari. Bazis yechim",
    7: "7-Ma’ruza: Arifmetik vektor fazo, Chiziqli fazo, Chiziqli erklilik va Bazisni almashtirish",
    8: "8-Ma’ruza: Ortogonal va ortonormal vektorlar sistemasi. Gramm-Shmidt formulalari",
    9: "9-Bo‘lim: Aralash Testlar (Barcha 8 ta mavzuni qamrab olgan kompleks testlar)"
}

def generate_markdown():
    js_path = os.path.join(base_dir, "js", "questions-data.js")
    with open(js_path, "r", encoding="utf-8") as f:
        text = f.read()
    json_str = text.split("window.QUESTIONS_BANK = ", 1)[1].rstrip(";\n")
    questions = json.loads(json_str)

    md_lines = [
        "# “Cyber University” Davlat Universiteti — Chiziqli Algebra (270 ta Test Savollari va Professor Yechimlari)",
        "",
        "**Ma’ruzachi:** Fizika-matematika fanlari falsafa doktori (PhD), dotsent **Zuhriddin A. Nazarov**",
        "",
        "> Ushbu hujjatda barcha 8 ta ma’ruza mavzusining har biridan **30 tadan** (jami 240 ta) hamda **30 ta maxsus aralash (kompleks)** test savollari — jami **270 ta test savoli** kalitlari va qisqacha yechimlari bilan keltirilgan.",
        ""
    ]

    letters = ["A", "B", "C", "D"]
    for t_id in range(1, 10):
        md_lines.append(f"---")
        md_lines.append(f"## {TOPIC_TITLES[t_id]}")
        md_lines.append("")
        t_qs = [q for q in questions if q["topicId"] == t_id]
        for q in t_qs:
            md_lines.append(f"### {q['num']}-savol (`{q['id']}` • {q['difficulty']})")
            md_lines.append(f"{q['question']}")
            md_lines.append("")
            for i, opt in enumerate(q["options"]):
                md_lines.append(f"- **{letters[i]})** {opt}")
            md_lines.append("")
            md_lines.append(f"> **To‘g‘ri javob:** **{letters[q['answer']]})**  ")
            md_lines.append(f"> **Professor izohi:** {q['explanation']}")
            md_lines.append("")

    md_path = os.path.join(base_dir, "SAVOLLAR_270_BAZA.md")
    with open(md_path, "w", encoding="utf-8") as f:
        f.write("\n".join(md_lines))
    print(f"Generated {md_path} with {len(questions)} questions.")

if __name__ == "__main__":
    generate_markdown()
