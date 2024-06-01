import './App.css';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<MovieList />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>
      </Router>
      {/* {<MovieList  />} */}
    </div>
  );
};

export default App;

