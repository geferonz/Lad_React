import styled from 'styled-components';

import { Container } from 'components';

const BaseNotFound = styled(Container)`
  flex-direction: column;
  margin: auto;

  h1 {
    font-size: 200px;
    margin-bottom: 0;
  }
`

const NotFound = () => {
  return (
    <BaseNotFound>
      <h1>404</h1>
      <h2>The page you are looking for can't be found.</h2>
    </BaseNotFound>
  );
}

export default NotFound;