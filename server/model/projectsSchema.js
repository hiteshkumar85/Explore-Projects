const { Schema, model } = require('mongoose');

const projectsSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true,
        enum: ["web", "mobile", "desktop", "other"]
    },
    Type: {
        type: String,
        required: true,
        enum: ["Web application", "Mobile application", "Desktop application", "Other"],
    }
}, {
    timestamps: true                        
});

const projectsModel = model('Projects', projectsSchema); 
module.exports = projectsModel;