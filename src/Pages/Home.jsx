import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";


const animationConfiguration = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const Home = () => {
  const [movie, setMovie] = useState({});
  const [search, setSearch] = useState('');
  const API_KEY = "your_api_key";
  const url = `http://www.omdbapi.com/?t=${search}&apikey=${API_KEY}`;

  return (
    <motion.div
      variants={animationConfiguration}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 3 }}
    >
      <section className=''>

        <div className='hero-content bg-[#F8F8FD]'>
          <div className='mx-[3rem] min-h-[calc(100vh-19.5rem)]'>


          </div>
        </div>

      </section>


    </motion.div>
  );
}


export default Home;
