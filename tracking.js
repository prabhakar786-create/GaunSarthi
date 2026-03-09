function updateDriverLocation(){

navigator.geolocation.getCurrentPosition(

function(position){

let lat=position.coords.latitude
let lon=position.coords.longitude

db.ref("drivers").push({

lat:lat,
lon:lon,
status:"online"

})

})

}
