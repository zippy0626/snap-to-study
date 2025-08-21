import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import './App.css'

import Head from "./components/Head.tsx"
import Upload from "./components/Upload.tsx"
import Start from "./components/Start.tsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Head />
      {/* <Upload /> */}
      <Start />
      
      <Router>
        <Routes>

          {/* <Route path='/' element={<Upload/>} /> */}


        </Routes>

        
      </Router>


    </>
  )
}

export default App
