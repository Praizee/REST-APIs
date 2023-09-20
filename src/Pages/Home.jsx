import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

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
  const API_KEY = 'e6a9241d';
  const searchUrl = `http://www.omdbapi.com/?s=${search}&y=${yearFilter}&i=${imdbIdFilter}&apikey=${API_KEY}`;
  const popularMoviesUrl = `http://www.omdbapi.com/?s=popular&apikey=${API_KEY}`;

  const getMovies = async () => {
    try {
      const response = await fetch(searchUrl);
      const data = await response.json();
      if (data.Search) {
        setMovies(data.Search);
      } else {
        setMovies([]);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const onInputChange = (e) => {
    setSearch(e.target.value);
  };

  const onYearFilterChange = (e) => {
    setYearFilter(e.target.value);
  };

  const onImdbIdFilterChange = (e) => {
    setImdbIdFilter(e.target.value);
  };

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
      <section className="bg-[#F8F8FD] selection:bg-blue-400 border-2 border-blue-500 mt-[4rem] text-black">
        <div className="">
          <div className="mx-[rem] min-h-[calc(100vh-13.5rem)]">
            <div className="mx-4 text-center">
              <div className="my-12">
                {/* input */}
                <input
                  type="text"
                  value={search}
                  onChange={onInputChange}
                  autoComplete="true"
                  className="laptop:text-[1.3rem] text-[1rem] tablet:text-[1.2rem] p-2 px-4 pl-5 bg-slate-200 rounded-l-3xl"
                  placeholder="Search for movies..."
                />
                {/* Search button */}
                <button
                  type="submit"
                  onClick={getMovies}
                  className="btn laptop:text-[1.3rem] text-[1rem] tablet:text-[1.2rem] p-2 px-4 normal-case text-[#f8f8fd] bg-[#DF8026] hover:bg-[#DF8026]/75 rounded-r-3xl rounded-l-none border-none"
                >
                  Search
                </button>

                {/* Filters */}
                <div className="mt-4 flex space-x-4">
                  <input
                    type="text"
                    value={yearFilter}
                    onChange={onYearFilterChange}
                    className="p-2 px-4 bg-slate-200 rounded-md"
                    placeholder="Year filter"
                  />
                  <input
                    type="text"
                    value={imdbIdFilter}
                    onChange={onImdbIdFilterChange}
                    className="p-2 px-4 bg-slate-200 rounded-md"
                    placeholder="IMDb ID filter"
                  />
                </div>


              </div>

              {/* Movie results */}
              <div className="">
                {movies.length > 0 ? (
                  <div className="grid laptop:grid-cols-4 tablet:grid-cols-2 grid-cols-1 gap-4 p-4">
                    {movies.map((movie) => (
                      <div
                        key={movie.imdbID}
                        className="text-left w-auto border p-2 rounded-2xl"
                      >
                        <img
                          src={movie.Poster}
                          alt={movie.Title}
                          className="w-full mb-4 rounded-2xl"
                        />
                        <h1 className="">
                          <b>Movie Title:</b> &nbsp;
                          {movie.Title}
                        </h1>
                        <p>
                          <b>Year:</b> &nbsp;
                          {movie.Year}
                        </p>
                        {/* Add other movie details as needed */}
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
