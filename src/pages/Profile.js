import React from 'react'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Media() {
    const pageTransitions = {
        in: {
            opacity: 1,
        },
        out: {
            opacity: 0
        }
    };
    return (

        <motion.div
            initial="out"
            animate="in"
            exit="out"
            variants={pageTransitions}
        >
            <h1>Name</h1>
            <h2>Info</h2>
            <h3>Info</h3>
            <NavLink to="Web-Media-Portfolio">
                <button>Back</button>
            </NavLink>
        </motion.div>
    )
}
