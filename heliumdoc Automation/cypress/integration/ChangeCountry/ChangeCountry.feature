Feature: User change website country
  @e2e-test
  Scenario: User change website country
    Given User press on contry dorpdown menu
    When User choose country
    Then Check if country was changed
