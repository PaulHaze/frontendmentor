import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

import icon from 'astro-icon';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
	output: 'server',
	adapter: cloudflare(),
	vite: {
		server: {
			watch: {
				include: ['**/custom.css'],
			},
		},
		resolve: {
			// Use react-dom/server.edge instead of react-dom/server.browser for React 19.
			// Without this, MessageChannel from node:worker_threads needs to be polyfilled.
			alias: import.meta.env.PROD && {
				'react-dom/server': 'react-dom/server.edge',
			},
		},
		plugins: [tailwindcss()],
	},
	integrations: [
		react(),
		icon({
			iconDir: 'src/assets/icons',
		}),
	],
});
