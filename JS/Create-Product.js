// variables
let productName = document.getElementById("Product-Name")
let productDesc = document.getElementById("Product-Desc")
let productAuthor = document.getElementById("Product-AuthorName")
let productPrice = document.getElementById("Product-Price")
let CreateForm = document.getElementById("create-form")
let inputFile = document.getElementById("upload-image-file")
let productImage;


// Events
CreateForm.addEventListener("submit", createProductFun);
inputFile.addEventListener("change", uploadImage);


// Functions
function createProductFun(event){
    event.preventDefault();
    let allProducts = JSON.parse(localStorage.getItem("products")) || productsDB;
    let nameValue = productName.value;
    let descValue = productDesc.value;
    let authorValue = productAuthor.value;
    let priceValue = productPrice.value;

    if (nameValue && descValue && authorValue && priceValue){
        let obj = {
            id : allProducts ? allProducts.length + 1 : 1,
            Author: authorValue ,
            Qty: 1,
            imageUrl: productImage,
            decription: descValue,
            price: priceValue,
            title: nameValue,
            isMe:"Y"
        };
        let newProducts = allProducts ? [...allProducts, obj] : [obj] ;
        localStorage.setItem("products", JSON.stringify(newProducts))
    
        productName.value ="";
        productDesc.value ="";
        productAuthor.value = "";
        productPrice.value ="";

        setTimeout(() => {
            window.location = "index.html"
        }, 500)

    } else {
        alert ("Enter Data")
    }
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
