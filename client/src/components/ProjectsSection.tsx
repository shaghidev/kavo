import React from "react";
import { motion } from "framer-motion";

const projects = [
  { title: "Sashen Fernandez", year: "2025", image: "/projects/project1.png" },
  { title: "Pixettivity", year: "2024", image: "/projects/project2.png" },
  { title: "Let's Talk", year: "2025", image: "/projects/project3.png" },
  { title: "MLab", year: "2024", image: "/projects/project4.png" },
  { title: "Nori Vos", year: "2024", image: "/projects/project5.png" },
];

const ProjectsSection: React.FC = () => {
  return (
    <section className="bg-gray-900 text-white py-32 px-6 md:px-20 relative overflow-hidden">
      {/* Naslov PROJEKTI dolje */}
      <div className="mb-24">
        <motion.h2
          className="text-6xl md:text-8xl font-extrabold text-yellow-400 text-center"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          PROJEKTI
        </motion.h2>
      </div>

      {/* Grid projekata */}
      <div className="space-y-12">
        {/* Gornji red */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.4 }}
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
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.4 }}
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
    </section>
  );
};

export default ProjectsSection;
