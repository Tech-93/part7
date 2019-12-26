describe('Blog App ', function() {

  beforeEach(function() {
    cy.visit('http://localhost:3000')
  })

  it('user can login', function () {
    cy.visit('http://localhost:3000')
    cy.get('input:first')
      .type('fartface')
    cy.get('input:last')
      .type('poobrain')
    cy.contains('login')
      .click()
    cy.contains('Amanda Dabrowski has logged in')
  })

})