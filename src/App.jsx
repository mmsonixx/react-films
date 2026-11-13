import "./App.css";
import { FilmsList } from "./components/FilmsList/FilmskList";
import { films } from "./data/films";

function App() {
  return (
    <>
      <FilmsList films={films} />
    </>
  );
}

export default App;
