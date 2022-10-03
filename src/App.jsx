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
import ItemById from './container/ItemById';
import FormContac from './container/FormContac';
import ContacForm from './container/ContacForm';


function App() {

  return (
  
      <div className="App">
        
        <BrowserRouter>
          <CartContext>
          <Navbar />
          <Routes>
            <Route path="/" element={<ItemListContainer/>}/>
            <Route path="/CartWidget" element={<CartWidget/>}/>
            <Route path="/ategory/:id" element={<ItemListContainer/>}/>
            <Route path="/Item/:id" element={<ItemDetailContainer/>}/>
            <Route path="/Form" element={<ContacForm/>}/>
            <Route path="/Cart" element={<CartWidget/>}/>
          </Routes>
          </CartContext>
        </BrowserRouter> 

        {/* <ContacForm/> */}

      </div>
  )
}

export default App;
