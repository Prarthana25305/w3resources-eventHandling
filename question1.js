//Create button add a click event listener to log a message when its clicked

const button = document.createElement('button');
button.textContent = 'Click me';

button.addEventListener('click', () => {
    console.log('Button was clicked'); 
});

document.body.appendChild(button);