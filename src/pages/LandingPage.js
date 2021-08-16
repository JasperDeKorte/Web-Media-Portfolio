import React from 'react'
import { NavLink } from 'react-router-dom'
import camera from "../assets/camera.png"
import heart from "../assets/heart.png"
import user from "../assets/user.png"
import { motion } from "framer-motion"

export default function landingpage() {
    const pageTransitions = {
        in: {
            opacity: 1,
            y: 0
        },
        out: {
            opacity: 0,
            y: "-100%"
        },
        transition: {

        },
    };

    return (
        <motion.div
            initial="out"
            animate="in"
            exit="out"
            transition="transition"
            variants={pageTransitions}
        >
            <div className="landingPage-Container">
                <motion.div className="landingPage-Items "
                    whileHover={{ scale: 1.2 }}
                    onHoverStart={e => { }}
                    onHoverEnd={e => { }}
                    whileTap={{ scale: 0.9 }}

                >
                    <NavLink to="/Media">
                        <img className="landingPage-Items" src={camera} alt="not available" />
                    </NavLink>
                </motion.div>

                <motion.div className="landingPage-Items"
                    whileHover={{ scale: 1.2 }}
                    onHoverStart={e => { }}
                    onHoverEnd={e => { }}
                    whileTap={{ scale: 0.9 }}
                >
                    <NavLink to="/Profile">
                        <img className="landingPage-Items" src={user} alt="not available" />
                    </NavLink>
                </motion.div>

                <motion.div className="landingPage-Items"
                    whileHover={{ scale: 1.2 }}
                    onHoverStart={e => { }}
                    onHoverEnd={e => { }}
                    whileTap={{ scale: 0.9 }}
                >
                    <NavLink to="/Cv">
                    <img className="landingPage-Items" src={heart} alt="not available" />
                    </NavLink>
                </motion.div>

                <motion.div className="landingPage-Items"
                    whileHover={{ scale: 1.2 }}
                    onHoverStart={e => { }}
                    onHoverEnd={e => { }}
                    whileTap={{ scale: 0.9 }}
                >
                    <img className="landingPage-Items" src={heart} alt="not available" />
                </motion.div>


            </div>
        </motion.div>
    )
}
