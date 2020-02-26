document.write("<br>"+"Welcome to JavaScrpt")

// // JavaScript - Accessing element & attribute using document object

// // accessing an element using getElementById
// var pElement=document.getElementById("demo")

// alert(pElement)

// //get DOM object value
// alert(pElement.innerHTML)

// // get DOM Object attribute value
// alert(pElement.getAttribute("id"))

// // get tag Name
// alert(pElement.tagName)

// accessing element using class attribute

/* var pClassElement=document.getElementsByClassName("hello") //Node list
document.write("It is first element by accessing element by DOM property"+pClassElement[0].innerHTML+"<br>")
document.write("It is second element by accessing element by DOM property"+pClassElement[1].innerHTML)
// For Multiline Comment in vs code is (alt + Shift + A)
// loop through all paragraph
for(var i=0; pClassElement.length;i++){
    alert(pClassElement[i].innerHTML)
} */

/* //OOPs Concept in JavaScript
//It is procedural way
let baseSalary = 30000
let overtime = 10
let rate = 20

function getWage(baseSalary, overtime, rate){
    return baseSalary+(overtime*rate)
}
document.write("<br>Total salary is : "+getWage(4000,20,10)+"<br>")

//OOPs way
let employee = {
    baseSalary:5000,
    overtime: 30,
    rate:15,
    getWage:function(){
        return this.baseSalary+(this.overtime*this.rate)
    }
}
employee.baseSalary=2000
document.write(employee.getWage()) */

/* var ulElement=document.getElementsByTagName("ul")
alert(ulElement)
alert(ulElement[0].innerHTML)

var listElement=ulElement[0].getElementsByTagName("li")
alert(listElement[0].innerHTML) */

// accessing element by using css query
var pElement = document.querySelector("p")
alert(pElement.innerHTML)
 
var pElements = document.querySelectorAll("div p")
for(var i=0;i<pElements.length;i++){
    alert(pElements[i].innerHTML)
}
