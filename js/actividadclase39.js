// 1. Crear un objeto que describe un boleto de cine
let ticket = {
  cinema: "Cinepolis",  // Nombre del cinema
  hour: "19:30",        // Hora de la función
  price: 12000,         // Precio del boleto
  room: 5               // Sala
};

// Mostrar valores en consola
console.log("Cinema:", ticket.cinema);
console.log("Hora:", ticket.cinema);
console.log("Precio:", ticket.price);
console.log("Sala:", ticket.room);


//2. declarar el objeto vacio

// Crear un arreglo para almacenar los libros
let libros = [
  {
      titulo: "Speaking JavaScript",
      autor: "Axel Rauschmayer",
      paginas: 460
  },
  {
      titulo: "Programming JavaScript Applications",
      autor: "Eric Elliott",
      paginas: 254
  },
  {
      titulo: "Understanding ECMAScript 6",
      autor: "Nicholas C. Zakas",
      paginas: 352
  }
];


// Crear un nuevo libro

let nuevoLibro = {
  titulo: "JavaScript: The Good Parts",
  autor: "Douglas Crockford",
  paginas: 176
};

// Agregar el nuevo libro 
libros.push(nuevoLibro);

// Copiar los dos últimos libros 
let librosCopia = libros.slice(1, 3);

// Eliminar el primer libro 
let libroEliminado = libros.shift();

// Mostrar la longitud del arreglo después de eliminar con SHIFT
console.log("Longitud del arreglo después de eliminar:", libros.length);

// Mostrar el libro eliminado
console.log("Libro eliminado:", libroEliminado);

// Mostrar los libros que quedan 
console.log("Libros restantes en la biblioteca:", libros);

// Sumar todas las páginas de los libros en la colección
let totalPaginas = libros.reduce((total, libro) => total + libro.paginas, 0);
console.log("Total de páginas en la colección:", totalPaginas);


//punto 3
// Crear un arreglo de tres objetos que representan los libros
let libros2 = [
  {
      titulo: "Speaking JavaScript",
      autor: "Axel Rauschmayer",
      paginas: 460
  },
  {
      titulo: "Programming JavaScript Applications",
      autor: "Eric Elliott",
      paginas: 254
  },
  {
      titulo: "Understanding ECMAScript 6",
      autor: "Nicholas C. Zakas",
      paginas: 352
  }
];

// Agregar un nuevo libro a la colección
let nuevoLibro2 = {
  titulo: "Learning JavaScript Design Patterns",
  autor: "Addy Osmani",
  paginas: 254
};

// Usar el método push para adjuntar el libro al final del arreglo
libros.push(nuevoLibro);

// Mostrar la longitud del arreglo y todos los nombres de los libros en la colección
console.log("Longitud del arreglo:", libros.length);
console.log("Libros en la colección:");
libros.forEach(libro => console.log(libro.titulo));

// Copiar los dos últimos libros a un nuevo arreglo
let librosCopia1 = libros.slice(1, 3);

// Eliminar el primer libro del arreglo
let libroEliminado1 = libros.shift(); // Usamos el método shift

// Mostrar la longitud del arreglo después de eliminar
console.log("Longitud del arreglo después de eliminar:", libros.length);
console.log("Libro eliminado:", libroEliminado.titulo);

// Mostrar todos los nombres de los libros restantes en la colección
console.log("Libros restantes en la colección:");
libros.forEach(libro => console.log(libro.titulo));


// Sumar todas las páginas de los libros en la colección
let totalPaginas1 = libros.reduce((total, libro) => total + libro.paginas, 0);
console.log("Total de páginas en la colección:", totalPaginas);






///////

console.log(4 * 5 === 20); 
console.log(6 * 5 === 30); 
console.log(-17 < 0); 
console.log(25 > 1); 
console.log(2 + 2 * 2 === 6); 
console.log(true === true); 
console.log(false === false); 
console.log(false === false === true); // false (esto no puede ser true)
console.log(true === true && true); 


////

function solicitarNumero(mensaje) {
  let numero;
  do {
      numero = prompt(mensaje); // Solicitar al usuario que ingrese un número
      // Validar si el número es válido (positivo y numérico)
      if (isNaN(numero) || numero <= 0) {
          alert("Por favor, ingrese un número válido (positivo)."); // Mensaje de error
      }
  } while (isNaN(numero) || numero <= 0); // Repetir hasta que el número sea válido
  return parseFloat(numero); // Convertir el número a tipo float
}

// Solicitar los valores del ancho, alto y largo
let ancho = solicitarNumero("Ingrese el ancho de la caja:");
let alto = solicitarNumero("Ingrese el alto de la caja:");
let largo = solicitarNumero("Ingrese el largo de la caja:");

// Calcular el volumen de la caja
let volumen = ancho * alto * largo;

// Mostrar el resultado
console.log(`El volumen de la caja es: ${volumen} unidades cúbicas.`);
alert(`El volumen de la caja es: ${volumen} unidades cúbicas.`);


//ejercicio taller

// Solicitar al usuario que ingrese un número
//let numero = prompt("Por favor, ingrese un número:");

// Convertir el valor ingresado a un número
numero = Number(numero);

// Verificar si el número está en el rango deseado
if (numero > 90 && numero < 110) {
    console.log("¡Bingo!"); // Mensaje si el número está entre 90 y 110
} else {
    console.log("Perdido"); // Mensaje si el número no está en el rango
}



// Solicitar al usuario que ingrese un número
let numero = prompt("Por favor, ingrese un número:");

// Convertir el valor ingresado a un número
numero = Number(numero);

// Usar un operador ternario para mostrar el mensaje correspondiente
let mensaje = (numero > 90 && numero < 110) ? "¡Bingo!" : "Perdido";

// Mostrar el mensaje
console.log(mensaje);
