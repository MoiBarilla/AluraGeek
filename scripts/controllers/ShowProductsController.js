import { crud } from "../../services/productService.js";

function showProductscard(data, cardContainer, cardContent) {

    data.forEach(({ url, name, price, id})=> {
        cardContent += `
    <div class="card__server filter-card">
        <div class="wishlist"></div>
        <img class="card__img__server" src=${url}>
        <span class="card__name__server filter-name">${name}</span>
        <span class="card__price__server">${price}</span>
        <a class="card__link route" href=../screens/product.html?id=${id}>Ver Producto</a>
    </div>
    `;
    });

    cardContainer.innerHTML = cardContent;
    return cardContainer;
}

// Cards for showProductsController.Html 

let showCards = (res) => {
    let  cardBody = document.querySelector(".show__products__container--server");
    let content = ``;

    showProductscard(res, cardBody, content);
};

crud.readProductFunko()
    .then((res) =>  { return showCards(res) } );

crud.readProductConsole()
.then((res) => { return showCards(res) } );

crud.readProductGame()
    .then((res) => { return showCards(res) } );
