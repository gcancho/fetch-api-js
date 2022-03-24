let $contenido = document.getElementById("contenido");

function traer() {
  fetch("texto.txt")
    /* Convertimos la data de txt a un archivo que nosotros podamos leer, 
    sino nos traera un objeto grande y debemos desmenuzarlo */
    .then((data) => data.text())
    .then((data) => {
      console.log(data);
      $contenido.innerHTML = data;
    });
}
