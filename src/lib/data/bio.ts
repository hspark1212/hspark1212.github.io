import type { BioEntry } from './types';

export const bioEntries: BioEntry[] = [
	{
		year: '2023-Present',
		institution: 'Imperial College London',
		logo: '/images/imperial_logo.png',
		role: 'Postdoc (2023.09 - Present)',
		tags: ['Generative AI', 'MLFF', 'Agentic AI'],
		description: `
			<p class="mb-3">London, United Kingdom</p>

			<p class="mb-2 font-semibold">Main Projects</p>
			<ul class="list-disc list-inside mb-3 space-y-1">
				<li><a href="https://arxiv.org/abs/2511.07158v1" target="_blank" rel="noreferrer">Chemeleon2</a>: GRPO for generative modeling for materials (arXiv, 2025)</li>
				<li><a href="https://doi.org/10.1016/j.matt.2025.102203" target="_blank" rel="noreferrer">DAC-SIM</a>: A molecular simulation package integrating MLFFs in MOFs for DAC (Matter, 2025)</li>
				<li><a href="https://www.nature.com/articles/s41467-025-59636-y" target="_blank" rel="noreferrer">Chemeleon</a>: A text-guided denoising diffusion model for materials generation (Nature Communications, 2025)</li>
			</ul>

			<p class="mb-2 font-semibold">Perspectives</p>
			<ul class="list-disc list-inside mb-3 space-y-1">
				<li><a href="https://chemrxiv.org/engage/chemrxiv/article-details/68ed4bffdfd0d042d1536798" target="_blank" rel="noreferrer">Closing the synthesis gap in computational materials design</a> (arXiv, 2025)</li>
				<li><a href="https://www.cell.com/matter/fulltext/S2590-2385(25)00005-0" target="_blank" rel="noreferrer">Reflections on Europe academia as a postdoc</a> (Matter, 2025)</li>
				<li><a href="https://www.cell.com/matter/fulltext/S2590-2385(24)00242-X" target="_blank" rel="noreferrer">Has generative artificial intelligence solved inverse materials design?</a> (Matter, 2024)</li>
			</ul>

			<p class="mb-2 font-semibold">Awards</p>
			<ul class="list-disc list-inside mb-3 space-y-1">
				<li>Won 1st place in 2025 KRICT ChemDX Hackathon (<a href="https://github.com/hspark1212/MatSX" target="_blank" rel="noreferrer">MatSX</a>)</li>
				<li>Won 1st place in Global LLM Hackathon for Applications in Materials Science &amp; Chemistry (<a href="https://llmhackathon.github.io/awards/" target="_blank" rel="noreferrer">Awards</a>)</li>
			</ul>

			<p class="mb-0"><strong>Advisor:</strong> <a href="https://wmd-group.github.io/" target="_blank" rel="noreferrer">Aron Walsh</a></p>
		`
	},
	{
		year: '2020-2023',
		institution: 'Korea Advanced Institute of Science and Technology (KAIST)',
		logo: '/images/kaist_logo.png',
		role: 'PhD (2020.03 - 2023.08)',
		tags: ['MOFTransformer', 'Transfer Learning', 'MOFs'],
		description: `
			<p class="mb-3">Daejeon, South Korea</p>

			<p class="mb-2 font-semibold">Main Project</p>
			<ul class="list-disc list-inside mb-3 space-y-1">
				<li><a href="https://www.nature.com/articles/s42256-023-00628-2" target="_blank" rel="noreferrer">MOFTransformer</a>: A multi-modal transformer for universal transfer learning in MOFs (Nature Machine Intelligence, 2023)</li>
			</ul>

			<p class="mb-0"><strong>Advisor:</strong> <a href="https://molsim.kaist.ac.kr/" target="_blank" rel="noreferrer">Jihan Kim</a></p>
		`
	},
	{
		year: '2022',
		institution: 'EPFL',
		logo: '/images/epfl_logo.png',
		role: 'Visiting Researcher (2022.05 - 2022.10)',
		tags: ['Reinforcement Learning', 'Inverse Design', 'MOFs'],
		description: `
			<p class="mb-3">Sion, Switzerland</p>

			<p class="mb-2 font-semibold">Main Project</p>
			<ul class="list-disc list-inside mb-3 space-y-1">
				<li><a href="https://pubs.rsc.org/en/content/articlelanding/2024/dd/d4dd00010b" target="_blank" rel="noreferrer">MOFReinforce</a>: RL framework for inverse design of MOFs for CO2 DAC application (Digital Discovery, 2024)</li>
			</ul>

			<p class="mb-0"><strong>Advisor:</strong> <a href="https://www.epfl.ch/labs/lsmo/" target="_blank" rel="noreferrer">Berend Smit</a></p>
		`
	}
];
