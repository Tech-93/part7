describe('Blog App ', function() {

  beforeEach(function() {
    cy.request('POST', 'http://localhost:3003/api/testing/reset')
    const user = {
      name: 'Simon Westerlund',
      username: 'schrimp',
      password: 'salainen'
    }
    cy.request('POST', 'http://localhost:3003/api/users/', user)
    cy.visit('http://localhost:3000')
    cy.get('input:first')
      .type('schrimp')
    cy.get('input:last')
      .type('salainen')
    cy.contains('login')
      .click()
    cy.contains('Simon Westerlund has logged in')
  })

  it('name of the user is shown', function() {
    cy.contains('Simon Westerlund has logged in')
  })

  it('a new blog can be created, liked and commented on, and viewed at user', function() {
    cy.contains('new blog')
      .click()
    cy.get('#title')
      .type('the Newest Blog')
    cy.get('#author')
      .type('Simon')
    cy.get('#url')
      .type('testing.test')
    cy.get('[data-cy=submit]')
      .click()
    cy.contains('the Newest Blog Simon')
      .click()
    cy.get('input')
      .type('kommenterar')
    cy.contains('add comment')
      .click()
    cy.contains('kommenterar')
    cy.get('[data-cy=like]')
      .click()
    cy.contains('1 likes')
    
  })

  it('a new blog can be created and viewed at user', function() {
    cy.contains('new blog')
      .click()
    cy.get('#title')
      .type('the Newest Blog')
    cy.get('#author')
      .type('Simon')
    cy.get('#url')
      .type('testing.test')
    cy.get('[data-cy=submit]')
      .click()
    cy.contains('users')
      .click()
    cy.get('[data-cy=link]').contains('Simon Westerlund').click()
    cy.contains('the Newest Blog')
  })

})