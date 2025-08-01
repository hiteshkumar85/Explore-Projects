import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const projects = [
  {
    title: "Studyfi",
    type: "Business Website",
    image: "/images/studyfi.png", // Replace with real paths
  },
  {
    title: "VIAALUX",
    type: "Business Website",
    image: "/images/viaalux.png",
  },
  {
    title: "Cure Souls",
    type: "E-Commerce Website",
    image: "/images/curesouls.png",
  },
  // Add more projects
];

export default function ProjectSlider() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -400 : 400,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="relative w-full overflow-hidden">
      <button
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/70 rounded-full p-2 shadow"
        onClick={() => scroll('left')}
      >
        <ChevronLeft />
      </button>
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scroll-smooth px-6 py-4 scrollbar-hide"
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className="min-w-[300px] bg-white shadow-xl rounded-lg flex-shrink-0 transform hover:scale-105 transition-transform duration-300"
          >
            <div className="bg-gradient-to-b from-[#060010] to-black p-4 rounded-t-lg">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-52 object-contain rounded"
              />
            </div>
            <div className="p-4 text-center">
              <h3 className="text-lg font-bold">{project.title}</h3>
              <p className="text-blue-600">{project.type}</p>
            </div>
          </div>
        ))}
      </div>
      <button
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/70 rounded-full p-2 shadow"
        onClick={() => scroll('right')}
      >
        <ChevronRight />
      </button>
    </div>
  );
}
