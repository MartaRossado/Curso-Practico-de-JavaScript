
/* ------------ Funcionalidad desplegable para el menú del email */

const menuEmail = document.querySelector('.navbar-email');

const desktopMenu = document.querySelector('.desktop-menu');



menuEmail.addEventListener('click', toggleDesktopMenu);



function toggleDesktopMenu (){

    console.log('click');

    desktopMenu.classList.toggle('inactive');
}


console.log('JS Menu DesktopFuncionando');


/* ------------ Funcionalidad desplegable para el menú MOBILE*/
const menuHamburguerIcon = document.querySelector('.hamburguer-menu');
const mobileMenu = document.querySelector('.mobile-menu');

menuHamburguerIcon.addEventListener('click', toggleMobileMenu);£

function toggleMobileMenu (){
    // console.log('click');
    // mobileMenu.classList.toggle('inactive');


    /* creamos variables que indiquen el menú mobile cerrado y otra para menú carrito cerrado*/
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isProductShoppingCartClosed = productShoppingCart.classList.contains('inactive');

        if (isProductShoppingCartClosed){
            mobileMenu.classList.toggle('inactive');
        }else{
            productShoppingCart.classList.add('inactive');
            mobileMenu.classList.toggle('inactive');
        }
}

console.log('JS MenúMobile Funcionando');


/* ------------ Funcionalidad desplegable para CARRITO (SHOPING CART) y que no colicione con el menú Mobile*/
const menuShoppingCartIcon = document.querySelector('.navbar-shopping-cart');
const productShoppingCart = document.querySelector('.product-detail-menu-shopping-cart');

menuShoppingCartIcon.addEventListener('click', toggleShoppingCart);

function toggleShoppingCart (){


    /* creamos variables que indiquen el menú mobile cerrado y otra para menú carrito cerrado*/
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isProductShoppingCartClosed = productShoppingCart.classList.contains('inactive');

        if (isMobileMenuClosed){

            productShoppingCart.classList.toggle('inactive');

        }else{

            mobileMenu.classList.add('inactive');
            
            productShoppingCart.classList.toggle('inactive');
        }

}
