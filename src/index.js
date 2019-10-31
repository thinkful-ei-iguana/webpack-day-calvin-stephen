import './styles/index.css';
import $ from 'jquery';
import shoppingList from './scripts/shopping-list.js';

const main = function () {
  shoppingList.bindEventListeners();
  shoppingList.render();
};

$(main);
