# Test Plan

## Test Plan ID: CALC-TP-001

## Introduction

The test plan bellow outlines the testing approach for the calculator application. The main objectives of this test plan are to verify that the application meets the requirements, functions as expected, and is reliable. THe testing process will consist of multiple test levels including unit, integration, system, and acceptance testing.

## Goals / Objectives:

* Verify that the calculator application meets all specified requirements
* Verify that the calculator functions as expected and is reliable.
* Ensure that all identified defects are tracked and resolved before release.

## Constraints:

* The framework to be used are limited to Jest and Cypress.
* Testing will be conducted approximately 80 hours
* This test only cover the functionality of the calculator app not the backend systems of the application.

## References:

* Requirement document

## Test Items:

* Calculator application version 1.0

## Features to be tested

* Addition
* Substraction
* Multiplication
* Division

## Features not to be tested

* Backend systems not related to the calculator application


## Approach:
The following approach will be taken for testing the calculator application:

* Unit testing: Individual components and functions will be tested in seperate file and using jest for mathematical function, and cypress for UI.
* Integration testing: the interaction between components will be tested using cypress.
* System testing: The application will be tested using cypress.
* Acceptance testing: The application will be tested against the requirements to ensure it meets the needs of the end-users.

## Testing Level:

* Unit Testing
* Integration Testing
* System Testing
* Acceptance Testing

## Testing Types:

* Functional Testing

## Testing Methods

* Manual Testing
* Automated Testing

## Item Pass/Fail Criteria:

* Each test item will be considered passed if it meets the requirements and operates as expected.
* Each test item will be considered failed if it does not meet the requirements or does not operate as expected.

## Suspension Criteria and Resumption Requirements:

* Testing will be suspended if a major defect is found that requires significant changes to the code
* Testing will resum after the defect has been resolved and the application has been retested.

## Test deliverables:

* Test plan
* Test cases
* Test scripts
* Test data
* Defect reports
* Test reports

## Test Environment:

* Operating system: Windows 11
* Browser: Opera Web browser
* Hardware: Ryzen 9 5900X, 32 gb of RAM

## Estimate:

* Total testing effort: 80 Hours

## Assumptions and Depdendencies

* The development team will provide timely updates to the testing team on any changes to the application
* Test environment will be available and ready for testing.