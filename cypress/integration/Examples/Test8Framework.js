/// <reference types="Cypress" />
import HomePage from '../PageObjects/HomePage'
import ProductsPage from '../PageObjects/ProductsPage'


describe('Cypress Framework', function() 
{
    this.beforeEach(function()
    {
        cy.fixture('example').then(function(data)
        {
            this.data=data
        })
    })
    it('Hooks', function()
    {
        cy.visit("https://rahulshettyacademy.com/angularpractice/")
        cy.get(':nth-child(1) > .form-control').type(this.data.name)
        cy.get('#exampleFormControlSelect1').select(this.data.gender)  

    })

    it('Validation', function()
    {
        cy.visit("https://rahulshettyacademy.com/angularpractice/")
        cy.get(':nth-child(1) > .form-control').type(this.data.name)
        cy.get(':nth-child(4) > .ng-untouched').should('have.value',this.data.name)
        cy.get(':nth-child(1) > .form-control').should('have.attr','minlength',2)
        cy.get('#inlineRadio3').should('be.disabled')    
    })

    it('Add to cart Validation', function()
    {
        Cypress.config('defaultCommandTimeout',8000)
        const homePage=new HomePage()
        const productsPage=new ProductsPage()
        cy.visit("https://rahulshettyacademy.com/angularpractice/")

        homePage.getEditBox().type(this.data.name)
        homePage.getGender().type(this.data.gender)
        homePage.getTwoWayDataBinding().should('have.value',this.data.name)
        homePage.getShopTab().click()

        this.data.productName.forEach(element => {
            cy.selectProducts(element)
        });
        
        productsPage.checkOutButton().click()

        cy.contains('Checkout').click()
        cy.get('#country').type('India')
        cy.get('.suggestions > ul > li > a').click()
        cy.get('#checkbox2').click({force:true})
        cy.get('input[type="submit"]').click()
        //cy.get('.alert').should('have.text','Success! Thank you! Your order will be delivered in next few weeks :-).')
        cy.get('.alert').then(function(element)
        {
            const actualText=element.text()
            expect(actualText.includes("Success")).to.be.true
        })

    })
})

//this - when we use this keyword, the variable will have access to entire file
//pause() - pause the test. used for debugging
//debug() - same as pause
