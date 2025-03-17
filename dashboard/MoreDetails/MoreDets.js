// var currUserDets = localStorage.getItem("UserDetails");
// var loggedInUser = JSON.parse(localStorage.getItem("LoggedInUser")) || [];
// let required = ["phone","location","bio","class"]
// var count = 0;
// var dets = {
//     phone : "",
//     location : "",
//     bio :"",
//     class : "" 
// }
// var centerDiv = document.getElementById("center");
// function create(count){
//     if (count < required.length){
//         var h1elem = document.createElement("h1");
//         var inputField = document.createElement("input");
//         inputField.placeholder = `Enter the ${required[count]}`;
//         h1elem.id = "head";
//         inputField.id = "userText";
//         centerDiv.appendChild(h1elem);
//         centerDiv.appendChild(inputField);
//         dets[required[count]] = inputField.value;
//     }
// }

// var startBtn = document.getElementById("start");

// startBtn.addEventListener('click',()=>{
//     startBtn.innerHTML = "Next";
//     startBtn.style.width = "15em";
//     startBtn.style.transform = 
//     create(count);  
//     if (count == required.length - 1){
//         startBtn.innerHTML = "Let's Go";
//     }
//     if (count == required.length){
//         updateUserDetails();
//         window.location.href = "../dashboard.html";
//     }
//     count++;
// })


// function updateUserDetails() {
//     if (!currUserDets) {
//         alert("No logged-in user found!");
//         return;
//     }

//     let userIndex = currUserDets.findIndex(user => user.username === loggedInUser.username || user.email === loggedInUser.email);

//     if (userIndex !== -1) {
//         // Update user details
//         currUserDets[userIndex] = { ...currUserDets[userIndex], ...dets };
//         localStorage.setItem("UserDetails", JSON.stringify(currUserDets));
//     } else {
//         alert("User not found!");
//     }
// }
var loggedInUser  = JSON.parse(localStorage.getItem("CurrentLoggedInUser")) ;
var currUserDets= JSON.parse(localStorage.getItem("UserDetails")); // Assumed logged-in user info
let required = ["phone", "location", "bio", "class"];
var count = 0;

var dets = {
    phone: "",
    location: "",
    bio: "",
    class: ""
};

var centerDiv = document.getElementById("center");

function create(count) {
    if (count < required.length) {
        var tempDiv = document.createElement("div");
        tempDiv.id = "temp";
        var h1elem = document.createElement("h1");
        h1elem.id = "head";
        var inputField = document.createElement("input");
        inputField.placeholder = `Enter the ${required[count]}`;
        h1elem.textContent = `Enter your ${required[count]}`;
        inputField.id = "userText"; // Unique ID for each field
        tempDiv.appendChild(h1elem);
        tempDiv.appendChild(inputField);
        centerDiv.append(tempDiv);
        // Update dets when input changes
        inputField.addEventListener("input", function () {
            dets[required[count]] = inputField.value;
        });
    }
}

var startBtn = document.getElementById("start");

startBtn.addEventListener("click", () => {
    startBtn.style.top = "90%";
    startBtn.innerHTML = "Next";
    startBtn.style.width = "15em";
    create(count);

    if (count === required.length - 1) {
        startBtn.innerHTML = "Let's Go";
    }
    if (count === required.length) {
        updateUserDetails();
        window.location.href = "../dashboard.html";
    }
    count++;
});

// Function to update user details in localStorage
function updateUserDetails() {
    if (!loggedInUser) {
        alert("No logged-in user found!");
        return;
    }

    let userIndex = currUserDets.findIndex(
        user => user.username == loggedInUser.username && user.passwd == loggedInUser.passwd
    );

    if (userIndex !== -1) {
        // Update the existing user object
        currUserDets[userIndex] = { ...currUserDets[userIndex], ...dets };
        
        // Save updated user list back to localStorage
        localStorage.setItem("UserDetails", JSON.stringify(currUserDets));
    } else {
        alert("User not found!");
    }
}
