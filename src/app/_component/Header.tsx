import React from "react";

export const Header = () => {
  return (
    <div className="g-bg-dark  section-entireheight  p-[3rem_1rem] h-[92dvh]" id="inicio">
      <section className="flex flex-col sm:flex-row gap-[21rem] sm:gap-[0rem] lg:gap-[8rem]  justify-center max-width m-auto sm:h-[30rem]">
        <article className="h-[10vh]">
          <h3 className="g-styles-titlesection p-[1rem] text-center sm:text-left ">
            Con sede en Argentina
          </h3>
          <h1 className="g-colour-green g-styles-minititles p-[1rem] text-center sm:text-left">
            Frontend Developer
          </h1>
          <p className="p-[1rem]  text-center sm:text-left text-[14px] sm:text-[2.3vw] md:text-[16px] lg:text-[20px] xl:text-[25px]">
            Soy un desarrollador frontend desde que descubrí el mundo del
            desarrollo web, me apasiona crear soluciones digitales que no solo
            funcionen bien, sinó que tambien se vean increibles y esten libres
            de errores
          </p>

          <div className="flex flex-col  w-full items-center justify-evenly  sm:flex-row gap-[2rem] p-[1rem]">
            <a className="g-btn g-bg-green w-full lg:text-[18px]" href="https://service-examples.netlify.app/" target="_blank">Ver mis servicios</a>

            <a className="flex gap-[5px] p-[1rem] items-center w-full justify-center"
              target="_blank" href="/LautaroDiSalvoResumeWebDev2025.pdf"
            >
              <p className="font-semibold text-center sm:text-left lg:text-[18px] hover:text-[#a2a2a2]"
              >
                Descargar cv
              </p>
              <img
                className="h-auto w-[20px]"
                src="./arrow-svg.svg"
                alt="flecha"
              />
            </a>
          </div>

        </article>
        <article className="relative mx-auto ">
          <img
            className="h-auto w-[15rem]   sm:w-[16rem] lg:w-[21rem] xl:w-[26rem] max-w-[30rem]"
            src="./mi-cara.png"
            alt="imagen mia"
          />
          <div className="absolute top-[12rem] left-0 right-0   sm:top-[15rem] lg:top-[18rem] xl:top-[23rem] flex flex-col sm:flex-row gap-[1rem] sm:gap-[1rem]">
            <div className=" w-full  flex items-center justify-center gap-[10px] g-bg-dark p-[10px] sm:p-[8px] rounded-2xl outline-1 outline-green-600">
              <p className="text-[1.4rem] sm:text-[1.6rem] lg:text-[1.8rem]">3</p> <i className="g-colour-green text-[12px] lg:text-[18px] xl:text-[20px]">Años de experiencia</i>
            </div>
            <div className=" w-full flex items-center justify-center gap-[10px] g-bg-dark p-[10px] sm:p-[8px] rounded-2xl outline-1 outline-green-600">
              <p className="text-[1.4rem]  sm:text-[1.6rem] lg:text-[1.8rem] ">+10 </p> <i className="g-colour-green text-[12px] lg:text-[18px] xl:text-[20px]">Proyectos completados</i>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
};
