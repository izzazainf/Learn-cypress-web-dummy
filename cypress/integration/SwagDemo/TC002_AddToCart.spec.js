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

    it('fill Login Form using normal scenario', function() {
        cy.viewport(1920, 1080)
    })

    it('add product to cart', function() {
        cy.viewport(1920, 1080)

        


        //This default get using ID
        cy.get('#user-name').clear()
        cy.get('#password').clear()

        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()

        //this for verify by
        cy.get('.title').should('have.text' , 'Products')
        
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        //This for verifying if the text 
        cy.get('.shopping_cart_badge').should('have.text', '1')

        //var n = cy.get('#item_4_title_link > .inventory_item_name')

        //cy.get('.shopping_cart_link').click()

        //cy.get('.inventory_item_name').should('have.text', n)
          
    
    })
})