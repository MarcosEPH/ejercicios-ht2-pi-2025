# Hoja de trabajo II - PI 2025 | USPG

Este repositorio contiene **ejercicios prácticos** organizados por tema y nivel de dificulta.  
Los ejercicios están pensados para reforzar los conocimientos adquiridos durante el curso de Programación I y prepararlos para el examen final.

---

## ⚙️ ¿Cómo hacer un fork?

Si nunca has hecho un fork en GitHub, sigue estos pasos:

1. Ingresa al repositorio original en GitHub.
2. En la esquina superior derecha haz clic en el botón `Fork`.
3. Selecciona tu cuenta personal como destino.
4. GitHub creará una **copia del repositorio en tu cuenta**.
5. Desde tu fork, haz clic en el botón `Code` y copia la URL.
6. Abre VS Code y clona el repositorio con:

```bash
git clone https://github.com/tu-usuario/nombre-del-repo.git
```

---

## 📌 Instrucciones generales

1. Crea un **archivo `.js` por cada ejercicio**.  
   El nombre del archivo debe tener el formato:  
   `ejercicio01.js`, `ejercicio02.js`, ..., `ejercicio50.js`

2. Escribe tu solución en cada archivo.  
   Puedes incluir comentarios que expliquen tu lógica.

3. Una vez termines todos (o un bloque), **haz commit y push** a tu repositorio fork.

4. Envía el enlace de tu repositorio (fork) al aula virtual, correo o formulario asignado.

---

## 📁 Organización sugerida del repositorio

```
📦 tu-repo-fork/
 ┣ 📄 README.md
 ┣ 📁 ejercicios/
 ┃ ┣ ejercicio01.js
 ┃ ┣ ejercicio02.js
 ┃ ┣ ...
 ┃ ┗ ejercicio50.js
```

Puedes trabajar en la raíz o dentro de una carpeta `ejercicios/`, como prefieras.

---

## 💡 Recomendaciones

-   Trabaja por bloques temáticos (variables, operadores, condicionales, etc.).
-   Usa `console.log()` para probar tus soluciones.
-   Usa comentarios (`//`) para anotar tus ideas o pasos.
-   Si te atascas, repasa el tema correspondiente en tus apuntes o pregunta.

---

## 🧠 Objetivo

Al finalizar este repaso, deberías sentirte más seguro/a con los fundamentos de JavaScript/Typescript:  
✦ Sintaxis básica  
✦ Tipos de datos  
✦ Lógica condicional  
✦ Bucles  
✦ Funciones  
✦ Arreglos y sus métodos

---

# ⛳ Ejercicios de la hoja de trabjo

## 🧩 **Ejercicio 1 - Tipos de Datos y Variables**

### 📚 Tema:

_Declaración de variables, tipos primitivos (`string`, `number`, `boolean`, `undefined`, `null`), uso de `typeof`, entrada del usuario._

### 🎯 Instrucciones:

Completa el siguiente programa para que:

1. Solicite al usuario que ingrese su **nombre**, **edad**, y si está **activo** (true/false).
2. Declare tres variables para almacenar estos valores.
3. Imprima en consola un mensaje como:

    ```
    Hola, me llamo Ana, tengo 25 años y estoy activa: true
    ```

4. Luego, imprime el tipo de cada una de las variables usando `typeof`.
5. Finalmente, declara dos variables adicionales:

    ```ts
    let valorNulo = null
    let valorNoAsignado
    ```

    E imprime sus tipos.

---

### 🧪 Código base (incompleto):

```ts
import readline from 'readline-sync'

// 👉 Paso 1: Solicitar entrada de datos
// const nombre = ...
// const edadTexto = ...
// const activoTexto = ...

// 👉 Paso 2: Declarar y convertir datos
// const edad = ...
// const activo = ...

// 👉 Paso 3: Imprimir mensaje personalizado
// console.log(`...`)

// 👉 Paso 4: Imprimir tipos de datos usando typeof
// console.log(`Tipo de nombre: ...`)
// console.log(`Tipo de edad: ...`)
// console.log(`Tipo de activo: ...`)

// 👉 Paso 5: Declarar variables especiales y mostrar su tipo
// let valorNulo = ...
// let valorNoAsignado
// console.log(`Tipo de valorNulo: ...`)
// console.log(`Tipo de valorNoAsignado: ...`)
```

---

## 🧩 **Ejercicio 2 - Operadores y Expresiones**

### 🎯 Instrucciones:

Crea un programa que:

1. Solicite al usuario el **precio de un producto** y el **porcentaje de descuento**.

2. Calcule el total a pagar aplicando el descuento.

3. Imprima un mensaje como:
   `"El precio final con descuento es: Q160"`

4. Luego, solicita al usuario su **estatura en centímetros**.

5. Verifica si la estatura está en el rango permitido para subirse a un juego mecánico (mínimo 120 cm y máximo 200 cm).

6. Muestra un mensaje que indique si puede o no ingresar.

### 🧩 Código base:

```ts
import readline from 'readline-sync'

// Paso 1: Solicitar precio y descuento
// const precioTexto = ...
// const descuentoTexto = ...

// Paso 2: Convertir a número y calcular precio final
// const precio = ...
// const descuento = ...
// const total = ...

// Paso 3: Imprimir resultado del cálculo

// Paso 4: Solicitar estatura
// const estaturaTexto = ...
// const estatura = ...

// Paso 5: Verificar si puede subirse al juego

// Paso 6: Imprimir resultado de la evaluación
```

---

Perfecto. Aquí tienes el **Ejercicio 3**, centrado en **estructuras condicionales**:

---

## 🧩 **Ejercicio 3 - Condicionales (`if`, `else if`, `else`)**

### 🎯 Instrucciones:

Crea un programa que:

1. Solicite al usuario su **fecha de nacimiento** en el formato `YYYY-MM-DD`.

2. Calcule su edad basándose en el año actual.

3. Si la edad es menor a 12, muestra `"Eres un niño"`.
   Si está entre 12 y 17, muestra `"Eres un adolescente"`.
   Si está entre 18 y 64, muestra `"Eres un adulto"`.
   Si es 65 o más, muestra `"Eres un adulto mayor"`.

4. Luego, solicita su **nota de examen (0 a 100)**.

5. Muestra la calificación correspondiente:

    - `"A"` si es 90 o más
    - `"B"` si está entre 80 y 89
    - `"C"` si está entre 70 y 79
    - `"D"` si está entre 60 y 69
    - `"F"` si es menor a 60

### 🧩 Código base:

```ts
import readline from 'readline-sync'

// Paso 1: Solicitar fecha de nacimiento
// const fechaNacimientoTexto = ...
// const fechaNacimiento = ...
// const anioNacimiento = ...
// const anioActual = ...
// const edad = ...

// Paso 2: Evaluar grupo etario
// if (...) {
//   ...
// } else if (...) {
//   ...
// } else if (...) {
//   ...
// } else {
//   ...
// }

// Paso 3: Solicitar nota del examen
// const notaTexto = ...
// const nota = ...

// Paso 4: Evaluar calificación con else if
```

---

## 🧩 **Ejercicio 4 – Estructura `switch`**

### 🎯 Instrucciones:

Crea un programa que:

1. Solicite al usuario que ingrese un número del **1 al 7**.

2. Use una estructura `switch` para imprimir el día de la semana correspondiente:

    - `1` → "Lunes"
    - `2` → "Martes"
    - `3` → "Miércoles"
    - `4` → "Jueves"
    - `5` → "Viernes"
    - `6` → "Sábado"
    - `7` → "Domingo"
    - Cualquier otro número → "Día inválido"

3. Luego, solicita al usuario un **color del semáforo** (`verde`, `amarillo`, `rojo`).

4. Usa otro `switch` para mostrar el mensaje correspondiente:

    - `"verde"` → "Puede avanzar"
    - `"amarillo"` → "Pase con precaución"
    - `"rojo"` → "Deténgase"
    - Otro valor → "Color no válido"

### 🧩 Código base:

```ts
import readline from 'readline-sync'

// Paso 1: Solicitar número de día
// const numeroDiaTexto = ...
// const numeroDia = ...

// Paso 2: switch para días de la semana
// switch (numeroDia) {
//     case 1:
//         ...
//         break
//     ...
//     default:
//         ...
// }

// Paso 3: Solicitar color del semáforo
// const color = ...

// Paso 4: switch para interpretar semáforo
// switch (color) {
//     case 'verde':
//         ...
//         break
//     ...
//     default:
//         ...
// }
```

---

## 🧩 **Ejercicio 5 – Ciclos `while` y `do...while`**

### 🎯 Instrucciones:

Crea un programa que:

1. Solicite al usuario cuántos segundos quiere temporizar.

2. Use un ciclo `while` para mostrar un conteo regresivo desde ese número hasta 0.

    - Muestra un mensaje cada segundo como:
      `"Faltan 3 segundos"`, … `"Faltan 1 segundos"`, `"El tiempo finalizó"`

3. Luego, muestra un **menú interactivo** usando `do...while` con las siguientes opciones:

    ```
    1. Saludar
    2. Mostrar hora actual
    3. Salir
    ```

4. El menú se debe mostrar **al menos una vez** y repetirse hasta que el usuario elija la opción `3`.

---

Perfecto, Jonatan. Aquí tienes el **Ejercicio 6**, orientado al uso del **ciclo `for`** y manipulación básica de **arreglos**.

---

## 🧩 **Ejercicio 6 – Ciclo `for` y Arreglos**

### 🎯 Instrucciones:

Crea un programa que:

1. Declare un arreglo con los siguientes nombres de estudiantes:

    ```ts
    const estudiantes = ['Carlos', 'Ana', 'Luis', 'María', 'José']
    ```

2. Use un ciclo `for` para imprimir un mensaje personalizado por cada estudiante:

    ```
    Bienvenido, Carlos
    Bienvenida, Ana
    ...
    ```

    _(Puedes asumir que los nombres que terminan en "a" son femeninos y el resto masculinos para personalizar el saludo)_

3. Luego, declara un arreglo de notas correspondientes (por ejemplo: `[70, 85, 55, 90, 60]`).

4. Calcula el promedio usando un ciclo `for`.

5. Imprime el resultado como:
   `"El promedio del grupo es: 72"`

### 🧩 Código base:

```ts
// Paso 1: Declarar arreglos
const estudiantes = ['Carlos', 'Ana', 'Luis', 'María', 'José']
const notas = [70, 85, 55, 90, 60]
```

Excelente, Jonatan. Aquí te presento el **Ejercicio 7**, enfocado en **funciones y procedimientos**:

---

## 🧩 **Ejercicio 7 – Funciones y Procedimientos**

### 🎯 Instrucciones:

Crea un programa que:

1. Defina una función llamada `calcularAreaTriangulo` que reciba dos parámetros (`base`, `altura`) y retorne el área del triángulo.
   Usa la fórmula:

    ```
    área = (base * altura) / 2
    ```

2. Luego, define un **procedimiento** llamado `mostrarSaludo` que reciba un nombre y muestre el mensaje:
   `"Hola, Darlin. Bienvenido al sistema de geometría"`.

3. Desde el programa principal:

    - Solicita los valores de `base` y `altura` al usuario.
    - Solicita su nombre.
    - Llama a ambas funciones y muestra el resultado del área como:

        ```
        El área del triángulo es: 45
        ```

Totalmente de acuerdo, Jonatan. En este ejercicio 8 nos centraremos en los métodos **`map`**, **`filter`** y **`sort`**, que son esenciales para transformar y organizar datos de forma funcional. Aquí te va el diseño:

---

## 🧩 **Ejercicio 8 – Métodos de Arreglos: `map`, `filter`, `sort`**

❗*Disclaimer: en el examen se evaluaran también podrían evaluarse los métodos: includos en la presentación de dicha clase*

### 🎯 Instrucciones:

Crea un programa que:

1. Declare un arreglo de productos con nombre y precio:

    ```ts
    const productos = [
        { nombre: 'Zapatos', precio: 100 },
        { nombre: 'Camisa', precio: 80 },
        { nombre: 'Pantalón', precio: 120 },
        { nombre: 'Corbata', precio: 50 },
    ]
    ```

2. Use `map` para crear un nuevo arreglo con los precios incluyendo **12% de IVA**.
   Muestra el nuevo arreglo con los precios actualizados.

3. Use `filter` para obtener únicamente los productos cuyo **precio con IVA sea mayor o igual a 100**.

4. Use `sort` para **ordenar los productos por precio con IVA de menor a mayor**.

5. Imprime cada uno de los arreglos:

    - Con IVA
    - Filtrados
    - Ordenados

---

## 🧩 **Ejercicio 9 – Interfaces y Tipos en TypeScript**

### 🎯 Instrucciones:

1. Declara una interfaz llamada `Usuario` con los siguientes campos:

    - `nombre: string`
    - `edad: number`
    - `activo: boolean`
    - `correo?: string`

2. Luego, crea otra interfaz `InformacionLogIn` con:

    - `correo: string`
    - `clave: string`
    - `recaptcha: boolean`

3. Declara una variable `usuarioActual` de tipo `Usuario` y asígnale un valor literal.

4. Implementa una función `loguear` que reciba como parámetro un objeto de tipo `InformacionLogIn` y:

    - Verifique que el correo incluya `@` y `.`
    - La clave tenga al menos 6 caracteres
    - El `recaptcha` sea `true`

5. La función debe imprimir `"Acceso permitido"` si todo es válido o `"Datos inválidos"` en caso contrario.

### 🧩 Código base:

```ts
// Paso 1: Declarar interfaz Usuario
// interface Usuario {
//     ...
// }

// Paso 2: Declarar interfaz InformacionLogIn
// interface InformacionLogIn {
//     ...
// }

// Paso 3: Crear variable de tipo Usuario

// Paso 4: Implementar función loguear
// function loguear(info: InformacionLogIn): void {
//     if (...) {
//         console.log('Acceso permitido')
//     } else {
//         console.log('Datos inválidos')
//     }
// }

// Paso 5: Llamar función con datos de prueba
// const datosLogin: InformacionLogIn = {
//     correo: 'correo@example.com',
//     clave: '123456',
//     recaptcha: true
// }
// loguear(datosLogin)
```

---

## 🧩 **Ejercicio 10 – Enums y Clases**

### 🎯 Instrucciones:

1. Crea un `enum` llamado `Prioridad` con tres niveles:

    - `ALTA`, `MEDIA`, `BAJA`

2. Crea otro `enum` llamado `EstadoTarea` con los valores:

    - `PENDIENTE`, `EN_PROGRESO`, `FINALIZADA`

3. Declara una interfaz `Tarea` con los siguientes campos:

    - `id: number`
    - `titulo: string`
    - `completada: boolean`
    - `prioridad: Prioridad`
    - `estado: EstadoTarea`

4. Implementa una clase `GestorTareas` con:

    - Un arreglo interno `tareas: Tarea[]`
    - Un método `agregarTarea(titulo: string, prioridad: Prioridad)` que:

        - Cree una nueva tarea con estado `PENDIENTE` y completada en `false`
        - Genere el `id` automáticamente (usando `Date.now()` está bien)
        - Agregue la tarea al arreglo

    - Un método `listarTareas()` que imprima cada tarea con este formato:

        ```
        [Alta] Estudiar para el parcial - Estado: Pendiente
        ```

5. Inicializa el gestor con al menos 3 tareas.

6. **Ahora modifica el `enum Prioridad` para que sus valores sean emojis**:

    - ALTA = 🔴
    - MEDIA = 🟡
    - BAJA = 🔵

7. **Sin cambiar ningún otro código**, vuelve a ejecutar `listarTareas()` y observa el resultado.

### 🧩 Código base:

```ts
// class GestorTareas {
//     private tareas: Tarea[] = []

//     agregarTarea(titulo: string, prioridad: Prioridad) {
//         ...
//     }

//     listarTareas() {
//         ...
//     }
// }

// Paso 5: Uso del gestor
// const gestor = new GestorTareas()
// gestor.agregarTarea('Estudiar para el parcial', Prioridad.ALTA)
// gestor.agregarTarea('Revisar correo', Prioridad.MEDIA)
// gestor.agregarTarea('Comprar snacks', Prioridad.BAJA)

// gestor.listarTareas()
```

---

## 🧩 **Ejercicio 11 – Módulos, Manejo de Archivos, Logs y Backups**

> **Integra múltiples temas** vistos en el curso: modularización, tipado, lectura/escritura de archivos, estructuras de control, funciones, enums y prácticas reales de desarrollo (como logs y backups).
> **Su objetivo es simular un sistema real**, mostrando cómo pequeños componentes pueden escalar si están bien diseñados.

### 🎯 Instrucciones:

Crea un sistema modular en TypeScript que permita **gestionar registros**, **simular una base de datos local**, **registrar eventos en un archivo de logs** y **realizar backups automáticos** de la base de datos.

---

### 🧱 Estructura del proyecto:

```
📁 proyecto/
 ┣ 📄 db.json
 ┣ 📄 log.txt
 ┣ 📁 backups/
 ┃ ┗ 📄 db_YYYY-MM-DD_HH-MM-SS.json
 ┣ 📄 index.ts
 ┣ 📄 db.ts
 ┣ 📄 operaciones.ts
 ┗ 📄 logger.ts
```

---

### 📌 Requerimientos por módulo:

#### ✅ `db.ts`

-   Función `cargarDB()`: lee y devuelve el contenido del archivo `db.json`.
-   Función `guardarCambiosDB()`: sobrescribe el contenido del archivo con nuevos datos.
-   **Nueva función** `hacerBackupDB()`:

    -   Crea una copia del archivo `db.json` con un nombre en el formato:

        ```
        db_YYYY-MM-DD_HH-MM-SS.json
        ```

    -   Guarda el archivo en una carpeta llamada `backups/`.

#### ✅ `logger.ts`

-   Función `registrarLog(mensaje: string)`:

    -   Agrega un mensaje al archivo `log.txt` con formato de timestamp `[ISO8601]`.

#### ✅ `operaciones.ts`

-   Función `listar(nombreTabla: string)`: devuelve todos los registros de una tabla.
-   Función `insertar(nombreTabla, campoId, data)`:

    -   Inserta un nuevo registro y genera el ID automáticamente.
    -   Llama a `registrarLog()`.

-   Función `eliminar(nombreTabla, campoId, valor)`:

    -   Elimina el registro que coincida con el ID.
    -   Llama a `registrarLog()`.

-   Función `crearBackUp()`: crea un backup de la base de datos actual usando `hacerBackupDB()`.

#### ✅ `index.ts`

-   Inserta al menos un cliente con `nombre` y `saldo`.
-   Lista los clientes.
-   Elimina un cliente por ID.
-   Crea el backup de la base de datos.
-   Todo debe pasar por los módulos anteriores, no debe haber lógica directa en este archivo.

---

### 🧪 Consideraciones:

-   El archivo `db.json` debe crearse automáticamente si no existe.
-   Cada acción debe estar registrada en `log.txt` con fecha y tipo de operación.
-   Los backups deben almacenarse con nombre único basado en fecha y hora.
-   El sistema debe ser modular y reutilizable.

---

¡Mucho éxito y a practicar se ha dicho! 🚀
