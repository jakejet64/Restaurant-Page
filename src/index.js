import './style.css';

const test = document.createElement('div');
test.classList.add('content');
test.textContent = 'Hello!';

document.body.appendChild(test);