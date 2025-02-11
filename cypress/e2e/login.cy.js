/// <reference types="Cypress" />

describe('Login Page', () => {
  beforeEach(() => {
    cy.visit("/qa/cypress/basics/login");
  });

  it('should successfully load the login page', () => {
    cy.contains('Login');
  });

  it.only('should find key elements using cy.get()', () => {
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
});
