function calcularTotal() {
  let cantEntradas, total, categoria, entradaEstudiante, entradaTrainee, entradaJr, general;

  cantEntradas = document.getElementById("inputCantidad").value;
  categoria = document.getElementById("inputCategoria").value;

  entradaEstudiante = 200 - (200 * 80) / 100;
  entradaTrainee = 200 - (200 * 50) / 100;
  entradaJr = 200 - (200 * 15) / 100;
  general = 200;

  if (cantEntradas > 0 && !isNaN(cantEntradas) && cantEntradas % 1 == 0) {
    if (categoria == "Estudiante") {
      total = entradaEstudiante * cantEntradas;
      document.getElementById("importeTotal").innerHTML = "Total a Pagar: \u0024" + total;
    } else if (categoria == "Trainee") {
      total = entradaTrainee * cantEntradas;
      document.getElementById("importeTotal").innerHTML = "Total a Pagar: \u0024" + total;
    } else if (categoria == "Junior") {
      total = entradaJr * cantEntradas;
      document.getElementById("importeTotal").innerHTML = "Total a Pagar: \u0024" + total;
    } else if (categoria == "General") {
      total = general * cantEntradas;
      document.getElementById("importeTotal").innerHTML = "Total a Pagar: \u0024" + total;
    }
  } else {
    alert("Debe ingresar la cantidad de entradas en números enteros");
  }
}

function borrar() {
  document.getElementById("inputNombre").value = ´´;
  document.getElementById("inputApellido").value = ``;
  document.getElementById("inputEmail").value = ´´;
  document.getElementById("inputCantidad").value = "";
  document.getElementById("inputCategoria").value = "Estudiante";
  document.getElementById("importeTotal").innerHTML = "Total a Pagar: \u0024";
}
