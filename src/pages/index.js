import "../pages/index.css";
import { leftTopGauge, leftBottomGauge, circleGaugeCenter, rightTopGauge, rightBottomGauge } from '../components/gauges/circle';
import { linearGauge1, linearGauge2, linearGauge3, linearGauge4, linearGauge5, linearGauge6, linearGauge7, linearGauge8 } from '../components/gauges/linear';

import Keyboard from 'simple-keyboard';
import 'simple-keyboard/build/css/index.css';
import layout from '../vendor/keyboard/layout/russianLayout';
// import layoutEn from '../vendor/keyboard/layout/englishLayout';

import {
  gaugeList, resetButtons, closeModalWindow, keyboardButtons, keyboardDiv,
  leftMenuButton, leftMenu,
  time,
  rightMenuButton, rightMenu,
  workCodeButton, workCodeModalWindow, workCodeSaveButton,
  resetTravelBlockPositionButton,
  setBitPositionButton, setBottomOfHoleButton, bitHoleModalWindow, bitHoleSaveButton, bitHoleErrorSpan,
  drillButton,
  vernButton,
  lockButton,
  animateButton,
  bindsCallButton, bindsModalWindow, bindsSaveButton,
  paramsModalWindow, paramsSaveButton, paramsOnModal, unitsOnModal, formatOnModal, scaleMaxOnModal, paramMaxOnModal, paramMinOnModal, scaleMinOnModal,
  appSettingsCallButton, appSettingsModalWindow, appSettingsSaveButton,
  closeAppButton
} from '../components/constants/constants';

let openedGauge;
let lockUnlockCondition = false;

const menuOpener = (menuSide, menuButtonSide) => {
  menuSide.classList.toggle('nav_opened');
  menuButtonSide.classList.toggle('header__button_active');
};

/* leftMenuButton.addEventListener('click', function (params) {
  menuOpener(leftMenu, leftMenuButton);
}) */

rightMenuButton.addEventListener('click', function (params) {
  menuOpener(rightMenu, rightMenuButton);
})

// запуск генерации рандомных значений для индикаторов
animateButton.addEventListener("click", function () {
  animateButton.classList.add('header__button_active');
  setInterval(function (params) {
    document.gauges.forEach((gauge) => {
      gauge.value = Math.random() * (gauge.options.maxValue - gauge.options.minValue) + gauge.options.minValue;
      gauge.update();
    });
  }, 500);
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

function handleToggleKeyboard(event) {
  keyboardDiv.classList.toggle('keyboard_opened');
  // CommandRun.run("C:\WINDOWS\system32\osk.exe", []); // нужно дополнительно из дополнения к браузеру делать разрешения
}

const openPopup = (modalWindow) => {
  modalWindow.classList.add('popup_opened');
  keyboardButtons.forEach((keyboardButton) => {
    keyboardButton.addEventListener('click', handleToggleKeyboard);
  });
}

const closePopup = (modalWindow) => {
  modalWindow.classList.remove('popup_opened');
  keyboardButtons.forEach((keyboardButton) => {
    keyboardButton.removeEventListener('click', handleToggleKeyboard);
  });
  keyboardDiv.classList.remove('keyboard_opened');
}

// закрытие попапа по крестику
closeModalWindow.forEach((closeButton) => {
  closeButton.addEventListener('click', function (params) {
    closePopup(closeButton.closest('.popup'));
  });
});
// закрытие по кнопке отменить
resetButtons.forEach((resetButton) => {
  resetButton.addEventListener('click', function (params) {
    closePopup(resetButton.closest('.popup'));
  });
});
// закрытие попапа по нажатию ESC
document.addEventListener('keydown', function (event) {
  if (event.key === "Escape") {
    if (document.querySelector('.popup_opened')) {
      closePopup(document.querySelector('.popup_opened'));
    };
  };
});
// закрытие попапа по оверлею
document.addEventListener('click', function (event) {
  if (event.target === paramsModalWindow || event.target === workCodeModalWindow ||
    event.target === bitHoleModalWindow || event.target === bindsModalWindow ||
    event.target === appSettingsModalWindow) {
    closePopup(event.target);
  };
});

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
document.gauges.forEach((gauge) => {
  document.querySelector(`#${gauge.options.renderTo}`).addEventListener('click', function (params) {
    updatePopup(gauge);
    openPopup(paramsModalWindow);
    openedGauge = gauge;
  }, true);
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
paramsSaveButton.addEventListener('click', function (event) {
  event.preventDefault();
  const newData = {};
  const values = paramsModalWindow.querySelectorAll('.popup_data');
  values.forEach((data) => {
    newData[data.name] = data.value;
  });
  if ((String(openedGauge.options.renderTo)).startsWith('linear')) {
    handleUpdateLinearGauge(openedGauge, newData);
  } else if ((String(openedGauge.options.renderTo)).startsWith('circle')) {
    handleUpdateCircleGauge(openedGauge, newData);
  };
  closePopup(paramsModalWindow);
})

workCodeButton.addEventListener('click', function (params) {
  openPopup(workCodeModalWindow);
});

workCodeSaveButton.addEventListener('click', function (event) {
  event.preventDefault();
  const newWorkCodeData = {};
  const workCodeValues = workCodeModalWindow.querySelectorAll('.popup_data');
  workCodeValues.forEach((data) => {
    newWorkCodeData[data.name] = data.value;
  });
  console.log(newWorkCodeData);
  closePopup(workCodeModalWindow);
});

resetTravelBlockPositionButton.addEventListener('click', function (params) {
  console.log(`${resetTravelBlockPositionButton} (resetTravelBlockPositionButton) clicked`);
  //alert('resetTravelBlockPositionButton');
});

setBitPositionButton.addEventListener('click', function (params) {
  openPopup(bitHoleModalWindow);
});

setBottomOfHoleButton.addEventListener('click', function (params) {
  openPopup(bitHoleModalWindow);
});

bitHoleSaveButton.addEventListener('click', function (event) {
  event.preventDefault();
  const newBitHoleData = {};
  const bitHoleValues = bitHoleModalWindow.querySelectorAll('.popup_data');
  bitHoleValues.forEach((data) => {
    newBitHoleData[data.name] = data.value;
  });
  if (newBitHoleData.bitPosition === '' || newBitHoleData.bottomOfHole === '') {
    console.log(`empty`);
    bitHoleErrorSpan.textContent = 'Положение долота или глубина забоя не должны быть пусты';
    setTimeout(function () { bitHoleErrorSpan.textContent = '' }, 3500);
  } else if (newBitHoleData.bitPosition <= newBitHoleData.bottomOfHole) {
    console.log(newBitHoleData);
    closePopup(bitHoleModalWindow);
  } else {
    console.log(`error`);
    bitHoleErrorSpan.textContent = 'Положение долота должно быть меньше или равно, глубине забоя';
    setTimeout(function () { bitHoleErrorSpan.textContent = '' }, 3500);
  }
});

drillButton.addEventListener('click', function (params) {
  drillButton.classList.toggle('header__button_active');
  console.log(`drillButton`);
});

vernButton.addEventListener('click', function (params) {
  vernButton.classList.toggle('header__button_active');
  console.log(`vernButton`);
});

const handleBlock = (event) => {
  if (event.target !== lockButton) {
    event.stopPropagation();
    event.preventDefault();
  };
}

const lockScreen = () => {
  lockUnlockCondition = !lockUnlockCondition;
  lockButton.classList.add('header__button_active');
  lockButton.classList.add('header__button_lock');
  document.addEventListener("click", handleBlock, true);
}

const unlockScreen = () => {
  lockUnlockCondition = !lockUnlockCondition;
  lockButton.classList.remove('header__button_active');
  lockButton.classList.remove('header__button_lock');
  document.removeEventListener("click", handleBlock, true);
}

const handleLockUnlock = (params) => {
  if (lockUnlockCondition) {
    unlockScreen();
  } else {
    lockScreen();
  }
}

lockButton.addEventListener('click', handleLockUnlock);

bindsCallButton.addEventListener('click', function (params) {
  menuOpener(rightMenu, rightMenuButton);
  openPopup(bindsModalWindow);
});

bindsSaveButton.addEventListener('click', function (event) {
  event.preventDefault();
  const newBindsData = {};
  const bindValues = bindsModalWindow.querySelectorAll('.popup_data');
  bindValues.forEach((data) => {
    newBindsData[data.name] = data.value;
  });
  console.log(newBindsData);
  closePopup(bindsModalWindow);
});

appSettingsCallButton.addEventListener('click', function (params) {
  console.log(`appSettingsCallButton`);
  menuOpener(rightMenu, rightMenuButton);
  openPopup(appSettingsModalWindow);
});

appSettingsSaveButton.addEventListener('click', function (event) {
  event.preventDefault();
  const newAppSettingsData = {};
  const appSettingsValues = appSettingsModalWindow.querySelectorAll('.popup_data');
  appSettingsValues.forEach((data) => {
    newAppSettingsData[data.name] = data.value;
  });
  console.log(newAppSettingsData);
  closePopup(appSettingsModalWindow);
});

setInterval(function (params) {
  const currentTime = new Date();
  time.setAttribute('datetime', currentTime);
  time.textContent = `${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`;
}, 1000);

closeAppButton.addEventListener('click', function (params) {
  if (confirm('Вы действительно хотите закрыть приложение?')) {
    console.log(window);
    window.close();
  }
})

// console.log(document.gauges);