/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />


describe('IFrame in Cypress', function() 
{
    it('IFrame', function()
    {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.frameLoaded("#courses-iframe")
        cy.iframe().find("a[href*='mentorship']").eq(0).click()
        cy.iframe().find("h1[class*='pricing-title']").should('have.length',2)
        
    })
})


//cy.iframe()  -Switch to iFrame mode    