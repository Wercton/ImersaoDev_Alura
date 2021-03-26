var numeroSecreto = parseInt(Math.random() * 10)
var tentativas = 3

while (tentativas > 0) {
    var chute = parseInt(prompt("Digite um número entre 0 e 10"))

    if (numeroSecreto == chute) {
        alert("Número correto!");
        break
    } else if (tentativas == 1) {
        alert("Você perdeu todas as chances! O número secreto era " + numeroSecreto + ".")
        break
    } else if (chute > numeroSecreto) {
        alert("O número secreto é menor que " + chute);
        tentativas = tentativas - 1
    } else if (chute < numeroSecreto) {
        alert("O número secreto é maior que " + chute);
        tentativas = tentativas - 1
    }
}