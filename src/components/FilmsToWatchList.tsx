import type React from 'react';
// TODO: Uncomment when Film interface is added
import type Film from '../utils/interfaces/Film.interface';
import FilmCard from './FilmCard';

// TODO: Define watchListFilmProps
// interface watchListFilmProps {
// }

interface WatchListFilmProps {
  filmsToWatch: Film[];
  removeFromStorage: (title: string) => void;
}

// TODO: Destructure filmsToWatch from props
const FilmsToWatchList: React.FC<WatchListFilmProps> = ({ filmsToWatch, removeFromStorage }) => {
  console.log(filmsToWatch);
  return (
    <>
      <ul>
        {filmsToWatch.map((film) => (
          <FilmCard
          currentFilm={film}
          key={film.Title}
          onWatchList={true}
          onSeenItList={false}
          addToWatchList={() => {}}
          addToSeenItList={() => {}}
          removeFromStorage={() => removeFromStorage(film.Title)}
          />
        ))}
      </ul>
    </>
  );
};

export default FilmsToWatchList;
