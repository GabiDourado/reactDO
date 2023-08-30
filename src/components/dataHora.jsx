
import Style from "./css/datahora.module.css"
function DataHora(props){
    return(
    <div className={Style.imgHoraData}>
        <div>
        <label>
                <input type="date" min="2023-08-30" value={props.valorData} onChange={props.modificadorData} />
            </label>
            <label>
                <input type="time" value={props.valorHora} onChange={props.modificadorHora}/>
            </label>
            
        </div> 
        <button onClick={props.funcao}>Add</button>
    </div> 
    )
}
export default DataHora;