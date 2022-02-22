Feature: User search for Doctor or Clinic
  @e2e-test
  Scenario: User search for Doctor or Clinic
    Given User press on search field
    When User tybe the name
    Then User press search
