/**
 * About Us — story timeline (desktop: one step per scroll)
 */

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
    {
      root: null,
      rootMargin: "-35% 0px -45% 0px",
      threshold: [0.25, 0.5, 0.75],
    },
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
      { passive: false },
    );
  }

  const onResize = () => {
    if (isDesktop()) goToStep(activeIndex);
    else setActive(0);
  };

  window.addEventListener("resize", onResize, { passive: true });
  setActive(0);
}
