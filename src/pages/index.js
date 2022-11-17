import "../pages/index.css";
import { leftTopGauge, leftBottomGauge, circleGaugeCenter, rightTopGauge, rightBottomGauge } from '../components/gauges/circle';
import { linearGauge1, linearGauge2, linearGauge3, linearGauge4, linearGauge5, linearGauge6, linearGauge7, linearGauge8 } from '../components/gauges/linear';

import Keyboard from 'simple-keyboard';
import 'simple-keyboard/build/css/index.css';
import layout from '../vendor/keyboard/layout/russianLayout';
// import layoutEn from '../vendor/keyboard/layout/englishLayout';

let nameOfGauge;
const dataWindow = document.querySelector('.main');
const gaugeList = document.querySelectorAll('.gauge');
const animateButton = document.querySelector('.header__animate');
const modalWindow = document.querySelector('.popup');
const closeModalWindow = modalWindow.querySelector('.popup__form-closer');
const saveButton = modalWindow.querySelector('#submit');

// перенести установку значений в логику работы модального окна
/*
let setMinValue = -1000;
let setMaxValue = 5000;
let minZone = 0;
let maxZone = 4000;

centerGauge.options.minValue = setMinValue;
centerGauge.options.maxValue = setMaxValue;
centerGauge.value = '10';
const arr = [];
for (let i = centerGauge.options.minValue; i <= centerGauge.options.maxValue; i = i + (centerGauge.options.maxValue + Math.abs(centerGauge.options.minValue)) / 10) {
  arr.push(i);
}
centerGauge.options.majorTicks = arr;
centerGauge.options.highlights = [
  { "from": setMinValue, "to": minZone, "color": "rgba(255,0,0,.65)" },
  { "from": maxZone, "to": setMaxValue, "color": "rgba(255,0,0,.75)" }
];
 centerGauge.draw(); */

/* rightBottomGauge.options.maxValue = '440'
rightBottomGauge.value = '100';
rightBottomGauge.options.majorTicks = Array.from({ length: 11 }, function (value, index) {
  // value будет undefined
  return Math.round(index * (rightBottomGauge.options.maxValue / 10))
})
rightBottomGauge.draw();

console.log(centerGauge.options);
linearGauge1.draw(); */

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

const openPopup = (event) => {
  modalWindow.classList.add('popup_opened');
  console.log(event.target);
}

const closePopup = () => {
  modalWindow.classList.remove('popup_opened');
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
function handleUpdate(gauge, newData) {
console.log(gauge);

  const setMinValue = parseInt(newData.scaleMin);
  const setMaxValue = parseInt(newData.scaleMax);
  const minZone = parseInt(newData.paramMin);
  const maxZone = parseInt(newData.paramMax);

  gauge.options.minValue = setMinValue;
  gauge.options.maxValue = setMaxValue;

  const arr = [];
  for (let i = gauge.options.minValue; i <= gauge.options.maxValue; i = i + (gauge.options.maxValue + Math.abs(gauge.options.minValue)) / 10) {
    arr.push(i);
  }
  console.log(arr);
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

  gauge.options.title = newData.params;
  gauge.options.units = newData.units;

  gauge.update();
}

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
    handleUpdate(leftTopGauge, newData);
  } else if (nameOfGauge === 'circleGaugeLeftBottom') {
    handleUpdate(leftBottomGauge, newData);
  } else if (nameOfGauge === 'circleGaugeCenter') {
    handleUpdate(circleGaugeCenter, newData);
  } else if (nameOfGauge === 'circleGaugeRightTop') {
    handleUpdate(rightTopGauge, newData);
  } else if (nameOfGauge === 'circleGaugeRightBottom') {
    handleUpdate(rightBottomGauge, newData);
  };
  /* handleUpdate(nameOfGauge, newData); */
  closePopup();
})