import { useState } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import home from "../../assets/home.png";
import birthday from "../../assets/birthday.png";
import details from "../../assets/details.png";
import pexel from "../../assets/pexels1.jpg";
import phone from "../../assets/phone.png";
import Cards from "../../components/cards/Cards";
import Work from "../../components/work/Work";
import Projects from "../../components/projects/Projects";
import Education from "../../components/education/Education";
import content from "../../data/content.json";
import dutchFlag from "../../assets/dutch-flag.png";
import englishFlag from "../../assets/english-flag.png";

export default function Cv() {
  const pageTransitions = {
    in: {
      opacity: 1,
      scaleX: 1,
    },
    out: {
      opacity: 0,
      scaleX: 0,
    },
  };

  const [language, setLanguage] = useState(true);
  const [buttonImg, setButtonImg] = useState(dutchFlag);

  function handleImageOnMouseEnter() {
    if (buttonImg === englishFlag) {
      setButtonImg(dutchFlag);
    } else {
      setButtonImg(englishFlag);
    }
  }
  function handleImageOnMouseLeave() {
    if (buttonImg === dutchFlag) {
      setButtonImg(englishFlag);
    } else {
      setButtonImg(dutchFlag);
    }
  }

  function handleLanguageButton() {
    if (language === true) {
      setLanguage(false);
      setButtonImg(dutchFlag);
    } else {
      setLanguage(true);
      setButtonImg(englishFlag);
    }
  }

  return (
    <>
      <Helmet>
        <title>My portfolio | CV</title>
      </Helmet>

      <div className="cv-parentContainer">
        <div className="cv-pageContainer">
          <div className="cv-topDivContainer">
            <div className="cv-topDivName">
              Jasper
              <br /> de Korte
              <div id="frontEndDeveloper">
                Front-end developer
                <br />
              </div>
              <a
                className="cv-topDivGithub"
                target="_blank"
                rel="noreferrer"
                href="https://github.com/JasperDeKorte"
              >
                Github/JasperDeKorte
              </a>
            </div>
            <img id="cv-pexel" src={pexel} alt="" />
            <div className="cv-topDivAdres">
              <p className="cv-topDivAdressContent">
                <img className="profileIcons" src={home} alt="" />
                <div>
                  Van leeuwenerf 2, 3263EJ, <br /> Oud-Beijerland
                </div>
              </p>
              <p className="cv-topDivAdressContent">
                <img className="profileIcons" src={birthday} alt="" />
                <div>05-10-1996</div>
              </p>
              <p className="cv-topDivAdressContent">
                <img className="profileIcons" src={details} alt="" />
                <div> jasperdekorte@gmail.com</div>
              </p>
              <p className="cv-topDivAdressContent">
                <img className="profileIcons" src={phone} alt="" />
                <div>06-37313012</div>
              </p>
              <div>
                <img
                  className="translateBtn"
                  src={buttonImg}
                  alt=""
                  onClick={() => {
                    handleLanguageButton();
                  }}
                  onMouseEnter={() => {
                    handleImageOnMouseEnter();
                  }}
                  onMouseLeave={() => {
                    handleImageOnMouseLeave();
                  }}
                />
              </div>
            </div>
          </div>

          <div className="cv-body">
            <motion.div
              initial="out"
              animate="in"
              exit="out"
              variants={pageTransitions}
              transition={{ duration: 1 }}
            ></motion.div>
            <div className="cv-profileContainer">
              <div className="cv-profileInfo">
                <div>
                  <h1>
                    {language
                      ? content.nl.profile.professionalSkills
                      : content.en.profile.professionalSkills}
                  </h1>
                  <div>
                    <div>HTML/CSS</div>
                    <div>JAVASCRIPT</div>
                    <div>REACT</div>
                    <div>GITHUB</div>
                    <div>ADOBE</div>
                    <li>Premiere</li>
                    <li>After Effects</li>
                    <li>Photoshop</li>
                    <li>Lightroom</li>
                    <li>Illustrator</li>
                  </div>

                  <div>
                    <h1>
                      {language
                        ? content.nl.profile.education.education
                        : content.en.profile.education.education}
                    </h1>
                    <Education
                      educationTitle="Novi Hogeschool B.V."
                      educationDescription="HBO Front End Development "
                      educationLength={
                        language
                          ? content.nl.profile.education.novi.lenght
                          : content.en.profile.education.novi.lenght
                      }
                      educationAward={
                        language
                          ? content.nl.profile.education.novi.certificate
                          : content.en.profile.education.novi.certificate
                      }
                    />
                    <br />
                    <Education
                      educationTitle="Grafisch Lyceum Rotterdam"
                      educationDescription={
                        language
                          ? content.nl.profile.education.glr.study
                          : content.en.profile.education.glr.study
                      }
                      educationLength={
                        language
                          ? content.nl.profile.education.glr.lenght
                          : content.en.profile.education.glr.lenght
                      }
                      educationAward={
                        language
                          ? content.nl.profile.education.glr.certificate
                          : content.en.profile.education.glr.certificate
                      }
                    />
                    <br />
                    <Education
                      educationTitle="CSG Willem van Oranje"
                      educationDescription="Mavo TL "
                      educationLength={
                        language
                          ? content.nl.profile.education.wvo.lenght
                          : content.en.profile.education.wvo.lenght
                      }
                      educationAward={
                        language
                          ? content.nl.profile.education.wvo.certificate
                          : content.en.profile.education.wvo.certificate
                      }
                    />
                    <br />
                  </div>
                  <div>
                    <h2>
                      {language
                        ? content.nl.profile.education.courses.courses
                        : content.en.profile.education.courses.courses}
                    </h2>
                    <Education
                      educationTitle="Arbocentrum"
                      educationDescription="VCA Vol"
                      educationLength={
                        language
                          ? content.nl.profile.education.courses.vca.disc
                          : content.en.profile.education.courses.vca.disc
                      }
                      educationAward={
                        language
                          ? content.nl.profile.education.courses.vca.certificate
                          : content.en.profile.education.courses.vca.certificate
                      }
                    />
                  </div>
                  <div>
                    <h1>
                      {language
                        ? content.nl.profile.personalSkills.personalSkills
                        : content.en.profile.personalSkills.personalSkills}
                    </h1>
                    <div>
                      <div
                        className="cv-educationTitleStyle"
                        style={{ fontSize: 20 }}
                      >
                        {language
                          ? content.nl.profile.personalSkills.langauges
                              .languages
                          : content.en.profile.personalSkills.langauges
                              .languages}
                      </div>
                      <div className="">
                        {language
                          ? content.nl.profile.personalSkills.langauges.dutch
                          : content.en.profile.personalSkills.langauges.dutch}
                        <br />
                        {language
                          ? content.nl.profile.personalSkills.langauges.english
                          : content.en.profile.personalSkills.langauges.english}
                        <br />
                        {language
                          ? content.nl.profile.personalSkills.langauges.german
                          : content.en.profile.personalSkills.langauges.german}
                      </div>
                    </div>
                  </div>
                  <div>
                    <h1>
                      {language
                        ? content.nl.profile.hobbiesInterests.hobbies
                        : content.en.profile.hobbiesInterests.hobbies}
                    </h1>
                    <ul>
                      <li>
                        <div className="cv-educationTitleStyle">
                          {language
                            ? content.nl.profile.hobbiesInterests.programming
                            : content.en.profile.hobbiesInterests.programming}
                        </div>
                      </li>
                      <li>
                        <div className="cv-educationTitleStyle">
                          {language
                            ? content.nl.profile.hobbiesInterests.videoPhoto
                            : content.en.profile.hobbiesInterests.videoPhoto}
                        </div>
                      </li>
                      <li>
                        <div className="cv-educationTitleStyle">
                          {language
                            ? content.nl.profile.hobbiesInterests
                                .computerGadgets
                            : content.en.profile.hobbiesInterests
                                .computerGadgets}
                        </div>
                      </li>
                      <li>
                        <div className="cv-educationTitleStyle">
                          {language
                            ? content.nl.profile.hobbiesInterests.motorcycles
                            : content.en.profile.hobbiesInterests.motorcycles}
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="cv-mainContainer">
              <Cards
                cardsTitle={language ? content.nl.aboutMe : content.en.aboutMe}
                cardsDescription={
                  language ? content.nl.aboutMeDisc : content.en.aboutMeDisc
                }
              />

              <div className="cv-mainSections">
                <h1 className="textOrangeUnderline">
                  {language
                    ? content.nl.projects.projects
                    : content.en.projects.projects}
                </h1>
                <div>
                  <Projects
                    // projectLink="https://jasperdekorte.github.io/Web-Media-Portfolio/"
                    projectTitle={
                      language
                        ? content.nl.projects.kassa.title
                        : content.en.projects.kassa.title
                    }
                    projectDescription={
                      language
                        ? content.nl.projects.kassa.disc
                        : content.en.projects.kassa.disc
                    }
                  />
                  <Projects
                    projectLink="https://jasperdekorte.github.io/Web-Media-Portfolio/"
                    projectTitle={
                      language
                        ? content.nl.projects.portfolio.title
                        : content.en.projects.portfolio.title
                    }
                    projectDescription={
                      language
                        ? content.nl.projects.portfolio.disc
                        : content.en.projects.portfolio.disc
                    }
                  />
                  <Projects
                    projectLink="https://jasperdekorte.github.io/Lord-of-The-Rings-Trivia-Graduation-Project-/"
                    projectTitle={
                      language
                        ? content.nl.projects.trivia.title
                        : content.en.projects.trivia.title
                    }
                    projectDescription={
                      language
                        ? content.nl.projects.trivia.disc
                        : content.en.projects.trivia.disc
                    }
                  />
                </div>
              </div>

              <div className="cv-mainSections">
                <h1 className="textOrangeUnderline">
                  {language
                    ? content.nl.workExperience.workExperience
                    : content.en.workExperience.workExperience}
                </h1>
                <div>
                  <Work
                    employer="Omoda B.V."
                    jobTitle={
                      language
                        ? content.nl.workExperience.omoda.title
                        : content.en.workExperience.omoda.title
                    }
                    jobDuration={
                      language
                        ? content.nl.workExperience.omoda.lenght
                        : content.en.workExperience.omoda.lenght
                    }
                    jobDescription={
                      language
                        ? content.nl.workExperience.omoda.disc
                        : content.en.workExperience.omoda.disc
                    }
                  />{" "}
                  <Work
                    employer="AENC Audiovisual"
                    jobTitle={
                      language
                        ? content.nl.workExperience.aenc.title
                        : content.en.workExperience.aenc.title
                    }
                    jobDuration={
                      language
                        ? content.nl.workExperience.aenc.lenght
                        : content.en.workExperience.aenc.lenght
                    }
                    jobDescription={
                      language
                        ? content.nl.workExperience.aenc.disc
                        : content.en.workExperience.aenc.disc
                    }
                  />
                  <Work
                    employer="ANWB"
                    jobTitle={
                      language
                        ? content.nl.workExperience.anwb.title
                        : content.en.workExperience.anwb.title
                    }
                    jobDuration={
                      language
                        ? content.nl.workExperience.anwb.lenght
                        : content.en.workExperience.anwb.lenght
                    }
                    jobDescription={
                      language
                        ? content.nl.workExperience.anwb.disc
                        : content.en.workExperience.anwb.disc
                    }
                  />
                  <Work
                    employer="Gebo Gelato"
                    jobTitle={
                      language
                        ? content.nl.workExperience.gebo.title
                        : content.en.workExperience.gebo.title
                    }
                    jobDuration={
                      language
                        ? content.nl.workExperience.gebo.lenght
                        : content.en.workExperience.gebo.lenght
                    }
                    jobDescription={
                      language
                        ? content.nl.workExperience.gebo.disc
                        : content.en.workExperience.gebo.disc
                    }
                  />
                  {/* <Work
                                        employer="De Bogerd"
                                        jobTitle="Junior Toezichthouder"
                                        jobDuration="februari 2016 - september 2016"
                                        jobDescription="Het toezichthouden op zwembadgasten en assisteren bij noodgevallen en vragen."
                                    /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
