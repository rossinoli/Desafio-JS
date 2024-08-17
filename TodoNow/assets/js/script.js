function adicionarTarefa() {
    const novaTarefa = document.getElementById('novaTarefa').value;
    if (novaTarefa === '') return;
  
    const lista = document.getElementById('listaTarefas');
    const itemLista = document.createElement('li');
    itemLista.textContent = novaTarefa;
  
    const botaoConcluir = document.createElement('button');
    botaoConcluir.textContent = 'Concluir';
    botaoConcluir.onclick = function() {
      itemLista.classList.toggle('concluida');
    };
  
    itemLista.appendChild(botaoConcluir);
    lista.appendChild(itemLista);
  
    document.getElementById('novaTarefa').value = '';
  }