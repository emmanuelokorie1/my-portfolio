import React from "react";
import Js from "../assets/images/lang/js.png";
import Html from "../assets/images/lang/html.png";
import CSS from "../assets/images/lang/css.svg";
import redux from "../assets/images/lang/redux.svg";
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
    <div className="bg-[#1F2D31] my-[2rem] mx-[2rem] p-[2rem] rounded-[2rem]">
      <div className="flex items-center justify-evenly ">
        <div className=" w-[30%] text-[4rem] text-background">About</div>
        <div className=" w-[50%] border-b-[1px] border-background border-solid"></div>
      </div>

      <section>
        <aside className=" py-[3rem] px-[5rem] text-background">
          <div className="w-[65%] text-[2.3rem]">
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
        <div className="flex items-center justify-evenly ">
          <div className=" w-[30%] text-[4rem] text-background">
            Capabilities
          </div>
          <div className=" w-[50%] border-b-[1px] border-background border-solid"></div>
        </div>

        <div className=" m-[5rem]">
          {basic?.map((e, i) => (
            <div key={i} className="text-background py-[2rem]">
              <div className="text-end">~ {e?.name}</div>
              <div className="grid grid-cols-4 ">
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
