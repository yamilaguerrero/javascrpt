function precioPizza() {
  var select = document.getElementById("pizza");
  var opcion = select.options[select.selectedIndex];
  alert("Precio de la pizza: $" + opcion.value);
}
