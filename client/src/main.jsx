import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import Portfolio from './components/Portfolio/Portfolio.jsx'
import Solution from './components/Solutions/Solution.jsx'
import Dashboard from './components/Dashboard/Dashboard.jsx'
import Web from './components/Portfolio/Web/Web.jsx'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '',
                element: <Home />
            },
            {
                path: 'portfolio',
                element: <Portfolio />,
                children: [
                    {
                        path: 'web',
                        element: <Web />
                    }

                ]
            },
            {
                path: 'solution',
                element: <Solution />
            },
            {
                path: 'dashboard',
                element: <Dashboard />
            }

        ]
    }
])

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)