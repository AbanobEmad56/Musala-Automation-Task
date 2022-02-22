import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps';



Given('User choose speciality', () => {
  cy.visit('https://www.heliumdoc.com')
  cy.get('#index > #homepageSpecialities > .homepage-form > .button-overlay-wrapper > #specTrigger').click()
  cy.get('.button-overlay-wrapper > #specOverlay > .generic-overlay > .overlay-options-container > .overlay-option:nth-child(3)').click() 
});

When('User choose area', () => {
  cy.get('#homepageSpecialities > .homepage-form > .button-overlay-wrapper > .ng-scope > #areaTrigger').click()
  cy.get('.ng-scope > #areaOverlay > .generic-overlay > .overlay-options-container > .overlay-option:nth-child(4)').click()   });

Then('Press search', () => { 
cy.get('.ng-scope > #index > #homepageSpecialities > .homepage-form > #homepageSearchButton').click()});

