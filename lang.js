function setLang(lang){

if(lang==="hi"){
document.getElementById("title").innerHTML="गांव सारथी";
document.getElementById("tagline").innerHTML="डिलीवरी | बाइक टैक्सी | कार टैक्सी";

document.getElementById("deliveryTitle").innerHTML="गांव डिलीवरी";
document.getElementById("deliveryText").innerHTML="किराना, सब्जी और दवा घर तक";

document.getElementById("bikeTitle").innerHTML="बाइक टैक्सी";
document.getElementById("bikeText").innerHTML="गांव से बाजार जल्दी पहुंचे";

document.getElementById("carTitle").innerHTML="कार टैक्सी";
document.getElementById("carText").innerHTML="लंबी दूरी यात्रा सेवा";

}

if(lang==="en"){
document.getElementById("title").innerHTML="Gaon Sarthi";
document.getElementById("tagline").innerHTML="Delivery | Bike Taxi | Car Taxi";

document.getElementById("deliveryTitle").innerHTML="Village Delivery";
document.getElementById("deliveryText").innerHTML="Groceries, vegetables and medicines at home";

document.getElementById("bikeTitle").innerHTML="Bike Taxi";
document.getElementById("bikeText").innerHTML="Quick ride from village to market";

document.getElementById("carTitle").innerHTML="Car Taxi";
document.getElementById("carText").innerHTML="Car service for long distance travel";
}

}