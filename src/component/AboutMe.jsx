import React from 'react'
import '../css/AboutMe.css'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(useGSAP)

const skillGroups = [
  {
    title: 'Languages',
    items: ['JavaScript (ES6+)', 'Python', 'C++', 'HTML5 & CSS3'],
  },
  {
    title: 'Frontend & Design',
    items: ['React & Vite', 'Tailwind CSS & Bootstrap', 'GSAP (Animations)', 'Figma'],
  },
  {
    title: 'Backend & Automation',
    items: [
      'n8n (Self-hosted)',
      'RESTful APIs & Webhooks',
      'JSON Processing & Parsing',
      'OAuth & Authentication',
      'Git & GitHub',
    ],
  },
]

const AboutMe = () => {
  useGSAP(() => {
    gsap.fromTo(
      '.about-el',
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1, ease: 'expo.inOut', stagger: 0.12 }
    )
  }, [])

  return (
    <div className="AboutMe">
      <div className="AboutMe-content">
        <div className="fade-target about-el">
          <h2 className="about-name">Cedric Valencia</h2>
          <p className="about-role">Software Engineer</p>
          <p className="about-year">4th yr graduating student in BSCPE</p>
        </div>

        <p className="about-bio fade-target about-el">
          I'm a frontend developer specializing in high-impact, interactive web experiences
          built with React, Vite, Tailwind CSS, and JavaScript. I love bringing user interfaces
          to life through flashy, high-performance animations using GSAP, combined with a solid
          foundation in state management, JSON processing, and RESTful APIs.
        </p>

        <div className="about-skills">
          {skillGroups.map((group) => (
            <div className="skill-group fade-target about-el" key={group.title}>
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AboutMe