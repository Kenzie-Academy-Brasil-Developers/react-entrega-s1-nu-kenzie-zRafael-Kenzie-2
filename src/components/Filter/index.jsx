import './styles.css';

export function Filtros({ filters, filterTransactions }) {
  return (
    <div className="filterButton">
      <button
        className="button"
        onClick={() => {
          filters.todos();
        }}
      >
        Todos
      </button>
      <button className="button" onClick={() => filters.entradas()}>
        Entradas
      </button>
      <button className="button" onClick={() => filters.despesas()}>
        Despesas
      </button>
    </div>
  );
};
