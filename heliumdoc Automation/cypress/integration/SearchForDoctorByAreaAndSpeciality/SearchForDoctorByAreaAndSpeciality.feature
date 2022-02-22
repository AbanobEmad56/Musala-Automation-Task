Feature: Search Heliumdoc for doctor by speciality and area
  @e2e-test
  Scenario: User search for doctor by speciality and area
 
     Given User choose speciality
     When User choose area
     Then Press search 
