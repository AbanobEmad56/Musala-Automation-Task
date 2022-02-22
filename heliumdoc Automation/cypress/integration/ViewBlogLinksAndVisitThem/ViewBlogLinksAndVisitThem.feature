Feature: User view blog links and visit them
  @e2e-test
  Scenario:  User view blog links and visit them
 
    Given User press on Blog Button at footer
    When User check the blogs
    Then User open any blog