import { createElement } from "./header";
import LembasBread from "./lembas_bread.jpeg";
import MushroomScone from "./mushroom_scone.jpeg";
import RoastMutton from "./roast_mutton.jpeg";
import TurkishDelight from "./turkish_delight.jpeg";
import Butterbeer from "./butterbeer.jpeg";
import RomulanAle from "./romulan_ale.jpeg";
import GoldenSnitchCocktail from "./snitch_cocktail.jpeg";
import PanGalacticGargleBlaster from "./pan_galactic_gargle_blaster.jpeg";

export default function loadMenu() {
    const main = document.querySelector("main");
    main.appendChild(createElement("h2", "Explore Our Mythical Menu"));
    main.appendChild(createElement("p", "Indulge in the flavors of your favorite fantasy worlds with our diverse and magical menu."));
    main.appendChild(createElement("p", "From Elven Lembas Bread to savory Hobbit fare, each dish is meticulously crafted to transport you to distant realms."));
    main.appendChild(createElement("p", "We've conjured up a delightful selection of beverages too, including Pan Galactic Gargle Blasters and the Golden Snitch-inspired cocktails."));
    main.appendChild(createElement("p", "Embark on a culinary quest and explore our fantastical offerings."));
    const dishes = createElement("div", "", "dishes");
    dishes.appendChild(createDish(LembasBread, "Lembas Bread"));
    dishes.appendChild(createDish(MushroomScone, "Mushroom Scone"));
    dishes.appendChild(createDish(RoastMutton, "Roast Mutton"));
    dishes.appendChild(createDish(TurkishDelight, "The Turkish Delight"));
    dishes.appendChild(createDish(Butterbeer, "Butterbear"));
    dishes.appendChild(createDish(RomulanAle, "Romulan Ale"));
    dishes.appendChild(createDish(GoldenSnitchCocktail, "Golden Snitch Cocktail"));
    dishes.appendChild(createDish(PanGalacticGargleBlaster, "Pan Galactic Gargle Blaster"));
    main.appendChild(dishes);
};

function createDish(src, name) {
    const dish = new Image();
    dish.src = src;
    dish.alt = name;
    const container = createElement("div", "", "dish");
    container.appendChild(dish);
    container.appendChild(createElement("p", name));
    return container;
}