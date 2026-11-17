import PropTypes from "prop-types";
export const FilmsItem = ({ film }) => (
  <>
    <li className="item">
      {film.title.length > 0 && <h2 className="item__title">{film.title}</h2>}
      <p>{film.year}</p>
      {film.description.length > 0 ? (
        <p>{film.description}</p>
      ) : (
        <p>No information available</p>
      )}
      <p>{film.rating}</p>
      <img src={film.poster} alt={film.title} className="item__poster" />
      <p>{film.genre}</p>
    </li>
  </>
);

FilmsItem.PropTypes = {
  film: PropTypes.shape({
    title: PropTypes.string.isRequired,
    year: PropTypes.number,
    description: PropTypes.string,
    rating: PropTypes.number,
    poster: PropTypes.string,
    genre: PropTypes.array,
  }),
};
