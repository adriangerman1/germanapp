import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          German Piñeiro
        </p>
        
        <ButtonComponent/>

      </header>
    </div>
  );
}

const ButtonComponent = ()=>{

  return <button> hola Chicos y Chicas </button>
}
export default App;
