const navToggle = document.querySelector('.ham');
const linksContainer = document.querySelector('.links-container');

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

let productCard  = productItems.map(item =>{
  
     if (item.id !== 6){

         return `<div class="product-card col-10 col-offset-1">
         <div class="card-img">
            <img src="${item.img}" alt="">
         </div>
         <h2>${item.title}</h2>
         <p> ${item.desc}</p>
         <hr>
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

productContent.innerHTML = productCard;

const testimonial = document.querySelector('.testimonial-content');

const testimonialContent = [
    {
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, voluptates?",
        name: "Will Smith",
        img: './img/Ellipse 3.png'
    },
    {
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, voluptates?",
        name: "Joe Doe",
        img: './img/Ellipse 1.png'
    },
    {
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, voluptates?",
        name: "Jane Doe",
        img: './img/Ellipse 2.png'
    },
]
let testContent = testimonialContent.map(items =>{
    return `<div class="testimonial-card col-12">
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
})

testimonial.innerHTML = testContent;