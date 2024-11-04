import { useEffect, useState } from 'react';
import FilmsAlreadySeen from '../components/FilmsAlreadySeen';
import type Film from '../utils/interfaces/Film.interface';

const SeenIt = () => {
  const [alreadyWatchedFilms, setAlreadyWatchedFilms] = useState<Film[]>([]);

  const removeFromStorage = (title: string) => {
    const storedAlreadySeenFilms = localStorage.getItem('alreadySeenFilms');
    const parsedAlreadySeenFilms: Film[] = storedAlreadySeenFilms
      ? JSON.parse(storedAlreadySeenFilms)
      : [];

    const updatedAlreadySeenFilms = parsedAlreadySeenFilms.filter(
      (film) => film.Title !== title
    );

    setAlreadyWatchedFilms(updatedAlreadySeenFilms);
    localStorage.setItem('alreadySeenFilms', JSON.stringify(updatedAlreadySeenFilms));
  };

  useEffect(() => {
    const storedAlreadySeenFilms = localStorage.getItem('alreadySeenFilms');
    const parsedAlreadyWatchedFilms = storedAlreadySeenFilms
      ? (JSON.parse(storedAlreadySeenFilms) as Film[])
      : [];
    setAlreadyWatchedFilms(parsedAlreadyWatchedFilms);
  }, []);

  return (
    <>
      <h1 className='pageHeader'>Seen It</h1>
      {alreadyWatchedFilms.length === 0 ? (
        <h1 style={{ margin: '16px 0' }}>Add films you've already seen here.</h1>
      ) : (
        <FilmsAlreadySeen
          alreadyWatchedFilms={alreadyWatchedFilms}
          removeFromStorage={removeFromStorage}
        />
      )}
    </>
  );
};

export default SeenIt;
