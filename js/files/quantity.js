if (document.querySelector(".actions-product__row")) {
  let count = document.getElementById("buttonCountNumber");

  document.getElementById("buttonCountPlus").onclick = function () {
    let countPlus = count.innerHTML;
    if (+countPlus <= 10) {
      count.innerHTML++;
      countPlus = count.innerHTML;
    }
  };

  document.getElementById("buttonCountMinus").onclick = function () {
    let countMinus = count.innerHTML;
    if (+countMinus >= 2) {
      count.innerHTML--;
      countMinus = count.innerHTML;
    }
  };
}