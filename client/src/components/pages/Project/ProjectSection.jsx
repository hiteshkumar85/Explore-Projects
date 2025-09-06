import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import axios from "axios";

const categories = {
  all: [{ id: "all", label: "All" }],
  projects: [
    { id: "web", label: "Web Development" },
    { id: "app", label: "App Development" },
    { id: "uiux", label: "UI/UX Design" },
  ],
};

function ProjectSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [menuOpen, setMenuOpen] = useState(false);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch projects from backend
  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchProjects = async () => {
      try {
        const res = await axios.get("/api/projects");
        setProjects(res.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching projects:", err);
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const navLinks = [...categories.all, ...categories.projects];

  return (
    <section className="min-h-screen w-full bg-gradient-to-t from-[#060016] to-[#060010] px-4 sm:px-6 lg:px-30 py-40">
      <div className="flex flex-col gap-3 mb-15">
        <h1 className="text-[25px] sm:text-[40px] text-[#ffffffc7]">Our projects</h1>
        <h2 className="text-[60px] sm:text-[84px] sm:leading-25 font-[600] text-[#ffffff]">
          Helping businesses achieve <br /> goals. Solving people’s problems.
        </h2>
      </div>

      {/* Navigation Bar */}
      <div className="flex justify-between items-center border-b border-[#786f80] pb-2 mb-8">
        {/* Desktop Links */}
        <div className="hidden sm:flex gap-6">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => setActiveCategory(link.id)}
              className={`relative pb-1 text-[18px] transition-colors duration-200 ${activeCategory === link.id
                ? "text-white"
                : "text-[#a3aabe] hover:text-[#d1d5db] cursor-pointer"
                }`}
            >
              {link.label}
              <span
                className={`absolute left-0 bottom-0 h-[2px] w-full bg-white transform transition-transform duration-300 ${activeCategory === link.id ? "scale-x-100" : "scale-x-0"
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
          {Object.entries(categories).map(([catName, catLinks]) =>
            catLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  setActiveCategory(link.id);
                  setMenuOpen(false);
                }}
                className={`block w-full text-left text-base transition-colors duration-200 ${activeCategory === link.id
                  ? "text-white"
                  : "text-[#a3aabe] hover:text-[#d1d5db]"
                  }`}
              >
                {link.label}
              </button>
            ))
          )}
        </div>
      )}

      {/* Projects Grid */}
      {loading ? (
        <p className="text-white text-center">Loading projects...</p>
      ) : (
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-15">
          {filteredProjects.map((project) => (
            <div
              key={project._id}
              className="bg-[#0f0a1a] rounded-[10px] overflow-hidden shadow-lg hover:shadow-2xl 
                       transition-transform duration-300 flex flex-col hover:-translate-y-2"
            >
              {/* Image Zoom Effect */}
              <div className="overflow-hidden">
                <img
                  src={`http://localhost:5000/public/project-images/${project.images[0]}.jpg`}
                  alt={project.title}
                  className="w-full h-55 object-cover transition-transform duration-500 ease-in-out hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="px-5 py-3 flex flex-col flex-grow">
                <span className="text-[#a3aabe] text-sm mb-0.5">
                  {project.Type}
                </span>
                <h2 className="text-white text-xl font-semibold mb-1">
                  {project.title}
                </h2>
                <div className="flex justify-between">
                  <p className="text-[#d1d5db] text-sm leading-relaxed">
                    view project details
                  </p>
                  <div>
                    <Link to={`project-information/?${project._id}`} className="text-white border-1 py-0.5 px-2 rounded-md mr-2 inline-block">
                      view
                    </Link>
                    <Link to='' className="text-white border-1 py-0.5 px-3 rounded-md inline-block">
                      live
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default ProjectSection;
