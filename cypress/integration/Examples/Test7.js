/// <reference types="Cypress" />

describe('Handling Child windows using Cypress', function() 
{
    it('Get value of attribue', function()
    {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#opentab').then(function(e1)
        {
            const url=e1.prop('href')
            cy.log(url)
            cy.visit(url)
        })
        
    })
})


//Relies on jQuery to get attribute value
//prop() - Get property value      