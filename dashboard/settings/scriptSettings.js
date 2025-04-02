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

var Dets = JSON.parse(localStorage.getItem("UserDetails"));
UsernameChangeBtn.addEventListener('click',()=>{
    var username = prompt("Enter new username ");
    for (var i = 0;i<Dets.length;i++){
        if (username != "" && Dets[i].username == currUser.username && Dets[i].passwd == currUser.passwd){
            alert("Username updated successfully !");
            Dets[i].username = username;
            emailVerifyBox.style.display = "flex";
        }
        else{
            alert("Username updation failed");
        } 
    }
})

document.addEventListener("DOMContentLoaded", function () {
    const emailNotificationToggle = document.getElementById("emailNotificationToggle");
    const sendTestEmailButton = document.getElementById("sendTestEmail");

    // Load saved preference
    emailNotificationToggle.checked = localStorage.getItem("emailNotifications") === "true";
    (function() {
        emailjs.init("MqP7EA618imze7kWq");  // Replace with your EmailJS Public Key
    })();
    // Save toggle state
    emailNotificationToggle.addEventListener("change", function () {
        localStorage.setItem("emailNotifications", this.checked);
        alert("Email notifications " + (this.checked ? "enabled" : "disabled"));
    });

    // Send test email using a mailto link (Basic Approach)
    sendTestEmailButton.addEventListener("click", function () {
        if (emailNotificationToggle.checked) {
            const email = JSON.parse(localStorage.getItem("CurrentLoggedInUser")).email;
            const name = JSON.parse(localStorage.getItem("CurrentLoggedInUser")).name;
            const mess = document.querySelector("#main #second #right .three .contents #message").value;
            const head = document.querySelector("#main #second #right .three .contents #title").value;
            emailjs.send("service_csid1hj", "template_nrljrn7", {
                to_email: "onlinelearningplatform1234@gmail.com",
                from_email: email, // Recipient Email
                name: name,
                reply_to: email,
                subject: `Issue with ${head}`,
                message: mess
            }).then(function(response) {
                alert("Mail sent successfully!");
            }, function(error) {
                alert("Failed to send email. Error: " + error.text);
            });
            document.getElementById("message").value = "";
            document.getElementById("title").value= "";
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
        var c = document.createElement("h3");
        c.id = "rems";
        c.innerHTML = time;
        document.querySelector("#main #second #right .six .contents #reminders").appendChild(c);
        alert("Learning reminder set for " + time);
    } else {
        alert("Reminder setup canceled.");
    }
});

document.querySelectorAll("#main #second #right .six .contents #reminders h3").forEach((elem)=>{
    elem.addEventListener('click',()=>{
        console.log("deleted");
        elem.remove();
    })
})
