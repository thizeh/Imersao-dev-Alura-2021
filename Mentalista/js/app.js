var numeroSecreto = parseInt(Math.random() * 10) 
var tentativas = 4

while (tentativas > 0) {

  var chute = parseInt(prompt("Digite um número entre 0 e 10"))

  if (numeroSecreto == chute) {
    alert("acertou, o número é " + numeroSecreto)
    document.write("<h3>" + "Acertou! O número secreto era " + chute + "</h3>")
    break
  } else if (chute > numeroSecreto) {
    tentativas = tentativas - 1
    alert("O número secreto é menor que " + chute + ", você tem " + tentativas + " tentativa(s)")
  } else if (chute < numeroSecreto) {
    tentativas = tentativas - 1
    alert("O número secreto é maior que " + chute + ", você tem " + tentativas + " tentativa(s)")
  }
  
}

if (chute != numeroSecreto) {
  document.write("<h3>" + "Suas tentativas acabaram. O número secreto era " + numeroSecreto + "</h3>")
}