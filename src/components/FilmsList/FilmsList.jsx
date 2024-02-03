import { NavLink, useLocation } from 'react-router-dom';
import css from './FilmsList.module.css';
const defaultImg = 'https://via.placeholder.com/960x1440/';
export const FilmsList = ({ filmSearch }) => {
  const location = useLocation();

  return (
    <ul className={css.container}>
      {filmSearch.map(({ id, vote_average, poster_path, original_title }) => (
        <li key={id} className={css.movieListItem}>
          <div className={css.movieConteiner}>
            <NavLink
              to={`/movies/${id}`}
              state={{ from: location }}
              className={css.movieListLink}
            >
              <div className={css.imgConteiner}>
                <img
                  alt={original_title}
                  className={css.movieListImg}
                  width="150"
                  height="290"
                  src={
                    poster_path
                      ? `https://image.tmdb.org/t/p/original${poster_path}`
                      : defaultImg
                  }
                />
              </div>
            </NavLink>
            <div className={css.movieListConteiner}>
              <p className={css.movieListDesc}>
                Rating <span className={css.spanConteiner}>{vote_average}</span>
              </p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};
