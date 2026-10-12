/**
 * Floating contact — toggles the phone bubble, closes on outside click / Escape, copies the number
 */

export function FloatingContact() {
  const root = document.getElementById("floating-contact");
  if (!root) return;

  const toggle = root.querySelector("[data-floating-toggle]");
  const copy = root.querySelector("[data-copy]");

  const setOpen = (open) => {
    root.toggleAttribute("data-open", open);
    toggle.setAttribute("aria-expanded", open);
  };

  toggle.addEventListener("click", () => setOpen(!root.hasAttribute("data-open")));
  document.addEventListener("click", (event) => !root.contains(event.target) && setOpen(false));
  document.addEventListener("keydown", (event) => event.key === "Escape" && setOpen(false));

  copy?.addEventListener("click", () => {
    navigator.clipboard?.writeText(copy.dataset.copy).then(() => {
      copy.toggleAttribute("data-copied", true);
      setTimeout(() => copy.removeAttribute("data-copied"), 1500);
    });
  });
}
