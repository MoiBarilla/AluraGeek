import { crud } from "../../services/productService.js";
import { readProduct } from "./readProductController.js";

crud.readProductFunko()
    .then((res) => {
        return readProduct.createCardFunko(res);
    });

crud.readProductConsole()
.then((res) => {
    return readProduct.createCardConsole(res);
});
crud.readProductGame()
    .then((res) => {
        return readProduct.createCardGame(res);
    });
