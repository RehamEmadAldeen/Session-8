
// Define Products 

let productsDom = document.querySelector('.products');
let products = productsDB;



// Display Products
let drawProductsUI;
(drawProductsUI = function (products =[]){
    let productsUI = products.map((item) => {
        return`
            <div class="product-item" style= "border:${item.isMe === 'Y'?'1px solid #918d8d' : ""}">
                <img src="${item.imageUrl}" class="product-item-img" alt="image">

                <div class="product-item-desc">
                    <h2><a onclick = 'saveItemData(${item.id})'>${item.title}</a></h2>
                    
                    <span class='author'><b> ${item.Author} </b></span>
                    <p id="price">Price: ${item.price}</p>

                    ${item.isMe === 'Y' && "<button onclick='editProduct("+item.id+")'> Edit Product</button>" }
                </div>

                <div class="product-item-actions">
                    <button class="Add-to-cart" title="Add to your cart" onclick = "addedToCart(${item.id})"><i class="fa-solid fa-cart-shopping"></i></button>
                    <i class="favorite fa-regular fa-heart" style = " color: ${item.liked == true ? "red" : "" 
                    }" title="Add to your favorite" onclick = 'addedToFav (${item.id})'></i>
                </div>
            </div>
        `
       
    });

    productsDom.innerHTML = productsUI.join("");
})(JSON.parse(localStorage.getItem("products")) || products);

// localStorage.getItem('productsInCart') -> string and I want convert it to object using JSON.perse

//*************************************************************************************************************************************************************************** */

// Add To Cart

function addedToCart(id){
    if (localStorage.getItem('username')){

        let products = JSON.parse(localStorage.getItem('products') || products) // products -> the 4 items in data file
        let choosenItem = products.find((item) =>item.id === id );
        let isProductInCart = addedItem.some((i) => i.id === choosenItem.id)

        if(isProductInCart) {
            addedItem = addedItem.map((p) => {
                if (p.id === choosenItem.id) p.Qty +=1;
                return p;
            });
        } else{
            addedItem.push(choosenItem)
        }
        // UI
        cartProductDivDom.innerHTML = "";
        addedItem.forEach((item) => {
            cartProductDivDom.innerHTML += `<p>${item.title} ${item.Qty}</p>`; 

        })


        // Save Data
        localStorage.setItem('productsInCart',JSON.stringify(addedItem)); 

        // Add counter of items 
        let cartProductItems = document.querySelectorAll('.carts-products div p ');
        badgeDom.style.display = "block";
        badgeDom.innerHTML = cartProductItems.length;
    }   else{
        window.location = "login.html";
    }
}


function getuniqueArr(arr, filterType){
    let unique = arr
        .map((item) => item[filterType])
        .map((item ,i, finalArr) => finalArr.indexOf(item) === i && i ) // (item "[1,1,1]" ,i "Index ", finalArr) -> output [0,1,false]
        .filter(item => arr[item]) // return the items without false
        .map(item => arr[item])
    return unique

} // finalArr.indexOf(item) === i && i -> if yes return i




// Open Cart Menu
// shoppingCartIcon.addEventListener('click', openCartMenu);

// function openCartMenu(){
//     if(cartProductDivDom.innerHTML != ""){
//         if(cartProductMenu.style.display == 'block'){
//             cartProductMenu.style.display = 'none';
//         } else{
//             cartProductMenu.style.display = 'block';
//         }
//     }
// }

function saveItemData(id) {
    localStorage.setItem('productId',id);
    window.location = 'cartDetails.html';
};

// Search Function
let input = document.getElementById('search')

input.addEventListener('keyup',function(event){
    // if(event.keyCode === 13){
    search(event.target.value, JSON.parse(localStorage.getItem("products")));
    if(event.target.value.trim() === "")
        drawProductsUI(JSON.parse(localStorage.getItem('products')))

})
function search(title,myArray){
    let arr = myArray.filter ((item) => item.title.toLowerCase().indexOf(title.toLowerCase()) !== -1 ) // if yes return -> 1 , if No return -> -1
    drawProductsUI(arr);
}
// filter --> return the utem as array
// let array = myArray.filter ((item) => item.Author === Author )


// Add to Fav
let favoriteItems = localStorage.getItem('productsfav') 
? JSON.parse(localStorage.getItem('productsfav')) 
: [];


  
function addedToFav(id){
    if (localStorage.getItem('username')){
        let choosenItem = products.find((item) =>item.id === id );
        choosenItem.liked = true; //liked -> it's an attribute 
        favoriteItems = [...favoriteItems, choosenItem ];
        let uniqueProducts = getuniqueArr(favoriteItems,"id")
        localStorage.setItem('productsFavorite',JSON.stringify(uniqueProducts)); 
        products.map(item => {
            if(item.id === choosenItem.id){
                item.liked = true;
            }
        })
        localStorage.setItem('products',JSON.stringify(products));
        drawProductsUI(products)
    }   else{
        window.location = "login.html";
    }
}

// Filter Products By Price
  












// Edit Product
function editProduct(id){
    localStorage.setItem("editProduct", id)
    window.location = "editProduct.html"

}




// localStorage.setItem("Name","Reham"); /* to add new key and value */
// console.log(localStorage.getItem("Name"))/* display hte value */
// localStorage.removeItem("Name") /* remove key and value */
// localStorage.clear(); // remove all the data from Local Storage



//**************************

// JSON.parse() -> convert string to obj
// JSON.stringify() -> convert obj to string to save it in local storage

//**************************

//The JavaScript spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object.
// addedItem = [...addedItem, choosenItem ]; // addeditem is an object and the local storage accept only string
// let uniqueProducts = getuniqueArr(addedItem,"id")


