import { Component, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createHashRouter, RouterProvider } from 'react-router'
import Home from './pages/Home.jsx'
import Products from './pages/Products.jsx'


const router = createHashRouter ([
	{
		path: '/',
		Component: App,
		children: [
			{
				index: true,
				Component: Home
			}
		]
	}
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
