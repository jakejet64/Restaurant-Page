function setup(){
    const tabs = document.createElement('div');
    tabs.classList.add('tabs');
    document.body.appendChild(tabs);

    const tab1 = document.createElement('div');
    const tab2 = document.createElement('div');
    const tab3 = document.createElement('div');

    tab1.classList.add('home');
    tab2.classList.add('menu');
    tab3.classList.add('contact');    

    tab1.textContent = 'Home';
    tab2.textContent = 'Menu';
    tab3.textContent = 'Contact';
    
    tabs.appendChild(tab1);
    tabs.appendChild(tab2);
    tabs.appendChild(tab3);

    const content = document.createElement('div');
    content.classList.add('content');
    document.body.appendChild(content);
}

export default setup;