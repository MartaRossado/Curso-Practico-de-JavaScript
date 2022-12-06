
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

menuHamburguerIcon.addEventListener('click', toggleMobileMenu);

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


/* ------------ Funcionalidad desplegable para CARRITO (SHOPING CART)*/
const menuShoppingCartIcon = document.querySelector('.navbar-shopping-cart');
const productShoppingCart = document.querySelector('.product-cart-menu-shopping-cart');

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
console.log('JS la Shopping Cart Funcionando');

/* Listado de productos */

const cardsContainer = document.querySelector('.cards-container')

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Pantalla',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Computador',
    price: 620,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Pantalla',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Computador',
    price: 620,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
/*
<div class="product-card">
    <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">

    <div class="product-card-info">
        <div class="product-card-info-text">
            <p>$120,00</p>
            <p>Bike</p>
        </div>
        <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
        </figure>
    </div>
</div>
*/

function renderProducts(myProductsArray){
    for (product of myProductsArray){

        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-card-info');
    
        const productInfoDiv = document.createElement('div');
        productInfoDiv.classList.add('product-card-info-text');
        
        const productPrice = document.createElement('p');
        productPrice.innerHTML = '€' + product.price;
        productInfoDiv.appendChild(productPrice);
    
        const productName = document.createElement('p');
        productName.innerHTML = product.name;
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
        productInfoFigure.appendChild(productImgCart);
        productInfo.appendChild(productInfoFigure);
        
        productInfo.appendChild(productInfoDiv);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }

}

renderProducts(productList);