/**
 * Marquee
 * moves any [data-marquee] track continuously, without stopping or jumping
 *
 * markup:
 * <div class="overflow-hidden">
 *   <div class="flex w-max items-center gap-5" data-marquee data-marquee-speed="30" data-marquee-direction="reverse">…</div>
 * </div>
 *
 * data-marquee-speed     px per second, defaults to 30
 * data-marquee-direction "reverse" moves towards the end instead of the start
 */

const DEFAULT_SPEED = 30;
const MAX_FRAME = 100; // ms, keeps a background tab from causing a jump

function measure(track, items) {
  const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
  const width = items.reduce((total, item) => total + item.getBoundingClientRect().width, 0);

  // a hidden track measures as zero width, so there is nothing to animate yet
  if (!width) return 0;

  // one full cycle is the original items plus the gap that follows each of them
  return width + items.length * gap;
}

function fill(track, items, cycle) {
  // enough copies to cover the visible area plus the one cycle the loop travels
  const copies = Math.ceil((track.parentElement.clientWidth + cycle) / cycle);

  while (track.children.length < items.length * copies) {
    items.forEach((item) => {
      const clone = item.cloneNode(true);
      clone.setAttribute("aria-hidden", "true");
      track.appendChild(clone);
    });
  }
}

function animate(track) {
  const items = [...track.children];
  const speed = parseFloat(track.dataset.marqueeSpeed) || DEFAULT_SPEED;
  const reverse = track.dataset.marqueeDirection === "reverse";

  let cycle = 0;
  let offset = 0;
  let previous = 0;
  let running = false;

  const step = (now) => {
    if (!cycle) {
      running = false;
      return;
    }

    offset = (offset + (Math.min(now - previous, MAX_FRAME) / 1000) * speed) % cycle;
    previous = now;
    track.style.transform = `translate3d(${reverse ? offset - cycle : -offset}px, 0, 0)`;
    requestAnimationFrame(step);
  };

  // hidden tracks measure as zero, so layout runs again whenever the wrapper changes
  const layout = () => {
    cycle = measure(track, items);

    if (!cycle) return;

    fill(track, items, cycle);

    if (running) return;

    running = true;
    previous = performance.now();
    requestAnimationFrame(step);
  };

  new ResizeObserver(layout).observe(track.parentElement);

  layout();
  document.fonts?.ready.then(layout);
}

export function Marquee() {
  document.querySelectorAll("[data-marquee]").forEach(animate);
}
