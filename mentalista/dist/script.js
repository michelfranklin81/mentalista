var numeroSecreto = parseInt(Math.random() * 11)  
var tentativas = 3
var pontos = tentativas - 3

  while (tentativas > 0) {
  var chute = parseInt(prompt("Digite um número de 0 a 10"))
  if (numeroSecreto == chute) {
    document.write("<h2>" + "Acertou " + "</h2>")
   break
  } else if (chute > numeroSecreto) {
    alert("O número secreto é menor.")
    tentativas = tentativas - 1
   
  } else if (chute < numeroSecreto) {
    alert("O número secreto é maior.")
    tentativas = tentativas - 1
   } 
  } if (chute != numeroSecreto){
    alert("Suas tentativas acabaram! O número secreto é " + numeroSecreto)
  }