import * as noUislider from 'nouislider'

export function rangeInit() {
  const rangeItems = document.querySelectorAll("[data-range]");
  if (rangeItems.length) {
    rangeItems.forEach((rangeItem) => {
      const fromValue = rangeItem.querySelector("[data-range-from]");
      const toValue = rangeItem.querySelector("[data-range-to]");
      const item = rangeItem.querySelector("[data-range-item]");
      noUislider.create(item, {
        start: [Number(fromValue.value), Number(toValue.value)],
        // connect: [true, false],
        connect: true,
        tooltips: [true, true],
        range: {
          min: [Number(fromValue.dataset.rangeFrom)],
          max: [Number(toValue.dataset.rangeTo)],
        },
      });
      item.noUiSlider.on("update", function (values, handle) {
        fromValue.value = values[handle];
        toValue.value = values[handle];
      });
    });
  }

  //   const priceSlider = document.querySelector('#range')
  //   if (priceSlider) {
  //     let textForm = priceSlider.getAttribute('data-range-from')
  //     let textTo = priceSlider.getAttribute('data-tange-to')
  //     noUislider.create(priceSlider, {
  //       start: 0;
  //       connect: [true, false],
  //       range:{
  //         'min': [0],
  //         'max': [200000]
  //       }
  //     })
  //   function setPriceValues() {
  //   let priceStartValue;
  //   let priceEndValue;
  //   if (priceStart.value != '') {
  //     priceStartValue = priceStart.value
  //   }
  //   if (priceEnd.value != '') {
  //     priceEndValue = priceEnd.value
  //   }
  //   priceSlider.noUislider.set([priceStartValue, priceEndValue])
  // }
  //   }
}
rangeInit()

