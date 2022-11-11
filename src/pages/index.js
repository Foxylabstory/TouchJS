import "../pages/index.css";
import { leftTopGauge, leftBottomGauge, centerGauge, rightTopGauge, rightBottomGauge } from '../components/gauges/circle';
import { linearGauge1, linearGauge2, linearGauge3, linearGauge4, linearGauge5, linearGauge6, linearGauge7, linearGauge8 } from '../components/gauges/linear';

import Keyboard from 'simple-keyboard';
import 'simple-keyboard/build/css/index.css';
import layout from '../vendor/keyboard/layout/russianLayout';
// import layoutEn from '../vendor/keyboard/layout/englishLayout';

let nameOfGauge = '';
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
    if (event.target === modalWindow) {
      closePopup();
    };
  }, true);
});

// закрытие попапа
closeModalWindow.addEventListener('click', closePopup);

saveButton.addEventListener('click', function (event) {
  event.preventDefault();
  const newData = {};
  const selectValues = modalWindow.querySelectorAll('.popup__select');
  const inputValues = modalWindow.querySelectorAll('.popup__input');
  console.log(`elements`, selectValues);
  console.log(`elements`, inputValues);
  selectValues.forEach((select) => {
    newData[select.name] = select.value;
  });
  inputValues.forEach((input) => {
    newData[input.name] = input.value;
  });
  console.log(nameOfGauge);
  if (nameOfGauge === 'circleGaugeCenter') {
    console.log(`match`, centerGauge.options);
    console.log(`submit`, newData);

    let setMinValue =  parseInt(newData.scaleMin);
    let setMaxValue = parseInt(newData.scaleMax);
    let minZone = parseInt(newData.paramMin);
    let maxZone = parseInt(newData.paramMax);
    
    centerGauge.options.minValue = setMinValue;
    centerGauge.options.maxValue = setMaxValue;
    centerGauge.value = '990';
    const arr = [];
    for (let i = centerGauge.options.minValue; i <= centerGauge.options.maxValue; i = i + (centerGauge.options.maxValue + Math.abs(centerGauge.options.minValue)) / 10) {
      arr.push(i);
    }
    console.log(arr);
    centerGauge.options.majorTicks = arr;
    centerGauge.options.highlights = [
      { "from": setMinValue, "to": minZone, "color": "rgba(255,0,0,.65)" },
      { "from": maxZone, "to": setMaxValue, "color": "rgba(255,0,0,.75)" }
    ];
    centerGauge.update();
  };
  closePopup();
})