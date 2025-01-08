import { useRef, useEffect } from 'react';
import { useGLTF, useVideoTexture } from '@react-three/drei';
import gsap from 'gsap';

const Iphone = (props) => {
  const group = useRef();
  const { nodes, materials } = useGLTF('/models/iphone.glb');

  // Cargar la textura del video
  const videoTexture = useVideoTexture(props.texture, {
    loop: true,
    autoplay: true,
    muted: true,
  });

  useEffect(() => {
    if (videoTexture) {
      videoTexture.flipY = false; // Ajustar orientación si es necesario
    }
  }, [videoTexture]);

  useEffect(() => {
    // Animación de rotación con GSAP
    gsap.from(group.current.rotation, {
      y: Math.PI / 2,
      duration: 1,
      ease: 'power3.out',
    });
  }, []);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        {/* Aplicar la textura del video al nodo correcto */}
        <mesh
          name="screen"
          geometry={nodes.Object_18.geometry} // Nodo correcto para la pantalla del iPhone
        >
          <meshBasicMaterial map={videoTexture} toneMapped={false} />
        </mesh>

        {/* Resto del modelo */}
        <group name="Body">
          <mesh
            geometry={nodes.Object_14.geometry}
            material={materials['8ed052ed6d3cd71ab5e3']}
          />
          <mesh
            geometry={nodes.Object_16.geometry}
            material={materials['5155c9eac3acd76d34a9']}
          />
          <mesh
            geometry={nodes.Object_20.geometry}
            material={materials.a18b462c494e4fd29b4b}
          />
          <mesh
            geometry={nodes.Object_23.geometry}
            material={materials.dee5a626f928a5fa4c28}
          />
          <mesh
            geometry={nodes.Object_25.geometry}
            material={materials.e73cdd81f0248824c66f}
          />
          <mesh
            geometry={nodes.Object_27.geometry}
            material={materials['5d66e4713803a9e0ad46']}
          />
          <mesh
            geometry={nodes.Object_29.geometry}
            material={materials['3b9594ccffa1d862f699']}
          />
          <mesh
            geometry={nodes.Object_31.geometry}
            material={materials['3a020e0705c66463c666']}
          />
          <mesh
            geometry={nodes.Object_33.geometry}
            material={materials['8293fe999d10eb51dc07']}
          />
          <mesh
            geometry={nodes.Object_36.geometry}
            material={materials.b23162de4d8409eb15f1}
          />
          <mesh
            geometry={nodes.Object_38.geometry}
            material={materials.e7fedd2cefc789ae4070}
          />
          <mesh
            geometry={nodes.Object_40.geometry}
            material={materials.cf3bfd3f874c6277f037}
          />
          <mesh
            geometry={nodes.Object_42.geometry}
            material={materials['483cd8d2505fcf4cc33c']}
          />
          <mesh
            geometry={nodes.Object_44.geometry}
            material={materials['13fa87e9b9ea638526bb']}
          />
          <mesh
            geometry={nodes.Object_46.geometry}
            material={materials.cecc91181f1dafcc19fa}
          />
          <mesh
            geometry={nodes.Object_48.geometry}
            material={materials['2df164b7997e629e4d7e']}
          />
          <mesh
            geometry={nodes.Object_50.geometry}
            material={materials['103fc094f5cdada7aa57']}
          />
          <mesh
            geometry={nodes.Object_52.geometry}
            material={materials['25fa7b29639901e1f310']}
          />
          <mesh
            geometry={nodes.Object_54.geometry}
            material={materials['299a045923a299d97c82']}
          />
          <mesh
            geometry={nodes.Object_57.geometry}
            material={materials['82823ff934002f16e6e0']}
            position={[0, 0, 0.037]}
          />
          <mesh
            geometry={nodes.Object_59.geometry}
            material={materials.b4ad12de1fcbdd61166e}
          />
          <mesh
            geometry={nodes.Object_62.geometry}
            material={materials.ec12d37933cc378c1226}
          />
          <mesh
            geometry={nodes.Object_65.geometry}
            material={materials.bfb52a03e58fd454437d}
          />
          <mesh
            geometry={nodes.Object_67.geometry}
            material={materials['906edd797edf30e1b5ca']}
          />
          <mesh
            geometry={nodes.Object_70.geometry}
            material={materials.c306087c056eb775dddc}
          />
          <mesh
            geometry={nodes.Object_72.geometry}
            material={materials['4a6c96a0e91c63810afa']}
          />
          <mesh
            geometry={nodes.Object_74.geometry}
            material={materials['4e2775e8ab652e8ec892']}
          />
          <mesh
            geometry={nodes.Object_77.geometry}
            material={materials.c1f38c49c59514a1f2d9}
          />
          <mesh
            geometry={nodes.Object_80.geometry}
            material={materials.b8c5608ba04260006bf0}
          />
          <mesh
            geometry={nodes.Object_82.geometry}
            material={materials['091912dc178e0b223122']}
          />
          <mesh
            geometry={nodes.Object_84.geometry}
            material={materials['6a2b4bcac74a0306e361']}
          />
          <mesh
            geometry={nodes.Object_86.geometry}
            material={materials.f960f58dcaeee45e59c1}
          />
          <mesh
            geometry={nodes.Object_88.geometry}
            material={materials['50c2259ef1b62ea11389']}
          />
          <mesh
            geometry={nodes.Object_90.geometry}
            material={materials['994433e619f1f1513042']}
          />
        </group>
      </group>
    </group>
  );
};

useGLTF.preload('/models/iphone.glb');

export default Iphone;