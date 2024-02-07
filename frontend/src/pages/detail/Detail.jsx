import React from 'react'
import './Detail.css'
import { Link, useLoaderData } from 'react-router-dom'
import Module from '../../components/module/Module'
import requestToServer from '../../requestToServer/requestToServer'


export async function loader({ params }) {
    return await requestToServer(`api/modules/${params.id}/`)
}


export default function Detail() {

    const moduleList = useLoaderData()

    const moduleListElements = moduleList?.map(module => {
        return (
            <Module
                key={module.id}
                module={module}
            />
        )
    })

    return (
        <div className='detail'>
            <div className='return--btn--container'>
                <div className="protect--overflow">
                    <Link to='/' className='back--link'>
                        <span className='back--arrow'>&#10140;</span>
                        <span>Return to all syllabus</span>
                    </Link>
                </div>

            </div>
            <div className='modules--container'>

                {moduleListElements}

            </div>
        </div>
    )
}
