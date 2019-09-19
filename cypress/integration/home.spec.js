describe('Home Page', () => {
  beforeEach(() => {
    cy.login();
    cy.visit('/');
    cy.get('ion-menu-button').as('menu-button');
  });

  it('defaults to home url', () => {
    cy.url().should('include', '/home');
  });

  it('greets the user', () => {
    cy.contains('ion-title', 'Home : Jane Doe');
  });

  it('is in split pane mode in desktop', () => {
    cy.viewport(1024, 1366);
    cy.get('ion-split-pane').should('have.class', 'split-pane-visible');
  });

  it('has menu button for default viewport', () => {
    cy.get('@menu-button').should('have.class', 'ion-activatable');
  });

  it('can open the menu', () => {
    cy.get('@menu-button').click();
    cy.get('ion-menu').should('have.class', 'show-menu');
  });

  it('increments the fab when button 1 clicked', () => {
    cy.contains('ion-button', 'Click Me!')
      .click()
      .then(() => {
        const events = JSON.parse(window.localStorage.getItem('events'));
        expect(events.count).to.equal(1);
        expect(events.events[0].event).to.equal('button-one-clicked');
      });
  });

  it('increments the fab when button 2 clicked', () => {
    cy.contains('ion-button', 'Click Me Too!')
      .click()
      .then(() => {
        const events = JSON.parse(window.localStorage.getItem('events'));
        expect(events.count).to.equal(1);
        expect(events.events[0].event).to.equal('button-two-clicked');
      });
  });
});
