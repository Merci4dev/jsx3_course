
let userName = 'Mario';

function saludar(a) {
    return a;
}

const userGreet = () => {
    return `Hello ${saludar(`${userName}`)}`
}

const userGreet2 = () => {
    return `Hello ${saludar(`${userName} user2`)}`
}

module.exports = {
    user: userGreet,
    user2: userGreet2,
}

