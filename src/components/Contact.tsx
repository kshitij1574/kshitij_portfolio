"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="relative z-20 bg-[#121212] px-6 py-24 md:px-24">
      <div className="mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <h2 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-6xl">
            Let&apos;s Connect.
          </h2>
          <p className="mb-14 text-lg text-gray-400">
            Whether you have a question, a project idea, or just want to say hi, feel free to reach out. I&apos;ll try my best to get back to you!
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left"
        >
          {/* Email */}
          <a href="mailto:kshitijkamble5835@gmail.com" className="group flex flex-col justify-center rounded-2xl border border-white/5 bg-white/5 p-8 backdrop-blur-md transition-all hover:bg-white/10 hover:border-white/20 hover:-translate-y-1">
            <span className="text-xs font-semibold tracking-widest text-gray-500 uppercase mb-2">Email</span>
            <span className="text-xl font-medium text-gray-100 group-hover:text-blue-400 transition-colors">kshitijkamble5835@gmail.com</span>
          </a>

          {/* Phone */}
          <a href="tel:+919075381739" className="group flex flex-col justify-center rounded-2xl border border-white/5 bg-white/5 p-8 backdrop-blur-md transition-all hover:bg-white/10 hover:border-white/20 hover:-translate-y-1">
            <span className="text-xs font-semibold tracking-widest text-gray-500 uppercase mb-2">Phone</span>
            <span className="text-xl font-medium text-gray-100 group-hover:text-blue-400 transition-colors">+91 90753 81739</span>
          </a>

          {/* LinkedIn */}
          <a href="https://linkedin.com/in/kshitij-kamble" target="_blank" rel="noreferrer" className="group flex flex-col justify-center rounded-2xl border border-white/5 bg-white/5 p-8 backdrop-blur-md transition-all hover:bg-white/10 hover:border-white/20 hover:-translate-y-1">
            <span className="text-xs font-semibold tracking-widest text-gray-500 uppercase mb-2">LinkedIn</span>
            <span className="text-xl font-medium text-gray-100 group-hover:text-blue-400 transition-colors">linkedin.com/in/kshitij-kamble</span>
          </a>

          {/* GitHub */}
          <a href="https://github.com/KshitijKamble" target="_blank" rel="noreferrer" className="group flex flex-col justify-center rounded-2xl border border-white/5 bg-white/5 p-8 backdrop-blur-md transition-all hover:bg-white/10 hover:border-white/20 hover:-translate-y-1">
            <span className="text-xs font-semibold tracking-widest text-gray-500 uppercase mb-2">GitHub</span>
            <span className="text-xl font-medium text-gray-100 group-hover:text-blue-400 transition-colors">github.com/KshitijKamble</span>
          </a>

          {/* Instagram */}
          <a href="https://www.instagram.com/kshitij_1574/" target="_blank" rel="noreferrer" className="group flex flex-col justify-center rounded-2xl border border-white/5 bg-white/5 p-8 backdrop-blur-md transition-all hover:bg-white/10 hover:border-white/20 hover:-translate-y-1 md:col-span-2 max-w-xl mx-auto w-full lg:col-span-2">
            <span className="text-xs font-semibold tracking-widest text-gray-500 uppercase mb-2">Instagram</span>
            <span className="text-xl font-medium text-gray-100 group-hover:text-pink-400 transition-colors">@kshitij_1574</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
