describe('Details Page', () => {
  beforeEach(() => {
    cy.login();
    cy.visit('/home/list/details/1');
  });

  it('displays a title', () => {
    cy.contains('ion-title', 'Details 1');
  });

  it('contains a summary of the details', () => {
    cy.contains('You clicked on list item 1');
  });

  it('has a back button and returns to list', () => {
    cy.get('ion-back-button').click();
    cy.url().should('not.include', 'details');
  });
});
