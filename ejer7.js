function presupuesto() {
  var proc = parseInt(document.getElementById("proc").value, 10);
  var mon = parseInt(document.getElementById("mon").value, 10);
  var dd = parseInt(document.getElementById("dd").value, 10);
  
  var total = proc + mon + dd;
  alert("Presupuesto total: $" + total);
}