import React from "react";
import { useParams, Link } from "react-router-dom";

const ServiceDetail = () => {
  const { id } = useParams(); // Obtiene el ID del servicio desde la URL

  // Datos detallados para cada servicio
  const serviceDetails = {
    automatizacion: {
      title: "Automatización",
      description: `
        La automatización es clave para mejorar la eficiencia operativa de las empresas. 
        En este servicio, analizamos los procesos actuales de tu empresa y diseñamos soluciones 
        automatizadas que eliminan tareas repetitivas, reducen errores humanos y aumentan la productividad.
        Utilizamos tecnologías avanzadas como controladores lógicos programables (PLC), 
        sistemas SCADA y robótica para optimizar tu negocio.
      `,
      image: "/assets/automatizacion.jpg", // Imagen decorativa
    },
    "transformacion-digital": {
      title: "Innovación y Transformación Digital",
      description: `
        En un mundo en constante cambio, la transformación digital no es una opción, 
        es una necesidad. Implementamos tecnologías avanzadas como inteligencia artificial, 
        machine learning y herramientas de análisis de datos para llevar tu empresa a un nuevo nivel. 
        Esto incluye la integración de soluciones basadas en la nube, aplicaciones móviles 
        y optimización de procesos tradicionales para que tu negocio sea competitivo en la era digital.
      `,
      image: "/assets/transformacion-digital.jpg", // Imagen decorativa
    },
    robots: {
        title: "Robots",
        description: `
          Nuestros robots están diseñados para revolucionar la forma en que operas. Desde robots industriales 
          para líneas de producción hasta soluciones autónomas para logística y almacenamiento, 
          diseñamos e implementamos sistemas que aumentan la precisión, reducen costos y mejoran la seguridad.
          Cada robot es personalizado según las necesidades de tu empresa y utiliza tecnologías de vanguardia.
        `,
      },
      "consultoria-negocios": {
        title: "Consultoría de Negocios",
        description: `
          Nuestro equipo de expertos en consultoría de negocios trabaja contigo para identificar 
          oportunidades de mejora en tu empresa. Analizamos tus procesos, evaluamos tu mercado y 
          diseñamos estrategias personalizadas que maximizan tu éxito. Desde la planificación estratégica 
          hasta la implementación, estamos contigo en cada paso del camino.
        `,
      },
      "tecnologia-medida": {
        title: "Tecnología a la Medida",
        description: `
          Creamos soluciones tecnológicas diseñadas específicamente para satisfacer las necesidades únicas 
          de tu empresa. Ya sea que necesites un sistema de gestión interno, aplicaciones móviles personalizadas 
          o herramientas de análisis de datos, desarrollamos software que se adapta perfectamente a tu modelo 
          de negocio y objetivos.
        `,
      },
      "sitios-web": {
        title: "Desarrollo de Sitio Web",
        description: `
          Tu sitio web es la puerta de entrada para tus clientes en el mundo digital. Creamos sitios web 
          modernos, funcionales y optimizados para SEO que reflejan la identidad de tu marca. Cada diseño 
          está pensado para ofrecer una experiencia de usuario excepcional y generar conversiones.
        `,
      },
      "aplicaciones-moviles": {
        title: "Desarrollo de Aplicaciones Móviles",
        description: `
          Desarrollamos aplicaciones móviles innovadoras y funcionales que ayudan a las empresas a 
          conectar con sus clientes. Desde aplicaciones nativas hasta multiplataforma, diseñamos 
          herramientas intuitivas, rápidas y seguras que cumplen con las necesidades específicas 
          de tu negocio.
        `,
      },
      "infraestructura-cloud": {
        title: "Infraestructura Cloud",
        description: `
          La infraestructura en la nube es el futuro de la tecnología empresarial. Implementamos y 
          gestionamos soluciones cloud que ofrecen escalabilidad, flexibilidad y seguridad. Desde servidores 
          en la nube hasta sistemas de almacenamiento y aplicaciones SaaS, transformamos la forma en que 
          operas digitalmente.
        `,
      },
      mvp: {
        title: "Desarrollo MVP",
        description: `
          Un Producto Mínimo Viable (MVP) es la manera más rápida de validar tus ideas de negocio. 
          Desarrollamos prototipos funcionales que te permiten probar tus conceptos en el mercado real, 
          reduciendo riesgos y optimizando recursos antes de invertir en un producto completo.
        `,
      },
      ecommerce: {
        title: "Desarrollo E-commerce",
        description: `
          Creamos tiendas en línea personalizadas que maximizan tus ventas y mejoran la experiencia de usuario. 
          Desde plataformas de comercio electrónico con integración de pasarelas de pago hasta soluciones de 
          gestión de inventario, diseñamos sistemas escalables que impulsan tu negocio.
        `,
      },
      "integracion-ai": {
        title: "Integración AI",
        description: `
          La inteligencia artificial puede transformar tu negocio. Desde chatbots automatizados hasta análisis 
          predictivos y personalización avanzada, integramos soluciones de IA que te ayudan a tomar mejores 
          decisiones, ahorrar tiempo y ofrecer experiencias únicas a tus clientes.
        `,
      },
      "diseno-ux": {
        title: "Diseño UX/UI",
        description: `
          Una experiencia de usuario excepcional puede marcar la diferencia. Diseñamos interfaces intuitivas 
          y atractivas que mejoran la interacción de los usuarios con tus productos y servicios. Desde wireframes 
          hasta prototipos, garantizamos que cada diseño esté alineado con las necesidades de tu público.
        `,
      },
      "chatbots-respuestas": {
        title: "Automatización de Respuestas",
        description: `
          Los chatbots son herramientas poderosas para automatizar la atención al cliente. Diseñamos chatbots 
          personalizados que responden a las preguntas frecuentes de tus clientes de manera rápida y eficiente, 
          mejorando la experiencia del usuario y reduciendo costos operativos.
        `,
      },
      "chatbots-whatsapp": {
        title: "Integración con WhatsApp",
        description: `
          WhatsApp es una de las plataformas de mensajería más utilizadas en el mundo. Integramos chatbots con 
          WhatsApp para que puedas interactuar con tus clientes de manera fluida, respondiendo preguntas, 
          gestionando pedidos y ofreciendo soporte en tiempo real.
        `,
      },
      "chatbots-analisis": {
        title: "Análisis de Datos del Cliente",
        description: `
          Recopilar datos del cliente es esencial para mejorar tus servicios. Nuestros chatbots no solo interactúan 
          con los usuarios, sino que también recopilan y analizan datos importantes para ayudarte a tomar decisiones 
          informadas sobre tus estrategias de negocio.
        `,
      },
      "chatbots-flujo": {
        title: "Personalización del Flujo Conversacional",
        description: `
          Cada cliente es único, y tus chatbots también deberían serlo. Diseñamos flujos conversacionales 
          personalizados que ofrecen interacciones naturales y efectivas, adaptándose a las necesidades 
          específicas de tu negocio y público.
        `,
      },
  };

  const service = serviceDetails[id];

  if (!service) {
    return (
      <section className="py-16 bg-gray-900 text-white text-center">
        <h2 className="text-3xl font-bold">Servicio no encontrado</h2>
        <p className="text-lg mt-4">
          Parece que el servicio que buscas no existe.{" "}
          <Link to="/" className="text-[#9165f3] underline">
            Volver a la página principal
          </Link>
          .
        </p>
      </section>
    );
  }

  return (
    <section
      className="py-20 bg-gray-900 text-white"
      style={{
        backgroundImage: `url(${service.image})`, // Imagen como fondo
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="max-w-5xl mx-auto bg-black/80 p-8 rounded-lg"
        style={{ backdropFilter: "blur(10px)" }} // Fondo semitransparente con desenfoque
      >
        <h2 className="text-5xl font-bold mb-6 text-center">{service.title}</h2>
        <p className="text-lg text-gray-300 leading-relaxed text-center">
          {service.description}
        </p>
        <div className="flex justify-center mt-8">
          <Link
            to="/"
            className="bg-[#9165f3] text-white px-6 py-3 rounded-lg text-lg hover:bg-[#7e53c1] transition"
          >
            Volver a Servicios
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetail;
