import React, { useRef, useState } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export function Astronauta(props) {
  const { nodes, materials } = useGLTF('/models/Astronauta.glb');
  const groupRef = useRef();
  const [rotateDirection, setRotateDirection] = useState(1); // 1 para avanzar, -1 para retroceder

  useFrame(() => {
    if (groupRef.current) {
      // Actualizamos la rotación en el eje y en función de la dirección
      groupRef.current.rotation.y += 0.001 * rotateDirection;

      // Cambia la dirección cuando alcanza medio giro (±45 grados)
      if (groupRef.current.rotation.y > Math.PI / 4) {
        setRotateDirection(-1); // Cambia la dirección para regresar
      } else if (groupRef.current.rotation.y < -Math.PI / 4) {
        setRotateDirection(1); // Cambia la dirección para avanzar
      }
    }
  });

  return (
    <group ref={groupRef} {...props} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes.Guante.geometry} material={materials.material_2} />
      <mesh castShadow receiveShadow geometry={nodes.Object_100.geometry} material={materials.material_0} />
      <mesh castShadow receiveShadow geometry={nodes.Object_103.geometry} material={materials.material_1} />
      <mesh castShadow receiveShadow geometry={nodes.Object_106.geometry} material={materials.material_2} />
      <mesh castShadow receiveShadow geometry={nodes.Object_99.geometry} material={materials.material_0} />
      <mesh castShadow receiveShadow geometry={nodes.Visor.geometry} material={materials.material_2} />
      <mesh castShadow receiveShadow geometry={nodes.Zapatos.geometry} material={materials.material_2} />
    </group>
  );
}

useGLTF.preload('/models/Astronauta.glb');
