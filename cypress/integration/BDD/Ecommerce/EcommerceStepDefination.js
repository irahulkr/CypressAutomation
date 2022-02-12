import { Given,When,Then, And } from "cypress-cucumber-preprocessor/steps";

Given('I open Ecommerce Page',()=>
{
    cy.visit('https://rahulshettyacademy.com/angularpractice/')
})

When('I add items to Cart',()=>
{
    cy.visit('https://rahulshettyacademy.com/angularpractice/')
})

And('Validate the total prices',()=>
{
    cy.visit('https://rahulshettyacademy.com/angularpractice/')
})

Then('Select the country, Submit and Verify Thankyou',()=>
{
    cy.visit('https://rahulshettyacademy.com/angularpractice/')
})

//When I fill the form details
When('I fill the form details', function()
{

})

//And Validate the form behaviours
And('Validate the form behaviours', function()
{

})

//Then Select the shop Page
Then('Select the shop Page', ()=>
{

})

