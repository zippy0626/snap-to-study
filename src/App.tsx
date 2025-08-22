import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import './App.css'

import Head         from "./components/Head.tsx"
import Upload       from "./components/Upload.tsx"
import Start        from "./components/Start.tsx"
import Flashcards   from "./components/flashcards.tsx"

function App() {


  return (
    <>

      <Head />
      {/* <Upload /> */}
      
      <Router>
        <Routes>

        <Route path="/" element={<Start />} />
        <Route path='/upload' element={<Upload />} />
        <Route path='/flashcards' element={<Flashcards />} />

        </Routes>

        
      </Router>


    </>
  )
}

export default App
