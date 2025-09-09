import axios from "axios";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";

const ProjectInformation = () => {
  const { scrollYProgress } = useScroll();
  // Image zoom while scrolling Page 2
  const scale = useTransform(scrollYProgress, [0.1, 0.3], [1, 1.12]);

  const id = useLocation().search.split("?")[1];
  const [project, setProject] = useState(null);
  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchProject = async () => {
      try {
        const response = await axios.get(`/api/projectInformation/${id}`);
        setProject(response.data);
      } catch (error) {
        console.error("Error fetching project information:", error);
      }
    };
    fetchProject();
  }, [id]);

  if (!project) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {/* Page 1 */}
      <section className="page1 relative z-9 bg-[#000000] h-[88vh] flex items-center justify-center text-center px-4 sm:px-8">
        <motion.div
          className="m-auto max-w-[1080px] text-white"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h1 className="text-xl sm:text-3xl">{project.logo || "LOGO"}</h1>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            {project.heading}
          </h1>
          <p className=" text-base sm:text-lg leading-relaxed px-2 sm:px-10 md:px-20 lg:px-20">
            {project.paragraph}
          </p>
        </motion.div>
      </section>
      {/* Page 2 with FIXED image */}
      <section className="relative h-[50vh] sm:h-[70vh] md:h-[80vh] lg:h-screen">
        <motion.div className="fixed inset-0 -z-10" style={{ scale }}>
          <img
            src={`http://localhost:5000/public/project-images/${project.images[0]}.jpg`}
            alt="Background"
            className="h-full w-full object-cover object-center"
          />
        </motion.div>
      </section>
      {/* Page 3 overlapping the fixed image */}
      <section className="relative z-20 bg-[#000000] flex flex-col gap-16 sm:gap-20 px-6 sm:px-10 md:px-20 py-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-white flex flex-col md:flex-row md:justify-between gap-8"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            About the project
          </h1>
          <div className="md:w-[62%] flex flex-col gap-3">
            <h3 className="text-lg sm:text-xl ">
              Every wall has a story to tell
            </h3>
            <p className="text-sm sm:text-base md:text-lg leading-7 font-normal">
              {project.description}
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-white flex flex-col md:flex-row md:justify-between gap-8"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Mission
          </h1>
          <div className="md:w-[62%]  flex flex-col gap-3">
            <p className="text-sm sm:text-base md:text-lg leading-7 font-normal">
              {project.mission}
            </p>
          </div>
        </motion.div>
      </section>
      <section className="relative h-[100%] sm:h-[100%] md:h-[100%] lg:h-screen bg-black flex items-center justify-center px-4  ">
        <motion.div>
          <img
            src={`http://localhost:5000/public/project-images/${project.images[1]}.jpg`}
            alt="Background"
            className="h-[100%] w-[100vw] sm:h-[100%] lg:h-[90vh] object-cover rounded-2xl shadow-xl shadow-gray-800"
          />
        </motion.div>
      </section>

      <section className="bg-black py-16 px-6 sm:px-10">
        <h2 className="text-white text-xl sm:text-2xl font-semibold mb-10 text-center flex items-center justify-center gap-3">
          <span className="text-cyan-400">⚙</span> Technology Stack
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-6 max-w-6xl mx-auto">
          {project.technologies.map((elem, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center space-y-2 p-6 rounded-xl 
                       bg-[#111827] shadow-md shadow-gray-800
                       transition-transform transform hover:scale-110 
                       hover:shadow-cyan-500/40 hover:shadow-lg hover:bg-[#1a2332]
                       cursor-pointer duration-300"
            >
              <h3 className="text-white font-medium">{elem.tech}</h3>
              <p className="text-gray-400 text-sm">{elem.des}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
export default ProjectInformation;
