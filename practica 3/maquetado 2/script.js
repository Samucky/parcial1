document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("Formulario").addEventListener("submit", function(event) {
        event.preventDefault(); 

        var nombre = document.getElementById("nombre").value;
        var edad = document.getElementById("edad").value;

        var datos = {
            nombre: nombre,
            edad: edad
        };

        var datosJSON = JSON.stringify(datos);

        localStorage.setItem("datos", datosJSON);

        if(datos !== null) {
            alert("¡Se ha registrado con éxito!");
        }

        console.log(datos);
    });
});
