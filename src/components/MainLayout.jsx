import React from 'react'
import Header from './Header'
import About from '../pages/About.jsx'
import Home from '../pages/Home.jsx'
import Projects from '../pages/Projects.jsx'
import Contact from '../pages/Contact.jsx'
const MainLayout = () => {
  return (
    <div className='w-full min-h-screen bg-slate-950'>
      <Header />
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  )
}

export default MainLayout
