import React, { useState } from "react";
import Agency from "../assets/images/works/agency.png";
import Tmsaas from "../assets/images/works/tmsaas.png";
import seap from "../assets/images/works/seap.png";
import hqtec from "../assets/images/works/hqtec.png";
import party from "../assets/images/works/party.png";
import rock from "../assets/images/works/rock.png";
import accessplus from "../assets/images/works/acccessplus.jpeg";
import { HiOutlineArrowUpRight } from "react-icons/hi2";

function Work() {
  const myWork = [
    {
      name: "AGENCY BANKING",
      desc: "Agency Banking platform is an all-inclusive agency banking solution with robust tools for efficient agent and liquidity management. Agency Banking Platform is designed to assist financial institutions drive financial inclusion, scale customer acquisition, grow revenue and boost profitability.",
      image: Agency,
      link: "https://agencybanking.tm30.net/",
    },
    {
      name: "TMSaaS",
      desc: "TM SAAS is a collection of API’s. The platform serves as the interface for developers /businesses to access array of API’s for their development & business’s needs. Available API’s include: Payment, notification, Authentication API’s etc.",
      image: Tmsaas,
      link: "https://saas.tm30.net/",
    },
    {
      name: "Secure Enterprise Aggregator Platform (SEAP)",
      desc: "SEAP enables VAS aggregators integrate and manage Value Added Service providers as well as content providers across Mobile Network Operators. The platform allows service providers easily launch subscription based-services (SMS, USSD, Voice or Video) to consumers reliably and economically with minimal or no technical resources.",
      image: seap,
      link: "https://saas.tm30.net/",
    },
    {
      name: "HQ TEC Inc.",
      desc: "HQ TEC, is a trusted provider of software solutions and on-site IT services, specializing in software development, cloud technology, and network connectivity. ",
      image: hqtec,
      link: "https://www.hqtecinc.com/",
    },
    {
      name: "Party Time",
      desc: "PartySpray is a cutting-edge platform designed to revolutionize the way we celebrate and enjoy parties. Whether you’re hosting a lavish event or attending a vibrant celebration, PartySpray ensures that the excitement reaches everyone, no matter where they are.",
      image: party,
      link: "https://partytime.ng/?code=470247",
    },
    {
      name: "Access Plus",
      desc: "Access Plus is an innovative platform designed to seamlessly connect event organizers with attendees. Whether it's a corporate seminar, a vibrant party, a community gathering, or any other type of event, Access Plus serves as the perfect intermediary, ensuring a smooth and engaging registration process for everyone involved.",
      image: accessplus,
      link: "https://www.accessplususa.com/",
    },
    {
      name: "Rock The Bell Events",
      desc: "Rock the Bells Events is a bespoke event management company with a wealth of experience in event management, event solutions and coordination services.",
      image: rock,
      link: "https://www.rtb-events.com/",
    },
  ];

  const [visibleWorks, setVisibleWorks] = useState(2);

  const loadMore = () => {
    setVisibleWorks((prevVisibleWorks) => prevVisibleWorks + 2);
  };

  return (
    <section>
      <div className="flex items-center justify-evenly mb-[3rem]">
        <div className=" w-[30%] text-[4rem]">Lastest Work</div>
        <div className=" w-[50%] border-b-[1px] border-colorText border-solid"></div>
      </div>

      <section>
        <div>
          {myWork.slice(0, visibleWorks).map((e, i) => (
            <div
              key={i}
              className="flex justify-between py-[4rem] px-[6rem] group"
            >
              <aside className="w-[40%] pe-[4rem]">
                <div
                  className="text-[2.3rem] group-hover:text-secondary2 transition-colors duration-300"
                  style={{ fontFamily: "SemiBoldFont" }}
                >
                  {e?.name}
                </div>
                <div className="text-[1.2rem] text-gray-500 pt-[1rem]">
                  {e?.desc}
                </div>
                <a
                  href={e?.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-fit mt-[1.5rem] text-gray-500 hover:text-secondary2 hover:border-secondary2 transition-all items-center gap-4 border-solid border-gray-500 border-[1px] px-[2rem] py-[.3rem] rounded-[4rem] cursor-pointer"
                >
                  Visit Link <HiOutlineArrowUpRight size={20} />
                </a>
              </aside>
              <aside className="w-[60%] flex justify-end">
                <img src={e?.image} alt="" />
              </aside>
            </div>
          ))}
          {visibleWorks < myWork.length && (
            <div className="flex justify-center mt-[2rem]">
              <button
                onClick={loadMore}
                className="text-white bg-primary px-[2rem] py-[1rem] rounded-[4rem] cursor-pointer"
              >
                Load More
              </button>
            </div>
          )}
        </div>
      </section>
    </section>
  );
}

export default Work;
