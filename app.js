const dailyData = [
  {
    date: "2026-06-27",
    rooms: {
      beauty: {
        name: "美妆个护专场",
        cost: 38200,
        impressions: 892000,
        clicks: 51200,
        enters: 23600,
        viewers: 18600,
        interactions: 4680,
        orders: 1460,
        gmv: 198600,
        avgOrder: 136,
        female: 72,
        age: { "18-24": 18, "25-34": 42, "35-44": 28, "45+": 12 },
        cities: { 一线: 31, 新一线: 36, 二线: 21, 三线及以下: 12 },
        interests: { 敏感肌护理: 38, 彩妆新品: 29, 成分党: 21, 礼盒囤货: 12 },
      },
      fashion: {
        name: "轻奢穿搭专场",
        cost: 29100,
        impressions: 641000,
        clicks: 31800,
        enters: 12100,
        viewers: 9600,
        interactions: 2180,
        orders: 610,
        gmv: 157300,
        avgOrder: 258,
        female: 64,
        age: { "18-24": 15, "25-34": 39, "35-44": 32, "45+": 14 },
        cities: { 一线: 38, 新一线: 34, 二线: 18, 三线及以下: 10 },
        interests: { 通勤穿搭: 33, 轻奢配饰: 31, 显瘦版型: 24, 会员折扣: 12 },
      },
      food: {
        name: "健康食品专场",
        cost: 18600,
        impressions: 512000,
        clicks: 20700,
        enters: 9700,
        viewers: 7800,
        interactions: 1640,
        orders: 520,
        gmv: 68200,
        avgOrder: 131,
        female: 58,
        age: { "18-24": 12, "25-34": 31, "35-44": 36, "45+": 21 },
        cities: { 一线: 21, 新一线: 32, 二线: 29, 三线及以下: 18 },
        interests: { 控糖低脂: 34, 家庭囤货: 26, 营养早餐: 25, 送礼: 15 },
      },
    },
  },
  {
    date: "2026-06-28",
    rooms: {
      beauty: makeRoom("美妆个护专场", 40700, 935000, 54800, 26200, 20500, 5520, 1680, 231800, 138, 74),
      fashion: makeRoom("轻奢穿搭专场", 31800, 676000, 34600, 13200, 10200, 2540, 690, 181200, 263, 66),
      food: makeRoom("健康食品专场", 20100, 538000, 22400, 10300, 8100, 1880, 570, 75500, 132, 59),
    },
  },
  {
    date: "2026-06-29",
    rooms: {
      beauty: makeRoom("美妆个护专场", 42400, 972000, 57600, 28100, 22100, 6120, 1820, 255600, 140, 73),
      fashion: makeRoom("轻奢穿搭专场", 30200, 652000, 32100, 12800, 9800, 2360, 640, 170800, 267, 65),
      food: makeRoom("健康食品专场", 22600, 579000, 24700, 11600, 9100, 2180, 650, 87800, 135, 61),
    },
  },
  {
    date: "2026-06-30",
    rooms: {
      beauty: makeRoom("美妆个护专场", 45100, 1016000, 62100, 30500, 23800, 6930, 1980, 286400, 145, 75),
      fashion: makeRoom("轻奢穿搭专场", 34100, 716000, 37900, 15100, 11800, 3120, 780, 216700, 278, 68),
      food: makeRoom("健康食品专场", 24700, 624000, 28200, 13200, 10300, 2590, 760, 105400, 139, 62),
    },
  },
  {
    date: "2026-07-01",
    rooms: {
      beauty: makeRoom("美妆个护专场", 49200, 1082000, 68200, 34200, 26700, 7640, 2240, 329200, 147, 76),
      fashion: makeRoom("轻奢穿搭专场", 37200, 771000, 42100, 16900, 13200, 3440, 880, 250800, 285, 69),
      food: makeRoom("健康食品专场", 26800, 669000, 31300, 14800, 11600, 2980, 850, 122200, 144, 63),
    },
  },
  {
    date: "2026-07-02",
    rooms: {
      beauty: makeRoom("美妆个护专场", 53800, 1147000, 73600, 36800, 28900, 8420, 2420, 361600, 149, 77),
      fashion: makeRoom("轻奢穿搭专场", 38900, 812000, 45200, 18100, 14100, 3920, 960, 282400, 294, 70),
      food: makeRoom("健康食品专场", 29100, 712000, 34200, 16300, 12900, 3340, 940, 137900, 147, 64),
    },
  },
  {
    date: "2026-07-03",
    rooms: {
      beauty: makeRoom("美妆个护专场", 56400, 1189000, 76900, 38600, 30400, 8960, 2580, 389400, 151, 78),
      fashion: makeRoom("轻奢穿搭专场", 41200, 846000, 48100, 19700, 15400, 4310, 1060, 321100, 303, 71),
      food: makeRoom("健康食品专场", 30600, 748000, 36100, 17400, 13800, 3670, 1010, 151800, 150, 65),
    },
  },
];

const platformSpendRows = window.platformSpendRows || [];
const liveAccountRelations = window.liveAccountRelations || [];
// 直播基础数据以电商罗盘为唯一数据源，不再混入已废弃的飞书直播表。
const liveRoomRows = window.douyinCompassLiveRows || [];
const audienceProfileRows = window.audienceProfileRows || [];
const spendDates = platformSpendRows.map((row) => row.date).sort();
const liveDates = liveRoomRows.map((row) => row.date).filter(Boolean).sort();
const audienceDates = audienceProfileRows.map((row) => row.date).filter(Boolean).sort();
const latestSpendDate = spendDates[spendDates.length - 1];
const latestLiveDate = liveDates[liveDates.length - 1];
const latestAudienceDate = audienceDates[audienceDates.length - 1];
const latestAvailableDate = [latestSpendDate, latestLiveDate, latestAudienceDate, dailyData[dailyData.length - 1].date]
  .filter(Boolean)
  .sort()
  .at(-1);
const earliestAvailableDate = [...dailyData.map((day) => day.date), ...spendDates, ...liveDates, ...audienceDates].sort()[0] || latestAvailableDate;
const defaultAccountFields = [
  "platform",
  "name",
  "accountCount",
];

const state = {
  granularity: "day",
  date: latestAvailableDate,
  month: latestAvailableDate.slice(0, 7),
  customStart: earliestAvailableDate,
  customEnd: latestAvailableDate,
  pendingStart: earliestAvailableDate,
  pendingEnd: latestAvailableDate,
  room: "all",
  roomMenuPlatform: "",
  platform: "all",
  accountDimension: "project",
  accountPlatform: "all",
  accountPlatformSource: "all",
  accountProject: "all",
  accountSearch: "",
  accountSort: "cost-desc",
  accountPositiveOnly: false,
  accountVisibleFields: [...defaultAccountFields],
  selectedAccountKey: "",
  audienceAccount: "all",
  audienceAccountPlatform: "小红书",
  audienceAccountRoom: "",
  metric: "cost",
  calendarMonth: latestAvailableDate.slice(0, 7),
  calendarSelectingEnd: false,
  view: "room",
};

const colors = ["#1e40af", "#0f766e", "#c2410c", "#a16207"];

const accountColumnWidths = {
  platform: 170,
  name: 420,
  accountCount: 210,
  dimensionId: 220,
  cost: 170,
};

const accountFieldOptions = [
  { key: "platform", label: "平台", group: "基础字段" },
  { key: "name", label: "项目", group: "基础字段" },
  { key: "accountCount", label: "投放账户数量", group: "基础字段" },
  { key: "dimensionId", label: "项目/账号ID", group: "基础字段" },
  { key: "projectCount", label: "关联项目", group: "基础字段" },
  { key: "dateRange", label: "日期范围", group: "基础字段" },
  { key: "cost", label: "消耗", group: "投放效果" },
  { key: "impressions", label: "曝光", group: "投放效果" },
  { key: "clicks", label: "点击", group: "投放效果" },
  { key: "ctr", label: "CTR", group: "投放效果" },
  { key: "cpc", label: "CPC", group: "投放效果" },
  { key: "cpm", label: "CPM", group: "投放效果" },
  { key: "share", label: "占比", group: "投放效果" },
  { key: "likes", label: "点赞", group: "互动指标" },
  { key: "comments", label: "评论", group: "互动指标" },
  { key: "favorites", label: "收藏", group: "互动指标" },
  { key: "follows", label: "关注", group: "互动指标" },
  { key: "shares", label: "分享", group: "互动指标" },
  { key: "interactions", label: "互动数", group: "互动指标" },
  { key: "interactionRate", label: "互动率", group: "互动指标" },
  { key: "source", label: "来源", group: "来源备注" },
  { key: "rawPlatform", label: "原始平台", group: "来源备注" },
  { key: "company", label: "主体公司", group: "来源备注" },
  { key: "updatedAt", label: "更新时间", group: "来源备注" },
  { key: "note", label: "备注", group: "来源备注" },
];

const accountFieldPresets = {
  basic: ["platform", "name", "accountCount"],
  performance: [
    "platform",
    "name",
    "accountCount",
    "cost",
    "impressions",
    "clicks",
    "ctr",
    "cpc",
    "cpm",
    "interactions",
    "interactionRate",
  ],
};

const platformSourceConfig = {
  xhs_juguang: "聚光",
  xhs_chengfeng: "乘风",
};

const accountRelationByPlatformId = liveAccountRelations.reduce((output, item) => {
  const platform = normalizeValue(item.platform);
  const accountId = normalizeValue(item.accountId);
  if (platform && accountId) output.set(`${platform}::${accountId}`, item);
  return output;
}, new Map());

const projectRelationByPlatformId = liveAccountRelations.reduce((output, item) => {
  const platform = normalizeValue(item.platform);
  const projectId = normalizeValue(item.projectId);
  if (platform && projectId) output.set(`${platform}::${projectId}`, item);
  return output;
}, new Map());

function normalizeValue(value) {
  return String(value ?? "").trim();
}

function accountRelationFor(row) {
  const platform = normalizeValue(row.platform);
  const accountId = normalizeValue(row.accountId);
  const projectId = normalizeValue(row.projectId);
  if (platform && projectId) {
    const projectRelation = projectRelationByPlatformId.get(`${platform}::${projectId}`);
    if (projectRelation) return projectRelation;
  }
  return accountRelationByPlatformId.get(`${platform}::${accountId}`) || null;
}

function relatedProjectName(row) {
  return normalizeValue(accountRelationFor(row)?.projectName) || normalizeValue(row.projectName) || normalizeValue(row.projectId) || "-";
}

function relatedProjectId(row) {
  return normalizeValue(accountRelationFor(row)?.projectName) || normalizeValue(row.projectId) || relatedProjectName(row);
}

function relatedAccountName(row) {
  return normalizeValue(accountRelationFor(row)?.accountName) || normalizeValue(row.accountName) || normalizeValue(row.accountId) || "-";
}

function relatedAccountId(row) {
  return normalizeValue(accountRelationFor(row)?.accountId) || normalizeValue(row.accountId) || "-";
}

function relatedLiveRoomName(row) {
  return normalizeValue(accountRelationFor(row)?.liveRoomName);
}

function relatedChannelCode(row) {
  return normalizeValue(accountRelationFor(row)?.channelCode);
}

const metricKeys = [
  "impressions",
  "clicks",
  "likes",
  "comments",
  "favorites",
  "follows",
  "shares",
  "interactions",
];

const platformConfig = {
  all: {
    label: "全部平台",
    source: "聚合",
    status: "已汇总",
    note: "用于看整体画像趋势，正式接入后会按平台授权数据汇总。",
  },
  xiaohongshu: {
    label: "小红书",
    source: "蒲公英 / 聚光",
    status: "待授权",
    note: "适合接入种草互动、兴趣标签、城市层级和年龄数据。",
    weight: 0.38,
    femaleDelta: 8,
    age: { "18-24": 6, "25-34": 7, "35-44": -8, "45+": -5 },
    cities: { 一线: 5, 新一线: 4, 二线: -2, 三线及以下: -7 },
    interests: { 敏感肌护理: 5, 彩妆新品: 7, 成分党: 4, 通勤穿搭: 4, 轻奢配饰: 5, 控糖低脂: 2 },
  },
  wechat: {
    label: "视频号",
    source: "视频号助手 / 广告平台",
    status: "待授权",
    note: "适合接入直播观看、互动、粉丝沉淀和私域转化数据。",
    weight: 0.27,
    femaleDelta: 1,
    age: { "18-24": -4, "25-34": -1, "35-44": 4, "45+": 1 },
    cities: { 一线: -2, 新一线: 1, 二线: 4, 三线及以下: -3 },
    interests: { 家庭囤货: 5, 营养早餐: 5, 会员折扣: 3, 礼盒囤货: 4, 送礼: 4 },
  },
  juliang: {
    label: "巨量引擎",
    source: "巨量引擎 / 抖店罗盘",
    status: "路径确认中",
    note: "入口已演示到直播概览，明细下载口径后续继续确认后再正式接入。",
    weight: 0.35,
    femaleDelta: -5,
    age: { "18-24": 2, "25-34": -3, "35-44": 3, "45+": -2 },
    cities: { 一线: -4, 新一线: -2, 二线: 5, 三线及以下: 1 },
    interests: { 显瘦版型: 4, 控糖低脂: 5, 家庭囤货: 3, 敏感肌护理: -2, 彩妆新品: -2 },
  },
};

const accountConfig = [
  { platform: "小红书", account: "小红书-品牌种草账户", share: 0.22, roiDelta: 0.95, status: "稳投" },
  { platform: "小红书", account: "小红书-直播预约账户", share: 0.16, roiDelta: 1.08, status: "放量" },
  { platform: "视频号", account: "视频号-私域加热账户", share: 0.17, roiDelta: 1.12, status: "放量" },
  { platform: "视频号", account: "视频号-直播引流账户", share: 0.1, roiDelta: 0.88, status: "观察" },
  { platform: "巨量引擎", account: "巨量-千川直播间账户", share: 0.23, roiDelta: 1.02, status: "稳投" },
  { platform: "巨量引擎", account: "巨量-短视频引流账户", share: 0.12, roiDelta: 0.82, status: "控本" },
];

function makeRoom(name, cost, impressions, clicks, enters, viewers, interactions, orders, gmv, avgOrder, female) {
  const isBeauty = name.includes("美妆");
  const isFashion = name.includes("穿搭");
  return {
    name,
    cost,
    impressions,
    clicks,
    enters,
    viewers,
    interactions,
    orders,
    gmv,
    avgOrder,
    female,
    age: isBeauty
      ? { "18-24": 18, "25-34": 43, "35-44": 27, "45+": 12 }
      : isFashion
        ? { "18-24": 15, "25-34": 40, "35-44": 31, "45+": 14 }
        : { "18-24": 12, "25-34": 32, "35-44": 35, "45+": 21 },
    cities: isBeauty
      ? { 一线: 32, 新一线: 36, 二线: 21, 三线及以下: 11 }
      : isFashion
        ? { 一线: 39, 新一线: 34, 二线: 18, 三线及以下: 9 }
        : { 一线: 22, 新一线: 32, 二线: 29, 三线及以下: 17 },
    interests: isBeauty
      ? { 敏感肌护理: 39, 彩妆新品: 28, 成分党: 21, 礼盒囤货: 12 }
      : isFashion
        ? { 通勤穿搭: 34, 轻奢配饰: 31, 显瘦版型: 24, 会员折扣: 11 }
        : { 控糖低脂: 35, 家庭囤货: 26, 营养早餐: 24, 送礼: 15 },
  };
}

function init() {
  const dateSelect = document.querySelector("#dateSelect");
  const dateRangeTrigger = document.querySelector("#dateRangeTrigger");
  renderDateOptions();
  renderRoomOptions();

  document.querySelector("#periodSelect").addEventListener("change", (event) => {
    state.granularity = event.target.value;
    renderDateOptions();
    renderAccountDimensionPicker();
    render();
  });

  dateSelect.addEventListener("change", (event) => {
    state.date = event.target.value;
    state.month = state.date.slice(0, 7);
    renderAccountDimensionPicker();
    render();
  });

  dateRangeTrigger.addEventListener("click", () => toggleDateRangePopover());
  document.querySelector("#applyDateRange").addEventListener("click", applyCustomDateRange);
  document.querySelector("#cancelDateRange").addEventListener("click", closeDateRangePopover);
  document.querySelector("#previousCalendarYear").addEventListener("click", () => shiftCalendarView(-12));
  document.querySelector("#previousCalendarMonth").addEventListener("click", () => shiftCalendarView(-1));
  document.querySelector("#nextCalendarMonth").addEventListener("click", () => shiftCalendarView(1));
  document.querySelector("#nextCalendarYear").addEventListener("click", () => shiftCalendarView(12));
  document.querySelector("#dateCalendars").addEventListener("click", (event) => {
    const button = event.target.closest("[data-calendar-date]");
    if (!button || button.disabled) return;
    event.stopPropagation();
    selectCalendarDate(button.dataset.calendarDate);
  });
  document.querySelectorAll("[data-range-shortcut]").forEach((button) => {
    button.addEventListener("click", () => applyDateShortcut(button.dataset.rangeShortcut));
  });

  document.querySelector("#roomTrigger").addEventListener("click", toggleRoomMenu);
  document.querySelector("#roomMenu").addEventListener("click", (event) => {
    const roomButton = event.target.closest("[data-room-value]");
    if (roomButton) {
      selectRoom(decodeURIComponent(roomButton.dataset.roomValue));
      return;
    }
    const platformButton = event.target.closest("[data-room-platform]");
    if (!platformButton) return;
    const platformItem = platformButton.closest(".room-platform-item");
    state.roomMenuPlatform = platformButton.dataset.roomPlatform;
    document.querySelectorAll(".room-platform-item").forEach((item) => {
      item.classList.toggle("selected", item === platformItem);
    });
    document.querySelectorAll(".room-platform-item.open").forEach((item) => {
      if (item !== platformItem) item.classList.remove("open");
    });
    platformItem.classList.toggle("open");
    platformButton.setAttribute("aria-expanded", String(platformItem.classList.contains("open")));
  });

  document.querySelector("#audienceAccountTrigger").addEventListener("click", toggleAudienceAccountMenu);
  document.querySelector("#audienceAccountMenu").addEventListener("click", (event) => {
    const accountButton = event.target.closest("[data-audience-account]");
    if (accountButton) {
      selectAudienceAccount(decodeURIComponent(accountButton.dataset.audienceAccount));
      return;
    }
    const roomButton = event.target.closest("[data-audience-account-room]");
    if (roomButton) {
      state.audienceAccountRoom = decodeURIComponent(roomButton.dataset.audienceAccountRoom);
      renderAudienceAccountPicker();
      return;
    }
    const platformButton = event.target.closest("[data-audience-account-platform]");
    if (!platformButton) return;
    state.audienceAccountPlatform = decodeURIComponent(platformButton.dataset.audienceAccountPlatform);
    state.audienceAccountRoom = "";
    renderAudienceAccountPicker();
  });

  document.querySelector("#accountDimensionTrigger").addEventListener("click", () => {
    toggleDimensionMenu();
  });

  document.querySelector("#accountDimensionMenu").addEventListener("click", (event) => {
    const item = event.target.closest("[data-dimension-action]");
    if (!item) return;
    if (item.dataset.dimensionAction === "account") {
      selectAccountDimension("account", "all");
      return;
    }
    if (item.dataset.dimensionAction === "project-all") {
      selectAccountDimension("project", "all");
      return;
    }
    if (item.dataset.dimensionAction === "project") {
      selectAccountDimension("project", decodeURIComponent(item.dataset.project));
    }
  });

  document.addEventListener("click", (event) => {
    if (!event.target.closest("#accountDimensionPicker")) closeDimensionMenu();
    if (!event.target.closest("#accountPlatformPicker")) closePlatformMenu();
    if (!event.target.closest("#customDateRange")) closeDateRangePopover();
    if (!event.target.closest("#roomPicker")) closeRoomMenu();
    if (!event.target.closest("#audienceAccountPicker")) closeAudienceAccountMenu();
  });

  document.querySelector("#accountPlatformTrigger").addEventListener("click", () => {
    togglePlatformMenu();
  });

  document.querySelector("#accountPlatformMenu").addEventListener("click", (event) => {
    const item = event.target.closest("[data-platform-action]");
    if (!item) return;
    selectAccountPlatform(item.dataset.platform, item.dataset.source || "all");
  });

  document.querySelector("#accountSearchInput").addEventListener("input", (event) => {
    state.accountSearch = event.target.value.trim();
    state.selectedAccountKey = "";
    renderSummary();
    renderAccountDetails();
  });

  document.querySelector("#accountSortSelect").addEventListener("change", (event) => {
    state.accountSort = event.target.value;
    renderSummary();
    renderAccountDetails();
  });

  document.querySelector("#accountPositiveOnly").addEventListener("change", (event) => {
    state.accountPositiveOnly = event.target.checked;
    state.selectedAccountKey = "";
    renderAccountDimensionPicker();
    renderSummary();
    renderAccountDetails();
  });

  document.querySelector("#refreshButton").addEventListener("click", () => {
    document.body.animate([{ opacity: 0.9 }, { opacity: 1 }], { duration: 200 });
    showToast("数据视图已刷新");
    render();
  });

  document.querySelectorAll(".metric-tab").forEach((button) => {
    button.addEventListener("click", () => {
      state.metric = button.dataset.metric;
      document.querySelectorAll(".metric-tab").forEach((item) => item.classList.toggle("active", item === button));
      renderTrend();
    });
  });

  document.querySelectorAll(".nav-item").forEach((button) => {
    button.addEventListener("click", () => {
      state.view = button.dataset.view;
      render();
    });
  });

  document.querySelector("#exportButton").addEventListener("click", exportCsv);
  document.querySelector("#exportAccountButton").addEventListener("click", exportAccountCsv);
  document.querySelector("#fieldConfigButton").addEventListener("click", openFieldConfigModal);
  document.querySelector("#closeFieldConfig").addEventListener("click", closeFieldConfigModal);
  document.querySelector("#applyFieldConfig").addEventListener("click", closeFieldConfigModal);
  document.querySelector("#resetFieldConfig").addEventListener("click", () => {
    state.accountVisibleFields = [...defaultAccountFields];
    renderFieldConfigOptions();
    renderAccountDetails();
    showToast("字段已恢复默认");
  });
  document.querySelector("#basicFieldPreset").addEventListener("click", () => applyFieldPreset("basic"));
  document.querySelector("#performanceFieldPreset").addEventListener("click", () => applyFieldPreset("performance"));
  document.querySelectorAll("[data-close-field-config]").forEach((item) => {
    item.addEventListener("click", closeFieldConfigModal);
  });
  document.querySelector("#closeAccountDetail").addEventListener("click", closeAccountDetailModal);
  document.querySelectorAll("[data-close-account-detail]").forEach((item) => {
    item.addEventListener("click", closeAccountDetailModal);
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeAccountDetailModal();
      closeFieldConfigModal();
      closeDateRangePopover();
      closeRoomMenu();
      closeAudienceAccountMenu();
    }
  });
  render();
}

function renderDateOptions() {
  const dateSelect = document.querySelector("#dateSelect");
  const customDateRange = document.querySelector("#customDateRange");
  const dateRangeText = document.querySelector("#dateRangeText");
  const label = document.querySelector("#dateFieldLabel");
  const range = selectedDateRange();
  label.textContent = "日期范围";
  dateSelect.innerHTML = `<option value="${escapeHtml(range.start)}">${escapeHtml(range.start)}</option>`;
  dateSelect.classList.add("hidden");
  dateSelect.disabled = true;
  customDateRange.classList.add("visible");
  document.querySelector("#startDateInput").value = range.start;
  document.querySelector("#endDateInput").value = range.end;
  dateRangeText.textContent = `${formatDisplayDate(range.start)} ~ ${formatDisplayDate(range.end)}`;
  document.querySelector("#periodSelect").value = state.granularity;
  document.querySelectorAll("[data-range-shortcut]").forEach((button) => {
    button.classList.toggle("active", shortcutMatchesRange(button.dataset.rangeShortcut, range));
  });
}

function toggleDateRangePopover() {
  const customDateRange = document.querySelector("#customDateRange");
  const trigger = document.querySelector("#dateRangeTrigger");
  const isOpen = customDateRange.classList.toggle("open");
  trigger.setAttribute("aria-expanded", String(isOpen));
  if (isOpen) {
    const range = selectedDateRange();
    state.pendingStart = range.start;
    state.pendingEnd = range.end;
    state.calendarMonth = range.start.slice(0, 7);
    state.calendarSelectingEnd = false;
    document.querySelector("#startDateInput").value = state.pendingStart;
    document.querySelector("#endDateInput").value = state.pendingEnd;
    closeRoomMenu();
    renderDateCalendars();
  }
}

function closeDateRangePopover() {
  const customDateRange = document.querySelector("#customDateRange");
  const trigger = document.querySelector("#dateRangeTrigger");
  customDateRange.classList.remove("open");
  trigger.setAttribute("aria-expanded", "false");
}

function applyCustomDateRange() {
  const start = state.pendingStart <= state.pendingEnd ? state.pendingStart : state.pendingEnd;
  const requestedEnd = state.pendingStart <= state.pendingEnd ? state.pendingEnd : state.pendingStart;
  const end = requestedEnd > maxCalendarRangeEnd(start) ? maxCalendarRangeEnd(start) : requestedEnd;
  state.customStart = start;
  state.customEnd = end;
  if (start === end) {
    state.granularity = "day";
    state.date = start;
    state.month = start.slice(0, 7);
  } else {
    state.granularity = "custom";
  }
  closeDateRangePopover();
  renderDateOptions();
  renderAccountDimensionPicker();
  render();
}

function applyDateShortcut(shortcut) {
  const range = dateRangeForMode(shortcut);
  state.pendingStart = range.start;
  state.pendingEnd = range.end;
  state.granularity = shortcut === "today" || shortcut === "yesterday" ? "day" : shortcut;
  state.customStart = range.start;
  state.customEnd = range.end;
  if (state.granularity === "day") {
    state.date = range.start;
    state.month = range.start.slice(0, 7);
  }
  closeDateRangePopover();
  renderDateOptions();
  renderAccountDimensionPicker();
  render();
}

function shortcutMatchesRange(shortcut, range) {
  const shortcutRange = dateRangeForMode(shortcut);
  return shortcutRange.start === range.start && shortcutRange.end === range.end;
}

function shiftCalendarView(offset) {
  state.calendarMonth = shiftMonth(state.calendarMonth, offset);
  renderDateCalendars();
}

function shiftMonth(month, offset) {
  const [year, monthNumber] = month.split("-").map(Number);
  const date = new Date(year, monthNumber - 1 + offset, 1);
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;
}

function selectCalendarDate(date) {
  if (!state.calendarSelectingEnd || date < state.pendingStart) {
    state.pendingStart = date;
    state.pendingEnd = date;
    state.calendarSelectingEnd = true;
  } else {
    const maximumEnd = maxCalendarRangeEnd(state.pendingStart);
    state.pendingEnd = date > maximumEnd ? maximumEnd : date;
    state.calendarSelectingEnd = false;
  }
  document.querySelector("#customDateRange").classList.add("open");
  document.querySelector("#dateRangeTrigger").setAttribute("aria-expanded", "true");
  document.querySelector("#startDateInput").value = state.pendingStart;
  document.querySelector("#endDateInput").value = state.pendingEnd;
  renderDateCalendars();
}

function renderDateCalendars() {
  const months = [state.calendarMonth, shiftMonth(state.calendarMonth, 1)];
  document.querySelector("#calendarRangeHint").textContent = state.calendarSelectingEnd
    ? `${formatDisplayDate(state.pendingStart)} 起，请选择结束日期（最多3个月）`
    : `${formatDisplayDate(state.pendingStart)} ~ ${formatDisplayDate(state.pendingEnd)}`;
  document.querySelector("#applyDateRange").disabled = state.calendarSelectingEnd;
  document.querySelector("#dateCalendars").innerHTML = months.map(calendarMonthMarkup).join("");
}

function maxCalendarRangeEnd(start) {
  const [year, month, day] = start.split("-").map(Number);
  const end = new Date(year, month - 1 + 3, day);
  end.setDate(end.getDate() - 1);
  return formatDate(end);
}

function calendarMonthMarkup(month) {
  const [year, monthNumber] = month.split("-").map(Number);
  const firstDay = new Date(year, monthNumber - 1, 1);
  const gridStart = new Date(year, monthNumber - 1, 1 - firstDay.getDay());
  const days = Array.from({ length: 42 }, (_, index) => {
    const date = new Date(gridStart);
    date.setDate(gridStart.getDate() + index);
    const value = formatDate(date);
    const outside = date.getMonth() !== monthNumber - 1;
    const exceedsMaximumRange = state.calendarSelectingEnd && value > maxCalendarRangeEnd(state.pendingStart);
    const disabled = outside || value > latestAvailableDate || exceedsMaximumRange;
    const classes = [
      outside ? "outside" : "",
      !outside && value === state.pendingStart ? "range-start" : "",
      !outside && value === state.pendingEnd ? "range-end" : "",
      !outside && value > state.pendingStart && value < state.pendingEnd ? "in-range" : "",
    ].filter(Boolean).join(" ");
    return `<button class="calendar-day ${classes}" data-calendar-date="${value}" type="button" ${disabled ? "disabled" : ""} aria-label="${value}">${date.getDate()}</button>`;
  }).join("");
  return `
    <section class="calendar-month" aria-label="${year}年${monthNumber}月">
      <h4>${year}年 ${monthNumber}月</h4>
      <div class="calendar-weekdays" aria-hidden="true"><span>日</span><span>一</span><span>二</span><span>三</span><span>四</span><span>五</span><span>六</span></div>
      <div class="calendar-days">${days}</div>
    </section>
  `;
}

function renderRoomOptions() {
  const rooms = liveRoomOptions();
  if (state.room !== "all" && !rooms.some((room) => room.value === state.room)) {
    state.room = "all";
  }
  const selected = rooms.find((room) => room.value === state.room);
  if (selected) state.roomMenuPlatform = selected.platform;
  document.querySelector("#roomText").textContent = selected ? selected.label : "全部直播间";
  const groups = rooms.reduce((output, room) => {
    output[room.platform] = output[room.platform] || [];
    output[room.platform].push(room);
    return output;
  }, {});
  document.querySelector("#roomMenu").innerHTML = `
    <button class="room-menu-all ${state.room === "all" ? "active" : ""}" data-room-value="${encodeURIComponent("all")}" type="button" role="menuitem">
      <span>全部直播间</span><small>${rooms.length} 个</small>
    </button>
    ${Object.entries(groups)
      .sort(([platformA], [platformB]) => {
        const order = ["小红书", "视频号", "巨量引擎"];
        const indexA = order.indexOf(platformA);
        const indexB = order.indexOf(platformB);
        return (indexA < 0 ? 99 : indexA) - (indexB < 0 ? 99 : indexB) || platformA.localeCompare(platformB, "zh-CN");
      })
      .map(([platform, platformRooms]) => `
      <div class="room-platform-item ${state.roomMenuPlatform === platform ? "selected" : ""}">
        <button class="room-platform-trigger" data-room-platform="${escapeHtml(platform)}" type="button" aria-expanded="false" ${state.roomMenuPlatform === platform ? 'aria-current="true"' : ""}>
          <span>${escapeHtml(platform)}</span><small>${platformRooms.length} 个</small><b aria-hidden="true">›</b>
        </button>
        <div class="room-submenu" role="menu" aria-label="${escapeHtml(platform)}直播间">
          ${platformRooms.map((room) => `
            <button class="${state.room === room.value ? "active" : ""}" data-room-value="${encodeURIComponent(room.value)}" type="button" role="menuitem">
              <span>${escapeHtml(room.name)}</span>
            </button>
          `).join("")}
        </div>
      </div>
    `).join("")}
  `;
}

function toggleRoomMenu() {
  const picker = document.querySelector("#roomPicker");
  const trigger = document.querySelector("#roomTrigger");
  const isOpen = picker.classList.toggle("open");
  trigger.setAttribute("aria-expanded", String(isOpen));
  if (isOpen) closeDateRangePopover();
}

function closeRoomMenu() {
  document.querySelector("#roomPicker")?.classList.remove("open");
  document.querySelector("#roomTrigger")?.setAttribute("aria-expanded", "false");
  document.querySelectorAll(".room-platform-item.open").forEach((item) => item.classList.remove("open"));
}

function selectRoom(value) {
  const selectedAccount = selectedAudienceAccount();
  if (selectedAccount && value !== roomOptionValue(selectedAccount.platform, selectedAccount.liveRoomName)) {
    state.audienceAccount = "all";
  }
  state.room = value;
  state.selectedAccountKey = "";
  closeRoomMenu();
  renderAccountDimensionPicker();
  render();
}

function audienceAccountRelations() {
  const output = new Map();
  liveAccountRelations.forEach((item) => {
    const platform = normalizeValue(item.platform);
    const liveRoomName = normalizeValue(item.liveRoomName);
    const accountId = normalizeValue(item.accountId);
    const accountName = normalizeValue(item.accountName) || accountId;
    if (!platform || !liveRoomName || !accountId) return;
    const key = [platform, liveRoomName, accountId].join("::");
    output.set(key, { ...item, platform, liveRoomName, accountId, accountName, key });
  });
  return [...output.values()].sort(
    (a, b) =>
      a.platform.localeCompare(b.platform, "zh-CN") ||
      a.liveRoomName.localeCompare(b.liveRoomName, "zh-CN") ||
      a.accountName.localeCompare(b.accountName, "zh-CN"),
  );
}

function selectedAudienceAccount() {
  if (state.audienceAccount === "all") return null;
  return audienceAccountRelations().find((item) => item.key === state.audienceAccount) || null;
}

function renderAudienceAccountPicker() {
  const relations = audienceAccountRelations();
  const platformOrder = ["小红书", "视频号", "巨量引擎"];
  const platforms = [...new Set(relations.map((item) => item.platform))].sort((a, b) => {
    const indexA = platformOrder.indexOf(a);
    const indexB = platformOrder.indexOf(b);
    return (indexA < 0 ? 99 : indexA) - (indexB < 0 ? 99 : indexB) || a.localeCompare(b, "zh-CN");
  });
  if (!platforms.includes(state.audienceAccountPlatform)) state.audienceAccountPlatform = platforms[0] || "";

  const rooms = [...new Set(
    relations.filter((item) => item.platform === state.audienceAccountPlatform).map((item) => item.liveRoomName),
  )].sort((a, b) => a.localeCompare(b, "zh-CN"));
  if (!rooms.includes(state.audienceAccountRoom)) state.audienceAccountRoom = rooms[0] || "";
  const accounts = relations.filter(
    (item) => item.platform === state.audienceAccountPlatform && item.liveRoomName === state.audienceAccountRoom,
  );
  const selected = selectedAudienceAccount();

  document.querySelector("#audienceAccountText").textContent = selected
    ? `${selected.accountName}（${selected.platform}）`
    : "全部投放账户";
  document.querySelector(".audience-account-all").classList.toggle("active", !selected);
  document.querySelector("#audienceAccountPlatforms").innerHTML = platforms
    .map((platform) => `
      <button class="${platform === state.audienceAccountPlatform ? "active" : ""}" data-audience-account-platform="${encodeURIComponent(platform)}" type="button">
        <span>${escapeHtml(platform)}</span>
        <small>${relations.filter((item) => item.platform === platform).length} 个账户</small>
      </button>
    `)
    .join("");
  document.querySelector("#audienceAccountRooms").innerHTML = rooms.length
    ? rooms.map((room) => `
        <button class="${room === state.audienceAccountRoom ? "active" : ""}" data-audience-account-room="${encodeURIComponent(room)}" type="button">
          <span>${escapeHtml(room)}</span>
          <small>${relations.filter((item) => item.platform === state.audienceAccountPlatform && item.liveRoomName === room).length} 个</small>
        </button>
      `).join("")
    : `<div class="audience-account-level-empty">暂无直播间</div>`;
  document.querySelector("#audienceAccountAccounts").innerHTML = accounts.length
    ? accounts.map((account) => `
        <button class="${state.audienceAccount === account.key ? "active" : ""}" data-audience-account="${encodeURIComponent(account.key)}" type="button">
          <span>${escapeHtml(account.accountName)}</span>
          <small>ID ${escapeHtml(account.accountId)} · ${escapeHtml(audienceAccountSourceLabel(account))}</small>
        </button>
      `).join("")
    : `<div class="audience-account-level-empty">暂无投放账户</div>`;
}

function toggleAudienceAccountMenu() {
  const picker = document.querySelector("#audienceAccountPicker");
  const isOpen = picker.classList.toggle("open");
  document.querySelector("#audienceAccountTrigger").setAttribute("aria-expanded", String(isOpen));
  if (isOpen) {
    closeDateRangePopover();
    closeRoomMenu();
  }
}

function closeAudienceAccountMenu() {
  document.querySelector("#audienceAccountPicker")?.classList.remove("open");
  document.querySelector("#audienceAccountTrigger")?.setAttribute("aria-expanded", "false");
}

function selectAudienceAccount(key) {
  state.audienceAccount = key;
  const selected = selectedAudienceAccount();
  if (selected) {
    state.platform = "all";
    state.audienceAccountPlatform = selected.platform;
    state.audienceAccountRoom = selected.liveRoomName;
    state.room = roomOptionValue(selected.platform, selected.liveRoomName);
  }
  closeAudienceAccountMenu();
  render();
}

function audienceAccountSourceLabel(account) {
  const spendRow = platformSpendRows.find(
    (row) => normalizeValue(row.platform) === account.platform && normalizeValue(row.accountId) === account.accountId,
  );
  const rawPlatform = normalizeValue(spendRow?.rawPlatform);
  if (rawPlatform === "xhs_juguang") return "聚光";
  if (rawPlatform === "xhs_chengfeng") return "乘风";
  if (account.platform === "视频号") return "腾讯广告";
  if (account.platform === "巨量引擎") return "巨量引擎";
  return normalizeValue(spendRow?.source) || "账户映射";
}

function liveRoomOptions() {
  const platform = currentRoomPlatformFilter();
  const roomMap = [...liveAccountRelations, ...liveRoomRows].reduce((output, item) => {
    const liveRoomName = normalizeValue(item.liveRoomName);
    const itemPlatform = normalizeValue(item.platform);
    if (!liveRoomName || !itemPlatform || isProjectLikeRoomName(liveRoomName, item)) return output;
    if (platform !== "all" && itemPlatform !== platform) return output;
    const key = `${itemPlatform}::${canonicalRoomName(liveRoomName)}`;
    if (output.has(key)) return output;
    const value = roomOptionValue(itemPlatform, liveRoomName);
    output.set(key, {
      value,
      name: liveRoomName,
      platform: itemPlatform,
      label: `${liveRoomName}（${itemPlatform}）`,
    });
    return output;
  }, new Map());
  return [...roomMap.values()].sort(
    (a, b) => a.platform.localeCompare(b.platform, "zh-CN") || a.name.localeCompare(b.name, "zh-CN"),
  );
}

function currentRoomPlatformFilter() {
  if (state.view === "account") return state.accountPlatform;
  const platformMap = {
    all: "all",
    xiaohongshu: "小红书",
    wechat: "视频号",
    juliang: "巨量引擎",
  };
  return platformMap[state.platform] || "all";
}

function isProjectLikeRoomName(name, item) {
  const projectName = normalizeValue(item.projectName);
  return name === projectName || /项目$/.test(name);
}

function roomOptionValue(platform, name) {
  return `${platform}::${name}`;
}

function canonicalRoomName(name) {
  return normalizeValue(name).toLowerCase().replace(/[\s\-_·（）()]/g, "");
}

function selectedRoomInfo() {
  if (state.room === "all") return null;
  const [platform, ...nameParts] = state.room.split("::");
  const name = nameParts.join("::");
  if (!platform || !name) return null;
  return { platform, name, label: `${name}（${platform}）` };
}

function availableMonths() {
  return [...new Set(dailyData.map((day) => day.date.slice(0, 7)))];
}

function renderAccountDimensionPicker() {
  const projects = availableAccountProjects();
  if (state.accountProject !== "all" && !projects.includes(state.accountProject)) {
    state.accountProject = "all";
  }

  const label =
    state.accountDimension === "account"
      ? "账户维度"
      : state.accountProject === "all"
        ? "项目维度"
        : state.accountProject;
  document.querySelector("#accountDimensionText").textContent = label;
  document.querySelector("#accountDimensionMenu").innerHTML = `
    <button class="dimension-menu-item ${state.accountDimension === "account" ? "active" : ""}" data-dimension-action="account" type="button" role="menuitem">
      <span>账户维度</span>
    </button>
    <div class="dimension-menu-item has-submenu ${state.accountDimension === "project" ? "active" : ""}" role="menuitem">
      <button data-dimension-action="project-all" type="button">
        <span>项目维度</span>
        <span aria-hidden="true">›</span>
      </button>
      <div class="dimension-submenu">
        <button class="${state.accountProject === "all" ? "active" : ""}" data-dimension-action="project-all" type="button">全部项目</button>
        ${projects
          .map(
            (project) => `
              <button class="${state.accountProject === project ? "active" : ""}" data-dimension-action="project" data-project="${encodeURIComponent(project)}" type="button">
                ${escapeHtml(project)}
              </button>
            `,
          )
          .join("")}
      </div>
    </div>
  `;
}

function availableAccountProjects() {
  const range = selectedDateRange();
  const matchPlatform = (row) => state.accountPlatform === "all" || row.platform === state.accountPlatform;
  const matchPlatformSource = (row) =>
    state.accountPlatform !== "小红书" || state.accountPlatformSource === "all" || row.rawPlatform === state.accountPlatformSource;
  const matchRoom = (row) => state.room === "all" || selectedRoomMatchesRow(row);
  const matchSpend = (row) => !state.accountPositiveOnly || row.spend > 0;
  const rows = platformSpendRows.filter(
    (row) => isDateInRange(row.date, range) && matchPlatform(row) && matchPlatformSource(row) && matchRoom(row) && matchSpend(row),
  );
  return [...new Set(rows.map((row) => relatedProjectName(row)).filter(Boolean))].sort((a, b) => a.localeCompare(b, "zh-CN"));
}

function toggleDimensionMenu() {
  const picker = document.querySelector("#accountDimensionPicker");
  const trigger = document.querySelector("#accountDimensionTrigger");
  const isOpen = picker.classList.toggle("open");
  trigger.setAttribute("aria-expanded", String(isOpen));
}

function closeDimensionMenu() {
  const picker = document.querySelector("#accountDimensionPicker");
  const trigger = document.querySelector("#accountDimensionTrigger");
  picker.classList.remove("open");
  trigger.setAttribute("aria-expanded", "false");
}

function selectAccountDimension(dimension, project = "all") {
  state.accountDimension = dimension;
  state.accountProject = dimension === "project" ? project : "all";
  state.selectedAccountKey = "";
  closeDimensionMenu();
  renderAccountDimensionPicker();
  renderSummary();
  renderAccountDetails();
  renderScope();
}

function renderAccountPlatformPicker() {
  const label = accountPlatformLabel();
  document.querySelector("#accountPlatformText").textContent = label;
  document.querySelector("#accountPlatformMenu").innerHTML = `
    <button class="dimension-menu-item ${state.accountPlatform === "all" ? "active" : ""}" data-platform-action="select" data-platform="all" data-source="all" type="button" role="menuitem">
      <span>全部平台</span>
    </button>
    <div class="dimension-menu-item has-submenu ${state.accountPlatform === "小红书" ? "active" : ""}" role="menuitem">
      <button data-platform-action="select" data-platform="小红书" data-source="all" type="button">
        <span>小红书</span>
        <span aria-hidden="true">›</span>
      </button>
      <div class="dimension-submenu platform-submenu">
        <button class="${state.accountPlatform === "小红书" && state.accountPlatformSource === "all" ? "active" : ""}" data-platform-action="select" data-platform="小红书" data-source="all" type="button">全部小红书</button>
        <button class="${state.accountPlatformSource === "xhs_juguang" ? "active" : ""}" data-platform-action="select" data-platform="小红书" data-source="xhs_juguang" type="button">聚光</button>
        <button class="${state.accountPlatformSource === "xhs_chengfeng" ? "active" : ""}" data-platform-action="select" data-platform="小红书" data-source="xhs_chengfeng" type="button">乘风</button>
      </div>
    </div>
    <button class="dimension-menu-item ${state.accountPlatform === "视频号" ? "active" : ""}" data-platform-action="select" data-platform="视频号" data-source="all" type="button" role="menuitem">
      <span>视频号</span>
    </button>
    <button class="dimension-menu-item ${state.accountPlatform === "巨量引擎" ? "active" : ""}" data-platform-action="select" data-platform="巨量引擎" data-source="all" type="button" role="menuitem">
      <span>巨量引擎</span>
    </button>
  `;
}

function togglePlatformMenu() {
  const picker = document.querySelector("#accountPlatformPicker");
  const trigger = document.querySelector("#accountPlatformTrigger");
  const isOpen = picker.classList.toggle("open");
  trigger.setAttribute("aria-expanded", String(isOpen));
}

function closePlatformMenu() {
  const picker = document.querySelector("#accountPlatformPicker");
  const trigger = document.querySelector("#accountPlatformTrigger");
  picker.classList.remove("open");
  trigger.setAttribute("aria-expanded", "false");
}

function selectAccountPlatform(platform, source = "all") {
  state.accountPlatform = platform;
  state.accountPlatformSource = platform === "小红书" ? source : "all";
  state.accountProject = "all";
  state.selectedAccountKey = "";
  closePlatformMenu();
  renderAccountPlatformPicker();
  renderRoomOptions();
  renderAccountDimensionPicker();
  renderSummary();
  renderAccountDetails();
  renderScope();
}

function selectedDay() {
  return dailyData.find((day) => day.date === state.date) || dailyData[dailyData.length - 1];
}

function selectedDays() {
  const range = selectedDateRange();
  return dailyData.filter((day) => isDateInRange(day.date, range));
}

function selectedDateRange() {
  if (state.granularity === "day") return { start: state.date, end: state.date };
  if (state.granularity === "custom") {
    const start = state.customStart <= state.customEnd ? state.customStart : state.customEnd;
    const end = state.customStart <= state.customEnd ? state.customEnd : state.customStart;
    return { start, end };
  }
  return dateRangeForMode(state.granularity);
}

function dateRangeForMode(mode) {
  const latest = latestAvailableDate;
  if (mode === "today") return { start: latest, end: latest };
  if (mode === "yesterday") {
    const day = shiftDate(latest, -1);
    return { start: day, end: day };
  }
  if (mode === "current-month") {
    return { start: `${latest.slice(0, 7)}-01`, end: latest };
  }
  if (mode === "last-month") {
    const [year, month] = latest.slice(0, 7).split("-").map(Number);
    const previousMonth = new Date(year, month - 2, 1);
    const start = formatDate(previousMonth);
    const end = formatDate(new Date(previousMonth.getFullYear(), previousMonth.getMonth() + 1, 0));
    return { start, end };
  }
  if (mode === "last-7") return { start: shiftDate(latest, -6), end: latest };
  if (mode === "last-14") return { start: shiftDate(latest, -13), end: latest };
  return { start: state.date, end: state.date };
}

function isDateInRange(date, range) {
  return date >= range.start && date <= range.end;
}

function selectedRooms(day = selectedDay()) {
  if (state.room === "all") return Object.values(day.rooms);
  if (day.rooms[state.room]) return [day.rooms[state.room]];
  return Object.values(day.rooms);
}

function selectedRoomMatchesRow(row) {
  const room = selectedRoomInfo();
  if (!room) return true;
  return row.platform === room.platform && canonicalRoomName(relatedLiveRoomName(row)) === canonicalRoomName(room.name);
}

function liveRowsForPeriod() {
  if (!liveRoomRows.length) return [];
  const range = selectedDateRange();
  const platform = currentRoomPlatformFilter();
  return liveRoomRows.filter((row) => {
    if (!isDateInRange(row.date, range)) return false;
    if (platform !== "all" && row.platform !== platform) return false;
    const room = selectedRoomInfo();
    if (room && (row.platform !== room.platform || canonicalRoomName(row.liveRoomName) !== canonicalRoomName(room.name))) return false;
    return true;
  });
}

function liveTotals() {
  const rows = liveRowsForPeriod();
  const totals = rows.reduce(
    (sum, row) => {
      [
        "roomImpressions",
        "viewers",
        "productCardImpressions",
        "productCardClicks",
        "payers",
        "commenters",
        "cost",
        "orders",
        "hourlyPayers",
        "hourlyViewers",
      ].forEach((key) => {
        if (row[key] !== null && row[key] !== undefined && row[key] !== "" && Number.isFinite(Number(row[key]))) {
          sum[key] += Number(row[key]);
          sum.__available[key] = true;
        }
      });
      return sum;
    },
    {
      roomImpressions: 0,
      viewers: 0,
      productCardImpressions: 0,
      productCardClicks: 0,
      payers: 0,
      commenters: 0,
      cost: 0,
      orders: 0,
      hourlyPayers: 0,
      hourlyViewers: 0,
      __available: {},
    },
  );
  [
    "roomImpressions", "viewers", "productCardImpressions", "productCardClicks", "payers",
    "commenters", "cost", "orders", "hourlyPayers", "hourlyViewers",
  ].forEach((key) => {
    if (!totals.__available[key]) totals[key] = null;
  });
  delete totals.__available;
  return totals;
}

function totals(day) {
  const days = day ? [day] : selectedDays();
  return days.reduce(
    (sum, room) => {
      selectedRooms(room).forEach((selectedRoom) => {
        Object.keys(sum).forEach((key) => {
          sum[key] += selectedRoom[key] || 0;
        });
      });
      return sum;
    },
    { cost: 0, impressions: 0, clicks: 0, enters: 0, viewers: 0, interactions: 0, orders: 0, gmv: 0 },
  );
}

function selectedAudienceProfiles() {
  const rooms = selectedDays().flatMap((day) => selectedRooms(day));
  if (state.platform !== "all") {
    return rooms.map((room) => platformProfile(room, state.platform));
  }

  return rooms.flatMap((room) =>
    ["xiaohongshu", "wechat", "juliang"].map((platform) => platformProfile(room, platform)),
  );
}

function platformProfile(room, platform) {
  const config = platformConfig[platform];
  return {
    platform,
    viewers: Math.round(room.viewers * config.weight),
    female: clamp(room.female + config.femaleDelta, 35, 88),
    age: adjustedProfile(room.age, config.age),
    cities: adjustedProfile(room.cities, config.cities),
    interests: adjustedProfile(room.interests, config.interests),
  };
}

function adjustedProfile(base, deltas = {}) {
  const values = Object.fromEntries(
    Object.entries(base).map(([key, value]) => [key, Math.max(1, value + (deltas[key] || 0))]),
  );
  return normalizeProfile(values);
}

function normalizeProfile(profile) {
  const entries = Object.entries(profile);
  const total = entries.reduce((sum, [, value]) => sum + value, 0);
  const normalized = Object.fromEntries(entries.map(([key, value]) => [key, Math.round((value / total) * 100)]));
  const diff = 100 - Object.values(normalized).reduce((sum, value) => sum + value, 0);
  normalized[topEntry(normalized)[0]] += diff;
  return normalized;
}

function weightedProfile(field) {
  const rooms = selectedAudienceProfiles();
  const output = {};
  let totalViewers = 0;
  rooms.forEach((profile) => {
    totalViewers += profile.viewers;
    Object.entries(profile[field]).forEach(([key, value]) => {
      output[key] = (output[key] || 0) + value * profile.viewers;
    });
  });
  Object.keys(output).forEach((key) => {
    output[key] = Math.round(output[key] / totalViewers);
  });
  return output;
}

function render() {
  renderView();
  renderRoomOptions();
  renderAudienceAccountPicker();
  renderAccountDimensionPicker();
  renderAccountPlatformPicker();
  renderScope();
  renderSummary();
  renderTrend();
  renderAudience();
  renderAccessGrid();
  renderLiveKpis();
  renderFunnel();
  renderTable();
  renderAccountDetails();
  applyMotion();
}

function renderView() {
  document.querySelectorAll(".nav-item").forEach((button) => {
    button.classList.toggle("active", button.dataset.view === state.view);
  });
  document.querySelectorAll(".view-section").forEach((section) => {
    section.classList.toggle("active", section.dataset.section === state.view);
  });
  document.querySelector("#accountDimensionField").classList.toggle("visible", state.view === "account");
  document.querySelector("#accountPlatformField").classList.toggle("visible", state.view === "account");
  document.querySelector("#summaryCards").hidden = state.view === "room";
  document.querySelector(".controls").classList.toggle("room-mode", state.view === "room");
}

function renderScope() {
  const roomName = selectedRoomLabel();
  const period = selectedPeriodLabel();
  document.querySelector("#scopeType").textContent = `当前口径：${periodModeLabel()}`;
  const audienceRow = selectedAudienceRow();
  const audienceAccount = selectedAudienceAccount();
  document.querySelector("#audienceScope").textContent = audienceAccount
    ? `${audienceAccount.liveRoomName}（${audienceAccount.platform}） · ${audienceAccount.accountName} · ID ${audienceAccount.accountId} · ${period}`
    : audienceRow
      ? `${audienceRow.projectName || "未匹配项目"} · ${audienceRow.roomName}（${audienceRow.platformLabel || platformConfig[audienceRow.platform]?.label || "平台"}） · ${audienceRow.date}${audienceRow.status === "sample" ? " · 样式预览" : ""}`
      : `${roomName} · 全部投放账户 · ${period}`;
  document.querySelector("#liveScope").textContent = `${roomName} · ${period}`;
  const projectScope =
    state.view === "account" && state.accountDimension === "project" && state.accountProject !== "all"
      ? ` · ${state.accountProject}`
      : "";
  document.querySelector("#accountScope").textContent =
    `${roomName} · ${accountPlatformLabel()} · ${state.accountDimension === "project" ? "项目维度" : "账户维度"}${projectScope} · ${period}`;
  document.querySelector("#trendTitle").textContent =
    state.granularity === "day" ? "直播关键指标日趋势" : "所选日期范围关键指标趋势";
}

function selectedRoomLabel() {
  if (state.room === "all") return "全部直播间";
  const room = selectedRoomInfo();
  if (room) return room.label;
  return selectedDay().rooms[state.room]?.name || state.room;
}

function renderSummary() {
  if (state.view === "account") {
    renderSpendSummary();
    return;
  }

  if (state.view === "room" && liveRoomRows.length) {
    const data = liveTotals();
    const cards = [
      ["整体消耗", money(data.cost), selectedPeriodLabel()],
      ["观看人数", compact(data.viewers), `曝光进入率 ${percentOrDash(rate(data.viewers, data.roomImpressions))}`],
      ["支付人数", compact(data.payers), `观看成交率 ${percentOrDash(rate(data.payers, data.viewers))}`],
      ["支付订单", compact(data.orders), `点击成交率 ${percentOrDash(rate(data.payers, data.productCardClicks))}`],
      ["商品卡点击", compact(data.productCardClicks), `商卡点击率 ${percentOrDash(rate(data.productCardClicks, data.productCardImpressions))}`],
    ];

    document.querySelector("#summaryCards").innerHTML = cards
      .map(
        ([label, value, delta]) => `
          <article class="summary-card">
            <span class="label">${escapeHtml(label)}</span>
            <strong class="value">${escapeHtml(value)}</strong>
            <span class="delta">${escapeHtml(delta)}</span>
          </article>
        `,
      )
      .join("");
    return;
  }

  const data = totals();
  const roi = data.cost ? data.gmv / data.cost : 0;
  const ctr = data.impressions ? (data.clicks / data.impressions) * 100 : 0;
  const conversion = data.enters ? (data.orders / data.enters) * 100 : 0;
  const periodNote = state.granularity === "day" ? "+12.4% 较昨日" : periodModeLabel();
  const cards = [
    ["广告消耗", money(data.cost), periodNote],
    ["成交 GMV", money(data.gmv), `ROI ${roi.toFixed(2)}`],
    ["曝光人数", compact(data.impressions), `点击率 ${ctr.toFixed(2)}%`],
    ["直播间进入", compact(data.enters), `进入率 ${(data.clicks ? (data.enters / data.clicks) * 100 : 0).toFixed(1)}%`],
    ["成交订单", compact(data.orders), `转化率 ${conversion.toFixed(1)}%`],
  ];

  document.querySelector("#summaryCards").innerHTML = cards
    .map(
      ([label, value, delta]) => `
        <article class="summary-card">
          <span class="label">${label}</span>
          <strong class="value">${value}</strong>
          <span class="delta">${delta}</span>
        </article>
      `,
    )
    .join("");
}

function renderSpendSummary() {
  const rows = platformSpendRows.length ? spendRowsForPeriod() : accountRows();
  const groupedRows = accountGroupedRows(rows);
  const totalCost = groupedRows.reduce((sum, row) => sum + row.cost, 0);
  const platformCount = new Set(groupedRows.map((row) => row.platform)).size;
  const accountCount = groupedRows.reduce((sum, row) => sum + row.accountCount, 0);
  const projectCount = groupedRows.reduce((sum, row) => sum + row.projectCount, 0);
  const topRow = [...groupedRows].sort((a, b) => b.cost - a.cost)[0];
  const topShare = totalCost && topRow ? (topRow.cost / totalCost) * 100 : 0;
  const currentLabel = state.accountDimension === "project" ? "项目" : "账户";
  const cards = [
    ["总消耗", money(totalCost), selectedPeriodLabel()],
    [`${currentLabel}数`, compact(groupedRows.length), `${platformCount} 个平台`],
    ["关联账户", compact(accountCount), `${projectCount} 个项目`],
    [`最高消耗${currentLabel}`, topRow ? compactLabel(topRow.name) : "暂无", topRow ? money(topRow.cost) : "¥0"],
    ["最高占比", `${topShare.toFixed(1)}%`, topRow ? topRow.platform : "暂无"],
  ];

  document.querySelector("#summaryCards").innerHTML = cards
    .map(
      ([label, value, delta]) => `
        <article class="summary-card">
          <span class="label">${escapeHtml(label)}</span>
          <strong class="value">${escapeHtml(value)}</strong>
          <span class="delta">${escapeHtml(delta)}</span>
        </article>
      `,
    )
    .join("");
}

function renderTrend() {
  const buckets = trendBuckets();
  const chart = document.querySelector("#trendChart");
  const rangeLabel = document.querySelector("#trendRangeLabel");
  const range = state.granularity === "day"
    ? { start: shiftDate(state.date, -13), end: state.date }
    : selectedDateRange();
  rangeLabel.textContent = `${range.start} 至 ${range.end} · 仅展示有数据日期`;
  if (!buckets.length) {
    chart.innerHTML = `<text class="chart-empty-label" x="380" y="155" text-anchor="middle">当前时间范围暂无有效趋势数据</text>`;
    return;
  }
  const values = buckets.map((bucket) => {
    const data = bucket.data;
    if (state.metric === "roi") return data.cost ? +(data.gmv / data.cost).toFixed(2) : 0;
    if (state.metric === "orderCost") return data.orders ? +(data.cost / data.orders).toFixed(2) : 0;
    return data[state.metric] || 0;
  });

  const labels = buckets.map((bucket) => bucket.label);
  const width = 760;
  const height = 310;
  const pad = { top: 34, right: 28, bottom: 48, left: 72 };
  const topValue = Math.max(...values, 1);
  const max = niceTrendMaximum(topValue);
  const min = 0;
  const points = values.map((value, index) => {
    const x = values.length === 1
      ? (pad.left + width - pad.right) / 2
      : pad.left + (index * (width - pad.left - pad.right)) / (values.length - 1);
    const y = height - pad.bottom - ((value - min) / (max - min)) * (height - pad.top - pad.bottom);
    return [x, y, value];
  });
  const labelStep = Math.max(1, Math.ceil(values.length / 10));
  const line = points.map(([x, y]) => `${x},${y}`).join(" ");
  const area = `${pad.left},${height - pad.bottom} ${line} ${width - pad.right},${height - pad.bottom}`;
  const yTicks = Array.from({ length: 5 }, (_, index) => {
    const value = (max * index) / 4;
    const y = height - pad.bottom - ((value - min) / (max - min)) * (height - pad.top - pad.bottom);
    return { value, y };
  });

  chart.innerHTML = `
    ${yTicks.map(({ value, y }) => `
      <line class="trend-grid-line" x1="${pad.left}" y1="${y}" x2="${width - pad.right}" y2="${y}"></line>
      <text class="trend-y-label" x="${pad.left - 12}" y="${y + 4}" text-anchor="end">${compactTrendMetric(value)}</text>
    `).join("")}
    ${values.length > 1 ? `<polyline class="trend-area" points="${area}"></polyline>` : ""}
    ${values.length > 1 ? `<polyline class="trend-line" points="${line}"></polyline>` : ""}
    ${points
      .map(
        ([x, y, value], index) => `
          <circle class="chart-dot" cx="${x}" cy="${y}" r="5"><title>${labels[index]} · ${formatMetric(value)}</title></circle>
          ${
            values.length <= 12 || index % labelStep === 0 || index === values.length - 1
              ? `<text class="axis-label" x="${x}" y="${height - 16}" text-anchor="middle">${labels[index]}</text>`
              : ""
          }
          ${
            value > 0 && (values.length <= 7 || value === topValue || index === values.length - 1)
              ? `<text class="trend-value-label" x="${x}" y="${Math.max(y - 13, 18)}" text-anchor="middle">${compactTrendMetric(value)}</text>`
              : ""
          }
        `,
      )
      .join("")}
  `;
}

function niceTrendMaximum(value) {
  if (value <= 0) return 1;
  const exponent = 10 ** Math.floor(Math.log10(value));
  const normalized = value / exponent;
  const nice = normalized <= 1 ? 1 : normalized <= 2 ? 2 : normalized <= 5 ? 5 : 10;
  return nice * exponent;
}

function compactTrendMetric(value) {
  if (state.metric === "cost" || state.metric === "orderCost") {
    if (value >= 10000) return `¥${(value / 10000).toFixed(value >= 100000 ? 0 : 1)}万`;
    return `¥${Math.round(value).toLocaleString("zh-CN")}`;
  }
  if (value >= 10000) return `${(value / 10000).toFixed(1)}万`;
  return Math.round(value).toLocaleString("zh-CN");
}

function renderAudience() {
  const row = selectedAudienceRow();
  const kpiContainer = document.querySelector("#audienceKpis");
  const chartGrid = document.querySelector("#audienceChartGrid");
  const trafficStrip = document.querySelector("#trafficShareStrip");
  const trafficTable = document.querySelector("#trafficTableBody");

  if (!row) {
    kpiContainer.innerHTML = `<div class="audience-empty">当前筛选条件下暂无人群画像数据</div>`;
    chartGrid.innerHTML = `<div class="audience-empty">请选择已有数据的日期、平台或直播间</div>`;
    trafficStrip.innerHTML = "";
    trafficTable.innerHTML = `<tr><td colspan="4"><div class="audience-empty">当前筛选范围暂无流量渠道数据</div></td></tr>`;
    return;
  }

  const metrics = row.metrics || {};
  const kpis = [
    ["累计观看人数", formatInteger(metrics.viewers), "整场去重观看用户"],
    ["曝光次数", formatInteger(metrics.impressions), "直播间累计曝光"],
    ["人均观看时长", formatAudienceDuration(metrics.avgWatchSeconds), "观看深度"],
    ["观看互动率", formatPercent(metrics.interactionRate), "评论、点赞等互动"],
    ["成交人数", formatInteger(metrics.payers), "整场支付人数"],
    ["退款金额占比", formatPercent(metrics.refundRate), "成交质量参考"],
  ];
  kpiContainer.innerHTML = kpis
    .map(
      ([label, value, note], index) => `
        <article class="audience-kpi-card" style="--index:${index}">
          <span>${label}</span>
          <strong>${value}</strong>
          <small>${note}</small>
        </article>
      `,
    )
    .join("");

  const dimensions = [
    ["性别分布", "gender"],
    ["年龄分布", "age"],
    ["地域分布", "regions"],
    ["手机价格分布", "phonePrices"],
    ["策略人群分布", "segments"],
  ];
  chartGrid.innerHTML = dimensions
    .map(([title, key]) => audienceChartCard(title, row.profiles?.watch?.[key], row.profiles?.pay?.[key], key))
    .join("");

  const traffic = row.traffic || [];
  trafficStrip.innerHTML = traffic
    .map(
      (item, index) => `
        <span class="traffic-share-segment" style="--share:${item.trafficShare}; --segment:${index}" title="${escapeHtml(item.channel)} ${item.trafficShare}%">
          ${item.trafficShare >= 9 ? escapeHtml(item.channel) : ""}
        </span>
      `,
    )
    .join("");
  trafficTable.innerHTML = traffic
    .map(
      (item, index) => `
        <tr>
          <td><span class="channel-name"><i style="--segment:${index}"></i>${escapeHtml(item.channel)}</span></td>
          <td>${trafficMetricCell(item.trafficShare, index)}</td>
          <td>${trafficMetricCell(item.paymentShare, index, true)}</td>
          <td class="numeric">${money(item.gpm)}</td>
        </tr>
      `,
    )
    .join("");
}

function selectedAudienceRow() {
  const range = selectedDateRange();
  const room = selectedRoomInfo();
  const account = selectedAudienceAccount();
  const rows = audienceProfileRows
    .filter((row) => isDateInRange(row.date, range))
    .filter((row) => state.platform === "all" || row.platform === state.platform)
    .filter((row) => !room || canonicalRoomName(row.roomName) === canonicalRoomName(room.name))
    .filter((row) => !account || audienceRowMatchesAccount(row, account))
    .sort((a, b) => a.date.localeCompare(b.date));
  if (!rows.length) return null;
  if (rows.length === 1) return rows[0];
  return aggregateAudienceRows(rows);
}

function audienceRowMatchesAccount(row, account) {
  const rowAccountId = normalizeValue(row.accountId);
  if (rowAccountId) return rowAccountId === account.accountId;
  const platformAliases = {
    xiaohongshu: "小红书",
    wechat: "视频号",
    juliang: "巨量引擎",
    抖音: "巨量引擎",
  };
  const rowPlatform = platformAliases[normalizeValue(row.platform)] || platformAliases[normalizeValue(row.platformLabel)] || normalizeValue(row.platformLabel);
  return rowPlatform === account.platform && normalizeValue(row.roomName) === account.liveRoomName;
}

function aggregateAudienceRows(rows) {
  const dimensions = ["gender", "age", "regions", "phonePrices", "segments"];
  const metrics = rows.reduce((output, row) => {
    output.viewers += Number(row.metrics?.viewers || 0);
    output.impressions += Number(row.metrics?.impressions || 0);
    output.payers += Number(row.metrics?.payers || 0);
    output.avgWatchSeconds += Number(row.metrics?.avgWatchSeconds || 0);
    output.interactionRate += Number(row.metrics?.interactionRate || 0);
    output.refundRate += Number(row.metrics?.refundRate || 0);
    return output;
  }, { viewers: 0, impressions: 0, payers: 0, avgWatchSeconds: 0, interactionRate: 0, refundRate: 0 });
  ["avgWatchSeconds", "interactionRate", "refundRate"].forEach((key) => {
    metrics[key] /= rows.length;
  });

  const profiles = { watch: {}, pay: {} };
  ["watch", "pay"].forEach((type) => {
    dimensions.forEach((dimension) => {
      const labels = [...new Set(rows.flatMap((row) => Object.keys(row.profiles?.[type]?.[dimension] || {})))];
      const weightKey = type === "watch" ? "viewers" : "payers";
      const totalWeight = rows.reduce((sum, row) => sum + Math.max(0, Number(row.metrics?.[weightKey] || 0)), 0);
      profiles[type][dimension] = Object.fromEntries(labels.map((label) => {
        const weightedValue = rows.reduce((sum, row) => {
          const weight = Math.max(0, Number(row.metrics?.[weightKey] || 0));
          return sum + Number(row.profiles?.[type]?.[dimension]?.[label] || 0) * weight;
        }, 0);
        return [label, totalWeight ? weightedValue / totalWeight : 0];
      }));
    });
  });

  const channels = [...new Set(rows.flatMap((row) => (row.traffic || []).map((item) => item.channel)))];
  const traffic = channels.map((channel) => {
    const matches = rows.flatMap((row) => row.traffic || []).filter((item) => item.channel === channel);
    return {
      channel,
      trafficShare: matches.reduce((sum, item) => sum + Number(item.trafficShare || 0), 0) / matches.length,
      paymentShare: matches.reduce((sum, item) => sum + Number(item.paymentShare || 0), 0) / matches.length,
      gpm: matches.reduce((sum, item) => sum + Number(item.gpm || 0), 0) / matches.length,
    };
  });

  return { ...rows.at(-1), date: selectedPeriodLabel(), metrics, profiles, traffic };
}

function audienceChartCard(title, watchProfile = {}, payProfile = {}, key = "") {
  const categories = [...new Set([...Object.keys(watchProfile), ...Object.keys(payProfile)])];
  if (!categories.length) {
    return `<article class="audience-chart-card"><h4>${escapeHtml(title)}</h4><div class="chart-empty">暂无数据</div></article>`;
  }
  return `
    <article class="audience-chart-card ${key === "segments" ? "audience-chart-card-wide" : ""}">
      <h4>${escapeHtml(title)}</h4>
      <div class="audience-bar-chart">
        <div class="audience-y-axis" aria-hidden="true"><span>100%</span><span>75%</span><span>50%</span><span>25%</span><span>0%</span></div>
        <div class="audience-plot" style="--category-count:${categories.length}" role="img" aria-label="${escapeHtml(title)}，深蓝为场观人群，浅蓝为购买人群">
          ${categories.map((label) => audienceBarGroup(label, watchProfile[label] || 0, payProfile[label] || 0)).join("")}
        </div>
      </div>
    </article>
  `;
}

function audienceBarGroup(label, watchValue, payValue) {
  const safeWatch = Math.max(0, Math.min(100, Number(watchValue || 0)));
  const safePay = Math.max(0, Math.min(100, Number(payValue || 0)));
  const accessibleLabel = `${label}：场观人群 ${formatPercent(safeWatch)}，购买人群 ${formatPercent(safePay)}`;
  return `
    <div class="audience-bar-group" tabindex="0" aria-label="${escapeHtml(accessibleLabel)}">
      <div class="audience-bar-pair">
        <i class="audience-bar watch" style="--bar-height:${safeWatch}%"><span>${formatPercent(safeWatch)}</span></i>
        <i class="audience-bar pay" style="--bar-height:${safePay}%"><span>${formatPercent(safePay)}</span></i>
      </div>
      <strong title="${escapeHtml(label)}">${escapeHtml(label)}</strong>
    </div>
  `;
}

function profileSummaryCard(title, profile, type) {
  const dimensions = [
    ["性别", "gender"],
    ["年龄", "age"],
    ["地域", "regions"],
    ["手机价格", "phonePrices"],
    ["策略人群", "segments"],
  ];
  return `
    <article class="audience-summary-card ${type}">
      <div class="summary-card-title"><span>${title}</span><i></i></div>
      <div class="summary-facts">
        ${dimensions
          .map(([label, key]) => {
            const entry = topEntrySafe(profile?.[key]);
            return `<div><span>${label}</span><strong>${escapeHtml(entry[0])}</strong><em>${formatPercent(entry[1])}</em></div>`;
          })
          .join("")}
      </div>
    </article>
  `;
}

function trafficMetricCell(value, index, payment = false) {
  return `
    <div class="traffic-cell">
      <div class="traffic-mini-track"><i class="${payment ? "payment" : "traffic"}" style="--w:${Math.min(value, 100)}%; --segment:${index}"></i></div>
      <strong>${formatPercent(value)}</strong>
    </div>
  `;
}

function topEntrySafe(values) {
  const entries = Object.entries(values || {});
  return entries.length ? entries.sort((a, b) => b[1] - a[1])[0] : ["暂无", 0];
}

function formatInteger(value) {
  if (value === null || value === undefined || Number.isNaN(Number(value))) return "-";
  return Number(value || 0).toLocaleString("zh-CN");
}

function formatPercent(value) {
  if (value === null || value === undefined || Number.isNaN(Number(value))) return "-";
  const number = Number(value || 0);
  return `${number.toFixed(number % 1 ? 1 : 0)}%`;
}

function formatAudienceDuration(seconds) {
  if (seconds === null || seconds === undefined || Number.isNaN(Number(seconds))) return "-";
  const total = Math.max(0, Number(seconds || 0));
  const minutes = Math.floor(total / 60);
  const remainder = Math.round(total % 60);
  return `${minutes}分${remainder}秒`;
}

function renderAccessGrid() {
  const items = Object.entries(platformConfig).filter(([key]) => key !== "all");
  document.querySelector("#accessGrid").innerHTML = items
    .map(
      ([key, platform]) => `
        <article class="access-card ${state.platform === key ? "active" : ""}" data-status="${platform.status}">
          <div>
            <strong>${platform.label}</strong>
            <span>${platform.source}</span>
          </div>
          <em>${platform.status}</em>
          <p>${platform.note}</p>
        </article>
      `,
    )
    .join("");
}

function renderLiveKpis() {
  if (liveRoomRows.length) {
    const data = liveTotals();
    const kpis = [
      ["直播间曝光", metricDisplay(data.roomImpressions), `曝光进入率 ${percentOrDash(rate(data.viewers, data.roomImpressions))}`],
      ["观看人数", metricDisplay(data.viewers), `观看成交率 ${percentOrDash(rate(data.payers, data.viewers))}`],
      ["商品卡点击", metricDisplay(data.productCardClicks), `商卡点击率 ${percentOrDash(rate(data.productCardClicks, data.productCardImpressions))}`],
      ["整体消耗", data.cost === null ? "-" : money(data.cost), `支付订单 ${metricDisplay(data.orders)}`],
    ];
    document.querySelector("#liveKpiList").innerHTML = kpis
      .map(
        ([label, value, note]) => `
          <article class="live-kpi">
            <span>${label}</span>
            <strong>${value}</strong>
            <small>${note}</small>
          </article>
        `,
      )
      .join("");
    return;
  }

  const data = totals();
  const kpis = [
    ["曝光", compact(data.impressions), "广告触达规模"],
    ["点击", compact(data.clicks), `点击率 ${((data.clicks / data.impressions) * 100).toFixed(2)}%`],
    ["进入", compact(data.enters), `点击后进入率 ${((data.enters / data.clicks) * 100).toFixed(1)}%`],
    ["观看", compact(data.viewers), `进入后观看率 ${((data.viewers / data.enters) * 100).toFixed(1)}%`],
  ];

  document.querySelector("#liveKpiList").innerHTML = kpis
    .map(
      ([label, value, note]) => `
        <article class="live-kpi">
          <span>${label}</span>
          <strong>${value}</strong>
          <small>${note}</small>
        </article>
      `,
    )
    .join("");
}

function renderFunnel() {
  if (liveRoomRows.length) {
    const data = liveTotals();
    const steps = [
      ["直播间曝光", data.roomImpressions],
      ["观看人数", data.viewers],
      ["商卡曝光", data.productCardImpressions],
      ["商卡点击", data.productCardClicks],
      ["支付人数", data.payers],
      ["支付订单", data.orders],
    ];
    const max = Math.max(...steps.map(([, value]) => Number(value) || 0), 1);
    document.querySelector("#funnel").innerHTML = steps
      .map(([label, value], index) => {
        const width = value === null ? 0 : Math.max((Number(value) / max) * 100, value ? 3 : 0);
        return `
          <div class="funnel-step">
            <span>${label}</span>
            <div class="bar"><span style="--w: ${width}%; --c: ${colors[index % colors.length]}"></span></div>
            <span>${metricDisplay(value)}</span>
          </div>
        `;
      })
      .join("");
    return;
  }

  const data = totals();
  const steps = [
    ["曝光", data.impressions],
    ["点击", data.clicks],
    ["进入", data.enters],
    ["观看", data.viewers],
    ["互动", data.interactions],
    ["下单", data.orders],
  ];
  const max = steps[0][1];
  document.querySelector("#funnel").innerHTML = steps
    .map(([label, value], index) => {
      const percent = Math.max((value / max) * 100, 3);
      return `
        <div class="funnel-step">
          <span>${label}</span>
          <div class="bar"><span style="--w: ${percent}%; --c: ${colors[index % colors.length]}"></span></div>
          <span>${compact(value)}</span>
        </div>
      `;
    })
    .join("");
}

function renderTable() {
  if (liveRoomRows.length) {
    const rows = liveRowsForPeriod().map(
      (row) => `
        <tr>
          <td>${escapeHtml(row.date)}</td>
          <td>${escapeHtml(row.platform)}</td>
          <td>${escapeHtml(row.liveRoomName)}</td>
          <td>${escapeHtml(row.projectName)}</td>
          <td>${escapeHtml(row.duration || "-")}</td>
          <td>${numberOrDash(row.roomImpressions)}</td>
          <td>${numberOrDash(row.viewers)}</td>
          <td>${numberOrDash(row.productCardImpressions)}</td>
          <td>${numberOrDash(row.productCardClicks)}</td>
          <td>${numberOrDash(row.payers)}</td>
          <td>${numberOrDash(row.commenters)}</td>
          <td>${money(row.cost)}</td>
          <td>${numberOrDash(row.orders)}</td>
          <td>${numberOrDash(row.hourlyPayers)}</td>
          <td>${numberOrDash(row.hourlyViewers)}</td>
          <td>${liveRate(row.exposureEnterRate)}</td>
          <td>${liveRate(row.productCardClickRate)}</td>
          <td>${liveRate(row.clickPayRate)}</td>
          <td>${liveRate(row.viewPayRate)}</td>
        </tr>
      `,
    );
    document.querySelector("#roomTable").innerHTML =
      rows.join("") || `<tr><td colspan="19" class="empty-cell">当前筛选条件下暂无直播间数据</td></tr>`;
    return;
  }

  const rows = selectedRoomSummaries().map((room) => {
    const ctr = (room.clicks / room.impressions) * 100;
    const enterRate = (room.enters / room.clicks) * 100;
    const roi = room.gmv / room.cost;
    const advice = roi >= 6 ? "放量" : roi >= 4.5 ? "稳投" : "控本";
    return `
      <tr>
        <td>${room.name}</td>
        <td>${compact(room.impressions)}</td>
        <td>${ctr.toFixed(2)}%</td>
        <td>${enterRate.toFixed(1)}%</td>
        <td>${money(room.gmv)}</td>
        <td>${roi.toFixed(2)}</td>
        <td>${money(room.avgOrder)}</td>
        <td><span class="tag">${advice}</span></td>
      </tr>
    `;
  });
  document.querySelector("#roomTable").innerHTML = rows.join("");
}

function renderAccountDetails() {
  const rows = platformSpendRows.length ? spendRowsForPeriod() : accountRows();
  const groupedRows = accountGroupedRows(rows);
  const totalCost = groupedRows.reduce((sum, row) => sum + row.cost, 0);
  const groups = groupedRows.reduce((output, row) => {
    if (!output[row.platform]) {
      output[row.platform] = { platform: row.platform, cost: 0, gmv: 0, impressions: 0, orders: 0 };
    }
    output[row.platform].cost += row.cost;
    output[row.platform].accountCount = (output[row.platform].accountCount || 0) + row.accountCount;
    output[row.platform].projectCount = (output[row.platform].projectCount || 0) + row.projectCount;
    return output;
  }, {});

  if (!groupedRows.length) {
    document.querySelector("#accountInsights").innerHTML = "";
    document.querySelector("#accountSummary").innerHTML = `
      <article class="account-card">
        <span>暂无消耗数据</span>
        <strong>¥0</strong>
        <small>${selectedPeriodLabel()} 没有匹配到飞书投放平台数据</small>
        <div class="bar"><span style="--w: 0%; --c: var(--primary)"></span></div>
      </article>
    `;
    document.querySelector("#accountTable").innerHTML = `
      <tr><td colspan="${accountTableColumns(0).length}">当前周期和平台暂无账户数据，请切换日期、月份或投放平台查看。</td></tr>
    `;
    renderAccountTableHead(0);
    renderAccountDrilldown(null, 0);
    return;
  }

  renderAccountInsights(groupedRows, totalCost);

  document.querySelector("#accountSummary").innerHTML = Object.values(groups)
    .map((group) => {
      const percent = (group.cost / totalCost) * 100;
      return `
        <article class="account-card">
          <span>${escapeHtml(group.platform)}</span>
          <strong>${money(group.cost)}</strong>
          <small>${group.accountCount} 个账户 · ${group.projectCount} 个项目</small>
          <div class="bar"><span style="--w: ${percent}%; --c: ${platformColor(group.platform)}"></span></div>
        </article>
      `;
    })
    .join("");

  if (!groupedRows.some((row) => row.key === state.selectedAccountKey)) {
    state.selectedAccountKey = groupedRows[0].key;
  }

  const columns = accountTableColumns(totalCost);
  renderAccountTableHead(totalCost);
  document.querySelector("#accountTable").innerHTML = groupedRows
    .map((row) => {
      return `
        <tr class="interactive-row ${row.key === state.selectedAccountKey ? "active" : ""}" data-account-key="${encodeURIComponent(row.key)}" tabindex="0" aria-selected="${row.key === state.selectedAccountKey}">
          ${columns.map((column) => `<td style="width: ${accountColumnWidth(column.key)}px">${column.render(row, totalCost)}</td>`).join("")}
        </tr>
      `;
    })
    .join("");
  bindColumnResize();

  document.querySelectorAll("#accountTable .interactive-row").forEach((row) => {
    row.addEventListener("click", () => selectAccountRow(row.dataset.accountKey));
    row.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        selectAccountRow(row.dataset.accountKey);
      }
    });
  });
  document.querySelectorAll("#accountTable .account-link-button").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      showAccountDetailModal(button.dataset.accountDetailKey);
    });
  });

  renderAccountDrilldown(
    groupedRows.find((row) => row.key === state.selectedAccountKey),
    totalCost,
  );
}

function accountTableColumns(totalCost) {
  const columnMap = {
    platform: {
      key: "platform",
      label: "平台",
      exportValue: (row) => row.platform,
      render: (row) =>
        `<span class="platform-cell" style="--dot: ${platformColor(row.platform)}">${escapeHtml(row.platform)}</span>`,
    },
    dimensionId: {
      key: "dimensionId",
      label: state.accountDimension === "project" ? "项目ID" : "账号ID",
      exportValue: (row) => row.dimensionId,
      render: (row) => escapeHtml(row.dimensionId),
    },
    name: {
      key: "name",
      label: state.accountDimension === "project" ? "项目" : "投放账户",
      exportValue: (row) => row.name,
      render: (row) => `<strong class="project-name-cell">${escapeHtml(row.name)}</strong>`,
    },
    cost: {
      key: "cost",
      label: "消耗",
      exportValue: (row) => row.cost,
      render: (row) => money(row.cost),
    },
    impressions: metricColumn("impressions", "曝光", (value) => numberOrDash(value)),
    clicks: metricColumn("clicks", "点击", (value) => numberOrDash(value)),
    ctr: {
      key: "ctr",
      label: "CTR",
      exportValue: (row) => percentOrDash(rate(row.clicks, row.impressions)),
      render: (row) => percentOrDash(rate(row.clicks, row.impressions)),
    },
    cpc: {
      key: "cpc",
      label: "CPC",
      exportValue: (row) => valueOrDash(row.clicks ? row.cost / row.clicks : row.cpc),
      render: (row) => moneyOrDash(row.clicks ? row.cost / row.clicks : row.cpc),
    },
    cpm: {
      key: "cpm",
      label: "CPM",
      exportValue: (row) => valueOrDash(row.impressions ? (row.cost / row.impressions) * 1000 : row.cpm),
      render: (row) => moneyOrDash(row.impressions ? (row.cost / row.impressions) * 1000 : row.cpm),
    },
    likes: metricColumn("likes", "点赞", (value) => numberOrDash(value)),
    comments: metricColumn("comments", "评论", (value) => numberOrDash(value)),
    favorites: metricColumn("favorites", "收藏", (value) => numberOrDash(value)),
    follows: metricColumn("follows", "关注", (value) => numberOrDash(value)),
    shares: metricColumn("shares", "分享", (value) => numberOrDash(value)),
    interactions: metricColumn("interactions", "互动数", (value) => numberOrDash(value)),
    interactionRate: {
      key: "interactionRate",
      label: "互动率",
      exportValue: (row) => percentOrDash(rate(row.interactions, row.impressions)),
      render: (row) => percentOrDash(rate(row.interactions, row.impressions)),
    },
    accountCount: {
      key: "accountCount",
      label: "投放账户数量",
      exportValue: (row) => row.accountCount,
      render: (row) => `
        <button class="account-link-button" data-account-detail-key="${encodeURIComponent(row.key)}" type="button">
          查看 ${row.accountCount} 个账户
        </button>
      `,
    },
    projectCount: {
      key: "projectCount",
      label: "关联项目",
      exportValue: (row) => row.projectCount,
      render: (row) => row.projectCount,
    },
    share: {
      key: "share",
      label: "占比",
      exportValue: (row) => `${accountShare(row, totalCost).toFixed(1)}%`,
      render: (row) => `${accountShare(row, totalCost).toFixed(1)}%`,
    },
    dateRange: {
      key: "dateRange",
      label: "日期范围",
      exportValue: (row) => row.dateRange,
      render: (row) => escapeHtml(row.dateRange),
    },
    source: {
      key: "source",
      label: "来源",
      exportValue: (row) => row.source,
      render: (row) => escapeHtml(row.source),
    },
    rawPlatform: textColumn("rawPlatform", "原始平台"),
    company: textColumn("company", "主体公司"),
    updatedAt: textColumn("updatedAt", "更新时间"),
    note: textColumn("note", "备注"),
  };
  const visibleKeys = state.accountVisibleFields.length ? state.accountVisibleFields : [...defaultAccountFields];
  return visibleKeys.map((key) => columnMap[key]).filter(Boolean);
}

function renderAccountTableHead(totalCost) {
  const columns = accountTableColumns(totalCost);
  document.querySelector("#accountTableHead").innerHTML = `
    <tr>
      ${columns
        .map(
          (column) => `
            <th style="width: ${accountColumnWidth(column.key)}px">
              <span>${escapeHtml(column.label)}</span>
              <button class="column-resize-handle" data-resize-column="${column.key}" type="button" aria-label="调整${escapeHtml(column.label)}列宽"></button>
            </th>
          `,
        )
        .join("")}
    </tr>
  `;
}

function accountColumnWidth(key) {
  return accountColumnWidths[key] || 160;
}

function bindColumnResize() {
  document.querySelectorAll("[data-resize-column]").forEach((handle) => {
    handle.addEventListener("pointerdown", (event) => {
      event.preventDefault();
      event.stopPropagation();
      const key = handle.dataset.resizeColumn;
      const columnIndex = accountTableColumns(0).findIndex((column) => column.key === key) + 1;
      const startX = event.clientX;
      const startWidth = accountColumnWidth(key);
      document.body.classList.add("column-resizing");
      handle.setPointerCapture?.(event.pointerId);

      const updateWidth = (moveEvent) => {
        const nextWidth = Math.max(96, Math.min(720, startWidth + moveEvent.clientX - startX));
        accountColumnWidths[key] = nextWidth;
        document
          .querySelectorAll(`#accountTableHead th:nth-child(${columnIndex}), #accountTable td:nth-child(${columnIndex})`)
          .forEach((cell) => {
            cell.style.width = `${nextWidth}px`;
          });
      };

      const stopResize = () => {
        document.body.classList.remove("column-resizing");
        window.removeEventListener("pointermove", updateWidth);
        window.removeEventListener("pointerup", stopResize);
      };

      window.addEventListener("pointermove", updateWidth);
      window.addEventListener("pointerup", stopResize, { once: true });
    });
  });
}

function accountShare(row, totalCost) {
  return totalCost ? (row.cost / totalCost) * 100 : 0;
}

function metricColumn(key, label, formatter) {
  return {
    key,
    label,
    exportValue: (row) => valueOrDash(row[key]),
    render: (row) => formatter(row[key]),
  };
}

function textColumn(key, label) {
  return {
    key,
    label,
    exportValue: (row) => row[key] || "",
    render: (row) => escapeHtml(row[key] || "-"),
  };
}

function rate(numerator, denominator) {
  return denominator ? (Number(numerator || 0) / Number(denominator)) * 100 : null;
}

function valueOrDash(value) {
  return value === null || value === undefined || value === "" ? "" : Number(value || 0).toFixed(2);
}

function numberOrDash(value) {
  if (!Number(value || 0)) return "-";
  return Number(value).toLocaleString("zh-CN", { maximumFractionDigits: 2 });
}

function percentOrDash(value) {
  return value === null || value === undefined || Number.isNaN(value) ? "-" : `${Number(value).toFixed(2)}%`;
}

function liveRate(value) {
  const number = Number(value);
  if (!Number.isFinite(number) || number === 0) return "-";
  return percentOrDash(number * 100);
}

function moneyOrDash(value) {
  return value === null || value === undefined || Number.isNaN(value) ? "-" : money(value);
}

function openFieldConfigModal() {
  renderFieldConfigOptions();
  const modal = document.querySelector("#fieldConfigModal");
  modal.classList.add("visible");
  modal.setAttribute("aria-hidden", "false");
  document.querySelector("#closeFieldConfig").focus();
}

function closeFieldConfigModal() {
  const modal = document.querySelector("#fieldConfigModal");
  if (!modal.classList.contains("visible")) return;
  modal.classList.remove("visible");
  modal.setAttribute("aria-hidden", "true");
}

function renderFieldConfigOptions() {
  const groups = accountFieldOptions.reduce((output, field) => {
    output[field.group] = output[field.group] || [];
    output[field.group].push(field);
    return output;
  }, {});

  document.querySelector("#fieldConfigBody").innerHTML = Object.entries(groups)
    .map(
      ([group, fields]) => `
        <section class="field-group">
          <strong>${escapeHtml(group)}</strong>
          <div>
            ${fields
              .map((field) => {
                const label = accountFieldLabel(field);
                return `
                  <label class="field-option">
                    <input type="checkbox" value="${field.key}" ${state.accountVisibleFields.includes(field.key) ? "checked" : ""} />
                    <span>${escapeHtml(label)}</span>
                  </label>
                `;
              })
              .join("")}
          </div>
        </section>
      `,
    )
    .join("");

  document.querySelectorAll("#fieldConfigBody input").forEach((input) => {
    input.addEventListener("change", () => {
      const checked = [...document.querySelectorAll("#fieldConfigBody input:checked")].map((item) => item.value);
      if (!checked.length) {
        input.checked = true;
        showToast("至少保留一个字段");
        return;
      }
      state.accountVisibleFields = checked;
      renderAccountDetails();
    });
  });
}

function accountFieldLabel(field) {
  if (field.key === "dimensionId") return state.accountDimension === "project" ? "项目ID" : "账号ID";
  if (field.key === "name") return state.accountDimension === "project" ? "项目" : "投放账户";
  if (field.key === "accountCount") return "投放账户数量";
  return field.label;
}

function applyFieldPreset(preset) {
  state.accountVisibleFields = [...accountFieldPresets[preset]];
  renderFieldConfigOptions();
  renderAccountDetails();
  showToast(preset === "basic" ? "已切换基础视图" : "已切换效果指标视图");
}

function exportCsv() {
  if (liveRoomRows.length) {
    const headers = [
      "日期",
      "平台",
      "直播间名称",
      "项目名称",
      "直播时长",
      "直播间曝光人数",
      "观看人数",
      "商品卡曝光人数",
      "商品卡点击人数",
      "支付人数",
      "评论人数",
      "整体消耗",
      "整体支付订单数",
      "单小时成交人数",
      "单小时场观",
      "曝光进入率",
      "商卡点击率",
      "点击成交率",
      "观看成交率",
    ];
    const rows = liveRowsForPeriod().map((row) => [
      row.date,
      row.platform,
      row.liveRoomName,
      row.projectName,
      row.duration,
      row.roomImpressions,
      row.viewers,
      row.productCardImpressions,
      row.productCardClicks,
      row.payers,
      row.commenters,
      row.cost,
      row.orders,
      row.hourlyPayers,
      row.hourlyViewers,
      liveRate(row.exposureEnterRate),
      liveRate(row.productCardClickRate),
      liveRate(row.clickPayRate),
      liveRate(row.viewPayRate),
    ]);
    downloadCsv(`直播间基础数据-${selectedPeriodLabel()}.csv`, [headers, ...rows]);
    showToast("已导出直播间基础数据");
    return;
  }

  const rows = selectedRoomSummaries().map((room) => [
    selectedPeriodLabel(),
    room.name,
    room.impressions,
    `${((room.clicks / room.impressions) * 100).toFixed(2)}%`,
    `${((room.enters / room.clicks) * 100).toFixed(1)}%`,
    room.gmv,
    (room.gmv / room.cost).toFixed(2),
    room.avgOrder,
  ]);
  const csv = [["周期", "直播间", "曝光", "点击率", "进入率", "成交GMV", "ROI", "客单价"], ...rows]
    .map((row) => row.join(","))
    .join("\n");
  downloadCsv(`广告投放看板-${selectedPeriodLabel()}.csv`, csv);
}

function exportAccountCsv() {
  const groupedRows = accountGroupedRows(platformSpendRows.length ? spendRowsForPeriod() : accountRows());
  const totalCost = groupedRows.reduce((sum, row) => sum + row.cost, 0);
  const columns = accountTableColumns(totalCost);
  const rows = groupedRows.map((row) => [
    selectedPeriodLabel(),
    state.accountDimension === "project" ? "项目维度" : "账户维度",
    ...columns.map((column) => column.exportValue(row)),
  ]);
  const csv = [["周期", "维度", ...columns.map((column) => column.label)], ...rows]
    .map((row) => row.join(","))
    .join("\n");
  downloadCsv(`全平台账户消耗明细-${accountPlatformLabel()}-${selectedPeriodLabel()}.csv`, csv);
  showToast("已导出当前筛选视图");
}

function downloadCsv(filename, csvRows) {
  const csv = Array.isArray(csvRows)
    ? csvRows.map((row) => row.map((cell) => `"${String(cell ?? "").replaceAll('"', '""')}"`).join(",")).join("\n")
    : csvRows;
  const blob = new Blob([`\ufeff${csv}`], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}

function spendRowsForPeriod() {
  const range = selectedDateRange();
  const matchPlatform = (row) => state.accountPlatform === "all" || row.platform === state.accountPlatform;
  const matchPlatformSource = (row) =>
    state.accountPlatform !== "小红书" || state.accountPlatformSource === "all" || row.rawPlatform === state.accountPlatformSource;
  const matchRoom = (row) => state.room === "all" || selectedRoomMatchesRow(row);
  const matchSpend = (row) => !state.accountPositiveOnly || row.spend > 0;
  const matchProject = (row) =>
    state.accountDimension !== "project" || state.accountProject === "all" || relatedProjectName(row) === state.accountProject;
  return platformSpendRows.filter(
    (row) =>
      isDateInRange(row.date, range) &&
      matchPlatform(row) &&
      matchPlatformSource(row) &&
      matchRoom(row) &&
      matchSpend(row) &&
      matchProject(row),
  );
}

function groupedSpendRows(rows) {
  const groups = rows.reduce((output, row) => {
    const projectName = relatedProjectName(row);
    const projectId = relatedProjectId(row);
    const accountName = relatedAccountName(row);
    const accountId = relatedAccountId(row);
    const liveRoomName = relatedLiveRoomName(row);
    const channelCode = relatedChannelCode(row);
    const name = state.accountDimension === "project" ? projectName : accountName;
    const key = `${row.platform}::${name}`;
    if (!output[key]) {
      output[key] = {
        key,
        platform: row.platform,
        name,
        cost: 0,
        ids: new Set(),
        accounts: new Set(),
        projects: new Set(),
        dates: new Set(),
        sources: new Set(),
        rawPlatforms: new Set(),
        companies: new Set(),
        notes: new Set(),
        updatedAt: "",
        metrics: Object.fromEntries(metricKeys.map((key) => [key, 0])),
        accountDetails: new Map(),
        projectDetails: new Map(),
      };
    }
    output[key].cost += row.spend;
    metricKeys.forEach((metricKey) => {
      output[key].metrics[metricKey] += Number(row[metricKey] || 0);
    });
    output[key].ids.add(state.accountDimension === "project" ? projectId : accountId);
    output[key].accounts.add(`${accountId}-${accountName}`);
    output[key].projects.add(projectName);
    output[key].dates.add(row.date);
    output[key].sources.add(row.source);
    if (row.rawPlatform) output[key].rawPlatforms.add(row.rawPlatform);
    if (row.company) output[key].companies.add(row.company);
    if (row.note) output[key].notes.add(row.note);
    if (row.updatedAt && (!output[key].updatedAt || row.updatedAt > output[key].updatedAt)) output[key].updatedAt = row.updatedAt;
    const accountKey = `${accountId}-${accountName}`;
    const accountDetail = output[key].accountDetails.get(accountKey) || {
      id: accountId,
      name: accountName,
      liveRoomName,
      channelCode,
      spend: 0,
      dates: new Set(),
      source: row.source,
    };
    accountDetail.spend += row.spend;
    accountDetail.dates.add(row.date);
    if (liveRoomName) accountDetail.liveRoomName = liveRoomName;
    if (channelCode) accountDetail.channelCode = channelCode;
    output[key].accountDetails.set(accountKey, accountDetail);
    const projectKey = `${projectId}-${projectName}`;
    const projectDetail = output[key].projectDetails.get(projectKey) || {
      id: projectId,
      name: projectName,
      spend: 0,
    };
    projectDetail.spend += row.spend;
    output[key].projectDetails.set(projectKey, projectDetail);
    return output;
  }, {});

  return Object.values(groups)
    .map((group) => {
      const dates = [...group.dates].sort();
      return {
        key: group.key,
        platform: group.platform,
        dimensionId: [...group.ids].filter(Boolean).join(" / ") || "-",
        name: group.name,
        cost: Math.round(group.cost * 100) / 100,
        accountCount: group.accounts.size,
        projectCount: group.projects.size,
        dateRange: dates.length > 1 ? `${dates[0]} 至 ${dates[dates.length - 1]}` : dates[0],
        source: [...group.sources].join(" / "),
        ...Object.fromEntries(metricKeys.map((key) => [key, Math.round((group.metrics[key] || 0) * 100) / 100])),
        cpc: group.metrics.clicks ? group.cost / group.metrics.clicks : null,
        cpm: group.metrics.impressions ? (group.cost / group.metrics.impressions) * 1000 : null,
        rawPlatform: [...group.rawPlatforms].join(" / "),
        company: [...group.companies].join(" / "),
        note: [...group.notes].join(" / "),
        updatedAt: group.updatedAt,
        accountDetails: [...group.accountDetails.values()]
          .map((account) => {
            const accountDates = [...account.dates].sort();
            return {
              id: account.id,
              name: account.name,
              liveRoomName: account.liveRoomName || "",
              channelCode: account.channelCode || "",
              spend: Math.round(account.spend * 100) / 100,
              dateRange:
                accountDates.length > 1
                  ? `${accountDates[0]} 至 ${accountDates[accountDates.length - 1]}`
                  : accountDates[0],
              source: account.source,
            };
          })
          .sort((a, b) => b.spend - a.spend),
        projectDetails: [...group.projectDetails.values()]
          .map((project) => ({
            id: project.id,
            name: project.name,
            spend: Math.round(project.spend * 100) / 100,
          }))
          .sort((a, b) => b.spend - a.spend),
      };
    })
    .sort((a, b) => b.cost - a.cost);
}

function accountGroupedRows(rows) {
  const groupedRows = platformSpendRows.length
    ? groupedSpendRows(rows)
    : rows.map((row) => ({
        key: `${row.platform}::${row.account}`,
        platform: row.platform,
        dimensionId: row.account,
        name: row.account,
        cost: row.cost,
        accountCount: 1,
        projectCount: 1,
        dateRange: selectedPeriodLabel(),
        source: row.status,
        accountDetails: [{ id: "-", name: row.account, spend: row.cost, dateRange: selectedPeriodLabel(), source: row.status }],
        projectDetails: [{ id: "-", name: row.account, spend: row.cost }],
      }));
  const query = state.accountSearch.toLowerCase();
  return groupedRows
    .filter((row) => {
      if (!query) return true;
      const accountText = (row.accountDetails || [])
        .map((account) => [account.name, account.id, account.liveRoomName, account.channelCode].join(" "))
        .join(" ");
      return [row.platform, row.dimensionId, row.name, row.source, row.dateRange, accountText].join(" ").toLowerCase().includes(query);
    })
    .sort(accountSort);
}

function accountSort(a, b) {
  if (state.accountSort === "cost-asc") return a.cost - b.cost;
  if (state.accountSort === "name") return a.name.localeCompare(b.name, "zh-CN");
  if (state.accountSort === "platform") {
    return a.platform.localeCompare(b.platform, "zh-CN") || b.cost - a.cost;
  }
  return b.cost - a.cost;
}

function renderAccountInsights(rows, totalCost) {
  const topRow = [...rows].sort((a, b) => b.cost - a.cost)[0];
  const topPlatform = Object.entries(
    rows.reduce((output, row) => {
      output[row.platform] = (output[row.platform] || 0) + row.cost;
      return output;
    }, {}),
  ).sort((a, b) => b[1] - a[1])[0];
  const topShare = totalCost && topRow ? (topRow.cost / totalCost) * 100 : 0;
  const chips = [
    ["当前视图", state.accountDimension === "project" ? "项目维度" : "账户维度"],
    ["明细条数", `${rows.length} 条`],
    ["主消耗平台", topPlatform ? `${topPlatform[0]} ${((topPlatform[1] / totalCost) * 100).toFixed(1)}%` : "暂无"],
    ["最高占比", `${topShare.toFixed(1)}%`],
  ];
  document.querySelector("#accountInsights").innerHTML = chips
    .map(
      ([label, value]) => `
        <span class="insight-chip">
          <small>${escapeHtml(label)}</small>
          <strong>${escapeHtml(value)}</strong>
        </span>
      `,
    )
    .join("");
}

function renderAccountDrilldown(row, totalCost) {
  const target = document.querySelector("#accountDrilldown");
  if (!row) {
    target.innerHTML = `
      <div class="drilldown-empty">
        <strong>暂无可展开明细</strong>
        <span>切换日期、平台或搜索条件后再查看。</span>
      </div>
    `;
    return;
  }
  const share = totalCost ? (row.cost / totalCost) * 100 : 0;
  target.innerHTML = `
    <div class="drilldown-head">
      <div>
        <p class="eyebrow">SELECTED DETAIL</p>
        <strong>${escapeHtml(row.name)}</strong>
      </div>
      <span class="platform-cell" style="--dot: ${platformColor(row.platform)}">${escapeHtml(row.platform)}</span>
    </div>
    <div class="drilldown-grid">
      <span><small>消耗</small><strong>${money(row.cost)}</strong></span>
      <span><small>占比</small><strong>${share.toFixed(1)}%</strong></span>
      <span><small>关联账户</small><strong>${row.accountCount}</strong></span>
      <span><small>关联项目</small><strong>${row.projectCount}</strong></span>
    </div>
    <div class="drilldown-meta">
      <span>${escapeHtml(row.dateRange)}</span>
      <span>${escapeHtml(row.source)}</span>
    </div>
    <div class="bar"><span style="--w: ${Math.max(share, 1)}%; --c: ${platformColor(row.platform)}"></span></div>
  `;
}

function selectAccountRow(encodedKey) {
  state.selectedAccountKey = decodeURIComponent(encodedKey);
  renderAccountDetails();
}

function showAccountDetailModal(encodedKey) {
  const key = decodeURIComponent(encodedKey);
  const rows = accountGroupedRows(platformSpendRows.length ? spendRowsForPeriod() : accountRows());
  const row = rows.find((item) => item.key === key);
  if (!row) return;
  const modal = document.querySelector("#accountDetailModal");
  document.querySelector("#accountDetailTitle").textContent = `${row.name} · 投放账户明细`;
  document.querySelector("#accountDetailBody").innerHTML = `
    <div class="detail-summary">
      <span><small>平台</small><strong>${escapeHtml(row.platform)}</strong></span>
      <span><small>账户数</small><strong>${row.accountCount}</strong></span>
      <span><small>项目/账户消耗</small><strong>${money(row.cost)}</strong></span>
      <span><small>日期范围</small><strong>${escapeHtml(row.dateRange)}</strong></span>
    </div>
    <div class="detail-list">
      ${row.accountDetails
        .map(
          (account, index) => `
            <article class="detail-account-row">
              <span class="detail-rank">${index + 1}</span>
              <div>
                <strong>${escapeHtml(account.name)}</strong>
                <small>
                  ID ${escapeHtml(account.id)} · ${escapeHtml(account.dateRange)}
                  ${account.liveRoomName ? ` · 直播间 ${escapeHtml(account.liveRoomName)}` : ""}
                  ${account.channelCode ? ` · 渠道码 ${escapeHtml(account.channelCode)}` : ""}
                </small>
              </div>
              <strong>${money(account.spend)}</strong>
            </article>
          `,
        )
        .join("")}
    </div>
  `;
  modal.classList.add("visible");
  modal.setAttribute("aria-hidden", "false");
  document.querySelector("#closeAccountDetail").focus();
}

function closeAccountDetailModal() {
  const modal = document.querySelector("#accountDetailModal");
  if (!modal.classList.contains("visible")) return;
  modal.classList.remove("visible");
  modal.setAttribute("aria-hidden", "true");
}

function accountRows() {
  const data = totals();
  return accountConfig.map((account) => {
    const cost = Math.round(data.cost * account.share);
    const gmv = Math.round(cost * (data.gmv / data.cost) * account.roiDelta);
    const impressions = Math.round(data.impressions * account.share * (account.roiDelta > 1 ? 1.04 : 0.96));
    const clicks = Math.round(data.clicks * account.share * (account.roiDelta > 1 ? 1.06 : 0.94));
    const orders = Math.round(data.orders * account.share * account.roiDelta);
    return { ...account, cost, gmv, impressions, clicks, orders };
  });
}

function platformColor(platform) {
  if (platform === "小红书") return "var(--coral)";
  if (platform === "视频号") return "var(--teal)";
  return "var(--primary)";
}

function statusClass(status) {
  if (status === "放量") return "tag-strong";
  if (status === "控本") return "tag-danger";
  if (status === "观察") return "tag-watch";
  return "";
}

function selectedRoomSummaries() {
  const roomKeys = state.room === "all" || selectedRoomInfo() || !selectedDay().rooms[state.room] ? Object.keys(selectedDay().rooms) : [state.room];
  return roomKeys.map((key) => {
    const rooms = selectedDays().map((day) => day.rooms[key]);
    const summary = rooms.reduce(
      (sum, room) => {
        Object.keys(sum).forEach((field) => {
          if (field !== "name") sum[field] += room[field] || 0;
        });
        return sum;
      },
      {
        name: rooms[0].name,
        cost: 0,
        impressions: 0,
        clicks: 0,
        enters: 0,
        viewers: 0,
        interactions: 0,
        orders: 0,
        gmv: 0,
        avgOrder: 0,
      },
    );
    summary.avgOrder = summary.orders ? Math.round(summary.gmv / summary.orders) : 0;
    return summary;
  });
}

function trendBuckets() {
  if (state.view === "room" && liveRoomRows.length) return liveTrendBuckets();
  const range = state.granularity === "day" ? { start: shiftDate(state.date, -13), end: state.date } : selectedDateRange();
  return dailyData
    .filter((day) => isDateInRange(day.date, range))
    .map((day) => ({ label: day.date.slice(5), data: totals(day) }))
    .filter((bucket) => hasTrendData(bucket.data));
}

function liveTrendBuckets() {
  const range = state.granularity === "day" ? { start: shiftDate(state.date, -13), end: state.date } : selectedDateRange();
  const platform = currentRoomPlatformFilter();
  const room = selectedRoomInfo();
  const groups = liveRoomRows
    .filter((row) => isDateInRange(row.date, range))
    .filter((row) => platform === "all" || row.platform === platform)
    .filter((row) => !room || (row.platform === room.platform && canonicalRoomName(row.liveRoomName) === canonicalRoomName(room.name)))
    .reduce((output, row) => {
      output[row.date] = output[row.date] || {
        label: row.date.slice(5),
        data: { cost: 0, viewers: 0, payers: 0, roomImpressions: 0, productCardClicks: 0, orders: 0 },
      };
      output[row.date].data.cost += Number(row.cost || 0);
      output[row.date].data.viewers += Number(row.viewers || 0);
      output[row.date].data.payers += Number(row.payers || 0);
      output[row.date].data.roomImpressions += Number(row.roomImpressions || 0);
      output[row.date].data.productCardClicks += Number(row.productCardClicks || 0);
      output[row.date].data.orders += Number(row.orders || 0);
      return output;
    }, {});

  return Object.entries(groups)
    .sort(([dateA], [dateB]) => dateA.localeCompare(dateB))
    .map(([, bucket]) => bucket)
    .filter((bucket) => hasTrendData(bucket.data));
}

function hasTrendData(data) {
  return ["cost", "viewers", "payers", "roomImpressions", "productCardClicks", "orders"]
    .some((key) => Number(data?.[key] || 0) > 0);
}

function selectedPeriodLabel() {
  if (state.granularity === "day") return state.date;
  const range = selectedDateRange();
  const labels = {
    custom: "自定义时间",
    "current-month": "本月",
    "last-month": "上月",
    "last-7": "近7日",
    "last-14": "近14日",
  };
  return `${labels[state.granularity] || "日期范围"} · ${range.start} 至 ${range.end}`;
}

function periodModeLabel() {
  const labels = {
    day: "按天汇总",
    custom: "自定义时间",
    "current-month": "本月",
    "last-month": "上月",
    "last-7": "近7日",
    "last-14": "近14日",
  };
  return labels[state.granularity] || "日期范围";
}

function accountPlatformLabel() {
  if (state.accountPlatform === "all") return "全部平台";
  if (state.accountPlatform === "小红书" && state.accountPlatformSource !== "all") {
    return `小红书 · ${platformSourceConfig[state.accountPlatformSource] || state.accountPlatformSource}`;
  }
  return state.accountPlatform;
}

function formatMonth(month) {
  const [year, value] = month.split("-");
  return `${year}年${value}月`;
}

function shiftDate(date, dayOffset) {
  const target = new Date(`${date}T00:00:00`);
  target.setDate(target.getDate() + dayOffset);
  return formatDate(target);
}

function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function formatDisplayDate(date) {
  return String(date || "").replaceAll("-", "/");
}

function barRow(label, value, width, color) {
  return `
    <div class="profile-row">
      <div class="row-top"><span>${label}</span><span>${value}</span></div>
      <div class="bar"><span style="--w: ${width}%; --c: ${color}"></span></div>
    </div>
  `;
}

function topEntry(object) {
  return Object.entries(object).sort((a, b) => b[1] - a[1])[0];
}

function money(value) {
  return `¥${Number(value || 0).toLocaleString("zh-CN", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
}

function compact(value) {
  if (value >= 10000) return `${(value / 10000).toFixed(1)}万`;
  return value.toLocaleString("zh-CN");
}

function metricDisplay(value) {
  return value === null || value === undefined || value === "" ? "-" : compact(value);
}

function compactLabel(value) {
  if (!value) return "暂无";
  return value.length > 14 ? `${value.slice(0, 14)}...` : value;
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function showToast(message) {
  const toast = document.querySelector("#toast");
  toast.textContent = message;
  toast.classList.add("visible");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("visible"), 2200);
}

function applyMotion() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const items = [
    ...document.querySelectorAll("#summaryCards .summary-card"),
    ...document.querySelectorAll(".view-section.active .panel"),
    ...document.querySelectorAll(".view-section.active .account-card"),
  ];
  items.forEach((item, index) => {
    item.classList.remove("motion-item");
    item.style.setProperty("--motion-index", Math.min(index, 10));
    requestAnimationFrame(() => item.classList.add("motion-item"));
  });
  bindPolishedInteractions();
}

function bindPolishedInteractions() {
  document.querySelectorAll(".summary-card, .panel, .account-card").forEach((item) => {
    if (item.dataset.glowBound === "true") return;
    item.dataset.glowBound = "true";
    item.addEventListener("pointermove", (event) => {
      const rect = item.getBoundingClientRect();
      item.style.setProperty("--mx", `${event.clientX - rect.left}px`);
      item.style.setProperty("--my", `${event.clientY - rect.top}px`);
    });
  });

  document
    .querySelectorAll(".nav-item, .icon-button, .text-button, .metric-tab, .dimension-trigger, .account-link-button")
    .forEach((item) => {
      if (item.dataset.pressBound === "true") return;
      item.dataset.pressBound = "true";
      item.addEventListener("pointerdown", () => {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        item.animate(
          [
            { transform: "scale(1)" },
            { transform: "scale(0.985)" },
            { transform: "scale(1)" },
          ],
          { duration: 180, easing: "cubic-bezier(0.16, 1, 0.3, 1)" },
        );
      });
    });
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function formatMetric(value) {
  if (state.metric === "roi") return value.toFixed(2);
  if (state.metric === "cost" || state.metric === "orderCost") return money(value);
  return value >= 10000 ? `${(value / 10000).toFixed(1)}万` : String(Math.round(value));
}

init();
