describe('Actions Fab', () => {
  beforeEach(() => {
    cy.seedEvents();
    cy.login();
    cy.visit('/');
    cy.get('ion-fab').as('fab');
    cy.get('[data-cy=fab-trash]').as('fabTrash');
    cy.get('[data-cy=fab-list]').as('fabList');
    // The events list has already been seeded with 1 event
    cy.contains('ion-badge', '1').as('fabCount');
  });

  it('opens when clicked', () => {
    cy.get('@fab').click();
    cy.get('@fabTrash').should('have.class', 'fab-button-show');
    cy.get('@fabList').should('have.class', 'fab-button-show');
  });

  it('opens and closes when clicked on', () => {
    cy.get('@fab').click();

    // Fab buttons should be exposed
    cy.get('@fabList').should('have.class', 'fab-button-show');
    cy.get('@fabTrash').should('have.class', 'fab-button-show');

    // Click the main fab button
    cy.get('@fab').click();

    // Fab buttons should be hidden
    cy.get('@fabTrash').not('.fab-button-show');
    cy.get('@fabList').not('.fab-button-show');
  });

  it('opens events modal when list icon clicked', () => {
    cy.get('@fab').click();
    cy.get('@fabList').click();
    cy.get('[data-cy="modal"]');
    // Delay long enough so modal is visible in test videos
    cy.wait(200);
  });

  it('closes and erases event list when track icon clicked', () => {
    cy.get('@fab')
      .contains('1')
      .click();

    // Fab buttons should be exposed
    cy.get('@fabList').should('have.class', 'fab-button-show');
    cy.get('@fabTrash').should('have.class', 'fab-button-show');

    // Click the exposed fab buttons
    cy.get('@fabTrash')
      .click()
      .then(() => {
        const events = JSON.parse(window.localStorage.getItem('events'));
        expect(events.count).to.equal(0);
        expect(events.events.length).to.equal(0);
      });

    // Fab buttons should be hidden
    cy.get('@fabTrash').not('.fab-button-show');
    cy.get('@fabList').not('.fab-button-show');

    // The Fab event counter should be reset
    cy.get('@fab').contains('0');
  });
});
