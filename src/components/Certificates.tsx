"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Modal from "./Modal";

const certificates = [
  {
    title: "The Ultimate Job Ready Data Science Course",
    issuer: "CodeWithHarry",
    date: "January 2026",
    image: "/certificates/data-science.png.png",
  },
  {
    title: "Data Analytics Job Simulation",
    issuer: "Deloitte",
    date: "March 2026",
    image: "/certificates/deloitte-data-analytics.png",
  },
  {
    title: "GenAI Powered Data Analytics Job Simulation",
    issuer: "Forage / Tata",
    date: "June 2025",
    image: "/certificates/tata-genai.png.jpeg",
  },
  {
    title: "Solutions Architecture Job Simulation",
    issuer: "Forage / AWS",
    date: "September 2025",
    image: "/certificates/aws-architecture.png.jpeg",
  },
  {
    title: "Cybersecurity Analyst Job Simulation",
    issuer: "Forage / Tata",
    date: "September 2025",
    image: "/certificates/tata-cybersecurity.png.jpeg",
  }
];

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState<{ title: string; image: string } | null>(null);

  return (
    <section className="relative z-20 bg-[#121212] px-6 py-20 md:px-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="mb-12 text-4xl font-bold tracking-tight text-white md:text-6xl">
            Certifications.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              onClick={() => setSelectedCert(cert)}
              className="group cursor-pointer relative flex flex-col overflow-hidden rounded-2xl border border-white/5 bg-white/5 p-6 backdrop-blur-xl transition-all hover:border-white/20 hover:bg-white/10"
            >
              {/* Subtle hover gradient */}
              <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br from-white/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Image Container with 4:3 Aspect Ratio standard for certs */}
              <div className="relative mb-6 aspect-[4/3] w-full overflow-hidden rounded-xl bg-[#1a1a1a] flex items-center justify-center border border-white/5">

                {/* Fallback Text if image isn't loaded */}
                <div className="absolute z-0 flex flex-col items-center justify-center text-center p-4">
                  <span className="text-gray-600 mb-2">Image Missing</span>
                  <span className="text-xs font-mono text-gray-500 border border-gray-600 rounded bg-black/50 px-2 py-1">
                    Save as: public{cert.image}
                  </span>
                </div>

                {/* Actual Certificate Image */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="relative z-10 h-full w-full object-contain p-2 transition-transform duration-700 group-hover:scale-[1.03]"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.opacity = '0';
                  }}
                  onLoad={(e) => {
                    (e.target as HTMLImageElement).style.opacity = '1';
                  }}
                />
              </div>

              <div className="relative z-10 mt-auto flex flex-col items-start pt-2">
                <span className="mb-3 inline-block rounded-full bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#d1d1d1]">
                  {cert.issuer}
                </span>
                <h3 className="mb-2 text-xl font-semibold leading-tight text-gray-100 group-hover:text-blue-400 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-sm font-medium text-gray-500">
                  Issued: {cert.date}
                </p>
                <p className="mt-4 text-xs font-medium text-blue-500 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                  View Full Size &rarr;
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Modal isOpen={!!selectedCert} onClose={() => setSelectedCert(null)}>
        {selectedCert && (
          <div className="p-4 sm:p-6 flex flex-col items-center justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={selectedCert.image}
              alt={selectedCert.title}
              className="w-auto h-auto max-h-[75vh] object-contain rounded-lg shadow-2xl"
              onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
            />
            <h3 className="mt-6 text-xl text-center font-bold text-white max-w-2xl">{selectedCert.title}</h3>
          </div>
        )}
      </Modal>
    </section>
  );
}
