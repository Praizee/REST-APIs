import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";


const User = props => {

    return (
        <motion.div
            variants={animationConfiguration}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 3 }}
        >

            <div>

            </div>

        </motion.div>
    );

}
export default User;