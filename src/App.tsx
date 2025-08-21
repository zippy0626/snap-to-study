import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import './App.css'

import Head from "./components/Head.tsx"
import Upload from "./components/Upload.tsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Head />
      <Upload />


      <h1>Snap 2 Study</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Snap! {count}
        </button>

      </div>

    </>
  )
}

export default App
