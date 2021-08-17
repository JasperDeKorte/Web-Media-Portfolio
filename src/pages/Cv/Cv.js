import React from 'react'
import { Helmet } from 'react-helmet'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import home from "../../assets/home.png"
import birthday from "../../assets/birthday.png"
import details from "../../assets/details.png"
import pexel from "../../assets/pexels1.jpg"
import phone from "../../assets/phone.png"
import NavBar from "../../components/navBar/NavBar"
import Cards from '../../components/cards/Cards'

export default function Cv() {
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
        <>
            <Helmet>
                <title>My portfolio | CV</title>
            </Helmet>
            <div className="cv-parentContainer">
                <div className="cv-pageContainer">
                    <div className="cv-topDivContainer">
                        <div className="cv-topDivName">
                            Jasper<br /> de Korte
                            <div id="frontEndDeveloper">Front-end developer<br />
                            </div>
                            <a className="cv-topDivGithub" target="_blank" href="https://github.com/SnelleJaapie">Github/SnelleJaapie</a>
                        </div>
                        <img id="cv-pexel" src={pexel}></img>
                        <div className="cv-topDivAdres">
                            <p><img className="profileIcons" src={home}></img> Van leeuwenerf 2, 3263EJ, <br /> Oud-Beijerland</p>
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
                                    <div>
                                        <h1>Professionele Vaardigheden</h1>
                                        <div>
                                            HTML/CSS<br />
                                            JAVASCRIPT<br />
                                            REACT<br />
                                            GITHUB<br />
                                            ADOBE<br />
                                            <li>Premiere</li>
                                            <li>After Effects</li>
                                            <li>Photoshop</li>
                                            <li>Lightroom</li>
                                            <li>Illustrator</li>
                                        </div>

                                        <div>
                                            <h1>Educatie</h1>
                                            <div>
                                                <div className="cv-educationTitleStyle">Novi Hogeschool B.V.</div>
                                                <div className="cv-educationDiscriptionStyle">HBO Front End Development<br />maart 2021 - augustus 2021</div>
                                            </div>
                                            <br />
                                            <div>
                                                <div className="cv-educationTitleStyle">Grafisch Lyceum Rotterdam</div>
                                                <div className="cv-educationDiscriptionStyle">MBO 4 Audiovisuele Productie<br />augustus 2013 - april 2017</div>
                                            </div>
                                            <br />
                                            <div>
                                                <div className="cv-educationTitleStyle">CSG Willem van Oranje</div>
                                                <div className="cv-educationDiscriptionStyle">Mavo TL <br />september 2009 - april 2013<br /></div>
                                            </div>
                                        </div>

                                        <div>
                                            <h1>Persoonlijke Skills</h1>
                                            <div>
                                                <div className="cv-educationTitleStyle">Talen</div>
                                                <div className="cv-educationDiscriptionStyle">Nederlands - Moedertaal<br />Engels - Vloeiend<br />Duits - Basis</div>
                                            </div>
                                        </div>


                                    </div>
                                </div>


                            </div>

                            <div className="cv-mainContainer">
                                <Cards
                                    cardsTitle="Over mij"
                                    cardsDescription="Ik ben een hardwerkend persoon die doorzet tot de klus geklaard is. Ik ben graag creatief en kan hiermee hopelijk nieuw inzicht geven bij nieuwe problemen."
                                    cardsDescription2="des te meer uitdaging, des te meer te leren!"
                                />
                                <Cards
                                    cardsTitle="Projecten"
                                    cardsDescription="Incididunt nulla ullamco consequat pariatur exercitation cupidatat enim nostrud. <br></br>Ad nisi enim mollit incididunt esse incididunt deserunt non fugiat est nostrud consequat. <br></br>Sunt commodo culpa non labore adipisicing incididunt minim eu minim Lorem labore ea. <br></br>Pariatur culpa sunt non aliqua ad et sit aliqua occaecat elit. Officia pariatur labore cillum elit ex nulla."
                                />
                                <div className="cv-mainSections">
                                    <h1 className="textOrangeUnderline">(Werk)Ervaringen</h1>
                                    <p>
                                        
                                    </p>
                                    
                                </div>
                                <Cards
                                    cardsTitle="Experience"
                                    cardsDescription="Incididunt nulla ullamco consequat pariatur exercitation cupidatat enim nostrud. <br></br>Ad nisi enim mollit incididunt esse incididunt deserunt non fugiat est nostrud consequat. <br></br>Sunt commodo culpa non labore adipisicing incididunt minim eu minim Lorem labore ea. <br></br>Pariatur culpa sunt non aliqua ad et sit aliqua occaecat elit. Officia pariatur labore cillum elit ex nulla."
                                />

                                <NavLink to="/Web-Media-Portfolio">
                                    <button type="button" class="">Back</button>
                                </NavLink>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    )
}
