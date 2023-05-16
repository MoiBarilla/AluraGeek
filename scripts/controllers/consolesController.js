import { crud } from "../../services/productService.js";
import { readProduct } from "./readProductController.js";

crud.readProductConsole()
.then((res) => {
    return readProduct.createCardConsole(res);
});