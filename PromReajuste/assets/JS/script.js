function calcularReajuste() {
  // Obtém o valor do salário digitado
  const salarioAtual = parseFloat(document.getElementById('salario').value);

  let novoSalario, percentual;

  if (salarioAtual <= 280) {
    percentual = 20;
  } else if (salarioAtual <= 700) {
    percentual = 15;
  } else if (salarioAtual <= 1500) {
    percentual = 10;
  } else {
    percentual = 5;
  }

  // Calcula o valor do aumento e o novo salário
  const valorAumento = salarioAtual * (percentual / 100);
  novoSalario = salarioAtual + valorAumento;

  // Exibe o resultado
  const resultadoElement = document.getElementById('resultado');
  resultadoElement.textContent = `
  Salário antes do reajuste: R$ ${salarioAtual.toFixed(2)}
  - Novo salário: R$ ${novoSalario.toFixed(2)}
  - Aumento de: ${percentual}%
  `;
}
