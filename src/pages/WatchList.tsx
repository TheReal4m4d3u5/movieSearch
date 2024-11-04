import { useEffect, useState } from 'react';
import FilmsToWatchList from '../components/FilmsToWatchList';
import type Film from '../utils/interfaces/Film.interface';

const WatchList = () => {
  const [filmsToWatch, setFilmsToWatch] = useState<Film[]>([]);

  const removeFromStorage = (title: string) => {
    const storedFilmsToWatch = localStorage.getItem('filmsToWatch');
    const parsedFilmsToWatch: Film[] = storedFilmsToWatch ? JSON.parse(storedFilmsToWatch) : [];

    const updatedFilmsToWatch = parsedFilmsToWatch.filter((film) => film.Title !== title);
    setFilmsToWatch(updatedFilmsToWatch);
    localStorage.setItem('filmsToWatch', JSON.stringify(updatedFilmsToWatch));
  };

  useEffect(() => {
    const storedFilmsToWatch = localStorage.getItem('filmsToWatch');
    const parsedFilmsToWatch: Film[] = storedFilmsToWatch ? JSON.parse(storedFilmsToWatch) : [];
    setFilmsToWatch(parsedFilmsToWatch);
  }, []);

  return (
    <>
      <h1 className='pageHeader'>Watch List</h1>
      {filmsToWatch.length === 0 ? (
        <h1 style={{ margin: '16px 0' }}>Add films to your watchlist.</h1>
      ) : (
        <FilmsToWatchList
          filmsToWatch={filmsToWatch}
          removeFromStorage={removeFromStorage}
        />
      )}
    </>
  );
};

export default WatchList;