let cartProductDivDom = document.querySelector('.carts-products div');
let badgeDom = document.querySelector('.badge');
let shoppingCartIcon = document.querySelector('.shoppingCart');
let cartProductMenu = document.querySelector('.carts-products');

shoppingCartIcon.addEventListener('click', openCartMenu);
// Check if there is items in localStorage
let addedItem = localStorage.getItem('productsInCart') 
? JSON.parse(localStorage.getItem('productsInCart')) 
: [] ; // Get what is in local storage and add to it
// put there is a problem , I don't know there is something or not -> so check first
// if there is a product in cart then convert it to object, else set empty array


if(addedItem){
  addedItem.map((item) => {
    cartProductDivDom.innerHTML += `<p>${item.title} ${item.Qty}</p>`;
  })
  badgeDom.style.display = "block";
  badgeDom.innerHTML += addedItem.length;
}



function openCartMenu(){
    if(cartProductDivDom.innerHTML != ""){
        if(cartProductMenu.style.display == 'block'){
            cartProductMenu.style.display = 'none';
        } else{
            cartProductMenu.style.display = 'block';
        }
    }
}

