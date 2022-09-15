import { Link, useLocation } from "react-router-dom";
import logo from 'assets/logo.png';
import Container from 'components/container/Container';
import './Header.css';

const Header = () => {
  const location = useLocation();
  const splitLocation = location.pathname.split("/");

  return (
    <header className="header">
      <Container>
        <Link to="/"><img src={logo} className="logo" alt="logo" title="Home" /></Link>
        <nav>
          <ul>
            <li><Link to="/" className={splitLocation[1] === "" ? "active" : ""}>Home</Link></li>
            <li><Link to="/comics-and-graphic-novels/1" className={splitLocation[1] === "comics-and-graphic-novels" ? "active" : ""}>Comics & Graphic novels</Link></li>
            <li><Link to="/computers/1" className={splitLocation[1] === "computers" ? "active" : ""}>Computers</Link></li>
            <li><Link to="/games-and-activities/1" className={splitLocation[1] === "games-and-activities" ? "active" : ""}>Games & Activities</Link></li>
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
