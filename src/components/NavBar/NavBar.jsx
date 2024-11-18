import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "/logo.svg";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Alterna el estado de apertura del menú
  };

  return (
    <nav className="fixed top-0 left-0 w-full backdrop-blur-md bg-white/10 z-50 md:flex md:justify-around">
      <div className="flex items-center justify-between p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={logo} className="h-8" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
            LibroEnMira
          </span>
        </a>

        {/* Botón hamburguesa */}
        <button
          onClick={toggleMenu} // Toggle para abrir/cerrar menú
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-cyan-300 focus:outline-none focus:ring-2 focus:bg-cyan-400"
        >
          <span className="sr-only">Abrir menú principal</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
      </div>

      {/* Menú */}
      <div
        className={`${
          isOpen ? "block" : "hidden" // Aparecerá cuando se abra el menú
        } md:flex md:w-auto md:items-center flex-col md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent`}
        id="navbar-default"
      >
        <ul className="font-medium flex flex-col md:flex-row p-4 md:p-0 border border-gray-100 rounded-lg bg-gray-50/20 md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent">
          <li>
            <Link
              to={"/"}
              className="block py-2 px-3 text-white bg-cyan-400 rounded md:bg-transparent md:text-cyan-200 md:p-0"
            >
              Buscador de libros
            </Link>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 px-3 text-white rounded hover:bg-cyan-400 md:hover:bg-transparent md:border-0 md:hover:text-cyan-200 md:p-0"
            >
              Tus libros favoritos
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 px-3 text-white rounded hover:bg-cyan-400 md:hover:bg-transparent md:border-0 md:hover:text-cyan-200 md:p-0"
            >
              Sobre nosotros
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 px-3 text-white rounded hover:bg-cyan-400 md:hover:bg-transparent md:border-0 md:hover:text-cyan-200 md:p-0"
            >
              Contacto
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
