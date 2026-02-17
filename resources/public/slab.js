// SlabOS compositor (stable)
// - full page loads; no click interception
// - idempotent pane transforms
// - modeline is compositor-owned and lives in #postamble

(() => {
  const POLL_MS = 2500;

  function escapeHtml(s) {
    return String(s)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;");
  }

  function basename(path) {
    const clean = String(path || "").split("?")[0].split("#")[0];
    const parts = clean.split("/");
    return parts[parts.length - 1] || "index.html";
  }

  function currentPageName() {
    if (window.location.protocol === "file:") return basename(window.location.pathname);
    const p = window.location.pathname;
    if (!p || p === "/") return "index.html";
    return basename(p);
  }

  function classifyValue(v) {
    const t = String(v || "").toLowerCase();
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

  function highlightActiveTab() {
    const bar = document.querySelector("h1 + p");
    if (!bar) return;

    const current = currentPageName();
    const links = Array.from(bar.querySelectorAll("a"));
    links.forEach(a => a.classList.remove("active"));

    const match = links.find(a => basename(a.getAttribute("href") || "") === current);
    if (match) match.classList.add("active");
    else if (current === "index.html" && links.length) links[0].classList.add("active");
  }

  function transformPaneOnce(pre) {
    if (pre.dataset.slabTransformed === "1") return;
    pre.dataset.slabTransformed = "1";

    const raw = pre.textContent.replace(/\r\n/g, "\n").trimEnd();
    let lines = raw.split("\n").map(l => l.trimEnd());

    let paneType = null;
    if (lines.length && lines[0].startsWith("@")) {
      paneType = lines[0].slice(1).trim().toLowerCase();
      lines = lines.slice(1);
    }
    if (paneType) pre.classList.add("pane-" + paneType);

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
      pre.textContent = lines.join("\n");
    }
  }

  function updateValueClasses() {
    document.querySelectorAll("pre.example .v").forEach(v => {
      v.classList.remove("warn", "bad");
      const klass = classifyValue(v.textContent || "");
      if (klass) v.classList.add(klass);
    });
  }

  async function fetchStateMaybe() {
    if (window.location.protocol === "file:") return null;
    try {
      const res = await fetch("/api/state", { cache: "no-store" });
      if (!res.ok) return null;
      return await res.json();
    } catch (_) {
      return null;
    }
  }

  function ensureModeline(state) {
    // Ensure #postamble exists (Org provides it when html-postamble:t)
    const post = document.getElementById("postamble");
    if (!post) return;

    let modeline = document.getElementById("modeline");
    if (!modeline) {
      modeline = document.createElement("div");
      modeline.id = "modeline";
      post.appendChild(modeline);
    }

    const git = state?.git_rev ?? "{{git_rev}}";
    const time = state?.time ?? "{{time}}";
    modeline.textContent = `pixel-slab · nrepl:7888 · http:8080 · git:${git} · ${time}`;
  }

  async function tick() {
    const state = await fetchStateMaybe();

    document.querySelectorAll("pre.example").forEach(transformPaneOnce);
    updateValueClasses();
    highlightActiveTab();
    ensureModeline(state);
  }

  document.addEventListener("DOMContentLoaded", () => {
    tick();
    setInterval(tick, POLL_MS);
  });
})();
