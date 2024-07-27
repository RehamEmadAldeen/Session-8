let productsDom = document.querySelector('.products');
let noProductsDom = document.querySelector('.noProducts');

 
function drawCartProductsUI(allProducts = []){
    if(JSON.parse(localStorage.getItem('productsInCart')).length === 0)
        noProductsDom.innerHTML = `<div><b class="noItem">There is no items!</b></div>`
    

    let products = JSON.parse(localStorage.getItem('productsInCart')) || allProducts ;
    let productsUI = products.map((item) => {
        return`
            <div class="product-item">
                <img src="${item.imageUrl}" class="product-item-img" alt="image">

                <div class="product-item-desc">
                    <h2>${item.title}</h2>
                    
                    <span class='author'><b> ${item.Author} </b></span>
                    <p id="price">${item.price}</p>
                    <span class="qty">Quantaty: ${item.Qty} </span>
                </div>

                <div class="product-item-actions">
                    <button class="Add-to-cart" title='Remove From Cart' onclick = "removeFromCart(${item.id})"><i class="fa-solid fa-trash"></i></button>
                </div>
            </div>
        `
        
    });

    productsDom.innerHTML = productsUI.join("");
}

drawCartProductsUI();

function removeFromCart(id){
    let productsInCart = localStorage.getItem('productsInCart')
    if(productsInCart){
        let items = JSON.parse(productsInCart);

        let filteredItems = items.filter((item) => item.id !== id)
        localStorage.setItem('productsInCart', JSON.stringify(filteredItems));
        drawCartProductsUI(filteredItems);
    }

};

