/**
 * About Us — story timeline (desktop: one step per scroll) + gallery swiper
 */

import { Fancybox } from "@fancyapps/ui";

export function AboutStory() {
  const section = document.getElementById("about-story");
  if (!section) return;

  const steps = [...section.querySelectorAll(".about-story-step")];
  const progress = document.getElementById("about-story-progress");
  const scroller = document.getElementById("about-story-scroll");
  const fade = section.querySelector(".about-story-fade");
  if (!steps.length) return;

  let activeIndex = 0;
  let locked = false;

  const isDesktop = () => window.matchMedia("(min-width: 1024px)").matches;

  const setActive = (index) => {
    activeIndex = index;
    steps.forEach((step, i) => {
      const on = i === index;
      step.dataset.state = on ? "active" : "idle";
      const dot = step.querySelector(".about-story-dot");
      if (dot) dot.dataset.state = on ? "active" : "idle";
    });

    if (fade) {
      fade.classList.toggle("opacity-0", index >= steps.length - 1);
    }

    if (!progress) return;
    const track = progress.parentElement;
    const ratio = steps.length <= 1 ? 1 : index / (steps.length - 1);
    const min = 20;
    const max = track?.clientHeight || 80;
    progress.style.height = `${Math.max(min, Math.round(min + (max - min) * ratio))}px`;
  };

  const goToStep = (index) => {
    index = Math.max(0, Math.min(steps.length - 1, index));
    const step = steps[index];
    if (!step || !scroller) {
      setActive(index);
      return;
    }

    if (isDesktop()) {
      scroller.scrollTo({ top: step.offsetTop, behavior: "smooth" });
    }
    setActive(index);
  };

  const mobileObserver = new IntersectionObserver(
    (entries) => {
      if (isDesktop()) return;
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;
      const index = steps.indexOf(visible.target);
      if (index >= 0) setActive(index);
    },
    { root: null, rootMargin: "-35% 0px -45% 0px", threshold: [0.25, 0.5, 0.75] }
  );

  steps.forEach((step) => mobileObserver.observe(step));

  if (scroller) {
    scroller.addEventListener(
      "wheel",
      (event) => {
        if (!isDesktop()) return;
        event.preventDefault();
        if (locked || Math.abs(event.deltaY) < 2) return;

        locked = true;
        goToStep(activeIndex + (event.deltaY > 0 ? 1 : -1));
        window.setTimeout(() => {
          locked = false;
        }, 450);
      },
      { passive: false }
    );
  }

  const onResize = () => {
    if (isDesktop()) goToStep(activeIndex);
    else setActive(0);
  };

  window.addEventListener("resize", onResize, { passive: true });
  setActive(0);
}

export function AboutGallery() {
  const el = document.querySelector(".about-gallery-swiper");
  if (!el || typeof el.initialize !== "function") return;

  const paginationEl = document.querySelector(".about-gallery-pagination");

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

  document.querySelectorAll(".about-gallery-prev").forEach((btn) => {
    btn.addEventListener("click", () => swiper.slidePrev());
  });
  document.querySelectorAll(".about-gallery-next").forEach((btn) => {
    btn.addEventListener("click", () => swiper.slideNext());
  });

  el.addEventListener("click", (event) => {
    const link = event.target.closest("a.about-gallery-lightbox");
    if (!link) return;

    event.preventDefault();

    const links = [
      ...el.querySelectorAll(
        "swiper-slide:not(.swiper-slide-duplicate) a.about-gallery-lightbox"
      ),
    ];
    const items = links.map((anchor) => ({
      src: anchor.getAttribute("href"),
      type: "image",
    }));
    const startIndex = Math.max(
      0,
      items.findIndex((item) => item.src === link.getAttribute("href"))
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
}
