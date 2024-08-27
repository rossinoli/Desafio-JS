function gerarTabuada() {
    // Pede ao usuário o número
    let numero = parseInt(prompt("Digite um número para a tabuada:"));

    // Verifica se o valor é um número
    if (isNaN(numero)) {
        alert("Por favor, digite um número válido.");
        return false;
      }// Verifica se o número é positivo
      if (numero <= 0) {
        alert("Digite um número positivo.");
        return false;
      }

    // Cria uma string para armazenar a tabuada
    let tabuada = "";

    // Inicializa o contador
    let i = 1;

    // Gera a tabuada usando while
    while (i <= 10) {
        tabuada += `${numero} x ${i} = ${numero * i}<br>`;
        i++;
    }

    // Exibe a tabuada no elemento HTML
    document.getElementById("resultado").innerHTML = tabuada;
}

// Chama a função para gerar a tabuada
gerarTabuada();