Feature: December Labs Tests
Background: Enter To the December Labs Page
  Given User open the December Labs page
  And User click on Get In Touch button

Scenario: December Labs check title
  When User see the popup click on button Send
  Then The border of fields turning red
  And The border of fields is not red if is completed