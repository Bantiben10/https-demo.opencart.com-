import { BasePage } from "./BasePage"

class NewRegistration {

    constructor() {

        this.firstname = '#input-firstname'
        this.lastname ='#input-lastname'
        this.email = '#input-email'
        this.password = '#input-password'
        this.noRadio = '#input-newsletter-no'
        this.agreeChkbox = 'input[name="agree"]'
    
    }

     RegUser() {
        cy.contains('My Account').click()
        cy.contains('Register').click()
        cy.get(this.firstname).type(Cypress.env('FirstName'))
        cy.get(this.lastname).type(Cypress.env('LastName'))
        cy.get(this.email).type(Cypress.env('username'))
        cy.get(this.password).type(Cypress.env('password'))
        cy.get(this.noRadio).click()
        cy.get(this.agreeChkbox).click()
        BasePage.submit()
    
    }  
    



}

export default new NewRegistration()



