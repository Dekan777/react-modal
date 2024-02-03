import { fetchCast } from '../Api/Api';
import css from './Cast.module.css';

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// import { defaultImg } from '/src/img/avatar-1577909_640.jpg';
export default function Cast() {
  const { id } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchMovieCast = async () => {
      try {
        if (id) {
          const castData = await fetchCast(id);

          setCast(castData.cast);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovieCast();
  }, [id]);

  return (
    <section className={css.section}>
      <ul className={css.container}>
        {cast.map(({ name, profile_path, character }, index) => (
          <li key={`${index}`} className={css.castListItem}>
            {profile_path ? (
              <img
                alt={name}
                className={css.movieListImg}
                width="80"
                height="180"
                src={`https://image.tmdb.org/t/p/original${profile_path}`}
              />
            ) : (
              <img
                src="https://via.placeholder.com/960x1440/6%D1%817%D1%8181&text=image%20not%20found"
                alt={name}
                className={css.movieListImg}
                width="80"
                height="180"
              />
            )}
            {/* <p className={css.castP}>Name: {name}</p>
            <p className={css.castP}>Character: {character}</p> */}
          </li>
        ))}
      </ul>
    </section>
  );
}
