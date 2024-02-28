// Math modules
/*

    Los módulos son una forma de organizar y estructurar el código en programas informáticos. Permiten dividir el código en unidades más pequeñas y autónomas, lo que facilita su mantenimiento, reutilización y colaboración entre desarrolladores. Los módulos también ayudan a controlar el alcance de las variables y funciones, evitando así conflictos y colisiones de nombres en el código.

    Hay varias formas de implementar módulos en diferentes lenguajes de programación.

    La diferencia principal entre export y export default en JavaScript radica en cómo son importados en otros archivos.

    Con export, puedes exportar varias funciones, variables, clases, etc., desde un archivo. Cuando importas estas exportaciones en otro archivo, debes importarlas por su nombre específico, entre llaves {}. 
    Renombrar al exportar: También puedes renombrar las variables al exportarlas utilizando la sintaxis export { nombre as nombreNuevo }.

    Con export default, exportas una sola entidad por defecto desde un archivo. Esta entidad puede ser una función, una clase, un objeto o cualquier otro valor. Cuando importas una exportación por defecto, puedes asignarle cualquier nombre que desees.

*/
//# 1
export const sumar = (a, b) => a + b; 

//# 2 
const restart = (a, b) => {
    return a - b;
}
export { restart as restarValues}

//# 3 
let one = 1
let tow = 2
let three = 3
let edad = 30;
export {one, tow, three, edad}

//# 4 
const divide = (a , b) => a / b;
export default divide;