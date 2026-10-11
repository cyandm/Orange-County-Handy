export function FaqSection() {
  const rows = document.querySelectorAll("[data-faq-row]");
  if (!rows.length) return;

  const desktop = window.matchMedia("(min-width: 1024px)");

  // CTA takes the FAQ box's initial height once, so opening questions later never resizes it
  const sync = () => rows.forEach((row) => {
    const box = row.querySelector("[data-faq-box]");
    const cta = row.querySelector("[data-faq-cta]");
    if (box && cta) cta.style.minHeight = desktop.matches ? `${box.offsetHeight}px` : "";
  });

  sync();
  window.addEventListener("load", sync);
  desktop.addEventListener("change", sync);
}
