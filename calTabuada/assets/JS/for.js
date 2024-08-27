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

    // Gera a tabuada
    for (let i = 1; i <= 10; i++) {
        tabuada += `${numero} x ${i} = ${numero * i}<br>`;
    }

    // Exibe a tabuada no elemento HTML
    document.getElementById("resultado").innerHTML = tabuada;
}

// Chama a função para gerar a tabuada
gerarTabuada();