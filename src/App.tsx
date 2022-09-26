import { Navigate, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

import { categories } from 'assets';
import { Header } from 'components';
import { Books, Home, NotFound } from 'pages';

const BaseApp = styled.div`
  text-align: center;
`

const App = () => {
  return (
    <BaseApp>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}
        />
        {
          categories.map((item, index) => (
            <Route
              key={index}
              path={item.path}
              element={<Books title={item.title} src={item.src} />}
            />
          ))
        }
        <Route
          path="/not-found"
          element={<NotFound />}
        />
        <Route
          path = "*"
          element={<Navigate to="/not-found" replace />}
        />
      </Routes>
    </BaseApp>
  );
}

export default App;
