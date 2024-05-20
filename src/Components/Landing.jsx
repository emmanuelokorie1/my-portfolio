import React from "react";
import styled from "styled-components";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-scroll";

function Landing() {
  return (
    <Container>
      <aside className="p-0 m-0 px-[1rem]">
        <div className="md:text-[7rem] s1000:text-[9rem] sm:text-[5rem] text-[3.5rem] p-0 m-0 hi">Hi! I’m </div>{" "}
        <div className="Okorie md:text-[7rem] s1000:text-[9rem] sm:text-[5rem] text-[3.5rem] p-0 m-0 ">
          <div className="Emmanuel">Emmanuel</div>
          {/* <div className="text-[1rem] bg-secondary2 Emmzzy  text-white w-fit">
            A.KA Emmzzy Vibes
          </div> */}
        </div>
        <div className="text-[1.3rem] Welcome text-gray-600">
          Welcome to my online space. Your Friendly <span className="">Frontend Developer</span>
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
