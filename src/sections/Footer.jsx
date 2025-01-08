import React from "react";
import Contact from "./Contact.jsx";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation(); // Usar el hook de traducción para la sección "footer"

  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 text-center md:text-left">
        {/* Columna izquierda */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-lg font-bold mb-4">{t("footer.title")}</h2>
          <p className="text-sm">{t("footer.tagline")}</p>
          <div className="flex gap-3 mt-4">
            {/* Redes sociales */}
            <a
              href="https://github.com/Botopia-SAS"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon hover:bg-[#9165f3] rounded-full p-2 transition"
            >
              <img src="/assets/github.svg" alt="github" className="w-6 h-6" />
            </a>
            <a
              href="https://x.com/BotopiaSAS"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon hover:bg-[#9165f3] rounded-full p-2 transition"
            >
              <img src="/assets/twitter.svg" alt="twitter" className="w-6 h-6" />
            </a>
            <a
              href="https://www.instagram.com/botopia.tech?igsh=MTNoNGRuajZ0MjBzcw=="
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon hover:bg-[#9165f3] rounded-full p-2 transition"
            >
              <img src="/assets/instagram.svg" alt="instagram" className="w-6 h-6" />
            </a>
            <a
              href="https://www.tiktok.com/@botopia.tech?_t=8rRlCtatURD&_r=1"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon hover:bg-[#9165f3] rounded-full p-2 transition"
            >
              <img src="/assets/tiktok.svg" alt="tiktok" className="w-6 h-6" />
            </a>
          </div>
          <div className="mt-6 text-left md:mt-10 h-full">
            <h3 className="text-lg font-bold mb-4">{t("footer.quickAccess")}</h3>
            <ul className="space-y-2 h-full">
              <li>
                <a href="/terminos" className="hover:text-[#9165f3] transition">
                  {t("footer.terms")}
                </a>
              </li>
              <li>
                <a href="/privacidad" className="hover:text-[#9165f3] transition">
                  {t("footer.privacy")}
                </a>
              </li>
              <li>
                <a
                  href="/trabaja-con-nosotros"
                  className="hover:text-[#9165f3] transition"
                >
                  {t("footer.workWithUs")}
                </a>
              </li>
              <div className="mt-6 h-full">
                <li className="md:mt-12">
                  <a
                    href={`mailto:${t("footer.email")}`}
                    className="hover:text-[#FFFFFF] transition font-bold md:mt-10"
                  >
                    {t("footer.email")}
                  </a>
                </li>
                <li className="md:mt-1">
                  <a
                    href={`tel:${t("footer.phone")}`}
                    className="hover:text-[#FFFFFF] transition font-bold"
                  >
                    {t("footer.phone")}
                  </a>
                </li>
              </div>
            </ul>
          </div>
        </div>

        {/* Sección de Contacto */}
        <section id="contact" className="w-full">
          <Contact />
        </section>
      </div>

      {/* Footer inferior */}
      <div className="mt-8 text-center text-sm border-t border-gray-700 pt-4">
        {t("footer.rights")}
      </div>
    </footer>
  );
};

export default Footer;
