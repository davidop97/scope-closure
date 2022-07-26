const myGlobal = 0;

function myFunction() {
    const myNumber = 1;
    console.log(myGlobal);

    function parent() { // function interna 
        const inner = 2;
        console.log(myNumber, myGlobal);

        function child() {
            console.log(inner, myNumber, myGlobal); // Un Closure es cuando una función accede a una variable fuera de su contexto
            
        }

        return child();
    }

    return parent();
}

myFunction();

// El ambito léxico significa que la accesibilidad de las variables esta determinada por la posición de las mismas dentro de los ambitos anidados