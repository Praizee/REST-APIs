import React from 'react';
import { motion } from "framer-motion";

const animationConfiguration = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
};


const User = props => {
    var id = props.match.params.id
    return (
        <motion.div
            variants={animationConfiguration}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 3 }}
        >

            <section className='hero'>
                <div className='hero-content'>
                    <div className=''>
                        <h1>User Details</h1>
                        ID: {id}

                    </div>

                </div>
            </section>


        </motion.div>
    );
}
export default User;