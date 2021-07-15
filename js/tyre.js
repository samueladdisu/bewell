import { navBar } from './common.js';

navBar()
const tyreProductContent = document.querySelector('.tyre-product-content');

function datas(){
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
            img: './img/heavy-duty-truck-tyres-500x500-removebg-preview.png',
            title: 'Hancock',
            desc: 'lorem ipsum elite sdds',
            category: 'truck'
        },
        {   
            id: 2,
            img: './img/tyre/car.png',
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
            img: './img/tyre/car.png',
            title: 'apollo',
            desc: 'lorem ipsum elite sdds',
            category: 'heavy'
        },
        {   
            id: 3,
            img: './img/heavy-duty-truck-tyres-500x500-removebg-preview.png',
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
            <hr>
        </div>`
         }else if (item.id !== 6){
    
             return `<div class="tyre-content ${item.category} product-card col-10 col-offset-1" id="${item.category}">
                        <div class="card-img">
                            <img src="${item.img}" alt="">
                        </div>
                        <h2>${item.title}</h2>
                        <p> ${item.desc}</p>
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
         </div>`
         }
    }).join('')
   
    return innerContent;
}