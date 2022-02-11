Feature: End to end Ecommerce Validation

Application Regression

@Regression
Scenario: Ecommerce Product Delivery
Given I open Ecommerce Page
When I add items to Cart
And Validate the total prices
Then Select the country, Submit and Verify Thankyou

@Smoke
Scenario: Filling the form to shop
Given I open Ecommerce Page
When I fill the form details
And Validate the form behaviours
Then Select the shop Page
