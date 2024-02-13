import React from 'react'
import './Home.css'
import { useLoaderData, defer, Await, useSearchParams, Link } from 'react-router-dom'
import Syllabus from '../../components/syllabus/Syllabus'
import requestToServer from '../../requestToServer/requestToServer'


export async function loader() {
    const syllabusPromise = requestToServer('api/syllabus/')
    return defer({ syllabusList: syllabusPromise })

}


export default function Home() {

    const syllabusPromise = useLoaderData()

    const [searchParams, setSearchParams] = useSearchParams();
    const syllabusName = searchParams.get('syllabus-name')


    function renderSyllabusElements(syllabusList) {

        const filterSyllabusList = syllabusName
            ? syllabusList.filter(syllabus => syllabus.filter_tag === syllabusName)
            : syllabusList

        const syllabusListElements = filterSyllabusList?.map((syllabus => {
            return (
                <Syllabus
                    key={syllabus.id}
                    syllabus={syllabus}
                />
            )
        }))

        return syllabusListElements
    }


    return (
        <>
            <div className='filter--container'>
                <div className='filter--wrapper'>
                    <div className="scroll--wrapper">
                        <div className="protect--overflow">
                            <Link
                                to="./?syllabus-name=javascript"
                            >
                                javascript
                            </Link>
                        </div>
                        <div className="protect--overflow">
                            <Link
                                to="./?syllabus-name=python"
                            >
                                python
                            </Link>
                        </div>
                    </div>
                </div>
                {
                    syllabusName && (
                        <div className='clear--filter--container'>
                            <div className="protect--overflow">
                                <Link to="./">clear</Link>
                            </div>
                        </div>
                    )
                }
            </div>

            <div className='home'>
                <React.Suspense fallback={<h2>Loading...</h2>}>
                    <Await resolve={syllabusPromise.syllabusList}>
                        {renderSyllabusElements}
                    </Await>
                </React.Suspense>
            </div>
        </>
    )
}
