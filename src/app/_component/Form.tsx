import React from "react";

export const Form = () => {
  return (
    <form>
      <div>
        <label htmlFor="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre" placeholder="Ingresa tu nombre" />
      </div>
      <div>
        <label htmlFor="apellido">Apellido:</label>
        <input type="text" id="apellido" name="apellido" placeholder="Ingresa tu apellido" />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="Ingresa tu email" />
      </div>
      <div>
        <label htmlFor="telefono">Teléfono:</label>
        <input type="tel" id="telefono" name="telefono" placeholder="Ingresa tu número de teléfono" />
      </div>
      <div>
        <label htmlFor="comentario">Comentario:</label>
        <textarea id="comentario" name="comentario" placeholder="Agrega un comentario" />
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
};
