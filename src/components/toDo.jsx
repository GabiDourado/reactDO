import { useEffect, useState } from "react";
import Logo from "./css/img/nota-logo.png"
import DataHora from "./dataHora";


function ToDO() {
  const[listatarefas, setListaTarefas] = useState([]);
  const[tarefa, setTarefa] = useState( "" );
  const[ data, setData ] = useState( '' );
  const[ hora, setHora ] = useState( '' );
  function AddTarefa(){
    if(tarefa !== ""){
        const novaTarefa = {
            id: Math.random(),
            texto: tarefa,
            status: false,
            data: data,
            hora: hora
        }
    setListaTarefas([...listatarefas, novaTarefa]);
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
    setTarefa("");
  }, [ listatarefas ] )

  const [showElement, setShowElement] = useState(false)
  function Showelement(){
    if(showElement === false){
        setShowElement(true)
    }
    else{
        setShowElement(false)
    }
  }

  return (
    
    <div className="tudo">
      <header className="header">
          <span>To-Do List </span>
          <img src={Logo} alt="logo"/>
      </header>
      <div className="btn-input">
        <input type="text" name="tarefa" placeholder="Novo tópico" value={tarefa} onChange={(e)=> setTarefa(e.target.value)}/>
        <button onClick={Showelement}>Adicionar</button>
      </div>
        <div className="HoraData" id="hora" style={{display: showElement }}>
        { showElement ? <DataHora funcao={AddTarefa} valorData={data} modificadorData={ (e) => setData( e.target.value )} valorHora={hora} modificadorHora={ (e) => setHora( e.target.value )} />: false }    
        </div>
      <div className="caderno">
        <ul>
          {listatarefas.map((item, index)=>(
          <div className="tarefa"><button className={item.status ? 'feito' : 'naoFeito'}  onClick={() => statusTarefa(item.id, item.status)}>{item.status ? <i class="fas fa-check-circle v"></i>: ''} </button><div className="voltatexto"><li className={item.status ? 'feitotexto' : 'naoFeitotexto'} key={item.id}>{item.texto} {item.data} {item.hora} </li></div><button className="fundoexcluir" onClick={() => excluirTarefa(item.id)}><i class="fas fa-times-circle x"></i></button></div>))}
        </ul>
      </div>

    </div>
  );
}

export default ToDO;
