function bookDelivery(){

let pickup=document.getElementById("pickup").value
let drop=document.getElementById("drop").value
let type=document.getElementById("type").value

db.ref("deliveries").push({

pickup:pickup,
drop:drop,
type:type

})

alert("Delivery Request Sent")

}
