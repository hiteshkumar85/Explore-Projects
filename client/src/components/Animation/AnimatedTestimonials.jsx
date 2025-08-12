"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";

export const AnimatedTestimonials = ({ testimonials, autoplay = false }) => {
  const [active, set] = useState(0);
  const change = (dir) =>
    set((i) => (i + dir + testimonials.length) % testimonials.length);

  useEffect(() => {
    if (!autoplay) return;
    const interval = setInterval(() => change(1), 5000);
    return () => clearInterval(interval);
  }, [autoplay]);

  const rand = () => Math.floor(Math.random() * 21) - 10;

  return (
    <div className="w-full flex flex-col items-center gap-14 md:gap-20 px-4 bg-[linear-gradient(to_bottom,_#060028_5%,__#060034_95%)] pb-10 overflow-hidden">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center">
        What our clients say?
      </h1>

      <div className="max-w-4xl grid md:grid-cols-2 gap-10 md:gap-20 font-sans">
        {/* Image Section */}
        <div className="relative h-64 xs:h-80 md:h-90">
          <AnimatePresence>
            {testimonials.map((t, i) => {
              const isActive = i === active;
              return (
                <motion.div
                  key={t.src}
                  initial={{ opacity: 0, scale: 0.9, rotate: rand(), z: -100 }}
                  animate={{
                    opacity: isActive ? 1 : 0.7,
                    scale: isActive ? 1 : 0.95,
                    rotate: isActive ? 0 : rand(),
                    y: isActive ? [0, -40, 0] : 0,
                    zIndex: isActive ? 10 : testimonials.length - i,
                  }}
                  exit={{ opacity: 0, scale: 0.9, rotate: rand(), z: 100 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="absolute inset-0 origin-bottom"
                >
                  <img
                    src={t.src}
                    alt={t.name}
                    className="h-full w-full rounded-3xl object-cover"
                    draggable={false}
                  />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Text Section */}
        <div className="flex flex-col justify-between py-4">
          <motion.div
            key={active}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              {testimonials[active].name}
            </h3>
            <p className="text-sm text-gray-400">
              {testimonials[active].designation}
            </p>
            <motion.p className="mt-6 text-base sm:text-lg text-gray-300">
              {testimonials[active].quote.split(" ").map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ filter: "blur(10px)", opacity: 0, y: 5 }}
                  animate={{ filter: "blur(0)", opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.02, duration: 0.2 }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>
          </motion.div>

          {/* Arrows */}
          <div className="flex gap-4 pt-10 md:pt-0">
            {[{ Icon: IconArrowLeft, dir: -1 }, { Icon: IconArrowRight, dir: 1 }].map(
              ({ Icon, dir }, i) => (
                <button
                  key={i}
                  onClick={() => change(dir)}
                  className="group flex h-10 w-10 md:h-8 md:w-8 items-center justify-center rounded-full border border-white hover:bg-white/10"
                >
                  <Icon
                    className={`h-5 w-5 text-white transition-transform duration-300 ${dir === -1
                        ? "group-hover:rotate-12"
                        : "group-hover:-rotate-12"
                      }`}
                  />
                </button>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
