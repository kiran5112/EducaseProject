import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Profile from './Component/Profile.jsx'
import Account from './Component/Account.jsx'
import Singin from './Component/Singin.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: 'Account',
    element: <Account />
  }, {
    path: 'Profile',
    element: <Profile />
  },{
    path:'/Singin',
    element:<Singin/>
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>

      <App />
    </RouterProvider>
  </React.StrictMode>,

)
