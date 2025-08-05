import React from "react";
import { proyectos } from "../_mock/mock";

export const Projects = () => {
  return (
    <div className="g-bg-dark sm:p-[5rem] pt-[4rem] section-entireheight" id="proyectos">
      <article className="max-width mx-auto">
        <p className="g-styles-minititles g-colour-green text-center p-[1rem">
          Proyectos
        </p>
        <h2 className="g-styles-titlesection text-center p-[1rem">
          Casos de estudio
        </h2>
        <section className="flex flex-col  sm:flex-row p-[3rem] justify-center gap-[1rem]">
          {proyectos.map((e) => (
            <div
              className="p-[1rem]   g-gradient-blue rounded-2xl flex flex-col g-scroll-animated-size-cards"
              key={e.id}
            >
              <img
                className="h-auto rounded-[20px] w-[100%] p-[1rem] hover:opacity-70 transition-all .3s ease-in-out"
                src={e.img}
                alt={e.data}
              />
              <p className="g-colour-green px-[1rem] text-[14px] md:text-[20px] xl:text-[23px]">{e.tech}</p>
              <b className="px-[1rem] text-[16px] md:text-[20px] xl:text-[26px]">{e.data}</b>
              <a
                className="px-[1rem] w-fit flex items-center gap-1 " 
                target="_blank"
                href={e.href}
              >
                <p className="text-[13px] md:text-[20px]  xl:text-[23px]">
                  Ver proyecto
                </p>
                  <img src="/arrow-svg.svg" alt="arrow" />
              </a>
            </div>
          ))}
        </section>
      </article>
    </div>
  );
};
