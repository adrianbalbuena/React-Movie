import { useEffect, useState } from 'react';
import './PopularMovies.css';
import { getPopularMovies } from './services/client';

function PopularMovies() {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    (async () => {
      const titles = await getPopularMovies();
      setPopularMovies(titles);
    })();
  }, []);

  return (
    <div className="container">
      <ul>
        {popularMovies.map((popularMovie) => (
          <li>{popularMovie}</li>
        ))}
      </ul>
    </div>
  );
}
export default PopularMovies;
