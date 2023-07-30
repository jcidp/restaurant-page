import "./style.css";
import { loadHeader } from "./header";
import loadHome from "./home";
import loadContact from "./contact";
import loadMenu from "./menu";

const listenerController = (() => {
    let current_page = "home";

    let home;
    let contact;
    let menu;

    const setCurrentPage = (page) => {
        current_page = page;
    };

    const setListeners = () => {
        home = document.getElementById("home");
        contact = document.getElementById("contact");
        menu = document.getElementById("menu");
        home.addEventListener("click", eventHandler);
        contact.addEventListener("click", eventHandler);
        menu.addEventListener("click", eventHandler);
    }

    const eventHandler = (e) => {
        e.preventDefault();
        let selection = e.target.id;
        console.log(selection);
        document.querySelector("main").innerHTML = "";
        home.classList.remove("current-tab");
        contact.classList.remove("current-tab");
        menu.classList.remove("current-tab");
        switch (selection) {
            case "home":
                home.classList.add("current-tab");
                loadHome();
                break;
            case "contact":
                contact.classList.add("current-tab");
                loadContact();
                break;
            case "menu":
                menu.classList.add("current-tab");
                loadMenu();
                break;
        }
    }

    return {
        setListeners
    }
})();

const initialLoad = () => {
    loadHeader();
    loadHome();
    listenerController.setListeners();
};

initialLoad();