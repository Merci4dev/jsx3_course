/*
    Los módulos son una forma de organizar y estructurar el código en programas informáticos. Permiten dividir el código en unidades más pequeñas y autónomas, lo que facilita su mantenimiento, reutilización y colaboración entre desarrolladores. Los módulos también ayudan a controlar el alcance de las variables y funciones, evitando así conflictos y colisiones de nombres en el código.

    Hay varias formas de implementar módulos en diferentes lenguajes de programación.
*/

const userGreet = require('./user_greeter.js')

console.log(userGreet.user());
console.log(userGreet.user2())