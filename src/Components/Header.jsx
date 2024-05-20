import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import styled from "styled-components";
import { SlCloudDownload } from "react-icons/sl";
import cd from '../assets/images/cv.pdf'
import { BiMenuAltRight } from "react-icons/bi";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.2) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleDownloadClick = () => {
    // Get the file path of your PDF
    const filePath = cd;
    // Create an anchor element
    const anchor = document.createElement("a");
    // Set the href attribute to the file path
    anchor.href = filePath;
    // Set the download attribute to the desired file name
    anchor.download = "Okorie_Emmanuel_CV.pdf";
    // Simulate a click event on the anchor
    anchor.click();
  };

  return (
    <Container
      className={`flex fixed w-[100%] justify-between px-[3rem] py-[1.3rem] z-20 ${
        isScrolled ? "scrolled" : "scrolledNo"
      }`}
    >
      <aside className="w-[20%] text-[1.5rem] font-bold" style={{fontFamily: 'ExtraBoldFont'}}>
        <Link to="home" smooth={true} duration={1000} activeClass="active">
          EV.
        </Link>
      </aside>
      <aside className="s1000:flex hidden w-[60%] gap-[5rem]">
        <Link to="work" smooth={true} duration={1000} activeClass="active">
          Work
        </Link>
        <Link to="about" smooth={true} duration={1000} activeClass="active">
          About
        </Link>
        <Link to="contact" smooth={true} duration={1000} activeClass="active">
          Contact
        </Link>
      </aside>
      <aside className="w-[20%] s1000:block hidden text-center">
        <button onClick={handleDownloadClick} className="flex items-center gap-4 border-solid border-textSecondary border-[1px] px-[1.2rem] py-[.4rem] rounded-[4rem] cursor-pointer">
          <SlCloudDownload size={25} /> Download Resume
        </button>
      </aside>
      <div className="s1000:hidden flex "><BiMenuAltRight size={45} /></div>
    </Container>
  );
}

export default Header;

const Container = styled.section`
  background-color: var(--background);

  &.scrolled {
    background-color: white;
    transition: background-color 0.3s ease;
  }
  &.scrolledNo {
    background-color: #fcfbfa;
    transition: background-color 0.3s ease;
  }

  a {
    font-family: lightFont;
    cursor: pointer;
    padding: 0.5rem 1rem;
    transition: background-color 0.3s ease;

    &.active {
      background-color: #ff6347; /* Example active background color */
      border-radius: 0.5rem;
    }
  }
`;
