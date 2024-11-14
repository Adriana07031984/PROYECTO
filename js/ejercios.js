//PARTE 1 

//EJERCICIO 1 

// Declaración de variables con diferentes tipos de datos
let nombre = "Adriana"; // String
let edad = 31; // Number
let esEstudiante = true; // Boolean
let Bgint = 63n;
let undef = undefined;


// Mostrar las variables en la consola
console.log("🚀 ~ Nombre:", nombre);
console.log("🚀 ~ Edad:", edad);
console.log("🚀 ~ esEstudiante:", esEstudiante);
console.log("🚀 ~ Bgint:", Bgint);
console.log("🚀 ~ undef:", undef);


//EJERCICIO 2

// Creación del objeto con datos personales
let persona = {
    nombre: "Adriana",          // String
    edad: 31,                   // Number
    esEstudiante: true,         // Boolean
    Bgint: 63n,                 // BigInt
    direccion: {                // Objeto anidado
        ciudad: "Madrid",
        pais: "España"
    },
    habilidades: ["JavaScript", "HTML", "CSS"] // Array
};

// Mostrar el objeto en la consola
console.log("🚀 ~ persona:", persona);



//EJERCICIO 3

// Crear un array con diez artistas o grupos musicales
let artistas = [
    "Daft Punk",
    "Coldplay",
    "Nirvana",
    "Queen",
    "Adele",
    "Red hot Chili Pepers",
    "David Guetta",
    "Soda Stereo",
    "Avicci",
    "Alicia Keys"
];

// Mostrar el array en la consola
console.log("🚀 ~ artistas:", artistas);

//PARTE 2
//EJERCICIO 4.1

let MusicArtists1 = [
    {
      DaftPunk: {
        Canciones: [
          "One More Time",
          "Get Lucky",
          "Harder, Better, Faster, Stronger",
        ],
      },
    },
    {
      Coldplay: {
        Canciones: [
          "Yellow",
          "Fix You",
          "Viva La Vida",
        ],
      },
    },
    {
      Nirvana: {
        Canciones: [
          "Smells Like Teen Spirit",
          "Come As You Are",
          "Heart-Shaped Box",
        ],
      },
    },
  ];
  
  // Mostrar el array en la consola
  console.log("🚀 ~ MusicArtists1:", MusicArtists1);

  //PARTE 2
//EJERCICIO 4.2

let MusicArtists = [
    {
      DaftPunk: {
        Cancion1: "One More Time",
        Cancion2: "Get Lucky",
        Cancion3: "Harder, Better, Faster, Stronger",
      },
    },
    {
      Coldplay: {
        Cancion1: "Yellow",
        Cancion2: "Fix You",
        Cancion3: "Viva La Vida",
      },
    },
    {
      Nirvana: {
        Cancion1: "Smells Like Teen Spirit",
        Cancion2: "Come As You Are",
        Miembros: [
          {
            Miembro1: "Kurt Cobain",
            Miembro2: "Krist Novoselic",
            Miembro3: "Dave Grohl",
          },
        ],
      },
    },
  ];
  
  // Mostrar un miembro de la banda en la consola
  console.log("🚀 ~ Miembro de Nirvana:", MusicArtists[2].Nirvana.Miembros[0].Miembro1);
  

//EJERCICIO 5

  // Crear el objeto con dos arrays
let datosCiudades = {
    ciudades: ["Bucaramanga", "Medellín", "Bogotá", "Cali", "Cartagena"],
    poblaciones: [1200000, 2500000, 8000000, 2000000, 1000000]
};

// Mostrar en consola la información de cada ciudad y su población
for (let i = 0; i < datosCiudades.ciudades.length; i++) {
    console.log(`CIUDAD: ${datosCiudades.ciudades[i]} – POBLACIÓN: ${datosCiudades.poblaciones[i].toLocaleString()}`);
}


////IndexOf ---> para buscar la posición de un elemento dentro de un array:
let nombres = ["Adriana", "Juan", "Jaime","Edgar"];
console.log(nombres.indexOf("Adriana"));

///Push ---> este método ubica elk elemento dado y su argumento al final del array
nombres.push("Ricardo")
console.log(nombres.length);

let arrObj = [{
  nombre: "Andrés",
  correo: "correo@correo.co"
}];
arrObj.push({nombre:"Melquin",correo:"melquin@correo.co"})
console.log("🚀 ~ arrObj:", arrObj);