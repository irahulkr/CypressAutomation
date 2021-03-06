/// <reference types="Cypress" />

describe('My first Test Suite', function() 
{
    it('My First Test Case', function()
    {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        cy.get('.search-keyword').type('Ca');
        cy.wait(2000);
        cy.get('.product:visible').should('have.length',4);

        cy.get('.products').as('productLocator');

        //Parent Child Chaining
        cy.get('@productLocator').find('.product').should('have.length',4);

        //Add to card for 2nd product
        cy.get('@productLocator').find('.product').eq(1).contains("ADD TO CART").click();

        //3rd method using loop
        cy.get('@productLocator').find('.product').each(($el, index, $list) => {
            const textVeg = $el.find('h4.product-name').text();
            if(textVeg.includes('Cashews'))
            {
                cy.wrap($el).find('button').click();
            }
        })

        //This is to print in logs
        cy.get('.brand').then(function(logoelement)
        {
            cy.log(logoelement.text());
        })

        //Assert if logo is correct
        cy.get('.brand').should('have.text','GREENKART');

    })

    it('My Second Test Suite', function()
    {

    })
})

// Fixture- Store data (Auto5.json)
//Integration - Write all test cases
//Plugins - Listeners - full screen browsers, what to do before event is happening
//Support - Reusable methods / Action file
//Videos - For test run we will have videos stored here
//Node modules - Created when we hit npn install cypress. Heart of this project
//Cypress.json - Congifuration: timeout