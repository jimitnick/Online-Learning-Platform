const courses = document.querySelectorAll(".subjects");
const contents = document.querySelectorAll(".courseContent");
courses.forEach((course)=>{
    course.addEventListener('click',()=>{
        contents.forEach((content)=>{
            if (content.classList[1] == course.classList[1]){
                content.style.display = "flex";
                document.querySelector(".contentBlur").style.display = "flex";
                console.log(content.classList[1]);
            }
        })
    })
})
document.querySelectorAll(".courseContent #top #icon i").forEach((icons)=>{
    icons.addEventListener("click",()=>{
        contents.forEach((content)=>{
            content.style.display = "none";
            document.querySelector(".contentBlur").style.display= "none";
        })
    })
})
