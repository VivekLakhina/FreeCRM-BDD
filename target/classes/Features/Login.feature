Feature: Login to Free CRM

Scenario: Login to Free CRM-Scenario
Given User has Chrome browser opened
And user enters correct url
When Page with correct title is opened
And User enters username,password and click on submit
Then User should be able to see homePage

#Scenario Outline: Login to Free CRM-Scenario
#Given User has Chrome browser opened
#And user enters correct url
#When Page with correct title is opened
#And User enters "<uid>"
#And user enters "<pwd>"
#And User Clicks on submit
#Then User should be able to see homePage
#
#Examples:
#|uid			|pwd|
#|viveklakhina	|Dojiona@1992|
#|abc			|abc@123|