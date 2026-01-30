import type { BioEntry } from './types';

export const bioEntries: BioEntry[] = [
	{
		year: 'current',
		institution: 'Imperial',
		logo: '/images/imperial_logo.png',
		role: 'Postdoc (2023.09 - current)',
		tags: ['Generative AI', 'Agentic AI', 'Reinforcement Learning', 'MLFF'],
		description: `
			<p class="mb-4">
				As a postdoctoral researcher in <a href="https://wmd-group.github.io/" target="_blank" rel="noreferrer">Professor Aron Walsh’s group</a> at Imperial College London, I explore the vast frontiers of materials science by integrating Generative AI, Machine Learning Force Fields (MLFFs), and Agentic AI. Put simply: if there is a way to teach computers to "dream up" and validate novel materials, I am likely working on it.
			</p>

			<p class="mb-2 font-semibold">Generative AI & Materials Design</p>
			<p class="mb-4">
				My core research focuses on pushing the boundaries of generative models for materials discovery:
			</p>
			<ul class="list-disc list-inside mb-4 space-y-1">
				<li><strong>Foundation:</strong> I began by mapping the chemical space of crystals (<a href="https://pubs.rsc.org/en/content/articlelanding/2024/fd/d4fd00063c" target="_blank" rel="noreferrer">Faraday Discussion</a>) and authored a critical review in <a href="https://www.cell.com/matter/fulltext/S2590-2385(24)00242-X" target="_blank" rel="noreferrer">Matter</a> evaluating whether generative AI has truly solved the inverse design challenge.</li>
				<li><strong>Chemeleon:</strong> This groundwork led to the development of Chemeleon (<a href="https://www.nature.com/articles/s41467-025-59636-y" target="_blank" rel="noreferrer">Nature Communications</a>), a text-guided generative model that allows researchers to describe desired crystal structures in plain language.</li>
				<li><strong>Chemeleon2:</strong> I have since advanced this framework by incorporating Reinforcement Learning (GRPO), enabling the model to actively navigate chemical space to meet specific functional targets (Currently In Review).</li>
			</ul>

			<p class="mb-2 font-semibold">High-Fidelity Simulations</p>
			<p class="mb-4">
				On the simulation front, I developed DAC-SIM, a Python package for CO₂ Direct Air Capture. In a recent <a href="https://doi.org/10.1016/j.matt.2025.102203" target="_blank" rel="noreferrer">Matter publication</a>, I demonstrated that fine-tuning MLFFs can achieve high-accuracy gas adsorption simulations for Metal-Organic Frameworks (MOFs), significantly reducing the gap between theory and observation.
			</p>

			<p class="mb-2 font-semibold">Bridging the Gap: From Modeling to Synthesis</p>
			<p class="mb-4">
				A major driver of my work is closing the loop between computational modeling and laboratory synthesis. I recently published a perspective (<a href="https://chemrxiv.org/engage/chemrxiv/article-details/687ce72323be8e43d628846f" target="_blank" rel="noreferrer">Currently In Review</a>) on bridging the "Sim-to-Real" gap, where I argue that Agentic AI is the key to automating and optimizing the transition from a predicted structure to a physical material.
			</p>

			<p class="mb-4">
				To put these theories into practice, I competed in and won first place in two major hackathons in 2025:
			</p>
			<ul class="list-disc list-inside mb-4 space-y-1">
				<li><strong>KRICT Hackathon:</strong> Developed <a href="https://github.com/hspark1212/MatSX" target="_blank" rel="noreferrer">MatSX</a>, a tool for identifying similar materials within an embedding space.</li>
				<li><strong><a href="https://www.imperial.ac.uk/news/271153/imperial-researchers-take-first-place-global/" target="_blank" rel="noreferrer">Global LLM Hackathon</a>:</strong> Outperformed 1,000+ participants to take the top prize with SKY, an AI agent designed for autonomous materials synthesis planning.</li>
			</ul>

			<p class="mb-4">
				On a more personal note, I recently shared my reflections on the academic journey and the job search process in an <a href="https://www.cell.com/matter/fulltext/S2590-2385(25)00005-0" target="_blank" rel="noreferrer">interview with Matter</a>.
			</p>
		`
	},
	{
		year: '2023',
		institution: 'KAIST',
		logo: '/images/kaist_logo.png',
		role: 'PhD (2020.03 - 2023.08)',
		tags: ['MOFTransformer', 'Transfer Learning', 'GCMC', 'DFT'],
		description: `
			<p class="mb-4">
				My PhD in <a href="https://molsim.kaist.ac.kr/" target="_blank" rel="noreferrer">Prof. Jihan Kim</a>'s lab at KAIST is where I learned to think computationally. I started from classical simulation (GCMC, MD, DFT), getting my hands dirty with the physics of materials. But somewhere along the way, I got hooked on what AI could do for this field. That shift led to MOFTransformer, a universal transfer learning model for metal-organic frameworks, published in <a href="https://www.nature.com/articles/s42256-023-00628-2" target="_blank" rel="noreferrer">Nature Machine Intelligence</a> (2023). It was exciting to see the work picked up by <a href="https://cen.acs.org/acs-news/acs-meeting-news/machine-learning-model-takes-MOF/101/i11" target="_blank" rel="noreferrer">Chemical &amp; Engineering News</a>.
			</p>
		`
	},
	{
		year: '2022',
		institution: 'EPFL',
		logo: '/images/epfl_logo.png',
		role: 'Visiting Researcher (2022.05 - 2022.10)',
		tags: ['Deep Reinforcement Learning', 'Inverse Design', 'Direct Air Capture'],
		description: `
			<p class="mb-4">
				During my PhD, I spent six months in <a href="https://www.epfl.ch/labs/lsmo/" target="_blank" rel="noreferrer">Prof. Berend Smit</a>'s lab at EPFL — a change of scenery that shaped how I think about inverse design. We built MOFReinforce (<a href="https://pubs.rsc.org/en/content/articlelanding/2024/dd/d4dd00010b" target="_blank" rel="noreferrer">Digital Discovery</a>), introducing a deep reinforcement learning framework that designs porous materials backwards: starting from a target property (CO₂ capture for Direct Air Capture) and working back to the structure.
			</p>
		`
	},
	{
		year: '2020',
		institution: 'KAIST',
		logo: '/images/kaist_logo.png',
		role: 'MS (2018.03 - 2020.02)',
		tags: ['Chemical Engineering'],
		description: "Master's in Chemical and Biomolecular Engineering"
	}
];
