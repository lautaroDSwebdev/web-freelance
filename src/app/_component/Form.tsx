"use client"
import { useForm, ValidationError } from "@formspree/react";
import React from "react";
import { toast } from "react-toastify";

export const Form = () => {
  const [state, handleSubmit, reset] = useForm("mpwlzwrb");

  const Submited = async () => {
    // e.preventDefault();

    // Delega el envío a Formspree
    // await handleSubmit(e);
    toast.success("Mail enviado");
    reset()
  };


  return (

    <div className="g-bg-dark sm:p-[5rem] pt-[4rem] " id="contacto">
      <article className="max-width mx-auto">
        <p className="g-styles-minititles g-colour-green text-center p-[1rem">
          Contacto
        </p>
        <h2 className="g-styles-titlesection text-center p-[1rem">
          ¿Y si hablamos?
        </h2>
      </article>
      <section className="flex justify-center">
        <form className="p-[1rem]" onSubmit={handleSubmit}>
          <div>
            <input className="placeholder:text-[#fff] hover:bg-[#3a3737] lg:text-[24px]" type="text" id="nombre" name="nombre" placeholder="Nombre" />
            <ValidationError
              prefix="Nombre"
              field="nombre"
              errors={state.errors}
            />
          </div>
          <div>
            <input className="placeholder:text-[#fff] hover:bg-[#3a3737] lg:text-[24px]"
              type="text"
              id="apellido"
              name="apellido"
              placeholder="Apellido"
            />
            <ValidationError
              prefix="Apellido"
              field="apellido"
              errors={state.errors}
            />
          </div>
          <div>
            <input
              className="placeholder:text-[#fff] hover:bg-[#3a3737] lg:text-[24px]"
              type="email" id="email" name="email" placeholder="Email" />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div>
            <input
              className="placeholder:text-[#fff] hover:bg-[#3a3737] lg:text-[24px]"
              type="tel"
              id="telefono"
              name="telefono"
              placeholder="Teléfono"
            />
            <ValidationError
              prefix="Telefono"
              field="telefono"
              errors={state.errors}
            />
          </div>
          <div>
            <textarea
              className="placeholder:text-[#fff] hover:bg-[#3a3737] lg:text-[24px]"
              id="message"
              name="message"
              placeholder="Agrega un comentario"
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <div className="flex sm:justify-end justify-center ">
            {
              state.succeeded ?
                <button
                  disabled={state.submitting}
                  className="bg-[#08b2fb] p-[10px] cursor-pointer text-[#000] font-semibold rounded-[10px] w-full sm:w-[10rem]"
                  type="submit"
                >
                  Mail enviado
                </button>
                :
                <button
                  onClick={Submited}
                  disabled={state.submitting}
                  className="g-bg-green p-[10px] cursor-pointer text-[#000] font-semibold rounded-[10px] w-full sm:w-[10rem]"
                  type="submit"
                >
                  Enviar
                </button>
            }
          </div>
        </form>
      </section>
    </div>
  );
};
