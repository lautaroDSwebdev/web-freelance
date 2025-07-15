import React from "react";

export const Form = () => {
  return (
    <div className="g-bg-dark sm:p-[5rem] pt-[4rem]" id="contacto">
      <article className="max-width mx-auto">
        <p className="g-styles-minititles g-colour-green text-center p-[1rem">
          Contacto
        </p>
        <h2 className="g-styles-titlesection text-center p-[1rem">
          ¿Y si hablamos?
        </h2>
      </article>
      <section className="flex justify-center">
        <form className="p-[3rem]">
          <div>
            <input
            type="text"
            id="nombre"
            name="nombre"
            placeholder="Nombre"
            />
          </div>
          <div>
            <input
              type="text"
              id="apellido"
              name="apellido"
              placeholder="Apellido"
            />
          </div>
          <div>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
            />
          </div>
          <div>
            <input
              type="tel"
              id="telefono"
              name="telefono"
              placeholder="Teléfono"
            />
          </div>
          <div>
            <textarea
              id="comentario"
              name="comentario"
              placeholder="Agrega un comentario"
            />
          </div>
          <div className="flex justify-end">

          <button className="g-bg-green p-[10px] cursor-pointer text-[#000] font-semibold rounded-[10px]" type="submit">Enviar</button>
          </div>
        </form>
      </section>
    </div>
  );
};
