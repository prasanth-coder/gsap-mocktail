import React from 'react'
import { ScrollToPlugin, SplitText,ScrollTrigger } from 'gsap/all'
import gsap from 'gsap'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Cocktails from './components/Cocktails';
import About from './components/About';

gsap.registerPlugin(ScrollToPlugin, SplitText,ScrollTrigger);


const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Cocktails />
      <About />

    </main>
  )
}

export default App
