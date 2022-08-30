import "./files/script.js"
import "./files/sliders.js"
import "./files/ratings.js"
import "./files/range.js"

// import * as flsFuncktions from "./modules/functions.js"

// Подключение основного файла стилей
import ".././scss/style.scss"
import * as flsFuncktions from "./modules/functions.js"

flsFuncktions.isWebp()

// flsFuncktions.isWebp();

// Модуль для работы с меню бургер
// flsFuncktions.menuInit();

// flsFuncktions.spollers();


document.querySelector(".phones-header__arrow")
	.addEventListener("click", function () {
		document.querySelector(".phones-header__list").classList.toggle("active");
		document
			.querySelector(".phones-header__arrow")
			.classList.toggle("_spoller-active");
	});

document.querySelector(".icon-menu").addEventListener('click', function () {
	document.querySelector(".icon-menu").classList.toggle("active");
	document.querySelector(".icon-menu-span").classList.toggle("active");
	document.querySelector(".menu__body").classList.toggle("active");
	if (document.documentElement.classList.contains('catalog-open')) {
		document.documentElement.classList.remove('catalog-open')
	}
	if (document.documentElement.classList.contains('sub-menu-open')) {
		document.documentElement.classList.remove('sub-menu-open')
	}
})

// document.querySelector(".fhones-header__callback").addEventListener("click", function () {
//     document.querySelector(".popup").classList.toggle("active-popup");
//   });
// document.querySelector(".popup__close").addEventListener("click", function () {
//   document.querySelector(".popup").classList.remove("active-popup");
// });

const menuBlocks = document.querySelectorAll('.sub-menu-catalog__block')
if (menuBlocks.length) {
	menuBlocks.forEach((menuBlock) => {
		const menuBlocksItems = menuBlock.querySelectorAll('.sub-menu-catalog__category').length
		menuBlock.classList.add(`sub-menu-catalog__block_${menuBlocksItems}`)
	})
}

const popupLinks = document.querySelectorAll('.popup-link')
const body = document.querySelector('body')
const lockPadding = document.querySelectorAll(".lock-padding")

let unlock = true

const timeout = 800

if (popupLinks.length > 0) {
	for (let index = 0; index < popupLinks.length; index++) {
		const popupLink = popupLinks[index]
		popupLink.addEventListener("click", function (e) {
			const popupName = popupLink.getAttribute('href').replace('#', '')
			const curentPopup = document.getElementById(popupName)
			popupOpen(curentPopup)
			e.preventDefault()
		})
	}
}

const popupCloseIcon = document.querySelectorAll('.close-popup')
if (popupCloseIcon.length > 0) {
	for (let index = 0; index < popupCloseIcon.length; index++) {
		const el = popupCloseIcon[index]
		el.addEventListener('click', function (e) {
			popupClose(el.closest('.popup'))
			e.preventDefault()
		})
	}
}

function popupOpen(curentPopup) {
	if (curentPopup && unlock) {
		const popupActive = document.querySelector('.popup.open')
		if (popupActive) {
			popupClose(popupActive, false)
		} else {
			bodyLock()
		}
		curentPopup.classList.add('open')
		curentPopup.addEventListener('click', function (e) {
			if (!e.target.closest('.popup__content')) {
				popupClose(e.target.closest('.popup'))
			}
		})
	}
}

function popupClose(popupActive, doUnlock = true) {
	if (unlock) {
		popupActive.classList.remove('open')
		if (doUnlock) {
			bodyUnLock()
		}
	}
}

function bodyLock() {
	const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px'

	if (lockPadding.length > 0) {
		for (let index = 0; index < lockPadding.length; index++) {
			const el = lockPadding[index];
			el.getElementsByClassName.paddingRight = lockPaddingValue;
		}
	}

	body.style.paddingRight = lockPaddingValue
	body.classList.add('lock')

	unlock = false
	setTimeout(function () {
		unlock = true
	}, timeout)
}

function bodyUnLock() {
	setTimeout(function () {
		if (lockPadding.length > 0) {
			for (let index = 0; index < lockPadding.length; index++) {
				const el = lockPadding[index];
				el.style.paddingRight - "0px";
			}
		}

		body.style.paddingRight = '0px'
		body.classList.remove('lock')
	}, timeout)

	unlock = false
	setTimeout(function () {
		unlock = true
	}, timeout)

	document.addEventListener('keydown', function (e) {
		if (e.which === 27) {
			const popupActive = document.querySelector('.popup.open')
			popupClose(popupActive)
		}
	})
}

//=====================================================================================================================================

// (function() {
//   let original_pasitions = []
//   let da_elements = document.querySelectorAll('[data-da]')
//   let da_elements_array = []
//   let da_match_media = []
//   // Заполняем массивы

//   if (da_elements.length > 0) {
//     let number = 0
//     for (let index = 0; index < da_elements.length; index++) {
//       const da_element = da_elements[index]
//       const da_move = da_element.getAttribute('data-da')
//       const da_array = da_move.split(',')
//       if (da_array.length == 3) {
//         da_element.setAttribute('data-da-index', number)
//         // Заполняем массив первоначальных позиций
//         original_pasitions[number] = {
//           "parent": da_element.parentNode,
//           "index": index_in_parent(da_element)
//         }
//         // Заполняем массив элементов
//         da_elements_array[number] = {
//           "element": da_element,
//           "destination": document.querySelector('.' + da_array[0].trim()),
//           "place": da_array[1].trim(),
//           "breakpoint": da_array[2].trim()
//         }
//         number++
//       }
//     }
//     dynamic_adapt_sort(da_elements_array)

//     // Создаем события в точке брейкпоинта
//     for (let index = 0; index < da_elements_array.length; index++) {
//       const el = da_elements_array[index]
//       const da_breakpoint = el.breakpoint
//       const da_type = "max" // Для MobileFirst поменять на min

//       da_match_media.push(window.matchMedia("(" + da_type + "-width: " + da_breakpoint + "px)"))
//       da_match_media[index].addEventListener(dynamic_adapt)
//     }
//   }

//   // Основная функция
//   function dynamic_adapt(e) {
//     for (let index = 0; index < da_elements_array.length; index++) {
//       const el = da_elements_array[index]
//       const da_element = el.element
//       const da_destination = el.destination
//       const da_place = el.place
//       const da_breakpoint = el.breakpoint
//       const da_classname = "_dynamic_adapt_" + da_breakpoint

//       if (da_match_media[index].matches) {
//         // Перебрасывает элементы
//         if (!da_element.classList.contains(da_classname)) {
//           let actual_index
//           if (da_place == 'first') {
//             actual_index = index_of_elements(da_destination)[0]
//           }
//           else if (da_place == 'last') {
//             actual_index = index_of_elements(da_destination)[index_of_elements(da_destination).length]
//           } else {
//             actual_index = index_of_elements(da_destination)[da_place]
//           }
//           da_destination.inserBefore(da_element, da_destination.children[actual_index])
//           da_element.classList.add(da_classname)
//         }
//       } else {
//         // Возвращаем на место
//         if (da_element.classList.contains(da_classname)) {
//           dynamic_adapt_back(da_element)
//           da_element.classList.remove(da_classname)
//         }
//       }
//     }
//     custom_adapt()
//   }

//   // Вызов основной функции
//   dynamic_adapt()

//   // Функция возврата на место
//   function dynamic_adapt_back(el) {
//     const da_index = el.getAttribute('data-da-index')
//     const original_place = original_positions[da_index]
//     const parent_place = original_place['parent']
//     const index_place = original_place['index']
//     const actual_index = index_of_elements(parent_place, true)[index_place]
//     parent_place.insertBefore(el, parent_place.children[actual_index])
//   }
//   // Функция получения индекса внутри родителя
//   function index_in_parent(el) {
//     var children = Array.prototype.slice.call(el.parentNode.children)
//     return children.indexOf(el)
//   }
//   // Функция получения массива индексов элементов внутри родителя
//   function index_of_elements(parent, back) {
//     const children = parent.children
//     const children_array = []
//     for (let i = 0; i < children.length; i++) {
//       const children_element = children[i]
//       if (back) {
//         children_array.push(i)
//       } else {
//         // Исключение перенесенный элемент
//         if (children_element.getAttribute('data-da') == null) {
//           children_array.push(i)
//         }
//       }
//     }
//     return children_array
//   }
//   // Сортировка обьекта
//   function dynamic_adapt_sort(arr) {
//     arr.sort(function (a, b) {
//       if (a.breakpoint > b.breakpoint) { return -1 } else { return 1 } // Для MobileFirst поменять
//     })
//     arr.sort(function (a, b) {
//       if (a.place > b.place) { return 1 } else { return -1 }
//     })
//   }
//   // Дополнительный сценарий адаптпции
//   function custom_adapt() {
//     const viewport_width = Math.max(document.documentElement.clientWidth, window.innerHeight || 0)
//   }

//   // Слушаем изменение размера экрана
//   window.addEventListener('resize', function (event) {

//   })
// })

// Dynamic Adapt v.1
// HTML data-da="where(uniq class name),when(breakpoint),position(digi)"
// e.x. data-da=".item,992,2"
// Andrikanych Yevhen 2020
// https://www.youtube.com/c/freelancerlifestyle

function DynamicAdapt(type) {
	this.type = type;
}

DynamicAdapt.prototype.init = function () {
	const _this = this;
	// массив объектов
	this.оbjects = [];
	this.daClassname = "_dynamic_adapt_";
	// массив DOM-элементов
	this.nodes = document.querySelectorAll("[data-da]");

	// наполнение оbjects объктами
	for (let i = 0; i < this.nodes.length; i++) {
		const node = this.nodes[i];
		const data = node.dataset.da.trim();
		const dataArray = data.split(",");
		const оbject = {};
		оbject.element = node;
		оbject.parent = node.parentNode;
		оbject.destination = document.querySelector(dataArray[0].trim());
		оbject.breakpoint = dataArray[1] ? dataArray[1].trim() : "767";
		оbject.place = dataArray[2] ? dataArray[2].trim() : "last";
		оbject.index = this.indexInParent(оbject.parent, оbject.element);
		this.оbjects.push(оbject);
	}

	this.arraySort(this.оbjects);

	// массив уникальных медиа-запросов
	this.mediaQueries = Array.prototype.map.call(this.оbjects, function (item) {
		return '(' + this.type + "-width: " + item.breakpoint + "px)," + item.breakpoint;
	}, this);
	this.mediaQueries = Array.prototype.filter.call(this.mediaQueries, function (item, index, self) {
		return Array.prototype.indexOf.call(self, item) === index;
	});

	// навешивание слушателя на медиа-запрос
	// и вызов обработчика при первом запуске
	for (let i = 0; i < this.mediaQueries.length; i++) {
		const media = this.mediaQueries[i];
		const mediaSplit = String.prototype.split.call(media, ',');
		const matchMedia = window.matchMedia(mediaSplit[0]);
		const mediaBreakpoint = mediaSplit[1];

		// массив объектов с подходящим брейкпоинтом
		const оbjectsFilter = Array.prototype.filter.call(this.оbjects, function (item) {
			return item.breakpoint === mediaBreakpoint;
		});
		matchMedia.addListener(function () {
			_this.mediaHandler(matchMedia, оbjectsFilter);
		});
		this.mediaHandler(matchMedia, оbjectsFilter);
	}
};

DynamicAdapt.prototype.mediaHandler = function (matchMedia, оbjects) {
	if (matchMedia.matches) {
		for (let i = 0; i < оbjects.length; i++) {
			const оbject = оbjects[i];
			оbject.index = this.indexInParent(оbject.parent, оbject.element);
			this.moveTo(оbject.place, оbject.element, оbject.destination);
		}
	} else {
		for (let i = 0; i < оbjects.length; i++) {
			const оbject = оbjects[i];
			if (оbject.element.classList.contains(this.daClassname)) {
				this.moveBack(оbject.parent, оbject.element, оbject.index);
			}
		}
	}
};

// Функция перемещения
DynamicAdapt.prototype.moveTo = function (place, element, destination) {
	element.classList.add(this.daClassname);
	if (place === 'last' || place >= destination.children.length) {
		destination.insertAdjacentElement('beforeend', element);
		return;
	}
	if (place === 'first') {
		destination.insertAdjacentElement('afterbegin', element);
		return;
	}
	destination.children[place].insertAdjacentElement('beforebegin', element);
}

// Функция возврата
DynamicAdapt.prototype.moveBack = function (parent, element, index) {
	element.classList.remove(this.daClassname);
	if (parent.children[index] !== undefined) {
		parent.children[index].insertAdjacentElement('beforebegin', element);
	} else {
		parent.insertAdjacentElement('beforeend', element);
	}
}

// Функция получения индекса внутри родителя
DynamicAdapt.prototype.indexInParent = function (parent, element) {
	const array = Array.prototype.slice.call(parent.children);
	return Array.prototype.indexOf.call(array, element);
};

// Функция сортировки массива по breakpoint и place
// по возрастанию для this.type = min
// по убыванию для this.type = max
DynamicAdapt.prototype.arraySort = function (arr) {
	if (this.type === "min") {
		Array.prototype.sort.call(arr, function (a, b) {
			if (a.breakpoint === b.breakpoint) {
				if (a.place === b.place) {
					return 0;
				}

				if (a.place === "first" || b.place === "last") {
					return -1;
				}

				if (a.place === "last" || b.place === "first") {
					return 1;
				}

				return a.place - b.place;
			}

			return a.breakpoint - b.breakpoint;
		});
	} else {
		Array.prototype.sort.call(arr, function (a, b) {
			if (a.breakpoint === b.breakpoint) {
				if (a.place === b.place) {
					return 0;
				}

				if (a.place === "first" || b.place === "last") {
					return 1;
				}

				if (a.place === "last" || b.place === "first") {
					return -1;
				}

				return b.place - a.place;
			}

			return b.breakpoint - a.breakpoint;
		});
		return;
	}
};

const da = new DynamicAdapt("max");
da.init();

import "./files/spoller.js";
import "./files/quantity.js";

//========================================
