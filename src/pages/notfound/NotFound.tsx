import Container from 'components/container/Container';

import './NotFound.css';

const NotFound = () => {
  return (
    <Container className="not-found">
      <h1>404</h1>
      <h2>The page you are looking for can't be found.</h2>
    </Container>
  );
}

export default NotFound;