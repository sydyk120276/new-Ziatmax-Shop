if (document.querySelector(".price-filter__title")) {
  document.querySelector(".price-filter__title").onclick = function () {
    document
      .querySelector(".price-filter__title")
      .classList.toggle("_spoller-active");
    document
      .querySelector(".price-filter__inputs")
      .classList.toggle("_spoller-active");
    document
      .querySelector(".price-filter__range")
      .classList.toggle("_spoller-active");
    document
      .querySelector(".price-filter__body")
      .classList.toggle("_spoller-active");
    document.querySelector(".price-filter").classList.toggle("_spoller-active");
  };
document.querySelector(".item-filter-catalog__title").onclick = function () {
  document
    .querySelector(".item-filter-catalog__body")
    .classList.toggle("_spoller-active");
  document
    .querySelector(".item-filter-catalog__title")
    .classList.toggle("_spoller-active");
};
}