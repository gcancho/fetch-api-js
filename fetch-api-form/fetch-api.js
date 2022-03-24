let $formulario = document.getElementById("formulario");
let $respuesta = document.getElementById("respuesta");

$formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  //
  let datos = new FormData($formulario);
  // Detecta lo que tiene el name usuario
  console.log(datos.get("usuario"));
  console.log(datos.get("pass"));

  // Ponemos la ruta y el metodo POST ya que por defecto es GET
  fetch("post.php", {
    method: "POST",
    body: datos,
  })
    // Con las promesas obtenemos la respuesta
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if (data === "error") {
        $respuesta.innerHTML = `
        <div class="alert alert-danger" role="alert">Llena todos los campos</div>
        `;
      } else {
        $respuesta.innerHTML = `
        <div class="alert alert-primary" role="alert">${data}</div>
        `;
      }
    });
});
