//* Guardar el estado columna activa
let columnaActiva = 1;

//* Seleccionar las Columnas
const columnas = document.querySelectorAll(".card");

//* Escuchar los "clicks" en cada una de ellas

columnas.forEach((columna, indice) => {
  columna.addEventListener("click", function () {
    cambiarColumna(indice);
  });
});

//* Cambiar el estado de las Columnas
function cambiarColumna(indice) {
  columnas[columnaActiva].classList.remove("activa");
  columnas[indice].classList.add("activa");
  columnaActiva = indice;
}
