
// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Lenis from "@studio-freight/lenis";

// gsap.registerPlugin(ScrollTrigger);

// // Replace these with your own image imports or URLs
// const services = [
//   {
//     image: "/images/web.png",
//     title: "Web Development",
//     desc: "Scalable, responsive websites with modern frameworks.",
//   },
//   {
//     image: "/images/andriod.png",
//     title: "App Development",
//     desc: "Cross-platform mobile apps for iOS and Android.",
//   },
//   {
//     image: "/images/hosting-server.png",
//     title: "Hosting",
//     desc: "Fast and secure hosting solutions with 99.9% uptime.",
//   },
//   {
//     image: "/images/cloud-services.png",
//     title: "Cloud Solutions",
//     desc: "Robust, scalable cloud infrastructure and DevOps.",
//   },
//   {
//     image: "/images/UXUI-design.png",
//     title: "UI/UX Designing",
//     desc: "User-centric, modern design for digital products.",
//   },
//    {
//     image: "/images/seo.png",
//     title: "SEO",
//     desc: "User-centric, modern design for digital products.",
//   },
  
// ];

// const SolutionSection = () => {
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const lenis = new Lenis();
//     const raf = (time) => {
//       lenis.raf(time);
//       requestAnimationFrame(raf);
//     };
//     requestAnimationFrame(raf);

//     const boxes = gsap.utils.toArray(".horizontal__item");
//     const section = sectionRef.current;

//     gsap.to(boxes, {
//       xPercent: -75 * (boxes.length - 1),
//       ease: "sine.out",
//       scrollTrigger: {
//         trigger: section,
//         pin: true,
//         scrub: 2,
//         snap: 1 / (boxes.length - 1),
//         end: () => "+=" + section.offsetWidth * (boxes.length - 1),
//       },
//     });

//     return () => {
//       ScrollTrigger.kill();
//     };
//   }, []);

//   return (
//     <section
//       id="horizontal"
//       ref={sectionRef}
//       className="bg-[linear-gradient(to_bottom,_black_5%,_#060010_60%,_#060010_99%)] overflow-hidden"
//     >
//       <div className="py-[100px]">
//         <div className="flex horizontal__content w-fit">
//           {services.map((service, i) => (
//             <div
//               key={i}
//               className="horizontal__item min-w-[350px] max-w-[450px] h-[400px] bg-[#0d0d0d] border border-[#333] p-8 mr-10 flex flex-col justify-center items-start text-white shadow-lg"
//               style={{ borderRadius: "0px" }} // no border radius
//             >
//               <img
//                 src={service.image}
//                 alt={service.title}
//                 className=" flex mb-6 w-[60px] h-[60px] object-contain"
//               />
//               <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
//               <p className="text-sm text-gray-300">{service.desc}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SolutionSection;



import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    image: "/images/web.png",
    title: "Web Development",
    desc: "Scalable, responsive websites with modern frameworks.",
  },
  {
    image: "/images/andriod.png",
    title: "App Development",
    desc: "Cross-platform mobile apps for iOS and Android.",
  },
  {
    image: "/images/hosting-server.png",
    title: "Hosting",
    desc: "Fast and secure hosting solutions with 99.9% uptime.",
  },
  {
    image: "/images/cloud-services.png",
    title: "Cloud Solutions",
    desc: "Robust, scalable cloud infrastructure and DevOps.",
  },
  {
    image: "/images/UXUI-design.png",
    title: "UI/UX Designing",
    desc: "User-centric, modern design for digital products.",
  },
  {
    image: "/images/seo.png",
    title: "SEO",
    desc: "Boost your visibility and drive traffic with SEO strategies.",
  },
];

const SolutionSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis();
    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    const boxes = gsap.utils.toArray(".horizontal__item");
    const section = sectionRef.current;

    gsap.to(boxes, {
      xPercent: -60 * (boxes.length - 1),
      ease: "sine.out",
      scrollTrigger: {
        trigger: section,
        pin: true,
        scrub: 2,
        snap: 1 / (boxes.length - 1),
        end: () => "+=" + section.offsetWidth * (boxes.length - 1),
      },
    });

    // Hover animation
    boxes.forEach((box) => {
      box.addEventListener("mouseenter", () => {
        gsap.to(box, {
          scale: 1.05,
          y: -10,
          boxShadow: "0 10px 25px rgba(255,255,255,0.1)",
          duration: 0.3,
          ease: "power2.out",
        });
      });
      box.addEventListener("mouseleave", () => {
        gsap.to(box, {
          scale: 1,
          y: 0,
          boxShadow: "0 0 0 transparent",
          duration: 0.3,
          ease: "power2.out",
        });
      });
    });

    return () => {
      ScrollTrigger.kill();
    };
  }, []);

  return (
    <section
      id="horizontal"
      ref={sectionRef}
      className="bg-[linear-gradient(to_bottom,_black_5%,_#060010_60%,_#060010_99%)] overflow-hidden"
    >
      <div className="py-[100px]">
        <div className="flex horizontal__content w-fit">
          {services.map((service, i) => (
            <div
              key={i}
              className="horizontal__item min-w-[350px] max-w-[450px] h-[400px]  border border-[#333] p-8 mr-10 flex flex-col justify-center items-center text-white shadow-md rounded-2xl transition-all duration-300 cursor-pointer"
            >
              <img
                src={service.image}
                alt={service.title}
                className="mb-6 w-[70px] h-[60px] object-contain flex justify-center mx-auto mt-0"
              />
              <h3 className="text-2xl font-bold mb-2 text-center">
                {service.title}
              </h3>
              <p className="text-sm text-gray-300 text-center">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
