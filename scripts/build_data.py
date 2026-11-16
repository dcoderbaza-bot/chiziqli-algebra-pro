# -*- coding: utf-8 -*-
import json
import random
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from part1 import get_part1_questions
from part2 import get_part2_questions

def build():
    all_topics = {}
    all_topics.update(get_part1_questions())
    all_topics.update(get_part2_questions())

    rng = random.Random(20261116)
    output_list = []
    answer_counts = {0: 0, 1: 0, 2: 0, 3: 0}

    for topic_id in sorted(all_topics.keys()):
        q_list = all_topics[topic_id]
        assert len(q_list) == 30, f"Topic {topic_id} has {len(q_list)} questions instead of 30!"
        for idx, item in enumerate(q_list, start=1):
            opts = list(item["opts"])
            assert len(opts) == 4, f"Topic {topic_id} Q{idx} does not have 4 options"
            assert len(set(opts)) == 4, f"Topic {topic_id} Q{idx} has duplicate options: {opts}"

            correct_text = opts[item["ans"]]
            # Deterministic rotation/shuffle so A/B/C/D are evenly distributed
            target_pos = (topic_id * 7 + idx * 3) % 4
            other_opts = [o for i, o in enumerate(opts) if i != item["ans"]]
            rng.shuffle(other_opts)
            new_opts = other_opts[:target_pos] + [correct_text] + other_opts[target_pos:]
            assert new_opts[target_pos] == correct_text
            answer_counts[target_pos] += 1

            output_list.append({
                "id": f"T{topic_id}_Q{idx}",
                "topicId": topic_id,
                "num": idx,
                "question": item["q"],
                "options": new_opts,
                "answer": target_pos,
                "difficulty": item.get("diff", "O'rta"),
                "explanation": item["exp"]
            })

    out_path = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "js", "questions-data.js")
    with open(out_path, "w", encoding="utf-8") as f:
        f.write("// Cyber University Davlat Universiteti — Chiziqli Algebra Testlar Bazasi\n")
        f.write("// Jami: 9 ta bo'lim × 30 ta savol = 270 ta tasdiqlangan test savoli\n")
        f.write("window.QUESTIONS_BANK = ")
        json.dump(output_list, f, ensure_ascii=False, indent=2)
        f.write(";\n")

    print(f"Successfully generated {len(output_list)} questions into {out_path}")
    print("Answer distribution across A(0), B(1), C(2), D(3):", answer_counts)

if __name__ == "__main__":
    build()
