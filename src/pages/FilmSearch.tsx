import { type FormEvent, useState } from 'react';

import { searchOMDB } from '../api/API';
import FilmCard from '../components/FilmCard';
// TODO: Uncomment when Film interface is added
import type Film from '../utils/interfaces/Film.interface';

const FilmSearch = () => {
  // TODO: Add Film interface to state variable and set initial state obj
  const [currentFilm, setCurrentFilm] = useState<Film | null>(null);

  const [searchInput, setSearchInput] = useState<string>('');

  // * Function for adding film to watch list
  const addToWatchList = () => {
    // TODO: Add Film interface
    const storedFilmsToWatch = localStorage.getItem('filmsToWatch');
    let parsedFilmsToWatch: Film[] = storedFilmsToWatch ? JSON.parse(storedFilmsToWatch) : [];


    if (typeof storedFilmsToWatch === 'string') {
      parsedFilmsToWatch = JSON.parse(storedFilmsToWatch);
    }
    if (currentFilm) {
      parsedFilmsToWatch.push(currentFilm);
      localStorage.setItem('filmsToWatch', JSON.stringify(parsedFilmsToWatch));
    }
  };

  // * Function for adding film to seen it list
  const addToSeenItList = () => {
    // TODO: Add Film interface
    const storedAlreadySeenFilms = localStorage.getItem('alreadySeenFilms');
    let parsedAlreadySeenFilms: Film[] = storedAlreadySeenFilms ? JSON.parse(storedAlreadySeenFilms) : [];


    if (typeof storedAlreadySeenFilms === 'string') {
      parsedAlreadySeenFilms = JSON.parse(storedAlreadySeenFilms);
    }
    if (currentFilm) {
      parsedAlreadySeenFilms.push(currentFilm);
      localStorage.setItem(
        'alreadySeenFilms',
        JSON.stringify(parsedAlreadySeenFilms)

      );
    }
  };

  // * Function for searching for a film by title using the OMDB API
  // TODO: Add types to event and film_title
  const searchForFilmByTitle = async (event: FormEvent, film_title: string) => {
    event.preventDefault();
    // TODO: Add Film interface to data
    const data = await searchOMDB(film_title);

    setCurrentFilm(data);
  };

  return (
    <>
      <section id='searchSection'>
        <form onSubmit={(event) => searchForFilmByTitle(event, searchInput)}>
          <input
            type='text'
            name=''
            id=''
            placeholder='Enter a Film'
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button type='submit' id='searchBtn'>
            Search
          </button>
        </form>
      </section>
      {currentFilm && (
      <FilmCard
        currentFilm={currentFilm}
        addToWatchList={addToWatchList}
        addToSeenItList={addToSeenItList}
        removeFromStorage={() => {}}
        onWatchList={false}
        onSeenItList={false}
        />
      )}
    </>
  );
};

export default FilmSearch;
