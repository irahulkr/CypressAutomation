/// <reference types="Cypress" />

describe('My Second Test Suite', function() 
{
    it('My First Test Case', function()
    {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        cy.get('.search-keyword').type('Ca');
        cy.wait(2000);

        cy.get('.products').as('productLocator');


        //Add cashews
        cy.get('@productLocator').find('.product').each(($el, index, $list) => {
            const textVeg = $el.find('h4.product-name').text();
            if(textVeg.includes('Cashews'))
            {
                cy.wrap($el).find('button').click();
            }
        })

        //Click on bag
        cy.get('.cart-icon > img').click();
        cy.contains('PROCEED TO CHECKOUT').click();
        cy.get(':nth-child(14)').click();

       
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