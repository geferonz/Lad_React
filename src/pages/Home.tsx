import { Link } from "react-router-dom";
import styled from 'styled-components';

import { Container } from 'components';
import { activities, comics, computers } from 'assets';

const BaseHome = styled.div`
  overflow-y: scroll;
  height: calc(100vh - 100px);

  ul {
    padding: 0;
    flex-direction: column;
    list-style: none;

    li {
      margin: 14px 0;
      padding: 1px;

      &:hover {
        border: 1px solid #dcdcdc;
        padding: 0;
      }

      a {
        text-decoration: none;
        color: #000;
      }

      img {
        width: 220px;
        margin-bottom: 12px;
      }
    }
  }
`

const BaseContainer = styled(Container)`
  justify-content: center;
`

const Home = () => {
  return (
    <BaseHome>
      <div>
        <h1>Books</h1>
        <BaseContainer>
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
        </BaseContainer>
      </div>
    </BaseHome>
  );
}

export default Home;
