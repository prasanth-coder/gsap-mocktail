import { useGSAP } from '@gsap/react'
import { SplitText } from 'gsap/all'
import gsap from 'gsap'
import React from 'react'

const About = () => {
    useGSAP(() => {
        const titleSplit = SplitText.create('#about h2', {
            type : 'words'
        })

        const scrollTimeline = gsap.timeline({
            scrollTrigger : {
                trigger : '#about',
                start : 'top center'

            }
        })

        scrollTimeline.from(titleSplit.words, {
            opacity : 0, duration : 1, yPercent :100,  ease : 'expo.out' ,stagger : 0.02
        })
        .from('.top-grid div, .bottom-grid div' ,{
            opacity : 0, duration : 1, ease : 'power1.inOut' , stagger : 0.04
        },'-=0.5')
    })
  return (
    <div id="about">
        <div className='mb-16 md:px-0 px-5'>
            <div className='content'>
                <div className='md:col-span-8'>
                    <p className='badge'>Best Cocktails</p>
                    <h2>
                        Where Every Details Matters <span className='text-white'>- </span>
                         from muddle to garnish
                    </h2>                 


                </div>

                <div className='sub-content'>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam, sapiente maiores? Similique nostrum quam maiores suscipit provident. Autem illum, 
                        at qui quia optio velit voluptates eos ipsum modi, voluptatem ratione!
                    </p>

                    <div>

                    <p className='md:text-xl text-xl font-bold'>
                        <span>4.5</span>/5

                    </p>
                    <p className='text-sm text-white-100'>
                        More than +12000 Customers

                    </p>

                    </div>

                </div>

            </div>

        </div>
        <div className='top-grid'>
            <div className='md:col-span-3'>
                <div className='noisy' />
                <img src="/images/abt1.png" alt="grid-img-1" />

            </div>
            <div className='md:col-span-6'>
                <div className='noisy' />
                <img src="/images/abt2.png" alt="grid-img-1" />

            </div>
            <div className='md:col-span-3'>
                <div className='noisy' />
                <img src="/images/abt5.png" alt="grid-img-1" />

            </div>
           

        </div>
        <div className='bottom-grid'>
                <div className='md:col-span-8'>
                  <div className='noisy' />
                  <img src="/images/abt3.png" alt="grid-img-1" />

                </div>
                <div className='md:col-span-4'>
                  <div className='noisy' />
                  <img src="/images/abt4.png" alt="grid-img-1" />

                </div>

            </div>

      
    </div>
  )
}

export default About
