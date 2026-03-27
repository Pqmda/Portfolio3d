import React from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(useGSAP)

const defaultStyle = {
    position: 'absolute',
    bottom: '40vh',
    right: '40vw',
    zIndex: 10,
    cursor: 'pointer',
    width: '2.7vw',
    height: '5vh',
    fontSize: '1rem',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#ffffff',
    background: 'transparent',
    border: '1px solid #ffffff',
    borderRadius: '100px',

}

const ExitViewButton = ({
    label,
    cameraRef,
    controlsRef,
    cameraPosition,
    lookAt,
  onExitText,
  onExitComplete,
    duration = 1.2,
    style,
}) => {

  const { contextSafe } = useGSAP()

  const handleClick = contextSafe(() => {
    if (!cameraRef?.current || !controlsRef?.current) return

    const lines = gsap.utils.toArray('.Line')

    gsap.to(lines, {
      autoAlpha: 1,
      width: (i, line) => line.dataset.initialWidth || line.style.width || 'auto',
      y: 0,
      duration: 1,
      ease: 'power2.inOut',
    })

    gsap.to('.camera-view-button', {
        autoAlpha: 1,
        y: 0,
        duration: 1,
        ease: 'power2.inOut',
        pointerEvents: 'auto',
    })

    const boxes = gsap.utils.toArray('.box')

    if (boxes.length > 0) {
      gsap.to(boxes, {
        autoAlpha: 0,
        y: 100,
        duration: 1,
        ease: 'power2.inOut',
        onStart: () => onExitText?.(),
        onComplete: () => onExitComplete?.(),
      })
    } else {
      onExitText?.()
      onExitComplete?.()
    }

    gsap.to(cameraRef.current.position, {
        x: cameraPosition[0],
        y: cameraPosition[1],
        z: cameraPosition[2],
        duration,
        ease: 'power2.inOut',
        onUpdate: () => controlsRef.current.update(),
    })

    gsap.to(controlsRef.current.target, {
        x: lookAt[0],
        y: lookAt[1],
        z: lookAt[2],
        duration,
        ease: 'power2.inOut',
        onUpdate: () => controlsRef.current.update(),
    })

  })

  return (
    <button type='button' className='exit-button' onClick={handleClick} style={{ ...defaultStyle, ...style }}>
      {label}
    </button>
  )
}

export default ExitViewButton
