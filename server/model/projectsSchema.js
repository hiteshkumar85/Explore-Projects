const { Schema, model } = require('mongoose');

const projectsSchema = new Schema({
    title: {
        type: String, required: true
    },
    Type: {
        type: String, required: true,
        enum: ["Web application", "Mobile application", "Desktop application", "Other"],
    },
    category: {
        type: String, required: true,
        enum: ["web", "mobile", "desktop", "other"]
    },
    logo: {
        type: String, required: true
    },
    heading: {
        type: String, required: true
    },
    paragraph: {
        type: String, required: true
    },
    link: {
        type: String, required: true,
        default: "#"
    },
    images: {
        type: [String], required: true
    },
    mission: {
        type: String, required: true
    },
    technologies: {
        type: [String], required: true
    },
    description: {
        type: String, required: true
    },
}, {
    timestamps: true
});

const projectsModel = model('Projects', projectsSchema);
module.exports = projectsModel;