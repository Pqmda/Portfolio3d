import React from 'react'
import '../css/MainLayout.css'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import Hotel from '../assets/Images/Czarina.png'
import Port2d from '../assets/Images/Port2d.png'
import loa from '../assets/Images/loasurvey.png'
import budoir from '../assets/Images/Budoir.png'

const Projects = () => {
  const projectCards = [
    {
      src: Hotel,
      alt: 'Czarina',
      title: 'Czarina Hotel',
      subtitle: 'https://github.com/Pqmda/HotelSite',
      buttonLabel: 'See project',
      url: 'https://czarina-hotel.vercel.app',
    },
    {
      src: Port2d,
      alt: 'Port2d',
      title: 'Portfolio2d',
      subtitle: 'https://github.com/Pqmda/PqmdaTemplates',
      buttonLabel: 'See project',
      url: 'https://cedric-valencia-portfolio.vercel.app',
    },
    {
      src: budoir,
      alt: 'Budoir',
      title: 'Budoir',
      subtitle: 'https://github.com/Pqmda/Bag3d',
      buttonLabel: 'See project',
      url: 'https://budoir-3d.vercel.app/',
    },
    {
      src: loa,
      alt: 'LOA Survey Site',
      title: 'LOA Survey Site',
      subtitle: 'https://github.com/Pqmda/LOASurvey',
      buttonLabel: 'See project',
      url: 'https://loa-survey.vercel.app/',
    },
  ]

  gsap.registerPlugin(useGSAP)

  useGSAP(() => {
    gsap.fromTo(
      '.box',
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'expo.inOut',
        stagger: 0.1,
      }
    )
  })

  return (
    <>
      <div className='Projects'>
        <div className='Projects-content'>
          {projectCards.map((card, index) => (
            <article key={card.alt} className={`box box${index + 1}`}>
              <img src={card.src} alt={card.alt} loading='lazy' />
              <div className='box-overlay' />
              <div className='box-content'>
                <div className='box-copy'>
                  <h3>{card.title}</h3>
                  <p>{card.subtitle}</p>
                </div>
                <div className='box-meta'>
                  <span className='meta-chip'>
                    <svg viewBox='0 0 24 24' aria-hidden='true'>
                      <path d='M20.59 13.41L11 3.83a2 2 0 00-2.83 0L3.83 8.17a2 2 0 000 2.83l9.58 9.58a2 2 0 002.83 0l4.34-4.34a2 2 0 000-2.83zM7.5 9A1.5 1.5 0 119 7.5 1.5 1.5 0 017.5 9z' />
                    </svg>
                    from <strong>{card.price}</strong>
                  </span>
                </div>
                  <a
                    href={card.url}
                    className='box-action'
                    target='_blank'
                    rel='noreferrer'
                  >
                  <label style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', textAlign: 'center' }}>
                    {card.buttonLabel}
                  </label>
                  </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </>
  )
}

export default Projects