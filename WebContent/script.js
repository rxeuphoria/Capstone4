function addAppleToCart() {
	cart.push(apple);
}
function addMilkToCart(){
	cart.push(milk);
}
function addCabbageToCart(){
	cart.push(cabbage);
}
function printCart(){
	var total = 0;
	for (let i = 0; i < cart.length; i++) {
		total = total + cart[i].price;
		console.log( cart[i].name , cart[i].price);
		}
	document.getElementById("totalOut").innerHTML = ("total:" + total);
	}
function addBananaToCart(){
		cart.push(banana);
	}
function addCerealToCart(){
	cart.push(cereal);
}
function addChocToCart(){
	cart.push(choc);
}
function addOatsToCart(){
	cart.push(oats);
}
function addKaleToCart(){
	cart.push(kale);
}
function addOrangeToCart(){
	cart.push(orange);
}
function addEggsToCart(){
	cart.push(eggs);
}
function addCheeseToCart(){
	cart.push(cheese);
}
// Step 1: find the element
let addMilkEl = document.getElementById("addMilk");
let addAppleEl = document.getElementById("addApple");
let addCabbageEl = document.getElementById("addCabbage");
let printCartEl = document.getElementById("printCart");
let addBananaEl = document.getElementById("addBanana");
let addCerealEl = document.getElementById("addCereal");
let addChocEl = document.getElementById("addChoc");
let addOatsEl = document.getElementById("addOats");
let addKaleEl = document.getElementById("addKale");
let addOrangeEl = document.getElementById("addOrange");
let addEggsEl = document.getElementById("addEggs");
let addCheeseEl = document.getElementById("addCheese");
let totalEl = document.createElement("total");

// Step 2: add event listener
addAppleEl.addEventListener("click", (event) => {
	addAppleToCart();
});
addMilkEl.addEventListener("click", (event) => {
	addMilkToCart();
});
addCabbageEl.addEventListener("click", (event) => {
	addCabbageToCart();
});
printCartEl.addEventListener("click", (event) => {
	printCart();
});
addBananaEl.addEventListener("click", (event) => {
	addBananaToCart();
});
addCerealEl.addEventListener("click", (event) => {
	addCerealToCart();
});
addChocEl.addEventListener("click", (event) => {
	addChocToCart();
});
addOatsEl.addEventListener("click", (event) => {
	addOatsToCart();
});
addKaleEl.addEventListener("click", (event) => {
	addKaleToCart();
});
addOrangeEl.addEventListener("click", (event) => {
	addOrangeToCart();
});
addEggsEl.addEventListener("click", (event) => {
	addEggsToCart();
});
addCheeseEl.addEventListener("click", (event) => {
	addCheeseToCart();
});


// array of objects

//paper or plastic bag properties
//dimensions 80% weight limit?

//Chicory One Shot Bag objects
//volume is in cm^3.  weight is in grams.
let apple = { name: "apple", volume: 187, weight: 150, price: 0.89 };
let cabbage = { name: "cabbage", volume: 1500, weight: 454, price: 2.10 }
let milk = { name: "milk", volume: 1893, weight: 1893, price: 4.08 }
let banana = {name:"banana", volume: 100, weight: 150, price: 0.99 }
let choc = {name:"choc", volume: 100, weight: 200, price: 3.40}
let oats = {name:"oats", volume: 100, weight: 454, price: 5.00}
let orange = {name:"orange", volume: 100, weight: 120, price: 0.89}
let kale = {name:"kale", volume: 100, weight: 300, price: 2.35}
let cheese = {name:"cheese", volume: 100, weight: 225, price: 7.99}
let cereal = {name:"cereal", volume: 100, weight: 310, price: 4.99}
let eggs = {name:"eggs", volume: 100, weight: 360, price: 3.79}

//Chicory cart
let cart = [];



