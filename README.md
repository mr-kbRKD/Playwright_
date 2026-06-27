# Playwright Assignment — Saucedemo

Automated test suite for https://www.saucedemo.com using Playwright.

## Tech Stack
- Node.js v24
- Playwright v1.x
- TypeScript
- Chromium browser

## Setup Instructions

1. Clone the repository
   git clone https://github.com/mr-kbRKD/Playwright_.git
   cd blacknut-assignment-task

2. Install dependencies
   npm install

3. Install Playwright browsers
   npx playwright install

## Running Tests

Run all tests (headless):
   npx playwright test

Run with visible browser:
   npx playwright test --headed

Generate HTML report:
   npx playwright test --reporter=html

View HTML report:
   npx playwright show-report

## Test Scenarios

1. Successful login — logs in with valid credentials, asserts Products page visible
2. Failed login — attempts login with wrong credentials, asserts error message appears
3. Add to cart — logs in, adds first product to cart, asserts badge shows 1

## Project Structure

- tests/saucedemo.spec.ts — all 3 test scenarios
- playwright.config.ts — Playwright configuration
- mcp-demo/ — screenshots from Playwright MCP session
- playwright-report/ — HTML test report

## MCP Demo

The mcp-demo/ folder contains screenshots of Playwright automating saucedemo and claude response:
- screenshot-1-homepage.png — saucedemo login page
- screenshot-2-after-login.png — products page after successful login
- screenshot-3-cart.png — cart badge showing 1 after adding product
etc.

## Notes

- No waitForTimeout() used anywhere — smart waits only
- Tests run on Chromium only as per assignment requirements
- Screenshots captured automatically on test failure