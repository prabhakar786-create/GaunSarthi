function payUPI(){

let upi="prabhakar@upi"

let amount=120

let url="upi://pay?pa="+upi+"&am="+amount+"&cu=INR"

window.location.href=url

}
