import React from 'react'
import './Home.css'
import { useLoaderData, defer, Await } from 'react-router-dom'
import Syllabus from '../../components/syllabus/Syllabus'
import requestToServer from '../../requestToServer/requestToServer'


export async function loader() {
    const syllabusPromise = requestToServer('api/syllabus/')
    return defer({ syllabusList: syllabusPromise })

}


export default function Home() {

    const syllabusPromise = useLoaderData()


    function renderSyllabusElements(syllabusList) {
        return (
            syllabusList?.map((syllabus => {
                return (
                    <Syllabus
                        key={syllabus.id}
                        syllabus={syllabus}
                    />
                )
            }))
        )
    }


    return (
        <div className='home'>
            <React.Suspense fallback={<h2>Loading...</h2>}>
                <Await resolve={syllabusPromise.syllabusList}>
                    {renderSyllabusElements}
                </Await>
            </React.Suspense>
        </div>
    )
}
