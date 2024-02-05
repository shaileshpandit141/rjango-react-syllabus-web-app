import React from 'react';
import './App.css';
import {
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
    Route
} from 'react-router-dom'


// Importing user defined pages.

import MainLayout from './components/Layouts/MainLayout';
import Home, { loader as HomeLoader } from './pages/home/Home';
import Detail, { loader as DetailLoader } from './pages/detail/Detail';


// All router configuration.

const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<MainLayout />} >
        <Route
            index
            element={<Home />}
            loader={HomeLoader}
        />
        <Route
            path='modules/:id/'
            element={<Detail />}
            loader={DetailLoader}
        />
    </Route>
))


// Main app function configuration.

export default function App() {
    return (
        <RouterProvider router={router} />

    );
}