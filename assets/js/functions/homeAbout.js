/**
 * Home about — 3 photos: center active; at the ends the other two stack under like a card deck
 */

export function HomeAbout() {
  document.querySelectorAll(".home-about-photos").forEach((el) => {
    if (typeof el.initialize !== "function") return;

    Object.assign(el, {
      effect: "creative",
      grabCursor: true,
      initialSlide: 1,
      speed: 600,
      creativeEffect: {
        limitProgress: 2,
        prev: {
          translate: ["-14%", "4%", -1],
          rotate: [0, 0, -8],
          shadow: false,
        },
        next: {
          translate: ["14%", "4%", -1],
          rotate: [0, 0, 8],
          shadow: false,
        },
      },
    });

    el.initialize();
  });
}
