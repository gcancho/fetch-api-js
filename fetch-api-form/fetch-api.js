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
        MostrarAlerta(
          "Oh, paso algo inesperado!",
          "Los campos no deben estar vacios",
          "error"
        );
      } else {
        // $respuesta.innerHTML = `
        // <div class="alert alert-primary" role="alert">${data}</div>
        // `;
        MostrarAlerta("Muy bien!", data, "success");
      }
    });
});

function MostrarAlerta(titulo, descripcion, tipoAlerta) {
  Swal.fire(titulo, descripcion, tipoAlerta);
}
