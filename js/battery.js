import { navBar } from './common.js';

navBar()
const tyreProductContent = document.querySelector('.tyre-product-content');

function datas(){
    const carProduct = [
        {   
            id: 1,
            img: './img/battery/GS.png',
            title: 'GS',
            desc: 'GS 70 AM',
            category: 'car'
        },
        {   
            id: 2,
            img: './img/battery/quantum-1-56a0-removebg-preview.png',
            title: 'Quantom',
            desc: 'Quantom 150 AM',
            category: 'car'
        },
        {   
            id: 3,
            img: './img/battery/X-Pro_100AM.png',
            title: 'E-XPRO',
            desc: '100 AM',
            category: 'car'
        },
        {   
            id: 4,
            img: './img/battery/quantum-1-56a0-removebg-preview.png',
            title: 'Quantom',
            desc: 'Quantom 150 AM',
            category: 'car'
        },
        {   
            id: 5,
            img: './img/battery/GS.png',
            title: 'GS',
            desc: 'GS 70 AM',
            category: 'car'
        },
        {   
            id: 6,
            img: './img/battery/X-Pro_100AM.png',
            title: 'E-XPRO',
            desc: '100 AM',
            category: 'car'
        }
    ]
    
  
    
    
   
    
    tyreProductContent.innerHTML = mapContent(...carProduct)    
    


    // const element = document.querySelectorAll('.product-card')

    
}

datas()



// tabs




function mapContent(...args){
 
    let innerContent = args.map(item =>{
        if (item.id === 3){
            return `<div class="tyre-content ${item.category} product-card col-10 col-offset-1 ">
            <div class="card-img">
                <img src="${item.img}" alt="">
            </div>
            <h2>${item.title}</h2>
            <p> ${item.desc}</p>
            <a href="./contact.html" class="btn btn-rounded-primary"> Contact Us For Details</a>
            <hr>
        </div>`
         }else if (item.id !== 6){
    
             return `<div class="tyre-content ${item.category} product-card col-10 col-offset-1" id="${item.category}">
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
            return `<div class="tyre-content ${item.category} product-card col-10 col-offset-1" id="${item.category}">
            <div class="card-img">
               <img src="${item.img}" alt="">
            </div>
            <h2>${item.title}</h2>
            <p> ${item.desc}</p>
            <a href="./contact.html" class="btn btn-rounded-primary"> Contact Us For Details</a>
         </div>`
         }
    }).join('')
   
    return innerContent;
}