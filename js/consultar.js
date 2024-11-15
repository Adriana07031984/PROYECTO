async function consultar() {
    // Obtener el valor del campo de entrada para la consulta
    let email = document.getElementById("email").value;

    // Validación de campo vacío
    if (!email) {
        swal.fire("Por favor, ingrese un email para realizar la consulta.", "", "warning");
        return; // Detiene la ejecución si el campo está vacío
    }

    try {
        // Configuración de la solicitud fetch
        let fetchConfig = {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            method: "GET", // Método GET para consultar datos
        };

        // URL de la API con el identificador
        let urlApi = "https://miproyectonodejs-production-a448.up.railway.app/api/contacto/consContacto/email/" + email;
        
        // Realizar la solicitud fetch
        let response = await fetch(urlApi, fetchConfig);
        console.log("🚀 ~ consultar ~ response:", response.status);

        // Manejo de la respuesta
        if (!response.ok) {
            swal.fire("Contacto no encontrado", "", "error");
            throw new Error(`HTTP error! status: ${response.status}`);
        } else {
            let data = await response.json(); // Parsear la respuesta JSON
            // Mostrar los datos del contacto (puedes personalizar esto)
            swal.fire("Contacto encontrado", JSON.stringify(data), "success");
        }
    } catch (e) {
        // Captura de errores
        swal.fire("Falla técnica", "Contacte a sistemas", "error");
    }
}