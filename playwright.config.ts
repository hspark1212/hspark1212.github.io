import { defineConfig } from '@playwright/test';

export default defineConfig({
	webServer: {
		command: 'npm run build && npm run preview -- --host 127.0.0.1 --port 4174',
		url: 'http://127.0.0.1:4174',
		reuseExistingServer: false
	},
	testDir: 'e2e',
	use: {
		baseURL: 'http://127.0.0.1:4174'
	}
});
