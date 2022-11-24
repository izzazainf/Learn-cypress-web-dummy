describe('My Test Suite', function(){

    it('Open Website', function() {
        //Command for opening webiste
        cy.visit('https://www.saucedemo.com/')
        //setting the webiste size layout(setting by device size for testing)
        cy.viewport(1920, 1080)
        //Verify where you are (page-tittle)
        cy.title().should('eq', 'Swag Labs')
        //Verify the text login 
      
    })
    
    it('fill Login Form using problem user', function() {
        cy.viewport(1920, 1080)


        //This default get using ID

        cy.get('#user-name').type('inv-user')
        cy.get('#password').type('inv-pass')
        cy.get('#login-button').click()

        //this for verify by
        cy.get('[data-test *= "error"]').should('have.text' , 'Epic sadface: Username and password do not match any user in this service')
    })


    it('fill Login Form using normal scenario', function() {
        cy.viewport(1920, 1080)


        //This default get using ID
        cy.get('#user-name').clear()
        cy.get('#password').clear()

        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()

        //this for verify by
        cy.get('.title').should('have.text' , 'Products')
    })
    
})