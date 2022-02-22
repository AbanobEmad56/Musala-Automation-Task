import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps';


Given('User press on Blog Button at footer', () => {
  cy.visit('https://www.heliumdoc.com')
  cy.get('.footer-content > .footer-right > .col-xs-12:nth-child(2) > .footer-right-item:nth-child(1) > .footer-right-item-body:nth-child(3)').click()
});

When(/^User check the blogs/, () => {
  cy.get('.inner > .post-feed > .tag-best-dermatologists > .post-card-image-link > .post-card-image').click()
   });

Then(/^User open any blog$/, () => { 
  cy.visit('https://hakeem.heliumdoc.com/5-best-dermatologically-recommended-spring-time-skincare-tips/')
});


