import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
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
