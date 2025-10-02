function calcularResultado() {
  var p1 = parseInt(document.getElementById("pregunta1").value, 10);
  var p2 = parseInt(document.getElementById("pregunta2").value, 10);
  var p3 = parseInt(document.getElementById("pregunta3").value, 10);
  var p4 = parseInt(document.getElementById("pregunta4").value, 10);

  var correctas = p1 + p2 + p3 + p4;
  var incorrectas = 4 - correctas;

  alert("Respuestas correctas: " + correctas + "\nRespuestas incorrectas: " + incorrectas);
}
