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


const headerMainElement = document.querySelector('.trip-main');

const menuElement = headerMainElement.querySelector('.trip-controls__navigation');

renderComponent(menuElement, createMenuTemplate(), 'beforeend');

renderComponent(headerMainElement, createInformationTemplate(), 'afterbegin');


const infomationElement = headerMainElement.querySelector('.trip-info');

renderComponent(infomationElement, createCostTemplate(), 'beforeend');


const filtersElement = headerMainElement.querySelector('.trip-controls__filters');

renderComponent(filtersElement, createFilterTemplate(), 'beforeend');


const eventElement = document.querySelector('.trip-events');

renderComponent(eventElement, createSortingTemplate(), 'beforeend');
renderComponent(eventElement, createFormTemplate(), 'beforeend');


const formElement = eventElement.querySelector('.trip-events__list');

renderComponent(formElement, createEditingTemplate(), 'beforeend');

for(let i = 0; i < COUNT; i++) {
  renderComponent(formElement, createPointTemplate(), 'beforeend');
}
