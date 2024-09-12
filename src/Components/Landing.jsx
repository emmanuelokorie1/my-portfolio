import React from "react";
import styled from "styled-components";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-scroll";

function Landing() {
  return (
    <Container>
      <div className="absolute bottom-[10%] left-[3%] h-[40%] rounded-[10rem] w-[30%] blur-3xl opacity-10  bg-yellow-500"></div>
      <div className="absolute top-[10%] right-[3%] h-[40%] rounded-[10rem] w-[30%] blur-3xl opacity-10  bg-orange-500"></div>
      {/* <div className="absolute top-[20%] right-[10%] h-[40%] w-[40%] bg-black">hello</div> */}
      <aside className="p-0 m-0 px-[1rem]">
        <div
          className="md:text-[7rem] s1000:text-[9rem] sm:text-[5rem] text-[3.5rem] p-0 m-0 hi"
          data-aos="zoom-in-down"
          data-aos-delay="100"
          data-aos-duration="1000"
        >
          Hi! I’m{" "}
        </div>{" "}
        <div
          className="Okorie md:text-[7rem] s1000:text-[9rem] sm:text-[5rem] text-[3.5rem] p-0 m-0 "
          data-aos="fade-down"
          data-aos-delay="650"
          data-aos-duration="1000"
        >
          <div className="Emmanuel">Emmanuel</div>
          {/* <div className="text-[1rem] bg-secondary2 Emmzzy  text-white w-fit">
            A.KA Emmzzy Vibes
          </div> */}
        </div>
        <div className="sm:text-[1.5rem] text-[1.2rem] Welcome text-gray-600">
          <div className="s450:flex justify-center gap-1">
            <div
              data-aos="fade-right"
              data-aos-delay="900"
              data-aos-duration="1000"
            >
              Welcome to my online space
            </div>
            <span className="text-secondary2 s450:flex hidden">.</span>{"  "}
            <div
              data-aos="fade-left"
              data-aos-delay="900"
              data-aos-duration="1000"
            >
              Your Friendly
            </div>
          </div>
          <div
            className="text-gray-600 s450:flex justify-center gap-2 mt-[1rem] s450:mt-0 "
            data-aos="fade-up"
            data-aos-delay="900"
            data-aos-duration="1000"

          >
            <div className="text-secondary2">Frontend Developer</div> <span className=" s450:flex hidden">|</span>{"  "}
            <div className="text-secondary2">Mobile Developer</div>
          </div>
        </div>
      </aside>

      <div className=" absolute bottom-[5%] text-gray-500 arrow-container cursor-pointer">
        <Link to="work" smooth={true} duration={700}>
          <IoIosArrowDown size={30} />
        </Link>
      </div>
    </Container>
  );
}

export default Landing;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 100vh;
  position: relative;

  .hi {
    font-family: ExtraBoldFont;
    margin: 0;
    padding: 0;
    line-height: 50px;
  }

  .Okorie {
    font-family: ExtraBoldFont;
  }

  .Emmanuel {
    z-index: 1;
  }
  .Emmzzy {
    font-family: lightItalic;
    position: absolute;
    bottom: 60%;
    right: 40%;
    padding: 0.4rem 1rem;
    border-radius: 1rem 0 1rem 0;
    opacity: 0.85;
  }

  .Welcome {
    font-family: MediumFont;
  }

  .arrow-container {
    animation: bounceUpDown 2s infinite alternate; /* Apply the bounceUpDown animation */
  }

  @keyframes bounceUpDown {
    0% {
      transform: translateY(0); /* Start at the original position */
    }
    100% {
      transform: translateY(-20px); /* Move up by 20 pixels */
    }
  }
`;
