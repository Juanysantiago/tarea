// Evento de envío
document.getElementById("miFormulario").addEventListener("submit", function(e){

    if (!this.checkValidity()) {
        return;
    }

    e.preventDefault();

    document.getElementById("mensajeExito").style.display = "block";

    // limpiar campos
    this.reset();
});

// Cerrar mensaje
function cerrarExito() {
    document.getElementById("mensajeExito").style.display = "none";
}
