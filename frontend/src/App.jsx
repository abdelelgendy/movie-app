import './App.css'
import MovieCard from '../../components/MovieCard';
function App() {

  return (
      <>
        <MovieCard movie={{title: "abdos film", release_date: "2004"}}/>
        <MovieCard movie={{title: "joe film", release_date: "2000"}}/>
        <MovieCard movie={{title: "jim film", release_date: "2008"}}/>

     </>
  );
}



export default App
