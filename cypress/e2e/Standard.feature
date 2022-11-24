Feature: Testing login

A standard user login in

Scenario: A standard user log in
    Given I lounch the site
    And I insert the name
    When I click the login button
    Then I should see the products