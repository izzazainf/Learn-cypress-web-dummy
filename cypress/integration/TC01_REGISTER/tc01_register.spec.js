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
        cy.title().should('eq', 'nopCommerce demo store. Login')
    })
    it('Register-form', function(){
        cy.viewport(1920, 1080)
        //xpath button regist
        cy.xpath('/html/body/div[6]/div[3]/div/div/div/div[2]/div[1]/div[1]/div[3]/button').click()

        cy.title().should('eq', 'nopCommerce demo store. Register')
        //try id
        cy.get('#gender-male').click()
        cy.get('#FirstName').type('Ahmad Izza')
        cy.get('#LastName').type('Zain Firdaus')
        cy.get('[name=DateOfBirthDay]').select('5')
        cy.get('[name=DateOfBirthMonth]').select('April')
        cy.get('[name=DateOfBirthYear]').select('1995')
        cy.get('#Email').type('anakayam@mail.com')
        cy.get('#Company').type('mmaaaaa')
        cy.get('#Password').type('123456789')
        cy.get('#ConfirmPassword').type('123456789')
        //cy.get('#register-button').click()

        

    })
  })
