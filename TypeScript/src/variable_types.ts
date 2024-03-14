// Variables
/*
Detalles más importante sobre las variables en TypeScript 
    
    Tipos Básicos que puede tener una variable:
         number,     string, 
         boolean,    null, 
         undefined,  symbol, y bigint.

    Tipos Avanzado que puede tener una variable:
        Además TypeScript ofrece tipos más complejos como:
         arrays, tuples, 
         enums, y interfaces.

    Type Annotations:
        Las anotaciones de tipo son opcionales en TypeScript, pero proporcionan una seguridad de tipo que es central para las ventajas del lenguaje.
         Ej: 
         let message: string = "Hello, TypeScript";

    Inferencia de Tipos:
        Cuando asignas un valor a una variable durante su declaración, TypeScript infiere su tipo.
         Ej: 
         let isCompleted = false; (TypeScript infiere que isCompleted es de tipo boolean).

    Any y Unknown:
        any permite que una variable sea de cualquier tipo. Debe usarse con precaución, ya que evita la verificación de tipo.
        
        unknown es similar a any, pero más seguro, ya que requiere verificar el tipo antes de operar con la variable

    Union Types:
        Permiten que una variable sea de uno o de varios tipos.
         Ej: let id: number | string;

    Type Aliases:
        Permite definir un nombre para un tipo o combinación de tipos.
         Ej: type StringOrNumber = string | number;

    Enums
        Son una forma de dar nombres más amigables a conjuntos de valores numéricos.
         Ej: enum Color { Red, Green, Blue }

    Buenas Prácticas
        Evita el uso excesivo de any.
        
        Utiliza anotaciones de tipo cuando TypeScript no puede inferir el tipo.
        
        Prefiere const sobre let donde sea posible para valores que no cambian.

*/

// largest number cam be saparate with unsderscore to make more redable
// Note: en Ts no se tiene que indicar el tipo de la variable como (let sales: number = 123;) ya que Ts detecta el valor de la variable de forma implicita (iferencia de valor).

let sales: number = 123_456_7890    //explicit data type
let str = 'Typescript';             //implicit data type
let is_published = true;

// console.log( typeof sales);
// console.log( typeof str);
// console.log( typeof is_published);



// Variable de tipo any
let flexible: any = 'Hello World!'
flexible = 200
flexible = true

console.log(flexible);


// las variable no inicializada tienen el tipo any. La buenas practicas dicen que se debe evitar el tipo any
let level;
// console.log( typeof level);


// Esto arroja el param como error ya que no se le indica el tipo. Pero se resuleve agregando:  document:any .  Pero por ej: si el la migracion de un code js a ts tenemos cientos de estos casos como se resulve
function render(document:any) {
    console.log(document);
}
// console.log('document');
// console.log(200);


// Se puede hacer una configuaracion en el file de configuracion: ("noImplicitAny": false,) pero esto no se recomienda ya que se pierde el poder de ts. 
    // function render_2(document){
    //     console.log(document);
        
    // }
    // render_2('document')



// Variable de tipo unknown
let variable: unknown = 'Hello World!'
variable = 5.33333
variable = {key : 'value'}
    
// console.log(variable);

// Comprobación de tipos antes de usar la variable
if(typeof variable === 'string')
    console.log(variable.toLocaleUpperCase());
    
if(typeof variable === 'number')
    console.log(variable.toFixed(2));

// Esto causaría un error si se intenta sin comprobar el tipo
// console.log(variable.toLocaleUpperCase());
