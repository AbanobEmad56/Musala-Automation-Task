Feature: User click on popular specialty links
  @e2e-test
  Scenario: User click on popular specialty links
    Given User press on Specialities
    When User choose Speciality
    Then Check if Speciality is open
