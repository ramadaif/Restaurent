import "./style.css";
import loadHomePage from './homepage.js';
import loadMenu from './menu.js';
import loadContact from './contact.js';

const content = document.querySelector("#content");

const clearcontent = () => {
    content.innerHTML = "";
}

const menulink = document.querySelector("#menu-link");
menulink.addEventListener("click", () => {
    clearcontent();
    loadMenu();
});

const homelink = document.querySelector("#home-link");
homelink.addEventListener("click",() =>{
    clearcontent();
    loadHomePage();
})

const contactlink = document.querySelector("#contact-link");
contactlink.addEventListener("click", () =>{
    clearcontent();
    loadContact();
})