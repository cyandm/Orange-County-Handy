export function Accordion() {
  const accordionButtons = document.querySelectorAll(".accordion-button");

  if (!accordionButtons.length) return;

  const toggle = (button, open) => {
    const targetId = button.getAttribute("data-accordion-target");
    const content = document.querySelector(`[data-accordion-content="${targetId}"]`);
    const icon = button.querySelector(".accordion-icon");
    const iconRotate = button.getAttribute("data-accordion-icon-rotate") || "45";

    if (!content) return;

    button.setAttribute("aria-expanded", open);
    content.style.gridTemplateRows = open ? "1fr" : "0fr";
    content.classList.toggle("mt-3", open);
    if (icon) icon.style.transform = open ? `rotate(${iconRotate}deg)` : "rotate(0deg)";
  };

  accordionButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const isExpanded = button.getAttribute("aria-expanded") === "true";

      // Only one item open at a time inside a [data-accordion-group]
      if (!isExpanded) {
        const group = button.closest("[data-accordion-group]");
        group?.querySelectorAll('.accordion-button[aria-expanded="true"]').forEach((other) => other !== button && toggle(other, false));
      }

      toggle(button, !isExpanded);
    });
  });
}
