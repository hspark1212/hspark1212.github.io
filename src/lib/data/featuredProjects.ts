import type { FeaturedProject } from './types';

export const featuredProjects: FeaturedProject[] = [
	{
		id: 'chemeleon2',
		title:
			'Guiding Generative Models to Uncover Diverse and Novel Crystals via Reinforcement Learning',
		shortTitle: 'Chemeleon2',
		description: 'A reinforcement learning framework for crystal structure generation using GRPO',
		image: '/images/chemeleon2_toc.png',
		journal: 'arXiv preprint',
		year: 2025,
		url: 'https://arxiv.org/abs/2511.07158v1',
		github: 'https://github.com/hspark1212/chemeleon2'
	},
	{
		id: 'dac-sim',
		title:
			'Accelerating CO2 Direct Air Capture Screening for Metal-Organic Frameworks with a Transferable Machine Learning Force Field',
		shortTitle: 'DAC-SIM',
		description:
			'A molecular simulation package integrating MLFFs in MOFs for CO2 Direct Air Capture',
		image: '/images/dac_sim_toc.jpg',
		journal: 'Matter',
		year: 2025,
		url: 'https://doi.org/10.1016/j.matt.2025.102203',
		github: 'https://github.com/hspark1212/DAC-SIM'
	},
	{
		id: 'chemeleon',
		title: 'Exploration of crystal chemical space using text-guided generative artificial intelligence',
		shortTitle: 'Chemeleon',
		description: 'A text-guided generative AI model for crystal structures',
		image: '/images/chemeleon_toc.jpg',
		journal: 'Nature Communications',
		year: 2025,
		url: 'https://www.nature.com/articles/s41467-025-59636-y'
	},
	{
		id: 'global-llm-hackathon',
		title: 'Won 1st Place in Global LLM Hackathon for Applications in Materials Science & Chemistry',
		shortTitle: 'LLM Hackathon',
		description:
			'1st Place Winner at the Global LLM Hackathon for Applications in Materials Science & Chemistry',
		image: '/images/global_llm_hackathon.jpg',
		journal: 'Global LLM Hackathon',
		year: 2025,
		url: 'https://llmhackathon.github.io/awards/'
	},
	{
		id: 'moftransformer',
		title:
			'A Multi-modal Pre-training Transformer for Universal Transfer Learning in Metal-Organic Frameworks',
		shortTitle: 'MOFTransformer',
		description: 'A universal transfer learning model for metal-organic frameworks',
		image: '/images/MOFTransformer.jpg',
		journal: 'Nature Machine Intelligence',
		year: 2023,
		url: 'https://www.nature.com/articles/s42256-023-00628-2',
		github: 'https://github.com/hspark1212/MOFTransformer'
	}
];
