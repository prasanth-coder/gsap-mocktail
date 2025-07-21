import React from 'react'
import { ScrollToPlugin, SplitText,ScrollTrigger } from 'gsap/all'
import gsap from 'gsap'
import Navbar from './components/Navbar';
import Hero from './components/Hero';

gsap.registerPlugin(ScrollToPlugin, SplitText,ScrollTrigger);


const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <div className='h-dvh bg-black'/>

    </main>
  )
}

export default App
