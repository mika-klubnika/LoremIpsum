import {initBurgerAction} from './modules/menu';
import {initRangeSlider} from './modules/range';
import {initSelect} from './modules/select';
import {initDescriptionSlider} from './modules/slider';
import {iosVhFix} from './utils/ios-vh-fix';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------
  initBurgerAction();

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initDescriptionSlider();
    initRangeSlider();
    initSelect();
  });
});
