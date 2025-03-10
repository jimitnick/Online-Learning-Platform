const signUpBtn = document.querySelector("#signup");
const loginBtn = document.querySelector("#login");
const names = document.querySelectorAll("#Name");
const dob = document.querySelectorAll("#dob");
const email = document.querySelectorAll("#email");
const submitBtn = document.querySelector("#submit");
dets = {};
signUpBtn.addEventListener("click",()=>{
    names.forEach((elem)=>{
        elem.style.display = "block";
    })
    email.forEach((elem)=>{
        elem.style.display = "block";
    })
    dob.forEach(elem => {
        elem.style.display = "block";   
    })
    
    submitBtn.textContent = "Sign Up";
})
loginBtn.addEventListener("click",()=>{
    names.forEach((elem)=>{
        elem.style.display = "none";
    })
    email.forEach((elem)=>{
        elem.style.display = "none";
    })
    dob.forEach(elem => {
        elem.style.display = "none";
    })
    submitBtn.textContent = "Login";
})
submitBtn.addEventListener('click',()=>{
    dets["name"]  = `${document.querySelector("#loginPage #left form .name").value}`;
    dets["email"] = `${document.querySelector("#loginPage #left form .email").value}`;
    dets["dob"] = `${document.querySelector("#loginPage #left form .dob").value}`;
    dets["username"] = `${document.querySelector("#loginPage #left form #username").value}`;
    dets["password"] = `${document.querySelector("#loginPage #left form #passwd").value}`;
    localStorage.setItem("details",JSON.stringify(dets));
})
// local storage

