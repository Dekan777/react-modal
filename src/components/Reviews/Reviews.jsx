import { fetchReviews } from '../Api/Api';
import css from './Reviews.module.css';

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Reviews() {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchMovieReviews = async () => {
      try {
        if (id) {
          const castData = await fetchReviews(id);

          setReviews(castData.results);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovieReviews();
  }, [id]);

  return (
    <section className={css.sectiona}>
      {reviews.length > 0 ? (
        <ul className={css.container}>
          {reviews.map(({ id, author, author_details, content }) => (
            <li key={id} className={css.castListItem}>
              <h3 className={css.autor}>Author: {author}</h3>
              <p>Author rating: {author_details.rating}</p>
              <p className={css.content}>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className={css.infoRev}>Sorry, but no Reviews...</p>
      )}
    </section>
  );
}
