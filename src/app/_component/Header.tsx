import React from "react";

export const Header = () => {
  return (
    <div className="g-bg-dark p-[8rem]" id="home">
      <section className="flex flex-col xl:flex-row justify-center max-width m-auto xl:h-[30rem]">
        <article className="h-[10vh]">
          <h3 className="g-styles-titlesection p-[1rem] text-center xl:text-left">
            Con sede en Argentina
          </h3>
          <h1 className="g-colour-green g-styles-minititles p-[1rem] text-center xl:text-left">
            Frontend Developer
          </h1>
          <p className="p-[1rem] xl:max-w-[600px] text-center xl:text-left">
            Soy un desarrollador frontend desde que descubrí el mundo del
            desarrollo web, me apasiona crear soluciones digitales que no solo
            funcionen bien, sinó que tambien se vean increibles y esten libres
            de errores
          </p>
          <div className="flex flex-col w-[23rem] xl:flex-row gap-[2rem] p-[1rem]">
            <a className="g-btn g-bg-green" href="#servicios">Ver mis servicios</a>
            <div className="flex gap-[1rem] items-center">
              <a className="font-semibold text-center xl:text-left" target="_blank" href="/LautaroDiSalvoResumeWebDev2025.pdf">
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
        <article className="relative mx-auto">
          <img
            className="h-auto w-[21rem] max-w-[21rem]"
            src="./mi-cara.png"
            alt="imagen mia"
          />
          <div className="absolute top-[19rem] flex gap-[3rem]">
            <div className=" w-full  flex items-center gap-[10px] g-bg-dark p-[16px]  rounded-2xl outline-1 outline-green-600">
             <p className="text-[2rem]">3</p> <i className="g-colour-green  ">Años de experiencia</i>
            </div>
            <div className=" w-full flex items-center gap-[10px] g-bg-dark p-[16px]  rounded-2xl outline-1 outline-green-600">
              <p className="text-[2rem]">+10 </p> <i className="g-colour-green ">Proyectos completados</i>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
};
