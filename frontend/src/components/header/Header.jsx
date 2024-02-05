import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import logoImg from '../../assets/images/logo.png'

export default function Header() {
    return (
        <header className='header'>
            <section className='left--container'>
                <Link to={'/'}>
                    <figure className="logo--container">
                        <img src={logoImg} alt={logoImg} />
                    </figure>
                </Link>
            </section>
            <section className='right--container'>
                <div className='protect--overflow'>
                    <Link
                        to={'http://localhost:8000/admin/'}
                        target='_blank'
                    >
                        Admin
                    </Link>
                </div>
            </section>
        </header>
    )
}
