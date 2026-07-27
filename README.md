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

- test/specs/sauceDemo.spec.js — main test cases
- test/pageobjects/LoginPage.js — login page object
- test/pageobjects/InventoryPage.js — inventory and menu page object
- test/pageobjects/CheckoutPage.js — checkout page object
- wdio.conf.js — WebdriverIO configuration for Firefox and Edge

## Prerequisites

Install the following on the machine before running the suite:

- Node.js and npm
- Firefox and Microsoft Edge browsers
- Selenium standalone service and browser drivers

## Manual setup

Once npm access is available, install dependencies from the project folder:

```bash
npm install
```

## Run the tests

Run the full suite:

```bash
npm test
```

Run only Firefox:

```bash
npm run test:firefox
```

Run only Edge:

```bash
npm run test:edge
```

## Generate a report

The configuration writes JUnit XML reports to the reports folder.

```bash
npm run report
```
