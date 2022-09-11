const menuList = document.getElementById("menuList");
const navToggle = document.getElementsByClassName("menu-icon");
const joyStick = document.getElementsByClassName("col-2");
const content = document.querySelector(".col-1");

navToggle[0].onclick = function() {
    showMenu()
};



menuList.style.maxHeight = "0px";

function showMenu(){

    if (menuList.style.maxHeight == "0px"){
        menuList.style.maxHeight = "200px";
        joyStick[0].classList.add("move-down");
        content.classList.add("move-down");


    }else{
        menuList.style.maxHeight = "0px";
        joyStick[0].classList.remove("move-down");
        content.classList.remove("move-down");
    }

    



}