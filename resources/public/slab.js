// SlabOS compositor (stable, idempotent)
//
// Responsibilities:
// 1) Highlight active tab
// 2) Fetch /api/state and replace {{tokens}} in text nodes
// 3) Transform pre.example panes ONCE into either:
//    - KV grid (if key/value-like)
//    - Plain pane text (otherwise)
//    - With optional @type tag (e.g. @art, @warn, @media, @note, @kv)
//
// IMPORTANT:
// - Never re-transform already processed panes (prevents scroll "fudging").
// - Never intercept link clicks (full page loads).

function escapeHtml(s) {
  return s.replaceAll("&", "&amp;")
          .replaceAll("<", "&lt;")
          .replaceAll(">", "&gt;");
}

function classifyValue(v) {
  const t = (v || "").toLowerCase();
  if (t.includes("error") || t.includes("failed") || t.includes("offline") || t.includes("down")) return "bad";
  if (t.includes("warn") || t.includes("charging") || t.includes("dirty") || t.includes("throttl") || t.includes("hot")) return "warn";
  return "";
}

function splitKv(line) {
  // Supports "key :: value" OR "key    value" (2+ spaces)
  if (line.includes("::")) {
    const parts = line.split("::");
    return [parts[0].trim(), parts.slice(1).join("::").trim()];
  }
  const m = line.match(/^\s*([^\s]+)\s{2,}(.+)$/);
  if (m) return [m[1].trim(), m[2].trim()];
  return null;
}

function normalizePath(p) {
  if (!p || p === "/") return "index.html";
  p = p.split("?")[0].split("#")[0];
  if (p.startsWith("/")) p = p.slice(1);
  return p;
}

function highlightActiveTab() {
  const bar = document.querySelector("h1 + p");
  if (!bar) return;

  const current = normalizePath(window.location.pathname);
  const links = Array.from(bar.querySelectorAll("a"));

  links.forEach(a => a.classList.remove("active"));

  const match = links.find(a => normalizePath(a.getAttribute("href") || "") === current);
  if (match) match.classList.add("active");
  else if (current === "index.html" && links.length) links[0].classList.add("active");
}

function replaceTokens(state) {
  // FIX: do NOT use a global regex in test() (it becomes stateful)
  const testRe = /\{\{[a-zA-Z0-9_]+\}\}/;        // non-global
  const replRe = /\{\{([a-zA-Z0-9_]+)\}\}/g;     // global replace

  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  let node;
  while ((node = walker.nextNode())) {
    const txt = node.textContent;
    if (!testRe.test(txt)) continue;

    node.textContent = txt.replace(replRe, (_, key) => {
      const v = state[key];
      return (v === undefined || v === null) ? "" : String(v);
    });
  }
}

function transformPaneOnce(pre) {
  // idempotence guard: never touch twice
  if (pre.dataset.slabTransformed === "1") return;

  // Mark immediately to prevent races
  pre.dataset.slabTransformed = "1";

  // Read raw text (before we mutate)
  const raw = pre.textContent.replace(/\r\n/g, "\n").trimEnd();
  let lines = raw.split("\n").map(l => l.trimEnd());

  // Optional pane type tag on first line: @art, @warn, @media, @note, @kv
  let paneType = null;
  if (lines.length && lines[0].startsWith("@")) {
    paneType = lines[0].slice(1).trim().toLowerCase();
    lines = lines.slice(1);
  }

  if (paneType) {
    pre.classList.add("pane-" + paneType);
  }

  // Determine if KV-like
  const nonEmpty = lines.filter(l => l.trim().length > 0);
  const kvPairs = nonEmpty.map(splitKv).filter(Boolean);

  const isKv = kvPairs.length >= Math.max(1, Math.floor(nonEmpty.length * 0.7));

  if (isKv) {
    pre.classList.add("pane-kv");

    const rows = kvPairs.map(([k, v]) => {
      const klass = classifyValue(v);
      return `
        <div class="row">
          <div class="k">${escapeHtml(k)}</div>
          <div class="v ${klass}">${escapeHtml(v)}</div>
        </div>`;
    });

    pre.innerHTML = `<div class="kv">${rows.join("")}</div>`;
  } else {
    // Plain pane: restore cleaned text (minus @tag)
    pre.textContent = lines.join("\n");
  }
}

async function fetchState() {
  try {
    const res = await fetch("/api/state", { cache: "no-store" });
    if (!res.ok) return null;
    return await res.json();
  } catch (_) {
    return null;
  }
}

async function tick() {
  const state = await fetchState();
  if (state) {
    replaceTokens(state);
  }

  // Transform panes only once (prevents scroll fudging)
  document.querySelectorAll("pre.example").forEach(transformPaneOnce);

  // After tokens change, update warn/bad classes inside kv values (safe)
  document.querySelectorAll("pre.example .v").forEach(v => {
    v.classList.remove("warn", "bad");
    const klass = classifyValue(v.textContent || "");
    if (klass) v.classList.add(klass);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  highlightActiveTab();
  tick();
  setInterval(tick, 2500);
});
