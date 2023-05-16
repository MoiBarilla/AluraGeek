import { crud } from "../../services/productService.js";
const showProduct = (res) => {
    const productContainer = document.querySelector(".main__product");
    let queryString = window.location.search;
    let urlParams = new URLSearchParams(queryString);
    let myId = urlParams.get("id");


    let funkoSingle = document.querySelector(".funko--single")
    let consoleSingle = document.querySelector(".console--single")
    let gameSingle = document.querySelector(".game--single")

    res.forEach(({ url, name, price, category, description, id }) => {
        if (myId == id) {

            // Validation to take into account what to show in the window 
            // depending on the category of the main product
            switch (category) {
                case "funkos":
                    funkoSingle.classList.remove("none");
                    funkoSingle.classList.add("flex");
                    consoleSingle.classList.add("none");
                    gameSingle.classList.add("none");
                    break;

                case "juegos":
                    gameSingle.classList.remove("none");
                    gameSingle.classList.add("flex");
                    funkoSingle.classList.add("none");
                    consoleSingle.classList.add("none");
                    break;

                case "consolas":
                    consoleSingle.classList.remove("none");
                    consoleSingle.classList.add("flex");
                    funkoSingle.classList.add("none");
                    gameSingle.classList.add("none");
                    break;

                default:
                    break;
            }

            let product = `
            <div class="product__container">
                <div class="product__img">
                    <img class="product__img--item" src=${url} alt="Proct Picture">
                </div>
                <div class="product__description--container">
                    <h1 class="product__title">${name}</h1>
                    <span class="product__price">${price}</span>
                    <span class="product__description">${description}</span>
                </div>
            </div>
        `
            productContainer.innerHTML = product;
        }
    });
    return productContainer;

}

crud.readProductFunko()
    .then(res => showProduct(res));

crud.readProductConsole()
    .then(res => showProduct(res));

crud.readProductGame()
    .then(res => showProduct(res));