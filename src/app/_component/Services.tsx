import React from "react";

export const Services = () => {
  return (
    <div className="g-dark-blue sm:p-[5rem] pt-[4rem] section-entireheight" id="servicios">
      <article className="max-width mx-auto">
        <p className="g-styles-minititles g-colour-green text-center p-[1rem]">
          Servicios
        </p>
        <h2 className="g-styles-titlesection text-center p-[1rem]">
          Un codigo bien estructurado
        </h2>
        <section className="flex flex-col  sm:flex-row p-[3rem] justify-center gap-[2rem] g-scroll-animated-size-cards ">
          <div className="p-[.2rem] sm:p-[1rem]   g-gradient-blue rounded-2xl ">
            <img className="h-auto w-[3rem] m-[1rem]" src="logo-figma.svg" alt="figma" />
            <b className=" g-styles-minititles">Habilidades en diseño</b>
            <p className="max-w-[600px] text-[#c4c2c2] p-[1rem] lg:text-[17px] xl:text-[21px]">
              Competente en diseño de Figma, creando elegantes interfaces de
              usuario y experiencias intuitivas de los usuarios con un ojo
              fuerte para la estética y usabilidad.
            </p>
          </div>
          <div className="p-[.2rem] sm:p-[1rem] g-gradient-blue rounded-2xl g-scroll-animated-size-cards ">
            <img className="h-auto w-[3rem] m-[1rem]" src="logo-computer.svg" alt="computer" />
            <b className=" g-styles-minititles">Habilidades en desarrollo</b>
            <p className="max-w-[600px] text-[#c4c2c2] p-[1rem] lg:text-[17px] xl:text-[21px]">
              Competente en desarrollo web totalmente personalizado. Tu idea se contruyo en codigo para mayor margen de personalizacion, velocidad, sin errores de plugins y totalmente escalable
            </p>
          </div>
        </section>
      </article>
    </div>
  );
};
