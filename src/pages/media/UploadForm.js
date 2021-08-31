import {useState} from 'react'
import useStorage from "../../firebase/useStorage"
import { projectStorage } from "../../firebase/config"
import { projectFirestore } from "../../firebase/config"

export default function UploadForm() {
    const [url, setUrl] = useState()
    const [image, setImage] = useState(null)

    function handleUpload() {

        const uploadTask = projectStorage.ref(`images2/${image.name}`).put(image);
        uploadTask.on("state_changed",
            (snapshot) => {
                // progress

            },
            (error) => {
                // error
                console.log(error)

            },
            () => {
                // completed
                projectStorage.ref("images2").child(image.name).getDownloadURL().then(url => {
                    console.log(url);
                    setUrl(url)
                })
            });
    }

    
    function handleChange(e) {
        const image = e.target.files[0];
        if (e.target.files[0]) {
            setImage(image)
            console.log(image)
        }
    }
    return (
        <div>
            <input type="file" onChange={handleChange} />
            <button onClick={handleUpload}>Upload</button>
        </div>
    )
}
