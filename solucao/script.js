// script.js

// Função para calcular a gorjeta
function calcularGorjeta(event) {
    event.preventDefault(); // Evita o comportamento padrão de envio do formulário
  
    // Obter os valores dos campos de entrada
    var valorTotal = document.getElementById("valor-total").value;
    var porcentagemGorjeta = document.getElementById("porcentagem-gorjeta").value;
  
    // Calcular a quantia da gorjeta
    var gorjeta = (valorTotal * porcentagemGorjeta) / 100;
  
    // Calcular o valor total da conta com a gorjeta
    var valorTotalComGorjeta = parseFloat(valorTotal) + gorjeta;
  
    // Exibir o valor total da conta com a gorjeta na div de resultado
    var resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerText = "Valor Total: R$" + valorTotalComGorjeta.toFixed(2);
  }
  
  // Adicionar o manipulador de evento ao botão de calcular
  var calcularButton = document.getElementById("calcular-gorjeta");
  calcularButton.addEventListener("click", calcularGorjeta);
  