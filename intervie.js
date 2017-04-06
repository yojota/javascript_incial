function expresion (target, digit){
  var resultado = [];
  var suma, resta, multiplicacion;
  for (i in digit){
    suma = suma + digit[i];
    multiplicacion = multiplicacion * digit[i];
    resta = resta - digit[i];
  }
  if (suma == target) {
    resultado.push(suma);
  }
  if (multiplicacion == target){
    resultado.push(multiplicacion);
  }
  if (resta == target) {
    resultado.push(resta);
  }
  return resultado;
}
