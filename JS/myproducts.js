let productsDom = document.querySelector('.products');
let noProductsDom = document.querySelector('.noProducts');

let drawProductsUI;
(drawProductsUI = function (products =[]){
    let myProducts = products.filter((item) => item.isMe === "Y")
    if(myProducts.length != 0){
        let productsUI = myProducts.map((item) => {
            return`
                <div class="product-item" style= "border:${item.isMe === 'Y'?'1px solid #918d8d' : ""}">
                    <img src="${item.imageUrl}" class="product-item-img" alt="image">
    
                    <div class="product-item-desc">
                        <h2><a onclick = 'saveItemData(${item.id})'>${item.title}</a></h2>
                        
                        <span class='author'><b> ${item.Author} </b></span>
                        <p id="price">Price: ${item.price}</p>
    
                        <button  class ="edit-product" onclick='editProduct(${item.id})'> Edit Product</button><br>
                        <button  class ="edit-product" onclick='deleteProduct(${item.id})'> Delete Product</button>
                    </div>
                    
                </div>
            `
           
        });
    
        productsDom.innerHTML = productsUI.join("");
    } else{
        noProductsDom.innerHTML ="No products! "
    }

})(JSON.parse(localStorage.getItem("products")) || productsDB );

// Edit Product
function editProduct(id){
    localStorage.setItem("editProduct", id)
    window.location = "editProduct.html"

}


// Edit Product
function deleteProduct(id){
    let products= (JSON.parse(localStorage.getItem("products")) || productsDB);
    let myProducts = products.filter((item) => item.isMe === "Y")
    let filtered =  myProducts.filter((i) => i.id !== id )
    drawProductsUI(filtered)

    let clickedItem =  myProducts.find((i) => i.id === id )
    products =  products.filter((i) => i.id !== clickedItem.id )
    localStorage.setItem("products",JSON.stringify(products))


}