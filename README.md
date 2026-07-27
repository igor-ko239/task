# Negative & Edge Case

This project contains WebdriverIO tests for the SauceDemo negative and edge case flow.


## Task

"Negative & Edge Case" Flow

Focus: Error handling, form validation, and wait strategies.

Launch URL: [https://www.saucedemo.com/](https://www.saucedemo.com/)

UC-1 Form Validation (Negative Testing):

o Attempt to login with empty Username and Password. Verify error: "Username is required".

o Attempt to login with Username only. Verify error: "Password is required".

o Login with standard_user, go to Checkout, and attempt to continue without filling the postal code. Verify error message.

UC-2 Handling Latency (Wait Strategies):

o Login using performance_glitch_user (This user has a built-in delay).

o Ensure your framework handles the page load delay gracefully without hard-coded pause() or sleep()commands.

o Reset the App State via the Burger Menu.

o Logout.

Technical Requirements:

Tool: WebDriverIO.

Browsers: Firefox, Edge (Run in Parallel).

Pattern: Page Object Model (POM).

Locators: CSS Selectors.

Assertions: Use specific framework assertions (e.g., expect(elem).toBeExisting()).

Documentation: Add a README.md explaining how to run the tests and generate the report.

## Project structure

- `wdio.conf.js` — WebdriverIO configuration
- `src/pages/` — page objects for SauceDemo screens
- `src/specs/test.spec.js` — test scenarios

## Prerequisites

- Node.js installed
- `npm install` executed in project root
- Firefox and Edge installed locally

## Install dependencies

```bash
npm install
```

## Run tests

```bash
npm test
```

## Run tests only on firefox

```bash
npm run test:firefox
```

## Notes

- Uses Page Object Model (POM)
- Uses CSS selectors only
- Avoids hard-coded `pause()` and `sleep()` commands
- Waits for elements using WebdriverIO `waitFor*` commands
