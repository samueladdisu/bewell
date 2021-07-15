export function navBar(){
    const navToggle = document.querySelector('.ham');
    const linksContainer = document.querySelector('.links-container');
    const nav = document.querySelector('.nav');
    const logo = document.querySelector('.logo');
    const menu = document.querySelector('.ham')
    const links = linksContainer.querySelectorAll('.nav-links li a')
    navToggle.addEventListener('click', () =>{
        console.log(navToggle);
        linksContainer.classList.toggle('show-links');
    })
    window.addEventListener('scroll', ()=>{
        const navheight = nav.getBoundingClientRect().height;
        const scorllheight = window.pageYOffset;
        if(scorllheight > navheight)
        {
            menu.classList.add('black')
            links.forEach(item =>{
                item.classList.add('black')
            })
            logo.innerHTML = `<img src="./img/white_logo.svg" alt="Battery World Logo">`
            nav.classList.add('fixed-nav')
        }else{
            logo.innerHTML = `<img src="./img/Battery World.svg" alt="Battery World Logo">`
            nav.classList.remove('fixed-nav')
            menu.classList.remove('black')
            links.forEach(item =>{
                item.classList.remove('black')
            })
        }
    })
    
   
}

