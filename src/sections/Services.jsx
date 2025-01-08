import React, { Suspense, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { useTranslation } from "react-i18next"; // Importa i18next
import { Cohete } from "../components/cohete";

const Services = () => {
  const { t } = useTranslation(); // Usa el hook de traducción
  const [selectedCategory, setSelectedCategory] = useState(
    "software"
  );

  // Detectar tamaños de pantalla
  const isSmallScreen = useMediaQuery({ maxWidth: 500 }); // Pantallas pequeñas
  const isMediumScreen = useMediaQuery({ minWidth: 501, maxWidth: 1024 }); // Tablets
  const isLargeScreen = useMediaQuery({ minWidth: 1025 }); // Escritorio

  // Configurar tamaño y posición dinámicamente
  const coheteConfig = isSmallScreen
    ? { position: [1, -2.2, 0], scale: [25, 25, 25] } // Pantallas pequeñas
    : isMediumScreen
    ? { position: [0, -2, 0], scale: [30, 30, 30] } // Tablets
    : { position: [0, -2.52, 0], scale: [40, 40, 40] }; // Escritorio

  const servicesData = {
    software: [
      {
        id: "tecnologia-medida",
        title: t("services.software.custom_software"),
        description: t("services.software.custom_software_desc"),
      },
      {
        id: "sitios-web",
        title: t("services.software.web_development"),
        description: t("services.software.web_development_desc"),
      },
      {
        id: "aplicaciones-moviles",
        title: t("services.software.mobile_apps"),
        description: t("services.software.mobile_apps_desc"),
      },
      {
        id: "infraestructura-cloud",
        title: t("services.software.cloud_infrastructure"),
        description: t("services.software.cloud_infrastructure_desc"),
      },
      {
        id: "mvp",
        title: t("services.software.mvp"),
        description: t("services.software.mvp_desc"),
      },
      {
        id: "ecommerce",
        title: t("services.software.ecommerce"),
        description: t("services.software.ecommerce_desc"),
      },
      {
        id: "integracion-ai",
        title: t("services.software.ai_integration"),
        description: t("services.software.ai_integration_desc"),
      },
    ],
    engineering: [
      {
        id: "automatizacion",
        title: t("services.engineering.automation"),
        description: t("services.engineering.automation_desc"),
      },
      {
        id: "transformacion-digital",
        title: t("services.engineering.digital_transformation"),
        description: t("services.engineering.digital_transformation_desc"),
      },
      {
        id: "robots",
        title: t("services.engineering.robots"),
        description: t("services.engineering.robots_desc"),
      },
      {
        id: "consultoria-negocios",
        title: t("services.engineering.business_consulting"),
        description: t("services.engineering.business_consulting_desc"),
      },
    ],
    design: [
      {
        id: "diseno-ux",
        title: t("services.design.ux_ui"),
        description: t("services.design.ux_ui_desc"),
      },
    ],
    chatbots: [
      {
        id: "chatbots-respuestas",
        title: t("services.chatbots.automation"),
        description: t("services.chatbots.automation_desc"),
      },
      {
        id: "chatbots-whatsapp",
        title: t("services.chatbots.whatsapp"),
        description: t("services.chatbots.whatsapp_desc"),
      },
      {
        id: "chatbots-analisis",
        title: t("services.chatbots.data_analysis"),
        description: t("services.chatbots.data_analysis_desc"),
      },
      {
        id: "chatbots-flujo",
        title: t("services.chatbots.flow_customization"),
        description: t("services.chatbots.flow_customization_desc"),
      },
    ],
  };

  const handleScroll = (direction) => {
    const container = document.getElementById("services-container");
    const cardWidth = container.querySelector("div").offsetWidth + 16; // Calcula el ancho de cada tarjeta
    const scrollAmount = direction === "left" ? -cardWidth : cardWidth;
    container.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  const shouldCenter =
    servicesData[selectedCategory].length <= 4 && !isSmallScreen;

  return (
    <section
      id="services"
      className="relative py-16 bg-cover bg-fixed sm:bg-scroll text-white"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Contenedor de título */}
        <div className="flex flex-col items-center mb-12 relative">
          <h2 className="text-4xl font-bold text-center z-20">
          {t("services.title")}
          </h2>
        </div>

        {/* Botones de categoría */}
        <div className="flex justify-center mb-8 flex-wrap gap-4 z-10 relative">
          {Object.keys(servicesData).map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg transition ${
                selectedCategory === category
                  ? "bg-[#9165f3] text-white"
                  : "bg-gray-800 text-gray-400"
              } hover:bg-[#7e53c1] hover:text-white`}
            >
              {t(`services.categories.${category}`)}
              </button>
          ))}
        </div>

        {/* Contenedor de servicios */}
        <div className="relative z-10">
          <div
            id="services-container"
            className={`flex ${
              shouldCenter ? "justify-center" : "overflow-x-auto"
            } gap-4 py-4`}
          >
            {servicesData[selectedCategory].map((service) => (
              <div
                key={service.id}
                className="min-w-[220px] max-w-[220px] bg-[#1A1A1A] p-4 rounded-lg shadow-lg hover:shadow-xl transition hover:scale-105 flex-shrink-0 h-[250px]"
              >
                <h3 className="text-base font-semibold mb-2 text-center">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-400 text-center break-words">
                  {service.description}
                </p>
                <div className="flex justify-center mt-4">
                  <Link
                    to={`/servicio/${service.id}`}
                    className="bg-[#9165f3] text-white px-4 py-2 rounded-full text-sm hover:bg-[#7e53c1] transition"
                  >
                    {t("services.view_more")}
                    </Link>
                </div>
              </div>
            ))}
          </div>
          {!shouldCenter && (
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-4">
              <button
                className="text-[#9165f3] text-3xl hover:text-[#7e53c1] transition"
                onClick={() => handleScroll("left")}
              >
                &#8249;
              </button>
              <button
                className="text-[#9165f3] text-3xl hover:text-[#7e53c1] transition"
                onClick={() => handleScroll("right")}
              >
                &#8250;
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Canvas con el modelo del cohete fuera del contenedor */}
      <div className="absolute top-0 right-0 w-[200px] h-[200px] z-50 pointer-events-none">
        <Canvas>
          <Suspense fallback={null}>
            <PerspectiveCamera makeDefault position={[0, 0, 5]} />
            <ambientLight intensity={1} />
            <directionalLight position={[5, 5, 5]} intensity={1} />
            <Cohete
              position={coheteConfig.position}
              scale={coheteConfig.scale}
              rotation={[0.2, 0.7, 0.1]}
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Services;
