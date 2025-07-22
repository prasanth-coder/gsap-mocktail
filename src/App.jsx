import React from 'react'
import { ScrollToPlugin, SplitText,ScrollTrigger } from 'gsap/all'
import gsap from 'gsap'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Cocktails from './components/Cocktails';

gsap.registerPlugin(ScrollToPlugin, SplitText,ScrollTrigger);


const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Cocktails />

    </main>
  )
}

export default App
