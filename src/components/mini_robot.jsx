import React, { useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import gsap from 'gsap';

export function Model(props) {
  const modelRef = useRef();  // Referencia para el modelo
  const { nodes, materials } = useGLTF('/models/mini_robot.glb');  // Asegúrate de que la ruta es correcta

  // Animación de subir y bajar con GSAP
  useEffect(() => {
    gsap.to(modelRef.current.position, {
      y: modelRef.current.position.y + 0.5, // Sube 0.5 en el eje Y
      duration: 1.5,                         // Duración de la animación
      repeat: -1,                            // Repetición infinita
      yoyo: true                             // Efecto de ir y volver
    });
  }, []);

  return (
    <group {...props} dispose={null} ref={modelRef}>  {/* Asignamos la referencia aquí */}
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.025}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.SmartCombine_2_lambert2_0.geometry}
            material={materials.lambert2}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.PartOne_low_phong4_0.geometry}
            material={materials.phong4}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.PartTwo_low_phong4_0.geometry}
            material={materials.phong4_0}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.PartThree_low_phong4_0.geometry}
            material={materials.phong4_1}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/models/mini_robot.glb');
