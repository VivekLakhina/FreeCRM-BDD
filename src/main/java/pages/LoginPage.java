package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import utils.BaseClass;

public class LoginPage extends BaseClass {

	@FindBy(name = "username")
	WebElement uid;

	@FindBy(name = "password")
	WebElement pwd;

	@FindBy(xpath = "//input[@type='submit']")
	WebElement btnSubmit;

	public LoginPage() {
		PageFactory.initElements(driver, this);
	}

	public HomePage loginToFreeCRM() {

		uid.sendKeys(prop.getProperty("userName"));
		pwd.sendKeys(prop.getProperty("password"));
		js.executeScript("arguments[0].click();", btnSubmit);

		return new HomePage();
	}

	public String getPageTitle() {
		return driver.getTitle();

	}

}
