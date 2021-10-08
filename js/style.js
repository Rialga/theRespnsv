const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

$(window).on('scroll',function(){
    if(screen.width > 933   ){
        if($(window).scrollTop()){
            $('header').addClass('lock')
        }
        else{
            $('header').removeClass('lock')
        }
    }
})


