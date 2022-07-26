// Lo que entiende javaScript es que declara pi con Var 
// pi = 3.1416;
// console.log(pi);

//No muestra error

// USANDO EL MODO ESTRICTO O STRICT MODE

// 'use strict';
// pi = 3.1416;
// console.log(pi);

// En este caso NO se ejecutará el código porque Pi no esta definido

function myFunction() {
    'use strict'
    return pi = 3.1416;
}

console.log(myFunction());

// EN este caso nuevamente NO se ejecutará el código