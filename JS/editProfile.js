// Get Data From LocalStorage
let get_user = localStorage.getItem('username')
let get_email = localStorage.getItem('email')
// let inputFile = document.getElementById("upload-image-file")


// Variables
let userInput = document.getElementById("changeName")
let userEmailInput = document.getElementById("changeEmail");
let editForm = document.getElementById("edit-profile-form");

// Setting Values Of Input
userInput.value = get_user;
userEmailInput.value = get_email;

// Events
editForm.addEventListener("submit", editProfileData);
// inputFile.addEventListener("change", uploadImage);

function editProfileData(event){
    event.preventDefault();

    localStorage.setItem("username", userInput.value);
    localStorage.setItem("email", userEmailInput.value);
    // localStorage.setItem("userImage", userEmailInput.value);

    setTimeout(() => {
        window.location ='profile.html'
    })
}

 


// function uploadImage(){
//     let file = this.files[0];
    
//     let types = ["image/jpeg" ,"image/png","image/webp"]

//     if( types.indexOf(file.type) == -1 ){
//         alert("Type Not Supported")
//         return;
//     }
//     if (file.size > 2 * 1024 * 1024){
//         alert("Image not Eced 2 MG")
//         return;
//     }
//     getImageBase64(file)
//     // productImage = URL.createObjectURL(file)
// }

// function getImageBase64(file){
//     let reader = new FileReader()

//     reader.readAsDataURL(file)

//     reader.onload = function (){
//         productImage = reader.result;

//     }
// }