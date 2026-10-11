/**
 * Gallery slider — centered swiper with prev/next, pagination and fancybox lightbox
 */

import { Fancybox } from "@fancyapps/ui";

export function GallerySlider() {
  document.querySelectorAll(".gallery-slider").forEach((section) => {
    const el = section.querySelector(".gallery-slider-swiper");
    if (!el || typeof el.initialize !== "function") return;

    const paginationEl = section.querySelector(".gallery-slider-pagination");

    Object.assign(el, {
      slidesPerView: 3,
      spaceBetween: 12,
      centeredSlides: true,
      loop: true,
      speed: 450,
      breakpoints: {
        1024: {
          slidesPerView: 5,
          spaceBetween: 12,
          centeredSlides: true,
        },
      },
      pagination: paginationEl
        ? {
            el: paginationEl,
            clickable: true,
          }
        : false,
    });

    el.initialize();

    const swiper = el.swiper;
    if (!swiper) return;

    section.querySelectorAll(".gallery-slider-prev").forEach((btn) => {
      btn.addEventListener("click", () => swiper.slidePrev());
    });
    section.querySelectorAll(".gallery-slider-next").forEach((btn) => {
      btn.addEventListener("click", () => swiper.slideNext());
    });

    el.addEventListener("click", (event) => {
      const link = event.target.closest("a.gallery-slider-lightbox");
      if (!link) return;

      event.preventDefault();

      const links = [
        ...el.querySelectorAll(
          "swiper-slide:not(.swiper-slide-duplicate) a.gallery-slider-lightbox",
        ),
      ];
      const items = links.map((anchor) => ({
        src: anchor.getAttribute("href"),
        type: "image",
      }));
      const startIndex = Math.max(
        0,
        items.findIndex((item) => item.src === link.getAttribute("href")),
      );

      Fancybox.show(items, {
        startIndex,
        Thumbs: false,
        Toolbar: {
          display: {
            left: ["counter"],
            right: ["close"],
          },
        },
      });
    });
  });
}
