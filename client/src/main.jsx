import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/pages/Home'
import ProjectSection from './components/pages/Project/ProjectSection.jsx' 


const router = createBrowserRouter([

// ALL PROJECT / Project Section COMPONENT START
  {
    path: "/Project/ProjecSection",
    element: <  ProjectSection />
  },

//  END
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
                element: <h1>portfolio</h1>,
            },
            {
                path: 'solution',
                element: <h1>solution</h1>
            },
            {
                path: 'dashboard',
                element: <h1>dashboard</h1>
            },
            


        ]
    }
])

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
