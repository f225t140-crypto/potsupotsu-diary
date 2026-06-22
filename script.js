const STATE_KEY = "potsupotsu-diary-state-v2";
const LEGACY_PIXELS_KEY = "hitomasu-diary-pixels";
const EXCHANGE_RESET_ONCE_KEY = "potsupotsu-exchange-reset-2026-06-14-v1";
const EMPTY_COLOR = "#f4eddf";

const PALETTE = [
  "#343832", "#6c665d", "#f4eddf", "#fffaf0",
  "#f0c6b4", "#ce6b55", "#df9252", "#e2b65e",
  "#8ea071", "#728b78", "#5f8b88", "#6f8e9b",
  "#6f7eaa", "#89719a", "#ad7891", "#b98d69"
];

const TAG_GROUPS = [
  { label: "気分", tags: ["うれしい", "たのしい", "ねむい", "つかれた", "のんびり", "そわそわ", "かなしい", "なんでもない日"] },
  { label: "空・天気", tags: ["そら", "晴れ", "くもり", "雨", "雪", "風", "夕焼け", "夜"] },
  { label: "できごと", tags: ["さんぽ", "学校", "仕事", "買いもの", "映画", "音楽", "読書", "おでかけ"] },
  { label: "食べもの", tags: ["ごはん", "パン", "おやつ", "コーヒー", "お弁当", "果物", "あまいもの", "おいしかった"] },
  { label: "もの・風景", tags: ["花", "植物", "動物", "街", "部屋", "かわいい", "きれい", "変なもの"] }
];

const SAMPLE_USERS = [
  {
    id: "tamago",
    name: "たまご",
    profileTags: ["映画", "夜型", "食べ物"],
    diaryTags: ["ごはん", "うれしい"],
    avatar: "#e2b65e",
    palette: { b: "#8f6950", w: "#fffaf0", y: "#e2b65e" },
    art: [
      "bbbbbbbbb", "b.......b", "b..www..b", "b.wwwww.b", "b.wwyww.b",
      "b.wwwww.b", "b..www..b", "b.......b", "bbbbbbbbb"
    ]
  },
  {
    id: "yugata",
    name: "夕方",
    profileTags: ["散歩", "空", "のんびり"],
    diaryTags: ["そら", "さんぽ"],
    avatar: "#ce6b55",
    palette: { s: "#e8b97c", o: "#df9252", r: "#ce6b55", n: "#6a5b65", d: "#343832" },
    art: [
      "sssssssss", "ssssossss", "sssooooss", "ssoooooos", "rrrrrrrrr",
      "nnnnnnnnn", "nnndnnndn", "ddddddddd", "ddddddddd"
    ]
  },
  {
    id: "nemui",
    name: "ねむい人",
    profileTags: ["音楽", "雨", "ひとり時間"],
    diaryTags: ["雨", "ねむい"],
    avatar: "#6f7eaa",
    palette: { f: "#4e566d", b: "#86a6b4", w: "#dce8e8", r: "#6f7eaa" },
    art: [
      "fffffffff", "fbbwbbwbf", "fbwbbwbbf", "fbbwbbwbf", "fffffffff",
      "fbwbbwbbf", "fbbwbbwbf", "fbwbbwbbf", "fffffffff"
    ]
  },
  {
    id: "karasu",
    name: "からす",
    profileTags: ["朝", "学校", "そら"],
    diaryTags: ["学校", "そら"],
    avatar: "#5f8b88",
    palette: { s: "#b8d0cf", n: "#343832", y: "#e2b65e" },
    art: [
      "sssssssss", "sssssssss", "ssnnsssss", "snnnnssys", "nnnnnnsss",
      "ssnnnssss", "ssnnsssss", "snnssssss", "sssssssss"
    ]
  },
  {
    id: "mochi",
    name: "もち",
    profileTags: ["ごはん", "かわいい", "なんでもない日"],
    diaryTags: ["ごはん", "かわいい"],
    avatar: "#8ea071",
    palette: { w: "#fffaf0", n: "#343832", g: "#728b78", p: "#f0c6b4" },
    art: [
      ".........", "....w....", "...www...", "..wwwww..", ".wwwwwww.",
      ".wwwwwww.", ".wgggggw.", "..ggggg..", "...ggg..."
    ]
  }
];

const SAMPLE_WORK_VARIANTS = {
  tamago: [
    {
      tags: ["映画", "おやつ"],
      palette: { y: "#e2b65e", w: "#fffaf0", r: "#ce6b55" },
      art: [
        ".........", "..yyyyy..", ".ywywywy.", ".yyyyyyy.", "..rrrrr..",
        "..rwrwr..", "..rrrrr..", "...rrr...", "........."
      ]
    },
    {
      tags: ["夜", "映画"],
      palette: { n: "#343832", y: "#e2b65e" },
      art: [
        "nnnnnnnnn", "n.......n", "n..yyyy.n", "n.yyyyy.n", "n..yyyy.n",
        "n.......n", "nnnnnnnnn", "...n.n...", "..nnnnn.."
      ]
    }
  ],
  yugata: [
    {
      tags: ["さんぽ", "おでかけ"],
      palette: { r: "#ce6b55", n: "#343832" },
      art: [
        ".........", ".........", "..rr.....", "..rrrr...", "..r..rr..",
        "..r...rr.", "..rrrrrr.", "...nn.nn.", "........."
      ]
    },
    {
      tags: ["花", "夕焼け"],
      palette: { y: "#e2b65e", g: "#728b78", t: "#b98d69" },
      art: [
        "..y...y..", ".yyy.yyy.", "..y...y..", "..g...g..", "...ggg...",
        "...ttt...", "..ttttt..", ".ttttttt.", "ttttttttt"
      ]
    }
  ],
  nemui: [
    {
      tags: ["音楽", "ひとり時間"],
      palette: { n: "#4e566d" },
      art: [
        ".........", "..nnnnn..", ".n.....n.", "n.......n", "n.......n",
        "nn.....nn", "nn.....nn", ".n.....n.", "........."
      ]
    },
    {
      tags: ["夜", "ねむい"],
      palette: { y: "#e2b65e", n: "#4e566d", w: "#dce8e8" },
      art: [
        "......yyy", "......yyy", ".......y.", ".........", "nnnnnnnnn",
        "nwwwwwwwn", "nwwwwwwwn", "nnnnnnnnn", "........."
      ]
    }
  ],
  karasu: [
    {
      tags: ["学校", "変なもの"],
      palette: { y: "#e2b65e", t: "#b98d69", n: "#343832" },
      art: [
        ".........", "....y....", "...yyy...", "...ttt...", "...ttt...",
        "...ttt...", "...nnn...", "....n....", "........."
      ]
    },
    {
      tags: ["学校", "そら"],
      palette: { b: "#6f8e9b", y: "#e2b65e" },
      art: [
        "bbbbbbbbb", "b...b...b", "b.y.b.y.b", "b...b...b", "bbbbbbbbb",
        "b...b...b", "b...b...b", "b...b...b", "bbbbbbbbb"
      ]
    }
  ],
  mochi: [
    {
      tags: ["コーヒー", "のんびり"],
      palette: { w: "#fffaf0", t: "#b98d69" },
      art: [
        ".........", ".........", "..wwwww..", ".wtttttw.", ".wtttttww",
        ".wtttttw.", "..wwwww..", "...www...", "........."
      ]
    },
    {
      tags: ["果物", "かわいい"],
      palette: { g: "#728b78", r: "#ce6b55", w: "#fffaf0" },
      art: [
        "....g....", "...ggg...", "..rrrrr..", ".rrrrrrr.", "rrwrrrwrr",
        "rrrrrrrrr", ".rrrrrrr.", "..rrrrr..", "...rrr..."
      ]
    }
  ]
};

const LOGO_ROWS = [
  "...rrr...", "..rrrrr..", ".rrryrrr.", ".rryyyrr.", ".rrryrrr.",
  "..rrrrr..", "...rrrgg.", "....ggg..", "....g...."
];

const LOGO_PALETTE = {
  r: "#ce6b55",
  y: "#e2b65e",
  g: "#8ea071"
};

const screens = [...document.querySelectorAll(".screen")];
const navItems = [...document.querySelectorAll(".nav-item")];
const appShell = document.querySelector(".app-shell");
const editorGrid = document.querySelector("#editor-grid");
const undoButton = document.querySelector("#undo-button");
const redoButton = document.querySelector("#redo-button");
const eraserButton = document.querySelector("#eraser-button");
const eyedropperButton = document.querySelector("#eyedropper-button");
const bucketButton = document.querySelector("#bucket-button");
const clearButton = document.querySelector("#clear-button");
const toast = document.querySelector("#toast");

let state = loadState();
resetExchangeCountOnce();
let pixels = state.todayPixels.slice();
let selectedTags = state.todayTags.slice();
let selectedColor = PALETTE[5];
let isErasing = false;
let isEyedropper = false;
let isBucketFill = false;
let isDrawing = false;
let strokeBefore = null;
let strokeChanged = false;
let lastPaintedIndex = -1;
let undoStack = [];
let redoStack = [];
let currentSample = SAMPLE_USERS[0];
let currentScreen = "today";
let detailReturnScreen = "records";
let recordMonthDate = new Date(new Date().getFullYear(), new Date().getMonth(), 1);
let recordFilterTag = "";
let waitingTimers = [];
let toastTimer;
let clearConfirmTimer;
let isClearConfirming = false;

function rowsToPixels(rows, palette) {
  return rows.join("").split("").map((key) => palette[key] || EMPTY_COLOR);
}

function artToPixels(sample) {
  return rowsToPixels(sample.art, sample.palette);
}

function getSampleWorks(sample) {
  const variants = SAMPLE_WORK_VARIANTS[sample.id] || [];
  return [
    {
      id: `${sample.id}-latest`,
      date: offsetDateKey(0),
      pixels: artToPixels(sample),
      tags: sample.diaryTags
    },
    ...variants.map((work, index) => ({
      id: `${sample.id}-variant-${index}`,
      date: offsetDateKey(index === 0 ? -3 : -7),
      pixels: rowsToPixels(work.art, work.palette),
      tags: work.tags
    }))
  ];
}

function blankPixels() {
  return Array(81).fill(EMPTY_COLOR);
}

function localDateKey(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function offsetDateKey(days) {
  const date = new Date();
  date.setDate(date.getDate() + days);
  return localDateKey(date);
}

function enrichRecord(record) {
  return {
    date: record.date,
    pixels: record.pixels.slice(),
    tags: (record.tags || []).slice(0, 3)
  };
}

function createDemoRecords() {
  return [
    { date: offsetDateKey(-1), pixels: artToPixels(SAMPLE_USERS[1]), tags: ["そら", "さんぽ"] },
    { date: offsetDateKey(-3), pixels: artToPixels(SAMPLE_USERS[0]), tags: ["ごはん", "うれしい"] },
    { date: offsetDateKey(-6), pixels: artToPixels(SAMPLE_USERS[2]), tags: ["雨", "ねむい"] }
  ].map(enrichRecord);
}

function createInitialState() {
  const today = localDateKey();
  let legacyPixels = null;

  try {
    const parsed = JSON.parse(localStorage.getItem(LEGACY_PIXELS_KEY));
    if (Array.isArray(parsed) && parsed.length === 81) legacyPixels = parsed;
  } catch {
    legacyPixels = null;
  }

  const initial = {
    version: 2,
    dateKey: today,
    todayPixels: legacyPixels || blankPixels(),
    todayTags: [],
    todaySaved: Boolean(legacyPixels),
    records: createDemoRecords(),
    exchangeDate: today,
    exchangeLeft: 3,
    partnerIds: ["yugata", "mochi"],
    blockedIds: []
  };

  if (legacyPixels) {
    initial.records.unshift(enrichRecord({ date: today, pixels: legacyPixels, tags: [] }));
  }

  return initial;
}

function normalizeState(saved) {
  const initial = createInitialState();
  const normalized = {
    version: 2,
    dateKey: typeof saved.dateKey === "string" ? saved.dateKey : initial.dateKey,
    todayPixels: Array.isArray(saved.todayPixels) && saved.todayPixels.length === 81
      ? saved.todayPixels
      : initial.todayPixels,
    todayTags: Array.isArray(saved.todayTags) ? saved.todayTags.slice(0, 3) : [],
    todaySaved: Boolean(saved.todaySaved),
    records: Array.isArray(saved.records)
      ? saved.records.filter(isValidRecord).map(enrichRecord)
      : initial.records,
    exchangeDate: typeof saved.exchangeDate === "string" ? saved.exchangeDate : initial.exchangeDate,
    exchangeLeft: Number.isInteger(saved.exchangeLeft) ? Math.max(0, Math.min(3, saved.exchangeLeft)) : 3,
    blockedIds: Array.isArray(saved.blockedIds) ? [...new Set(saved.blockedIds)] : [],
    partnerIds: Array.isArray(saved.partnerIds) ? [...new Set(saved.partnerIds)] : initial.partnerIds
  };

  return applyDailyRollover(normalized);
}

function isValidRecord(record) {
  return record && typeof record.date === "string" && Array.isArray(record.pixels) && record.pixels.length === 81;
}

function applyDailyRollover(saved) {
  const today = localDateKey();

  if (saved.dateKey !== today) {
    if (saved.todaySaved && Array.isArray(saved.todayPixels)) {
      upsertRecord(saved.records, {
        date: saved.dateKey,
        pixels: saved.todayPixels,
        tags: saved.todayTags || []
      });
    }

    saved.dateKey = today;
    saved.todayPixels = blankPixels();
    saved.todayTags = [];
    saved.todaySaved = false;
  }

  if (saved.exchangeDate !== today) {
    saved.exchangeDate = today;
    saved.exchangeLeft = 3;
  }

  return saved;
}

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STATE_KEY));
    if (saved && saved.version === 2) return normalizeState(saved);
  } catch {
    // A fresh state is created below when stored data is unavailable.
  }

  const initial = createInitialState();
  try {
    localStorage.setItem(STATE_KEY, JSON.stringify(initial));
  } catch {
    // The prototype remains usable in memory when storage is blocked.
  }
  return initial;
}

function resetExchangeCountOnce() {
  try {
    if (localStorage.getItem(EXCHANGE_RESET_ONCE_KEY) === "done") return;
    state.exchangeDate = localDateKey();
    state.exchangeLeft = 3;
    localStorage.setItem(EXCHANGE_RESET_ONCE_KEY, "done");
    saveState();
  } catch {
    state.exchangeDate = localDateKey();
    state.exchangeLeft = 3;
  }
}

function saveState() {
  try {
    localStorage.setItem(STATE_KEY, JSON.stringify(state));
  } catch {
    showToast("この環境では保存を続けられませんでした");
  }
}

function ensureCurrentDay() {
  const previousDate = state.dateKey;
  const previousExchangeDate = state.exchangeDate;
  state = applyDailyRollover(state);

  if (state.dateKey !== previousDate || state.exchangeDate !== previousExchangeDate) {
    pixels = state.todayPixels.slice();
    selectedTags = state.todayTags.slice();
    undoStack = [];
    redoStack = [];
    saveState();
  }
}

function upsertRecord(records, record) {
  const index = records.findIndex((item) => item.date === record.date);
  const safeRecord = enrichRecord(record);

  if (index >= 0) records[index] = safeRecord;
  else records.push(safeRecord);
}

function makeGrid(element, colors, interactive = false) {
  element.innerHTML = "";
  colors.forEach((color, index) => {
    const cell = document.createElement(interactive ? "button" : "span");
    cell.className = "pixel-cell";
    cell.style.setProperty("--pixel-color", color);
    cell.style.backgroundColor = color;
    cell.dataset.index = index;

    if (interactive) {
      cell.type = "button";
      cell.setAttribute("role", "gridcell");
      cell.setAttribute("aria-label", `${Math.floor(index / 9) + 1}行 ${index % 9 + 1}列`);
    }

    element.appendChild(cell);
  });
}

function renderLogo() {
  const logo = document.querySelector("#logo-grid");
  logo.innerHTML = "";
  LOGO_ROWS.join("").split("").forEach((key) => {
    const cell = document.createElement("i");
    const color = LOGO_PALETTE[key] || "transparent";
    cell.style.setProperty("--logo-color", color);
    cell.style.backgroundColor = color;
    logo.appendChild(cell);
  });
}

function makeTagChip(label, className = "tag-chip") {
  const chip = document.createElement("span");
  chip.className = className;
  chip.textContent = label;
  return chip;
}

function renderTagRow(element, tags, className = "tag-chip") {
  element.innerHTML = "";
  tags.slice(0, 3).forEach((tag) => element.appendChild(makeTagChip(tag, className)));
}

function renderCounter(element, left) {
  element.innerHTML = "";
  for (let index = 0; index < 3; index += 1) {
    const pip = document.createElement("i");
    pip.classList.toggle("is-used", index >= left);
    element.appendChild(pip);
  }
}

function formatToday(date = new Date()) {
  return new Intl.DateTimeFormat("ja-JP", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "short"
  }).format(date);
}

function formatRecordDate(dateKey) {
  const date = new Date(`${dateKey}T12:00:00`);
  if (Number.isNaN(date.getTime())) return dateKey;
  return new Intl.DateTimeFormat("ja-JP", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "short"
  }).format(date);
}

function dateFromKey(dateKey) {
  const date = new Date(`${dateKey}T12:00:00`);
  return Number.isNaN(date.getTime()) ? null : date;
}

function monthKey(date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;
}

function formatRecordMonth(date) {
  return new Intl.DateTimeFormat("ja-JP", {
    year: "numeric",
    month: "long"
  }).format(date);
}

function shiftRecordMonth(offset) {
  recordMonthDate = new Date(
    recordMonthDate.getFullYear(),
    recordMonthDate.getMonth() + offset,
    1
  );
  renderRecords();
}

function hasDrawing(colors = pixels) {
  return colors.some((color) => color.toLowerCase() !== EMPTY_COLOR);
}

function renderToday() {
  document.querySelector("#today-date").textContent = formatToday();
  makeGrid(document.querySelector("#today-preview"), pixels);

  const status = document.querySelector("#today-save-status");
  const emptyCopy = document.querySelector("#today-empty-copy");
  const drawButton = document.querySelector("#today-draw-button");
  const exchangeButton = document.querySelector("#today-exchange-button");

  status.textContent = state.todaySaved ? "保存済み" : hasDrawing() ? "描きかけ" : "未作成";
  status.classList.toggle("is-saved", state.todaySaved);
  drawButton.lastChild.textContent = state.todaySaved ? " 描き直す" : " 描く";
  exchangeButton.disabled = state.exchangeLeft === 0;

  renderTagRow(document.querySelector("#today-tags"), state.todaySaved ? state.todayTags : []);
  emptyCopy.hidden = state.todaySaved && state.todayTags.length > 0;
  emptyCopy.textContent = state.todaySaved
    ? state.todayTags.length ? "" : "タグなしで保存されています。"
    : "まだ絵日記がありません。9×9のマスに今日のことを描きましょう。";

  document.querySelector("#today-exchange-left").textContent = state.exchangeLeft;
  renderCounter(document.querySelector("#today-counter-pips"), state.exchangeLeft);
}

function renderEditor() {
  makeGrid(editorGrid, pixels, true);
  updateHistoryButtons();
}

function renderPalette() {
  const palette = document.querySelector("#palette");
  palette.innerHTML = "";

  PALETTE.forEach((color) => {
    const button = document.createElement("button");
    button.className = "color-swatch";
    button.type = "button";
    button.style.setProperty("--swatch", color);
    button.dataset.color = color;
    button.setAttribute("aria-label", `色 ${color}`);
    button.classList.toggle("is-selected", color === selectedColor && !isErasing);
    button.addEventListener("click", () => selectColor(color));
    palette.appendChild(button);
  });
}

function selectColor(color) {
  resetClearConfirmation();
  selectedColor = color;
  isErasing = false;
  isEyedropper = false;
  eraserButton.classList.remove("is-active");
  eraserButton.setAttribute("aria-pressed", "false");
  eyedropperButton.classList.remove("is-active");
  eyedropperButton.setAttribute("aria-pressed", "false");
  document.querySelectorAll(".color-swatch").forEach((swatch) => {
    swatch.classList.toggle("is-selected", swatch.dataset.color === color);
  });
}

function useEyedropper(index) {
  const sampledColor = pixels[index];
  selectColor(sampledColor);
  document.querySelector("#custom-color").value = sampledColor;
  showToast(sampledColor === EMPTY_COLOR ? "背景色を選びました" : "選んだマスの色を使います");
}

function paintIndex(index) {
  if (!Number.isInteger(index) || index < 0 || index >= 81 || lastPaintedIndex === index) return false;
  lastPaintedIndex = index;
  const nextColor = isErasing ? EMPTY_COLOR : selectedColor;
  if (pixels[index] === nextColor) return false;

  pixels[index] = nextColor;
  const cell = editorGrid.children[index];
  if (cell) {
    cell.style.setProperty("--pixel-color", nextColor);
    cell.style.backgroundColor = nextColor;
    cell.classList.remove("is-painted");
    void cell.offsetWidth;
    cell.classList.add("is-painted");
  }
  return true;
}

function floodFill(index) {
  if (!Number.isInteger(index) || index < 0 || index >= 81) return false;
  const targetColor = pixels[index];
  const nextColor = selectedColor;
  if (targetColor === nextColor) return false;

  const queue = [index];
  const visited = new Set();
  while (queue.length) {
    const current = queue.shift();
    if (visited.has(current) || pixels[current] !== targetColor) continue;
    visited.add(current);
    pixels[current] = nextColor;
    const row = Math.floor(current / 9);
    const column = current % 9;
    if (row > 0) queue.push(current - 9);
    if (row < 8) queue.push(current + 9);
    if (column > 0) queue.push(current - 1);
    if (column < 8) queue.push(current + 1);
  }

  renderEditor();
  return visited.size > 0;
}

function finishStroke() {
  if (!isDrawing) return;
  isDrawing = false;
  lastPaintedIndex = -1;

  if (strokeChanged && strokeBefore) {
    undoStack.push(strokeBefore);
    if (undoStack.length > 60) undoStack.shift();
    redoStack = [];
    updateHistoryButtons();
  }

  strokeBefore = null;
  strokeChanged = false;
}

function pushAction(previousPixels) {
  undoStack.push(previousPixels);
  if (undoStack.length > 60) undoStack.shift();
  redoStack = [];
  updateHistoryButtons();
}

function updateHistoryButtons() {
  undoButton.disabled = undoStack.length === 0;
  redoButton.disabled = redoStack.length === 0;
}

function undo() {
  if (!undoStack.length) return;
  redoStack.push(pixels.slice());
  pixels = undoStack.pop();
  renderEditor();
}

function redo() {
  if (!redoStack.length) return;
  undoStack.push(pixels.slice());
  pixels = redoStack.pop();
  renderEditor();
}

function renderTagPicker() {
  const picker = document.querySelector("#tag-picker");
  picker.innerHTML = "";
  document.querySelector("#selected-tag-count").textContent = selectedTags.length;

  TAG_GROUPS.forEach((group) => {
    const section = document.createElement("section");
    section.className = "tag-group";
    const heading = document.createElement("h3");
    heading.textContent = group.label;
    const options = document.createElement("div");
    options.className = "tag-group-options";

    group.tags.forEach((tag) => {
      const button = document.createElement("button");
      button.className = "tag-choice";
      button.type = "button";
      button.textContent = tag;
      button.setAttribute("aria-pressed", String(selectedTags.includes(tag)));
      button.addEventListener("click", () => toggleTag(tag, button));
      options.appendChild(button);
    });

    section.append(heading, options);
    picker.appendChild(section);
  });
}

function toggleTag(tag, button) {
  if (selectedTags.includes(tag)) {
    selectedTags = selectedTags.filter((item) => item !== tag);
  } else if (selectedTags.length < 3) {
    selectedTags.push(tag);
  } else {
    button.classList.remove("is-blocked");
    void button.offsetWidth;
    button.classList.add("is-blocked");
    document.querySelector("#tag-hint").textContent = "タグは3つまでです。外してから選び直してください。";
    return;
  }

  document.querySelector("#tag-hint").textContent = selectedTags.length
    ? "選んだタグは、あとから記録を探すときに使えます。"
    : "タグなしでも保存できます。";
  renderTagPicker();
}

function renderTagScreen() {
  makeGrid(document.querySelector("#tag-preview"), pixels);
  renderTagPicker();
}

function saveTodayDiary() {
  state.todayPixels = pixels.slice();
  state.todayTags = selectedTags.slice(0, 3);
  state.todaySaved = true;
  upsertRecord(state.records, {
    date: state.dateKey,
    pixels: state.todayPixels,
    tags: state.todayTags
  });
  saveState();
  renderRecords();
  showScreen("today");
  playSaveConfetti();
  showToast("絵日記を保存しました");
}

function renderExchange() {
  const preview = state.todaySaved ? state.todayPixels : blankPixels();
  makeGrid(document.querySelector("#exchange-preview"), preview);

  const title = document.querySelector("#exchange-ready-title");
  const copy = document.querySelector("#exchange-ready-copy");
  const button = document.querySelector("#exchange-main-button");

  const availableSamples = SAMPLE_USERS.filter((sample) => !state.blockedIds.includes(sample.id));

  if (!availableSamples.length) {
    title.textContent = "交換できる相手がいません";
    copy.textContent = "相手画面のブロック一覧から、交換したい人を解除できます。";
    button.textContent = "ブロック一覧を確認する";
    button.disabled = false;
    button.dataset.action = "blocked-list";
  } else if (!state.todaySaved) {
    title.textContent = "先に絵日記を保存してください";
    copy.textContent = "保存した絵日記だけ交換できます。";
    button.textContent = "描く";
    button.disabled = false;
    button.dataset.action = "draw";
  } else if (state.exchangeLeft === 0) {
    title.textContent = "今日の交換回数を使い切りました";
    copy.textContent = "明日になると、また3回交換できます。";
    button.textContent = "交換済み";
    button.disabled = true;
    button.dataset.action = "limit";
  } else {
    title.textContent = "保存した絵日記を交換します";
    copy.textContent = "送ると、相手の絵日記が1枚届きます。";
    button.textContent = "絵日記を交換する";
    button.disabled = false;
    button.dataset.action = "exchange";
  }

  document.querySelector("#exchange-left").textContent = state.exchangeLeft;
  renderCounter(document.querySelector("#exchange-meter"), state.exchangeLeft);
}

function chooseSample() {
  const available = SAMPLE_USERS.filter((sample) => !state.blockedIds.includes(sample.id));
  if (!available.length) return null;
  const candidates = available.length > 1
    ? available.filter((sample) => sample.id !== currentSample.id)
    : available;
  return candidates[Math.floor(Math.random() * candidates.length)];
}

function clearWaitingTimers() {
  waitingTimers.forEach((timer) => clearTimeout(timer));
  waitingTimers = [];
}

function startExchange() {
  if (!state.todaySaved) {
    showScreen("draw");
    showToast("先に絵日記を保存してください");
    return;
  }

  if (state.exchangeLeft <= 0) {
    showToast("今日の交換は3回までです");
    return;
  }

  const nextSample = chooseSample();
  if (!nextSample) {
    showScreen("friends");
    showToast("ブロック一覧から相手を解除すると交換できます");
    return;
  }

  state.exchangeLeft -= 1;
  currentSample = nextSample;
  saveState();
  makeGrid(document.querySelector("#waiting-outgoing-preview"), state.todayPixels);
  makeGrid(document.querySelector("#waiting-incoming-preview"), artToPixels(currentSample));
  document.querySelector("#waiting-message").textContent = "あなたの絵日記を送っています";
  showScreen("waiting");
  const swapScene = document.querySelector("#swap-scene");
  swapScene.classList.remove("is-swapping");
  void swapScene.offsetWidth;
  swapScene.classList.add("is-swapping");

  waitingTimers.push(setTimeout(() => {
    document.querySelector("#waiting-message").textContent = "相手の絵日記を受け取っています";
  }, 1200));

  waitingTimers.push(setTimeout(() => {
    renderResult();
    showScreen("result");
  }, 2600));
}

function renderResult() {
  makeGrid(document.querySelector("#result-preview"), artToPixels(currentSample));
  renderTagRow(document.querySelector("#result-diary-tags"), currentSample.diaryTags);
  renderTagRow(document.querySelector("#result-profile-tags"), currentSample.profileTags, "profile-chip");
  document.querySelector("#result-name").textContent = currentSample.name;
  document.querySelector("#result-avatar").style.setProperty("--avatar", currentSample.avatar);

  const keepButton = document.querySelector("#keep-partner-button");
  const alreadySaved = state.partnerIds.includes(currentSample.id);
  keepButton.disabled = alreadySaved;
  keepButton.textContent = alreadySaved ? "追加済み" : "相手に追加";
  document.querySelector("#result-block-button").textContent = `${currentSample.name}さんをブロックする`;
}

function keepCurrentPartner() {
  if (state.partnerIds.includes(currentSample.id)) return;
  state.partnerIds.push(currentSample.id);
  saveState();
  renderResult();
  renderFriends();
  showToast(`${currentSample.name}さんを相手一覧に追加しました`);
}

function blockSample(sample, returnToFriends = true) {
  if (!sample || state.blockedIds.includes(sample.id)) return;
  state.blockedIds.push(sample.id);
  saveState();
  renderFriends();
  if (returnToFriends) showScreen("friends");
  showToast(`${sample.name}さんをブロックしました`);
}

function unblockSample(sample) {
  state.blockedIds = state.blockedIds.filter((id) => id !== sample.id);
  saveState();
  renderFriends();
  showToast(`${sample.name}さんのブロックを解除しました`);
}

function calculateLongestStreak(records) {
  const dates = [...new Set(records.map((record) => record.date))].sort();
  let longest = 0;
  let current = 0;
  let previous = null;

  dates.forEach((dateKey) => {
    const date = dateFromKey(dateKey);
    if (!date) return;
    if (!previous) {
      current = 1;
    } else {
      const difference = Math.round((date - previous) / 86400000);
      current = difference === 1 ? current + 1 : 1;
    }
    longest = Math.max(longest, current);
    previous = date;
  });
  return longest;
}

function renderCollection(records) {
  const tags = [];
  const tagSet = new Set();
  const colors = new Set();

  records.forEach((record) => {
    record.pixels.forEach((color) => {
      if (color.toLowerCase() !== EMPTY_COLOR) colors.add(color.toLowerCase());
    });
    (record.tags || []).forEach((tag) => {
      if (!tagSet.has(tag)) {
        tagSet.add(tag);
        tags.push(tag);
      }
    });
  });

  document.querySelector("#collection-days").textContent = records.length;
  document.querySelector("#collection-tags").textContent = tags.length;
  document.querySelector("#collection-colors").textContent = colors.size;
  document.querySelector("#collection-streak").textContent = calculateLongestStreak(records);

  const stamps = document.querySelector("#collection-stamps");
  stamps.innerHTML = "";
  if (!tags.length) {
    const empty = document.createElement("span");
    empty.className = "collection-empty";
    empty.textContent = "タグを付けて保存すると、ここにタグが表示されます。";
    stamps.appendChild(empty);
    return;
  }

  tags.slice(0, 8).forEach((tag, index) => {
    const stamp = document.createElement("span");
    stamp.className = "collection-stamp";
    stamp.style.setProperty("--stamp-color", PALETTE[(index + 5) % PALETTE.length]);
    stamp.textContent = `#${tag}`;
    stamps.appendChild(stamp);
  });
}

function renderRecords() {
  const list = document.querySelector("#record-list");
  const empty = document.querySelector("#record-empty");
  const calendar = document.querySelector("#record-calendar");
  const filterStatus = document.querySelector("#record-filter-status");
  const clearFilterButton = document.querySelector("#record-filter-clear");
  const allRecords = [...state.records].sort((a, b) => b.date.localeCompare(a.date));
  const selectedMonthKey = monthKey(recordMonthDate);
  const monthRecords = allRecords.filter((record) => record.date.startsWith(selectedMonthKey));
  const records = monthRecords.filter((record) => (
    !recordFilterTag || (record.tags || []).includes(recordFilterTag)
  ));
  const recordMap = new Map(monthRecords.map((record) => [record.date, record]));
  const today = new Date();
  const todayKey = localDateKey(today);

  list.innerHTML = "";
  calendar.innerHTML = "";
  renderCollection(allRecords);
  document.querySelector("#record-count").textContent = allRecords.length;
  document.querySelector("#record-month-title").textContent = formatRecordMonth(recordMonthDate);
  document.querySelector("#record-month-summary").textContent = `${monthRecords.length}件の絵日記`;
  document.querySelector("#record-list-title").textContent = `${recordMonthDate.getMonth() + 1}月の記録`;
  clearFilterButton.hidden = !recordFilterTag;
  filterStatus.textContent = recordFilterTag
    ? `タグ「${recordFilterTag}」の記録：${records.length}件`
    : `この月の記録：${monthRecords.length}件`;

  const rangeDates = allRecords
    .map((record) => dateFromKey(record.date))
    .filter(Boolean);
  rangeDates.push(today, new Date(today.getFullYear(), today.getMonth() - 11, 1));
  const minMonth = rangeDates.reduce((min, date) => monthKey(date) < monthKey(min) ? date : min, rangeDates[0]);
  const maxMonth = rangeDates.reduce((max, date) => monthKey(date) > monthKey(max) ? date : max, rangeDates[0]);
  document.querySelector("#record-prev-month").disabled = selectedMonthKey <= monthKey(minMonth);
  document.querySelector("#record-next-month").disabled = selectedMonthKey >= monthKey(maxMonth);
  document.querySelector("#record-current-month").hidden = selectedMonthKey === monthKey(today);

  const year = recordMonthDate.getFullYear();
  const month = recordMonthDate.getMonth();
  const firstWeekday = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const totalCells = Math.ceil((firstWeekday + daysInMonth) / 7) * 7;

  for (let cellIndex = 0; cellIndex < totalCells; cellIndex += 1) {
    const day = cellIndex - firstWeekday + 1;
    if (day < 1 || day > daysInMonth) {
      const blank = document.createElement("span");
      blank.className = "calendar-blank";
      blank.setAttribute("aria-hidden", "true");
      calendar.appendChild(blank);
      continue;
    }

    const date = new Date(year, month, day);
    const dateKey = localDateKey(date);
    const record = recordMap.get(dateKey);
    const dayCell = document.createElement(record ? "button" : "div");
    dayCell.className = "calendar-day";
    dayCell.classList.toggle("has-record", Boolean(record));
    dayCell.classList.toggle("is-today", dateKey === todayKey);
    dayCell.classList.toggle("is-sunday", date.getDay() === 0);
    dayCell.classList.toggle("is-saturday", date.getDay() === 6);
    dayCell.classList.toggle("is-filtered-out", Boolean(
      record && recordFilterTag && !(record.tags || []).includes(recordFilterTag)
    ));
    dayCell.setAttribute("role", "gridcell");

    const number = document.createElement("span");
    number.className = "calendar-day-number";
    number.textContent = day;
    dayCell.appendChild(number);

    if (record) {
      dayCell.type = "button";
      dayCell.setAttribute("aria-label", `${formatRecordDate(dateKey)}の絵日記を開く`);
      const art = document.createElement("span");
      art.className = "pixel-grid pixel-preview calendar-day-art";
      makeGrid(art, record.pixels);
      dayCell.appendChild(art);
      dayCell.addEventListener("click", () => openRecordDetail(record));
    } else {
      const emptyMark = document.createElement("span");
      emptyMark.className = "calendar-day-empty-mark";
      emptyMark.setAttribute("aria-hidden", "true");
      dayCell.appendChild(emptyMark);
      dayCell.setAttribute("aria-label", `${month + 1}月${day}日、記録なし`);
    }

    calendar.appendChild(dayCell);
  }

  empty.hidden = records.length > 0;
  empty.querySelector("p").innerHTML = recordFilterTag
    ? `タグ「${recordFilterTag}」の記録はありません。`
    : monthRecords.length
      ? "条件に合う記録はありません。"
      : "この月には保存した絵日記がありません。<br>まず今日の絵日記を描きましょう。";

  records.forEach((record) => {
    const card = document.createElement("article");
    card.className = "record-card";

    const openButton = document.createElement("button");
    openButton.className = "record-open-button";
    openButton.type = "button";
    openButton.setAttribute("aria-label", `${formatRecordDate(record.date)}の絵日記を開く`);
    openButton.addEventListener("click", () => openRecordDetail(record));

    const frame = document.createElement("div");
    frame.className = "record-preview-frame";
    const grid = document.createElement("div");
    grid.className = "pixel-grid pixel-preview record-preview";
    grid.setAttribute("aria-label", `${formatRecordDate(record.date)}の9×9絵日記`);
    makeGrid(grid, record.pixels);
    frame.appendChild(grid);

    const meta = document.createElement("div");
    meta.className = "record-meta";
    const time = document.createElement("time");
    time.dateTime = record.date;
    const recordDate = dateFromKey(record.date);
    const dayNumber = document.createElement("strong");
    dayNumber.textContent = recordDate ? recordDate.getDate() : record.date;
    const monthLabel = document.createElement("span");
    monthLabel.textContent = recordDate ? `${recordDate.getMonth() + 1}月` : "";
    const weekday = document.createElement("span");
    weekday.textContent = recordDate
      ? `${recordDate.getFullYear()} / ${new Intl.DateTimeFormat("ja-JP", { weekday: "short" }).format(recordDate)}`
      : "";
    time.append(dayNumber, monthLabel);
    meta.append(time, weekday);
    openButton.append(frame, meta);

    const tags = document.createElement("div");
    tags.className = "record-tag-actions";
    if (record.tags?.length) {
      record.tags.forEach((tag) => {
        const tagButton = document.createElement("button");
        tagButton.className = "record-tag-button";
        tagButton.classList.toggle("is-active", recordFilterTag === tag);
        tagButton.type = "button";
        tagButton.textContent = `#${tag}`;
        tagButton.setAttribute("aria-label", `タグ ${tag} で記録をしぼる`);
        tagButton.addEventListener("click", () => {
          recordFilterTag = recordFilterTag === tag ? "" : tag;
          renderRecords();
        });
        tags.appendChild(tagButton);
      });
    } else {
      tags.appendChild(makeTagChip("タグなし", "profile-chip"));
    }

    card.append(openButton, tags);
    list.appendChild(card);
  });
}

function renderFriends() {
  const list = document.querySelector("#friend-list");
  const empty = document.querySelector("#friend-empty");
  const blockedSection = document.querySelector("#blocked-section");
  const blockedList = document.querySelector("#blocked-list");
  const friends = state.partnerIds
    .map((id) => SAMPLE_USERS.find((sample) => sample.id === id))
    .filter((sample) => sample && !state.blockedIds.includes(sample.id));
  const blocked = state.blockedIds
    .map((id) => SAMPLE_USERS.find((sample) => sample.id === id))
    .filter(Boolean);

  list.innerHTML = "";
  blockedList.innerHTML = "";
  empty.hidden = friends.length > 0;
  blockedSection.hidden = blocked.length === 0;
  document.querySelector("#friend-count").textContent = friends.length;
  document.querySelector("#blocked-count").textContent = blocked.length;

  friends.forEach((sample, friendIndex) => {
    const card = document.createElement("article");
    card.className = "friend-card";
    card.style.setProperty("--friend-color", sample.avatar);

    const top = document.createElement("div");
    top.className = "friend-top";
    const avatarFrame = document.createElement("span");
    avatarFrame.className = "friend-avatar-frame";
    const avatar = document.createElement("span");
    avatar.className = "pixel-avatar";
    avatar.style.setProperty("--avatar", sample.avatar);
    avatar.setAttribute("aria-hidden", "true");
    avatarFrame.appendChild(avatar);
    const identity = document.createElement("div");
    identity.className = "friend-identity";
    const partnerLabel = document.createElement("small");
    partnerLabel.textContent = "相手";
    const name = document.createElement("h2");
    name.textContent = sample.name;
    const profileTags = document.createElement("div");
    profileTags.className = "profile-tags";
    renderTagRow(profileTags, sample.profileTags, "profile-chip");
    identity.append(partnerLabel, name, profileTags);
    const partnerActions = document.createElement("div");
    partnerActions.className = "friend-card-actions";
    const partnerNumber = document.createElement("span");
    partnerNumber.className = "friend-number";
    partnerNumber.textContent = `${friendIndex + 1}人目`;
    const blockButton = document.createElement("button");
    blockButton.className = "friend-block-button";
    blockButton.type = "button";
    blockButton.textContent = "ブロック";
    blockButton.setAttribute("aria-label", `${sample.name}さんをブロックする`);
    blockButton.addEventListener("click", () => blockSample(sample));
    partnerActions.append(partnerNumber, blockButton);
    top.append(avatarFrame, identity, partnerActions);

    const worksHeading = document.createElement("div");
    worksHeading.className = "friend-works-heading";
    const worksTitle = document.createElement("p");
    worksTitle.textContent = "届いた絵日記";
    const works = getSampleWorks(sample);
    const worksCount = document.createElement("span");
    worksCount.textContent = `${works.length}枚`;
    worksHeading.append(worksTitle, worksCount);
    const strip = document.createElement("div");
    strip.className = "friend-work-strip";

    works.forEach((work, workIndex) => {
      const workButton = document.createElement("button");
      workButton.className = "friend-work-button";
      workButton.classList.toggle("is-latest", workIndex === 0);
      workButton.type = "button";
      workButton.setAttribute("aria-label", `${sample.name}さんの${formatRecordDate(work.date)}の絵日記を開く`);
      workButton.addEventListener("click", () => openFriendDetail(sample, work));

      const frame = document.createElement("div");
      frame.className = "partner-preview-frame";
      const grid = document.createElement("div");
      grid.className = "pixel-grid pixel-preview partner-preview";
      grid.setAttribute("aria-label", `${sample.name}さんの${formatRecordDate(work.date)}の9×9絵日記`);
      makeGrid(grid, work.pixels);
      frame.appendChild(grid);

      const workDate = dateFromKey(work.date);
      const label = document.createElement("time");
      label.className = "friend-work-date";
      label.dateTime = work.date;
      const day = document.createElement("strong");
      day.textContent = workDate ? workDate.getDate() : work.date;
      const month = document.createElement("span");
      month.textContent = workDate ? `${workDate.getMonth() + 1}月` : "";
      label.append(day, month);
      const weekday = document.createElement("span");
      weekday.className = "friend-work-weekday";
      weekday.textContent = workDate
        ? new Intl.DateTimeFormat("ja-JP", { weekday: "short" }).format(workDate)
        : "";
      const dateLine = document.createElement("div");
      dateLine.className = "friend-work-date-line";
      dateLine.append(label, weekday);
      const diaryTags = document.createElement("div");
      diaryTags.className = "tag-row";
      renderTagRow(diaryTags, work.tags);
      workButton.append(frame, dateLine, diaryTags);
      strip.appendChild(workButton);
    });

    card.append(top, worksHeading, strip);
    list.appendChild(card);
  });

  blocked.forEach((sample) => {
    const item = document.createElement("div");
    item.className = "blocked-person";
    const avatar = document.createElement("span");
    avatar.className = "pixel-avatar";
    avatar.style.setProperty("--avatar", sample.avatar);
    avatar.setAttribute("aria-hidden", "true");
    const name = document.createElement("strong");
    name.textContent = sample.name;
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = "解除する";
    button.setAttribute("aria-label", `${sample.name}さんのブロックを解除する`);
    button.addEventListener("click", () => unblockSample(sample));
    item.append(avatar, name, button);
    blockedList.appendChild(item);
  });
}

function openRecordDetail(record) {
  detailReturnScreen = "records";
  document.querySelector("#detail-kicker").textContent = "保存した絵日記";
  document.querySelector("#detail-title").textContent = "自分の絵日記";
  document.querySelector("#detail-subtitle").textContent = formatRecordDate(record.date);
  makeGrid(document.querySelector("#detail-preview"), record.pixels);
  renderTagRow(document.querySelector("#detail-tags"), record.tags || []);
  document.querySelector("#detail-friend").hidden = true;
  showScreen("detail");
}

function openFriendDetail(sample, work = getSampleWorks(sample)[0]) {
  detailReturnScreen = "friends";
  document.querySelector("#detail-kicker").textContent = "届いた絵日記";
  document.querySelector("#detail-title").textContent = `${sample.name}さんの絵日記`;
  document.querySelector("#detail-subtitle").textContent = `${formatRecordDate(work.date)}に届いた9×9絵日記`;
  makeGrid(document.querySelector("#detail-preview"), work.pixels);
  renderTagRow(document.querySelector("#detail-tags"), work.tags);
  document.querySelector("#detail-avatar").style.setProperty("--avatar", sample.avatar);
  document.querySelector("#detail-friend-name").textContent = sample.name;
  renderTagRow(document.querySelector("#detail-profile-tags"), sample.profileTags, "profile-chip");
  document.querySelector("#detail-friend").hidden = false;
  showScreen("detail");
}

function activeNavTarget(screenName) {
  if (screenName === "tags") return "draw";
  if (screenName === "waiting" || screenName === "result") return "exchange";
  if (screenName === "detail") return detailReturnScreen;
  return screenName;
}

function showScreen(name, updateHash = true) {
  ensureCurrentDay();
  const validNames = screens.map((screen) => screen.dataset.screen);
  const nextName = validNames.includes(name) ? name : "today";

  if (currentScreen === "waiting" && nextName !== "waiting" && nextName !== "result") {
    clearWaitingTimers();
  }

  currentScreen = nextName;
  if (nextName !== "draw") resetClearConfirmation();
  screens.forEach((screen) => {
    const active = screen.dataset.screen === nextName;
    screen.hidden = !active;
    screen.classList.toggle("is-active", active);
  });

  const navTarget = activeNavTarget(nextName);
  navItems.forEach((item) => {
    const active = item.dataset.target === navTarget;
    item.classList.toggle("is-active", active);
    if (active) item.setAttribute("aria-current", "page");
    else item.removeAttribute("aria-current");
  });

  if (nextName === "today") renderToday();
  if (nextName === "draw") renderEditor();
  if (nextName === "tags") renderTagScreen();
  if (nextName === "exchange") renderExchange();
  if (nextName === "result") renderResult();
  if (nextName === "records") renderRecords();
  if (nextName === "friends") renderFriends();

  if (updateHash && location.hash !== `#${nextName}`) {
    history.pushState({ screen: nextName }, "", `#${nextName}`);
  }
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showToast(message) {
  clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add("is-visible");
  toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 2200);
}

function resetClearConfirmation() {
  clearTimeout(clearConfirmTimer);
  isClearConfirming = false;
  clearButton.classList.remove("is-confirming");
  clearButton.setAttribute("aria-pressed", "false");
  const label = clearButton.querySelector(".clear-symbol + span");
  if (label) label.textContent = "全消し";
}

function askClearConfirmation() {
  clearTimeout(clearConfirmTimer);
  isClearConfirming = true;
  clearButton.classList.add("is-confirming");
  clearButton.setAttribute("aria-pressed", "true");
  const label = clearButton.querySelector(".clear-symbol + span");
  if (label) label.textContent = "もう一度押す";
  showToast("もう一度押すと全消しします");
  clearConfirmTimer = setTimeout(resetClearConfirmation, 3600);
}

function playSaveConfetti() {
  if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;

  const layer = document.createElement("div");
  layer.className = "save-confetti";
  layer.setAttribute("aria-hidden", "true");

  const colors = ["#ce6b55", "#e2b65e", "#8ea071", "#6f8e9b", "#fffaf0"];
  for (let index = 0; index < 40; index += 1) {
    const piece = document.createElement("i");
    const startX = `${Math.round(Math.random() * 100)}vw`;
    const drift = `${Math.round((Math.random() - .5) * 92)}px`;
    const fall = `${Math.round(94 + Math.random() * 18)}vh`;
    const turn = `${Math.round((Math.random() - .5) * 520)}deg`;
    piece.style.setProperty("--confetti-color", colors[index % colors.length]);
    piece.style.setProperty("--start-x", startX);
    piece.style.setProperty("--drift", drift);
    piece.style.setProperty("--fall", fall);
    piece.style.setProperty("--turn", turn);
    piece.style.setProperty("--delay", `${Math.random() * .42}s`);
    if (index % 3 === 0) piece.classList.add("is-wide");
    if (index % 4 === 0) piece.classList.add("is-pale");
    layer.appendChild(piece);
  }

  appShell.appendChild(layer);
  setTimeout(() => layer.remove(), 1900);
}

editorGrid.addEventListener("pointerdown", (event) => {
  const cell = event.target.closest(".pixel-cell");
  if (!cell || !editorGrid.contains(cell)) return;
  event.preventDefault();
  resetClearConfirmation();
  if (isEyedropper) {
    useEyedropper(Number(cell.dataset.index));
    return;
  }
  if (isBucketFill) {
    const before = pixels.slice();
    if (floodFill(Number(cell.dataset.index))) pushAction(before);
    return;
  }
  isDrawing = true;
  strokeBefore = pixels.slice();
  strokeChanged = false;
  lastPaintedIndex = -1;
  strokeChanged = paintIndex(Number(cell.dataset.index)) || strokeChanged;
  editorGrid.setPointerCapture?.(event.pointerId);
});

editorGrid.addEventListener("pointermove", (event) => {
  if (!isDrawing) return;
  const element = document.elementFromPoint(event.clientX, event.clientY);
  const cell = element?.closest(".pixel-cell");
  if (!cell || !editorGrid.contains(cell)) return;
  strokeChanged = paintIndex(Number(cell.dataset.index)) || strokeChanged;
});

editorGrid.addEventListener("pointerup", finishStroke);
editorGrid.addEventListener("pointercancel", finishStroke);

editorGrid.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" && event.key !== " ") return;
  const cell = event.target.closest(".pixel-cell");
  if (!cell) return;
  event.preventDefault();
  if (isEyedropper) {
    useEyedropper(Number(cell.dataset.index));
    return;
  }
  const before = pixels.slice();
  if (isBucketFill) {
    if (floodFill(Number(cell.dataset.index))) pushAction(before);
    return;
  }
  lastPaintedIndex = -1;
  if (paintIndex(Number(cell.dataset.index))) pushAction(before);
  lastPaintedIndex = -1;
});

document.addEventListener("pointerup", finishStroke);
document.addEventListener("pointercancel", finishStroke);

undoButton.addEventListener("click", undo);
redoButton.addEventListener("click", redo);

eraserButton.addEventListener("click", () => {
  resetClearConfirmation();
  isErasing = !isErasing;
  isEyedropper = false;
  isBucketFill = false;
  eraserButton.classList.toggle("is-active", isErasing);
  eraserButton.setAttribute("aria-pressed", String(isErasing));
  eyedropperButton.classList.remove("is-active");
  eyedropperButton.setAttribute("aria-pressed", "false");
  bucketButton.classList.remove("is-active");
  bucketButton.setAttribute("aria-pressed", "false");
  document.querySelectorAll(".color-swatch").forEach((swatch) => {
    swatch.classList.toggle("is-selected", !isErasing && swatch.dataset.color === selectedColor);
  });
});

eyedropperButton.addEventListener("click", () => {
  resetClearConfirmation();
  isEyedropper = !isEyedropper;
  isErasing = false;
  isBucketFill = false;
  eyedropperButton.classList.toggle("is-active", isEyedropper);
  eyedropperButton.setAttribute("aria-pressed", String(isEyedropper));
  eraserButton.classList.remove("is-active");
  eraserButton.setAttribute("aria-pressed", "false");
  bucketButton.classList.remove("is-active");
  bucketButton.setAttribute("aria-pressed", "false");
  document.querySelectorAll(".color-swatch").forEach((swatch) => {
    swatch.classList.toggle("is-selected", !isEyedropper && swatch.dataset.color === selectedColor);
  });
  if (isEyedropper) showToast("色を取りたいマスをタップしてください");
});

bucketButton.addEventListener("click", () => {
  resetClearConfirmation();
  isBucketFill = !isBucketFill;
  isErasing = false;
  isEyedropper = false;
  bucketButton.classList.toggle("is-active", isBucketFill);
  bucketButton.setAttribute("aria-pressed", String(isBucketFill));
  eraserButton.classList.remove("is-active");
  eraserButton.setAttribute("aria-pressed", "false");
  eyedropperButton.classList.remove("is-active");
  eyedropperButton.setAttribute("aria-pressed", "false");
  if (isBucketFill) showToast("まとめて塗りたい範囲をタップしてください");
});

clearButton.addEventListener("click", () => {
  if (!hasDrawing()) {
    resetClearConfirmation();
    showToast("キャンバスはすでに空です");
    return;
  }
  if (!isClearConfirming) {
    askClearConfirmation();
    return;
  }

  const before = pixels.slice();
  pixels = blankPixels();
  pushAction(before);
  renderEditor();
  resetClearConfirmation();
  showToast("81マスを空にしました");
});

document.querySelector("#custom-color").addEventListener("input", (event) => {
  selectColor(event.target.value);
});

document.querySelector("#go-tags-button").addEventListener("click", () => {
  selectedTags = state.todaySaved ? state.todayTags.slice() : selectedTags;
  showScreen("tags");
});

document.querySelector("#tags-back-button").addEventListener("click", () => showScreen("draw"));
document.querySelector("#final-save-button").addEventListener("click", saveTodayDiary);
document.querySelector("#today-draw-button").addEventListener("click", () => showScreen("draw"));
document.querySelector("#today-exchange-button").addEventListener("click", () => showScreen("exchange"));

document.querySelector("#exchange-main-button").addEventListener("click", () => {
  const action = document.querySelector("#exchange-main-button").dataset.action;
  if (action === "blocked-list") showScreen("friends");
  else if (state.todaySaved) startExchange();
  else showScreen("draw");
});

document.querySelector("#keep-partner-button").addEventListener("click", keepCurrentPartner);
document.querySelector("#result-block-button").addEventListener("click", () => blockSample(currentSample));
document.querySelector("#finish-button").addEventListener("click", () => showScreen("today"));
document.querySelector("#detail-back-button").addEventListener("click", () => showScreen(detailReturnScreen));
document.querySelector("#record-prev-month").addEventListener("click", () => shiftRecordMonth(-1));
document.querySelector("#record-next-month").addEventListener("click", () => shiftRecordMonth(1));
document.querySelector("#record-current-month").addEventListener("click", () => {
  const today = new Date();
  recordMonthDate = new Date(today.getFullYear(), today.getMonth(), 1);
  renderRecords();
});
document.querySelector("#record-filter-clear").addEventListener("click", () => {
  recordFilterTag = "";
  renderRecords();
});
document.querySelector("#brand-button").addEventListener("click", () => showScreen("today"));
document.querySelector("#settings-button").addEventListener("click", () => showToast("設定画面は、このプロトタイプでは準備中です"));

navItems.forEach((item) => {
  item.addEventListener("click", () => showScreen(item.dataset.target));
});

window.addEventListener("popstate", (event) => {
  const hashName = location.hash.replace("#", "");
  showScreen(event.state?.screen || hashName || "today", false);
});

renderLogo();
renderPalette();
renderRecords();
renderFriends();

const requestedScreen = location.hash.replace("#", "");
const initialScreen = requestedScreen === "home"
  ? "today"
  : requestedScreen === "partners"
    ? "friends"
    : requestedScreen === "detail"
      ? "records"
      : requestedScreen || "today";
history.replaceState({ screen: initialScreen }, "", `#${initialScreen}`);
showScreen(initialScreen, false);
