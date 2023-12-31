/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
    await knex('projects').del();
    await knex('projects').insert([
        {
            company_name: 'Bluth Industries',
            duration: 10,
            description: 'Bluth Industries is currently engaged in building model homes for a new development in Vancouver. The project has an estimated duration of 10 months, and the company is seeking skilled professionals to join their team.',
            manager_id: 4,
            carpenters_needed: 5,
            carpenters_description: 'Carpenters with a strong background in framing are needed to contribute their expertise to the construction of quality homes. Join us to be a part of this exciting project!',
            electricians_needed: 3,
            electricians_description: 'We are in search of experienced electricians to ensure that the homes we build are equipped with top-notch electrical systems. Your skills will play a crucial role in our project\'s success.',
            plumbers_needed: 2,
            plumbers_description: 'Talented plumbers are required to contribute their expertise to the plumbing installations in our model homes. Join our team and be a key player in creating functional and modern living spaces.',
            operators_needed: 4,
            operators_description: 'Operators skilled in heavy machinery are essential for the success of our construction project. If you have experience and expertise in operating machinery, we invite you to join us in shaping the future of this development.',
            labours_needed: 3,
            labours_description: 'We are looking for dedicated and hardworking laborers to support various construction tasks on our project. Your contribution will be vital in ensuring the smooth progress of our construction activities.',
            safety_needed: 1,
            safety_description: 'Safety is our top priority, and we are seeking an experienced safety professional to oversee and implement safety protocols on-site. Join us in creating a secure and accident-free work environment.',
            geo_data: {
                type: 'Point',
                coordinates: [-123.1216, 49.2827]
            },
        },
        {
            company_name: 'Bluth Industries',
            duration: 45,
            description: 'Renovating commercial properties.',
            manager_id: 4,
            carpenters_needed: 8,
            carpenters_description: 'Carpenters with experience in various woodworking tasks.',
            electricians_needed: 5,
            electricians_description: 'Electricians skilled in handling both residential and commercial projects.',
            plumbers_needed: 3,
            plumbers_description: 'Plumbers experienced in both new installations and repairs.',
            operators_needed: 6,
            operators_description: 'Equipment operators proficient in handling heavy machinery.',
            labours_needed: 3,
            labours_description: 'General labours required for various construction tasks.',
            safety_needed: 2,
            safety_description: 'Safety personnel responsible for ensuring a secure working environment.',
            email: 'michael.bluth@example.com',
            telephone: '+1 (111) 555-1234',
            geo_data: {
                type: 'Point',
                coordinates: [-123.129, 49.2844]
            },
        },

        {
            company_name: 'Sitwell Real Estate',
            duration: 30,
            description: 'Building student apartments.',
            manager_id: 9,
            carpenters_needed: 6,
            carpenters_description: 'Carpenters specializing in constructing structures for student accommodations.',
            electricians_needed: 4,
            electricians_description: 'Electricians experienced in wiring and electrical systems for residential buildings.',
            plumbers_needed: 3,
            plumbers_description: 'Plumbers skilled in installing and maintaining plumbing systems for apartments.',
            operators_needed: 5,
            operators_description: 'Equipment operators proficient in managing construction machinery for apartment projects.',
            labours_needed: 3,
            labours_description: 'General labours required for various construction tasks related to apartment building.',
            safety_needed: 2,
            safety_description: 'Safety personnel responsible for ensuring a secure working environment on construction sites.',
            email: 'sally.sitwell@example.com',
            telephone: '+1 (111) 555-5678',
            geo_data: {
                type: 'Point',
                coordinates: [-123.234799, 49.260355]
            },
        },
        {
            company_name: 'Sitwell Real Estate',
            duration: 15,
            description: 'Renovating historic buildings, while thinking of the contemporary family in mind.',
            manager_id: 9,
            carpenters_needed: 7,
            carpenters_description: 'Carpenters skilled in restoring and renovating historic structures with a focus on contemporary living.',
            electricians_needed: 3,
            electricians_description: 'Electricians experienced in upgrading electrical systems for historic buildings with modern family needs.',
            plumbers_needed: 2,
            plumbers_description: 'Plumbers specializing in renovating plumbing systems for historic properties with consideration for modern families.',
            operators_needed: 4,
            operators_description: 'Equipment operators proficient in handling machinery for the renovation of historic buildings.',
            labours_needed: 6,
            labours_description: 'General labours required for various tasks related to renovating historic buildings, ensuring they meet contemporary standards.',
            safety_needed: 1,
            safety_description: 'Safety personnel responsible for ensuring a secure working environment during the renovation of historic properties.',
            email: 'sally.sitwell@example.com',
            telephone: '+1 (111) 555-5678',
            geo_data: {
                type: 'Point',
                coordinates: [-123.0, 49.200355]
            },
        },
        {
            company_name: 'Kitty Construction',
            duration: 50,
            description: 'Renovating YVR restaurants with a modern flair. Kitty Construction is known for transforming traditional restaurant spaces into contemporary dining experiences. They focus on incorporating sleek designs and cutting-edge technology to create vibrant and inviting atmospheres.',
            manager_id: 10,
            carpenters_needed: 10,
            carpenters_description: 'Carpenters with a passion for crafting modern and stylish interiors are sought after. Experience in working with innovative materials and attention to detail are essential.',
            electricians_needed: 6,
            electricians_description: 'Electricians skilled in implementing state-of-the-art lighting and electrical systems are in demand. Kitty Construction values professionals who can contribute to creating visually stunning and energy-efficient spaces.',
            plumbers_needed: 4,
            plumbers_description: 'Plumbers experienced in installing contemporary plumbing fixtures are needed. Knowledge of eco-friendly and water-efficient technologies is highly valued.',
            operators_needed: 8,
            operators_description: 'Experienced equipment operators proficient in handling modern construction machinery are essential. Kitty Construction is looking for individuals who can contribute to efficient and precise project execution.',
            labours_needed: 10,
            labours_description: 'General labours willing to work in a dynamic and creative construction environment are welcome. Kitty Construction values team members who are dedicated, hardworking, and enthusiastic.',
            safety_needed: 3,
            safety_description: 'Safety professionals with a keen eye for maintaining a secure work environment are crucial. Kitty Construction prioritizes the well-being of its team members and is committed to upholding the highest safety standards.',
            email: 'kitty.konstruction@example.com',
            telephone: '+1 (111) 555-9900',
            geo_data: {
                type: 'Point',
                coordinates: [-123.2, 49.2]
            },
        },
        {
            company_name: 'Kitty Construction',
            duration: 12,
            description: 'Constructing a riverside apartment complex. Kitty Construction is embarking on a project to build a modern residential complex along the picturesque riverside. The focus is on creating contemporary living spaces that harmonize with the natural surroundings.',
            manager_id: 10,
            carpenters_needed: 5,
            carpenters_description: 'Carpenters with expertise in crafting unique and functional living spaces are sought after. Kitty Construction values individuals who can bring innovative ideas to the design and execution of residential projects.',
            electricians_needed: 4,
            electricians_description: 'Electricians skilled in installing cutting-edge electrical systems for modern apartments are in demand. Kitty Construction is looking for professionals who can contribute to creating energy-efficient and technologically advanced living environments.',
            plumbers_needed: 2,
            plumbers_description: 'Plumbers experienced in installing modern plumbing systems for residential complexes are needed. Knowledge of the latest plumbing technologies and a commitment to quality workmanship are essential.',
            operators_needed: 3,
            operators_description: 'Equipment operators proficient in handling machinery for large-scale construction projects are crucial. Kitty Construction is seeking individuals who can contribute to the efficient and precise execution of the apartment complex construction.',
            labours_needed: 3,
            labours_description: 'General labours willing to work on a riverside construction site are welcome. Kitty Construction values team members who are dedicated, adaptable, and eager to contribute to the success of the project.',
            safety_needed: 1,
            safety_description: 'Safety professionals with expertise in overseeing construction projects in diverse environments are essential. Kitty Construction prioritizes the safety and well-being of its team members and is committed to maintaining a secure work environment.',
            email: 'kitty.konstruction@example.com',
            telephone: '+1 (111) 555-9900',
            geo_data: {
                type: 'Point',
                coordinates: [-123.093, 49.13]
            },
        }

    ]);

};