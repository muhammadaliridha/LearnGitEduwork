Feature: Search in Zero Bank Application

    As a valid user
    I want to search in Zero Bank Application

Scenario: search successfull
Given I open zero bank homepage
When I type "zero" in searchbox
Then I should see search result
And the search result contain text zero