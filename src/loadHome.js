function loadHome(){
    const content = document.querySelector('.content');
    content.textContent = '';

    const title = document.createElement('div');
    const desc = document.createElement('div');
    
    title.textContent = 'Taco Bell';
    desc.textContent = '"Taco Taco"';
    
    content.appendChild(title);
    content.appendChild(desc);
}

export default loadHome;