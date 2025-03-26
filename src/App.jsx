import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { NavLink, Outlet } from 'react-router'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <header className="app">
		<h1>Toys</h1>
		<nav className='links'>
			<NavLink to= "/">Start</NavLink>
			<NavLink to="/products"> Products </NavLink>
		</nav>
	  </header>
	  <main>
		<Outlet />
	  </main>
    </>

  )
}

export default App
