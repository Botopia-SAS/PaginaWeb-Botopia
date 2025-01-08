import React from "react";
import { useTranslation } from "react-i18next";
import Globe from "react-globe.gl";

const About = () => {
  const { t } = useTranslation();

  return (
    <section className="c-space my-20 text-white" id="about">
      {/* Sección principal */}
      <div className="space-y-20">
        {/* Encabezado */}
        <div className="text-center space-y-5">
          <h2 className="text-4xl font-extrabold text-[#9165f3]">
            {t("about.title")}{" "}
            <span className="text-white">Botopia S.A.S.</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            {t("about.description")}
          </p>
        </div>

        {/* Sección de Contenido */}
        <div className="grid lg:grid-cols-2 gap-10">
          {/* Misión */}
          <div className="bg-gradient-to-r from-[#1A1A1A] to-[#2A2A2A] p-8 rounded-lg shadow-lg flex flex-col justify-between h-full">
            <h3 className="text-3xl font-bold text-[#9165f3] mb-4">
              {t("about.mission.title")}
            </h3>
            <p className="text-gray-300 text-lg">
              {t("about.mission.description")}
            </p>
          </div>

          {/* Visión */}
          <div className="bg-gradient-to-r from-[#1A1A1A] to-[#2A2A2A] p-8 rounded-lg shadow-lg flex flex-col justify-between h-full">
            <h3 className="text-3xl font-bold text-[#9165f3] mb-4">
              {t("about.vision.title")}
            </h3>
            <p className="text-gray-300 text-lg">
              {t("about.vision.description")}
            </p>
          </div>

          {/* Valores */}
          <div className="bg-gradient-to-r from-[#1A1A1A] to-[#2A2A2A] p-8 rounded-lg shadow-lg flex flex-col justify-between h-full">
            <h3 className="text-3xl font-bold text-[#9165f3] mb-4">
              {t("about.values.title")}
            </h3>
            <ul className="list-disc list-inside text-gray-300 text-lg space-y-3">
              {t("about.values.list", { returnObjects: true }).map(
                (value, index) => (
                  <li key={index}>{value}</li>
                )
              )}
            </ul>
          </div>

          {/* Compromiso */}
          <div className="bg-gradient-to-r from-[#1A1A1A] to-[#2A2A2A] p-8 rounded-lg shadow-lg flex flex-col justify-between h-full">
            <h3 className="text-3xl font-bold text-[#9165f3] mb-4">
              {t("about.commitment.title")}
            </h3>
            <p className="text-gray-300 text-lg">
              {t("about.commitment.description")}
            </p>
          </div>
        </div>

        {/* Sección del Globo */}
        <div className="flex justify-center items-center">
          <div className="w-full max-w-3xl h-[400px]">
            <Globe
              height={400}
              width={400}
              backgroundColor="rgba(0, 0, 0, 0)"
              backgroundImageOpacity={0.5}
              showAtmosphere
              showGraticules
              globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
              bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
              labelsData={[
                { lat: 40, lng: -100, text: "Rjieka, Croatia", color: "white", size: 15 },
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
