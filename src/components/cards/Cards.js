import React from 'react'

export default function Cards(props) {
    return (
        <div className="cv-mainSections">
            <h1 className="textOrangeUnderline">{props.cardsTitle}</h1>
            <p>
                {props.cardsDescription}
            </p>
            {props.cardsDescription2}
            {props.cardsDescription3}
            {props.cardsDescription4}
            {props.cardsDescription5}
            {props.cardsDescription6}
        </div>
    )
}
