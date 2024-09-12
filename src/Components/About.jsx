import React from "react";
import Js from "../assets/images/lang/js.png";
import Html from "../assets/images/lang/html.png";
import CSS from "../assets/images/lang/css.svg";
import redux from "../assets/images/lang/redux.svg";
import Next from "../assets/images/lang/nextLogo.svg";
import react from "../assets/images/lang/react.png";
import vue from "../assets/images/lang/vue.png";
import tailwind from "../assets/images/lang/tailwind.png";
import pinia from "../assets/images/lang/pinia.png";
import styled from "../assets/images/lang/styled.jpeg";
import angular from "../assets/images/lang/angular.webp";

function About() {
  const basic = [
    {
      name: "Frontend Basic",
      dx: [
        { name: "HTML", img: Html },
        { name: "CSS", img: CSS },
        { name: "Javascript", img: Js },
      ],
    },
    {
      name: "Framework",
      dx: [
        { name: "React", img: react },
        { name: "Vue", img: vue },
        { name: "Angular", img: angular },
        { name: "Next.js (React)", img: Next },
      ],
    },
    {
      name: "State Management",
      dx: [
        { name: "Redux", img: redux },
        { name: "Pinia", img: pinia },
      ],
    },
    {
      name: "Styles Framework",
      dx: [
        { name: "Tailwind", img: tailwind },
        { name: "Styled Components", img: styled },
      ],
    },
  ];

  return (
    <div className="bg-[#1F2D31] md:m-[2rem] m-[1rem] md:p-[2rem] rounded-[2rem] p-[1rem]">
      <div className="s1000:flex items-center justify-evenly md:mb-[3rem] sm:mb-[2rem] mb-[1rem] s1000:px-0 px-[1rem]">
        <div className=" s1000:w-[30%] md:text-[4rem] text-[3rem] text-background" data-aos="fade-right">About</div>
        <div className=" s1000:w-[50%] border-b-[1px] border-background border-solid" data-aos="fade-left"></div>
      </div>

      <section>
        <aside className=" md:py-[3rem] py-[1rem] px-[1rem] md:px-[5rem] text-background" data-aos="fade-right" data-aos-delay="300">
          <div className="s1100:w-[65%] md:text-[2.3rem] sm:text-[2rem] text-[1.3rem]">
            {" "}
            As a <span className="text-secondary2">
              Frontend Developer
            </span>{" "}
            fueled by creativity and passion, I constantly strive for clean,
            visually appealing web design. My enthusiasm for innovative ideas
            drives me to craft engaging and aesthetic user experiences.
          </div>
          <div></div>
        </aside>
        <aside></aside>
      </section>

      <section className="mt-[3rem]">
        {/* <div className="flex items-center justify-evenly ">
          <div className=" w-[30%] md:text-[4rem] text-[2rem] text-background">
            Capabilities
          </div>
          <div className=" w-[50%] border-b-[1px] border-background border-solid"></div>
        </div> */}

        <div className="s1000:flex items-center justify-evenly md:mb-[3rem] sm:mb-[2rem] mb-[1rem] s1000:px-0 px-[1rem]">
        <div className=" s1000:w-[30%] md:text-[4rem] text-[3rem] text-background" data-aos="fade-right">Capabilities</div>
        <div className=" s1000:w-[50%] border-b-[1px] border-background border-solid" data-aos="fade-left"></div>
      </div>

        <div className=" md:m-[5rem] sm:m-[2rem] m-[1rem]">
          {basic?.map((e, i) => (
            <div key={i} className="text-background py-[2rem]">
              <div className="text-end ">~ {e?.name}</div>
              <div className="grid s1000:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
                {e?.dx?.map((item) => (
                  <div className=" flex justify-center items-center flex-col">
                    <div className="w-[100px] h-[100px]">
                      <img
                        src={item?.img}
                        alt=""
                        className="w-[100%] h-[100%]"
                      />
                    </div>
                    <div className="text-[1.4rem] pt-[1rem]">{item?.name}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default About;
