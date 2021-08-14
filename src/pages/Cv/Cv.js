import React from 'react'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import heart from "../../assets/heart.png"
import home from "../../assets/home.png"
import birthday from "../../assets/birthday.png"
import details from "../../assets/details.png"

export default function Media() {
    const pageTransitions = {
        in: {
            opacity: 1,
            scaleX: 1
        },
        out: {
            opacity: 0,
            scaleX: 0
        }
    };
    return (
        <div className="cv-body">
            <motion.div
                initial="out"
                animate="in"
                exit="out"
                variants={pageTransitions}
                transition={{ duration: 1 }}
                className="cv-body"
            >
                <div className="cv-profileContainer">
                    <div className="cv-profileInfo">
                        <img id="profilePicture" src={heart} alt="Not available" ></img>
                        <h1>Jasper de Korte</h1>
                           <div>
                                <p><img className="profileIcons" src={home}></img> Van leeuwenerf 2, 3263EJ, <br></br> Oud-Beijerland</p>
                                <p><img className="profileIcons" src={birthday}></img> 05-10-199</p>
                                <p><img className="profileIcons" src={details}></img> jasperdekorte@gmail.com</p>
                            </div>
                    </div>

                    <div className="cv-skills">
                        <h1>Talen</h1>
                        <p>* * * * </p>

                        <h1>Software</h1>
                        <p>* * * * </p>

                    </div>
                </div>

                <div className="cv-mainContainer">
                    <div className="cv-mainSections">
                        <h1>Profile</h1>
                        <p>
                            Incididunt nulla ullamco consequat pariatur exercitation cupidatat enim nostrud. <br></br>Ad nisi enim mollit incididunt esse incididunt deserunt non fugiat est nostrud consequat. <br></br>Sunt commodo culpa non labore adipisicing incididunt minim eu minim Lorem labore ea. <br></br>Pariatur culpa sunt non aliqua ad et sit aliqua occaecat elit. Officia pariatur labore cillum elit ex nulla.
                        </p>
                    </div>
                    <div className="cv-mainSections">
                        <h1>Education</h1>
                        <p>
                            Incididunt nulla ullamco consequat pariatur exercitation cupidatat enim nostrud. <br></br>Ad nisi enim mollit incididunt esse incididunt deserunt non fugiat est nostrud consequat. <br></br>Sunt commodo culpa non labore adipisicing incididunt minim eu minim Lorem labore ea. <br></br>Pariatur culpa sunt non aliqua ad et sit aliqua occaecat elit. Officia pariatur labore cillum elit ex nulla.
                        </p>
                    </div>
                    <div className="cv-mainSections">
                        <h1>Experience</h1>
                        <p>
                            Incididunt nulla ullamco consequat pariatur exercitation cupidatat enim nostrud. <br></br>Ad nisi enim mollit incididunt esse incididunt deserunt non fugiat est nostrud consequat. <br></br>Sunt commodo culpa non labore adipisicing incididunt minim eu minim Lorem labore ea. <br></br>Pariatur culpa sunt non aliqua ad et sit aliqua occaecat elit. Officia pariatur labore cillum elit ex nulla.
                        </p>
                    </div>
                </div>
            </motion.div>

            <NavLink>
                
            </NavLink>

        </div>
    )
}
