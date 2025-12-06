const ideas = [
	{
		title: 'Hosting AI on IBM Cloud',
		tag: 'AI Infrastructure',
		body: 'Exploring how to run inference workloads efficiently on IBM Cloud, comparing managed services versus Kubernetes-based deployments, and how this stacks up against other major providers.',
	},
	{
		title: 'Multi-cloud Kubernetes for AI',
		tag: 'Platform Engineering',
		body: 'Thinking about what parts of an AI platform should be portable across clouds (models, workflows, observability) and where it’s okay to lean into provider-specific features.',
	},
	{
		title: 'From README to Running',
		tag: 'Developer Experience',
		body: 'Idea for tooling that turns shared README instructions into runnable commands, helping teams standardise how they spin up services and environments.',
	},
];

let current = 0;

function renderIdea(index) {
	const idea = ideas[index];
	document.getElementById('idea-title').textContent = idea.title;
	document.getElementById('idea-tag').textContent = idea.tag;
	document.getElementById('idea-body').textContent = idea.body;
}

document.getElementById('prev-idea').addEventListener('click', () => {
	current = (current - 1 + ideas.length) % ideas.length;
	renderIdea(current);
});

document.getElementById('next-idea').addEventListener('click', () => {
	current = (current + 1) % ideas.length;
	renderIdea(current);
});

renderIdea(current);
