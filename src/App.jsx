import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/NavBar';
import 'remixicon/fonts/remixicon.css';
// import ItemListContainer from './container/ItemListContainer';
import ItemCount from './container/ItemCount';
import ItemListContainer from './container/ItemListContainer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      

      <ItemCount stock={5} initial={1}/>  

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          German Piñeiro
        </p>

        <ItemListContainer greeting="Estamos aprendiendo reac... " color="red"/>

        <ButtonComponent/>

      </header>
    </div>
  );
}

const ButtonComponent = ()=>{

  return <button> hola Chicos y Chicas </button>
}

export default App;
