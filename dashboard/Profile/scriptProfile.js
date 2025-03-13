document.querySelectorAll(".Username").forEach(elem =>{
    elem.textContent = localStorage.getItem("Current User");
})
document.querySelectorAll(".Email").forEach(elem =>{
    elem.textContent = localStorage.getItem("Current User Email");
})
let Dets = JSON.parse(localStorage.getItem("userProfileDets"));            
document.querySelector("#phone").textContent = Dets["mobile"];
document.querySelector("#location").textContent = Dets["Location"];
document.querySelector("#bio").textContent = Dets["Bio"];
var mobileNumber;
var locationDets;
var BioDets;
[Dets].forEach((dets)=>{
    mobileNumber = dets.mobile
    locationDets = dets.Location
    BioDets = dets.Bio
    document.querySelector("#phone").textContent = dets.mobile;
    document.querySelector("#location").textContent = dets.Location;
    document.querySelector("#bio").textContent = dets.Bio;
})

document.querySelector("#edit-profile").addEventListener('click',()=>{
    var phone = confirm("Do you want to change the phone number ?") ? prompt("Enter the new phone number : ") : mobileNumber;
    var location = confirm("Do you want to change the location ?") ? prompt("Enter the new location : ") : locationDets;
    var bio = confirm("Do you want to change the bio ?") ? prompt("Enter the new bio : ") : BioDets;

    document.querySelector("#phone").textContent = phone;
    document.querySelector("#location").textContent = location;
    document.querySelector("#bio").textContent = bio;

    let det1 = new Array();
    det1 = {
        mobile : phone,
        Location : location,
        Bio : bio   
    }
    localStorage.setItem("userProfileDets",JSON.stringify(det1));
})

