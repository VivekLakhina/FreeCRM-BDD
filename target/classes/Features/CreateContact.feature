Feature: Create new contacts 

Scenario Outline: Create a new contact 
	Given user is on HomePage 
	And user moves to CreateContact screen 
	When user enters "<firstName>", "<lastName>" and "<PhNo>" and clicks on submit button 
	Then Contact is created. 
	
	Examples: 
		|firstName|lastName|PhNo|
		|vivek|kumar|1234567890|
		|akash|singh|2345678901|
		|kiran|raju|12344556567|
