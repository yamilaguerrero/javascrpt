function verificar() {
  var p1 = document.getElementById("p1").value;
  var p2 = document.getElementById("p2").value;
  if (p1 == p2) {
    alert("Las contraseñas coinciden");
  } else {
    alert("Las contraseñas no coinciden");
  }
}
