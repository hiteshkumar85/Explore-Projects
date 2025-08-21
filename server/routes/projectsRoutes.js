const express = require('express');
const Projects = require('../model/projectsSchema');
const router = express.Router();

router.get('/projects', async (req, res) => {   
    try {
        const projects = await Projects.find();
        res.status(200).json(projects);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching projects', error });
    }
});

router.get('/projectInformation/:id', async (req, res) => {
    const { id } = req.params;  
    try {
        const project = await Projects.findById(id);
        if (!project) {
            return res.status(404).json({ message: 'Project not found' });
        }
        res.status(200).json(project);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching project information', error });
    }
});


module.exports = router;