import React from 'react'
import Pg1 from './components/Pg1'
import Pg2 from './components/Pg2'
import Footer from './components/Footer'

function App() {
  return (
    <div className='w-full min-h-screen bg-zinc-900'>
     <Pg1/>
     <Pg2/>
     <Footer/>
    </div>
  )
}

export default App