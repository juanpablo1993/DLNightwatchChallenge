## December Labs Test Automation ##
This repository contains automated tests for the December Labs website using the Nightwatch framework with Cucumber. The tests are written in JavaScript and use the BDD (Behavior-Driven Development) approach.

The code imports the necessary functions from the @cucumber/cucumber package, including Given, Then, When, and Before, which are used to define the step definitions for the test scenarios.

The first step definition is for the "Given User open the December Labs page" step. It uses the browser.navigateTo() function to open the December Labs page.

The second step definition is for the "Given User click on Get In Touch button" step. It waits for the element with the ID #menu-item-846 to become visible using browser.waitForElementVisible(), maximizes the window with browser.maximizeWindow(), and then clicks on the element with the ID #menu-item-846 using browser.click().

The third step definition is for the "When User see the popup click on button Send" step. It waits for the element with the class .contact-form-heading.center to become visible, asserts that it is visible using browser.assert.visible(), asserts that its text is "Get In Touch" using browser.assert.textEquals(), and then clicks on the element with the ID #wpforms-submit-872 using browser.click().

The fourth step definition is for the "Then The border of fields turning red" step. It pauses for 1 second using browser.pause(), retrieves the CSS property border-bottom-color for each field (specified by their IDs) using browser.getCssProperty(), and asserts that the retrieved color value is equal to 'rgba(255, 0, 0, 1)', indicating that the border color is red.

The fifth step definition is for the "Then The border of fields is not red if is completed" step. It sets values for each field using browser.setValue(), clicks on the element with the class .contact-form-heading.center to remove focus from the fields, pauses for 1 second, retrieves the CSS property border-bottom-color for each field, and asserts that the retrieved color value is equal to 'rgba(0, 0, 0, 1)', indicating that the border color is black.

## Setup
1. Clone the repository to your local machine.
2. Install the required dependencies by running npm install.

## Running the Tests
To run the automated tests, follow these steps:

1. Open a terminal or command prompt.
2. Navigate to the project directory.
3. Execute the following command: npm test.

## Test Scenarios
The automated tests cover the following scenarios:

## Scenario 1: User Interaction
Given User opens the December Labs page.
Given User clicks on the "Get In Touch" button.
When User sees the popup and clicks on the "Send" button.
Then The border of the required fields turns red.

## Scenario 2: Field Validation
Given User opens the December Labs page.
And User clicks on the "Get In Touch" button.
When User sees the popup and clicks on the "Send" button.
Then The border of the required fields turns red.
And The border of the fields is not red if they are completed.

## Test Implementation Details
The automated tests are implemented using the Nightwatch framework with Cucumber. The test steps are defined using regular expressions and mapped to JavaScript functions using the Given, When, Then keywords provided by the @cucumber/cucumber package.

The Nightwatch API is used to interact with the web application. The tests perform actions such as navigating to the December Labs page, clicking on buttons, validating the presence of elements, and asserting CSS properties.

## Project Structure
The project has the following folder and file structure:

DLCHALLENGENIGHTWATCH/
  ├── tests/features/nightwash
  │   └──step_definitions
  │     └── decemberLabsSteps.js
  │   └── decemberLabs.feature
  ├── node_modules/
  ├── nightwatch.config.json
  ├── package-lock.json
  ├── package.json
  └── README.md
  
The tests folder contains the test files.
The node_modules folder contains the dependencies installed by NPM.
The nightwatch.config.json file defines the nightwatch's configurations.
The package.json file defines the project's dependencies and scripts.
The README.md file is the one you're currently reading.

## Potential Improvements
1. Implement test data handling using a tool like Faker to generate random values for form fields.
2. Add screenshots in case of test failures.
3. Integrate Nightwatch with reporting tools like Allure to generate detailed reports on test results.
4. Use Page Object Model (POM) to improve the structure and maintainability of the tests.
5. Implement better error handling and reporting for failed assertions.


