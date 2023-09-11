import React, { useState } from "react";
import { motion } from "framer-motion";


const animationConfiguration = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const Home = () => {

  return (
    <section className="text-black bg-white">
      <motion.div
        variants={animationConfiguration}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 3 }}
      >
        <div className="laptop:mt-[20rem] h-[4rem] p-4 laptop:p-0 mt-[10rem] laptop:min-h-screen mb-0 laptop:mx-[7rem] ">
          <h1 className="">
            Home
          </h1>

        </div>


      </motion.div>
    </section>
  );
};

export default Home;
