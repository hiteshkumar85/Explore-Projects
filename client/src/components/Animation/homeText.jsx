import { motion } from 'framer-motion';
import { useEffect, useRef, useState, useMemo } from 'react';

const buildKeyframes = (from, steps) => {
  const keys = new Set([
    ...Object.keys(from),
    ...steps.flatMap((s) => Object.keys(s)),
  ]);

  const keyframes = {};
  keys.forEach((k) => {
    keyframes[k] = [from[k], ...steps.map((s) => s[k])];
  });
  return keyframes;
};

const homeText = ({
  text = '',
  delay = 200,
  className = '',
  animateBy = 'words',
  direction = 'top',
  threshold = 0.1,
  rootMargin = '0px',
  animationFrom,
  animationTo,
  easing = (t) => t,
  onAnimationComplete,
  stepDuration = 0.35,
}) => {
  const lines = text.split('\n');
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(ref.current);
        }
      },
      { threshold, rootMargin }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  const defaultFrom = useMemo(
    () =>
      direction === 'top'
        ? { filter: 'blur(10px)', opacity: 0, y: -50 }
        : { filter: 'blur(10px)', opacity: 0, y: 50 },
    [direction]
  );

  const defaultTo = useMemo(
    () => [
      {
        filter: 'blur(5px)',
        opacity: 0.5,
        y: direction === 'top' ? 5 : -5,
      },
      { filter: 'blur(0px)', opacity: 1, y: 0 },
    ],
    [direction]
  );

  const fromSnapshot = animationFrom ?? defaultFrom;
  const toSnapshots = animationTo ?? defaultTo;

  const stepCount = toSnapshots.length + 1;
  const totalDuration = stepDuration * (stepCount - 1);
  const times = Array.from({ length: stepCount }, (_, i) =>
    stepCount === 1 ? 0 : i / (stepCount - 1)
  );

  return (
    <div
      ref={ref}
      className={`blur-text ${className} flex-wrap `}
    >
      {lines.map((line, lineIndex) => {
        const segments = animateBy === 'words' ? line.split(' ') : line.split('');
        return (
          <div key={lineIndex} className="w-fit block mx-auto flex-wrap -m-4 text-shadow-lg/60">
            {segments.map((segment, index) => {
              const animateKeyframes = buildKeyframes(fromSnapshot, toSnapshots);

              const spanTransition = {
                duration: totalDuration,
                times,
                delay: ((lineIndex * segments.length + index) * delay) / 1000,
              };
              spanTransition.ease = easing;

              return (
                <motion.span
                  className={`inline-block will-change-[transform,filter,opacity] font-bold ${segment === 'Projects' || segment === 'Ideas'
                      ? 'text-transparent bg-clip-text bg-[linear-gradient(180deg,_rgba(250,250,250,1)_10%,_rgba(0,215,255,1)_100%)] text-shadow-lg/5 py-5'
                      : ''
                    }`}
                  key={index}
                  initial={fromSnapshot}
                  animate={inView ? animateKeyframes : fromSnapshot}
                  transition={spanTransition}
                  onAnimationComplete={
                    lineIndex === lines.length - 1 &&
                    index === segments.length - 1 &&
                    onAnimationComplete
                  }
                >
                  {segment === ' ' ? '\u00A0' : segment}
                  {animateBy === 'words' && index < segments.length - 1 && '\u00A0'}
                </motion.span>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default homeText;