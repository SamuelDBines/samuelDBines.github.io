import esbuild from 'esbuild';

esbuild
	.build({
		entryPoints: ['js/time.js'],
		bundle: true,
		outfile: 'dist/time.bundle.js',
		minify: true,
		logLevel: 'info',
		sourcemap: true,
		loader: { '.js': 'jsx' },
	})
	.catch(() => process.exit(1));
