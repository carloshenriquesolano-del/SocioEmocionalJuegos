const puzzle = document.getElementById("puzzle");
const iniciarBtn = document.getElementById("iniciar");
const regresarBtn = document.getElementById("regresar");

const tamaño = 100;
const filas = 3;
const columnas = 3;
let piezas = [];
let vaciaIndex = 8; // última pieza vacía

// Crear piezas
function crearPiezas() {
  puzzle.innerHTML = "";
  piezas = [];
  for (let i = 0; i < filas * columnas; i++) {
    const div = document.createElement("div");
    div.classList.add("pieza");
    div.dataset.index = i;
    if (i === vaciaIndex) div.classList.add("vacia");

    const fila = Math.floor(i / columnas);
    const col = i % columnas;
    div.style.top = fila * tamaño + "px";
    div.style.left = col * tamaño + "px";

    const x = -col * tamaño;
    const y = -fila * tamaño;
    if (i !== vaciaIndex) div.style.backgroundPosition = `${x}px ${y}px`;

    puzzle.appendChild(div);
    piezas.push(div);
  }
}

// Mezclar piezas aleatoriamente
function mezclarPiezas() {
  for (let i = piezas.length - 2; i >= 0; i--) { // excluir la vacía
    const j = Math.floor(Math.random() * (i + 1));
    // intercambiar posiciones
    const topI = piezas[i].style.top;
    const leftI = piezas[i].style.left;
    piezas[i].style.top = piezas[j].style.top;
    piezas[i].style.left = piezas[j].style.left;
    piezas[j].style.top = topI;
    piezas[j].style.left = leftI;

    // intercambiar en array
    [piezas[i], piezas[j]] = [piezas[j], piezas[i]];
  }
  // actualizar vacíaIndex
  piezas.forEach((p, index) => { if (p.classList.contains("vacia")) vaciaIndex = index; });
}

// Mover piezas
puzzle.addEventListener("click", e => {
  const index = piezas.indexOf(e.target);
  if (index === vaciaIndex) return;

  const filaP = Math.floor(index / columnas);
  const colP = index % columnas;
  const filaV = Math.floor(vaciaIndex / columnas);
  const colV = vaciaIndex % columnas;

  if ((Math.abs(filaP - filaV) === 1 && colP === colV) ||
      (Math.abs(colP - colV) === 1 && filaP === filaV)) {

    const piezaClic = piezas[index];
    const piezaVacia = piezas[vaciaIndex];

    const tempTop = piezaClic.style.top;
    const tempLeft = piezaClic.style.left;

    piezaClic.style.top = piezaVacia.style.top;
    piezaClic.style.left = piezaVacia.style.left;

    piezaVacia.style.top = tempTop;
    piezaVacia.style.left = tempLeft;

    [piezas[index], piezas[vaciaIndex]] = [piezas[vaciaIndex], piezas[index]];
    vaciaIndex = index;

    checkPuzzle();
  }
});

// Verificar si completó
function checkPuzzle() {
  let correcto = true;
  piezas.forEach((p, i) => {
    const fila = Math.floor(i / columnas);
    const col = i % columnas;
    const top = parseInt(p.style.top);
    const left = parseInt(p.style.left);
    if (top !== fila * tamaño || left !== col * tamaño) correcto = false;
  });
  document.getElementById("mensaje").innerText = correcto ? "¡Felicidades, completaste el puzzle!" : "";
}

// Botón iniciar
iniciarBtn.addEventListener("click", () => {
  mezclarPiezas();
  document.getElementById("mensaje").innerText = "";
});

// Botón regresar a inicio.html
regresarBtn.addEventListener("click", () => {
  window.location.href = "inicio.html"; // carpeta principal
});

// Inicializar
crearPiezas();
mezclarPiezas();
