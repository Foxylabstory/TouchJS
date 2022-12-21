import "../pages/index.css";
import { leftTopGauge, leftBottomGauge, circleGaugeCenter, rightTopGauge, rightBottomGauge } from '../components/gauges/circle';
import { linearGauge1, linearGauge2, linearGauge3, linearGauge4, linearGauge5, linearGauge6, linearGauge7, linearGauge8 } from '../components/gauges/linear';

import Keyboard from 'simple-keyboard';
import 'simple-keyboard/build/css/index.css';
import layout from '../vendor/keyboard/layout/russianLayout';
// import layoutEn from '../vendor/keyboard/layout/englishLayout';

import {
  gaugeList, leftMenuButton, leftMenu, rightMenuButton, rightMenu, workCode, animateButton, paramsModalWindow, workCodeModalWindow, closeModalWindow, saveButton, keyboardButton,
  keyboardDiv, paramsOnModal, unitsOnModal, formatOnModal, scaleMaxOnModal, paramMaxOnModal, paramMinOnModal, scaleMinOnModal
} from '../components/constants/constants';

let nameOfGauge;

leftMenuButton.addEventListener('click', function (params) {
  leftMenu.classList.toggle('nav_opened');
  leftMenuButton.classList.toggle('header__button_active');
})

rightMenuButton.addEventListener('click', function (params) {
  rightMenu.classList.toggle('nav_opened');
  rightMenuButton.classList.toggle('header__button_active');
})

// запуск генерации рандомных значений для индикаторов
let timers = [];
animateButton.addEventListener("click", function () {
  animateButton.classList.add('header__button_active');
  document.gauges.forEach(function (gauge) {
    timers.push(setInterval(function () {
      gauge.value = Math.random() *
        (gauge.options.maxValue - gauge.options.minValue) +
        gauge.options.minValue;
    }, gauge.animation.duration + 500));
  });
});

/* const changeHandler = event => {
  console.log(event.value);
  const value = event.value;
  event.value = value.replace(/\D/g, '');
} */

// логика клавиатуры
let selectedInput;
let keyboard = new Keyboard({
  onChange: input => onChange(input),
  onKeyPress: button => onKeyPress(button),
  ...layout,
});

document.querySelectorAll(".popup_data").forEach(input => {
  input.addEventListener("focus", onInputFocus);
  // Optional: Use if you want to track input changes
  // made without simple-keyboard
  input.addEventListener("input", onInputChange);
});

function onInputFocus(event) {
  selectedInput = `#${event.target.id}`;
  console.log(selectedInput);
  keyboard.setInput('');
  keyboard.setOptions({
    inputName: event.target.id
  });
}

function onInputChange(event) {
  console.log(event.target.value, event.target.id);
  console.log(event.value);
  // const value = event.target.value;
  // event.target.value = value.match(/\-\d/g);
  keyboard.setInput(event.target.value, event.target.id);
}

function onChange(input) {
  console.log("Input changed", input);
  document.querySelector(selectedInput || ".input").value = input;
}
/**
 * Update simple-keyboard when input is changed directly
 */
/* document.querySelector(".input").addEventListener("input", event => {
  console.log(event.target.value);
  console.log(keyboard);
  keyboard.setInput(event.target.value);
}); */

// console.log(keyboard);

/* function onChange(input) {
  document.querySelector(".input").value = input;
  //document.activeElement.value = input;
  console.log("Input changed", input);
} */

function onKeyPress(button) {
  console.log("Button pressed", button);
  if (button === "{shift}" || button === "{lock}") handleShift();
  if (button === "{En}" || button === "{Ru}") handleLang();
}

function handleLang() {
  let currentLayout = keyboard.options.layoutName;
  let langToggle = '';
  if (currentLayout === "default") {
    langToggle = "defaultEn";
  } else if (currentLayout === "shift") {
    langToggle = "shiftEn";
  } else if (currentLayout === "defaultEn") {
    langToggle = "default";
  } else if (currentLayout === "shiftEn") {
    langToggle = "shift";
  };
  keyboard.setOptions({
    layoutName: langToggle,
  });
}

function handleShift() {
  let currentLayout = keyboard.options.layoutName;
  let shiftToggle = '';
  if (currentLayout === "default") {
    shiftToggle = "shift";
  } else if (currentLayout === "shift") {
    shiftToggle = "default";
  } else if (currentLayout === "defaultEn") {
    shiftToggle = "shiftEn";
  } else if (currentLayout === "shiftEn") {
    shiftToggle = "defaultEn";
  };
  keyboard.setOptions({
    layoutName: shiftToggle,
  });
}

document.addEventListener('keydown', function (event) {
  if (event.key === "Escape") {
    closePopup(document.querySelector('.popup_opened'));
  }
});

function handleToggleKeyboard() {
  keyboardDiv.classList.toggle('popup__keyboard_opened');
  // CommandRun.run("C:\WINDOWS\system32\osk.exe", []); // нужно дополнительно из дополнения к браузеру делать разрешения
  /* keyboardDiv.classList.toggle('popup__keyboard_visible');
  setTimeout(function () {
    keyboardDiv.classList.toggle('popup__keyboard_opened');
  }, 1000) */

}

const openPopup = (modalWindow) => {
  modalWindow.classList.add('popup_opened');
  keyboardButton.addEventListener('click', handleToggleKeyboard);
}

const closePopup = (modalWindow) => {
  modalWindow.classList.remove('popup_opened');
  keyboardButton.removeEventListener('click', handleToggleKeyboard);
  keyboardDiv.classList.remove('popup__keyboard_opened');
}

const updatePopup = (gauge) => {
  formatOnModal.value = gauge.options.valueDec;
  scaleMaxOnModal.value = gauge.options.maxValue;
  paramMaxOnModal.value = gauge.options.highlights[1].from;
  paramMinOnModal.value = gauge.options.highlights[0].to;
  scaleMinOnModal.value = gauge.options.minValue;
  if ((String(gauge.options.renderTo)).startsWith('linear')) {
    const titleAndvalue = gauge.options.units.split(', ');
    paramsOnModal.value = titleAndvalue[0];
    unitsOnModal.value = titleAndvalue[1];
  } else if ((String(gauge.options.renderTo)).startsWith('circle')) {
    paramsOnModal.value = gauge.options.title;
    unitsOnModal.value = gauge.options.units;
  };
}

// открытие попапа
gaugeList.forEach((gauge) => {
  gauge.addEventListener('click', function (event) {
    openPopup(paramsModalWindow);
    nameOfGauge = event.target.id;
    if (nameOfGauge === 'circleGaugeLeftTop') {
      updatePopup(leftTopGauge);
    } else if (nameOfGauge === 'circleGaugeLeftBottom') {
      updatePopup(leftBottomGauge);
    } else if (nameOfGauge === 'circleGaugeCenter') {
      updatePopup(circleGaugeCenter);
    } else if (nameOfGauge === 'circleGaugeRightTop') {
      updatePopup(rightTopGauge);
    } else if (nameOfGauge === 'circleGaugeRightBottom') {
      updatePopup(rightBottomGauge);
    } else if (nameOfGauge === 'linearGauge1') {
      updatePopup(linearGauge1);
    } else if (nameOfGauge === 'linearGauge2') {
      updatePopup(linearGauge2);
    } else if (nameOfGauge === 'linearGauge3') {
      updatePopup(linearGauge3);
    } else if (nameOfGauge === 'linearGauge4') {
      updatePopup(linearGauge4);
    } else if (nameOfGauge === 'linearGauge5') {
      updatePopup(linearGauge5);
    } else if (nameOfGauge === 'linearGauge6') {
      updatePopup(linearGauge6);
    } else if (nameOfGauge === 'linearGauge7') {
      updatePopup(linearGauge7);
    } else if (nameOfGauge === 'linearGauge8') {
      updatePopup(linearGauge8);
    };
  }, true);
});

// закрытие попапа
closeModalWindow.forEach((closeButton) => {
  closeButton.addEventListener('click', function (params) {
    closePopup(closeButton.closest('.popup'));
  });
});

// закрытие попапа по оверлею
document.addEventListener('click', function (event) {
  if (event.target === paramsModalWindow || event.target === workCodeModalWindow) { // посмотри, закрывается окно с кодами работ?
    closePopup(event.target);
  };
});

// обновление параметров
function updateGauge(gauge, newData, numberOfParts) {
  const setMinValue = parseInt(newData.scaleMin);
  const setMaxValue = parseInt(newData.scaleMax);
  const minZone = parseInt(newData.paramMin);
  const maxZone = parseInt(newData.paramMax);
  gauge.options.minValue = setMinValue;
  gauge.options.maxValue = setMaxValue;
  const arr = [];
  for (let i = gauge.options.minValue; i <= gauge.options.maxValue; i = i + (gauge.options.maxValue + Math.abs(gauge.options.minValue)) / numberOfParts) {
    arr.push(Math.round(i));
  }
  gauge.options.majorTicks = arr;
  gauge.options.highlights = [
    { "from": setMinValue, "to": minZone, "color": "rgba(255,0,0,.65)" },
    { "from": maxZone, "to": setMaxValue, "color": "rgba(255,0,0,.75)" }
  ];
  gauge.options.valueDec = newData.format;
  return gauge;
};

function handleUpdateCircleGauge(gauge, newData) {
  updateGauge(gauge, newData, 10);
  gauge.options.title = newData.params;
  gauge.options.units = newData.units;
  gauge.update();
};

function handleUpdateLinearGauge(gauge, newData) {
  updateGauge(gauge, newData, 5);
  gauge.options.units = newData.params + ", " + newData.units;
  gauge.update();
};

//что произойдет если нажать на кнопку сохранить
saveButton.addEventListener('click', function (event) {
  event.preventDefault();
  const newData = {};
  const values = paramsModalWindow.querySelectorAll('.popup_data');
  values.forEach((data) => {
    newData[data.name] = data.value;
  });
  if (nameOfGauge === 'circleGaugeLeftTop') {
    handleUpdateCircleGauge(leftTopGauge, newData);
  } else if (nameOfGauge === 'circleGaugeLeftBottom') {
    handleUpdateCircleGauge(leftBottomGauge, newData);
  } else if (nameOfGauge === 'circleGaugeCenter') {
    handleUpdateCircleGauge(circleGaugeCenter, newData);
  } else if (nameOfGauge === 'circleGaugeRightTop') {
    handleUpdateCircleGauge(rightTopGauge, newData);
  } else if (nameOfGauge === 'circleGaugeRightBottom') {
    handleUpdateCircleGauge(rightBottomGauge, newData);
  } else if (nameOfGauge === 'linearGauge1') {
    handleUpdateLinearGauge(linearGauge1, newData);
  } else if (nameOfGauge === 'linearGauge2') {
    handleUpdateLinearGauge(linearGauge2, newData);
  } else if (nameOfGauge === 'linearGauge3') {
    handleUpdateLinearGauge(linearGauge3, newData);
  } else if (nameOfGauge === 'linearGauge4') {
    handleUpdateLinearGauge(linearGauge4, newData);
  } else if (nameOfGauge === 'linearGauge5') {
    handleUpdateLinearGauge(linearGauge5, newData);
  } else if (nameOfGauge === 'linearGauge6') {
    handleUpdateLinearGauge(linearGauge6, newData);
  } else if (nameOfGauge === 'linearGauge7') {
    handleUpdateLinearGauge(linearGauge7, newData);
  } else if (nameOfGauge === 'linearGauge8') {
    handleUpdateLinearGauge(linearGauge8, newData);
  };
  closePopup(paramsModalWindow);
})
