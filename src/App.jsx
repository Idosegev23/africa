import React from 'react'
import About from './components/About'
import ProgramTable from './components/ProgramTable'
import AITools from './components/AITools'
import WhatYouGet from './components/WhatYouGet'
import WhyUs from './components/WhyUs'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <About />
      <ProgramTable />
      <AITools />
      <WhatYouGet />
      <WhyUs />
      <Footer />
    </div>
  )
}

export default App 