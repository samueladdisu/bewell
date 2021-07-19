import { navBar } from "./common.js";

const productContent = document.querySelector('.product-content')
navBar()

const productItems = [
    {   
        id: 1,
        img: './img/battery/GS.png',
        title: 'GS',
        desc: 'GS 70 AM'
    },
    {
        id: 2,
        img: './img/tyre/car/car6.png',
        title: 'Goodyear',
        desc: '750 16 M77',
    },
    {
        id: 3,
        img: './img/tyre/car/car5.png',
        title: 'MRF',
        desc: '750 16 M77'
    },
    {
        id: 4,
        img: './img/battery/X-Pro_100AM.png',
        title: 'E-XPRO',
        desc: '100 AM'
    },
    {
        id: 5,
        img: './img/tyre/truck/truck5.png',
        title: 'Goodyear',
        desc: '',
    },
    {
        id: 6,
        img: './img/tyre/heavy/heavy1.png',
        title: 'Triangle',
        desc: '17.5-25 TL612',
    }
]
console.log(productContent);
let productCard  = productItems.map(item =>{
    if (item.id === 3){
        return `<div class="product-card col-10 col-offset-1 ">
        <div class="card-img">
            <img src="${item.img}" alt="">
        </div>
        <h2>${item.title}</h2>
        <p> ${item.desc}</p>
        <a href="./contact.html" class="btn btn-rounded-primary"> Contact Us For Details</a>
        <hr>
    </div>`
     }else if (item.id !== 6){

         return `<div class="product-card col-10 col-offset-1 ">
                    <div class="card-img">
                        <img src="${item.img}" alt="">
                    </div>
                    <h2>${item.title}</h2>
                    <p> ${item.desc}</p>
                    <a href="./contact.html" class="btn btn-rounded-primary"> Contact Us For Details</a>
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
        <a href="./contact.html" class="btn btn-rounded-primary"> Contact Us For Details</a>
     </div>`
     }
    
}).join('')

productContent.innerHTML = productCard

const testimonial = document.querySelector('.testimonial-content');

const testimonialContent = [
    {
        id: 1,
        class: 'first',
        text: "We had a great experince working with the Battery World team, We highly recommed their services.",
        name: "John Franklin",
        img: './img/Ellipse 3.png'
    },
    {
        id: 2,
        class: 'second',
        text: "Very happy with the services provided, we'll definitley work with Battery World again!",
        name: "Valerie Volchenko",
        img: './img/Ellipse 2.png'
    },
    {
        id: 3,
        class: 'third',
        text: "Battery World had the products we were looking for and delivered on time.",
        name: "Edward Sanchez",
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

