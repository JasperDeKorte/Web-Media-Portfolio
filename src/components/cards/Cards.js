import React from 'react'

export default function Cards(props) {
    return (
        <div className="cv-mainSections">
            <h1 className="textOrangeUnderline">{props.cardsTitle}</h1>
            <p>
                {props.cardsDescription}
            </p>
        </div>
    )
}
