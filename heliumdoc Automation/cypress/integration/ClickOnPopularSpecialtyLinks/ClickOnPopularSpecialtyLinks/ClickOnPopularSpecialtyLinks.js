import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps';


Given('User press on Specialities', () => {
  cy.visit('https://www.heliumdoc.com')
  cy.get('.container > .collapse > .nav > .dropdown > #specDropdown').click()});

When('User choose Speciality', () => {
  cy.get('.dropdown > .dropdown-menu > .row > .col-xs-12:nth-child(2) > .dropdown-subheader:nth-child(4)').click()
});

Then('Check if Speciality is open', () => {
  cy.url().should('include', '/ophthalmologist')

});

