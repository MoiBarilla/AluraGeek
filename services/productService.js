//ABRIR (MÉTODO, URL)
// CRUD   - MÉTODOS HTTP
//Create - Post ✔
//Read   - Get ✔
//Update - Put/Patch
//Delete - Delete ✔

const funkoApi = `http://localhost:3000/funkos`;

const consoleApi = `http://localhost:3000/consoles`;

const gameApi = `http://localhost:3000/games`;

const createProductFunko = (url, name, price, category, description) => {
    return fetch(funkoApi, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ url, name, price, category, description, id: uuid.v4() })
    });
}

const createProductConsole = (url, name, price, category, description) => {
    return fetch(consoleApi, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ url, name, price, category, description, id: uuid.v4() })
    });
}

const createProductGame = (url, name, price, category, description) => {
    return fetch(gameApi, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ url, name, price, category, description, id: uuid.v4() })
    });
}

const readProductFunko = async () => {
    const response = await fetch(funkoApi);
    return await response.json();
}
const readProductConsole = async () => {
    const response = await fetch(consoleApi);
    return await response.json();
}
const readProductGame = async () => {
    const response = await fetch(gameApi);
    return await response.json();
}

const detailProductFunko = (id) => {
    return fetch(`http://localhost:3000/funkos/?id=${id}`)
        .then(response => response.json())
        .catch((err) => console.log('Ocurrió un Error'))

}
const detailProductConsole = (id) => {
    return fetch(`http://localhost:3000/consoles/?id=${id}`)
        .then(response => response.json())
        .catch((err) => console.log('Ocurrió un Error'))

}
const detailProductGame = (id) => {
    return fetch(`http://localhost:3000/games/?id=${id}`)
        .then(response => response.json())
        .catch((err) => console.log('Ocurrió un Error'))
}
const updateProductFunko = (url, name, price, category, description, id) => {
    return fetch(`http://localhost:3000/funkos/${id}`, {
        method: 'PUT',
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({ url, name, price, category, description })
    })
        .then(response => response)
        .catch((err) => console.log('Ocurrió un Error'))
}

const updateProductConsole = (url, name, price, category, description, id) => {
    return fetch(`http://localhost:3000/consoles/${id}`, {
        method: 'PUT',
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({ url, name, price, category, description, id })
    })
        .then(response => response)
        .catch((err) => console.log('Ocurrió un Error'))
}
const updateProductGame = (url, name, price,category, description, id) => {
    return fetch(`http://localhost:3000/games/${id}`, {
        method: 'PUT',
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({ url, name, price, category, description })
    })
        .then(response => response)
        .catch((err) => console.log('Ocurrió un Error'))
}

const deleteProductFunko = (id) => {
    return fetch(`http://localhost:3000/funkos/${id}`, {
        method: "DELETE"
    });
}
const deleteProductConsole = (id) => {
    return fetch(`http://localhost:3000/consoles/${id}`, {
        method: "DELETE"
    });
}
const deleteProductGame = (id) => {
    return fetch(`http://localhost:3000/games/${id}`, {
        method: "DELETE"
    });
}

export const crud = {
    // For formController.js
    createProductFunko,
    createProductConsole,
    createProductGame,

    // For readProductController.js
    readProductFunko,
    readProductConsole,
    readProductGame,

    // For editProductController.js
    detailProductFunko,
    detailProductConsole,
    detailProductGame,
    updateProductFunko,
    updateProductConsole,
    updateProductGame,

    // For manageProductController.js
    deleteProductFunko,
    deleteProductConsole,
    deleteProductGame
}