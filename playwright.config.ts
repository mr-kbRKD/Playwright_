import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  
  
  use: {
    baseURL: 'https://www.saucedemo.com',
    screenshot: 'only-on-failure',
  },

  
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});