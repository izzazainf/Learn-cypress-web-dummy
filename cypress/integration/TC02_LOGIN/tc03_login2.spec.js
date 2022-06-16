describe('MyTestSuite', function() 
{

    beforeEach("Load", function()
    {
        cy.fixture("data_login").then((data)=>{
            this.key = data
        })
    })

    it('Verify Title', function() 
    {
      
        cy.visit('https://demo.nopcommerce.com/')
        cy.viewport(1920, 1080)
        cy.title().should('eq', 'nopCommerce demo store')
    })
    
    it('Login', function(){
        cy.get('.ico-login').click()
        cy.viewport(1920, 1080)
        cy.get('#Email').type(this.key.email)
        cy.get('#Password').type(this.key.password)

    })
    
  })
