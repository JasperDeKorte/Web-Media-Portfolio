import React from 'react'
import { Helmet } from 'react-helmet'
import { NavLink } from 'react-router-dom'
import camera from "../assets/camera.png"
import user from "../assets/user.png"
import cv from "../assets/cv.png"
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

        <div className="landingPage-container">
            <Helmet>
                <title>My Portfolio | Hub</title>
            </Helmet>
            <motion.div
                initial="out"
                animate="in"
                exit="out"
                transition="transition"
                variants={pageTransitions}
            >
                <div className="landingPage-mainSection">
                    <motion.div className="landingPage-Items "
                        whileHover={{ scale: 1.2 }}
                        onHoverStart={e => { }}
                        onHoverEnd={e => { }}
                        whileTap={{ scale: 0.9 }}

                    >
                        {/* <NavLink to="/Media">
                            <div className="menuNavWords">
                                Media
                                <img className="landingPage-Items" src={camera} alt="not available" />
                            </div>
                        </NavLink> */}
                    </motion.div>

                    <motion.div className="landingPage-Items"
                        whileHover={{ scale: 1.2 }}
                        onHoverStart={e => { }}
                        onHoverEnd={e => { }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <div className="menuNavWords">
                            CV
                        </div>
                        <NavLink to="/Cv">
                            <div className="">
                                <img className="landingPage-Items" src={cv} alt="not available" />
                            </div>

                        </NavLink>
                    </motion.div>

                    <motion.div className="landingPage-Items"
                        whileHover={{ scale: 1.2 }}
                        onHoverStart={e => { }}
                        onHoverEnd={e => { }}
                        whileTap={{ scale: 0.9 }}
                    >
                        {/* <NavLink to="/Profile">
                            <div className="menuNavWords">
                                Profile
                            <img className="landingPage-Items" src={user} alt="not available" />
                            </div>
                        </NavLink> */}
                    </motion.div>

                </div>
            </motion.div>
        </div>

    )
}

