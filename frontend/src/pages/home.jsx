import MovieCard from "../components/MovieCard"
import { useState } from "react"

const Home =()=>{

    const [searchQuery, setSearchQuery] = useState("")

    const movies = [
        {id: 1, title: "blade runner", release_date: "2020"},
        {id: 2, title: "maze runner", release_date: "2016"},
        {id: 3, title: "john wick", release_date: "2024"},
        {id: 4, title: "terminator", release_date: "1990"},       
    ]
    
    const handleSearch = (e) =>{
        e.preventDefault()
        alert(searchQuery)

    }

    return (
    <div className="home">
        <form onSubmit={handleSearch} className="search-form">
            <input type="text" 
            placeholder="search for movies..." 
            className="search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="search-button">search</button>
        </form>

        <div className="movies-grid">
            {movies.map((movie) =>( 
            movie.title.toLowerCase().startsWith(searchQuery) && (
            <MovieCard movie ={movie} key={movie.id}/>
            )
            ))}
        </div>
    </div>
)}

export default Home