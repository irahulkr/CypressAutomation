/// <reference types="Cypress" />

describe('Handle Tables un Cypress', function() 
{
    it('Handling tables', function()
    {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('tr td:nth-child(2)').each(($e1,index,$list) =>
        {
            const text = $e1.text()
            if(text.includes('Python'))
            {
                cy.get('tr td:nth-child(2)').eq(index).next().then(function(price)    //Next in a jQuery commant so we need to resolve promise first using then
                {
                    const priceText=price.text()
                    expect(priceText).to.equal('25')
                })
            }
        })
        
    })
    
})



//tr td:nth-child(2)
//.next - goTo next sibling