Feature:  Home Page

  Background:
   Given user visits "/homePage" url

 @focus
 Scenario: 1 Item List Empty

     Then h1 tag should be visible and contain text 'To do list is currently empty. Please add new item.'
@focus
  Scenario: 2 Click on Home Page anchor tag

      When user finds Home Page anchor tag
      And user click on Home Page anchor tag
      Then url shoul be "/homePage"

 @focus
  Scenario: 3 Click on Add New List Item anchor tag

      When user finds Add New List anchor tag
      And user clicks on Add New List anchor tag
      Then url should be redirected to "/addNewItem"
  
