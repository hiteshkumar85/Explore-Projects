
// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";
// import {
//   FaSearch,
//   FaCode,
//   FaPencilRuler,
//   FaVial,
//   FaRocket,
//   FaLifeRing,
// } from "react-icons/fa";

// gsap.registerPlugin(ScrollTrigger);

// const Strategy = () => {
//   const lineRef = useRef(null);

//   useEffect(() => {
//     gsap.fromTo(
//       lineRef.current,
//       { height: "0%" },
//       {
//         height: "100%",
//         scrollTrigger: {
//           trigger: lineRef.current,
//           start: "top 80%",
//           end: "bottom bottom",
//           scrub: 1.5,
//         },
//       }
//     );

//     gsap.utils.toArray(".timeline-box").forEach((el) => {
//       gsap.fromTo(
//         el,
//         { opacity: 0, y: 80, scale: 0.95 },
//         {
//           opacity: 1,
//           y: 0,
//           scale: 1,
//           ease: "power3.out",
//           scrollTrigger: {
//             trigger: el,
//             start: "top 90%",
//             end: "top 20%",
//             scrub: true,
//           },
//         }
//       );
//     });
//   }, []);

//   const timelineItems = [
//     {
//       title: "Discovery & Planning",
//       text: "We dive deep to understand your goals, audience, and technical requirements to craft the perfect strategy.",
//       direction: "left",
//       highlight: true,
//       icon: <FaSearch className="text-3xl mr-2" />,
//     },
//     {
//       title: "Development Sprint",
//       text: "Our developers build your solution using agile methodologies with regular progress updates.",
//       direction: "right",
//       highlight: true,
//       icon: <FaCode className="text-3xl mr-2" />,
//     },
//     {
//       title: "Design & Prototyping",
//       text: "Our designers create intuitive, beautiful interfaces that align with your brand and user needs.",
//       direction: "left",
//       icon: <FaPencilRuler className="text-3xl mr-2" />,
//     },
//     {
//       title: "Testing & QA",
//       text: "We rigorously test across devices and scenarios to ensure flawless performance.",
//       direction: "right",
//       icon: <FaVial className="text-3xl mr-2" />,
//     },
//     {
//       title: "Deployment & Launch",
//       text: "We handle all technical aspects of going live and ensure a smooth transition.",
//       direction: "left",
//       icon: <FaRocket className="text-3xl mr-2" />,
//     },
//     {
//       title: "Ongoing Support",
//       text: "We provide maintenance, updates, and scaling as your business grows.",
//       direction: "right",
//       icon: <FaLifeRing className="text-3xl mr-2" />,
//     },
//   ];

//   return (
//     <div className="bg-gray-900 text-white py-20 min-h-screen">
//       {/* Header */}
//       <section className="text-center max-w-4xl mx-auto mb-24 px-4">
//         <h1 className="text-5xl font-bold mb-4">Where Vision Meets Execution</h1>
//         <p className="text-lg text-gray-300">
//           At the heart of our process lies a commitment to collaboration. We work as an extension
//           of your team — aligning with your goals, adapting to your feedback, and ensuring every
//           milestone brings your vision to life.
//         </p>
//       </section>

//       {/* Timeline Section */}
//       <div className="relative max-w-6xl mx-auto px-4">
//         <div
//           ref={lineRef}
//           className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-purple-500 to-indigo-600"
//           style={{ height: "0%", top: 0 }}
//         ></div>

//         {/* Timeline Items */}
//         {timelineItems.map((item, index) => (
//           <div
//             key={index}
//             className={`flex ${
//               item.direction === "left" ? "justify-start" : "justify-end"
//             } items-center mb-24 relative`}
//           >
//             <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-purple-500 rounded-full top-1/2 transform -translate-y-1/2 z-10 shadow-md"></div>

//             <div
//               className={`${
//                 item.direction === "left" ? "w-1/2 pr-8" : "w-1/2 pl-8"
//               }`}
//             >
//               <div
//                 className={`timeline-box p-6 rounded-xl shadow-xl flex items-start transition duration-500 ease-in-out ${
//                   item.highlight
//                     ? "bg-gradient-to-r from-purple-900 to-indigo-500 text-white"
//                     : "bg-gradient-to-r from-purple-900 to-indigo-500 text-white"
//                 }`}
//               >
//                 {item.icon}
//                 <div>
//                   <h3 className="text-2xl font-semibold">{item.title}</h3>
//                   <p className="text-sm mt-3 leading-relaxed">{item.text}</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Strategy;







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
      { height: "0%" },
      {
        height: "100%",
        scrollTrigger: {
          trigger: lineRef.current,
          start: "top 80%",
          end: "bottom bottom",
          scrub: 1.5,
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
            start: "top 90%",
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
      icon: <FaSearch className="text-3xl mr-3 text-white" />,
    },
    {
      title: "Development Sprint",
      text: "Our developers build your solution using agile methodologies with regular progress updates.",
      direction: "right",
      highlight: true,
      icon: <FaCode className="text-3xl mr-3 text-white" />,
    },
    {
      title: "Design & Prototyping",
      text: "Our designers create intuitive, beautiful interfaces that align with your brand and user needs.",
      direction: "left",
      highlight: false,
      icon: <FaPencilRuler className="text-3xl mr-3 text-purple-400" />,
    },
    {
      title: "Testing & QA",
      text: "We rigorously test across devices and scenarios to ensure flawless performance.",
      direction: "right",
      highlight: false,
      icon: <FaVial className="text-3xl mr-3 text-purple-400" />,
    },
    {
      title: "Deployment & Launch",
      text: "We handle all technical aspects of going live and ensure a smooth transition.",
      direction: "left",
      highlight: false,
      icon: <FaRocket className="text-3xl mr-3 text-purple-400" />,
    },
    {
      title: "Ongoing Support",
      text: "We provide maintenance, updates, and scaling as your business grows.",
      direction: "right",
      highlight: false,
      icon: <FaLifeRing className="text-3xl mr-3 text-purple-400" />,
    },
  ];

  return (
    <div className="bg-[#130131] text-white py-20 min-h-screen">


      <section className="text-center max-w-4xl mx-auto mb-24 px-4">
        <h1 className="text-5xl font-bold mb-4">Where Vision Meets Execution</h1>
        <p className="text-lg text-gray-300">
          At the heart of our process lies a commitment to collaboration. We work as an extension
          of your team — aligning with your goals, adapting to your feedback, and ensuring every
          milestone brings your vision to life.
        </p>
      </section>

      <div className="relative max-w-6xl mx-auto px-4">
        <div
          ref={lineRef}
          className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-purple-500 to-indigo-600"
          style={{ height: "0%", top: 0 }} 
        ></div>

        {timelineItems.map((item, index) => (
          <div
            key={index}
            className={`flex ${
              item.direction === "left" ? "justify-start" : "justify-end"
            } items-center mb-24 relative`}
          >
            <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-purple-500 rounded-full top-1/2 transform -translate-y-1/2 z-10 shadow-md"></div>

            <div
              className={`${
                item.direction === "left" ? "w-1/2 pr-8" : "w-1/2 pl-8"
              }`}
            >

                {/* linergradient top twi div start  */}
              <div
                className={`timeline-box p-6 rounded-xl shadow-xl flex items-start transition duration-500 ease-in-out ${
                  item.highlight
                    ? "bg-gradient-to-r from-purple-600 to-indigo-500 text-white"
                    : "text-gray-100"
                }`}
                //  end 

                // black gradient bottom foure div start
                style={
                  item.highlight
                    ? {}
                    : { background: "linear-gradient(to top, #060016 5%, #060010 100%)" }
                }
                //  end 
              >
                {item.icon}
                <div>
                  <h3 className="text-2xl font-semibold">{item.title}</h3>
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
