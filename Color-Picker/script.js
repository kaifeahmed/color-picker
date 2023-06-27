const colors = ['Green', 'Red', 'rgba(133,122,200)', '#F15025'];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');
const spanColor = document.querySelectorAll('span');

btn.addEventListener('click', () => {
    // get a random number between 0 -3
    const randomNumber = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
    
});