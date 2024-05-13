import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import Landing from './Components/Landing'
import Work from './Components/Work'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header />
     <Landing />
     <Work />
    </>
  )
}

export default App
