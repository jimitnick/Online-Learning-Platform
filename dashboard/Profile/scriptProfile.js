document.querySelectorAll(".Username").forEach(elem =>{
    elem.textContent = localStorage.getItem("Current User");
})
document.querySelectorAll(".Email").forEach(elem =>{
    elem.textContent = localStorage.getItem("Current User Email");
})

let Dets = JSON.parse(localStorage.getItem("userProfileDets"));
[Dets].forEach((dets)=>{
    document.querySelector("#phone").textContent = dets.mobile;
    document.querySelector("#location").textContent = dets.Location;
    document.querySelector("#bio").textContent = dets.Bio;
})

document.querySelector("#edit-profile").addEventListener('click',()=>{
    var phone = confirm("Do you want to change the phone number ?") ? prompt("Enter the new phone number : ") : "xxxx-xxx-xxx";
    var location = confirm("Do you want to change the location ?") ? prompt("Enter the new location : ") : "Add Your Location";
    var bio = confirm("Do you want to change the bio ?") ? prompt("Enter the new bio : ") : "Add Bio";

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

