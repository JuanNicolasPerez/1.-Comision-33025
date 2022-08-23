const toggle = document.querySelector(".toggle")
const navmenu = document.querySelector(".nav_menu")

toggle.addEventListener("click", () =>{
    navmenu.classList.toggle("nav_menu_visible")
})