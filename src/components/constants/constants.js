const gaugeList = document.querySelectorAll('.gauge');
const headerLine = document.querySelector('.header');
const leftMenuButton = headerLine.querySelector('.header__button_burger-left');
const leftMenu = document.querySelector('.nav_left');
const rightMenuButton = headerLine.querySelector('.header__button_burger-right');
const rightMenu = document.querySelector('.nav_right');
const workCodeButton = headerLine.querySelector('.header__button_code');
const resetTravelBlockPositionButton = headerLine.querySelector('.header__button_tb');
const setBitPositionButton = headerLine.querySelector('.header__button_bit');
const setBottomOfHoleButton = headerLine.querySelector('.header__button_hole');
const drillButton = headerLine.querySelector('.header__button_drill');
const vernButton = headerLine.querySelector('.header__button_vern');
const lockButton = headerLine.querySelector('.header__button_unlock');
const animateButton = headerLine.querySelector('.header__button_animate');
const paramsModalWindow = document.querySelector('.popup_params-setting');
const closeModalWindow = document.querySelectorAll('.popup__form-closer');
const paramsSaveButton = paramsModalWindow.querySelector('#submit');
const resetButtons = document.querySelectorAll('#reset');
const keyboardButtons = document.querySelectorAll('#keyboard');
const keyboardDiv = document.querySelector('.keyboard');
const paramsOnModal = paramsModalWindow.querySelector('#params');
const unitsOnModal = paramsModalWindow.querySelector('#units');
const formatOnModal = paramsModalWindow.querySelector('#format');
const scaleMaxOnModal = paramsModalWindow.querySelector('#scale-max');
const paramMaxOnModal = paramsModalWindow.querySelector('#param-max');
const paramMinOnModal = paramsModalWindow.querySelector('#param-min');
const scaleMinOnModal = paramsModalWindow.querySelector('#scale-min');
const workCodeModalWindow = document.querySelector('.popup_work-code-setting');
const workCodeSaveButton = workCodeModalWindow.querySelector('#submit');
const bitHoleModalWindow = document.querySelector('.popup_bit-hole');
const bitHoleSaveButton = bitHoleModalWindow.querySelector('#submit');
const bitHoleErrorSpan = bitHoleModalWindow.querySelector('.popup__error');

export {
  gaugeList, leftMenuButton, leftMenu, rightMenuButton, rightMenu, workCodeButton, resetTravelBlockPositionButton, setBitPositionButton, setBottomOfHoleButton,
  drillButton, vernButton, lockButton, animateButton, paramsModalWindow,
  workCodeModalWindow, workCodeSaveButton, bitHoleModalWindow, bitHoleSaveButton, bitHoleErrorSpan, resetButtons, closeModalWindow, paramsSaveButton, keyboardButtons,
  keyboardDiv, paramsOnModal, unitsOnModal, formatOnModal, scaleMaxOnModal, paramMaxOnModal, paramMinOnModal, scaleMinOnModal
};