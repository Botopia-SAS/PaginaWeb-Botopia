import React from "react";
import { useTranslation } from "react-i18next";

const teamMembers = [
  {
    id: "isaac",
    photo: "assets/Isaac.svg",
    translations: {
      es: {
        name: "Isaac Páez Triana",
        title: "Head of Engineering",
        description: "Líder en desarrollo de soluciones digitales innovadoras.",
      },
      pt: {
        name: "Isaac Páez Triana",
        title: "Chefe de Engenharia",
        description: "Líder no desenvolvimento de soluções digitais inovadoras.",
      },
      en: {
        name: "Isaac Páez Triana",
        title: "Head of Engineering",
        description: "Leader in developing innovative digital solutions.",
      },
    },
  },
  {
    id: "laura",
    photo: "assets/Laura.svg",
    translations: {
      es: {
        name: "Laura Cifuentes Barrero",
        title: "CEO",
        description: "Experta en liderazgo y crecimiento estratégico.",
      },
      pt: {
        name: "Laura Cifuentes Barrero",
        title: "CEO",
        description: "Especialista em liderança e crescimento estratégico.",
      },
      en: {
        name: "Laura Cifuentes Barrero",
        title: "CEO",
        description: "Expert in leadership and strategic growth.",
      },
    },
  },
  {
    id: "juan",
    photo: "assets/Diego.svg",
    translations: {
      es: {
        name: "Juan Gama Galvis",
        title: "Operations Manager",
        description: "Optimiza procesos y gestiona operaciones eficientes.",
      },
      pt: {
        name: "Juan Gama Galvis",
        title: "Gerente de Operações",
        description: "Otimiza processos e gerencia operações eficientes.",
      },
      en: {
        name: "Juan Gama Galvis",
        title: "Operations Manager",
        description: "Optimizes processes and manages efficient operations.",
      },
    },
  },
  {
    id: "david",
    photo: "assets/Espejo.svg",
    translations: {
      es: {
        name: "David Espejo Garcia",
        title: "CTO",
        description: "Diseña y lidera la estrategia tecnológica de la empresa.",
      },
      pt: {
        name: "David Espejo Garcia",
        title: "CTO",
        description:
          "Projeta e lidera a estratégia tecnológica da empresa.",
      },
      en: {
        name: "David Espejo Garcia",
        title: "CTO",
        description: "Designs and leads the company's technology strategy.",
      },
    },
  },
  {
    id: "fabian",
    photo: "assets/Fabi.svg",
    translations: {
      es: {
        name: "Fabian Garzón",
        title: "Business Development Consultant",
        description:
          "Identifica nuevas oportunidades y alianzas estratégicas para impulsar el crecimiento y expansión de Botopia.",
      },
      pt: {
        name: "Fabian Garzón",
        title: "Consultor de Desenvolvimento de Negócios",
        description:
          "Identifica novas oportunidades e parcerias estratégicas para impulsionar o crescimento e expansão da Botopia.",
      },
      en: {
        name: "Fabian Garzón",
        title: "Business Development Consultant",
        description:
          "Identifies new opportunities and strategic partnerships to drive growth and expansion for Botopia.",
      },
    },
  },
];

const Team = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  return (
    <section id="team" className="bg-galaxy bg-cover bg-fixed py-16">
      <div className="max-w-7xl mx-auto text-center text-white">
        <h2 className="text-4xl font-extrabold mb-8">
          {currentLanguage === "es"
            ? "Conoce al Equipo"
            : currentLanguage === "pt"
            ? "Conheça a Equipe"
            : "Meet the Team"}
        </h2>

        {/* Primer fila con 4 miembros */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {teamMembers.slice(0, 4).map((member, index) => {
            const { name, title, description } =
              member.translations[currentLanguage];
            return (
              <div
                key={index}
                className="bg-[#1a1a1a] p-6 rounded-lg shadow-xl hover:shadow-2xl transform transition-transform hover:scale-105 duration-300"
              >
                <img
                  src={member.photo}
                  alt={name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-gray-700"
                />
                <h3 className="text-xl font-semibold text-white">{name}</h3>
                <p className="text-sm text-gray-400 mb-2">{title}</p>
                <p className="text-gray-300">{description}</p>
              </div>
            );
          })}
        </div>

        {/* Sección para Fabián Garzón y "+ de 10 Ingenieros" */}
        <div className="mt-8 space-y-12">
          {/* Miembro adicional (quinto miembro - Fabian Garzón) */}
          <div className="bg-[#1a1a1a] p-6 rounded-lg shadow-xl hover:shadow-2xl transform transition-transform hover:scale-105 duration-300">
            <div className="flex items-center justify-center">
              <img
                src={teamMembers[4].photo}
                alt={teamMembers[4].translations[currentLanguage].name}
                className="w-48 h-48 rounded-full object-cover border-4 border-gray-700 mr-6"
              />
              <div className="flex flex-col justify-center">
                <h3 className="text-2xl font-semibold text-white text-center">
                  {teamMembers[4].translations[currentLanguage].name}
                </h3>
                <p className="text-sm text-gray-400 mb-2 text-center">
                  {teamMembers[4].translations[currentLanguage].title}
                </p>
                <p className="text-gray-300 text-center">
                  {teamMembers[4].translations[currentLanguage].description}
                </p>
              </div>
            </div>
          </div>

          {/* Recuadro de "+ de 10 Ingenieros" */}
          <div className="text-center">
            <div className="relative flex items-center justify-center mb-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white"></div>
              </div>
              <div className="w-4 h-4 bg-white rounded-full z-10"></div>
            </div>

            <p className="text-4xl font-extrabold text-white mb-4">
              {currentLanguage === "es"
                ? "+ de 10 Ingenieros"
                : currentLanguage === "pt"
                ? "+ de 10 Engenheiros"
                : "+10 Engineers"}
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mx-auto max-w-3xl">
              {currentLanguage === "es"
                ? "Nuestro equipo de ingenieros está comprometido con la innovación y la calidad. Contamos con más de 10 expertos que contribuyen día a día con su talento y dedicación para crear soluciones digitales únicas. ¡Juntos, estamos construyendo el futuro!"
                : currentLanguage === "pt"
                ? "Nossa equipe de engenheiros está comprometida com a inovação e qualidade. Contamos com mais de 10 especialistas que contribuem diariamente com seu talento e dedicação para criar soluções digitais únicas. Juntos, estamos construindo o futuro!"
                : "Our team of engineers is committed to innovation and quality. We have over 10 experts who contribute daily with their talent and dedication to create unique digital solutions. Together, we are building the future!"}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
