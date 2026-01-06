import type { BioEntry } from './types';

export const bioEntries: BioEntry[] = [
	{
		year: 'current',
		institution: 'Imperial',
		logo: '/images/imperial_logo.png',
		role: 'Postdoc (2023.09 - current)',
		description: "Research associate in Prof. Aron Walsh's team at Imperial College London",
		highlights: [
			{
				description: 'chemeleon - Text-guided diffusion model for crystal structure generation',
				url: 'https://github.com/hspark1212/chemeleon',
				image: '/images/chemeleon_logo.jpg'
			},
			{
				description: 'MatScholar - AI-powered research assistant for materials science'
			}
		]
	},
	{
		year: '2023',
		institution: 'KAIST',
		logo: '/images/kaist_logo.png',
		role: 'PhD (2020.03 - 2023.08)',
		description: 'PhD in Chemical and Biomolecular Engineering under Prof. Jihan Kim',
		highlights: [
			{
				description: 'MOFTransformer - Universal transfer learning for porous materials',
				url: 'https://github.com/hspark1212/MOFTransformer',
				image: '/images/MOFTransformer.jpg'
			}
		]
	},
	{
		year: '2022',
		institution: 'EPFL',
		logo: '/images/epfl_logo.png',
		role: 'Visiting Researcher (2022.05 - 2022.10)',
		description: 'Visiting researcher with Prof. Berend Smit',
		highlights: [
			{
				description: 'MOFReinforce - Deep RL for inverse design of MOFs',
				url: 'https://pubs.rsc.org/en/content/articlelanding/2024/dd/d4dd00010b',
				image: '/images/MOFreinforce.jpg'
			}
		]
	},
	{
		year: '2020',
		institution: 'KAIST',
		logo: '/images/kaist_logo.png',
		role: 'MS (2018.03 - 2020.02)',
		description: "Master's in Chemical and Biomolecular Engineering"
	}
];
