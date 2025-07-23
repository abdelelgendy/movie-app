import { Link } from "react-router-dom"

function NavBar(){
    return(
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to ="/">Movie App</Link>
            </div>
            <div className="navbar-Links">
                <Link to ="/" className="nav-Link">Home</Link>
                <Link to ="/favorites" className="nav-Link">Favorites</Link>
            </div>
        </nav>
    )
}

export default NavBar