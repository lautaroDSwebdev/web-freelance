import React from "react";

export const Header = () => {
  return (
    <div className="g-bg-dark sm:p-[8rem]  p-[3rem_1rem] h-[92dvh]" id="home">
      <section className="flex flex-col sm:flex-row gap-[21rem] sm:gap-[6rem] lg:gap-[18rem] justify-center max-width m-auto sm:h-[30rem]">
        <article className="h-[10vh]">
          <h3 className="g-styles-titlesection p-[1rem] text-center sm:text-left ">
            Con sede en Argentina
          </h3>
          <h1 className="g-colour-green g-styles-minititles p-[1rem] text-center sm:text-left">
            Frontend Developer
          </h1>
          <p className="p-[1rem]  text-center sm:text-left text-[14px] sm:text-[17px]">
            Soy un desarrollador frontend desde que descubrí el mundo del
            desarrollo web, me apasiona crear soluciones digitales que no solo
            funcionen bien, sinó que tambien se vean increibles y esten libres
            de errores
          </p>
          <div className="flex flex-col sm:w-[23rem] w-full items-center  sm:flex-row gap-[2rem] p-[1rem]">
            <a className="g-btn g-bg-green max-w-[14rem]" href="#servicios">Ver mis servicios</a>
            <div className="flex gap-[1rem] items-center">
              <a className="font-semibold text-center sm:text-left " target="_blank" href="/LautaroDiSalvoResumeWebDev2025.pdf">
                Descargar cv
              </a>
              <img
                className="h-auto w-[20px]"
                src="./arrow-svg.svg"
                alt="flecha"
              />
            </div>
          </div>
        </article>
        <article className="relative mx-auto ">
          <img
            className="h-auto w-[11rem]   sm:w-[21rem] max-w-[21rem]"
            src="./mi-cara.png"
            alt="imagen mia"
          />
          <div className="absolute  top-[11rem] sm:top-[19rem] flex flex-col sm:flex-row gap-[1rem] sm:gap-[3rem]">
            <div className=" w-full  flex items-center gap-[10px] g-bg-dark p-[10px] sm:p-[8px] rounded-2xl outline-1 outline-green-600">
             <p className="text-[1.4rem] sm:text-[1.6rem] lg:text-[1.8rem]">3</p> <i className="g-colour-green text-[12px] lg:text-[18px] ">Años de experiencia</i>
            </div>
            <div className=" w-full flex items-center gap-[10px] g-bg-dark p-[10px] sm:p-[8px] rounded-2xl outline-1 outline-green-600">
              <p className="text-[1.4rem]  sm:text-[1.6rem] lg:text-[1.8rem] ">+10 </p> <i className="g-colour-green text-[12px] lg:text-[18px]">Proyectos completados</i>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
};
