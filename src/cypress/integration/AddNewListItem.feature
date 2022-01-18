Feature: Add New List Item

  Background:
  
  Given user visits "/addNewItem" url
  And user gets "kendo-formfield" tag and user finds "#title" in kendo-formfield tag and user types "Title" in input field
  And user gets "kendo-formfield" tag and user finds "#content" in kendo-formfield tag and user types "Content" in texarea

@focus
Scenario: 1 Return Button Clicked

  When user gets ".return-button" and clicks on it
  Then url should be "/homePage"

@focus
Scenario: 2 Submit button Clicked

  When user gets submit btn ".input-save-button" and clicks on it
  Then user should be redirected to "/homePage"

