import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

const animationConfiguration = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
};

const Case02 = () => {
    const [movie, setMovie] = useState({});
    const [search, setSearch] = useState('');
    const API_KEY = "e6a9241d";
    const url = `https://www.omdbapi.com/?t=${search}&apikey=${API_KEY}`;

    // Function to fetch movie data
    const getMovie = async () => {
        try {
            const response = await fetch(url);
            const data = await response.json()
            setMovie(data);
            console.log(data);
        } catch (error) {
            console.error(error);
        }
    }

    // Event handler for input change
    const onInputChange = e => {
        setSearch(e.target.value);
    }

    useEffect(() => {
        // Fetch movie data when the component mounts
        getMovie();
    }, []);

    // Function to check the response and render the movie details or a message
    function checkResponse(data) {
        if (data.Response === "True") {
            return (
                <div className="grid laptop:grid-cols-4 tablet:grid-cols-2 grid-cols-1 gap-4 p-4">
                    <div className="text-left w-auto border p-2 rounded-2xl">
                        {/* Movie details */}
                        <img
                            src={data.Poster}
                            alt="Movie Poster"
                            className="w-[25rem] h-[25rem] mb-4 rounded-2xl"
                        />
                        <h1 className="">
                            <b>Movie Title:</b> &nbsp;
                            {data.Title}
                        </h1>
                        {/* Add more movie details */}
                    </div>
                </div>
            );
        }
        // Message for no movie found
        return (
            <p className='my-8'>
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
            <section className='bg-[#F8F8FD] border-2 border-blue-500 mt-[4rem] text-black'>
                <div className="">
                    <div className='mx-[rem] min-h-[calc(100vh-13.5rem)]'>
                        <div className='mx-4 text-center'>
                            <div className="my-12">
                                {/* Input for searching */}
                                <input type="text"
                                    value={search}
                                    onChange={onInputChange}
                                    autoComplete='true'
                                    autoFocus
                                    className="laptop:text-[1.3rem] text-[1rem] tablet:text-[1.2rem] p-2 px-4 bg-slate-200 rounded-l-3xl"
                                />
                                {/* Search button */}
                                <button
                                    type="submit"
                                    onClick={getMovie}
                                    className="btn laptop:text-[1.3rem] text-[1rem] tablet:text-[1.2rem] p-2 px-4 normal-case text-[#f8f8fd] bg-[#DF8026] hover:bg-[#DF8026]/75 rounded-r-3xl rounded-l-none border-none"
                                >
                                    Search
                                </button>
                            </div>
                            {/* Display movie details or message */}
                            <div className="">
                                {checkResponse(movie)}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </motion.div>
    );
}

export default Case02;
