function greeting() {
    let userName = 'Ana';
    console.log(userName);

    if (userName === 'Ana') {
        console.log(`Hello ${userName}!`)
    }
}

greeting();
console.log(userName); // No se ejecutará ya que la variable esta definida dentro de la function y a esta misma se le denomina function Scope
