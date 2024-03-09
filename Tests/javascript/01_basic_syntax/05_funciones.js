
//#1 Declaración de Función (Function Declaration)
//======================================

// function saludar(name, lastName) {
    //     name = 'Mario';
    //     lastName = 'Doe';
    
    //     // console.log('Hola' +' '+ name +' '+ lastName);
    
    //     return 'Hola' +' '+ name +' '+ lastName;
    // };
    // // saludar();
    // console.log(saludar());
    
    
    function saludar(name, lastName) {
        
        // return 'Hola' +' '+ name +' '+ lastName;
        return `Hola ${name} ${lastName}`;
    };
    // saludar();
    // console.log(saludar('Maria', 'Lopez'));
    
    
    
// #2 Expresión de Función (Function Expression)
//======================================

const despedida = function(name , lastName ) {

    return `Adios ${name} ${lastName}!`
} 
// console.log(despedida('Mario', 'Lopez'));




// Funciones Flecha (Arrow Functions)
//======================================
const sumar = (a, b) => {
    let movalue = 'value';
    return a + b;
}
// console.log(sumar(2, 3));


const sumar2 = (a, b) => a + b; 
// console.log(sumar2(2, 3));

const myName = name => name;
console.log(myName('Mario'));







