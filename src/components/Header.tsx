import { Link, useLocation } from "react-router-dom";
import styled from 'styled-components';

import { logo } from 'assets';
import { Container } from 'components';

const BaseHeader = styled.header`
  height: 100px;
  background-color: black;
  color: #fff;
  display: flex;
  flex-direction: column;

  a {
    padding: 8px;
    cursor: pointer;

    img {
      width: 100px;
    }
  }

  nav ul {
    display: flex;
    list-style: none;
    padding: 0;

    li {
      font-weight: bold;
      font-size: 18px;
      margin-right: 18px;
  
      a {
        color: #fff;
        text-decoration: none;
  
        &:hover {
          text-decoration: underline;
        }
      }
  
      .active {
        background: #fff;
        color: #000;
      }
    }
  }
`

const BaseContainer = styled(Container)`
  justify-content: space-between;
`

const Header = () => {
  const location = useLocation();
  const splitLocation = location.pathname.split("/");

  return (
    <BaseHeader>
      <BaseContainer>
        <Link to="/"><img src={logo} className="logo" alt="logo" title="Home" /></Link>
        <nav>
          <ul>
            <li><Link to="/" className={splitLocation[1] === "" ? "active" : ""}>Home</Link></li>
            <li><Link to="/comics-and-graphic-novels/1" className={splitLocation[1] === "comics-and-graphic-novels" ? "active" : ""}>Comics & Graphic novels</Link></li>
            <li><Link to="/computers/1" className={splitLocation[1] === "computers" ? "active" : ""}>Computers</Link></li>
            <li><Link to="/games-and-activities/1" className={splitLocation[1] === "games-and-activities" ? "active" : ""}>Games & Activities</Link></li>
          </ul>
        </nav>
      </BaseContainer>
    </BaseHeader>
  );
}

export default Header;
