const navToggle = document.querySelector('.ham');
const linksContainer = document.querySelector('.links-container');
const nav = document.querySelector('.nav');
const logo = document.querySelector('.logo');
const menu = document.querySelector('.ham')
const links = linksContainer.querySelectorAll('.nav-links li a')
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
navToggle.addEventListener('click', () =>{
    linksContainer.classList.toggle('show-links');
})

const productItems = [
    {   
        id: 1,
        img: './img/heavy-duty-truck-tyres-500x500-removebg-preview.png',
        title: 'Hancock',
        desc: 'lorem ipsum elite sdds'
    },
    {
        id: 2,
        img: './img/platinium_battery-removebg-preview.png',
        title: 'Platinium',
        desc: 'lorem ipsum elite sdds'
    },
    {
        id: 3,
        img: './img/car_tyre-removebg-preview.png',
        title: 'Good year',
        desc: 'lorem ipsum elite sdds'
    },
    {
        id: 4,
        img: './img/truck_tyre2-removebg-preview.png',
        title: 'Bridgestone',
        desc: 'lorem ipsum elite sdds'
    },
    {
        id: 5,
        img: './img/global2-removebg-preview.png',
        title: 'Global',
        desc: 'lorem ipsum elite sdds'
    },
    {
        id: 6,
        img: './img/hankook-removebg-preview.png',
        title: 'Apollo',
        desc: 'lorem ipsum elite sdds'
    }
]
const productContent = document.querySelector('.product-content')
const tyreContent = document.querySelector('.tyre-product-content')
let productCard  = productItems.map(item =>{
    if (item.id === 3){
        return `<div class="product-card col-10 col-offset-1 ">
        <div class="card-img">
            <img src="${item.img}" alt="">
        </div>
        <h2>${item.title}</h2>
        <p> ${item.desc}</p>
        <hr>
    </div>`
     }else if (item.id !== 6){

         return `<div class="product-card col-10 col-offset-1 ">
                    <div class="card-img">
                        <img src="${item.img}" alt="">
                    </div>
                    <h2>${item.title}</h2>
                    <p> ${item.desc}</p>
                    <hr>
                    <div class="line"></div>
                </div>`
     }else if (item.id === 6){
        return `<div class="product-card col-10 col-offset-1">
        <div class="card-img">
           <img src="${item.img}" alt="">
        </div>
        <h2>${item.title}</h2>
        <p> ${item.desc}</p>
     </div>`
     }
    
})

const carProduct = [
    {   
        id: 1,
        img: './img/tyre/car.png',
        title: 'Hancock',
        desc: 'lorem ipsum elite sdds',
        category: 'car'
    },
    {   
        id: 2,
        img: './img/heavy-duty-truck-tyres-500x500-removebg-preview.png',
        title: 'apollo',
        desc: 'lorem ipsum elite sdds',
        category: 'car'
    },
    {   
        id: 3,
        img: './img/tyre/car.png',
        title: 'Brigestone',
        desc: 'lorem ipsum elite sdds',
        category: 'car'
    },
    {   
        id: 4,
        img: './img/tyre/car.png',
        title: 'good year',
        desc: 'lorem ipsum elite sdds',
        category: 'car'
    },
    {   
        id: 5,
        img: './img/tyre/car.png',
        title: 'good year',
        desc: 'lorem ipsum elite sdds',
        category: 'car'
    },
    {   
        id: 6,
        img: './img/tyre/car.png',
        title: 'good year',
        desc: 'lorem ipsum elite sdds',
        category: 'car'
    }
]

const truckProduct = [
    {   
        id: 1,
        img: './img/tyre/car.png',
        title: 'Hancock',
        desc: 'lorem ipsum elite sdds',
        category: 'truck'
    },
    {   
        id: 2,
        img: './img/heavy-duty-truck-tyres-500x500-removebg-preview.png',
        title: 'apollo',
        desc: 'lorem ipsum elite sdds',
        category: 'truck'
    },
    {   
        id: 3,
        img: './img/tyre/car.png',
        title: 'Brigestone',
        desc: 'lorem ipsum elite sdds',
        category: 'truck'
    },
    {   
        id: 4,
        img: './img/tyre/car.png',
        title: 'good year',
        desc: 'lorem ipsum elite sdds',
        category: 'truck'
    },
    {   
        id: 5,
        img: './img/tyre/car.png',
        title: 'good year',
        desc: 'lorem ipsum elite sdds',
        category: 'truck'
    },
    {   
        id: 6,
        img: './img/tyre/car.png',
        title: 'good year',
        desc: 'lorem ipsum elite sdds',
        category: 'truck'
    }
]
const heavyProduct = [
    {   
        id: 1,
        img: './img/tyre/car.png',
        title: 'Hancock',
        desc: 'lorem ipsum elite sdds',
        category: 'heavy'
    },
    {   
        id: 2,
        img: './img/heavy-duty-truck-tyres-500x500-removebg-preview.png',
        title: 'apollo',
        desc: 'lorem ipsum elite sdds',
        category: 'heavy'
    },
    {   
        id: 3,
        img: './img/tyre/car.png',
        title: 'Brigestone',
        desc: 'lorem ipsum elite sdds',
        category: 'heavy'
    },
    {   
        id: 4,
        img: './img/tyre/car.png',
        title: 'good year',
        desc: 'lorem ipsum elite sdds',
        category: 'heavy'
    },
    {   
        id: 5,
        img: './img/tyre/car.png',
        title: 'good year',
        desc: 'lorem ipsum elite sdds',
        category: 'heavy'
    },
    {   
        id: 6,
        img: './img/tyre/car.png',
        title: 'good year',
        desc: 'lorem ipsum elite sdds',
        category: 'heavy'
    }
]
let tyreProductContent = carProduct.map(item =>{
    if (item.id === 3){
        return `<div class="tyre-card col-10 col-offset-1 ">
        <div class="card-img">
            <img src="${item.img}" alt="">
        </div>
        <h2>${item.title}</h2>
        <p> ${item.desc}</p>
        <hr>
    </div>`
     }else if (item.id !== 6){

         return `<div class="tyre-card col-10 col-offset-1 ">
                    <div class="card-img">
                        <img src="${item.img}" alt="">
                    </div>
                    <h2>${item.title}</h2>
                    <p> ${item.desc}</p>
                    <hr>
                    <div class="line"></div>
                </div>`
     }else if (item.id === 6){
        return `<div class="tyre-card col-10 col-offset-1">
        <div class="card-img">
           <img src="${item.img}" alt="">
        </div>
        <h2>${item.title}</h2>
        <p> ${item.desc}</p>
     </div>`
     }
}).join('')

tyreContent.innerHTML = tyreProductContent
productContent.innerHTML = productCard.join('');

const testimonial = document.querySelector('.testimonial-content');

const testimonialContent = [
    {
        id: 1,
        class: 'first',
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, voluptates?",
        name: "Will Smith",
        img: './img/Ellipse 3.png'
    },
    {
        id: 2,
        class: 'second',
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, voluptates?",
        name: "Jane Doe",
        img: './img/Ellipse 2.png'
    },
    {
        id: 3,
        class: 'third',
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, voluptates?",
        name: "Joe Doe",
        img: './img/Ellipse 1.png'
    }
    
]
let testContent = testimonialContent.map(items =>{
    if(items.id === 1){
        return `<div class="testimonial-card ${items.class} col-md-5 col-xl-5">
        <img src="./img/quote.svg" alt="" class="qoute">
        <div class="test-card-content">
           <div class="test-text">
              <p>${items.text}</p>
              <h3 class="text-name">${items.name}</h3>
           </div>
           <div class="test-image">
              <img src="${items.img}" alt="">
           </div>
        </div>
     </div>
     <div id="divider" class="col-xl-1"> <img src="./img/divider.svg"> </div>
     `
    }else if(items.class === 'third'){
        return `<div class="testimonial-card ${items.class} col-md-5 col-md-offset-4 col-xl-offset-3">
        <img src="./img/quote.svg" alt="" class="qoute">
        <div class="test-card-content">
           <div class="test-text">
              <p>${items.text}</p>
              <h3 class="text-name">${items.name}</h3>
           </div>
           <div class="test-image">
              <img src="${items.img}" alt="">
           </div>
        </div>
     </div>`
    }else{
        return `<div class="testimonial-card ${items.class} col-md-5 col-md-offset-1">
        <img src="./img/quote.svg" alt="" class="qoute">
        <div class="test-card-content">
           <div class="test-text">
              <p>${items.text}</p>
              <h3 class="text-name">${items.name}</h3>
           </div>
           <div class="test-image">
              <img src="${items.img}" alt="">
           </div>
        </div>
     </div>`
    }
})

testimonial.innerHTML = testContent.join('');