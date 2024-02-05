import React from 'react'
import './MainLayout.css'
import { Outlet } from 'react-router-dom'
import Header from '../header/Header'

export default function MainLayout() {
    return (
        <>
            <section className="layout header--layout">
                <Header />
            </section>
            <Outlet />

        </>
    )
}
