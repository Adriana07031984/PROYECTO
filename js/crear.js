async function crear() {
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let fechaNacimiento = document.getElementById("fechaNacimiento").value;
    let sexo = document.getElementById("sexo").value;
    let telefono = document.getElementById("telefono").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    // Validación de campos vacíos
    if (!nombre || !apellido || !fechaNacimiento || !sexo || !telefono || !email || !password) {
        swal.fire("Por favor, complete todos los campos.", "", "warning");
        return; // Detiene la ejecución si hay campos vacíos
    }

    try {
        // Estos son los metadatos
        let fetchConfig = {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            method: "POST",
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

        let urlApi = "http://127.0.0.1:4000/api/contacto";
        // Acá disparo el fetch
        let response = await fetch(urlApi, fetchConfig);
        console.log("🚀 ~ actualizar ~ response:", response.status);

        // Si la respuesta es ok, parseo el JSON y lo devuelvo
        if (!response.ok) {
            swal.fire("Contacto no fue creado", "", "error");
            throw new Error(`HTTP error! status: ${response.status}`);
        } else {
            swal.fire("Contacto creado", "", "success");
        }
    } catch (e) {
        // En este bloque capturo los errores
        swal.fire("Falla técnica", "Contacte a sistemas", "error");
    }
}