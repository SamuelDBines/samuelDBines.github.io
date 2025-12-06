import esbuild from 'esbuild';

esbuild
	.build({
		entryPoints: ['js/time.js'],
		bundle: true,
		outfile: 'dist/time.bundle.js',
		minify: true,
		logLevel: 'info',
		sourcemap: true,
		format: 'esm',
		loader: {
			'.jsx': 'jsx',
			'.js': 'js',
		},
		jsxFactory: 'h',
		jsxFragment: 'Fragment',
	})
	.catch(() => process.exit(1));
