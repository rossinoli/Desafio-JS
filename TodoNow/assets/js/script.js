function adicionarTarefa() {
    //pega o texto digitado e armazena na novaTarefa
    const novaTarefa = document.getElementById('novaTarefa').value;

    //validando se string esta vazio, antes de armazenar 
    if (novaTarefa === '') return;
  
    // armazemar como lista oq foi escrito
    const lista = document.getElementById('listaTarefas');

    //cria um novo li
    const itemLista = document.createElement('li');

    //atribui texto na lista
    itemLista.textContent = novaTarefa;
  
    //criação do botao concluir
    const botaoConcluir = document.createElement('button');
    botaoConcluir.textContent = 'Concluir';

    //click, a função definida é executada.
    botaoConcluir.onclick = function() {

    //estilo do item da lista é alterado, indicando que a tarefa foi concluída
      itemLista.classList.toggle('concluida');
    };
  
    //adiciona o botao concluir dentro da lista
    itemLista.appendChild(botaoConcluir);
    lista.appendChild(itemLista);

    // deixa o input nova tarefa string vazio
    document.getElementById('novaTarefa').value = '';
    
    // criar botao remover
    const remover = document.createElement('button');
    remover.textContent = 'Remover';

    // click, a função definida é executada.
    remover.onclick = function() {
        if (confirm("Tem certeza que deseja remover esta tarefa?")) {
            lista.removeChild(itemLista);
        }
    };

    // adicionar o botao remover dentro da lista
    itemLista.appendChild(remover);
    lista.appendChild(itemLista);
}