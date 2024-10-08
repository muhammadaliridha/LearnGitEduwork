Feature: Login to Application

    As a valid user
    I want to login into application

Scenario: valid login
Given I open login page
When I submit login page
Then I should see homepage