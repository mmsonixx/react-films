import PropTypes from "prop-types";
import { FilmsItem } from "../FilmsItem/FilmsItem";
import { films } from "../../data/films";
export const FilmsList = ({ films }) => (
  <>
    <ul className="list">
      {films.map((film) => (
        <FilmsItem film={film} key={film.id} />
      ))}
    </ul>
  </>
);

FilmsList.PropTypes = {
  films: PropTypes.arrayOf(PropTypes.object),
};
