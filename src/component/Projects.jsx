import React from 'react'
import '../css/MainLayout.css'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

const Projects = () => {

  gsap.registerPlugin(useGSAP)

  useGSAP(() => {
    gsap.fromTo('.box', { 
      opacity: 0, 
      y: 50 

    }, {

    opacity: 1, 
    y: 0, 
    duration: 1, 
    ease: 'expo.inOut', 
    stagger: 0.1 }
    )
  })

  return (
    <>
        <div className = 'Projects'>
            <div className = 'Projects-content'>
                <div className = 'box box1' ></div>
                <div className = 'box box2' ></div>
                <div className = 'box box3' ></div>
                <div className = 'box box4' ></div>
            </div>
        </div>
    </>
  )
}

export default Projects