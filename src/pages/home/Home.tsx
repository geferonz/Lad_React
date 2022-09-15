import { Link } from "react-router-dom";
import Container from 'components/container/Container';
import comics from 'assets/comics.png';
import computers from 'assets/computers.png';
import activities from 'assets/activities.png';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <div>
        <h1>Books</h1>
        <Container>
          <nav>
            <ul>
              <li>
                <Link to="/comics-and-graphic-novels/1">
                  <img src={comics} alt="" />
                  <div>Comics & Graphic novels</div>
                </Link>
              </li>
              <li>
                <Link to="/computers/2">
                  <img src={computers} alt="" />
                  <div>Computers</div>
                </Link>
              </li>
              <li>
                <Link to="/games-and-activities/3">
                  <img src={activities} alt="" />
                  <div>Games & Activities</div>
                </Link>
              </li>
            </ul>
          </nav>
        </Container>
      </div>
    </div>
  );
}

export default Home;
