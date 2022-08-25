// document.getElementById("count-el").innerText=5
// cmd + k + c


//init the count as 0
//listen for clicks on the increment btn
//increment the count var when the btn is clicked
//change the count-el in the HTML to reflect the new count
//camelCase for vars

//the DOM (Document Object Model) aka how you use js to modify a website.
//document: html doc.
//object: the doc keyword in js is of the data type object, they've taken the html doc and shoved into a js object.
//model: a representation or a modelation--> <h2 id="count-el">0</h2> (REAL THING) let countEl=document.getElementById("count-el") (MODEL o the real thing)


//grab the count-el element, store it in a countEl variable
 
let countEl=document.getElementById("count-el") //pass in arg

let count=0

function increment(){
    count= count+1
    countEl.innerText=count
} 

//------------ SAVE ------------
function save(){
    console.log(count)
} 

//create a fuction, save() which logs out the count when it is called

//strings
let username="April"
//create a variable, message, that stores the string: "You have three new notifications"
let message="You have three new notifications"

let messegeToUser= message + ", " + username + "!"
console.log(messegeToUser)

// create a variable, messegeToUser, that contains the message we have logged

let name="April"
let greeting= "Hi! My name is "
let myGretting= greeting + name
console.log(myGretting)

// let points = 4
// let bonusPoints= "10"

// let totalPoints= points + bonusPoints

// console.log(totalPoints)






