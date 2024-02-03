import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
// import { HomePage } from '../pages/HomePage/HomePage';
import { Header } from './Header/Header';
// import { MovieDetailsPage } from '../pages/MovieDetailsPage/MovieDetailsPage';
// import { Cast } from './Cast/Cast';
// import { Reviews } from './Reviews/Reviews';
// import { MoviesPage } from '../pages/MoviePage/MoviesPage';
import css from './App.module.css';
import { Audio } from 'react-loader-spinner';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const MovieDetailsPage = lazy(() =>
  import('../pages/MovieDetailsPage/MovieDetailsPage')
);
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));
const MoviesPage = lazy(() => import('../pages/MoviePage/MoviesPage'));

export const App = () => {
  return (
    <div className={css.container}>
      <Header />

      <Suspense
        fallback={
          <div className={css.dots}>
            <Audio
              height="80"
              width="80"
              color="#008B8B"
              ariaLabel="audio-loading"
              wrapperStyle={{}}
              wrapperClass="wrapper-class"
              visible={true}
            />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies/:id" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="/movies" element={<MoviesPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};
