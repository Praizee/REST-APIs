import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";


const animationConfiguration = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const Home = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/")
      .then(res => res.json())
      .then(
        (data) => {
          setIsLoaded(true);
          setUsers(data);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <motion.div
        variants={animationConfiguration}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 3 }}
      >


        <section className=''>

          <div className='hero-content'>
            <div className='mx-[3rem]'>

              <ul className=''>
                {users.map(user => (
                  <li key={user.id}
                    className='p-2 link link-hover'
                  >
                    <Link to={`user/${user.id}`}>{user.name}</Link>
                  </li>
                ))}
              </ul>

            </div>
          </div>

        </section>


      </motion.div>
    );
  }
};

export default Home;
