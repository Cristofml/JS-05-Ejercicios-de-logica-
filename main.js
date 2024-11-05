function perfilUsuario() {
    const nombreUsuario = prompt("Ingrese su nombre de usuario:");
    const edad = prompt("Ingrese su edad:");
    const peliculas = prompt("Ingrese sus películas favoritas, separadas por comas:").split(',');

    console.log(`Nombre de usuario: ${nombreUsuario}`);
    console.log(`Edad: ${edad}`);
    peliculas.forEach(pelicula => {
        console.log(`La película ${pelicula.trim()} es una de mis favoritas`);
    });
}

perfilUsuario();

function numeroMasAlto() {
    const numeros = [];
    for (let i = 0; i < 10; i++) {
        numeros.push(Number(prompt("Ingrese un número:")));
    }
    const numeroMaximo = Math.max(...numeros);
    console.log(`El número más alto es: ${numeroMaximo}`);
}

numeroMasAlto();

function configurarAlarma() {
    const segundos = Number(prompt("Ingrese el número de segundos hasta la alarma:"));
    const mensaje = prompt("Ingrese el mensaje que desea mostrar cuando el tiempo haya pasado:");

    setTimeout(() => {
        console.log(`Después de ${segundos} segundos: ${mensaje}`);
    }, segundos * 1000);
}

configurarAlarma();

function esPalindromo() {
    const entrada = prompt("Ingrese una palabra o frase:");
    const entradaLimpia = entrada.toLowerCase().replace(/[^a-z0-9áéíóúüñ]/g, '');
    const entradaInvertida = entradaLimpia.split('').reverse().join('');

    if (entradaLimpia === entradaInvertida) {
        console.log("La entrada es un palíndromo.");
    } else {
        console.log("La entrada no es un palíndromo.");
    }
}

esPalindromo();

function factorial(n) {
    if (n <= 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

const numero = Number(prompt("Ingrese un número:"));
console.log(`El factorial de ${numero} es ${factorial(numero)}`);

let matrizMultidimensional = [1, [2, 3, [4, 5, [6]]]];

function aplanarMatriz(arr) {
    return arr.reduce((acc, val) => Array.isArray(val) ? acc.concat(aplanarMatriz(val)) : acc.concat(val), []);
}

console.log(aplanarMatriz(matrizMultidimensional));
