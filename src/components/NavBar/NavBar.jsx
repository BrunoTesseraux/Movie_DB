import "./NavBar.scss";
import { Link } from "react-router-dom";

const NavBar = () => {
return (
<div className="NavBar">
    <Link to="/home" className={`navLink ${location.pathname === '/home' ? 'active' : ''}`}>
        <div className="imageContainer">
        <img src="src/components/SVG/Ellipse 7.svg" alt="#" className="ellipseImage navImage" />
        <img src="src/components/SVG/Home.svg" alt="Home" className={`homeImage navImage ${location.pathname === '/home' ? 'active' : ''}`} />
        <span className={`imageText ${location.pathname === '/home' ? 'active' : ''}`}>Home</span>
        </div>
    </Link>
    <Link to="/Favoriten" className={`navLink ${location.pathname === '/Favoriten' ? 'active' : ''}`}>
        <img src="src/components/SVG/Vector.svg" alt="Vector" className="navImage" />
    </Link>
    <Link to="/Downloads" className={`navLink ${location.pathname === '/Downloads' ? 'active' : ''}`}>
        <img src="src/components/SVG/Download.svg" alt="Download" className="navImage" />
    </Link>
    <Link to="/profile" className={`navLink ${location.pathname === '/profile' ? 'active' : ''}`}>
        <img src="src/components/SVG/Profile.svg" alt="Profile" className="navImage" />
    </Link>
    </div>
);
};

export default NavBar;