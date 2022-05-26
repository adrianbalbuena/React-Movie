import './App.css';
import Title from './Title';
import PopularMovies from './PopularMovies';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title />
      </header>
      <div>
        <h3>Una app de prueba!</h3>
      </div>
      <PopularMovies />
    </div>
  );
}

export default App;
