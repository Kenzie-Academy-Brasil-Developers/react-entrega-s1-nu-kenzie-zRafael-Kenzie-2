import './styles.css';
import nuKenzieLogo from '../../assets/Nu Kenzie.png';
import indexLogo from '../../assets/Group 277.svg';

function indexPage({ setGoHome }) {
  return (
        <div className="index-style">
          <div className="text-index">
              <img className="img-KenzieLogo" src={nuKenzieLogo} alt='logo Kenzie'></img>
            <h1 className="index-title"> Centralize o controle das suas finanças </h1>
            <span className="index-span"> de forma rápida e segura </span>
            <button className="login-btn" type="button" onClick={() => setGoHome(true)}>Iniciar</button>
          </div>
          <div className="main-img">
              <img className="img-logo" src={indexLogo} alt='logo Kenzie'></img>
          </div>
        </div>

  );
};

export default indexPage;

