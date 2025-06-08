import readline from 'readline-sync'

// Paso 1: Solicitar número de día
const numeroDia = readline.question(`Ingresa el numerdo de dia (1 - 7) `)

// Paso 2: switch para días de la semana
switch (numeroDia) {
        case "1":
        console.log(`Lunes`)
        break

        case "2":
        console.log(`Martes`)
        break;

        case "3":
        console.log(`Miercoles`)
        break;

        case "4":
        console.log(`Jueves`)
        break;

        case "5":
        console.log(`Viernes`)
        break;

        case "6":
        console.log(`Sabado`)
        break;

        case "7":
        console.log(`Domingo`)
        break;

     default:
         console.log(`El numero que ingreso no es valido`)
 }

// Paso 3: Solicitar color del semáforo
const color = readline.question(`Elija el color del semaforo (Rojo, Amarillo, Verde)`) 

// Paso 4: switch para interpretar semáforo
switch (color) {
     case 'verde':
         console.log(`Puede avanzar`)
         break;
     
     case `Rojo`:
        console.log(`Detengase`)
        break;

     case `Amarillo`:
        console.log(`Pase con precaucion`)
        break;
     default:
         console.log(`Color no valido`)
 }