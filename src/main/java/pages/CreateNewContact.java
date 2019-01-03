package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import utils.BaseClass;

public class CreateNewContact extends BaseClass{

	//Find all the webelements on a webpage and create this webelement repository
	@FindBy(name="first_name")
	WebElement firstName;
	
	@FindBy(id="surname")
	WebElement lastName;
	
	@FindBy(id="phone")
	WebElement PhNo;
	
	@FindBy(xpath="//*[@name='addmore']/preceding-sibling::input[@type='submit']")
	WebElement btnSave;
	
	@FindBy(xpath="//td[@class='datafield']/preceding::td[@class='datatitle']/strong[text()='Name']")
	WebElement createdUserName;
	
	//Contructor to initialize all the WebElements using Page Factory
	public CreateNewContact(){
		PageFactory.initElements(driver,this);
	}
	
	// Wrapper/API for switching to frame
	private void switchToFrame() {
		driver.switchTo().frame("mainpanel");
	}
	
	//API to create a new contact
	public void createNewContact(String fName,String lName, String phone) {
		
		switchToFrame();
		firstName.sendKeys(fName);
		lastName.sendKeys(lName);
		PhNo.sendKeys(phone);
		btnSave.click();
		
		driver.switchTo().defaultContent();
	}
	
	//API to check the whether contact is created or not
	public boolean validateContactCreated() {
		switchToFrame();
		boolean userCreationFlag=createdUserName.isDisplayed();
		driver.switchTo().defaultContent();
		return userCreationFlag;
	}
}
