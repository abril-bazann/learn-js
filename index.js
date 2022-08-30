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

welcomeEl.textContent=greeting + name
// add emoji
welcomeEl.textContent += "! ✨"

//PRACTICE TIME
//greetings
let firstName= "Abril"
let lastName= "Bazán"
let fullName=document.getElementById("name-el")

fullName.textContent= firstName+" "+lastName

//greeting with func
let User="Linda"
let greetingUser="Hey there"

function greetingLinda(){
    console.log(greetingUser+ ", "+ User + "!")
}
greetingLinda()

//2 func. add/remove points
let myPoints=3
function add3Points(){
    myPoints+=3
}
add3Points()

function remove1Point(){
     myPoints-=1
}
//logs out 10
add3Points()
add3Points()
remove1Point()
remove1Point()
console.log(myPoints)

console.log("2"+2)//"22"
console.log(11+7)//18
console.log(6+"5")//"65"
console.log("My points: "+5+9)//"My points: 59"
console.log(2+2)//4
console.log("11"+"14")//"1114"

//Rendering error message when you click the btn
let errorParagraph=document.getElementById("error")
let message="Something went wrong, please try again"

function errorMessage(){
    errorParagraph.textContent=message
    console.log(message)
} 

//calculator challenge
let num1=8
let num2=2

document.getElementById("num1-el").textContent=num1

document.getElementById("num2-el").textContent=num2

function add(){
    let addNum=num1+num2
}
