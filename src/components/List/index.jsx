import { Card } from '../Card';

export function List({ listaTransacoes, deleteCard }) {
  return (
    <div className="list">
      {listaTransacoes.map((transacao, index) => (
        <Card
          deleteCard={deleteCard}
          transacao={transacao}
          key={index}
          id={transacao.id}
        />
      ))}
    </div>
  );
};
