import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';


export function Cohete(props) {
  const groupRef = useRef(); // Referencia para el grupo que contiene el cohete
  const { nodes, materials } = useGLTF('/models/cohete.glb');

  // Animación: rota el grupo del cohete en su eje Y
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.01; // Cambia el valor para ajustar la velocidad
    }
  });

  return (
    <group {...props} ref={groupRef} dispose={null}>
      <group scale={0.01}>
        <group position={[0.049, 7.242, 0]} scale={1.566}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCylinder1_BAJA_0.geometry}
            material={materials.BAJA}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCylinder1_COPA1_0.geometry}
            material={materials.COPA1}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCylinder1_blinn1_0.geometry}
            material={materials.blinn1}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCylinder1_lambert1_0.geometry}
            material={materials.lambert1}
          />
        </group>
        <group
          position={[0.033, 7.482, 1.696]}
          rotation={[1.641, 0.013, -0.048]}
          scale={[0.712, 0.026, 0.87]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCylinder3_BAJA_0.geometry}
            material={materials.BAJA}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCylinder3_VIDRIO_0.geometry}
            material={materials.VIDRIO}
          />
        </group>
        <group
          position={[1.768, 7.482, 0.005]}
          rotation={[1.623, -0.025, -1.523]}
          scale={[0.712, 0.026, 0.87]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCylinder4_BAJA_0.geometry}
            material={materials.BAJA}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCylinder4_VIDRIO_0.geometry}
            material={materials.VIDRIO}
          />
        </group>
        <group
          position={[0.033, 7.482, -1.686]}
          rotation={[-1.431, -0.009, 0.048]}
          scale={[0.712, 0.026, 0.87]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCylinder5_BAJA_0.geometry}
            material={materials.BAJA}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCylinder5_lambert1_0.geometry}
            material={materials.lambert1}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCylinder5_VIDRIO_0.geometry}
            material={materials.VIDRIO}
          />
        </group>
        <group
          position={[-1.643, 7.482, 0.005]}
          rotation={[-1.513, 0.147, 1.522]}
          scale={[0.712, 0.026, 0.87]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCylinder6_BAJA_0.geometry}
            material={materials.BAJA}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCylinder6_lambert1_0.geometry}
            material={materials.lambert1}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCylinder6_VIDRIO_0.geometry}
            material={materials.VIDRIO}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube1_PATAS_0.geometry}
          material={materials.PATAS}
          position={[0.003, 6.117, 0.194]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[1, 1, 0.178]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube2_PATAS_0.geometry}
          material={materials.PATAS}
          position={[-0.068, 6.117, -0.006]}
          scale={[1, 1, 0.178]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube3_PATAS_0.geometry}
          material={materials.PATAS}
          position={[0.003, 6.117, -0.188]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[-1, 1, 0.178]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube4_PATAS_0.geometry}
          material={materials.PATAS}
          position={[0.081, 6.117, -0.006]}
          scale={[-1, 1, 0.178]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCylinder7_FLAMA1_0.geometry}
          material={materials.FLAMA1}
          position={[0.067, 2.5, 0]}
          scale={[1.094, 2.014, 1.094]}
        />
      </group>
    </group>
  );
}

useGLTF.preload('/models/cohete.glb');
