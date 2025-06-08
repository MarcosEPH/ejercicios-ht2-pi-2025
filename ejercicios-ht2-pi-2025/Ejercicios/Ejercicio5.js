import readline from 'readline-sync'

let segundos = readline.question("¿Cuántos segundos quieres temporizar?");

while (segundos > 0) {
  console.log(`Faltan ${segundos} segundos`);
  segundos--;
}

console.log("El tiempo finalizó");

let opcion;

do {
  opcion = readline.question(
    "Menú:" +
    "1. Saludar" +

    "2. Mostrar hora actual" +

    "3. Salir" +

    "Elige una opción (1-3):"
  );

  switch (opcion) {
    case "1":
      console.log("¡Hola!");
      break;

    case "2":
      const horaActual = new Date();
      console.log("La hora actual es: " + horaActual.toLocaleTimeString());
      break;

    case "3":
      console.log("¡Hasta pronto!");
      break;

    default:
      console.log("Opción inválida. Por favor elige 1, 2 o 3.");
  }
} while (opcion !== "3");
