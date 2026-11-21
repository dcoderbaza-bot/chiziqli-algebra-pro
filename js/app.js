// ==========================================================================
// CYBER UNIVERSITY — CHIZIQLI ALGEBRA VIRTUAL AKADEMIYASI
// Asosiy Ilova Kontrolleri (Professor Z. A. Nazarov kursi asosida)
// ==========================================================================

(function () {
  const STORAGE_KEY = "cyber_chiziqli_algebra_pro_v1";

  let state = {
    theme: "dark",
    activeTab: "dashboard",
    selectedTheoryTopic: 1,
    catalogFilterTopic: "all",
    catalogFilterDiff: "all",
    catalogSearch: "",
    catalogShowAnswers: true,
    previewMidtermVariantNum: null,
    previewMidtermShowAnswers: true,
    stats: {
      totalAttempts: 0,
      totalAnswered: 0,
      totalCorrect: 0,
      topicBest: {}, // topicId -> { pct, score, total, date }
      midtermBest: {}, // variantNum -> { pct, score, total, date }
      history: [] // { id, title, mode, score, total, pct, durationSec, date }
    },
    quiz: {
      active: false,
      title: "",
      subtitle: "",
      mode: "practice", // 'practice' | 'exam'
      topicId: null,
      questions: [],
      currentIndex: 0,
      answers: {}, // index -> optionIdx
      flagged: {}, // index -> boolean
      startTime: 0,
      elapsedSec: 0,
      timeLimitSec: 0,
      timerId: null,
      finished: false,
      reviewFilter: "all" // 'all' | 'wrong' | 'flagged'
    }
  };

  // Ma'lumotlarni LocalStorage dan yuklash
  function loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed.theme) state.theme = parsed.theme;
        if (parsed.stats) {
          state.stats = Object.assign(state.stats, parsed.stats);
        }
      }
    } catch (e) {
      console.warn("LocalStorage o'qishda xatolik:", e);
    }
    applyTheme();
  }

  function saveState() {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          theme: state.theme,
          stats: state.stats
        })
      );
    } catch (e) {
      console.warn("LocalStorage saqlashda xatolik:", e);
    }
  }

  function applyTheme() {
    const html = document.documentElement;
    if (state.theme === "light") {
      html.classList.add("light-mode");
    } else {
      html.classList.remove("light-mode");
    }
    const labelEl = document.getElementById("theme-toggle-label");
    if (labelEl) {
      labelEl.textContent = state.theme === "light" ? "Tungi Binafsha" : "Yorug‘ Binafsha";
    }
  }

  function toggleTheme() {
    state.theme = state.theme === "dark" ? "light" : "dark";
    applyTheme();
    saveState();
  }

  function renderMath(container) {
    const target = container || document.body;
    if (window.renderMathInElement) {
      try {
        window.renderMathInElement(target, {
          delimiters: [
            { left: "$$", right: "$$", display: true },
            { left: "$", right: "$", display: false }
          ],
          throwOnError: false
        });
      } catch (e) {
        console.warn("KaTeX render warning:", e);
      }
    }
  }

  function refreshIcons() {
    if (window.lucide && window.lucide.createIcons) {
      window.lucide.createIcons();
    }
  }

  // Massivni aralashtirish (Fisher-Yates)
  function shuffleArray(arr) {
    const copy = arr.slice();
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const tmp = copy[i];
      copy[i] = copy[j];
      copy[j] = tmp;
    }
    return copy;
  }

  function cloneQuestionWithShuffledOptions(q, doShuffleOptions) {
    if (!doShuffleOptions) {
      return Object.assign({}, q, { options: q.options.slice() });
    }
    const pairs = q.options.map((text, idx) => ({
      text,
      isCorrect: idx === q.answer
    }));
    const shuffled = shuffleArray(pairs);
    const newAnswer = shuffled.findIndex((p) => p.isCorrect);
    return Object.assign({}, q, {
      options: shuffled.map((p) => p.text),
      answer: newAnswer
    });
  }

  // Navigatsiya
  function switchTab(tabName) {
    state.activeTab = tabName;
    document.querySelectorAll(".view-section").forEach((sec) => {
      sec.classList.add("hidden");
    });
    const targetSec = document.getElementById(`view-${tabName}`);
    if (targetSec) {
      targetSec.classList.remove("hidden");
    }

    document.querySelectorAll(".nav-tab").forEach((btn) => {
      if (btn.dataset.tab === tabName) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });

    if (tabName === "dashboard") {
      renderDashboard();
    } else if (tabName === "midterm") {
      renderMidtermHub();
    } else if (tabName === "mixed") {
      renderMixedHub();
    } else if (tabName === "theory") {
      renderTheoryView();
    } else if (tabName === "catalog") {
      renderCatalogView();
    } else if (tabName === "lab") {
      if (window.MatrixLab) window.MatrixLab.init();
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
    refreshIcons();
    renderMath(targetSec);
  }

  // =========================================================================
  // 1. DASHBOARD VA MAVZULAR KARTALARI
  // =========================================================================
  function renderDashboard() {
    // Yuqori statistika ko'rsatkichlari
    const masteredTopics = Object.values(state.stats.topicBest).filter((b) => b.pct >= 80).length;
    const accuracy =
      state.stats.totalAnswered > 0
        ? Math.round((state.stats.totalCorrect / state.stats.totalAnswered) * 100)
        : 0;

    const elTotalQ = document.getElementById("stat-total-questions");
    const elAttempts = document.getElementById("stat-total-attempts");
    const elAccuracy = document.getElementById("stat-accuracy");
    const elMastered = document.getElementById("stat-mastered-topics");

    if (elTotalQ) elTotalQ.textContent = `${window.QUESTIONS_BANK.length} ta`;
    if (elAttempts) elAttempts.textContent = `${state.stats.totalAttempts} marta`;
    if (elAccuracy) elAccuracy.textContent = `${accuracy}%`;
    if (elMastered) elMastered.textContent = `${masteredTopics} / 9`;

    // Mavzular Grid
    const grid = document.getElementById("topics-grid-container");
    if (!grid) return;

    grid.innerHTML = window.TOPICS_METADATA.map((t) => {
      const best = state.stats.topicBest[t.id];
      const bestPct = best ? best.pct : 0;
      const isSpecial = t.id === 9;

      return `
        <div class="purple-glass purple-glass-interactive rounded-3xl p-6 flex flex-col justify-between relative overflow-hidden ${
          isSpecial ? "ring-2 ring-fuchsia-500/60 md:col-span-2 lg:col-span-1" : ""
        }">
          <div class="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-gradient-to-br ${t.accent} opacity-20 blur-2xl pointer-events-none"></div>

          <div>
            <div class="flex items-center justify-between gap-2 mb-4">
              <span class="px-3 py-1 rounded-full text-xs font-extrabold tracking-wider uppercase bg-gradient-to-r ${t.accent} text-white shadow">
                ${t.code}
              </span>
              <span class="px-3 py-1 rounded-full text-xs font-bold bg-purple-950/70 border border-purple-400/30 text-purple-200">
                ${t.badge}
              </span>
            </div>

            <h3 class="text-xl font-extrabold leading-snug mb-2">${t.title}</h3>
            <p class="text-sm text-purple-200/80 mb-4 line-clamp-2">${t.subtitle}</p>

            <div class="flex flex-wrap gap-1.5 mb-5">
              ${t.keywords
                .map(
                  (kw) =>
                    `<span class="text-[11px] px-2.5 py-0.5 rounded-lg bg-purple-500/15 border border-purple-400/20 text-purple-200">${kw}</span>`
                )
                .join("")}
            </div>
          </div>

          <div>
            <div class="mb-4">
              <div class="flex justify-between text-xs font-semibold mb-1">
                <span class="text-purple-300">Eng yaxshi natija:</span>
                <span class="${bestPct >= 80 ? "text-emerald-400" : "text-fuchsia-300"} font-bold">
                  ${best ? `${best.score}/${best.total} (${bestPct}%)` : "Hali ishlanmagan"}
                </span>
              </div>
              <div class="w-full h-2 rounded-full bg-purple-950/80 overflow-hidden p-0.5 border border-purple-500/20">
                <div class="h-full rounded-full bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500 transition-all duration-500"
                     style="width: ${Math.max(bestPct, 3)}%"></div>
              </div>
            </div>

            <div class="grid grid-cols-2 gap-2.5">
              <button onclick="window.App.startTopicQuiz(${t.id}, 'practice')"
                class="btn-royal py-2.5 px-3 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-1.5">
                <i data-lucide="graduation-cap" class="w-4 h-4"></i>
                <span>O‘quv (30 test)</span>
              </button>
              <button onclick="window.App.startTopicQuiz(${t.id}, 'exam')"
                class="btn-outline-purple py-2.5 px-3 rounded-xl text-xs sm:text-sm font-semibold flex items-center justify-center gap-1.5">
                <i data-lucide="timer" class="w-4 h-4 text-fuchsia-400"></i>
                <span>Imtihon (30)</span>
              </button>
            </div>

            <button onclick="window.App.openTheoryForTopic(${t.id})"
              class="w-full mt-2 py-2 px-3 rounded-xl text-xs font-semibold text-purple-300 hover:text-white hover:bg-purple-500/15 transition flex items-center justify-center gap-1.5">
              <i data-lucide="book-open" class="w-3.5 h-3.5"></i>
              <span>Professor konspekti va formulalar</span>
            </button>
          </div>
        </div>
      `;
    }).join("");

    renderRecentHistory();
    refreshIcons();
  }

  function renderRecentHistory() {
    const container = document.getElementById("recent-history-list");
    if (!container) return;
    const hist = state.stats.history.slice(0, 6);
    if (hist.length === 0) {
      container.innerHTML = `
        <div class="text-center py-6 text-sm text-purple-300/70">
          Hozircha yakunlangan testlar tarixi yo‘q. Istalgan mavzudan 30 talik testni yoki Aralash testni boshlang!
        </div>
      `;
      return;
    }

    container.innerHTML = hist
      .map((h) => {
        const badgeColor =
          h.pct >= 86
            ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
            : h.pct >= 70
            ? "bg-purple-500/20 text-purple-200 border-purple-500/40"
            : h.pct >= 55
            ? "bg-amber-500/20 text-amber-300 border-amber-500/40"
            : "bg-rose-500/20 text-rose-300 border-rose-500/40";
        return `
        <div class="flex flex-wrap items-center justify-between gap-3 p-3.5 rounded-2xl bg-purple-950/40 border border-purple-500/25">
          <div>
            <div class="font-bold text-sm">${h.title}</div>
            <div class="text-xs text-purple-300/80">${h.mode === "exam" ? "⏱️ Imtihon rejimi" : "🎓 O‘quv rejimi"} &bull; ${h.date}</div>
          </div>
          <div class="flex items-center gap-3">
            <span class="px-3 py-1 rounded-xl text-xs font-extrabold border ${badgeColor}">
              ${h.score} / ${h.total} (${h.pct}%)
            </span>
          </div>
        </div>
      `;
      })
      .join("");
  }

  // =========================================================================
  // 2. ARALASH TESTLAR MARKAZI (MIXED TESTS HUB)
  // =========================================================================
  function renderMixedHub() {
    const checkboxesEl = document.getElementById("custom-mix-topics");
    if (!checkboxesEl) return;

    checkboxesEl.innerHTML = window.TOPICS_METADATA.map(
      (t) => `
      <label class="flex items-center gap-3 p-3 rounded-2xl bg-purple-950/45 border border-purple-500/30 cursor-pointer hover:border-fuchsia-400 transition">
        <input type="checkbox" class="custom-topic-cb w-4 h-4 accent-fuchsia-500 rounded" value="${t.id}" checked />
        <div class="text-xs sm:text-sm">
          <div class="font-bold text-white">${t.code}: ${t.title}</div>
          <div class="text-xs text-purple-300/80">30 ta savol</div>
        </div>
      </label>
    `
    ).join("");
  }

  function startPresetMixed(presetType) {
    if (presetType === "curated30") {
      startTopicQuiz(9, "practice");
      return;
    }
    if (presetType === "oraliq25") {
      // Har bir 1..8 mavzudan 3 tadan + 1 ta 9-mavzudan = 25 ta savol
      let selected = [];
      for (let t = 1; t <= 8; t++) {
        const tQs = window.QUESTIONS_BANK.filter((q) => q.topicId === t);
        selected = selected.concat(shuffleArray(tQs).slice(0, 3));
      }
      const t9 = window.QUESTIONS_BANK.filter((q) => q.topicId === 9);
      selected = selected.concat(shuffleArray(t9).slice(0, 1));
      launchQuiz({
        title: "Oraliq / Yakuniy Imtihon (Aralash 25 ta savol)",
        subtitle: "Barcha 8 ta ma’ruza mavzularidan proporsional tanlangan imtihon varianti",
        mode: "exam",
        topicId: "mix_25",
        questions: shuffleArray(selected).map((q) => cloneQuestionWithShuffledOptions(q, true)),
        timeLimitSec: 40 * 60
      });
      return;
    }
    if (presetType === "marathon40") {
      // Har bir 1..8 mavzudan 5 tadan = 40 ta savol
      let selected = [];
      for (let t = 1; t <= 8; t++) {
        const tQs = window.QUESTIONS_BANK.filter((q) => q.topicId === t);
        selected = selected.concat(shuffleArray(tQs).slice(0, 5));
      }
      launchQuiz({
        title: "Super-Marafon Aralash Imtihon (40 ta savol)",
        subtitle: "Har bir ma’ruzadan 5 tadan saralangan savol • 60 daqiqa",
        mode: "exam",
        topicId: "mix_40",
        questions: shuffleArray(selected).map((q) => cloneQuestionWithShuffledOptions(q, true)),
        timeLimitSec: 60 * 60
      });
      return;
    }
    if (presetType === "blitz15") {
      const selected = shuffleArray(window.QUESTIONS_BANK).slice(0, 15);
      launchQuiz({
        title: "Tezkor Blitz Aralash Test (15 ta savol)",
        subtitle: "270 ta savol bazasidan tasodifiy 15 ta savol",
        mode: "practice",
        topicId: "mix_15",
        questions: selected.map((q) => cloneQuestionWithShuffledOptions(q, true)),
        timeLimitSec: 15 * 60
      });
    }
  }

  function startCustomMixedQuiz() {
    const checkedTopicIds = Array.from(document.querySelectorAll(".custom-topic-cb:checked")).map((cb) =>
      parseInt(cb.value, 10)
    );
    if (checkedTopicIds.length === 0) {
      alert("Iltimos, kamida bitta mavzuni tanlang!");
      return;
    }

    const countVal = document.getElementById("custom-mix-count").value;
    const diffVal = document.getElementById("custom-mix-diff").value;
    const modeVal = document.getElementById("custom-mix-mode").value;
    const shuffleOpts = document.getElementById("custom-mix-shuffle").checked;

    let pool = window.QUESTIONS_BANK.filter((q) => checkedTopicIds.includes(q.topicId));
    if (diffVal !== "all") {
      pool = pool.filter((q) => q.difficulty === diffVal);
    }

    if (pool.length === 0) {
      alert("Tanlangan filtr bo‘yicha savollar topilmadi!");
      return;
    }

    pool = shuffleArray(pool);
    const count = countVal === "all" ? pool.length : Math.min(parseInt(countVal, 10), pool.length);
    const chosen = pool.slice(0, count).map((q) => cloneQuestionWithShuffledOptions(q, shuffleOpts));

    launchQuiz({
      title: `Maxsus Aralash Test (${chosen.length} ta savol)`,
      subtitle: `Tanlangan mavzular: ${checkedTopicIds.length} ta • Qiyinlik: ${diffVal === "all" ? "Barchasi" : diffVal}`,
      mode: modeVal,
      topicId: "custom_mix",
      questions: chosen,
      timeLimitSec: modeVal === "exam" ? chosen.length * 90 : 0
    });
  }

  // =========================================================================
  // 3. TESTNI ISHGA TUSHIRISH VA BOSHQARISH (QUIZ ENGINE)
  // =========================================================================
  function startTopicQuiz(topicId, mode) {
    const meta = window.TOPICS_METADATA.find((t) => t.id === topicId);
    const rawQs = window.QUESTIONS_BANK.filter((q) => q.topicId === topicId);
    if (!meta || rawQs.length === 0) return;

    const questions =
      mode === "exam"
        ? shuffleArray(rawQs).map((q) => cloneQuestionWithShuffledOptions(q, true))
        : rawQs.map((q) => cloneQuestionWithShuffledOptions(q, false));

    launchQuiz({
      title: `${meta.code}: ${meta.title}`,
      subtitle: meta.subtitle,
      mode: mode,
      topicId: topicId,
      questions: questions,
      timeLimitSec: mode === "exam" ? 45 * 60 : 0
    });
  }

  function launchQuiz(config) {
    if (state.quiz.timerId) {
      clearInterval(state.quiz.timerId);
    }

    state.quiz = {
      active: true,
      title: config.title,
      subtitle: config.subtitle,
      mode: config.mode,
      topicId: config.topicId,
      questions: config.questions,
      currentIndex: 0,
      answers: {},
      flagged: {},
      startTime: Date.now(),
      elapsedSec: 0,
      timeLimitSec: config.timeLimitSec || 0,
      timerId: null,
      finished: false,
      reviewFilter: "all"
    };

    state.quiz.timerId = setInterval(() => {
      if (!state.quiz.active || state.quiz.finished) return;
      state.quiz.elapsedSec = Math.floor((Date.now() - state.quiz.startTime) / 1000);
      updateQuizTimerUI();
      if (state.quiz.mode === "exam" && state.quiz.timeLimitSec > 0) {
        if (state.quiz.elapsedSec >= state.quiz.timeLimitSec) {
          finishQuiz(true);
        }
      }
    }, 1000);

    switchTab("quiz");
    renderCurrentQuestion();
    updateQuizTimerUI();
  }

  function formatTime(sec) {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  }

  function updateQuizTimerUI() {
    const timerEl = document.getElementById("quiz-timer-display");
    if (!timerEl) return;
    if (state.quiz.mode === "exam" && state.quiz.timeLimitSec > 0) {
      const rem = Math.max(0, state.quiz.timeLimitSec - state.quiz.elapsedSec);
      timerEl.textContent = `⏳ ${formatTime(rem)}`;
      if (rem < 120) {
        timerEl.classList.add("text-rose-400", "animate-pulse");
      } else {
        timerEl.classList.remove("text-rose-400", "animate-pulse");
      }
    } else {
      timerEl.textContent = `⏱️ ${formatTime(state.quiz.elapsedSec)}`;
    }
  }

  function renderCurrentQuestion() {
    const qz = state.quiz;
    const q = qz.questions[qz.currentIndex];
    if (!q) return;

    const titleEl = document.getElementById("quiz-header-title");
    const modeBadgeEl = document.getElementById("quiz-mode-badge");
    const progressTextEl = document.getElementById("quiz-progress-text");
    const progressBarEl = document.getElementById("quiz-progress-bar");

    if (titleEl) titleEl.textContent = qz.title;
    if (modeBadgeEl) {
      modeBadgeEl.textContent =
        qz.mode === "exam" ? "⏱️ IMTIHON REJIMI" : "🎓 PROFESSOR BILAN O‘RGANISH";
      modeBadgeEl.className =
        qz.mode === "exam"
          ? "px-3 py-1 rounded-full text-xs font-extrabold bg-fuchsia-600/30 border border-fuchsia-400 text-fuchsia-200"
          : "px-3 py-1 rounded-full text-xs font-extrabold bg-purple-600/30 border border-purple-400 text-purple-200";
    }

    const answeredCount = Object.keys(qz.answers).length;
    if (progressTextEl) {
      progressTextEl.textContent = `Savol: ${qz.currentIndex + 1} / ${qz.questions.length} • Белгиланди: ${answeredCount}`;
    }
    if (progressBarEl) {
      const pct = Math.round(((qz.currentIndex + 1) / qz.questions.length) * 100);
      progressBarEl.style.width = `${pct}%`;
    }

    // Savol matni va metadata
    const topicMeta = window.TOPICS_METADATA.find((t) => t.id === q.topicId);
    const qNumBadge = document.getElementById("quiz-q-number");
    const qTopicBadge = document.getElementById("quiz-q-topic");
    const qDiffBadge = document.getElementById("quiz-q-diff");
    const flagBtn = document.getElementById("quiz-flag-btn");

    if (qNumBadge) qNumBadge.textContent = `${qz.currentIndex + 1}-SAVOL`;
    if (qTopicBadge) qTopicBadge.textContent = topicMeta ? `${topicMeta.code}: ${topicMeta.title}` : "";
    if (qDiffBadge) {
      qDiffBadge.textContent = q.difficulty || "O‘rta";
      qDiffBadge.className =
        q.difficulty === "Oson"
          ? "px-2.5 py-0.5 rounded-lg text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
          : q.difficulty === "Qiyin"
          ? "px-2.5 py-0.5 rounded-lg text-xs font-bold bg-rose-500/20 text-rose-300 border border-rose-500/30"
          : "px-2.5 py-0.5 rounded-lg text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30";
    }

    if (flagBtn) {
      const isFlagged = !!qz.flagged[qz.currentIndex];
      flagBtn.className = isFlagged
        ? "px-3 py-1.5 rounded-xl text-xs font-bold bg-amber-500/25 border border-amber-400 text-amber-200 flex items-center gap-1"
        : "px-3 py-1.5 rounded-xl text-xs font-semibold btn-outline-purple flex items-center gap-1";
      flagBtn.innerHTML = `<i data-lucide="bookmark" class="w-3.5 h-3.5"></i><span>${
        isFlagged ? "Belgilangan" : "Belgilab qo‘yish"
      }</span>`;
    }

    const qTextEl = document.getElementById("quiz-question-text");
    if (qTextEl) {
      qTextEl.innerHTML = q.question;
    }

    // Variantlar
    const letters = ["A", "B", "C", "D"];
    const userAns = qz.answers[qz.currentIndex];
    const hasAnswered = userAns !== undefined;
    const showImmediateFeedback = qz.mode === "practice" && hasAnswered;

    const optsEl = document.getElementById("quiz-options-container");
    if (optsEl) {
      optsEl.innerHTML = q.options
        .map((optText, idx) => {
          let cls = "option-card";
          if (showImmediateFeedback) {
            cls += " disabled";
            if (idx === q.answer) cls += " correct";
            else if (idx === userAns && userAns !== q.answer) cls += " wrong";
          } else if (userAns === idx) {
            cls += " selected";
          }

          return `
          <button type="button" onclick="window.App.selectOption(${idx})" class="${cls}">
            <span class="option-letter">${letters[idx]}</span>
            <span class="text-sm sm:text-base font-medium leading-relaxed flex-1">${optText}</span>
          </button>
        `;
        })
        .join("");
    }

    // Professor izohi (Practice rejimida javob berilgach chiqadi)
    const expBox = document.getElementById("quiz-explanation-box");
    if (expBox) {
      if (showImmediateFeedback) {
        const isCorrect = userAns === q.answer;
        expBox.classList.remove("hidden");
        expBox.innerHTML = `
          <div class="professor-callout p-4 sm:p-5 mt-5">
            <div class="flex items-center gap-2 font-extrabold text-sm sm:text-base mb-2 ${
              isCorrect ? "text-emerald-300" : "text-rose-300"
            }">
              <span>${
                isCorrect
                  ? "✅ Barakalla! Javobingiz to‘g‘ri!"
                  : `❌ Diqqat! To‘g‘ri javob: ${letters[q.answer]} varianti`
              }</span>
            </div>
            <div class="text-xs uppercase tracking-wider font-bold text-fuchsia-300 mb-1">
              👨‍🏫 Professor Z. A. Nazarov ma’ruzasi asosida izoh va yechim:
            </div>
            <div class="text-sm text-purple-100 leading-relaxed">${q.explanation}</div>
          </div>
        `;
      } else {
        expBox.classList.add("hidden");
        expBox.innerHTML = "";
      }
    }

    // Oldingi / Keyingi tugmalar
    const prevBtn = document.getElementById("quiz-prev-btn");
    const nextBtn = document.getElementById("quiz-next-btn");
    if (prevBtn) prevBtn.disabled = qz.currentIndex === 0;
    if (nextBtn) {
      if (qz.currentIndex === qz.questions.length - 1) {
        nextBtn.innerHTML = `<span>Testni Yakunlash</span><i data-lucide="check-circle-2" class="w-4 h-4"></i>`;
      } else {
        nextBtn.innerHTML = `<span>Keyingi savol</span><i data-lucide="arrow-right" class="w-4 h-4"></i>`;
      }
    }

    renderQuestionPalette();
    refreshIcons();
    renderMath(document.getElementById("view-quiz"));
  }

  function renderQuestionPalette() {
    const paletteEl = document.getElementById("quiz-palette-grid");
    if (!paletteEl) return;
    const qz = state.quiz;

    paletteEl.innerHTML = qz.questions
      .map((q, idx) => {
        let cls = "q-pill";
        if (idx === qz.currentIndex) cls += " current";
        else if (qz.answers[idx] !== undefined) {
          if (qz.mode === "practice") {
            cls += qz.answers[idx] === q.answer ? " correct-pill" : " wrong-pill";
          } else {
            cls += " answered";
          }
        }
        if (qz.flagged[idx]) cls += " flagged";

        return `<button type="button" onclick="window.App.goToQuestion(${idx})" class="${cls}">${idx + 1}</button>`;
      })
      .join("");
  }

  function selectOption(optIdx) {
    const qz = state.quiz;
    if (!qz.active || qz.finished) return;
    // Practice rejimida bir marta tanlangandan so'ng o'zgartirilmaydi
    if (qz.mode === "practice" && qz.answers[qz.currentIndex] !== undefined) {
      return;
    }
    qz.answers[qz.currentIndex] = optIdx;
    renderCurrentQuestion();
  }

  function toggleFlagCurrent() {
    const qz = state.quiz;
    qz.flagged[qz.currentIndex] = !qz.flagged[qz.currentIndex];
    renderCurrentQuestion();
  }

  function goToQuestion(idx) {
    const qz = state.quiz;
    if (idx < 0 || idx >= qz.questions.length) return;
    qz.currentIndex = idx;
    renderCurrentQuestion();
  }

  function prevQuestion() {
    if (state.quiz.currentIndex > 0) {
      state.quiz.currentIndex--;
      renderCurrentQuestion();
    }
  }

  function nextQuestion() {
    const qz = state.quiz;
    if (qz.currentIndex < qz.questions.length - 1) {
      qz.currentIndex++;
      renderCurrentQuestion();
    } else {
      finishQuiz(false);
    }
  }

  function finishQuiz(autoTimeout) {
    const qz = state.quiz;
    if (!qz.active || qz.finished) return;

    const answeredCount = Object.keys(qz.answers).length;
    if (!autoTimeout && answeredCount < qz.questions.length) {
      const rem = qz.questions.length - answeredCount;
      const ok = confirm(
        `Sizda hali javob belgilanmagan ${rem} ta savol bor. Testni shu holatda yakunlashni xohlaysizmi?`
      );
      if (!ok) return;
    }

    if (qz.timerId) {
      clearInterval(qz.timerId);
      qz.timerId = null;
    }
    qz.finished = true;
    qz.active = false;

    let correctCount = 0;
    qz.questions.forEach((q, idx) => {
      if (qz.answers[idx] === q.answer) {
        correctCount++;
      }
    });

    const total = qz.questions.length;
    const pct = Math.round((correctCount / total) * 100);

    // Statistikani yangilash
    state.stats.totalAttempts += 1;
    state.stats.totalAnswered += total;
    state.stats.totalCorrect += correctCount;

    const nowStr = new Date().toLocaleString("uz-UZ", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });

    if (typeof qz.topicId === "number") {
      const prevBest = state.stats.topicBest[qz.topicId];
      if (!prevBest || pct >= prevBest.pct) {
        state.stats.topicBest[qz.topicId] = {
          pct,
          score: correctCount,
          total,
          date: nowStr
        };
      }
    } else if (typeof qz.topicId === "string" && qz.topicId.startsWith("midterm_v")) {
      const vNum = parseInt(qz.topicId.replace("midterm_v", ""), 10);
      if (!state.stats.midtermBest) state.stats.midtermBest = {};
      const prevBest = state.stats.midtermBest[vNum];
      if (!prevBest || pct >= prevBest.pct) {
        state.stats.midtermBest[vNum] = {
          pct,
          score: correctCount,
          total,
          date: nowStr
        };
      }
    }

    state.stats.history.unshift({
      id: Date.now(),
      title: qz.title,
      mode: qz.mode,
      score: correctCount,
      total,
      pct,
      durationSec: qz.elapsedSec,
      date: nowStr
    });
    if (state.stats.history.length > 25) {
      state.stats.history = state.stats.history.slice(0, 25);
    }

    saveState();
    switchTab("results");
    renderResultsView(correctCount, total, pct);
  }

  function renderResultsView(correctCount, total, pct) {
    const qz = state.quiz;
    let gradeText = "5 (A’lo)";
    let profComment =
      "Barakalla, bo‘lajak olim! Chiziqli algebra mavzusini mukammal o‘zlashtiribsiz. Professor sifatida sizga eng yuqori «A’lo» bahoni qo‘yaman!";
    if (pct < 55) {
      gradeText = "2 (Qoniqarsiz — Qayta tayyorlaning)";
      profComment =
        "Tushkunlikka tushmang! Professor konspektidagi asosiy formulalarni bir marta ko‘zdan kechirib, xato qilingan savollar ustida qayta ishlang.";
    } else if (pct < 71) {
      gradeText = "3 (Qoniqarli)";
      profComment =
        "Yomon emas, bazaviy tushunchalar bor! Ammo determinant xossalari va matritsa amallarida biroz e’tiborliroq bo‘lsangiz, natijangiz yanada ko‘tariladi.";
    } else if (pct < 86) {
      gradeText = "4 (Yaxshi)";
      profComment =
        "Juda yaxshi natija! Nazariyani va hisoblash usullarini yaxshi bilasiz. «A’lo» bahoga chiqish uchun quyidagi xatolarni tahlil qilib chiqing.";
    }

    const summaryEl = document.getElementById("results-summary-card");
    if (summaryEl) {
      summaryEl.innerHTML = `
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
          <div class="flex flex-col items-center justify-center p-4">
            <div class="relative w-36 h-36 rounded-full flex items-center justify-center bg-purple-950/80 border-4 border-fuchsia-500 shadow-lg">
              <div class="text-center">
                <div class="text-3xl font-extrabold text-white">${pct}%</div>
                <div class="text-xs text-purple-300 font-semibold">${correctCount} / ${total} to‘g‘ri</div>
              </div>
            </div>
            <div class="mt-3 px-4 py-1 rounded-full text-xs font-extrabold bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white">
              Baho: ${gradeText}
            </div>
          </div>

          <div class="lg:col-span-2 space-y-4">
            <div>
              <span class="text-xs font-bold uppercase tracking-wider text-fuchsia-400">Yakunlangan sinov hisoboti</span>
              <h2 class="text-2xl font-extrabold mt-1">${qz.title}</h2>
              <p class="text-xs text-purple-300 mt-0.5">Sarflangan vaqt: ${formatTime(qz.elapsedSec)} • Rejim: ${
        qz.mode === "exam" ? "Imtihon" : "O‘quv mashqi"
      }</p>
            </div>

            <div class="professor-callout p-4">
              <div class="text-xs font-extrabold uppercase text-fuchsia-300 mb-1">👨‍🏫 Professor Xulosasi:</div>
              <p class="text-sm text-purple-100 leading-relaxed">${profComment}</p>
            </div>

            <div class="flex flex-wrap gap-3 pt-1">
              <button onclick="window.App.retryWrongQuestions()" class="btn-royal px-4 py-2.5 rounded-xl text-xs sm:text-sm flex items-center gap-2">
                <i data-lucide="rotate-ccw" class="w-4 h-4"></i>
                <span>Xatolar ustida ishlash (${total - correctCount} ta)</span>
              </button>
              <button onclick="window.App.switchTab('dashboard')" class="btn-outline-purple px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2">
                <i data-lucide="layout-grid" class="w-4 h-4"></i>
                <span>Mavzularga qaytish</span>
              </button>
              <button onclick="window.App.switchTab('mixed')" class="btn-outline-purple px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2">
                <i data-lucide="shuffle" class="w-4 h-4"></i>
                <span>Yangi Aralash Test</span>
              </button>
            </div>
          </div>
        </div>
      `;
    }

    renderResultsDetailedReview("all");
  }

  function renderResultsDetailedReview(filterType) {
    state.quiz.reviewFilter = filterType;
    const qz = state.quiz;
    const listEl = document.getElementById("results-questions-review");
    if (!listEl) return;

    const letters = ["A", "B", "C", "D"];
    const items = qz.questions
      .map((q, idx) => ({
        q,
        idx,
        userAns: qz.answers[idx],
        isCorrect: qz.answers[idx] === q.answer,
        isFlagged: !!qz.flagged[idx]
      }))
      .filter((item) => {
        if (filterType === "wrong") return !item.isCorrect;
        if (filterType === "flagged") return item.isFlagged;
        return true;
      });

    if (items.length === 0) {
      listEl.innerHTML = `
        <div class="purple-glass rounded-2xl p-8 text-center text-purple-200">
          🎉 Ushbu filtr bo‘yicha savollar yo‘q (barcha savollarga to‘g‘ri javob berdingiz!).
        </div>
      `;
      return;
    }

    listEl.innerHTML = items
      .map((item) => {
        const { q, idx, userAns, isCorrect } = item;
        const userText = userAns !== undefined ? `${letters[userAns]}) ${q.options[userAns]}` : "Belgilanmagan";
        const corrText = `${letters[q.answer]}) ${q.options[q.answer]}`;

        return `
        <div class="purple-glass rounded-2xl p-5 border ${
          isCorrect ? "border-emerald-500/35" : "border-rose-500/45"
        }">
          <div class="flex items-center justify-between gap-2 mb-3">
            <span class="px-3 py-1 rounded-lg text-xs font-extrabold ${
              isCorrect ? "bg-emerald-500/20 text-emerald-300" : "bg-rose-500/20 text-rose-300"
            }">
              #${idx + 1}-savol • ${isCorrect ? "To‘g‘ri ✅" : "Xato ❌"}
            </span>
            <span class="text-xs text-purple-300">${q.id} (${q.difficulty})</span>
          </div>

          <div class="text-base font-bold mb-3 leading-relaxed">${q.question}</div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm mb-3">
            <div class="p-3 rounded-xl ${
              isCorrect
                ? "bg-emerald-950/40 border border-emerald-500/30 text-emerald-200"
                : "bg-rose-950/40 border border-rose-500/30 text-rose-200"
            }">
              <div class="text-xs uppercase font-bold opacity-75 mb-1">Sizning javobingiz:</div>
              <div>${userText}</div>
            </div>
            <div class="p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-200">
              <div class="text-xs uppercase font-bold opacity-75 mb-1">To‘g‘ri javob:</div>
              <div>${corrText}</div>
            </div>
          </div>

          <div class="professor-callout p-3.5 text-sm">
            <span class="font-bold text-fuchsia-300">👨‍🏫 Professor izohi:</span>
            <span class="text-purple-100 ml-1">${q.explanation}</span>
          </div>
        </div>
      `;
      })
      .join("");

    renderMath(listEl);
  }

  function retryWrongQuestions() {
    const qz = state.quiz;
    const wrongQs = qz.questions.filter((q, idx) => qz.answers[idx] !== q.answer);
    if (wrongQs.length === 0) {
      alert("Barakalla! Sizda xato javoblar yo‘q!");
      return;
    }
    launchQuiz({
      title: `Xatolar ustida ishlash (${wrongQs.length} ta savol)`,
      subtitle: `${qz.title} bo‘yicha xato qilingan savollar`,
      mode: "practice",
      topicId: "retry_wrong",
      questions: wrongQs.map((q) => cloneQuestionWithShuffledOptions(q, true)),
      timeLimitSec: 0
    });
  }

  // =========================================================================
  // 4. PROFESSOR MA'RUZALAR KONSPEKTI VA FORMULALAR (THEORY VIEW)
  // =========================================================================
  function openTheoryForTopic(topicId) {
    state.selectedTheoryTopic = topicId;
    switchTab("theory");
  }

  function renderTheoryView() {
    const pillsEl = document.getElementById("theory-topic-pills");
    const contentEl = document.getElementById("theory-content-area");
    if (!pillsEl || !contentEl) return;

    pillsEl.innerHTML = window.TOPICS_METADATA.map((t) => {
      const active = t.id === state.selectedTheoryTopic;
      return `
        <button onclick="window.App.openTheoryForTopic(${t.id})"
          class="px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition ${
            active ? "btn-royal" : "btn-outline-purple"
          }">
          ${t.code}: ${t.title}
        </button>
      `;
    }).join("");

    const topic =
      window.TOPICS_METADATA.find((t) => t.id === state.selectedTheoryTopic) ||
      window.TOPICS_METADATA[0];

    contentEl.innerHTML = `
      <div class="purple-glass rounded-3xl p-6 sm:p-8">
        <div class="flex flex-wrap items-center justify-between gap-4 border-b border-purple-500/25 pb-5 mb-6">
          <div>
            <span class="px-3 py-1 rounded-full text-xs font-extrabold bg-gradient-to-r ${topic.accent} text-white">
              ${topic.code} • CYBER UNIVERSITY
            </span>
            <h2 class="text-2xl sm:text-3xl font-extrabold mt-2">${topic.title}</h2>
            <p class="text-sm text-purple-200/80 mt-1">${topic.subtitle}</p>
          </div>
          <div class="flex gap-2.5">
            <button onclick="window.App.startTopicQuiz(${topic.id}, 'practice')"
              class="btn-royal px-4 py-2.5 rounded-xl text-xs sm:text-sm flex items-center gap-2">
              <i data-lucide="play" class="w-4 h-4"></i>
              <span>Mavzu testini boshlash (30 ta)</span>
            </button>
          </div>
        </div>

        <p class="text-sm sm:text-base text-purple-100 leading-relaxed mb-6">${topic.summary}</p>

        <h3 class="text-lg font-extrabold text-fuchsia-300 mb-4 flex items-center gap-2">
          <i data-lucide="function-square" class="w-5 h-5"></i>
          <span>Asosiy Formulalar, Ta’riflar va Teoremalar</span>
        </h3>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          ${topic.formulas
            .map(
              (f) => `
            <div class="p-5 rounded-2xl bg-purple-950/55 border border-purple-500/35">
              <div class="text-sm font-bold text-purple-200 mb-2">${f.name}</div>
              <div class="p-3 rounded-xl bg-black/30 border border-purple-500/20 text-center overflow-x-auto my-2">
                $$${f.latex}$$
              </div>
              <div class="text-xs text-purple-300/90 mt-2">${f.desc}</div>
            </div>
          `
            )
            .join("")}
        </div>

        <div class="professor-callout p-5">
          <div class="text-xs font-extrabold uppercase tracking-wider text-fuchsia-300 mb-1">
            🎓 Professor Zuhriddin Nazarov eslatmasi:
          </div>
          <div class="text-sm sm:text-base text-purple-100 leading-relaxed">${topic.professorNote}</div>
        </div>
      </div>
    `;

    refreshIcons();
    renderMath(contentEl);
  }

  // =========================================================================
  // 5. BARCHA 270 TA SAVOL VA KALITLAR KATALOGI (CATALOG VIEW)
  // =========================================================================
  function renderCatalogView() {
    const topicSel = document.getElementById("catalog-topic-select");
    if (topicSel && topicSel.options.length <= 1) {
      topicSel.innerHTML =
        `<option value="all" class="bg-slate-900 text-white">Barcha bo‘limlar (270 ta savol)</option>` +
        window.TOPICS_METADATA.map(
          (t) => `<option value="${t.id}" class="bg-slate-900 text-white">${t.code}: ${t.title} (30 ta)</option>`
        ).join("");
    }

    const searchQ = (state.catalogSearch || "").toLowerCase().trim();
    const filtered = window.QUESTIONS_BANK.filter((q) => {
      if (state.catalogFilterTopic !== "all" && q.topicId !== parseInt(state.catalogFilterTopic, 10)) {
        return false;
      }
      if (state.catalogFilterDiff !== "all" && q.difficulty !== state.catalogFilterDiff) {
        return false;
      }
      if (searchQ) {
        const hay = `${q.question} ${q.explanation} ${q.id}`.toLowerCase();
        if (!hay.includes(searchQ)) return false;
      }
      return true;
    });

    const countEl = document.getElementById("catalog-count-badge");
    if (countEl) countEl.textContent = `Topildi: ${filtered.length} ta savol`;

    const listEl = document.getElementById("catalog-questions-list");
    if (!listEl) return;

    const letters = ["A", "B", "C", "D"];
    listEl.innerHTML = filtered
      .map((q) => {
        const tMeta = window.TOPICS_METADATA.find((t) => t.id === q.topicId);
        return `
        <div class="purple-glass rounded-2xl p-5 border border-purple-500/30">
          <div class="flex flex-wrap items-center justify-between gap-2 mb-3">
            <div class="flex items-center gap-2">
              <span class="px-2.5 py-1 rounded-lg text-xs font-extrabold bg-purple-600/40 text-purple-100 border border-purple-400/30">
                ${q.id}
              </span>
              <span class="text-xs font-semibold text-fuchsia-300">
                ${tMeta ? `${tMeta.code}: ${tMeta.title}` : ""}
              </span>
            </div>
            <span class="text-xs px-2.5 py-0.5 rounded-lg bg-purple-950/70 border border-purple-500/30 text-purple-200">
              ${q.difficulty}
            </span>
          </div>

          <div class="text-base font-bold mb-4 leading-relaxed">${q.question}</div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-2.5 text-sm mb-3">
            ${q.options
              .map((opt, idx) => {
                const isAns = state.catalogShowAnswers && idx === q.answer;
                return `
                <div class="p-3 rounded-xl border ${
                  isAns
                    ? "bg-emerald-500/20 border-emerald-400 text-emerald-200 font-bold"
                    : "bg-purple-950/40 border-purple-500/25 text-purple-200"
                }">
                  <span class="font-extrabold mr-1.5">${letters[idx]})</span> ${opt}
                </div>
              `;
              })
              .join("")}
          </div>

          ${
            state.catalogShowAnswers
              ? `<div class="professor-callout p-3.5 text-xs sm:text-sm mt-3">
                  <span class="font-bold text-fuchsia-300">Kalit: ${letters[q.answer]})</span>
                  <span class="text-purple-100 ml-1">${q.explanation}</span>
                </div>`
              : ""
          }
        </div>
      `;
      })
      .join("");

    renderMath(listEl);
  }

  // =========================================================================
  // 1.5. ORALIQ NAZORAT (10 TA VARIANT — 17 AMALIY + 8 NAZARIY)
  // =========================================================================
  function renderMidtermHub() {
    const grid = document.getElementById("midterm-variants-grid");
    if (!grid || !window.MIDTERM_VARIANTS) return;

    const bestMap = state.stats.midtermBest || {};

    grid.innerHTML = window.MIDTERM_VARIANTS.map((v) => {
      const best = bestMap[v.variant];
      const bestPct = best ? best.pct : 0;
      return `
        <div class="purple-glass purple-glass-interactive rounded-3xl p-5 flex flex-col justify-between relative overflow-hidden">
          <div class="absolute -right-6 -top-6 w-24 h-24 rounded-full bg-gradient-to-br from-purple-600 via-violet-600 to-fuchsia-500 opacity-20 blur-2xl pointer-events-none"></div>

          <div>
            <div class="flex items-center justify-between gap-2 mb-3">
              <span class="px-3 py-1 rounded-full text-xs font-extrabold uppercase bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white shadow">
                ${v.variant}-VARIANT
              </span>
              <span class="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-purple-950/70 border border-purple-400/30 text-purple-200">
                25 savol
              </span>
            </div>

            <h3 class="text-lg font-extrabold mb-1.5">Oraliq Nazorat #${v.variant}</h3>
            <p class="text-xs text-purple-200/80 mb-3 leading-relaxed">
              17 amaliy (o‘zgarmas) + 8 nazariy (barcha 8 mavzu).
              ${v.variant === 1 ? "Asl 1–25 tartibda." : "Misol raqamlari o‘zgartirilgan."}
            </p>
          </div>

          <div>
            <div class="mb-3.5">
              <div class="flex justify-between text-[11px] font-semibold mb-1">
                <span class="text-purple-300">Natija:</span>
                <span class="${bestPct >= 80 ? "text-emerald-400" : "text-fuchsia-300"} font-bold">
                  ${best ? `${best.score}/${best.total} (${bestPct}%)` : "Ishlanmagan"}
                </span>
              </div>
              <div class="w-full h-1.5 rounded-full bg-purple-950/80 overflow-hidden border border-purple-500/20">
                <div class="h-full rounded-full bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500" style="width: ${Math.max(bestPct, 4)}%"></div>
              </div>
            </div>

            <div class="grid grid-cols-2 gap-2">
              <button type="button" onclick="window.App.startMidtermVariant(${v.variant}, 'practice')"
                class="btn-royal py-2 px-2.5 rounded-xl text-xs flex items-center justify-center gap-1">
                <i data-lucide="graduation-cap" class="w-3.5 h-3.5"></i>
                <span>O‘quv</span>
              </button>
              <button type="button" onclick="window.App.startMidtermVariant(${v.variant}, 'exam')"
                class="btn-outline-purple py-2 px-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-1">
                <i data-lucide="timer" class="w-3.5 h-3.5 text-fuchsia-400"></i>
                <span>Imtihon</span>
              </button>
            </div>

            <button type="button" onclick="window.App.previewMidtermVariant(${v.variant})"
              class="w-full mt-2 py-2 px-2.5 rounded-xl text-[11px] font-semibold text-purple-300 hover:text-white hover:bg-purple-500/15 transition flex items-center justify-center gap-1.5">
              <i data-lucide="file-text" class="w-3.5 h-3.5"></i>
              <span>Bilet ko‘rish / Chop etish</span>
            </button>
          </div>
        </div>
      `;
    }).join("");

    refreshIcons();
  }

  function startMidtermVariant(variantNum, mode) {
    if (!window.MIDTERM_VARIANTS) return;
    const varObj = window.MIDTERM_VARIANTS.find((v) => v.variant === variantNum);
    if (!varObj) return;

    // Har bir variantdagi 1..25 savol tartibi aynan o'sha variant raqamlarida saqlanadi!
    const questions = varObj.questions.map((q) => Object.assign({}, q, { options: q.options.slice() }));

    launchQuiz({
      title: varObj.title,
      subtitle: varObj.subtitle,
      mode: mode,
      topicId: `midterm_v${variantNum}`,
      questions: questions,
      timeLimitSec: mode === "exam" ? 40 * 60 : 0
    });
  }

  function previewMidtermVariant(variantNum) {
    state.previewMidtermVariantNum = variantNum;
    const panel = document.getElementById("midterm-preview-panel");
    if (panel) panel.classList.remove("hidden");
    renderMidtermPreview();
    if (panel) panel.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function closeMidtermPreview() {
    state.previewMidtermVariantNum = null;
    const panel = document.getElementById("midterm-preview-panel");
    if (panel) panel.classList.add("hidden");
  }

  function renderMidtermPreview() {
    if (!state.previewMidtermVariantNum || !window.MIDTERM_VARIANTS) return;
    const varObj = window.MIDTERM_VARIANTS.find((v) => v.variant === state.previewMidtermVariantNum);
    if (!varObj) return;

    const titleEl = document.getElementById("midterm-preview-title");
    if (titleEl) titleEl.textContent = `${varObj.title} (25 ta savol: 17 amaliy + 8 nazariy)`;

    const listEl = document.getElementById("midterm-preview-list");
    if (!listEl) return;

    const letters = ["A", "B", "C", "D"];
    const showAns = state.previewMidtermShowAnswers;

    listEl.innerHTML =
      `<div class="hidden print:block text-center mb-6">
        <h2 class="text-xl font-bold uppercase">CYBER UNIVERSITY DAVLAT UNIVERSITETI</h2>
        <h3 class="text-lg font-bold mt-1">CHIZIQLI ALGEBRA FANIDAN ORALIQ NAZORAT ISHI — ${varObj.variant}-VARIANT</h3>
      </div>` +
      varObj.questions
        .map((q) => {
          const isPrac = q.kind === "Amaliy";
          return `
          <div class="purple-glass rounded-2xl p-5 border ${
            isPrac ? "border-purple-500/35" : "border-fuchsia-500/45"
          }">
            <div class="flex flex-wrap items-center justify-between gap-2 mb-3">
              <div class="flex items-center gap-2">
                <span class="px-3 py-1 rounded-lg text-xs font-extrabold ${
                  isPrac
                    ? "bg-purple-600/40 text-purple-100 border border-purple-400/35"
                    : "bg-fuchsia-600/40 text-fuchsia-100 border border-fuchsia-400/35"
                }">
                  ${q.num}-SAVOL • ${isPrac ? "Amaliy misol" : `Nazariy (${q.topicId}-Ma’ruza)`}
                </span>
              </div>
              <span class="text-xs text-purple-300/80">${q.id}</span>
            </div>

            <div class="text-base font-bold mb-4 leading-relaxed">${q.question}</div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-2.5 text-sm">
              ${q.options
                .map((opt, idx) => {
                  const isAns = showAns && idx === q.answer;
                  return `
                  <div class="p-3 rounded-xl border ${
                    isAns
                      ? "bg-emerald-500/20 border-emerald-400 text-emerald-200 font-bold"
                      : "bg-purple-950/40 border-purple-500/25 text-purple-200"
                  }">
                    <span class="font-extrabold mr-1.5">${letters[idx]})</span> ${opt}
                  </div>
                `;
                })
                .join("")}
            </div>

            ${
              showAns
                ? `<div class="professor-callout p-3.5 text-xs sm:text-sm mt-3">
                    <span class="font-bold text-fuchsia-300">Javob: ${letters[q.answer]})</span>
                    <span class="text-purple-100 ml-1">${q.explanation}</span>
                  </div>`
                : ""
            }
          </div>
        `;
        })
        .join("");

    refreshIcons();
    renderMath(listEl);
  }

  // Klaviatura boshqaruvi (1..4 yoki A..D, strelkalar)
  function setupKeyboardShortcuts() {
    window.addEventListener("keydown", (e) => {
      if (state.activeTab !== "quiz" || !state.quiz.active || state.quiz.finished) return;
      if (["INPUT", "TEXTAREA", "SELECT"].includes(document.activeElement?.tagName)) return;

      const key = e.key.toUpperCase();
      if (key === "1" || key === "A") selectOption(0);
      else if (key === "2" || key === "B") selectOption(1);
      else if (key === "3" || key === "C") selectOption(2);
      else if (key === "4" || key === "D") selectOption(3);
      else if (e.key === "ArrowRight") nextQuestion();
      else if (e.key === "ArrowLeft") prevQuestion();
      else if (key === "F") toggleFlagCurrent();
    });
  }

  function init() {
    loadState();

    // Katalog qidiruv va filtrlari
    const topicSel = document.getElementById("catalog-topic-select");
    const diffSel = document.getElementById("catalog-diff-select");
    const searchInp = document.getElementById("catalog-search-input");
    const ansToggle = document.getElementById("catalog-toggle-answers");

    if (topicSel) {
      topicSel.addEventListener("change", (e) => {
        state.catalogFilterTopic = e.target.value;
        renderCatalogView();
      });
    }
    if (diffSel) {
      diffSel.addEventListener("change", (e) => {
        state.catalogFilterDiff = e.target.value;
        renderCatalogView();
      });
    }
    if (searchInp) {
      searchInp.addEventListener("input", (e) => {
        state.catalogSearch = e.target.value;
        renderCatalogView();
      });
    }
    if (ansToggle) {
      ansToggle.addEventListener("change", (e) => {
        state.catalogShowAnswers = e.target.checked;
        renderCatalogView();
      });
    }

    const midtermAnsToggle = document.getElementById("midterm-preview-answers");
    if (midtermAnsToggle) {
      midtermAnsToggle.addEventListener("change", (e) => {
        state.previewMidtermShowAnswers = e.target.checked;
        renderMidtermPreview();
      });
    }

    setupKeyboardShortcuts();
    renderDashboard();
    refreshIcons();
    renderMath(document.body);
  }

  window.App = {
    init,
    switchTab,
    toggleTheme,
    startTopicQuiz,
    startMidtermVariant,
    previewMidtermVariant,
    closeMidtermPreview,
    startPresetMixed,
    startCustomMixedQuiz,
    selectOption,
    toggleFlagCurrent,
    goToQuestion,
    prevQuestion,
    nextQuestion,
    finishQuiz,
    renderResultsDetailedReview,
    retryWrongQuestions,
    openTheoryForTopic
  };

  window.addEventListener("DOMContentLoaded", init);
})();
