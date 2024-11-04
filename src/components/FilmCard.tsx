import type React from 'react';
import type Film from '../utils/interfaces/Film.interface';
import { IoEyeOutline } from 'react-icons/io5';
import { ImCross } from 'react-icons/im';
import { CgPlayListAdd } from 'react-icons/cg';


// FilmCard.tsx
// What it Does:

// Displays detailed information about a single film and allows
// you to add or remove it from lists.

// Key Parts:

// Film Details: Shows details like title, poster, director, and plot.
// Add/Remove Options: It has icons or buttons that let you add the film
// to a watch list or a seen list or remove it if it’s already on a list.
// Important Props:

// currentFilm: The film being shown.
// addToWatchList & addToSeenItList: Functions that handle adding the film to lists.
// removeFromStorage: A function to remove the film from a list.
// onWatchList & onSeenItList: Indicate if the film is already on one of the lists.


interface FilmCardProps {
  currentFilm: Film;
  addToWatchList: () => void;
  addToSeenItList: () => void;
  removeFromStorage?: () => void;
  onWatchList: boolean;
  onSeenItList: boolean;
}

const FilmCard: React.FC<FilmCardProps> = ({
  currentFilm,
  addToWatchList,
  addToSeenItList,
  removeFromStorage,
  onWatchList,
  onSeenItList
}) => {
  return (
    <>
      {currentFilm?.Title ? (
        <section className='filmCard'>
          <figure>
            <img src={currentFilm.Poster} alt={`${currentFilm.Title} poster`} />
          </figure>
          <article className='details'>
            <h2>{currentFilm.Title}</h2>
            <p><strong>Director:</strong> {currentFilm.Director}</p>
            <p><strong>Actors:</strong> {currentFilm.Actors}</p>
            <p><strong>Released:</strong> {currentFilm.Released}</p>
            <p><strong>Genre:</strong> {currentFilm.Genre}</p>
          </article>
          <article className='plot'>{currentFilm.Plot}</article>
          {onWatchList || onSeenItList ? (
            <aside className='icons'>
              <ImCross
                style={{ fontSize: '40px', cursor: 'pointer' }}
                onClick={removeFromStorage}  // Use removeFromStorage here if available
              />
            </aside>
          ) : (
            <aside className='icons'>
              <CgPlayListAdd
                style={{ fontSize: '50px', cursor: 'pointer' }}
                onClick={addToWatchList}
              />
              <IoEyeOutline
                style={{ fontSize: '50px', cursor: 'pointer' }}
                onClick={addToSeenItList}
              />
            </aside>
          )}
        </section>
      ) : (
        <h1 style={{ margin: '16px 0' }}>Please search for a film.</h1>
      )}
    </>
  );
};

export default FilmCard;