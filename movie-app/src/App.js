import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import MoviesList from './components/MoviesList';
import MovieDetail from './components/MovieDetails';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/movies')
      .then((response) => {
        setMovies(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError('Failed to fetch movies data');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<MoviesList movies={movies} />} />
          <Route path="/movies/:id" element={<MovieDetail movies={movies} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
