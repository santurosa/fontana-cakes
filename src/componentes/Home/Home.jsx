import Carousels from "../Carousels/Carousels";
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import "./Home.css"

const Home = () => {
  return (
    <div>
        <Carousels/>
        <h1 className="productos">Productos</h1>
        <ItemListContainer/>
    </div>
  )
}

export default Home