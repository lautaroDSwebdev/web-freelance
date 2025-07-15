import React from "react";
import { navLinks } from "../_mock/mock";

export const NavBar = () => {
  return (
    <div className=" fixed top-0 w-full g-dark-blue h-[3rem] z-[900]">
      <section className="flex justify-between max-width m-auto h-[3rem] items-center">

      <h2>Lautaro Di Salvo</h2>
      <nav className="flex justify-evenly gap-[1rem]">
        {navLinks.map((e) => (
          <a key={e.id} href={e.href}>
            {e.option}
          </a>
        ))}
      </nav>
        </section>
    </div>
  );
};
