var firstName; // Undefined
firstName = 'David';
console.log(firstName);

var lastName = 'Oliva'; // Declarar / Asignar
lastName = 'Patiño'; // Reasignar
console.log(lastName);

var secondName = 'Alex'; // Declarar / Asignar 
var secondName = 'Alexx'; // Redeclarar // Reasignar
console.log(secondName);

// Let 
let fruit = 'Apple';  // Declara y asigna
fruit = 'Kiwi'; //Reasignar
console.log(fruit); 

// let fruit = 'Banana'; No se puede porque ya estan declaradas y con let no es posible REDECLARAR
// console.log(fruit);  

// Const 

const animal = 'dog'; // Declara y asigna
// animal = 'cat'; // Reasignado
// console.log(animal); NO se puede reasignar si quiere con const, mucho menos reasignar

const vehicles = [];
vehicles.push('car');
console.log(vehicles);

vehicles.pop();
console.log(vehicles);

// En este caso los metodos van directo sobre el arreglo y no hacía la variable como tal