import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        🎬 MovieSearch
      </Link>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/favourites">Favourites</Link>
      </div>
    </nav>
  );
};

export default Navbar;
