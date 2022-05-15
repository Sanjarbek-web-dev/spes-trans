"use strict";
window.addEventListener('DOMContentLoaded', () => {
const OpenMenu = document.querySelector(".toggle-btn"),
    CloseMenu = document.querySelector(".closeBtn"),
    alertClose = document.querySelector(".alert-close"),
    alertBox = document.querySelector(".alert-save"),
    submit = document.querySelector(".submit"),
    form = document.querySelector('form'),
    yourName = document.querySelector("#yourName"),
    yourNumber = document.querySelector("#yourNumber"),
    navbarItems = document.querySelector(".navbar-links");

        OpenMenu.addEventListener('click', (e)=> {
            navbarItems.style.top = 0;
            document.body.style.overflow = 'hidden';
        })
        CloseMenu.addEventListener('click', (e)=> {
            navbarItems.style.top = '-100%';
            document.body.style.overflow = 'scroll';
        })

        form.addEventListener("submit", (e) => {
            if (yourName.value === "" || yourName.value == null) {
                alert("Please enter your name");
            } else {
                ""
            }
            if (yourNumber.value === "" || yourNumber.value == null) {
                alert("Please enter your number");
            }else {
                ""
            } 
            e.preventDefault();
        });
        submit.addEventListener("click", (e) => {
            if(yourName.value === "" || yourNumber.value === ""){
                alertBox.style.display = "none"
            }else{
                alertBox.style.display = "block";
                document.body.style.overflow = 'hidden';
            }
            e.preventDefault();
        });
alertClose.addEventListener("click", (e) => {
    alertBox.style.display = "none";
    document.body.style.overflow = 'scroll';
});

})


