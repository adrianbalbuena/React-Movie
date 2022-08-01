import axios from 'axios';

export const getPopularMovies = async () => {
  console.log('getpopularmovies');
  const response = await axios.get(
    'https://api.themoviedb.org/3/movie/popular?api_key=af0b051a44af798ff8b349ce0c9fa9d0',
  );

  if (response.status === 200) {
    console.log('200');
    const titles = response.data.results.map((movie) => movie.title);
    return titles;
  }
  return [];
};
