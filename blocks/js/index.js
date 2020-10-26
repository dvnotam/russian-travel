
window.addEventListener("DOMContentLoaded", function () {  // DOMContentLoaded 

    let nav = document.querySelector('#navigation'); // alt + SHIFT дублировать строку
    let mobileButton = document.querySelector('.nav__mobile');
    
    
    // nav.classList.remove('.nav__haiden');

    
        mobileButton.addEventListener('click', ()=> {
            nav.classList.remove('.nav__haiden');
            nav.classList.add('.nav__show');
        })
    

    



// function foo () {}
// const mobileShow = ()=>{}

    console.log(nav);
})