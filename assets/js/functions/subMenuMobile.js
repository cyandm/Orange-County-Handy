function SubMenuMobile() {
  jQuery(document).ready(function ($) {
    // SVG آیکون Arrow-12 (نمونه فرضی)
    var arrowIcon = `<i class="sub-menu-icon mt-3 flex justify-end" style="transition:transform 0.3s;vertical-align:middle;">
      <svg width="20" height="20" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-6 rotate-90 transition-all duration-300">
        <path d="M10 8L14 12.5L10 17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </i>`;

    $("#mobile-menu .menu-item-has-children").each(function () {
      var $menuItem = $(this);
      var $subMenuToggle = $(arrowIcon);
      $menuItem.prepend($subMenuToggle);

      $subMenuToggle.on("click", function (e) {
        e.stopPropagation();
        var $subMenu = $menuItem.children("ul");
        if ($subMenu.is(":visible")) {
          $subMenu.slideUp();
          $subMenuToggle.find("svg").removeClass("rotate-[270deg]");
        } else {
          $subMenu.slideDown();
          $subMenuToggle.find("svg").addClass("rotate-[270deg]");
        }
      });
    });
  });
}

export { SubMenuMobile };
