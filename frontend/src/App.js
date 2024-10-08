import React from 'react';
import About from './pages/About';
import Project from './pages/Project';
import Skill from './pages/Skill';
import Contact from './pages/Contact';
import Journey from './pages/Journey';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Activity from './pages/Activity';
import ParticleBackground from './components/ParticleBackground'; // Import the ParticleBackground component
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const App = () => {
  return (
    <>
      <ParticleBackground />
      <Navbar />
      <section id='Home'></section><Home />
      <section id='Project' className='headline'>My Projects:</section><Project />
      <section id='Skill' className='headline'>Tech Skills:</section><Skill />
      <section id='Journey' className='headline'>My Journey:</section><Journey />
      {/* <section id='Activity' className='headline'>My Activities:</section><Activity /> */}
      <section id='Contact' className='headline'>Contact me:</section><Contact />
      <ToastContainer/>
    </>
  );
}

export default App;
