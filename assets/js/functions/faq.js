export function FaqTabs() {
  const handlers = document.querySelectorAll(".faq-handler");
  const panels = document.querySelectorAll(".faq-panel");

  if (!panels || !handlers) return;

  function activateTab(element) {
    if (!element) return;

    element.classList.replace("bg-cynWhite", "bg-cynYellow");
    element.classList.replace("text-cynBlack", "text-cynWhite");
  }

  function deActivateTab(element) {
    if (!element) return;

    element.classList.replace("bg-cynYellow", "bg-cynWhite");
    element.classList.replace("text-cynWhite", "text-cynBlack");
  }

  function activatePanel(element) {
    if (!element) return;

    element.classList.replace("grid-rows-[0fr]", "grid-rows-[1fr]");
  }

  function deActivatePanel(element) {
    if (!element) return;

    element.classList.replace("grid-rows-[1fr]", "grid-rows-[0fr]");
  }

  activateTab(handlers[0]);
  activatePanel(panels[0]);

  handlers.forEach((handler) => {
    handler.addEventListener("click", () => {
      //disable others handlers
      handlers.forEach((innerHandler) => deActivateTab(innerHandler));

      //enable clicked handler
      activateTab(handler);

      //enable related panel
      panels.forEach((panel) => {
        const isRelatedPanel =
          panel.getAttribute("controlled-by") === handler.id;

        if (isRelatedPanel) {
          activatePanel(panel);
        } else {
          deActivatePanel(panel);
        }
      });
    });
  });
}

export function FaqCard() {
  const faqCards = document.querySelectorAll(".faq-card");
  if (!faqCards) return;

  function activateFaq(faq, expert) {
    expert.classList.replace("grid-rows-[0fr]", "grid-rows-[1fr]");
    const svg = faq.querySelector("svg");
    const faqToggle = faq.querySelector(".faq-toggle");
    faqToggle.classList.replace(
      "[&_span]:text-cynBlack/60",
      "[&_span]:text-cynBlack"
    );
    if (svg) {
      svg.classList.add("rotate-45");
      svg.classList.add("text-cynYellow");
    }
  }

  function deActivateFaq(faq, expert) {
    expert.classList.replace("grid-rows-[1fr]", "grid-rows-[0fr]");
    const svg = faq.querySelector("svg");
    const faqToggle = faq.querySelector(".faq-toggle");
    faqToggle.classList.replace(
      "[&_span]:text-cynBlack",
      "[&_span]:text-cynBlack/60"
    );
    if (svg) {
      svg.classList.remove("rotate-45");
      svg.classList.remove("text-cynYellow");
    }
  }

  faqCards.forEach((faq) => {
    const faqToggle = faq.querySelector(".faq-toggle");
    const expert = faq.querySelector(".faq-expert");
    if (!expert) return;

    faqToggle?.addEventListener("click", () => {
      const faqIsActive = expert.classList.contains("grid-rows-[1fr]");

      if (faqIsActive) {
        deActivateFaq(faq, expert);
      } else {
        activateFaq(faq, expert);
      }
    });
  });
}
