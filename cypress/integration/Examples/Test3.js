/// <reference types="Cypress" />

describe('My Second Test Suite', function() 
{
    it('Check box', function()
    {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')

        //Wrap(Check) all check box
        cy.get('input[type="checkbox"]').check(['option2','option3'])
        
       
    })

    it('Static Drop Down', function()
    {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.get('select').select('option2').should('have.value','option2')
       
        
       
    })
})

//Tick boxes: 
//.check()
//.uncheck()


//Static Drop Down
//Tag name will always be select
//


//.should('be.checked')                     check behaviour - be
//.should('not.be.checked')
//and                                       Multiple assettion(should) in a single line
//.should('have.value','Expected value')