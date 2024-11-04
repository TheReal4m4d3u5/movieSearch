import type React from 'react';
// TODO: Uncomment when Film interface is added
import type Film from '../utils/interfaces/Film.interface';
import FilmCard from './FilmCard';

// TODO: Define seenFilmProps
// interface seenFilmProps {
// }

interface SeenFilmProps {
  alreadyWatchedFilms: Film[];
  removeFromStorage: (title: string) => void;
}

// TODO: Destructure alreadyWatchedFilms from props
const FilmsAlreadySeen: React.FC<SeenFilmProps> = ({ alreadyWatchedFilms, removeFromStorage }) => {
  return (
    <ul>
      {alreadyWatchedFilms.map((film) => (
        <FilmCard
          currentFilm={film}
          key={film.Title}
          onSeenItList={true}
          onWatchList={false}
          addToWatchList={() => {}}
          addToSeenItList={() => {}}
          removeFromStorage={() => removeFromStorage(film.Title)}
        />
      ))}
    </ul>
  );
};

export default FilmsAlreadySeen;
