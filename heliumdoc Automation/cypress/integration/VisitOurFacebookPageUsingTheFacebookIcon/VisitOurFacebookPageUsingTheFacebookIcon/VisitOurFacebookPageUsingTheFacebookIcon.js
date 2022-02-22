import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps';


Given('User press on Facebook', () => {
  cy.visit('https://www.heliumdoc.com')
  cy.get('.footer-content > .footer-left > .footer-social-media > .footer-social-media-link:nth-child(1) > .meddy-icon').click()
});

Then('Facebook should be opend', () => {
  cy.url().should('include', 'facebook.com/heliumdocqatar/')
});

