// SlabOS compositor (minimal, no framework)

document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("h1 + p a");

  function setActive(id) {
    links.forEach(link => {
      const target = link.getAttribute("href").replace("#", "");
      if (target === id) {
        link.style.borderBottom = "2px solid var(--green)";
        link.style.color = "var(--fg)";
      } else {
        link.style.borderBottom = "none";
        link.style.color = "var(--muted)";
      }
    });
  }

  function navigateTo(id) {
    const section = document.getElementById(id);
    if (!section) return;

    window.scrollTo({
      top: section.offsetTop - 100,
      behavior: "smooth"
    });

    setActive(id);
  }

  links.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const id = link.getAttribute("href").replace("#", "");
      navigateTo(id);
    });
  });

  // Initial active state
  const first = links[0];
  if (first) {
    const id = first.getAttribute("href").replace("#", "");
    setActive(id);
  }
});
