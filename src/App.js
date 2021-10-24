import './App.css';
import Navbarr from './Components/navbar';
import Filter from './Components/Filter';
import Add from './Components/Add';
import MovieCard from './Components/MovieCard';
import MovieList from './Components/Movielist';
import Rate from './Components/Rate';
import {movies} from './Components/movies'
import {useState} from "react"
function App() {
  const [movieList , setmovieList] = useState(movies)
  const addHandler=(newMovie)=>{
    setmovieList(
      [...movieList, newMovie]
      
    )
  }
  const [search, setsearch] = useState("")
  const [rate, setrate] = useState(1)
  return (
    <div className="App">
    <Navbarr/>
    <Filter setsearch={setsearch} setrate={setrate} rate={rate}/>
    <Add addHandler={addHandler}/>
    <MovieList movieList={movieList} search={search} rate={rate}/>
    </div>
  );
}

export default App;
