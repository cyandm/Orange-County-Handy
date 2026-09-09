export function SearchPage() {
  const searchForm = document.querySelector("form#search-form");

  if (!searchForm) return;

  const filterRadios = searchForm.querySelectorAll('input[name="search-type"]');
  filterRadios.forEach((radio) => {
    radio.addEventListener("change", () => {
      searchForm.submit();
    });
  });
}
