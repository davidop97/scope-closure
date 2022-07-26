// Variables 

var a; // Declarando 
var b = 'b'; //Declaramos / asignamos
b= 'bb'; // Reasignación
var a = 'aa'; // Redeclaración

// Global Scope
var fruit = 'Apple'; //global
console.log(fruit);
function bestFruit() {
    console.log(fruit);
}

bestFruit();

function countries() {
    country = 'Colombia'; //global ya que solo se asigna y no se declara la variable
    console.log(country);
}

countries();
console.log(country);