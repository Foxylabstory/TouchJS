const gaugeList = document.querySelectorAll('.gauge');
const headerLine = document.querySelector('.header');
const leftMenuButton = headerLine.querySelector('.header__button_burger-left');
const leftMenu = document.querySelector('.nav_left');
const rightMenuButton = headerLine.querySelector('.header__button_burger-right');
const rightMenu = document.querySelector('.nav_right');
const workCode = headerLine.querySelector('.header__button_code');
const animateButton = headerLine.querySelector('.header__button_animate');
const paramsModalWindow = document.querySelector('.popup_params-setting');
const workCodeModalWindow = document.querySelector('.popup_work-code-setting');
const closeModalWindow = document.querySelectorAll('.popup__form-closer');
const saveButton = document.querySelector('#submit');
const keyboardButton = document.querySelector('#keyboard');
const keyboardDiv = document.querySelector('.popup__keyboard');
const paramsOnModal = paramsModalWindow.querySelector('#params');
const unitsOnModal = paramsModalWindow.querySelector('#units');
const formatOnModal = paramsModalWindow.querySelector('#format');
const scaleMaxOnModal = paramsModalWindow.querySelector('#scale-max');
const paramMaxOnModal = paramsModalWindow.querySelector('#param-max');
const paramMinOnModal = paramsModalWindow.querySelector('#param-min');
const scaleMinOnModal = paramsModalWindow.querySelector('#scale-min');

export {
  gaugeList, leftMenuButton, leftMenu, rightMenuButton, rightMenu, workCode, animateButton, paramsModalWindow, workCodeModalWindow, closeModalWindow, saveButton, keyboardButton,
  keyboardDiv, paramsOnModal, unitsOnModal, formatOnModal, scaleMaxOnModal, paramMaxOnModal, paramMinOnModal, scaleMinOnModal
};