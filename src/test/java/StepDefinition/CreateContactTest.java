package StepDefinition;

import org.junit.Assert;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pages.CreateNewContact;
import pages.HomePage;
import pages.LoginPage;
import utils.BaseClass;

public class CreateContactTest extends BaseClass {
	HomePage homePage;
	LoginPage loginPage;
	CreateNewContact createNewContact;

	@Before
	public void setup() {
		initialization("chrome");
		loginPage = new LoginPage();
		homePage = loginPage.loginToFreeCRM();
	}
	
	@After
	public void tearDown() {
		driver.quit();
	}

	@Given("^user is on HomePage$")
	public void user_is_on_HomePage() {
		Assert.assertTrue(homePage.validateHomePage());
	}

	@Given("^user moves to CreateContact screen$")
	public void user_moves_to_CreateContact_screen() {
		createNewContact = homePage.openNewContactScreen();
	}

	@When("^user enters \"([^\"]*)\", \"([^\"]*)\" and \"([^\"]*)\" and clicks on submit button$")
	public void user_enters_and_and_clicks_on_submit_button(String fName, String lName, String phone) {
		createNewContact.createNewContact(fName, lName, phone);
	}

	@Then("^Contact is created\\.$")
	public void contact_is_created() {

		Assert.assertTrue(createNewContact.validateContactCreated());
	}
}
