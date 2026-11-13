export const FilmsItem = ({ film }) => (
  <>
    <li className="item">
      <h2 className="item__title">{film.title}</h2>
      <p>{film.year}</p>
      <p>{film.description}</p>
      <p>{film.rating}</p>
      <img src={film.poster} alt={film.title} className="item__poster" />
      <p>{film.genre}</p>
    </li>
  </>
);
