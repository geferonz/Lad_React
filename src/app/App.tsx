import { Navigate, Routes, Route } from 'react-router-dom';
import Header from 'components/header/Header';
import Home from 'pages/home/Home';
import Comics from 'pages/comics/Comics';
import Computers from 'pages/computers/Computers';
import Games from 'pages/games/Games';
import NotFound from 'pages/notfound/NotFound';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}
        />
        <Route
          path="/comics-and-graphic-novels/*"
          element={<Comics />}
        />
        <Route
          path="/computers/*"
          element={<Computers />}
        />
        <Route
          path="/games-and-activities/*"
          element={<Games />}
        />
        <Route
          path="/not-found"
          element={<NotFound />}
        />
        <Route
          path = "*"
          element={<Navigate to="/not-found" replace />}
        />
      </Routes>
    </div>
  );
}

export default App;
