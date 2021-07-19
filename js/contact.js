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
            logo.innerHTML = `<img src="./img/white_logo.svg" alt="Battery World Logo">`
            nav.classList.remove('fixed-nav')
            menu.classList.remove('black')
            links.forEach(item =>{
                item.classList.remove('black')
            })
        }
    })
// let form = document.forms["myform"]
// form.addEventListener('submit', event => {
//     event.preventDefault()
//     let fname = form['fname'],
//         email = form['email'],
//         subject = form['subject'],
//         msg = form['msg'];

//         if(fname.value == '' || email.value == '' || subject.value == "" || msg.value == ""){
//             alert('Fields should not be empty')
//         }else{
//             if(allLetter(fname)){
//                 if(ValidateEmail(email)){
//                     console.log("submited");
//                     form.submit()
//                 }
             
//             }
//         }
        
       
     
// })

   

function allLetter(uname) {
    var letters = /^[A-Za-z]+$/;
    if (uname.value.match(letters)) {
        return true;
    }
    else {
        alert('Username must have alphabet characters only');
        uname.focus();
        return false;
    }
}

function ValidateEmail(uemail) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (uemail.value.match(mailformat)) {
        return true;
    }
    else {
        alert("You have entered an invalid email address!");
        uemail.focus();
        return false;
    }
}

