import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import styled from "styled-components";
import { SlCloudDownload } from "react-icons/sl";
import cd from "../assets/images/myLatestCV.pdf";
import { BiMenuAltRight } from "react-icons/bi";
import { LiaTimesSolid } from "react-icons/lia";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showSideBar, setshowSideBar] = useState(false);

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

  const SmallScreenSideBar = [
    { name: "Home", to: "home" },
    { name: "Work", to: "work" },
    { name: "About", to: "about" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <Container
      className={`flex fixed w-[100%] justify-between sm:px-[3rem] px-[1rem] py-[1.3rem] z-20 ${
        isScrolled ? "scrolled" : "scrolledNo"
      }`}
    >
      <aside
        className="w-[20%] text-[1.5rem] font-bold"
        style={{ fontFamily: "ExtraBoldFont" }}
      >
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
        <button
          onClick={handleDownloadClick}
          className="flex items-center gap-4 border-solid border-textSecondary border-[1px] px-[1.2rem] py-[.4rem] rounded-[4rem] cursor-pointer"
        >
          <SlCloudDownload size={25} /> Download Resume
        </button>
      </aside>
      <div
        className="s1000:hidden flex cursor-pointer "
        onClick={() => setshowSideBar(true)}
      >
        <BiMenuAltRight size={45} />
      </div>

      {showSideBar && (
        <div
          onClick={() => setshowSideBar(false)}
          className="fixed bg-[white] top-0 left-0 h-full w-[100%] p-[1.2rem]"
        >
          <div className="flex justify-end">
            <LiaTimesSolid size={40} />
          </div>
          {SmallScreenSideBar?.map((e, i) => {
            return (
              <aside
                className="text-[1.2rem] mt-[5rem]"
                style={{ fontFamily: "ExtraBoldFont", fontWeight: '600' }}
                key={i}
              >
                <Link
                  to={e?.to}
                  smooth={true}
                  duration={1000}
                  activeClass="active"
                  onClick={() => setshowSideBar(false)}
                >
                  {e?.name}
                </Link>
              </aside>
            );
          })}

          <aside className="absolute bottom-[2rem]">
            <button
              onClick={handleDownloadClick}
              className="flex items-center gap-4 border-solid border-textSecondary border-[1px] px-[1.2rem] py-[.4rem] w-[100%] rounded-[4rem] cursor-pointer"
            >
              <SlCloudDownload size={25} /> Download Resume
            </button>
          </aside>
        </div>
      )}
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
