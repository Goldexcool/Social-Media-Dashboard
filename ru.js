const dark = document.getElementById("dark")
const lightmode = document.getElementById("lightmode")


AOS.init();
toggleOn = () =>{
    document.body.classList.toggle("darkTheme")
    dark.classList.toggle("dark")
    lightmode.innerHTML = "Dark Mode"

}