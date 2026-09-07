import React from 'react'
import '../css/Contact.css'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(useGSAP)

const Contact = () => {
  useGSAP(() => {
    gsap.fromTo(
      '.contact-el',
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1, ease: 'expo.inOut', stagger: 0.12 }
    )
  }, [])

  return (
    <div className="Contact">
      <div className="Contact-content">
        <p className="contact-cta fade-target contact-el">
          Let's build something.
        </p>

        <div className="contact-links">
          
          <a className="contact-link fade-target contact-el"
            href="mailto:cedriccruz07@gmail.com">
            cedriccruz07@gmail.com
          </a>
          
          <a className="contact-link fade-target contact-el"
            href="https://github.com/Pqmda"
            target="_blank"
            rel="noopener noreferrer"
            >
            GitHub — Pqmda
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact