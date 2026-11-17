import "./App.css";
import { FilmsList } from "./components/FilmsList/FilmskList";
import { Container } from "./components/Container/Container";
import { films } from "./data/films";

function App() {
  return (
    <>
      <Container>
        <FilmsList films={films} />
      </Container>
    </>
  );
}

export default App;
