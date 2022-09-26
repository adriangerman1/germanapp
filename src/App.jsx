import './App.css';
import Navbar from './components/Navbar/NavBar';
import 'remixicon/fonts/remixicon.css';
import ItemListContainer from './container/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './container/ItemDetailContainer';
import CartWidget from './components/Navbar/CartWidget';
import ItemCardContainer from './container/ItemCardContainer';
import CartContext from './context/CardContext';
import CardItem from './components/Navbar/CardItem';

function App() {

  return (
  
      <div className="App">

        <BrowserRouter>
          <CartContext>
          <Navbar />
          <Routes>
            <Route path="/" element={<ItemListContainer/>}/>
            <Route path="/CartWidget" element={<CartWidget/>}/>
            <Route path="/category/:id" element={<ItemListContainer/>}/>
            <Route path="/Item/:id" element={<ItemDetailContainer/>}/>
            <Route path="/Cart" element={<CartWidget/>}/>
          </Routes>
          </CartContext>
        </BrowserRouter> 

      </div>
  )
}

export default App;
