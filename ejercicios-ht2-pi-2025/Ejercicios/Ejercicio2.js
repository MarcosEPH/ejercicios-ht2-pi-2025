import readline from 'readline-sync'

// Paso 1: Solicitar precio y descuentos
const precioTexto = readline.question("¿Cuál es el precio del producto? ");
const descuentoTexto = readline.question("¿cual es el descuento total?");

// Paso 2: Convertir a número y calcular precio final
const precio = parseFloat(precioTexto);
const descuento = parseFloat(descuentoTexto);
const total = precio - (precio * descuento / 100);

console.log(`El precio total es Q${total}`);

// Paso 4: Solicitar estatura
const estaturaTexto = readline.question("Ingrese su estatura en centímetros: ")
const estatura = parseInt(estaturaTexto)

// Paso 5: Verificar si puede subirse al juego
if (estatura >= 120 && estatura <= 200) {
  console.log("Puede subirse al juego mecánico.")
} else {
  console.log("No puede subirse al juego mecánico.")
}
