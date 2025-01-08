import { useState } from "react";
import { navLinks } from "../constants/index.js";
import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const NavItems = ({ handleScroll }) => {
  const { t } = useTranslation(); // Usar `t` dentro del componente para obtener traducciones dinámicas

  return (
    <ul className="nav-ul flex space-x-6">
      {navLinks.map(({ id, href }) => (
        <li
          key={id}
          className={`nav-li relative ${
            id === "contact"
              ? "bg-[#9165f3] px-4 py-2 rounded-lg text-white"
              : ""
          }`}
        >
          {id === "about" ? (
            // Enlace dinámico para "Conócenos"
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-white font-medium hover:text-[#7e53c1] transition-colors cursor-pointer text-lg ${
                  isActive ? "text-[#9165f3]" : "text-neutral-400"
                }`
              }
            >
              {t(`nav.${id}`)} {/* Traducción dinámica */}
            </NavLink>
          ) : (
            <a
              href={href}
              onClick={(e) => {
                e.preventDefault();
                handleScroll(href);
              }}
              className={`text-white font-medium hover:text-[#7e53c1] transition-colors cursor-pointer text-lg ${
                id === "contact" ? "text-white" : "text-neutral-400"
              }`}
            >
              {t(`nav.${id}`)} {/* Traducción dinámica */}
            </a>
          )}
        </li>
      ))}
    </ul>
  );
};

const Navbar = ({ changeLanguage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { i18n,t } = useTranslation();

  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
  };

  const toggleMenu = () => setIsOpen((prevIsOpen) => !prevIsOpen);

  // Función para manejar el desplazamiento suave (ajustable con offset)
  const handleScroll = (href) => {
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offset = -70; // Ajuste de posición general
      const topPosition =
        targetElement.getBoundingClientRect().top + window.scrollY + offset;

      window.scrollTo({
        top: topPosition,
        behavior: "smooth",
      });
    } else {
      console.error(`No se encontró el elemento con href: ${href}`);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black-90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between py-5 mx-auto px-4">
          {/* Logo */}
          <Link
            to="/"
            className="text-white font-bold text-2xl hover:text-[#9165f3] transition-colors"
          >
            Botopia
          </Link>

          {/* Botón para abrir/cerrar el menú (solo en pantallas pequeñas) */}
          <button
            onClick={toggleMenu}
            className="text-neutral-400 hover:text-[#9165f3] focus:outline-none sm:hidden flex"
            aria-label="Toggle menu"
          >
            <img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              alt="toggle"
              className="w-6 h-6"
            />
          </button>

          {/* Selección de idioma */}
          <div className="absolute sm:left-1/3 left-1/2 transform -translate-x-1/2">
            <select
              className="bg-[#1A1A1A] text-white text-sm px-4 py-2 rounded-lg cursor-pointer border border-gray-700 focus:outline-none hover:bg-[#9165f3] transition"
              value={i18n.language} // Idioma actual
              onChange={handleLanguageChange} // Cambiar idioma
            >
              <option value="en">English</option>
              <option value="es">Español</option>
              <option value="pt">Português</option>
            </select>
          </div>

          {/* Navegación (solo visible en pantallas medianas/grandes) */}
          <nav className="sm:flex hidden">
            <NavItems handleScroll={handleScroll} />
          </nav>
        </div>
      </div>

      {/* Menú lateral (visible solo cuando está abierto) */}
      <div className={`nav-sidebar ${isOpen ? "max-h-screen" : "max-h-0"}`}>
        <nav className="p-5">
          <NavItems handleScroll={handleScroll} />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
