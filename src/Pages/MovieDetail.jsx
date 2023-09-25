import React from 'react';

const MovieDetail = ({ movie }) => {
  console.log(movie); // Log the movie object to the console

  return (
    <div className="grid laptop:grid-cols-4 tablet:grid-cols-2 grid-cols-1 gap-4 p-4">
      <div className="text-left w-auto border p-2 rounded-2xl">
        <img
          src={movie.Poster}
          alt={movie.Title}
          className="w-[25rem] h-[25rem] mb-4 rounded-2xl"
        />
        <h1 className="">
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
        {movie.Rated && (
          <p>
            <b>Rated:</b> &nbsp;
            {movie.Rated}
          </p>
        )}
        <p>
          <b>Genre:</b> &nbsp;
          {movie.Genre}
        </p>
        {movie.Writer && (
          <p>
            <b>Writer:</b> &nbsp;
            {movie.Writer}
          </p>
        )}
        {movie.Actors && (
          <p>
            <b>Actors:</b> &nbsp;
            {movie.Actors}
          </p>
        )}
        {movie.Plot && (
          <p>
            <b>Plot:</b> &nbsp;
            {movie.Plot}
          </p>
        )}
        <p>
          <b>Type:</b> &nbsp;
          {movie.Type}
        </p>
        {movie.Runtime && (
          <p>
            <b>Runtime:</b> &nbsp;
            {movie.Runtime}
          </p>
        )}
        {movie.Production && (
          <p>
            <b>Production:</b> &nbsp;
            {movie.Production}
          </p>
        )}
        <p>
          <b>IMDB Rating:</b> &nbsp;
          {movie.imdbRating}
        </p>
        <p>
          <b>IMDB ID:</b> &nbsp;
          {movie.imdbID}
        </p>
        {movie.Country && (
          <p>
            <b>Country:</b> &nbsp;
            {movie.Country}
          </p>
        )}
        {movie.Language && (
          <p>
            <b>Languages:</b> &nbsp;
            {movie.Language}
          </p>
        )}
        {movie.Awards && (
          <p>
            <b>Awards:</b> &nbsp;
            {movie.Awards}
          </p>
        )}
        {/* <p>Ratings: [{movie.Ratings}]</p> */}
        <p className='hidden'>{movie.Response}</p>
      </div>
    </div>
  );
};

export default MovieDetail;


// import React from 'react';

// const MovieDetail = ({ movie }) => {
//   return (
//     <div className="grid laptop:grid-cols-4 tablet:grid-cols-2 grid-cols-1 gap-4 p-4">
//       <div className="text-left w-auto border p-2 rounded-2xl">
//         <img
//           src={movie.Poster}
//           alt={movie.Title}
//           className="w-full mb-4 rounded-2xl"
//         />
//         <h1 className="">
//           <b>Movie Title:</b> &nbsp;
//           {movie.Title}
//         </h1>
//         <p>
//           <b>Year: </b> &nbsp;
//           {movie.Year}
//         </p>
//         <p>
//           <b>Released:</b> &nbsp;
//           {movie.Released}
//         </p>
//         <p>
//           <b>Rated:</b> &nbsp;
//           {movie.Rated}
//         </p>
//         <p>
//           <b>Genre:</b> &nbsp;
//           {movie.Genre}
//         </p>
//         <p>
//           <b>Writer:</b> &nbsp;
//           {movie.Writer}
//         </p>
//         <p>
//           <b>Actors:</b> &nbsp;
//           {movie.Actors}
//         </p>
//         <p>
//           <b>Plot:</b> &nbsp;
//           {movie.Plot}
//         </p>
//         <p>
//           <b>Type:</b> &nbsp;
//           {movie.Type}
//         </p>
//         <p>
//           <b>Runtime:</b> &nbsp;
//           {movie.Runtime}
//         </p>
//         <p>
//           <b>Production:</b> &nbsp;
//           {movie.Production}
//         </p>
//         <p>
//           <b>IMDB Rating:</b> &nbsp;
//           {movie.imdbRating}
//         </p>
//         <p>
//           <b>IMDB ID:</b> &nbsp;
//           {movie.imdbID}
//         </p>
//         <p>
//           <b>Country:</b> &nbsp;
//           {movie.Country}
//         </p>
//         <p>
//           <b>Languages:</b> &nbsp;
//           {movie.Language}
//         </p>
//         <p>
//           <b>Awards:</b> &nbsp;
//           {movie.Awards}
//         </p>
//         {/* <p>Ratings: [{movie.Ratings}]</p> */}
//         <p className='hidden'>{movie.Response}</p>
//       </div>
//     </div>
//   );
// };

// export default MovieDetail;
