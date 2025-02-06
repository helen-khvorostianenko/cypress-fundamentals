/// <reference types="Cypress" />

describe('Login Page', () => {
  it('should successfully load the login page', () => {
    cy.visit("https://newgencoding.com/qa/cypress/basics/login");
    cy.contains('Login');
  });
});
