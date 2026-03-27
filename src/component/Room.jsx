import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/challenge_isometric_room--kidnap.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.UFO_UFO_0.geometry}
        material={materials.material}
        position={[-0.095, 477.293, 0.209]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.room_Room_0.geometry}
        material={materials.Room}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Girl_Girl_0.geometry}
        material={materials.Girl}
        position={[0, 65.059, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder001_Light_0.geometry}
        material={materials.Light}
        position={[-0.751, 310.425, 1.651]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object001_UFO_0.geometry}
        material={materials.material}
        position={[-0.095, 376.338, 0.209]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object002_Room_0.geometry}
        material={materials.Room}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object003_Room_0.geometry}
        material={materials.Room}
        position={[0, 0, 28.301]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  )
}

useGLTF.preload('/challenge_isometric_room--kidnap.glb')