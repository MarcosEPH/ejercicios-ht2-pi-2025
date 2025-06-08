import readline from 'readline-sync'

// Paso 1: Solicitar fecha de nacimiento
const fechaNacimientoTexto = readline.question(`¿Cual es tu fecha de nacimiento? (Formato YYYY-MM-DD.)`)
const anioNacimiento = readline.question(`Año de nacimiento:`);
const anioActual = readline.question(`Año actual:`);
const edad = anioActual - anioNacimiento;

// Paso 2: Evaluar grupo etario
if (edad <= 12 ) {
    console.log(`Eres un niño`)
} else if (edad >= 120 && edad <= 17) {
   console.log(`Eres un adolecente`);
} else if (edad >= 18 && edad <= 64) {
   console.log(`Eres un adulto`)
} else  {
console.log(`Eres un adulto mayor`)
}

// Paso 3: Solicitar nota del examen
const nota = readline.question(`Ingrese su nota de examen (0 - 100):`)

if (nota >= 90) {
   console.log(`Tu calificacion es: "A"`)
 } else if (nota >= 80 && nota <= 89) {
   console.log(`Tu calificacion es: "B" `)
 } else if (nota >= 70 && nota <= 79) {
   console.log(`Tu calificacion es: "C"`)
 } else if (nota >= 60 && nota <= 69) {
   console.log(`Tu calificacion es: "D"`)
 }
  else {
    console.log(`Tu calificacion es: "F"`)
  }
// Paso 4: Evaluar calificación con else if
