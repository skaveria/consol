// SlabOS compositor: key/value highlighting for Org example panes
// Turns <pre class="example"> plain text into structured rows with spans.

function escapeHtml(s) {
  return s.replaceAll("&", "&amp;")
          .replaceAll("<", "&lt;")
          .replaceAll(">", "&gt;");
}

function classifyValue(v) {
  const t = v.toLowerCase();
  if (t.includes("error") || t.includes("failed")) return "bad";
  if (t.includes("warn") || t.includes("charging") || t.includes("dirty")) return "warn";
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

function transformPre(pre) {
  const raw = pre.textContent.replace(/\r\n/g, "\n").trimEnd();
  const lines = raw.split("\n").map(l => l.trimEnd()).filter(l => l.trim().length > 0);

  // Only transform if most lines look key/value-ish
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

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("pre.example").forEach(transformPre);
});
