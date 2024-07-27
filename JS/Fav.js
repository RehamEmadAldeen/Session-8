let productsDom = document.querySelector('.products');
let noProductsDom = document.querySelector('.noProducts');
 
function drawFavProductsUI(allProducts = []){
    if(!localStorage.getItem('productsFavorite') || JSON.parse(localStorage.getItem('productsFavorite')).length === 0)

    // if(JSON.parse(localStorage.getItem('productsFavorite')).length === 0)
        noProductsDom.innerHTML = `<div><b class="noItem">There is no items!</b></div>`;
    

    let products = JSON.parse(localStorage.getItem('productsFavorite')) || allProducts ;
    let productsUI = products.map((item) => {
        return`
            <div class="product-item">
                <img src="${item.imageUrl}" class="product-item-img" alt="image">

                <div class="product-item-desc">
                    <h2>${item.title}</h2>
                    <p>${item.decription}</p>
                    <span class='author'><b> ${item.Author} </b></span>
                    <p id="price">${item.price}</p>
                    <span class="qty">Quantaty: ${item.Qty} </span>
                </div>

                <div class="product-item-actions">
                    <button class="Add-to-cart" title='Remove From Favorite' onclick= "removeFromCart(${item.id})"><i class="fa-solid fa-trash"></i></button>
                </div>
            </div>
        `
        
    });

    productsDom.innerHTML = productsUI.join("");
}

drawFavProductsUI();

function removeFromCart(id){
    let productsFavorite = localStorage.getItem('productsFavorite')
    if(productsFavorite){
        let items = JSON.parse(productsFavorite);

        let filteredItems = items.filter((item) => item.id !== id)
        localStorage.setItem('productsFavorite', JSON.stringify(filteredItems));
        drawFavProductsUI(filteredItems);
    }

};

