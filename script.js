const STATE_KEY = "potsupotsu-diary-state-v2";
const LEGACY_PIXELS_KEY = "hitomasu-diary-pixels";
const EXCHANGE_RESET_ONCE_KEY = "potsupotsu-exchange-reset-2026-07-20-v2";
const TUTORIAL_COMPLETED_KEY = "potsupotsuTutorialCompleted";
const EMPTY_COLOR = "#f4eddf";

const BASIC_PALETTE = [
  "#343832", "#6c665d", "#f4eddf", "#fffaf0",
  "#f0c6b4", "#ce6b55", "#df9252", "#e2b65e",
  "#8ea071", "#728b78", "#5f8b88", "#6f8e9b",
  "#6f7eaa", "#89719a", "#ad7891", "#b98d69"
];

const PALETTE_SETS = [
  { id: "basic", label: "きほん", colors: BASIC_PALETTE },
  {
    id: "retro",
    label: "レトロ",
    colors: [
      "#2f2b2a", "#6d4c3d", "#9b5d46", "#c57955",
      "#d8a463", "#e7c77a", "#8d9a6d", "#5d7f75",
      "#51677d", "#7b5f74", "#b88b84", "#f1dfc5"
    ]
  },
  {
    id: "vivid",
    label: "ビビッド",
    colors: [
      "#1f2937", "#ef4444", "#f97316", "#facc15",
      "#22c55e", "#14b8a6", "#06b6d4", "#3b82f6",
      "#6366f1", "#a855f7", "#ec4899", "#ffffff"
    ]
  },
  {
    id: "pastel",
    label: "パステル",
    colors: [
      "#4f4a46", "#fff8e8", "#f8d7d0", "#f7c8df",
      "#dfd1f4", "#c9d9ff", "#bfe4ef", "#cce9dd",
      "#e4edc2", "#fff0b8", "#f5d1ad", "#d8c8b8"
    ]
  },
  {
    id: "mono",
    label: "モノクロ",
    colors: [
      "#171a16", "#343832", "#51554e", "#74766d",
      "#98978d", "#b8b4a8", "#d2cbbb", "#e9ddca",
      "#f4eddf", "#fffaf0"
    ]
  },
  {
    id: "warm",
    label: "ウォーム",
    colors: [
      "#34231f", "#6f3d32", "#9f4c3c", "#ce6b55",
      "#df9252", "#e2b65e", "#f0c884", "#f4d7a1",
      "#8f6950", "#b98d69", "#fff4d8", "#343832"
    ]
  },
  {
    id: "natural",
    label: "ナチュラル",
    colors: [
      "#2f342c", "#343832", "#506557", "#728b78",
      "#8ea071", "#adb083", "#d0c48a", "#6c665d",
      "#8f6950", "#b98d69", "#e9ddca", "#fffaf0"
    ]
  },
  {
    id: "cool",
    label: "クール",
    colors: [
      "#26313f", "#31556a", "#416f80", "#5f8b88",
      "#6f8e9b", "#86a6b4", "#b8d0cf", "#dce8e8",
      "#6f7eaa", "#89719a", "#fffaf0", "#343832"
    ]
  },
  {
    id: "deep",
    label: "ディープ",
    colors: [
      "#171a16", "#242833", "#343850", "#4e566d",
      "#5a3f58", "#793f55", "#9f4c3c", "#506557",
      "#5f8b88", "#ad7891", "#e2b65e", "#f4eddf"
    ]
  }
];

const MAX_CUSTOM_COLORS = 16;

const PALETTE_ID_ALIASES = {
  sunset: "warm",
  forest: "natural",
  sea: "cool",
  night: "deep"
};

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
    palette: { t: "#6d4c3d", p: "#fff8e8", y: "#e7c77a", r: "#ce6b55", n: "#343832" },
    art: [
      ".........", "..ttttt..", ".tpppppt.", ".tpyyypt.", ".tpyrypt.",
      ".tpyyypt.", ".tpppppt.", "..ttttt..", "........."
    ]
  },
  {
    id: "yugata",
    name: "夕方",
    profileTags: ["散歩", "空", "のんびり"],
    diaryTags: ["そら", "さんぽ"],
    avatar: "#ce6b55",
    palette: { a: "#f4d7a1", o: "#df9252", r: "#9f4c3c", p: "#5a3f58", d: "#242833", l: "#e2b65e", w: "#fff4d8" },
    art: [
      "aaaaaaooo", "aaaaooooo", "aaaooorrr", "....r....", "...rrr...",
      "..rrrrr..", ".pwwlwwp.", ".pwwwwwp.", "dddpdpddd"
    ]
  },
  {
    id: "nemui",
    name: "ねむい人",
    profileTags: ["音楽", "雨", "ひとり時間"],
    diaryTags: ["雨", "ねむい"],
    avatar: "#6f7eaa",
    palette: { d: "#242833", b: "#86a6b4", w: "#dce8e8", r: "#6f7eaa" },
    art: [
      "...d.....", "...d.....", ".bbbbbbb.", "bbbbbbbbb", "..b.b.b..",
      "...d.....", "...d.....", "...d.....", "..ddd...."
    ]
  },
  {
    id: "karasu",
    name: "からす",
    profileTags: ["朝", "学校", "そら"],
    diaryTags: ["学校", "そら"],
    avatar: "#5f8b88",
    palette: { s: "#dce8e8", n: "#26313f", y: "#e2b65e" },
    art: [
      "sssssssss", "sssysssss", "sssssssss", "...nnn...", "..nnnnn..",
      ".nnnnnnn.", ".nssnssn.", ".nssyssn.", "nnnnnnnnn"
    ]
  },
  {
    id: "mochi",
    name: "もち",
    profileTags: ["ごはん", "かわいい", "なんでもない日"],
    diaryTags: ["ごはん", "かわいい"],
    avatar: "#8ea071",
    palette: { w: "#fffaf0", n: "#343832", g: "#506557", p: "#e4edc2" },
    art: [
      ".........", "...www...", "..wwwww..", ".wwwwwww.", ".wwnwnww.",
      ".wwwwwww.", "..wgggw..", "...ggg...", "........."
    ]
  }
];

const SAMPLE_WORK_VARIANTS = {
  tamago: [
    {
      tags: ["映画", "おやつ"],
      palette: { y: "#f0c884", w: "#fff4d8", r: "#ce6b55", b: "#6f7eaa" },
      art: [
        ".........", "...rrrr..", "..rwwww..", ".rwwwwww.", ".rwrwwrw.",
        ".rwwwwww.", "..rrrrr..", "...b.b...", "........."
      ]
    },
    {
      tags: ["夜", "映画"],
      palette: { n: "#242833", y: "#e2b65e", w: "#fffaf0" },
      art: [
        "nnnnnnnnn", "nwwwwwwwn", "nwy...ywn", "nw.yyy.wn", "nw.y.y.wn",
        "nwwwwwwwn", "nnnnnnnnn", "...n.n...", "..nnnnn.."
      ]
    }
  ],
  yugata: [
    {
      tags: ["さんぽ", "おでかけ"],
      palette: { r: "#9f4c3c", n: "#34231f", s: "#f4d7a1", g: "#8ea071" },
      art: [
        ".........", "....n....", "...nn....", "..nnn....", ".n.nn....",
        "...nn....", "...nn....", "..ggggg..", ".ggggggg."
      ]
    },
    {
      tags: ["花", "夕焼け"],
      palette: { y: "#e2b65e", g: "#8ea071", t: "#8f6950", r: "#ce6b55" },
      art: [
        ".........", "...r.r...", "..rrrrr..", ".rryrryr.", "..rrrrr..",
        "...r.r...", "....g....", "...ggg...", "..ttttt.."
      ]
    }
  ],
  nemui: [
    {
      tags: ["音楽", "ひとり時間"],
      palette: { n: "#4e566d", y: "#e2b65e" },
      art: [
        ".........", ".....nn..", ".....n...", "..nnnn...", ".n..nn...", ".n..nn...",
        "..nnnn...", ".....n...", ".....nn.."
      ]
    },
    {
      tags: ["夜", "ねむい"],
      palette: { y: "#e2b65e", n: "#343850", w: "#dce8e8", r: "#6f7eaa" },
      art: [
        "......yyy", "......yy.", ".......y.", ".........", "..rrrrr..",
        ".rwwwwwr.", ".rwwwwwr.", ".rrrrrrr.", "........."
      ]
    }
  ],
  karasu: [
    {
      tags: ["学校", "変なもの"],
      palette: { y: "#f0c884", t: "#b98d69", n: "#343832", b: "#6f8e9b" },
      art: [
        ".........", "..nnnnn..", ".nyyyyyn.", ".ntttttn.", ".ntbbbtn.",
        ".ntbbbtn.", "..ttttt..", "..n...n..", "........."
      ]
    },
    {
      tags: ["学校", "そら"],
      palette: { b: "#6f8e9b", y: "#fffaf0", n: "#26313f" },
      art: [
        "bbbbbbbbb", "b..yy...b", "b.yyyy..b", "b..yy...b", "bbbbbbbbb",
        "b...b...b", "b...b...b", "b...b...b", "bbbbbbbbb"
      ]
    }
  ],
  mochi: [
    {
      tags: ["コーヒー", "のんびり"],
      palette: { w: "#fffaf0", t: "#8f6950", b: "#b98d69" },
      art: [
        ".........", "....tt...", "....t....", "..wwwww..", ".wtttttw.",
        ".wtttttww", ".wtttttw.", "..wwwww..", "...bbb..."
      ]
    },
    {
      tags: ["果物", "かわいい"],
      palette: { g: "#506557", r: "#ce6b55", w: "#fff4d8", y: "#e2b65e" },
      art: [
        "....g....", "...ggg...", "..rrrrr..", ".rrrrrrr.", "rrryrryrr",
        "rrrrrrrrr", ".rrrwrrr.", "..rrrrr..", "...rrr..."
      ]
    }
  ]
};

const LOGO_ROWS = [
  ".........", "......bbb", ".....bbbb", "....bbb..", "...bbb...",
  "..wbb....", ".iww.....", ".ig......", "........."
];

const LOGO_PALETTE = {
  b: "#b98d69",
  w: "#fffaf0",
  i: "#343832",
  g: "#6c665d"
};

const DEFAULT_PROFILE_ICON_ROWS = [
  ".........", "...ccc...", "..ccccc..", ".ccscscc.", ".ccccccc.",
  ".cceeecc.", "..ccccc..", "...ggg...", "........."
];

const DEFAULT_PROFILE_ICON_PALETTE = {
  c: "#b66f5d",
  s: "#fffaf1",
  e: "#2d3a34",
  g: "#8c9a7d"
};

const screens = [...document.querySelectorAll(".screen")];
const navItems = [...document.querySelectorAll(".nav-item")];
const appShell = document.querySelector(".app-shell");
const editorGrid = document.querySelector("#editor-grid");
const settingsIconPreview = document.querySelector("#settings-icon-preview");
const settingsIconSample = document.querySelector("#settings-icon-sample");
const iconEditorGrid = document.querySelector("#icon-editor-grid");
const iconEditorPanel = document.querySelector("#icon-editor-panel");
const iconEditToggle = document.querySelector("#icon-edit-toggle");
const profileNameInput = document.querySelector("#profile-name-input");
const profileTagInput = document.querySelector("#profile-tag-input");
const profileTagAddButton = document.querySelector("#profile-tag-add-button");
const profileTagList = document.querySelector("#profile-tag-list");
const reduceMotionToggle = document.querySelector("#reduce-motion-toggle");
const gridToggle = document.querySelector("#grid-toggle");
const iconEraserButton = document.querySelector("#icon-eraser-button");
const iconEyedropperButton = document.querySelector("#icon-eyedropper-button");
const iconBucketButton = document.querySelector("#icon-bucket-button");
const iconClearButton = document.querySelector("#icon-clear-button");
const iconSaveButton = document.querySelector("#icon-save-button");
const iconUndoButton = document.querySelector("#icon-undo-button");
const iconRedoButton = document.querySelector("#icon-redo-button");
const undoButton = document.querySelector("#undo-button");
const redoButton = document.querySelector("#redo-button");
const eraserButton = document.querySelector("#eraser-button");
const eyedropperButton = document.querySelector("#eyedropper-button");
const bucketButton = document.querySelector("#bucket-button");
const clearButton = document.querySelector("#clear-button");
const drawingPanel = document.querySelector("#drawing-panel");
const paletteToggleButton = document.querySelector("#palette-toggle-button");
const palettePanelBody = document.querySelector("#palette-panel-body");
const paletteSummaryText = document.querySelector("#palette-summary-text");
const selectedColorDot = document.querySelector("#selected-color-dot");
const paletteBuilder = document.querySelector("#palette-builder");
const customColorInput = document.querySelector("#custom-color");
const customColorPreview = document.querySelector("#custom-color-preview");
const paletteTabs = document.querySelector("#palette-tabs");
const addCustomColorButton = document.querySelector("#add-custom-color-button");
const removeCustomColorButton = document.querySelector("#remove-custom-color-button");
const customPaletteCount = document.querySelector("#custom-palette-count");
const iconPaletteToggleButton = document.querySelector("#icon-palette-toggle-button");
const iconPalettePanelBody = document.querySelector("#icon-palette-panel-body");
const iconPaletteSummaryText = document.querySelector("#icon-palette-summary-text");
const iconSelectedColorDot = document.querySelector("#icon-selected-color-dot");
const iconPaletteBuilder = document.querySelector("#icon-palette-builder");
const iconCustomColorInput = document.querySelector("#icon-custom-color");
const iconCustomColorPreview = document.querySelector("#icon-custom-color-preview");
const iconPaletteTabs = document.querySelector("#icon-palette-tabs");
const iconPalette = document.querySelector("#icon-palette");
const iconAddCustomColorButton = document.querySelector("#icon-add-custom-color-button");
const iconRemoveCustomColorButton = document.querySelector("#icon-remove-custom-color-button");
const iconCustomPaletteCount = document.querySelector("#icon-custom-palette-count");
const todayPngSaveButton = document.querySelector("#today-png-save-button");
const detailPngSaveButton = document.querySelector("#detail-png-save-button");
const detailExportActions = document.querySelector("#detail-export-actions");
const toast = document.querySelector("#toast");
const brandButton = document.querySelector("#brand-button");
const settingsButton = document.querySelector("#settings-button");
const tutorialIconStep = document.querySelector("#tutorial-icon-step");
const tutorialIconComplete = document.querySelector("#tutorial-icon-complete");
const tutorialIconEditorSlot = document.querySelector("#tutorial-icon-editor-slot");
const tutorialIconSkipButton = document.querySelector("#tutorial-icon-skip-button");
const tutorialDrawButton = document.querySelector("#tutorial-draw-button");
const drawTutorialTip = document.querySelector("#draw-tutorial-tip");
const drawTutorialTipCopy = document.querySelector("#draw-tutorial-tip-copy");
const tagTutorialTip = document.querySelector("#tag-tutorial-tip");
const tutorialExchangeTip = document.querySelector("#tutorial-exchange-tip");
const iconEditorDefaultParent = iconEditorPanel.parentElement;

let state = loadState();
resetExchangeCountOnce();
let pixels = state.todayPixels.slice();
let iconPixels = state.profileIconPixels.slice();
let selectedTags = state.todayTags.slice();
let selectedColor = getInitialSelectedColor();
let selectedIconColor = selectedColor;
let isErasing = false;
let isIconErasing = false;
let isEyedropper = false;
let isBucketFill = false;
let isIconEyedropper = false;
let isIconBucketFill = false;
let isDrawing = false;
let isIconDrawing = false;
let strokeBefore = null;
let strokeChanged = false;
let iconStrokeBefore = null;
let iconStrokeChanged = false;
let lastPaintedIndex = -1;
let lastIconPaintedIndex = -1;
let undoStack = [];
let redoStack = [];
let iconUndoStack = [];
let iconRedoStack = [];
let currentSample = SAMPLE_USERS[0];
let currentScreen = "today";
let detailReturnScreen = "records";
let detailExportRecord = null;
let recordMonthDate = new Date(new Date().getFullYear(), new Date().getMonth(), 1);
let recordFilterTag = "";
let waitingTimers = [];
let toastTimer;
let clearConfirmTimer;
let isClearConfirming = false;
let iconClearConfirmTimer;
let isIconClearConfirming = false;
let clearAnimationTimer;
let isClearAnimating = false;
let isPalettePanelOpen = true;
let isIconPalettePanelOpen = true;
let cellAnimationToken = 0;
let tutorialStep = "idle";
let tutorialHasDrawn = false;
let tutorialTagTipShown = false;

const EDITOR_ANIMATION_CLASSES = [
  "is-painted",
  "is-erased",
  "is-sampled",
  "is-fill-wave",
  "is-history-undo",
  "is-history-redo",
  "is-clear-drop"
];

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

function normalizeColor(color) {
  return typeof color === "string" && /^#[0-9a-f]{6}$/i.test(color)
    ? color.toLowerCase()
    : null;
}

function normalizePixels(colors) {
  if (!Array.isArray(colors) || colors.length !== 81) return null;
  return colors.map((color) => normalizeColor(color) || EMPTY_COLOR);
}

function normalizePaletteColors(colors) {
  if (!Array.isArray(colors)) return [];
  const unique = [];
  colors.forEach((color) => {
    const normalized = normalizeColor(color);
    if (normalized && !unique.includes(normalized)) unique.push(normalized);
  });
  return unique.slice(0, MAX_CUSTOM_COLORS);
}

function normalizePaletteId(id) {
  const nextId = PALETTE_ID_ALIASES[id] || id;
  return isKnownPaletteId(nextId) ? nextId : null;
}

function isKnownPaletteId(id) {
  return id === "custom" || PALETTE_SETS.some((paletteSet) => paletteSet.id === id);
}

function getPaletteColorsById(id) {
  if (id === "custom") return state.customPalette || [];
  return PALETTE_SETS.find((paletteSet) => paletteSet.id === id)?.colors || BASIC_PALETTE;
}

function getActivePaletteColors() {
  return getPaletteColorsById(state.activePaletteId);
}

function getActivePalette() {
  return getPaletteChoices().find((paletteSet) => paletteSet.id === state.activePaletteId) || PALETTE_SETS[0];
}

function getPaletteChoices() {
  return [
    ...PALETTE_SETS,
    { id: "custom", label: "自分", colors: state.customPalette || [] }
  ];
}

function getInitialSelectedColor() {
  const colors = getActivePaletteColors();
  return colors[5] || colors[0] || BASIC_PALETTE[5];
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
    blockedIds: [],
    activePaletteId: "basic",
    customPalette: [],
    profileName: "わたし",
    profileTags: ["のんびり", "なんでもない日"],
    reduceMotion: false,
    showGrid: true,
    profileIconPixels: rowsToPixels(DEFAULT_PROFILE_ICON_ROWS, DEFAULT_PROFILE_ICON_PALETTE)
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
    partnerIds: Array.isArray(saved.partnerIds) ? [...new Set(saved.partnerIds)] : initial.partnerIds,
    activePaletteId: normalizePaletteId(saved.activePaletteId) || initial.activePaletteId,
    customPalette: normalizePaletteColors(saved.customPalette),
    profileName: typeof saved.profileName === "string" && saved.profileName.trim()
      ? saved.profileName.trim().slice(0, 12)
      : initial.profileName,
    profileTags: Array.isArray(saved.profileTags)
      ? saved.profileTags
        .map((tag) => String(tag).trim())
        .filter(Boolean)
        .slice(0, 3)
      : initial.profileTags,
    reduceMotion: Boolean(saved.reduceMotion),
    showGrid: typeof saved.showGrid === "boolean" ? saved.showGrid : true,
    profileIconPixels: normalizePixels(saved.profileIconPixels) || initial.profileIconPixels
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

function isTutorialCompleted() {
  try {
    return localStorage.getItem(TUTORIAL_COMPLETED_KEY) === "true";
  } catch {
    return false;
  }
}

function markTutorialCompleted() {
  try {
    localStorage.setItem(TUTORIAL_COMPLETED_KEY, "true");
  } catch {
    showToast("チュートリアルの完了状態を保存できませんでした");
  }
}

function setTutorialHeaderLocked(isLocked) {
  brandButton.disabled = isLocked;
  settingsButton.disabled = isLocked;
}

function hideTutorialTips() {
  drawTutorialTip.hidden = true;
  tagTutorialTip.hidden = true;
  tutorialExchangeTip.hidden = true;
  document.querySelector("#today-exchange-button").classList.remove("is-tutorial-spotlight-target");
}

function mountIconEditor(target) {
  if (iconEditorPanel.parentElement !== target) target.appendChild(iconEditorPanel);
}

function restoreIconEditor() {
  if (iconEditorPanel.parentElement !== iconEditorDefaultParent) {
    iconEditorDefaultParent.appendChild(iconEditorPanel);
  }
  iconEditorPanel.hidden = true;
  iconSaveButton.textContent = "保存する";
  iconEditToggle.setAttribute("aria-expanded", "false");
  iconEditToggle.querySelector("strong").textContent = "9×9で描く";
}

function resetTutorialIconDraft() {
  iconPixels = state.profileIconPixels.slice();
  isIconErasing = false;
  isIconEyedropper = false;
  isIconBucketFill = false;
  lastIconPaintedIndex = -1;
  iconStrokeBefore = null;
  iconStrokeChanged = false;
  iconUndoStack = [];
  iconRedoStack = [];
  resetIconClearConfirmation();
}

function renderTutorialScreen() {
  if (tutorialStep === "icon-complete") {
    restoreIconEditor();
    tutorialIconStep.hidden = true;
    tutorialIconComplete.hidden = false;
    setTutorialHeaderLocked(false);
    return;
  }

  tutorialStep = "icon";
  tutorialIconStep.hidden = false;
  tutorialIconComplete.hidden = true;
  setTutorialHeaderLocked(true);
  resetTutorialIconDraft();
  mountIconEditor(tutorialIconEditorSlot);
  iconEditorPanel.hidden = false;
  iconSaveButton.textContent = "このアイコンではじめる";
  renderIconEditor();
  updateIconPalettePanelState();
}

function startTutorial() {
  tutorialStep = "icon";
  tutorialHasDrawn = false;
  tutorialTagTipShown = false;
  hideTutorialTips();
  showScreen("tutorial");
}

function showDrawTutorialTip(copy) {
  drawTutorialTipCopy.textContent = copy;
  drawTutorialTip.hidden = false;
}

function startTutorialDrawing() {
  restoreIconEditor();
  tutorialStep = "draw";
  tutorialHasDrawn = false;
  setTutorialHeaderLocked(false);
  showScreen("draw");
  showDrawTutorialTip("色を選んで、マスをタップすると描けます。消しゴムは色を消し、スポイトはマスの色を選び、バケツは同じ色の範囲をまとめて塗ります。戻る・進むで操作をやり直せます。");
}

function finishTutorialIconStep() {
  restoreIconEditor();
  tutorialStep = "icon-complete";
  tutorialIconStep.hidden = true;
  tutorialIconComplete.hidden = false;
  setTutorialHeaderLocked(false);
}

function notifyTutorialDrawingProgress() {
  if (tutorialStep !== "draw" || tutorialHasDrawn) return;
  tutorialHasDrawn = true;
  showDrawTutorialTip("描けました。下の「タグを付ける」から保存できます。タグは選ばなくても保存できます。");
}

function showTagTutorialTip() {
  if (tutorialTagTipShown || (tutorialStep !== "draw" && tutorialStep !== "tags")) return;
  tutorialTagTipShown = true;
  tutorialStep = "tags";
  tagTutorialTip.hidden = false;
}

function positionTutorialExchangeSpotlight() {
  if (tutorialExchangeTip.hidden) return;

  const target = document.querySelector("#today-exchange-button");
  const panel = tutorialExchangeTip.querySelector(".tutorial-exchange-panel");
  const appBounds = appShell.getBoundingClientRect();
  const targetBounds = target.getBoundingClientRect();
  const panelHeight = panel.offsetHeight;
  const minimumTop = 84;
  const maximumTop = Math.max(minimumTop, window.innerHeight - panelHeight - getBottomNavHeight() - 20);
  const top = Math.min(maximumTop, Math.max(minimumTop, targetBounds.top - panelHeight - 20));
  const arrowLeft = targetBounds.left + (targetBounds.width / 2) - appBounds.left - 23;

  panel.style.setProperty("--spotlight-top", `${Math.round(top)}px`);
  panel.style.setProperty("--spotlight-arrow-left", `${Math.round(arrowLeft)}px`);
}

function getBottomNavHeight() {
  const nav = document.querySelector(".bottom-nav");
  return nav?.getBoundingClientRect().height || 74;
}

function syncTutorialExchangeTip() {
  const isVisible = tutorialStep === "exchange" && currentScreen === "today";
  tutorialExchangeTip.hidden = !isVisible;
  document.querySelector("#today-exchange-button").classList.toggle("is-tutorial-spotlight-target", isVisible);
  if (isVisible) requestAnimationFrame(positionTutorialExchangeSpotlight);
}

function completeTutorial() {
  tutorialStep = "done";
  syncTutorialExchangeTip();
  markTutorialCompleted();
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

function renderProfileIcon() {
  makeGrid(settingsIconPreview, state.profileIconPixels);
}

function applyUserPreferences() {
  document.body.classList.toggle("is-reduce-motion", Boolean(state.reduceMotion));
  document.body.classList.toggle("is-grid-hidden", state.showGrid === false);
}

function renderIconDraftPreview() {
  makeGrid(settingsIconSample, iconPixels);
}

function renderPaletteTabSet(targetTabs, onSelect) {
  targetTabs.innerHTML = "";

  getPaletteChoices().forEach((paletteSet) => {
    const button = document.createElement("button");
    button.className = "palette-tab";
    button.classList.toggle("is-active", state.activePaletteId === paletteSet.id);
    button.type = "button";
    button.setAttribute("role", "tab");
    button.setAttribute("aria-selected", String(state.activePaletteId === paletteSet.id));
    button.dataset.paletteId = paletteSet.id;

    const preview = document.createElement("span");
    preview.className = "palette-tab-preview";
    const previewColors = paletteSet.colors.length ? paletteSet.colors : [EMPTY_COLOR, "#cfc2ad", "#a9977e"];
    previewColors.slice(0, 3).forEach((color) => {
      const pip = document.createElement("i");
      pip.style.setProperty("--preview-color", color);
      preview.appendChild(pip);
    });

    const label = document.createElement("span");
    label.textContent = paletteSet.label;
    button.append(preview, label);
    button.addEventListener("click", () => onSelect(paletteSet.id));
    targetTabs.appendChild(button);
  });

  targetTabs.querySelector(".palette-tab.is-active")?.scrollIntoView({
    block: "nearest",
    inline: "center"
  });
}

function updateIconToolState() {
  iconEraserButton.classList.toggle("is-active", isIconErasing);
  iconEraserButton.setAttribute("aria-pressed", String(isIconErasing));
  iconEyedropperButton.classList.toggle("is-active", isIconEyedropper);
  iconEyedropperButton.setAttribute("aria-pressed", String(isIconEyedropper));
  iconBucketButton.classList.toggle("is-active", isIconBucketFill);
  iconBucketButton.setAttribute("aria-pressed", String(isIconBucketFill));
  iconUndoButton.disabled = iconUndoStack.length === 0;
  iconRedoButton.disabled = iconRedoStack.length === 0;
}

function renderIconPalette() {
  iconPalette.innerHTML = "";
  renderPaletteTabSet(iconPaletteTabs, setActivePalette);

  const colors = getActivePaletteColors();
  if (!colors.length) {
    const empty = document.createElement("p");
    empty.className = "custom-palette-empty";
    empty.textContent = "自由な色を選んで「色を追加」を押すと、ここに保存されます。";
    iconPalette.appendChild(empty);
    syncIconColorControls({ animate: false });
    return;
  }

  colors.forEach((color, index) => {
    const button = document.createElement("button");
    button.className = "color-swatch";
    button.type = "button";
    button.dataset.color = color;
    button.style.setProperty("--swatch", color);
    button.style.setProperty("--swatch-delay", `${index * 18}ms`);
    button.setAttribute("aria-label", `アイコンの色 ${color}`);
    button.classList.toggle("is-selected", !isIconErasing && !isIconEyedropper && color === selectedIconColor);
    button.addEventListener("click", () => selectIconColor(color, { source: "swatch" }));
    iconPalette.appendChild(button);
  });
  syncIconColorControls({ animate: false });
}

function renderIconEditor() {
  makeGrid(iconEditorGrid, iconPixels, true);
  renderIconDraftPreview();
  renderIconPalette();
  updateIconToolState();
}

function renderProfileTagSettings() {
  profileTagList.innerHTML = "";
  state.profileTags.forEach((tag) => {
    const button = document.createElement("button");
    button.className = "profile-tag-pill";
    button.type = "button";
    button.textContent = `${tag} ×`;
    button.setAttribute("aria-label", `${tag} を削除`);
    button.addEventListener("click", () => {
      state.profileTags = state.profileTags.filter((item) => item !== tag);
      saveState();
      renderProfileTagSettings();
    });
    profileTagList.appendChild(button);
  });
  profileTagInput.disabled = state.profileTags.length >= 3;
  profileTagAddButton.disabled = state.profileTags.length >= 3;
  profileTagInput.placeholder = state.profileTags.length >= 3 ? "3つまでです" : "タグを追加";
}

function renderSettingsToggles() {
  reduceMotionToggle.setAttribute("aria-pressed", String(state.reduceMotion));
  reduceMotionToggle.querySelector("strong").textContent = state.reduceMotion ? "ON" : "OFF";
  gridToggle.setAttribute("aria-pressed", String(state.showGrid));
  gridToggle.querySelector("strong").textContent = state.showGrid ? "ON" : "OFF";
}

function setIconEditorOpen(isOpen) {
  iconEditorPanel.hidden = !isOpen;
  iconEditToggle.setAttribute("aria-expanded", String(isOpen));
  iconEditToggle.querySelector("strong").textContent = isOpen ? "編集中" : "9×9で描く";
  if (isOpen) {
    renderIconEditor();
    updateIconPalettePanelState();
  }
}

function renderSettings() {
  iconPixels = state.profileIconPixels.slice();
  isIconErasing = false;
  isIconEyedropper = false;
  isIconBucketFill = false;
  lastIconPaintedIndex = -1;
  iconStrokeBefore = null;
  iconStrokeChanged = false;
  resetIconClearConfirmation();
  iconUndoStack = [];
  iconRedoStack = [];
  profileNameInput.value = state.profileName;
  document.querySelector("#settings-blocked-count").textContent = state.blockedIds.length;
  renderProfileIcon();
  renderIconEditor();
  renderProfileTagSettings();
  renderSettingsToggles();
  setIconEditorOpen(false);
  applyUserPreferences();
}

function animateIconCell(index, className) {
  const cell = iconEditorGrid.children[index];
  if (!cell || prefersReducedMotion()) return;
  cell.classList.remove("is-icon-painted", "is-icon-erased");
  void cell.offsetWidth;
  cell.classList.add(className);
  setTimeout(() => cell.classList.remove(className), 360);
}

function updateIconPaletteBuilder() {
  const color = normalizeColor(selectedIconColor);
  const customColors = state.customPalette || [];
  const alreadyAdded = color ? customColors.includes(color) : false;
  const isFull = customColors.length >= MAX_CUSTOM_COLORS;
  const canRemoveSelected = color ? customColors.includes(color) : false;
  const isCustomPalette = state.activePaletteId === "custom";

  iconPaletteBuilder.hidden = !isCustomPalette;
  iconCustomPaletteCount.textContent = `${customColors.length} / ${MAX_CUSTOM_COLORS}`;
  iconAddCustomColorButton.disabled = !color || alreadyAdded || isFull;
  iconAddCustomColorButton.textContent = alreadyAdded ? "追加済み" : "色を追加";
  iconRemoveCustomColorButton.disabled = !canRemoveSelected;
  iconRemoveCustomColorButton.textContent = canRemoveSelected ? "選択色を削除" : "色を選んで削除";
}

function syncIconColorControls(options = {}) {
  const { animate = true, source = "swatch" } = options;
  selectedIconColor = normalizeColor(selectedIconColor) || BASIC_PALETTE[5];
  iconCustomColorInput.value = selectedIconColor;
  iconCustomColorPreview.style.setProperty("--custom-color", selectedIconColor);
  iconSelectedColorDot.style.setProperty("--custom-color", selectedIconColor);
  iconPaletteSummaryText.textContent = `${getActivePalette().label}の色を選択中`;
  const showSelectedSwatch = !isIconErasing && !isIconEyedropper;
  iconPalette.querySelectorAll(".color-swatch").forEach((swatch) => {
    swatch.classList.toggle("is-selected", showSelectedSwatch && swatch.dataset.color === selectedIconColor);
  });
  updateIconPaletteBuilder();
  updateIconToolState();

  if (animate) {
    replayElementAnimation(iconCustomColorPreview, "is-color-pulse", 460);
    replayElementAnimation(iconSelectedColorDot, "is-color-pulse", 460);
    replayElementAnimation(iconPalette.querySelector(`.color-swatch[data-color="${selectedIconColor}"]`), "is-picking", 420);
    if (source === "custom") {
      replayElementAnimation(document.querySelector("#icon-color-picker-control"), "is-picking", 460);
    }
  }
}

function selectIconColor(color, options = {}) {
  resetIconClearConfirmation();
  selectedIconColor = normalizeColor(color) || BASIC_PALETTE[5];
  isIconErasing = false;
  isIconEyedropper = false;
  isIconBucketFill = false;
  syncIconColorControls(options);
}

function paintIconIndex(index) {
  if (!Number.isInteger(index) || index < 0 || index >= 81 || lastIconPaintedIndex === index) return false;
  lastIconPaintedIndex = index;

  const nextColor = isIconErasing ? EMPTY_COLOR : selectedIconColor;
  if (iconPixels[index] === nextColor) return false;

  iconPixels[index] = nextColor;
  const cell = iconEditorGrid.children[index];
  if (cell) {
    cell.style.setProperty("--pixel-color", nextColor);
    cell.style.backgroundColor = nextColor;
  }
  animateIconCell(index, isIconErasing ? "is-icon-erased" : "is-icon-painted");
  renderIconDraftPreview();
  return true;
}

function floodFillIcon(index) {
  if (!Number.isInteger(index) || index < 0 || index >= 81) return [];
  const targetColor = iconPixels[index];
  const nextColor = selectedIconColor;
  if (targetColor === nextColor) return [];

  const queue = [index];
  const visited = new Set();
  const filledIndices = [];
  while (queue.length) {
    const current = queue.shift();
    if (visited.has(current) || iconPixels[current] !== targetColor) continue;
    visited.add(current);
    filledIndices.push(current);
    iconPixels[current] = nextColor;
    const row = Math.floor(current / 9);
    const column = current % 9;
    if (row > 0) queue.push(current - 9);
    if (row < 8) queue.push(current + 9);
    if (column > 0) queue.push(current - 1);
    if (column < 8) queue.push(current + 1);
  }

  renderIconEditor();
  filledIndices.forEach((filledIndex) => animateIconCell(filledIndex, "is-icon-painted"));
  return filledIndices;
}

function useIconEyedropper(index) {
  const sampledColor = iconPixels[index];
  selectedIconColor = normalizeColor(sampledColor) || BASIC_PALETTE[5];
  isIconErasing = false;
  isIconEyedropper = false;
  isIconBucketFill = false;
  animateIconCell(index, "is-icon-painted");
  renderIconPalette();
  updateIconToolState();
  showToast(sampledColor === EMPTY_COLOR ? "背景色を選びました" : "選んだマスの色を使います");
}

function pushIconAction(previousPixels) {
  iconUndoStack.push(previousPixels);
  if (iconUndoStack.length > 60) iconUndoStack.shift();
  iconRedoStack = [];
  updateIconToolState();
}

function undoIcon() {
  if (!iconUndoStack.length) return;
  const before = iconPixels.slice();
  iconRedoStack.push(before);
  iconPixels = iconUndoStack.pop();
  renderIconEditor();
  updateIconToolState();
}

function redoIcon() {
  if (!iconRedoStack.length) return;
  const before = iconPixels.slice();
  iconUndoStack.push(before);
  iconPixels = iconRedoStack.pop();
  renderIconEditor();
  updateIconToolState();
}

function finishIconStroke() {
  if (!isIconDrawing) return;
  isIconDrawing = false;
  lastIconPaintedIndex = -1;

  if (iconStrokeChanged && iconStrokeBefore) {
    pushIconAction(iconStrokeBefore);
  }

  iconStrokeBefore = null;
  iconStrokeChanged = false;
}

function clearProfileIconDraft() {
  if (!iconPixels.some((color) => color.toLowerCase() !== EMPTY_COLOR)) {
    resetIconClearConfirmation();
    showToast("アイコンはすでに空です");
    return;
  }
  if (!isIconClearConfirming) {
    askIconClearConfirmation();
    return;
  }

  const before = iconPixels.slice();
  iconPixels = blankPixels();
  renderIconEditor();
  pushIconAction(before);
  resetIconClearConfirmation();
  showToast("アイコンを空にしました");
}

function saveProfileIcon() {
  const savedFromTutorial = tutorialStep === "icon" && currentScreen === "tutorial";
  state.profileIconPixels = iconPixels.slice();
  saveState();
  renderProfileIcon();
  renderIconDraftPreview();
  replayElementAnimation(settingsIconPreview, "is-icon-saved", 420);

  if (savedFromTutorial) {
    finishTutorialIconStep();
    return;
  }

  setIconEditorOpen(false);
  showToast("自分のアイコンを保存しました");
}

function addProfileTagFromInput() {
  const tag = profileTagInput.value.trim().replace(/\s+/g, " ").slice(0, 10);
  if (!tag) return;
  if (state.profileTags.includes(tag)) {
    showToast("同じタグがあります");
    return;
  }
  if (state.profileTags.length >= 3) {
    showToast("プロフィールタグは3つまでです");
    return;
  }
  state.profileTags.push(tag);
  profileTagInput.value = "";
  saveState();
  renderProfileTagSettings();
}

function handleSettingsAction(action) {
  if (action === "blocked-list") {
    showScreen("friends");
    return;
  }
  if (action === "exchange-info") {
    showToast("絵日記を保存すると、1日3回まで交換できます");
    return;
  }
  if (action === "contact") {
    showToast("通報・お問い合わせ機能は準備中です");
    return;
  }
  if (action === "howto") {
    showToast("描く→保存→交換の順に使います");
    return;
  }
  if (action === "tutorial") {
    startTutorial();
    return;
  }
  if (action === "about") {
    showToast("9×9の小さな絵日記を交換するアプリです");
  }
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

function saveDiaryPng(pixelData, dateKey) {
  const exportPixels = normalizePixels(pixelData);
  if (!exportPixels) {
    showToast("PNGにできる絵日記がありません");
    return;
  }

  const cellSize = 100;
  const canvas = document.createElement("canvas");
  canvas.width = cellSize * 9;
  canvas.height = cellSize * 9;
  const context = canvas.getContext("2d");
  if (!context) {
    showToast("PNGを作成できませんでした");
    return;
  }

  context.imageSmoothingEnabled = false;
  exportPixels.forEach((color, index) => {
    context.fillStyle = color;
    context.fillRect((index % 9) * cellSize, Math.floor(index / 9) * cellSize, cellSize, cellSize);
  });

  const download = (url) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = `pochipochi-diary-${dateKey || localDateKey()}.png`;
    link.style.display = "none";
    document.body.appendChild(link);
    link.click();
    link.remove();
    if (url.startsWith("blob:")) window.setTimeout(() => URL.revokeObjectURL(url), 0);
    showToast("PNGを保存しました");
  };

  if (canvas.toBlob) {
    canvas.toBlob((blob) => {
      if (!blob) {
        showToast("PNGを作成できませんでした");
        return;
      }
      download(URL.createObjectURL(blob));
    }, "image/png");
    return;
  }

  download(canvas.toDataURL("image/png"));
}

function confirmDiaryPng(pixelData, dateKey) {
  if (!window.confirm("この絵日記をPNGで保存しますか？")) return;
  saveDiaryPng(pixelData, dateKey);
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
  todayPngSaveButton.hidden = !state.todaySaved;

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

function renderPaletteTabs() {
  renderPaletteTabSet(paletteTabs, setActivePalette);
}

function renderPalette() {
  const palette = document.querySelector("#palette");
  palette.innerHTML = "";
  renderPaletteTabs();

  const colors = getActivePaletteColors();
  if (!colors.length) {
    const empty = document.createElement("p");
    empty.className = "custom-palette-empty";
    empty.textContent = "自由な色を選んで「色を追加」を押すと、ここに保存されます。";
    palette.appendChild(empty);
    selectColor(selectedColor, { animate: false });
    return;
  }

  colors.forEach((color, index) => {
    const button = document.createElement("button");
    button.className = "color-swatch";
    button.type = "button";
    button.style.setProperty("--swatch", color);
    button.style.setProperty("--swatch-delay", `${index * 18}ms`);
    button.dataset.color = color;
    button.setAttribute("aria-label", `色 ${color}`);
    button.classList.toggle("is-selected", color === selectedColor && !isErasing);
    button.addEventListener("click", () => selectColor(color, { source: "swatch" }));
    palette.appendChild(button);
  });
  selectColor(selectedColor, { animate: false });
}

function updatePaletteBuilder() {
  const color = normalizeColor(selectedColor);
  const customColors = state.customPalette || [];
  const alreadyAdded = color ? customColors.includes(color) : false;
  const isFull = customColors.length >= MAX_CUSTOM_COLORS;
  const canRemoveSelected = color ? customColors.includes(color) : false;
  const isCustomPalette = state.activePaletteId === "custom";

  paletteBuilder.hidden = !isCustomPalette;
  customPaletteCount.textContent = `${customColors.length} / ${MAX_CUSTOM_COLORS}`;
  addCustomColorButton.disabled = !color || alreadyAdded || isFull;
  addCustomColorButton.textContent = alreadyAdded ? "追加済み" : "色を追加";
  removeCustomColorButton.disabled = !canRemoveSelected;
  removeCustomColorButton.textContent = canRemoveSelected ? "選択色を削除" : "色を選んで削除";
}

function updatePalettePanelState() {
  drawingPanel.classList.toggle("is-collapsed", !isPalettePanelOpen);
  palettePanelBody.hidden = !isPalettePanelOpen;
  paletteToggleButton.textContent = isPalettePanelOpen ? "閉じる" : "開く";
  paletteToggleButton.setAttribute("aria-expanded", String(isPalettePanelOpen));
}

function updateIconPalettePanelState() {
  iconPalettePanelBody.hidden = !isIconPalettePanelOpen;
  iconPaletteToggleButton.textContent = isIconPalettePanelOpen ? "閉じる" : "開く";
  iconPaletteToggleButton.setAttribute("aria-expanded", String(isIconPalettePanelOpen));
}

function togglePalettePanel() {
  isPalettePanelOpen = !isPalettePanelOpen;
  updatePalettePanelState();
}

function toggleIconPalettePanel() {
  isIconPalettePanelOpen = !isIconPalettePanelOpen;
  updateIconPalettePanelState();
}

function setActivePalette(paletteId) {
  if (!isKnownPaletteId(paletteId)) return;
  const changed = state.activePaletteId !== paletteId;
  state.activePaletteId = paletteId;
  const colors = getActivePaletteColors();
  if (colors.length && !colors.includes(selectedColor)) selectedColor = colors[0];
  if (colors.length && !colors.includes(selectedIconColor)) selectedIconColor = colors[0];
  saveState();
  renderPalette();
  renderIconPalette();
  if (changed) playPaletteSwitchAnimation();
}

function addSelectedColorToCustomPalette() {
  const color = normalizeColor(selectedColor);
  if (!color) return;
  if (state.customPalette.includes(color)) {
    state.activePaletteId = "custom";
    saveState();
    renderPalette();
    renderIconPalette();
    showToast("その色は追加済みです");
    return;
  }
  if (state.customPalette.length >= MAX_CUSTOM_COLORS) {
    showToast(`自分パレットは${MAX_CUSTOM_COLORS}色までです`);
    return;
  }

  state.customPalette.push(color);
  state.activePaletteId = "custom";
  selectedColor = color;
  saveState();
  renderPalette();
  renderIconPalette();
  playPaletteSwitchAnimation();
  pulseToolButton(addCustomColorButton);
  showToast("自分パレットに色を追加しました");
}

function removeSelectedCustomColor() {
  const color = normalizeColor(selectedColor);
  const index = state.customPalette.indexOf(color);
  if (index < 0) {
    showToast("自分パレットの色を選んでください");
    return;
  }

  state.customPalette.splice(index, 1);
  if (state.activePaletteId === "custom") {
    const replacementColor = state.customPalette[index] || state.customPalette[index - 1] || BASIC_PALETTE[5];
    selectedColor = replacementColor;
    if (selectedIconColor === color) selectedIconColor = replacementColor;
  }
  saveState();
  renderPalette();
  renderIconPalette();
  playPaletteSwitchAnimation();
  pulseToolButton(removeCustomColorButton);
  showToast("自分パレットから色を削除しました");
}

function addSelectedIconColorToCustomPalette() {
  const color = normalizeColor(selectedIconColor);
  if (!color) return;
  if (state.customPalette.includes(color)) {
    state.activePaletteId = "custom";
    saveState();
    renderPalette();
    renderIconPalette();
    showToast("その色は追加済みです");
    return;
  }
  if (state.customPalette.length >= MAX_CUSTOM_COLORS) {
    showToast(`自分パレットは${MAX_CUSTOM_COLORS}色までです`);
    return;
  }

  state.customPalette.push(color);
  state.activePaletteId = "custom";
  selectedIconColor = color;
  saveState();
  renderPalette();
  renderIconPalette();
  playPaletteSwitchAnimation();
  pulseToolButton(iconAddCustomColorButton);
  showToast("自分パレットに色を追加しました");
}

function removeSelectedIconCustomColor() {
  const color = normalizeColor(selectedIconColor);
  const index = state.customPalette.indexOf(color);
  if (index < 0) {
    showToast("自分パレットの色を選んでください");
    return;
  }

  state.customPalette.splice(index, 1);
  if (state.activePaletteId === "custom") {
    selectedIconColor = state.customPalette[index] || state.customPalette[index - 1] || BASIC_PALETTE[5];
    selectedColor = state.customPalette[index] || state.customPalette[index - 1] || BASIC_PALETTE[5];
  }
  saveState();
  renderPalette();
  renderIconPalette();
  playPaletteSwitchAnimation();
  pulseToolButton(iconRemoveCustomColorButton);
  showToast("自分パレットから色を削除しました");
}

function selectColor(color, options = {}) {
  resetClearConfirmation();
  const { animate = true, source = "swatch" } = options;
  selectedColor = normalizeColor(color) || BASIC_PALETTE[5];
  customColorInput.value = selectedColor;
  customColorPreview.style.setProperty("--custom-color", selectedColor);
  selectedColorDot.style.setProperty("--custom-color", selectedColor);
  paletteSummaryText.textContent = `${getActivePalette().label}の色を選択中`;
  isErasing = false;
  isEyedropper = false;
  eraserButton.classList.remove("is-active");
  eraserButton.setAttribute("aria-pressed", "false");
  eyedropperButton.classList.remove("is-active");
  eyedropperButton.setAttribute("aria-pressed", "false");
  document.querySelectorAll("#palette .color-swatch").forEach((swatch) => {
    swatch.classList.toggle("is-selected", swatch.dataset.color === selectedColor);
  });
  updatePaletteBuilder();
  if (animate) playColorSelectAnimation(selectedColor, source);
}

function useEyedropper(index) {
  const sampledColor = pixels[index];
  animateCell(index, "is-sampled", 0, { "--effect-color": sampledColor });
  selectColor(sampledColor, { source: "eyedropper" });
  pulseToolButton(eyedropperButton);
  showToast(sampledColor === EMPTY_COLOR ? "背景色を選びました" : "選んだマスの色を使います");
}

function prefersReducedMotion() {
  return Boolean(state.reduceMotion) || window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
}

function resetCellAnimation(cell) {
  if (!cell) return;
  EDITOR_ANIMATION_CLASSES.forEach((className) => cell.classList.remove(className));
  cell.style.removeProperty("--cell-delay");
  cell.style.removeProperty("--effect-color");
  cell.style.removeProperty("--pop-x");
  cell.style.removeProperty("--pop-y");
  cell.style.removeProperty("--erase-x");
  cell.style.removeProperty("--erase-mid-x");
  cell.style.removeProperty("--wave-x");
  cell.style.removeProperty("--wave-y");
  cell.style.removeProperty("--wave-mid-x");
  cell.style.removeProperty("--wave-mid-y");
  cell.style.removeProperty("--drop-x");
  cell.style.removeProperty("--fall-distance");
  cell.style.removeProperty("--cell-tilt");
}

function animateCell(index, className, delayMs = 0, properties = {}, options = {}) {
  const cell = editorGrid.children[index];
  if (!cell) return;

  resetCellAnimation(cell);
  const delay = Math.max(0, Math.round(delayMs));
  const duration = options.durationMs ?? 520;
  const token = String(++cellAnimationToken);
  const toColor = options.toColor;

  cell.dataset.animationToken = token;
  if (toColor) {
    cell.style.setProperty("--pixel-color", toColor);
    cell.style.backgroundColor = toColor;
  }

  Object.entries(properties).forEach(([name, value]) => {
    cell.style.setProperty(name, value);
  });
  cell.style.setProperty("--cell-delay", `${delay}ms`);

  if (prefersReducedMotion()) {
    if (toColor) cell.style.backgroundColor = toColor;
    resetCellAnimation(cell);
    return;
  }

  void cell.offsetWidth;
  cell.classList.add(className);

  setTimeout(() => {
    if (editorGrid.children[index] !== cell || cell.dataset.animationToken !== token) return;
    resetCellAnimation(cell);
  }, delay + duration + 90);
}

function pulseToolButton(button) {
  if (!button || prefersReducedMotion()) return;
  button.classList.remove("is-bumping");
  void button.offsetWidth;
  button.classList.add("is-bumping");
  setTimeout(() => button.classList.remove("is-bumping"), 420);
}

function replayElementAnimation(element, className, duration = 420) {
  if (!element || prefersReducedMotion()) return;
  element.classList.remove(className);
  void element.offsetWidth;
  element.classList.add(className);
  setTimeout(() => element.classList.remove(className), duration);
}

function playColorSelectAnimation(color, source = "swatch") {
  customColorPreview.style.setProperty("--custom-color", color);
  replayElementAnimation(customColorPreview, "is-color-pulse", 460);
  replayElementAnimation(selectedColorDot, "is-color-pulse", 460);

  const swatch = document.querySelector(`#palette .color-swatch[data-color="${color}"]`);
  replayElementAnimation(swatch, "is-picking", 420);

  if (source === "custom") {
    replayElementAnimation(document.querySelector(".color-picker-control"), "is-picking", 460);
  }
}

function playPaletteSwitchAnimation() {
  replayElementAnimation(document.querySelector("#palette"), "is-refreshing", 520);
  replayElementAnimation(paletteTabs.querySelector(".palette-tab.is-active"), "is-switching", 420);
  replayElementAnimation(document.querySelector("#icon-palette"), "is-refreshing", 520);
  replayElementAnimation(iconPaletteTabs.querySelector(".palette-tab.is-active"), "is-switching", 420);
}

function changedPixelIndices(before, after) {
  const changed = [];
  for (let index = 0; index < 81; index += 1) {
    if (before[index] !== after[index]) changed.push(index);
  }
  return changed;
}

function playBucketFillAnimation(originIndex, filledIndices, fromColor, toColor) {
  if (!filledIndices.length) return;
  pulseToolButton(bucketButton);
  if (prefersReducedMotion()) return;

  const originRow = Math.floor(originIndex / 9);
  const originColumn = originIndex % 9;
  filledIndices.forEach((index) => {
    const row = Math.floor(index / 9);
    const column = index % 9;
    const distance = Math.abs(row - originRow) + Math.abs(column - originColumn);
    const waveColumn = Math.max(-1, Math.min(1, originColumn - column));
    const waveRow = Math.max(-1, Math.min(1, originRow - row));
    const waveX = `${waveColumn * 9}px`;
    const waveY = `${waveRow * 9}px`;
    const waveMidX = `${waveColumn * 4}px`;
    const waveMidY = `${waveRow * 4}px`;
    animateCell(index, "is-fill-wave", distance * 24, {
      "--effect-color": toColor,
      "--wave-x": waveX,
      "--wave-y": waveY,
      "--wave-mid-x": waveMidX,
      "--wave-mid-y": waveMidY
    }, {
      fromColor,
      toColor,
      durationMs: 500
    });
  });
}

function playHistoryAnimation(before, after, direction) {
  const changed = changedPixelIndices(before, after);
  const button = direction === "undo" ? undoButton : redoButton;
  pulseToolButton(button);
  if (!changed.length || prefersReducedMotion()) return;

  const className = direction === "undo" ? "is-history-undo" : "is-history-redo";
  changed.forEach((index) => {
    const row = Math.floor(index / 9);
    const column = index % 9;
    const diagonal = direction === "undo" ? row + column : 16 - row - column;
    animateCell(index, className, diagonal * 8, {
      "--effect-color": after[index]
    }, {
      fromColor: before[index],
      toColor: after[index],
      durationMs: 380
    });
  });
}

function setClearAnimating(isAnimating) {
  isClearAnimating = isAnimating;
  editorGrid.classList.toggle("is-clearing", isAnimating);
  clearButton.disabled = isAnimating;
  updateHistoryButtons();
}

function finishClearAnimation() {
  clearTimeout(clearAnimationTimer);
  renderEditor();
  setClearAnimating(false);
  showToast("キャンバスを空にしました");
}

function playClearDropAnimation(before) {
  pulseToolButton(clearButton);

  if (prefersReducedMotion()) {
    finishClearAnimation();
    return;
  }

  let maxDelay = 0;
  before.forEach((color, index) => {
    if (color.toLowerCase() === EMPTY_COLOR) return;

    const row = Math.floor(index / 9);
    const column = index % 9;
    const delay = row * 22 + ((column * 17) % 43);
    const dropX = `${(column - 4) * 5}px`;
    const fallDistance = `${112 + row * 9}px`;
    const tilt = `${(column % 2 === 0 ? -1 : 1) * (45 + row * 4)}deg`;
    maxDelay = Math.max(maxDelay, delay);

    const cell = editorGrid.children[index];
    if (cell) {
      cell.style.setProperty("--pixel-color", color);
      cell.style.backgroundColor = color;
    }
    animateCell(index, "is-clear-drop", delay, {
      "--drop-x": dropX,
      "--fall-distance": fallDistance,
      "--cell-tilt": tilt
    });
  });

  clearAnimationTimer = setTimeout(finishClearAnimation, maxDelay + 680);
}

function paintIndex(index) {
  if (!Number.isInteger(index) || index < 0 || index >= 81 || lastPaintedIndex === index) return false;
  lastPaintedIndex = index;
  const nextColor = isErasing ? EMPTY_COLOR : selectedColor;
  const previousColor = pixels[index];
  if (pixels[index] === nextColor) return false;

  pixels[index] = nextColor;
  const cell = editorGrid.children[index];
  if (cell) {
    cell.style.setProperty("--pixel-color", nextColor);
    const column = index % 9;
    const row = Math.floor(index / 9);
    const eraseDirection = column % 2 === 0 ? -1 : 1;
    animateCell(index, isErasing ? "is-erased" : "is-painted", 0, {
      "--effect-color": isErasing ? previousColor : nextColor,
      "--pop-x": `${((column % 3) - 1) * 4}px`,
      "--pop-y": `${-8 - (row % 3) * 2}px`,
      "--erase-x": `${eraseDirection * 7}px`,
      "--erase-mid-x": `${eraseDirection * 3}px`
    }, {
      fromColor: previousColor,
      toColor: nextColor,
      durationMs: isErasing ? 360 : 300
    });
  }
  if (!isErasing) notifyTutorialDrawingProgress();
  return true;
}

function floodFill(index) {
  if (!Number.isInteger(index) || index < 0 || index >= 81) return [];
  const targetColor = pixels[index];
  const nextColor = selectedColor;
  if (targetColor === nextColor) return [];

  const queue = [index];
  const visited = new Set();
  const filledIndices = [];
  while (queue.length) {
    const current = queue.shift();
    if (visited.has(current) || pixels[current] !== targetColor) continue;
    visited.add(current);
    filledIndices.push(current);
    pixels[current] = nextColor;
    const row = Math.floor(current / 9);
    const column = current % 9;
    if (row > 0) queue.push(current - 9);
    if (row < 8) queue.push(current + 9);
    if (column > 0) queue.push(current - 1);
    if (column < 8) queue.push(current + 1);
  }

  renderEditor();
  playBucketFillAnimation(index, filledIndices, targetColor, nextColor);
  if (nextColor !== EMPTY_COLOR) notifyTutorialDrawingProgress();
  return filledIndices;
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
  undoButton.disabled = isClearAnimating || undoStack.length === 0;
  redoButton.disabled = isClearAnimating || redoStack.length === 0;
}

function undo() {
  if (!undoStack.length || isClearAnimating) return;
  const before = pixels.slice();
  redoStack.push(before);
  pixels = undoStack.pop();
  renderEditor();
  playHistoryAnimation(before, pixels, "undo");
}

function redo() {
  if (!redoStack.length || isClearAnimating) return;
  const before = pixels.slice();
  undoStack.push(before);
  pixels = redoStack.pop();
  renderEditor();
  playHistoryAnimation(before, pixels, "redo");
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
  if (tutorialStep === "draw" || tutorialStep === "tags") tutorialStep = "exchange";
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
  makeGrid(document.querySelector("#waiting-incoming-preview"), blankPixels());
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
  const longestStreak = calculateLongestStreak(records);
  const summary = document.querySelector("#collection-summary");
  summary.textContent = records.length
    ? `使った色は${colors.size}色。最長${longestStreak}日連続で保存しています。`
    : "保存した絵日記がここにまとまります。";

  const stamps = document.querySelector("#collection-stamps");
  stamps.innerHTML = "";
  if (!tags.length) {
    const empty = document.createElement("span");
    empty.className = "collection-empty";
    empty.textContent = "タグを付けて保存すると、ここにタグが表示されます。";
    stamps.appendChild(empty);
    return;
  }

  tags.slice(0, 5).forEach((tag, index) => {
    const stamp = document.createElement("span");
    stamp.className = "collection-stamp";
    stamp.style.setProperty("--stamp-color", BASIC_PALETTE[(index + 5) % BASIC_PALETTE.length]);
    stamp.textContent = `#${tag}`;
    stamps.appendChild(stamp);
  });
}

function renderRecords() {
  const list = document.querySelector("#record-list");
  const empty = document.querySelector("#record-empty");
  const calendar = document.querySelector("#record-calendar");
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
  document.querySelector("#record-list-title").textContent = `${recordMonthDate.getMonth() + 1}月の絵日記　${records.length}件`;
  clearFilterButton.hidden = !recordFilterTag;

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
    card.addEventListener("click", (event) => {
      if (event.target.closest(".record-tag-button")) return;
      openRecordDetail(record);
    });

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
    const weekday = recordDate
      ? new Intl.DateTimeFormat("ja-JP", { weekday: "short" }).format(recordDate)
      : "";
    time.textContent = recordDate ? `${recordDate.getDate()}（${weekday}）` : record.date;
    meta.append(time);
    openButton.append(frame, meta);

    const tags = document.createElement("div");
    tags.className = "record-tag-actions";
    const recordTags = record.tags || [];
    recordTags.slice(0, 2).forEach((tag) => {
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
    if (recordTags.length > 2) {
      const more = document.createElement("span");
      more.className = "record-tag-more";
      more.textContent = `+${recordTags.length - 2}`;
      more.setAttribute("aria-label", `ほかに${recordTags.length - 2}個のタグ`);
      tags.appendChild(more);
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

  friends.forEach((sample) => {
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
    const partnerMenu = document.createElement("details");
    partnerMenu.className = "friend-safety-menu";
    const menuToggle = document.createElement("summary");
    menuToggle.textContent = "…";
    menuToggle.setAttribute("aria-label", `${sample.name}さんの操作を開く`);
    const blockButton = document.createElement("button");
    blockButton.className = "friend-block-button";
    blockButton.type = "button";
    blockButton.textContent = "この相手をブロック";
    blockButton.setAttribute("aria-label", `${sample.name}さんをブロックする`);
    blockButton.addEventListener("click", () => blockSample(sample));
    partnerMenu.append(menuToggle, blockButton);
    partnerActions.append(partnerMenu);
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
  detailExportRecord = { pixels: record.pixels.slice(), date: record.date };
  document.querySelector("#detail-kicker").textContent = "保存した絵日記";
  document.querySelector("#detail-title").textContent = "自分の絵日記";
  document.querySelector("#detail-subtitle").textContent = formatRecordDate(record.date);
  makeGrid(document.querySelector("#detail-preview"), record.pixels);
  renderTagRow(document.querySelector("#detail-tags"), record.tags || []);
  document.querySelector("#detail-friend").hidden = true;
  detailExportActions.hidden = false;
  showScreen("detail");
}

function openFriendDetail(sample, work = getSampleWorks(sample)[0]) {
  detailReturnScreen = "friends";
  detailExportRecord = null;
  document.querySelector("#detail-kicker").textContent = "届いた絵日記";
  document.querySelector("#detail-title").textContent = `${sample.name}さんの絵日記`;
  document.querySelector("#detail-subtitle").textContent = `${formatRecordDate(work.date)}に届いた9×9絵日記`;
  makeGrid(document.querySelector("#detail-preview"), work.pixels);
  renderTagRow(document.querySelector("#detail-tags"), work.tags);
  document.querySelector("#detail-avatar").style.setProperty("--avatar", sample.avatar);
  document.querySelector("#detail-friend-name").textContent = sample.name;
  renderTagRow(document.querySelector("#detail-profile-tags"), sample.profileTags, "profile-chip");
  document.querySelector("#detail-friend").hidden = false;
  detailExportActions.hidden = true;
  showScreen("detail");
}

function activeNavTarget(screenName) {
  if (screenName === "tags") return "draw";
  if (screenName === "waiting" || screenName === "result") return "exchange";
  if (screenName === "detail") return detailReturnScreen;
  if (screenName === "settings" || screenName === "tutorial") return "";
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
  appShell.classList.toggle("is-tutorial-active", nextName === "tutorial");
  if (nextName !== "tutorial") setTutorialHeaderLocked(false);
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

  if (nextName === "tutorial") renderTutorialScreen();
  if (nextName === "today") {
    renderToday();
    syncTutorialExchangeTip();
  }
  if (nextName !== "today") syncTutorialExchangeTip();
  if (nextName === "draw") renderEditor();
  if (nextName === "tags") {
    renderTagScreen();
    showTagTutorialTip();
  }
  if (nextName === "exchange") renderExchange();
  if (nextName === "result") renderResult();
  if (nextName === "records") renderRecords();
  if (nextName === "friends") renderFriends();
  if (nextName === "settings") renderSettings();

  if (updateHash && location.hash !== `#${nextName}`) {
    history.pushState({ screen: nextName }, "", `#${nextName}`);
  }
  window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? "auto" : "smooth" });
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

function resetIconClearConfirmation() {
  clearTimeout(iconClearConfirmTimer);
  isIconClearConfirming = false;
  iconClearButton.classList.remove("is-confirming");
  iconClearButton.setAttribute("aria-pressed", "false");
  const label = iconClearButton.querySelector(".clear-symbol + span");
  if (label) label.textContent = "全消し";
}

function askIconClearConfirmation() {
  clearTimeout(iconClearConfirmTimer);
  isIconClearConfirming = true;
  iconClearButton.classList.add("is-confirming");
  iconClearButton.setAttribute("aria-pressed", "true");
  const label = iconClearButton.querySelector(".clear-symbol + span");
  if (label) label.textContent = "もう一度押す";
  showToast("もう一度押すとアイコンを全消しします");
  iconClearConfirmTimer = setTimeout(resetIconClearConfirmation, 3600);
}

function playSaveConfetti() {
  if (prefersReducedMotion()) return;

  const layer = document.createElement("div");
  layer.className = "save-confetti";
  layer.setAttribute("aria-hidden", "true");

  const colors = ["#b66f5d", "#8c9a7d", "#d6b76a", "#f3ead9", "#fffaf1"];
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
  if (isClearAnimating) return;
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
    const filledIndices = floodFill(Number(cell.dataset.index));
    if (filledIndices.length) pushAction(before);
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
  if (!isDrawing || isClearAnimating) return;
  const element = document.elementFromPoint(event.clientX, event.clientY);
  const cell = element?.closest(".pixel-cell");
  if (!cell || !editorGrid.contains(cell)) return;
  strokeChanged = paintIndex(Number(cell.dataset.index)) || strokeChanged;
});

editorGrid.addEventListener("pointerup", finishStroke);
editorGrid.addEventListener("pointercancel", finishStroke);

editorGrid.addEventListener("keydown", (event) => {
  if (isClearAnimating) return;
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
    const filledIndices = floodFill(Number(cell.dataset.index));
    if (filledIndices.length) pushAction(before);
    return;
  }
  lastPaintedIndex = -1;
  if (paintIndex(Number(cell.dataset.index))) pushAction(before);
  lastPaintedIndex = -1;
});

iconEditorGrid.addEventListener("pointerdown", (event) => {
  const cell = event.target.closest(".pixel-cell");
  if (!cell || !iconEditorGrid.contains(cell)) return;
  event.preventDefault();
  if (isIconEyedropper) {
    useIconEyedropper(Number(cell.dataset.index));
    return;
  }
  if (isIconBucketFill) {
    const before = iconPixels.slice();
    const filledIndices = floodFillIcon(Number(cell.dataset.index));
    if (filledIndices.length) pushIconAction(before);
    return;
  }
  isIconDrawing = true;
  iconStrokeBefore = iconPixels.slice();
  iconStrokeChanged = false;
  lastIconPaintedIndex = -1;
  iconStrokeChanged = paintIconIndex(Number(cell.dataset.index)) || iconStrokeChanged;
  iconEditorGrid.setPointerCapture?.(event.pointerId);
});

iconEditorGrid.addEventListener("pointermove", (event) => {
  if (!isIconDrawing) return;
  const element = document.elementFromPoint(event.clientX, event.clientY);
  const cell = element?.closest(".pixel-cell");
  if (!cell || !iconEditorGrid.contains(cell)) return;
  iconStrokeChanged = paintIconIndex(Number(cell.dataset.index)) || iconStrokeChanged;
});

iconEditorGrid.addEventListener("pointerup", finishIconStroke);
iconEditorGrid.addEventListener("pointercancel", finishIconStroke);

iconEditorGrid.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" && event.key !== " ") return;
  const cell = event.target.closest(".pixel-cell");
  if (!cell) return;
  event.preventDefault();
  if (isIconEyedropper) {
    useIconEyedropper(Number(cell.dataset.index));
    return;
  }
  const before = iconPixels.slice();
  if (isIconBucketFill) {
    const filledIndices = floodFillIcon(Number(cell.dataset.index));
    if (filledIndices.length) pushIconAction(before);
    return;
  }
  lastIconPaintedIndex = -1;
  if (paintIconIndex(Number(cell.dataset.index))) pushIconAction(before);
  lastIconPaintedIndex = -1;
});

document.addEventListener("pointerup", finishStroke);
document.addEventListener("pointercancel", finishStroke);
document.addEventListener("pointerup", finishIconStroke);
document.addEventListener("pointercancel", finishIconStroke);

undoButton.addEventListener("click", undo);
redoButton.addEventListener("click", redo);

eraserButton.addEventListener("click", () => {
  resetClearConfirmation();
  isErasing = !isErasing;
  isEyedropper = false;
  isBucketFill = false;
  pulseToolButton(eraserButton);
  eraserButton.classList.toggle("is-active", isErasing);
  eraserButton.setAttribute("aria-pressed", String(isErasing));
  eyedropperButton.classList.remove("is-active");
  eyedropperButton.setAttribute("aria-pressed", "false");
  bucketButton.classList.remove("is-active");
  bucketButton.setAttribute("aria-pressed", "false");
  document.querySelectorAll("#palette .color-swatch").forEach((swatch) => {
    swatch.classList.toggle("is-selected", !isErasing && swatch.dataset.color === selectedColor);
  });
});

eyedropperButton.addEventListener("click", () => {
  resetClearConfirmation();
  isEyedropper = !isEyedropper;
  isErasing = false;
  isBucketFill = false;
  pulseToolButton(eyedropperButton);
  eyedropperButton.classList.toggle("is-active", isEyedropper);
  eyedropperButton.setAttribute("aria-pressed", String(isEyedropper));
  eraserButton.classList.remove("is-active");
  eraserButton.setAttribute("aria-pressed", "false");
  bucketButton.classList.remove("is-active");
  bucketButton.setAttribute("aria-pressed", "false");
  document.querySelectorAll("#palette .color-swatch").forEach((swatch) => {
    swatch.classList.toggle("is-selected", !isEyedropper && swatch.dataset.color === selectedColor);
  });
  if (isEyedropper) showToast("色を取りたいマスをタップしてください");
});

bucketButton.addEventListener("click", () => {
  resetClearConfirmation();
  isBucketFill = !isBucketFill;
  isErasing = false;
  isEyedropper = false;
  pulseToolButton(bucketButton);
  bucketButton.classList.toggle("is-active", isBucketFill);
  bucketButton.setAttribute("aria-pressed", String(isBucketFill));
  eraserButton.classList.remove("is-active");
  eraserButton.setAttribute("aria-pressed", "false");
  eyedropperButton.classList.remove("is-active");
  eyedropperButton.setAttribute("aria-pressed", "false");
  if (isBucketFill) showToast("まとめて塗りたい範囲をタップしてください");
});

paletteToggleButton.addEventListener("click", togglePalettePanel);
iconPaletteToggleButton.addEventListener("click", toggleIconPalettePanel);

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
  setClearAnimating(true);
  resetClearConfirmation();
  pixels = blankPixels();
  pushAction(before);
  playClearDropAnimation(before);
});

customColorInput.addEventListener("input", (event) => {
  selectColor(event.target.value, { source: "custom" });
});
addCustomColorButton.addEventListener("click", addSelectedColorToCustomPalette);
removeCustomColorButton.addEventListener("click", removeSelectedCustomColor);
iconCustomColorInput.addEventListener("input", (event) => {
  selectIconColor(event.target.value, { source: "custom" });
});
iconAddCustomColorButton.addEventListener("click", addSelectedIconColorToCustomPalette);
iconRemoveCustomColorButton.addEventListener("click", removeSelectedIconCustomColor);

iconEditToggle.addEventListener("click", () => {
  setIconEditorOpen(iconEditorPanel.hidden);
});
profileNameInput.addEventListener("input", (event) => {
  state.profileName = event.target.value.trim().slice(0, 12) || "わたし";
  saveState();
});
profileTagAddButton.addEventListener("click", addProfileTagFromInput);
profileTagInput.addEventListener("keydown", (event) => {
  if (event.key !== "Enter") return;
  event.preventDefault();
  addProfileTagFromInput();
});
reduceMotionToggle.addEventListener("click", () => {
  state.reduceMotion = !state.reduceMotion;
  saveState();
  applyUserPreferences();
  renderSettingsToggles();
});
gridToggle.addEventListener("click", () => {
  state.showGrid = !state.showGrid;
  saveState();
  applyUserPreferences();
  renderSettingsToggles();
});
document.querySelectorAll("[data-settings-action]").forEach((button) => {
  button.addEventListener("click", () => handleSettingsAction(button.dataset.settingsAction));
});
iconUndoButton.addEventListener("click", undoIcon);
iconRedoButton.addEventListener("click", redoIcon);
iconEraserButton.addEventListener("click", () => {
  resetIconClearConfirmation();
  isIconErasing = !isIconErasing;
  isIconEyedropper = false;
  isIconBucketFill = false;
  updateIconToolState();
  renderIconPalette();
});
iconEyedropperButton.addEventListener("click", () => {
  resetIconClearConfirmation();
  isIconEyedropper = !isIconEyedropper;
  isIconErasing = false;
  isIconBucketFill = false;
  updateIconToolState();
  renderIconPalette();
  if (isIconEyedropper) showToast("色を取りたいマスをタップしてください");
});
iconBucketButton.addEventListener("click", () => {
  resetIconClearConfirmation();
  isIconBucketFill = !isIconBucketFill;
  isIconErasing = false;
  isIconEyedropper = false;
  updateIconToolState();
  renderIconPalette();
  if (isIconBucketFill) showToast("まとめて塗りたい範囲をタップしてください");
});
iconClearButton.addEventListener("click", clearProfileIconDraft);
iconSaveButton.addEventListener("click", saveProfileIcon);
tutorialIconSkipButton.addEventListener("click", startTutorialDrawing);
tutorialDrawButton.addEventListener("click", startTutorialDrawing);
document.querySelector("#draw-tutorial-tip-close").addEventListener("click", () => {
  drawTutorialTip.hidden = true;
});
document.querySelector("#tag-tutorial-tip-close").addEventListener("click", () => {
  tagTutorialTip.hidden = true;
});
document.querySelector("#tutorial-exchange-ack").addEventListener("click", completeTutorial);

document.querySelector("#go-tags-button").addEventListener("click", () => {
  selectedTags = state.todaySaved ? state.todayTags.slice() : selectedTags;
  showScreen("tags");
});

document.querySelector("#tags-back-button").addEventListener("click", () => showScreen("draw"));
document.querySelector("#final-save-button").addEventListener("click", saveTodayDiary);
document.querySelector("#today-draw-button").addEventListener("click", () => showScreen("draw"));
document.querySelector("#today-exchange-button").addEventListener("click", () => showScreen("exchange"));
todayPngSaveButton.addEventListener("click", () => confirmDiaryPng(state.todayPixels, state.dateKey));

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
detailPngSaveButton.addEventListener("click", () => {
  if (detailExportRecord) confirmDiaryPng(detailExportRecord.pixels, detailExportRecord.date);
});
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
document.querySelector("#settings-button").addEventListener("click", () => showScreen("settings"));
document.querySelector("#settings-back-button").addEventListener("click", () => showScreen("today"));

navItems.forEach((item) => {
  item.addEventListener("click", () => showScreen(item.dataset.target));
});

window.addEventListener("popstate", (event) => {
  const hashName = location.hash.replace("#", "");
  showScreen(event.state?.screen || hashName || "today", false);
});

window.addEventListener("resize", positionTutorialExchangeSpotlight);

renderLogo();
renderProfileIcon();
applyUserPreferences();
renderPalette();
updatePalettePanelState();
renderRecords();
renderFriends();

const requestedScreen = location.hash.replace("#", "");
const requestedInitialScreen = requestedScreen === "home"
  ? "today"
  : requestedScreen === "partners"
    ? "friends"
    : requestedScreen === "detail"
      ? "records"
      : requestedScreen === "tutorial"
        ? "today"
        : requestedScreen || "today";
const initialScreen = isTutorialCompleted() ? requestedInitialScreen : "tutorial";
history.replaceState({ screen: initialScreen }, "", `#${initialScreen}`);
showScreen(initialScreen, false);
