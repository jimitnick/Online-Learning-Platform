document.querySelectorAll(".Username").forEach(elem =>{
    elem.textContent = JSON.parse(localStorage.getItem("CurrentLoggedInUser")).name;
})
document.querySelectorAll(".Email").forEach(elem =>{
    elem.textContent = JSON.parse(localStorage.getItem("CurrentLoggedInUser")).email;
})
var Dets = JSON.parse(localStorage.getItem("UserDetails"));
var currentUserDets = JSON.parse(localStorage.getItem("CurrentLoggedInUser"));
for (var i = 0;i<Dets.length;i++){
    if(Dets[i].username == currentUserDets.username && Dets[i].passwd == currentUserDets.passwd){
        document.querySelector("#phone").textContent = Dets[i].phone;
        document.querySelector("#location").textContent = Dets[i].location;
        document.querySelector("#bio").textContent = Dets[i].bio;
    }
}
var mobileNumber;
var locationDets;
var BioDets;
for(var i = 0;i<Dets.length;i++){
    if (Dets[i].username === currentUserDets.username && Dets[i].passwd === currentUserDets.passwd){
        mobileNumber = Dets[i].phone
        locationDets = Dets[i].location
        BioDets = Dets[i].bio
        document.querySelector("#phone").textContent = Dets[i].phone;
        document.querySelector("#location").textContent = Dets[i].location;
        document.querySelector("#bio").textContent = Dets[i].bio;
    }
}
document.querySelector("#edit-profile").addEventListener('click',()=>{
    var phone = confirm("Do you want to change the phone number ?") ? prompt("Enter the new phone number : ") : mobileNumber;
    var location = confirm("Do you want to change the location ?") ? prompt("Enter the new location : ") : locationDets;
    var bio = confirm("Do you want to change the bio ?") ? prompt("Enter the new bio : ") : BioDets;

    document.querySelector("#phone").textContent = phone;
    document.querySelector("#location").textContent = location;
    document.querySelector("#bio").textContent = bio;

    for (var i = 0;i<Dets.length;i++){
        if(Dets[i].username == currentUserDets.username && Dets[i].passwd == currentUserDets.passwd){
            Dets[i].phone = phone;
            Dets[i].location = location;
            Dets[i].bio = bio;
        }
    }
    
    localStorage.setItem("UserDetails",JSON.stringify(Dets));
})

