import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import MovieDetail from './MovieDetail';

const animationConfiguration = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');
  const [yearFilter, setYearFilter] = useState('');
  const [imdbIdFilter, setImdbIdFilter] = useState('');
  const [selectedMovie, setSelectedMovie] = useState(null); // Track the selected movie
  const API_KEY = 'e6a9241d';
  const searchUrl = `https://www.omdbapi.com/?s=${search}&y=${yearFilter}&i=${imdbIdFilter}&apikey=${API_KEY}`;

  // Function to fetch movies
  const getMovies = async () => {
    try {
      const response = await fetch(searchUrl);
      const data = await response.json();
      console.log(data);

      if (data.Search) {
        let sortedMovies = [...data.Search]; // Create a copy of the movies array to avoid modifying the original data
        if (yearFilter === 'recent') {
          // Sort by year in descending order (most recent first)
          sortedMovies = sortedMovies.sort((a, b) => parseInt(b.Year) - parseInt(a.Year));
        } else if (yearFilter === 'oldest') {
          // Sort by year in ascending order (oldest first)
          sortedMovies = sortedMovies.sort((a, b) => parseInt(a.Year) - parseInt(b.Year));
        }
        setMovies(sortedMovies);
      } else {
        setMovies([]);
      }
    } catch (error) {
      console.error(error);
    }
  };

  // Event handler for search input change
  const onInputChange = (e) => {
    setSearch(e.target.value);
  };

  // Event handler for year filter change
  const onYearFilterChange = (e) => {
    setYearFilter(e.target.value);
    getMovies(); // Trigger sorting when the filter option changes
  };

  // Event handler for IMDb ID filter change
  const onImdbIdFilterChange = (e) => {
    setImdbIdFilter(e.target.value);
  };

  // Event handler for cancel button
  const handleCancel = () => {
    setSearch('');
    setYearFilter('');
    setImdbIdFilter('');
    setMovies([]);
    setSelectedMovie(null); // Reset selected movie
  };

  // Effect to fetch movies when search, year filter, or IMDb ID filter changes
  useEffect(() => {
    if (search || yearFilter || imdbIdFilter) {
      getMovies();
    } else {
      setMovies([]);
    }
  }, [search, yearFilter, imdbIdFilter]);

  return (
    <motion.div
      variants={animationConfiguration}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 3 }}
    >
      <section className="bg-[#F8F8FD] selection:bg-blue-400 border-4 border-blue-500 laptop:mt-[4rem] mt-[6rem] text-black">
        <div className="">
          <div className="mx-[rem] min-h-[calc(100vh-14.65rem)]">
            <div className="mx-4 text-center">
              <div className="my-12">
                <div className="my-12">
                  {/* Search input */}
                  <input
                    type="text"
                    value={search}
                    onChange={onInputChange}
                    autoComplete="true"
                    autoFocus
                    placeholder="Search for movies..."
                    className=" input laptop:text-[1.3rem] text-[0.875rem] tablet:text-[1.2rem] p-2 px-4 pl-5 bg-slate-200 rounded-l-3xl"
                  />
                  {/* Search button */}
                  <button
                    type="submit"
                    onClick={getMovies}
                    className="btn laptop:text-[1.3rem] text-[0.875rem] tablet:text-[1.2rem] p-2 px-4 normal-case text-[#f8f8fd] hover:bg-[#DF8026] bg-[#DF8026]/90 rounded-r-3xl rounded-l-none border-none"
                  >
                    Search
                  </button>
                </div>

                {/* Filters and Cancel button */}
                <div className="mt-4 laptop:flex laptop:mx-[rem] laptop:space-y-0 space-y-4 space-x-4">
                  <input
                    type="text"
                    value={yearFilter}
                    onChange={onYearFilterChange}
                    placeholder="Year filter"
                    className="p-2 px-4 bg-slate-200 rounded-md"
                  />
                  <input
                    type="text"
                    value={imdbIdFilter}
                    onChange={onImdbIdFilterChange}
                    placeholder="IMDb ID filter"
                    className="p-2 px-4 bg-slate-200 rounded-md"
                  />
                  {/* Year filter dropdown */}
                  <select
                    value={yearFilter}
                    onChange={onYearFilterChange}
                    className="p-2 px-4 bg-slate-200 rounded-md"
                  >
                    <option value="">Select Year</option>
                    <option value="recent">Recent First</option>
                    <option value="oldest">Oldest First</option>
                  </select>
                  {/* Cancel button */}
                  <button
                    type="button"
                    onClick={handleCancel}
                    className="btn laptop:text-[1.3rem] text-[1rem] tablet:text-[1.2rem] p-2 px-4 normal-case text-[#f8f8fd] bg-red-500 hover:bg-red-600 rounded-md"
                  >
                    Cancel
                  </button>
                </div>
              </div>

              {/* Movie results */}
              <div className="">
                {selectedMovie ? ( // If a movie is selected, show the detailed view
                  <MovieDetail movie={selectedMovie} />
                ) : movies.length > 0 ? (
                  <div className="grid cursor-pointer laptop:grid-cols-4 tablet:grid-cols-2 grid-cols-1 laptop:gap-8 tablet:gap-6 gap-10 p-4">
                    {movies.map((movie) => (
                      <div
                        key={movie.imdbID}
                        className="text-left w-auto border p-2 rounded-2xl"
                        onClick={() => setSelectedMovie(movie)} // Set the selected movie on click
                      >
                        <img
                          src={movie.Poster}
                          alt={movie.Title}
                          className="w-[25rem] h-[25rem] mb-4 rounded-2xl"
                        />
                        <h1>
                          <b>Movie Title:</b> &nbsp;
                          {movie.Title}
                        </h1>
                        <p>
                          <b>Year:</b> &nbsp;
                          {movie.Year}
                        </p>
                        {/* Add other movie details as needed here 🙃 */}
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="my-8">
                    {search || yearFilter || imdbIdFilter
                      ? 'No matching movies found! 😥'
                      : 'Start your search above.'}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
