import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import '../css/CustomCursor.css'

const HOVERABLE_SELECTOR =
  '.hoverable, a, button, [role="button"], input, textarea, select, label[for]'
const BIG_BALL_SIZE = 100
const SMALL_BALL_SIZE = 10

const CustomCursor = () => {
  const bigBallRef = useRef(null)
  const bigCircleRef = useRef(null)
  const smallBallRef = useRef(null)

  useEffect(() => {
    const bigBall = bigBallRef.current
    const bigCircle = bigCircleRef.current
    const smallBall = smallBallRef.current

    if (!bigBall || !bigCircle || !smallBall) return
    if (window.matchMedia('(pointer: coarse)').matches) return

    document.body.classList.add('has-custom-cursor')

    const xToBig = gsap.quickTo(bigBall, 'x', { duration: 0.4, ease: 'power3.out' })
    const yToBig = gsap.quickTo(bigBall, 'y', { duration: 0.4, ease: 'power3.out' })
    const xToSmall = gsap.quickTo(smallBall, 'x', { duration: 0.1, ease: 'power3.out' })
    const yToSmall = gsap.quickTo(smallBall, 'y', { duration: 0.1, ease: 'power3.out' })

    const onMouseMove = (e) => {
      showCursor()
      xToBig(e.clientX - BIG_BALL_SIZE / 2)
      yToBig(e.clientY - BIG_BALL_SIZE / 2)
      xToSmall(e.clientX - SMALL_BALL_SIZE / 2)
      yToSmall(e.clientY - SMALL_BALL_SIZE / 2)
    }

    const onMouseHover = (e) => {
      if (e.target.closest(HOVERABLE_SELECTOR)) {
        gsap.to(bigCircle, { attr: { r: 50 }, duration: 0.3, ease: 'power2.out' })
      }
    }

    const onMouseHoverOut = (e) => {
      if (e.target.closest(HOVERABLE_SELECTOR)) {
        gsap.to(bigCircle, { attr: { r: 12 }, duration: 0.3, ease: 'power2.out' })
      }
    }

    const hideCursor = () => {
      gsap.to([bigBall, smallBall], { autoAlpha: 0, duration: 0.15 })
    }

    const showCursor = () => {
      gsap.to([bigBall, smallBall], { autoAlpha: 1, duration: 0.15 })
    }

    window.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseover', onMouseHover)
    document.addEventListener('mouseout', onMouseHoverOut)
    window.addEventListener('mouseleave', hideCursor)
    window.addEventListener('mouseenter', showCursor)

    return () => {
      document.body.classList.remove('has-custom-cursor')
      window.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseover', onMouseHover)
      document.removeEventListener('mouseout', onMouseHoverOut)
      window.removeEventListener('mouseleave', hideCursor)
      window.removeEventListener('mouseenter', showCursor)
      gsap.killTweensOf([bigBall, bigCircle, smallBall])
    }
  }, [])

  return (
    <div className='cursor' aria-hidden='true'>
      <div ref={bigBallRef} className='cursor__ball cursor__ball--big'>
        <svg height={BIG_BALL_SIZE} width={BIG_BALL_SIZE}>
          <circle ref={bigCircleRef} cx={BIG_BALL_SIZE / 2} cy={BIG_BALL_SIZE / 2} r='12' />
        </svg>
      </div>

      <div ref={smallBallRef} className='cursor__ball cursor__ball--small'>
        <svg height={SMALL_BALL_SIZE} width={SMALL_BALL_SIZE}>
          <circle cx='5' cy='5' r='4' />
        </svg>
      </div>
    </div>
  )
}

export default CustomCursor