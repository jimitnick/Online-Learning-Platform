const date = new Date();
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


let Dets = JSON.parse(localStorage.getItem("CurrentLoggedInUser"));
document.querySelectorAll(".Username").forEach((elem)=>{
    elem.innerHTML = Dets.name;
})
let details = JSON.parse(localStorage.getItem("UserDetails"));
for (var i =0;i<details.length;i++){
    if (details[i].username == Dets.username && details[i].passwd == Dets.passwd){
        document.querySelector(".Class").textContent = details[i].class;
    }
}
const monthfield = document.querySelector("#calender #month #date h2");
const datefield = document.querySelector("#calender #month #date p");
const next = document.querySelector("#calender #month #next");
const prev = document.querySelector("#calender #month #prev");
const daysContainer = document.querySelector("#calender #days");

let month = date.getMonth();
let year = date.getFullYear();
let selectedDate = date.getDate();

// Function to update calendar display
function updateCalendar() {
    const firstDay = new Date(year, month, 1).getDay(); // Day of the week (0-6)
    const lastDate = new Date(year, month + 1, 0).getDate(); // Last date of the month
    const prevLastDate = new Date(year, month, 0).getDate(); // Last date of the previous month

    monthfield.textContent = months[month];
    datefield.textContent = new Date(year, month, selectedDate).toDateString();

    daysContainer.innerHTML = ""; // Clear previous days

    // Add previous month's days
    for (let i = firstDay - 1; i >= 0; i--) {
        const day = document.createElement("div");
        day.classList.add("prev-date");
        day.textContent = prevLastDate - i;
        daysContainer.appendChild(day);
    }

    // Add current month's days
    for (let i = 1; i <= lastDate; i++) {
        const day = document.createElement("div");
        day.textContent = i;
        if (i === selectedDate && month === date.getMonth() && year === date.getFullYear()) {
            day.classList.add("today");
        }
        day.addEventListener("click", () => {
            selectedDate = i;
            datefield.textContent = new Date(year, month, selectedDate).toDateString();
            updateCalendar();
        });
        daysContainer.appendChild(day);
    }

    // Add next month's days to fill the grid
    const totalDays = daysContainer.children.length;
    for (let i = 1; i <= (42 - totalDays); i++) {
        const day = document.createElement("div");
        day.classList.add("next-days");
        day.textContent = i;
        daysContainer.appendChild(day);
    }
}

// Initial rendering of the calendar
updateCalendar();

next.addEventListener("click", () => {
    month++;
    if (month > 11) {
        month = 0;
        year++;
    }
    selectedDate = 1; // Reset selected date to the first of the new month
    updateCalendar();
});

prev.addEventListener("click", () => {
    month--;
    if (month < 0) {
        month = 11;
        year--;
    }
    selectedDate = 1;
    updateCalendar();
});
document.querySelector("#photo").addEventListener('click',()=>{
    if(document.querySelector("#logout").style.display == "none"){
        document.querySelector("#logout").style.display = "block";
    }
    else{
        document.querySelector("#logout").style.display = "none";
    }
})
document.querySelector("#logout a").addEventListener('click',()=>{
    window.location.href = "/index/index.html";
    
    // var currentDets= {
    //     name : "",
    //     username:"",
    //     email:"",
    //     passwd :""
    // }

    // localStorage.setItem("CurrentLoggedInUser",JSON.stringify(currentDets));
})