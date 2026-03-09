function loadRides(){

db.ref("rides").on("value",function(snapshot){

let data=snapshot.val()

let html=""

for(let id in data){

html+="<li>"+data[id].pickup+" → "+data[id].drop+"</li>"

}

document.getElementById("rideList").innerHTML=html

})

}
