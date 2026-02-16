// SlabOS compositor (minimal)
// - Transform Org example panes into key/value rows
// - Highlight active workspace tab based on current page
// IMPORTANT: does NOT intercept clicks (full page loads).

function escapeHtml(s) {
  return s.replaceAll("&", "&amp;")
          .replaceAll("<", "&lt;")
          .replaceAll(">", "&gt;");
}

function classifyValue(v) {
  const t = v.toLowerCase();
  if (t.includes("error") || t.includes("failed") || t.includes("offline") || t.includes("down"))
    return "bad";
  if (t.includes("warn") || t.includes("charging") || t.includes("dirty") || t.includes("throttl") || t.includes("hot"))
    return "warn";
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
  // convert "/" -> "index.html" for matching
  if (!p || p === "/") return "index.html";
  // strip leading "/" and any query/hash
  p = p.split("?")[0].split("#")[0];
  if (p.startsWith("/")) p = p.slice(1);
  return p;
}

function highlightActiveTab() {
  const bar = document.querySelector("h1 + p");
  if (!bar) return;

  const current = normalizePath(window.location.pathname);
  const links = Array.from(bar.querySelectorAll("a"));

  // Determine which href corresponds to current page.
  // Org exports file links as "index.html", "system.html", etc.
  let best = null;

  for (const a of links) {
    const hrefRaw = a.getAttribute("href") || "";
    const href = normalizePath(hrefRaw);
    if (href === current) { best = a; break; }
  }

  // fallback: if we're on index.html but links are relative/odd, pick first
  if (!best && current === "index.html" && links.length) best = links[0];

  // apply active class
  links.forEach(a => a.classList.remove("active"));
  if (best) best.classList.add("active");
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("pre.example").forEach(transformPre);
  highlightActiveTab();
});
