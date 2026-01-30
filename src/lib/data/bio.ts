import type { BioEntry } from './types';

export const bioEntries: BioEntry[] = [
	{
		year: 'current',
		institution: 'Imperial',
		logo: '/images/imperial_logo.png',
		role: 'Postdoc (2023.09 - current)',
		description: `
			<p class="mb-4">
				I'm a Postdoc in <a href="https://wmd-group.github.io/" target="_blank" rel="noreferrer">Prof. Aron Walsh</a>'s team at Imperial College London. I like to call myself a "full-stack" computational materials designer — I combine Generative AI, Machine Learning Force Fields, and Agentic AI to explore the vast materials space. Basically, if there's a way to make computers dream up new materials, I'm probably working on it.
			</p>

			<p class="mb-4">
				My main thread here has been generative AI for crystal design. It started with mapping out the chemical space of crystals (<a href="https://pubs.rsc.org/en/content/articlelanding/2024/fd/d4fd00063c" target="_blank" rel="noreferrer">Faraday Discussion</a>) and a review asking whether generative AI has truly cracked inverse materials design (<a href="https://www.cell.com/matter/fulltext/S2590-2385(24)00242-X" target="_blank" rel="noreferrer">Matter</a>). That groundwork led to Chemeleon (<a href="https://www.nature.com/articles/s41467-025-59636-y" target="_blank" rel="noreferrer">Nature Communications</a>), a text-guided generative model that lets you describe the crystal you want in plain language. I then pushed it further with Chemeleon-v2, adding Reinforcement Learning (GRPO) so the model actively searches for diverse, novel structures. More recently, I've been tackling the synthesis gap — because generating a crystal on paper means nothing if you can't actually make it (<a href="https://chemrxiv.org/engage/chemrxiv/article-details/687ce72323be8e43d628846f" target="_blank" rel="noreferrer">ChemRxiv</a>).
			</p>

			<p class="mb-4">
				On the simulation side, I built DAC-SIM, a Python package for CO₂ Direct Air Capture simulation, and showed that fine-tuning MLFFs can achieve high-accuracy gas adsorption simulations for porous materials (<a href="https://doi.org/10.1016/j.matt.2025.102203" target="_blank" rel="noreferrer">Matter</a>).
			</p>

			<p class="mb-4">
				I also enjoy building things beyond papers. I won 1st place at the <a href="https://www.imperial.ac.uk/news/271153/imperial-researchers-take-first-place-global/" target="_blank" rel="noreferrer">Global LLM Hackathon</a> (1,000+ participants) with SKY, an AI agent for materials synthesis planning, and took the KRICT Hackathon with MatSX, a tool for visualizing embedding spaces. On a more personal note, I shared some reflections on the academic job search in an <a href="https://www.cell.com/matter/fulltext/S2590-2385(25)00005-0" target="_blank" rel="noreferrer">interview with Matter</a>.
			</p>
		`
	},
	{
		year: '2023',
		institution: 'KAIST',
		logo: '/images/kaist_logo.png',
		role: 'PhD (2020.03 - 2023.08)',
		description: `
			<p class="mb-4">
				My PhD in <a href="https://molsim.kaist.ac.kr/" target="_blank" rel="noreferrer">Prof. Jihan Kim</a>'s lab at KAIST is where I learned to think computationally. I started from classical simulation — GCMC, MD, DFT — getting my hands dirty with the physics of materials. But somewhere along the way, I got hooked on what AI could do for this field. That shift led to MOFTransformer, a universal transfer learning model for metal-organic frameworks, published in <a href="https://www.nature.com/articles/s42256-023-00628-2" target="_blank" rel="noreferrer">Nature Machine Intelligence</a> (2023). It was exciting to see the work picked up by <a href="https://cen.acs.org/acs-news/acs-meeting-news/machine-learning-model-takes-MOF/101/i11" target="_blank" rel="noreferrer">Chemical &amp; Engineering News</a>.
			</p>
		`
	},
	{
		year: '2022',
		institution: 'EPFL',
		logo: '/images/epfl_logo.png',
		role: 'Visiting Researcher (2022.05 - 2022.10)',
		description: `
			<p class="mb-4">
				During my PhD, I spent six months in <a href="https://www.epfl.ch/labs/lsmo/" target="_blank" rel="noreferrer">Prof. Berend Smit</a>'s lab at EPFL — a change of scenery that shaped how I think about inverse design. I built MOFReinforce (<a href="https://pubs.rsc.org/en/content/articlelanding/2024/dd/d4dd00010b" target="_blank" rel="noreferrer">Digital Discovery</a>), a deep reinforcement learning framework that designs materials backwards: starting from a target property (CO₂ capture for Direct Air Capture) and working back to the structure.
			</p>
		`
	},
	{
		year: '2020',
		institution: 'KAIST',
		logo: '/images/kaist_logo.png',
		role: 'MS (2018.03 - 2020.02)',
		description: "Master's in Chemical and Biomolecular Engineering"
	}
];
