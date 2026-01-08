"use client";
import React from "react";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export const ServicesTimeLine = () => {
  const timelineData = [
    {
      id: 1,
      img: "logo-figma.svg",
      alt: "figma",
      title: "Habilidades en diseño",
      description:
        "Competente en diseño de Figma, creando elegantes interfaces de usuario y experiencias intuitivas de los usuarios con un ojo fuerte para la estética y usabilidad.",
    },
    {
      id: 2,
      img: "logo-computer.svg",
      alt: "computer",
      title: "Habilidades en desarrollo",
      description:
        "Competente en desarrollo web totalmente personalizado. Tu idea la contruyo en codigo para mayor margen de personalizacion, velocidad, sin errores de plugins y totalmente escalable.",
    },
  ];

  return (
    <div
      className="g-dark-blue sm:p-[5rem] pt-[4rem] section-entireheight"
      id="servicios"
    >
      <article className="max-width mx-auto">
        <p className="g-styles-minititles g-colour-green text-center p-[1rem]">
          Servicios
        </p>
        <h2 className="g-styles-titlesection text-center p-[1rem]">
          Un codigo bien estructurado
        </h2>
        {/* escritorio */}
        <section className="hidden md:flex flex-col  sm:flex-row justify-center gap-[2rem]  ">
          <VerticalTimeline>
            {timelineData.map((item) => (
              <VerticalTimelineElement
                key={item.id}
                className="vertical-timeline-element--work"
                contentStyle={{
                  backgroundImage:
                    "linear-gradient(0deg, #393676 0%, rgba(30, 29, 48, 1) 100%)",
                  width: "100%",
                }}
                contentArrowStyle={{
                  borderRight: "#fff ",
                }}
                iconStyle={{
                  background: "rgb(33, 150, 243)",
                  color: "#fff",
                }}
              >
                <div className="p-[.2rem] sm:p-[.2rem] rounded-2xl">
                  <img
                    className="h-auto w-[3rem] m-[1rem]"
                    src={item.img}
                    alt={item.alt}
                  />
                  <b className="g-styles-minititles ">{item.title}</b>
                  <p className="max-w-[600px] text-[#c4c2c2] p-[1rem] lg:text-[17px] xl:text-[21px]">
                    {item.description}
                  </p>
                </div>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </section>
        <section className="md:hidden flex flex-col  sm:flex-row justify-center gap-[2rem]  ">
          <VerticalTimeline>
            {timelineData.map((item) => (
              <VerticalTimelineElement
                key={item.id}
                className="vertical-timeline-element--work"
                contentStyle={{
                  backgroundImage:
                    "linear-gradient(0deg, #393676 0%, rgba(30, 29, 48, 1) 100%)",
                }}
                contentArrowStyle={{
                  borderRight: "#fff ",
                }}
                iconStyle={{
                  background: "rgb(33, 150, 243)",
                  color: "#fff",
                }}
              >
                <div className="p-[.2rem] sm:p-[.2rem] rounded-2xl">
                  <img
                    className="h-auto w-[3rem] m-[1rem]"
                    src={item.img}
                    alt={item.alt}
                  />
                  <b className="g-styles-minititles ">{item.title}</b>
                  <p className="max-w-[600px] text-[#c4c2c2] p-[1rem] lg:text-[17px] xl:text-[21px]">
                    {item.description}
                  </p>
                </div>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </section>
      </article>
    </div>
  );
};
