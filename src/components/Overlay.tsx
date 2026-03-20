"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function Overlay() {
  const { scrollYProgress } = useScroll();

  // Section 1: 0% to 20%
  const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.2], [1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.2], [0, -100]);

  // Section 2: 25% to 50%
  const opacity2 = useTransform(scrollYProgress, [0.2, 0.3, 0.4, 0.5], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.2, 0.5], [100, -100]);

  // Section 3: 55% to 80%
  const opacity3 = useTransform(scrollYProgress, [0.5, 0.6, 0.7, 0.8], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.5, 0.8], [100, -100]);

  return (
    <div className="absolute inset-0 z-10 h-[500vh] w-full pointer-events-none">
      <div className="sticky top-0 flex h-screen w-full flex-col justify-center px-6 md:px-24">
        
        {/* Section 1 */}
        <motion.div
          style={{ opacity: opacity1, y: y1 }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center"
        >
          <h1 className="mb-4 text-5xl font-extrabold tracking-tight text-white drop-shadow-lg md:text-8xl">
            Kshitij Kamble.<br className="md:hidden" /> Data Scientist.
          </h1>
          <p className="text-xl font-light text-gray-300 drop-shadow-md md:text-3xl max-w-2xl px-4">
            Solving real-world problems using data-driven insights.
          </p>
        </motion.div>

        {/* Section 2 */}
        <motion.div
          style={{ opacity: opacity2, y: y2 }}
          className="absolute inset-0 flex flex-col items-start justify-center px-8 text-left md:px-32"
        >
          <h2 className="max-w-3xl text-4xl font-bold tracking-tighter text-white drop-shadow-lg md:text-7xl">
            Building intelligent <span className="text-gray-400">systems.</span>
          </h2>
          <p className="mt-4 max-w-xl text-lg font-light text-gray-300 md:text-2xl">
            From Deep Learning pipelines to robust predictive analytics and databases.
          </p>
        </motion.div>

        {/* Section 3 */}
        <motion.div
          style={{ opacity: opacity3, y: y3 }}
          className="absolute inset-0 flex flex-col items-end justify-center px-8 text-right md:px-32"
        >
          <h2 className="max-w-3xl text-4xl font-bold tracking-tighter text-white drop-shadow-lg md:text-7xl">
            Bridging data <br />
            <span className="text-gray-400">and engineering.</span>
          </h2>
          <p className="mt-4 max-w-xl text-lg font-light text-gray-300 md:text-2xl">
            Proficient in Python, SQL, C++, and Modern Software Architecture.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
