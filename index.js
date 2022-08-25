// document.getElementById("count-el").innerText=5
// cmd + k + c


//init the count as 0
//listen for clicks on the increment btn
//increment the count var when the btn is clicked
//change the count-el in the HTML to reflect the new count
//camelCase for vars

let countEl=document.getElementById("count-el") //pass in arg

let count=0

function increment(){
    count= count+1
    countEl.innerText=count
} 




