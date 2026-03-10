function bookRide(){

let pickup=document.getElementById("pickup").value
let drop=document.getElementById("drop").value
let vehicle=document.getElementById("vehicle").value
const db=firebase.database();

db.ref("rides").push({

pickup:pickup,
drop:drop,
vehicle:vehicle,
status:"waiting"

})

alert("Ride Requested")

}
