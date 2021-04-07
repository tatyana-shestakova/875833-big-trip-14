import {createMenuTemplate} from './view/menu.js';
import {createInformationTemplate} from './view/information.js';
import {createCostTemplate} from './view/cost.js';
import {createFilterTemplate} from './view/filters.js';
import {createSortingTemplate} from './view/sorting.js';
import {createFormTemplate} from './view/create-form.js';
import {createEditingTemplate} from './view/edit-point.js';
import {createPointTemplate} from './view/point.js';

const COUNT = 3;

const renderComponent = (container, template, space) => {
  container.insertAdjacentHTML(space, template);
};

const menuElement = document.querySelector('.trip-controls__navigation');

renderComponent(menuElement, createMenuTemplate(), 'beforeend');


const headerMainElement = document.querySelector('.trip-main');

renderComponent(headerMainElement, createInformationTemplate(), 'afterbegin');


const infomationElement = document.querySelector('.trip-info');

renderComponent(infomationElement, createCostTemplate(), 'beforeend');


const filtersElement = document.querySelector('.trip-controls__filters');

renderComponent(filtersElement, createFilterTemplate(), 'beforeend');


const eventElement = document.querySelector('.trip-events');

renderComponent(eventElement, createSortingTemplate(), 'beforeend');
renderComponent(eventElement, createFormTemplate(), 'beforeend');


const formElement = document.querySelector('.trip-events__list');

renderComponent(formElement, createEditingTemplate(), 'beforeend');

for(let i = 0; i < COUNT; i++) {
  renderComponent(formElement, createPointTemplate(), 'beforeend');
}
