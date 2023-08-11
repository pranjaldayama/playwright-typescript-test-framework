# Playwright tests for https://demoqa.com website

# Quick Start

### Install Dependencies

`npm i`

### Install browsers

`npx playwright install`

# Run Tests

All the UI tests for demoqa.com are present in file : demoqa-web-ui.spec.ts
All the API tests for Book store application are present in file : store-book-api.spec.ts

`npx playwright test`

---


## About

## List all test titles

`npx playwright test --list`

---

## File Structure

    .
    ├── bin                     # Example CLI commands
    ├── node_modules            # Dependencies
    ├── src                     # Project
    │   ├── data                # Test data
    │   ├── models              # Classes representing functionality
    │   └── pages               # Page object classes of a demoqa website
    │   ├── requests            # request json files for api tests
    │   └── test                # Contains api and ui tests
    ├── package.json            # Project metadata
    ├── package-lock.json       # Describes dependency tree
    ├── playwright.config.ts    # Playwright test configuration
    └── README.md               # This file

## Test report

![Test resport](./result.png)