import readline from 'readline-sync';

const nombre = readline.question("¿Cuál es tu nombre? ");
const edadTexto = readline.question("¿Cuál es tu edad? ");
const activoTexto = readline.question("¿Estás activo? (true/false) ");

const edad = Number(edadTexto);
const activo = activoTexto === "true";

console.log(`Hola, ${nombre}! Tienes ${edad} años y estás ${activo ? "activo" : "inactivo"}.`);

console.log('Tipo de nombre: ' + typeof nombre);
console.log('Tipo de edad: ' + typeof edad);
console.log('Tipo de activo: ' + typeof activo);

let juegoFav = readline.question('¿Cuál es tu juego favorito? ');
let actividades = readline.question('¿Qué actividades realizas durante el día? ');

console.log(`Tu juego favorito es ${juegoFav}`);
console.log(`Las actividades que realizas son: ${actividades}`);
console.log('Tipo de juego favorito: ' + typeof juegoFav);
console.log('Tipo de actividades diarias: ' + typeof actividades);