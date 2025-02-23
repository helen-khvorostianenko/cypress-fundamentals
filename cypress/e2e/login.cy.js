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
  it('should validate the login form elements', () => {
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
  
  it('comparing .get() and .find()', () => {
    // Introducing the .find() Command
    cy.get('form').find('div');

    // Global Search with .get()
    // cy.get('form').get('div');
    cy.get('form#login-form').get('div').contains('Login');
    cy.get('form#login-form').get('div').contains('Username');
    
    // Contextual Search with .find()
    // cy.get('form#login-form').find('div').contains('Login'); // This will fail
    // cy.get('form#login-form').find('div').contains('Username');
    
    cy.get('form#login-form').find('div')
      .should('have.length', 2)
      .and('not.contain', 'Login')
      .and('contain', 'Username');

    // Comparing element selection with the CSS selector 
    cy.get('form#login-form div');
    cy.get('form#login-form').find('div');
  });

  it.only('should accept input and submit login form', () => {
    // Practicing .type() and .clear()
    // cy.get('#username')
    //   .type('demo')
    //   .type('demoPassword');

    // cy.get('#username').clear();
    cy.get('#username').type('demo');
    cy.get('#password').type('demoPassword');

    // Practicing .click()
    cy.get('form#login-form')
      .find('button[type="submit"]')
      .click();

    // Using command chaining
  });
});
