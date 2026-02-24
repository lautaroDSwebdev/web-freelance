"use client";
import React, { useEffect, useState } from "react";
import { navLinks } from "../_mock/mock";
export const NavBar = () => {


   const [activeSection, setActiveSection] = useState("");

  // Scroll spy: detecta la sección activa
  useEffect(() => {
    const handleScroll = () => {
      for (let i = navLinks.length - 1; i >= 0; i--) {
        const section = document.getElementById(navLinks[i].href);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 560) {
            // console.log(rect)
            setActiveSection(navLinks[i].href);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className=" fixed  bottom-0 md:top-0 w-full g-blur h-[6rem]   z-[900]">
      <section className="flex flex-col md:flex-row justify-between max-width m-auto h-[5rem]
        items-center">
        <a href="#home">
          <h2 className={`font-bold lg:text-[21px] md:text-[15px] text-[1rem] p-[8px] `}>Lautaro Di Salvo</h2>
        </a>
        <nav className="flex justify-evenly gap-[1rem] p-[14px_0] ">
          {navLinks.map((e) => (
            <a
              key={e.id}
              href={` #${e.href}`}
              className={`hover-underline-animation  ${activeSection === e.href ? "left" : ""}  lg:text-[21px] md:text-[15px] text-[13px]`}
            >
              {e.option}
            </a>
          ))}
        </nav>
      </section>
    </div>
  );
};
