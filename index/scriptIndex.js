const signUpBtn = document.querySelector("#signup");
const loginBtn = document.querySelector("#login");
const names = document.querySelectorAll("#Name");
const dob = document.querySelectorAll("#dob");
const email = document.querySelectorAll("#email");
const submitBtn = document.querySelector("#submit");

signUpBtn.addEventListener("click", () => {
    names.forEach((elem) => {
        elem.style.display = "block";
    })
    email.forEach((elem) => {
        elem.style.display = "block";
    })
    dob.forEach(elem => {
        elem.style.display = "block";
    })

    submitBtn.textContent = "Sign Up";
})
loginBtn.addEventListener("click", () => {
    names.forEach((elem) => {
        elem.style.display = "none";
    })
    email.forEach((elem) => {
        elem.style.display = "none";
    })
    dob.forEach(elem => {
        elem.style.display = "none";
    })
    submitBtn.textContent = "Login";
})
function check() {
    let userDets = new Array();
    var form = document.querySelector(".Form");
    //signing up
    form.addEventListener('submit', (event) => {
        // localStorage.clear();
        event.preventDefault();
        if (submitBtn.textContent == "Sign Up") {
            var name = document.querySelector(".name").value;
            var email = document.querySelector(".email").value;
            var dob = document.querySelector(".dob").value;
            var username = document.querySelector(".username").value;
            var password = document.querySelector(".passwd").value;
            userDets = JSON.parse(localStorage.getItem("UserDetails")) ? JSON.parse(localStorage.getItem("UserDetails")) : [];
            if (userDets.some((v) => {
                return v.username === username;
            })) {
                window.alert("Username already exists. Please choose a different one");
            }
            else if (name != "" && email != "" && dob != "" && username != "" && password != "") {
                if (password.length < 6) {
                    window.alert("Password must be at least 6 characters long.");
                    return;
                }
                let dets = {
                    "name": name,
                    "passwd": password,
                    "email": email,
                    "dob": dob,
                    "username": username
                }
                userDets.push(dets);
                localStorage.setItem("UserDetails", JSON.stringify(userDets));
                var loggedInUserDets = {
                    "username": username,
                    "passwd": password,
                    "email": email,
                    "name": name
                }
                localStorage.setItem("CurrentLoggedInUser", JSON.stringify(loggedInUserDets));
                window.location.href = "../dashboard/MoreDetails/MoreDets.html";
            }
            var loggedInUserDets = {
                "username": username,
                "passwd": password,
                "email": email,
                "name": name
            }
            localStorage.setItem("CurrentLoggedInUser", JSON.stringify(loggedInUserDets));
            document.querySelector(".name").value = "";
            document.querySelector(".email").value = "";
            document.querySelector(".dob").value = "";
            document.querySelector(".username").value = "";
            document.querySelector(".passwd").value = "";

        }
        //logging in
        else {
            let userData = JSON.parse(localStorage.getItem("UserDetails"));
            var username = document.querySelector(".username").value;
            var password = document.querySelector(".passwd").value;
            var name = "";
            var email = "";
            let loginSuccess = false;

            userData.forEach((elem) => {
                if (elem.username === username && elem.passwd === password) {
                    email = elem.email;
                    name = elem.name;
                    loginSuccess = true;

                    var loggedInUserDets = {
                        "username": username,
                        "passwd": password,
                        "email": email,
                        "name": name
                    }
                    localStorage.setItem("CurrentLoggedInUser", JSON.stringify(loggedInUserDets));
                    window.location.href = "../dashboard/dashboard.html";
                }

            })
            if (!loginSuccess) {
                window.alert("Invalid username or password!");
            }
        }
    })
}


