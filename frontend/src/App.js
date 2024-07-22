import React from 'react';
import About from './pages/About';
import Project from './pages/Project';
import Skill from './pages/Skill';
import Contact from './pages/Contact';
import Journey from './pages/Journey';
import Home from './pages/Home';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <>
      <Navbar />
      <section id='Home'><Home /></section>
      <section id='Project'><Project /></section>
      <section id='Skill'><Skill /></section>
      <section id='Journey'><Journey /></section>
      <section id='Contact'><Contact /></section>
    </>
  );
}

export default App;
