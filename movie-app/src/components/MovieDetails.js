import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; 
import axios from 'axios';
import './MovieDetails.css'; 

const MovieDetail = ({ movies }) => {
  const location = useLocation();
  const navigate = useNavigate(); 

  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const movieId = parseInt(location.pathname.split('/').pop());

    axios
      .get(`http://localhost:5000/api/movies/${movieId}`)
      .then((response) => {
        setMovie(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError('Failed to fetch movie details');
        setLoading(false);
      });
  }, [location]);

  const handleGoBack = () => {
    navigate(-1); 
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <div className="movie-detail-container">

      


      <div className="movie-detail">
        <img src={movie.poster} alt={movie.name} className="movie-image" />
        <h2>{movie.name}</h2>
        <p>Rating: {movie.rating}</p>
        <p>Released Date: {movie.releasedDate}</p>
        <p>Description: {movie.description}</p>
        <button onClick={handleGoBack}>Go Back</button>
      </div>
    </div>
  );
};

export default MovieDetail;
