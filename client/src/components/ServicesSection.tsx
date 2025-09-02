import React from "react";

const services = [
  { id: "001", title: "ISTRAŽIVANJE", link: "#" },
  { id: "002", title: "STRATEGIJA", link: "#" },
  { id: "003", title: "WEB DIZAJN", link: "#" },
  { id: "004", title: "WEB DEVELOPMENT", link: "#" },
  { id: "005", title: "ODRŽAVANJE", link: "#" },
];

const ServicesSection: React.FC = () => {
  return (
    <section className="bg-gray-900 text-white py-24 px-6 md:px-20">
      {/* Naslov */}
      <h2 className="text-6xl md:text-8xl font-extrabold text-yellow-400 text-center mb-6">
        ŠTO RADIMO
      </h2>
      <p className="text-center max-w-xl mx-auto text-sm uppercase tracking-widest mb-16 text-gray-300">
        Vjerujemo da poduzeća ne bi trebala samo postojati – već ostaviti dojam.
      </p>

      {/* Lista usluga */}
      <div className="space-y-8 max-w-5xl mx-auto">
        {services.map((service) => (
          <div
            key={service.id}
            className="flex justify-between items-center border-t border-gray-700 pt-6"
          >
            {/* Lijevi dio (ID) */}
            <span className="text-sm text-gray-400">({service.id})</span>

            {/* Središnji dio (naziv usluge) */}
            <h3 className="text-3xl md:text-4xl font-bold">{service.title}</h3>

            {/* Desni dio (link) */}
            <a
              href={service.link}
              className="text-sm uppercase tracking-wide hover:text-yellow-400 transition"
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
