import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import { Suspense } from "react";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from '../constants/index.js';
import ReactLogo from "../components/ReactLogo.jsx";
import Rings from "../components/Rings.jsx";
import HeroCamera from "../components/HeroCamera.jsx";
import Button from "../components/Button.jsx";
import { Model } from "../components/mini_robot.jsx";
import { Astronauta } from "../components/Astronauta.jsx";
import { Typewriter } from 'react-simple-typewriter';
import { useTranslation } from "react-i18next"; // Importar el hook de traducción


const Hero = () => {
    const { t } = useTranslation();
    const isSmall = useMediaQuery({ maxWidth: 0 });
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

    const sizes = calculateSizes(isSmall, isMobile, isTablet);

    // Frases dinámicas traducidas
  const words = [
    t("hero.tagline1", "Tecnología que mejora tu vida"),
    t("hero.tagline2", "Creamos soluciones innovadoras"),
    t("hero.tagline3", "Impulsamos tu negocio con tecnología"),
  ];

    return (
        <section
            id="hero"
            className="h-screen bg-cover bg-fixed flex flex-col relative sm:bg-scroll"
        >
            <div className="w-full flex flex-col sm:mt-36 mt-20 px-10 gap-3">
                <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
                    {t("hero.greeting", "¡Hola! somos Botopia")}
                    <span className="waving hand">👋</span>
                </p>
                <div>
                    <p className="hero_tag text-gray_gradient text-[32px]">
                        <Typewriter
                            words={words} // Frases traducidas
                            loop={0} // Número de repeticiones, '0' para infinito
                            cursor
                            cursorStyle="|"
                            cursorColor="white"
                            typeSpeed={50} // Velocidad de escritura
                            deleteSpeed={5} // Velocidad de borrado
                            delaySpeed={4000} // Pausa antes de cambiar al siguiente texto
                        />
                    </p>
                </div>
                <div style={{ height: '4rem' }}></div> {/* Espacio adicional */}
                <div className="w-full h-full absolute inset-0">
                    <Canvas className="w-full h-full">
                        <Suspense fallback={''}>
                            <PerspectiveCamera makeDefault position={[0, 0, 20]} />
                            <HeroCamera isMobile={isMobile}>
                                <Astronauta
                                    scale={sizes.deskScale}
                                    position={sizes.deskPosition}
                                    rotation={[0.3, 0.1, -0.5]}
                                />
                            </HeroCamera>
                            <group>
                                <Model position={sizes.targetPosition} />
                                <ReactLogo position={sizes.reactLogoPosition} />
                                <Rings position={sizes.ringPosition} />
                            </group>
                            <ambientLight intensity={1} />
                            <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
                            <directionalLight position={[-5, -5, 5]} intensity={0.5} />
                        </Suspense>
                    </Canvas>
                </div>
                <div className="absolute bottom-7 left-0 right-0 w-full z-10 px-4">
                    <a href="#contact" className="w-fit">
                        <Button
                            name={t("hero.cta", "¡Cotiza hoy mismo!")}
                            isBeam
                            containerClass="sm:w-fit w-full sm:min-w-96"
                        />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
