import { useEffect, useState } from "react";
import "./global.css";
function App() {
  const[listatarefas, setListaTarefas] = useState([]);
  const[tarefa, setTarefa] = useState( {id:'', texto:""} );
  function AddTarefa(){
    if(tarefa.texto !== ""){
    setListaTarefas([...listatarefas, tarefa]);
    }
  }
  function excluirTarefa(id){
    const novalista = listatarefas.filter((tarefa) => tarefa.id !== id );
    setListaTarefas(novalista);
  }
  useEffect(() => {
    setTarefa({id: "", texto: ""});
  }, [ listatarefas ] )
  return (
    <>
      <header>
        <h1>To-Do List</h1>
      </header>
      <div>
        <input type="text" name="tarefa" placeholder="Novo tópico" value={tarefa.texto} onChange={(e)=> setTarefa({id: Math.random(), texto: e.target.value})}/>
        <button onClick={AddTarefa}>Adicionar</button>
      </div>
      <div>
        <ul>
          {listatarefas.map((item, index)=>(
          <li key={item.id}>{item.texto} <button onClick={() => excluirTarefa(item.id)}>X</button></li>))}
        </ul>
      </div>

    </>
  );
}

export default App;
