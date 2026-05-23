import type { BioEntry } from './types';

export const bioEntries: BioEntry[] = [
	{
		year: '2026-Present',
		institution: 'Lila Sciences',
		logo: '/images/lila_sciences_logo.jpeg',
		role: 'AI Research Scientist II (2026.02 - Present)',
		description: `<p><span class="falling-research-text">Doing Research ...</span></p>`
	},
	{
		year: '2023-2026',
		institution: 'Imperial College London',
		logo: '/images/imperial_logo.png',
		role: 'Postdoc (2023.09 - 2026.02)',
		tags: ['Generative AI', 'MLFF', 'Agentic AI'],
		description: `
			<p class="mb-3">London, United Kingdom</p>

			<p class="mb-2 font-semibold">Main Projects</p>
			<ul class="list-disc list-inside mb-3 space-y-1">
				<li><a href="https://arxiv.org/abs/2511.07158v1" target="_blank" rel="noreferrer">Chemeleon2</a>: GRPO for generative modeling for materials (arXiv, 2025)</li>
					<li><a href="https://doi.org/10.1016/j.matt.2025.102203" target="_blank" rel="noreferrer">DAC-SIM</a>: A molecular simulation package integrating MLFFs in MOFs for DAC (Matter, 2025) - Featured in <a href="https://news.kaist.ac.kr/newsen/html/news/?mng_no=48410&mode=V" target="_blank" rel="noreferrer">KAIST News</a></li>
				<li><a href="https://www.nature.com/articles/s41467-025-59636-y" target="_blank" rel="noreferrer">Chemeleon</a>: A text-guided denoising diffusion model for materials generation (Nature Communications, 2025)</li>
			</ul>

			<p class="mb-2 font-semibold">Perspectives</p>
			<ul class="list-disc list-inside mb-3 space-y-1">
				<li><a href="https://www.nature.com/articles/s44160-026-01027-2" target="_blank" rel="noreferrer">Closing the synthesis gap in computational materials design</a> (Nature Synthesis, 2026)</li>
				<li><a href="https://www.cell.com/matter/fulltext/S2590-2385(25)00005-0" target="_blank" rel="noreferrer">Reflections on Europe academia as a postdoc</a> (Matter, 2025)</li>
				<li><a href="https://www.cell.com/matter/fulltext/S2590-2385(24)00242-X" target="_blank" rel="noreferrer">Has generative artificial intelligence solved inverse materials design?</a> (Matter, 2024)</li>
			</ul>

			<p class="mb-2 font-semibold">Awards</p>
			<ul class="list-disc list-inside mb-3 space-y-1">
				<li>Won 1st place in 2025 KRICT ChemDX Hackathon (<a href="https://github.com/hspark1212/MatSX" target="_blank" rel="noreferrer">MatSX</a>)</li>
				<li>Won 1st place in Global LLM Hackathon for Applications in Materials Science &amp; Chemistry (>1,000 participants from 23 countries; <a href="https://llmhackathon.github.io/awards/" target="_blank" rel="noreferrer">Awards</a>, <a href="https://www.imperial.ac.uk/news/271153/imperial-researchers-take-first-place-global/" target="_blank" rel="noreferrer">Article</a>)</li>
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
				<li><a href="https://www.nature.com/articles/s42256-023-00628-2" target="_blank" rel="noreferrer">MOFTransformer</a>: A multi-modal transformer for universal transfer learning in MOFs (Nature Machine Intelligence, 2023) - Featured in <a href="https://www.nature.com/articles/s43588-023-00447-w" target="_blank" rel="noreferrer">Nature Computational Science</a> and <a href="https://cen.acs.org/acs-news/acs-meeting-news/machine-learning-model-takes-MOF/101/i11" target="_blank" rel="noreferrer">C&amp;EN</a></li>
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
					<li><a href="https://pubs.rsc.org/en/content/articlelanding/2024/dd/d4dd00010b" target="_blank" rel="noreferrer">MOFReinforce</a>: RL framework for inverse design of MOFs for CO2 DAC application (Digital Discovery, 2024) - Featured in <a href="https://click.rsc.org/rsps/m/Rv13AaIyh7tOgozptw64eomEah6KqhHfaKpqrsB3G8Q" target="_blank" rel="noreferrer">Digital Discovery Highly Cited Authors 2024</a></li>
			</ul>

			<p class="mb-0"><strong>Advisor:</strong> <a href="https://www.epfl.ch/labs/lsmo/" target="_blank" rel="noreferrer">Berend Smit</a></p>
		`
	}
];
