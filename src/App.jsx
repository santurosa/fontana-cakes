import NavBar from "./componentes/NavBar/NavBar";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import ItemDetailConteiner from "./componentes/ItemDetailConteiner/ItemDetailConteiner";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CarritoProvider } from "./Context/CarritoContext";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <CarritoProvider>
          <NavBar/>
          <Routes>
            <Route path="/" element={<ItemListContainer/>}/>
            <Route path="/categoria/:idCategoria" element={<ItemListContainer/>}/>
            <Route path="/item/:idItem" element={<ItemDetailConteiner/>}/>
            <Route path="*" element={<h2>¡Sitio en construcción!</h2>}/>
          </Routes>
        </CarritoProvider>
      </BrowserRouter>
    </>
  )
}

export default App;