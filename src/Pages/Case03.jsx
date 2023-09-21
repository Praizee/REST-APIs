import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";


const animationConfiguration = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
};

const Case03 = () => {
    const [movie, setMovie] = useState({});
    const [search, setSearch] = useState('');
    const API_KEY = "e6a9241d";
    const url = `http://www.omdbapi.com/?t=${search}&apikey=${API_KEY}`;

    const getMovie = async () => {
        try {
            const response = await fetch(url);
            const data = await response.json()
            setMovie(data);
        } catch (error) {
            console.error(error);
        }
    }

    const onInputChange = e => {
        setSearch(e.target.value);
    }

    useEffect(() => {
        getMovie();
    }, []);


    function checkResponse(data) {
        if (data.Response === "True") {
            return (
                <div className="grid laptop:grid-cols-4 tablet:grid-cols-2 grid-cols-1 gap-4 p-4">
                    <div className="text-left w-auto border p-2 rounded-2xl">
                        <img
                            src={data.Poster}
                            alt="Movie Poster"
                            className="w-full mb-4 rounded-2xl"
                        />
                        <h1 className="">
                            <b>Movie Title:</b> &nbsp;
                            {data.Title}
                        </h1>
                        <p>
                            <b>Year: </b> &nbsp;
                            {data.Year}
                        </p>
                        <p>
                            <b>Released:</b> &nbsp;
                            {data.Released}
                        </p>
                        <p>
                            <b>Genre:</b> &nbsp;
                            {data.Genre}
                        </p>
                        <p>
                            <b>Writer:</b> &nbsp;
                            {data.Writer}
                        </p>
                        <p>
                            <b>Actors:</b> &nbsp;
                            {data.Actors}
                        </p>
                        <p>
                            <b>Plot:</b> &nbsp;
                            {data.Plot}
                        </p>
                        <p>
                            <b>Type:</b> &nbsp;
                            {data.Type}
                        </p>
                        <p>
                            <b>Runtime:</b> &nbsp;
                            {data.Runtime}
                        </p>
                        <p>
                            <b>IMDB Rating:</b> &nbsp;
                            {data.imdbRating}
                        </p>
                        <p>
                            <b>Country:</b> &nbsp;
                            {data.Country}
                        </p>
                        <p>
                            <b>Languages:</b> &nbsp;
                            {data.Language}
                        </p>
                        <p>
                            <b>Awards:</b> &nbsp;
                            {data.Awards}
                        </p>
                        {/* <p>Ratings: [{data.Ratings}]</p> */}
                        <p className='hidden'>{data.Response}</p>
                    </div>
                </div>
            );
        }
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
                                {/* input */}
                                <input type="text"
                                    value={search}
                                    onChange={onInputChange}
                                    autoComplete='true'
                                    className="laptop:text-[1.3rem] text-[1rem] tablet:text-[1.2rem] p-2 px-4 bg-slate-200 rounded-l-3xl"
                                />

                                {/* search button */}
                                <button
                                    type="submit"
                                    onClick={getMovie}
                                    className="btn laptop:text-[1.3rem] text-[1rem] tablet:text-[1.2rem] p-2 px-4 normal-case text-[#f8f8fd] bg-[#DF8026] hover:bg-[#DF8026]/75 rounded-r-3xl rounded-l-none border-none"
                                >
                                    Search
                                </button>
                            </div>


                            {/* movie search details/results */}
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


export default Case03;
