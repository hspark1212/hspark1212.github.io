import type { ResearchProject } from './types';

export const researchProjects: ResearchProject[] = [
	// Machine Learning
	{
		category: 'machine-learning',
		description:
			'Chemeleon 2: A reinforcement learning framework for crystal structure generation using GRPO',
		image: '/images/chemeleon2_toc.png',
		title:
			'Guiding Generative Models to Uncover Diverse and Novel Crystals via Reinforcement Learning',
		journal: 'arXiv preprint (2025)',
		url: 'https://arxiv.org/abs/2511.07158v1'
	},
	{
		category: 'machine-learning',
		description:
			'DAC-SIM: a molecular simulation package integrating machine learning force fields in MOFs for CO₂ Direct Air Capture',
		image: '/images/dac_sim_toc.jpg',
		title:
			'Accelerating CO₂ Direct Air Capture Screening for Metal-Organic Frameworks with a Transferable Machine Learning Force Field',
		journal: 'Matter (2025)',
		url: 'https://doi.org/10.1016/j.matt.2025.102203'
	},
	{
		category: 'machine-learning',
		description: 'Chemeleon: a text-guided generative AI model for crystal structures',
		image: '/images/chemeleon_toc.jpg',
		title:
			'Exploration of crystal chemical space using text-guided generative artificial intelligence',
		journal: 'Nature Communications (2025)',
		url: 'https://www.nature.com/articles/s41467-025-59636-y'
	},
	{
		category: 'machine-learning',
		description: 'Perspective on generative AI for inorganic crystal materials',
		image: '/images/generative_ai.jpg',
		title: 'Has generative artificial intelligence solved inverse materials design?',
		journal: 'Matter (2024)',
		url: 'https://www.cell.com/matter/fulltext/S2590-2385(24)00242-X'
	},
	{
		category: 'machine-learning',
		description: 'Mapping inorganic crystal chemical space',
		image: '/images/crystal_space.jpg',
		title: 'Mapping Inorganic Crystal Chemical Space',
		journal: 'Faraday Discussion (2024)',
		url: 'https://pubs.rsc.org/en/content/articlelanding/2024/fd/d4fd00063c'
	},
	{
		category: 'machine-learning',
		description:
			'Developing a reinforcement learning framework for inverse design of Metal-Organic Frameworks',
		image: '/images/MOFreinforce.jpg',
		title:
			'Inverse Design of Metal-Organic Frameworks for Direct Air Capture of CO₂ via Deep Reinforcement Learning',
		journal: 'Digital Discovery (2024)',
		url: 'https://pubs.rsc.org/en/content/articlelanding/2024/dd/d4dd00010b'
	},
	{
		category: 'machine-learning',
		description:
			'Developing a machine learning model to enable transfer learning in porous materials',
		image: '/images/PMTransformer.jpg',
		title:
			'Enhancing Structure–Property Relationships in Porous Materials through Transfer Learning and Cross-Material Few-Shot Learning',
		journal: 'ACS Applied Materials & Interfaces (2023)',
		url: 'https://pubs.acs.org/doi/full/10.1021/acsami.3c10323'
	},
	{
		category: 'machine-learning',
		description: 'Developing a Transformer neural network for universal transfer learning of MOFs',
		image: '/images/MOFTransformer.jpg',
		title:
			'A Multi-modal Pre-training Transformer for Universal Transfer Learning in Metal-Organic Frameworks',
		journal: 'Nature Machine Intelligence (2023)',
		url: 'https://www.nature.com/articles/s42256-023-00628-2'
	},
	{
		category: 'machine-learning',
		description:
			'Developing a joint machine-learning/rule-based algorithm to automatically extract synthesis conditions from MOF papers and predict synthesizability',
		image: '/images/textmining.jpg',
		title: 'Mining Insights on Metal–Organic Framework Synthesis from Scientific Literature Texts',
		journal: 'Journal of Chemical Information and Modeling (2022)',
		url: 'https://pubs.acs.org/doi/10.1021/acs.jcim.1c01297'
	},
	{
		category: 'machine-learning',
		description:
			'Developing a autoencoder neural network to improve initial guess of minimum energy path',
		image: '/images/autoencoder.jpg',
		title: 'Deep Learning-based Initial Guess for Minimum Energy Path Calculations',
		journal: 'Korean Journal of Chemical Engineering (2020)',
		url: 'https://link.springer.com/article/10.1007/s11814-020-0704-1'
	},

	// Molecular Simulation
	{
		category: 'molecular-simulation',
		description: '',
		image: '/images/vaspsol.gif',
		title:
			'Understanding Reaction Pathways in High Dielectric Electrolytes Using β-Mo₂C as a Catalyst for Li–CO₂ Batteries',
		journal: 'ACS Applied Materials & Interfaces (2020)',
		url: 'https://pubs.acs.org/doi/full/10.1021/acsami.0c06835'
	},
	{
		category: 'molecular-simulation',
		description: '',
		image: '/images/hea.gif',
		title: 'Polyelemental Nanoparticles as Catalysts for a Li–O₂ Battery',
		journal: 'ACS Nano (2021)',
		url: 'https://pubs.acs.org/doi/full/10.1021/acsnano.0c06528'
	},
	{
		category: 'molecular-simulation',
		description: '',
		image: '/images/mxene_conductor.gif',
		title: 'N–p-Conductor Transition of Gas Sensing Behaviors in Mo₂CT_x MXene',
		journal: 'ACS Sensors (2022)',
		url: 'https://pubs.acs.org/doi/full/10.1021/acssensors.2c00658'
	},

	// Material Design
	{
		category: 'material-design',
		description:
			'DFT simulation to calculate strain energy of interfacial stability for MOF@MOF structures',
		image: '/images/mofmof.webp',
		title: 'Computer-aided Discovery of Connected Metal-organic Frameworks',
		journal: 'Nature Communications (2019)',
		url: 'https://www.nature.com/articles/s41467-019-11629-4'
	},
	{
		category: 'material-design',
		description:
			'High-through screening that uses MOFs as substrates in order to theoretically allow hetero-epitaxial growth of 3D COFs',
		image: '/images/mofcof.webp',
		title: 'Computational Identification of Connected MOF@COF Materials',
		journal: 'Journal of Physical Chemistry C (2021)',
		url: 'https://pubs.acs.org/doi/10.1021/acs.jpcc.0c11551'
	}
];

export const molecularSimulationDescription =
	'Modeling various materials including MXene, MO₂C, graphene, MOF, and high-entropy alloy with DFT simulations by collaborating with experimental groups';
