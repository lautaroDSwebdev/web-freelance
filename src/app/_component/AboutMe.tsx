import React from "react";

export const AboutMe = () => {
  return (
    <div id="sobre-mi" className="g-bg-dark xl:p-[8rem] pt-[14rem]">
      <section className="max-width mx-auto">
        <h2 className="text-center g-colour-green">Sobre mi</h2>
        <div className="flex justify-center">
          <b className="text-center g-styles-titlesection">
            La vision detras del codigo
          </b>
        </div>
        <div className="flex flex-col xl:flex-row justify-between">
          <p className="p-[1rem]">
            Me especializo en construir aplicaciones robustas, escalables y con
            una atención al detalle en la experiencia de usuario en el frontend
          </p>
          <p className="p-[1rem]">
            Creo que cada proyecto es una oportunidad de resolver problemas
            reales, mejorar procesos y dar vida ideas unicas
          </p>
          <p className="p-[1rem]">
            ¿Tenes una idea en mente? Me encantaría escucharla y ver como
            podemos hacerla realidad juntos
          </p>
        </div>
      </section>
    </div>
  );
};
