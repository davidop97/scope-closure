// var nameOfDog; Es lo que hace el Hoisting por defecto, eleva la declara y le da un valor de UNDEFINED, a pesar de que uno esperaría a que aparezca un error

// console.log(nameOfDog);
// var nameOfDog = 'Rocket';
// console.log(nameOfDog);

// var Rocket; Se eleveo y se le asigna y le da un valor de UNDEFINED
// La funcion es elevada y luego se ejecuta
nameOfDog();

function nameOfDog() {
    console.log(`El mejor perrito es ${Rocket}`)
}

var Rocket = 'Rocketcito'
