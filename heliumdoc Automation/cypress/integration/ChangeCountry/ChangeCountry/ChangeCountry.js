import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps';


Given('User press on contry dorpdown menu', () => {
  cy.visit('https://www.heliumdoc.com')
  cy.get('.nav > .dropdown > #languageDropdown > #languageDropdownContainer > #languageDropdownSpan').click()
});

When('User choose country', () => {
  cy.get('.nav > .dropdown > .dropdown-menu > .nav-countries-list-item:nth-child(2) > .dropdown-item').click()
});

Then('Check if country was changed', () => {
  cy.url().should('include', '/uae/')
});

