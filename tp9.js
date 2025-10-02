function validarClave() {
  let clave = document.getElementById("clave").value;

  if (clave.length < 7 || clave.length > 20) {
    alert("La clave debe tener entre 7 y 20 caracteres.");
  }
}

function enviar() {
  let nombre = document.getElementById("nombre").value;
  let clave = document.getElementById("clave").value;

  alert("Nombre: " + nombre + "\nClave: " + clave);
}