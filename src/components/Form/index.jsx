import "./style.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export function Form({listaTransacoes,setListaTransacoes,setFiltroTransacao, filtroTransacao,}) 
{
  const [type, setTipo] = useState("");
  const [description, setDescricao] = useState("");
  const [value, setValue] = useState("");

  function addForm(newForm) {
    setFiltroTransacao([...filtroTransacao, newForm]);
    setListaTransacoes([...listaTransacoes, newForm]);
    reset();
  }
  function reset() {
    setTipo("");
    setDescricao("");
    setValue("");
  }

  function handleSubmit(event){
    event.preventDefault();
    console.log(event)

    addForm({ 
          id: uuidv4(),
          description,
          type,
          value: type === "Saída" ? value * -1 : value,
        })}
  

  return (
    <form className="form" onSubmit={handleSubmit}>
      <section className="description-section">
          <span className="description-span">Descrição</span>
          <input className="input-section" value={description} type="text" placeholder="Digite aqui sua descrição" onChange={(event) => setDescricao(event.target.value)}/>
      </section>
        <section className="insert-section-style">
          <div className="value-section">
            <span className="value-span">Valor</span>
            <input className="input-insert-section" value={value} type="number" placeholder="0" onChange={(event) => setValue(Number(event.target.value))}/>        
          </div>
          <section className="type-section">
            <span className="value-span-type">Tipo de valor</span>
            <select value={type} onChange={(event) => {setTipo(event.target.value);}}>
              <option value="" defaultValue disabled hidden>Choose here</option>
              <option value="Entrada">Entrada</option>
              <option value="Saída">Despesa</option>
            </select>
          </section>
        </section>
      <div className="form-btn-position">
        <button type="submit" 
            className="form-btn">Inserir Valor
        </button>   
      </div>
    </form>
  );
}
