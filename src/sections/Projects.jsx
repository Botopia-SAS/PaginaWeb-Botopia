import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import { myProjects } from "../constants/index.js";
import { useTranslation } from "react-i18next";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Projects = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language; // Obtiene el idioma actual
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

  const handleNavigation = (direction) => {
    setSelectedProjectIndex((prevIndex) => {
      if (direction === "previous") {
        return prevIndex === 0 ? myProjects.length - 1 : prevIndex - 1;
      } else {
        return prevIndex === myProjects.length - 1 ? 0 : prevIndex + 1;
      }
    });
  };

  const currentProject = myProjects[selectedProjectIndex];
  const translations = currentProject.translations[currentLanguage] || {};


  return (
    <section className="c-space my-20">
      <p className="head-text">{translations.title || "Portafolio"}</p>

      <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
        {/* Información del proyecto */}
        <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200">
          <div className="absolute top-0 right-0">
            <img
              src={currentProject.spotlight}
              alt="spotlight"
              className="w-full h-96 object-cover rounded-xl"
            />
          </div>

          <div
            className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg"
            style={currentProject.logoStyle}
          >
            <img
              className="w-10 h-10 shadow-sm"
              src={currentProject.logo}
              alt="logo"
            />
          </div>

          <div
            className="flex flex-col gap-5 text-white-600 my-5 overflow-hidden"
            style={{ height: "200px" }}
          >
            <p className="text-white text-2xl font-semibold animatedText">
            {translations.title || currentProject.title}
            </p>
            <p className="animatedText">
              {" "}
              {translations.description || currentProject.description}
            </p>
            <p className="animatedText">
            {translations.subdescription || currentProject.subdescription}
            </p>
          </div>

          <div className="flex justify-between items-center mt-7">
            <button
              className="arrow-btn"
              onClick={() => handleNavigation("previous")}
            >
              <img src="/assets/left-arrow.png" alt="left arrow" />
            </button>
            <button
              className="arrow-btn"
              onClick={() => handleNavigation("next")}
            >
              <img
                src="/assets/right-arrow.png"
                alt="right arrow"
                className="w-4 h-4"
              />
            </button>
          </div>
        </div>

        {/* Carrusel de imágenes centrado */}
        <div className="flex justify-center items-center h-full">
          <Swiper
            modules={[Navigation, Pagination, A11y]}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={50}
            slidesPerView={1}
            className="w-full"
          >
            {currentProject.photos?.map((photo, index) => (
              <SwiperSlide key={index}>
                <div className="flex justify-center items-center">
                  <img
                    src={photo.path}
                    alt={`Foto ${index + 1}`}
                    className="object-cover rounded-3xl shadow-lg max-h-[500px] max-w-full"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Projects;
