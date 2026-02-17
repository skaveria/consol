// SlabOS compositor
// Order:
// 1) fetch state
// 2) replace {{tokens}} in raw DOM
// 3) transform example panes into KV grids
// 4) highlight active tab
// 5) poll every 2.5s

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
  if (line.includes("::")) {
    const parts = line.split("::");
    return [parts[0].trim(), parts.slice(1).join("::").trim()];
  }
  const m = line.match(/^\s*([^\s]+)\s{2,}(.+)$/);
  if (m) return [m[1].trim(), m[2].trim()];
  return null;
}

function replaceTokens(state) {
  const re = /\{\{([a-zA-Z0-9_]+)\}\}/g;

  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  let node;
  while ((node = walker.nextNode())) {
    if (!re.test(node.textContent)) continue;
    node.textContent = node.textContent.replace(re, (_, key) => {
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

function highlightActiveTab() {
  const bar = document.querySelector("h1 + p");
  if (!bar) return;

  const current = window.location.pathname === "/" ? "index.html"
                   : window.location.pathname.replace(/^\//, "");

  const links = Array.from(bar.querySelectorAll("a"));
  links.forEach(a => a.classList.remove("active"));

  const match = links.find(a => a.getAttribute("href") === current);
  if (match) match.classList.add("active");
}

async function pollState() {
  try {
    const res = await fetch("/api/state", { cache: "no-store" });
    if (!res.ok) return;
    const state = await res.json();

    replaceTokens(state);

    document.querySelectorAll("pre.example").forEach(transformPre);
  } catch (_) {}
}

document.addEventListener("DOMContentLoaded", () => {
  highlightActiveTab();
  pollState();
  setInterval(pollState, 2500);
});
