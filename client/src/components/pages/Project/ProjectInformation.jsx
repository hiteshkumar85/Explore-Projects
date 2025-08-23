import axios from "axios";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";

const ProjectInformation = () => {
  const { scrollYProgress } = useScroll();
  // Image zoom while scrolling Page 2
  const scale = useTransform(scrollYProgress, [0.3, 0.6], [1, 1.2]);

  const id = useLocation().search.split("?")[1];
  const [project, setProject] = useState(null);
  useEffect(() => {
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
    // <div>
    //     <img src={`http://localhost:5000/public/project-images/${project.image}.jpg`} alt="" />
    //     <h1> project title : {project.title}</h1>
    //     <p> project description : {project.description}</p>
    //     <h2>project type : {project.Type}</h2>
    //     <h2>project category : {project.category}</h2>
    // </div>

    <>
      {/* Page 1 */}
      <section className="page1 relative z-9 bg-[#000000] h-[88vh] flex items-center justify-center text-center">
        <motion.div
          className="m-auto max-w-[1080px] text-white"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}

        >
          <h1 className="text-3xl">Title</h1>
          <h1 className="text-[51px] font-bold mb-4">
            Lonely Walls: Fine art marketplace and artist networking app
          </h1>
          <p className="text-lg leading-relaxed px-60">
            Lonely Walls is a Seattle-based startup that came up with a mobile
            app idea to help local artists find venues to exhibit their art.
          </p>
        </motion.div>
      </section>

      {/* Page 2 with FIXED image */}
      <section className="relative h-[100vh]">
        <motion.div
          className="fixed top-0 left-0 h-full w-full -z-10" 
          style={{ scale }}
        >
          <img
            src={`http://localhost:5000/public/project-images/${project.image}.jpg`}
            alt="Background"
            className="h-[100vh] w-[100vw] object-cover"
          />
        </motion.div>
      </section>

      {/* Page 3 overlapping the fixed image */}
      <section className="relative z-20 h-[85vh] bg-[#000] flex items-center justify-center flex-col gap-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-white text-4xl font-bold flex justify-between  px-50 "
        >
          <h1>About the project</h1>
          <div className="w-[62%]  flex flex-col gap-3 ">
            <h3>Every wall has a story to tell</h3>
            <p className="text-[18px] leading-7 w-[100%] font-[400]">
              The idea of an art platform that would directly connect artists
              with collectors and business owners came to Charles Doyon after
              years in the photography and tech industry. Lonely Walls became a
              bold project that touched upon a business model few did.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-white text-4xl font-bold flex justify-between  px-50 "
        >
          <h1>Mission</h1>
          <div className="w-[62%]  flex flex-col gap-3 ">
            <p className="text-[18px] leading-7 w-[100%] font-[400]">
              Lonely Walls believes art should be for everyone and that artists
              deserve to make a living wage from their creations. With that in
              mind, Lonely Walls has a mission to completely disrupt the art
              market and flip it on its head. Any public space becomes an art
              venue.
            </p>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default ProjectInformation;
