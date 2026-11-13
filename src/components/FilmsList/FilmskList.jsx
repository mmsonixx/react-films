import { FilmsItem } from "../FilmsItem/FilmsItem";
export const FilmsList = ({ films }) => (
  <>
    <ul className="list">
      {films.map((film) => (
        <FilmsItem film={film} key={film.id} />
      ))}
    </ul>
  </>
);
