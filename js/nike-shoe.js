//Rendering error message when you click the btn
let errorParagraph=document.getElementById("error")
let message="Something went wrong, please try again"

function errorMessage(){
    errorParagraph.textContent=message
    console.log(message)
} 
