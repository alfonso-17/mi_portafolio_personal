import React from 'react'
import Header from './components/header'
import Home from './components/home'
import Skills from './components/skills'
import Projects from './components/projects'
import Footer from './components/footer'

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Home />
        <Skills />
        <Projects />
      </main>
      <Footer />
    </div>
  )
}

export default App