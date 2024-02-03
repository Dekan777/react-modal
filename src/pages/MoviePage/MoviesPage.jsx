import { useSearchParams } from 'react-router-dom';
import { SearchBox } from '../../components/SearchBox/SearchBox';
import { fetchMuvies } from '../../components/Api/Api';
import { useEffect, useState } from 'react';
import { SearchForm } from '../../components/SearchForm/SearchForm';
import css from './MoviesPage.module.css';

export default function MoviesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [muvies, setMuvies] = useState([]);

  const handleSearch = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  useEffect(() => {
    const muviePages = async () => {
      try {
        const search = await fetchMuvies(searchParams);
        setMuvies(search.results);
      } catch (error) {
        console.log(error);
      }
    };
    muviePages();
  }, [searchParams]);

  return (
    <main className={css.container}>
      <SearchBox onSearch={handleSearch} />
      <SearchForm value={muvies} />
    </main>
  );
}
