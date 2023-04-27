import Registration  from "../PageObjectModel/RegistationPage.js"



describe('Registation of user', () => {
  it('Registered  Successfully', () => {
    cy.visit(Cypress.env('url'))
    Registration.RegUser()

  })
})