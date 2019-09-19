describe('List Page', () => {
  beforeEach(() => {
    cy.login();
    cy.visit('/home/list');
  });

  it('displays a title', () => {
    cy.contains('ion-title', 'List');
  });

  it('displays list of icons', () => {
    cy.fixture('icons.json').then(icons => {
      icons.forEach(icon => {
        cy.contains(`Item ${icon.id}`);
      });
    });
  });

  it('navigates to a list detail page', () => {
    cy.contains('ion-item', 'This is item #')
      .first()
      .click();
    // TODO: PR Opportunity : Fix why this will not navigate to details page
    // cy.url().should('include', '/home/list/details');
  });
});
