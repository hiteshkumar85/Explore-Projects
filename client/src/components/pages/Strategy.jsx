import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import {
  FaSearch,
  FaCode,
  FaPencilRuler,
  FaVial,
  FaRocket,
  FaLifeRing,
} from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const Strategy = () => {
  const lineRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      lineRef.current,
      { height: "10%" },
      {
        height: "100%",
        scrollTrigger: {
          trigger: lineRef.current,
          start: "top 90%",
          end: "bottom bottom",
          ease: "power1.out",
          scrub: 1,
        },
      }
    );

    gsap.utils.toArray(".timeline-box").forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 80, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 95%",
            end: "top 20%",
            scrub: true,
          },
        }
      );
    });
  }, []);

  const timelineItems = [
    {
      title: "Discovery & Planning",
      text: "We dive deep to understand your goals, audience, and technical requirements to craft the perfect strategy.",
      direction: "left",
      highlight: true,
      icon: <FaSearch className="text-3xl mr-2" />,
    },
    {
      title: "Design & Prototyping",
      text: "Our designers create intuitive, beautiful interfaces that align with your brand and user needs.",
      direction: "right",
      icon: <FaPencilRuler className="text-3xl mr-2" />,
    },
    {
      title: "Development Sprint",
      text: "Our developers build your solution using agile methodologies with regular progress updates.",
      direction: "left",
      highlight: false,
      icon: <FaCode className="text-3xl mr-2" />,
    },
    {
      title: "Testing & QA",
      text: "We rigorously test across devices and scenarios to ensure flawless performance.",
      direction: "right",
      icon: <FaVial className="text-3xl mr-2" />,
    },
    {
      title: "Deployment & Launch",
      text: "We handle all technical aspects of going live and ensure a smooth transition.",
      direction: "left",
      icon: <FaRocket className="text-3xl mr-2" />,
    },
    {
      title: "Ongoing Support",
      text: "We provide maintenance, updates, and scaling as your business grows.",
      direction: "right",
      icon: <FaLifeRing className="text-3xl mr-2" />,
    },
  ];

  return (
    <div className="bg-[linear-gradient(to_bottom,_#060022_5%,__#060028_95%)] text-white py-1 min-h-screen">
      <section className="text-center max-w-4xl mx-auto my-14 px-4">
        <h1 className="text-4xl lg:text-5xl font-bold mb-4">Where Vision Meets Execution</h1>
        <p className="text-lg text-gray-300">
          At the heart of our process lies a commitment to collaboration. We work as an extension
          of your team — aligning with your goals, adapting to your feedback, and ensuring every
          milestone brings your vision to life.
        </p>
      </section>
      <div className="relative max-w-6xl mx-auto px-10">
        {/* Timeline line */}
        <div
          ref={lineRef}
          className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-1.5 rounded-2xl bg-gradient-to-b from-purple-500 to-indigo-600"
          style={{ height: "0%", top: 0 }}
        ></div>

        {timelineItems.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row ${item.direction === "left" ? "md:justify-start" : "md:justify-end"
              } items-center mb-16 relative`}
          >
            {/* Dot */}
            <div className="absolute -left-[1.8rem] md:left-1/2 md:-translate-x-1/2 w-4 h-4 bg-purple-500 rounded-full top-1/2 transform -translate-y-1/2 shadow-md z-10"></div>

            {/* Content */}
            <div
              className={`${item.direction === "left"
                ? "w-full md:w-1/2 md:pr-8"
                : "w-full md:w-1/2 md:pl-8"
                }`}
            >
              <div
                className={`timeline-box p-4 md:p-6 rounded-xl shadow-xl flex items-start transition duration-100 ease-in-out ${item.highlight
                    ? "bg-gradient-to-r from-purple-900 to-indigo-500"
                    : "bg-gradient-to-r from-purple-900 to-indigo-500"
                  }`}
              >
                {item.icon}
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold">{item.title}</h3>
                  <p className="text-sm mt-3 leading-relaxed">{item.text}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Strategy;