import React from 'react'

export default function Projects(props) {
    return (
        <div>
            <ul>
                <li>
                    <a className="cv-projectTitle" href={props.projectLink} target="_blank" rel="noreferrer">{props.projectTitle}</a>
                    <div className="cv-projectDescription">{props.projectDescription}</div>
                </li>
            </ul>
        </div>
    )
}
