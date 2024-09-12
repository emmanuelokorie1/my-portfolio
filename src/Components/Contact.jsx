import React from "react";
import styled from "styled-components";
import { SiInstagram } from "react-icons/si";
import { CiLinkedin } from "react-icons/ci";
import { FaWhatsapp, FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

function Contact() {
  const Socials = [
    {
      icon: <FaWhatsapp size={50} />,
      link: "https://wa.me/7084844214",
      delay: "100",
    },
    {
      icon: <CiLinkedin size={50} />,
      link: "https://www.linkedin.com/in/okorie-emmanuel-a09595240",
      delay: "200",
    },
    {
      icon: <SiInstagram size={40} />,
      link: "https://www.instagram.com/emmzzy_vibes/",
      delay: "300",
    },
    {
      icon: <FaXTwitter size={40} />,
      link: "https://x.com/Emmzzy_vibess",
      delay: "400",
    },
    {
      icon: <FaGithub size={40} />,
      link: "https://github.com/emmanuelokorie1",
      delay: "500",
    },
  ];
  return (
    <Container>
      <div
        className="md:text-[6rem] sm:text-[4rem] text-[2.7rem] p-0 m-0 hi"
        data-aos="fade-right"
        data-aos-delay="300"
      >
        Hit me up for
      </div>{" "}
      <div
        className="Okorie md:text-[6rem] sm:text-[4rem] text-[2.7rem] p-[1rem] m-0 relative"
        data-aos="fade-left"
        data-aos-delay="300"
      >
        <div className="Emmanuel">Future Project.</div>
      </div>
      <a
        data-aos="zoom-in"
        data-aos-delay="300"
        href="mailto:emmzzyvibes@gmail.com"
        className="sm:text-[2rem] text-[1.3rem] border-b-[1px] border-gray-700 border-solid cursor-pointer hover:text-secondary2 transition-colors duration-300"
      >
        emmzzyvibes@gmail.com
      </a>
      <div
        className="sm:text-[2rem] text-[1.3rem] pt-[1rem] hover:text-secondary2 transition-colors duration-300"
        data-aos="zoom-in"
        data-aos-delay="300"
      >
        {" "}
        <a href="tel:+234 708 484 4214">+234 708 484 4214</a>
      </div>
      {/* data-aos="fade-up" data-aos-delay={e?.delay} */}
      <div className="flex items-center gap-[2rem] mt-[2rem]">
        {Socials?.map((e, i) => {
          return (
            <div key={i} >
              <a
                href={e?.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary2 transition-colors duration-300"
              >
                {e?.icon}
              </a>
            </div>
          );
        })}
      </div>
      <div className="text-[.8rem] mt-[2rem]">
        © 2024 OKORIEEMMANUEL.COM. ALL RIGHTS RESERVED.
      </div>
    </Container>
  );
}

export default Contact;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 4rem 0;
  .Okorie {
    font-family: ExtraBoldFont;
  }

  .Emmanuel {
    z-index: 1;
  }

  .hi {
    font-family: ExtraBoldFont;
    margin: 0;
    padding: 0;
    line-height: 100px;
  }
`;
