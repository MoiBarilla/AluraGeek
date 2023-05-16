function card(data, cardContainer, cardContent) {

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

const createCardFunko = (res) => {
    let  cardBody = document.querySelector(".cards__server__container--funkos");
    let content = ``;

    card(res, cardBody, content);
};

const createCardConsole = (res) => {
    let  cardBody = document.querySelector(".cards__server__container--consoles");
    let content = ``;

    card(res, cardBody, content);
};

const createCardGame = (res) => {
    let  cardBody = document.querySelector(".cards__server__container--games");
    let content = ``;

    card(res, cardBody, content);
};

export const readProduct = {
    // Sended To ConsolesContoller.js
    card,
    // Sended To productController.js
    createCardFunko,
    createCardConsole,
    createCardGame,
}