import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/NavBar';
import 'remixicon/fonts/remixicon.css';
import ItemCount from './container/ItemCount';
import ItemListContainer from './container/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemList from './container/ItemList';
import Item from './container/Item';
import ItemDetailContainer from './container/ItemDetailContainer';
import CartWidget from './components/Navbar/CartWidget';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/CartWidget" element={<CartWidget/>}/>
          <Route path="/category/:id" element={<ItemListContainer/>}/>
          <Route path="/Item/:id" element={<ItemDetailContainer/>}/>
        </Routes>
      </BrowserRouter>  

      {/* <Navbar/> */}
      {/* <ItemCount stock={5} initial={1} /> */}
      
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          German Piñeiro
        </p>

        <ItemCount stock={5} initial={1} />
        <ItemListContainer greeting="Estamos aprendiendo reac... " color="red" />
        <ButtonComponent />

        <ItemDetailContainer/>

        

      </header> */}
    </div>
  );
}

const ButtonComponent = () => {

  return <button> hola Chicos y Chicas </button>
}

export default App;
