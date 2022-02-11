/// <reference types="Cypress" />

describe('Handling Web Controls UI using Cypress', function() 
{
    it('Check box', function()
    {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')

        //Wrap(Check) all check box
        cy.get('input[type="checkbox"]').check(['option2','option3'])
        
       
    })

    it('Radio Button', function()
    {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.get('[value="radio2"]').check().should('be.checked').and('have.value','radio2')

        
       
    })

    it('Static Drop Down', function()
    {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.get('select').select('option2').should('have.value','option2')
    })

    it('Dynamic Drop Down',function()
    {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.get('#autocomplete').type('ind')
        cy.get('.ui-menu-item div').each(($e1, index, $list) => {
            
            if($e1.text()==="India")
            {
                $e1.click()
            }
        })
        
    })

    it('Handling visible and invisible item',function()
    {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')


        
        
    })
})

//Tick boxes: 
//.check()
//.uncheck()


//Static Drop Down
//Tag name will always be select
//


//.should('be.checked')                     -check behaviour - be
//.should('not.be.checked')
//and                                       -Multiple assettion(should) in a single line
//.should('have.value','Expected value')
//.should('be.visible')