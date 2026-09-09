function SubMenuDesktop() {
  document
    .querySelectorAll("#main-menu .menu-item-has-children")
    ?.forEach((menu) => {
      const svg = document.querySelector("div#chevron-down")?.cloneNode(true);
      const link = menu.querySelector("a");

      svg.classList.remove("hidden");
      svg.classList.add("mr-1", "size-4", "stroke-2");
      link.appendChild(svg);
    });
}

export { SubMenuDesktop };
