/* в этот файл добавляет скрипты*/
const brgBtn = document.querySelector ('.page-header__burger-button');
const clsBtn = document.querySelector ('.page-header__close-button');
const navList = document.querySelector ('.page-header__list');

brgBtn.onclick = function () {
  brgBtn.classList.add ('page-header__burger-button--special');
  clsBtn.classList.remove ('page-header__close-button--special');
  navList.classList.remove ('page-header__list--hide');
};
clsBtn.onclick = function () {
  clsBtn.classList.add ('page-header__close-button--special');
  brgBtn.classList.remove ('page-header__burger-button--special');
  navList.classList.add ('page-header__list--hide');
};
