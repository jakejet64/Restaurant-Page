function loadContact(){
    const content = document.querySelector('.content');
    content.textContent = '';

    const tel = document.createElement('div');
    const fax = document.createElement('div');
    
    tel.textContent = 'Phone #';
    fax.textContent = 'Fax #';
    
    content.appendChild(tel);
    content.appendChild(fax);
}

export default loadContact;