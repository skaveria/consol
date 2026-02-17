// SlabOS compositor
// - Fetch /api/state JSON
// - Replace {{tokens}} in-place (FIXED: no global-regex test bug)
// - Transform Org example panes into KV grids (restores flourish + colors)
// - Highlight active tab (no click interception)

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

function replaceTokens(state) {
  const testRe = /\{\{[a-zA-Z0-9_]+\}\}/;          // NON-global
  const replRe = /\{\{([a-zA-Z0-9_]+)\}\}/g;       // global replace

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

function transformPre(pre) {
  const raw = pre.textContent.replace(/\r\n/g, "\n").trimEnd();
  const lines = raw.split("\n").map(l => l.trimEnd()).filter(l => l.trim().length > 0);

  const kvLines = lines.map(splitKv).filter(Boolean);
  if (kvLines.length < Math.max(1, Math.floor(lines.length * 0.7))) return;

  const rows = kvLines.map(([k, v]) => {
    const klass = classifyValue(v);
    return `
      <div class="row">
        <div class="k">${escapeHtml(k)}</div>
        <div class="v ${klass}">${escapeHtml(v)}</div>
      </div>`;
  });

  pre.innerHTML = `<div class="kv">${rows.join("")}</div>`;
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

  // Org file links export as "index.html", "system.html", etc.
  const match = links.find(a => normalizePath(a.getAttribute("href") || "") === current);
  if (match) match.classList.add("active");
  else if (current === "index.html" && links.length) links[0].classList.add("active");
}

async function pollStateOnce() {
  const res = await fetch("/api/state", { cache: "no-store" });
  if (!res.ok) return null;
  return await res.json();
}

async function tick() {
  try {
    const state = await pollStateOnce();
    if (state) {
      // 1) replace tokens in the raw DOM first
      replaceTokens(state);
    }

    // 2) always transform panes (restores kv grid + flair)
    document.querySelectorAll("pre.example").forEach(transformPre);
  } catch (_) {
    // If fetch fails, still try to keep panes formatted
    document.querySelectorAll("pre.example").forEach(transformPre);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  highlightActiveTab();
  tick();
  setInterval(tick, 2500);
});
