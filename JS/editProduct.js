let products = JSON.parse(localStorage.getItem("products")) || productsDB;
let productId = JSON.parse(localStorage.getItem("editProduct"));
let getProduct = products.find(i => i.id === productId)



// variables
let productName = document.getElementById("Product-Name")
let productDesc = document.getElementById("Product-Desc")
let productAuthor = document.getElementById("Product-AuthorName")
let productPrice = document.getElementById("Product-Price")
let UpdateForm = document.getElementById("update-form")
let inputFile = document.getElementById("upload-image-file")
let productImage;

productName.value = getProduct.title
productDesc.value = getProduct.decription
productAuthor.value = getProduct.Author
productPrice.value = getProduct.price
productImage = getProduct.imageUrl


// // Events
UpdateForm.addEventListener("submit", updateProductFun);
inputFile.addEventListener("change", uploadImage);


// Functions
function updateProductFun(event){
    event.preventDefault();
    let allProducts = JSON.parse(localStorage.getItem("products")) || productsDB;
    let nameValue = productName.value;
    let descValue = productDesc.value;
    let authorValue = productAuthor.value;
    let priceValue = productPrice.value;


   getProduct.title      = productName.value 
   getProduct.decription = productDesc.value 
   getProduct.Author     = productAuthor.value
   getProduct.price      = productPrice.value  
   getProduct.imageUrl   = productImage 

   localStorage.setItem("products", JSON.stringify(products))

   setTimeout(() => {
    window.location = "index.html"
   })
}


function uploadImage(){
    let file = this.files[0];
    
    let types = ["image/jpeg" ,"image/png","image/webp"]

    if( types.indexOf(file.type) == -1 ){
        alert("Type Not Supported")
        return;
    }
    if (file.size > 2 * 1024 * 1024){
        alert("Image not Eced 2 MG")
        return;
    }
    getImageBase64(file)
    // productImage = URL.createObjectURL(file)
}


function getImageBase64(file){
    let reader = new FileReader()

    reader.readAsDataURL(file)

    reader.onload = function (){
        productImage = reader.result;

    }
}
