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
