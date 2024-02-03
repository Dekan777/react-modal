import { fetchTrend } from '../../components/Api/Api';
import { FilmsList } from '../../components/FilmsList/FilmsList';
import { useEffect, useState } from 'react';
import css from './HomePage.module.css';

export default function HomePage() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    const trendFilms = async () => {
      try {
        const trend = await fetchTrend();
        setFilms(trend.results);
      } catch (error) {
        console.log(error);
      }
    };
    trendFilms();
  }, []);

  return (
    <main className={css.maine}>
      <FilmsList filmSearch={films} />
    </main>
  );
}
