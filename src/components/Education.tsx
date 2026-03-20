"use client";

import { motion } from "framer-motion";

const education = [
  {
    institution: "Konkan Gyanpeeth College of Engineering",
    degree: "BE in Computer Science and Engineering (Pursuing)",
    year: "2022 - 2026",
  },
  {
    institution: "N.G. Acharya College of Science and Commerce",
    degree: "HSC (Higher Secondary Certificate)",
    year: "2022",
  },
  {
    institution: "Shri Ram High School, Gangapur",
    degree: "SSC (Secondary School Certificate)",
    year: "2020",
  }
];

export default function Education() {
  return (
    <section className="relative z-20 bg-[#121212] px-6 py-24 md:px-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="mb-12 text-4xl font-bold tracking-tight text-white md:text-6xl">
            Education.
          </h2>
        </motion.div>

        <div className="flex flex-col gap-6">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/5 bg-white/5 p-8 backdrop-blur-xl transition-all hover:border-white/20 hover:bg-white/10 md:flex-row md:items-center"
            >
              {/* Subtle hover glow effect */}
              <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-r from-white/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              
              <div className="relative z-10 mb-4 md:mb-0">
                <h3 className="mb-2 text-2xl font-semibold text-gray-100">
                  {edu.institution}
                </h3>
                <p className="text-lg text-gray-400">
                  {edu.degree}
                </p>
              </div>
              
              <div className="relative z-10 text-left md:text-right">
                <span className="inline-block rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium tracking-widest text-[#a8a8a8] uppercase">
                  {edu.year}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
