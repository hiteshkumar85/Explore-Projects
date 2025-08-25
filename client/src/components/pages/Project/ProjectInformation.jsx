import axios from "axios"
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom"

const ProjectInformation = () => {
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
        <div>
            <img src={`http://localhost:5000/public/project-images/${project.images[0]}.jpg`} alt="" />
            <img src={`http://localhost:5000/public/project-images/${project.images[1]}.jpg`} alt="" />
            <h1> project title : {project.title}</h1>
            <p> project description : {project.description}</p>
            <h2>project type : {project.Type}</h2>
            <h2>project category : {project.category}</h2>
            <h2>heading : {project.heading}</h2>
            <h2>paragraph: {project.paragraph}</h2>
            <h2>logo : {project.logo || 'logo'}</h2>
            <h3>mission: {project.mission}</h3>
            <h1>link: {project.link}</h1>
            <div className="flex gap-3">
                technology : {project.technologies.map((technology, i) => (
                    <>
                        <h1 key={i}>{technology.tech}</h1>
                        <h2>{technology.des}</h2>
                    </>
                ))}
            </div>
        </div>
    )
}

export default ProjectInformation