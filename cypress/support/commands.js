// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

// import 'cypress-shadow-dom';

/**
 * Log into the app. In real world use, do NOT do this.
 * Instead authenticate with the server with `cy.request` and then store token in storage
 * See: https://youtu.be/5XQOK0v_YRE?t=1302
 */

Cypress.Commands.add('login', () => {
  cy.fixture('user').then(user => {
    window.localStorage.setItem(
      'user',
      JSON.stringify({
        firstName: user.firstName,
        lastName: user.lastName,
        uid: user.uid,
      }),
    );
  });
});

Cypress.Commands.add('seedEvents', () => {
  cy.fixture('events').then(events => {
    window.localStorage.setItem('events', JSON.stringify(events));
  });
});
