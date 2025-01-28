import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import About from './components/About'
import Projects from './components/Projects'

function App() {
  
  return (
    <div>
      <Header/>
      <Main/>
      <Projects/>
      <About/>
      <Footer/>
    </div>
  )
}

export default App
