const button = document.querySelector(".btn-add-task");
const input = document.querySelector(".input-task");
const listaCompleta = document.querySelector(".list-task");

let minhaListaDeItens = [];

function adcionarNovaTarefa() {
  minhaListaDeItens.push({
    tarefa: input.value,
    concluida: false
  });

  input.value = "";

  mostraTarefas();
}

function mostraTarefas() {
  let novaLi = "";

  minhaListaDeItens.forEach((tarefa, index) => {
    novaLi =
      novaLi +
      ` 
        <li class="task ${tarefa.concluida && "done"}">
           <img src="./img/checked.png" alt="check=-na-tarefa" onclick ="concluirTarefa(${index})"/>
           <p>${tarefa.tarefa}</p>
           <img src="./img/trash.png" alt="tarefa-o-lixo" onclick="deletarItem(${index})" />
        </li>
 `;
  });

  listaCompleta.innerHTML = novaLi;
  localStorage.setItem('lista', JSON.stringify(minhaListaDeItens));
}

function concluirTarefa(index) {
  minhaListaDeItens[index].concluida = !minhaListaDeItens[index].concluida;

  mostraTarefas();
}

function deletarItem(index) {
  minhaListaDeItens.splice(index, 1);

  mostraTarefas();
}

function regarregarTarefas(){
    const tarefasDoLocalStrorage =  localStorage.getItem("lista");

    if(tarefasDoLocalStrorage){
        
    minhaListaDeItens = JSON.parse(tarefasDoLocalStrorage)
    }
    mostraTarefas()


    } 
regarregarTarefas()
button.addEventListener("click", adcionarNovaTarefa);
