import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps';


Given('User press on search field', () => {
  cy.visit('https://www.heliumdoc.com')
       cy.get('.nav-item > .ng-isolate-scope > #top-overlay-search-container > .search-wrapper > #search-text-desk').click()
});

When('User tybe the name', () => {
 cy.get('.nav-item > .ng-isolate-scope > #top-overlay-search-container > .search-wrapper > #search-text-desk').type('Yasser nafie')
 });

Then('User press search', () => { 
  cy.get('#search-text-desk-container > .ng-scope > #search-text-desk-item-0 > .result-info > .result-header-wrapper').click()
});
