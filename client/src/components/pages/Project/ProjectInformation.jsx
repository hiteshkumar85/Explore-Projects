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
            <img src={`https://explore-projects.onrender.com/public/project-images/${project.image}.jpg`} alt="" />
            <h1> project title : {project.title}</h1>
            <p> project description : {project.description}</p>
            <h2>project type : {project.Type}</h2>
            <h2>project category : {project.category}</h2>
        </div>
    )
}

export default ProjectInformation