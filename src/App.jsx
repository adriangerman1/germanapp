import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/NavBar';
import 'remixicon/fonts/remixicon.css';
import ItemListContainer from './container/ItemListContainer/ItemListContainer';
import ItemCount from './container/ItemListContainer/ItemCount';





function App() {
  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer greeting="Estamos aprendiendo reac... " color="red"/>

      <ItemCount />  

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
