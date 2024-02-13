import React from 'react'
import './Syllabus.css'
import { Link } from 'react-router-dom'


export default function Syllabus(props) {

    const syllabus = props.syllabus

    return (
        <div className="protect--overflow">
            <Link
                to={`modules/${syllabus.id}/?syllabus-name=${syllabus.name}`}
                className='syllabus--card'
            >
                <div className='syllabus--card--heading'>
                    <figure className="syllabus--logo--container">
                        <img src={`http://localhost:8000/${syllabus.logo}`} alt="" />
                    </figure>
                    <h2 className='syllabus--name'>{syllabus.name}</h2>
                </div>
                <p className='syllabus--description'>{syllabus.description}</p>
                <div className='lower--container'>
                    <p className='date--time--container'>
                        <span>{syllabus.dateTime.slice(1, 10)}</span>
                    </p>
                    <div className='view--label--container'>
                        <div>view</div>
                        <div className='arrow--icon'>&#10140;</div>
                    </div>
                </div>
            </Link>
        </div>
    )
}
