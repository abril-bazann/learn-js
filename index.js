/**
 *document.getElementById("count-el").innerText=5
 cmd + k + c
 init the count as 0
listen for clicks on the increment btn
increment the count var when the btn is clicked
change the count-el in the HTML to reflect the new count
camelCase for vars
the DOM (Document Object Model) aka how you use js to modify a website.
document: html doc.
object: the doc keyword in js is of the data type object, they've taken the html doc and shoved into a js object.
model: a representation or a modelation--> <h2 id="count-el">0</h2> (REAL THING) let countEl=document.getElementById("count-el") (MODEL o the real thing)
 */

let saveEl= document.getElementById("save-el")
let countEl=document.getElementById("count-el")

let count=0

function increment(){
    count+=1
    countEl.textContent=count
} 

//------------ SAVE ------------
//create a fuction, save() which logs out the count when it is called
function save(){
    let countStr= " " + count + " - "
    saveEl.textContent+=countStr
    countEl.textContent=0
    count=0
} 

// Render the welcome message using welcomeEl.innerText
let welcomeEl= document.getElementById("welcome-el")
let name="April"
let greeting= "Welcome back "

welcomeEl.innerText=greeting + name

welcomeEl.innerText += "! ✨"



