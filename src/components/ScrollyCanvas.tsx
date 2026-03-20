"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform } from "framer-motion";

const FRAME_COUNT = 80;

export default function ScrollyCanvas({ children }: { children?: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Map scroll progress purely relative to this specific container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const frameIndex = useTransform(
    scrollYProgress,
    [0, 1],
    [0, FRAME_COUNT - 1]
  );

  useEffect(() => {
    // Preload all frames to avoid flickering during scrubbing
    const preloadImages = async () => {
      const imagePromises = [];

      for (let i = 0; i < FRAME_COUNT; i++) {
        const promise = new Promise<HTMLImageElement>((resolve) => {
          const img = new Image();
          const frameNumber = i.toString().padStart(2, "0");
          img.src = `/sequence/frame_${frameNumber}_delay-0.063s.png`;
          img.onload = () => resolve(img);
          // Optional: handle error if needed
          img.onerror = () => resolve(img); 
        });
        imagePromises.push(promise);
      }

      const results = await Promise.all(imagePromises);
      setImages(results);
      setIsLoaded(true);
    };

    preloadImages();
  }, []);

  useEffect(() => {
    if (!isLoaded || images.length === 0) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    let animationFrameId: number;

    const render = () => {
      const currentIndex = Math.min(
        Math.round(frameIndex.get()),
        FRAME_COUNT - 1
      );
      const img = images[currentIndex];

      if (img && img.complete) {
        // Automatically resize canvas to full window
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // Implement object-fit: cover behavior
        const canvasRatio = canvas.width / canvas.height;
        const imgRatio = img.width / img.height;

        let drawWidth, drawHeight, offsetX, offsetY;

        if (canvasRatio > imgRatio) {
          drawWidth = canvas.width;
          drawHeight = canvas.width / imgRatio;
          offsetX = 0;
          offsetY = (canvas.height - drawHeight) / 2;
        } else {
          drawWidth = canvas.height * imgRatio;
          drawHeight = canvas.height;
          offsetX = (canvas.width - drawWidth) / 2;
          offsetY = 0;
        }

        // Draw image aligned to center logic
        ctx.fillStyle = "#121212";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    // Trigger initial render immediately
    render();

    // Re-render on window resize
    const handleResize = () => {
      render();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, [isLoaded, images, frameIndex]);

  return (
    <section ref={containerRef} className="relative h-[500vh] w-full bg-[#121212]">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 h-full w-full outline-none"
        />

        {!isLoaded && (
          <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-[#121212]">
            <div className="mb-4 h-10 w-10 animate-spin rounded-full border-2 border-white/20 border-t-white" />
            <p className="text-sm text-gray-400 tracking-widest uppercase">
              Loading Experience
            </p>
          </div>
        )}
      </div>
      {children}
    </section>
  );
}
