const hamburgerIcon = document.querySelector(".hamburger-icon");
const navbar = document.querySelector("#navbar");
const links = document.querySelectorAll(".nav-link");



hamburgerIcon.addEventListener("click", () => {
    if(navbar.style.display == "block"){
        navbar.style.display = "none";
    }else{
        navbar.style.display = "block";
    }
});


let ancho = window.innerWidth;

links.forEach(element =>{
    element.addEventListener("click", () =>{
        if(ancho <= 599){
            navbar.style.display = "none";
        }
        

    })
})
