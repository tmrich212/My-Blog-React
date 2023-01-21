import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>The Programmer's Blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create" style={{
                    color: " #4e4d4d",
                    backgroundColor: "white",
                    borderRadius: "8px"
                }}>New Blog</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;