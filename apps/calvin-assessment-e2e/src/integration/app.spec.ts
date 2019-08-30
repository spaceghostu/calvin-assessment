import { getGreeting } from '../support/app.po';

describe('calvin-assessment', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to calvin-assessment!');
  });
});
