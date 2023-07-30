import { createElement } from "./header";

export default function loadContact() {
    const main = document.querySelector("main");
    const container = createElement("div", "", "contact");
    container.classList.add("container");
    main.appendChild(createElement("h2", "Reserve Your Table in the Realm"));
    main.appendChild(createElement("p", "Ready to embark on a culinary adventure? Secure your place at our enchanted table and let our extraordinary dishes whisk you away to lands of wonder."));
    const p1 = createElement("p", "Opening Hours: Every day from ");
    p1.appendChild(createElement("b", "13:00 to 22:00"));
    main.appendChild(p1);
    main.appendChild(createElement("p", "Please note that our hours may change based on celestial alignments or magical events."));
    const p2 = createElement("p", "To make a reservation, send a raven to ");
    p2.appendChild(createElement("b", "123-456-7890"));
    main.appendChild(p2);
    main.appendChild(createElement("p", "For any special requests or magical inquiries, our friendly staff is here to assist you."));
};