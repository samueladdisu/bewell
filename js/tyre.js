import { navBar } from './common.js';

navBar()
const tyreProductContent = document.querySelector('.tyre-product-content');

function datas(){
    const carProduct = [
        {   
            id: 1,
            img: './img/tyre/car/car1.png',
            title: 'Apollo',
            desc: '195R15 QUANTOM',
            category: 'car'
        },
        {   
            id: 2,
            img: './img/tyre/car/car2.png',
            title: 'Bridgestone',
            desc: '205R16 D694',
            category: 'car'
        },
        {   
            id: 3,
            img: './img/tyre/car/car3.png',
            title: 'Bridgestone',
            desc: '750R16 VSJ',
            category: 'car'
        },
        {   
            id: 4,
            img: './img/tyre/car/car4.png',
            title: 'Bridgestone',
            desc: '750R16 M755',
            category: 'car'
        },
        {   
            id: 5,
            img: './img/tyre/car/car5.png',
            title: 'MRF',
            desc: '750 16 M77',
            category: 'car'
        },
        {   
            id: 6,
            img: './img/tyre/car/car6.png',
            title: 'Goodyear',
            desc: '750 16 M77',
            category: 'car'
        }
    ]
    
    const truckProduct = [
        {   
            id: 1,
            img: './img/tyre/truck/truck1.png',
            title: 'Hankook',
            desc: '',
            category: 'truck'
        },
        {   
            id: 2,
            img: './img/tyre/truck/truck2.png',
            title: 'Apollo',
            desc: '',
            category: 'truck'
        },
        {   
            id: 3,
            img: './img/tyre/truck/truck3.png',
            title: 'Brigestone',
            desc: '',
            category: 'truck'
        },
        {   
            id: 4,
            img: './img/tyre/truck/truck4.png',
            title: 'Goodyear',
            desc: '',
            category: 'truck'
        },
        {   
            id: 5,
            img: './img/tyre/truck/truck5.png',
            title: 'Goodyear',
            desc: '',
            category: 'truck'
        },
        {   
            id: 6,
            img: './img/tyre/truck/truck6.png',
            title: 'Goodyear',
            desc: '',
            category: 'truck'
        }
    ]
    const heavyProduct = [
        {   
            id: 1,
            img: './img/tyre/heavy/heavy1.png',
            title: 'Triangle',
            desc: '17.5-25 TL612',
            category: 'heavy'
        },
        {   
            id: 2,
            img: './img/tyre/heavy/heavy2.png',
            title: 'Triangle',
            desc: '1400-24 TL612',
            category: 'heavy'
        },
        {   
            id: 3,
            img: './img/tyre/heavy/heavy3.png',
            title: 'Triangle',
            desc: '1200R20_691',
            category: 'heavy'
        },
        {   
            id: 4,
            img: './img/tyre/heavy/heavy4.png',
            title: 'Triangle',
            desc: '23.5-25 TL612',
            category: 'heavy'
        },
        {   
            id: 5,
            img: './img/tyre/heavy/heavy5.png',
            title: 'Goodyear',
            desc: '',
            category: 'heavy'
        },
        {   
            id: 6,
            img: './img/tyre/heavy/heavy6.png',
            title: 'Aeolus',
            desc: '18.4-30 Forklift',
            category: 'heavy'
        }
    ]
    
    
    const allArrays = [...carProduct,...truckProduct,...heavyProduct]
    
    tyreProductContent.innerHTML = mapContent(...carProduct)    
    

    const btnContainer = document.querySelector('.btn-container');
    const btns = document.querySelectorAll('.tab');
    // const element = document.querySelectorAll('.product-card')

    btnContainer.addEventListener('click',(e) =>{
        let  id = e.target.dataset.id
        if(id){
            btns.forEach(btn=>{
                btn.classList.remove('active')
            })
            e.target.classList.add('active')
           
           allArrays.map(items =>{
               if(items.category === id ){
                   if(id === 'car'){
                    tyreProductContent.innerHTML = mapContent(...carProduct)
                   }else if(id === 'truck'){
                    tyreProductContent.innerHTML = mapContent(...truckProduct)
                   }else if(id === 'heavy'){
                    tyreProductContent.innerHTML = mapContent(...heavyProduct)
                   }
               }
           })
               
            

        }
    })
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
            <a class="btn btn-rounded-primary"> Contact Us For Details</a>
            <hr>
        </div>`
         }else if (item.id !== 6){
    
             return `<div class="tyre-content ${item.category} product-card col-10 col-offset-1" id="${item.category}">
                        <div class="card-img">
                            <img src="${item.img}" alt="">
                        </div>
                        <h2>${item.title}</h2>
                        <p> ${item.desc}</p>
                        <a class="btn btn-rounded-primary"> Contact Us For Details</a>
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
            <a class="btn btn-rounded-primary"> Contact Us For Details</a>
         </div>`
         }
    }).join('')
   
    return innerContent;
}