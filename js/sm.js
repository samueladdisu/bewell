import { navBar } from './common.js';

navBar()
const exportProductContent = document.querySelector('.export-product-content');

const exportProduct = [
  {
    id: 1,
    img: './img/sm/Amethyst.png',
    title: 'Amethyst',
  },
  {
    id: 2,
    img: './img/sm/CopperMetal.png',
    title: 'Copper Metal',
  },
  {
    id: 3,
    img: './img/sm/OpalStone.png',
    title: 'Opal Stone',
  },
  {
    id: 4,
    img: './img/sm/RubyStone.png',
    title: 'Ruby Stone',
  },
 
]
let exportContent = exportProduct.map(item => {
  if (item.id === 3 || item.id === 9) {
    return `<div class="product-card col-10 col-offset-1 ">
        <div class="card-img">
            <img src="${item.img}" alt="">
        </div>
        <h2>${item.title}</h2>
        
        <hr>
    </div>`
  } else if (item.id !== 6) {

    return `<div class="product-card col-10 col-offset-1 ">
                    <div class="card-img">
                        <img src="${item.img}" alt="">
                    </div>
                    <h2>${item.title}</h2>
                    
                    <hr>
                    <div class="line"></div>
                </div>`
  } else if (item.id === 6) {
    return `<div class="product-card col-10 col-offset-1">
        <div class="card-img">
           <img src="${item.img}" alt="">
        </div>
        <h2>${item.title}</h2>
        
     </div>`
  }
}).join('')
exportProductContent.innerHTML = exportContent