import { useEffect, useState } from "react";
import "./global.css";
function App() {
  const[listatarefas, setListaTarefas] = useState([]);
  const[tarefa, setTarefa] = useState( {id:'', texto:"", status:""} );
  function AddTarefa(){
    if(tarefa.texto !== ""){
    setListaTarefas([...listatarefas, tarefa]);
    }
  }
  function excluirTarefa(id){
    const novalista = listatarefas.filter((tarefa) => tarefa.id !== id );
    setListaTarefas(novalista);
  }
  function statusTarefa(id, status){
    const index = listatarefas.findIndex((tarefa) => tarefa.id === id );
    listatarefas[index].status = !status; 
    setListaTarefas([...listatarefas]);

  }
  useEffect(() => {
    setTarefa({id: "", texto: "", status:""});
  }, [ listatarefas ] )
  return (
    <>
      <header>
        <h1>To-Do List</h1>
      </header>
      <div>
        <input type="text" name="tarefa" placeholder="Novo tópico" value={tarefa.texto} onChange={(e)=> setTarefa({id: Math.random(), texto: e.target.value, status:false })}/>
        <button onClick={AddTarefa}>Adicionar</button>
      </div>
      <div>
        <ul>
          {listatarefas.map((item, index)=>(
          <div><button className={item.status ? 'feito' : 'naoFeito'}  onClick={() => statusTarefa(item.id, item.status)}>{item.status ? 'V' : ''} </button><li key={item.id}>{item.texto} <button onClick={() => excluirTarefa(item.id)}>X</button></li></div>))}
        </ul>
      </div>

    </>
  );
}

export default App;
