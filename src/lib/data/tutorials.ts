export interface Tutorial {
	title: string;
	description: string;
	type: 'notebook' | 'colab' | 'docs' | 'github';
	url: string;
	icon: string;
}

export const tutorials: Tutorial[] = [
	{
		title: 'MLFF Tutorial',
		description: 'MACE fine-tuning for Metal-Organic Frameworks',
		type: 'notebook',
		url: 'https://github.com/hspark1212/MLFF_tutorial/blob/main/mace_finetuning.ipynb',
		icon: 'notebook'
	},
	{
		title: 'Chemeleon Tutorial',
		description: 'Crystal discovery pipeline: SMACT, Chemeleon-DNG, MACE, Stability Analysis',
		type: 'colab',
		url: 'https://colab.research.google.com/github/hspark1212/chemeleon-dng/blob/main/tutorial.ipynb',
		icon: 'colab'
	},
	{
		title: 'Chemeleon2 Documentation',
		description: 'VAE, LDM, and RL modules for crystal structure generation with GRPO',
		type: 'docs',
		url: 'https://hspark1212.github.io/chemeleon2/',
		icon: 'docs'
	},
	{
		title: 'Crystal-GNN Benchmark',
		description: 'Benchmarking framework for Crystal GNNs: CGCNN, SCHNET, ALIGNN',
		type: 'github',
		url: 'https://github.com/hspark1212/crystal-gnn',
		icon: 'github'
	}
];
