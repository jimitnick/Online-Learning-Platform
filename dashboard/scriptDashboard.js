const date = new Date();
const months  = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const monthfield = document.querySelector("#calender #month #date h2");
const datefield = document.querySelector("#calender #month #date p");
const next = document.querySelector("#calender #month #next");
const prev = document.querySelector("#calender #month #prev");
const logout = document.querySelector("#main #three #login #logout");
const user = document.querySelector("#main #three #login #photo i");
var month = date.getMonth(); 
monthfield.textContent = months[month];
datefield.textContent = date.toDateString();
next.addEventListener('click',()=>{
    month ++;
    if (month > months.length){
        month = months.length-1;
    }
    monthfield.textContent = months[month];
    console.log(month);
    datefield.textContent = date.toDateString();
})  
prev.addEventListener('click',()=>{
    month --;
    if (month < 0){
        month = 0;
    }
    monthfield.textContent = months[month];
    console.log(month)
})
user.addEventListener('click',()=>{
    if (logout.style.display == "none"){
        logout.style.display = "flex";
    }
    else{
        logout.style.display = "none";
    }
})
