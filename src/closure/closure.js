function greeting() {
    let username = 'David';

    function displayUserName() {
        return `Hello ${username}`;
    }
    return displayUserName;
}

const g = greeting();
console.log(g); //Entrega la funcion
console.log(g()); // Se ejecuta la función como tal