import React from "react";

export const Services = () => {
  return (
    <div className="g-dark-blue sm:p-[5rem] pt-[4rem]" id="servicios">
      <article className="max-width mx-auto">
        <p className="g-styles-minititles g-colour-green text-center p-[1rem">
          Servicios
        </p>
        <h2 className="g-styles-titlesection text-center p-[1rem">
          Un codigo bien estructurado
        </h2>
        <section className="flex flex-col  sm:flex-row p-[3rem] justify-center gap-[2rem] g-scroll-animated-size-cards ">
          <div className="p-[.2rem] sm:p-[1rem]   g-gradient-blue rounded-2xl ">
            <img className="h-auto w-[3rem] m-[1rem]" src="logo-figma.svg" alt="figma" />
            <b className=" g-styles-minititles">Habilidades en diseño</b>
            <p className="max-w-[400px] text-[#c4c2c2] p-[1rem]">
              Competente en diseño de Figma, creando elegantes interfaces de
              usuario y experiencias intuitivas de los usuarios con un ojo
              fuerte para la estética y usabilidad.
            </p>
          </div>
          <div className="p-[.2rem] sm:p-[1rem] g-gradient-blue rounded-2xl g-scroll-animated-size-cards ">
            <img className="h-auto w-[3rem] m-[1rem]" src="logo-computer.svg" alt="computer" />
            <b className=" g-styles-minititles">Frontend Developer</b>
            <p className="max-w-[300px] text-[#c4c2c2] p-[1rem] ">
              Soy un desarrollador web frontend que es apacionado por hacer
              páginas libres de errores con total satisfacción del cliente
            </p>
          </div>
        </section>
      </article>
    </div>
  );
};
