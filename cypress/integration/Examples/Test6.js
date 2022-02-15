/// <reference types="Cypress" />

describe('Mouse Hover un Cypress', function() 
{
    it('Mouse Hover', function()
    {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('.mouse-hover-content').invoke('show')
        cy.contains('Top').click()
        cy.url().should('include','top')
        
    })

    it('Mouse Hover using force', function()
    {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.contains('Top').click({force:true})
        cy.url().should('include','top')
    })
})


//Cypress doesn't support Mouse Hover(hidden) automation, But this problem can be solved using jQuery's show() function
//show() - Display hidden and selected elements
//force:true  - click hidden element       