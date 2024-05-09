import Botao from './Components/Botao/';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <form>
        <label>User: <input type="text"/></label>
        <label>Password: <input type="password"/></label>
      </form>
      <button>Logar</button>
      <button>Esqueci a Senha</button>
      <Botao descricao='componente botao' nome='vasco'></Botao>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <h1>
          Vamos <code> Codar src/App.js</code> and save to reload.
          </h1>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Seja Bem Vindo ao Centro da Terra!!!
        </a>
  </header>
    </div>
  );
}

export default App;
