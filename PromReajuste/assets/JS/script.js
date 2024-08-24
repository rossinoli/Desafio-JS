function calcularReajuste() {
    // Obtém o valor do salário digitado
    const salarioAtual = parseFloat(document.getElementById('salario').value);
  
    // Define as faixas salariais e seus respectivos percentuais de aumento
    const faixasSalariais = [
      { faixa: 280, percentual: 20 },
      { faixa: 700, percentual: 15 },
      { faixa: 1500, percentual: 10 },
      { faixa: Infinity, percentual: 5 }, 
    ];
  
    // Encontra a faixa salarial correspondente
    const faixa = faixasSalariais.find(f => salarioAtual <= f.faixa);
  
    // Calcula o valor do aumento e o novo salário
    const valorAumento = salarioAtual * (faixa.percentual / 100);
    const novoSalario = salarioAtual + valorAumento;
  
    // Exibe o resultado
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.textContent = `
    Salário antes do reajuste: R$ ${salarioAtual.toFixed(2)}
    - Novo salário: R$ ${novoSalario.toFixed(2)}
    - Aumento de: ${faixa.percentual}%
    `;
  }