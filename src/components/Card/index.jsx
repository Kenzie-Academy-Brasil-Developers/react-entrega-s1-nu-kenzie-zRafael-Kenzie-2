import './style.css';
import trash from "./assets/trash.png"


export function Card ({ transacao, deleteCard, id }) {
  return (
    <>
      <div className="cardList">
        <div
          className={transacao.type === 'Entrada' ? 'entrada' : 'despesa'}
        ></div>
        <div className="description-div">
          <div className="description">
            <b>{transacao.description}</b>
          </div>
          <div className="type">{transacao.type}</div>
        </div>
        <div className="valor-div">
          <div className="value">{`R$ ${transacao.value},00`}</div>
          <button className="trashBtn" onClick={() => deleteCard(id)}>
            <img src={trash}alt="" />
          </button>
        </div>
      </div>
    </>
  );
};
