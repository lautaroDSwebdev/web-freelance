import React from 'react'
import { navLinks } from '../_mock/mock'

export const Footer = () => {
  return (
    <footer className="g-dark-blue text-white pt-8 pb-4 ">
      <div className="max-width mx-auto flex flex-col md:flex-row justify-between gap-8 px-4">
        {/* Columna izquierda: navegación */}
        <div className="flex-1 flex flex-col gap-2">
          <h4 className="font-bold mb-2">Navegación</h4>
          {navLinks.map((e) => (
            <a key={e.id} href={e.href} className="hover:underline w-fit">{e.option}</a>
          ))}
        </div>
        {/* Columna derecha: redes sociales */}
        <div className="flex-1 flex flex-col gap-2 items-start sm:items-end">
          <h4 className="font-bold mb-2">Redes Sociales</h4>
          <div className="flex flex-col gap-1">
            <a href="https://www.linkedin.com/in/ldsfrontend/" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a>
            <a href="https://github.com/lautaroDSwebdev" target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub</a>
            <a href="https://api.whatsapp.com/send?phone=5492494379804" target="_blank">Whatsapp</a>
            <a href="https://www.instagram.com/lautarodisalvo_frontdev" target="_blank" rel="noopener noreferrer" className="hover:underline">Instagram</a>
            {/* Agrega más redes si quieres */}
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Lautaro Di Salvo. Todos los derechos reservados.
      </div>
    </footer>
  )
}
