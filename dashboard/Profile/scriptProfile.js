document.querySelectorAll(".Username").forEach(elem =>{
    elem.textContent = localStorage.getItem("Current User");
})
document.querySelectorAll(".Email").forEach(elem =>{
    elem.textContent = localStorage.getItem("Current User Email");
})

document.querySelector("#edit-profile").addEventListener('click',()=>{
    var phone = confirm("Do you want to change the phone number ?") ? prompt("Enter the new phone number : ") : "";
    var location = confirm("Do you want to change the location ?") ? prompt("Enter the new location : ") : "";
    var bio = confirm("Do you want to change the bio ?") ? prompt("Enter the new bio : ") : "";

    document.querySelector("#phone").textContent = phone;
    document.querySelector("#location").textContent = location;
    document.querySelector("#bio").textContent = bio;
})