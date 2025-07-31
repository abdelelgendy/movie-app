import MovieCard from "../components/MovieCard"
import { useState , useEffect} from "react"
import { SearchMovies, getPopularMovies } from "../services/api"
import "../css/Home.css"

const Home =()=>{

    const [searchQuery, setSearchQuery] = useState("")

    const [movies, setMovies] = useState([]);

    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        const LoadPopularMovies = async () =>{
            try{
                const PopularMovies = await getPopularMovies()
                setMovies(PopularMovies)
            }catch(err){
                console.log(err)
                setError("failed to load movies..")
            }
            finally{
                setLoading(false)
            }
        }
        
        LoadPopularMovies()
    },[])

    const handleSearch = async (e) => {
        e.preventDefault()
        if(!searchQuery.trim()) return  // Fixed: added ! to check if empty
        if (loading) return

        setLoading(true)
        setError(null) // Clear previous errors
        try{
            const searchResults = await SearchMovies(searchQuery) // Added API call
            setMovies(searchResults)
        }catch (err){
            console.log(err)
            setError("Failed to search movies")
        }finally{
            setLoading(false)
        }
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

            {error && <div className="error-message">{error}</div>}
            {loading && <div className="loading">loading...</div>}

        <div className="movies-grid">
            {movies.map((movie) =>( 
            <MovieCard movie ={movie} key={movie.id}/>
            ))}
        </div>
    </div>
)}

export default Home