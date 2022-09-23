import "./styles.css";
import nuKenzieLogo from "../../assets/NuKenzieB.png";
import { Form } from "../../components/Form";
import { TotalMoney } from "../../components/Total";
import { List } from "../../components/List";
import { useState } from "react";
import { Filtros } from "../../components/Filter";
import noCard from "./NoCard.png";

function Home({ setGoHome }) {
  const [listaTransacoes, setListaTransacoes] = useState([]);
  const [filtroTransacao, setFiltroTransacao] = useState(listaTransacoes);

  const deleteCard = (id) => {
    setListaTransacoes(listaTransacoes.filter((item) => item.id !== id));
    setFiltroTransacao(filtroTransacao.filter((item) => item.id !== id));
  };

  const filters = {
    todos: () => {
      setFiltroTransacao(listaTransacoes);
    },
    entradas: () => {
      setFiltroTransacao(
        listaTransacoes.filter((item) => item.type === "Entrada")
      );
    },
    despesas: () => {
      setFiltroTransacao(
        listaTransacoes.filter((item) => item.type === "Saída")
      );
    },
  };

  return (
    <div className="container">
      <header className="header-style">
        <div className="header-style-wrapper">
          <div className="header-container">
            <figure className="figure-style">
              <img
                className="img-KenzieLogo"
                src={nuKenzieLogo}
                alt="kenzie-logo"
              ></img>
            </figure>
          </div>
          <div className="btn">
            <button
              className="btn-header"
              type="button"
              onClick={() => setGoHome(false)}
            >
              Inicio
            </button>
          </div>
        </div>
      </header>
      <div className="mainHome">
        <div className="formTotal">
          <Form
            filtroTransacao={filtroTransacao}
            setFiltroTransacao={setFiltroTransacao}
            listaTransacoes={listaTransacoes}
            setListaTransacoes={setListaTransacoes}
          />
          {filtroTransacao.length !== 0 && (
            <TotalMoney listaTransacoes={filtroTransacao} />
          )}
        </div>
        <div className="rightBox">
          <div className="filterTitle">
            <h3 className="mainTitle">Resumo Financeiro</h3>
            <Filtros filters={filters} filtroTransacao={filtroTransacao} />
          </div>
          {filtroTransacao.length !== 0 ? (
            <List deleteCard={deleteCard} listaTransacoes={filtroTransacao} />
          ) : (
            <div className="RightBoxList">
              <h3 className="title">
                {" "}
                Você ainda não possui nenhum lançamento{" "}
              </h3>
              <img src={noCard} alt="" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
