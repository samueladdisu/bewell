const navToggle = document.querySelector('.ham');
const linksContainer = document.querySelector('.links-container');

navToggle.addEventListener('click', () =>{
    linksContainer.classList.toggle('show-links');
})