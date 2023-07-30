import HeroImg from "./fantasy_meal.jpeg";
import { createElement } from "./header";

export default function loadHome() {
    const content = document.getElementById("content");
    const main = document.querySelector("main");
    
    const hero_text = createElement("div", "", "hero-text");
    hero_text.appendChild(createElement("h1", "Feast on Culinary Magic from Fantasy Worlds"));
    hero_text.appendChild(createElement("p", "We bring the fantastical flavors of your favorite fictional worlds to life."));
    hero_text.appendChild(createElement("p", "From the pages of beloved books to the silver screen, immerse yourself in a dining experience like no other!"));
    hero_text.appendChild(createElement("button", "Book Now!", "cta"));
    const hero_container = createElement("div", "", "hero");
    hero_container.classList.add("container");
    hero_container.appendChild(hero_text);
    
    const img = new Image();
    img.src = HeroImg;
    img.setAttribute("alt", "A dish full of food that looks like it came from a fantasy book");
    const hero_img = createElement("div", "", "hero-image");
    hero_img.appendChild(img);
    hero_container.appendChild(hero_img);

    main.appendChild(hero_container);

    const about_container = createElement("div", "", "about");
    about_container.classList.add("container");
    about_container.appendChild(createElement("h2", "A Realm of Culinary Wonder"));
    about_container.appendChild(createElement("p", "At Fantastic Feasts, food is an enchanting journey into the heart of fantasy realms."));
    about_container.appendChild(createElement("p", "Our skilled chefs draw inspiration from legendary tales and mythic sagas to craft dishes that ignite your imagination and satisfy your cravings."));
    about_container.appendChild(createElement("p", "Embark on an epicurean adventure with us as we turn cherished literary and cinematic feasts into reality."));
    main.appendChild(about_container);

    content.appendChild(main);
};