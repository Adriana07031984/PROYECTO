

//capturas datos en el DOM


/* function capturarDatos() {
  console.log("hola"); */
  /*  let nombre = document.getElementById("nombre").value;
 console.log("🚀 ~ CapturarDatos ~ nombre:", nombre);
  
 let apellido = document.getElementById("apellido").value;
  console.log("🚀 ~ CapturarDatos ~ apellido:", apellido);
  
  let fechaNacimiento = document.getElementById("fechaNacimiento").value;
  console.log("🚀 ~ CapturarDatos ~ fechaNacimiento:", fechaNacimiento);
  
  let sexo = document.getElementById("sexo").value;
  console.log("🚀 ~ CapturarDatos ~ sexo:", sexo);
  
  let telefono = document.getElementById("telefono").value;
  console.log("🚀 ~ CapturarDatos ~ telefono:", telefono);
  
  let email = document.getElementById("email").value;
  console.log("🚀 ~ CapturarDatos ~ email:", email);
  
  let password = document.getElementById("password").value;
  console.log("🚀 ~ CapturarDatos ~ password:", password);
  
  let tratamientoDatos = document.querySelector('input[name="tratamientoDatos"]:checked') ? 
                         "Aceptado" : "No aceptado";
  console.log("🚀 ~ CapturarDatos ~ tratamientoDatos:", tratamientoDatos); */ 
}

   //SwalMixin
  /*  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });

  // Validar los datos
  if (
    nombre === "" ||
    apellido === "" ||
    fechaNacimiento === "" ||
    sexo === "" ||
    telefono === "" ||
    email === "" ||
    password === ""
  ) {
    //alert("Todos los campos son obligatorios");
    Swal.fire({
      title: "Todos los campos son obligatorios",
      text: "",
      icon: "info",
    });
    return false;
  } else {
    Toast.fire({
      icon: "success",
      title: "Los datos fueron enviados con éxito",
    });
    return true;
  }
 */



// // VALIDACIÓN DE PARÁMETROS
// let temperatures = [1, 12, 20, 15, 12, 1].map(String); 

// console.log(getMeanTemp(temperatures));  

// function getMeanTemp(temperatures) {
//   if (!(temperatures instanceof Array)) {
//     Swal.fire({
//       title: "El parámetro no es un Array",
//       text: "",
//       icon: "error",
//     });
//     return NaN;
//   }

  
//   let sum = 0;
//   for (let i = 0; i < temperatures.length; i++) {
//     sum += Number(temperatures[i]); 
//   }
  
//   return sum / temperatures.length;
// }



////////////EJERCICIO////////
///Ejercicio 4:
//Estamos creando una pequeña biblioteca de libros sobre programación en JavaScript. 
//Tenemos tres libros y queremos preparar una lista de ellos.
//Almacenaremos tres datos de cada libro: el título, el autor y el número de páginas:
//Creamos un array para almacenar los primeros 3 libros de la librería
// let Libros = [
//     {
//         titulo: "Speaking JavaScript",
//         autor: "Axel Rauschmayer",
//         paginas: 460
//     },
//     {
//         titulo: "Programming JavaScript Applications",
//         autor: "Eric Elliott",
//         paginas: 254
//     },
//     {
//         titulo: "Understanding ECMAScript 6",
//         autor: "Nicholas C. Zakas",
//         paginas: 352
//     }
//   ];
  
  
//   // Creamos nuevo arreglo para agregar un nuevo libro.
//   let nuevoLibro = 
//     {
//         titulo: "Learning JavaScript Design Patterns",
//         autor: "Addy Osmani",
//         paginas: 254
//     };
  
//   // Agregamos un nuevo libro al arreglo Libros con el método __push__
//   Libros.push(nuevoLibro);






  // ejercicio en clase

/*   let nums = [50, 10, 40, 30, 20];

let sorted = nums.sort((a, b) => a < b ? -1 : a > b ? 1 : 0);
console.log(sorted); // [10, 20, 30, 40, 50]
 */