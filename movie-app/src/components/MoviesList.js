import React from 'react';
import { NavLink } from 'react-router-dom';
import './MoviesList.css';

const MovieCard = ({ movie }) => {
  const fullStars = Math.round((movie.rating / 10) * 5);

  const renderStarRating = (fullStars) => {
    const stars = '★'.repeat(fullStars);
    const emptyStars = '☆'.repeat(5 - fullStars);
    return (
      <span className="star-rating">
        {stars}
        {emptyStars}
      </span>
    );
  };

  return (
    <div className="movie-card">
    <NavLink
      to={`/movies/${movie.id}`} 
      activeClassName="selected"
    >
      <img src={movie.poster} alt={movie.name} />
      <h2>{movie.name}</h2>
    </NavLink>
    <p>Rating: {renderStarRating(fullStars)}</p>
    <p>Released Date: {movie.releasedDate}</p>
  </div>
  );
};

const MoviesList = ({ movies }) => {
  return (
    <div className="movies-list">
      {movies.map((movie) => (
        <NavLink
          key={movie.id}
          to={`/movies/${movie.id}`}
          activeClassName="selected"
        >
          <MovieCard movie={movie} />
        </NavLink>
      ))}
    </div>
  );
};

export default MoviesList;
