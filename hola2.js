let $contenido = document.getElementById("contenido");

function traer() {
  fetch("https://randomuser.me/api/")
    // Traemos la respuesta en formato json
    .then((res) => res.json())
    .then((data) => {
      console.log(data.results[0]);
      $contenido.innerHTML = `
      <img class="img-fluid rounded-circle" src="${data.results[0].picture.large}" width="100" />
        <p>Nombre : ${data.results[0].name.first}</p>`;
    });
}
