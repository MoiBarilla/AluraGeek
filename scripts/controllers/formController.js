import { crud } from "../../services/productService.js";

const form = document.querySelector("[data-form]");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const url = document.querySelector("[data-url]").value;
    const category = document.querySelector("[data-category]").value;
    const name = document.querySelector("[data-name]").value;
    const price = document.querySelector("[data-price]").value;
    const description = document.querySelector("[data-description]").value;

    const validator = (url.length > 3 && category.length > 3 && name.length > 3 && price.length > 3 && description.length > 3);

    if (validator) {
        switch (category) {
            case "funkos":
                crud.createProductFunko(url, name, price, category, description)
                    .then(() => {
                        window.location.href = "/screens/success.html";
                    })
                    .catch((err) => console.log("An Error had Happened"));
                break;

            case "consoles":
                crud.createProductConsole(url, name, price, category, description)
                    .then(() => {
                        window.location.href = "/screens/success.html";
                    })
                    .catch((err) => console.log("An Error had Happened"));
                break;

            case "games":
                crud.createProductGame(url, name, price, category, description)
                    .then(() => {
                        window.location.href = "/screens/success.html";
                    })
                    .catch((err) => console.log("An Error had Happened"));
                break;

            default:
                break;
        }
    }
});
