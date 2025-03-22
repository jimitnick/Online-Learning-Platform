const settingsBox = document.querySelectorAll("#main #second #left .box");
const settingsSideBox = document.querySelectorAll("#main #second #right .boxes");
const UsernameChangeBtn = document.querySelector("#usernameChange");
const PasswdChangeBtn = document.querySelector("#passwdChange");
const emailVerifyBox = document.querySelector("#main #emailVerify");
const okBtn = document.querySelector("#main #emailVerify button");
const editBtn = document.querySelector("#editPhoto");
var profilePhoto = document.querySelector("#profilePhoto");
const toggle = document.querySelector("#toggle");
var username = "";
var passwd = "";

// dark mode and light mode features
toggle.addEventListener('click',()=>{
    if (document.querySelector("#main").style.backgroundColor == "rgb(236, 245, 255)"){
        document.querySelector("#main").style.backgroundColor = "#000";
        document.querySelector(".boxes").style.backgroundColor = "#222";
        document.querySelectorAll(".box").forEach((elem)=>{
            elem.style.backgroundColor = "#222";
            elem.style.color = "#fff";
        })
        document.querySelector("#first").style.backgroundColor = "#222";
        document.querySelector("#first").style.color = "#fff";
        document.querySelectorAll("#first li a").forEach((elem)=>{
            elem.style.color = "#fff";
        })
        document.querySelector(".boxes").style.color = "#fff";
    }
    else{
        document.querySelector("#main").style.backgroundColor = "rgb(236, 245, 255)";
        document.querySelector(".boxes").style.backgroundColor = "#fff";
        document.querySelectorAll(".box").forEach((elem)=>{
            elem.style.backgroundColor = "#fff";
            elem.style.color = "#222";
        })
        document.querySelector("#first").style.backgroundColor = "#fff";
        document.querySelector("#first").style.color = "#222";
        document.querySelectorAll("#first li a").forEach((elem)=>{
            elem.style.color = "#222";
        })
        document.querySelector(".boxes").style.color = "#222";
    }
    console.log("Clicked");
    
})

// Settings box changing feature
settingsBox.forEach((elem)=>{
    elem.addEventListener('click',()=>{
        document.querySelectorAll(`#main #second #right .boxes`).forEach((boxes)=>{
            boxes.style.display = "none";
            if (boxes.classList[1] === elem.classList[1]){
                boxes.style.display = "flex";
            }
        })
    })
})

// username validation
UsernameChangeBtn.addEventListener('click',()=>{
    var username = prompt("Enter new username ");
    if (username != ""){
        alert("Username updated successfully !");
        emailVerifyBox.style.display = "flex";
    }
    else{
        alert("Username updation failed");
    } 
})
// email verfication ok button functionality
okBtn.addEventListener('click',()=>{
    emailVerifyBox.style.display = "none";
})
// password validation
PasswdChangeBtn.addEventListener('click',()=>{
    var passwd = prompt("Enter new password ");
    if (passwd != ""){
        alert("Password updated successfully !");
        emailVerifyBox.style.display = "flex";
    }
    else{
        alert("Password updation failed");
    }
})

// user profile photo upload feature
editBtn.addEventListener('click', () => {
    let input = document.createElement('input');
    input.type = 'file';
    input.accept = "images/*";
    input.onchange = _ => {
        // you can use this method to get the file and perform respective operations
        let files = Array.from(input.files);
        profilePhoto.src = input.value  ;
        console.log(files);
    };
    input.click();
}); 

document.querySelector(".username").textContent = JSON.parse(localStorage.getItem("CurrentLoggedInUser")).name
document.querySelector(".email").textContent = JSON.parse(localStorage.getItem("CurrentLoggedInUser")).email
var Dets = JSON.parse(localStorage.getItem("UserDetails"));
var currUser = JSON.parse(localStorage.getItem("CurrentLoggedInUser"));
for (var i =0;i<Dets.length;i++){
    if (Dets[i].username == currUser.username && Dets[i].passwd == currUser.passwd){
        document.querySelector(".mobile").textContent = Dets[i].phone;
        document.querySelector(".Class").textContent = Dets[i].class;   
        document.querySelector(".dob").textContent = Dets[i].dob;   
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const emailNotificationToggle = document.getElementById("emailNotificationToggle");
    const sendTestEmailButton = document.getElementById("sendTestEmail");

    // Load saved preference
    emailNotificationToggle.checked = localStorage.getItem("emailNotifications") === "true";

    // Save toggle state
    emailNotificationToggle.addEventListener("change", function () {
        localStorage.setItem("emailNotifications", this.checked);
        alert("Email notifications " + (this.checked ? "enabled" : "disabled"));
    });

    // Send test email using a mailto link (Basic Approach)
    sendTestEmailButton.addEventListener("click", function () {
        if (emailNotificationToggle.checked) {
            const email = JSON.parse(localStorage.getItem("CurrentLoggedInUser")).email;
            window.location.href = `mailto:${email}?subject=Test Email Notification&body=This is a test email from EduPrep.`;
        } else {
            alert("Enable email notifications first.");
        }
    });
});

    
    // Payment Settings
    document.getElementById("paymentSettingsBtn").addEventListener("click", function () {
        fetch("http://localhost:5000/create-checkout-session", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
        })
        .then(res => res.json())
        .then(data => {
            if (data.url) {
                window.location.href = data.url; // Redirect to Stripe checkout
            } else {
                alert("Payment failed. Try again.");
            }
        })
        .catch(error => console.error("Error:", error));
    });
    
    // Learning Reminder
    document.getElementById("learningReminderBtn").addEventListener("click", function () {
        const time = prompt("Set reminder time (HH:MM AM/PM):");
        if (time) {
            localStorage.setItem("learningReminder", time);
            alert("Learning reminder set for " + time);
        } else {
            alert("Reminder setup canceled.");
        }
    });
});
