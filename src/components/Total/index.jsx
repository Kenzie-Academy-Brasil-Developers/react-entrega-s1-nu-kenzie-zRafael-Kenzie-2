import './style.css';

export function TotalMoney({ listaTransacoes }) {
  const total = () => {
    return listaTransacoes.reduce(
      (totalValue, valorAtual) =>
        valorAtual.type === 'saída'
          ? totalValue - valorAtual.value
          : totalValue + valorAtual.value,
      0
    );
  };

  return (
      <section className="total-section-container">
        <div className="total-section">
          <span className='span-total-value'>Valor Total:</span>
          <p className="preco-total">{`R$${total()},00`}</p>
        </div>
        <p className="descricao">O valor se refere ao saldo</p>
      </section>
  );
};
