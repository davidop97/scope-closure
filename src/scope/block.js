// Todo lo que esta dentro de llaves, son bloques
function fruits() {
    if (true) {
        var fruit1 = 'Apple'; // Function Scope
        let fruit2 = 'Kiwi'; // Block Scope
        const fruit3 = 'Banana'; // Block Scope
        console.log(fruit2);
        console.log(fruit3); // Tienen que estar dentro del if porque sino no funcionaría, si sale y a pesar de estar dentro de la function, no funcionaría para las frutas dos y tres, debido a las nuevas actualizaciones con let y const EcmastScript 6
    }
    console.log(fruit1);
}

fruits();
