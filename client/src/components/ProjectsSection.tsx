import React from "react";
import { motion } from "framer-motion";

const projects = [
  { title: "Sashen Fernandez", year: "2025", image: "/projects/sashen.png" },
  { title: "Pixettivity", year: "2024", image: "/projects/pixettivity.png" },
  { title: "Let's Talk", year: "2025", image: "/projects/letstalk.png" },
  { title: "MLab", year: "2024", image: "/projects/mlab.png" },
  { title: "Nori Vos", year: "2024", image: "/projects/norivos.png" },
];

const ProjectsSection: React.FC = () => {
  return (
    <section className="bg-gray-900 text-white py-32 px-6 md:px-20 relative overflow-hidden">
      {/* Grid projekata */}
      <div className="space-y-12 mb-24">
        {/* Gornji red */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial={{ x: -150, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {projects.slice(0, 2).map((project) => (
            <motion.div
              key={project.title}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="relative group cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full rounded-lg shadow-lg"
              />
              <div className="absolute bottom-2 left-2 text-sm text-gray-300">
                {project.title} • {project.year}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Donji red */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ x: 150, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {projects.slice(2).map((project) => (
            <motion.div
              key={project.title}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="relative group cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full rounded-lg shadow-lg"
              />
              <div className="absolute bottom-2 left-2 text-sm text-gray-300">
                {project.title} • {project.year}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Naslov PROJEKTI dolje */}
      <h2 className="text-6xl md:text-8xl font-extrabold text-yellow-400 text-center">
        PROJEKTI
      </h2>
    </section>
  );
};

export default ProjectsSection;
