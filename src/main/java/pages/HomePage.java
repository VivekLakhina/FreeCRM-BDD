package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import utils.BaseClass;

public class HomePage extends BaseClass {

	@FindBy(id = "handle_CRMBLOG")
	WebElement crmProNewsTagOnHomePage;

	@FindBy(xpath = "//div[@id='navmenu']//a[@title='Contacts']")
	WebElement contacts;

	@FindBy(xpath = "//div[@id='navmenu']//a[@title='New Contact']")
	WebElement newContact;

	public HomePage() {
		PageFactory.initElements(driver, this);
	}
	
	private void switchToFrame() {
		driver.switchTo().frame("mainpanel");
	}

	public CreateNewContact openNewContactScreen() {
		switchToFrame();
		Actions action = new Actions(driver);
		action.moveToElement(contacts).build().perform();
		action.click(newContact).build().perform();
		driver.switchTo().defaultContent();
		return new CreateNewContact();
	}

	public String getTitle() {
		return driver.getTitle();
	}

	public boolean validateHomePage() {
		switchToFrame();
		boolean displayFlag= crmProNewsTagOnHomePage.isDisplayed();
		driver.switchTo().defaultContent();
		return displayFlag;
	}
}
