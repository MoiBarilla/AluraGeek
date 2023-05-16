import { crud } from "../../services/productService.js";
const form = document.querySelector("[data-form-edit]");

const urlSite = new URL(window.location);
const myId = urlSite.searchParams.get("id");

let staticUrl = document.querySelector("[data-urlEdit]");
let staticCategory = document.querySelector("[data-categoryEdit]");
let staticName = document.querySelector("[data-nameEdit]");
let staticPrice = document.querySelector("[data-priceEdit]");
let staticDescription = document.querySelector("[data-descriptionEdit]");

const getInfo = (data) => {
    if (myId == null) {
        window.location.href = "/screens/error.html"
    }
    try {
        data.forEach(({ url, name, price, category, description, id }) => {
            if (myId == id) {
                staticUrl.value = url;
                staticCategory.value = category;
                staticName.value = name;
                staticPrice.value = price;
                staticDescription.value = description;
            }
        });

    } catch (err) {
        throw new Error();
        window.location.href = '/screens/error.html'

        console.log('Catch Error', err);
    }
    return;
}

crud.detailProductFunko(myId)
    .then(response => getInfo(response))
    .catch((err) => console.log("An Error had Happened"));

crud.detailProductConsole(myId)
    .then(response => getInfo(response))
    .catch((err) => console.log("An Error had Happened"));

crud.detailProductGame(myId)
    .then(response => getInfo(response))
    .catch((err) => console.log("An Error had Happened"));


form.addEventListener("submit", (e) => {
    e.preventDefault();

    staticUrl = staticUrl.value;
    staticCategory = staticCategory.value;
    staticName = staticName.value;
    staticPrice = staticPrice.value;
    staticDescription = staticDescription.value;

    switch (staticCategory) {
        case "funkos":
            crud.updateProductFunko(staticUrl, staticName, staticPrice, staticCategory, staticDescription, myId)
            .then(() => { window.location.href = "/screens/error.html"; })
            .catch((err) => console.log("An Error had Happened"));
            break;
        case "consolas":
        crud.updateProductConsole(staticUrl, staticName, staticPrice, staticCategory, staticDescription, myId)
        .then(() => { window.location.href = "/screens/error.html"; })
        .catch((err) => console.log("An Error had Happened"));
            break;
        case "juegos":
            crud.updateProductGame(staticUrl, staticName, staticPrice, staticCategory, staticDescription, myId)
            .then(() => { window.location.href = "/screens/error.html"; })
            .catch((err) => console.log("An Error had Happened"));
            break;
        default:
            break;
    }

});
