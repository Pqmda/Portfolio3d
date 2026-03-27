import React from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(useGSAP)

const defaultStyle = {
    position: 'absolute',
    bottom: '',
    right: '',
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

const CameraViewButton = ({
    label,
    cameraRef,
    controlsRef,
    cameraPosition,
    lookAt,
    displayText,
    textStyle,
    onSelectText,
    duration = 1.2,
    style,
}) => {

  const { contextSafe } = useGSAP()

  const handleClick = contextSafe(() => {
    if (!cameraRef?.current || !controlsRef?.current) return

    const lines = gsap.utils.toArray('.Line')

    lines.forEach((line) => {
      if (!line.dataset.initialWidth) {
        line.dataset.initialWidth = line.style.width || getComputedStyle(line).width
      }
    })

    gsap.to(lines, {
      autoAlpha: 0,
      width: 0,
      duration: 1,
      ease: 'power2.inOut',
    })

    gsap.to('.camera-view-button', {
      autoAlpha: 0,
      duration: 1,
      ease: 'power2.inOut',
      pointerEvents: 'none',
    })

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

    onSelectText?.({
      content: displayText ?? label,
      style: textStyle ?? {},
    })
  })

  return (
    <button type='button' className='camera-view-button' onClick={handleClick} style={{ ...defaultStyle, ...style }}>
      {label}
    </button>
  )
}

export default CameraViewButton
