//const { it } = require("mocha")

describe('My Test Suite', function(){

    it('Open Website', function() {
        //Command for opening webiste
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        //setting the webiste size layout(setting by device size for testing)
        cy.viewport(1920, 1080)
        //Verify where you are (page-tittle)
        cy.title().should('eq', 'OrangeHRM')
        //Verify the text login 
        cy.get('.oxd-text--h5').should('have.text', 'Login')
        
    })

    it('fill Login Form', function() {
        cy.viewport(1920, 1080)
        //cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
        //if using script by name tag and placeholder
        cy.get('[name*="username"][placeholder="Username"]').type('Admin')
        //cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
        cy.get('[name*="password"][placeholder="Password"]').type('admin123{enter}')
        //cy.get('.oxd-button').click()
    })
})