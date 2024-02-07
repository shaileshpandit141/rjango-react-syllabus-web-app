import React from 'react'
import './Error.css'

export default function Error() {
    return (
        <div className='error--container'>
            <h2>Oops, something went wrong!</h2>
            <p>
                <i>Please, try sometime later.</i>
            </p>
        </div>
    )
}
