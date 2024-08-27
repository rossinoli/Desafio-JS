
function calcularPedido() {
    const codigoProduto = parseInt(document.getElementById('codigo').value);
    const quantidade = parseInt(document.getElementById('quantidade').value);   

    let precoUnitario = 0;
    let valorTotal;

    switch (codigoProduto) {
    case 100:
        precoUnitario = 15;
    break;
    case 101:
        precoUnitario = 20;
    break;
    case 102:
        precoUnitario = 25;
    break;
    case 103:
        precoUnitario = 28;
    break;
    case 104:
        precoUnitario = 32;
    break;
    default:
        alert('Código de produto inválido.');
    return;
    }

    valorTotal = calcularValorTotal(precoUnitario, quantidade);
    document.getElementById('resultado').textContent = `Valor a pagar: R$ ${valorTotal.toFixed(2)}`;
}

function calcularValorTotal(precoUnitario, quantidade) {
    return precoUnitario * quantidade;
}