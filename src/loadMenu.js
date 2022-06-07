function loadMenu(){
    const content = document.querySelector('.content');
    content.textContent = '';

    const item1 = document.createElement('div');
    const item2 = document.createElement('div');
    
    item1.textContent = 'Taco';
    item2.textContent = 'Burrito';
    
    content.appendChild(item1);
    content.appendChild(item2);
}

export default loadMenu;