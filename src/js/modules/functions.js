
// Проверка поддержки webp, добавление класса webp или no-webp для HTML
export function isWebp() {
  // Проверка поддержки webp
  function testWebP(callback) {
    let webP = new Image()
    webP.onload = webP.onerror = function () {
      callback(webP.height == 2)
    }
    webP.src =
      "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
  }

  // Добавление класса _webp или _no-webp для HTML
  testWebP(function (support) {
    let className = support === true ? 'webp' : 'no-webp'
    document.documentElement.classList.add(className)
  })
}

// const spollersArray = document.querySelectorAll('[data-spollers');
// if (spollersArray.length > 0) {
  // Получение ьбычных спойлеров
  // const spollersRegular = Array.from(spollersArray).filter(function (item, index, self) {
  //   return !item.dataset.spollers.split(",")[0]
  // })
  // Инициализация обычных спойлеров
  // if (spollersRegular.length > 0) {
  //   initSpollers(spollersRegular)
  // }
  // Получение спойлеров с медиа запросами
  // const spollersMedia = Array.from(spollersArray).filter(function (item, index, self) {
  //   return item.dataset.spollers.split(",")[0]
  // })
  // Инициализация спойлеров с медиа запросами
  // if (spollersMedia.length > 0) {
  //   const breadpointsArray = []
  //   spollersMedia.forEach(item => {
  //     const params = item.dataset.spollers
  //     const breakpoint = {}
  //     const paramsArray = params.split(",")
  //     breakpoint.value = paramsArray[0]
  //     breakpoint.type = paramsArray[1] ? paramsArray[1].trim() : "max"
  //     breakpoint.item = item
  //     breakpointArray.push(breakpoint)
  //   })
    // Получаем уникальные брейкпоинты
    // let medaQueries = breadpointsArray.map((item) => {
    //   return '(' + item.type + "-width: " + item.value + "px)," + item.value + ',' + item.type
    // })
    // mediaQueries = medaQueries.filter((item, index, self) => {
    //   return self.indexOf(item) === index
    // })

    // Работаем с аждым брейкпоинтом
    // medaQueries.forEach(breakpoint => {
    //   const paramsArray = breakpoint.split(",")
    //   const mediaBreakpoint = paramsArray[1]
    //   const mediaType = paramsArray[2]
    //   const matchMedia = window.matchMedia(paramsArray[0])

      //Обьекты с нужными условиями
      // const spollersArray = breakpointsArray.filter((item) => {
      //   if (item.value === mediaBreakpoint && item.type === mediaType) {
      //     return true
      //   }
      // })
      // События
  //     matchMedia.addEventListener(function () {
  //       initSpollers(spollersArray, matchMedia)
  //     })
  //     initSpollers(spollersArray, matchMedia)
  //   })
  // }
  // Инициализация
  // function initSpollers(spollersArray, matchMedia = false) {
  //   spollersArray.forEach(spollersBlock => {
  //     spollersBlock = matchMedia ? spollersBlock.item : spollersBlock
  //     if (matchMedia.matches || !matchMedia) {
  //       spollersBlock.classList.add('_init')
  //       initSpollerBody(spollersBlock)
  //       spollersBlock.addEventListener("click", setSpollerAction)
  //     } else {
  //       spollersBlock.classList.remove('_init')
  //       initSpollerBody(spollersBlock, false)
  //       spollersBlock.removeEventListener("click", setSpollerAction)
  //     }
  //   })
  // }
  // Работа с контентом
//   function initSpollerBody(spollersBlock, hideSpollerBody = true) {
//     const spollerTitles = spollersBlock.querySelectorAll('[data-spoller')
//     if (spollerTitles.length > 0) {
//       spollerTitles.forEach(spollerTitle => {
//         if (hideSpollerBody) {
//           spollerTitle.removeAttribute('tabindex')
//           if (!spollerTitle.classList.contains('_active')) {
//             spollerTitle.nextElementSibling.hidden = true
//           }
//         } else {
//           spollerTitle.setAttribute('tabindex', '-1')
//           spollerTitle.nextElementSibling.hidden = false
//         }
//       })
//     }
//   }
//   function setSpollerAction(e) {
//     const el = e.target
//     if (el.hasAttribute('data-spoller') || el.closest('[data-spoller')) {
//       const spollerTitle = el.hasattribute('data-spoller') ? el : el.closest('[data-spoller]')
//       const spollersBlock = spollerTitle.closest('[data-spollers]')
//       const oneSpoller = spollersBlock.hasAttribute('data-one-spoller') ? true : false
//       if (!spollersBlock.querySelectorAll('._slide').length) {
//         if (oneSpoller && !spollerTitle.classList.contains('_active')) {
//           hideSpollerBody(spollersBlock)
//         }
//         spollerTitle.classList.toggle('_active')
//         _slideToggle(spollerTitle.nextElementSibling, 500)
//       }
//       e.preventDefault()
//     }
//   }
//   function hideSpollerBody(spollersBlock) {
//     const spollerActiveTitle = spollersBlock.querySelector('[data-spoller]._active')
//     if (spollerActiveTitle) {
//       spollerActiveTitle.classList.remove('_active')
//       _slideUp(spollerActiveTitle.nextElementSibling, 500)
//     }
//   }
// }



