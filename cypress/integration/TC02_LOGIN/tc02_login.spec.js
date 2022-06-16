describe('My Test Suite', function(){
    it('Login-control', function() {
        //open web
        cy.visit('https://demo.nopcommerce.com')
        //ubah ukuran layar
        cy.viewport(1920, 1080)
        //Verify page
        cy.title().should('eq', 'nopCommerce demo store')
        //cari class login
        cy.get('.ico-login').click()
        //verify page
        cy.title().should('eq', 'nopCommerce demo store. Login')
    })

    it('Login-form', function(){
        cy.viewport(1920, 1080)
        cy.get('#Email').type('anakayam@mail.com')
        cy.get('#Password').type('123456789')
        cy.get('#RememberMe').click()

        //cy.get('/html/body/div[6]/div[3]/div/div/div/div[2]/div[1]/div[2]/form/div[3]/button').click()

    })
})