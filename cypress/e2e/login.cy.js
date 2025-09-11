describe('Test-App Login', () => {
  it('logs in with correct credentials', () => {
    cy.visit('http://localhost:3000/login'); // local dev
    cy.get('input[placeholder="username"]').type('tomsmith');
    cy.get('input[placeholder="password"]').type('SuperSecretPassword!');
    cy.get('button[type="submit"]').click();
    cy.contains('You logged into a secure area!').should('exist');
  });

  it('shows error for bad login', () => {
    cy.visit('http://localhost:3000/login');
    cy.get('input[placeholder="username"]').type('wrong');
    cy.get('input[placeholder="password"]').type('bad');
    cy.get('button[type="submit"]').click();
    cy.contains('Invalid credentials!').should('exist');
  });
});
