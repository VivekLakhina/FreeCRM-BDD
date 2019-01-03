package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import utils.BaseClass;

public class CreateNewContact extends BaseClass{

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
	
	public CreateNewContact(){
		PageFactory.initElements(driver,this);
	}
	
	private void switchToFrame() {
		driver.switchTo().frame("mainpanel");
	}
	
	public void createNewContact(String fName,String lName, String phone) {
		
		switchToFrame();
		firstName.sendKeys(fName);
		lastName.sendKeys(lName);
		PhNo.sendKeys(phone);
		btnSave.click();
		
		driver.switchTo().defaultContent();
	}
	
	public boolean validateContactCreated() {
		switchToFrame();
		boolean userCreationFlag=createdUserName.isDisplayed();
		driver.switchTo().defaultContent();
		return userCreationFlag;
	}
}
