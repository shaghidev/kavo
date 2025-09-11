'use client';
import React from "react";

const services = [
  { id: "001", title: "ISTRAŽIVANJE", link: "/istrazivanje" },
  { id: "002", title: "STRATEGIJA", link: "/strategija" },
  { id: "003", title: "WEB DIZAJN", link: "/web" },
  { id: "004", title: "WEB DEVELOPMENT", link: "/development" },
  { id: "005", title: "ODRŽAVANJE", link: "/odrzavanje" },
];


const ServicesSection: React.FC = () => {
  return (
    <section className="bg-[#080D10] text-[#EBECE7] py-20 px-4 sm:px-10 md:px-20 lg:px-32">
      {/* Naslov */}
      <h2 className="text-[clamp(2rem,6vw,6rem)] font-extrabold text-[#FFBD00] text-center mb-6 sm:mb-8 tracking-tight">
        ŠTO RADIMO
      </h2>
      <p className="text-center max-w-xl mx-auto text-[clamp(0.85rem,2vw,1rem)] uppercase tracking-widest mb-14 sm:mb-20 text-[#EBECE7]">
        Vjerujemo da poduzeća ne bi trebala samo postojati – već ostaviti dojam.
      </p>

      {/* Lista usluga */}
      <div className="flex flex-col space-y-6 sm:space-y-8 max-w-5xl mx-auto">
        {services.map((service, index) => (
          <div
            key={service.id}
            className={`
              flex flex-col sm:flex-row justify-between items-start sm:items-center 
              border-t border-[#EBECE7]/30 pt-6 sm:pt-8 pb-4 sm:pb-6 px-4 sm:px-10
              transition-colors duration-300 cursor-pointer rounded-lg
              hover:bg-[#EBECE7] hover:text-[#080D10]
            `}
          >
            {/* Lijevi dio (ID) */}
            <span className="text-xs sm:text-sm md:text-base opacity-70 mb-2 sm:mb-0">
              ({service.id})
            </span>

            {/* Središnji dio (naziv usluge) */}
            <h3
              className={`text-[clamp(1.6rem,4vw,2.5rem)] font-bold mb-2 sm:mb-0 w-full
                ${index % 2 === 0 ? "sm:text-left sm:ml-8" : "sm:text-right sm:mr-8"} 
                text-center sm:text-inherit
              `}
            >
              {service.title}
            </h3>

            {/* Desni dio (link) */}
            <a
              href={service.link}
              className="text-xs sm:text-sm md:text-base uppercase tracking-wide transition-colors duration-300 hover:text-[#FFBD00] text-center sm:text-right"
            >
              Istraži
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
