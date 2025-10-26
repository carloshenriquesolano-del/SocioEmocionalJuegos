let situaciones = [
    { texto: "Tus compañeros hicieron un comentario que no te gustó.", respuesta: "rojo" },
    { texto: "Estás nervioso antes de exponer un tema.", respuesta: "amarillo" },
    { texto: "Todo salió bien en la actividad. Te sientes tranquilo.", respuesta: "verde" },
    { texto: "Alguien te empuja sin querer en el recreo.", respuesta: "rojo" },
    { texto: "No sabes si estás haciendo bien la tarea.", respuesta: "amarillo" },
    { texto: "Te felicitaron por tu esfuerzo.", respuesta: "verde" },
    { texto: "Un amigo no quiso prestarte un material y te molestaste.", respuesta: "rojo" },
    { texto: "Tienes dudas antes de tomar una decisión.", respuesta: "amarillo" },
    { texto: "Estás relajado jugando con tus amigos.", respuesta: "verde" },
    { texto: "Te regañaron y te sientes muy enojado.", respuesta: "rojo" }
];

let indice = 0;
let puntaje = 0;

function mostrarSituacion() {
    document.getElementById("situacion").textContent =
        situaciones[indice].texto;
}

function seleccionar(color) {
    let mensaje = document.getElementById("mensaje");

    if (color === situaciones[indice].respuesta) {
        mensaje.textContent = "¡Correcto! Bien identificado.";
        puntaje++;
    } else {
        mensaje.textContent = "No es la mejor opción. Intenta pensar mejor.";
    }

    document.getElementById("puntaje").textContent = puntaje;
    document.getElementById("btn-siguiente").style.display = "inline-block";
}

function siguiente() {
    indice++;
    document.getElementById("mensaje").textContent = "";
    document.getElementById("btn-siguiente").style.display = "none";

    if (indice < situaciones.length) {
        mostrarSituacion();
    } else {
        document.getElementById("situacion").textContent =
            "¡Juego terminado! Tu puntaje final fue: " + puntaje + "/10";
    }
}

window.onload = mostrarSituacion;
