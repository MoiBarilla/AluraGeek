import { crud } from "../../services/productService.js";

function card(data, cardContainer, cards) {

    data.forEach(({ url, name, price, id})=> {

    cards = document.createElement("div");
    cards.classList.add("card" , "filter-card");

    let aEdit = document.createElement("a");
    aEdit.classList.add("edit__product");
    aEdit.setAttribute("href", `../screens/editProduct.html?id=${id}`);

    let edit = document.createElement("img");
    edit.classList.add("edit--icon");
    edit.setAttribute("src", "../assets/img/edit.png");
    edit.setAttribute("alt", "Pencil Icon");

    aEdit.appendChild(edit);
    cards.appendChild(aEdit);

    let trash = document.createElement("div");
    trash.classList.add("delete__product");
    trash.setAttribute("id", `${id}`);
    trash.addEventListener("click", deleteItem);

    let trashImg = document.createElement("img");
    trashImg.classList.add("delete--icon");
    trashImg.setAttribute("src", "../assets/img/delete.png");
    trashImg.setAttribute("alt", "Trash Icon");

    trash.appendChild(trashImg);
    cards.appendChild(trash);

    let mainImg = document.createElement("img");
    mainImg.classList.add("card__img");
    mainImg.setAttribute("src", `${url}`);
    mainImg.setAttribute("alt", "Batman");

    cards.appendChild(mainImg);

    let nameSpan = document.createElement("span");
    nameSpan.classList.add("card__name", "filter-name");
    nameSpan.innerText = `${name}`;

    cards.appendChild(nameSpan);

    let priceSpan = document.createElement("span");
    priceSpan.classList.add("card__price");
    priceSpan.innerText = `${price}`;

    cards.appendChild(priceSpan);

    let aMain = document.createElement("a");
    aMain.classList.add("card__link");
    aMain.setAttribute("href", `/screens/producto.html?id=${id}`);
    cardContainer.appendChild(cards);

    function deleteItem() {
        const Myid = trash.id

        crud.deleteProductFunko(Myid)
        .then(()=> {})
        crud.deleteProductConsole(Myid)
        .then(()=> {})
        crud.deleteProductGame(Myid)
        .then(()=> {})
    }

});

return cardContainer;
}

const createCards = (res) => {
    let  cardBody = document.querySelector(".cards__container--server");
    let content = "";

    card(res, cardBody, content);
};

// Cards for manageProducst.Html 
crud.readProductFunko()
.then((res) => {
    return createCards(res);
});
crud.readProductConsole()
    .then((res) => {
        return createCards(res);
    });
crud.readProductGame()
    .then((res) => {
        return createCards(res);
    });
