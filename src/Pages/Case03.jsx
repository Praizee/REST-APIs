import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const animationConfiguration = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
};

const Case03 = () => {
    const [movie, setMovie] = useState({});
    const [popularMovies, setPopularMovies] = useState([]);
    const [search, setSearch] = useState('');
    const API_KEY = 'e6a9241d';
    const url = `https://www.omdbapi.com/?t=${search}&apikey=${API_KEY}`;
    // const popularMoviesUrl = `https://www.omdbapi.com/?s=popular&apikey=${API_KEY}`;
    const popularMoviesUrl = `https://www.omdbapi.com/?type=movie&plot=short&r=json&apikey=${API_KEY}`;


    const getMovie = async () => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            setMovie(data);
        } catch (error) {
            console.error(error);
        }
    };

    const getPopularMovies = async () => {
        try {
            const response = await fetch(popularMoviesUrl);
            const data = await response.json();
            if (data.Search) {
                setPopularMovies(data.Search);
            }
        } catch (error) {
            console.error(error);
        }
    };

    const onInputChange = (e) => {
        setSearch(e.target.value);
    };

    useEffect(() => {
        getMovie();
        getPopularMovies(); // Fetch popular movies when the component loads
    }, []);

    function checkResponse(data) {
        if (data.Response === 'True') {
            return (
                <div className="grid laptop:grid-cols-4 tablet:grid-cols-2 grid-cols-1 gap-4 p-4">
                    <div className="text-left w-auto border p-2 rounded-2xl">
                        <img
                            src={data.Poster}
                            alt={data.Title}
                            className="w-full mb-4 rounded-2xl"
                        />
                        <h1 className="">
                            <b>Movie Title:</b> &nbsp;
                            {data.Title}
                        </h1>
                        {/* Add other movie details as needed */}
                    </div>
                </div>
            );
        }
        return (
            <p className="my-8">
                No Movie found! 😥
            </p>
        );
    }

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
                                    autoFocus
                                    className="laptop:text-[1.3rem] text-[1rem] tablet:text-[1.2rem] p-2 px-4 pl-5 bg-slate-200 rounded-l-3xl"
                                />

                                {/* search button */}
                                <button
                                    type="submit"
                                    onClick={getMovie}
                                    className="btn laptop:text-[1.3rem] text-[1rem] tablet:text-[1.2rem] p-2 px-4 normal-case text-[#f8f8fd] bg-[#DF8026] hover:bg-[#DF8026]/75 rounded-r-3xl rounded-l-none border-none"
                                >
                                    Search
                                </button>
                                <p className=' italic text-black/60 text-[0.875rem] my-1'>
                                    Search results show up at the bottom of the page
                                </p>
                            </div>

                            {/* popular movies */}
                            <div className="">
                                <h2 className="text-2xl font-semibold mb-4">Popular Movies</h2>
                                <div className="grid grid-cols-2 laptop:grid-cols-4 tablet:grid-cols-2 gap-4">
                                    {popularMovies.map((popularMovie) => (
                                        <div
                                            key={popularMovie.imdbID}
                                            className="text-left w-auto border p-2 rounded-2xl"
                                        >
                                            <img
                                                src={popularMovie.Poster}
                                                alt={popularMovie.Title}
                                                className="w-[25rem] h-[25rem] mb-4 rounded-2xl"
                                            />
                                            <h1 className="">
                                                <b>Movie Title:</b> &nbsp;
                                                {popularMovie.Title}
                                            </h1>
                                            {/* Add other movie details as needed */}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* movie search details/results */}
                            <div className="py-20 px-4">
                                <h1 className='text-center mb-8 text-[1.5rem] font-semibold'>
                                    Search Results
                                </h1>
                                {checkResponse(movie)}
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </motion.div>
    );
};

export default Case03;
