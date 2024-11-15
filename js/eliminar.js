async function eliminar() {

  let email = document.getElementById(
    "email"
  ).value;

  // Validación de campo vacío
  if (!email) {
    swal.fire("Por favor, ingrese el email a eliminar.", "", "warning");
    return; // Detiene la ejecución si el campo está vacío
}

  try {
    ///capturar dato de input

   

    let fetchConfig = {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };
    let urlApi = "https://miproyectonodejs-production-a448.up.railway.app/api/contacto/elimContacto/email/" + email;
    //let urlApi = "https://jsonplaceholder.typicode.com/posts";
    let response = await fetch(urlApi, fetchConfig);
    if (response.ok) {
      Swal.fire("Contacto eliminado", "", "success");
    } else {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    //let data = await response.json();
    /* console.log("🚀 ~ consulta ~ data:", data.nombre);
        Swal.fire('El trabajador consultado es: '+data.nombre,'','info') */
    /*
        document.getElementById("inputDocumento").value = data;
        // Capturo el elemento select por su ID
        const selectPosts = document.getElementById("select_posts");
        selectPosts.innerHTML = ""; // Limpiar el select antes de agregar opciones
    
        // Función para crear una opción en el select
        function crearOpcion(post) {
          const option = document.createElement("option");
          option.id = post.id;
          option.textContent = post.title; // Asumiendo que 'title' es la propiedad del nombre
          return option;
        }
    
        //recorrer el array de posts y crear las opciones
        data.forEach((post) => {
          selectPosts.appendChild(crearOpcion(post));
        });
    
        //recorrer el array de objetos para capturar la clave id de cada oibjeto
        data.forEach((post) => {
          console.log("Title: ", post.title);
        }); */
  } catch (error) {
    console.error("Error:", error);
  }
}
