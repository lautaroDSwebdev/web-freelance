"use client";
import React from "react";
import { navLinks } from "../_mock/mock";
export const NavBar = () => {
  return (
    <div className=" fixed  bottom-0 md:top-0 w-full g-gradient-blue h-[5rem]   z-[900]">
      <section className="flex flex-col md:flex-row justify-between max-width m-auto h-[5rem]
        items-center">
        <a href="#home">
          <h2 className="font-bold lg:text-[21px] md:text-[15px] text-[13px] p-[8px]">Lautaro Di Salvo</h2>
        </a>
        <nav className="flex justify-evenly gap-[1rem] p-[14px_0] ">
          {navLinks.map((e) => (
            <a
              key={e.id}
              href={e.href}
              className={` hover-underline-animation left lg:text-[21px] md:text-[15px] text-[13px]`}
            >
              {e.option}
            </a>
          ))}
        </nav>
      </section>
    </div>
  );
};
