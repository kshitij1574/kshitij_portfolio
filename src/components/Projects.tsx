"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Modal from "./Modal";

const projects = [
  {
    title: "Face Emotion Recognition",
    category: "Machine Learning (CNN)",
    shortDescription: "Built a real-time emotion detection system using OpenCV and CNNs.",
    image: "https://images.unsplash.com/photo-1527430253228-e93688616381?auto=format&fit=crop&q=80&w=800",
    details: [
      "Built a real-time emotion detection system using OpenCV and Convolutional Neural Networks (CNN).",
      "Processed facial image datasets for training and validation.",
      "Achieved 63%+ model accuracy on test dataset.",
      "Implemented real-time prediction using webcam input.",
      "Optimized preprocessing pipeline to improve detection speed by 20%."
    ]
  },
  {
    title: "Blood Bank Management System",
    category: "Software Development",
    shortDescription: "System to manage donor registration and track blood stock levels.",
    image: "/projects/blood-bank.png", 
    details: [
      "Manages donor registration and hospital blood requests.",
      "Tracks blood stock levels and emergency alerts.",
      "Provides a secure, role-based access and reporting system."
    ]
  },
  {
    title: "Password Management System",
    category: "Information Security",
    shortDescription: "Secure password management system with encrypted storage.",
    image: "/projects/password-manager.png", 
    details: [
      "Designed secure password management system with encrypted storage.",
      "Implemented robust authentication and secure hashing techniques.",
      "Built user-friendly interface using HTML and CSS.",
      "Applicable across critical sectors like education, healthcare, and security."
    ]
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section className="relative z-20 min-h-screen bg-[#121212] px-6 py-32 md:px-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="mb-16 text-4xl font-bold tracking-tight text-white md:text-6xl">
            Notable Projects.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer relative overflow-hidden flex flex-col rounded-2xl border border-white/5 bg-white/5 p-6 backdrop-blur-xl transition-all hover:border-white/20 hover:bg-white/10 hover:shadow-2xl hover:shadow-white/5"
            >
              <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-b from-white/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              
              <div className="relative mb-6 aspect-video overflow-hidden rounded-xl bg-[#1a1a1a]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => { (e.target as HTMLImageElement).style.opacity = '0'; }}
                  onLoad={(e) => { (e.target as HTMLImageElement).style.opacity = '1'; }}
                />
              </div>

              <div className="relative z-10 flex flex-col flex-1">
                <p className="mb-2 text-xs font-semibold tracking-widest text-[#a8a8a8] uppercase">
                  {project.category}
                </p>
                <h3 className="mb-3 text-2xl font-semibold text-gray-100 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  {project.shortDescription}
                </p>
                
                <div className="mt-auto">
                   <p className="text-xs font-medium text-blue-500 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                     View Details &rarr;
                   </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Modal isOpen={!!selectedProject} onClose={() => setSelectedProject(null)}>
        {selectedProject && (
          <div className="p-4 sm:p-8 flex flex-col md:flex-row gap-8 items-start">
            <div className="w-full md:w-1/2 rounded-xl overflow-hidden shadow-lg border border-white/5 bg-[#1a1a1a] flex items-center justify-center relative aspect-video">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title} 
                className="w-full h-full object-cover absolute inset-0"
                onError={(e) => { (e.target as HTMLImageElement).style.opacity = '0'; }}
              />
               <span className="text-gray-500 text-xs">Image Placeholder</span>
            </div>
            <div className="w-full md:w-1/2 flex flex-col">
              <span className="text-xs font-semibold tracking-widest text-blue-400 uppercase mb-2">
                {selectedProject.category}
              </span>
              <h3 className="text-3xl font-bold text-white mb-6 leading-tight">
                {selectedProject.title}
              </h3>
              
              <ul className="space-y-4 text-gray-300 text-sm sm:text-base">
                {selectedProject.details.map((detail, idx) => (
                  <li key={idx} className="flex gap-3">
                    <span className="text-blue-500 mt-1">▹</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}
