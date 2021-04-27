import logo from './logo.svg';
import './App.css';
import Hola from './Components/Hola'
import Contador from './Components/Contador'
import Listado from './Components/Listado'
import Temperatura from './Components/Temperatura'
import formulario from './Components/Formulario'
import Formulario from './Components/Formulario';

function App() {
  return (
    <div className="App mt-5">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Formulario/>
        <Hola></Hola>
        <Contador></Contador>
        <Listado></Listado>
        <Temperatura></Temperatura>
      </header>
    </div>
  );
}

export default App;
