async function actualizar() {
  // Obtener el valor del campo de entrada para la consulta
  let nombre = document.getElementById("nombre").value;
  let apellido = document.getElementById("apellido").value;
  let fechaNacimiento = document.getElementById("fechaNacimiento").value;
  let sexo = document.getElementById("sexo").value;
  let telefono = document.getElementById("telefono").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  // Validación de campos vacíos
  if (
    !nombre ||
    !apellido ||
    !fechaNacimiento ||
    !sexo ||
    !telefono ||

    !password
  ) {
    swal.fire("Por favor, complete todos los campos.", "", "warning");
    return; // Detiene la ejecución si hay campos vacíos
  }

  try {
    // Configuración de la solicitud fetch
    let fetchConfig = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "PUT", // Método PUT para actualizar datos
      body: JSON.stringify({
        nombres: nombre,
        apellidos: apellido,
        fechaNacimiento: fechaNacimiento,
        sexo: sexo,
        telefono: telefono,
        email: email,
        password: password,
      }),
    };

    // URL de la API para actualizar el contacto
    let urlApi = "https://miproyectonodejs-production-a448.up.railway.app/api/contacto/editarContacto/";

    // Realizar la solicitud fetch
    let response = await fetch(urlApi, fetchConfig);
    console.log("🚀 ~ actualizar ~ response:", response);
    
    // Manejo de la respuesta
    if (response.status===404) {
      swal.fire("Error al actualizar el contacto", ""+response.status, "error");
      return;
    } else if (response.ok) {
      //let data = await response.json(); // Parsear la respuesta JSON
      // Mostrar un mensaje de éxito
      swal.fire("Contacto actualizado ", ""+response.status,  "success");
    }else if (response.status===400) {swal.fire("Error en los datos recibidos por el servidor", ""+response.status, "error")}
  } catch (e) {
    // Captura de errores
    console.error("Error en la actualización:", e);
    swal.fire("Falla técnica", "Contacte a sistemas", "error");
  }
}
