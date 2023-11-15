const knex = require('knex')(require("../knexfile.js"));

const getAllProjects = async (_req, res) => {
    try {
        const projects = await knex('projects');
        res.status(200).json(projects);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const getProjectById = async (req, res) => {
    const { id } = req.params;

    try {
        const project = await knex('projects').where('project_id', id).first();
        if (project) {
            res.json(project);
        } else {
            res.status(404).json({ error: 'Project not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const createProject = async (req, res) => {
    const { company_name, location, duration, description, carpenters_needed, electricians_needed, plumbers_needed, operators_needed, safety_needed } = req.body;

    try {
        const newProject = await knex('projects').insert({
            company_name,
            location,
            duration,
            description,
            manager_id: req.users.user_id,
            carpenters_needed,
            electricians_needed,
            plumbers_needed,
            operators_needed,
            safety_needed,
        });

        res.json({ project_id: newProject[0] });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = {
    getAllProjects,
    getProjectById,
    createProject,
};