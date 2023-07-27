import '../src/App.css';
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting={'¡Bienvenido a Geek Palace!'} />
      <ItemDetailContainer/>
    </>
  );
}

export default App;
