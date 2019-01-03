package StepDefinition;

import org.junit.Assert;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pages.HomePage;
import pages.LoginPage;
import utils.BaseClass;

public class LoginTest extends BaseClass {

	LoginPage loginPage;
	HomePage homePage;
	@Given("^User has Chrome browser opened$")
	public void user_has_Chrome_browser_opened() {

		initialization("chrome");
		loginPage= new LoginPage();
	}

	@Given("^user enters correct url$")
	public void user_enters_correct_url() {
		
	}

	@When("^Page with correct title is opened$")
	public void page_with_correct_title_is_opened() {

		Assert.assertEquals("#1 Free CRM software in the cloud for sales and service",loginPage.getPageTitle());
	}

	@When("^User enters username,password and click on submit$")
	public void user_enters_username_password_and_click_on_submit()  {
	   homePage=loginPage.loginToFreeCRM();
	}

	@Then("^User should be able to see homePage$")
	public void user_should_be_able_to_see_homePage() {
		 Assert.assertEquals("CRMPRO",homePage.getTitle());
	}

}
