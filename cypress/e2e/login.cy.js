/// <reference types="Cypress" />

describe('Login Page', () => {
  beforeEach(() => {
    cy.visit("/qa/cypress/basics/login");
  });

  it('should successfully load the login page', () => {
    cy.contains('Login');
  });

  it('should find key elements using cy.get()', () => {
    cy.get('form');
    cy.get('input');
    cy.get('button');

    cy.get('#username');
    cy.get('#password');
    cy.get('.form-control');
    cy.get('input[name="username"]');
    cy.get('input[name="password"]');

    cy.get('form#login-form');
    cy.get('button[type="submit"]');

    cy.get('button').contains('Login');
    cy.get('h3').contains('Login');
  });

  // Demonstration of various assertions:
  it.only('should validate the login form elements', () => {
    // Check visibility
    cy.get('h3').should('be.visible');
    cy.get('form#login-form').should('be.visible');
    cy.get('button[type="submit"]').should('be.visible');

    // Check existence
    cy.get('div#error-message').should('exist');

    // Check text content
    cy.get('h3').should('have.text', 'Login');
    cy.get('button[type="submit"]').should('have.text', 'Login');

    // Check attributes
    cy.get('input#username')
      .should('have.attr', 'placeholder', 'Enter your username');
    cy.get('input#password')
      .should('have.attr', 'placeholder', 'Enter your password');

    // Check class presence
    cy.get('button[type="submit"]')
      .should('have.class', 'btn-primary')
      .and('have.class', 'w-100');

    // Chaining assertions
    cy.get('button[type="submit"]')
      .should('be.visible')
      .and('have.text', 'Login')
      .and('not.be.disabled');
  });  
});
