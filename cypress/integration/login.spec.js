describe('Login', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  it('greets with login modal', () => {
    cy.contains('ion-title', 'Login');
  });

  it('requires first and last name', () => {
    cy.contains('ion-button', 'Login').click();
    cy.contains('Please enter your first and last name');
  });

  it('logs valid user in', () => {
    cy.fixture('user.json').then(user => {
      cy.get('input[name="firstName"]').type(user.firstName);
      cy.get('input[name="lastName"]').type(user.lastName);
      cy.contains('ion-button', 'Login').click();
      cy.get('iodddn-modal').should('not.exist');
      cy.url().should('include', '/home');
    });
  });
});
