var map = L.map('map').setView([26.8467,80.9462],13);

L.tileLayer(
'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
).addTo(map);

function getLocation(){

navigator.geolocation.getCurrentPosition(

function(position){

let lat=position.coords.latitude
let lon=position.coords.longitude

L.marker([lat,lon]).addTo(map)

document.getElementById("pickup").value=lat+","+lon

})

}
