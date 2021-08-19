import React from 'react'

export default function Education(props) {
    return (
        <div>
            <div className="cv-educationTitleStyle">{props.educationTitle}</div>
            <div className="cv-educationDiscriptionStyle">{props.educationDescription}</div>
            <div className="cv-educationLength">{props.educationLength}</div>
            <div className="cv-educationAwardStyle">{props.educationAward}</div>
        </div>
    )
}
