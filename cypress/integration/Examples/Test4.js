/// <reference types="Cypress" />

describe('Handle Popups, Alerts, Child Windows', function() 
{
    it('AUTO-alert', function()
    {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.get('#alertbtn').click()
        cy.get('[value="Confirm"]').click()
        
        //window:alert
        cy.on('window:alert',(str) =>
        {
            //Mocha
            //Compare two string
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })

        cy.on('window:confirm',(str) =>
        {
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })

        //Click cancel on confirmation popup
        cy.get('[value="Confirm"]').click()

        cy.on('window:confirm',()=>false);
       
    })


    it('Handling child tab', function()
    {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.get('#opentab').invoke('removeAttr','target').click()     //Remove target attribute
        cy.url().should('include','rahulshettyacademy')
        
        //Come back to original page
        cy.go('back')

        
       
    })
    
})

//Cypress auto accepts alerts and popups
//Cypress has capablity to listen for browser events 
//--window:alert is the event which get fired on alert open
//--window.confirm

//Cypress has he ability to manipulate DOM


//on is a method to trigger any event
//invoke - helps us to invoke jQuery function