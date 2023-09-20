import React from 'react';

const MovieDetail = ({ movie }) => {
  return (
    <div className="grid laptop:grid-cols-4 tablet:grid-cols-2 grid-cols-1 gap-4 p-4">
      <div className="text-left w-auto border p-2 rounded-2xl">
        <img src={movie.Poster} alt={movie.Title} className="w-full mb-4 rounded-2xl" />
        <h1>
          <b>Movie Title:</b> &nbsp;
          {movie.Title}
        </h1>
        <p>
          <b>Year:</b> &nbsp;
          {movie.Year}
        </p>
        <p>
          <b>Released:</b> &nbsp;
          {movie.Released}
        </p>
        {/* Add other movie details as needed */}
      </div>
    </div>
  );
};

export default MovieDetail;
