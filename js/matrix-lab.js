// ==========================================================================
// INTERAKTIV MATRITSA, DETERMINANT VA KRAMER LABORATORIYASI
// Professor Z. A. Nazarov ma'ruzalaridagi misollar bilan
// ==========================================================================

window.MatrixLab = (function () {
  let currentSize = 3;

  const PRESETS = [
    {
      name: "3-Ma'ruza (8-slayd): Teskari matritsa (det = 27)",
      size: 3,
      A: [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 0]
      ],
      B: [14, 32, 23]
    },
    {
      name: "5-Ma'ruza (26-slayd): Matritsalar usuli (det = -12)",
      size: 3,
      A: [
        [2, 2, -3],
        [1, -1, 1],
        [3, 1, 1]
      ],
      B: [5, 0, 2]
    },
    {
      name: "5-Ma'ruza (31-slayd): Kramer qoidasi (det = 27)",
      size: 3,
      A: [
        [-2, 1, -1],
        [4, 2, 3],
        [1, 3, -2]
      ],
      B: [7, -5, 1]
    },
    {
      name: "4-Ma'ruza (20-slayd): Laplas formulasi (det = 40)",
      size: 3,
      A: [
        [2, 1, 3],
        [5, 3, 2],
        [1, 4, 3]
      ],
      B: [13, 17, 18]
    },
    {
      name: "2-Tartibli sistema (5-Ma'ruza, 17-slayd)",
      size: 2,
      A: [
        [1, -1],
        [2, 1]
      ],
      B: [2, 7]
    }
  ];

  function fmtNum(val) {
    if (Math.abs(val) < 1e-10) return "0";
    if (Math.abs(val - Math.round(val)) < 1e-8) return String(Math.round(val));
    return Number(val.toFixed(3)).toString();
  }

  function det2(m) {
    return m[0][0] * m[1][1] - m[0][1] * m[1][0];
  }

  function det3(m) {
    return (
      m[0][0] * (m[1][1] * m[2][2] - m[1][2] * m[2][1]) -
      m[0][1] * (m[1][0] * m[2][2] - m[1][2] * m[2][0]) +
      m[0][2] * (m[1][0] * m[2][1] - m[1][1] * m[2][0])
    );
  }

  function computeCofactors3(m) {
    const C = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0]
    ];
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        const sub = [];
        for (let r = 0; r < 3; r++) {
          if (r === i) continue;
          const row = [];
          for (let c = 0; c < 3; c++) {
            if (c === j) continue;
            row.push(m[r][c]);
          }
          sub.push(row);
        }
        const sign = (i + j) % 2 === 0 ? 1 : -1;
        C[i][j] = sign * det2(sub);
      }
    }
    return C;
  }

  function transpose(m) {
    const n = m.length;
    const res = Array.from({ length: n }, () => Array(n).fill(0));
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        res[j][i] = m[i][j];
      }
    }
    return res;
  }

  function computeRank(m) {
    const n = m.length;
    const a = m.map((r) => r.slice());
    let rank = 0;
    for (let col = 0, row = 0; col < n && row < n; col++) {
      let sel = row;
      for (let i = row; i < n; i++) {
        if (Math.abs(a[i][col]) > Math.abs(a[sel][col])) sel = i;
      }
      if (Math.abs(a[sel][col]) < 1e-9) continue;
      const tmp = a[sel];
      a[sel] = a[row];
      a[row] = tmp;
      for (let i = 0; i < n; i++) {
        if (i !== row) {
          const factor = a[i][col] / a[row][col];
          for (let j = col; j < n; j++) {
            a[i][j] -= factor * a[row][j];
          }
        }
      }
      row++;
      rank++;
    }
    return rank;
  }

  function matrixToLatex(m, barType = "pmatrix") {
    const rows = m.map((r) => r.map(fmtNum).join(" & ")).join(" \\\\ ");
    return `\\begin{${barType}} ${rows} \\end{${barType}}`;
  }

  function renderInputs(size, AData, BData) {
    currentSize = size;
    const gridEl = document.getElementById("lab-matrix-inputs");
    if (!gridEl) return;

    const defaultA =
      AData ||
      (size === 3
        ? [
            [2, 2, -3],
            [1, -1, 1],
            [3, 1, 1]
          ]
        : [
            [1, -1],
            [2, 1]
          ]);
    const defaultB = BData || (size === 3 ? [5, 0, 2] : [2, 7]);

    let html = `<div class="overflow-x-auto"><table class="mx-auto border-separate border-spacing-2">`;
    html += `<thead><tr>`;
    for (let j = 0; j < size; j++) {
      html += `<th class="text-xs font-bold text-purple-300 uppercase">x<sub>${j + 1}</sub> ustuni</th>`;
    }
    html += `<th class="text-xs font-bold text-fuchsia-300 uppercase pl-3 border-l border-purple-500/30">Ozod had (B)</th>`;
    html += `</tr></thead><tbody>`;

    for (let i = 0; i < size; i++) {
      html += `<tr>`;
      for (let j = 0; j < size; j++) {
        const val = defaultA[i] && defaultA[i][j] !== undefined ? defaultA[i][j] : 0;
        html += `<td>
          <input type="number" step="any" id="lab-a-${i}-${j}" value="${val}"
            class="w-16 sm:w-20 text-center py-2 px-2 rounded-xl bg-purple-950/60 border border-purple-500/40 text-white font-bold focus:outline-none focus:border-fuchsia-400" />
        </td>`;
      }
      const bVal = defaultB[i] !== undefined ? defaultB[i] : 0;
      html += `<td class="pl-3 border-l border-purple-500/30">
        <input type="number" step="any" id="lab-b-${i}" value="${bVal}"
          class="w-16 sm:w-20 text-center py-2 px-2 rounded-xl bg-fuchsia-950/50 border border-fuchsia-500/40 text-fuchsia-200 font-bold focus:outline-none focus:border-fuchsia-400" />
      </td>`;
      html += `</tr>`;
    }
    html += `</tbody></table></div>`;
    gridEl.innerHTML = html;

    document.querySelectorAll("#lab-matrix-inputs input").forEach((inp) => {
      inp.addEventListener("input", calculateAndRender);
    });

    calculateAndRender();
  }

  function calculateAndRender() {
    const n = currentSize;
    const A = Array.from({ length: n }, () => Array(n).fill(0));
    const B = Array(n).fill(0);

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        const el = document.getElementById(`lab-a-${i}-${j}`);
        A[i][j] = el ? parseFloat(el.value) || 0 : 0;
      }
      const bEl = document.getElementById(`lab-b-${i}`);
      B[i] = bEl ? parseFloat(bEl.value) || 0 : 0;
    }

    const detA = n === 2 ? det2(A) : det3(A);
    const AT = transpose(A);
    const rA = computeRank(A);
    const isSingular = Math.abs(detA) < 1e-9;

    let cofactors = null;
    if (n === 2) {
      cofactors = [
        [A[1][1], -A[1][0]],
        [-A[0][1], A[0][0]]
      ];
    } else {
      cofactors = computeCofactors3(A);
    }
    const adjA = transpose(cofactors);

    // Kramer determinants
    const deltaX = [];
    for (let col = 0; col < n; col++) {
      const modA = A.map((row, rIdx) =>
        row.map((val, cIdx) => (cIdx === col ? B[rIdx] : val))
      );
      deltaX.push(n === 2 ? det2(modA) : det3(modA));
    }

    const outEl = document.getElementById("lab-results-container");
    if (!outEl) return;

    const kramerFormulaLatex = !isSingular
      ? deltaX
          .map(
            (dx, idx) =>
              `x_${idx + 1} = \\frac{\\Delta_{x_${idx + 1}}}{\\Delta} = \\frac{${fmtNum(dx)}}{${fmtNum(detA)}} = \\mathbf{${fmtNum(dx / detA)}}`
          )
          .join(", \\qquad ")
      : "\\Delta = 0 \\text{ bo‘lgani uchun yagona Kramer yechimi mavjud emas.}";

    const invLatex = !isSingular
      ? `A^{-1} = \\frac{1}{${fmtNum(detA)}} ${matrixToLatex(adjA)}`
      : "\\det(A) = 0 \\text{ (Xos matritsa — teskari matritsa mavjud emas!)}";

    outEl.innerHTML = `
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div class="purple-glass rounded-2xl p-4 border border-purple-500/30">
          <div class="text-xs uppercase tracking-wider text-purple-300 font-semibold">Determinant Δ = det(A)</div>
          <div class="text-3xl font-extrabold mt-1 ${isSingular ? "text-rose-400" : "text-emerald-400"}">${fmtNum(detA)}</div>
          <div class="text-xs mt-1 text-purple-200/80">${isSingular ? "⚠️ Xos matritsa (det = 0)" : "✅ Xosmas matritsa (det ≠ 0)"}</div>
        </div>
        <div class="purple-glass rounded-2xl p-4 border border-purple-500/30">
          <div class="text-xs uppercase tracking-wider text-purple-300 font-semibold">Matritsa Rangi r(A)</div>
          <div class="text-3xl font-extrabold mt-1 text-fuchsia-300">r(A) = ${rA}</div>
          <div class="text-xs mt-1 text-purple-200/80">O‘lchami: ${n} × ${n} kvadrat matritsa</div>
        </div>
        <div class="purple-glass rounded-2xl p-4 border border-purple-500/30">
          <div class="text-xs uppercase tracking-wider text-purple-300 font-semibold">Kramer Qo‘shimcha Δ<sub>x</sub></div>
          <div class="text-lg font-bold mt-2 text-violet-200">
            ${deltaX.map((d, i) => `Δ<sub>x${i + 1}</sub> = ${fmtNum(d)}`).join(" &bull; ")}
          </div>
          <div class="text-xs mt-1 text-purple-200/80">Ozod hadlar ustuni almashtirilgan</div>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div class="purple-glass rounded-2xl p-5">
          <h4 class="text-sm font-bold uppercase tracking-wider text-fuchsia-300 mb-3">1. Asosiy va Transponirlangan Matritsa</h4>
          <div class="math-render text-sm overflow-x-auto">
            $$A = ${matrixToLatex(A)}, \\qquad A^T = ${matrixToLatex(AT)}$$
          </div>
        </div>
        <div class="purple-glass rounded-2xl p-5">
          <h4 class="text-sm font-bold uppercase tracking-wider text-fuchsia-300 mb-3">2. Qo‘shma Matritsa ($\\bar{A}$) va Teskari Matritsa ($A^{-1}$)</h4>
          <div class="math-render text-sm overflow-x-auto">
            $$\\bar{A} = ${matrixToLatex(adjA)}, \\qquad ${invLatex}$$
          </div>
        </div>
      </div>

      <div class="purple-glass rounded-2xl p-5 mt-5 border border-fuchsia-500/30">
        <h4 class="text-sm font-bold uppercase tracking-wider text-fuchsia-300 mb-3">3. Tenglamalar Sistemasi Yechimi ($AX = B$ — Kramer & Gauss-Jordan)</h4>
        <div class="math-render text-base overflow-x-auto">
          $$${kramerFormulaLatex}$$
        </div>
      </div>
    `;

    if (window.renderMathInElement) {
      window.renderMathInElement(outEl, {
        delimiters: [
          { left: "$$", right: "$$", display: true },
          { left: "$", right: "$", display: false }
        ],
        throwOnError: false
      });
    }
  }

  function init() {
    const presetSelect = document.getElementById("lab-preset-select");
    if (presetSelect) {
      presetSelect.innerHTML = PRESETS.map(
        (p, idx) => `<option value="${idx}" class="bg-slate-900 text-white">${p.name}</option>`
      ).join("");
      presetSelect.addEventListener("change", (e) => {
        const p = PRESETS[parseInt(e.target.value, 10)];
        if (p) {
          updateSizeButtons(p.size);
          renderInputs(p.size, p.A, p.B);
        }
      });
    }

    const btn2 = document.getElementById("lab-size-2");
    const btn3 = document.getElementById("lab-size-3");
    if (btn2 && btn3) {
      btn2.addEventListener("click", () => {
        updateSizeButtons(2);
        renderInputs(2);
      });
      btn3.addEventListener("click", () => {
        updateSizeButtons(3);
        renderInputs(3);
      });
    }

    renderInputs(3, PRESETS[0].A, PRESETS[0].B);
  }

  function updateSizeButtons(sz) {
    const btn2 = document.getElementById("lab-size-2");
    const btn3 = document.getElementById("lab-size-3");
    if (!btn2 || !btn3) return;
    if (sz === 2) {
      btn2.className = "px-4 py-2 rounded-xl text-sm font-bold btn-royal";
      btn3.className = "px-4 py-2 rounded-xl text-sm font-bold btn-outline-purple";
    } else {
      btn3.className = "px-4 py-2 rounded-xl text-sm font-bold btn-royal";
      btn2.className = "px-4 py-2 rounded-xl text-sm font-bold btn-outline-purple";
    }
  }

  return { init, renderInputs };
})();
