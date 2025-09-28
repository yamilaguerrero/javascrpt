function cubo() {
  var n = parseInt(document.getElementById("num").value, 10);
  if (isNaN(n)) {
    alert("Ingrese un número válido");
    return;
  }
  alert("El cubo de " + n + " es " + (n * n * n));
}
