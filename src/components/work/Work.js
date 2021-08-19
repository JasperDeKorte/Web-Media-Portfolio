import React from 'react'

export default function work(props) {
    return (
        <div>
            <ul>
                <li>
                    <div className="work-employer">{props.employer}</div>
                    <div className="work-jobTitle">{props.jobTitle} | {props.jobDuration}</div>
                    <div className="work-jobDescription">{props.jobDescription}</div>
                </li>
            </ul>
        </div>
    )
}
