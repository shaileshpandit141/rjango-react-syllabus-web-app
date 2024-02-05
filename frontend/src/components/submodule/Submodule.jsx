import React from 'react'
import './Submodule.css'


export default function Submodule(params) {

    const submodule = params.subModule

    return (
        <h3 className='sub--module--text--container'>
            <li>{submodule.name}</li>
        </h3>
    )
}
