import "../pages/index.css";
import { leftTopGauge, leftBottomGauge, circleGaugeCenter, rightTopGauge, rightBottomGauge } from '../components/gauges/circle';
import { linearGauge1, linearGauge2, linearGauge3, linearGauge4, linearGauge5, linearGauge6, linearGauge7, linearGauge8 } from '../components/gauges/linear';

import Keyboard from 'simple-keyboard';
import 'simple-keyboard/build/css/index.css';
import layout from '../vendor/keyboard/layout/russianLayout';
// import layoutEn from '../vendor/keyboard/layout/englishLayout';

let nameOfGauge;
const gaugeList = document.querySelectorAll('.gauge');
const animateButton = document.querySelector('.header__animate');
const modalWindow = document.querySelector('.popup');
const closeModalWindow = modalWindow.querySelector('.popup__form-closer');
const saveButton = modalWindow.querySelector('#submit');
const keyboardButton = modalWindow.querySelector('#keyboard');
const keyboardDiv = modalWindow.querySelector('.popup__keyboard');

// запуск генерации рандомных значений для индикаторов
let timers = [];
animateButton.addEventListener("click", function () {
  document.gauges.forEach(function (gauge) {
    timers.push(setInterval(function () {
      gauge.value = Math.random() *
        (gauge.options.maxValue - gauge.options.minValue) +
        gauge.options.minValue;
    }, gauge.animation.duration + 500));
  });
});

// логика клавиатуры
let keyboard = new Keyboard({
  onChange: input => onChange(input),
  onKeyPress: button => onKeyPress(button),
  ...layout,
});

/**
 * Update simple-keyboard when input is changed directly
 */
document.querySelector(".input").addEventListener("input", event => {
  keyboard.setInput(event.target.value);
});

console.log(keyboard);

function onChange(input) {
  document.querySelector(".input").value = input;
  console.log("Input changed", input);
}

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
    closePopup();
  }
});

function handleToggleKeyboard() {
  keyboardDiv.classList.toggle('popup__keyboard_opened');
  /* keyboardDiv.classList.toggle('popup__keyboard_visible');
  setTimeout(function () {
    keyboardDiv.classList.toggle('popup__keyboard_opened');
  }, 1000) */

}

const openPopup = () => {
  modalWindow.classList.add('popup_opened');
  keyboardButton.addEventListener('click', handleToggleKeyboard);
}

const closePopup = () => {
  modalWindow.classList.remove('popup_opened');
  keyboardButton.removeEventListener('click', handleToggleKeyboard);
}

// открытие попапа
gaugeList.forEach((gauge) => {
  gauge.addEventListener('click', function (event) {
    openPopup(event);
    nameOfGauge = event.target.id;
    console.log(nameOfGauge);

  }, true);
});

// закрытие попапа
closeModalWindow.addEventListener('click', closePopup);

// закрытие попапа по оверлею
document.addEventListener('click', function (event) {
  if (event.target === modalWindow) {
    closePopup();
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
    arr.push(i);
  }
  gauge.options.majorTicks = arr;
  gauge.options.highlights = [
    { "from": setMinValue, "to": minZone, "color": "rgba(255,0,0,.65)" },
    { "from": maxZone, "to": setMaxValue, "color": "rgba(255,0,0,.75)" }
  ];
  if (newData.format === '0.0') {
    gauge.options.valueDec = 1
  } else if (newData.format === '0.00') {
    gauge.options.valueDec = 2
  } else if (newData.format === '0.000') {
    gauge.options.valueDec = 3
  };
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
  gauge.options.units = newData.params + " " + newData.units;
  gauge.update();
};

//что произойдет если нажать на кнопку сохранить
saveButton.addEventListener('click', function (event) {
  event.preventDefault();
  const newData = {};
  const values = modalWindow.querySelectorAll('.popup__data');

  console.log(`elements`, values);
  values.forEach((data) => {
    newData[data.name] = data.value;
  });
  console.log(newData);
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
  closePopup();
})