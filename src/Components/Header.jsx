import React from "react";
import { Link } from "react-scroll";
import styled from "styled-components";
import { SlCloudDownload } from "react-icons/sl";

function Header() {
  return (
    <>
      <Container className="flex fixed w-[100%] justify-between px-[3rem] py-[2rem]">
        <aside className="w-[20%]">Emmzzy Vibes</aside>
        <aside className="flex w-[60%] gap-[5rem]">
          <a href="#">Work</a>
          <a href="#">About</a>
          <a href="#" className="">
            Contact
          </a>
        </aside>
        <aside className="w-[20%] text-center">
          {" "}
          <button className="flex items-center gap-4 border-solid border-textSecondary border-[1px] px-[1.2rem] py-[.4rem] rounded-[4rem] cursor-pointer">
            <SlCloudDownload size={25} /> Download CV{" "}
          </button>
        </aside>
      </Container>
    </>
  );
}

export default Header;

const Container = styled.section`
  a {
    font-family: lightFont;
  }
`;
