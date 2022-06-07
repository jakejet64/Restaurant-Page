import './style.css';
import setup from './setup.js';
import loadHome from './loadHome.js';
import loadMenu from './loadMenu.js';
import loadContact from './loadContact.js';

init();

function addButtons(){
    const home = document.querySelector('.home');
    const menu = document.querySelector('.menu');
    const contact = document.querySelector('.contact');

    home.addEventListener('click', loadHome);
    menu.addEventListener('click', loadMenu);
    contact.addEventListener('click', loadContact);
    
}

function init(){
    setup();
    addButtons();
    loadHome();
}