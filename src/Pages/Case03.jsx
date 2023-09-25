import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const animationConfiguration = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
};

const Case03 = () => {

    return (
        <motion.div
            variants={animationConfiguration}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 3 }}
        >
            <section className="bg-[#F8F8FD] h-screen selection:bg-blue-400 border-2 border-blue-500 mt-[4rem] text-black">
                {/* remove 'h-screen' after adding content */}
                <div className="">

                </div>
            </section>
        </motion.div>
    );
};

export default Case03;
