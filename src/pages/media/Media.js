import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import axios from "axios"
import useStorage from "../../firebase/useStorage"
import useFirestore from "../../firebase/useFirestore"
import { projectStorage } from "../../firebase/config"
import { projectFirestore } from "../../firebase/config"
import UploadForm from "./UploadForm"

export default function Media() {

    const [error, setError] = useState(false);

    // useEffect(() => {
    //     async function fetchData() {
    //         setError(false)
    //         try {
    //             const response = await axios.get("https://firestore.googleapis.com/v1beta1/")
    //             console.log(response)
    //         } catch (e) {
    //             console.error(e)
    //             setError(true)
    //         }
    //     }
    //     fetchData()
    // },[])

    const pageTransitions = {
        in: {
            opacity: 1,
        },
        out: {
            opacity: 0
        }
    };
    

    
    

    const testImage = "https://firebasestorage.googleapis.com/v0/b/web-media-portfolio.appspot.com/o/images2%2FP1030660.jpg?alt=media&token=d2be80e1-57aa-4cfd-9198-c9edf76c59a4"
    const bubba = "https://firebasestorage.googleapis.com/v0/b/web-media-portfolio.appspot.com/o/images2%2FWijnshoot-1030498.jpg?alt=media&token=1ab5b590-2094-477f-b91e-55e3d4841b69"
    const bubbaBike1 = "https://firebasestorage.googleapis.com/v0/b/web-media-portfolio.appspot.com/o/images2%2FWijnshoot-.jpg?alt=media&token=d4dbab4b-ae95-43a9-b5c4-a7cc17038034"
    const bubbaBike2 = "https://firebasestorage.googleapis.com/v0/b/web-media-portfolio.appspot.com/o/images2%2FWijnshoot-1030682-2.jpg?alt=media&token=6e448bcd-dbe0-4163-9f4d-4f54ea539246"


    const { docs } = useFirestore("images");
    console.log(docs)

    return (

        <motion.div
            initial="out"
            animate="in"
            exit="out"
            variants={pageTransitions}
        >
            <Helmet>
                <title>My Portfolio | Media</title>
            </Helmet>
            <div className="media-container">
                <h1>Dit is de Media Pagina</h1>
                <h2>*under development*</h2>
                <br />
                <NavLink to="Web-Media-Portfolio">
                    <button>Back</button>
                </NavLink>


                <UploadForm />
                <br />


                <div className="img-grid">
                    <div className="img-wrap">
                        images
                    </div>
                </div>



            </div>
        </motion.div>
    )
}
