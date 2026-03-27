import React, { useEffect, useRef, useState } from 'react'
import './css/MainLayout.css'
import Room from './component/Room'
import CameraViewButton from './component/CameraViewButton'
import ExitViewButton from './component/ExitViewButton'
import Line from './component/Line'
import Projects from './component/Projects'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { gsap } from 'gsap'

const MainLayout = () => {
  const spotRef = useRef()
  const targetRef = useRef()
  const cameraRef = useRef()
  const controlsRef = useRef()
  const textRef = useRef()
  const [activeViewText, setActiveViewText] = useState({ content: '', style: {} })
  const [activeSection , setActiveSection] = useState(null)
  
  useEffect(() => {
    if (spotRef.current && targetRef.current) {
      spotRef.current.target = targetRef.current
      spotRef.current.target.updateMatrixWorld()
    }
  }, [])

  useEffect(() => {
    if (!textRef.current || !activeViewText.content) return

    gsap.killTweensOf(textRef.current)
    gsap.fromTo(
      textRef.current,
      { autoAlpha: 0, x: -120, },
      { autoAlpha: 1, x: 0, duration: 1.5, ease: 'expo.inOut',}
    )
  }, [activeViewText.content])

  const handleExitText = () => {
    if (!textRef.current) return

    gsap.to(textRef.current, {
      autoAlpha: 0,
      x: -120,
      duration: 1,
      ease: 'expo.inOut',
    })
  }

  const handleExitView = () => {
    setActiveSection(null)
  }

  return (
    <>
        <section className = 'main-layout'>
            <div className = 'Title'>
                <h1>Portfolio</h1>
            </div>
            <p ref={textRef} className='view-text' style={activeViewText.style}>
              {activeViewText.content}
            </p>
            <CameraViewButton
                label={'1'}
                cameraRef={cameraRef}
                controlsRef={controlsRef}
                cameraPosition={[5, 7, 9]}
                lookAt={[0, 3, 0]}
                displayText={'CEDRIC VALENCIA'}
                textStyle={{ top: '45vh', left: '20vw', right: 'auto', bottom: 'auto' }}
                onSelectText={setActiveViewText}
                style={{top: '52.4vh', right: '20vw'}}
            />
            <Line  
                style={{
                    top: '55vh',
                    right: '24vw',
                    width: '20vw',
                    position: 'absolute',
                }}
            />
            <CameraViewButton
                label={'2'}
                cameraRef={cameraRef}
                controlsRef={controlsRef}
                cameraPosition={[-10, 2, 10]}
                lookAt={[0, 4, 0]}
                displayText={'PROJECTS'}
                textStyle={{ top: 'auto', right: '6vw', bottom: '12vh', left: 'auto' }}
                onSelectText={(payload) => {
                  setActiveViewText(payload)
                  setActiveSection('projects')
                }}
                style={{ bottom: '32.5vh', left: '18vw' }}
            />
            <Line  
                style={{
                    bottom: '35vh',
                    left: '22vw',
                    width: '13vw',
                    position: 'absolute',
                }}
            />
            <CameraViewButton
                label={'3'}
                cameraRef={cameraRef}
                controlsRef={controlsRef}
                cameraPosition={[10, 20, 10]}
                lookAt={[0, 4, 0]}
                displayText={''}
                textStyle={{ top: 'auto', right: '6vw', bottom: '12vh', left: 'auto' }}
                onSelectText={(payload) => {
                  setActiveViewText(payload)
                  setActiveSection('')
                }}
                style={{ top: '10vh', right: '40vw' }}
            />

            {activeSection === 'projects' && <Projects />}

            <ExitViewButton              
                label={'>'}
                cameraRef={cameraRef}
                controlsRef={controlsRef}
                cameraPosition={[6, 15, 30]}
                lookAt={[0, 4, 0]}
                onExitText={handleExitText}
                onExitComplete={handleExitView}
                style={{ top: '48vh', right: '1vw' }}
            />

            <div className = 'main-layout-3d'>
                <Canvas 
                  shadows
                    onCreated={({ camera }) => {
                      cameraRef.current = camera
                    }}
                    camera={{ 
                    position: [6, 15, 30], 
                    fov: 45 }}>
                  <ambientLight intensity={0.1} />
                    <OrbitControls 
                    ref={controlsRef}
                    target={[0, 4, 0]} 
                    enableRotate={false}
                    enableZoom={false}
                    />
                    <spotLight
                    ref={spotRef}
                    position={[1, 40, 30]}
                    castShadow
                    intensity={10000}
                    angle={0.25}
                    penumbra={0.6}
                    distance={60}
                    decay={2}
                    shadow-mapSize-width={2048}
                    shadow-mapSize-height={2048}
                    />
                    <object3D ref={targetRef} position={[1, -1, 30]} />
                    <mesh position={[1, -1, 30]}>
                      <sphereGeometry args={[0.2, 16, 16]} />
                      <meshBasicMaterial color={'#ffffff'} />
                    </mesh>
                    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.2, 0]} receiveShadow>
                      <planeGeometry args={[60, 60]} />
                      <meshStandardMaterial color={'#2c2c2c'} roughness={0.9} metalness={0} />
                    </mesh>

                    <directionalLight
                    position={[0, -1, 10]}
                    intensity={0.2}
                    />

                    <Room 
                    position={[0, -1, 0]} 
                    scale={[0.05, 0.05, 0.05]} 
                    rotation= {[0, 1, 0]}
                    />
                </Canvas>
            </div>
        </section>
    </>
  )
}

export default MainLayout