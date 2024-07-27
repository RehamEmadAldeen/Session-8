let products = JSON.parse(localStorage.getItem("products"));
let productId = localStorage.getItem('productId')
let itemDom = document.querySelector('.item-details')
let productDetails = products.find(item => item.id == productId)


itemDom.innerHTML = `
<img src="${productDetails.imageUrl}" alt="">
<h2>${productDetails.title}</h2>
<span class='author'><b> ${productDetails.Author} </b></span><br>
<p>${productDetails.decription}</p>
<span> Price : ${productDetails.price}</span> <br>
<span> Quantity : ${productDetails.Qty}</span><br>
<button onclick = "editProduct(${productId})"> Edit Product </button> 
`

function editProduct(id){
    localStorage.setItem("editProduct", id)
    window.location = "editProduct.html"

}


