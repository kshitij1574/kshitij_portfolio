"use client";

import { motion } from "framer-motion";

const skills = [
  { category: "Programming", items: ["Python", "SQL", "C++", "HTML", "CSS"] },
  { category: "Data Libraries", items: ["Pandas", "NumPy", "Scikit-learn", "OpenCV"] },
  { category: "ML Techniques", items: ["Classification", "Regression", "Feature Engineering"] },
  { category: "Tools & Database", items: ["Git", "GitHub", "VS Code", "MySQL", "Jupyter Notebook"] },
  { category: "Behavioral", items: ["Critical Thinking", "Problem Solving", "Team Player", "Adaptability", "Continuous Learner"] },
];

export default function About() {
  return (
    <section className="relative z-20 bg-[#121212] px-6 py-24 md:px-24">
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Summary Side */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="mb-8 text-4xl font-bold tracking-tight text-white md:text-5xl">
            About Me.
          </h2>
          <div className="text-lg text-gray-400 leading-relaxed space-y-6">
            <p>
              I am a <strong className="text-gray-200">Data Science enthusiast</strong> with a strong foundation in Machine Learning, Statistics, and Data Structures & Algorithms. 
            </p>
            <p>
              Experienced in building end-to-end ML systems, including Face Emotion Recognition and data-driven management systems. I am highly skilled in Python, SQL, and data preprocessing with hands-on project experience.
            </p>
            <p>
              My true passion lies in solving real-world problems using data-driven insights and bridging the gap between raw data and actionable engineering.
            </p>
          </div>
        </motion.div>

        {/* Skills Side */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col justify-center"
        >
          <h2 className="mb-8 text-3xl font-bold tracking-tight text-white">
            Technical Arsenal.
          </h2>
          <div className="flex flex-col gap-6">
            {skills.map((skillGroup, index) => (
              <div key={index} className="border-l-2 border-white/10 pl-6">
                <h3 className="text-sm tracking-widest uppercase text-gray-500 mb-3 font-semibold">
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((item, i) => (
                    <span 
                      key={i} 
                      className="rounded-full bg-white/5 border border-white/10 px-4 py-1.5 text-sm text-gray-300 backdrop-blur-sm cursor-default hover:bg-white/10 hover:text-white transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
