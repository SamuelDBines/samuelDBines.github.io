import polka from 'polka';
import sirv from 'sirv';
const staticFiles = sirv('.', { dev: true });

const PORT = 9005;

polka()
	.use(staticFiles)
	.listen(PORT, (err) => {
		if (err) throw err;
		console.log(`> Running at http://localhost:${PORT}`);
	});
