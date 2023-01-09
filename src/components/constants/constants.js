const gaugeList = document.querySelectorAll('.gauge');
const headerLine = document.querySelector('.header');
const leftMenuButton = headerLine.querySelector('.header__button_burger-left');
const leftMenu = document.querySelector('.nav_left');
const time = headerLine.querySelector('.time');
const rightMenuButton = headerLine.querySelector('.header__button_burger-right');
const rightMenu = document.querySelector('.nav_right');
const workCodeButton = headerLine.querySelector('.header__button_code');
const resetTravelBlockPositionButton = headerLine.querySelector('.header__button_tb');
const setBitPositionButton = headerLine.querySelector('.header__button_bit');
const setBottomOfHoleButton = headerLine.querySelector('.header__button_hole');
const drillButton = headerLine.querySelector('.header__button_drill');
const vernButton = headerLine.querySelector('.header__button_vern');
const lockButton = headerLine.querySelector('.header__button_unlock');
const animateButton = document.querySelector('.header__button_animate');

const bindsCallButton = document.querySelector('#binds');
const appSettingsCallButton = document.querySelector('#appSettings');
const closeAppButton = document.querySelector('#closeApp');

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

const bindsModalWindow = document.querySelector('.popup_binds');
const bindsSaveButton = bindsModalWindow.querySelector('#submit');

const appSettingsModalWindow = document.querySelector('.popup_app-settings');
const appSettingsSaveButton = appSettingsModalWindow.querySelector('#submit');


export {
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
};