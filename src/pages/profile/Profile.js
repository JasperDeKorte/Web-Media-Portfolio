import React from 'react'
import { Helmet } from 'react-helmet'
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
            <Helmet>
                <title>My Portfolio | Profile</title>
            </Helmet>
            <div className="profile-container">
                <h1>Dit is mijn profiel pagina</h1>
                <h2>*under development*</h2>
                <NavLink to="Web-Media-Portfolio">
                    <button>Back</button>
                </NavLink>
            </div>
        </motion.div>
    )
}
