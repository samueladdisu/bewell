import { navBar } from "./common.js";


navBar()
const exportProductContent = document.querySelector('.export-product-content');

const exportProduct = [
    {   
        id: 1,
        img: './img/sesame-seeds 1.png',
        title: 'Sesame seed',
        desc: 'lorem ipsum elite sdds'
    },
    {   
        id: 2,
        img: './img/coffee.png',
        title: 'coffee',
        desc: 'lorem ipsum elite sdds'
    },
    {   
        id: 3,
        img: './img/red-kidney-beans.png',
        title: 'Red Kidney Beans',
        desc: 'lorem ipsum elite sdds'
    },
    {   
        id: 4,
        img: './img/light.png',
        title: 'Light Speckled Kidney Bean',
        desc: 'lorem ipsum elite sdds'
    },
    {   
        id: 5,
        img: './img/pinto-beans.png',
        title: 'Pinto  Beans',
        desc: 'lorem ipsum elite sdds'
    },
    {   
        id: 6,
        img: './img/white-pea.png',
        title: 'White Pea Beans',
        desc: 'lorem ipsum elite sdds'
    }
    ,
    {   
        id: 7,
        img: './img/pigeon.png',
        title: 'Pigeon Bean',
        desc: 'lorem ipsum elite sdds'
    },
    {   
        id: 8,
        img: './img/soybeans.png',
        title: 'Soy Beans',
        desc: 'lorem ipsum elite sdds'
    },
    {   
        id: 9,
        img: './img/chickpeas.png',
        title: 'Chickpeas',
        desc: 'lorem ipsum elite sdds'
    }
]
let exportContent = exportProduct.map(item =>{
    if (item.id === 3 || item.id === 9){
        return `<div class="product-card col-10 col-offset-1 ">
        <div class="card-img">
            <img src="${item.img}" alt="">
        </div>
        <h2>${item.title}</h2>
        <p> ${item.desc}</p>
        <hr>
    </div>`
     }else if (item.id !== 6 ){

         return `<div class="product-card col-10 col-offset-1 ">
                    <div class="card-img">
                        <img src="${item.img}" alt="">
                    </div>
                    <h2>${item.title}</h2>
                    <p> ${item.desc}</p>
                    <hr>
                    <div class="line"></div>
                </div>`
     }else if (item.id === 6 ){
        return `<div class="product-card col-10 col-offset-1">
        <div class="card-img">
           <img src="${item.img}" alt="">
        </div>
        <h2>${item.title}</h2>
        <p> ${item.desc}</p>
     </div>`
     }
}).join('')
exportProductContent.innerHTML = exportContent