const express = require('express');
const cors = require('cors');
const moviesData = require('./moviesData.json');

const app = express();
const port = 5000;

app.use(cors());

app.get('/api/movies', (req, res) => {
  res.json(moviesData.movies);
});

app.get('/api/movies/:id', (req, res) => {
  const movieId = parseInt(req.params.id);

  const movie = moviesData.movies.find((m) => m.id === movieId);

  if (!movie) {
    return res.status(404).json({ error: 'Movie not found' });
  }

  res.json(movie);
});

app.listen(port, () => {
  console.log(`Backend server is running on http://localhost:${port}`);
});
