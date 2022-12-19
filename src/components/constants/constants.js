const gaugeList = document.querySelectorAll('.gauge');
const leftMenuButton = document.querySelector('.header__button_burger-left');
const leftMenu = document.querySelector('.nav_left');
const rightMenuButton = document.querySelector('.header__button_burger-right');
const rightMenu = document.querySelector('.nav_right');
const animateButton = document.querySelector('.header__button_animate');
const modalWindow = document.querySelector('.popup');
const closeModalWindow = modalWindow.querySelector('.popup__form-closer');
const saveButton = modalWindow.querySelector('#submit');
const keyboardButton = modalWindow.querySelector('#keyboard');
const keyboardDiv = modalWindow.querySelector('.popup__keyboard');
const paramsOnModal = modalWindow.querySelector('#params');
const unitsOnModal = modalWindow.querySelector('#units');
const formatOnModal = modalWindow.querySelector('#format');
const scaleMaxOnModal = modalWindow.querySelector('#scale-max');
const paramMaxOnModal = modalWindow.querySelector('#param-max');
const paramMinOnModal = modalWindow.querySelector('#param-min');
const scaleMinOnModal = modalWindow.querySelector('#scale-min');

export {
  gaugeList, leftMenuButton, leftMenu, rightMenuButton, rightMenu, animateButton, modalWindow, closeModalWindow, saveButton, keyboardButton,
  keyboardDiv, paramsOnModal, unitsOnModal, formatOnModal, scaleMaxOnModal, paramMaxOnModal, paramMinOnModal, scaleMinOnModal
};