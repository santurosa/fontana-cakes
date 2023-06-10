import NavBar from "./componentes/NavBar/NavBar"
import CardWidget from "./componentes/CardWidget/CardWidget"
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer"

export const App = () => {
  return (
    <header>
      <NavBar/>
      <ItemListContainer greeting={"¡Encontrá todo para tus preparaciones en un solo lugar!"}/>
    </header>
  )
}

export default App;