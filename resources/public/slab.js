// SlabOS compositor (no link interception)
// 1) transforms Org example panes into key/value rows
// 2) highlights active tab
// 3) polls /api/state and replaces {{tokens}} in-place

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

  let best = null;
  for (const a of links) {
    const href = normalizePath(a.getAttribute("href") || "");
    if (href === current) { best = a; break; }
  }
  if (!best && current === "index.html" && links.length) best = links[0];

  links.forEach(a => a.classList.remove("active"));
  if (best) best.classList.add("active");
}

function replaceTokensInText(node, state) {
  const re = /\{\{([a-zA-Z0-9_]+)\}\}/g;
  const txt = node.textContent;
  if (!re.test(txt)) return;

  node.textContent = txt.replace(re, (_, key) => {
    const v = state[key];
    return (v === undefined || v === null) ? "" : String(v);
  });
}

function replaceAllTokens(state) {
  // Replace tokens in:
  // - modeline div
  // - any remaining text nodes that still include {{...}}
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  let n;
  while ((n = walker.nextNode())) {
    replaceTokensInText(n, state);
  }

  // Update warn/bad classes after tokens filled
  document.querySelectorAll("pre.example .v").forEach(v => {
    v.classList.remove("warn", "bad");
    const klass = classifyValue(v.textContent || "");
    if (klass) v.classList.add(klass);
  });
}

async function pollState() {
  try {
    const res = await fetch("/api/state", { cache: "no-store" });
    if (!res.ok) return;
    const state = await res.json();
    replaceAllTokens(state);
  } catch (e) {
    // ignore for now
  }
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("pre.example").forEach(transformPre);
  highlightActiveTab();

  // initial fill + poll
  pollState();
  setInterval(pollState, 2500);
});
