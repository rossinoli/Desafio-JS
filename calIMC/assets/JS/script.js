function calcularIMC() {
    // Obter altura e peso através de prompts
    const altura = parseFloat(window.prompt("Digite sua altura em metros (ex: 1.75):"));
    const peso = parseFloat(window.prompt("Digite seu peso em quilogramas:"));
  
    // Validação dos dados
    if (isNaN(altura) || isNaN(peso) || altura <= 0 || peso <= 0) {
      alert("Por favor, insira valores válidos para altura e peso.");
      return;
    }
  
    // Calcular o IMC   
  
    const imc = peso / (altura * altura);
  
    // Exibir o resultado e a classificação
    const resultadoElement = document.getElementById("resultado");
    resultadoElement.textContent = `Seu IMC é: ${imc.toFixed(2)}`;
  
    // Classificar o IMC
    if (imc <= 18.5) {
      resultadoElement.textContent += " - IMC abaixo do normal.";
      resultadoElement.classList.add('IMCbaixoNormal');
    } else if (imc >= 18.6 && imc <= 24.9) {
      resultadoElement.textContent += " - IMC normal.";
      resultadoElement.classList.add('IMCnormal');
    } else if (imc >= 25 && imc <= 29.9) {
      resultadoElement.textContent += " - IMC sobrepeso.";
      resultadoElement.classList.add('IMCsobrepeso');
    } else if (imc >= 30 && imc <= 34.9) {
      resultadoElement.textContent += " - IMC Obesidade Grau I.";
      resultadoElement.classList.add('IMCobesidadeGI');
    } else if (imc >= 35 && imc <= 39.9) {
      resultadoElement.textContent += " - IMC Obesidade Grau II.";
      resultadoElement.classList.add('IMCobesidadeGII');
    } else if (imc >= 40) {
      resultadoElement.textContent += " - IMC Obesidade Grau III.";
      resultadoElement.classList.add('IMCobesidadeGIII');
    } else {
      resultadoElement.textContent += " - Valor inválido.";
    }
  }
  
  // Chamar a função para iniciar o cálculo
  calcularIMC();