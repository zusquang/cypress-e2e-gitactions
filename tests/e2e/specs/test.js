// https://docs.cypress.io/api/introduction/api.html

describe('My First Test', () => {
  it('Visits the app root url', () => {
    cy.visit('/')
    cy.get('#custom-validation_pass').clear().type('12345678')
    cy.get('#custom-validation_checkPass').clear().type('12345678')
    cy.get('#custom-validation_age').clear().type('18')
    cy.get('#submit-form').click()
    cy.window().then(function(promptelement){
      cy.stub(promptelement, "alert").returns("Hello");
    });
    cy.wait(1000)
    cy.get('#reset-form').click()
  })
})
