/*
    Módulos en CommonJS (Node.js): Node.js utiliza un sistema de módulos llamado CommonJS. En CommonJS, se utilizan las funciones require() y module.exports o exports para importar y exportar funcionalidades entre archivos.
*/
// 2  Expotar en un obj
let userName = 'Mario';

function saludar (a) {
    return a
}

const userGreet = () => {
    return `Hello ${saludar(`${userName}`)}`
}

const userGreet2 = () => {
    return `Hello ${saludar(`${userName} number 2`)}`
}

let firstName = 'Maria Lola';

module.exports = {
    user: userGreet,
    user2: userGreet2

}

const nombre = 'Juan';
exports.nombre = 'Juan';
exports.firstName = 'Maria Lola';

