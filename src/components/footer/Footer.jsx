import React from 'react';
import { FaGithub, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full py-6 bg-gradient-to-tr from-green-400 to-blue-600 text-white text-center">
      <div className="text-sm mx-auto">
        <p className='px-3'>
          Contenido con fines educativos | Creadora: <span className="font-bold">Melina Ortiz</span>
        </p>
        
        {/* Redes sociales con iconos */}
        <div className="my-4 flex justify-center">
          <a href="https://github.com/melinel1" target="_blank" rel="noopener noreferrer" className="mx-2">
            <FaGithub size={24} />
          </a>
          <a href="https://www.instagram.com/melttespring" target="_blank" rel="noopener noreferrer" className="mx-2">
            <FaInstagram size={24} />
          </a>
          <a href="mailto:melina.dev@gmail.com" target="_blank" rel="noopener noreferrer" className="mx-2">
            <FaEnvelope size={24} />
          </a>
        </div>

        <p className="mt-2 px-3">
          Créditos a la API de Google Books | 2024
        </p>
      </div>
    </footer>
  );
};

export default Footer;
