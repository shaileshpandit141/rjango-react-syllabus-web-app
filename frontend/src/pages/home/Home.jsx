import React from 'react'
import './Home.css'
import { useLoaderData } from 'react-router-dom'
import Syllabus from '../../components/syllabus/Syllabus'
import requestToServer from '../../requestToServer/requestToServer'


export async function loader() {
    return await requestToServer('api/syllabus/')
}


export default function Home() {

    const syllabusList = useLoaderData()

    const syllabusListElements = syllabusList.map(syllabus => {
        return (
            <Syllabus
                key={syllabus.id}
                syllabus={syllabus}
            />
        )
    })

    return (
        <div className='home'>
            {syllabusListElements}
        </div>
    )
}
