/*

    Los módulos son una forma de organizar y estructurar el código en programas informáticos. Permiten dividir el código en unidades más pequeñas y autónomas, lo que facilita su mantenimiento, reutilización y colaboración entre desarrolladores. Los módulos también ayudan a controlar el alcance de las variables y funciones, evitando así conflictos y colisiones de nombres en el código.

    Hay varias formas de implementar módulos en diferentes lenguajes de programación.
    
    Módulos en JavaScript (ES6): A partir de ECMAScript 6 (también conocido como ES6), JavaScript incorporó un sistema de módulos nativo. Este sistema utiliza las palabras clave import y export para importar y exportar funcionalidades entre archivos JavaScript. 
*/

import { sumar } from "./math.js";
import { restarValues } from "./math.js";
import { one, tow, three } from "./math.js";
import divide from "./math.js";
import divideNumeros from "./math.js";
import {userData} from './strings.js'

// # 1 
// console.log(sumar(2, 3));
let sumando = sumar(3, 3)
// console.log(sumando);

// # 2
let restando = restarValues(10, 5)
// console.log(restando);

// # 3 
let total = one + tow + three;
// console.log(total);

// # 4 
let dividiendo = divide(100, 4);
// console.log(dividiendo);

let dividiendo2 = divideNumeros(200, 2)
console.log(dividiendo2);

// # 5
let user = userData()
console.log(user);

