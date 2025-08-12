import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";

// web
import Web_one from "../../../assets/project-image/Website_project_image/Web_one.jpg"
import Web_two from "../../../assets/project-image/Website_project_image/Web_two.jpg"
import Web_three from "../../../assets/project-image/Website_project_image/Web_three.jpg"

// app
import Mobile_one from "../../../assets/project-image/Mobile_project_image/Mobile_one.jpg"
import Mobile_two from "../../../assets/project-image/Mobile_project_image/Mobile_two.jpg"
import Mobile_three from "../../../assets/project-image/Mobile_project_image/Mobile_three.jpg"

// uiux
import UIUX_one from "../../../assets/project-image/UIUX_Design_project_image/UIUX_one.jpg"
import UIUX_two from "../../../assets/project-image/UIUX_Design_project_image/UIUX_two.jpg"

// Store all links category-wise
const categories = {
  all: [{ id: "all", label: "All" }],
  projects: [
    { id: "web", label: "Web Development" },
    { id: "app", label: "App Development" },
    { id: "uiux", label: "UI/UX Design" },
  ],
};

const projects = [
  // Web projects
  {
    id: 1,
    title: "E-commerce ",
    Type: "Web application",
    category: "web",
    img: Web_one,
  },
  {
    id: 2,
    title: "E-commerce ",
    Type: "Web application",
    category: "web",
    img: Web_two,
  },
  {
    id: 3,
    title: "E-commerce ",
    Type: "Web application",
    category: "web",
    img: Web_three,
  },

  // App projects
  {
    id: 4,
    title: "Mobile Banking ",
    Type: "Android application",
    category: "app",
    img: Mobile_one,
  },
  {
    id: 5,
    title: "Mobile Banking ",
    Type: "Android application",
    category: "app",
    img: Mobile_two,
  },
  {
    id: 6,
    title: "Mobile Banking ",
    Type: "Android application",
    category: "app",
    img: Mobile_three,
  },

  // // UI/UX projects
  {
    id: 7,
    title: " Dashboard",
    Type: "UI/UX Design",
    category: "uiux",
    img: UIUX_one,
  },
  {
    id: 8,
    title: " Dashboard ",
    Type: "UI/UX Design",
    category: "uiux",
    img: UIUX_two,
  },
];

function ProjectSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [menuOpen, setMenuOpen] = useState(false);

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  // Merge all categories for rendering
  const navLinks = [...categories.all, ...categories.projects];

  return (
    <>
      {/* Title */}
      <h1 className="text-4xl sm:text-5xl lg:text-[80px] pt-5 px-4 sm:px-6 text-[#786f80] bg-gradient-to-t from-[#060016] to-[#060010]">
        Portfolio
      </h1>

      <section className="min-h-screen w-full bg-gradient-to-t from-[#060016] to-[#060010] px-4 sm:px-6 lg:px-10 py-8">
        {/* Navigation Bar */}
        <div className="flex justify-between items-center border-b border-[#786f80] pb-2 mb-8 ">
          {/* Desktop Links */}
          <div className="hidden sm:flex gap-6">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => setActiveCategory(link.id)}
                className={`relative pb-1 text-base transition-colors duration-200
                  ${
                    activeCategory === link.id
                      ? "text-white"
                      : "text-[#a3aabe] hover:text-[#d1d5db] cursor-pointer"
                  }`}
              >
                {link.label}
                {/* Underline */}
                <span
                  className={` cursor-pointer absolute left-0 bottom-0 h-[2px] w-full bg-white transform transition-transform duration-300 
                    ${
                      activeCategory === link.id ? "scale-x-100" : "scale-x-0"
                    }`}
                ></span>
              </button>
            ))}
          </div>

          {/* Mobile Menu Icon */}
          <button
            className="sm:hidden text-white text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="sm:hidden flex flex-col gap-2 mb-6 border-b border-[#786f80] pb-4">
            {Object.entries(categories).map(([catName, catLinks]) => (
              <div key={catName}>
                {catLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => {
                      setActiveCategory(link.id);
                      setMenuOpen(false);
                    }}
                    className={`block w-full text-left  text-base transition-colors duration-200
                      ${
                        activeCategory === link.id
                          ? "text-white"
                          : "text-[#a3aabe] hover:text-[#d1d5db]"
                      }`}
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            ))}
          </div>
        )}

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div>
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-120 "
              />
              <h1 className="text-[#a3aabe]"> {project.Type}</h1>

              <Link
                to="/"
                className=" 
          //  text-amber-50   relative inline-block   after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-400 hover:after:w-full"
              >
                <h2 className="text-amber-50 text-[30px]">{project.title}</h2>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default ProjectSection;
