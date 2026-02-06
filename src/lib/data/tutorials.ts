import type { Tutorial } from './types';

type TutorialType = Tutorial['type'];

interface TutorialTypeMeta {
	label: string;
	action: string;
	icon: string;
}

export const tutorialTypeMeta: Record<TutorialType, TutorialTypeMeta> = {
	notebook: {
		label: 'Jupyter Notebook',
		action: 'Open in GitHub',
		icon: '📓'
	},
	colab: {
		label: 'Google Colab',
		action: 'Open in Colab',
		icon: '🔬'
	},
	docs: {
		label: 'Documentation',
		action: 'View Docs',
		icon: '📖'
	},
	github: {
		label: 'GitHub Repository',
		action: 'View on GitHub',
		icon: '🌐'
	}
};

export const tutorials: Tutorial[] = [
	{
		title: 'MLFF Tutorial',
		description: 'MACE fine-tuning for Metal-Organic Frameworks',
		type: 'notebook',
		url: 'https://github.com/hspark1212/MLFF_tutorial/blob/main/mace_finetuning.ipynb'
	},
	{
		title: 'Chemeleon Tutorial',
		description: 'Crystal discovery pipeline: SMACT, Chemeleon-DNG, MACE, Stability Analysis',
		type: 'colab',
		url: 'https://colab.research.google.com/github/hspark1212/chemeleon-dng/blob/main/tutorial.ipynb'
	},
	{
		title: 'Chemeleon2 Documentation',
		description: 'VAE, LDM, and RL modules for crystal structure generation with GRPO',
		type: 'docs',
		url: 'https://hspark1212.github.io/chemeleon2/'
	},
	{
		title: 'Crystal-GNN Benchmark',
		description: 'Benchmarking framework for Crystal GNNs: CGCNN, SCHNET, ALIGNN',
		type: 'github',
		url: 'https://github.com/hspark1212/crystal-gnn'
	}
];
