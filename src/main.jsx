import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import Chat from './Components/Chat'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children:[
      {
        path: 'chat',
        element: <Chat />
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
