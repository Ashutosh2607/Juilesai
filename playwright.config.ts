// playwright.config.ts
import { defineConfig } from '@playwright/test';

export default defineConfig({
        
  testDir: './tests',
  fullyParallel: true, 
  workers: 4,
  use: {
    trace: 'on', 
    screenshot: 'only-on-failure', // Captures screenshots only when a test fails
    headless: false, // Run tests in headed mode for visual feedback
    baseURL: 'https://demo.haroldwaste.com/',
    
  },
  reporter: [['html', { outputFolder: 'playwright-report' }]],
  projects: [
    {
      name: 'chromium',
      use: { browserName: 'chromium' },
    },
    
  ],
});
