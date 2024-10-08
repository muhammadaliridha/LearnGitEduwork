Feature: Click navbar in Zero Bank Application

    As a valid user
    I want to click navbar and move to page navbar that I click

Scenario: online banking navbar successfull to click
Given I open zero bank homepage
When I click "online banking"
Then I should see online banking page

Scenario: feedback navbar successfull to click
Given I open zero bank homepage
When I click "feedback"
Then I should see feedback page

Scenario: homepage navbar successfull to click
Given I open zero bank homepage
When I click "online banking"
And I click "home"
Then I should see homepage