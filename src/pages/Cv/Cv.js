import React from 'react'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import heart from "../../assets/heart.png"
import home from "../../assets/home.png"
import birthday from "../../assets/birthday.png"
import details from "../../assets/details.png"
import pexel from "../../assets/pexels1.jpg"
import phone from "../../assets/phone.png"

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
        <div className="cv-layout">
            <div className="cv-topDivContainer">
                <div className="cv-topDivName">Jasper<br></br> de Korte
                    <p id="frontEndDeveloper">Front End developer</p>
                </div>
                <img id="cv-pexel" src={pexel}></img>
                <div className="cv-topDivAdres">
                    <p><img className="profileIcons" src={home}></img> Van leeuwenerf 2, 3263EJ, <br></br> Oud-Beijerland</p>
                    <p><img className="profileIcons" src={birthday}></img> 05-10-1996</p>
                    <p><img className="profileIcons" src={details}></img> jasperdekorte@gmail.com</p>
                    <p><img className="profileIcons" src={phone}></img> 06-37313012</p>
                </div>
            </div>
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
                            <div>
                                <h1>Professional Skills</h1>
                                <div>
                                    HTML/CSS<br></br>
                                    JAVASCRIPT<br></br>
                                    REACT<br></br>
                                    ADOBE<br></br>
                                    <li>Premiere</li>
                                    <li>After Effects</li>
                                    <li>Photoshop</li>
                                    <li>Lightroom</li>
                                    <li>Illustrator</li>
                                </div>
                                <div>
                                    <h1>Personal Skills</h1>
                                    <div>
                                        
                                    </div>
                                </div>
                            </div>

                        </div>


                    </div>

                    <div className="cv-mainContainer">
                        <div className="cv-mainSections">
                            <h1 id="textOrangeUnderline">skills env</h1>
                            <p>
                                Incididunt nulla ullamco consequat pariatur exercitation cupidatat enim nostrud. <br></br>Ad nisi enim mollit incididunt esse incididunt deserunt non fugiat est nostrud consequat. <br></br>Sunt commodo culpa non labore adipisicing incididunt minim eu minim Lorem labore ea. <br></br>Pariatur culpa sunt non aliqua ad et sit aliqua occaecat elit. Officia pariatur labore cillum elit ex nulla.
                            </p>
                        </div>
                        <div className="cv-mainSections">
                            <h1 id="textOrangeUnderline">Education</h1>
                            <p>
                                Incididunt nulla ullamco consequat pariatur exercitation cupidatat enim nostrud. <br></br>Ad nisi enim mollit incididunt esse incididunt deserunt non fugiat est nostrud consequat. <br></br>Sunt commodo culpa non labore adipisicing incididunt minim eu minim Lorem labore ea. <br></br>Pariatur culpa sunt non aliqua ad et sit aliqua occaecat elit. Officia pariatur labore cillum elit ex nulla.
                            </p>
                        </div>
                        <div className="cv-mainSections">
                            <h1 id="textOrangeUnderline">Experience</h1>
                            <p>
                                Incididunt nulla ullamco consequat pariatur exercitation cupidatat enim nostrud. <br></br>Ad nisi enim mollit incididunt esse incididunt deserunt non fugiat est nostrud consequat. <br></br>Sunt commodo culpa non labore adipisicing incididunt minim eu minim Lorem labore ea. <br></br>Pariatur culpa sunt non aliqua ad et sit aliqua occaecat elit. Officia pariatur labore cillum elit ex nulla.
                            </p>
                        </div>




                        <NavLink to="/Web-Media-Portfolio">
                            <button type="button" class="">Back</button>
                        </NavLink>
                    </div>
                </motion.div>



            </div>
        </div>
    )
}
