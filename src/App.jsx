import NavBar from "./componentes/NavBar/NavBar";
import Carousels from "./componentes/Carousels/Carousels";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import ItemDetailConteiner from "./componentes/ItemDetailConteiner/ItemDetailConteiner";
import Cart from "./componentes/Cart/Cart";
import CheckOut from "./componentes/CheckOut/CheckOut";
import Footer from "./componentes/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CarritoProvider } from "./Context/CarritoContext";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <CarritoProvider>
          <NavBar/>
          <Carousels/>
          <Routes>
            <Route path="/" element={<ItemListContainer/>} />
            <Route path="/categoria/:idCategoria" element={<ItemListContainer/>} />
            <Route path="/item/:idItem" element={<ItemDetailConteiner/>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/checkout" element={<CheckOut/>} />
            <Route path="*" element={<h2>¡Sitio en construcción!</h2>} />
          </Routes>
          <Footer/>
        </CarritoProvider>
      </BrowserRouter>
    </>
  )
}

export default App;