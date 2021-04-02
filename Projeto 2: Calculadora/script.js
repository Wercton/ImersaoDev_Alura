var firstValue = parseInt(prompt("Digite o primeiro valor:"));
var secondValue = parseInt(prompt("Digite o segundo valor:"));
var operacao = prompt("Digite 1 para fazer uma soma\nDigite 2 para fazer uma subtração\nDigite 3 para fazer uma multiplicação\nDigite 4 para fazer uma divisão");

if (operacao == "1") {
  var resultado = firstValue + secondValue;
  operacao = " + ";
  var msg = "<h2>" + firstValue + operacao + secondValue + " = " + resultado + "</h2>";
} else if (operacao == "2") {
  var resultado = firstValue - secondValue;
  operacao = " - ";
  var msg = "<h2>" + firstValue + operacao + secondValue + " = " + resultado + "</h2>";
} else if (operacao == "3") {
  var resultado = firstValue * secondValue;
  operacao = " * ";
  var msg = "<h2>" + firstValue + operacao + secondValue + " = " + resultado + "</h2>";
} else if (operacao == "4") {
  var resultado = firstValue / secondValue;
  operacao = " / ";
  var msg = "<h2>" + firstValue + operacao + secondValue + " = " + resultado + "</h2>";
} else {
  var msg = "<h2>Opção Inválida.</h2>"
}

document.write(msg);
