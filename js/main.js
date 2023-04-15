let Dashbord = document.querySelector("#Dashbord");
let links = document.querySelector("#link-dash");
let menu = document.querySelector("#menu")
let aside = document.querySelector("#aside")

Dashbord.onclick = function() {
    links.classList.toggle("ee")
}

menu.onclick = function() {
    aside.classList.toggle("width")
}