import React from 'react'
import About from './pages/About'
import Project from './pages/Project'
import Skill from './pages/Skill'
import Contact from './pages/Contact'
import Journey from './pages/Journey'
import Home from './pages/Home'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <>
      <Navbar/>
      <section id='Home'></section><Home/>
      <section id='Project'></section><Project/>
      <section id='Skill'></section><Skill/>
      <section id='Journey'></section><Journey/>
      <section id='Contact'> </section><Contact/>
    </>
  )
}

export default App