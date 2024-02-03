import { NavLink, useLocation } from 'react-router-dom';
import css from './SearchForm.module.css';
// const defaultImg = '/src/img/avatar-1577909_640.jpg';

export const SearchForm = ({ value }) => {
  const location = useLocation();
  return (
    <section>
      <ul className={css.container}>
        {value.map(({ id, vote_average, poster_path, original_title }) => (
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
                        : `https://via.placeholder.com/960x1440/6%D1%817%D1%8181&text=image%20not%20found`
                    }
                  />
                </div>
              </NavLink>
              <div className={css.movieListConteiner}>
                <p className={css.movieListDesc}>
                  Rating{' '}
                  <span className={css.spanConteiner}>{vote_average}</span>
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
