/**
 * Card slider — looping swiper with prev/next and bar pagination
 */

export function CardSlider() {
  document.querySelectorAll(".card-slider").forEach((section) => {
    const el = section.querySelector(".card-slider-swiper");
    if (!el || typeof el.initialize !== "function") return;

    const paginationEl = section.querySelector(".card-slider-pagination");

    Object.assign(el, {
      slidesPerView: Number(section.dataset.perView) || 2,
      spaceBetween: 8,
      loop: true,
      speed: 450,
      breakpoints: {
        1024: {
          slidesPerView: Number(section.dataset.perViewLg) || 4,
          spaceBetween: 12,
        },
      },
      pagination: paginationEl ? { el: paginationEl, clickable: true } : false,
    });

    el.initialize();

    const swiper = el.swiper;
    if (!swiper) return;

    const prev = section.querySelectorAll(".card-slider-prev");
    const next = section.querySelectorAll(".card-slider-next");

    prev.forEach((btn) => btn.addEventListener("click", () => swiper.slidePrev()));
    next.forEach((btn) => btn.addEventListener("click", () => swiper.slideNext()));
  });
}
