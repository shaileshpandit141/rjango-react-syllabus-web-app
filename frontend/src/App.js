import React from 'react';
import './App.css';
import {
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    useLoaderData,
} from 'react-router-dom'


// Importing user defined pages

import MainLayout from './Components/Layouts/MainLayout';


// Cheaching Django-React connection is ok or not

import requestToServer from './requestToServer/requestToServer'
async function loader() {
    return await requestToServer('/api/test-message/')
}

function DjangoReactConactionTest() {
    const requestData = useLoaderData()
    return (
        <div className='test--message--cont'>
            <h1>{requestData.testMessage}</h1>
        </div>
    )
}


// All router configuration

const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<MainLayout />} >
        <Route index element={<DjangoReactConactionTest />} loader={loader} />
    </Route>
))


// Main app function configuration

export default function App() {
    return (
        <RouterProvider
            router={router}
        />

    );
}