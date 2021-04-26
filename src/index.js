import cards from './menu.json'
import cardTpl from './templates/menu-crds.hbs';
import changeTemOnClick from './thems'
import './styles.css';




const cardsMenuEl = document.querySelector('.js-menu');
const cardsMarkup = cardTpl(cards);
cardsMenuEl.insertAdjacentHTML('beforeend', cardsMarkup);


