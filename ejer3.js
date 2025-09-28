function mayor() {
  var a = parseFloat(document.getElementById("a").value);
  var b = parseFloat(document.getElementById("b").value);
  
  if (a > b) {
    alert("El mayor es: " + a);
  } else if (b > a) {
    alert("El mayor es: " + b);
  } 
}
