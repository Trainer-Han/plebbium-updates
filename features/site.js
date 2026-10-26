// Plebbium :: the features page (decision C45). Optional: without it the
// rows still scroll; with it, the rows get arrows and the page a search box.
(function () {
  "use strict";

  for (const row of document.querySelectorAll(".row")) {
    const gallery = row.querySelector(".gallery");
    const arrows = row.querySelector(".arrows");
    if (!gallery || !arrows) continue;
    const prev = arrows.querySelector(".prev");
    const next = arrows.querySelector(".next");
    const update = () => {
      const max = gallery.scrollWidth - gallery.clientWidth;
      arrows.hidden = max < 4;
      prev.disabled = gallery.scrollLeft < 4;
      next.disabled = gallery.scrollLeft > max - 4;
    };
    const by = (dir) => gallery.scrollBy({ left: dir * gallery.clientWidth * 0.9, behavior: "smooth" });
    prev.addEventListener("click", () => by(-1));
    next.addEventListener("click", () => by(1));
    gallery.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    update();
  }

  const find = document.getElementById("find");
  if (!find) return;
  find.parentElement.hidden = false;
  const none = document.querySelector(".none");
  find.addEventListener("input", () => {
    const words = find.value.toLowerCase().split(/\s+/).filter(Boolean);
    let shown = 0;
    for (const row of document.querySelectorAll(".row")) {
      if (row.classList.contains("empty")) {
        row.hidden = words.length > 0;
        continue;
      }
      let inRow = 0;
      for (const card of row.querySelectorAll(".card")) {
        const hit = words.every((w) => card.dataset.words.includes(w));
        card.hidden = !hit;
        if (hit) inRow++;
      }
      row.hidden = inRow === 0;
      shown += inRow;
      row.querySelector(".gallery").dispatchEvent(new Event("scroll"));
    }
    none.hidden = shown > 0;
  });
})();
