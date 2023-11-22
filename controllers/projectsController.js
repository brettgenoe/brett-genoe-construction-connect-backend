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
        res.status(500).json({ error: 'Internal Server Error from backside' });
    }
};

const createProject = async (req, res) => {
    const {
        company_name,
        duration,
        description,
        carpenters_needed,
        carpenters_description,
        electricians_needed,
        electricians_description,
        plumbers_needed,
        plumbers_description,
        operators_needed,
        operators_description,
        safety_needed,
        safety_description,
        labours_needed,
        labours_description,
        email,
        telephone,
        // geo_data: {
        //     coordinates: [0, 0]
        // }
    } = req.body;

    try {
        const newProject = await knex('projects').insert({
            company_name,
            duration,
            description,
            manager_id: req.user_id,
            carpenters_needed,
            carpenters_description,
            electricians_needed,
            electricians_description,
            plumbers_needed,
            plumbers_description,
            operators_needed,
            operators_description,
            labours_needed,
            labours_description,
            safety_needed,
            safety_description,
            email,
            telephone,
            geo_data: {
                type: "Point",
                coordinates: [0, 0]
            }
        });

        res.json({ project_id: newProject[0] });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error from backside' });
    }
};

module.exports = {
    getAllProjects,
    getProjectById,
    createProject,
};