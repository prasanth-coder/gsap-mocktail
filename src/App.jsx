import React from 'react'
import { ScrollToPlugin, SplitText } from 'gsap/all'
import gsap from 'gsap'

gsap.registerPlugin(ScrollToPlugin, SplitText);


const App = () => {
  return (
    <div className='flex-center h-[100vh]'>
      <h1 classname="text-3xl text-indigo-300">Hello World</h1>
    </div>
  )
}

export default App
