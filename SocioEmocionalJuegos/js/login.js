function guardarNombre() {
    const nombre = document.getElementById("nombre").value;
    if(nombre.trim() === "") {
        alert("Por favor escribe tu nombre");
        return;
    }
    localStorage.setItem("nombreUsuario", nombre);
    window.location.href = "inicio.html";
}
